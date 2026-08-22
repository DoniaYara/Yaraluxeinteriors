import { PERMALINK_REDIRECTS } from "./lib/urls.js";

/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    formats: ["image/avif", "image/webp"],
    qualities: [75, 88],
    remotePatterns: [
      { protocol: "https", hostname: "*.public.blob.vercel-storage.com" },
      { protocol: "https", hostname: "*.blob.vercel-storage.com" }
    ]
  },
  async redirects() {
    return PERMALINK_REDIRECTS;
  }
};

export default nextConfig;
