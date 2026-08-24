const path = require("path");
const sharp = require("sharp");

const peopleDir = path.join(__dirname, "..", "public", "images", "people");
const cardWidth = 480;
const cardHeight = 600;
const background = { r: 18, g: 14, b: 9, alpha: 1 };

// Each value describes the visible transparent subject after trimming.
// The output framing is baked into the JPG so the site does not need a
// second, browser-dependent crop or colour filter.
const portraits = {
  "zhonghua-yao": { height: 570, top: 30, left: 0, gain: 1.05 },
  "shengyi-ye": { height: 650, top: 36, left: 0, gain: 1.05 },
  "zhigang-wang": { height: 720, top: 34, left: 0, gain: 1.05 },
  "xian-xu": { height: 900, top: 32, left: 0, gain: 1 },
  "baoyang-chen": { height: 640, top: 36, left: 0, gain: 1.05 },
  "hongbo-fu": { height: 576, top: 42, left: 0, gain: 1 },
  "pan-hui": { height: 700, top: 34, left: 0, gain: 1.05 },
  "feng-gao": { height: 880, top: 12, left: -2, gain: 1.18 },
  "minghe-lan": { height: 620, top: 36, left: 55, gain: 1.05 },
  "qingyue-cai": { height: 1280, top: 12, left: 55, gain: 1.02 },
  "shangchun-teng": { height: 560, top: 30, left: 0, gain: 1.08, output: "shangchun-teng-adjusted" },
  "tianxiao-wang": { height: 800, top: 14, left: 0, gain: 1.1 },
  "yansong-chen": { height: 900, top: 22, left: 12, gain: 1.05 },
  "yuying-tang": { height: 980, top: 18, left: 45, gain: 1.08 },
  "ziqing-song": { height: 850, top: 28, left: 0, gain: 1.04 },
};

function amberPixel(r, g, b, alpha, gain = 1) {
  // Fixed luminance-to-sepia curve measured against the site's original JPGs.
  // It deliberately avoids per-photo auto-normalisation, which caused pale
  // portraits (especially Qingyue Cai) to turn yellow-green.
  const luminance = (0.2126 * r + 0.7152 * g + 0.0722 * b) * gain;
  const normalized = Math.max(0, Math.min(1, luminance / 255));
  return [
    Math.round(18 + Math.pow(normalized, 0.9) * 213),
    Math.round(14 + Math.pow(normalized, 1.05) * 175),
    Math.round(9 + Math.pow(normalized, 1.25) * 127),
    alpha,
  ];
}

async function processPortrait(name, framing) {
  const sourcePath = path.join(peopleDir, `${name}.png`);
  const outputName = framing.output || name;
  const outputPath = path.join(peopleDir, `${outputName}.jpg`);

  const trimmed = await sharp(sourcePath).trim({ background: { r: 0, g: 0, b: 0, alpha: 0 } }).png().toBuffer();
  const metadata = await sharp(trimmed).metadata();
  const width = Math.round((metadata.width / metadata.height) * framing.height);
  const resized = await sharp(trimmed)
    .resize(width, framing.height, { fit: "fill", kernel: sharp.kernel.lanczos3 })
    .ensureAlpha()
    .raw()
    .toBuffer({ resolveWithObject: true });

  for (let i = 0; i < resized.data.length; i += 4) {
    const [r, g, b, a] = amberPixel(
      resized.data[i],
      resized.data[i + 1],
      resized.data[i + 2],
      resized.data[i + 3],
      framing.gain,
    );
    resized.data[i] = r;
    resized.data[i + 1] = g;
    resized.data[i + 2] = b;
    resized.data[i + 3] = a;
  }

  const portrait = await sharp(resized.data, {
    raw: { width: resized.info.width, height: resized.info.height, channels: 4 },
  }).png().toBuffer();

  const left = Math.round((cardWidth - width) / 2 + (framing.left || 0));
  const cropLeft = Math.max(0, -left);
  const cropTop = Math.max(0, -framing.top);
  const visibleWidth = Math.min(width - cropLeft, cardWidth - Math.max(0, left));
  const visibleHeight = Math.min(framing.height - cropTop, cardHeight - Math.max(0, framing.top));
  const visiblePortrait = await sharp(portrait)
    .extract({ left: cropLeft, top: cropTop, width: visibleWidth, height: visibleHeight })
    .png()
    .toBuffer();
  await sharp({ create: { width: cardWidth, height: cardHeight, channels: 4, background } })
    .composite([{ input: visiblePortrait, left: Math.max(0, left), top: Math.max(0, framing.top) }])
    .removeAlpha()
    .sharpen({ sigma: 0.45 })
    .jpeg({ quality: 84, chromaSubsampling: "4:4:4" })
    .toFile(outputPath);

  console.log(`${outputName}.jpg  ${width}x${framing.height} at (${left}, ${framing.top})`);
}

(async () => {
  for (const [name, framing] of Object.entries(portraits)) {
    await processPortrait(name, framing);
  }
})().catch((error) => {
  console.error(error);
  process.exitCode = 1;
});
