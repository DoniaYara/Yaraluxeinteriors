const fs = require("fs");
const path = require("path");

const SRC =
  "C:\\Users\\HUSSNAIN.COM\\Downloads\\Portfolio images-20260824T040800Z-1-001\\Portfolio images";
const DEST_ROOT = path.join("public", "uploads", "2026", "08", "portfolio");

function slugify(s) {
  return String(s)
    .trim()
    .toLowerCase()
    .replace(/&/g, " and ")
    .replace(/[^a-z0-9]+/g, "-")
    .replace(/^-+|-+$/g, "");
}

function isTopper(name) {
  const n = name.toLowerCase();
  return n.startsWith("topper") || n.includes("darktopper") || n.includes("dark-topper");
}

function naturalSort(a, b) {
  return a.localeCompare(b, undefined, { numeric: true, sensitivity: "base" });
}

const FOLDER_TO_TITLE = {
  "Golden Elegance": "NeoClassical Golden Elegance",
  "A pearl residence": "A Pearl Residence",
  "A Retreat by The Water": "A Retreat by The Water",
  "A Room of Ease": "A Room of Ease",
  "A Timeless French Provincial": "Timeless French Provincial",
  "Blue Reflections": "Blue Reflection",
  "Blush & Becoming": "Blush & Becoming",
  "Crystal Lullaby": "Crystal Lullaby",
  "Echoes Of Celebration": "Echoes Of Celebration",
  "Evening Light": "Evening Light",
  "French Provincial with a Touch of Glam": "French Provincial with a Touch of Glam",
  "The Framed Garden": "The Framed Garden",
  "The Quiet Chamber": "The Quiet Chamber",
  "The Thought Studio": "The Thought Studio",
  "The Velvet noir": "The Velvet Noir",
  "Tiny Kingdom": "Tiny Kingdom",
  "Whispers Of Provence": "Wispers Of Provence"
};

const folders = fs.readdirSync(SRC, { withFileTypes: true }).filter((d) => d.isDirectory());
const projects = [];

if (fs.existsSync(DEST_ROOT)) fs.rmSync(DEST_ROOT, { recursive: true, force: true });
fs.mkdirSync(DEST_ROOT, { recursive: true });

for (const dirent of folders) {
  const folderKey = dirent.name.trim();
  const title = FOLDER_TO_TITLE[folderKey] || folderKey;
  const slug = slugify(title);
  const srcDir = path.join(SRC, dirent.name);
  const destDir = path.join(DEST_ROOT, slug);
  fs.mkdirSync(destDir, { recursive: true });

  const files = fs.readdirSync(srcDir).filter((f) => /\.(jpe?g|png|webp)$/i.test(f));
  const toppers = files.filter(isTopper).sort(naturalSort);
  const gallery = files.filter((f) => !isTopper(f)).sort(naturalSort);
  const topper = toppers[0] || gallery[0];
  if (!topper) {
    console.warn("No images for", folderKey, "files:", files);
    continue;
  }

  const topperExt = path.extname(topper).toLowerCase();
  const topperDestName = "topper" + topperExt;
  fs.copyFileSync(path.join(srcDir, topper), path.join(destDir, topperDestName));

  const galleryDest = [];
  gallery.forEach((f, i) => {
    const ext = path.extname(f).toLowerCase();
    const name = String(i + 1).padStart(2, "0") + ext;
    fs.copyFileSync(path.join(srcDir, f), path.join(destDir, name));
    galleryDest.push(name);
  });

  const keep = Math.floor(galleryDest.length / 3) * 3;
  const photos = galleryDest
    .slice(0, keep)
    .map((n) => `/uploads/2026/08/portfolio/${slug}/${n}`);

  projects.push({
    slug,
    title,
    topper: `/uploads/2026/08/portfolio/${slug}/${topperDestName}`,
    galleryCount: galleryDest.length,
    shown: keep,
    photos
  });
  console.log("OK", title, "| show", keep, "of", galleryDest.length);
}

fs.writeFileSync("tmp-portfolio-import.json", JSON.stringify(projects, null, 2));
console.log("DONE", projects.length);
