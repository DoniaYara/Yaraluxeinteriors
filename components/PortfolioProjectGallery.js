"use client";

import { useState } from "react";
import OptImage from "@/components/OptImage";
import ProjectLightbox from "@/components/ProjectLightbox";

export default function PortfolioProjectGallery({ title, photos = [] }) {
  const [open, setOpen] = useState(false);
  const [startIndex, setStartIndex] = useState(0);

  if (!photos.length) return null;

  const openAt = (index) => {
    setStartIndex(index);
    setOpen(true);
  };

  return (
    <>
      <div className="pf-single-gallery">
        <h4 className="pf-single-heading pf-single-gallery-title">Project Photos</h4>
        <div className="pf-single-gallery-row">
          {photos.map((src, i) => (
            <button
              type="button"
              key={`${src}-${i}`}
              className="pf-single-gallery-item"
              onClick={() => openAt(i)}
              aria-label={`View photo ${i + 1} of ${photos.length}`}
            >
              <OptImage
                src={src}
                alt={i === 0 ? title : ""}
                sizes="(max-width: 768px) 100vw, 33vw"
                priority={i < 3}
              />
            </button>
          ))}
        </div>
      </div>

      <ProjectLightbox
        project={{ title, gallery: photos }}
        open={open}
        onClose={() => setOpen(false)}
        startIndex={startIndex}
      />
    </>
  );
}
