import JsonLd from "@/components/JsonLd";
import PageHero from "@/components/PageHero";
import BlogCard from "@/components/BlogCard";
import BlogSidebar from "@/components/BlogSidebar";
import { BLOG_BANNER } from "@/lib/data";
import { filterPublishedPosts, getSidebarData } from "@/lib/cms/public";
import { blogIndexGraph } from "@/lib/schema";
import { withPageSeo } from "@/lib/seo";

export const revalidate = 60;
export const metadata = withPageSeo({ title: "Blog – Yara Luxe Interiors" }, "/blog");

export default async function BlogPage({ searchParams }) {
  const sp = await searchParams;
  const q = sp.q || "";
  const cat = sp.cat || "";
  const tag = sp.tag || "";
  const month = sp.month || "";
  const posts = await filterPublishedPosts({ q, cat, tag, month });
  const sidebar = await getSidebarData();

  return (
    <div className="blog-page">
      <JsonLd data={blogIndexGraph(posts)} />
      <PageHero
        title="Blog"
        image={BLOG_BANNER}
        crumbs={[
          { href: "/", label: "Home" },
          { label: "Blog" }
        ]}
      />
      <section className="blog-body">
        <div className="container blog-layout">
          <div className="content-area">
            <div className="blog-grid pf_2_cols">
              {posts.map((post) => (
                <BlogCard key={post.id} post={post} />
              ))}
            </div>
          </div>
          <BlogSidebar q={q} data={sidebar} />
        </div>
      </section>
    </div>
  );
}
