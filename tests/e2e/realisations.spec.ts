import { test, expect } from '@playwright/test'

test.describe('Réalisations Page', () => {
  test.beforeEach(async ({ page }) => {
    await page.goto('/realisations/')
  })

  test('shows all 6 projects by default', async ({ page }) => {
    await expect(page.getByText('6 projets affichés')).toBeVisible()
    await expect(page.getByText('Sephora')).toBeVisible()
    await expect(page.getByText('Kering')).toBeVisible()
    await expect(page.getByText('Accor')).toBeVisible()
  })

  test('"Tout" filter is active by default', async ({ page }) => {
    const toutButton = page.getByRole('button', { name: 'Tout' })
    await expect(toutButton).toBeVisible()
    await expect(toutButton).toHaveClass(/text-white/)
  })

  test('filter by E-commerce shows 4 projects', async ({ page }) => {
    await page.getByRole('button', { name: 'E-commerce' }).click()
    await expect(page.getByText('4 projets affichés')).toBeVisible()
    await expect(page.getByText('Sephora')).toBeVisible()
    await expect(page.getByText('Kering')).toBeVisible()
    await expect(page.getByText('Renault')).toBeVisible()
    await expect(page.getByText('Monoprix')).toBeVisible()
  })

  test('filter by Mobile shows 3 projects', async ({ page }) => {
    await page.getByRole('button', { name: 'Mobile' }).click()
    await expect(page.getByText('3 projets affichés')).toBeVisible()
    await expect(page.getByText('Renault')).toBeVisible()
    await expect(page.getByText('Lapeyre')).toBeVisible()
    await expect(page.getByText('Monoprix')).toBeVisible()
  })

  test('filter by Cloud shows 2 projects', async ({ page }) => {
    await page.getByRole('button', { name: 'Cloud' }).click()
    await expect(page.getByText('2 projets affichés')).toBeVisible()
    await expect(page.getByText('Kering')).toBeVisible()
    await expect(page.getByText('Accor')).toBeVisible()
  })

  test('filter by Relation Client shows 2 projects', async ({ page }) => {
    await page.getByRole('button', { name: 'Relation Client' }).click()
    await expect(page.getByText('2 projets affichés')).toBeVisible()
    await expect(page.getByText('Sephora')).toBeVisible()
    await expect(page.getByText('Lapeyre')).toBeVisible()
  })

  test('switching from filter back to "Tout" shows all projects', async ({ page }) => {
    await page.getByRole('button', { name: 'Mobile' }).click()
    await expect(page.getByText('3 projets affichés')).toBeVisible()

    await page.getByRole('button', { name: 'Tout' }).click()
    await expect(page.getByText('6 projets affichés')).toBeVisible()
  })
})
