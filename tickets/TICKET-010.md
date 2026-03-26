# TICKET-010 — Section Valeurs / "Pourquoi nous choisir"

**Bloc :** 🏠 BLOC 2 — Page d'accueil  
**Priorité :** P2 — Normale  
**Type :** Section  
**Estimation :** 2h  
**Phase :** Phase 2 — Home

---

## Description

Mettre en avant les 4 valeurs différenciantes de l'ESN. Focus sur les bénéfices client, pas les features internes.

---

## Valeurs à afficher

| Icône | Valeur | Sous-titre |
|-------|--------|-----------|
| `MapPin` | Proximité | Équipe parisienne, contacts dédiés, réactivité garantie |
| `Sparkles` | Innovation IA | Intégration de l'intelligence artificielle dans chaque projet |
| `Shield` | Qualité | Code review, tests, audits — zéro compromis sur la qualité |
| `Zap` | Agilité | Sprints courts, livraisons fréquentes, adaptation au changement |

---

## Tâches

### `components/sections/home/ValuesSection.tsx`
- [x] Fond clair `bg-light-bg` (alternance avec sections sombres)
- [x] Titre : "Pourquoi choisir Ecocea Tech ?" (SectionTitle, centré)
- [x] Grid 2x2 desktop → 1 colonne mobile
- [x] Chaque valeur :
  - [x] Icône Lucide dans un cercle avec fond dégradé accent
  - [x] Animation SVG "draw" ou pulse sur l'icône au hover
  - [x] Titre H3 bold
  - [x] Description orientée bénéfice client (2-3 phrases max)
- [x] Animation d'entrée au scroll : fade + slide-up staggeré
- [x] Mise en avant de l'IA comme différenciateur : chip/badge "Nouveau" sur la valeur Innovation IA

---

## Critères d'acceptation

- [x] Contenu orienté bénéfices client (pas "nous faisons X", mais "vous bénéficiez de X")
- [x] Animations d'icônes désactivées si `prefers-reduced-motion`
- [x] Responsive

---

## Dépendances

- TICKET-001, TICKET-002

## Tickets suivants

- TICKET-011 (CTA finale Home)
