import sharp from "sharp";

const [sourcePath, outputPath, scaleArg = "1", originXArg = "0.5", originYArg = "0.5"] = process.argv.slice(2);

if (!sourcePath || !outputPath) {
  throw new Error("Usage: node scripts/apply-site-amber.mjs <source> <output> [scale] [originX] [originY]");
}

const scale = Number(scaleArg);
const originX = Number(originXArg);
const originY = Number(originYArg);
const metadata = await sharp(sourcePath).metadata();
const width = metadata.width;
const height = metadata.height;

if (!width || !height || !Number.isFinite(scale) || scale < 1) {
  throw new Error("Invalid source dimensions or scale");
}

const cropWidth = Math.round(width / scale);
const cropHeight = Math.round(height / scale);
const left = Math.max(0, Math.min(width - cropWidth, Math.round(originX * width * (1 - 1 / scale))));
const top = Math.max(0, Math.min(height - cropHeight, Math.round(originY * height * (1 - 1 / scale))));

const image = await sharp(sourcePath)
  .extract({ left, top, width: cropWidth, height: cropHeight })
  .resize(width, height, { fit: "fill", kernel: sharp.kernel.lanczos3 })
  .removeAlpha()
  .raw()
  .toBuffer();

// This is the same fixed luminance-to-amber curve used by
// scripts/process-portraits.js for the site's established portraits.
// No per-photo colour, brightness, saturation, or contrast values are used.
for (let index = 0; index < image.length; index += 3) {
  const luminance = 0.2126 * image[index] + 0.7152 * image[index + 1] + 0.0722 * image[index + 2];
  const normalized = Math.max(0, Math.min(1, luminance / 255));
  image[index] = Math.round(18 + Math.pow(normalized, 0.9) * 213);
  image[index + 1] = Math.round(14 + Math.pow(normalized, 1.05) * 175);
  image[index + 2] = Math.round(9 + Math.pow(normalized, 1.25) * 127);
}

await sharp(image, { raw: { width, height, channels: 3 } })
  .sharpen({ sigma: 0.45 })
  .webp({ quality: 88 })
  .toFile(outputPath);

console.log(`Applied the site's fixed amber curve: ${width}x${height}, crop ${cropWidth}x${cropHeight} at ${left},${top}`);
