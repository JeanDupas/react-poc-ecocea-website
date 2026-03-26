# 🏗️ Architecture — Ecocea Technologies Website

> Document de référence définissant la stack technique, les conventions, et la stratégie CI/CD pour le site vitrine Ecocea Technologies.

---

## 📐 Vue d'ensemble

```
┌─────────────────────────────────────────────────────────────┐
│                    GitHub Repository                        │
│                                                             │
│  main branch ──► CI Pipeline ──► Deploy to GitHub Pages    │
│                                                             │
│  feature/xxx ──► CI Pipeline (lint, build, type-check)     │
└─────────────────────────────────────────────────────────────┘
```

---

## 🧰 Stack Technique

### Framework & Langage
| Technologie | Version | Rôle |
|-------------|---------|------|
| **Next.js** | 16 (App Router) | Framework React SSG/SSR |
| **TypeScript** | 5.x | Typage statique |
| **React** | 18 | UI Library |

> **Pourquoi Next.js 16 App Router ?**
> - Routing basé sur le filesystem, simple et structuré
> - Support natif du SSG (Static Site Generation) → parfait pour GitHub Pages
> - Server Components pour des performances optimales
> - `generateMetadata` pour le SEO dynamique par page

### Styling
| Technologie | Version | Rôle |
|-------------|---------|------|
| **Tailwind CSS** | 3.x | Utility-first CSS framework |
| **clsx** | latest | Composition de classes conditionnelles |
| **tailwind-merge** | latest | Merge de classes Tailwind sans conflits |

> Configuration custom avec palette Ecocea : `#0D1B2A`, `#00F5A0`, `#0066FF`

### UI & Animations
| Technologie | Version | Rôle |
|-------------|---------|------|
| **Framer Motion** | 11.x | Animations déclaratives & transitions |
| **Lucide React** | latest | Iconographie outline moderne |
| **@radix-ui** | latest | Composants accessibles headless (modals, tabs, accordéons) |

### Formulaires & Validation
| Technologie | Version | Rôle |
|-------------|---------|------|
| **React Hook Form** | 7.x | Gestion de formulaires performante |
| **Zod** | 3.x | Validation de schémas TypeScript-first |

### Contenu (Blog)
| Technologie | Version | Rôle |
|-------------|---------|------|
| **Contentlayer** | latest | Gestion du contenu MDX typé |
| **next-mdx-remote** | latest | Rendu MDX côté serveur |

### Polices
| Police | Poids | Usage |
|--------|-------|-------|
| **Inter** | 400, 600, 700 | Corps, titres |
| **JetBrains Mono** | 400 | Tags stack technique, code |

> Chargement via `next/font/google` pour optimisation LCP.

### Qualité de code
| Outil | Rôle |
|-------|------|
| **ESLint** | Linting JavaScript/TypeScript |
| **Prettier** | Formatage de code |
| **Husky** | Git hooks pre-commit |
| **lint-staged** | Lint uniquement sur les fichiers modifiés |

---

## 📁 Structure des dossiers

```
react-poc-ecocea-website/
├── .github/
│   └── workflows/
│       ├── ci.yml              # Lint, type-check, build sur chaque PR
│       └── deploy.yml          # Deploy sur GitHub Pages au merge sur main
├── app/                        # Next.js App Router
│   ├── layout.tsx              # Root layout (Header + Footer)
│   ├── page.tsx                # Home page
│   ├── services/
│   │   └── page.tsx
│   ├── realisations/
│   │   └── page.tsx
│   ├── expertise/
│   │   └── page.tsx
│   ├── a-propos/
│   │   └── page.tsx
│   ├── blog/
│   │   ├── page.tsx            # Liste des articles
│   │   └── [slug]/
│   │       └── page.tsx        # Article individuel
│   ├── contact/
│   │   └── page.tsx
│   ├── sitemap.ts              # Sitemap généré automatiquement
│   └── robots.ts               # robots.txt
├── components/
│   ├── ui/                     # Design system atoms
│   │   ├── Button.tsx
│   │   ├── Badge.tsx
│   │   ├── Card.tsx
│   │   ├── SectionTitle.tsx
│   │   ├── GradientText.tsx
│   │   ├── Divider.tsx
│   │   ├── Tag.tsx
│   │   └── index.ts            # Re-exports
│   ├── layout/
│   │   ├── Header.tsx
│   │   ├── Footer.tsx
│   │   └── Navigation.tsx
│   └── sections/               # Sections de pages
│       ├── home/
│       │   ├── HeroSection.tsx
│       │   ├── StatsSection.tsx
│       │   ├── ServicesPreview.tsx
│       │   ├── ClientsSection.tsx
│       │   ├── RealisationsPreview.tsx
│       │   ├── TestimonialsSection.tsx
│       │   ├── ValuesSection.tsx
│       │   └── CtaSection.tsx
│       ├── services/
│       │   └── ServiceDetail.tsx
│       └── realisations/
│           └── ProjectCard.tsx
├── content/
│   └── blog/                   # Articles MDX
│       ├── top-5-erreurs-ecommerce-b2b.mdx
│       ├── migrer-vers-le-cloud-2025.mdx
│       └── ia-et-relation-client.mdx
├── data/
│   ├── realisations.ts         # Données des projets clients
│   ├── services.ts             # Données des services
│   ├── testimonials.ts         # Témoignages
│   └── stats.ts                # Chiffres clés
├── hooks/
│   ├── useCountUp.ts           # Compteurs animés
│   ├── useScrollEffect.ts      # Effets au scroll
│   └── useReducedMotion.ts     # Accessibilité animations
├── lib/
│   ├── utils.ts                # Utilitaires (cn, formatDate...)
│   └── mdx.ts                  # Helpers MDX/Contentlayer
├── public/
│   ├── images/
│   └── fonts/
├── styles/
│   └── globals.css             # Styles globaux + custom properties CSS
├── tickets/                    # Tickets de développement (ce repo)
│   ├── TICKET-001.md
│   └── ...
├── next.config.js              # Config Next.js (output: 'export' pour GitHub Pages)
├── tailwind.config.ts          # Config Tailwind custom
├── tsconfig.json
├── .eslintrc.json
├── .prettierrc
└── ARCHITECTURE.md             # Ce fichier
```

---

## 🚀 Stratégie CI/CD & Déploiement

### Choix : GitHub Pages avec `output: 'export'`

Le site est **entièrement statique** (SSG) — pas de Server Components dynamiques, pas d'API routes qui nécessitent un serveur Node.js à runtime. On exporte donc vers des fichiers HTML/CSS/JS statiques via `next export`.

**Configuration dans `next.config.js` :**
```js
const nextConfig = {
  output: 'export',
  basePath: '/react-poc-ecocea-website', // nom du repo GitHub
  images: {
    unoptimized: true, // requis pour export statique
  },
}
```

> ⚠️ La page `/contact` utilise un formulaire qui envoie des emails. Sans serveur, on utilisera un service tiers (ex: **Formspree**, **EmailJS**, ou **Resend** avec une edge function) pour gérer l'envoi d'emails côté client ou via GitHub Actions.

### Pipelines GitHub Actions

#### Pipeline CI (`.github/workflows/ci.yml`)
Déclenché sur : **tout push** et **toute Pull Request**

```
Lint → Type Check → Build
```

#### Pipeline Deploy (`.github/workflows/deploy.yml`)
Déclenché sur : **merge sur `main`** uniquement

```
Install → Build (next export) → Upload artifact → Deploy GitHub Pages
```

---

## 🌐 Configuration GitHub Pages

1. Dans les **Settings** du repo GitHub → **Pages**
2. Source : `GitHub Actions`
3. L'URL du site sera : `https://<username>.github.io/react-poc-ecocea-website/`

---

## 🎨 Design Tokens CSS

Définis dans `styles/globals.css` et `tailwind.config.ts` :

```css
:root {
  /* Couleurs principales */
  --color-primary:    #0D1B2A;   /* Bleu nuit */
  --color-accent:     #00F5A0;   /* Vert électrique */
  --color-electric:   #0066FF;   /* Bleu électrique */
  --color-light-bg:   #F4F7FA;   /* Fond clair */
  --color-text:       #1A1A2E;   /* Texte principal */
  --color-text-muted: #6B7280;   /* Texte secondaire */
  --color-card:       #FFFFFF;   /* Cartes */
  --color-error:      #FF4D6D;   /* Erreur */
  --color-success:    #00C896;   /* Succès */

  /* Gradients */
  --gradient-hero: linear-gradient(135deg, #0D1B2A 0%, #00F5A0 100%);
  --gradient-cta:  linear-gradient(90deg, #0066FF 0%, #00F5A0 100%);
}
```

---

## 📋 Conventions de développement

### Nommage
- **Composants** : PascalCase (`HeroSection.tsx`)
- **Hooks** : camelCase préfixé `use` (`useCountUp.ts`)
- **Data files** : camelCase (`realisations.ts`)
- **Pages** : `page.tsx` (convention Next.js App Router)
- **Styles** : BEM si CSS modules, classes Tailwind sinon

### TypeScript
- Pas de `any` — utiliser des types stricts
- Props typées avec `interface` en début de fichier
- Exports nommés préférés aux exports default pour les composants UI

### Commits (Conventional Commits)
```
feat(hero): add animated gradient background
fix(header): correct mobile menu z-index
chore: update dependencies
docs: add ARCHITECTURE.md
```

### Git Flow
```
main          → production (GitHub Pages)
develop       → intégration
feature/xxx   → nouvelles features
fix/xxx       → correctifs
```

---

## ✅ Checklist avant merge

- [ ] `npm run lint` passe sans erreur
- [ ] `npm run type-check` passe sans erreur
- [ ] `npm run build` passe sans erreur
- [ ] Tests unitaires passent (si applicable)
- [ ] Score Lighthouse ≥ 90 sur Performance, SEO, Accessibility
- [ ] Responsive vérifié (mobile, tablette, desktop)
- [ ] `prefers-reduced-motion` respecté sur les animations

---

## 📊 Phases de développement

| Phase | Tickets | Contenu | Durée estimée |
|-------|---------|---------|---------------|
| **Phase 1** — Fondations | 001, 002, 003 | Setup, Design System, Layout | ~9h |
| **Phase 2** — Home | 004→011 | Toutes les sections de la Home | ~19h |
| **Phase 3** — Pages clés | 012, 013, 015 | Services, Réalisations, Contact | ~12h |
| **Phase 4** — SEO & Qualité | 016, 017 | SEO technique, Accessibilité | ~5h |
| **Phase 5** — Blog | 014 | Système MDX | ~4h |
| **Total** | **17 tickets** | | **~49h** |
