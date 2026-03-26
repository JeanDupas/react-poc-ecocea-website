# TICKET-001 — Initialisation du projet

**Bloc :** 🏗️ BLOC 1 — Setup & Infrastructure  
**Priorité :** P0 — Critique  
**Type :** Setup  
**Estimation :** 2h  
**Phase :** Phase 1 — Fondations

---

## Description

Initialiser le projet frontend avec la stack recommandée (Next.js 16 App Router + TypeScript + Tailwind CSS).

---

## Contexte

Point de départ de tout le projet. Ce ticket doit être complété avant tout autre ticket. Voir `ARCHITECTURE.md` pour les détails de la stack et la structure de dossiers cible.

---

## Tâches

- [x] Créer le projet Next.js 16 avec App Router et TypeScript
  ```bash
  npx create-next-app@latest . --typescript --tailwind --eslint --app --src-dir=false --import-alias="@/*"
  ```
- [x] Configurer Tailwind CSS avec la palette de couleurs custom dans `tailwind.config.ts`
  - Ajouter les couleurs : `primary (#0D1B2A)`, `accent (#00F5A0)`, `electric (#0066FF)`, `light-bg (#F4F7FA)`, `text-main (#1A1A2E)`, `text-muted (#6B7280)`, `error (#FF4D6D)`, `success (#00C896)`
- [x] Installer les dépendances supplémentaires :
  ```bash
  npm install framer-motion lucide-react @radix-ui/react-dialog @radix-ui/react-tabs @radix-ui/react-accordion clsx tailwind-merge react-hook-form zod
  ```
- [x] Configurer les polices Google Fonts dans `app/layout.tsx` via `next/font/google` :
  - `Inter` (weights: 400, 600, 700)
  - `JetBrains Mono` (weight: 400)
- [x] Configurer ESLint (`.eslintrc.json`) et Prettier (`.prettierrc`)
- [x] Installer Husky + lint-staged pour les git hooks pre-commit :
  ```bash
  npm install -D husky lint-staged
  npx husky init
  ```
- [x] Configurer les variables CSS dans `styles/globals.css` (voir design tokens dans `ARCHITECTURE.md`)
- [x] Créer la structure de dossiers :
  ```
  components/ui/
  components/layout/
  components/sections/home/
  components/sections/services/
  components/sections/realisations/
  data/
  hooks/
  lib/
  content/blog/
  tickets/
  ```
- [x] Configurer `next.config.js` pour l'export statique GitHub Pages :
  ```js
  output: 'export',
  basePath: '/react-poc-ecocea-website',
  images: { unoptimized: true }
  ```
- [x] Ajouter les scripts dans `package.json` :
  ```json
  "type-check": "tsc --noEmit",
  "format": "prettier --write ."
  ```

---

## Critères d'acceptation

- [x] `npm run dev` démarre sans erreur sur `http://localhost:3000`
- [x] `npm run build` génère un dossier `/out` (export statique)
- [x] `npm run lint` passe sans erreur
- [x] `npm run type-check` passe sans erreur
- [x] Les couleurs custom sont accessibles en classes Tailwind : `bg-primary`, `text-accent`, etc.
- [x] Les polices Inter et JetBrains Mono se chargent correctement
- [x] La structure de dossiers correspond au schéma dans `ARCHITECTURE.md`

---

## Dépendances

- Aucune (premier ticket)

## Bloqué par

- Rien

## Tickets suivants

- TICKET-002 (Design System)
- Les fichiers GitHub Actions `.github/workflows/ci.yml` et `.github/workflows/deploy.yml` sont déjà créés.
