# TICKET-012 — Page /services

**Bloc :** 🛠️ BLOC 3 — Page Services  
**Priorité :** P0 — Critique  
**Type :** Page  
**Estimation :** 5h  
**Phase :** Phase 3 — Pages clés

---

## Description

Page détaillée des 4 offres de service. SEO important (H2/H3 bien balisés, urls avec anchres).

---

## URL

`/services` avec anchres `#ecommerce`, `#sur-mesure`, `#cloud`, `#tma`

---

## Tâches

### `app/services/page.tsx`
- [x] `generateMetadata` : title "Nos Services | Ecocea Technologies", description SEO
- [x] Composant `<ServicesPage />`

### Hero de page
- [x] Fond semi-sombre avec illustration tech en décoration
- [x] Titre H1 : "Nos Expertises"
- [x] Sous-titre + breadcrumb : Accueil > Services
- [x] Tabs ou ancres smooth-scroll pour naviguer entre services

### Sections par service (réutiliser données `data/services.ts`)

Pour chaque service, une section avec ancre :

**Section #ecommerce**
- [x] Alternance image gauche / texte droite
- [x] Titre H2, description complète (3-4 paragraphes)
- [x] Sous-services listés (points avec icône check) :
  - [x] Magento, HCL Commerce, Salesforce Commerce Cloud
  - [x] Intégration PIM/ERP, Mobile commerce, Performance & scalabilité
- [x] Badges stack technique (Badge)
- [x] CTA "Discuter de mon projet e-commerce" → `/contact`

**Section #sur-mesure**
- [x] Alternance texte gauche / image droite
- [x] Java, ReactJS, React Native, PostgreSQL, microservices
- [x] Sous-services : Applications web, Apps mobiles, Relation client, APIs

**Section #cloud**  
- [x] AWS, Azure, GCP — logos partenaires cloud
- [x] Sous-services : Migration cloud, DevSecOps, CI/CD, Monitoring

**Section #tma**
- [x] Audit de performance, reprise de maintenance, corrective/évolutive
- [x] Process de reprise en 3 étapes illustré

### Accordéon FAQ par service
- [x] Utiliser `@radix-ui/react-accordion`
- [x] 3-4 questions par service (ex: "Quel est votre délai de mise en production ?")

### Navigation inter-services
- [x] Tabs horizontaux cliquables → scroll smooth vers l'anchor
- [x] Sticky sidebar optionnelle sur desktop avec liens actifs

---

## Critères d'acceptation

- [x] URLs avec ancres fonctionnelles : `/services#ecommerce`
- [x] Contenu structuré SEO : 1 H1, H2 par service, H3 pour sous-sections
- [x] FAQ accordion accessible (aria-expanded, keyboard)
- [x] Responsive

---

## Dépendances

- TICKET-001 à 003 (fondations + layout)
- TICKET-006 (données services)

## Tickets suivants

- TICKET-013 (Portfolio)
- TICKET-015 (Contact)
