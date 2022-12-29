import { expect, test } from "playwright-test-coverage";

test("site loads", async ({ page }) => {
  await page.goto("http://localhost:3000/");
  const pageTitle = await page.innerText("body");
  expect(pageTitle).toBe("Test Text");
});
