/**
 * Find production image references and report missing files.
 * Run: node scripts/verify-image-refs.mjs
 */
import fs from "node:fs";
import path from "node:path";

const ROOT = "C:/Users/HUSSNAIN.COM/Desktop/yara-luxe-next";
const PUB = path.join(ROOT, "public");
const SKIP = new Set(["node_modules", ".next", "scripts"]);
const EXTS = new Set([".js", ".css", ".json", ".mjs"]);
const found = new Set();
const missing = [];
const fromFiles = [];

function walk(dir) {
  for (const entry of fs.readdirSync(dir, { withFileTypes: true })) {
    if (SKIP.has(entry.name)) continue;
    const full = path.join(dir, entry.name);
    if (entry.isDirectory()) {
      if (full.includes(`${path.sep}test-homepage`)) continue;
      walk(full);
    } else if (EXTS.has(path.extname(entry.name))) {
      scan(full);
    }
  }
}

function scan(file) {
  const text = fs.readFileSync(file, "utf8");
  const rel = path.relative(ROOT, file).split(path.sep).join("/");
  const re = /\/uploads\/[A-Za-z0-9._\-\/]+/g;
  let m;
  while ((m = re.exec(text))) {
    let p = m[0];
    p = p.replace(/["'`)}\],]+$/, "");
    if (p.endsWith(".")) continue;
    found.add(p);
    const abs = path.join(PUB, p.replace(/^\//, ""));
    if (!fs.existsSync(abs)) {
      missing.push({ file: rel, path: p });
    } else {
      fromFiles.push({ file: rel, path: p });
    }
  }
}

walk(path.join(ROOT, "app"));
walk(path.join(ROOT, "components"));
walk(path.join(ROOT, "lib"));

console.log(JSON.stringify({ uniqueRefs: found.size, missing }, null, 2));
if (missing.length) process.exitCode = 1;
