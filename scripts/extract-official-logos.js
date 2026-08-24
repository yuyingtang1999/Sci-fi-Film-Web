const path = require("path");
const sharp = require("sharp");

const root = path.resolve(__dirname, "..");
const source = path.join(root, "public", "logos", "ruc-official-wordmark.png");
const output = path.join(root, "public", "logos", "ruc-official-wordmark-transparent.png");

async function main() {
  // The official RUC source sheet contains several approved arrangements. Extract
  // the horizontal mark in its top-left panel without redrawing any logo element.
  const panel = await sharp(source)
    .extract({ left: 0, top: 0, width: 600, height: 300 })
    .removeAlpha()
    .raw()
    .toBuffer({ resolveWithObject: true });

  const { data, info } = panel;
  const rgba = Buffer.alloc(info.width * info.height * 4);
  let minX = info.width;
  let minY = info.height;
  let maxX = -1;
  let maxY = -1;

  for (let y = 0; y < info.height; y += 1) {
    for (let x = 0; x < info.width; x += 1) {
      const sourceIndex = (y * info.width + x) * 3;
      const targetIndex = (y * info.width + x) * 4;
      const red = data[sourceIndex];
      const green = data[sourceIndex + 1];
      const blue = data[sourceIndex + 2];
      const redDominance = red - Math.max(green, blue);
      const alpha = Math.max(0, Math.min(255, (redDominance - 3) * 12));

      rgba[targetIndex] = red;
      rgba[targetIndex + 1] = green;
      rgba[targetIndex + 2] = blue;
      rgba[targetIndex + 3] = alpha;

      if (alpha > 24) {
        minX = Math.min(minX, x);
        minY = Math.min(minY, y);
        maxX = Math.max(maxX, x);
        maxY = Math.max(maxY, y);
      }
    }
  }

  if (maxX < minX || maxY < minY) throw new Error("RUC wordmark was not detected");

  const margin = 8;
  const left = Math.max(0, minX - margin);
  const top = Math.max(0, minY - margin);
  const width = Math.min(info.width - left, maxX - minX + 1 + margin * 2);
  const height = Math.min(info.height - top, maxY - minY + 1 + margin * 2);

  await sharp(rgba, { raw: { width: info.width, height: info.height, channels: 4 } })
    .extract({ left, top, width, height })
    .png()
    .toFile(output);

  console.log(`ruc-official-wordmark-transparent.png ${width}x${height}`);
}

main().catch((error) => {
  console.error(error);
  process.exitCode = 1;
});
