# TICKET-009 — Section Témoignages

**Bloc :** 🏠 BLOC 2 — Page d'accueil  
**Priorité :** P1 — Haute  
**Type :** Section  
**Estimation :** 2h  
**Phase :** Phase 2 — Home

---

## Description

Carrousel de témoignages clients pour renforcer la preuve sociale. Swipeable sur mobile, avec auto-play.

---

## Données (`data/testimonials.ts`)

```typescript
export interface Testimonial {
  id: string;
  quote: string;
  author: string;
  role: string;
  company: string;
  stars?: number; // 1-5
  avatarUrl?: string;
}
```

Créer au minimum 4 témoignages fictifs crédibles (ex: DSI Sephora, CTO Kering...).

---

## Tâches

### `data/testimonials.ts`
- [x] Créer le fichier avec 4+ témoignages typés

### `components/sections/home/TestimonialsSection.tsx`
- [x] Fond sombre `bg-primary` pour contraste fort
- [x] Titre : "Ce que disent nos clients" (SectionTitle inversé — texte blanc)
- [x] Carrousel avec `framer-motion` :
  - [x] Drag horizontal sur desktop et mobile
  - [x] Swipe natif mobile (touch events via framer-motion `drag="x"`)
  - [x] `dragConstraints` basé sur le nombre de slides
- [x] Chaque slide (Card) :
  - [x] Guillemets décoratifs en grand
  - [x] Citation en italic
  - [x] Avatar (initiales dans un cercle coloré si pas de photo)
  - [x] Nom, rôle, entreprise
  - [x] Étoiles optionnelles (⭐)
- [x] Navigation :
  - [x] Points (dots) cliquables en bas — point actif en couleur accent
  - [x] Flèches `<` `>` sur desktop
- [x] Auto-play toutes les 5 secondes
  - [x] Pause au hover de la card
  - [x] Pause au focus (accessibilité clavier)
  - [x] Reprise au blur

---

## Critères d'acceptation

- [x] Drag/swipe fonctionnel sur mobile
- [x] Auto-play respecte la pause hover/focus
- [x] Navigation dots et flèches synchronisées
- [x] Si `prefers-reduced-motion` : pas d'auto-play, slides statiques

---

## Dépendances

- TICKET-001 (framer-motion)
- TICKET-002 (Card, SectionTitle)

## Tickets suivants

- Aucun blocker
