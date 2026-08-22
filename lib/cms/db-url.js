export function isPostgresUrl(url = process.env.DATABASE_URL) {
  if (!url) return false;
  return /^postgres(ql)?:\/\//i.test(url);
}

export function sqliteUrlBlocked(url = process.env.DATABASE_URL) {
  if (!url) return true;
  return url.startsWith("file:") || /mode=memory/i.test(url) || !isPostgresUrl(url);
}
