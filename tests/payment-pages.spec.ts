import { test, expect } from '@playwright/test';

test.describe('Payment Result Pages', () => {
  test('Payment Success page displays correct content and links', async ({ page }) => {
    await page.goto('/payment-success');

    await expect(page).toHaveTitle(/Thank You for Your Donation!/);

    const main = page.locator('main');

    const heading = main.locator('h1');
    await expect(heading).toHaveText('Thank You for Your Support!');

    await expect(main.locator('text=Your payment has been successfully processed')).toBeVisible();

    const contactLink = main.locator('a[href="/contacts"]');
    await expect(contactLink).toBeVisible();

    const homeLink = main.locator('a[href="/"]', { hasText: 'Return to Home' });
    await expect(homeLink).toBeVisible();

    const donateLink = main.locator('a[href="/donate"]', { hasText: 'Make Another Donation' });
    await expect(donateLink).toBeVisible();

    const breadcrumbs = main.locator('nav');
    await expect(breadcrumbs.locator('a[href="/donate"]')).toBeVisible();
    await expect(breadcrumbs.locator('text=Thank You')).toBeVisible();
  });

  test('Payment Failure page displays correct content and links', async ({ page }) => {
    await page.goto('/payment-failure');

    await expect(page).toHaveTitle(/Something Went Wrong/);

    const main = page.locator('main');

    const heading = main.locator('h1');
    await expect(heading).toHaveText('Something Went Wrong');

    await expect(main.locator('text=there was an issue processing your payment')).toBeVisible();
    await expect(main.locator('text=Your funds have not been charged')).toBeVisible();

    const contactLink = main.locator('a[href="/contacts"]');
    await expect(contactLink).toBeVisible();

    const tryAgainLink = main.locator('a[href="/donate"]', { hasText: 'Try Again' });
    await expect(tryAgainLink).toBeVisible();

    const homeLink = main.locator('a[href="/"]', { hasText: 'Return to Home' });
    await expect(homeLink).toBeVisible();

    const breadcrumbs = main.locator('nav');
    await expect(breadcrumbs.locator('a[href="/donate"]')).toBeVisible();
    await expect(breadcrumbs.locator('text=Payment Issue')).toBeVisible();
  });
});
