import { test, expect } from '@playwright/test'

test.describe('Home Page', () => {
  test.beforeEach(async ({ page }) => {
    await page.goto('/')
  })

  test('renders hero section with h1 and CTAs', async ({ page }) => {
    await expect(page.getByRole('heading', { level: 1 })).toContainText('e-commerce')
    await expect(page.getByRole('link', { name: 'Voir nos réalisations' })).toBeVisible()
    await expect(page.getByRole('link', { name: 'Discuter du projet' })).toBeVisible()
  })

  test('hero CTA "Voir nos réalisations" navigates correctly', async ({ page }) => {
    await page.getByRole('link', { name: 'Voir nos réalisations' }).click()
    await expect(page).toHaveURL('/realisations/')
  })

  test('hero CTA "Discuter du projet" navigates to contact', async ({ page }) => {
    await page.getByRole('link', { name: 'Discuter du projet' }).click()
    await expect(page).toHaveURL('/contact/')
  })

  test('page has a visible footer', async ({ page }) => {
    await page.evaluate(() => window.scrollTo(0, document.body.scrollHeight))
    await expect(page.locator('footer')).toBeVisible()
  })

  test('stats section is present on the page', async ({ page }) => {
    await page.evaluate(() => window.scrollTo(0, 500))
    await expect(page.locator('section').filter({ hasText: /\d+/ }).first()).toBeVisible()
  })
})
