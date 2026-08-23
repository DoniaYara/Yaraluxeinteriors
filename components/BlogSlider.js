"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import OptImage from "@/components/OptImage";
import { blogImageAlt, SIZES } from "@/lib/image-alts";
import { postImageSrc } from "@/lib/post-image";

export default function BlogSlider({ items = [] }) {
  const [i, setI] = useState(0);
  const [vis, setVis] = useState(3);

  useEffect(() => {
    const calc = () => setVis(window.innerWidth <= 700 ? 1 : 3);
    calc();
    window.addEventListener("resize", calc);
    return () => window.removeEventListener("resize", calc);
  }, []);

  useEffect(() => {
    setI(0);
  }, [vis]);

  const pages = Math.max(1, Math.ceil(items.length / vis));

  return (
    <div className="blog-slider">
      <div className="blog-slider-view">
        <div className="blog-slider-track" style={{ transform: `translateX(-${i * 100}%)` }}>
          {items.map((p) => (
            <article className="blog-slide" key={p.slug || p.title}>
              <div className="blog-slide-media">
                <OptImage src={postImageSrc(p)} alt={blogImageAlt(p)} sizes={SIZES.blogCard} />
                <div className="blog-slide-cats">{(p.cats || []).join(" ")}</div>
              </div>
              <div className="blog-slide-body">
                <div className="blog-slide-meta">
                  <span>{p.date}</span>
                  <span>Donia Yara</span>
                </div>
                <h3 className="blog-slide-title">
                  <Link href={p.slug ? `/blog/${p.slug}` : "/blog"}>{p.title}</Link>
                </h3>
                <p>{p.excerpt}</p>
              </div>
            </article>
          ))}
        </div>
      </div>
      <nav className="quote-nav" aria-label="Blog pages">
        {Array.from({ length: pages }, (_, n) => (
          <button
            key={n}
            type="button"
            className={n === i ? "on" : ""}
            onClick={() => setI(n)}
            aria-label={`Show blog page ${n + 1}`}
            aria-current={n === i ? "page" : undefined}
          />
        ))}
      </nav>
    </div>
  );
}
