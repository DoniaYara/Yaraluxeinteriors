import fs from "node:fs";
import path from "node:path";

const sitemap = fs.readFileSync(".next/server/app/sitemap.xml.body", "utf8");
const locs = [...sitemap.matchAll(/<loc>([^<]+)<\/loc>/g)].map((m) => m[1]);
const images = [...sitemap.matchAll(/<image:loc>([^<]+)<\/image:loc>/g)].map((m) => m[1]);
console.log({
  loc: locs.length,
  unique: new Set(locs).size,
  testHomepage: locs.some((u) => u.includes("test-homepage")),
  imageTags: (sitemap.match(/<image:image>/g) || []).length,
  imageLocs: images.length
});
console.log("first3", locs.slice(0, 3));
console.log("imgSample", images.slice(0, 6));

function grab(html, re) {
  const m = html.match(re);
  return m ? m[1] : "MISSING";
}

function meta(file) {
  const html = fs.readFileSync(file, "utf8");
  return {
    file: path.basename(file),
    title: grab(html, /<title>([^<]*)<\/title>/),
    ogTitle: grab(html, /property="og:title" content="([^"]*)"/),
    ogDesc: grab(html, /property="og:description" content="([^"]*)"/),
    ogUrl: grab(html, /property="og:url" content="([^"]*)"/),
    ogImage: grab(html, /property="og:image"[^>]*content="([^"]*)"/) || grab(html, /content="([^"]*)"[^>]*property="og:image"/),
    twCard: grab(html, /name="twitter:card" content="([^"]*)"/),
    twTitle: grab(html, /name="twitter:title" content="([^"]*)"/),
    twImage: grab(html, /name="twitter:image" content="([^"]*)"/)
  };
}

const pages = [
  ".next/server/app/index.html",
  ".next/server/app/kitchen-interior-design-melbourne.html",
  ".next/server/app/interior-design-consultation-melbourne.html",
  ".next/server/app/interior-designer-toorak.html",
  ".next/server/app/interior-designer-brighton.html"
];
for (const p of pages) console.log(meta(p));

const blogDir = ".next/server/app/blog";
for (const f of fs.readdirSync(blogDir).filter((x) => x.endsWith(".html")).slice(0, 3)) {
  console.log(meta(path.join(blogDir, f)));
}
