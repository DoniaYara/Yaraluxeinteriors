import { breadcrumbList } from "./breadcrumbs";
import {
  BUSINESS_ID,
  PERSON_ID,
  absoluteUrl,
  assetUrl,
  graph,
  idRef
} from "./constants";
import { webPageEntity } from "./webpage";

const MONTHS = {
  January: "01",
  February: "02",
  March: "03",
  April: "04",
  May: "05",
  June: "06",
  July: "07",
  August: "08",
  September: "09",
  October: "10",
  November: "11",
  December: "12"
};

export function parseDisplayDate(value) {
  if (!value) return undefined;
  const match = String(value).match(/^([A-Za-z]+) (\d{1,2}), (\d{4})$/);
  if (!match) return undefined;
  const month = MONTHS[match[1]];
  if (!month) return undefined;
  const day = String(match[2]).padStart(2, "0");
  return `${match[3]}-${month}-${day}`;
}

export function articleEntity(post) {
  const path = `/blog/${post.slug}`;
  const url = absoluteUrl(path);
  const datePublished = parseDisplayDate(post.date);

  const entity = {
    "@type": "Article",
    "@id": `${url}#article`,
    headline: post.title,
    description: post.seoDescription || post.excerpt,
    url,
    mainEntityOfPage: url,
    author: idRef(PERSON_ID),
    publisher: idRef(BUSINESS_ID)
  };

  if (post.img) {
    if (post.img.startsWith("http")) entity.image = post.img;
    else if (post.img.startsWith("/")) entity.image = assetUrl(post.img);
    else entity.image = assetUrl(`/uploads/${post.img}`);
  }
  if (datePublished) entity.datePublished = datePublished;
  if (post.modified) entity.dateModified = post.modified;

  return entity;
}

export function articlePageGraph(post) {
  const path = `/blog/${post.slug}`;
  const url = absoluteUrl(path);
  const article = articleEntity(post);

  return graph([
    article,
    breadcrumbList(
      [
        { name: "Home", path: "/" },
        { name: "Blog", path: "/blog" },
        { name: post.title, path }
      ],
      url
    )
  ]);
}

export function blogIndexGraph(posts) {
  const url = absoluteUrl("/blog");
  const itemList = {
    "@type": "ItemList",
    "@id": `${url}#itemlist`,
    numberOfItems: posts.length,
    itemListElement: posts.map((post, index) => ({
      "@type": "ListItem",
      position: index + 1,
      url: absoluteUrl(`/blog/${post.slug}`),
      name: post.title
    }))
  };

  return graph([
    webPageEntity({
      path: "/blog",
      type: "CollectionPage",
      name: "Blog – Yara Luxe Interiors",
      description: "Interior design articles and insights from Yara Luxe Interiors.",
      mainEntity: idRef(itemList["@id"])
    }),
    itemList,
    breadcrumbList(
      [
        { name: "Home", path: "/" },
        { name: "Blog", path: "/blog" }
      ],
      url
    )
  ]);
}
