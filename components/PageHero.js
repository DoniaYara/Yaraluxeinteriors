import Link from "next/link";

export default function PageHero({ title, image, crumbs }) {
  return (
    <div
      className={`page-hero${crumbs ? " page-hero-banner" : ""}`}
      style={{ backgroundImage: `url('${image}')` }}
    >
      <div className="page-hero-inner">
        <h1>{title}</h1>
        {crumbs ? (
          <ul className="page-crumbs">
            {crumbs.map((c) => (
              <li key={c.label} className={c.href ? undefined : "active"}>
                {c.href ? <Link href={c.href}>{c.label}</Link> : c.label}
              </li>
            ))}
          </ul>
        ) : null}
      </div>
    </div>
  );
}
