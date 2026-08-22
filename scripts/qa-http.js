const origin = "http://127.0.0.1:3000";
const { readFileSync, existsSync } = await import("fs");
if (existsSync(".env")) {
  for (const line of readFileSync(".env", "utf8").split(/\r?\n/)) {
    const m = line.match(/^([^#=]+)=(.*)$/);
    if (m && !process.env[m[1].trim()]) process.env[m[1].trim()] = m[2].trim().replace(/^["']|["']$/g, "");
  }
}

async function req(path, opts = {}) {
  const headers = { Origin: origin, ...(opts.headers || {}) };
  if (opts.cookie) headers.cookie = opts.cookie;
  const res = await fetch(origin + path, { redirect: "manual", ...opts, headers });
  const text = await res.text();
  let json = null;
  try { json = JSON.parse(text); } catch {}
  return { res, text, json, cookies: res.headers.getSetCookie?.() || [] };
}

const email = process.env.AUTHOR_BOOTSTRAP_EMAIL || "donia@yaraluxeinteriors.com.au";
const password = process.env.AUTHOR_BOOTSTRAP_PASSWORD || "YaraLocalDev1!";

const loginBad = await req("/api/author/login", {
  method: "POST",
  headers: { "Content-Type": "application/json" },
  body: JSON.stringify({ email, password: "wrong-password-value" })
});
console.log("bad login", loginBad.res.status, loginBad.json);

const loginOk = await req("/api/author/login", {
  method: "POST",
  headers: { "Content-Type": "application/json" },
  body: JSON.stringify({ email: process.env.AUTHOR_BOOTSTRAP_EMAIL || email, password: process.env.AUTHOR_BOOTSTRAP_PASSWORD || password })
});
console.log("good login", loginOk.res.status, loginOk.json);
const cookie = (loginOk.res.headers.get("set-cookie") || "").split(";")[0];

const dash = await req("/author", { cookie });
console.log("dashboard", dash.res.status, dash.text.includes("Published"));

const articles = await req("/author/articles", { cookie });
console.log("articles", articles.res.status, articles.text.includes("the-foundation-of-a-good-design-layout-comes-first"));

const publicPost = await req("/blog/the-foundation-of-a-good-design-layout-comes-first");
console.log("public post", publicPost.res.status, publicPost.text.includes("Layout Comes First"));

const previewAnon = await req("/blog/preview/the-foundation-of-a-good-design-layout-comes-first");
console.log("preview anon", previewAnon.res.status);

const draftSlug = await req("/blog/does-not-exist-cms-qa");
console.log("unknown slug", draftSlug.res.status);

const sitemap = await req("/sitemap.xml");
console.log("sitemap published", sitemap.text.includes("/blog/the-foundation-of-a-good-design-layout-comes-first"));
console.log("sitemap preview excluded", !sitemap.text.includes("/blog/preview/"));
console.log("sitemap author excluded", !sitemap.text.includes("/author"));

const authorAnon = await req("/author");
console.log("author anon redirect", authorAnon.res.status, authorAnon.res.headers.get("location"));
