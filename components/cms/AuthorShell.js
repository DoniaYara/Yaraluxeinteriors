"use client";

import Link from "next/link";
import { usePathname, useRouter } from "next/navigation";
import { useState } from "react";

const NAV = [
  { href: "/author", label: "Dashboard" },
  { href: "/author/articles", label: "All Articles" },
  { href: "/author/articles/new", label: "New Article" },
  { href: "/author/articles?status=planned", label: "Planned" },
  { href: "/author/scheduled", label: "Scheduled" },
  { href: "/author/articles?status=draft", label: "Drafts" },
  { href: "/author/articles?status=trash", label: "Trash" },
  { href: "/author/categories", label: "Categories" },
  { href: "/author/media", label: "Media" },
  { href: "/author/profile", label: "Profile" }
];

export default function AuthorShell({ author, children }) {
  const path = usePathname();
  const router = useRouter();
  const [open, setOpen] = useState(false);

  if (path === "/author/login") return children;

  async function logout() {
    await fetch("/api/author/logout", { method: "POST" });
    router.replace("/author/login");
    router.refresh();
  }

  return (
    <div className="cms-shell">
      <aside className={`cms-sidebar${open ? " is-open" : ""}`}>
        <Link href="/author" className="cms-brand" onClick={() => setOpen(false)}>
          Yara Luxe Interiors
        </Link>
        <nav>
          {NAV.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className={path === item.href.split("?")[0] && (item.href === "/author" ? path === "/author" : path.startsWith(item.href.split("?")[0])) ? "is-active" : undefined}
              onClick={() => setOpen(false)}
            >
              {item.label}
            </Link>
          ))}
          {author?.role === "admin" ? (
            <Link href="/author/authors" className={path.startsWith("/author/authors") || path.startsWith("/admin/authors") ? "is-active" : undefined} onClick={() => setOpen(false)}>
              Authors
            </Link>
          ) : null}
        </nav>
        <button type="button" className="cms-logout" onClick={logout}>Log out</button>
      </aside>
      <div className="cms-main">
        <header className="cms-top">
          <button type="button" className="cms-menu" onClick={() => setOpen((v) => !v)} aria-label="Menu">Menu</button>
          <span className="cms-user">{author?.name} · {author?.role}</span>
        </header>
        <div className="cms-content">{children}</div>
      </div>
      {open ? <button type="button" className="cms-backdrop" aria-label="Close menu" onClick={() => setOpen(false)} /> : null}
    </div>
  );
}
