import { BUSINESS_ID, BUSINESS_NAME, SITE_URL, WEBSITE_ID, idRef } from "./constants";

export function websiteEntity() {
  return {
    "@type": "WebSite",
    "@id": WEBSITE_ID,
    name: BUSINESS_NAME,
    url: SITE_URL,
    publisher: idRef(BUSINESS_ID)
  };
}
