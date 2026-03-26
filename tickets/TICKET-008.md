# TICKET-008 — Section Réalisations (aperçu Home)

**Bloc :** 🏠 BLOC 2 — Page d'accueil  
**Priorité :** P1 — Haute  
**Type :** Section  
**Estimation :** 3h  
**Phase :** Phase 2 — Home

---

## Description

Showcase de 3 projets phares sur la page d'accueil, avec un layout asymétrique et interactif. Aperçu de la page complète réalisations (TICKET-013).

---

## Tâches

### `data/realisations.ts`
- [x] Créer le fichier avec les 3 projets phares pour l'aperçu home :
  ```typescript
  export interface Realisation {
    id: string;
    client: string;
    mission: string;
    description: string;
    imageUrl: string;
    categories: ('ecommerce' | 'mobile' | 'cloud' | 'relation-client')[];
    tags: string[];
    featured: boolean;
  }
  ```
  - Projet 1 (featured) : Sephora — refonte plateforme e-commerce
  - Projet 2 : Kering — solution digital shelf
  - Projet 3 : Renault — portail B2B

### `components/sections/home/RealisationsPreview.tsx`
- [x] Titre de section : "Nos réalisations" (SectionTitle)
- [x] Layout asymétrique :
  - Grande card "featured" à gauche (50% width desktop)
  - 2 cards secondaires à droite empilées
- [x] Chaque card :
  - Image/illustration avec `next/image` (optimisée, lazy)
  - Overlay sombre au hover avec bouton "Voir le projet"
  - Badge client (nom) + badges tags stack
  - Mission résumée en 1 ligne
- [x] Animation d'entrée au scroll (fade + scale)
- [x] CTA final : "Voir toutes nos réalisations →" → `/realisations`

---

## Notes sur les images

- Utiliser des illustrations/mockups générés ou des couleurs de placeholder (`bg-gradient` avec le logo du client en texte) si pas d'images disponibles
- Format : paysage 16:9, minimum 800x450px
- `alt` text descriptif obligatoire

---

## Critères d'acceptation

- [x] Images optimisées via `<Image />` Next.js (pas de `<img>` brut)
- [x] `alt` text sur toutes les images
- [x] Hover overlay accessible (focus visible, aria-label sur le bouton)
- [x] Responsive : layout asymétrique → colonne unique sur mobile

---

## Dépendances

- TICKET-001
- TICKET-002 (Card, Badge, Button, SectionTitle)

## Tickets suivants

- TICKET-013 (page /realisations complète — réutilise data/realisations.ts)
