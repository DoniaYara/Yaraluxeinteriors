import RAW_POSTS from "./blog-posts.json";
import { RELATED_SLUGS } from "./blog-internal-links";

/** Verified date of the internlink update. Not a build or deploy timestamp. */
export const BLOG_LAST_MODIFIED = "2026-08-21";

export const BLOG_POSTS = RAW_POSTS.map((post) => ({
  ...post,
  modified: BLOG_LAST_MODIFIED
}));

function headingText(html) {
  return String(html)
    .replace(/<[^>]+>/g, " ")
    .replace(/&amp;/g, "&")
    .replace(/&#8217;/g, "’")
    .replace(/\s+/g, " ")
    .trim();
}

function isSectionHeading(title) {
  if (!title || title.length > 90) return false;
  if (/^(final thoughts?|final thought)$/i.test(title)) return true;
  if (/^\d+\s*[.\-]\s*\S/.test(title)) return true;
  if (/^bonus layer/i.test(title)) return true;
  return false;
}

export function seoHeadings(html) {
  if (!html) return html;
  let out = html.replace(/<(strong|b)>\s*<\/\1>/gi, "");
  out = out.replace(/<h[3-6](\s[^>]*)?>/gi, "<h2$1>").replace(/<\/h[3-6]>/gi, "</h2>");
  out = out.replace(/<(h2[^>]*)>\s*<(?:strong|b)>([\s\S]*?)<\/(?:strong|b)>\s*<\/h2>/gi, "<$1>$2</h2>");
  out = out.replace(
    /<p([^>]*)>\s*<(?:strong|b)>([^<]+)<\/(?:strong|b)>\s*(?:<(?:strong|b)>\s*<\/(?:strong|b)>\s*)*<\/p>/gi,
    (m, _attrs, inner) => {
      const title = headingText(inner);
      return isSectionHeading(title) ? `<h2>${title}</h2>` : m;
    }
  );
  out = out.replace(
    /<p([^>]*)>\s*<(?:strong|b)>([^<]+)<\/(?:strong|b)>\s*<br\s*\/?>\s*([\s\S]*?)<\/p>/gi,
    (m, _attrs, title, rest) => {
      const t = headingText(title);
      if (t.length <= 70 && !/:$/.test(t) && !/[.?!]$/.test(t)) {
        return `<h2>${t}</h2><p>${rest}</p>`;
      }
      return m;
    }
  );
  return out.replace(/<h2[^>]*>\s*<\/h2>/gi, "");
}

export function postHref(post) {
  return `/blog/${post.slug}`;
}

export function postMonth(post) {
  return post.date.replace(/^(\w+) \d+, (\d{4})$/, "$1 $2");
}

export function getPost(slug) {
  return BLOG_POSTS.find((p) => p.slug === slug) || null;
}

export function filterPosts({ q = "", cat = "", tag = "", month = "" } = {}) {
  const query = q.trim().toLowerCase();
  const catQ = cat.trim().toLowerCase();
  const tagQ = tag.trim().toLowerCase();
  const monthQ = month.trim().toLowerCase();

  return BLOG_POSTS.filter((p) => {
    if (query) {
      const hay = `${p.title} ${p.excerpt} ${p.cats.join(" ")}`.toLowerCase();
      if (!hay.includes(query)) return false;
    }
    if (catQ && !p.cats.some((c) => c.toLowerCase() === catQ)) return false;
    if (tagQ && !(p.tags || []).some((t) => t.toLowerCase() === tagQ)) return false;
    if (monthQ && postMonth(p).toLowerCase() !== monthQ) return false;
    return true;
  });
}

function countBy(list, keyFn) {
  const map = new Map();
  list.forEach((item) => {
    const k = keyFn(item);
    map.set(k, (map.get(k) || 0) + 1);
  });
  return [...map.entries()].map(([name, count]) => ({ name, count }));
}

export const BLOG_CATEGORIES = countBy(
  BLOG_POSTS.flatMap((p) => p.cats),
  (c) => c
).sort((a, b) => a.name.localeCompare(b.name));

export const BLOG_TAGS = countBy(
  BLOG_POSTS.flatMap((p) => p.tags || []),
  (t) => t
).sort((a, b) => b.count - a.count);

export const BLOG_ARCHIVES = countBy(BLOG_POSTS, postMonth);

export const BLOG_RECENT = BLOG_POSTS.slice(0, 5);

export function getRelatedPosts(post, limit = 3) {
  const curated = (RELATED_SLUGS[post.slug] || [])
    .map((slug) => BLOG_POSTS.find((p) => p.slug === slug))
    .filter(Boolean);
  if (curated.length) return curated.slice(0, limit);

  return BLOG_POSTS.filter((p) => p.slug !== post.slug)
    .map((p) => ({
      p,
      score: p.cats.filter((c) => post.cats.includes(c)).length
    }))
    .filter((x) => x.score > 0)
    .sort((a, b) => b.score - a.score)
    .slice(0, limit)
    .map((x) => x.p);
}

export function shortExcerpt(post, words = 8) {
  const text = String(post.excerpt || "")
    .replace(/[.…]+$/, "")
    .trim();
  const parts = text.split(/\s+/).filter(Boolean);
  if (parts.length <= words) return text;
  return `${parts.slice(0, words).join(" ")}...`;
}

export function tagSize(count) {
  const counts = BLOG_TAGS.map((t) => t.count);
  const min = Math.min(...counts);
  const max = Math.max(...counts);
  if (max === min) return 14;
  return 13 + ((count - min) / (max - min)) * 9;
}
