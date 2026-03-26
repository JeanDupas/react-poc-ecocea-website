# TICKET-003 — Layout Global (Header + Footer)

**Bloc :** 🏗️ BLOC 1 — Setup & Infrastructure  
**Priorité :** P0 — Critique  
**Type :** Layout  
**Estimation :** 3h  
**Phase :** Phase 1 — Fondations

---

## Description

Créer le layout persistant avec header sticky et footer complet. Ces composants sont présents sur toutes les pages via `app/layout.tsx`.

---

## Tâches

### `components/layout/Header.tsx`
- [x] Logo à gauche : texte stylisé "Ecocea**Tech**" avec GradientText sur "Tech"
- [x] Navigation principale (desktop) :
  - Accueil → `/`
  - Services → `/services`
  - Réalisations → `/realisations`
  - Expertise → `/expertise`
  - Blog → `/blog`
  - Contact → `/contact`
- [x] Bouton CTA "Discutons de votre projet" (variante `primary`, couleur vert électrique)
- [x] Header transparent sur le hero → opaque (`bg-primary/95 backdrop-blur-md`) au scroll `> 80px`
  - Implémenter avec un hook `useScrollEffect` ou `useEffect` + `window.scrollY`
- [x] Indicateur de page active : underline animé sous le lien courant (utiliser `usePathname` Next.js)
- [x] **Menu mobile** (< 768px) :
  - Icône hamburger → croix (animation)
  - Drawer/Sheet latérale ou menu déroulant fullscreen
  - Fermeture au clic sur un lien ou hors du menu
  - Utiliser `@radix-ui/react-dialog` ou état local simple

### `components/layout/Footer.tsx`
- [x] Logo + baseline : "Votre partenaire tech e-commerce & IA"
- [x] 4 colonnes en desktop (stack verticale sur mobile) :
  - **Navigation** : Accueil, Services, Réalisations, Expertise
  - **Services** : E-commerce, Cloud, Sur-mesure, TMA
  - **Contact** : adresse Paris 9ème, email, téléphone
  - **Réseaux sociaux** : LinkedIn, GitHub, (Twitter/X optionnel)
- [x] Mentions légales / Politique de confidentialité (liens)
- [x] Copyright dynamique : `© ${new Date().getFullYear()} Ecocea Technologies`
- [x] Fond gradient subtil : `bg-gradient-to-b from-primary to-black`
- [x] Séparateur décoratif (Divider avec gradient) en haut du footer

### `app/layout.tsx`
- [x] Wrapper global avec `<Header />` + `<main>` + `<Footer />`
- [x] Appliquer les polices Inter et JetBrains Mono via `next/font/google`
- [x] Metadata globales : title template, description par défaut

---

## Critères d'acceptation

- [x] Header sticky : l'effet transparent → opaque est fluide (transition CSS 300ms)
- [x] Menu hamburger mobile 100% fonctionnel (ouverture, fermeture, navigation)
- [x] Lien actif visuellement différencié (underline animé)
- [x] Footer responsive : 4 colonnes → 2 → 1 selon breakpoint
- [x] Navigation au clavier complète (Tab, Enter, Escape pour fermer menu mobile)
- [x] Pas de layout shift au chargement ou au scroll

---

## Dépendances

- TICKET-001 (projet initialisé)
- TICKET-002 (Button, GradientText, Divider)

## Tickets suivants

- TICKET-004 et toutes les sections Home
