import Link from "next/link";
import { postHref, shortExcerpt } from "@/lib/blog";
import { postImageSrc } from "@/lib/cms/public";
import OptImage from "@/components/OptImage";
import { blogImageAlt, SIZES } from "@/lib/image-alts";

export default function BlogCard({ post, related = false }) {
  const href = postHref(post);
  const TitleTag = related ? "h3" : "h4";
  return (
    <article className={`post-box${related ? " post-item" : ""}`}>
      <div className="post-inner">
        <div className="entry-media post-cat-abs">
          <Link href={href}>
            <OptImage src={postImageSrc(post)} alt={blogImageAlt(post)} sizes={SIZES.blogCard} />
          </Link>
          <div className="post-cat">
            <div className="posted-in">
              {post.cats.map((c) => (
                <Link key={c} href={`/blog?cat=${encodeURIComponent(c)}`}>
                  {c}
                </Link>
              ))}
            </div>
          </div>
        </div>
        <div className="inner-post">
          <div className="entry-header">
            <div className="entry-meta">
              <span className="posted-on">
                <Link href={href}>
                  <time>{post.date}</time>
                </Link>
              </span>
              <span className="byline">{post.authorName || "Donia Yara"}</span>
            </div>
            <TitleTag className="entry-title">
              <Link className="title-link" href={href}>
                {post.title}
              </Link>
            </TitleTag>
          </div>
          <div className="entry-summary the-excerpt">
            <p>{related ? shortExcerpt(post) : post.excerpt}</p>
          </div>
          {related ? null : (
            <div className="entry-footer">
              <Link href={href} className="btn-details">
                READ MORE
              </Link>
            </div>
          )}
        </div>
      </div>
    </article>
  );
}
