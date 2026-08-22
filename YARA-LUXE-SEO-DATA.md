# Yara Luxe Interiors — SEO Data Extraction (Read-Only)

**Audit date:** 21 August 2026  
**Codebase:** `C:\Users\HUSSNAIN.COM\Desktop\yara-luxe-next` (Next.js 15 App Router)  
**Public domain referenced in schema only:** `https://yaraluxeinteriors.com.au`  
**URL style in code:** no trailing slash. Next.js permanently redirects `/:path+/` → `/:path+`.  
**This file is a factual extraction only.** No metadata, copy, redirects, or URLs were changed.

---

## Verified CTR Assets

| Asset | Verdict | Exact meaning from the website |
|---|---|---|
| **19+ Years Experience** | **YES** (with wording inconsistency) | Repeated as **19 years**, **19+ years**, **more than 19 years**, **nearly 20 years**, **about 20 years**, **over two decades**, and once **more than eighteen years**. It refers to **industry / interior design experience of the designer/team**, not company age. Company timeline on About is: practice founded **2010** as Yara Design Services; rebranded **2024** as Yara Luxe Interiors Pty Ltd. |
| **Free Consultation** | **NO** | The phrase **“free consultation” does not appear** anywhere in `app/`, `components/`, or `lib/`. Consultation is a **paid service**. The consultation page states fees vary and “Our consultation fees at Yara Luxe are clear and straightforward”. |
| **Luxury positioning** | **YES** | Used heavily on service and location pages: “luxury interior design”, “luxury residential interiors”, “luxury kitchen”, “luxury bathroom”, “luxury commercial interiors”, “Luxury Interior Designers Melbourne” (test homepage only). Brand name itself contains “Luxe”. |
| **Bespoke positioning** | **YES** | Used on residential, kitchen, location and service pages: “bespoke homes”, “bespoke interior concepts”, “bespoke cabinetry”, “bespoke kitchen islands”, “bespoke furniture styling”, “bespoke supervision”. |
| **Full-service positioning** | **YES (partial)** | Phrase **“Full-Service Interior Design Studio”** appears on `/test-homepage` only (noindex). Indexable pages use **“Full Home Interior Design”**, **“End-to-End Interior Design Services”**, **“End-to-End Interior Guidance”**, and “we handle every detail”. |
| **Melbourne-based/local** | **YES** | Office: **853 Nepean Hwy, Bentleigh, VIC 3204**. About: moved to Australia **2008**; works as interior designer on residential projects. 17 Melbourne suburb pages. Google Maps embed for **Yara Luxe Interiors Pty Ltd**. |

### Strongest verified differentiators (supported by live/indexable copy)

1. **Donia Yara** — named founder/designer, Architecture degree + postgraduate interior design, Persian heritage, Australia since 2008.
2. **~19 years industry experience** (personal/team; not “company founded 19 years ago”).
3. **Architecture + interior design combined training.**
4. **Luxury / high-end / bespoke residential interiors** across Melbourne’s inner-east and bayside suburbs.
5. **Residential + commercial** (offices, retail, hospitality) plus kitchen, bathroom, new-build, supervision, consultation, full-home.
6. **In-home and virtual consultations** (paid, not free).
7. **Named Melbourne suburbs** (Toorak, Brighton, Hawthorn, South Yarra, Kew, etc.).
8. **Client testimonials naming Donia** (27 on About quotes; 27 on Home quotes).

### Strongest verified CTA (already on the website)

**Start Your Project** → `/contact`  
Used as the primary hero button on all 8 service pages and 17 location pages (except consultation hero, which uses **Book a Consultation**). Footer/contact CTAs also use **Call 0433 211 875** and **WhatsApp Us**.

**Do not use “Free Consultation” in titles/descriptions unless the offer is added to the website later.** Using it would not be supported by current copy and would conflict with the published fee language.

---

## Complete Page Inventory

**Inherited meta description (almost every indexable page):**  
`Custom interior design in Melbourne — elegant, functional and personal spaces.`  
Set in `app/layout.js`. Child pages do **not** override `description` except `/test-homepage`.

**Canonical:** none set (`metadata.alternates.canonical` unused; no `metadataBase`).  
**Robots:** indexable by default except `/test-homepage` (`noindex, nofollow`). No `robots.txt`, no sitemap.

| Page | Current URL | Type | H1 | Current Title | Current Description | Primary Intent |
|---|---|---|---|---|---|---|
| Homepage | `/` | Homepage | **MISSING** (hero uses `<h2>Welcome to Yara luxe interiors</h2>`) | Yara Luxe Interiors | Custom interior design in Melbourne — elegant, functional and personal spaces. | Brand / Melbourne interior design studio |
| About Us | `/about` | Main page | About Us | About Us – Yara Luxe Interiors | Inherited layout description | Who Donia Yara / the studio is |
| Our Process | `/process` | Main page | Our Process | Our Process – Yara Luxe Interiors | Inherited | How the studio works |
| FAQs | `/faqs` | Other | FAQs | FAQs – Yara Luxe Interiors | Inherited | General interior-design FAQs |
| Contact | `/contact` | Other | Contact | Contact – Yara Luxe Interiors | Inherited | Enquire / NAP |
| Portfolio | `/portfolio` | Portfolio | Portfolio | Portfolio – Yara Luxe Interiors | Inherited | Project gallery (no project URLs) |
| Blog index | `/blog` | Blog | Blog | Blog – Yara Luxe Interiors | Inherited | Article listing |
| Residential Interior Design | `/residential-interior-design-melbourne` | Service | Residential Interior Design Melbourne | Residential Interior Design Melbourne — Yara Luxe Interiors | Inherited | Residential ID Melbourne |
| Commercial Interior Design | `/commercial-interior-design-melbourne` | Service | Best Commercial Interior Design Melbourne | Best Commercial Interior Design Melbourne — Yara Luxe Interiors | Inherited | Commercial ID Melbourne |
| Kitchen Interior Design | `/kitchen-interior-design-melbourne` | Service | Kitchen Interior Design Melbourne | Kitchen Interior Design Melbourne — Yara Luxe Interiors | Inherited | Kitchen ID Melbourne |
| Bathroom Interior Design | `/bathroom-interior-design-melbourne` | Service | Bathroom Interior Design Melbourne | Bathroom Interior Design Melbourne — Yara Luxe Interiors | Inherited | Bathroom ID Melbourne |
| Interior Design Consultation | `/interior-design-consultation-melbourne` | Service | Interior Design Consultation Melbourne | Interior Design Consultation Melbourne — Yara Luxe Interiors | Inherited | Consultation Melbourne |
| New Build Interior Design | `/new-build-interior-design-melbourne` | Service | New Build Interior Design Melbourne | New Build Interior Design Melbourne — Yara Luxe Interiors | Inherited | New-build ID Melbourne |
| Project Supervision | `/interior-design-project-supervision-melbourne` | Service | Interior Design Project Supervision Melbourne | Interior Design Project Supervision Melbourne — Yara Luxe Interiors | Inherited | Supervision / PM |
| Full Home Interior Design | `/full-home-interior-design-melbourne` | Service | Full Home Interior Design Melbourne | Full Home Interior Design Melbourne — Yara Luxe Interiors | Inherited | Whole-home ID |
| Interior Designer Hawthorn | `/interior-designer-hawthorn` | Location | Interior Designer Hawthorn | Interior Designer Hawthorn – Yara Luxe Interiors | Inherited | Hawthorn local |
| Interior Designer Kew | `/interior-designer-kew` | Location | Interior Designer Kew 3101 | Interior Designer Kew – Yara Luxe Interiors | Inherited | Kew local |
| Interior Designer Toorak | `/interior-designer-toorak` | Location | Interior Designer Toorak 3142 | Interior Designer Toorak 3142 – Yara Luxe Interiors | Inherited | Toorak local |
| Interior Designer South Yarra | `/interior-designer-south-yarra` | Location | Interior Designer South Yarra | Interior Designer South Yarra – Yara Luxe Interiors | Inherited | South Yarra local |
| Interior Designer Brighton | `/interior-designer-brighton` | Location | Interior Designer Brighton | Interior Designer Brighton – Yara Luxe Interiors | Inherited | Brighton local |
| Interior Designer Brighton East | `/interior-designer-brighton-east` | Location | Interior Designer Brighton East 3187 | Interior Designer Brighton East – Yara Luxe Interiors | Inherited | Brighton East local |
| Interior Designer Balwyn | `/interior-designer-balwyn` | Location | Interior Designer Balwyn | Interior Designer Balwyn – Yara Luxe Interiors | Inherited | Balwyn local |
| Interior Designer Balwyn North | `/interior-designer-balwyn-north` | Location | Interior Designer in Balwyn North | Interior Designer Balwyn North – Yara Luxe Interiors | Inherited | Balwyn North local |
| Interior Designer Camberwell | `/interior-designer-camberwell` | Location | Interior Designer Camberwell | Interior Designer Camberwell – Yara Luxe Interiors | Inherited | Camberwell local |
| Interior Designer Canterbury | `/interior-designer-canterbury` | Location | Interior Designer Canterbury | Interior Designer Canterbury – Yara Luxe Interiors | Inherited | Canterbury local |
| Interior Designer Mont Albert | `/interior-designer-mont-albert` | Location | Interior Designer Mont Albert 3127 | Interior Designer Mont Albert 3127 – Yara Luxe Interiors | Inherited | Mont Albert local |
| Interior Designer Albert Park | `/interior-designer-albert-park` | Location | Interior Designer Albert Park | Interior Designer Albert Park – Yara Luxe Interiors | Inherited | Albert Park local |
| Interior Designer Elwood | `/interior-designer-elwood` | Location | Interior Designer Elwood | Interior Designer Elwood – Yara Luxe Interiors | Inherited | Elwood local |
| Interior Designer Armadale | `/interior-designer-armadale` | Location | Interior Designer Armadale | Interior Designer Armadale – Yara Luxe Interiors | Inherited | Armadale local |
| Interior Designer Malvern | `/interior-designer-malvern` | Location | Interior Designer Malvern | Interior Designer Malvern – Yara Luxe Interiors | Inherited | Malvern local |
| Interior Designer Prahran | `/interior-designer-prahran` | Location | Interior Designer Prahran | Interior Designer Prahran – Yara Luxe Interiors | Inherited | Prahran local |
| Interior Designer Templestowe | `/interior-designer-templestowe` | Location | Interior Designer Templestowe | Interior Designer Templestowe – Yara Luxe Interiors | Inherited | Templestowe local |
| Blog posts (18) | `/blog/{slug}` | Blog | = article title | `{title} – Yara Luxe Interiors` | Inherited | Informational / design education |
| Test homepage | `/test-homepage` | Other (dev/SEO experiment) | Best Interior Designer in Melbourne **and** Welcome to Yara luxe interiors (multiple H1/H2 mix; SeoPageFinal has H1) | Best Interior Designer in Melbourne \| Yara Luxe Interiors | Luxury interior designers in Melbourne — residential & commercial design, kitchen, bathroom, full home & new build services. Serving Toorak, Brighton, Hawthorn, South Yarra & across Melbourne. | **noindex, nofollow** |

### Page flags

| Flag | Pages |
|---|---|
| **noindex** | `/test-homepage` only |
| **Duplicated title pattern** | 16 location titles are `Interior Designer {Suburb} – Yara Luxe Interiors` (Toorak/Mont Albert add postcode in title). All inherit the **same** meta description. |
| **Missing unique title** | Homepage uses brand-only title `Yara Luxe Interiors` |
| **Missing unique description** | All indexable pages except homepage (homepage *is* the layout default). Blog posts have **no** unique meta description. |
| **Missing H1** | Homepage (`/`) — hero is `<h2>`, not `<h1>` |
| **Multiple H1s** | Not on production homepage. `/test-homepage` composites homepage + SeoPageFinal (SeoPageFinal H1 “Best Interior Designer in Melbourne” plus homepage H2). Location/service pages: **one H1**. Blog posts: one H1 via PageHero. Toorak also has an AreasWeServe `title="Interior Designer Near Toorak 3142"` which is an **H2**, not H1. |
| **Incorrect / missing canonical** | **No canonical tags on any page.** Not pointing at a wrong URL; they are absent. Query variants `/blog?q=&cat=&tag=&month=` also have no canonical. |
| **Accidentally indexable system route** | `/test-homepage` is a public URL but **noindex**. No API routes found. |

---

## 1. Extract Every Indexable Page — Heading Detail

### Homepage `/` — `app/page.js`
- **H1:** none  
- **H2s:** Welcome to Yara luxe interiors; Ambitious Studio with a Successful Concept, Ideas & Flawless Execution; Introduce Our Projects; Our Philosophy in Simply and Quality Design; Your Dream Home; What People Say (testimonials component); Read Our Latest News  
- **Primary topic:** Melbourne interior design studio / brand  
- **CTAs:** View our work; View Projects; all Projects; get in touch; View all (blog)

### About `/about`
- **H2s:** Donia Yara; From Sketch to Life; Our Philosophy; What People Say  
- **Primary topic:** Founder bio, credentials, brand story

### Process `/process`
- **H2s:** Our Advantages in Design; Our Working Process; The Core Company Values; Read Our Latest News  
- **Primary topic:** Design process / advantages

### FAQs `/faqs`
- **H2s:** Most Popular Questions; Get Incredible Interior Design Right Now!  
- **Primary topic:** Generic interior design FAQs (not Melbourne-specific)

### Contact `/contact`
- **H2s:** Get in Touch; Let's Start a Project  
- **Primary topic:** Contact / enquiry

### Portfolio `/portfolio`
- **H2:** Some of Our Works and Case Studies for Clients  
- **Primary topic:** Project gallery  
- **Note:** 17 projects, **no individual project URLs**

### Blog index `/blog`
- **H2s:** widget “Recent Posts” in sidebar; listing has no extra page H2 besides H1 Blog  
- **Primary topic:** Articles

### Service H2 lists (indexable)

**Residential:** Luxury Residential Interior Designers Melbourne; What Makes Our Residential Interior Designers Special; Our Residential Interior Design Services Melbourne (appears more than once); Why Choose Yara Luxe for Residential Interior Design; Residential Design Tailored To Modern Living; Unique Residential Interior Design Ideas; Sustainable & Functional Residential Interiors; High-End Residential Interior Design Melbourne; Our Experience In Residential Interior Design; Our Residential Interior Design Process; Why Yara Luxe Interiors Stands Out

**Commercial:** Affordable Commercial Interior Designers Melbourne; Luxury Commercial Interior Design Melbourne; Why Businesses Choose Our Commercial Interior Designers; Our Commercial Interior Design Services Melbourne (repeated); Commercial & Hospitality Interior Design Solutions; Commercial Interior Design Ideas For Modern Businesses; Commercial Interior Design Trends; Commercial Projects in Interior Design Around Melbourne; Affordable Interior Designers Melbourne For Commercial Spaces; Why Yara Luxe Interiors Stands Out; Commercial Interior Design Process; Commercial Interior Designers Serving Melbourne

**Kitchen:** Luxury Kitchen Interior Designers Melbourne; Why Choose Our Kitchen Interior Designers; Our Kitchen Interior Design Services Melbourne (repeated); Why Choose Yara Luxe for Kitchen Interior Design; Kitchen Renovations Melbourne & New Build Kitchens; Modern Kitchen Interior Design Ideas; Sustainable & Functional Kitchen Design; High-End Kitchen Design Features; Kitchen Splashbacks, Benchtops & Styling Ideas; Our Kitchen Interior Design Process; Why Yara Luxe Interiors Stands Out

**Bathroom:** Personalised Bathroom Renovation & Design Services; Why Homeowners Choose Our Bathroom Interior Designers; Professional Bathroom Interior Design Services in Melbourne; Modern Bathroom Interior Design Ideas; Bathroom Renovation Interior Designer Melbourne Solutions; Small Bathroom Interior Design Solutions; Luxury Bathroom Interior Design; Interior Bathroom Lighting & Flooring Selection; Our Bathroom Design Process

**Consultation:** Expert Interior Design Consultation Services in Melbourne; What is an Interior Design Consultation?; Why Choose Yara Luxe for Interior Design Consultation Melbourne; Our Interior Design Consultation Services; Online & Virtual Interior Design Consultation; What to Expect From a Consultation; What to Bring to an Interior Design Consultation; Interior Design Consultation Fees & Pricing; Why Professional Interior Design Consultation Matters; Our Interior Design Consultation Process

**New build:** Premium New Build Interior Design Melbourne Services; Customized Interior Design for New Homes; Why Choose Yara Luxe for New Build Interior Design Melbourne; New Build Home Interior Design Ideas; Living Room New Build Interior Design; New Build Kitchen & Dining Interior Design; Luxury Interior Design For New Build Homes; Modern New Build Interior Design Styles; Interior Design for New Build Homes; Lighting, Colour & Material Selection; Why Professional New Build Interior Design Matters; Our New Build Interior Design Process

**Supervision:** Professional Interior Design Project Supervision Melbourne; What Is Interior Design Project Supervision?; Why Choose Yara Luxe for Interior Design Project Supervision; Our Interior Design Project Supervision Services (repeated); What We Supervise During Interior Projects; Why Interior Design Project Supervision Matters; Luxury Interior Project Supervision Melbourne; Interior Design Supervision for Renovations & New Builds; Luxury Interior Design Project Supervision in Melbourne; Our Interior Design Project Supervision Process; Our Approach to Interior Design Project Supervision (repeated)

**Full home:** Complete Home Interior Design Solutions; We specialise in:; 19 Years of Interior Design Excellence; Why Professional Full Home Interior Design Matters; Why Choose Yara Luxe Interiors; Full Home Renovation & Interior Design Solutions; Luxury Home Interior Design Melbourne; Modern Interior Design for Contemporary Homes; Interior Design Styles We Create; Custom Furniture, Wardrobes & Storage Solutions; Lighting, Colour & Material Selection; Our complete home interior design process; Our Approach to Interior Design

All service pages also include **Areas We Serve Across Melbourne** (H2) and **Frequently Asked Questions** (H2) plus a CTA H2 (see CTAs section).

Location H2s are suburb-specific; see Section 7.

---

## 2. Extract All Business Facts

### Exact identity statements

| Fact | Exact supporting text | Source |
|---|---|---|
| Business name | “Yara Luxe Interiors” | Layout title, logo alt, most pages |
| Legal name | “Yara Luxe Interiors Pty Ltd” | About; Footer copyright; Maps iframe title |
| Former name | “in 2010, I established my own practice under the name **Yara Design Services**” | `/about` |
| Rebrand | “in 2024, I rebranded my business as **Yara Luxe Interiors Pty Ltd**” | `/about` |
| Designer/owner | “**Donia Yara**” / “[ founder of company ]” | `/about`; homepage signature alt “Donia Yara”; blog byline “Donia Yara” |
| Email named to Donia | `Donia@YaraLuxeInteriors.com.au` | Header, Footer, Contact |
| Alternate spellings on site | “Yaraluxe”, “Yaraluce”, “Yara Lux Interiors”, “YARA LUXE INTERIORS”, “Yara Luxe Interior” | Location pages, full-home hero, testimonials |

### Claim verification table

| Claim | Verified Yes/No | Exact supporting text | Source page/file |
|---|---|---|---|
| Business name Yara Luxe Interiors | Yes | “Yara Luxe Interiors”; “Yara Luxe Interiors Pty Ltd” | `app/layout.js`; `app/about/page.js`; `components/Footer.js` |
| Designer/owner Donia Yara | Yes | “Donia Yara”; “[ founder of company ]” | `app/about/page.js` |
| 19+ years experience | Yes (see Section 5) | “Our in-house designers have more than 19 years of experience…” | Multiple service/location pages |
| Years of experience (About wording) | Yes | “With nearly two decades of industry experience…” | `app/about/page.js` |
| Architecture background | Yes | “My professional journey began with a Bachelor’s degree in Architecture…” | `app/about/page.js` |
| Interior design qualification | Yes | “…followed by a two-year postgraduate qualification in interior design” | `app/about/page.js` |
| Interior design experience (Australia) | Yes | “Since moving to Australia in 2008, I’ve had the privilege of working as an interior designer across a wide range of residential projects…” | `app/about/page.js` |
| Awards | **No** | No award names found | — |
| Certifications (named bodies) | **No** | No DIA / MBA / ISO / etc. named | — |
| Memberships | **No** | Partner **logos** (West Elm, Pottery Barn, Freedom, Koala, Adairs, Coco, Provincial) are supplier/brand images, not stated memberships | `lib/data.js` HOME_PARTNERS / PROCESS_PARTNERS |
| Professional credentials beyond degrees | Partial | Architecture bachelor + 2-year postgraduate interior design only | `/about` |
| Melbourne experience | Yes | Australia 2008; Bentleigh office; 17 suburb pages; “19+ Years of Melbourne Experience” | About, Contact, service pages |
| Areas served | Yes | 17 named suburbs + Bentleigh office | `lib/urls.js` AREA_URLS |
| Residential experience | Yes | Dedicated residential page + About residential projects | Service + About |
| Commercial experience | Yes | Dedicated commercial page; testimonial about office refresh (Simin Mizani) | Commercial page; quotes |
| Number of completed projects | **No number stated** | Portfolio shows **17 named projects**; no “X projects completed” | `lib/data.js` PROJECTS |
| Client count | **No number stated** | Testimonials exist; no “X clients” | Quotes JSON |
| Review count / star rating | **No** | No “Google reviews”, no aggregate rating, no star count in code | — |
| Statistics (other) | Partial | Planning “takes 2 to 6 weeks”; project duration “couple of weeks” to “several months” (test homepage FAQ, noindex); enquiry response “within 24 hours on business days” | FAQs; Contact; test-homepage |
| Trust claims | Yes | “No. 1 in Australia for interior design consultation” (**ranking claim, no evidence shown**) | Consultation hero |
| Guarantees | Wording only, not a consumer guarantee | “which **guarantees** your interior project is completed to the highest design specifications…” | Supervision page — this is copy language, not a stated money-back/warranty program |
| Free consultation | **No** | Not found. Opposite: consultation **fees** | Consultation page |
| Luxury interior design | Yes | Many exact phrases (Section 4) | Service/location pages |
| Differentiators | Yes | Architecture+ID training; Persian heritage influence; “A Design That Loves You Back”; 3D design mentioned in FAQs; in-home + virtual consult; project supervision | About, FAQs, consultation, supervision |

### Other exact About facts

- Born in Iran; Persian heritage.  
- Philosophy: “A Design That Loves You Back.”  
- Mission: “To create elegant, functional spaces that elevate everyday living…”  
- Tagline-style homepage copy: “We believe great design should feel effortless-elegant, functional, and deeply personal.”  
- Copyright: “Copyright © 2024 Yara Luxe Interiors Pty Ltd.”  
- Site credit: “Crafted with 🤍 by THEDDS” (`https://www.thedds.com.au/`).

---

## 3. Free Consultation

### Is the consultation actually FREE?

**No.** The website never says “free consultation”, “complimentary consultation”, or “no-obligation free consult”.

Exact fee wording on `/interior-design-consultation-melbourne`:

> “The interior design consultation fee varies depending on the project size, type of consultation and the amount of design assistance required.”

> “Our consultation fees at Yara Luxe are clear and straightforward, depending on the scope of your project.”

FAQ: “How much is an interior design consultation?” → “The interior design consultation fee is subject to the size of the project, type of consultation, and the level of design support needed.”

No dollar amounts.

### What type of consultation exists?

| Type | Stated? | Exact wording |
|---|---|---|
| Phone consultation | **Not named as a product.** Phone is a contact method (`Call 0433 211 875`) | LocationBits CTA |
| Initial consultation | **Yes** | “Interior design **initial consultations** are typically lengthy…”; process step “**Initial Discovery**” |
| Discovery call | **No** as a named offer. Process step is “Initial Discovery” (discussion, not specified as a call) | Consultation process step 01 |
| In-home consultation | **Yes** | Hero: “In-Home & Virtual Consultations”; FAQ: “Yes, we do offer **in-home interior design services** throughout Melbourne's high-end residential neighbourhoods.” Areas outro: “**In-home and virtual consultation** services are available…” |
| Online / virtual | **Yes** | H2 “Online & Virtual Interior Design Consultation”; “Yara Luxe also offers **online interior design consultation** and **virtual interior design consultation services throughout Australia**.” |
| Colour consultation | **Yes** | “Colour Consultation Interior Design”; “Interior Design Paint Consultation” |
| Commercial consultation | **Yes** | “Commercial Interior Design Consultation” |
| Apartment consultation | **Yes** | “Apartment Interior Design Consultation” |
| Luxury consultation | **Yes** | “Luxury Interior Design Consultation” |

### How long is it?

**Not specified** (no “30 minutes”, “60 minutes”, etc.). Only: initial consultations are “typically lengthy”.

### Conditions?

Fee depends on: residential vs commercial; onsite vs virtual; single-room vs full-home; luxury styling; renovation complexity.  
No “free if you proceed” or “redeemable against project” language found.

### Closest “feel free” wording (not a free consult)

Contact: “feel free to reach out. We aim to respond to all enquiries within 24 hours on business days.”

### CTAs currently used for consultation

- Hero: **Book a Consultation** → `/contact`  
- Footer CTA: **Make an Appointment for Your Interior Design Consultation Now** + Call / WhatsApp  
- Test homepage (noindex): **Book a consultation**

**SERP note:** “Book a Consultation” is supported. “Free Consultation” is **not** supported.

---

## 4. Luxury Positioning

### Exact phrases and where they occur (indexable unless noted)

| Phrase | Where |
|---|---|
| luxury residential interior solutions / Luxury Residential Interiors | Residential service |
| Luxury Residential Interior Designers Melbourne | Residential H2 |
| High-End Residential Interior Design Melbourne | Residential H2 |
| luxury home interiors / luxury furnishings / luxury styling | Residential |
| Luxury Kitchen Interior Designers Melbourne | Kitchen H2 |
| Luxury Kitchens Melbourne | Kitchen |
| High-End Kitchen Design Features | Kitchen H2 |
| Luxury Bathroom Interior Design | Bathroom H2 |
| Luxury Commercial Interior Design Melbourne | Commercial H2 |
| Luxury & Modern New Build Interiors | New-build hero |
| Luxury Interior Design For New Build Homes | New-build H2 |
| Luxury Interior Project Supervision Melbourne | Supervision H2 |
| Luxury Home Interior Design Melbourne | Full-home H2 |
| Luxury Interior Design Consultation | Consultation |
| Luxury Interior Design Services in Toorak 3142 | Toorak eyebrow |
| Luxury Interior Design Expertise | Toorak |
| luxury residential expertise | Brighton |
| Luxury Interior Designers Melbourne | `/test-homepage` only (noindex) |
| “You can experience luxury life with them” | Testimonial Ali Nowzad |
| “feels both luxurious and personal” | Testimonial Reja |

### Bespoke / premium / refined / high-end (indexable)

- **Bespoke:** “elegant, **bespoke homes**”; “**Bespoke interior concepts**”; “**bespoke cabinetry**”; “**bespoke kitchen islands**”; “**Bespoke furniture styling**”; “**bespoke luxury styling**”; Prahran CTA “**bespoke interior design solutions**”.  
- **Premium:** “Premium New Build Interior Design”; “Premium Material Selection”; “premium finishes”; “premium residential markets”.  
- **High-end:** “High-End Residential Interior Design Melbourne”; “high-end residences”; “high-end residential suburbs of Melbourne”; “high-end apartments”.  
- **Refined:** “carefully combining **refined elements**”; “**refined colour palettes**”; About “**refined blend** of architectural insight”; rebrand “refined, luxurious edge”.  
- **Full-service:** exact string only on noindex test homepage. Indexable equivalents: “End-to-End Interior Design Services”, “Full Home Interior Design”, “Complete Home Interior Design Solutions”.

### Overall brand positioning (from actual content, not invented)

Observed mix, in order of strength on indexable pages:

1. **Luxury / high-end residential**  
2. **Bespoke / personalised / tailored**  
3. **Architectural** (About credentials + location copy on heritage homes)  
4. **Full-home / end-to-end** (service exists; “full-service studio” label is noindex-only)  
5. **Functional / timeless / elegant** (homepage philosophy)  
6. **Accessible / affordable** appears as **conflicting** commercial copy: H2 “Affordable Commercial Interior Designers Melbourne” and “Affordable Interior Designers Melbourne For Commercial Spaces” sit next to “Luxury Commercial Interior Design Melbourne”.

Not a discount/mass-market brand in the core About/residential story.

---

## 5. 19+ Years Experience

### What it refers to

**Interior design / industry experience of the designer and team**, described variously as:

- Personal: About first person — “With **nearly two decades of industry experience**, I bring a refined blend of architectural insight and interior design expertise…” (`app/about/page.js`)  
- Team: “Our **in-house designers** have **more than 19 years of experience**” (residential)  
- Industry: “**19 Years of Industry Experience**”; “Yara Luxe has been working **in the industry** for **nearly 20 years**” (new-build)  
- Combined (noindex only): “Our team has a **combined 20 years** of experience in **design and decoration**” (`SeoPageFinal.js`)

It is **not** stated as “the company is 19 years old”. Company chronology on About:

- 2008 — moved to Australia, working as interior designer  
- 2010 — founded **Yara Design Services**  
- 2024 — rebranded **Yara Luxe Interiors Pty Ltd**

If “19+ years” is used in meta titles, the website supports it as **designer’s/team industry experience**, not as studio founding date. Studio under Yara Design Services ≈ 2010 (about 16 years as of 2026). Personal “nearly two decades” aligns better with ~2006–2008 start of career.

### Exact wording variants (do not collapse them in SERP copy without noting inconsistency)

| Exact wording | File |
|---|---|
| “more than 19 years of experience” | residential, new-build, kitchen, supervision, consultation |
| “19+ Years Experience” / “19+ Years Of Residential Design Experience” | service heroes / cards |
| “19 Years of Interior Design Excellence” | full-home H2 |
| “About 20 years in the industry” | full-home |
| “nearly 20 years” | new-build ExpCard; Toorak; Balwyn |
| “With over two decades of experience” | consultation ExpCard |
| “More than 20 Years of Interior Design Experience” / “almost 20 years” | Canterbury |
| “Over more than eighteen years” | Brighton |
| “combined 20 years” / “about 20 years” | test-homepage only (noindex) |
| “19 years of industry experience” | many location why-cards |

**Primary source for the personal claim:** `app/about/page.js`  
**Primary source for “19+” marketing badge:** service hero checklists and location why-cards.

---

## 6. Services

All eight planned service URLs **already exist** as live routes.

### Service verification

| Asked service | Real on site? | Current website term |
|---|---|---|
| 1. Residential Interior Design | Yes | Residential Interior Design Melbourne |
| 2. Commercial Interior Design | Yes | Best Commercial Interior Design Melbourne (H1/title include “Best”) |
| 3. Kitchen Interior Design | Yes | Kitchen Interior Design Melbourne |
| 4. Bathroom Interior Design | Yes | Bathroom Interior Design Melbourne |
| 5. Interior Design Consultation | Yes | Interior Design Consultation Melbourne |
| 6. New Build Interior Design | Yes | New Build Interior Design Melbourne |
| 7. Interior Design Project Management / Supervision | Yes | **Interior Design Project Supervision Melbourne** (nav: “Project Supervision”) |
| 8. Full Home / Full-Service Interior Design | Yes | **Full Home Interior Design Melbourne** (not “full-service” on the indexable page title) |

`Current website term → recommended/common interpretation`

- Interior Design Project Supervision → Interior design project management / on-site supervision  
- Full Home Interior Design → Full-service / whole-home interior design  
- Best Commercial Interior Design Melbourne → Commercial interior design Melbourne (the word “Best” is in H1/title, not independently verified)

### Per-service extraction

#### 1. Residential Interior Design
- **URL:** `/residential-interior-design-melbourne`  
- **H1:** Residential Interior Design Melbourne  
- **Short description:** “Refine your home with stylish and practical residential interior design in Melbourne — created for contemporary living, luxury comfort and timeless interiors.”  
- **Benefit:** Comfortable, functional, elegant, lifestyle-tailored homes  
- **Scope:** New builds & existing homes; apartments, townhouses, custom homes; full home, living, bedroom, kitchen, residential buildings  
- **Included (from cards):** whole-home concepts, furniture & decor, colour, open-plan planning, luxury materials, lighting & finish consultation, wardrobe planning, cabinetry concepts, storage  
- **Res/com:** Residential  
- **Differentiator:** 19+ years; luxury + functional living; tailored concepts  
- **CTA:** Start Your Project; “Design Residential Interiors Melbourne for Everlasting Living Spaces” + Call/WhatsApp  
- **Pricing:** “Pricing depends on the scope of the project, the size of the property and your specific needs. We offer custom consultations…” — **no $**  
- **Consultation:** “Consultation & Lifestyle Discovery” is process step 01; not free

#### 2. Commercial Interior Design
- **URL:** `/commercial-interior-design-melbourne`  
- **H1:** Best Commercial Interior Design Melbourne  
- **Short description:** efficient, elegant spaces for businesses, offices, hospitality and retail  
- **Benefit:** Professional, welcoming, functional commercial environments  
- **Scope:** offices, retail, restaurants/hospitality, showrooms  
- **Res/com:** Commercial  
- **Differentiator:** 19+ years; luxury + **affordable** wording (conflict)  
- **CTA:** Start Your Project; “Design Creative & Complex Work Environments”  
- **Pricing:** not numbered  
- **Consultation:** not described as free

#### 3. Kitchen Interior Design
- **URL:** `/kitchen-interior-design-melbourne`  
- **H1:** Kitchen Interior Design Melbourne  
- **Short description:** “Design a beautiful, functional and timeless kitchen in a luxurious, modern home, apartment and lifestyle…”  
- **Benefit:** Function + aesthetics + storage + entertaining  
- **Scope:** renovations and new-build kitchens; small/apartment kitchens; custom cabinetry, islands, splashbacks, benchtops  
- **Res/com:** Residential (kitchens)  
- **CTA:** Start Your Project; “Create A Functional & Luxurious Kitchen…”  
- **Pricing:** FAQ — depends on size, layout, materials; no $

#### 4. Bathroom Interior Design
- **URL:** `/bathroom-interior-design-melbourne`  
- **H1:** Bathroom Interior Design Melbourne  
- **Short description:** transform bathroom into stylish & functional space; renovations & design  
- **Benefit:** Comfort, contemporary look, everyday function  
- **Scope:** luxury bathrooms, small bathrooms, lighting & flooring, renovations; freestanding bathtubs listed  
- **CTA:** Start Your Project; “Transform Your Bathroom Into a Stylish & Functional Space”  
- **Pricing:** not numbered

#### 5. Interior Design Consultation
- **URL:** `/interior-design-consultation-melbourne`  
- **H1:** Interior Design Consultation Melbourne  
- **Short description:** expert advice for homeowners, apartment owners, renovators and commercial projects  
- **Benefit:** Informed choices on layout, colour, furniture, materials, lighting, styling, renovations  
- **Scope:** home, apartment, commercial, luxury, colour, paint, blinds/window styling; in-home + virtual Australia-wide  
- **Included:** space planning, furniture placement, styling, renovation advice, colour, lighting, materials, flooring, storage  
- **CTA:** **Book a Consultation**; “Make an Appointment for Your Interior Design Consultation Now”  
- **Pricing:** fee varies — **not free**  
- **Unverified boast:** “No. 1 in Australia for interior design consultation”

#### 6. New Build Interior Design
- **URL:** `/new-build-interior-design-melbourne`  
- **H1:** New Build Interior Design Melbourne  
- **Short description:** premium new-build interiors with builders/architects from the outset  
- **Benefit:** Cohesive layout, materials, finishes, furniture, lighting, styling planned before/during build  
- **Scope:** luxury homes, family houses, apartments, townhouses; kitchen & dining, living, lighting/colour/materials  
- **CTA:** Start Your Project; “Get Your New Build Interior Design Off and Running Today”  
- **Pricing:** not numbered

#### 7. Interior Design Project Supervision
- **URL:** `/interior-design-project-supervision-melbourne`  
- **H1:** Interior Design Project Supervision Melbourne  
- **Short description:** supervise implementation so the project matches approved design, on time  
- **Benefit:** Protect design vision and client investment; fewer delays/errors  
- **Scope:** renovations & new builds; trades coordination; materials; styling implementation  
- **Nav label:** Project Supervision  
- **CTA:** Start Your Project; “Start Your Interior Design Project Supervision in Melbourne Today”  
- **Pricing:** not numbered  
- **“Guarantee” language:** completed to highest design specifications (not a warranty product)

#### 8. Full Home Interior Design
- **URL:** `/full-home-interior-design-melbourne`  
- **H1:** Full Home Interior Design Melbourne  
- **Short description:** high-end full-home interiors for contemporary living, classic style and function  
- **Benefit:** Cohesive whole-home design; hassle-free renovation coordination  
- **Scope:** renovation or new home; custom furniture, wardrobes, storage, lighting, colour, materials; multiple styles  
- **CTA:** Start Your Project; “Start Your Full Home Interior Design Project Today”  
- **Pricing:** not numbered

Header “Our Services” parent link points to **residential**, not a `/services` hub (old `/services` 301s to residential).

---

## 7. Location Pages

All 17 requested suburbs **exist**. Format is already `/interior-designer-{suburb}` (no trailing slash).

Shared template: `LocationHero` (H1 + Start Your Project + View Our Services → residential) + body + `LocationFaqCta` (Call / WhatsApp). Areas served blocks list suburb names as **plain text**, not internal links.

**No location page cites a named portfolio project in that suburb.** No suburb-specific review widgets.

| Location | URL | H1 | SEO title | Meta description | Unique local information | Unique vs template | Project/case study | Local trust | CTA |
|---|---|---|---|---|---|---|---|---|---|
| Hawthorn | `/interior-designer-hawthorn` | Interior Designer Hawthorn | Interior Designer Hawthorn – Yara Luxe Interiors | Inherited | Victorian terraces, Edwardian houses, luxury townhouses, modern apartments; heritage FAQ | **Most custom** (own hero, not LocationHero; dedicated CSS) | None named | Heritage home FAQ | Start Your Project; “Speak to a Hawthorn interior designer.” + Call/WA |
| Kew | `/interior-designer-kew` | Interior Designer Kew 3101 | Interior Designer Kew – Yara Luxe Interiors | Inherited | Postcode 3101 in H1; generic “homes that deserve more than a generic approach” | Mostly templated | None | 19 years card | “Call An Interior Designer in Kew 3101” |
| Toorak | `/interior-designer-toorak` | Interior Designer Toorak 3142 | Interior Designer Toorak 3142 – Yara Luxe Interiors | Inherited | 3142; luxury homes; Victorian/Edwardian/Art Deco/heritage; high-end apartments; eastern + bayside service area | **Highly unique** long-form | None | Heritage FAQ; 19 years | “Start Your Interior Design Project in Toorak Today” |
| South Yarra | `/interior-designer-south-yarra` | Interior Designer South Yarra | Interior Designer South Yarra – Yara Luxe Interiors | Inherited | 3141; apartments/penthouses/heritage; Chapel Street, Toorak Road, Domain precinct; offices & investment properties | **Highly unique** | None | Local knowledge card | “Need the perfect interior design? Contact us for your South Yarra interior design consultation.” |
| Brighton | `/interior-designer-brighton` | Interior Designer Brighton | Interior Designer Brighton – Yara Luxe Interiors | Inherited | 3186; bayside; Port Phillip Bay views; heritage/Victorian to architect luxury | **Highly unique** | None | 19 years / bayside | “Start Your Brighton Interior Design Journey” |
| Brighton East | `/interior-designer-brighton-east` | Interior Designer Brighton East 3187 | Interior Designer Brighton East – Yara Luxe Interiors | Inherited | Postcode 3187 in H1 | Templated | None | 19 years card | “Design your home to suit your lifestyle” |
| Balwyn | `/interior-designer-balwyn` | Interior Designer Balwyn | Interior Designer Balwyn – Yara Luxe Interiors | Inherited | 3103; larger family homes vs inner-city apartments; heritage + luxury | Unique family-home angle | None | 19+ years | “Start Your Interior Design Project in Balwyn” |
| Balwyn North | `/interior-designer-balwyn-north` | Interior Designer in Balwyn North | Interior Designer Balwyn North – Yara Luxe Interiors | Inherited | Family/luxury/townhouse/apartment/investment | Templated | None | 19 years list item | “Take your Balwyn North home to the next level…” |
| Camberwell | `/interior-designer-camberwell` | Interior Designer Camberwell | Interior Designer Camberwell – Yara Luxe Interiors | Inherited | 3124; elegant streets, heritage, luxury family, architect homes | Localized intro | None | 19 years | “Establish Your Interior Design Project in Camberwell.” |
| Canterbury | `/interior-designer-canterbury` | Interior Designer Canterbury | Interior Designer Canterbury – Yara Luxe Interiors | Inherited | Victorian/Edwardian; heritage overlay / neighbourhood character | Unique heritage focus | None | Heritage worker FAQ | “Begin Your Canterbury Interior Design Project” |
| Mont Albert | `/interior-designer-mont-albert` | Interior Designer Mont Albert 3127 | Interior Designer Mont Albert 3127 – Yara Luxe Interiors | Inherited | Postcode in H1/title | Templated | None | 19 years | “Start Your Mont Albert Interior Design Project” |
| Albert Park | `/interior-designer-albert-park` | Interior Designer Albert Park | Interior Designer Albert Park – Yara Luxe Interiors | Inherited | Light unique body; 19 years “from one room to a full home makeover” | Mostly templated | None | 19 years | “Create a Home You'll Love Living In” |
| Elwood | `/interior-designer-elwood` | Interior Designer Elwood | Interior Designer Elwood – Yara Luxe Interiors | Inherited | Bayside-adjacent lifestyle implied in CTA | Templated | None | 19 years | “Create a homey environment for your Elwood!” |
| Armadale | `/interior-designer-armadale` | Interior Designer Armadale | Interior Designer Armadale – Yara Luxe Interiors | Inherited | Standard suburb page | Templated | None | 19 years | “Create a Home That Reflects Your Lifestyle” |
| Malvern | `/interior-designer-malvern` | Interior Designer Malvern | Interior Designer Malvern – Yara Luxe Interiors | Inherited | Period property / family home / luxury apartment; Victorian & Edwardian listed | Localized | None | 19 years | “Let's design a beautiful home that's just right for you!” |
| Prahran | `/interior-designer-prahran` | Interior Designer Prahran | Interior Designer Prahran – Yara Luxe Interiors | Inherited | 3181; heritage terraces, warehouse conversions, luxury apartments, industrial-inspired | **Highly unique** | None | Heritage/apartment FAQs | “Design a home to suit your lifestyle” |
| Templestowe | `/interior-designer-templestowe` | Interior Designer Templestowe | Interior Designer Templestowe – Yara Luxe Interiors | Inherited | “variety of property styles”; everyday family living | Templated | None | 19 years | “Start Your Templestowe Interior Design Journey” |

**Main services mentioned on location pages:** interior design generally; residential; sometimes commercial (Hawthorn, South Yarra); consultation (South Yarra CTA); new-build/heritage (Canterbury). Hero secondary CTA is always residential service, not a full service mesh.

---

## 8. Portfolio / Projects

**Only URL:** `/portfolio`  
**No project detail pages. No suburb, no client name, no measurable results, no per-project quotes, no services-performed field.**

Categories in data are generic: Decor / Furniture / Interior (some also Exterior).

| Project name | Type (from title/cats only) | Res/Com | Location | Style (from name only) | Services | Materials/features | Result | Quote | URL |
|---|---|---|---|---|---|---|---|---|---|
| A Pearl Residence | Residence | Residential (title) | Not stated | Not stated | Not stated | Not stated | None | None | `/portfolio` only |
| The Velvet Noir | Interior | Unstated | Not stated | Dark/luxe implied by name | Not stated | Not stated | None | None | `/portfolio` |
| Crystal Lullaby | Interior | Unstated | Not stated | Not stated | Not stated | Not stated | None | None | `/portfolio` |
| NeoClassical Golden Elegance | Interior | Unstated | Not stated | Neoclassical | Not stated | Not stated | None | None | `/portfolio` |
| Wispers Of Provence | Interior | Unstated | Not stated | Provence (typo “Wispers”) | Not stated | Not stated | None | None | `/portfolio` |
| Echoes Of Celebration | Interior | Unstated | Not stated | Not stated | Not stated | Not stated | None | None | `/portfolio` |
| A Retreat by The Water | Interior + Exterior | Unstated | Waterfront implied by title only | Not stated | Not stated | Not stated | None | None | `/portfolio` |
| Timeless French Provincial | Kitchen thumbnail filename | Unstated | Not stated | French Provincial | Kitchen implied by image filename only | Not stated | None | None | `/portfolio` |
| Evening Light | Interior | Unstated | Not stated | Not stated | Not stated | Not stated | None | None | `/portfolio` |
| The Quiet Chamber | Interior | Unstated | Not stated | Not stated | Not stated | Not stated | None | None | `/portfolio` |
| French Provincial with a Touch of Glam | Interior | Unstated | Not stated | French Provincial + glam | Not stated | Not stated | None | None | `/portfolio` |
| The Thought Studio | Interior | Could be studio/commercial by name | Not stated | Not stated | Not stated | Not stated | None | None | `/portfolio` |
| Blush & Becoming | Interior | Unstated | Not stated | Not stated | Not stated | Not stated | None | None | `/portfolio` |
| A Room of Ease | Interior | Unstated | Not stated | Not stated | Not stated | Not stated | None | None | `/portfolio` |
| The Framed Garden | Decor/Exterior/Furniture | Unstated | Garden implied | Not stated | Not stated | Not stated | None | None | `/portfolio` |
| Tiny Kingdom | Interior | Unstated | Not stated | Not stated | Not stated | Not stated | None | None | `/portfolio` |
| Blue Reflection | Interior + Exterior | Unstated | Not stated | Not stated | Not stated | Not stated | None | None | `/portfolio` |

**Cannot support suburb-specific SERP copy from portfolio data.** Homepage portfolio tiles also link to `/portfolio`, not individual projects (`href="/portfolio"`).

---

## 9. Testimonials & Trust Signals

### Review counts / ratings

- **No Google review count**  
- **No star rating / AggregateRating**  
- **No “X Google reviews” text**  
- Testimonials are on-site quotes, not marked up as Review schema (except none on indexable pages)

Home quotes file: **27** entries (`lib/home-quotes.json`)  
About quotes file: **27** entries (`lib/about-quotes.json`)  
Short `QUOTES` array in `lib/data.js`: **10** truncated versions  

Named reviewers (home set): Ethan Blake, Tara, Rozhan, Amy L, Nazieh, Sara, Zoe Leask, Matilda, Oliver Hart, Lavin Deeba, Henry Ashford, Arash, Arzoo Mansuri, Susan, Arezoo Banaei, Majid Nasr, Simin Mizani, Hossain Jalali, Reja, Roya, Mehdi Sayad, Ehsan, Anthony, Nikki, Mita, Ali Nowzad, Shima.

Notable exact quotes for SERP (source: `lib/home-quotes.json` / about):

- Tara: discovered on Instagram; “After a **consultation with Donia**…”  
- Zoe Leask: “transformed our **kitchen** into a masterpiece”  
- Simin Mizani: “refresh our outdated **office**” (commercial proof)  
- Hossain Jalali: supplier-style — “we’re always proud to **supply their projects**”  
- Ali Nowzad: “You can experience **luxury life** with them”  
- Reja: “feels both **luxurious and personal**”  
- Roya: “mix **timeless elegance with modern trends**”; “From the **initial consultation** to the final reveal”

### Awards / media / certifications / qualifications

| Signal | Present? | Source |
|---|---|---|
| Awards | No | — |
| Media mentions | No | — |
| Certifications | No | — |
| Qualifications | Yes — Bachelor’s Architecture; 2-year postgraduate interior design | About |
| Years of experience | Yes — see §5 | About + services + locations |
| Completed project count | No numeric claim; 17 gallery items | Portfolio |
| Client counts | No | — |
| Melbourne/local | Yes — Bentleigh + 17 suburbs + “Melbourne Interior Design Studio” hero line | Contact + services |
| 3D design | Yes, in FAQs (“What is 3D desing and how it work?”) | `lib/data.js` PAGE_FAQS |
| Partner/supplier logos | Pottery Barn, West Elm, Provincial, Coco, Freedom, Koala, Adairs | `lib/data.js` — **not claimed as awards** |

---

## 10. Existing CTAs

| CTA text | Where |
|---|---|
| View our work | Homepage hero → `/portfolio` |
| View Projects | Homepage benefits; About | `/portfolio` |
| all Projects | Homepage portfolio | `/portfolio` |
| get in touch | Homepage CTA; FAQs CTA | `/contact` |
| View all | Homepage/process blog | `/blog` |
| Contact Us | Header nav | `/contact` |
| Start Your Project | All service heroes except consultation; all location heroes | `/contact` |
| View Our Services | Service/location heroes | usually `/residential-interior-design-melbourne` (residential hero points to commercial) |
| Book a Consultation | Consultation hero | `/contact` |
| Book a consultation | Test homepage only (noindex) | `/contact` |
| Call 0433 211 875 | LocationFaqCta + Hawthorn | `tel:0433211875` |
| WhatsApp Us | LocationFaqCta + Hawthorn | `https://wa.me/61433211875` |
| Submit | Contact form button | Contact form (client-side only; no backend) |
| Get in Touch | Contact H2 (not a button) | — |
| Let's Start a Project | Contact H2 | — |
| Make an Appointment for Your Interior Design Consultation Now | Consultation CTA H2 | Call/WA |
| Speak to a Hawthorn interior designer. | Hawthorn CTA H2 | Call/WA |
| plus many location-specific CTA H2s (see §7) | LocationFaqCta | Call/WA |

**Not found:** Free Consultation, Enquire Now, Request a Quote, Discuss Your Project (as button labels).

### 3 strongest conversion CTAs already supported

1. **Start Your Project** — site-wide primary on commercial landing pages; goes to contact.  
2. **Book a Consultation** — matches an actual service page and paid consult offer (not free).  
3. **Call 0433 211 875** / **WhatsApp Us** — direct contact with consistent mobile number.

---

## 11. NAP & Local Business Information

| Field | Exact value(s) |
|---|---|
| Business name | Yara Luxe Interiors / Yara Luxe Interiors Pty Ltd |
| Street | 853 Nepean Hwy |
| Suburb | Bentleigh |
| State | VIC (footer); “Melbourne” used instead of VIC on Contact office line |
| Postcode | 3204 |
| Country | Australia implied; schema on noindex page uses `AU` |
| Mobile | 0433 211 875 / +61 0433 211 875 / tel:0433211875 / WhatsApp 61433211875 |
| Phone | (03) 8529 3720 / +61 (03) 8529 3720 / tel:0385293720 |
| Email | Donia@YaraLuxeInteriors.com.au |
| Opening hours | **Not stated** |
| Google Business Profile link | **Not present** as a hyperlink |
| Google Maps | Embed URL in `lib/data.js` MAP_EMBED titled **Yara Luxe Interiors Pty Ltd** (`google.com/maps/embed?...`) |
| Instagram | `https://www.instagram.com/yara.luxe.interiors` (query strings differ between Header/Contact vs Footer) |
| LinkedIn | `http://linkedin.com/in/yara-luxe-interiors` (http, not https) |
| Facebook | Contact/BlogAuthor: `https://www.facebook.com/yara.luxe.interiors` ; Footer: `https://www.facebook.com/share/1Aiyw3gWgA/?mibextid=wwXIfr` |
| WhatsApp | `https://wa.me/61433211875` |

### NAP inconsistencies

| Location | Address string |
|---|---|
| Contact page | `853 Nepean Hwy, Bentleigh, Melbourne, 3204` |
| Footer | `853 Nepean Hwy, Bentleigh, VIC, 3204` |
| Header side panel | `853 Nepean Hwy, Bentleigh, 3204` |
| Schema (noindex test page) | streetAddress 853 Nepean Hwy; addressLocality Bentleigh; postalCode 3204; addressRegion VIC; addressCountry AU |
| Phone display | `0433 211 875` vs `+61 0433 211 875` vs schema `+61-433-211-875` |
| Brand spelling | Yara Luxe vs Yaraluxe vs Yaraluce vs Yara Lux |

---

## 12. Schema

**Indexable pages: no JSON-LD.**

The only structured data is in `components/test-homepage/SeoPageFinal.js`, rendered on **`/test-homepage` which is `noindex, nofollow`**.

| Type | Present? | Where |
|---|---|---|
| InteriorDesigner (not LocalBusiness / ProfessionalService) | Yes | test-homepage `@graph` |
| FAQPage | Yes | test-homepage |
| Organization | No | — |
| WebSite | No | — |
| WebPage | No | — |
| Service | No | — |
| BreadcrumbList | No (visual crumbs only on inner pages) | PageHero |
| Article | No | — |
| Person | No | — |
| Review / AggregateRating | No | — |
| LocalBusiness / ProfessionalService | No (InteriorDesigner used instead) | test-homepage |

Schema facts on noindex page: name Yara Luxe Interiors; url https://yaraluxeinteriors.com.au; telephone +61-433-211-875; email Donia@YaraLuxeInteriors.com.au; Bentleigh VIC 3204 AU; areaServed = 17 cities; description “Luxury interior designers in Melbourne specialising in residential and commercial interiors.”

---

## 13. Blog Inventory

Author byline on posts: **Donia Yara**.  
Meta description: **none unique** (inherited).  
Last modified: **not stored**.  
Publication dates are in `lib/blog-posts.json` only.  
H1 = article title.  
Blog HTML contains **no internal links** to service or location URLs.

| Article title | URL | Meta title | Meta description | H1 | Intent | Topic | Related service | Local intent | Date | Last mod |
|---|---|---|---|---|---|---|---|---|---|---|
| The Foundation of a Good Design: Layout Comes First | `/blog/the-foundation-of-a-good-design-layout-comes-first` | {title} – Yara Luxe Interiors | Inherited | = title | Informational | Layout vs style | Full home / residential / new build | None | April 15, 2026 | n/a |
| The Hidden Cost of Poor Material Selection in Interior Design | `/blog/the-hidden-cost-of-poor-material-selection-in-interior-design` | same pattern | Inherited | = title | Informational | Materials | Full home / supervision | None | March 15, 2026 | n/a |
| How Interior Design Influences Property Value | `/blog/how-interior-design-influences-property-value` | same | Inherited | = title | Informational / commercial | Property value | Residential | None | February 15, 2026 | n/a |
| How to Choose the Right Interior Theme for Your Home | `/blog/how-to-choose-the-right-interior-theme-for-your-home` | same | Inherited | = title | Informational | Theme selection | Residential / consultation | None | January 15, 2026 | n/a |
| Why Layout Matters More Than Furniture in Interior Design | `/blog/why-layout-matters-more-than-furniture-in-interior-design` | same | Inherited | = title | Informational | Layout | Residential / new build | None | December 15, 2025 | n/a |
| Designing Rooms That Feel Bigger Without Renovating | `/blog/designing-rooms-that-feel-bigger-without-renovating` | same | Inherited | = title | Informational | Spatial perception | Residential / consultation | None | November 15, 2025 | n/a |
| Bringing Harmony to Your Home: The Power of Curated Texture | `/blog/bringing-harmony-to-your-home-the-power-of-curated-texture` | same | Inherited | = title | Informational | Texture | Residential / styling | None | October 15, 2025 | n/a |
| The Overlooked Secrets That Turn Good Design Into Exceptional Spaces | `/blog/the-overlooked-secrets-that-turn-good-design-into-exceptional-spaces` | same | Inherited | = title | Informational | Design quality | Full home | None | September 15, 2025 | n/a |
| Why Interior Design Should Be the First Step Not the Last in Your Building Project | `/blog/why-interior-design-should-be-the-first-step-not-the-last-in-your-building-project` | same | Inherited | = title | Informational | Engage designer early | New build / supervision | None | August 15, 2025 | n/a |
| How Interior Design Adds Value to Your Property | `/blog/how-interior-design-adds-value-to-your-property` | same | Inherited | = title | Informational / commercial | Property value | Residential | None | July 15, 2025 | n/a |
| Common Interior Design Mistakes (And How to Avoid Them) | `/blog/common-interior-design-mistakes-and-how-to-avoid-them` | same | Inherited | = title | Informational | Mistakes | Consultation / full home | None | June 15, 2025 | n/a |
| Interior Design Trends That Actually Last | `/blog/interior-design-trends-that-actually-last` | same | Inherited | = title | Informational | Timeless trends | Residential | None | May 15, 2025 | n/a |
| Why Interior Design Should Never Be an Afterthought in Your Building Project | `/blog/why-interior-design-should-never-be-an-afterthought-in-your-building-project` | same | Inherited | = title | Informational | Engage designer early | New build | None | April 15, 2025 | n/a |
| How to Layer Light Like a Designer | `/blog/how-to-layer-light-like-a-designer` | same | Inherited | = title | Informational | Lighting | Full home / residential | None | March 15, 2025 | n/a |
| 3D Rendering in Interior Design: Why It Matters More Than Ever | `/blog/3d-rendering-in-interior-design-why-it-matters-more-than-ever` | same | Inherited | = title | Informational | 3D visualisation | Consultation / new build | None | February 15, 2025 | n/a |
| The Power of Neutrals: How to Use Soft Colours for a Sophisticated Space | `/blog/the-power-of-neutrals-how-to-use-soft-colours-for-a-sophisticated-space` | same | Inherited | = title | Informational | Colour | Consultation / residential | None | January 15, 2025 | n/a |
| How to Create a Cohesive Interior Design Concept for Your Home | `/blog/how-to-create-a-cohesive-interior-design-concept-for-your-home` | same | Inherited | = title | Informational | Concept / cohesion | Full home | None | December 15, 2024 | n/a |
| Top 10 Tips for Designing a Timeless Kitchen | `/blog/top-10-tips-for-designing-a-timeless-kitchen` | same | Inherited | = title | Informational | Kitchen | Kitchen service | None | November 15, 2024 | n/a |

**Blog → Melbourne/local intent:** none of the titles/slugs target a suburb.  
**Oddity:** first post sign-off says “At **Lux Interiors**” not Yara Luxe. Categories include typo **“Achitecture”**. One post categorised **Exterior** despite interior topic.

### Cannibalisation pairs (substantially same intent)

1. **Property value:** `how-interior-design-influences-property-value` (Feb 2026) vs `how-interior-design-adds-value-to-your-property` (Jul 2025)  
2. **Layout first:** `the-foundation-of-a-good-design-layout-comes-first` vs `why-layout-matters-more-than-furniture-in-interior-design`  
3. **Design before build:** `why-interior-design-should-be-the-first-step-not-the-last-in-your-building-project` vs `why-interior-design-should-never-be-an-afterthought-in-your-building-project`  
4. **Excerpt collision:** `common-interior-design-mistakes-and-how-to-avoid-them` excerpt in JSON starts with the same “fast-moving world of design / trending” text as the **trends** article — possible duplicate excerpt, not necessarily duplicate body.

Old slug `/blog/why-interior-design-should-never-be-an-afterthought-in-your-building-project-2` **301s to** `/blog/interior-design-trends-that-actually-last` (unrelated topic — redirect mismatch).

---

## 14. Current Internal Linking

### Homepage → services
**No in-body links.** Services only via Header dropdown.

### Homepage → locations
**No in-body links.** Locations only via Header “Main Areas”.

### Service → location
**Weak.** `AreasWeServe` lists suburb **names + postcodes as non-linked text**. No `<Link>` to `/interior-designer-*`.

### Location → service
**Partial.** Hero “View Our Services” → **residential only**. No mesh to kitchen/bathroom/commercial/consultation except whatever is mentioned as plain text.

### Blog → commercial/service
**None.** `blog-posts.json` has no `href` to service or location URLs.

### Blog → location
**None.**

### Other
- Header globally links all 8 services + 17 areas + about/process/faqs/portfolio/blog/contact.  
- About → portfolio only.  
- Process → blog.  
- FAQs → contact.  
- Residential “View Our Services” → **commercial** (inconsistent vs other services → residential).  
- Old `/services` and `/hawthorn` etc. 301 to new URLs (`lib/urls.js`).

### Important pages with weak in-content internal links

- Homepage (no service/location body links)  
- All 18 blog posts  
- Portfolio (no project pages to link)  
- Service “areas we serve” (names not linked)  
- Location pages (only residential service linked)

---

## 15. Existing URL vs Planned SEO URL

### Services

| Current URL | Planned URL |
|---|---|
| `/residential-interior-design-melbourne` | `/residential-interior-design-melbourne/` |
| `/commercial-interior-design-melbourne` | `/commercial-interior-design-melbourne/` |
| `/kitchen-interior-design-melbourne` | `/kitchen-interior-design-melbourne/` |
| `/bathroom-interior-design-melbourne` | `/bathroom-interior-design-melbourne/` |
| `/interior-design-consultation-melbourne` | `/interior-design-consultation-melbourne/` |
| `/new-build-interior-design-melbourne` | `/new-build-interior-design-melbourne/` |
| `/interior-design-project-supervision-melbourne` | `/interior-design-project-supervision-melbourne/` |
| `/full-home-interior-design-melbourne` | `/full-home-interior-design-melbourne/` |

Paths already match. Difference is **trailing slash only**. Next.js currently **strips** trailing slashes.

### Locations (`/interior-designer-[suburb]/`)

| Current URL | Planned URL |
|---|---|
| `/interior-designer-hawthorn` | `/interior-designer-hawthorn/` |
| `/interior-designer-kew` | `/interior-designer-kew/` |
| `/interior-designer-toorak` | `/interior-designer-toorak/` |
| `/interior-designer-south-yarra` | `/interior-designer-south-yarra/` |
| `/interior-designer-brighton` | `/interior-designer-brighton/` |
| `/interior-designer-brighton-east` | `/interior-designer-brighton-east/` |
| `/interior-designer-balwyn` | `/interior-designer-balwyn/` |
| `/interior-designer-balwyn-north` | `/interior-designer-balwyn-north/` |
| `/interior-designer-camberwell` | `/interior-designer-camberwell/` |
| `/interior-designer-canterbury` | `/interior-designer-canterbury/` |
| `/interior-designer-mont-albert` | `/interior-designer-mont-albert/` |
| `/interior-designer-albert-park` | `/interior-designer-albert-park/` |
| `/interior-designer-elwood` | `/interior-designer-elwood/` |
| `/interior-designer-armadale` | `/interior-designer-armadale/` |
| `/interior-designer-malvern` | `/interior-designer-malvern/` |
| `/interior-designer-prahran` | `/interior-designer-prahran/` |
| `/interior-designer-templestowe` | `/interior-designer-templestowe/` |

**Already implemented.** Do not implement redirects in this task.

Legacy short paths already 301: `/hawthorn` → `/interior-designer-hawthorn`, etc. Legacy `/services/*` 301 to the Melbourne service URLs.

---

## Appendix A — Technical SEO facts (for metadata work, not implementation)

- No `app/sitemap.js` / `public/sitemap.xml`  
- No `robots.txt`  
- No Open Graph / Twitter metadata  
- No `metadataBase`  
- Contact form is **front-end only** (`onSubmit` prevents default; “Thank you… sent” with no API)  
- `/test-homepage` is the only page with a **unique, keyword-rich meta description** and schema — and it is noindex

## Appendix B — Copy risks if used in SERP

Do **not** treat as verified for titles/descriptions without caveat:

- “No. 1 in Australia for interior design consultation”  
- “Best Commercial Interior Design” (H1 word “Best”)  
- “Affordable” vs “Luxury” on the same commercial page  
- “Free Consultation”  
- Exact project counts, review scores, awards  
- “19-year-old company” (false vs About timeline)  
- Suburb-specific completed projects (not documented)

Safe verified modifiers for later metadata drafting:

- Melbourne  
- Interior designer / interior design  
- Luxury / high-end / bespoke / tailored  
- Residential and commercial  
- Kitchen / bathroom / new build / full home / consultation / project supervision  
- Named suburbs that have pages  
- Donia Yara  
- Architecture-trained interior designer  
- 19+ years industry experience (as **experience**, not company age)  
- In-home and virtual consultation (**paid**)  
- Start Your Project / Book a Consultation / Call 0433 211 875
