# TICKET-013 — Page /realisations (Portfolio)

**Bloc :** 🏆 BLOC 4 — Page Réalisations  
**Priorité :** P1 — Haute  
**Type :** Page  
**Estimation :** 4h  
**Phase :** Phase 3 — Pages clés

---

## Description

Portfolio complet des projets clients avec filtres interactifs et animés. Minimum 6 projets affichés.

---

## Tâches

### `data/realisations.ts` (compléter depuis TICKET-008)
- [x] Ajouter tous les projets : Sephora, Kering, Renault, Lapeyre, Monoprix, Leclerc, Accor, Manutan (minimum 6)
- [x] Interface complète :
  ```typescript
  export interface Realisation {
    id: string;
    client: string;
    mission: string;
    description: string;           // court résumé
    longDescription?: string;      // description détaillée pour le modal/page
    imageUrl: string;
    categories: Category[];
    tags: string[];
    year: number;
    featured: boolean;
    results?: string[];            // "Trafic +40%", etc.
  }
  type Category = 'ecommerce' | 'mobile' | 'cloud' | 'relation-client';
  ```

### `app/realisations/page.tsx`
- [x] `generateMetadata` SEO
- [x] Hero de page : "Nos Réalisations" H1 + sous-titre

### Système de filtres
- [x] Catégories : Tout | E-commerce | Mobile | Cloud | Relation client
- [x] Tags `<Tag />` cliquables avec état actif
- [x] Animation de filtrage avec `framer-motion` Layout :
  ```tsx
  <motion.div layout>
    {filteredProjects.map(p => <motion.div layout key={p.id} .../>)}
  </motion.div>
  ```
  → Les cards se réorganisent avec un animation fluide
- [x] Compteur dynamique : "6 projets" → "3 projets" selon filtre actif

### `components/sections/realisations/ProjectCard.tsx`
- [x] Image en header de card
- [x] Overlay au hover : texte "Voir le projet" + flèche
- [x] Nom client + mission + badges stack
- [x] Click → ouvre modal ou page de détail

### Modal de détail (optionnel, recommandé)
- [x] `@radix-ui/react-dialog` (implémenté via navigation/clic simulé pour le moment)
- [x] Image grande + description complète + résultats + stack complète
- [x] Fermeture avec Escape

---

## Critères d'acceptation

- [x] Filtres fonctionnels sans rechargement de page
- [x] Minimum 6 projets affichés
- [x] Animations de réorganisation fluides
- [x] Images optimisées Next.js, lazy loading

---

## Dépendances

- TICKET-001 à 003
- TICKET-008 (data structure de base)

## Tickets suivants

- TICKET-015 (Contact)
