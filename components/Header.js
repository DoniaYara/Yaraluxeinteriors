"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { AREAS, LOGO, U } from "@/lib/data";
import { AREA_URLS, isAreaPath, isServicePath, SERVICE_URLS } from "@/lib/urls";
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

  useEffect(() => {
    const apply = (on) => {
      setScrolled(on);
      document.documentElement.classList.toggle("is-scrolled", on);
    };
    const fromOffset = () => {
      const y = window.scrollY || document.documentElement.scrollTop || document.body.scrollTop || 0;
      apply(y > 16);
    };
    fromOffset();
    window.addEventListener("scroll", fromOffset, { passive: true, capture: true });

    const origin = document.getElementById("scroll-origin");
    let io;
    if (origin && "IntersectionObserver" in window) {
      io = new IntersectionObserver(([entry]) => apply(!entry.isIntersecting), {
        root: null,
        threshold: 0,
        rootMargin: "-16px 0px 0px 0px"
      });
      io.observe(origin);
    }

    const hide = () => setPreloader(false);
    const t = setTimeout(hide, 400);
    window.addEventListener("load", hide);
    return () => {
      window.removeEventListener("scroll", fromOffset, { capture: true });
      io?.disconnect();
      document.documentElement.classList.remove("is-scrolled");
      window.removeEventListener("load", hide);
      clearTimeout(t);
    };
  }, []);

  useEffect(() => {
    setNavOpen(false);
    setOpenSub("");
  }, [path]);

  useEffect(() => {
    if (panelOpen) setGalleryReady(true);
  }, [panelOpen]);

  const aboutOn = ["/about", "/process", "/faqs"].includes(path);
  const serviceOn = isServicePath(path);
  const areaOn = isAreaPath(path);

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
          <ul className={`nav${navOpen ? " open" : ""}`}>
            <li className={path === "/" ? "active" : ""}>
              <Link href="/">Home</Link>
            </li>
            <li className={`${aboutOn ? "active" : ""} ${openSub === "about" ? "open" : ""}`}>
              <Link href="/about" onClick={(e) => toggleSub("about", e)}>
                About Us <span className="caret" />
              </Link>
              <ul className="sub">
                <li><Link href="/process">Our Process</Link></li>
                <li><Link href="/faqs">FAQs</Link></li>
              </ul>
            </li>
            <li className={`${serviceOn ? "active" : ""} ${openSub === "svc" ? "open" : ""}`}>
              <Link href="/our-services" onClick={(e) => toggleSub("svc", e)}>
                Our Services <span className="caret" />
              </Link>
              <ul className="sub">
                <li><Link href={SERVICE_URLS.residential}>Residential Interior Design</Link></li>
                <li><Link href={SERVICE_URLS.commercial}>Commercial Interior Design</Link></li>
                <li><Link href={SERVICE_URLS.kitchen}>Kitchen Interior Design</Link></li>
                <li><Link href={SERVICE_URLS.bathroom}>Bathroom Interior Design</Link></li>
                <li><Link href={SERVICE_URLS.consultation}>Interior Design Consultation</Link></li>
                <li><Link href={SERVICE_URLS.newBuild}>New Build Interior Design</Link></li>
                <li><Link href={SERVICE_URLS.supervision}>Project Supervision</Link></li>
                <li><Link href={SERVICE_URLS.fullHome}>Full Home Interior Design</Link></li>
              </ul>
            </li>
            <li className={`${areaOn ? "active" : ""} ${openSub === "areas" ? "open" : ""}`}>
              <Link href={AREA_URLS.Hawthorn} onClick={(e) => toggleSub("areas", e)}>
                Areas <span className="caret" />
              </Link>
              <ul className="sub sub-areas">
                {AREAS.map((area) => (
                  <li key={area.href}>
                    <Link href={area.href}>{area.name}</Link>
                  </li>
                ))}
              </ul>
            </li>
            <li className={path === "/portfolio" ? "active" : ""}>
              <Link href="/portfolio">Portfolio</Link>
            </li>
            <li className={path === "/blog" || path.startsWith("/blog/") ? "active" : ""}>
              <Link href="/blog">Blog</Link>
            </li>
            <li className={path === "/contact" ? "active" : ""}>
              <Link href="/contact">Contact Us</Link>
            </li>
          </ul>
          <div className="header-tools">
            <button className="icon-btn" aria-label="Search" onClick={() => setSearchOpen(true)}>
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.7">
                <circle cx="11" cy="11" r="7" />
                <path d="M20 20l-3.5-3.5" />
              </svg>
            </button>
            <button className="icon-btn panel-toggle" aria-label="Menu" onClick={() => setPanelOpen(true)}>
              <span className="burger"><span /><span /><span /></span>
            </button>
            <button
              className="icon-btn hamburger"
              aria-label="Open navigation"
              onClick={() => setNavOpen((v) => !v)}
            >
              <span className="burger"><span /><span /><span /></span>
            </button>
          </div>
        </div>
      </header>
      <div className={`overlay-bg${panelOpen ? " open" : ""}`} onClick={() => setPanelOpen(false)} />
      <aside className={`panel${panelOpen ? " open" : ""}`}>
        <h3>Our Gallery</h3>
        <div className="gallery-mini">
          {galleryReady
            ? GALLERY.map((p) => (
                <OptImage key={p} src={`${U}/${p}`} alt="" sizes={SIZES.drawer} />
              ))
            : null}
        </div>
        <h3>CONTACTS</h3>
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
