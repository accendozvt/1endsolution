const fs = require("fs");
const path = require("path");
const sharp = require("sharp");

const ROOT = path.resolve(__dirname, "..", "..");
const WORDMARK_PATH = path.join(ROOT, "public/images/one-end-logo-1-Copy-2.png");
const APP_DIR = path.join(ROOT, "app");
const ICONS_DIR = path.join(ROOT, "public/icons");

const BRAND_BG = "#007f70"; // matches --color-brand in app/globals.css

// Builds a square "icon" PNG: the transparent logomark centered on a solid
// brand-colored rounded-square background, sized/padded proportionally.
async function buildSquareIcon(size, { rounded = true, padRatio = 0.22 } = {}) {
  const iconCrop = await sharp(WORDMARK_PATH)
    .extract({ left: 0, top: 0, width: 450, height: 491 })
    .trim()
    .toBuffer();

  const pad = Math.round(size * padRatio);
  const markSize = size - pad * 2;
  const mark = await sharp(iconCrop)
    .resize(markSize, markSize, { fit: "contain", background: { r: 0, g: 0, b: 0, alpha: 0 } })
    .png()
    .toBuffer();

  const radius = rounded ? Math.round(size * 0.22) : 0;
  const bg = `
    <svg width="${size}" height="${size}">
      <rect width="${size}" height="${size}" rx="${radius}" fill="${BRAND_BG}" />
    </svg>`;

  return sharp(Buffer.from(bg))
    .composite([{ input: mark, top: pad, left: pad }])
    .png()
    .toBuffer();
}

// Minimal single-image .ico container wrapping a PNG payload (the modern,
// widely-supported approach — no legacy BMP encoding needed).
function pngToIco(pngBuffer, size) {
  const headerSize = 6;
  const dirEntrySize = 16;
  const dataOffset = headerSize + dirEntrySize;

  const header = Buffer.alloc(headerSize);
  header.writeUInt16LE(0, 0); // reserved
  header.writeUInt16LE(1, 2); // type: 1 = icon
  header.writeUInt16LE(1, 4); // image count

  const dirEntry = Buffer.alloc(dirEntrySize);
  dirEntry.writeUInt8(size >= 256 ? 0 : size, 0); // width (0 = 256)
  dirEntry.writeUInt8(size >= 256 ? 0 : size, 1); // height (0 = 256)
  dirEntry.writeUInt8(0, 2); // color palette
  dirEntry.writeUInt8(0, 3); // reserved
  dirEntry.writeUInt16LE(1, 4); // color planes
  dirEntry.writeUInt16LE(32, 6); // bits per pixel
  dirEntry.writeUInt32LE(pngBuffer.length, 8); // image data size
  dirEntry.writeUInt32LE(dataOffset, 12); // offset to image data

  return Buffer.concat([header, dirEntry, pngBuffer]);
}

async function main() {
  fs.mkdirSync(ICONS_DIR, { recursive: true });

  // favicon.ico — 32x32, Next's root-level convention (app/favicon.ico)
  const favicon32 = await buildSquareIcon(32, { rounded: false, padRatio: 0.14 });
  fs.writeFileSync(path.join(APP_DIR, "favicon.ico"), pngToIco(favicon32, 32));

  // icon.png — Next's `icon` convention, modern browser tab icon
  const icon48 = await buildSquareIcon(48, { rounded: false, padRatio: 0.14 });
  fs.writeFileSync(path.join(APP_DIR, "icon.png"), icon48);

  // apple-icon.png — 180x180, Next's `apple-icon` convention. Apple touch
  // icons should NOT be transparent (iOS adds its own white backing), so
  // this is opaque brand-color already via buildSquareIcon.
  const appleIcon = await buildSquareIcon(180, { rounded: false, padRatio: 0.2 });
  fs.writeFileSync(path.join(APP_DIR, "apple-icon.png"), appleIcon);

  // PWA/manifest icons — referenced by app/manifest.ts, not an app/ file
  // convention, so these live in public/.
  const icon192 = await buildSquareIcon(192, { rounded: false, padRatio: 0.18 });
  fs.writeFileSync(path.join(ICONS_DIR, "icon-192.png"), icon192);

  const icon512 = await buildSquareIcon(512, { rounded: false, padRatio: 0.18 });
  fs.writeFileSync(path.join(ICONS_DIR, "icon-512.png"), icon512);

  console.log("Generated: app/favicon.ico, app/icon.png, app/apple-icon.png, public/icons/icon-192.png, public/icons/icon-512.png");
}

main().catch((e) => {
  console.error(e);
  process.exit(1);
});
