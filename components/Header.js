"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { AREAS, LOGO, U } from "@/lib/data";
import { isAreaPath, isServicePath, SERVICE_URLS } from "@/lib/urls";
import OptImage from "@/components/OptImage";
import { SIZES } from "@/lib/image-alts";

const GALLERY = [
  "brand/gallery/4-1.webp",
  "brand/gallery/6-1.webp",
  "brand/gallery/8-1.webp",
  "brand/gallery/1-1.webp",
  "brand/gallery/9.webp",
  "brand/gallery/7-1.webp",
  "brand/gallery/5-1.webp",
  "brand/gallery/13.webp",
  "brand/gallery/1.webp"
];

export default function Header() {
  const path = usePathname() || "";
  const [scrolled, setScrolled] = useState(false);
  const [navOpen, setNavOpen] = useState(false);
  const [panelOpen, setPanelOpen] = useState(false);
  const [galleryReady, setGalleryReady] = useState(false);
  const [searchOpen, setSearchOpen] = useState(false);
  const [openSub, setOpenSub] = useState("");
  const [preloader, setPreloader] = useState(true);
  const [hoverLocked, setHoverLocked] = useState(false);

  useEffect(() => {
    const readY = () =>
      window.scrollY || document.documentElement.scrollTop || document.body.scrollTop || 0;

    const sync = () => {
      const on = readY() > 16;
      setScrolled((prev) => (prev === on ? prev : on));
      document.documentElement.classList.toggle("is-scrolled", on);
    };

    // Reload pe browser purani scroll position restore karta hai — pehle top lock, phir sync
    try {
      if ("scrollRestoration" in history) history.scrollRestoration = "manual";
    } catch (_) { /* ignore */ }

    const navType = performance.getEntriesByType?.("navigation")?.[0]?.type;
    if (navType === "reload" || navType === "navigate") {
      window.scrollTo(0, 0);
    }

    sync();
    const timers = [0, 50, 100, 250, 500, 1000].map((ms) => setTimeout(sync, ms));
    const raf1 = requestAnimationFrame(() => {
      sync();
      requestAnimationFrame(sync);
    });

    window.addEventListener("scroll", sync, { passive: true, capture: true });
    const onPageShow = (e) => {
      if (e.persisted) window.scrollTo(0, 0);
      sync();
    };
    window.addEventListener("pageshow", onPageShow);
    window.addEventListener("load", sync);
    window.addEventListener("resize", sync, { passive: true });

    const hide = () => {
      setPreloader(false);
      sync();
    };
    const hideT = setTimeout(hide, 400);
    window.addEventListener("load", hide);

    return () => {
      cancelAnimationFrame(raf1);
      timers.forEach(clearTimeout);
      clearTimeout(hideT);
      window.removeEventListener("scroll", sync, { capture: true });
      window.removeEventListener("pageshow", onPageShow);
      window.removeEventListener("load", sync);
      window.removeEventListener("load", hide);
      window.removeEventListener("resize", sync);
      document.documentElement.classList.remove("is-scrolled");
    };
  }, []);

  useEffect(() => {
    setNavOpen(false);
    setOpenSub("");
    setPanelOpen(false);
    setSearchOpen(false);
    setHoverLocked(true);
    if (typeof document !== "undefined" && document.activeElement instanceof HTMLElement) {
      document.activeElement.blur();
    }

    const sync = () => {
      const y = window.scrollY || document.documentElement.scrollTop || document.body.scrollTop || 0;
      const on = y > 16;
      setScrolled(on);
      document.documentElement.classList.toggle("is-scrolled", on);
    };
    sync();
    const timers = [0, 50, 150, 300].map((ms) => setTimeout(sync, ms));
    return () => timers.forEach(clearTimeout);
  }, [path]);

  useEffect(() => {
    if (panelOpen) setGalleryReady(true);
  }, [panelOpen]);

  const aboutOn = ["/about", "/process", "/faqs"].includes(path);
  const serviceOn = isServicePath(path);
  const areaOn = isAreaPath(path);

  const closeMenus = () => {
    setNavOpen(false);
    setOpenSub("");
    setPanelOpen(false);
    setHoverLocked(true);
    if (typeof document !== "undefined" && document.activeElement instanceof HTMLElement) {
      document.activeElement.blur();
    }
  };

  const toggleSub = (id, e) => {
    if (typeof window !== "undefined" && window.innerWidth <= 1024) {
      e.preventDefault();
      setOpenSub((s) => (s === id ? "" : id));
    }
  };

  return (
    <>
      <div className={`preloader ${preloader ? "" : "hide"}`}>
        <OptImage src={LOGO} alt="" sizes={SIZES.logo} loading="eager" />
        <div className="meter" />
      </div>
      <header className={`site-header${scrolled || navOpen ? " is-scrolled" : ""}${navOpen ? " menu-open" : ""}`}>
        <div className="header-inner">
          <Link className="logo" href="/">
            <OptImage src={LOGO} alt="Yara Luxe Interiors" sizes={SIZES.logo} loading="eager" />
          </Link>
          <ul
            className={`nav${navOpen ? " open" : ""}${hoverLocked ? " no-hover" : ""}`}
            onMouseLeave={() => setHoverLocked(false)}
          >
            <li className={path === "/" ? "active" : ""}>
              <Link href="/" onClick={closeMenus}>Home</Link>
            </li>
            <li className={`${aboutOn ? "active" : ""} ${openSub === "about" ? "open" : ""}`}>
              <Link href="/about" onClick={(e) => toggleSub("about", e)}>
                About Us <span className="caret" />
              </Link>
              <ul className="sub">
                <li><Link href="/process" onClick={closeMenus}>Our Process</Link></li>
                <li><Link href="/faqs" onClick={closeMenus}>FAQs</Link></li>
              </ul>
            </li>
            <li className={`${serviceOn ? "active" : ""} ${openSub === "svc" ? "open" : ""}`}>
              <Link href="/our-services" onClick={(e) => toggleSub("svc", e)}>
                Our Services <span className="caret" />
              </Link>
              <ul className="sub">
                <li><Link href={SERVICE_URLS.residential} onClick={closeMenus}>Residential Interior Design</Link></li>
                <li><Link href={SERVICE_URLS.commercial} onClick={closeMenus}>Commercial Interior Design</Link></li>
                <li><Link href={SERVICE_URLS.kitchen} onClick={closeMenus}>Kitchen Interior Design</Link></li>
                <li><Link href={SERVICE_URLS.bathroom} onClick={closeMenus}>Bathroom Interior Design</Link></li>
                <li><Link href={SERVICE_URLS.consultation} onClick={closeMenus}>Interior Design Consultation</Link></li>
                <li><Link href={SERVICE_URLS.newBuild} onClick={closeMenus}>New Build Interior Design</Link></li>
                <li><Link href={SERVICE_URLS.supervision} onClick={closeMenus}>Project Supervision</Link></li>
                <li><Link href={SERVICE_URLS.fullHome} onClick={closeMenus}>Full Home Interior Design</Link></li>
              </ul>
            </li>
            <li className={`${areaOn ? "active" : ""} ${openSub === "areas" ? "open" : ""}`}>
              <button
                type="button"
                className="nav-parent"
                aria-expanded={openSub === "areas"}
                aria-haspopup="true"
                onClick={(e) => toggleSub("areas", e)}
              >
                Areas <span className="caret" />
              </button>
              <ul className="sub sub-areas">
                {AREAS.map((area) => (
                  <li key={area.href}>
                    <Link href={area.href} onClick={closeMenus}>{area.name}</Link>
                  </li>
                ))}
              </ul>
            </li>
            <li className={path === "/portfolio" ? "active" : ""}>
              <Link href="/portfolio" onClick={closeMenus}>Portfolio</Link>
            </li>
            <li className={path === "/blog" || path.startsWith("/blog/") ? "active" : ""}>
              <Link href="/blog" onClick={closeMenus}>Blog</Link>
            </li>
            <li className={path === "/contact" ? "active" : ""}>
              <Link href="/contact" onClick={closeMenus}>Contact Us</Link>
            </li>
          </ul>
          <div className="header-tools">
            <button className="icon-btn" aria-label="Search" onClick={() => setSearchOpen(true)}>
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.7" aria-hidden="true">
                <circle cx="11" cy="11" r="7" />
                <path d="M20 20l-3.5-3.5" />
              </svg>
            </button>
            <button className="icon-btn panel-toggle" aria-label="Menu" onClick={() => setPanelOpen(true)}>
              <span className="burger" aria-hidden="true"><span /><span /><span /></span>
            </button>
            <button
              className="icon-btn hamburger"
              aria-label="Open navigation"
              onClick={() => setNavOpen((v) => !v)}
            >
              <span className="burger" aria-hidden="true"><span /><span /><span /></span>
            </button>
          </div>
        </div>
      </header>
      <div className={`overlay-bg${panelOpen ? " open" : ""}`} onClick={() => setPanelOpen(false)} />
      <aside className={`panel${panelOpen ? " open" : ""}`}>
        <p className="panel-heading">Our Gallery</p>
        <div className="gallery-mini">
          {galleryReady
            ? GALLERY.map((p) => (
                <OptImage key={p} src={`${U}/${p}`} alt="" sizes={SIZES.drawer} />
              ))
            : null}
        </div>
        <p className="panel-heading">CONTACTS</p>
        <p>853 Nepean Hwy, Bentleigh, 3204</p>
        <p><a href="mailto:Donia@YaraLuxeInteriors.com.au">Donia@YaraLuxeInteriors.com.au</a></p>
        <p><a href="tel:0433211875">0433 211 875</a></p>
        <p><a href="tel:0385293720">(03) 8529 3720</a></p>
      </aside>
      <div className={`search-modal${searchOpen ? " open" : ""}`} onClick={(e) => e.target === e.currentTarget && setSearchOpen(false)}>
        <form action="/blog">
          <input type="search" name="q" placeholder="Search for:" />
        </form>
      </div>
    </>
  );
}
