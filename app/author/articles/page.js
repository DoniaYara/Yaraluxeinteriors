import Link from "next/link";
import { listArticles, serializeArticle } from "@/lib/cms/articles";
import { getSessionAuthor } from "@/lib/cms/auth";

const TABS = ["all", "published", "planned", "scheduled", "draft", "trash"];

export default async function ArticlesPage({ searchParams }) {
  const sp = await searchParams;
  const status = sp.status || "all";
  const q = sp.q || "";
  const author = await getSessionAuthor();
  const rows = await listArticles({
    status,
    q,
    authorId: author.role === "admin" ? undefined : author.id
  });

  return (
    <>
      <h1>Articles</h1>
      <div className="cms-tabs">
        {TABS.map((tab) => (
          <Link key={tab} className="cms-btn ghost" href={tab === "all" ? "/author/articles" : `/author/articles?status=${tab}`}>{tab}</Link>
        ))}
        <Link className="cms-btn" href="/author/articles/new">New article</Link>
      </div>
      <form className="cms-actions" action="/author/articles">
        <input name="q" defaultValue={q} placeholder="Search title or slug" />
        {status !== "all" ? <input type="hidden" name="status" value={status} /> : null}
        <button className="cms-btn ghost" type="submit">Search</button>
      </form>
      <div className="cms-table">
        <table>
          <thead>
            <tr>
              <th>Title</th>
              <th>Slug</th>
              <th>Author</th>
              <th>Status</th>
              <th>Dates</th>
              <th></th>
            </tr>
          </thead>
          <tbody>
            {rows.map((row) => {
              const article = serializeArticle(row);
              return (
                <tr key={article.id}>
                  <td>{article.title}</td>
                  <td>{article.slug}</td>
                  <td>{article.author?.name}</td>
                  <td><span className={`cms-badge ${article.status}`}>{article.status}</span></td>
                  <td>
                    {article.intendedPublishOn ? <div>Intended {article.intendedPublishOn}</div> : null}
                    {article.publishAt ? <div>Scheduled {String(article.publishAt)}</div> : null}
                    {article.publishedAt ? <div>Published {String(article.publishedAt)}</div> : null}
                    <div>Updated {String(article.updatedAt)}</div>
                  </td>
                  <td>
                    <Link href={`/author/articles/${article.id}`}>{article.status === "planned" ? "Start writing" : "Edit"}</Link>
                    {article.status !== "trash" ? <> · <Link href={`/blog/preview/${article.slug}`}>Preview</Link></> : null}
                  </td>
                </tr>
              );
            })}
          </tbody>
        </table>
      </div>
    </>
  );
}
