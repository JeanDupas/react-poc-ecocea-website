import { test, expect } from '@playwright/test'

test.describe('Blog Page', () => {
  test('lists published articles', async ({ page }) => {
    await page.goto('/blog/')
    await expect(page.getByRole('heading', { level: 1 })).toBeVisible()
    await expect(page.locator('article, [class*="card"]').first()).toBeVisible()
  })

  test('shows known article titles', async ({ page }) => {
    await page.goto('/blog/')
    await expect(
      page.getByText(/erreurs.*e-commerce|e-commerce.*erreurs|cloud.*2025|IA.*relation/i).first()
    ).toBeVisible()
  })

  test('clicking an article navigates to detail page', async ({ page }) => {
    await page.goto('/blog/')
    const firstLink = page.getByRole('link').filter({ hasText: /lire|découvrir|voir/i }).first()
    const articleLinks = page.locator('a[href*="/blog/"]').first()
    await articleLinks.click()
    await expect(page).toHaveURL(/\/blog\/.+/)
    await expect(page.getByRole('heading', { level: 1 })).toBeVisible()
  })

  test('blog detail page for known article loads correctly', async ({ page }) => {
    await page.goto('/blog/migrer-vers-le-cloud-en-2025/')
    await expect(page.getByRole('heading', { level: 1 })).toBeVisible()
    await expect(page.locator('article, main')).toBeVisible()
  })
})
