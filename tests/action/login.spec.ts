import { test, expect } from "@playwright/test";

// Test login with demo account

test("should successful login with demo account", async ({ page }) => {
  await page.goto("http://localhost:3000/");
  await expect(page).toHaveURL("http://localhost:3000/");

  // Go to Login Page
  await page.getByRole("link", { name: "Try Demo for free" }).click();
  await expect(page).toHaveURL("http://localhost:3000/login");
  await page.getByRole("button", { name: "Log in" }).click();

  // Redirect to dashboard
  await expect(page).toHaveURL("http://localhost:3000/dashboard");

  // Check for session cookie existence (Playwright doesn't directly access cookies)
  const allCookies = await page.context().storageState();
  expect(
    allCookies.cookies.some((cookie) => cookie.name === "session")
  ).toBeTruthy();
});
