import { expect, test } from "@playwright/test";
import { SAMPLE_PUBLIC, LEGACY_SLUGS } from "./helpers.js";

test("existing public article URLs resolve", async ({ request }) => {
  for (const slug of SAMPLE_PUBLIC) {
    const res = await request.get(`/blog/${slug}`);
    expect(res.status(), slug).toBe(200);
    const html = await res.text();
    expect(html).toContain("/blog/" + slug);
  }
});

test("login page renders at mobile and desktop widths", async ({ page }) => {
  for (const width of [1440, 1024, 768, 430, 390, 375]) {
    await page.setViewportSize({ width, height: 844 });
    await page.goto("/author/login");
    await expect(page.getByRole("heading", { name: "Author Dashboard" })).toBeVisible();
    const overflow = await page.evaluate(() => document.documentElement.scrollWidth - document.documentElement.clientWidth);
    expect(overflow, `login @ ${width}`).toBeLessThanOrEqual(8);
  }
});

test("sitemap includes legacy slugs once each", async ({ request }) => {
  const xml = await (await request.get("/sitemap.xml")).text();
  for (const slug of LEGACY_SLUGS) {
    const matches = xml.match(new RegExp(`/blog/${slug}`, "g")) || [];
    expect(matches.length, slug).toBe(1);
  }
  expect(xml).not.toContain("/blog/preview/");
  expect(xml).not.toContain("/author");
});
