/**
 * One-off production image optimization. Originals are kept.
 * Run: node scripts/optimize-images.mjs
 */
import fs from "node:fs";
import path from "node:path";
import sharp from "sharp";

const ROOT = "C:/Users/HUSSNAIN.COM/Desktop/yara-luxe-next";
const PUB = path.join(ROOT, "public");
const BRAND = path.join(PUB, "uploads", "brand");

function ensureDir(dir) {
  fs.mkdirSync(dir, { recursive: true });
}

function kb(file) {
  return Math.round((fs.statSync(file).size / 1024) * 10) / 10;
}

async function meta(file) {
  const m = await sharp(file).metadata();
  return { width: m.width, height: m.height, size: kb(file) };
}

async function writeIfBetter(src, dest, pipeline, { minSave = 0.08, force = false } = {}) {
  ensureDir(path.dirname(dest));
  await pipeline.toFile(dest);
  const before = fs.statSync(src).size;
  const after = fs.statSync(dest).size;
  if (!force && after > before * (1 - minSave)) {
    fs.unlinkSync(dest);
    return { skipped: true, reason: "savings-too-small", before, after };
  }
  return { skipped: false, before, after, dest };
}

const report = [];

async function run() {
  ensureDir(BRAND);

  const logoSrc = path.join(PUB, "uploads/2020/04/Main-1-copy-2-2.png");
  const logoPng = path.join(BRAND, "yara-luxe-interiors-logo.png");
  const logoWebp = path.join(BRAND, "yara-luxe-interiors-logo.webp");
  await sharp(logoSrc)
    .resize({ width: 800, withoutEnlargement: true })
    .png({ compressionLevel: 9, adaptiveFiltering: true })
    .toFile(logoPng);
  await sharp(logoSrc)
    .resize({ width: 800, withoutEnlargement: true })
    .webp({ quality: 92, alphaQuality: 100, effort: 5 })
    .toFile(logoWebp);
  const logoPngKb = kb(logoPng);
  const logoWebpKb = kb(logoWebp);
  const logoChoice = logoWebpKb < logoPngKb * 0.85 ? logoWebp : logoPng;
  report.push({
    kind: "logo",
    src: logoSrc,
    dest: logoChoice,
    before: kb(logoSrc),
    after: kb(logoChoice),
    dims: await meta(logoChoice)
  });

  // Social 1200x630 from location/full-home landscape hero.
  const socialSrc = path.join(
    PUB,
    "uploads/2026/06/Modern-Interior-Design-for-Contemporary-Homes.webp"
  );
  const socialDest = path.join(BRAND, "yara-luxe-social-1200x630.jpg");
  const socialMeta = await sharp(socialSrc).metadata();
  const targetRatio = 1200 / 630;
  const srcRatio = socialMeta.width / socialMeta.height;
  let extract;
  if (srcRatio > targetRatio) {
    const w = Math.round(socialMeta.height * targetRatio);
    extract = {
      left: Math.round((socialMeta.width - w) / 2),
      top: 0,
      width: w,
      height: socialMeta.height
    };
  } else {
    const h = Math.round(socialMeta.width / targetRatio);
    extract = {
      left: 0,
      top: Math.round((socialMeta.height - h) / 2),
      width: socialMeta.width,
      height: h
    };
  }
  await sharp(socialSrc)
    .extract(extract)
    .resize(1200, 630)
    .jpeg({ quality: 88, mozjpeg: true })
    .toFile(socialDest);
  report.push({
    kind: "social",
    src: socialSrc,
    dest: socialDest,
    before: kb(socialSrc),
    after: kb(socialDest),
    dims: await meta(socialDest)
  });

  // App icons: wordmark contained on black square (matches logo artwork).
  const iconBg = { r: 10, g: 10, b: 10, alpha: 1 };
  async function brandIcon(size, dest) {
    const mark = await sharp(logoSrc)
      .resize({ width: Math.round(size * 0.78), withoutEnlargement: true })
      .toBuffer();
    const markMeta = await sharp(mark).metadata();
    const left = Math.round((size - markMeta.width) / 2);
    const top = Math.round((size - markMeta.height) / 2);
    await sharp({
      create: { width: size, height: size, channels: 3, background: iconBg }
    })
      .composite([{ input: mark, left, top }])
      .png({ compressionLevel: 9 })
      .toFile(dest);
  }
  const icon180 = path.join(BRAND, "apple-touch-icon-180.png");
  const icon192 = path.join(BRAND, "app-icon-192.png");
  const icon512 = path.join(BRAND, "app-icon-512.png");
  await brandIcon(180, icon180);
  await brandIcon(192, icon192);
  await brandIcon(512, icon512);
  report.push({ kind: "icon", dest: icon180, after: kb(icon180), dims: await meta(icon180) });
  report.push({ kind: "icon", dest: icon192, after: kb(icon192), dims: await meta(icon192) });
  report.push({ kind: "icon", dest: icon512, after: kb(icon512), dims: await meta(icon512) });

  // CSS background JPG → same-dimension WebP
  const cssBanners = [
    ["uploads/2025/07/our-process-banner-1.jpg", "interior-design-process-banner.webp"],
    ["uploads/2025/07/about-us-2-banner-2.jpg", "blog-archive-banner.webp"],
    ["uploads/2025/07/backgroundlow-dark-light-2.jpg", "homepage-cta-background.webp"],
    ["uploads/2026/04/banner-about-us-dark-low-2-scaled-e1752707007475-1.jpg", "about-page-banner.webp"],
    ["uploads/2025/07/FAQ-banner.jpg", "faq-page-banner.webp"],
    ["uploads/2025/07/contact-us-banner-2-1.jpg", "contact-page-banner.webp"],
    ["uploads/2025/07/portfolio-banner-scaled-e1752675292889.jpg", "portfolio-page-banner.webp"]
  ];
  for (const [rel, name] of cssBanners) {
    const src = path.join(PUB, rel);
    const dest = path.join(BRAND, name);
    const r = await writeIfBetter(
      src,
      dest,
      sharp(src).webp({ quality: 86, effort: 5 }),
      { minSave: 0.1, force: true }
    );
    report.push({ kind: "banner-webp", src, ...r, dims: r.skipped ? null : await meta(dest) });
  }

  // Partner / brand logos — 2× of ~70px display ≈ 140px tall, use 280px tall for safety.
  const partnerFiles = [
    "uploads/2025/07/png-pottery-white-1-scaled.png",
    "uploads/2025/07/png-west-elm-white-scaled.png",
    "uploads/2025/07/png-provincial-white-scaled.png",
    "uploads/2025/07/png-coco-white-scaled.png",
    "uploads/2025/07/png-freedom-white-scaled.png",
    "uploads/2025/07/png-koala111white.png",
    "uploads/2025/07/adairs-w-5.png",
    "uploads/2025/07/adairs-b-4.png",
    "uploads/2025/07/png-koala111B.png",
    "uploads/2025/07/P15-3.jpg",
    "uploads/2025/07/P15-4.jpg",
    "uploads/2025/07/P15-5.jpg",
    "uploads/2025/07/P15-6.jpg",
    "uploads/2025/07/P15-7.jpg"
  ];
  const partnerDir = path.join(BRAND, "partners");
  ensureDir(partnerDir);
  for (const rel of partnerFiles) {
    const src = path.join(PUB, rel);
    const base = path.basename(rel).replace(/\.(png|jpg|jpeg)$/i, "");
    const dest = path.join(partnerDir, `${base}.png`);
    await sharp(src)
      .resize({ height: 280, withoutEnlargement: true })
      .png({ compressionLevel: 9 })
      .toFile(dest);
    report.push({
      kind: "partner",
      src,
      dest,
      before: kb(src),
      after: kb(dest),
      dims: await meta(dest)
    });
  }

  // Header drawer gallery — displayed 86px tall; 4× ≈ 344px. Use 400px tall.
  const gallery = [
    "uploads/2024/07/4-1.jpg",
    "uploads/2024/07/6-1.jpg",
    "uploads/2024/07/8-1.jpg",
    "uploads/2024/07/1-1.jpg",
    "uploads/2024/07/9.jpg",
    "uploads/2024/07/7-1.jpg",
    "uploads/2024/07/5-1.jpg",
    "uploads/2024/10/13.jpg",
    "uploads/2024/10/1.jpg"
  ];
  const galleryDir = path.join(BRAND, "gallery");
  ensureDir(galleryDir);
  for (const rel of gallery) {
    const src = path.join(PUB, rel);
    const dest = path.join(galleryDir, path.basename(rel).replace(/\.jpg$/i, ".webp"));
    await sharp(src)
      .resize({ height: 400, withoutEnlargement: true })
      .webp({ quality: 86, effort: 5 })
      .toFile(dest);
    report.push({
      kind: "gallery",
      src,
      dest,
      before: kb(src),
      after: kb(dest),
      dims: await meta(dest)
    });
  }

  // Signature overlay — displayed over a column photo; 800px wide is plenty.
  const sigSrc = path.join(PUB, "uploads/2025/07/ONLY-Donia-Yara-W-no-dot-1-scaled.png");
  const sigDest = path.join(BRAND, "donia-yara-signature.png");
  await sharp(sigSrc)
    .resize({ width: 900, withoutEnlargement: true })
    .png({ compressionLevel: 9 })
    .toFile(sigDest);
  report.push({
    kind: "signature",
    src: sigSrc,
    dest: sigDest,
    before: kb(sigSrc),
    after: kb(sigDest),
    dims: await meta(sigDest)
  });

  // Process illustration PNG
  const untitledSrc = path.join(PUB, "uploads/2025/07/Untitled-2-1.png");
  const untitledDest = path.join(BRAND, "interior-design-process-illustration.webp");
  await sharp(untitledSrc).webp({ quality: 88, effort: 5 }).toFile(untitledDest);
  report.push({
    kind: "illustration",
    src: untitledSrc,
    dest: untitledDest,
    before: kb(untitledSrc),
    after: kb(untitledDest),
    dims: await meta(untitledDest)
  });

  // Contact sheet of 2026/06 webps for alt inspection
  const juneDir = path.join(PUB, "uploads/2026/06");
  const webps = fs.readdirSync(juneDir).filter((f) => f.toLowerCase().endsWith(".webp"));
  const thumbW = 240;
  const thumbH = 160;
  const cols = 6;
  const thumbs = [];
  const labels = [];
  for (const file of webps.sort()) {
    const buf = await sharp(path.join(juneDir, file))
      .resize(thumbW, thumbH, { fit: "cover" })
      .jpeg({ quality: 70 })
      .toBuffer();
    thumbs.push(buf);
    labels.push(file);
  }
  const rows = Math.ceil(thumbs.length / cols);
  const sheetW = cols * thumbW;
  const sheetH = rows * (thumbH + 28);
  const composites = thumbs.map((input, i) => ({
    input,
    left: (i % cols) * thumbW,
    top: Math.floor(i / cols) * (thumbH + 28)
  }));
  const sheetPath = path.join(BRAND, "_alt-contact-sheet.jpg");
  await sharp({
    create: {
      width: sheetW,
      height: sheetH,
      channels: 3,
      background: { r: 20, g: 20, b: 20 }
    }
  })
    .composite(composites)
    .jpeg({ quality: 70 })
    .toFile(sheetPath);
  fs.writeFileSync(
    path.join(BRAND, "_alt-contact-sheet-index.json"),
    JSON.stringify(labels, null, 2)
  );

  fs.writeFileSync(path.join(BRAND, "_optimize-report.json"), JSON.stringify(report, null, 2));
  console.log(JSON.stringify(report, null, 2));
  console.log("contact sheet files:", labels.length);
}

run().catch((err) => {
  console.error(err);
  process.exit(1);
});
