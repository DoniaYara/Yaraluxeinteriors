import { defineConfig } from "@playwright/test";

export default defineConfig({
  testDir: "./tests/e2e",
  timeout: 120000,
  expect: { timeout: 15000 },
  fullyParallel: false,
  workers: 1,
  reporter: "list",
  use: {
    baseURL: process.env.PLAYWRIGHT_BASE_URL || "http://127.0.0.1:3000",
    channel: "chrome",
    viewport: { width: 1440, height: 900 }
  },
  webServer: {
    command: "npx next dev -p 3000",
    url: "http://127.0.0.1:3000/author/login",
    reuseExistingServer: true,
    timeout: 120000
  }
});
