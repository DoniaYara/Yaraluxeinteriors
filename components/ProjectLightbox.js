"use client";

import { useCallback, useEffect, useMemo, useState } from "react";
import { U } from "@/lib/data";
import OptImage from "@/components/OptImage";

function srcOf(path) {
  if (!path) return "";
  return path.startsWith("http") || path.startsWith("/") ? path : `${U}/${path}`;
}

export default function ProjectLightbox({ project, open, onClose }) {
  const images = useMemo(() => {
    if (!project) return [];
    const list = project.gallery?.length
      ? project.gallery
      : [project.img, project.thumb].filter(Boolean);
    return [...new Set(list.map(srcOf).filter(Boolean))];
  }, [project]);

  const [index, setIndex] = useState(0);

  useEffect(() => {
    if (open) setIndex(0);
  }, [open, project?.title]);

  const go = useCallback(
    (dir) => {
      if (!images.length) return;
      setIndex((i) => (i + dir + images.length) % images.length);
    },
    [images.length]
  );

  useEffect(() => {
    if (!open) return undefined;
    const onKey = (e) => {
      if (e.key === "Escape") onClose?.();
      if (e.key === "ArrowLeft") go(-1);
      if (e.key === "ArrowRight") go(1);
    };
    document.body.style.overflow = "hidden";
    window.addEventListener("keydown", onKey);
    return () => {
      document.body.style.overflow = "";
      window.removeEventListener("keydown", onKey);
    };
  }, [open, onClose, go]);

  if (!open || !project || !images.length) return null;

  // Three thumbs under the main image — sliding window around current
  const thumbIndexes = [];
  for (let offset = 1; offset <= Math.min(3, images.length - 1); offset += 1) {
    thumbIndexes.push((index + offset) % images.length);
  }

  return (
    <div className="project-lightbox" role="dialog" aria-modal="true" aria-label={project.title} onClick={onClose}>
      <button type="button" className="project-lightbox-close" aria-label="Close" onClick={onClose}>
        ×
      </button>
      <div className="project-lightbox-inner" onClick={(e) => e.stopPropagation()}>
        <div className="project-lightbox-title">{project.title}</div>

        <div className="project-lightbox-stage">
          <button type="button" className="project-lightbox-nav prev" aria-label="Previous image" onClick={() => go(-1)}>
            ‹
          </button>
          <div className="project-lightbox-main">
            <OptImage
              key={images[index]}
              src={images[index]}
              alt={`${project.title} ${index + 1}`}
              width={1600}
              height={900}
              sizes="(max-width: 900px) 94vw, 1100px"
              className="project-lightbox-main-img"
            />
          </div>
          <button type="button" className="project-lightbox-nav next" aria-label="Next image" onClick={() => go(1)}>
            ›
          </button>
        </div>

        {thumbIndexes.length > 0 ? (
          <div className="project-lightbox-thumbs">
            {thumbIndexes.map((ti) => (
              <button
                type="button"
                key={`${ti}-${images[ti]}`}
                className="project-lightbox-thumb"
                onClick={() => setIndex(ti)}
                aria-label={`View image ${ti + 1}`}
              >
                <OptImage
                  src={images[ti]}
                  alt=""
                  width={480}
                  height={320}
                  sizes="(max-width: 700px) 30vw, 220px"
                />
              </button>
            ))}
          </div>
        ) : null}

        <div className="project-lightbox-counter">
          {index + 1} / {images.length}
        </div>
      </div>
    </div>
  );
}
