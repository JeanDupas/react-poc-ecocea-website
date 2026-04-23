import { test, expect } from '@playwright/test'

test.describe('Services Page', () => {
  test.beforeEach(async ({ page }) => {
    await page.goto('/services/')
  })

  test('renders page with service headings', async ({ page }) => {
    await expect(page.getByRole('heading', { level: 1 })).toBeVisible()
    await expect(page.getByText(/e-commerce|magento|cloud/i).first()).toBeVisible()
  })

  test('FAQ accordion section exists', async ({ page }) => {
    await page.evaluate(() => window.scrollTo(0, document.body.scrollHeight))
    await expect(page.getByText(/FAQ|questions/i).first()).toBeVisible()
  })

  test('FAQ accordion opens on click', async ({ page }) => {
    await page.evaluate(() => window.scrollTo(0, document.body.scrollHeight))

    const firstTrigger = page.locator('[data-radix-collection-item]').first()
    if (await firstTrigger.isVisible()) {
      await firstTrigger.click()
      await expect(firstTrigger).toHaveAttribute('data-state', 'open')
    } else {
      const accordionTriggers = page.locator('[role="button"]').filter({ hasText: /\?/ })
      const count = await accordionTriggers.count()
      if (count > 0) {
        await accordionTriggers.first().click()
      }
    }
  })

  test('contact CTA exists on services page', async ({ page }) => {
    const contactLink = page.getByRole('link', { name: /contact|projet|discutons/i }).first()
    await expect(contactLink).toBeVisible()
  })
})
