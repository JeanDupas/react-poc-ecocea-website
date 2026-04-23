import { test, expect } from '@playwright/test'

test.describe('Contact Form Wizard', () => {
  test.beforeEach(async ({ page }) => {
    await page.goto('/contact/')
  })

  test('shows step 1 on load with project type selection', async ({ page }) => {
    await expect(page.getByText('Étape 1 sur 3')).toBeVisible()
    await expect(page.getByText('Quel type de projet avez-vous ?')).toBeVisible()
    await expect(page.getByText('E-commerce')).toBeVisible()
    await expect(page.getByText('App Mobile')).toBeVisible()
    await expect(page.getByText('Cloud & Ops')).toBeVisible()
  })

  test('step 1 shows error when advancing without selection', async ({ page }) => {
    await page.getByRole('button', { name: 'Suivant' }).click()
    await expect(page.getByText('Veuillez sélectionner un type de projet')).toBeVisible()
    await expect(page.getByText('Étape 1 sur 3')).toBeVisible()
  })

  test('step 1 advances when project type selected', async ({ page }) => {
    await page.getByText('E-commerce').click()
    await page.getByRole('button', { name: 'Suivant' }).click()
    await expect(page.getByText('Étape 2 sur 3')).toBeVisible()
    await expect(page.getByText('Détails du projet')).toBeVisible()
  })

  test('step 2 shows budget and deadline options', async ({ page }) => {
    await page.getByText('E-commerce').click()
    await page.getByRole('button', { name: 'Suivant' }).click()

    await expect(page.getByText('Budget estimé')).toBeVisible()
    await expect(page.getByText('< 20k€')).toBeVisible()
    await expect(page.getByText('20-50k€')).toBeVisible()
    await expect(page.getByText('Délai souhaité')).toBeVisible()
    await expect(page.getByText('ASAP')).toBeVisible()
  })

  test('step 2 shows errors when advancing without required fields', async ({ page }) => {
    await page.getByText('E-commerce').click()
    await page.getByRole('button', { name: 'Suivant' }).click()
    await page.getByRole('button', { name: 'Suivant' }).click()

    await expect(page.getByText('Veuillez sélectionner un budget')).toBeVisible()
    await expect(page.getByText('Étape 2 sur 3')).toBeVisible()
  })

  test('step 2 advances when all fields filled', async ({ page }) => {
    await page.getByText('E-commerce').click()
    await page.getByRole('button', { name: 'Suivant' }).click()

    await page.getByText('20-50k€').click()
    await page.getByText('1-3 mois').click()
    await page.getByPlaceholder(/objectifs/i).fill('Refonte complète de notre plateforme e-commerce B2B avec intégration PIM.')

    await page.getByRole('button', { name: 'Suivant' }).click()
    await expect(page.getByText('Étape 3 sur 3')).toBeVisible()
    await expect(page.getByText('Vos coordonnées')).toBeVisible()
  })

  test('can navigate back from step 2 to step 1', async ({ page }) => {
    await page.getByText('E-commerce').click()
    await page.getByRole('button', { name: 'Suivant' }).click()
    await expect(page.getByText('Étape 2 sur 3')).toBeVisible()

    await page.getByRole('button', { name: 'Précédent' }).click()
    await expect(page.getByText('Étape 1 sur 3')).toBeVisible()
  })

  test('step 3 shows contact fields', async ({ page }) => {
    await goToStep3(page)

    await expect(page.getByPlaceholder('Ex: Jean')).toBeVisible()
    await expect(page.getByPlaceholder('Ex: Dupont')).toBeVisible()
    await expect(page.getByPlaceholder('j.dupont@entreprise.com')).toBeVisible()
    await expect(page.getByPlaceholder('Raison sociale')).toBeVisible()
    await expect(page.getByRole('button', { name: 'Envoyer ma demande' })).toBeVisible()
  })

  test('step 3 validates required contact fields', async ({ page }) => {
    await goToStep3(page)

    await page.getByRole('button', { name: 'Envoyer ma demande' }).click()
    await expect(page.getByText('Prénom requis')).toBeVisible()
    await expect(page.getByText('Nom requis')).toBeVisible()
    await expect(page.getByText('Email invalide')).toBeVisible()
  })

  test('submits form and shows success message', async ({ page }) => {
    await page.route('https://formspree.io/**', route =>
      route.fulfill({ status: 200, body: JSON.stringify({ ok: true }) })
    )

    await goToStep3(page)

    await page.getByPlaceholder('Ex: Jean').fill('Marie')
    await page.getByPlaceholder('Ex: Dupont').fill('Curie')
    await page.getByPlaceholder('j.dupont@entreprise.com').fill('marie.curie@example.com')
    await page.getByPlaceholder('Raison sociale').fill('Science Corp')

    await page.getByRole('button', { name: 'Envoyer ma demande' }).click()

    await expect(page.getByText('Message envoyé !')).toBeVisible({ timeout: 10_000 })
    await expect(page.getByText(/Merci de nous avoir contacté/)).toBeVisible()
  })
})

async function goToStep3(page: import('@playwright/test').Page) {
  await page.getByText('App Mobile').click()
  await page.getByRole('button', { name: 'Suivant' }).click()

  await page.getByText('50-100k€').click()
  await page.getByText('3-6 mois').click()
  await page.getByPlaceholder(/objectifs/i).fill('Application mobile iOS et Android pour notre réseau de distribution.')

  await page.getByRole('button', { name: 'Suivant' }).click()
}
