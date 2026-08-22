import { getPrisma } from "./db.js";

export async function writeAudit({ action, actorId = null, targetType = "", targetId = "", meta = {} }) {
  const db = getPrisma();
  if (!db) return;
  const safe = { ...meta };
  delete safe.password;
  delete safe.passwordHash;
  delete safe.token;
  delete safe.secret;
  await db.auditLog.create({
    data: {
      action,
      actorId,
      targetType,
      targetId,
      meta: JSON.stringify(safe)
    }
  });
}
