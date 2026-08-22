"use client";

import { useState } from "react";
import Link from "next/link";
import { PROJECTS, U, asProject } from "@/lib/data";

export default function PortfolioGrid({ items, link = true }) {
  const [filter, setFilter] = useState("all");
  const list = (items || PROJECTS).map(asProject);
  const cats = ["all", "Decor", "Exterior", "Furniture", "Interior"];

  return (
    <>
      <div className="filters">
        {cats.map((c) => (
          <button
            key={c}
            className={filter === c ? "active" : ""}
            onClick={() => setFilter(c)}
          >
            {c === "all" ? "All" : c}
          </button>
        ))}
      </div>
      <div className="portfolio-grid">
        {list
          .filter((p) => filter === "all" || p.cats.includes(filter))
          .map((p) => {
            const inner = (
              <>
                <img src={`${U}/${p.img}`} alt={p.title} />
                <div className="info">
                  <h5>{p.title}</h5>
                  <p>{p.cats.join(" ")}</p>
                </div>
              </>
            );
            return link ? (
              <Link className="project" href="/portfolio" key={p.title}>
                {inner}
              </Link>
            ) : (
              <article className="project" key={p.title}>
                {inner}
              </article>
            );
          })}
      </div>
    </>
  );
}
