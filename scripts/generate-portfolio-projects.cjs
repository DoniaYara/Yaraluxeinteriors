const fs = require("fs");

const projects = JSON.parse(fs.readFileSync("tmp-portfolio-import.json", "utf8"));
const cats = {
  "A Retreat by The Water": ["Decor", "Exterior", "Furniture", "Interior"],
  "The Framed Garden": ["Decor", "Exterior", "Furniture"],
  "Blue Reflection": ["Decor", "Exterior", "Furniture", "Interior"],
  "Timeless French Provincial": ["Decor", "Furniture", "Interior", "Kitchen"]
};
const DFI = ["Decor", "Furniture", "Interior"];

const lines = [];
lines.push("/** Auto-generated portfolio case-study pages from final project images. */");
lines.push('import { PROJECTS } from "./data";');
lines.push("");
lines.push("export const PORTFOLIO_PROJECTS = [");

for (const p of projects) {
  const c = cats[p.title] || DFI;
  lines.push("  {");
  lines.push(`    slug: ${JSON.stringify(p.slug)},`);
  lines.push(`    title: ${JSON.stringify(p.title)},`);
  lines.push(`    cats: ${JSON.stringify(c)},`);
  lines.push(`    banner: ${JSON.stringify(p.topper)},`);
  lines.push(`    photos: ${JSON.stringify(p.photos)},`);
  lines.push("  },");
}

lines.push("];");
lines.push("");
lines.push(`export function getProjectPhotos(project) {
  const list = project.photos || [];
  const keep = Math.floor(list.length / 3) * 3;
  return list.slice(0, keep);
}

export function getPortfolioProject(slug) {
  return PORTFOLIO_PROJECTS.find((p) => p.slug === slug) || null;
}

export function getPortfolioProjectByTitle(title) {
  return PORTFOLIO_PROJECTS.find((p) => p.title === title) || null;
}

export function getAllPortfolioSlugs() {
  return PORTFOLIO_PROJECTS.map((p) => p.slug);
}

export function portfolioHref(titleOrProject) {
  const title = typeof titleOrProject === "string" ? titleOrProject : titleOrProject?.title;
  const match = getPortfolioProjectByTitle(title);
  return match ? "/portfolio/" + match.slug : "/portfolio";
}

/** Related cards for a project page. */
export function relatedPortfolioCards(currentSlug, limit = 3) {
  return PORTFOLIO_PROJECTS.filter((p) => p.slug !== currentSlug)
    .slice(0, limit)
    .map((p) => {
      const fromGrid = PROJECTS.find((g) => g.title === p.title);
      return {
        title: p.title,
        slug: p.slug,
        href: "/portfolio/" + p.slug,
        img: fromGrid?.thumb || fromGrid?.img || null,
        banner: p.banner,
        cats: p.cats
      };
    });
}
`);

fs.writeFileSync("lib/portfolio-projects.js", lines.join("\n") + "\n");
console.log("wrote", projects.length, "projects");
