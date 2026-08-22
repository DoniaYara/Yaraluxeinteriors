import Link from "next/link";
import { getPrisma } from "@/lib/cms/db";
import { articleCounts } from "@/lib/cms/articles";

export default async function AuthorHomePage() {
  const db = getPrisma();
  if (!db) {
    return <p>CMS database is not configured. Run <code>npm run cms:setup</code>.</p>;
  }
  const counts = await articleCounts();
  const upcoming = await db.article.findMany({
    where: { status: { in: ["planned", "scheduled"] } },
    include: { author: { select: { name: true } } },
    orderBy: [{ intendedPublishOn: "asc" }, { publishAt: "asc" }],
    take: 8
  });
  const scheduled = await db.article.findMany({
    where: { status: "scheduled" },
    include: { author: { select: { name: true } } },
    orderBy: { publishAt: "asc" },
    take: 8
  });
  const recent = await db.article.findMany({
    where: { status: { not: "trash" } },
    include: { author: { select: { name: true } } },
    orderBy: { updatedAt: "desc" },
    take: 8
  });

  return (
    <>
      <h1>Dashboard</h1>
      <p className="cms-lead">Editorial overview for Yara Luxe Interiors.</p>
      <div className="cms-cards">
        <div className="cms-card"><strong>{counts.total}</strong><span>Total</span></div>
        <div className="cms-card"><strong>{counts.published}</strong><span>Published</span></div>
        <div className="cms-card"><strong>{counts.planned}</strong><span>Planned</span></div>
        <div className="cms-card"><strong>{counts.scheduled}</strong><span>Scheduled</span></div>
        <div className="cms-card"><strong>{counts.drafts}</strong><span>Drafts</span></div>
      </div>
      <section className="cms-table">
        <h2>Upcoming editorial calendar</h2>
        <ArticleTable rows={upcoming} planned />
      </section>
      <section className="cms-table">
        <h2>Next scheduled articles</h2>
        <ArticleTable rows={scheduled} scheduled />
      </section>
      <section className="cms-table">
        <h2>Recent articles</h2>
        <ArticleTable rows={recent} />
      </section>
    </>
  );
}

function ArticleTable({ rows, planned, scheduled }) {
  if (!rows.length) return <p>No items.</p>;
  return (
    <table>
      <thead>
        <tr>
          <th>Title</th>
          <th>Author</th>
          <th>Status</th>
          <th>{scheduled ? "Publish at" : planned ? "Intended" : "Updated"}</th>
          <th></th>
        </tr>
      </thead>
      <tbody>
        {rows.map((row) => (
          <tr key={row.id}>
            <td>{row.title}</td>
            <td>{row.author?.name}</td>
            <td><span className={`cms-badge ${row.status}`}>{row.status}</span></td>
            <td>{scheduled ? String(row.publishAt || "") : planned ? row.intendedPublishOn || "—" : String(row.updatedAt)}</td>
            <td>
              <Link href={`/author/articles/${row.id}`}>{row.status === "planned" ? "Start writing" : "Edit"}</Link>
              {row.slug ? <> · <Link href={`/blog/preview/${row.slug}`}>Preview</Link></> : null}
            </td>
          </tr>
        ))}
      </tbody>
    </table>
  );
}
