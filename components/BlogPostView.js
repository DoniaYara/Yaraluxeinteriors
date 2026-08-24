import Link from "next/link";
import JsonLd from "@/components/JsonLd";
import PageHero from "@/components/PageHero";
import BlogSidebar from "@/components/BlogSidebar";
import BlogAuthor from "@/components/BlogAuthor";
import BlogCard from "@/components/BlogCard";
import { postHref, seoHeadings } from "@/lib/blog";
import { enrichBlogHtml } from "@/lib/blog-internal-links";
import { articlePageGraph } from "@/lib/schema";
import OptImage from "@/components/OptImage";
import { blogImageAlt, SIZES } from "@/lib/image-alts";
import { postImageSrc } from "@/lib/cms/public";

function PostNavItem({ post, dir }) {
  if (!post) return <div className={`post-${dir}`} />;
  return (
    <div className={`post-${dir}`}>
      <Link href={postHref(post)}>
        <div className={`thumb-post-${dir}`}>
          <OptImage src={postImageSrc(post)} alt="" sizes={SIZES.blogThumb} />
        </div>
        <div className={`info-post-${dir}`}>
          <h6>
            <span className="title-link">{post.title}</span>
          </h6>
          <span>{post.date}</span>
        </div>
      </Link>
    </div>
  );
}

export default function BlogPostView({
  post,
  related = [],
  older = null,
  newer = null,
  sidebar,
  preview = false
}) {
  return (
    <div className="blog-page">
      {!preview ? <JsonLd data={articlePageGraph(post)} /> : null}
      <PageHero
        title={preview ? `${post.title} (Preview)` : post.title}
        image={postImageSrc(post)}
        mirror
        crumbs={[
          { href: "/", label: "Home" },
          { href: "/blog", label: "Blog" },
          { label: post.title }
        ]}
      />
      <section className="blog-body">
        <div className="container blog-layout">
          <div className="content-area">
            <article className="post-box blog-post">
              <div className="post-inner">
                <div className="entry-media post-cat-abs">
                  <OptImage src={postImageSrc(post)} alt={blogImageAlt(post)} sizes={SIZES.blogFeatured} />
                  <div className="post-cat">
                    <div className="posted-in">
                      {(post.cats || []).map((c) => (
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
                        <time>{post.date}</time>
                      </span>
                      <span className="byline">{post.authorName || "Donia Yara"}</span>
                    </div>
                  </div>
                  <div
                    className="entry-summary"
                    dangerouslySetInnerHTML={{ __html: seoHeadings(enrichBlogHtml(post)) }}
                  />
                  {(post.tags || []).length ? (
                    <div className="entry-footer">
                      <div className="tagcloud">
                        {post.tags.map((t) => (
                          <Link key={t} href={`/blog?tag=${encodeURIComponent(t)}`}>
                            {t}
                          </Link>
                        ))}
                      </div>
                    </div>
                  ) : null}
                </div>
              </div>
              <BlogAuthor />
            </article>

            <div className="post-nav">
              <PostNavItem post={older} dir="prev" />
              <PostNavItem post={newer} dir="next" />
            </div>

            {related.length ? (
              <div className="related-posts">
                <h2>Related Posts</h2>
                <div className="related-grid">
                  {related.map((p) => (
                    <BlogCard key={p.id} post={p} related />
                  ))}
                </div>
              </div>
            ) : null}
          </div>
          <BlogSidebar q="" data={sidebar} />
        </div>
      </section>
    </div>
  );
}
