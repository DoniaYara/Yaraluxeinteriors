"use client";

import { useEffect, useState } from "react";
import { QUOTES } from "@/lib/data";

function shownText(t) {
  return /^[“"']/.test(t) ? t : `“${t}”`;
}

function Arrow({ dir }) {
  return (
    <svg viewBox="0 0 24 24" aria-hidden="true">
      {dir === "prev" ? (
        <path d="M15.5 5.5 9 12l6.5 6.5" fill="none" stroke="currentColor" strokeWidth="1.4" />
      ) : (
        <path d="M8.5 5.5 15 12l-6.5 6.5" fill="none" stroke="currentColor" strokeWidth="1.4" />
      )}
    </svg>
  );
}

export default function Testimonials({ items = QUOTES, className = "pad" }) {
  const [i, setI] = useState(0);
  const [vis, setVis] = useState(3);

  useEffect(() => {
    const calc = () => setVis(window.innerWidth <= 700 ? 1 : window.innerWidth <= 1024 ? 2 : 3);
    calc();
    window.addEventListener("resize", calc);
    return () => window.removeEventListener("resize", calc);
  }, []);

  useEffect(() => {
    setI(0);
  }, [items, vis]);

  const pages = Math.max(1, Math.ceil(items.length / vis));

  return (
    <section className={`ot-testimonials ${className}`}>
      <div className="container">
        <div className="quotes-head">
          <span className="ot-kicker">[ testimonials ]</span>
          <h2 className="ot-title">What People Say</h2>
        </div>
        <div className="quotes-wrap">
          <button
            type="button"
            className="quote-arrow prev"
            aria-label="Previous testimonials"
            disabled={i === 0}
            onClick={() => setI((n) => Math.max(0, n - 1))}
          >
            <Arrow dir="prev" />
          </button>
          <div className="quotes">
            <div className="quote-track" style={{ transform: `translateX(-${i * 100}%)` }}>
              {items.map(([t, n]) => (
                <article className="testi-item" key={n + t.slice(0, 24)}>
                  <div className="ttext">
                    <div className="layer-behind" />
                    <span />
                    {shownText(t)}
                  </div>
                  <div className="t-head">
                    <h6>{n}</h6>
                  </div>
                </article>
              ))}
            </div>
          </div>
          <button
            type="button"
            className="quote-arrow next"
            aria-label="Next testimonials"
            disabled={i >= pages - 1}
            onClick={() => setI((n) => Math.min(pages - 1, n + 1))}
          >
            <Arrow dir="next" />
          </button>
        </div>
        <div className="quote-nav">
          {Array.from({ length: pages }, (_, n) => (
            <button key={n} type="button" className={n === i ? "on" : ""} onClick={() => setI(n)} aria-label={`Testimonials page ${n + 1}`} />
          ))}
        </div>
      </div>
    </section>
  );
}
