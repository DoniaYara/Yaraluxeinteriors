import Image from "next/image";
import { IMAGE_META } from "@/lib/image-meta";

/**
 * next/image wrapper that keeps existing CSS in control of display size.
 * width/height are intrinsic only. Do not pass layout-changing inline sizes.
 */
export default function OptImage({
  src,
  alt = "",
  sizes = "100vw",
  priority = false,
  className,
  quality = 88,
  fill = false,
  width,
  height,
  style,
  loading,
  ...rest
}) {
  const key = String(src || "").replace(/\\/g, "/");
  const meta = IMAGE_META[key] || IMAGE_META[src] || {};
  const w = width || meta.width;
  const h = height || meta.height;

  if (fill) {
    return (
      <Image
        src={src}
        alt={alt}
        fill
        sizes={sizes}
        priority={priority}
        quality={quality}
        className={className}
        style={style}
        loading={loading}
        {...rest}
      />
    );
  }

  if (!w || !h) {
    return <img src={src} alt={alt} className={className} style={style} loading={loading} {...rest} />;
  }

  return (
    <Image
      src={src}
      alt={alt}
      width={w}
      height={h}
      sizes={sizes}
      priority={priority}
      quality={quality}
      className={className}
      style={style}
      loading={loading}
      {...rest}
    />
  );
}
