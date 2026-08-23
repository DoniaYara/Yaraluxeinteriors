"use client";

import { useEffect, useRef } from "react";
import { HOME_PARTNERS, U } from "@/lib/data";
import OptImage from "@/components/OptImage";
import { fileAlt, SIZES } from "@/lib/image-alts";

const LOGOS = [...HOME_PARTNERS, ...HOME_PARTNERS];

export default function HomePartners() {
  const trackRef = useRef(null);
  const offsetRef = useRef(0);
  const draggingRef = useRef(false);
  const startXRef = useRef(0);
  const startOffsetRef = useRef(0);
  const rafRef = useRef(0);
  const lastTsRef = useRef(0);

  useEffect(() => {
    const SPEED = 28; // px per second — slow continuous slide

    const tick = (ts) => {
      const track = trackRef.current;
      if (!track) return;
      if (!lastTsRef.current) lastTsRef.current = ts;
      const dt = (ts - lastTsRef.current) / 1000;
      lastTsRef.current = ts;

      if (!draggingRef.current) {
        offsetRef.current -= SPEED * dt;
        const half = track.scrollWidth / 2;
        if (half > 0 && -offsetRef.current >= half) {
          offsetRef.current += half;
        }
        track.style.transform = `translate3d(${offsetRef.current}px, 0, 0)`;
      }
      rafRef.current = requestAnimationFrame(tick);
    };

    rafRef.current = requestAnimationFrame(tick);
    return () => cancelAnimationFrame(rafRef.current);
  }, []);

  const onPointerDown = (e) => {
    draggingRef.current = true;
    startXRef.current = e.clientX;
    startOffsetRef.current = offsetRef.current;
    e.currentTarget.setPointerCapture(e.pointerId);
    e.currentTarget.classList.add("is-dragging");
  };

  const onPointerMove = (e) => {
    if (!draggingRef.current || !trackRef.current) return;
    const dx = e.clientX - startXRef.current;
    offsetRef.current = startOffsetRef.current + dx;
    const half = trackRef.current.scrollWidth / 2;
    if (half > 0) {
      while (-offsetRef.current >= half) offsetRef.current += half;
      while (offsetRef.current > 0) offsetRef.current -= half;
    }
    trackRef.current.style.transform = `translate3d(${offsetRef.current}px, 0, 0)`;
  };

  const onPointerUp = (e) => {
    draggingRef.current = false;
    lastTsRef.current = 0;
    e.currentTarget.classList.remove("is-dragging");
  };

  return (
    <section className="home-partners" aria-label="Brand partners">
      <div
        className="home-partners-viewport"
        onPointerDown={onPointerDown}
        onPointerMove={onPointerMove}
        onPointerUp={onPointerUp}
        onPointerCancel={onPointerUp}
      >
        <div className="home-partners-track" ref={trackRef}>
          {LOGOS.map((src, i) => (
            <div className="home-partner" key={`${src}-${i}`} aria-hidden={i >= HOME_PARTNERS.length || undefined}>
              <OptImage src={`${U}/${src}`} alt={i < HOME_PARTNERS.length ? fileAlt(src) : ""} sizes={SIZES.partner} />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
