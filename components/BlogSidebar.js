import Link from "next/link";
import { postHref, tagSize } from "@/lib/blog";

const SEARCH = (
  <svg viewBox="0 0 24 24" width="17" height="17" aria-hidden="true">
    <circle cx="11" cy="11" r="7" fill="none" stroke="currentColor" strokeWidth="2" />
    <path d="M16.5 16.5L21 21" fill="none" stroke="currentColor" strokeWidth="2" />
  </svg>
);

export default function BlogSidebar({ q = "", data = {} }) {
  const recent = data.recent || [];
  const categories = data.categories || [];
  const tags = data.tags || [];
  return (
    <aside className="widget-area">
      <section className="widget widget_search widget_block_search">
        <form role="search" action="/blog" className="wp-block-search">
          <label htmlFor="blog-search-top">Search</label>
          <div className="wp-block-search__inside-wrapper">
            <input id="blog-search-top" type="search" name="q" defaultValue={q} required />
            <button type="submit">Search</button>
          </div>
        </form>
      </section>

      <section className="widget">
        <h2 className="widget-title">Recent Posts</h2>
        <ul className="recent-list">
          {recent.map((p) => (
            <li key={p.slug}>
              <Link href={postHref(p)}>{p.title}</Link>
            </li>
          ))}
        </ul>
      </section>

      <section className="widget widget_search">
        <form role="search" action="/blog" className="search-form">
          <label>
            <span className="screen-reader-text">Search for:</span>
            <input type="search" className="search-field" placeholder="SEARCH..." name="q" defaultValue={q} />
          </label>
          <button type="submit" className="search-submit" aria-label="Search">
            {SEARCH}
          </button>
        </form>
      </section>

      <section className="widget widget_categories">
        <h6 className="widget-title">Categories</h6>
        <ul>
          {categories.map((c) => (
            <li key={c.name}>
              <Link href={`/blog?cat=${encodeURIComponent(c.name)}`}>{c.name}</Link>
              <span className="count">[{c.count}]</span>
            </li>
          ))}
        </ul>
      </section>

      <section className="widget widget_tag_cloud">
        <h6 className="widget-title">Tags</h6>
        <div className="tagcloud">
          {tags.map((t) => (
            <Link
              key={t.name}
              href={`/blog?tag=${encodeURIComponent(t.name)}`}
              style={{ fontSize: `${tagSize(t.count)}px` }}
            >
              {t.name}
            </Link>
          ))}
        </div>
      </section>
    </aside>
  );
}
