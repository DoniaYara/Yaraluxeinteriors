/** Canonical site origin — no trailing slash. */
export const SITE_URL = "https://yaraluxeinteriors.com.au";

export const BUSINESS_ID = `${SITE_URL}/#business`;
export const PERSON_ID = `${SITE_URL}/#donia-yara`;
export const WEBSITE_ID = `${SITE_URL}/#website`;
export const HOMEPAGE_ID = `${SITE_URL}/#webpage`;

export const BUSINESS_NAME = "Yara Luxe Interiors";
export const LEGAL_NAME = "Yara Luxe Interiors Pty Ltd";
export const PHONE = "+61 433 211 875";
export const EMAIL = "Donia@YaraLuxeInteriors.com.au";
export const FOUNDER_NAME = "Donia Yara";

export const LOGO_PATH = "/uploads/brand/yara-luxe-interiors-logo.png";
export const FOUNDER_IMAGE_PATH = "/uploads/2025/07/P5-3.jpg";

export const SAME_AS = [
  "https://www.instagram.com/yara.luxe.interiors/",
  "https://www.facebook.com/yara.luxe.interiors",
  "http://linkedin.com/in/yara-luxe-interiors",
  "https://share.google/Q46oKwfOl8kXsdxSE"
];

export const POSTAL_ADDRESS = {
  "@type": "PostalAddress",
  streetAddress: "853 Nepean Hwy",
  addressLocality: "Bentleigh",
  addressRegion: "VIC",
  postalCode: "3204",
  addressCountry: "AU"
};

export const MELBOURNE = {
  "@type": "City",
  name: "Melbourne",
  containedInPlace: {
    "@type": "State",
    name: "Victoria"
  }
};

export function absoluteUrl(path = "") {
  if (!path || path === "/") return SITE_URL;
  const normalised = path.startsWith("/") ? path : `/${path}`;
  return `${SITE_URL}${normalised}`;
}

export function assetUrl(path) {
  if (!path) return undefined;
  if (path.startsWith("http://") || path.startsWith("https://")) return path;
  const normalised = path.startsWith("/") ? path : `/${path}`;
  return `${SITE_URL}${normalised}`;
}

export function idRef(id) {
  return { "@id": id };
}

export function graph(nodes) {
  return {
    "@context": "https://schema.org",
    "@graph": nodes.filter(Boolean)
  };
}
