import { SITE_URL } from "@/lib/schema/constants";

function siteOriginVariants(url) {
  try {
    const parsed = new URL(url);
    const host = parsed.hostname.replace(/^www\./i, "");
    return [
      `${parsed.protocol}//${host}`,
      `${parsed.protocol}//www.${host}`
    ];
  } catch {
    return [url];
  }
}

export function originAllowed(request) {
  const origin = request.headers.get("origin");
  const referer = request.headers.get("referer");
  const allowed = new Set([
    ...siteOriginVariants(SITE_URL),
    "http://localhost:3000",
    "http://127.0.0.1:3000"
  ]);
  if (process.env.VERCEL_URL) allowed.add(`https://${process.env.VERCEL_URL}`);
  if (process.env.VERCEL_PROJECT_PRODUCTION_URL) {
    allowed.add(`https://${process.env.VERCEL_PROJECT_PRODUCTION_URL}`);
    for (const item of siteOriginVariants(`https://${process.env.VERCEL_PROJECT_PRODUCTION_URL}`)) {
      allowed.add(item);
    }
  }
  if (origin) return [...allowed].some((item) => origin === item || origin.startsWith(`${item}/`));
  if (request.headers.get("sec-fetch-site") === "same-origin") return true;
  if (referer) return [...allowed].some((item) => referer === item || referer.startsWith(`${item}/`));
  return false;
}

export function assertSameOrigin(request) {
  if (request.method === "GET" || request.method === "HEAD") return null;
  if (!originAllowed(request)) {
    return Response.json({ error: "Invalid request origin." }, { status: 403 });
  }
  return null;
}
