# TICKET-014 — Système de Blog (MDX)

**Bloc :** 📝 BLOC 5 — Blog  
**Priorité :** P2 — Normale  
**Type :** Feature  
**Estimation :** 4h  
**Phase :** Phase 5 — Blog (dernière)

---

## Description

Créer un blog statique avec articles MDX pour le content marketing et le SEO longue traîne. Génération statique (SSG) obligatoire pour GitHub Pages.

---

## Tâches

### Configuration

- [x] Installer et configurer `contentlayer2` (fork maintenu de contentlayer)
- [x] Configurer `contentlayer.config.ts` :
  ```typescript
  export const Post = defineDocumentType(() => ({
    name: 'Post',
    filePathPattern: 'blog/**/*.mdx',
    contentType: 'mdx',
    fields: {
      title: { type: 'string', required: true },
      date: { type: 'date', required: true },
      description: { type: 'string', required: true },
      tags: { type: 'list', of: { type: 'string' } },
      imageUrl: { type: 'string' },
    },
    computedFields: {
      slug: { type: 'string', resolve: doc => doc._raw.flattenedPath.replace('blog/', '') },
      readingTime: { type: 'number', resolve: doc => computeReadingTime(doc.body.raw) },
    },
  }))
  ```

### Articles de démo (`content/blog/`)

- [x] `top-5-erreurs-ecommerce-b2b.mdx`
- [x] `migrer-vers-le-cloud-en-2025.mdx`
- [x] `comment-ia-transforme-relation-client.mdx`

Chaque article : ~800 mots, frontmatter complet (title, date, description, tags, imageUrl)

### `app/blog/page.tsx` — Liste des articles
- [x] `generateMetadata` SEO
- [x] Grille de cards articles :
  - [x] Image de couverture
  - [x] Tags (Tag component)
  - [x] Titre H2
  - [x] Date formatée + temps de lecture calculé
  - [x] Description courte
  - [x] Lien "Lire l'article →"

### `app/blog/[slug]/page.tsx` — Article individuel
- [x] `generateStaticParams` (SSG obligatoire pour GitHub Pages)
- [x] `generateMetadata` dynamique (OG title, description, image)
- [x] Layout article : sidebar optionnelle avec table des matières
- [x] Balises Open Graph pour partage social (og:title, og:description, og:image)
- [x] Navigation prev/next article

### Composants MDX Custom (`components/mdx/`)
- [x] `CodeBlock.tsx` (via styles par défaut)
- [x] `Callout.tsx` (via blockquote styling)
- [x] `TechBadge.tsx` : badge inline pour mentionner une techno en MDX

---

## Critères d'acceptation

- [x] `npm run build` génère les pages blog de façon statique (SSG)
- [x] `generateStaticParams` retourne bien tous les slugs
- [x] Temps de lecture calculé automatiquement et affiché
- [x] Open Graph tags présents sur chaque article (vérifiable avec og:debugger)
- [x] Syntaxe highlighting fonctionnelle dans les articles

---

## Dépendances

- TICKET-001, 002, 003
- TICKET-016 doit être lancé en parallèle pour les balises SEO

## Notes

> ⚠️ Contentlayer s'intègre dans `next.config.js` via `withContentlayer()`. Attention à la compatibilité avec `output: 'export'`.
