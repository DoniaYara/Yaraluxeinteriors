import assert from "node:assert/strict";
import test from "node:test";
import { assertPublishable, canTransition, isDueForAutoPublish, isPublicStatus } from "../../lib/cms/status.js";
import { sanitizeArticleHtml } from "../../lib/cms/sanitize.js";
import { slugify, isSafeHttpUrl } from "../../lib/cms/constants.js";

test("planned cannot be treated as public", () => {
  assert.equal(isPublicStatus("planned"), false);
  assert.equal(isPublicStatus("published"), true);
});

test("scheduled due check ignores planned", () => {
  const now = new Date("2026-08-21T10:00:00Z");
  assert.equal(isDueForAutoPublish({ status: "planned", publishAt: now }, now), false);
  assert.equal(isDueForAutoPublish({ status: "draft", publishAt: now }, now), false);
  assert.equal(isDueForAutoPublish({ status: "trash", publishAt: now }, now), false);
  assert.equal(isDueForAutoPublish({ status: "scheduled", publishAt: new Date("2026-08-21T09:00:00Z") }, now), true);
  assert.equal(isDueForAutoPublish({ status: "scheduled", publishAt: new Date("2026-08-21T11:00:00Z") }, now), false);
});

test("empty planned content cannot publish", () => {
  assert.match(assertPublishable({ title: "Hello", slug: "hello", content: "" }), /content/i);
  assert.equal(assertPublishable({ title: "Hello", slug: "hello", content: "<p>Enough body copy for a real article to go live now.</p>" }), null);
});

test("status transitions", () => {
  assert.equal(canTransition("planned", "draft"), true);
  assert.equal(canTransition("published", "scheduled"), false);
  assert.equal(canTransition("trash", "draft"), true);
});

test("slugify", () => {
  assert.equal(slugify("Kitchen Design Melbourne"), "kitchen-design-melbourne");
});

test("unsafe urls rejected", () => {
  assert.equal(isSafeHttpUrl("javascript:alert(1)"), false);
  assert.equal(isSafeHttpUrl("https://yaraluxeinteriors.com.au/blog"), true);
  assert.equal(isSafeHttpUrl("/blog/hello"), true);
});

test("html sanitization strips script and javascript links", () => {
  const clean = sanitizeArticleHtml('<p>Hi</p><script>alert(1)</script><a href="javascript:alert(1)">x</a><a href="https://example.com">ok</a>');
  assert.equal(clean.includes("<script>"), false);
  assert.equal(clean.toLowerCase().includes("javascript:"), false);
  assert.equal(clean.includes("https://example.com"), true);
});

test("production media upload fails without Blob token", async () => {
  const prevEnv = process.env.NODE_ENV;
  const prevToken = process.env.BLOB_READ_WRITE_TOKEN;
  process.env.NODE_ENV = "production";
  delete process.env.BLOB_READ_WRITE_TOKEN;
  const { storeImageFile } = await import("../../lib/cms/media.js");
  const file = {
    name: "qa.png",
    type: "image/png",
    size: 12,
    arrayBuffer: async () => new Uint8Array([1, 2, 3, 4]).buffer
  };
  const result = await storeImageFile(file, { id: "author-1" });
  assert.match(result.error, /BLOB_READ_WRITE_TOKEN/);
  process.env.NODE_ENV = prevEnv;
  if (prevToken) process.env.BLOB_READ_WRITE_TOKEN = prevToken;
  else delete process.env.BLOB_READ_WRITE_TOKEN;
});
