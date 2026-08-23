"use client";

import { useEffect, useState } from "react";
import {
  GOOGLE_GBP_URL,
  GOOGLE_REVIEW_SUMMARY,
  GOOGLE_REVIEWS,
  reviewerInitials
} from "@/lib/google-reviews";

function Stars({ rating }) {
  const value = Number(rating) || 0;
  return (
    <>
      <span className="ggl-stars" aria-hidden="true">
        {Array.from({ length: 5 }, (_, i) => (
          <span key={i} className={i < value ? "on" : ""}>
            ★
          </span>
        ))}
      </span>
      <span className="sr-only">{`${value} out of 5 stars`}</span>
    </>
  );
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

export default function HomeGoogleReviews() {
  const items = GOOGLE_REVIEWS;
  const [i, setI] = useState(0);
  const [vis, setVis] = useState(3);
  const [expanded, setExpanded] = useState({});

  useEffect(() => {
    const calc = () => setVis(window.innerWidth <= 700 ? 1 : window.innerWidth <= 1024 ? 2 : 3);
    calc();
    window.addEventListener("resize", calc);
    return () => window.removeEventListener("resize", calc);
  }, []);

  useEffect(() => {
    setI(0);
  }, [vis]);

  const pages = Math.max(1, Math.ceil(items.length / vis));
  const { rating, reviewCount } = GOOGLE_REVIEW_SUMMARY;

  return (
    <section className="home-google-reviews" id="google-reviews" aria-labelledby="google-reviews-heading">
      <div className="container">
        <div className="ot-heading is-dots home-ggl-head">
          <span className="ot-kicker">[ client reviews ]</span>
          <h2 className="ot-title" id="google-reviews-heading">
            What Our Clients Say on Google
          </h2>
        </div>
        <p className="home-ggl-intro">Read feedback shared by our clients on Google.</p>

        <div className="home-ggl-summary">
          <div className="home-ggl-summary-main">
            <span className="home-ggl-source-label">Google</span>
            <div className="home-ggl-score">
              <strong>{rating.toFixed(1)}</strong>
              <Stars rating={rating} />
            </div>
            <p className="home-ggl-count">
              Based on {reviewCount} Google reviews
            </p>
          </div>
          <a
            className="octf-btn octf-btn-dark home-ggl-all"
            href={GOOGLE_GBP_URL}
            target="_blank"
            rel="noopener noreferrer"
          >
            View All Google Reviews
          </a>
        </div>

        <div className="home-ggl-wrap">
          <button
            type="button"
            className="home-ggl-arrow prev"
            aria-label="Previous Google reviews"
            disabled={i === 0}
            onClick={() => setI((n) => Math.max(0, n - 1))}
          >
            <Arrow dir="prev" />
          </button>

          <div className="home-ggl-viewport">
            <div
              className="home-ggl-track"
              style={{
                transform: `translateX(-${i * 100}%)`,
                ["--ggl-vis"]: String(vis)
              }}
            >
              {items.map((review) => {
                const key = review.reviewerName + (review.reviewDate || "");
                const long = (review.reviewExcerpt || "").length > 180;
                const open = !!expanded[key];
                const text = review.reviewExcerpt
                  ? long && !open
                    ? `${review.reviewExcerpt.slice(0, 170).trim()}…`
                    : review.reviewExcerpt
                  : null;

                return (
                  <article className="home-ggl-card" key={key}>
                    <div className="home-ggl-card-top">
                      <span className="home-ggl-avatar" aria-hidden="true">
                        {reviewerInitials(review.reviewerName)}
                      </span>
                      <div>
                        <h3 className="home-ggl-name">{review.reviewerName}</h3>
                        <Stars rating={review.rating} />
                      </div>
                    </div>

                    {text ? (
                      <blockquote className="home-ggl-quote">
                        <p>“{text}”</p>
                        {long ? (
                          <button
                            type="button"
                            className="home-ggl-more"
                            onClick={() =>
                              setExpanded((prev) => ({ ...prev, [key]: !prev[key] }))
                            }
                          >
                            {open ? "Show less" : "Read more"}
                          </button>
                        ) : null}
                      </blockquote>
                    ) : (
                      <p className="home-ggl-quote home-ggl-quote--empty">Rated on Google</p>
                    )}

                    {review.reviewDate ? (
                      <p className="home-ggl-date">{review.reviewDate}</p>
                    ) : null}

                    <div className="home-ggl-card-foot">
                      <span className="home-ggl-badge">Google Review</span>
                    </div>
                  </article>
                );
              })}
            </div>
          </div>

          <button
            type="button"
            className="home-ggl-arrow next"
            aria-label="Next Google reviews"
            disabled={i >= pages - 1}
            onClick={() => setI((n) => Math.min(pages - 1, n + 1))}
          >
            <Arrow dir="next" />
          </button>
        </div>

        <nav className="home-ggl-nav" aria-label="Google review pages">
          {Array.from({ length: pages }, (_, n) => (
            <button
              key={n}
              type="button"
              className={n === i ? "on" : ""}
              aria-label={`Show review page ${n + 1}`}
              aria-current={n === i ? "page" : undefined}
              onClick={() => setI(n)}
            />
          ))}
        </nav>
      </div>
    </section>
  );
}
