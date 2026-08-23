import { del, put } from "@vercel/blob";
import { writeFile, mkdir } from "fs/promises";
import path from "path";
import { getPrisma } from "./db.js";
import { ALLOWED_IMAGE_TYPES, MAX_IMAGE_BYTES } from "./constants.js";
import { sanitizePlain } from "./sanitize.js";
import { writeAudit } from "./audit.js";

export function blobConfigured() {
  return Boolean(process.env.BLOB_READ_WRITE_TOKEN);
}

export async function listMedia({ q = "" } = {}) {
  const db = getPrisma();
  return db.media.findMany({
    where: q ? { OR: [{ filename: { contains: q, mode: "insensitive" } }, { alt: { contains: q, mode: "insensitive" } }] } : undefined,
    orderBy: { createdAt: "desc" },
    include: { author: { select: { name: true } } }
  });
}

export async function createMediaRecord(data, actor) {
  const db = getPrisma();
  const media = await db.media.create({
    data: {
      url: data.url,
      pathname: data.pathname,
      filename: data.filename,
      mimeType: data.mimeType,
      size: data.size,
      alt: sanitizePlain(data.alt, 180),
      uploadedBy: actor.id
    }
  });
  await writeAudit({ action: "media_uploaded", actorId: actor.id, targetType: "media", targetId: media.id });
  return media;
}

export async function updateMediaAlt(id, alt, actor) {
  const db = getPrisma();
  const media = await db.media.update({
    where: { id },
    data: { alt: sanitizePlain(alt, 180) }
  });
  await writeAudit({ action: "media_updated", actorId: actor.id, targetType: "media", targetId: id });
  return media;
}

export async function mediaUsage(url) {
  const db = getPrisma();
  const [featured, inline] = await Promise.all([
    db.article.count({ where: { featuredImage: url } }),
    db.article.count({ where: { content: { contains: url } } })
  ]);
  return featured + inline;
}

export async function deleteMedia(id, { confirm } = {}, actor) {
  const db = getPrisma();
  const media = await db.media.findUnique({ where: { id } });
  if (!media) return { error: "Media not found." };
  const used = await mediaUsage(media.url);
  if (used && !confirm) {
    return { error: "This image is used in articles. Confirm deletion to continue.", code: "in_use", used };
  }
  if (blobConfigured() && /blob\.vercel-storage\.com/i.test(media.url)) {
    try {
      await del(media.url, { token: process.env.BLOB_READ_WRITE_TOKEN });
    } catch (error) {
      return { error: `Could not delete Blob object: ${error.message}` };
    }
  }
  await db.media.delete({ where: { id } });
  await writeAudit({ action: "media_deleted", actorId: actor.id, targetType: "media", targetId: id });
  return { deleted: true };
}

export function validateImageFile(file) {
  if (!file) return "Choose an image.";
  if (!ALLOWED_IMAGE_TYPES.includes(file.type)) return "Use a JPEG, PNG, WebP or GIF image.";
  if (file.size > MAX_IMAGE_BYTES) return "Images must be 8 MB or smaller.";
  return null;
}

export async function storeImageFile(file, actor) {
  const problem = validateImageFile(file);
  if (problem) return { error: problem };
  const bytes = Buffer.from(await file.arrayBuffer());
  const safeName = file.name.replace(/[^\w.\-]+/g, "-").toLowerCase();
  const pathname = `cms/${Date.now()}-${safeName}`;

  if (blobConfigured()) {
    try {
      const blob = await put(pathname, bytes, {
        access: "public",
        token: process.env.BLOB_READ_WRITE_TOKEN,
        contentType: file.type
      });
      const media = await createMediaRecord({
        url: blob.url,
        pathname: blob.pathname || pathname,
        filename: file.name,
        mimeType: file.type,
        size: file.size
      }, actor);
      return { media };
    } catch (error) {
      return {
        error:
          error?.message ||
          "Blob upload failed. Check BLOB_READ_WRITE_TOKEN on Vercel."
      };
    }
  }

  if (process.env.NODE_ENV === "production") {
    return { error: "Vercel Blob is not configured. Set BLOB_READ_WRITE_TOKEN." };
  }

  const dir = path.join(process.cwd(), "public", "uploads", "cms");
  await mkdir(dir, { recursive: true });
  const filename = pathname.split("/")[1];
  await writeFile(path.join(dir, filename), bytes);
  const media = await createMediaRecord({
    url: `/uploads/cms/${filename}`,
    pathname,
    filename: file.name,
    mimeType: file.type,
    size: file.size
  }, actor);
  return { media };
}
