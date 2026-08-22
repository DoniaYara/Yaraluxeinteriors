import { BUSINESS_ID, HOMEPAGE_ID, WEBSITE_ID, absoluteUrl, idRef } from "./constants";

export function webPageEntity({
  path,
  name,
  description,
  type = "WebPage",
  id,
  about = idRef(BUSINESS_ID),
  mainEntity
} = {}) {
  const url = absoluteUrl(path);
  const entity = {
    "@type": type,
    "@id": id || `${url}#webpage`,
    url,
    name,
    isPartOf: idRef(WEBSITE_ID)
  };

  if (description) entity.description = description;
  if (about) entity.about = about;
  if (mainEntity) entity.mainEntity = mainEntity;

  return entity;
}

export function homepageWebPage({ name, description }) {
  return webPageEntity({
    path: "/",
    id: HOMEPAGE_ID,
    name,
    description
  });
}
