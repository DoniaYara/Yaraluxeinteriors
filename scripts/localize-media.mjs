import fs from "fs";
import path from "path";
import { fileURLToPath } from "url";
import https from "https";
import http from "http";

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const ROOT = path.join(__dirname, "..");
const PUBLIC = path.join(ROOT, "public", "uploads");
const WP_UPLOADS = "https://yaraluxeinteriors.com.au/wp-content/uploads";

const SKIP_DIRS = new Set(["node_modules", ".next", "public"]);
const SCAN_EXT = new Set([".js", ".jsx", ".css", ".json", ".html", ".md"]);

function walk(dir, files = []) {
  for (const name of fs.readdirSync(dir)) {
    const full = path.join(dir, name);
    const stat = fs.statSync(full);
    if (stat.isDirectory()) {
      if (SKIP_DIRS.has(name)) continue;
      walk(full, files);
    } else if (SCAN_EXT.has(path.extname(name))) {
      files.push(full);
    }
  }
  return files;
}

function collectRelativePaths(content) {
  const found = new Set();
  const patterns = [
    /https:\/\/yaraluxeinteriors\.com\.au\/wp-content\/uploads\/([^\s"'`)]+)/g,
    /`\$\{U\}\/([^`]+)`/g,
    /\$\{U\}\/([^\s"'`]+)/g,
    /(?:img|src|poster|background-image:\s*url\(["']?)\/?(20\d{2}\/\d{2}\/[^"'`\s)]+)/g,
    /"img":\s*"([^"]+)"/g,
    /"thumb":\s*"([^"]+)"/g,
    /"([20]\d{3}\/\d{2}\/[^"]+\.(?:webp|jpg|jpeg|png|gif|mp4|svg))"/gi
  ];
  for (const re of patterns) {
    let m;
    while ((m = re.exec(content))) {
      let p = m[1].replace(/^\/+/, "").split("?")[0];
      if (p && !p.includes("${")) found.add(p);
    }
  }
  return found;
}

function download(url, dest) {
  return new Promise((resolve, reject) => {
    fs.mkdirSync(path.dirname(dest), { recursive: true });
    if (fs.existsSync(dest) && fs.statSync(dest).size > 0) {
      resolve("skip");
      return;
    }
    const mod = url.startsWith("https") ? https : http;
    const req = mod.get(url, { headers: { "User-Agent": "YaraLuxe-Media-Mirror/1.0" } }, (res) => {
      if (res.statusCode >= 300 && res.statusCode < 400 && res.headers.location) {
        download(res.headers.location, dest).then(resolve).catch(reject);
        return;
      }
      if (res.statusCode !== 200) {
        reject(new Error(`${url} → HTTP ${res.statusCode}`));
        return;
      }
      const file = fs.createWriteStream(dest);
      res.pipe(file);
      file.on("finish", () => file.close(() => resolve("ok")));
      file.on("error", reject);
    });
    req.on("error", reject);
    req.setTimeout(120000, () => req.destroy(new Error("timeout")));
  });
}

async function main() {
  const files = walk(ROOT);
  const relPaths = new Set();
  for (const file of files) {
    if (file.includes("scripts\\localize-media") || file.includes("scripts/localize-media")) continue;
    const content = fs.readFileSync(file, "utf8");
    for (const p of collectRelativePaths(content)) relPaths.add(p);
  }

  console.log(`Found ${relPaths.size} unique media paths`);

  const failed = [];
  let ok = 0;
  let skipped = 0;
  const sorted = [...relPaths].sort();

  for (const rel of sorted) {
    const url = `${WP_UPLOADS}/${rel}`;
    const dest = path.join(PUBLIC, rel.replace(/\//g, path.sep));
    try {
      const status = await download(url, dest);
      if (status === "skip") skipped++;
      else ok++;
      process.stdout.write(`\r${ok + skipped}/${sorted.length} (${failed.length} failed)`);
    } catch (e) {
      failed.push({ rel, error: e.message });
    }
  }

  console.log("\n\nDownload complete");
  console.log(`OK: ${ok}, Skipped: ${skipped}, Failed: ${failed.length}`);
  if (failed.length) {
    fs.writeFileSync(path.join(ROOT, "scripts", "media-download-failures.json"), JSON.stringify(failed, null, 2));
    console.log("Failures written to scripts/media-download-failures.json");
  }
}

main().catch((e) => {
  console.error(e);
  process.exit(1);
});
