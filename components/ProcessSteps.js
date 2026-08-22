"use client";

import { useState } from "react";
import ICONS from "@/lib/process-svgs.json";

const TITLES = {
  "01": "Creating a Concept",
  "02": "Budget Planning",
  "03": "Design Process",
  "04": "Building Your Dream"
};

export default function ProcessSteps() {
  const [cur, setCur] = useState(0);
  return (
    <ul className="process-nav">
      {ICONS.map((s, i) => (
        <li key={s.n} className={cur === i ? "current" : ""} onMouseEnter={() => setCur(i)}>
          <div className="icon-main">
            <span className="dcell" dangerouslySetInnerHTML={{ __html: s.svg }} />
            <span className="number-stroke">{s.n}</span>
          </div>
          <h5>{TITLES[s.n]}</h5>
        </li>
      ))}
    </ul>
  );
}
