# TICKET-007 — Section Clients / Logos

**Bloc :** 🏠 BLOC 2 — Page d'accueil  
**Priorité :** P1 — Haute  
**Type :** Section  
**Estimation :** 2h  
**Phase :** Phase 2 — Home

---

## Description

Afficher un bandeau défilant animé des logos clients grands comptes pour asseoir la crédibilité de l'ESN. L'animation doit être entièrement en CSS (sans JS).

---

## Clients à mentionner

Sephora, Kering, Renault, Lapeyre, Monoprix, E.Leclerc

(Logos en SVG ou PNG depuis `/public/images/clients/`)

---

## Tâches

### `components/sections/home/ClientsSection.tsx`
- [x] Titre de section : "Ils nous font confiance" (SectionTitle, aligné centre)
- [x] Marquee CSS infini — implémentation :
  ```css
  @keyframes marquee {
    from { transform: translateX(0); }
    to { transform: translateX(-50%); }
  }
  .marquee-track {
    display: flex;
    animation: marquee 20s linear infinite;
  }
  ```
  - Dupliquer les logos (cloner le groupe) pour un défilement sans saut
  - Niveaux de gris par défaut (`filter: grayscale(100%) opacity(60%)`)
  - Couleur au hover (`filter: none`, transition 300ms)
  - `animation-play-state: paused` au hover/focus pour l'accessibilité
- [x] Responsive :
  - Desktop : vitesse 20s
  - Mobile : vitesse 15s (plus rapide car moins de largeur)
- [x] Effet de masque sur les bords (fade via `mask-image: linear-gradient(...)`)
- [x] Si les vrais logos ne sont pas disponibles : utiliser des placeholders textuels stylisés

### `data/clients.ts`
- [x] Array avec `name`, `logoUrl`, `href` (optionnel) pour chaque client

---

## Critères d'acceptation

- [x] Animation CSS pure — aucun JS pour le défilement
- [x] Pas de layout shift au chargement
- [x] Animation pausée au hover (accessibilité)
- [x] Responsive (vitesse adaptée)
- [x] Si `prefers-reduced-motion` : logos affichés en grille statique (pas de marquee)

---

## Dépendances

- TICKET-001
- TICKET-002 (SectionTitle)

## Tickets suivants

- Aucun ticket direct bloquant
