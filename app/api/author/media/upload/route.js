import { handleUpload } from "@vercel/blob/client";
import { NextResponse } from "next/server";
import { getSessionAuthor } from "@/lib/cms/auth";
import { originAllowed } from "@/lib/cms/csrf";
import { ALLOWED_IMAGE_TYPES, MAX_IMAGE_BYTES } from "@/lib/cms/constants";
import { blobConfigured } from "@/lib/cms/media";

export async function POST(request) {
  if (!blobConfigured()) {
    return NextResponse.json(
      { error: "Vercel Blob is not configured. Set BLOB_READ_WRITE_TOKEN in Vercel." },
      { status: 400 }
    );
  }

  const body = await request.json();

  try {
    const jsonResponse = await handleUpload({
      body,
      request,
      onBeforeGenerateToken: async () => {
        if (!originAllowed(request)) {
          throw new Error("Invalid request origin.");
        }
        const author = await getSessionAuthor();
        if (!author) {
          throw new Error("Unauthorised.");
        }
        return {
          allowedContentTypes: [...ALLOWED_IMAGE_TYPES],
          maximumSizeInBytes: MAX_IMAGE_BYTES,
          addRandomSuffix: true,
          tokenPayload: JSON.stringify({ authorId: author.id })
        };
      }
    });
    return NextResponse.json(jsonResponse);
  } catch (error) {
    return NextResponse.json(
      { error: error?.message || "Could not start upload." },
      { status: 400 }
    );
  }
}
