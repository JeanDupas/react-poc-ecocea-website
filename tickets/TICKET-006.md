# TICKET-006 — Section Services (aperçu Home)

**Bloc :** 🏠 BLOC 2 — Page d'accueil  
**Priorité :** P0 — Critique  
**Type :** Section  
**Estimation :** 3h  
**Phase :** Phase 2 — Home

---

## Description

Présenter les 4 services principaux sur la page d'accueil sous forme de cards interactives glassmorphism. Cette section est un aperçu — la page complète est dans TICKET-012.

---

## Données des services (`data/services.ts`)

```typescript
export const services = [
  {
    id: 'ecommerce',
    icon: 'ShoppingCart',
    title: 'E-commerce B2B/B2C',
    description: 'Plateformes omnicanales performantes et scalables pour transformer votre business en ligne.',
    href: '/services#ecommerce',
    tags: ['Magento', 'HCL Commerce', 'Salesforce', 'React'],
    color: '#0066FF',
  },
  {
    id: 'sur-mesure',
    icon: 'Code2',
    title: 'Solutions Sur-mesure',
    description: 'Applications web et mobiles taillées pour vos besoins métier et relation client.',
    href: '/services#sur-mesure',
    tags: ['Java', 'ReactJS', 'React Native', 'PostgreSQL'],
    color: '#00F5A0',
  },
  {
    id: 'cloud',
    icon: 'Cloud',
    title: 'Infrastructure Cloud',
    description: 'Migration, optimisation et sécurisation de vos systèmes sur AWS, Azure et GCP.',
    href: '/services#cloud',
    tags: ['AWS', 'Azure', 'GCP', 'CI/CD'],
    color: '#0066FF',
  },
  {
    id: 'tma',
    icon: 'Wrench',
    title: 'TMA & Audit Technique',
    description: 'Reprise en main, audit de performance et maintenance évolutive de vos applications.',
    href: '/services#tma',
    tags: ['Audit', 'Performance', 'Maintenance'],
    color: '#00F5A0',
  },
]
```

---

## Tâches

### `data/services.ts`
- [x] Créer le fichier avec la structure ci-dessus et typage TypeScript

### `components/sections/home/ServicesPreview.tsx`
- [x] Titre de section centré : "Nos expertises" (SectionTitle)
- [x] Sous-titre : "Des solutions complètes pour votre transformation digitale"
- [x] Grid 2x2 desktop → 1 colonne mobile
- [x] Chaque card (`Card` variante `glass`) :
  - Icône Lucide dans un cercle coloré avec glow effect (couleur du service)
  - Titre bold
  - Description courte
  - Tags `<Badge />` (stack) sur 1-2 lignes
  - Lien "En savoir plus →" (couleur accent)
- [x] **Hover 3D** : `transform: perspective(1000px) rotateX(Xdeg) rotateY(Ydeg)` au mouseenter
  - Implémenté via un handler `onMouseMove` sur la card
  - Reset au `onMouseLeave`
  - **Désactivé** si `prefers-reduced-motion`
- [x] Glow coloré sous la card au hover (box-shadow avec la couleur du service)
- [x] Animation d'entrée au scroll : fade + slide-up avec stagger 100ms (framer-motion)
- [x] CTA final centré : "Découvrir tous nos services →" → `/services` (Button `secondary`)

---

## Critères d'acceptation

- [x] 4 cards affichées, grid responsive
- [x] Cards accessibles au clavier (focus visible, Tab navigation)
- [x] Animation hover 3D désactivée si `prefers-reduced-motion`
- [x] Liens vers la page services avec anchor : `/services#ecommerce`

---

## Dépendances

- TICKET-001
- TICKET-002 (Card, Badge, Button, SectionTitle)

## Tickets suivants

- TICKET-012 (page /services complète)
