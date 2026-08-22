import { readFileSync, existsSync } from "fs";
import { resolve } from "path";
import assert from "node:assert/strict";

const file = resolve(process.cwd(), ".env");
if (existsSync(file)) {
  for (const line of readFileSync(file, "utf8").split(/\r?\n/)) {
    const match = line.match(/^([^#=]+)=(.*)$/);
    if (!match) continue;
    const key = match[1].trim();
    const value = match[2].trim().replace(/^["']|["']$/g, "");
    if (!process.env[key]) process.env[key] = value;
  }
}

const { getPrisma } = await import("../lib/cms/db.js");
const { publishDueArticles } = await import("../lib/cms/articles.js");

const db = getPrisma();
const author = await db.author.findFirst({ where: { role: "admin" } });
const planned = await db.article.create({
  data: {
    title: "QA Planned Must Not Publish",
    slug: `qa-planned-${Date.now()}`,
    content: "",
    authorId: author.id,
    status: "planned",
    intendedPublishOn: "2020-01-01",
    createdBy: author.id,
    updatedBy: author.id
  }
});
const scheduled = await db.article.create({
  data: {
    title: "QA Scheduled Should Publish",
    slug: `qa-scheduled-${Date.now()}`,
    content: "<p>This scheduled article has enough body copy to be considered publishable content for QA.</p>",
    authorId: author.id,
    status: "scheduled",
    publishAt: new Date("2020-01-01T00:00:00.000Z"),
    createdBy: author.id,
    updatedBy: author.id
  }
});

const first = await publishDueArticles();
const plannedAfter = await db.article.findUnique({ where: { id: planned.id } });
const scheduledAfter = await db.article.findUnique({ where: { id: scheduled.id } });
assert.equal(plannedAfter.status, "planned");
assert.equal(scheduledAfter.status, "published");
assert.ok(scheduledAfter.publishedAt);

const second = await publishDueArticles();
const scheduledAgain = await db.article.findUnique({ where: { id: scheduled.id } });
assert.equal(scheduledAgain.status, "published");
assert.equal(String(scheduledAgain.publishedAt), String(scheduledAfter.publishedAt));

await db.article.delete({ where: { id: planned.id } });
await db.article.delete({ where: { id: scheduled.id } });

console.log(JSON.stringify({ first, second, plannedStayed: plannedAfter.status, scheduledBecame: scheduledAfter.status }));
