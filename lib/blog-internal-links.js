import { SERVICE_URLS } from "./urls";

const S = SERVICE_URLS;

function escapeRegExp(value) {
  return value.replace(/[.*+?^${}()|[\]\\]/g, "\\$&");
}

function wrapFirstPhrase(html, phrase, href) {
  const re = new RegExp(escapeRegExp(phrase));
  const match = re.exec(html);
  if (!match) return html;
  const before = html.slice(0, match.index);
  const lastOpen = before.lastIndexOf("<a ");
  const lastClose = before.lastIndexOf("</a>");
  if (lastOpen > lastClose) return html;
  return `${before}<a href="${href}">${match[0]}</a>${html.slice(match.index + match[0].length)}`;
}

const SERVICE_PHRASES = {
  "the-foundation-of-a-good-design-layout-comes-first": [
    { phrase: "great design begins with understanding how a space should function", href: S.fullHome },
    { phrase: "new apartment or a complete home", href: S.residential },
    { phrase: "Investing time and expertise into layout planning from the beginning", href: S.newBuild }
  ],
  "the-hidden-cost-of-poor-material-selection-in-interior-design": [
    { phrase: "this stage of the design process", href: S.fullHome },
    { phrase: "high-traffic areas such as kitchens", href: S.supervision }
  ],
  "how-interior-design-influences-property-value": [
    { phrase: "Thoughtful design decisions improve functionality", href: S.residential }
  ],
  "how-to-choose-the-right-interior-theme-for-your-home": [
    { phrase: "earliest and most important decisions in any design project", href: S.residential },
    { phrase: "When your interior has a clear theme", href: S.consultation }
  ],
  "why-layout-matters-more-than-furniture-in-interior-design": [
    { phrase: "most critical and often overlooked aspects of interior", href: S.residential },
    { phrase: "When designing a home", href: S.newBuild }
  ],
  "designing-rooms-that-feel-bigger-without-renovating": [
    { phrase: "feel bigger without renovating", href: S.residential },
    { phrase: "professional design advice", href: S.consultation }
  ],
  "bringing-harmony-to-your-home-the-power-of-curated-texture": [
    { phrase: "harmony to your home", href: S.residential },
    { phrase: "every room", href: S.fullHome }
  ],
  "the-overlooked-secrets-that-turn-good-design-into-exceptional-spaces": [
    { phrase: "exceptional spaces", href: S.fullHome },
    { phrase: "good design", href: S.residential }
  ],
  "why-interior-design-should-be-the-first-step-not-the-last-in-your-building-project": [
    { phrase: "start with interior design from the very beginning", href: S.newBuild },
    { phrase: "architects, builders and other consultants", href: S.supervision }
  ],
  "common-interior-design-mistakes-and-how-to-avoid-them": [
    { phrase: "common interior design mistakes", href: S.consultation },
    { phrase: "avoid them", href: S.fullHome }
  ],
  "interior-design-trends-that-actually-last": [
    { phrase: "interior design trends", href: S.residential }
  ],
  "how-to-layer-light-like-a-designer": [
    { phrase: "layer light", href: S.fullHome },
    { phrase: "like a designer", href: S.residential }
  ],
  "3d-rendering-in-interior-design-why-it-matters-more-than-ever": [
    { phrase: "3D rendering", href: S.consultation },
    { phrase: "new home", href: S.newBuild }
  ],
  "the-power-of-neutrals-how-to-use-soft-colours-for-a-sophisticated-space": [
    { phrase: "soft colours", href: S.consultation },
    { phrase: "sophisticated space", href: S.residential }
  ],
  "how-to-create-a-cohesive-interior-design-concept-for-your-home": [
    { phrase: "cohesive interior", href: S.fullHome }
  ],
  "top-10-tips-for-designing-a-timeless-kitchen": [
    { phrase: "timeless kitchen", href: S.kitchen }
  ]
};

const CONTEXT_PARAS = {
  "the-foundation-of-a-good-design-layout-comes-first": `<p>That is why our <a href="${S.fullHome}">full-home interior design</a> work starts with layout, whether the brief is <a href="${S.residential}">residential interior design in Melbourne</a> or planning interiors for a <a href="${S.newBuild}">new build</a>.</p>`,
  "the-hidden-cost-of-poor-material-selection-in-interior-design": `<p>Material decisions sit at the centre of <a href="${S.fullHome}">full-home interior design</a>, and <a href="${S.supervision}">project supervision</a> is how those selections are protected on site.</p>`,
  "how-interior-design-influences-property-value": `<p>Considered <a href="${S.residential}">residential interior design</a> is one of the most reliable ways to strengthen how a home is lived in and how it is perceived.</p>`,
  "how-to-choose-the-right-interior-theme-for-your-home": `<p>A <a href="${S.consultation}">free interior design consultation</a> is often the simplest way to test a theme before committing to <a href="${S.residential}">residential interior design</a> across the house.</p>`,
  "why-layout-matters-more-than-furniture-in-interior-design": `<p>Layout planning is the first stage of both <a href="${S.residential}">residential interior design</a> and <a href="${S.newBuild}">new build interior design</a> — furniture comes after the plan is resolved.</p>`,
  "designing-rooms-that-feel-bigger-without-renovating": `<p>If a room feels tight, a <a href="${S.consultation}">design consultation</a> can often unlock space through planning rather than construction, which is a core part of our <a href="${S.residential}">residential interior design</a> work.</p>`,
  "bringing-harmony-to-your-home-the-power-of-curated-texture": `<p>Texture is one of the quiet tools we use in <a href="${S.residential}">residential interiors</a> and <a href="${S.fullHome}">full-home design</a> to make rooms feel finished rather than styled.</p>`,
  "the-overlooked-secrets-that-turn-good-design-into-exceptional-spaces": `<p>Those details are what separate a decorated room from <a href="${S.fullHome}">full-home interior design</a> that still feels considered years later in a <a href="${S.residential}">Melbourne home</a>.</p>`,
  "why-interior-design-should-be-the-first-step-not-the-last-in-your-building-project": `<p>Bringing <a href="${S.newBuild}">new build interior design</a> in at the start, then supporting it with <a href="${S.supervision}">project supervision</a>, is how interiors stay aligned with the architecture.</p>`,
  "common-interior-design-mistakes-and-how-to-avoid-them": `<p>A <a href="${S.consultation}">free interior design consultation</a> is often enough to catch these issues early, especially on a <a href="${S.fullHome}">whole-home interior</a>.</p>`,
  "interior-design-trends-that-actually-last": `<p>That is the filter we use in <a href="${S.residential}">residential interior design</a>: keep the bones timeless, and let trends sit in the layers that can change.</p>`,
  "how-to-layer-light-like-a-designer": `<p>Lighting is planned as part of <a href="${S.fullHome}">full-home interior design</a>, not added at the end of a <a href="${S.residential}">residential project</a>.</p>`,
  "3d-rendering-in-interior-design-why-it-matters-more-than-ever": `<p>We use this process in a <a href="${S.consultation}">free consultation</a> and throughout <a href="${S.newBuild}">new build interior design</a> so clients can see the space before it is built.</p>`,
  "the-power-of-neutrals-how-to-use-soft-colours-for-a-sophisticated-space": `<p>A calm palette is often where a <a href="${S.consultation}">design consultation</a> begins, especially when the brief is a refined <a href="${S.residential}">residential interior</a>.</p>`,
  "how-to-create-a-cohesive-interior-design-concept-for-your-home": `<p>A single concept is the backbone of <a href="${S.fullHome}">full-home interior design</a> — every room should feel like part of the same story.</p>`,
  "top-10-tips-for-designing-a-timeless-kitchen": `<p>These are the same principles behind our <a href="${S.kitchen}">kitchen interior design in Melbourne</a>: layout first, quality materials, and a kitchen that still feels right years later.</p>`
};

export const RELATED_SLUGS = {
  "the-foundation-of-a-good-design-layout-comes-first": [
    "how-to-create-a-cohesive-interior-design-concept-for-your-home",
    "how-to-layer-light-like-a-designer",
    "3d-rendering-in-interior-design-why-it-matters-more-than-ever"
  ],
  "the-hidden-cost-of-poor-material-selection-in-interior-design": [
    "common-interior-design-mistakes-and-how-to-avoid-them",
    "how-to-layer-light-like-a-designer",
    "top-10-tips-for-designing-a-timeless-kitchen"
  ],
  "how-interior-design-influences-property-value": [
    "common-interior-design-mistakes-and-how-to-avoid-them",
    "interior-design-trends-that-actually-last",
    "how-to-create-a-cohesive-interior-design-concept-for-your-home"
  ],
  "how-to-choose-the-right-interior-theme-for-your-home": [
    "how-to-create-a-cohesive-interior-design-concept-for-your-home",
    "the-power-of-neutrals-how-to-use-soft-colours-for-a-sophisticated-space",
    "interior-design-trends-that-actually-last"
  ],
  "why-layout-matters-more-than-furniture-in-interior-design": [
    "designing-rooms-that-feel-bigger-without-renovating",
    "how-to-create-a-cohesive-interior-design-concept-for-your-home",
    "how-to-layer-light-like-a-designer"
  ],
  "designing-rooms-that-feel-bigger-without-renovating": [
    "the-power-of-neutrals-how-to-use-soft-colours-for-a-sophisticated-space",
    "how-to-layer-light-like-a-designer",
    "how-to-choose-the-right-interior-theme-for-your-home"
  ],
  "bringing-harmony-to-your-home-the-power-of-curated-texture": [
    "the-power-of-neutrals-how-to-use-soft-colours-for-a-sophisticated-space",
    "how-to-create-a-cohesive-interior-design-concept-for-your-home",
    "the-overlooked-secrets-that-turn-good-design-into-exceptional-spaces"
  ],
  "the-overlooked-secrets-that-turn-good-design-into-exceptional-spaces": [
    "how-to-layer-light-like-a-designer",
    "bringing-harmony-to-your-home-the-power-of-curated-texture",
    "how-to-create-a-cohesive-interior-design-concept-for-your-home"
  ],
  "why-interior-design-should-be-the-first-step-not-the-last-in-your-building-project": [
    "3d-rendering-in-interior-design-why-it-matters-more-than-ever",
    "the-hidden-cost-of-poor-material-selection-in-interior-design",
    "how-to-create-a-cohesive-interior-design-concept-for-your-home"
  ],
  "common-interior-design-mistakes-and-how-to-avoid-them": [
    "how-to-choose-the-right-interior-theme-for-your-home",
    "the-hidden-cost-of-poor-material-selection-in-interior-design",
    "how-to-create-a-cohesive-interior-design-concept-for-your-home"
  ],
  "interior-design-trends-that-actually-last": [
    "the-power-of-neutrals-how-to-use-soft-colours-for-a-sophisticated-space",
    "how-to-choose-the-right-interior-theme-for-your-home",
    "top-10-tips-for-designing-a-timeless-kitchen"
  ],
  "how-to-layer-light-like-a-designer": [
    "designing-rooms-that-feel-bigger-without-renovating",
    "how-to-create-a-cohesive-interior-design-concept-for-your-home",
    "the-overlooked-secrets-that-turn-good-design-into-exceptional-spaces"
  ],
  "3d-rendering-in-interior-design-why-it-matters-more-than-ever": [
    "how-to-create-a-cohesive-interior-design-concept-for-your-home",
    "the-hidden-cost-of-poor-material-selection-in-interior-design",
    "how-to-layer-light-like-a-designer"
  ],
  "the-power-of-neutrals-how-to-use-soft-colours-for-a-sophisticated-space": [
    "how-to-choose-the-right-interior-theme-for-your-home",
    "bringing-harmony-to-your-home-the-power-of-curated-texture",
    "interior-design-trends-that-actually-last"
  ],
  "how-to-create-a-cohesive-interior-design-concept-for-your-home": [
    "how-to-choose-the-right-interior-theme-for-your-home",
    "bringing-harmony-to-your-home-the-power-of-curated-texture",
    "how-to-layer-light-like-a-designer"
  ],
  "top-10-tips-for-designing-a-timeless-kitchen": [
    "the-hidden-cost-of-poor-material-selection-in-interior-design",
    "how-to-create-a-cohesive-interior-design-concept-for-your-home",
    "interior-design-trends-that-actually-last"
  ]
};

function insertBeforeFinalThoughts(html, paragraph) {
  if (!paragraph) return html;
  const marker = /(?:<hr\s*\/?>\s*)?(?:<h[1-6][^>]*>[\s\S]*?Final Thoughts)/i;
  if (marker.test(html)) return html.replace(marker, `${paragraph}$&`);
  return `${html}${paragraph}`;
}

export function enrichBlogHtml(post) {
  let html = post.content || "";
  const phrases = SERVICE_PHRASES[post.slug] || [];
  for (const item of phrases) {
    html = wrapFirstPhrase(html, item.phrase, item.href);
  }
  html = insertBeforeFinalThoughts(html, CONTEXT_PARAS[post.slug]);
  return html;
}
