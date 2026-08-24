import Link from "next/link";

export default function PageHero({ title, image, crumbs, mirror = false }) {
  const heroClass = `page-hero${crumbs ? " page-hero-banner" : ""}${mirror ? " page-hero-mirror" : ""}`;
  const style = mirror
    ? { "--hero-image": `url('${image}')` }
    : { backgroundImage: `url('${image}')` };

  return (
    <div className={heroClass} style={style}>
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
