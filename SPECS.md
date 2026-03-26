# 🚀 Projet Site Web ESN — Inspiré d'Ecocea Technologies
> Analyse, Direction Artistique & Backlog de tickets pour agent IA dev

---

## 📊 Analyse du site de référence : ecoceatechnologies.com

### Ce que fait le site actuel
- ESN parisienne spécialisée en **e-commerce B2B/B2C**, applications sur-mesure, cloud et relation client digitale
- Clients grands comptes : Sephora, Kering, Renault, Lapeyre, Monoprix, E.Leclerc
- Structure classique : Home → Services → Réalisations → À propos → Contact
- Discours axé expertise technique (Java, ReactJS, iOS, Cloud AWS/Azure/GCP)
- Valeurs mises en avant : proximité, qualité, innovation, humilité

### Points faibles identifiés (à améliorer)
- Design générique sans identité forte ni différenciation visuelle
- Manque d'animations et d'interactivité moderne
- Pas de démonstration IA / automatisation dans le discours
- Absence de blog ou content marketing
- Navigation peu immersive, expérience utilisateur datée
- Pas de calculateur ou d'outil de qualification des prospects
- Peu de preuves sociales dynamiques (compteurs, logos animés, etc.)

---

## 🎨 Direction Artistique (DA)

### Palette de couleurs

| Rôle | Couleur | HEX | Usage |
|------|---------|-----|-------|
| **Primaire** | Bleu nuit profond | `#0D1B2A` | Fond hero, header, sections sombres |
| **Secondaire** | Vert électrique | `#00F5A0` | CTA, accents, highlights, hover |
| **Tertiaire** | Bleu électrique | `#0066FF` | Liens, boutons secondaires, gradients |
| **Neutre clair** | Blanc cassé | `#F4F7FA` | Fonds de section clairs |
| **Texte principal** | Gris anthracite | `#1A1A2E` | Corps de texte |
| **Texte secondaire** | Gris moyen | `#6B7280` | Sous-titres, légendes |
| **Gradient hero** | Bleu → Vert | `#0D1B2A → #00F5A0` | Dégradé hero, bannières |
| **Carte / surface** | Blanc pur | `#FFFFFF` | Cards, modales |
| **Erreur** | Rouge corail | `#FF4D6D` | Formulaires, alertes |
| **Succès** | Vert menthe | `#00C896` | Confirmations |

### Typographie
- **Titres H1/H2** : `Inter` Bold 700 — moderne, tech, lisible
- **Titres H3/H4** : `Inter` SemiBold 600
- **Corps de texte** : `Inter` Regular 400
- **Code / tags tech** : `JetBrains Mono` — pour afficher les stacks techniques

### Style visuel
- **Dark mode first** pour les sections hero, alternance dark/light sur le scroll
- **Glassmorphism** sur les cartes de services (backdrop-blur + border semi-transparent)
- **Micro-animations** : entrées au scroll (fade-in + slide-up), hover 3D sur les cards
- **Grain texture** subtil sur les fonds sombres pour un effet premium
- **Formes géométriques** en arrière-plan (grilles de points, lignes obliques, hexagones)
- **Compteurs animés** pour les chiffres clés
- Iconographie : **Phosphor Icons** ou **Lucide** — style outline fin

---

## 🗂️ Architecture du site

```
/                    → Home
/services            → Services (e-commerce, sur-mesure, cloud, TMA)
/realisations        → Portfolio clients grands comptes
/expertise           → Stack technique & méthodologie
/a-propos            → Équipe, valeurs, histoire
/blog                → Articles & veille technologique (nouveau)
/contact             → Formulaire + prise de RDV
```

---

## 🎫 Backlog de Tickets

---

### 🏗️ BLOC 1 — Setup & Infrastructure

#### TICKET-001 — Initialisation du projet
**Priorité :** P0 — Critique  
**Type :** Setup  
**Estimation :** 2h

**Description :**  
Initialiser le projet frontend avec la stack recommandée.

**Tâches :**
- [ ] Créer le projet Next.js 16 (App Router) avec TypeScript
- [ ] Configurer Tailwind CSS avec la palette de couleurs custom
- [ ] Installer les dépendances : `framer-motion`, `lucide-react`, `@radix-ui`, `clsx`
- [ ] Configurer les polices Google Fonts : Inter + JetBrains Mono
- [ ] Mettre en place ESLint + Prettier
- [ ] Configurer les variables CSS pour les couleurs et tokens de design
- [ ] Créer la structure de dossiers : `/components`, `/sections`, `/lib`, `/data`

**Critères d'acceptation :**
- Le projet démarre sans erreur avec `npm run dev`
- La palette de couleurs est accessible via les classes Tailwind custom
- Les polices se chargent correctement

---

#### TICKET-002 — Système de design (Design System)
**Priorité :** P0 — Critique  
**Type :** Composants UI  
**Estimation :** 4h

**Description :**  
Créer les composants de base réutilisables qui seront utilisés dans tout le site.

**Tâches :**
- [ ] Composant `Button` : variantes `primary`, `secondary`, `ghost`, `outline` avec états hover/focus
- [ ] Composant `Badge` : pour les tags de stack technique (React, Java, etc.)
- [ ] Composant `Card` avec effet glassmorphism (backdrop-blur)
- [ ] Composant `SectionTitle` : titre H2 + sous-titre + ligne décorative
- [ ] Composant `GradientText` : texte avec dégradé bleu → vert
- [ ] Composant `Divider` décoratif
- [ ] Composant `Tag` pour les catégories
- [ ] Variables Tailwind : couleurs, rayons, ombres, animations

**Critères d'acceptation :**
- Tous les composants sont typés TypeScript
- Les variantes couvrent les besoins des maquettes
- Les composants sont exportés depuis `/components/ui/index.ts`

---

#### TICKET-003 — Layout global (Header + Footer)
**Priorité :** P0 — Critique  
**Type :** Layout  
**Estimation :** 3h

**Description :**  
Créer le layout persistant avec header et footer.

**Tâches Header :**
- [ ] Logo à gauche (texte stylisé ou SVG)
- [ ] Navigation : Accueil, Services, Réalisations, Expertise, Blog, Contact
- [ ] CTA bouton "Discutons de votre projet" (couleur vert électrique)
- [ ] Header transparent → opaque au scroll (avec backdrop-blur)
- [ ] Menu hamburger responsive pour mobile
- [ ] Indicateur de page active (underline animé)

**Tâches Footer :**
- [ ] Logo + baseline de l'entreprise
- [ ] 4 colonnes : Navigation, Services, Contact, Réseaux sociaux
- [ ] Mentions légales / Politique de confidentialité
- [ ] Copyright dynamique (année auto)
- [ ] Animation de fond (gradient subtil)

**Critères d'acceptation :**
- Header sticky fonctionnel avec effet scroll
- Menu mobile 100% fonctionnel
- Footer responsive (stack en 1 colonne sur mobile)

---

### 🏠 BLOC 2 — Page d'accueil (Home)

#### TICKET-004 — Section Hero
**Priorité :** P0 — Critique  
**Type :** Section  
**Estimation :** 4h

**Description :**  
Créer une section hero immersive et moderne qui capte l'attention immédiatement.

**Tâches :**
- [ ] Fond sombre `#0D1B2A` avec animation de particules ou grille géométrique (canvas ou CSS)
- [ ] Badge animé entrant : "ESN spécialisée e-commerce & IA"
- [ ] Titre H1 avec GradientText : "Votre partenaire tech pour des plateformes **e-commerce** qui performent"
- [ ] Sous-titre : accroche orientée résultats et innovation IA
- [ ] 2 boutons CTA : "Voir nos réalisations" (primaire) + "Discuter du projet" (outline)
- [ ] Indicateur de scroll animé (flèche rebondissante)
- [ ] Animation d'entrée : titre slide-up avec stagger sur chaque mot
- [ ] Éléments décoratifs : formes géométriques flottantes, glow effects

**Critères d'acceptation :**
- LCP < 2.5s malgré les animations
- Responsive : la hiérarchie typographique reste lisible sur mobile
- Pas de CLS (Cumulative Layout Shift)

---

#### TICKET-005 — Section Chiffres clés
**Priorité :** P1 — Haute  
**Type :** Section  
**Estimation :** 2h

**Description :**  
Afficher des statistiques avec des compteurs animés au scroll.

**Données à afficher :**
- 15+ années d'expérience
- 50+ projets livrés
- 20+ clients grands comptes
- 100% projets maintenus

**Tâches :**
- [ ] Implémenter un hook `useCountUp` déclenché par `IntersectionObserver`
- [ ] Grille 4 colonnes (2x2 sur mobile)
- [ ] Icône + chiffre animé + libellé pour chaque KPI
- [ ] Fond alterné (section claire)
- [ ] Animation d'entrée en cascade (stagger)

**Critères d'acceptation :**
- Compteurs se déclenchent une seule fois à l'entrée dans le viewport
- Lisible sur tous les breakpoints

---

#### TICKET-006 — Section Services (aperçu)
**Priorité :** P0 — Critique  
**Type :** Section  
**Estimation :** 3h

**Description :**  
Présenter les 4 services principaux sous forme de cards interactives.

**Services :**
1. E-commerce B2B/B2C (plateformes web & mobile)
2. Solutions sur-mesure & relation client
3. Infrastructure Cloud (AWS, Azure, GCP)
4. TMA & Audit technique

**Tâches :**
- [ ] Grid 2x2 de cards avec effet glassmorphism
- [ ] Chaque card : icône animée + titre + description courte + lien "En savoir plus"
- [ ] Hover : élévation 3D (transform perspective) + glow coloré
- [ ] Animation d'entrée au scroll (fade + slide-up en stagger)
- [ ] CTA final : "Découvrir tous nos services →"

**Critères d'acceptation :**
- Cards accessibles au clavier (focus visible)
- Animation hover désactivée si `prefers-reduced-motion`

---

#### TICKET-007 — Section Clients / Logos
**Priorité :** P1 — Haute  
**Type :** Section  
**Estimation :** 2h

**Description :**  
Afficher un défilé des logos clients grands comptes pour asseoir la crédibilité.

**Clients à mentionner :** Sephora, Kering, Renault, Lapeyre, Monoprix, E.Leclerc

**Tâches :**
- [ ] Bandeau défilant (marquee CSS infini) — version sans JS
- [ ] Logos en niveaux de gris → couleur au hover
- [ ] Titre de section : "Ils nous font confiance"
- [ ] Responsive : vitesse ajustée selon la taille d'écran

**Critères d'acceptation :**
- Animation CSS pure (pas de JS)
- Aucun layout shift au chargement

---

#### TICKET-008 — Section Réalisations (aperçu)
**Priorité :** P1 — Haute  
**Type :** Section  
**Estimation :** 3h

**Description :**  
Showcase de 3 projets phares avec visuel, client et stack technique.

**Tâches :**
- [ ] Créer le fichier de données `/data/realisations.ts` avec 3 projets
- [ ] Layout : grande card featured + 2 cards secondaires
- [ ] Chaque card : image/illustration + client + mission + badges stack tech
- [ ] Hover : overlay sombre + bouton "Voir le projet"
- [ ] CTA : "Voir toutes nos réalisations →"

**Critères d'acceptation :**
- Images optimisées Next.js `<Image />`
- Accessible (alt text, aria-labels)

---

#### TICKET-009 — Section Témoignages
**Priorité :** P1 — Haute  
**Type :** Section  
**Estimation :** 2h

**Description :**  
Carrousel de témoignages clients pour la preuve sociale.

**Tâches :**
- [ ] Carrousel avec `framer-motion` (drag + swipe mobile)
- [ ] Card : citation + nom + poste + entreprise + étoiles (optionnel)
- [ ] Navigation : points + flèches
- [ ] Auto-play (5s) avec pause au hover
- [ ] Fond sombre pour contraste fort

**Critères d'acceptation :**
- Swipe fonctionnel sur mobile
- Auto-play se met en pause au focus clavier

---

#### TICKET-010 — Section "Pourquoi nous choisir" / Valeurs
**Priorité :** P2 — Normale  
**Type :** Section  
**Estimation :** 2h

**Description :**  
Mettre en avant les valeurs différenciantes : Proximité, Innovation IA, Qualité, Agilité.

**Tâches :**
- [ ] Grid 2x2 avec icône animée + titre + texte court
- [ ] Animation : icônes avec effet "draw" SVG ou lottie
- [ ] Fond alterné (clair)
- [ ] Mise en avant de l'intégration IA comme différenciateur clé

**Critères d'acceptation :**
- Contenu orienté bénéfices client (pas features internes)

---

#### TICKET-011 — Section CTA finale (Home)
**Priorité :** P1 — Haute  
**Type :** Section  
**Estimation :** 1h

**Description :**  
Bandeau de conversion final en bas de page d'accueil.

**Tâches :**
- [ ] Fond gradient (bleu nuit → vert électrique)
- [ ] Titre accrocheur + sous-titre
- [ ] Bouton CTA "Parlons de votre projet"
- [ ] Animation de fond subtile (gradient animé)

---

### 🛠️ BLOC 3 — Page Services

#### TICKET-012 — Page /services
**Priorité :** P0 — Critique  
**Type :** Page  
**Estimation :** 5h

**Description :**  
Page détaillée des 4 offres de service.

**Tâches :**
- [ ] Hero de page : titre + breadcrumb + illustration tech
- [ ] Section par service (alternance image gauche/droite) :
  - E-commerce B2B/B2C : Magento, HCL Commerce, Salesforce Commerce
  - Solutions sur-mesure : Java, ReactJS, React Native, PostgreSQL
  - Infrastructure Cloud : AWS, Azure, GCP — optimisation, sécurisation, CI/CD
  - TMA & Audit : reprise de maintenance, audit performance, corrective/évolutive
- [ ] Pour chaque service : description + liste de sous-services + badges stack + CTA
- [ ] Accordéon FAQ par service
- [ ] Navigation inter-services (tabs ou ancres smooth scroll)

**Critères d'acceptation :**
- URLs avec ancres fonctionnelles : `/services#ecommerce`
- Contenu structuré pour le SEO (H2, H3 bien balisés)

---

### 🏆 BLOC 4 — Page Réalisations

#### TICKET-013 — Page /realisations
**Priorité :** P1 — Haute  
**Type :** Page  
**Estimation :** 4h

**Description :**  
Portfolio complet des projets clients.

**Tâches :**
- [ ] Créer `/data/realisations.ts` avec tous les projets (Sephora, Kering, Renault, Lapeyre, Monoprix, Leclerc, Accor, Manutan...)
- [ ] Filtres par catégorie : E-commerce / Mobile / Cloud / Relation client
- [ ] Filtres animés (framer-motion layout animations)
- [ ] Card projet : visuel + client + mission + stack badges
- [ ] Modal ou page de détail par projet
- [ ] Compteur de projets filtré dynamique

**Critères d'acceptation :**
- Filtres fonctionnels sans rechargement de page
- Minimum 6 projets affichés

---

### 📝 BLOC 5 — Blog (nouveau)

#### TICKET-014 — Système de blog (MDX)
**Priorité :** P2 — Normale  
**Type :** Feature  
**Estimation :** 4h

**Description :**  
Créer un blog avec des articles MDX pour le content marketing et le SEO.

**Tâches :**
- [ ] Configurer `next-mdx-remote` ou `contentlayer`
- [ ] Créer le dossier `/content/blog/` avec 3 articles de démo
- [ ] Page liste `/blog` : grid de cards avec image + titre + date + tags
- [ ] Page article `/blog/[slug]` : layout propre avec table des matières
- [ ] Composants MDX custom : `CodeBlock`, `Callout`, `TechBadge`
- [ ] Balises Open Graph pour le partage social
- [ ] Articles de démo : "Top 5 des erreurs e-commerce B2B", "Migrer vers le cloud en 2025", "Comment l'IA transforme la relation client"

**Critères d'acceptation :**
- Génération statique (SSG) des articles
- Temps de lecture calculé automatiquement

---

### 📬 BLOC 6 — Contact & Formulaire

#### TICKET-015 — Page /contact
**Priorité :** P0 — Critique  
**Type :** Page  
**Estimation :** 3h

**Description :**  
Page de contact avec formulaire de qualification prospect.

**Tâches :**
- [ ] Formulaire multi-étapes (wizard) :
  - Étape 1 : Type de projet (E-commerce / App mobile / Cloud / Audit / Autre)
  - Étape 2 : Budget estimé + délai souhaité
  - Étape 3 : Coordonnées (Nom, Email, Téléphone, Entreprise)
- [ ] Validation avec `zod` + `react-hook-form`
- [ ] Barre de progression animée
- [ ] Envoi vers API Route Next.js → email via Resend ou Nodemailer
- [ ] Page de confirmation avec animation de succès
- [ ] Informations de contact : adresse, email, téléphone
- [ ] Carte intégrée (optionnel) ou illustration localisation Paris 9ème

**Critères d'acceptation :**
- Formulaire accessible (labels, aria, gestion d'erreurs)
- Email de confirmation envoyé à l'utilisateur
- Protection anti-spam (honeypot ou rate limiting)

---

### ⚙️ BLOC 7 — SEO & Performance

#### TICKET-016 — SEO technique
**Priorité :** P1 — Haute  
**Type :** Technique  
**Estimation :** 3h

**Description :**  
Mettre en place les bases SEO pour un bon référencement.

**Tâches :**
- [ ] Metadata dynamiques avec `generateMetadata` Next.js (title, description, OG)
- [ ] Sitemap.xml généré automatiquement (`/app/sitemap.ts`)
- [ ] Robots.txt
- [ ] Structured data JSON-LD : `Organization`, `WebSite`, `Service`
- [ ] Balises canonical sur toutes les pages
- [ ] Optimisation des images : WebP, lazy loading, size hints
- [ ] Vérifier Core Web Vitals : LCP < 2.5s, CLS < 0.1, FID < 100ms

**Critères d'acceptation :**
- Score Lighthouse SEO ≥ 95
- Score Lighthouse Performance ≥ 90

---

#### TICKET-017 — Animations & Accessibilité
**Priorité :** P2 — Normale  
**Type :** Technique  
**Estimation :** 2h

**Description :**  
S'assurer que toutes les animations respectent l'accessibilité.

**Tâches :**
- [ ] Implémenter `useReducedMotion` de framer-motion sur toutes les animations
- [ ] Vérifier le contraste des couleurs (WCAG AA minimum)
- [ ] Focus visible sur tous les éléments interactifs
- [ ] Navigation clavier complète (header, modals, formulaires)
- [ ] Attributs ARIA sur les composants complexes (carrousel, accordéon, tabs)
- [ ] Score Lighthouse Accessibility ≥ 90

**Critères d'acceptation :**
- Aucune animation si `prefers-reduced-motion: reduce`
- Contraste ≥ 4.5:1 sur tous les textes

---

## 📋 Récapitulatif des tickets

| # | Titre | Bloc | Priorité | Estimation |
|---|-------|------|----------|------------|
| 001 | Initialisation projet | Setup | P0 | 2h |
| 002 | Design System | UI | P0 | 4h |
| 003 | Layout Header/Footer | Layout | P0 | 3h |
| 004 | Section Hero | Home | P0 | 4h |
| 005 | Section Chiffres clés | Home | P1 | 2h |
| 006 | Section Services | Home | P0 | 3h |
| 007 | Section Logos clients | Home | P1 | 2h |
| 008 | Section Réalisations aperçu | Home | P1 | 3h |
| 009 | Section Témoignages | Home | P1 | 2h |
| 010 | Section Valeurs | Home | P2 | 2h |
| 011 | CTA finale Home | Home | P1 | 1h |
| 012 | Page /services | Services | P0 | 5h |
| 013 | Page /realisations | Portfolio | P1 | 4h |
| 014 | Système blog MDX | Blog | P2 | 4h |
| 015 | Page /contact | Contact | P0 | 3h |
| 016 | SEO technique | Tech | P1 | 3h |
| 017 | Animations & Accessibilité | Tech | P2 | 2h |
**Total estimé : ~49h de développement**

---

## 🚦 Ordre d'exécution recommandé pour l'agent IA

```
Phase 1 (Fondations)    : 001 → 002 → 003
Phase 2 (Home)          : 004 → 006 → 007 → 008 → 005 → 009 → 010 → 011
Phase 3 (Pages clés)    : 012 → 013 → 015
Phase 4 (SEO & qualité) : 016 → 017
Phase 5 (Blog)          : 014
```

---

*Document généré pour usage par agent IA de développement — chaque ticket est autonome et actionnable.*