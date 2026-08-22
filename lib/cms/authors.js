import { getPrisma } from "./db.js";
import { hashPassword } from "./password.js";
import { revokeAuthorSessions } from "./auth.js";
import { sanitizePlain } from "./sanitize.js";
import { writeAudit } from "./audit.js";

function publicAuthor(row) {
  if (!row) return null;
  const { passwordHash, ...rest } = row;
  return rest;
}

export async function listAuthors() {
  const db = getPrisma();
  const rows = await db.author.findMany({ orderBy: { createdAt: "desc" } });
  return rows.map(publicAuthor);
}

export async function createAuthor(input, actor) {
  const db = getPrisma();
  const email = String(input.email || "").trim().toLowerCase();
  const name = sanitizePlain(input.name, 80);
  if (!name || !email) return { error: "Name and email are required." };
  if (!input.password || String(input.password).length < 10) return { error: "Password must be at least 10 characters." };
  const exists = await db.author.findUnique({ where: { email } });
  if (exists) return { error: "That email is already in use." };
  const role = input.role === "admin" ? "admin" : "author";
  const author = await db.author.create({
    data: {
      name,
      email,
      passwordHash: await hashPassword(input.password),
      bio: sanitizePlain(input.bio, 400),
      imageUrl: sanitizePlain(input.imageUrl, 400),
      role,
      status: "active"
    }
  });
  await writeAudit({ action: "author_created", actorId: actor.id, targetType: "author", targetId: author.id });
  return { author: publicAuthor(author) };
}

export async function updateAuthor(id, input, actor) {
  const db = getPrisma();
  const current = await db.author.findUnique({ where: { id } });
  if (!current) return { error: "Author not found." };
  const data = {
    name: sanitizePlain(input.name, 80) || current.name,
    bio: sanitizePlain(input.bio, 400),
    imageUrl: sanitizePlain(input.imageUrl, 400)
  };
  if (actor.role === "admin") {
    if (input.role === "admin" || input.role === "author") data.role = input.role;
    if (input.status === "active" || input.status === "disabled") data.status = input.status;
    if (input.email) {
      const email = String(input.email).trim().toLowerCase();
      const clash = await db.author.findUnique({ where: { email } });
      if (clash && clash.id !== id) return { error: "That email is already in use." };
      data.email = email;
    }
    if (input.password) {
      if (String(input.password).length < 10) return { error: "Password must be at least 10 characters." };
      data.passwordHash = await hashPassword(input.password);
    }
  }
  const author = await db.author.update({ where: { id }, data });
  if (data.status === "disabled" || data.passwordHash) await revokeAuthorSessions(id);
  const action = data.status === "disabled" ? "author_disabled" : data.status === "active" && current.status === "disabled" ? "author_enabled" : "author_updated";
  await writeAudit({ action, actorId: actor.id, targetType: "author", targetId: id });
  return { author: publicAuthor(author) };
}

export async function deleteAuthor(id, actor) {
  const db = getPrisma();
  if (id === actor.id) return { error: "You cannot delete your own account." };
  const count = await db.article.count({ where: { authorId: id, status: { not: "trash" } } });
  if (count) return { error: "Reassign or trash this author's articles before deleting the account." };
  await db.author.delete({ where: { id } });
  await writeAudit({ action: "author_deleted", actorId: actor.id, targetType: "author", targetId: id });
  return { deleted: true };
}

export async function updateOwnProfile(actor, input) {
  const db = getPrisma();
  const data = {
    name: sanitizePlain(input.name, 80) || actor.name,
    bio: sanitizePlain(input.bio, 400),
    imageUrl: sanitizePlain(input.imageUrl, 400)
  };
  if (input.password) {
    if (String(input.password).length < 10) return { error: "Password must be at least 10 characters." };
    data.passwordHash = await hashPassword(input.password);
  }
  const author = await db.author.update({ where: { id: actor.id }, data });
  if (data.passwordHash) await revokeAuthorSessions(actor.id);
  await writeAudit({ action: "profile_updated", actorId: actor.id, targetType: "author", targetId: actor.id });
  return { author: publicAuthor(author), passwordChanged: Boolean(data.passwordHash) };
}
