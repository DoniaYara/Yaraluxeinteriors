export const TRANSITIONS = {
  planned: ["draft", "scheduled", "published", "trash"],
  draft: ["planned", "scheduled", "published", "trash"],
  scheduled: ["draft", "published", "trash", "scheduled"],
  published: ["draft", "trash"],
  trash: ["draft"]
};

export function canTransition(from, to) {
  if (from === to) return true;
  return (TRANSITIONS[from] || []).includes(to);
}

export function isPublicStatus(status) {
  return status === "published";
}

export function isPreviewable(article) {
  if (!article || article.status === "trash") return false;
  return Boolean(String(article.content || "").replace(/<[^>]+>/g, "").trim());
}

export function assertPublishable(article) {
  const title = String(article.title || "").trim();
  const slug = String(article.slug || "").trim();
  const body = String(article.content || "").replace(/<[^>]+>/g, " ").replace(/\s+/g, " ").trim();
  if (!title) return "Add a title before publishing.";
  if (!slug) return "Add a unique slug before publishing.";
  if (body.length < 40) return "Add article content before publishing.";
  return null;
}

/** Only scheduled rows with a due publishAt may auto-publish. Planned is ignored. */
export function isDueForAutoPublish(article, now = new Date()) {
  if (!article) return false;
  if (article.status !== "scheduled") return false;
  if (!article.publishAt) return false;
  return new Date(article.publishAt).getTime() <= now.getTime();
}
