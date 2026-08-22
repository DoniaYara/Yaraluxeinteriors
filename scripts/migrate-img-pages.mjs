/**
 * Replace production <img> tags with OptImage + fileAlt, and wrap metadata with withPageSeo.
 * Does not touch test-homepage.
 * Run: node scripts/migrate-img-pages.mjs
 */
import fs from "node:fs";
import path from "node:path";

const ROOT = "C:/Users/HUSSNAIN.COM/Desktop/yara-luxe-next";
const APP = path.join(ROOT, "app");
const altLog = [];

function walk(dir, acc = []) {
  for (const entry of fs.readdirSync(dir, { withFileTypes: true })) {
    const full = path.join(dir, entry.name);
    if (entry.isDirectory()) {
      if (entry.name === "test-homepage") continue;
      walk(full, acc);
    } else if (entry.name === "page.js") acc.push(full);
  }
  return acc;
}

function pagePathFromFile(file) {
  const rel = path.relative(APP, file).split(path.sep).join("/");
  if (rel === "page.js") return "/";
  return "/" + rel.replace(/\/page\.js$/, "");
}

function ensureImport(src, stmt) {
  if (src.includes(stmt)) return src;
  const from = stmt.match(/from "([^"]+)"/)[1];
  if (src.includes(`from "${from}"`)) {
    // merge named imports if possible
    if (stmt.includes("{")) {
      const names = stmt.match(/\{([^}]+)\}/)[1].split(",").map((s) => s.trim());
      src = src.replace(new RegExp(`import \\{([^}]+)\\} from "${from.replace(/[.*+?^${}()|[\]\\]/g, "\\$&")}"`), (m, existing) => {
        const have = existing.split(",").map((s) => s.trim());
        const extra = names.filter((n) => !have.includes(n));
        if (!extra.length) return m;
        return `import { ${[...have, ...extra].join(", ")} } from "${from}"`;
      });
      if (src.includes(names[0]) && src.includes(`from "${from}"`)) return src;
    }
  }
  const lines = src.split("\n");
  let lastImport = -1;
  for (let i = 0; i < lines.length; i++) {
    if (lines[i].startsWith("import ")) lastImport = i;
  }
  if (lastImport >= 0) {
    lines.splice(lastImport + 1, 0, stmt);
    return lines.join("\n");
  }
  return stmt + "\n" + src;
}

function replaceImgs(content, file) {
  return content.replace(/<img\b[^>]*\/>/g, (tag, offset) => {
    const around = content.slice(Math.max(0, offset - 120), offset + tag.length + 20);
    const srcMatch = tag.match(/src=\{`\$\{U\}\/([^`]+)`\}/);
    if (!srcMatch) return tag;
    const filePath = srcMatch[1];
    const classMatch = tag.match(/className="([^"]+)"/);
    const altAttr = tag.match(/alt=\{([^}]+)\}/) || tag.match(/alt="([^"]*)"/);
    const oldAlt = altAttr ? altAttr[1] : "";
    const sizes = around.includes("gallery-strip-item")
      ? "SIZES.galleryStrip"
      : around.includes("home-about") || classMatch?.[1] === "main"
        ? "SIZES.aboutPhoto"
        : around.includes("feature")
          ? "SIZES.feature"
          : "SIZES.contentCol";
    const className = classMatch ? ` className="${classMatch[1]}"` : "";
    const decorativeEmpty = oldAlt === '""' || oldAlt === "";
    const keepEmpty = decorativeEmpty && around.includes("thumb-post");
    const altExpr = keepEmpty ? '""' : `fileAlt("${filePath}")`;
    altLog.push({
      file: path.relative(ROOT, file).split(path.sep).join("/"),
      image: filePath,
      oldAlt: oldAlt.replace(/^["']|["']$/g, ""),
      sizes
    });
    return `<OptImage${className} src={\`\${U}/${filePath}\`} alt={${altExpr}} sizes={${sizes}} />`;
  });
}

function wrapMetadata(content, route) {
  if (content.includes("withPageSeo(")) return content;
  if (content.includes("generateMetadata")) return content;

  if (content.includes("withCanonical(")) {
    content = content.replace(/withCanonical/g, "withPageSeo");
    content = content.replace(
      /import \{ withCanonical \} from "@\/lib\/seo";/,
      'import { withPageSeo } from "@/lib/seo";'
    );
    content = content.replace(
      /import \{ withPageSeo \} from "@\/lib\/seo";/,
      'import { withPageSeo } from "@/lib/seo";'
    );
  }

  const metaRe = /export const metadata = \{([\s\S]*?)\n\};/;
  if (metaRe.test(content) && !content.includes("withPageSeo(")) {
    content = content.replace(metaRe, (m, body) => {
      const isService = route.includes("melbourne") && !route.includes("interior-designer");
      const extra = isService
        ? `, { image: SERVICE_OG_IMAGE["${route}"], imageAlt: fileAlt(SERVICE_OG_IMAGE["${route}"]) }`
        : "";
      return `export const metadata = withPageSeo({${body}\n}, "${route}"${extra});`;
    });
  }

  if (content.includes("withPageSeo(") && !content.includes('from "@/lib/seo"')) {
    content = ensureImport(content, 'import { withPageSeo } from "@/lib/seo";');
  }
  if (content.includes("SERVICE_OG_IMAGE") && !content.includes("SERVICE_OG_IMAGE") === false) {
    // noop
  }
  if (content.includes("SERVICE_OG_IMAGE[")) {
    content = ensureImport(content, 'import { SERVICE_OG_IMAGE, fileAlt } from "@/lib/image-alts";');
  }
  return content;
}

const files = walk(APP);
let changed = 0;
for (const file of files) {
  const route = pagePathFromFile(file);
  let src = fs.readFileSync(file, "utf8");
  const before = src;
  src = replaceImgs(src, file);
  src = wrapMetadata(src, route);
  if (src.includes("<OptImage") && !src.includes('from "@/components/OptImage"')) {
    src = ensureImport(src, 'import OptImage from "@/components/OptImage";');
  }
  if (src.includes("fileAlt(") && !src.includes("fileAlt")) {
    src = ensureImport(src, 'import { fileAlt, SIZES } from "@/lib/image-alts";');
  }
  if (src.includes("fileAlt(") || src.includes("SIZES.")) {
    src = ensureImport(src, 'import { fileAlt, SIZES } from "@/lib/image-alts";');
  }
  if (src.includes("SERVICE_OG_IMAGE")) {
    src = ensureImport(src, 'import { SERVICE_OG_IMAGE } from "@/lib/image-alts";');
  }
  // Deduplicate image-alts imports
  const alts = [];
  src = src.replace(/import \{([^}]+)\} from "@\/lib\/image-alts";\n/g, (m, names) => {
    names.split(",").forEach((n) => {
      const t = n.trim();
      if (t && !alts.includes(t)) alts.push(t);
    });
    return "";
  });
  if (alts.length) {
    src = ensureImport(src, `import { ${alts.join(", ")} } from "@/lib/image-alts";`);
  }
  if (src !== before) {
    fs.writeFileSync(file, src);
    changed++;
    console.log("updated", path.relative(ROOT, file));
  }
}

fs.writeFileSync(
  path.join(ROOT, "scripts", "_alt-migration-log.json"),
  JSON.stringify(altLog, null, 2)
);
console.log(`Changed ${changed} pages, logged ${altLog.length} image tags`);
