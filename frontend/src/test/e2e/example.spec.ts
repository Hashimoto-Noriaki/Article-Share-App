import { test, expect } from '@playwright/test';

test('ホームページのタイトルがReactを含む', async ({ page }) => {
  await page.goto('/');
  await expect(page).toHaveTitle(/React/);
});
