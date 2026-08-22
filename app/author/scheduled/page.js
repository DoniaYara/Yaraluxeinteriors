import Link from "next/link";
import { getPrisma } from "@/lib/cms/db";

export default async function ScheduledPage() {
  const db = getPrisma();
  const scheduled = await db.article.findMany({
    where: { status: "scheduled" },
    include: { author: { select: { name: true } } },
    orderBy: { publishAt: "asc" }
  });
  const planned = await db.article.findMany({
    where: { status: "planned" },
    include: { author: { select: { name: true } } },
    orderBy: { intendedPublishOn: "asc" }
  });
  return (
    <>
      <h1>Editorial calendar</h1>
      <p className="cms-lead">Scheduled items auto-publish. Planned items never auto-publish.</p>
      <section className="cms-table">
        <h2>Scheduled for auto-publish</h2>
        <table>
          <thead><tr><th>Title</th><th>Author</th><th>Publish at</th><th></th></tr></thead>
          <tbody>
            {scheduled.map((row) => (
              <tr key={row.id}>
                <td>{row.title}</td>
                <td>{row.author?.name}</td>
                <td>{String(row.publishAt || "")}</td>
                <td>
                  <Link href={`/author/articles/${row.id}`}>Edit</Link> ·
                  <Link href={`/blog/preview/${row.slug}`}> Preview</Link>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
        {!scheduled.length ? <p>No scheduled articles.</p> : null}
      </section>
      <section className="cms-table">
        <h2>Planned content calendar</h2>
        <table>
          <thead><tr><th>Intended date</th><th>Title</th><th>Author</th><th></th></tr></thead>
          <tbody>
            {planned.map((row) => (
              <tr key={row.id}>
                <td>{row.intendedPublishOn || "—"}</td>
                <td>{row.title}</td>
                <td>{row.author?.name}</td>
                <td><Link href={`/author/articles/${row.id}`}>Start writing</Link></td>
              </tr>
            ))}
          </tbody>
        </table>
        {!planned.length ? <p>No planned articles.</p> : null}
      </section>
    </>
  );
}
