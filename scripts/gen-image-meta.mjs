/**
 * Generate lib/image-meta.js with POSIX keys for OptImage lookups.
 * Run: node scripts/gen-image-meta.mjs
 */
import fs from "node:fs";
import path from "node:path";
import sharp from "sharp";

const ROOT = "C:/Users/HUSSNAIN.COM/Desktop/yara-luxe-next";
const PUB = path.join(ROOT, "public");
const OUT = path.join(ROOT, "lib", "image-meta.js");

function walk(dir, acc = []) {
  for (const entry of fs.readdirSync(dir, { withFileTypes: true })) {
    const full = path.join(dir, entry.name);
    if (entry.isDirectory()) walk(full, acc);
    else if (/\.(jpe?g|png|webp|avif|gif)$/i.test(entry.name)) acc.push(full);
  }
  return acc;
}

const files = walk(path.join(PUB, "uploads")).sort();
const rows = [];

for (const file of files) {
  const rel = path.relative(PUB, file).split(path.sep).join("/");
  try {
    const m = await sharp(file).metadata();
    if (m.width && m.height) {
      rows.push(`  ${JSON.stringify("/" + rel)}: { width: ${m.width}, height: ${m.height} }`);
    }
  } catch {
    // skip unreadable files
  }
}

const body = `/** Auto-generated intrinsic dimensions for OptImage. */
export const IMAGE_META = {
${rows.join(",\n")}
};
`;

fs.writeFileSync(OUT, body);
console.log(`Wrote ${rows.length} entries to lib/image-meta.js`);
