import { SITE_URL, absoluteUrl } from "./schema/constants";

export { SITE_URL, absoluteUrl };

export const METADATA_BASE = new URL(SITE_URL);

export const DEFAULT_OG_IMAGE = "/uploads/brand/yara-luxe-social-1200x630.jpg";
export const DEFAULT_OG_ALT = "Interior designer reviewing material and colour samples";

/** Self-referencing canonical for the App Router metadata API. */
export function withCanonical(metadata, path) {
  return {
    ...metadata,
    alternates: {
      ...(metadata.alternates || {}),
      canonical: absoluteUrl(path)
    }
  };
}

function titleString(title) {
  if (!title) return undefined;
  if (typeof title === "string") return title;
  return title.absolute || title.default || undefined;
}

/**
 * Adds Open Graph + Twitter fields. Reuses the page title/description as-is.
 * Does not invent new SEO titles or descriptions.
 */
export function withSocial(metadata, path, options = {}) {
  const title = titleString(metadata.title);
  const description = metadata.description;
  const image = options.image || DEFAULT_OG_IMAGE;
  const imageAlt = options.imageAlt || DEFAULT_OG_ALT;
  const type = options.type || "website";
  const width = options.width || (image === DEFAULT_OG_IMAGE ? 1200 : undefined);
  const height = options.height || (image === DEFAULT_OG_IMAGE ? 630 : undefined);

  const ogImage = { url: image, alt: imageAlt };
  if (width) ogImage.width = width;
  if (height) ogImage.height = height;

  const openGraph = {
    ...(title ? { title } : {}),
    ...(description ? { description } : {}),
    url: absoluteUrl(path),
    siteName: "Yara Luxe Interiors",
    locale: "en_AU",
    type,
    images: [ogImage],
    ...(metadata.openGraph || {})
  };

  const twitter = {
    card: "summary_large_image",
    ...(title ? { title } : {}),
    ...(description ? { description } : {}),
    images: [image],
    ...(metadata.twitter || {})
  };

  return {
    ...metadata,
    openGraph,
    twitter
  };
}

export function withPageSeo(metadata, path, options = {}) {
  return withCanonical(withSocial(metadata, path, options), path);
}
