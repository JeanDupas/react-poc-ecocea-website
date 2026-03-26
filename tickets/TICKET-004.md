# TICKET-004 — Section Hero

**Bloc :** 🏠 BLOC 2 — Page d'accueil  
**Priorité :** P0 — Critique  
**Type :** Section  
**Estimation :** 4h  
**Phase :** Phase 2 — Home

---

## Description

Créer la section hero immersive et moderne de la page d'accueil qui capte l'attention immédiatement. C'est la première chose visible par le visiteur.

---

## Tâches

### `components/sections/home/HeroSection.tsx`
- [x] Fond sombre `#0D1B2A` avec animation de fond :
  - Option A (recommandé) : grille géométrique de points en CSS pur (background-image: radial-gradient dots)
  - Option B : particules légères avec canvas (perf-safe, max 50 particules)
  - Formes géométriques flottantes en arrière-plan (hexagones, lignes obliques) en CSS/SVG
  - Effet glow radial centré sur le titre
- [x] Badge animé entrant (animation `fade-in + slide-down`) :
  ```
  🚀  ESN spécialisée e-commerce & IA
  ```
  Style : petite pilule, border accent, fond transparent
- [x] Titre H1 avec animation stagger sur les mots :
  ```
  Votre partenaire tech pour des plateformes e‑commerce qui performent
  ```
  - "e-commerce" et "performent" → `<GradientText />`
  - Animation : chaque mot slide-up avec délai progressif (framer-motion `variants`)
- [x] Sous-titre :
  ```
  Nous concevons des expériences digitales sur-mesure alliant expertise technique, 
  innovation IA et accompagnement personnalisé.
  ```
- [x] 2 boutons CTA avec animation d'entrée délayée :
  - "Voir nos réalisations" → `/realisations` (variante `primary`)
  - "Discuter du projet" → `/contact` (variante `outline`)
- [x] Indicateur de scroll animé en bas :
  - Icône flèche vers le bas avec animation rebondissante (`animate-bounce`)
  - Texte "Découvrir" en très petite taille
- [x] Éléments décoratifs : grain texture overlay via `::before` pseudo-element

### `hooks/useScrollEffect.ts`
- [x] Hook retournant `scrollY` et `isScrolled` (booléen threshold)

---

## Performance

- LCP < 2.5s : ne pas charger de lourdes librairies canvas sauf si nécessaire
- Pas d'image en background → fond CSS pur
- Animations CSS préférées aux animations JS pour le rendu initial
- `will-change: transform` sur les éléments animés

---

## Critères d'acceptation

- [x] LCP < 2.5s mesuré dans Lighthouse
- [x] Pas de CLS (Cumulative Layout Shift)
- [x] Responsive : typographie lisible sur mobile (H1 : 2xl → 5xl selon breakpoint)
- [x] Animations désactivées si `prefers-reduced-motion`
- [x] Le fond et les décorations ne créent pas de scroll horizontal

---

## Dépendances

- TICKET-001 (framer-motion installé)
- TICKET-002 (GradientText, Button)
- TICKET-003 (layout avec Header — le hero doit avoir un padding-top adapté)

## Tickets suivants

- TICKET-005, 006, 007, 008 (sections suivantes de la Home)
