/** Resolve a blog post image to a public URL (safe for client + server). */
export function postImageSrc(post) {
  const img = post?.img || post?.featuredImage || "";
  if (!img) return "/uploads/brand/yara-luxe-social-1200x630.jpg";
  if (img.startsWith("http://") || img.startsWith("https://") || img.startsWith("/")) return img;
  return `/uploads/${img}`;
}
