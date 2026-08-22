/** SEO permalink map — Yara Luxe Interiors */

export const SERVICE_URLS = {
  residential: "/residential-interior-design-melbourne",
  commercial: "/commercial-interior-design-melbourne",
  kitchen: "/kitchen-interior-design-melbourne",
  bathroom: "/bathroom-interior-design-melbourne",
  consultation: "/interior-design-consultation-melbourne",
  newBuild: "/new-build-interior-design-melbourne",
  supervision: "/interior-design-project-supervision-melbourne",
  fullHome: "/full-home-interior-design-melbourne"
};

export const SERVICE_PAGES = Object.values(SERVICE_URLS);

export const AREA_URLS = {
  Hawthorn: "/interior-designer-hawthorn",
  Kew: "/interior-designer-kew",
  Toorak: "/interior-designer-toorak",
  "South Yarra": "/interior-designer-south-yarra",
  Brighton: "/interior-designer-brighton",
  "Brighton East": "/interior-designer-brighton-east",
  Balwyn: "/interior-designer-balwyn",
  "Balwyn North": "/interior-designer-balwyn-north",
  Camberwell: "/interior-designer-camberwell",
  Canterbury: "/interior-designer-canterbury",
  "Mont Albert": "/interior-designer-mont-albert",
  "Albert Park": "/interior-designer-albert-park",
  Elwood: "/interior-designer-elwood",
  Armadale: "/interior-designer-armadale",
  Malvern: "/interior-designer-malvern",
  Prahran: "/interior-designer-prahran",
  Templestowe: "/interior-designer-templestowe"
};

export const AREA_PAGES = Object.entries(AREA_URLS).map(([name, href]) => ({ name, href }));

export const AREA_PATHS = Object.values(AREA_URLS);

export const CORE_PATHS = [
  "/",
  "/about",
  "/process",
  "/faqs",
  "/our-services",
  "/portfolio",
  "/blog",
  "/contact",
  "/privacy-policy",
  "/terms-and-conditions",
  "/cookie-policy"
];

export const CORE_PAGES = [
  { path: "/", name: "Home" },
  { path: "/about", name: "About" },
  { path: "/process", name: "Our Process" },
  { path: "/faqs", name: "FAQs" },
  { path: "/our-services", name: "Our Services" },
  { path: "/portfolio", name: "Portfolio" },
  { path: "/blog", name: "Blog" },
  { path: "/contact", name: "Contact" },
  { path: "/privacy-policy", name: "Privacy Policy" },
  { path: "/terms-and-conditions", name: "Terms & Conditions" },
  { path: "/cookie-policy", name: "Cookie Policy" }
];

export const SERVICE_LINKS = [
  { key: "residential", href: SERVICE_URLS.residential, label: "Residential Interior Design", name: "Residential Interior Design Melbourne" },
  { key: "commercial", href: SERVICE_URLS.commercial, label: "Commercial Interior Design", name: "Commercial Interior Design Melbourne" },
  { key: "kitchen", href: SERVICE_URLS.kitchen, label: "Kitchen Interior Design", name: "Kitchen Interior Design Melbourne" },
  { key: "bathroom", href: SERVICE_URLS.bathroom, label: "Bathroom Interior Design", name: "Bathroom Interior Design Melbourne" },
  { key: "consultation", href: SERVICE_URLS.consultation, label: "Interior Design Consultation", name: "Free Interior Design Consultation Melbourne" },
  { key: "newBuild", href: SERVICE_URLS.newBuild, label: "New Build Interior Design", name: "New Build Interior Design Melbourne" },
  { key: "supervision", href: SERVICE_URLS.supervision, label: "Project Supervision", name: "Interior Design Project Supervision Melbourne" },
  { key: "fullHome", href: SERVICE_URLS.fullHome, label: "Full Home Interior Design", name: "Full Home Interior Design Melbourne" }
];

export const RESIDENTIAL_SERVICE_KEYS = [
  "residential",
  "kitchen",
  "bathroom",
  "newBuild",
  "fullHome",
  "consultation"
];

export function isServicePath(path) {
  return SERVICE_PAGES.includes(path) || path === "/our-services" || path.startsWith("/our-services/");
}

export function isAreaPath(path) {
  return AREA_PATHS.includes(path);
}

/** 301 redirects: old path → new path (no trailing slashes — Next normalises) */
export const PERMALINK_REDIRECTS = [
  { source: "/services", destination: SERVICE_URLS.residential, permanent: true },
  { source: "/services/commercial", destination: SERVICE_URLS.commercial, permanent: true },
  { source: "/services/kitchen", destination: SERVICE_URLS.kitchen, permanent: true },
  { source: "/services/bathroom", destination: SERVICE_URLS.bathroom, permanent: true },
  { source: "/services/consultation", destination: SERVICE_URLS.consultation, permanent: true },
  { source: "/services/new-build", destination: SERVICE_URLS.newBuild, permanent: true },
  { source: "/services/supervision", destination: SERVICE_URLS.supervision, permanent: true },
  { source: "/services/full-home", destination: SERVICE_URLS.fullHome, permanent: true },
  { source: "/our-services/design-concept-development", destination: "/our-services", permanent: true },
  { source: "/our-services/project-management-delivery", destination: "/our-services", permanent: true },
  { source: "/our-services/finishes-styling", destination: "/our-services", permanent: true },
  { source: "/hawthorn", destination: AREA_URLS.Hawthorn, permanent: true },
  { source: "/kew", destination: AREA_URLS.Kew, permanent: true },
  { source: "/toorak", destination: AREA_URLS.Toorak, permanent: true },
  { source: "/south-yarra", destination: AREA_URLS["South Yarra"], permanent: true },
  { source: "/brighton", destination: AREA_URLS.Brighton, permanent: true },
  { source: "/brighton-east", destination: AREA_URLS["Brighton East"], permanent: true },
  { source: "/balwyn", destination: AREA_URLS.Balwyn, permanent: true },
  { source: "/balwyn-north", destination: AREA_URLS["Balwyn North"], permanent: true },
  { source: "/camberwell", destination: AREA_URLS.Camberwell, permanent: true },
  { source: "/canterbury", destination: AREA_URLS.Canterbury, permanent: true },
  { source: "/mont-albert", destination: AREA_URLS["Mont Albert"], permanent: true },
  { source: "/albert-park", destination: AREA_URLS["Albert Park"], permanent: true },
  { source: "/elwood", destination: AREA_URLS.Elwood, permanent: true },
  { source: "/armadale", destination: AREA_URLS.Armadale, permanent: true },
  { source: "/malvern", destination: AREA_URLS.Malvern, permanent: true },
  { source: "/prahran", destination: AREA_URLS.Prahran, permanent: true },
  { source: "/templestowe", destination: AREA_URLS.Templestowe, permanent: true },
  {
    source: "/blog/how-interior-design-adds-value-to-your-property",
    destination: "/blog/how-interior-design-influences-property-value",
    permanent: true
  },
  {
    source: "/blog/why-interior-design-should-never-be-an-afterthought-in-your-building-project",
    destination: "/blog/why-interior-design-should-be-the-first-step-not-the-last-in-your-building-project",
    permanent: true
  },
  {
    source: "/blog/why-interior-design-should-never-be-an-afterthought-in-your-building-project-2",
    destination: "/blog/why-interior-design-should-be-the-first-step-not-the-last-in-your-building-project",
    permanent: true
  }
];
