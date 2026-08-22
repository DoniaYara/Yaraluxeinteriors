# Yara Luxe Interiors — Image SEO Audit

**Site:** https://yaraluxeinteriors.com.au  
**Codebase:** Next.js 15 App Router (`yara-luxe-next`)  
**Audit date:** 21 August 2026  
**Scope:** Read-only. No files were renamed, compressed, converted, moved, or edited except this report.

Measurements (width, height, bytes) were taken from files on disk under `public/uploads` using `sharp`. Alt text, loading, and component names were taken from source. Displayed CSS sizes are from `app/style.css` and `app/hawthorn.css`. This audit does **not** claim any photograph was taken in a named suburb unless project data says so (it does not).

---

## Image SEO Summary

| Metric | Count |
| ------ | ----: |
| Total image files on disk | **193** |
| Total image usages (indexable page bindings, including site-wide chrome) | **~430+** (see §2) |
| JPG | 97 |
| WebP | 80 |
| PNG | 16 |
| AVIF / GIF / SVG / ICO | 0 |
| `<img>` missing the `alt` attribute | **0** |
| Empty `alt=""` (production template instances) | **45** |
| Duplicate / templated alts (same phrasing or same file, many pages) | Widespread (17 location pages + 8 service galleries) |
| Generic alts (title-as-alt, `P*`, numbered files with empty alt) | **18 blog featured** + many empty-alt photos |
| Keyword-stuffed alts | Mild on most service pages; not the extreme “keyword soup” pattern |
| Filename used as alt | **0** |
| Poor / generic / WordPress-scaled filenames | **70** |
| Images over 100 KB | **103** |
| Images over 200 KB | **60** |
| Images over 500 KB | **5** |
| Images over 1 MB | **0** |
| JPG/PNG suitable for later WebP/AVIF or compression | **112** (97 JPG + 15 PNG excluding 32×32 favicon) |
| Raw `<img>` (no `next/image`) | **All** production photos |
| `next/image` usage | **0** |
| `<img>` missing `width`/`height` | Almost all except portfolio thumbs and author avatar |
| Location pages using repeated/generic images | **17 / 17** |
| Blog posts missing a useful *photo-describing* featured alt | **18 / 18** (alt = article title) |
| Pages with Open Graph / Twitter images | **0** |
| Image sitemap extensions | **Absent** |
| JPG with EXIF payload | **89 / 97** |
| JPG with GPS coordinates | **0 / 97** |

---

## 1. Executive Summary

The site has **193** raster files in `public/uploads` (no images live outside that folder). Service and location pages already use **WebP**. Core pages, portfolio, blog, logos, and banners are still **JPG/PNG**, often **200–680 KB**, served through **raw `<img>`** with **no Next.js image optimizer**, **almost no `width`/`height`**, and **no `loading="lazy"`** on indexable pages.

**Largest structural SEO gaps (current state, not recommendations executed):**

1. **No Open Graph or Twitter images** on any route (`openGraph.images` / `twitter.images` are not set in `app/**/page.js` or `app/layout.js`).
2. **No `next/image`**, so browsers download original files. The logo is a **13,352 × 7,404 PNG (948 KB)** displayed at **62px** tall in the header.
3. **Empty alt** on many content photos (homepage features, about photos, process photos, partner logos, blog sliders, blog prev/next thumbs). Header/footer logos do have brand alt except the preloader.
4. **All 17 location pages** share the same CSS hero/CTA WebP and the same content file `Interior-Design-Excellence.webp`, with suburb names written into alt text. Project data does **not** prove those photos were taken in those suburbs.
5. **XML sitemap is URL-only** — no `image:image` sitemap extension.
6. Blog bodies contain **no inline `<img>`**. Featured images exist, but alts are the **article title**, not a description of the picture.

There is also a real performance/CLS risk: almost no intrinsic dimensions on `<img>`, CSS `height: 240px` / `500px` / `100%` with `object-fit: cover` on several blocks, and a full-viewport homepage **video** (poster JPG) rather than a static LCP image.

---

## 2. Image Inventory

### 2.1 Files on disk

All **193** files are under `public/uploads/`. There is no `app/icon`, `favicon.ico`, `opengraph-image`, or `twitter-image` file. Formats:

| Format | Files | Notes |
| ------ | ----: | ----- |
| JPG | 97 | Core pages, portfolio, blog, banners, partners photos |
| WebP | 80 | Almost all `2026/06/` service + location assets |
| PNG | 16 | Logo, favicon, partner logos, process illustration, signature, a few backgrounds |
| AVIF | 0 | — |
| SVG | 0 | Icons in components are inline SVG, not image files |
| GIF | 0 | — |
| Other | 0 | — |

Every filename string appears somewhere in JS/JSON/CSS. That includes `COVER` (`Blog-top-cover-photo.jpg`) which is **exported in `lib/data.js` but not imported by any page** — the file is unused in the rendered UI.

`components/PortfolioGrid.js` exists and uses full-size `p.img`, but **no page imports it**. Live portfolio UI is `PortfolioMetro` (thumbs).

### 2.2 How images are used

| Mechanism | Where | Count / notes |
| --------- | ----- | ------------- |
| Next.js `<Image>` | — | **0** |
| Raw `<img>` | Header, Footer, pages, BlogCard, BlogSlider, PortfolioMetro, partners, etc. | All photos |
| CSS `background-image` | `PageHero`, homepage sections, location/service `.hero-bg` / `.cta-bg`, FAQ CTA, author bio | No alt; not in image sitemap |
| `<video poster>` | Homepage hero | JPG poster, not an `<img>` |
| JSON `img` / `thumb` | `lib/data.js` `PROJECTS`, `lib/blog-posts.json` | 17 projects × 2 files; 18 blog featured |
| Schema `image` / `logo` | `lib/schema/` | Logo PNG, founder JPG, project `img`, blog `img` |
| Favicon `<link rel="icon">` | `app/layout.js` | 32×32 PNG |

### 2.3 Approximate usage totals (indexable)

Chrome on **every** indexable page:

| Image | Filename | Binding |
| ----- | -------- | ------- |
| Preloader logo | `Main-1-copy-2-2.png` | `Header` `<img alt="">` |
| Header logo | `Main-1-copy-2-2.png` | `Header` `<img alt="Yara Luxe Interiors">` |
| Footer logo | `Main-1-copy-2-2.png` | `Footer` same alt |
| Header drawer gallery | 9 JPGs `2024/07/*` and `2024/10/*` | `alt=""` |

Page-specific `<img>` (not including chrome): homepage ~16 photos + 12 portfolio thumbs; about 6; process 10 photos + 5 blog thumbs; portfolio 17 thumbs; blog archive 18; each blog post 1 featured + 0–2 nav thumbs + avatar; 8 service pages ~71 content imgs; 17 location pages 41 content imgs.

**Total unique files: 193. Total distinct production bindings (chrome × pages + content): several hundred.** Repeating the header gallery on ~50 URLs is the largest multiplier.

### 2.4 Usage table convention

For every **content** `<img>` and important CSS background, values below are actual. `Title` is always **missing** unless noted (no `<img title>` on photos). `Loading` is **browser default (eager)** unless noted. CSS backgrounds have no alt/loading/width/height.

Full unique-file dimensions and sizes: **Appendix A**.

---

## 3. Alt Text Audit

**No `<img>` in production is missing the `alt` attribute.** Problems are empty, generic, duplicated, or geographically incorrect relative to reuse.

### Classification of current alts

| Class | What exists now |
| ----- | --------------- |
| **Good** | Header/footer logo `"Yara Luxe Interiors"`; founder `"Donia Yara"`; signature `"Donia Yara"`; about flip cards `"Our Mission"` / `"Our Vision"` / `"Our Values"`; many service alts that name the room type + Melbourne + brand |
| **Empty intentionally** | Header preloader logo `alt=""`; header drawer gallery 9× `alt=""` (decorative UI thumbs) |
| **Empty (not clearly decorative)** | Homepage feature cards (3); homepage about photo; homepage blog slider (3); homepage partners (7); homepage dreams; homepage testimonial; about intro + sketch; process illustration + two value photos; process partners (7); process blog slider (5); blog prev/next thumbs |
| **Missing attribute** | **0** on `<img>`. CSS backgrounds have no alt (expected for CSS). Video poster has no alt. |
| **Generic** | Blog/archive/post featured `alt={post.title}` (page title, not the picture). Portfolio `alt={p.title}` (project name, not the room). Service gallery repeats `"… Melbourne — Yara Luxe"`. |
| **Keyword stuffed** | Not the extreme example (`luxury interior designer melbourne interior design melbourne`). Closest: long service alts such as `"Luxury kitchen interior designers Melbourne — Yara Luxe Interiors"`. |
| **Duplicate** | Same WebP reused on many location pages with different suburb alts. Same `"Interior design excellence Melbourne — Yara Luxe"` style phrasing on galleries. Logo alt duplicated header+footer (reasonable). |
| **Filename used as alt** | **None found** |
| **Too vague** | Empty alts; `"Donia Yara"` on a signature graphic is OK; `"19 years designing homes across Melbourne"` on a generic interior photo |
| **Incorrect image description** | South Yarra uses `Interior-design-for-living-room.webp` with alt **"Commercial interior design South Yarra"**. Commercial hero alt says **"Affordable commercial interior designers…"** on file `Luxury-commercial-interior-design-melbourne.webp`. Location alts name suburbs for files also used on other suburbs; **data does not prove local photography**. |

### Empty `alt=""` production instances (45)

| Location | Count | Files / notes |
| -------- | ----: | ------------- |
| `Header.js` preloader | 1 | Logo |
| `Header.js` gallery | 9 | `4-1.jpg` … `1.jpg` |
| Homepage features | 3 | `P1-1.jpg`, `P1-2.jpg`, `P1-33.jpg` |
| Homepage about | 1 | `P2-1.jpg` |
| `BlogSlider` on home | 3 | Latest 3 featured JPGs |
| `HomePartners` | 7 | Brand PNGs |
| `HomeDreams` | 1 | `P4-1.jpg` |
| `HomeTestimonials` | 1 | `testimonial.jpg` |
| About intro / sketch | 2 | `about-us2.jpg`, `about-us-down.jpg` |
| Process photos | 3 | `Untitled-2-1.png`, `P15-1.jpg`, `P15-2.jpg` |
| `PartnerSlider` | 7 | Mix of photos + Adairs/Koala |
| `BlogSlider` on process | 5 | Featured JPGs |
| Blog post prev/next | 2 (template) | Same featured files, `alt=""` |

Partner/logo empties are an accessibility issue (brand names are not in adjacent visible text on those images). Empty gallery thumbs are more defensible.

---

## 4. Filename Audit

**No camera filenames** (`IMG_3827`, `DSC0012`) were found.

| Class | Count | Examples (current names, not proposals) |
| ----- | ----: | --------------------------------------- |
| Descriptive / reasonably SEO-like | ~123 | `kitchen-interior-design.webp`, `Wispers-Of-Provence-Cover.jpg`, `How-to-Layer-Light-Like-a-Designer-.jpg` |
| Generic / numbered | 25 | `1.jpg`, `7.jpg`, `9-1.jpg`, `11.jpg`, `22-3.jpg`, `44-2.jpg`, `bb.jpg`, `ff2.jpg`, `Blog-5.jpg`, `blog-2.jpg` |
| Poorly formatted / CMS leftovers | 22 | `Main-1-copy-2-2.png`, `Untitled-2-1.png`, `download-45.jpg`, `*-720x720.jpg`, `*-scaled-e1752….jpg`, `A-Room-of-EaseCover.jpg` (missing hyphen), `supervision5jpg.webp` |
| Internal codes (`P1-1`, `P15-3`) | 15 | Homepage/process/about photos |
| Keyword-heavy | 8 | `luxury-home-interior-design-Melbourne-company.webp`, `bathroom-renovation-interior-designer-melbourne.webp`, etc. |
| Trailing hyphen | 1 | `full-home-interior-design-services-.webp` |
| Random hash | 0 | — |

**Good SEO filename examples already in the repo:** `new-build-interior-design.webp`, `bathroom-interior-design.webp`.  
**Poor examples actually used:** `bb.jpg`, `P1-1.jpg`, `Untitled-2-1.png`, `Main-1-copy-2-2.png`.

---

## 5. Format & Compression Audit

### Totals

| Format | Files | Average size (approx.) | Largest |
| ------ | ----: | ---------------------- | ------- |
| JPG | 97 | ~219 KB | `our-process-banner-1.jpg` 680.4 KB |
| WebP | 80 | ~81 KB | `color-consultation-interior-design.webp` 188.7 KB |
| PNG | 16 | mixed | Logo 948 KB |

### Over 500 KB (5)

| Image | Page / role | Dimensions | Size |
| ----- | ----------- | ---------- | ---- |
| `/uploads/2020/04/Main-1-copy-2-2.png` | Header, footer, schema logo | 13352×7404 | 948.0 KB |
| `/uploads/2025/07/our-process-banner-1.jpg` | Process `PageHero` | 2000×650 | 680.4 KB |
| `/uploads/2026/03/44-2.jpg` | Blog featured: “How to Choose the Right Interior Theme…” | 1502×992 | 676.5 KB |
| `/uploads/2025/07/about-us-2-banner-2.jpg` | Blog archive + all 18 posts `PageHero` | 2000×680 | 615.0 KB |
| `/uploads/2025/07/backgroundlow-dark-light-2.jpg` | Homepage CTA background | 1500×844 | 505.5 KB |

### Over 200 KB

**60 files.** Almost all remaining JPG portfolio covers, blog featured images, homepage photos, about photos, FAQ/contact banners, and two PNGs (`Untitled-2-1.png` 388 KB; `png-koala111white.png` 257 KB at 3000×1500). **No WebP exceeds 200 KB.**

### Over 100 KB

**103 files** (includes the 60 above). Remaining are mostly 100–200 KB JPGs (thumbs, some blog images) plus a few WebP (~130–189 KB).

### Obvious later compression/resizing opportunities (not done)

- Logo PNG at **13k×7k** for a **62px** header / **54px** footer.
- Partner PNGs at **2560×1280** or **3000×1500** displayed at **max-height 70px**.
- Signature PNG **2560×1707** overlaid on a column photo.
- Page heroes **1800–2500px** wide for a **500px-tall** banner.
- Blog featured JPGs **1500×992** in cards **240px tall**.
- Portfolio full JPGs exist **and** 720×720 thumbs; schema uses the **full** `img`, UI uses **thumbs**.

JPG/PNG → WebP/AVIF is a later task; WebP service assets are already in a better format.

---

## 6. Dimension / CLS Audit

### Oversized sources vs display

| Asset | Source | Typical display | Issue |
| ----- | ------ | --------------- | ----- |
| Logo | 13352×7404 | height 62px / 54px, width auto | Extreme oversize |
| Partner logos | 1552–3000px | height 70px | Extreme oversize |
| Signature | 2560×1707 | overlay on about photo | Far larger than needed |
| Page heroes | 1500–2505px wide | CSS height 500px (400px at one breakpoint) | Wide enough; files are still heavy JPG |
| Location/service heroes | 1900×850 WebP | full-bleed section | Reasonable width; CSS bg so no intrinsic size |
| Homepage features | 1200×1500 | card `aspect-ratio: 4/5`, width ≤350px | ~3–4× oversize |
| Homepage testimonial | 1200×1187 | CSS height **500px**, width 75% | Oversize; fixed height helps CLS if image loads |
| Blog cards | 1000–1800px | width 100%, height **240px**, `object-fit: cover` | Oversize; height reserved in CSS |
| Portfolio metro | 720×720 (attrs match file) | CSS `aspect-ratio: 1/1` | Source matches display intent |
| Author avatar | 132×132 + 264×264 srcset | 132×132 attrs | Appropriate |

### Missing dimensions

Almost every `<img>` lacks HTML `width`/`height`. Exceptions:

- `PortfolioMetro`: `width={720} height={720}`
- `BlogAuthor`: `width="132" height="132"`

CSS sometimes reserves height (blog cards 240px, page hero 500px, testimonial 500px). Many others are `height: auto` / `width: 100%` (**CLS risk**): homepage features, about photos, process photos, location/service content images, blog featured on post pages (`.entry-media img`).

### Distortion / stretch

- Blog cards and portfolio thumbs use `object-fit: cover` — cropped, not stretched.
- About intro photo is `border-radius: 50%` on a 1200×1200 square — OK.
- Partner images `object-fit: contain` in a 70px-tall row — OK.
- Homepage testimonial forces **height 500px** on a near-square image — cropped via `object-fit: cover`, not stretched.
- No evidence of non-uniform CSS stretch (`width`/`height` both forced to a different ratio without cover) on the main content photos.

### Very small images stretched

- Favicon is 32×32 and used only as `rel="icon"` (not stretched in page content).
- Author 132px avatar is not stretched beyond 132 CSS pixels (2x srcset provided).

### Layout-shift risks

- Homepage LCP is **`<video>`** (full viewport), not an `<img>`. Poster `How-to-Layer-Light-Like-a-Designer-.jpg` (1200×799, 142.8 KB) has no dimensions in HTML.
- Location/service `.hero-bg` is a CSS background with padding, not an `<img>` — less CLS from the image itself, but the image is still downloaded at full file size with no `srcset`.
- Content `<img>` on service/location columns: `max-width: 100%` only → **high CLS risk**.

---

## 7. Next.js Image Audit

| Check | Current state |
| ----- | ------------- |
| `next/image` | **Not used** in `app/` or `components/` (excluding `node_modules`) |
| Raw `<img>` | All photos |
| `next.config.mjs` `images` | **Not configured** (no `remotePatterns`, no `unoptimized` flag) |
| `unoptimized` prop | N/A (no Image component) |
| `sizes` | **None** |
| `fill` | **None** |
| `priority` | **None** (and no `fetchPriority`) |
| `quality` | N/A |
| Image optimization disabled | Not explicitly disabled; also **not used** |
| Remote images | Local `/uploads` only |
| `loading="lazy"` on indexable `<img>` | **None**. Lazy appears on `/test-homepage` components and on **map iframes** only |

**Raw `<img>` that could later move to `next/image`:** Header/Footer logo, all PageHero backgrounds (today they are CSS, not `<img>`), homepage features/about/dreams/testimonials, `PortfolioMetro`, `BlogCard`/`BlogSlider`, every service and location content image, blog featured.

`/test-homepage` is `noindex` and is excluded from SEO conclusions; it is the only place production-like photos use `loading="lazy"`.

### Width / height / loading (request items 8–9)

| Pattern | width/height | loading | Role |
| ------- | ------------ | ------- | ---- |
| Homepage videos | n/a | browser default (autoplay) | **LCP / above-the-fold** |
| Location/service CSS hero | n/a | CSS download, eager | **Above-the-fold** |
| `PageHero` CSS | n/a | CSS, eager | **Above-the-fold** |
| Header logo | missing | eager | Above-the-fold |
| Homepage feature imgs | missing | eager | Below hero, still high on page |
| Portfolio thumbs | 720×720 | eager (all of them, including below fold) | Mix |
| Blog cards | missing | eager (all 18 on archive) | Mix |
| Service/location content imgs | missing | eager (including galleries well below fold) | Mostly below fold |
| Too many `priority` | **0** | — | Not an issue |
| Hero incorrectly lazy | **No** (heroes are CSS/video, not lazy imgs) | — | Opposite problem: everything eager |

---

## 8. Homepage Images

Hero is **video**, not an image:

| Asset | Path | Role |
| ----- | ---- | ---- |
| Desktop video | `/uploads/2025/07/NEW-video-for-DESKTOP.mp4` | LCP media |
| Mobile video | `/uploads/2025/07/NEW-video-for-MOBILE.mp4` | LCP media |
| Poster | `/uploads/2025/06/How-to-Layer-Light-Like-a-Designer-.jpg` | 1200×799, 142.8 KB, also a blog featured image |

| Page | Image Path | Filename | Format | W×H | Size | Alt | Title | Loading | Component |
| ---- | ---------- | -------- | ------ | --- | ---- | --- | ----- | ------- | --------- |
| Home | `/uploads/2025/07/P1-1.jpg` | P1-1.jpg | JPG | 1200×1500 | 369.7 KB | `""` | missing | eager | `app/page.js` feature |
| Home | `/uploads/2025/07/P1-2.jpg` | P1-2.jpg | JPG | 1200×1500 | 223.3 KB | `""` | missing | eager | feature |
| Home | `/uploads/2025/07/P1-33.jpg` | P1-33.jpg | JPG | 1200×1499 | 228.8 KB | `""` | missing | eager | feature |
| Home | `/uploads/2020/04/bg-features.jpg` | bg-features.jpg | JPG | 350×90 | 1.9 KB | (CSS) | — | CSS | feature card bg |
| Home | `/uploads/2020/06/bg1-home2.jpg` | bg1-home2.jpg | JPG | 1920×1415 | 74.7 KB | (CSS) | — | CSS | portfolio section |
| Home | thumbs of first 12 `PROJECTS` | `*-720x720.jpg` | JPG | 720×720 | 76–150 KB | project title | missing | eager | `PortfolioMetro` |
| Home | `/uploads/2026/03/P2-1.jpg` | P2-1.jpg | JPG | 1200×1219 | 366.1 KB | `""` | missing | eager | about photo |
| Home | `/uploads/2025/07/ONLY-Donia-Yara-W-no-dot-1-scaled.png` | ONLY-Donia-Yara-W-no-dot-1-scaled.png | PNG | 2560×1707 | 13.5 KB | `Donia Yara` | missing | eager | signature |
| Home | `/uploads/2025/07/backgroundlow-dark-light-2.jpg` | backgroundlow-dark-light-2.jpg | JPG | 1500×844 | 505.5 KB | (CSS) | — | CSS | CTA |
| Home | `/uploads/2025/07/testimonial.jpg` | testimonial.jpg | JPG | 1200×1187 | 249.8 KB | `""` | missing | eager | `HomeTestimonials` |
| Home | 7 partner PNGs | `png-*-white*.png`, `adairs-w-5.png` | PNG | up to 3000×1500 | 32–258 KB | `""` | missing | eager | `HomePartners` |
| Home | `/uploads/2020/06/bg3-home2.png` | bg3-home2.png | PNG | 1403×912 | 72.9 KB | (CSS) | — | CSS | blog section |
| Home | 3 latest blog `img` | see §12 | JPG | various | 142–676 KB | `""` | missing | eager | `BlogSlider` |
| Home | `/uploads/2025/07/P4-1.jpg` | P4-1.jpg | JPG | 1800×1152 | 100.2 KB | `""` | missing | eager | `HomeDreams` |

**Context:** Feature cards have headings (`TIMELESS ELEGANCE`, etc.) beside empty-alt photos. About block has a heading. Testimonial has quote text beside an empty-alt interior photo. Dreams overlay text “We Build Your Dreams...”.

---

## 9. Service Page Images

Shared pattern: CSS `.hero-bg` + `.cta-bg` (no alt), then content `<img>`s with Melbourne-keyword alts, plus a 5-image gallery strip. **No `width`/`height`/`loading`/`title`.** Format is WebP unless noted.

Hero/CTA CSS (from `app/hawthorn.css`):

| Service | Hero CSS file | CTA CSS file |
| ------- | ------------- | ------------ |
| Residential | `interior-design-residential.webp` 1900×850, 73.1 KB | same |
| Commercial | `commercial-interior-design.webp` 1000×950, 55.8 KB | `Small-commercial-interior-design-melbourne.webp` 1900×850, 65.3 KB |
| Kitchen | `kitchen-interior-designer-melbourne.webp` 1900×850, 153.8 KB | `kitchen-interior-design-ideas.webp` 1900×850, 145.1 KB |
| Bathroom | `luxury-bathroom-interior-design.webp` 1900×850, 87.6 KB | `bathroom-renovation-interior-designer-melbourne.webp` 900×600, 41.5 KB |
| Consultation | `interior-design-initial-consultation.webp` 1900×850, 92.3 KB | same |
| New build | `New-Build-Banner.webp` 1900×850, 37.3 KB | `interior-design-ideas-for-new-build-homes.webp` 900×600, 63.9 KB |
| Project supervision | `supervisionBanner.webp` 1900×850, 107.0 KB | `supervision1.webp` 900×600, 101.7 KB (also a content img) |
| Full home | `Modern-Interior-Design-for-Contemporary-Homes.webp` 1900×850, 71.8 KB | same (also the **location** default hero) |

### Residential Interior Design

| Role | File | Size | Dims | Alt (current) | Match to service |
| ---- | ---- | ---- | ---- | ------------- | ---------------- |
| Content hero | `residential-interior-design.webp` | 68.4 KB | 900×600 | Luxury residential interior designers Melbourne — Yara Luxe Interiors | Intent matches (residential interior). Not proven as a specific Melbourne house. |
| Gallery ×5 | `Best-residential-interior-design-melbourne.webp` 83.8 KB; `Affordable-interior-designers-Melbourne.webp` 53.3 KB; `Best-interior-designers-Melbourne.webp` 77.8 KB; `Affordable-residential-interior-design-melbourne.webp` 72.1 KB; `interior-design-for-residential-house.webp` 100.4 KB | 1000×950 | Templated “Residential/Luxury/Modern… Melbourne — Yara Luxe” | Filenames are keyword-oriented; photos are interiors. |
| Supporting | `Residential-interior-design-melbourne-cost.webp` 76.1 KB; `residential-interior-design-companies.webp` 79.2 KB; `Small-residential-interior-design-melbourne.webp` 81.0 KB | 900×600 | Longer Melbourne + brand alts | Same |

### Commercial Interior Design

| Role | File | Size | Dims | Alt (current) | Match |
| ---- | ---- | ---- | ---- | ------------- | ----- |
| Content | `Luxury-commercial-interior-design-melbourne.webp` | 52.8 KB | 900×600 | **Affordable** commercial interior designers Melbourne — Yara Luxe Interiors | Filename says Luxury; alt says Affordable |
| Content | `commercial-interior-design-near-me.webp` | 71.7 KB | 900×600 | Luxury commercial interior design Melbourne — Yara Luxe | Filename is “near me” keyword |
| Gallery | hospitality / commercial / Best-interior-designers-Melbourne-1 / Interior-design-services-Melbourne / Affordable-interior-designers-Melbourne-1 | 42–108 KB | mostly 1000×950 | Commercial/office/retail/hospitality + Melbourne | Visual match not independently verified; alts are category labels |
| Supporting | `interior-design-for-commercial.webp` 22.2 KB; `commercial-office-interior-design.webp` 66.7 KB | 900×600 | Why Yara Luxe… / serving Melbourne | Smallest WebP on the site (22.2 KB) |

### Kitchen Interior Design

Hero content `kitchen-interior-design.webp` 74.8 KB 900×600, alt “Luxury kitchen interior designers Melbourne — Yara Luxe Interiors”. Gallery: `kitchen-designers-melbourne.webp`, `kitchen-renovation-melbourne.webp`, `kitchen-remodelling-melbourne.webp`, `melbourne-kitchen-renovations.webp`, `kitchen-renovations-in-melbourne.webp` (53–86 KB, ~1000×950). Supporting: `best-kitchen-renovations-melbourne.webp` 98.7 KB; `kitchen-renovations-melbourne.webp` 77.1 KB. **Reused:** `full-home-interior-design-services-.webp` 78.6 KB with kitchen-page alt “Why Yara Luxe stands out kitchen interior design Melbourne” — file is a **full-home** asset also used on location pages.

Visual intent: kitchen photos for kitchen filenames; last image is a reused full-home file.

### Bathroom Interior Design

Content `bathroom-interior-designer-melbourne.webp` 49.0 KB 900×600. Gallery: `bathroom-interior.webp`, `bathroom-interior-designer.webp`, `bathroom-interior-designers.webp`, `modern-bathroom-interior-design.webp`, `small-bathroom-interior-design.webp` (37–69 KB). Supporting: `interior-designer-for-bathroom-remodel.webp` 69.7 KB; `bathroom-interior-design.webp` 131.6 KB 1516×1076. Alts follow “Bathroom … Melbourne — Yara Luxe”. Intent matches bathroom subject at filename level.

### Interior Design Consultation

Content: `color-consultation-interior-design.webp` **188.7 KB** 1377×918 (largest WebP); `interior-design-consultation-australia.webp` 37.2 KB. Gallery: online/price/services/colour/onsite consultation WebPs (35–155 KB). Supporting: `interior-design-consultation.webp` 39.9 KB. Alts are consultation-themed; some gallery alts are generic (“Luxury interior consultation Melbourne”) rather than describing the frame.

### New Build Interior Design

Content: `new-build-interior-design.webp` 85.1 KB; `interior-design-for-new-build-homes.webp` 50.0 KB. Gallery five `new-build-*.webp` (67–106 KB). Supporting: `new-build-homes-interior-design.webp` 70.8 KB. Filenames and alts align with new-build intent; not proven as new-build sites vs renovations.

### Project Supervision

Uses `supervision1.webp`–`supervision10.webp`, `supervisionBanner.webp`, `supervision5jpg.webp` (73–132 KB). Alts describe supervision/project management in Melbourne. Filenames are generic `supervisionN`. Same `supervision1.webp` is **hero content and CTA background**.

### Full Home Interior Design

Content: `Full-Home-Interior-Design-Melbourne.webp` 57.8 KB; `Interior-Design-Excellence.webp` 130.6 KB (also **all 17 location pages**); gallery `Modern-Interior-Design.webp`, `luxury-home-interior-design-Melbourne-company.webp`, `Luxury-Home-Interior-Design-Melbourne.webp`, `Full-Home-Renovation.webp`, `Interior-Design-Excellence.webp` again; plus `Interior-design-for-living-room.webp`, `home-interior-design.webp`, `full-home-interior-design-services-.webp`. Alts are full-home / luxury / Melbourne + brand. **Heavy overlap with location pages.**

**Surrounding context:** Service pages have H1/H2 copy next to images (useful). Gallery strips have only generic alt, little unique caption.

---

## 10. Location Page Images

**Default CSS hero and CTA (all 17 pages):**  
`/uploads/2026/06/Modern-Interior-Design-for-Contemporary-Homes.webp` — 1900×850, 71.8 KB — no alt (CSS).

**Shared content file on all 17:** `Interior-Design-Excellence.webp` — 1000×950, 130.6 KB — suburb-specific alt on each page.

Project JSON does **not** attach these files to a suburb. Local relevance in the table means **alt/copy claims a suburb**, not that the photo is documented as local.

| Location | Content images (plus shared CSS hero/CTA) | Unique to this suburb? | Alt pattern | Filename | Local relevance |
| -------- | ----------------------------------------: | ---------------------- | ----------- | -------- | --------------- |
| Hawthorn | 2 | No | Hawthorn / inner east | `Interior-Design-Excellence.webp`, `full-home-interior-design-services-.webp` | Alt only |
| Kew | 2 | No | Kew | Excellence + full-home-services | Alt only |
| Toorak | 6 | No (most reused; `Full-Home-Interior-Design-Melbourne.webp` is the only location using that file among the 17) | Toorak 3142 / families / joinery | Excellence, living-room, home-interior-design, full-home-services, Full-Home-Renovation, Full-Home-Interior-Design-Melbourne | Alt only |
| South Yarra | 3 | No | South Yarra; **one alt says Commercial** on a living-room filename | Excellence, living-room, full-home-services | Alt only; one alt/filename mismatch |
| Brighton | 2 | No | Brighton coastal / 19 years Melbourne | Excellence, living-room | Alt only |
| Brighton East | 1 | No | Brighton East | Excellence only | Alt only |
| Balwyn | 4 | No | Balwyn living / family / luxury / renovating | Excellence, living-room, home-interior-design, Full-Home-Renovation | Alt only |
| Balwyn North | 1 | No | Balwyn North | Excellence only | Alt only |
| Camberwell | 2 | No | Camberwell | Excellence, home-interior-design | Alt only |
| Canterbury | 4 | No | Canterbury heritage | Excellence, home-interior-design, living-room, full-home-services | Alt only |
| Mont Albert | 2 | No | Mont Albert | Excellence, full-home-services | Alt only |
| Albert Park | 3 | No | Albert Park | Excellence, living-room, home-interior-design | Alt only |
| Elwood | 2 | No | Elwood lifestyle | Excellence, home-interior-design | Alt only |
| Armadale | 2 | No | Armadale | Excellence, living-room | Alt only |
| Malvern | 2 | No | Malvern | Excellence, home-interior-design | Alt only |
| Prahran | 2 | No | Prahran | Excellence, Full-Home-Renovation | Alt only |
| Templestowe | 1 | No | Templestowe | Excellence only | Alt only |

**Reuse map (content WebPs, excluding CSS hero):**

| File | Location pages |
| ---- | -------------- |
| `Interior-Design-Excellence.webp` | **All 17** |
| `Interior-design-for-living-room.webp` | South Yarra, Balwyn, Brighton, Canterbury, Toorak, Armadale, Albert Park (7) |
| `full-home-interior-design-services-.webp` | Hawthorn, South Yarra, Canterbury, Toorak, Mont Albert, Kew (+ kitchen service page) |
| `home-interior-design.webp` | Balwyn, Canterbury, Toorak, Malvern, Elwood, Camberwell, Albert Park |
| `Full-Home-Renovation.webp` | Balwyn, Toorak, Prahran (+ full-home service gallery) |
| `Full-Home-Interior-Design-Melbourne.webp` | Toorak only among locations (+ full-home service) |

**17 / 17 location pages share generic imagery.** Thin pages (Templestowe, Brighton East, Balwyn North) only add the shared Excellence photo on top of the shared hero.

Example current alts (not rewritten):

- Hawthorn: `"Bringing vision function and style together Hawthorn — Yara Luxe"`
- Toorak: `"Interior design for luxury homes Toorak 3142"`
- Brighton: `"19 years designing homes across Melbourne"` (does not mention Brighton on that file)

---

## 11. Portfolio Images

Live UI: `PortfolioMetro` uses **`thumb`** (720×720 JPG). Schema `lib/schema/pages.js` uses **`img`** (full cover). Homepage shows **12** of **17** projects (`limit={12}`). Portfolio page shows all 17.

| Project | UI image (`thumb`) | Cover (`img`) | Alt (UI) | Format | Thumb size | Thumb dims | Cover size | Cover dims |
| ------- | ------------------- | ------------- | -------- | ------ | ---------: | ---------- | ---------: | ---------- |
| A Pearl Residence | `bb-720x720.jpg` | `bb.jpg` | A Pearl Residence | JPG | 83.3 KB | 720×720 | 253.0 KB | 992×822 |
| The Velvet Noir | `bb1-1-720x720.jpg` | `bb1-1.jpg` | The Velvet Noir | JPG | ~103–120 KB band | 720×720 | 257.6 KB | 992×822 |
| Crystal Lullaby | `bottom-1-720x720.jpg` | `bottom-1.jpg` | Crystal Lullaby | JPG | 120.4 KB | 720×720 | 342.1 KB | 992×822 |
| NeoClassical Golden Elegance | `ff2-720x720.jpg` | `ff2.jpg` | NeoClassical Golden Elegance | JPG | 103.0 KB | 720×720 | 312.7 KB | 1177×840 |
| Wispers Of Provence | `Wispers-Of-Provence-Cover-720x720.jpg` | `Wispers-Of-Provence-Cover.jpg` | Wispers Of Provence | JPG | 137.4 KB | 720×720 | 372.4 KB | 1200×1227 |
| Echoes Of Celebration | `9-1-720x720.jpg` | `9-1.jpg` | Echoes Of Celebration | JPG | 76.1 KB | 720×720 | 140.8 KB | 1200×857 |
| A Retreat by The Water | `A-Retreat-by-The-Water-Cover-720x720.jpg` | `A-Retreat-by-The-Water-Cover.jpg` | A Retreat by The Water | JPG | 111.3 KB | 720×720 | 318.4 KB | 1200×1227 |
| Timeless French Provincial | `thumbnail-kitchen-720x720.jpg` | `thumbnail-kitchen.jpg` | Timeless French Provincial | JPG | 137.3 KB | 720×720 | 318.0 KB | 1000×975 |
| Evening Light | `1-720x720.jpg` | `1.jpg` (`2025/01/`) | Evening Light | JPG | 142.4 KB | 720×720 | 279.8 KB | 1200×857 |
| The Quiet Chamber | `The-Quiet-Chamber-Cover-720x720.jpg` | `The-Quiet-Chamber-Cover.jpg` | The Quiet Chamber | JPG | 116.8 KB | 720×720 | 330.7 KB | 1200×1227 |
| French Provincial with a Touch of Glam | `Glam-Cover-720x720.jpg` | `Glam-Cover.jpg` | French Provincial with a Touch of Glam | JPG | 150.0 KB | 720×720 | 297.9 KB | 1000×1023 |
| The Thought Studio | `The-Thought-Studio-Cover2-720x720.jpg` | `The-Thought-Studio-Cover2.jpg` | The Thought Studio | JPG | 95.6 KB | 720×720 | 304.7 KB | 1500×1534 |
| Blush & Becoming | `Blush-Becoming-Cover-720x720.jpg` | `Blush-Becoming-Cover.jpg` | Blush & Becoming | JPG | 141.6 KB | 720×720 | 336.7 KB | 1000×1000 |
| A Room of Ease | `A-Room-of-EaseCover-720x720.jpg` | `A-Room-of-EaseCover.jpg` | A Room of Ease | JPG | 92.4 KB | 720×720 | 364.5 KB | 1200×1227 |
| The Framed Garden | `The-Framed-GardenCover-720x720.jpg` | `The-Framed-GardenCover.jpg` | The Framed Garden | JPG | 144.0 KB | 720×720 | 302.7 KB | 1000×1000 |
| Tiny Kingdom | `Tiny-Kingdom-Cover-720x720.jpg` | `Tiny-Kingdom-Cover.jpg` | Tiny Kingdom | JPG | 109.7 KB | 720×720 | 281.3 KB | 1200×1227 |
| Blue Reflection | `7-720x720.jpg` | `7.jpg` | Blue Reflection | JPG | 146.2 KB | 720×720 | 292.5 KB | 1200×857 |

**Repeated images:** Each project has a cover + a 720 crop of the same photo (not two different photos). Covers are **not** reused across projects. Several header-gallery JPGs (`1-1.jpg`, `4-1.jpg`, …) are **different files** from portfolio `1.jpg` / `7.jpg` (different folders).

**Missing alt:** none on metro thumbs.  
**Generic filenames:** `bb.jpg`, `ff2.jpg`, `1.jpg`, `7.jpg`, `9-1.jpg`, `bottom-1.jpg`.  
**Project-name alt:** all 17 — useful as a label, not a description of materials/room. Overlay titles on the grid provide the same text. No suburb is stored on projects.

Portfolio banner CSS: `portfolio-banner-scaled-e1752675292889.jpg` 2420×694, 94.0 KB.

---

## 12. Blog Images

**No `<img>` tags inside `content` HTML** in `lib/blog-posts.json`. Featured image only.

Shared blog `PageHero` (archive + all posts): `about-us-2-banner-2.jpg` 2000×680, **615.0 KB**, CSS, no alt.

`COVER` / `Blog-top-cover-photo.jpg` (1800×612, 280.1 KB) is **not rendered**.

| Article | Featured file | Format | W×H | Size | Alt on article | Alt on archive card | Alt on home slider | Topic match (filename vs title) |
| ------- | ------------- | ------ | --- | ---- | -------------- | ------------------- | ------------------ | ------------------------------- |
| The Foundation of a Good Design: Layout Comes First | `2026/04/22-3.jpg` | JPG | 1502×992 | 372.0 KB | = title | = title | `""` if in latest 3 | Generic numbered file; interior photo |
| The Hidden Cost of Poor Material Selection… | `2026/01/Blog-5.jpg` | JPG | 1500×1000 | 236.2 KB | = title | = title | empty if slider | Generic `Blog-5` |
| How Interior Design Influences Property Value | `2026/02/11.jpg` | JPG | 1502×992 | 302.2 KB | = title | = title | | Generic `11.jpg` |
| How to Choose the Right Interior Theme… | `2026/03/44-2.jpg` | JPG | 1502×992 | **676.5 KB** | = title | = title | | Generic; **heaviest blog image** |
| Why Layout Matters More Than Furniture… | `2025/11/3-2.jpg` | JPG | 1000×667 | 252.1 KB | = title | = title | | Generic |
| Designing Rooms That Feel Bigger… | `2026/01/Blog-3.jpg` | JPG | 1000×667 | 225.0 KB | = title | = title | | Generic |
| Bringing Harmony… Curated Texture | `2026/01/blog-2.jpg` | JPG | 1500×1000 | 221.8 KB | = title | = title | | Generic |
| The Overlooked Secrets… | `2025/08/15.jpg` | JPG | 1502×998 | 240.9 KB | = title | = title | | Generic |
| Why Interior Design Should Be the First Step… | `2025/07/14-1.jpg` | JPG | 1000×666 | 225.5 KB | = title | = title | | Generic |
| How Interior Design Adds Value to Your Property | `2025/07/13-1.jpg` | JPG | 1500×1000 | 201.0 KB | = title | = title | | Generic |
| Common Interior Design Mistakes… | `2025/07/Moody-Glam-2-1.jpg` | JPG | 1200×800 | 200.8 KB | = title | = title | | Filename “Moody Glam”; title is mistakes |
| Interior Design Trends That Actually Last | `2025/07/11-2.jpg` | JPG | 1500×1000 | 210.8 KB | = title | = title | | Generic |
| Why Interior Design Should Never Be an Afterthought… | `2025/07/download-45.jpg` | JPG | 1500×1000 | 258.1 KB | = title | = title | | **download-45** leftover name |
| How to Layer Light Like a Designer | `2025/06/How-to-Layer-Light-Like-a-Designer-.jpg` | JPG | 1200×799 | 142.8 KB | = title | = title | | Filename matches title; also homepage video poster |
| 3D Rendering in Interior Design… | `2025/06/3D-Rendering-in-Interior-Design.jpg` | JPG | 1200×801 | 194.4 KB | = title | = title | | Filename matches |
| The Power of Neutrals… | `2025/05/Design-blog.jpg` | JPG | 1000×679 | 190.9 KB | = title | = title | | Vague `Design-blog` |
| How to Create a Cohesive Interior Design Concept… | `2025/04/blog-cohesive.jpg` | JPG | 1000×679 | 287.3 KB | = title | = title | | Partially related |
| Top 10 Tips for Designing a Timeless Kitchen | `2025/03/Top-10-Tips-for-Designing-a-Timeless-Kitchen-1.jpg` | JPG | 1800×1200 | 242.4 KB | = title | = title | | Filename matches kitchen topic |

Author box (every post): `donia-avatar-132.jpg` 32.6 KB + `donia-avatar-264.jpg` 114.3 KB, alt `"Donia Yara"`, dimensions set; CSS bg `bg-author-bio.jpg` 14.1 KB.

Prev/next thumbs: **same featured JPG**, `alt=""`.

---

## 13. Logo / Favicon

| Role | Path | Format | Dims | Size | Alt | Where |
| ---- | ---- | ------ | ---- | ---- | --- | ----- |
| **Visible logo** | `/uploads/2020/04/Main-1-copy-2-2.png` | PNG | 13352×7404 | 948.0 KB | Header/Footer: `Yara Luxe Interiors`; preloader: `""` | `Header.js`, `Footer.js`; CSS height 62px / 54px, inverted filter |
| **Schema logo** | same file via `LOGO_PATH` | PNG | same | same | n/a (JSON-LD `logo` + `image` on LocalBusiness) | `lib/schema/constants.js`, `business.js` → `https://yaraluxeinteriors.com.au/uploads/2020/04/Main-1-copy-2-2.png` |
| **Favicon** | `/uploads/2024/11/cropped-web-app-manifest-512x512-1-32x32.png` | PNG | **32×32** | 0.7 KB | n/a (`rel="icon"`) | `app/layout.js` only |
| Apple/app icons | — | — | — | — | — | **None** (`apple-touch-icon` / `app/icon` not present) |
| Founder schema image | `/uploads/2025/07/P5-3.jpg` | JPG | 1200×1200 | 209.4 KB | On About page: `Donia Yara` | `FOUNDER_IMAGE_PATH` |

Visible logo, schema logo, and favicon are **three different roles**; schema and visible logo **share one oversized PNG**. Favicon is a **separate 32×32** crop (filename still says 512×512).

---

## 14. Open Graph / Social Images

Checked: `app/layout.js`, all `app/**/page.js`, `lib/seo.js` usage. **No** `openGraph.images`, **no** `twitter` card images, **no** `opengraph-image.*` / `twitter-image.*` files.

Root metadata is `metadataBase`, `title`, `description`, `alternates.canonical` only.

| Page type | OG image | Twitter image | Status |
| --------- | -------- | ------------- | ------ |
| Homepage | none | none | **Missing** |
| About / Process / FAQs / Contact / Portfolio | none | none | **Missing** |
| 8 service pages | none | none | **Missing** |
| 17 location pages | none | none | **Missing** |
| Blog archive | none | none | **Missing** |
| 18 blog posts | none (article schema *does* set `image` in JSON-LD from `post.img`) | none | **Missing social meta**; schema image exists for crawlers that read JSON-LD |
| `/test-homepage` | none | none | Missing (noindex) |

**Default social image:** none.  
**Page-specific OG:** none.  
**Article OG:** none.

JSON-LD is not a substitute for `og:image` tags.

---

## 15. EXIF / Geo Data

Checked with `sharp` metadata on all **97 JPG/JPEG** files.

| Finding | Result |
| ------- | ------ |
| EXIF payload present | **Yes: 89 / 97 JPG** |
| GPS coordinates present | **No: 0 / 97** |
| PNG/WebP GPS | Not applicable to this check (JPG-only as requested); none flagged |

No files were written or had metadata modified. Geotagging is **not** treated as an SEO requirement here; this is a factual count only.

---

## 16. Duplicate / Reused Images

Reuse is listed as fact, not automatically an SEO error.

| File | Reuse |
| ---- | ----- |
| `Main-1-copy-2-2.png` | Header, footer, preloader, schema logo/image |
| `Modern-Interior-Design-for-Contemporary-Homes.webp` | All 17 location heroes **and** CTAs; full-home service hero/CTA |
| `Interior-Design-Excellence.webp` | All 17 locations; full-home service (content + gallery) |
| `Interior-design-for-living-room.webp` | 7 locations + full-home service |
| `full-home-interior-design-services-.webp` | 6 locations + kitchen service + full-home service |
| `home-interior-design.webp` | 7 locations + full-home service |
| `Full-Home-Renovation.webp` | 3 locations + full-home gallery |
| `How-to-Layer-Light-Like-a-Designer-.jpg` | Homepage video poster **and** blog featured |
| `bg3-home2.png` | Homepage blog section **and** FAQ spacer |
| Blog featured JPGs | Archive card + post body + optional home/process slider + prev/next thumbs + Article schema |
| Portfolio `img` vs `thumb` | Same photo, two files |
| `supervision1.webp` | Supervision content img **and** CTA background |
| `P5-3.jpg` | About page + Person schema |
| Header gallery JPGs | Every page (drawer) |

Homepage feature photos are **not** the same files as service WebPs.

---

## 17. Critical Issues

### Critical

1. **No Open Graph / Twitter images** on any indexable URL — social/share indexing has no dedicated image.
2. **Logo asset is 13,352×7,404 / 948 KB** for a ~62px display; also used as schema `logo`/`image`.
3. **No Next.js `<Image>`**; originals ship as-is. Combined with **eager loading of all below-the-fold photos**, this is a material performance issue.
4. **Empty alt on multiple content photos** (homepage features, about, process, partners, sliders, blog nav) — accessibility and image search.
5. **Almost no `width`/`height`** on `<img>` — layout-shift risk on service/location/blog article images.
6. **17 location pages share the same generic hero + the same Excellence WebP** while alts claim the suburb — thin/duplicative image signals.

### High

7. **60 files > 200 KB**, including banners served on every blog URL (615 KB) and process hero (680 KB).
8. **97 JPG + 15 PNG** still used where WebP already exists for services.
9. **Blog featured alts are titles only**; **18/18** lack a photo description; several filenames are `11.jpg` / `download-45.jpg`.
10. **No image sitemap** extensions.
11. **Favicon is 32×32 only**; no apple-touch / 192/512 app icons.
12. South Yarra **living-room file / commercial alt** mismatch; commercial **Luxury filename / Affordable alt**.

### Medium

13. Partner logos: empty alt, 2560–3000px sources for 70px display.
14. Portfolio filenames `bb.jpg` / `1.jpg` / `ff2.jpg`; alts are project titles only.
15. `PageHero` and location heroes are CSS backgrounds — not in HTML image index, no alt.
16. Unused `COVER` constant / unused `PortfolioGrid` full-size images still on disk.
17. Header drawer loads **9 JPGs (~180–360 KB each)** site-wide.

### Low

18. Mild keyword-style service alts and filenames (`-melbourne-company`, trailing hyphen).
19. `supervision5jpg.webp` leftover naming.
20. Title attributes on photos: **none** (not required).
21. EXIF present on 89 JPGs without GPS — optional later strip for privacy/size; not an SEO defect.

---

## 18. Recommended Fix Priority

**Do not treat this list as work completed.** Order only.

1. Add default + page-type **OG/Twitter images** (home, services, locations, articles).
2. Replace logo with a **small WebP/SVG/PNG** sized for header/footer; keep schema URL in sync.
3. Introduce **`next/image`** (or equivalent `srcset`) with correct `sizes`; `priority` only on true LCP stills; **lazy** below the fold.
4. Put **width/height** (or CSS aspect-ratio) on remaining `<img>`s.
5. Fill **empty content alts**; keep decorative gallery/preloader empty if they stay decorative; give **partner logos brand names**.
6. Compress/rebuild **banners > 500 KB** and blog JPGs; convert remaining JPG/PNG where quality allows.
7. Decide a **location image policy**: unique photos vs honest generic alts that do **not** imply the photo is from that suburb.
8. Align mismatched alts (South Yarra commercial/living room; Affordable vs Luxury commercial).
9. Optional: image sitemap, apple-touch icons, strip EXIF, rename generic files **after** a separate rename task.

---

## Other requested checks (short)

### Image title attribute

**No** `title` on content `<img>`. SVG social links in `BlogAuthor` / contact use `title={s.name}` (Facebook, LinkedIn, Instagram) — useful, not spammy, not image SEO.

### Captions / nearby context

| Area | Context |
| ---- | ------- |
| Service pages | Headings next to images — useful |
| Location pages | Headings next to reused photos — copy is local; **photo is not documented as local** |
| Portfolio | Title overlay = alt = project name — repetitive but consistent |
| Homepage features | Heading next to empty-alt photo — heading helps; alt still empty |
| Process values | Heading “Core Company Values” beside empty-alt photos |
| Blog | Title is in `<h1>` and in featured alt — duplicate text, no caption |

### Image sitemap

`app/sitemap.js` → `sitemapEntries()` returns `{ url, lastModified }` only. **No** `images` array, **no** Google image sitemap namespace.

---

## Appendix A — Unique file inventory (all 193)

Dimensions and sizes from disk. Alt/loading vary by page (see sections 8–16).


| Path | Filename | Format | Width | Height | File Size |
| ---- | -------- | ------ | ----: | -----: | --------: |
| /uploads/2020/04/bg-features.jpg | bg-features.jpg | JPG | 350 | 90 | 1.9 KB |
| /uploads/2020/04/Main-1-copy-2-2.png | Main-1-copy-2-2.png | PNG | 13352 | 7404 | 948.0 KB |
| /uploads/2020/05/bg1-aboutus.jpg | bg1-aboutus.jpg | JPG | 1920 | 705 | 60.2 KB |
| /uploads/2020/05/bg1-contact.jpg | bg1-contact.jpg | JPG | 510 | 680 | 15.0 KB |
| /uploads/2020/05/bg1-home1.jpg | bg1-home1.jpg | JPG | 1920 | 325 | 22.5 KB |
| /uploads/2020/05/bg1-process.png | bg1-process.png | PNG | 1920 | 1612 | 83.6 KB |
| /uploads/2020/05/bg2-process.jpg | bg2-process.jpg | JPG | 1920 | 865 | 120.4 KB |
| /uploads/2020/05/bg2-process.png | bg2-process.png | PNG | 620 | 801 | 38.5 KB |
| /uploads/2020/06/bg1-home2.jpg | bg1-home2.jpg | JPG | 1920 | 1415 | 74.7 KB |
| /uploads/2020/06/bg3-home2.png | bg3-home2.png | PNG | 1403 | 912 | 72.9 KB |
| /uploads/2023/07/The-Quiet-Chamber-Cover-720x720.jpg | The-Quiet-Chamber-Cover-720x720.jpg | JPG | 720 | 720 | 116.8 KB |
| /uploads/2023/07/The-Quiet-Chamber-Cover.jpg | The-Quiet-Chamber-Cover.jpg | JPG | 1200 | 1227 | 330.7 KB |
| /uploads/2023/07/Tiny-Kingdom-Cover-720x720.jpg | Tiny-Kingdom-Cover-720x720.jpg | JPG | 720 | 720 | 109.7 KB |
| /uploads/2023/07/Tiny-Kingdom-Cover.jpg | Tiny-Kingdom-Cover.jpg | JPG | 1200 | 1227 | 281.3 KB |
| /uploads/2024/07/1-1.jpg | 1-1.jpg | JPG | 1200 | 857 | 279.0 KB |
| /uploads/2024/07/4-1.jpg | 4-1.jpg | JPG | 1200 | 857 | 255.0 KB |
| /uploads/2024/07/5-1.jpg | 5-1.jpg | JPG | 1200 | 857 | 234.6 KB |
| /uploads/2024/07/6-1.jpg | 6-1.jpg | JPG | 1200 | 857 | 244.0 KB |
| /uploads/2024/07/7-1.jpg | 7-1.jpg | JPG | 1200 | 857 | 195.7 KB |
| /uploads/2024/07/8-1.jpg | 8-1.jpg | JPG | 1200 | 857 | 215.3 KB |
| /uploads/2024/07/9.jpg | 9.jpg | JPG | 1200 | 857 | 184.4 KB |
| /uploads/2024/07/Blush-Becoming-Cover-720x720.jpg | Blush-Becoming-Cover-720x720.jpg | JPG | 720 | 720 | 141.6 KB |
| /uploads/2024/07/Blush-Becoming-Cover.jpg | Blush-Becoming-Cover.jpg | JPG | 1000 | 1000 | 336.7 KB |
| /uploads/2024/07/Glam-Cover-720x720.jpg | Glam-Cover-720x720.jpg | JPG | 720 | 720 | 150.0 KB |
| /uploads/2024/07/Glam-Cover.jpg | Glam-Cover.jpg | JPG | 1000 | 1023 | 297.9 KB |
| /uploads/2024/10/1.jpg | 1.jpg | JPG | 1200 | 857 | 264.2 KB |
| /uploads/2024/10/13.jpg | 13.jpg | JPG | 1000 | 750 | 362.1 KB |
| /uploads/2024/10/The-Framed-GardenCover-720x720.jpg | The-Framed-GardenCover-720x720.jpg | JPG | 720 | 720 | 144.0 KB |
| /uploads/2024/10/The-Framed-GardenCover.jpg | The-Framed-GardenCover.jpg | JPG | 1000 | 1000 | 302.7 KB |
| /uploads/2024/11/A-Retreat-by-The-Water-Cover-720x720.jpg | A-Retreat-by-The-Water-Cover-720x720.jpg | JPG | 720 | 720 | 111.3 KB |
| /uploads/2024/11/A-Retreat-by-The-Water-Cover.jpg | A-Retreat-by-The-Water-Cover.jpg | JPG | 1200 | 1227 | 318.4 KB |
| /uploads/2024/11/cropped-web-app-manifest-512x512-1-32x32.png | cropped-web-app-manifest-512x512-1-32x32.png | PNG | 32 | 32 | 0.7 KB |
| /uploads/2025/01/1-720x720.jpg | 1-720x720.jpg | JPG | 720 | 720 | 142.4 KB |
| /uploads/2025/01/1.jpg | 1.jpg | JPG | 1200 | 857 | 279.8 KB |
| /uploads/2025/02/7-720x720.jpg | 7-720x720.jpg | JPG | 720 | 720 | 146.2 KB |
| /uploads/2025/02/7.jpg | 7.jpg | JPG | 1200 | 857 | 292.5 KB |
| /uploads/2025/03/A-Room-of-EaseCover-720x720.jpg | A-Room-of-EaseCover-720x720.jpg | JPG | 720 | 720 | 92.4 KB |
| /uploads/2025/03/A-Room-of-EaseCover.jpg | A-Room-of-EaseCover.jpg | JPG | 1200 | 1227 | 364.5 KB |
| /uploads/2025/03/Top-10-Tips-for-Designing-a-Timeless-Kitchen-1.jpg | Top-10-Tips-for-Designing-a-Timeless-Kitchen-1.jpg | JPG | 1800 | 1200 | 242.4 KB |
| /uploads/2025/04/9-1-720x720.jpg | 9-1-720x720.jpg | JPG | 720 | 720 | 76.1 KB |
| /uploads/2025/04/9-1.jpg | 9-1.jpg | JPG | 1200 | 857 | 140.8 KB |
| /uploads/2025/04/blog-cohesive.jpg | blog-cohesive.jpg | JPG | 1000 | 679 | 287.3 KB |
| /uploads/2025/05/Design-blog.jpg | Design-blog.jpg | JPG | 1000 | 679 | 190.9 KB |
| /uploads/2025/05/The-Thought-Studio-Cover2-720x720.jpg | The-Thought-Studio-Cover2-720x720.jpg | JPG | 720 | 720 | 95.6 KB |
| /uploads/2025/05/The-Thought-Studio-Cover2.jpg | The-Thought-Studio-Cover2.jpg | JPG | 1500 | 1534 | 304.7 KB |
| /uploads/2025/06/3D-Rendering-in-Interior-Design.jpg | 3D-Rendering-in-Interior-Design.jpg | JPG | 1200 | 801 | 194.4 KB |
| /uploads/2025/06/Blog-top-cover-photo.jpg | Blog-top-cover-photo.jpg | JPG | 1800 | 612 | 280.1 KB |
| /uploads/2025/06/How-to-Layer-Light-Like-a-Designer-.jpg | How-to-Layer-Light-Like-a-Designer-.jpg | JPG | 1200 | 799 | 142.8 KB |
| /uploads/2025/07/11-2.jpg | 11-2.jpg | JPG | 1500 | 1000 | 210.8 KB |
| /uploads/2025/07/13-1.jpg | 13-1.jpg | JPG | 1500 | 1000 | 201.0 KB |
| /uploads/2025/07/14-1.jpg | 14-1.jpg | JPG | 1000 | 666 | 225.5 KB |
| /uploads/2025/07/about-us-2-banner-2.jpg | about-us-2-banner-2.jpg | JPG | 2000 | 680 | 615.0 KB |
| /uploads/2025/07/about-us-down.jpg | about-us-down.jpg | JPG | 1300 | 1300 | 296.9 KB |
| /uploads/2025/07/about-us2.jpg | about-us2.jpg | JPG | 1200 | 1200 | 232.9 KB |
| /uploads/2025/07/adairs-b-4.png | adairs-b-4.png | PNG | 1552 | 1200 | 44.6 KB |
| /uploads/2025/07/adairs-w-5.png | adairs-w-5.png | PNG | 1552 | 1200 | 47.9 KB |
| /uploads/2025/07/backgroundlow-dark-light-2.jpg | backgroundlow-dark-light-2.jpg | JPG | 1500 | 844 | 505.5 KB |
| /uploads/2025/07/contact-us-banner-2-1.jpg | contact-us-banner-2-1.jpg | JPG | 1500 | 517 | 237.0 KB |
| /uploads/2025/07/download-45.jpg | download-45.jpg | JPG | 1500 | 1000 | 258.1 KB |
| /uploads/2025/07/FAQ-banner.jpg | FAQ-banner.jpg | JPG | 1800 | 531 | 282.8 KB |
| /uploads/2025/07/Moody-Glam-2-1.jpg | Moody-Glam-2-1.jpg | JPG | 1200 | 800 | 200.8 KB |
| /uploads/2025/07/ONLY-Donia-Yara-W-no-dot-1-scaled.png | ONLY-Donia-Yara-W-no-dot-1-scaled.png | PNG | 2560 | 1707 | 13.5 KB |
| /uploads/2025/07/our-process-banner-1.jpg | our-process-banner-1.jpg | JPG | 2000 | 650 | 680.4 KB |
| /uploads/2025/07/P1-1.jpg | P1-1.jpg | JPG | 1200 | 1500 | 369.7 KB |
| /uploads/2025/07/P1-2.jpg | P1-2.jpg | JPG | 1200 | 1500 | 223.3 KB |
| /uploads/2025/07/P1-33.jpg | P1-33.jpg | JPG | 1200 | 1499 | 228.8 KB |
| /uploads/2025/07/P15-1.jpg | P15-1.jpg | JPG | 1000 | 1380 | 360.7 KB |
| /uploads/2025/07/P15-2.jpg | P15-2.jpg | JPG | 1200 | 1656 | 200.1 KB |
| /uploads/2025/07/P15-3.jpg | P15-3.jpg | JPG | 1200 | 675 | 25.1 KB |
| /uploads/2025/07/P15-4.jpg | P15-4.jpg | JPG | 1200 | 675 | 26.3 KB |
| /uploads/2025/07/P15-5.jpg | P15-5.jpg | JPG | 1200 | 676 | 26.0 KB |
| /uploads/2025/07/P15-6.jpg | P15-6.jpg | JPG | 1200 | 675 | 39.3 KB |
| /uploads/2025/07/P15-7.jpg | P15-7.jpg | JPG | 1200 | 675 | 23.6 KB |
| /uploads/2025/07/P4-1.jpg | P4-1.jpg | JPG | 1800 | 1152 | 100.2 KB |
| /uploads/2025/07/P5-3.jpg | P5-3.jpg | JPG | 1200 | 1200 | 209.4 KB |
| /uploads/2025/07/p6-1our-vision-Left-photo.jpg | p6-1our-vision-Left-photo.jpg | JPG | 1800 | 1800 | 239.6 KB |
| /uploads/2025/07/p6-2our-mission-middle-photo.jpg | p6-2our-mission-middle-photo.jpg | JPG | 1800 | 1800 | 154.8 KB |
| /uploads/2025/07/P6-3our-values-right-photo.jpg | P6-3our-values-right-photo.jpg | JPG | 1800 | 1800 | 266.4 KB |
| /uploads/2025/07/png-coco-white-scaled.png | png-coco-white-scaled.png | PNG | 2560 | 1280 | 37.3 KB |
| /uploads/2025/07/png-freedom-white-scaled.png | png-freedom-white-scaled.png | PNG | 2560 | 1280 | 31.6 KB |
| /uploads/2025/07/png-koala111B.png | png-koala111B.png | PNG | 3000 | 1500 | 170.8 KB |
| /uploads/2025/07/png-koala111white.png | png-koala111white.png | PNG | 3000 | 1500 | 257.5 KB |
| /uploads/2025/07/png-pottery-white-1-scaled.png | png-pottery-white-1-scaled.png | PNG | 2560 | 1280 | 34.7 KB |
| /uploads/2025/07/png-provincial-white-scaled.png | png-provincial-white-scaled.png | PNG | 2560 | 1280 | 100.2 KB |
| /uploads/2025/07/png-west-elm-white-scaled.png | png-west-elm-white-scaled.png | PNG | 2560 | 1280 | 46.3 KB |
| /uploads/2025/07/portfolio-banner-scaled-e1752675292889.jpg | portfolio-banner-scaled-e1752675292889.jpg | JPG | 2420 | 694 | 94.0 KB |
| /uploads/2025/07/testimonial.jpg | testimonial.jpg | JPG | 1200 | 1187 | 249.8 KB |
| /uploads/2025/07/thumbnail-kitchen-720x720.jpg | thumbnail-kitchen-720x720.jpg | JPG | 720 | 720 | 137.3 KB |
| /uploads/2025/07/thumbnail-kitchen.jpg | thumbnail-kitchen.jpg | JPG | 1000 | 975 | 318.0 KB |
| /uploads/2025/07/Untitled-2-1.png | Untitled-2-1.png | PNG | 1000 | 996 | 388.2 KB |
| /uploads/2025/07/Wispers-Of-Provence-Cover-720x720.jpg | Wispers-Of-Provence-Cover-720x720.jpg | JPG | 720 | 720 | 137.4 KB |
| /uploads/2025/07/Wispers-Of-Provence-Cover.jpg | Wispers-Of-Provence-Cover.jpg | JPG | 1200 | 1227 | 372.4 KB |
| /uploads/2025/08/15.jpg | 15.jpg | JPG | 1502 | 998 | 240.9 KB |
| /uploads/2025/11/3-2.jpg | 3-2.jpg | JPG | 1000 | 667 | 252.1 KB |
| /uploads/2026/01/blog-2.jpg | blog-2.jpg | JPG | 1500 | 1000 | 221.8 KB |
| /uploads/2026/01/Blog-3.jpg | Blog-3.jpg | JPG | 1000 | 667 | 225.0 KB |
| /uploads/2026/01/Blog-5.jpg | Blog-5.jpg | JPG | 1500 | 1000 | 236.2 KB |
| /uploads/2026/02/11.jpg | 11.jpg | JPG | 1502 | 992 | 302.2 KB |
| /uploads/2026/03/44-2.jpg | 44-2.jpg | JPG | 1502 | 992 | 676.5 KB |
| /uploads/2026/03/ff2-720x720.jpg | ff2-720x720.jpg | JPG | 720 | 720 | 103.0 KB |
| /uploads/2026/03/ff2.jpg | ff2.jpg | JPG | 1177 | 840 | 312.7 KB |
| /uploads/2026/03/P2-1.jpg | P2-1.jpg | JPG | 1200 | 1219 | 366.1 KB |
| /uploads/2026/04/22-3.jpg | 22-3.jpg | JPG | 1502 | 992 | 372.0 KB |
| /uploads/2026/04/banner-about-us-dark-low-2-scaled-e1752707007475-1.jpg | banner-about-us-dark-low-2-scaled-e1752707007475-1.jpg | JPG | 2505 | 887 | 387.1 KB |
| /uploads/2026/04/bottom-1-720x720.jpg | bottom-1-720x720.jpg | JPG | 720 | 720 | 120.4 KB |
| /uploads/2026/04/bottom-1.jpg | bottom-1.jpg | JPG | 992 | 822 | 342.1 KB |
| /uploads/2026/05/bb-720x720.jpg | bb-720x720.jpg | JPG | 720 | 720 | 83.3 KB |
| /uploads/2026/05/bb.jpg | bb.jpg | JPG | 992 | 822 | 253.0 KB |
| /uploads/2026/05/bb1-1-720x720.jpg | bb1-1-720x720.jpg | JPG | 720 | 720 | 97.4 KB |
| /uploads/2026/05/bb1-1.jpg | bb1-1.jpg | JPG | 992 | 822 | 257.6 KB |
| /uploads/2026/06/Affordable-interior-designers-Melbourne-1.webp | Affordable-interior-designers-Melbourne-1.webp | WEBP | 1000 | 950 | 30.1 KB |
| /uploads/2026/06/Affordable-interior-designers-Melbourne.webp | Affordable-interior-designers-Melbourne.webp | WEBP | 1000 | 950 | 53.3 KB |
| /uploads/2026/06/Affordable-residential-interior-design-melbourne.webp | Affordable-residential-interior-design-melbourne.webp | WEBP | 1000 | 950 | 72.1 KB |
| /uploads/2026/06/bathroom-interior-design.webp | bathroom-interior-design.webp | WEBP | 1516 | 1076 | 131.6 KB |
| /uploads/2026/06/bathroom-interior-designer-melbourne.webp | bathroom-interior-designer-melbourne.webp | WEBP | 900 | 600 | 49.0 KB |
| /uploads/2026/06/bathroom-interior-designer.webp | bathroom-interior-designer.webp | WEBP | 1000 | 950 | 42.3 KB |
| /uploads/2026/06/bathroom-interior-designers.webp | bathroom-interior-designers.webp | WEBP | 1000 | 950 | 37.1 KB |
| /uploads/2026/06/bathroom-interior.webp | bathroom-interior.webp | WEBP | 1000 | 950 | 55.4 KB |
| /uploads/2026/06/bathroom-renovation-interior-designer-melbourne.webp | bathroom-renovation-interior-designer-melbourne.webp | WEBP | 900 | 600 | 41.5 KB |
| /uploads/2026/06/Best-interior-designers-Melbourne-1.webp | Best-interior-designers-Melbourne-1.webp | WEBP | 1000 | 950 | 107.9 KB |
| /uploads/2026/06/Best-interior-designers-Melbourne.webp | Best-interior-designers-Melbourne.webp | WEBP | 1000 | 950 | 77.8 KB |
| /uploads/2026/06/best-kitchen-renovations-melbourne.webp | best-kitchen-renovations-melbourne.webp | WEBP | 900 | 600 | 98.7 KB |
| /uploads/2026/06/Best-residential-interior-design-melbourne.webp | Best-residential-interior-design-melbourne.webp | WEBP | 1000 | 950 | 83.8 KB |
| /uploads/2026/06/color-consultation-interior-design.webp | color-consultation-interior-design.webp | WEBP | 1377 | 918 | 188.7 KB |
| /uploads/2026/06/colour-consultation-interior-design.webp | colour-consultation-interior-design.webp | WEBP | 1000 | 950 | 80.4 KB |
| /uploads/2026/06/commercial-interior-design-near-me.webp | commercial-interior-design-near-me.webp | WEBP | 900 | 600 | 71.7 KB |
| /uploads/2026/06/commercial-interior-design.webp | commercial-interior-design.webp | WEBP | 1000 | 950 | 55.8 KB |
| /uploads/2026/06/commercial-office-interior-design.webp | commercial-office-interior-design.webp | WEBP | 900 | 600 | 66.7 KB |
| /uploads/2026/06/Full-Home-Interior-Design-Melbourne.webp | Full-Home-Interior-Design-Melbourne.webp | WEBP | 900 | 600 | 57.8 KB |
| /uploads/2026/06/full-home-interior-design-services-.webp | full-home-interior-design-services-.webp | WEBP | 900 | 600 | 78.6 KB |
| /uploads/2026/06/Full-Home-Renovation.webp | Full-Home-Renovation.webp | WEBP | 1000 | 950 | 59.5 KB |
| /uploads/2026/06/home-interior-design.webp | home-interior-design.webp | WEBP | 900 | 600 | 92.0 KB |
| /uploads/2026/06/Hospitality-interior-design-Melbourne.webp | Hospitality-interior-design-Melbourne.webp | WEBP | 884 | 859 | 42.1 KB |
| /uploads/2026/06/interior-design-consultation-australia.webp | interior-design-consultation-australia.webp | WEBP | 886 | 592 | 37.2 KB |
| /uploads/2026/06/interior-design-consultation-price.webp | interior-design-consultation-price.webp | WEBP | 1000 | 950 | 35.5 KB |
| /uploads/2026/06/interior-design-consultation-services.webp | interior-design-consultation-services.webp | WEBP | 1000 | 950 | 155.1 KB |
| /uploads/2026/06/interior-design-consultation.webp | interior-design-consultation.webp | WEBP | 900 | 600 | 39.9 KB |
| /uploads/2026/06/Interior-Design-Excellence.webp | Interior-Design-Excellence.webp | WEBP | 1000 | 950 | 130.6 KB |
| /uploads/2026/06/interior-design-for-commercial.webp | interior-design-for-commercial.webp | WEBP | 900 | 600 | 22.2 KB |
| /uploads/2026/06/Interior-design-for-living-room.webp | Interior-design-for-living-room.webp | WEBP | 900 | 600 | 106.4 KB |
| /uploads/2026/06/interior-design-for-new-build-homes.webp | interior-design-for-new-build-homes.webp | WEBP | 900 | 600 | 50.0 KB |
| /uploads/2026/06/interior-design-for-residential-house.webp | interior-design-for-residential-house.webp | WEBP | 1000 | 950 | 100.4 KB |
| /uploads/2026/06/interior-design-ideas-for-new-build-homes.webp | interior-design-ideas-for-new-build-homes.webp | WEBP | 900 | 600 | 63.9 KB |
| /uploads/2026/06/interior-design-initial-consultation.webp | interior-design-initial-consultation.webp | WEBP | 1900 | 850 | 92.3 KB |
| /uploads/2026/06/interior-design-new-build-homes.webp | interior-design-new-build-homes.webp | WEBP | 1000 | 950 | 105.6 KB |
| /uploads/2026/06/interior-design-onsite-consultation.webp | interior-design-onsite-consultation.webp | WEBP | 1000 | 950 | 126.6 KB |
| /uploads/2026/06/interior-design-residential.webp | interior-design-residential.webp | WEBP | 1900 | 850 | 73.1 KB |
| /uploads/2026/06/Interior-design-services-Melbourne.webp | Interior-design-services-Melbourne.webp | WEBP | 1000 | 950 | 77.4 KB |
| /uploads/2026/06/interior-designer-for-bathroom-remodel.webp | interior-designer-for-bathroom-remodel.webp | WEBP | 900 | 600 | 69.7 KB |
| /uploads/2026/06/kitchen-designers-melbourne.webp | kitchen-designers-melbourne.webp | WEBP | 1000 | 950 | 55.0 KB |
| /uploads/2026/06/kitchen-interior-design-ideas.webp | kitchen-interior-design-ideas.webp | WEBP | 1900 | 850 | 145.1 KB |
| /uploads/2026/06/kitchen-interior-design.webp | kitchen-interior-design.webp | WEBP | 900 | 600 | 74.8 KB |
| /uploads/2026/06/kitchen-interior-designer-melbourne.webp | kitchen-interior-designer-melbourne.webp | WEBP | 1900 | 850 | 153.8 KB |
| /uploads/2026/06/kitchen-remodelling-melbourne.webp | kitchen-remodelling-melbourne.webp | WEBP | 1000 | 950 | 56.2 KB |
| /uploads/2026/06/kitchen-renovation-melbourne.webp | kitchen-renovation-melbourne.webp | WEBP | 1000 | 950 | 86.2 KB |
| /uploads/2026/06/kitchen-renovations-in-melbourne.webp | kitchen-renovations-in-melbourne.webp | WEBP | 1000 | 950 | 53.4 KB |
| /uploads/2026/06/kitchen-renovations-melbourne.webp | kitchen-renovations-melbourne.webp | WEBP | 900 | 600 | 77.1 KB |
| /uploads/2026/06/luxury-bathroom-interior-design.webp | luxury-bathroom-interior-design.webp | WEBP | 1900 | 850 | 87.6 KB |
| /uploads/2026/06/Luxury-commercial-interior-design-melbourne.webp | Luxury-commercial-interior-design-melbourne.webp | WEBP | 900 | 600 | 52.8 KB |
| /uploads/2026/06/luxury-home-interior-design-Melbourne-company.webp | luxury-home-interior-design-Melbourne-company.webp | WEBP | 1000 | 950 | 118.5 KB |
| /uploads/2026/06/Luxury-Home-Interior-Design-Melbourne.webp | Luxury-Home-Interior-Design-Melbourne.webp | WEBP | 900 | 600 | 99.3 KB |
| /uploads/2026/06/melbourne-kitchen-renovations.webp | melbourne-kitchen-renovations.webp | WEBP | 1038 | 950 | 64.3 KB |
| /uploads/2026/06/modern-bathroom-interior-design.webp | modern-bathroom-interior-design.webp | WEBP | 1000 | 950 | 60.1 KB |
| /uploads/2026/06/Modern-Interior-Design-for-Contemporary-Homes.webp | Modern-Interior-Design-for-Contemporary-Homes.webp | WEBP | 1900 | 850 | 71.8 KB |
| /uploads/2026/06/Modern-Interior-Design.webp | Modern-Interior-Design.webp | WEBP | 1000 | 950 | 93.6 KB |
| /uploads/2026/06/New-Build-Banner.webp | New-Build-Banner.webp | WEBP | 1900 | 850 | 37.3 KB |
| /uploads/2026/06/new-build-flat-interior-design.webp | new-build-flat-interior-design.webp | WEBP | 1000 | 950 | 106.4 KB |
| /uploads/2026/06/new-build-home-interior-design.webp | new-build-home-interior-design.webp | WEBP | 1000 | 950 | 72.3 KB |
| /uploads/2026/06/new-build-homes-interior-design.webp | new-build-homes-interior-design.webp | WEBP | 900 | 600 | 70.8 KB |
| /uploads/2026/06/new-build-interior-design.webp | new-build-interior-design.webp | WEBP | 900 | 600 | 85.1 KB |
| /uploads/2026/06/new-build-interior-designers.webp | new-build-interior-designers.webp | WEBP | 1000 | 950 | 67.4 KB |
| /uploads/2026/06/new-build-interior.webp | new-build-interior.webp | WEBP | 1000 | 950 | 80.1 KB |
| /uploads/2026/06/online-consultation-interior-design.webp | online-consultation-interior-design.webp | WEBP | 1000 | 950 | 123.3 KB |
| /uploads/2026/06/residential-interior-design-companies.webp | residential-interior-design-companies.webp | WEBP | 900 | 600 | 79.2 KB |
| /uploads/2026/06/Residential-interior-design-melbourne-cost.webp | Residential-interior-design-melbourne-cost.webp | WEBP | 900 | 600 | 76.1 KB |
| /uploads/2026/06/residential-interior-design.webp | residential-interior-design.webp | WEBP | 900 | 600 | 68.4 KB |
| /uploads/2026/06/small-bathroom-interior-design.webp | small-bathroom-interior-design.webp | WEBP | 1000 | 950 | 68.7 KB |
| /uploads/2026/06/Small-commercial-interior-design-melbourne.webp | Small-commercial-interior-design-melbourne.webp | WEBP | 1900 | 850 | 65.3 KB |
| /uploads/2026/06/Small-residential-interior-design-melbourne.webp | Small-residential-interior-design-melbourne.webp | WEBP | 900 | 600 | 81.0 KB |
| /uploads/2026/06/supervision1.webp | supervision1.webp | WEBP | 900 | 600 | 101.7 KB |
| /uploads/2026/06/supervision10.webp | supervision10.webp | WEBP | 1000 | 950 | 123.3 KB |
| /uploads/2026/06/supervision2.webp | supervision2.webp | WEBP | 1176 | 784 | 131.8 KB |
| /uploads/2026/06/supervision3.webp | supervision3.webp | WEBP | 900 | 600 | 88.0 KB |
| /uploads/2026/06/supervision4.webp | supervision4.webp | WEBP | 900 | 600 | 93.9 KB |
| /uploads/2026/06/supervision5jpg.webp | supervision5jpg.webp | WEBP | 900 | 600 | 73.5 KB |
| /uploads/2026/06/supervision6.webp | supervision6.webp | WEBP | 1000 | 950 | 110.6 KB |
| /uploads/2026/06/supervision7.webp | supervision7.webp | WEBP | 1000 | 950 | 86.3 KB |
| /uploads/2026/06/supervision8.webp | supervision8.webp | WEBP | 1000 | 950 | 93.2 KB |
| /uploads/2026/06/supervision9.webp | supervision9.webp | WEBP | 1000 | 950 | 66.8 KB |
| /uploads/2026/06/supervisionBanner.webp | supervisionBanner.webp | WEBP | 1900 | 850 | 107.0 KB |
| /uploads/misc/bg-author-bio.jpg | bg-author-bio.jpg | JPG | 870 | 290 | 14.1 KB |
| /uploads/misc/donia-avatar-132.jpg | donia-avatar-132.jpg | JPG | 132 | 132 | 32.6 KB |
| /uploads/misc/donia-avatar-264.jpg | donia-avatar-264.jpg | JPG | 264 | 264 | 114.3 KB |
