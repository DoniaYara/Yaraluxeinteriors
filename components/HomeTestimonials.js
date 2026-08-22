"use client";

import { useState } from "react";
import { U } from "@/lib/data";
import HOME_QUOTES from "@/lib/home-quotes.json";
import OptImage from "@/components/OptImage";
import { fileAlt, SIZES } from "@/lib/image-alts";

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

export default function HomeTestimonials({ items = HOME_QUOTES }) {
  const [i, setI] = useState(0);
  const [t, n] = items[i];

  return (
    <section className="home-quotes">
      <div className="home-quotes-grid">
        <div className="home-quotes-copy">
          <div className="ot-heading is-dots">
            <span className="ot-kicker">[ testimonials ]</span>
            <h2 className="ot-title">What Our Clients Say</h2>
          </div>
          <div className="home-quote-mark" aria-hidden="true">
            <p>“</p>
          </div>
          <div className="home-quote-slider">
            <div className="home-quote-slide" key={i}>
              <p className="home-quote-text">{t}</p>
              <h5>{n}</h5>
            </div>
            <button
              type="button"
              className="home-quote-nav next"
              aria-label="Next testimonial"
              onClick={() => setI((n) => (n + 1) % items.length)}
            >
              <Arrow dir="next" />
            </button>
            <button
              type="button"
              className="home-quote-nav prev"
              aria-label="Previous testimonial"
              onClick={() => setI((n) => (n - 1 + items.length) % items.length)}
            >
              <Arrow dir="prev" />
            </button>
          </div>
        </div>
        <div className="home-quotes-photo">
          <OptImage src={`${U}/2025/07/testimonial.jpg`} alt={fileAlt("2025/07/testimonial.jpg")} sizes={SIZES.testimonial} />
        </div>
      </div>
    </section>
  );
}
