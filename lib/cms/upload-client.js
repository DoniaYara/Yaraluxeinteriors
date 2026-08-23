"use client";

import { upload } from "@vercel/blob/client";
import { ALLOWED_IMAGE_TYPES, MAX_IMAGE_BYTES } from "@/lib/cms/constants";

function validateClientFile(file) {
  if (!file) return "Choose an image.";
  if (!ALLOWED_IMAGE_TYPES.includes(file.type)) return "Use a JPEG, PNG, WebP or GIF image.";
  if (file.size > MAX_IMAGE_BYTES) return "Images must be 8 MB or smaller.";
  return null;
}

function safePathname(file) {
  const safeName = String(file.name || "image")
    .replace(/[^\w.\-]+/g, "-")
    .toLowerCase();
  return `cms/${Date.now()}-${safeName}`;
}

async function errorFromResponse(res) {
  const data = await res.json().catch(() => ({}));
  if (data.error) return data.error;
  if (res.status === 413) {
    return "Image is too large for server upload (Vercel max ~4.5 MB). Use a smaller JPEG/WebP.";
  }
  return `Upload failed (${res.status}).`;
}

async function registerBlobMedia({ blob, file, alt }) {
  const res = await fetch("/api/author/media", {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({
      url: blob.url,
      pathname: blob.pathname,
      filename: file.name,
      mimeType: file.type,
      size: file.size,
      alt
    })
  });
  if (!res.ok) throw new Error(await errorFromResponse(res));
  const data = await res.json();
  return data.media;
}

async function uploadViaFormData(file, alt) {
  const form = new FormData();
  form.append("file", file);
  form.append("alt", alt);
  const res = await fetch("/api/author/media", { method: "POST", body: form });
  if (!res.ok) throw new Error(await errorFromResponse(res));
  const data = await res.json();
  return data.media;
}

/**
 * Prefer direct-to-Blob upload (bypasses Vercel 4.5 MB function body limit).
 * Falls back to FormData when Blob token is missing (local/dev).
 */
export async function uploadCmsImage(file, { alt = "" } = {}) {
  const problem = validateClientFile(file);
  if (problem) throw new Error(problem);

  try {
    const blob = await upload(safePathname(file), file, {
      access: "public",
      handleUploadUrl: "/api/author/media/upload",
      contentType: file.type,
      multipart: file.size > 4 * 1024 * 1024
    });
    return registerBlobMedia({ blob, file, alt });
  } catch (err) {
    const message = String(err?.message || err || "");
    const canFallback =
      /not configured|BLOB_READ_WRITE_TOKEN|No token|client token|could not start upload/i.test(message) ||
      process.env.NODE_ENV === "development";
    if (canFallback) {
      return uploadViaFormData(file, alt);
    }
    throw err instanceof Error ? err : new Error(message || "Upload failed.");
  }
}
