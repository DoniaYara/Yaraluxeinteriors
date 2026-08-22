import { getPublishedPosts, postImageSrc } from "./cms/public";
import { absoluteUrl, assetUrl } from "./schema/constants";
import { AREA_PAGES, CORE_PAGES, SERVICE_LINKS } from "./urls";
import { DEFAULT_OG_IMAGE } from "./seo";
import { SERVICE_OG_IMAGE } from "./image-alts";

const TEST_HOMEPAGE = "/test-homepage";

export async function indexablePages() {
  const core = CORE_PAGES.map((page) => ({
    url: absoluteUrl(page.path),
    path: page.path,
    type: page.path === "/" ? "home" : "core",
    name: page.name
  }));

  const services = SERVICE_LINKS.map((service) => ({
    url: absoluteUrl(service.href),
    path: service.href,
    type: "service",
    name: service.name
  }));

  const locations = AREA_PAGES.map((area) => ({
    url: absoluteUrl(area.href),
    path: area.href,
    type: "location",
    name: area.name
  }));

  const published = await getPublishedPosts();
  const posts = published.map((post) => ({
    url: absoluteUrl(`/blog/${post.slug}`),
    path: `/blog/${post.slug}`,
    type: "blog",
    name: post.title,
    lastModified: post.modified || undefined,
    image: postImageSrc(post)
  }));

  return [...core, ...services, ...locations, ...posts];
}

export async function sitemapEntries() {
  const pages = await indexablePages();
  return pages.map((page) => {
    const entry = { url: page.url };
    if (page.lastModified) entry.lastModified = page.lastModified;
    const images = sitemapImagesFor(page);
    if (images.length) entry.images = images;
    return entry;
  });
}

function sitemapImagesFor(page) {
  if (page.type === "blog" && page.image) {
    return [page.image.startsWith("http") ? page.image : assetUrl(page.image)];
  }
  if (page.type === "service" && SERVICE_OG_IMAGE[page.path]) {
    return [assetUrl(SERVICE_OG_IMAGE[page.path])];
  }
  return [assetUrl(DEFAULT_OG_IMAGE)];
}

export async function isIndexablePath(path) {
  if (!path || path === TEST_HOMEPAGE) return false;
  const pages = await indexablePages();
  return pages.some((page) => page.path === path);
}
