import { SITE_URL } from "@/lib/schema/constants";

export default function robots() {
  return {
    rules: {
      userAgent: "*",
      allow: "/",
      disallow: ["/author/", "/admin/", "/blog/preview/"]
    },
    sitemap: `${SITE_URL}/sitemap.xml`
  };
}
