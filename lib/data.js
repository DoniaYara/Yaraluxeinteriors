import { AREA_PAGES } from "./urls";

export const U = "/uploads";
export { AREA_PAGES, AREA_URLS } from "./urls";
export const LOGO = `${U}/brand/yara-luxe-interiors-logo.png`;
export const COVER = `${U}/2025/06/Blog-top-cover-photo.jpg`;
export const CONTACT_BANNER = `${U}/brand/contact-page-banner.webp`;
export const CONTACT_BG = `${U}/2020/05/bg1-contact.jpg`;
export const MAP_EMBED =
  "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3147.2199893816173!2d145.02526827673898!3d-37.9252908404216!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x4515044591dc18d%3A0x35a0f837b47498d9!2sYara%20Luxe%20Interiors%20Pty%20Ltd!5e0!3m2!1sen!2sae!4v1782193197449!5m2!1sen!2sae";

export const AREAS = AREA_PAGES;

const DFI = ["Decor", "Furniture", "Interior"];

export const PORTFOLIO_BANNER = `${U}/brand/portfolio-page-banner.webp`;

export const PROJECTS = [
  { title: "A Pearl Residence", img: "2026/05/bb.jpg", thumb: "2026/05/bb-720x720.jpg", cats: DFI },
  {
    title: "The Velvet Noir",
    img: "2026/05/bb1-1.jpg",
    thumb: "2026/05/bb1-1-720x720.jpg",
    cats: DFI,
    gallery: [
      "2026/05/velvet-noir/bar-wide.png",
      "2026/05/velvet-noir/01.png",
      "2026/05/velvet-noir/02.png",
      "2026/05/velvet-noir/03.png",
      "2026/05/velvet-noir/04.png",
      "2026/05/velvet-noir/05.png",
      "2026/05/velvet-noir/06.png",
      "2026/05/velvet-noir/07.png",
      "2026/05/velvet-noir/08.png",
      "2026/05/velvet-noir/09.png",
      "2026/05/velvet-noir/bar.png"
    ]
  },
  { title: "Crystal Lullaby", img: "2026/04/bottom-1.jpg", thumb: "2026/04/bottom-1-720x720.jpg", cats: DFI },
  { title: "NeoClassical Golden Elegance", img: "2026/03/ff2.jpg", thumb: "2026/03/ff2-720x720.jpg", cats: DFI },
  { title: "Wispers Of Provence", img: "2025/07/Wispers-Of-Provence-Cover.jpg", thumb: "2025/07/Wispers-Of-Provence-Cover-720x720.jpg", cats: DFI },
  { title: "Echoes Of Celebration", img: "2025/04/9-1.jpg", thumb: "2025/04/9-1-720x720.jpg", cats: DFI },
  { title: "A Retreat by The Water", img: "2024/11/A-Retreat-by-The-Water-Cover.jpg", thumb: "2024/11/A-Retreat-by-The-Water-Cover-720x720.jpg", cats: ["Decor", "Exterior", "Furniture", "Interior"] },
  { title: "Timeless French Provincial", img: "2025/07/thumbnail-kitchen.jpg", thumb: "2025/07/thumbnail-kitchen-720x720.jpg", cats: DFI },
  { title: "Evening Light", img: "2025/01/1.jpg", thumb: "2025/01/1-720x720.jpg", cats: DFI },
  { title: "The Quiet Chamber", img: "2023/07/The-Quiet-Chamber-Cover.jpg", thumb: "2023/07/The-Quiet-Chamber-Cover-720x720.jpg", cats: DFI },
  { title: "French Provincial with a Touch of Glam", img: "2024/07/Glam-Cover.jpg", thumb: "2024/07/Glam-Cover-720x720.jpg", cats: DFI },
  { title: "The Thought Studio", img: "2025/05/The-Thought-Studio-Cover2.jpg", thumb: "2025/05/The-Thought-Studio-Cover2-720x720.jpg", cats: DFI },
  { title: "Blush & Becoming", img: "2024/07/Blush-Becoming-Cover.jpg", thumb: "2024/07/Blush-Becoming-Cover-720x720.jpg", cats: DFI },
  { title: "A Room of Ease", img: "2025/03/A-Room-of-EaseCover.jpg", thumb: "2025/03/A-Room-of-EaseCover-720x720.jpg", cats: DFI },
  { title: "The Framed Garden", img: "2024/10/The-Framed-GardenCover.jpg", thumb: "2024/10/The-Framed-GardenCover-720x720.jpg", cats: ["Decor", "Exterior", "Furniture"] },
  { title: "Tiny Kingdom", img: "2023/07/Tiny-Kingdom-Cover.jpg", thumb: "2023/07/Tiny-Kingdom-Cover-720x720.jpg", cats: DFI },
  { title: "Blue Reflection", img: "2025/02/7.jpg", thumb: "2025/02/7-720x720.jpg", cats: ["Decor", "Exterior", "Furniture", "Interior"] }
];

export function asProject(item) {
  if (Array.isArray(item)) {
    return { title: item[0], img: item[1], cats: String(item[2]).split(/\s+/).filter(Boolean), gallery: [] };
  }
  return {
    ...item,
    cats: item.cats || item.categories || [],
    gallery: item.gallery || []
  };
}

export const ABOUT_BANNER = `${U}/brand/about-page-banner.webp`;
export const OUR_SERVICES_BANNER = `${U}/2025/07/our-services-banner.jpg`;
export const ABOUT_BG = `${U}/2020/05/bg1-aboutus.jpg`;
export const PROCESS_BANNER = `${U}/brand/interior-design-process-banner.webp`;
export const BLOG_BANNER = `${U}/brand/blog-archive-banner.webp`;

export const PROCESS_PARTNERS = [
  "brand/partners/P15-3.png",
  "brand/partners/P15-4.png",
  "brand/partners/P15-5.png",
  "brand/partners/P15-6.png",
  "brand/partners/P15-7.png",
  "brand/partners/adairs-b-4.png",
  "brand/partners/png-koala111B.png"
];

export const HOME_PARTNERS = [
  "brand/partners/png-pottery-white-1-scaled.png",
  "brand/partners/png-west-elm-white-scaled.png",
  "brand/partners/png-provincial-white-scaled.png",
  "brand/partners/png-coco-white-scaled.png",
  "brand/partners/png-freedom-white-scaled.png",
  "brand/partners/png-koala111white.png",
  "brand/partners/adairs-w-5.png"
];

export const HOME_CTA = `${U}/brand/homepage-cta-background.webp`;
export const HOME_DREAMS = `${U}/2025/07/P4-1.jpg`;
export const HOME_PORTFOLIO_BG = `${U}/2020/06/bg1-home2.jpg`;
export const HOME_BLOG_BG = `${U}/2020/06/bg3-home2.png`;
export const HOME_FEATURE_BG = `${U}/2020/04/bg-features.jpg`;

export const FAQ_BANNER = `${U}/brand/faq-page-banner.webp`;

export const PAGE_FAQS = [
  {
    q: "What is 3D desing and how it work?",
    a: "3D design is the process of creating three-dimensions I digital models using specialised software, allowing objects to be visualised from all angles. It works by combining geometry, textures, and lighting to simulate real-world shapes and environments on a screen."
  },
  {
    q: "How much does interior design cost?",
    a: "Interior design costs vary based on project size, style, and designer experience, typically charged as a flat fee, hourly rate, or a percentage of the total project budget."
  },
  {
    q: "How much time I will spend on planning?",
    a: ["Planning for interior design usually", "takes 2 to 6 weeks, depending on the project's size, complexity, and decision-making speed."]
  },
  {
    q: "Can I create custom design?",
    a: ["Yes, you can absolutely create a custom design.", "Interior designers work closely with you to tailor every detail to your style, needs, and space."]
  },
  {
    q: "What does an interior designer actually do?",
    a: "An interior designer helps bring your vision to life by planning and designing functional, beautiful spaces tailored to your lifestyle or brand. From concept development, layout planning, and finishes selection to sourcing furniture and managing trades, we handle every detail to ensure a cohesive, professional result."
  },
  {
    q: "What’s the difference between an interior designer and an interior decorator?",
    a: "An interior decorator focuses mainly on the aesthetics furniture, colour palettes, styling, etc. while an interior designer goes deeper, often working with architects and builders on layout, functionality, materials, lighting plans, and compliance. Designers are usually qualified and trained in both technical and creative aspects."
  },
  {
    q: "Can I use my existing furniture and still work with an interior designer?",
    a: "Absolutely! We love incorporating pieces that are meaningful or functional for you. We'll assess how best to integrate your existing furniture into the new design, so everything works together harmoniously."
  },
  {
    q: "When is the best time to engage an interior designer?",
    a: "The earlier, the better ideally during the planning or construction phase. This allows us to collaborate with the builder to ensure design decisions align with the structure and overall vision, saving time and costs later."
  }
];

export const ABOUT_FAQS = [
  {
    q: "What is 3D design and how it work?",
    a: "3D design is the process of creating three-dimensions I digital models using specialised software, allowing objects to be visualised from all angles. It works by combining geometry, textures, and lighting to simulate real-world shapes and environments on a screen."
  },
  {
    q: "How interior design is cost?",
    a: "Interior design costs vary based on project size, style, and designer experience, typically charged as a flat fee, hourly rate, or a percentage of the total project budget."
  },
  {
    q: "How much time I will spend on planning?",
    a: ["Planning for interior design usually", "takes 2 to 6 weeks, depending on the project's size, complexity, and decision-making speed."]
  },
  {
    q: "Can I create custom design?",
    a: ["Yes, you can absolutely create a custom design.", "Interior designers work closely with you to tailor every detail to your style, needs, and space."]
  },
  {
    q: "What does an interior designer actually do?",
    a: "An interior designer helps bring your vision to life by planning and designing functional, beautiful spaces tailored to your lifestyle or brand. From concept development, layout planning, and finishes selection to sourcing furniture and managing trades, we handle every detail to ensure a cohesive, professional result."
  },
  {
    q: "What’s the difference between an interior designer and an interior decorator?",
    a: "An interior decorator focuses mainly on the aesthetics furniture, colour palettes, styling, etc. while an interior designer goes deeper, often working with architects and builders on layout, functionality, materials, lighting plans, and compliance. Designers are usually qualified and trained in both technical and creative aspects."
  },
  {
    q: "Can I use my existing furniture and still work with an interior designer? Answer:",
    a: "Absolutely! We love incorporating pieces that are meaningful or functional for you. We'll assess how best to integrate your existing furniture into the new design, so everything works together harmoniously."
  },
  {
    q: "When is the best time to engage an interior designer?",
    a: "The earlier, the better ideally during the planning or construction phase. This allows us to collaborate with the builder to ensure design decisions align with the structure and overall vision, saving time and costs later."
  }
];

export { default as ABOUT_QUOTES } from "./about-quotes.json";
export { default as HOME_QUOTES } from "./home-quotes.json";

export const QUOTES = [
  ["Yara Luxe Interiors completely transformed our space. Elegant, functional, and beyond what we imagined.", "Ethan Blake"],
  ["I discovered Yara Luxe Interiors on Instagram and instantly fell in love with their aesthetic!", "Tara"],
  ["I searched for the right interior designer for so long and was so glad to find Donia from Yara Luxe Interiors!", "Rozhan"],
  ["Beautiful design and great service. Donia completely transformed our home, stylish, functional, and uniquely us!", "Amy L"],
  ["Donia’s style is exactly what we were looking for. Elegant, chic and timeless.", "Nazieh"],
  ["Working with Yara Luxe Interiors was a game-changer for our design. The space is now modern and inviting.", "Sara"],
  ["Donia is a talented artist in interior design, she transformed our kitchen into a masterpiece.", "Zoe Leask"],
  ["Professional, creative, and easy to work with. We love our new space, thank you, Donia!", "Matilda"],
  ["The Yara Luxe team made the entire process stress-free and delivered results that exceeded our expectations.", "Oliver Hart"],
  ["Donia is a real professional with excellent style, I would recommend her to anyone and everyone.", "Lavin Deeba"]
];
