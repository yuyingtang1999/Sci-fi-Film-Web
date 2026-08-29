import sharp from "sharp";

const [sourcePath, outputPath, subjectHeightArg = "2350", topArg = "55", leftArg = "0"] = process.argv.slice(2);
if (!sourcePath || !outputPath) {
  throw new Error("Usage: node scripts/process-speaker-cutout.mjs <source> <output> [subjectHeight] [top] [left]");
}

const cardWidth = 1120;
const cardHeight = 1400;
const subjectHeight = Number(subjectHeightArg);
const top = Number(topArg);
const leftOffset = Number(leftArg);
const background = { r: 18, g: 14, b: 9, alpha: 1 };

const sourceMetadata = await sharp(sourcePath).metadata();
const croppedSource = sourceMetadata.width === 1024 && sourceMetadata.height === 1536
  ? await sharp(sourcePath).extract({ left: 180, top: 80, width: 760, height: 1456 }).png().toBuffer()
  : await sharp(sourcePath).png().toBuffer();
const trimmed = await sharp(croppedSource)
  .trim({ background: { r: 0, g: 0, b: 0, alpha: 0 } })
  .png()
  .toBuffer();
const metadata = await sharp(trimmed).metadata();
const subjectWidth = Math.round((metadata.width / metadata.height) * subjectHeight);
const resized = await sharp(trimmed)
  .resize(subjectWidth, subjectHeight, { fit: "fill", kernel: sharp.kernel.lanczos3 })
  .ensureAlpha()
  .raw()
  .toBuffer({ resolveWithObject: true });

for (let index = 0; index < resized.data.length; index += 4) {
  const r = resized.data[index];
  const g = resized.data[index + 1];
  const b = resized.data[index + 2];
  const normalized = Math.max(0, Math.min(1, (0.2126 * r + 0.7152 * g + 0.0722 * b) / 255));
  resized.data[index] = Math.round(18 + Math.pow(normalized, 0.9) * 213);
  resized.data[index + 1] = Math.round(14 + Math.pow(normalized, 1.05) * 175);
  resized.data[index + 2] = Math.round(9 + Math.pow(normalized, 1.25) * 127);
}

const subject = await sharp(resized.data, {
  raw: { width: resized.info.width, height: resized.info.height, channels: 4 },
}).png().toBuffer();

const left = Math.round((cardWidth - subjectWidth) / 2 + leftOffset);
const cropLeft = Math.max(0, -left);
const cropTop = Math.max(0, -top);
const visibleWidth = Math.min(subjectWidth - cropLeft, cardWidth - Math.max(0, left));
const visibleHeight = Math.min(subjectHeight - cropTop, cardHeight - Math.max(0, top));
const visibleSubject = await sharp(subject)
  .extract({ left: cropLeft, top: cropTop, width: visibleWidth, height: visibleHeight })
  .png()
  .toBuffer();

await sharp({ create: { width: cardWidth, height: cardHeight, channels: 4, background } })
  .composite([{ input: visibleSubject, left: Math.max(0, left), top: Math.max(0, top) }])
  .removeAlpha()
  .sharpen({ sigma: 0.45 })
  .webp({ quality: 88 })
  .toFile(outputPath);

console.log(`Processed cutout ${subjectWidth}x${subjectHeight} at (${left}, ${top})`);
