"use client";

import { useState } from "react";
import { PROJECTS, U, asProject } from "@/lib/data";
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
        {shown.map((p) => (
          <div className="project-item" key={p.title}>
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
          </div>
        ))}
      </div>
    </div>
  );
}

export { HOME_FILTERS };
