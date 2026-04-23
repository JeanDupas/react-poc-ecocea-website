import { test, expect } from '@playwright/test'

test.describe('Navigation', () => {
  test('logo links to home from any page', async ({ page }) => {
    await page.goto('/services/')
    await page.getByRole('link', { name: /ecocea/i }).first().click()
    await expect(page).toHaveURL('/')
  })

  test('desktop nav links navigate correctly', async ({ page, isMobile }) => {
    test.skip(isMobile, 'desktop-only test')
    await page.goto('/')

    await page.getByRole('link', { name: 'Services' }).first().click()
    await expect(page).toHaveURL('/services/')

    await page.getByRole('link', { name: 'Réalisations' }).first().click()
    await expect(page).toHaveURL('/realisations/')

    await page.getByRole('link', { name: 'Blog' }).first().click()
    await expect(page).toHaveURL('/blog/')

    await page.getByRole('link', { name: 'Contact' }).first().click()
    await expect(page).toHaveURL('/contact/')
  })

  test('header CTA button links to contact', async ({ page, isMobile }) => {
    test.skip(isMobile, 'desktop-only test')
    await page.goto('/')
    await page.getByRole('link', { name: 'Discutons de votre projet' }).first().click()
    await expect(page).toHaveURL('/contact/')
  })

  test('mobile menu opens and closes', async ({ page, isMobile }) => {
    test.skip(!isMobile, 'mobile-only test')
    await page.goto('/')

    const toggle = page.getByRole('button', { name: 'Toggle navigation menu' })
    await expect(toggle).toBeVisible()

    await toggle.click()
    await expect(page.getByRole('link', { name: 'Services' }).last()).toBeVisible()

    await toggle.click()
    await expect(page.getByRole('link', { name: 'Services' }).last()).not.toBeVisible()
  })

  test('mobile menu closes after navigation', async ({ page, isMobile }) => {
    test.skip(!isMobile, 'mobile-only test')
    await page.goto('/')

    await page.getByRole('button', { name: 'Toggle navigation menu' }).click()
    await page.getByRole('link', { name: 'Blog' }).last().click()

    await expect(page).toHaveURL('/blog/')
    await expect(page.getByRole('link', { name: 'Services' }).last()).not.toBeVisible()
  })
})
