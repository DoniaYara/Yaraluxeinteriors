"use client";

import { useEffect, useState } from "react";
import { HOME_PARTNERS, U } from "@/lib/data";
import OptImage from "@/components/OptImage";
import { fileAlt, SIZES } from "@/lib/image-alts";

export default function HomePartners() {
  const [page, setPage] = useState(0);
  const [vis, setVis] = useState(5);

  useEffect(() => {
    const calc = () => setVis(window.innerWidth <= 700 ? 3 : window.innerWidth <= 1024 ? 4 : 5);
    calc();
    window.addEventListener("resize", calc);
    return () => window.removeEventListener("resize", calc);
  }, []);

  const pages = Math.max(1, Math.ceil(HOME_PARTNERS.length / vis));
  const start = page * vis;
  const shown = Array.from({ length: vis }, (_, i) => HOME_PARTNERS[(start + i) % HOME_PARTNERS.length]);

  useEffect(() => {
    setPage(0);
  }, [vis]);

  return (
    <section className="home-partners">
      <div className="home-partners-track">
        {shown.map((src, i) => (
          <div className="home-partner" key={`${src}-${i}`}>
            <OptImage src={`${U}/${src}`} alt={fileAlt(src)} sizes={SIZES.partner} />
          </div>
        ))}
      </div>
      <div className="quote-nav">
        {Array.from({ length: pages }, (_, n) => (
          <button
            key={n}
            type="button"
            className={n === page ? "on" : ""}
            onClick={() => setPage(n)}
            aria-label={`Partners page ${n + 1}`}
          />
        ))}
      </div>
    </section>
  );
}
