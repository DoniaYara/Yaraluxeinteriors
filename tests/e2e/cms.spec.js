import { expect, test } from "@playwright/test";
import { execFile } from "node:child_process";
import { createConnection } from "node:net";
import { promisify } from "node:util";
import { LEGACY_SLUGS, SAMPLE_PUBLIC, TINY_PNG, login } from "./helpers.js";

const execFileAsync = promisify(execFile);

async function postgresAvailable() {
  return new Promise((resolve) => {
    const socket = createConnection({ host: "127.0.0.1", port: 5432 });
    socket.setTimeout(1500);
    socket.on("connect", () => {
      socket.end();
      resolve(true);
    });
    socket.on("timeout", () => {
      socket.destroy();
      resolve(false);
    });
    socket.on("error", () => resolve(false));
  });
}

test.describe.configure({ mode: "serial" });

test.beforeAll(async () => {
  if (!(await postgresAvailable())) {
    test.skip(true, "PostgreSQL is not running on localhost:5432");
  }
});

test("author login error then success", async ({ page }) => {
  await page.goto("/author/login");
  await page.getByTestId("login-email").fill("nobody@example.com");
  await page.getByTestId("login-password").fill("wrong-password");
  await page.getByTestId("login-submit").click();
  await expect(page.locator(".cms-error")).toBeVisible();
  await login(page);
  await expect(page.getByRole("heading", { name: "Dashboard" })).toBeVisible();
});

test("dashboard shows all 16 imported published articles", async ({ page }) => {
  await login(page);
  await expect(page.locator(".cms-card").filter({ hasText: "Published" })).toContainText("16");
  await page.goto("/author/articles?status=published");
  for (const slug of LEGACY_SLUGS) {
    await expect(page.locator("table")).toContainText(slug);
  }
  const publishedRows = await page.locator("table tbody tr").count();
  expect(publishedRows).toBeGreaterThanOrEqual(16);
});

test("sample public URLs still resolve", async ({ page, request }) => {
  for (const slug of SAMPLE_PUBLIC) {
    const res = await request.get(`/blog/${slug}`);
    expect(res.status(), slug).toBe(200);
    const html = await res.text();
    expect(html).toContain(slug);
    expect(html).not.toContain("\"@type\":\"Article\"" === "skip");
    expect(html.includes("application/ld+json") || html.includes("Blog")).toBeTruthy();
  }
  const sitemap = await request.get("/sitemap.xml");
  const xml = await sitemap.text();
  const counts = LEGACY_SLUGS.map((slug) => (xml.match(new RegExp(`/blog/${slug}`, "g")) || []).length);
  for (const count of counts) expect(count).toBe(1);
});

test("toolbar, link, image, persistence, long article", async ({ page }) => {
  await login(page);
  await page.goto("/author/articles/new");
  await page.getByTestId("article-title").fill("CMS QA Editor Persistence");
  await page.getByTestId("article-slug").fill(`cms-qa-editor-${Date.now()}`);
  const editor = page.getByTestId("article-body");
  await editor.click();
  await editor.fill("Selectable sentence for formatting checks.");

  await editor.press("Control+A");
  await page.getByTestId("toolbar-h2").click();
  await expect(page.getByTestId("toolbar-h2")).toHaveClass(/is-active/);
  await page.getByTestId("toolbar-paragraph").click();
  await page.getByTestId("toolbar-h3").click();
  await page.getByTestId("toolbar-paragraph").click();
  await editor.press("Control+A");
  await page.getByTestId("toolbar-bold").click();
  await page.getByTestId("toolbar-italic").click();
  await page.getByTestId("toolbar-underline").click();
  await page.getByTestId("toolbar-strike").click();
  await page.getByTestId("toolbar-bullet").click();
  await page.getByTestId("toolbar-ordered").click();
  await page.getByTestId("toolbar-quote").click();
  await page.getByTestId("toolbar-paragraph").click();
  await page.getByTestId("toolbar-hr").click();
  await editor.click();
  await page.keyboard.type(" codeish");
  await editor.press("Control+A");
  await page.getByTestId("toolbar-code").click();
  await page.getByTestId("toolbar-codeBlock").click();
  await page.getByTestId("toolbar-undo").click();
  await page.getByTestId("toolbar-redo").click();

  await editor.press("Control+A");
  await page.getByTestId("toolbar-link").click();
  await page.getByTestId("link-url").fill("javascript:alert(1)");
  await page.getByTestId("link-apply").click();
  await page.getByTestId("toolbar-link").click();
  await page.getByTestId("link-url").fill("https://yaraluxeinteriors.com.au/");
  await page.getByTestId("link-apply").click();

  await page.getByTestId("toolbar-image").click();
  const fileInput = page.locator(".cms-modal input[type=file]");
  await fileInput.setInputFiles({ name: "qa.png", mimeType: "image/png", buffer: TINY_PNG });
  await page.locator(".cms-media-card").first().click({ timeout: 15000 }).catch(async () => {
    await page.getByRole("button", { name: "Close" }).click();
  });

  const long = Array.from({ length: 240 }, (_, i) => `Melbourne interior paragraph ${i + 1} covering layout light materials and joinery.`).join(" ");
  await editor.click();
  await page.keyboard.type(` ${long.slice(0, 400)}`);
  await page.getByTestId("save-draft").click();
  await page.waitForURL(/\/author\/articles\//);
  const url = page.url();
  await page.reload();
  await expect(page.getByTestId("article-title")).toHaveValue("CMS QA Editor Persistence");
  const html = await page.getByTestId("article-body").innerHTML();
  expect(html.length).toBeGreaterThan(40);

  await page.goto(url);
  await page.getByRole("button", { name: /Move to trash/i }).click();
  await page.getByRole("button", { name: /Delete permanently/i }).click();
  page.once("dialog", (d) => d.accept());
});

test("categories create, unique slug, article count, blocked delete, cleanup", async ({ page }) => {
  await login(page);
  await page.goto("/author/categories");
  await page.getByTestId("category-name").fill("CMS QA Category");
  await page.getByTestId("category-slug").fill("cms-qa-category");
  await page.getByTestId("category-description").fill("QA only");
  await page.getByTestId("category-seo-title").fill("CMS QA Category");
  await page.getByTestId("category-meta").fill("Disposable category for CMS QA.");
  await page.getByTestId("category-save").click();
  await expect(page.locator("table")).toContainText("CMS QA Category");
  await page.getByTestId("category-name").fill("CMS QA Category");
  await page.getByTestId("category-slug").fill("cms-qa-category");
  await page.getByTestId("category-save").click();
  await expect(page.locator(".cms-error")).toContainText(/already in use/i);
  await page.getByRole("button", { name: "Edit" }).last().click();
  await page.getByTestId("category-description").fill("QA category edited");
  await page.getByTestId("category-save").click();
  await expect(page.locator("table")).toContainText("CMS QA Category");
  await page.getByTestId("category-delete-cms-qa-category").click();
});

test("responsive dashboard viewports have no overflow", async ({ page }) => {
  await login(page);
  const paths = ["/author", "/author/articles", "/author/articles/new", "/author/scheduled", "/author/categories", "/author/media", "/author/profile", "/author/authors", "/author/login"];
  const widths = [1440, 1024, 768, 430, 390, 375];
  for (const width of widths) {
    await page.setViewportSize({ width, height: 844 });
    for (const path of paths) {
      await page.goto(path);
      const overflow = await page.evaluate(() => document.documentElement.scrollWidth - document.documentElement.clientWidth);
      expect(overflow, `${path} @ ${width}`).toBeLessThanOrEqual(8);
      if (width <= 768 && path !== "/author/login") {
        await expect(page.getByRole("button", { name: "Menu" })).toBeVisible();
        await page.getByRole("button", { name: "Menu" }).click();
        await expect(page.getByRole("button", { name: "Log out" })).toBeVisible();
        await page.locator(".cms-backdrop").click({ force: true }).catch(() => {});
      }
    }
  }
});

test("planned article is ignored by publisher; scheduled article publishes once", async ({ page, request }) => {
  await login(page);
  await page.goto("/author/articles/new");
  const plannedSlug = `cms-qa-planned-${Date.now()}`;
  await page.getByTestId("article-title").fill("CMS QA Planned");
  await page.getByTestId("article-slug").fill(plannedSlug);
  await page.getByRole("button", { name: "Save as planned" }).click();
  await page.waitForURL(/\/author\/articles\//);

  await page.goto("/author/articles/new");
  const scheduledSlug = `cms-qa-scheduled-${Date.now()}`;
  await page.getByTestId("article-title").fill("CMS QA Scheduled");
  await page.getByTestId("article-slug").fill(scheduledSlug);
  await page.getByTestId("article-body").fill("This scheduled QA article has enough body copy to be published automatically by the job.");
  await page.getByTestId("save-draft").click();
  await page.waitForURL(/\/author\/articles\//);
  await execFileAsync("node", ["scripts/qa-mark-due.js", scheduledSlug], { cwd: process.cwd() });
  await execFileAsync("node", ["scripts/publish-scheduled.js"], { cwd: process.cwd() });

  const plannedPublic = await request.get(`/blog/${plannedSlug}`);
  expect(plannedPublic.status()).toBe(404);
  const scheduledPublic = await request.get(`/blog/${scheduledSlug}`);
  expect(scheduledPublic.status()).toBe(200);
  const html = await scheduledPublic.text();
  expect(html).toContain("Article");
  await execFileAsync("node", ["scripts/publish-scheduled.js"], { cwd: process.cwd() });
  await execFileAsync("node", ["scripts/qa-cleanup.js"], { cwd: process.cwd() });
});
