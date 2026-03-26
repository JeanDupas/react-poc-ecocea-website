# TICKET-011 — Section CTA Finale (Home)

**Bloc :** 🏠 BLOC 2 — Page d'accueil  
**Priorité :** P1 — Haute  
**Type :** Section  
**Estimation :** 1h  
**Phase :** Phase 2 — Home

---

## Description

Bandeau de conversion final en bas de la page d'accueil, juste avant le footer. Doit être percutant et convertir les visiteurs en prospects.

---

## Tâches

### `components/sections/home/CtaSection.tsx`
- [x] Fond : gradient animé `#0066FF → #00F5A0`, animation CSS subtile (gradient shift)
  ```css
  @keyframes gradient-shift {
    0%, 100% { background-position: 0% 50%; }
    50% { background-position: 100% 50%; }
  }
  ```
- [x] Contenu centré :
  - [x] Titre H2 accrocheur : "Prêt à transformer votre expérience digitale ?"
  - [x] Sous-titre : "Parlons de votre projet — premier échange offert, sans engagement."
  - [x] Bouton CTA : "Parlons de votre projet" → `/contact` (Button variante `primary` sombre — fond blanc/accent, texte sombre)
- [x] Animation d'entrée au scroll (fade + scale depuis le bas)
- [x] Côtés avec légères formes décoratives (cercles, lignes)

---

## Critères d'acceptation

- [x] CTA bien visible et contrasté sur le fond gradient
- [x] Bouton mène bien vers `/contact`
- [x] Animation de fond subtile (pas de clignotement ou effet violent)
- [x] Responsive : texte centré sur mobile

---

## Dépendances

- TICKET-001, TICKET-002 (Button)

## Tickets suivants

- Fin du BLOC 2 (Home). Passer à TICKET-012 (Page Services)
