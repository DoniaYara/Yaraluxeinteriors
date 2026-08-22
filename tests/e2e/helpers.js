export const LEGACY_SLUGS = [
  "the-foundation-of-a-good-design-layout-comes-first",
  "the-hidden-cost-of-poor-material-selection-in-interior-design",
  "how-interior-design-influences-property-value",
  "how-to-choose-the-right-interior-theme-for-your-home",
  "why-layout-matters-more-than-furniture-in-interior-design",
  "designing-rooms-that-feel-bigger-without-renovating",
  "bringing-harmony-to-your-home-the-power-of-curated-texture",
  "the-overlooked-secrets-that-turn-good-design-into-exceptional-spaces",
  "why-interior-design-should-be-the-first-step-not-the-last-in-your-building-project",
  "common-interior-design-mistakes-and-how-to-avoid-them",
  "interior-design-trends-that-actually-last",
  "how-to-layer-light-like-a-designer",
  "3d-rendering-in-interior-design-why-it-matters-more-than-ever",
  "the-power-of-neutrals-how-to-use-soft-colours-for-a-sophisticated-space",
  "how-to-create-a-cohesive-interior-design-concept-for-your-home",
  "top-10-tips-for-designing-a-timeless-kitchen"
];

export const SAMPLE_PUBLIC = LEGACY_SLUGS.slice(0, 5);

export async function login(page) {
  const email = process.env.AUTHOR_BOOTSTRAP_EMAIL || "donia@yaraluxeinteriors.com.au";
  const password = process.env.AUTHOR_BOOTSTRAP_PASSWORD || "YaraLocalDev1!";
  await page.goto("/author/login");
  await page.getByTestId("login-email").fill(email);
  await page.getByTestId("login-password").fill(password);
  await page.getByTestId("login-submit").click();
  await page.waitForURL("**/author");
}

export const TINY_PNG = Buffer.from(
  "iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAYAAAAfFcSJAAAADUlEQVR42mP8z8BQDwAEhQGAhKmMIQAAAABJRU5ErkJggg==",
  "base64"
);
