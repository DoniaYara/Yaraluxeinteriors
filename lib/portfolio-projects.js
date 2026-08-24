import { U, PROJECTS, asProject } from "./data";

const velvetNoirGallery = PROJECTS.find((p) => p.title === "The Velvet Noir")?.gallery || [];
const VELVET_NOIR_LANDSCAPE_PHOTOS = velvetNoirGallery.map((path) => `${U}/${path}`);

/** Single portfolio case-study pages (preview — not linked from nav/grid yet). */
export const PORTFOLIO_PROJECTS = [
  {
    slug: "a-timeless-french-provincial-kitchen",
    title: "A Timeless French Provincial Kitchen",
    cats: ["Interior", "Kitchen"],
    banner: `${U}/2025/07/thumbnail-kitchen.jpg`,
    heroImage: `${U}/2025/07/thumbnail-kitchen.jpg`,
    photos: VELVET_NOIR_LANDSCAPE_PHOTOS,
    meta: {
      designer: "Donia Yara",
      projectType: "Kitchen Interior Design",
      duration: "4 months",
      client: "Private Residence",
      style: "French Provincial",
      date: "August 2025"
    },
    intro: [
      "Located in Melbourne\u2019s south-eastern suburbs, this French Provincial kitchen was conceived as a refined yet welcoming space where traditional European character could sit comfortably within an Australian home. The design draws on the enduring elegance of French Provincial interiors, combining architectural detailing, soft neutral tones, decorative craftsmanship and aged finishes to create a kitchen that feels established, warm and timeless rather than overly styled."
    ],
    quoteLead: "From the beginning, our approach was centred on one principle: every detail needed to contribute to the whole.",
    quote:
      "French Provincial design is recognised for its appreciation of craftsmanship, moulding, panelled cabinetry, curved forms and carefully considered decorative elements. Rather than treating these features as decoration alone, we used them to establish rhythm, proportion and continuity throughout the space.",
    designDetails: [
      "The colour palette was intentionally restrained. Ivory was selected as the foundation, creating a soft, luminous backdrop that allows the architectural details and finishes to speak for themselves. Instead of using a stark white, the warmer ivory tone brings depth and softness to the room, complementing the natural light and creating the relaxed elegance associated with French Provincial interiors. Warm neutrals also help the kitchen feel generous and inviting, while ensuring that the overall scheme remains timeless.",
      "To add richness and definition, the ivory cabinetry is paired with aged brass and antique-gold accents. This combination is central to the character of the design. The aged metallic finish introduces warmth and a subtle sense of history, while avoiding the sharpness of highly polished contemporary metals. It appears throughout the kitchen in the lighting, hardware and decorative elements, creating a cohesive visual thread that connects each part of the room.",
      "The lighting was treated as an architectural feature rather than simply a functional requirement. A collection of ornate crystal pendant lights becomes one of the defining moments of the space, adding sparkle, scale and a sense of occasion above the island. Their traditional silhouettes and aged brass detailing reinforce the French Provincial language, while the crystal catches the natural and artificial light to create movement across the room.",
      "The island was designed to be more than a preparation surface. It acts as the social heart of the kitchen and visually anchors the space. Its generous proportions provide a practical area for everyday use while allowing the surrounding cabinetry, decorative accessories and lighting to be appreciated as part of a complete composition. The curved detailing of the bar stools introduces another layer of softness, echoing the ornamental language of the pendant lights and cabinetry."
    ],
    result: [
      "Architectural elements such as the detailed wall panelling, decorative mouldings, arched opening and framed windows contribute significantly to the character of the room. These features create a sense of continuity between the kitchen and the surrounding spaces, making the design feel integrated into the architecture rather than applied to it. The result is a room with visual depth, where the eye discovers new details from different perspectives.",
      "Material selection was equally important. Stone surfaces introduce natural variation and subtle movement, balancing the more decorative cabinetry and metallic finishes. Glass, crystal, brass, painted cabinetry and natural textures work together to create a layered material palette without becoming visually overwhelming. This balance between ornamentation and restraint is essential to achieving a sophisticated French Provincial aesthetic.",
      "Styling was approached with the same attention to detail. Fresh white orchids, sculptural vessels, greenery and carefully selected decorative pieces bring life to the kitchen while maintaining the calm, elegant palette. Nothing is intended to feel excessive; each object has a role in reinforcing the atmosphere of the space.",
      "Ultimately, this project is an interpretation of French Provincial design through a contemporary Australian lens. It celebrates the beauty of traditional craftsmanship while responding to the way a modern family uses a kitchen today. The intention was never to create a room that simply followed a style. It was to create a space with warmth, elegance, character and longevity, a kitchen that feels beautiful today, yet has the quiet confidence to remain timeless for years to come. It is a space designed to be lived in, shared and remembered, where daily rituals are elevated through thoughtful design and beauty comes from proportion, craftsmanship and the considered relationship between elements."
    ]
  }
];

export function getProjectPhotos(project) {
  if (project.photos?.length) return project.photos;
  return [project.featuredImage, ...(project.gallery || [])].filter(Boolean);
}

export function getPortfolioProject(slug) {
  return PORTFOLIO_PROJECTS.find((p) => p.slug === slug) || null;
}

export function getAllPortfolioSlugs() {
  return PORTFOLIO_PROJECTS.map((p) => p.slug);
}

/** Related grid cards — links stay on /portfolio until other singles go live. */
export function relatedPortfolioCards(limit = 3) {
  const titles = new Set(["A Timeless French Provincial Kitchen", "Timeless French Provincial"]);
  return PROJECTS.filter((p) => !titles.has(p.title))
    .slice(0, limit)
    .map(asProject);
}
