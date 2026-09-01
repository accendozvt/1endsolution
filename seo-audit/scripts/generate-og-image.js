const fs = require("fs");
const path = require("path");
const sharp = require("sharp");

const ROOT = path.resolve(__dirname, "..", "..");
const WORDMARK_PATH = path.join(ROOT, "public/images/one-end-logo-1-Copy-2.png");
const OUT_DIR = path.join(ROOT, "public/assets/opengraph");

const WIDTH = 1200;
const HEIGHT = 630;
const MARGIN = 80;

async function main() {
  // The wordmark PNG has genuine alpha transparency; the standalone square
  // icon export does not (opaque white background), so crop the icon mark
  // out of the transparent wordmark instead of using the opaque asset.
  const iconBuffer = await sharp(WORDMARK_PATH)
    .extract({ left: 0, top: 0, width: 450, height: 491 })
    .trim()
    .toBuffer();
  const logoBase64 = iconBuffer.toString("base64");
  const iconMeta = await sharp(iconBuffer).metadata();
  const logoSize = 200; // rendered height on the canvas
  const logoWidth = Math.round((iconMeta.width / iconMeta.height) * logoSize);

  const svg = `
<svg width="${WIDTH}" height="${HEIGHT}" viewBox="0 0 ${WIDTH} ${HEIGHT}" xmlns="http://www.w3.org/2000/svg">
  <defs>
    <linearGradient id="bg" x1="0%" y1="0%" x2="100%" y2="100%">
      <stop offset="0%" stop-color="#00ac97" />
      <stop offset="100%" stop-color="#14261c" />
    </linearGradient>
  </defs>
  <rect width="${WIDTH}" height="${HEIGHT}" fill="url(#bg)" />

  <image x="${MARGIN}" y="${MARGIN}" width="${logoWidth}" height="${logoSize}"
    href="data:image/png;base64,${logoBase64}" />

  <text x="${MARGIN}" y="${MARGIN + logoSize + 70}"
    font-family="Segoe UI, Arial, sans-serif" font-weight="800" font-size="58" fill="#ffffff">
    One End Solution
  </text>

  <text x="${MARGIN}" y="${MARGIN + logoSize + 122}"
    font-family="Segoe UI, Arial, sans-serif" font-weight="600" font-size="30" fill="#e6fbf7">
    Best Deep Cleaning Service in Kochi
  </text>

  <rect x="${MARGIN}" y="${HEIGHT - MARGIN - 46}" width="308" height="46" rx="23" fill="#ffffff" fill-opacity="0.14" />
  <text x="${MARGIN + 24}" y="${HEIGHT - MARGIN - 15}"
    font-family="Segoe UI, Arial, sans-serif" font-weight="700" font-size="20" letter-spacing="1" fill="#ffffff">
    ON TIME FOR EVERYTHING
  </text>

  <text x="${WIDTH - MARGIN}" y="${HEIGHT - MARGIN - 15}" text-anchor="end"
    font-family="Segoe UI, Arial, sans-serif" font-weight="600" font-size="22" fill="#e6fbf7">
    1endsolution.com
  </text>
</svg>`;

  fs.mkdirSync(OUT_DIR, { recursive: true });

  const pngBuffer = await sharp(Buffer.from(svg)).resize(WIDTH, HEIGHT).png({ quality: 90 }).toBuffer();
  fs.writeFileSync(path.join(OUT_DIR, "preview.png"), pngBuffer);

  const webpBuffer = await sharp(Buffer.from(svg)).resize(WIDTH, HEIGHT).webp({ quality: 85 }).toBuffer();
  fs.writeFileSync(path.join(OUT_DIR, "preview.webp"), webpBuffer);

  const pngMeta = await sharp(pngBuffer).metadata();
  const webpMeta = await sharp(webpBuffer).metadata();

  console.log("preview.png:", pngMeta.width + "x" + pngMeta.height, (pngBuffer.length / 1024).toFixed(1) + "KB");
  console.log("preview.webp:", webpMeta.width + "x" + webpMeta.height, (webpBuffer.length / 1024).toFixed(1) + "KB");
}

main().catch((e) => {
  console.error(e);
  process.exit(1);
});
