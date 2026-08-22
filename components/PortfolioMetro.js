"use client";

import { useState } from "react";
import Link from "next/link";
import { PROJECTS, U, asProject } from "@/lib/data";
import OptImage from "@/components/OptImage";
import { SIZES } from "@/lib/image-alts";

const FILTERS = ["All", "Decor", "Furniture", "Interior", "Exterior"];
const HOME_FILTERS = ["All", "Decor", "Exterior", "Furniture", "Interior"];

function Plus() {
  return (
    <svg className="ot-plus" viewBox="0 0 24 24" aria-hidden="true">
      <path d="M12 5v14M5 12h14" fill="none" stroke="currentColor" strokeWidth="1.4" />
    </svg>
  );
}

export default function PortfolioMetro({
  filters = FILTERS,
  gridClass = "projects-grid pf_5_cols style-2 w-auto",
  limit,
  href = "",
  overlayPlus = false
}) {
  const [filter, setFilter] = useState("All");
  const list = PROJECTS.map(asProject);
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
                <span className="filter-count" />
              </a>
            </li>
          ))}
        </ul>
      </div>
      <div className={gridClass}>
        {shown.map((p) => {
          const inner = (
            <div className="projects-box">
              <div className="projects-thumbnail">
                <OptImage src={`${U}/${p.thumb || p.img}`} alt={p.title} width={720} height={720} sizes={SIZES.portfolio} />
                {overlayPlus ? (
                  <span className="overlay">
                    <h5>{p.title}</h5>
                    <Plus />
                  </span>
                ) : null}
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
          );
          return (
            <div className="project-item" key={p.title}>
              {href ? <Link href={href}>{inner}</Link> : inner}
            </div>
          );
        })}
      </div>
    </div>
  );
}

export { HOME_FILTERS };
