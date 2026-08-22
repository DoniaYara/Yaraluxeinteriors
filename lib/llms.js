import { BLOG_POSTS, postHref } from "./blog";
import { EMAIL, FOUNDER_NAME, LEGAL_NAME, PHONE, SITE_URL, absoluteUrl } from "./schema/constants";
import { AREA_PAGES, SERVICE_LINKS } from "./urls";

function mdLink(label, path) {
  return `- [${label}](${absoluteUrl(path)})`;
}

export function buildLlmsTxt() {
  const services = SERVICE_LINKS.map((service) => mdLink(service.name, service.href)).join("\n");
  const areas = AREA_PAGES.map((area) => mdLink(`Interior designer in ${area.name}`, area.href)).join("\n");
  const articles = BLOG_POSTS.map((post) => mdLink(post.title, postHref(post))).join("\n");

  return `# Yara Luxe Interiors

> Yara Luxe Interiors is a Melbourne interior design studio based in Bentleigh, Victoria, providing luxury and bespoke residential and commercial interior design across Melbourne.

${LEGAL_NAME} is led by interior designer ${FOUNDER_NAME}. ${FOUNDER_NAME} and the design team bring 19+ years of interior design and industry experience. This figure refers to designer and team experience, not the age of the company. Services include residential and commercial interiors, kitchens, bathrooms, new builds, full-home design, project supervision and free interior design consultations.

The studio works on luxury, bespoke, residential and commercial interiors for high-end homes, with a focus on functional and refined spaces.

## Main Pages

${mdLink("About", "/about")}
${mdLink("Our Process", "/process")}
${mdLink("Our Services", "/our-services")}
${mdLink("Portfolio", "/portfolio")}
${mdLink("FAQs", "/faqs")}
${mdLink("Contact", "/contact")}
${mdLink("Blog", "/blog")}

## Interior Design Services

${services}

## Melbourne Service Areas

These pages cover Melbourne suburbs we design for. They are service areas, not separate office locations. The studio is at 853 Nepean Hwy, Bentleigh VIC 3204, Australia.

${areas}

## Interior Design Resources

${articles}

## Contact

- Studio: 853 Nepean Hwy, Bentleigh VIC 3204, Australia
- Phone: ${PHONE}
- Email: ${EMAIL}
- Website: ${SITE_URL}
`;
}
