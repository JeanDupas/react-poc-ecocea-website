# TICKET-002 — Système de Design (Design System)

**Bloc :** 🏗️ BLOC 1 — Setup & Infrastructure  
**Priorité :** P0 — Critique  
**Type :** Composants UI  
**Estimation :** 4h  
**Phase :** Phase 1 — Fondations

---

## Description

Créer les composants atomiques réutilisables qui constitueront le Design System du site. Ces composants seront utilisés dans toutes les pages et sections.

---

## Contexte

Basé sur la direction artistique définie dans `Specs.md` : dark mode, glassmorphism, animations micro-interactives. Tous les composants doivent être typés TypeScript et exportés depuis un fichier `index.ts` central.

---

## Tâches

### `components/ui/Button.tsx`
- [x] Props : `variant` (`primary` | `secondary` | `ghost` | `outline`), `size` (`sm` | `md` | `lg`), `asChild`, `disabled`, `loading`
- [x] Variantes de style :
  - `primary` : bg-accent, text-primary, hover scale-105
  - `secondary` : bg-electric, text-white
  - `ghost` : transparent, border, hover bg-white/10
  - `outline` : border-accent, text-accent, hover bg-accent/10
- [x] État hover avec transition douce (200ms)
- [x] État focus visible (ring coloré)
- [x] Support `asChild` (via Radix Slot) pour usage avec `<Link />`

### `components/ui/Badge.tsx`
- [x] Props : `variant` (`tech` | `category` | `priority`), `color` optionnel
- [x] Usage : tags de stack technique (React, Java, AWS…)
- [x] Style : petite pilule avec fond semi-transparent coloré + texte monospace JetBrains Mono

### `components/ui/Card.tsx`
- [x] Props : `variant` (`glass` | `solid` | `bordered`), `hoverable` boolean
- [x] Variante `glass` : `backdrop-blur-md`, `bg-white/5`, `border border-white/10`
- [x] Variante `solid` : `bg-card`, `shadow-lg`
- [x] Hover 3D optionnel : `transform perspective(1000px)` au mouseenter

### `components/ui/SectionTitle.tsx`
- [x] Props : `title`, `subtitle`, `align` (`left` | `center`), `decorated` boolean
- [x] Ligne décorative sous le titre (gradient bleu→vert)
- [x] Sous-titre en `text-muted`

### `components/ui/GradientText.tsx`
- [x] Props : `children`, `from` (couleur), `to` (couleur)
- [x] Default : bleu `#0066FF` → vert `#00F5A0`
- [x] Utiliser `background-clip: text` CSS

### `components/ui/Divider.tsx`
- [x] Divider horizontal avec gradient (transparent → accent → transparent)
- [x] Props : `className`, `orientation`

### `components/ui/Tag.tsx`
- [x] Pour les catégories blog et filtres réalisations
- [x] Props : `label`, `active` boolean, `onClick`
- [x] Style : pill avec hover changeant la couleur de fond

### `components/ui/index.ts`
- [x] Re-exporter tous les composants UI

### `lib/utils.ts`
- [x] Fonction `cn(...classes)` utilisant `clsx` + `tailwind-merge`

---

## Critères d'acceptation

- [x] Tous les composants sont 100% typés TypeScript (pas de `any`)
- [x] Import unique possible : `import { Button, Card, Badge } from '@/components/ui'`
- [x] Les variantes couvrent tous les cas d'usage des maquettes
- [x] Hover animations désactivées si `prefers-reduced-motion`
- [x] Contraste WCAG AA respecté (≥ 4.5:1)
- [x] Storybook ou page de démo optionnelle (bonus)

---

## Dépendances

- TICKET-001 doit être complété (projet initialisé avec Tailwind + clsx + radix-ui)

## Tickets suivants

- TICKET-003 (Header + Footer utilisent Button, Divider)
- Toutes les sections utilisent Card, Badge, SectionTitle
