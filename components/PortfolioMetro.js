"use client";

import { useMemo, useState } from "react";
import Link from "next/link";
import { PROJECTS, U, asProject } from "@/lib/data";
import { portfolioHref } from "@/lib/portfolio-projects";
import OptImage from "@/components/OptImage";
import { SIZES } from "@/lib/image-alts";

const FILTERS = ["All", "Decor", "Furniture", "Interior", "Exterior"];
const HOME_FILTERS = ["All", "Decor", "Exterior", "Furniture", "Interior"];

export default function PortfolioMetro({
  filters = FILTERS,
  gridClass = "projects-grid pf_5_cols style-2 w-auto",
  limit
}) {
  const [filter, setFilter] = useState("All");
  const list = useMemo(() => PROJECTS.map(asProject), []);
  const counts = useMemo(() => {
    const next = { All: list.length };
    for (const p of list) {
      for (const cat of p.cats || []) {
        next[cat] = (next[cat] || 0) + 1;
      }
    }
    return next;
  }, [list]);
  const shown = list
    .filter((p) => filter === "All" || p.cats.includes(filter))
    .slice(0, limit || list.length);

  return (
    <div className="project-filter-wrapper">
      <div className="container">
        <ul className="project_filters">
          {filters.map((c) => (
            <li key={c}>
              <a
                href="#"
                className={`btn-details${filter === c ? " selected" : ""}`}
                onClick={(e) => {
                  e.preventDefault();
                  setFilter(c);
                }}
              >
                {c}
                <span className="filter-count">{counts[c] ?? 0}</span>
              </a>
            </li>
          ))}
        </ul>
      </div>
      <div className={gridClass}>
        {shown.map((p) => {
          const href = portfolioHref(p.title);
          return (
            <div className="project-item is-clickable" key={p.title}>
              <Link href={href} className="project-item-link">
                <div className="projects-box">
                  <div className="projects-thumbnail">
                    <OptImage
                      src={`${U}/${p.thumb || p.img}`}
                      alt={p.title}
                      width={720}
                      height={720}
                      sizes={SIZES.portfolio}
                    />
                  </div>
                  <div className="portfolio-info">
                    <div className="portfolio-info-inner">
                      <h5>
                        <span className="title-link">{p.title}</span>
                      </h5>
                      <p className="portfolio-cates">
                        {p.cats.map((c) => (
                          <span key={c}>{c}</span>
                        ))}
                      </p>
                    </div>
                  </div>
                </div>
              </Link>
            </div>
          );
        })}
      </div>
    </div>
  );
}

export { HOME_FILTERS };
