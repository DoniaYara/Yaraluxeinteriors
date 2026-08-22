"use client";

import { useEffect, useRef } from "react";
import { PROCESS_PARTNERS, U } from "@/lib/data";
import OptImage from "@/components/OptImage";
import { fileAlt, SIZES } from "@/lib/image-alts";

export default function PartnerSlider() {
  const row = useRef(null);

  useEffect(() => {
    const el = row.current;
    if (!el) return;
    const tick = () => {
      const first = el.querySelector("img");
      if (!first) return;
      const styles = getComputedStyle(el);
      const gap = parseFloat(styles.columnGap || styles.gap) || 0;
      const step = first.getBoundingClientRect().width + gap;
      const atEnd = el.scrollLeft + el.clientWidth >= el.scrollWidth - 8;
      el.scrollTo({ left: atEnd ? 0 : el.scrollLeft + step, behavior: "smooth" });
    };
    const id = setInterval(tick, 2800);
    return () => clearInterval(id);
  }, []);

  return (
    <div className="container process-partners-row" ref={row}>
      {PROCESS_PARTNERS.map((src) => (
        <OptImage key={src} src={`${U}/${src}`} alt={fileAlt(src)} sizes={SIZES.partner} />
      ))}
    </div>
  );
}
