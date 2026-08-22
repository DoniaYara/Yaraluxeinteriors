import sanitizeHtml from "sanitize-html";
import { isSafeHttpUrl } from "./constants.js";

const ALLOWED_TAGS = [
  "p", "br", "h2", "h3", "strong", "b", "em", "i", "u", "s", "strike",
  "ul", "ol", "li", "blockquote", "hr", "a", "img", "code", "pre",
  "span", "div"
];

export function sanitizeArticleHtml(html) {
  return sanitizeHtml(String(html || ""), {
    allowedTags: ALLOWED_TAGS,
    allowedAttributes: {
      a: ["href", "target", "rel"],
      img: ["src", "alt", "title", "width", "height"],
      code: ["class"],
      pre: ["class"],
      span: ["class"],
      div: ["class"]
    },
    allowedSchemes: ["http", "https"],
    allowedSchemesByTag: {
      img: ["http", "https", "data"]
    },
    transformTags: {
      a: (tagName, attribs) => {
        const href = attribs.href || "";
        if (!isSafeHttpUrl(href) || href.toLowerCase().startsWith("javascript:")) {
          return { tagName: "span", attribs: {} };
        }
        return {
          tagName: "a",
          attribs: {
            href,
            rel: "noopener noreferrer",
            target: attribs.target === "_blank" ? "_blank" : undefined
          }
        };
      }
    }
  });
}

export function sanitizePlain(value, max = 500) {
  return String(value || "").replace(/\s+/g, " ").trim().slice(0, max);
}
