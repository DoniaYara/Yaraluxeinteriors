import { NextResponse } from "next/server";
import { requireAuthor, jsonError } from "@/lib/cms/api";
import {
  blobConfigured,
  createMediaRecord,
  listMedia,
  storeImageFile,
  updateMediaAlt
} from "@/lib/cms/media";

function isVercelBlobUrl(url) {
  try {
    const host = new URL(url).hostname;
    // e.g. xyz.public.blob.vercel-storage.com
    return host.includes("blob.vercel-storage.com");
  } catch {
    return false;
  }
}

export async function GET(request) {
  const gate = await requireAuthor(request);
  if (gate.error) return gate.error;
  const q = new URL(request.url).searchParams.get("q") || "";
  const media = await listMedia({ q });
  return NextResponse.json({ media });
}

export async function POST(request) {
  const gate = await requireAuthor(request);
  if (gate.error) return gate.error;

  const contentType = request.headers.get("content-type") || "";

  try {
    if (contentType.includes("application/json")) {
      const body = await request.json();
      const url = String(body.url || "");
      const pathname = String(body.pathname || "");
      const filename = String(body.filename || "image");
      const mimeType = String(body.mimeType || "");
      const size = Number(body.size || 0);
      const alt = String(body.alt || "");

      if (!blobConfigured()) {
        return jsonError("Vercel Blob is not configured. Set BLOB_READ_WRITE_TOKEN.");
      }
      if (!url || !isVercelBlobUrl(url)) {
        return jsonError("Invalid blob URL.");
      }
      if (!["image/jpeg", "image/png", "image/webp", "image/gif"].includes(mimeType)) {
        return jsonError("Use a JPEG, PNG, WebP or GIF image.");
      }
      if (!Number.isFinite(size) || size <= 0 || size > 8 * 1024 * 1024) {
        return jsonError("Images must be 8 MB or smaller.");
      }

      const media = await createMediaRecord(
        { url, pathname: pathname || url, filename, mimeType, size, alt },
        gate.author
      );
      return NextResponse.json({ media });
    }

    const form = await request.formData();
    const file = form.get("file");
    const alt = String(form.get("alt") || "");
    const result = await storeImageFile(file, gate.author);
    if (result.error) return jsonError(result.error);
    if (alt) await updateMediaAlt(result.media.id, alt, gate.author);
    return NextResponse.json({ media: { ...result.media, alt: alt || result.media.alt } });
  } catch (error) {
    const message = error?.message || "Upload failed.";
    if (/FUNCTION_PAYLOAD_TOO_LARGE|too large|413/i.test(message)) {
      return jsonError(
        "Image is too large for server upload (max ~4.5 MB). Compress it or use a smaller JPEG/WebP.",
        413
      );
    }
    if (/BLOB_READ_WRITE_TOKEN|unauthorized|access denied/i.test(message)) {
      return jsonError("Blob upload failed. Check BLOB_READ_WRITE_TOKEN on Vercel.");
    }
    return jsonError(message, 500);
  }
}
