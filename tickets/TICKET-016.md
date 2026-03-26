# TICKET-016 — SEO Technique

**Bloc :** ⚙️ BLOC 7 — SEO & Performance  
**Priorité :** P1 — Haute  
**Type :** Technique  
**Estimation :** 3h  
**Phase :** Phase 4 — SEO & Qualité

---

## Description

Mettre en place toutes les bases SEO technique pour garantir un bon référencement naturel et des scores Lighthouse élevés.

---

## Tâches

### Metadata dynamiques (`app/*/page.tsx`)
- [ ] Chaque page implémente `generateMetadata` :
  ```typescript
  export async function generateMetadata(): Promise<Metadata> {
    return {
      title: 'Titre Page | Ecocea Technologies',
      description: '...',
      openGraph: {
        title: '...',
        description: '...',
        url: 'https://username.github.io/react-poc-ecocea-website/',
        siteName: 'Ecocea Technologies',
        images: [{ url: '/og-image.jpg', width: 1200, height: 630 }],
      },
      twitter: { card: 'summary_large_image' },
    }
  }
  ```
- [ ] Image OG par défaut : générer `/public/og-image.jpg` (1200x630)

### `app/sitemap.ts`
- [ ] Générer sitemap XML automatiquement avec toutes les routes :
  ```typescript
  export default function sitemap(): MetadataRoute.Sitemap {
    return [
      { url: 'https://username.github.io/react-poc-ecocea-website/', lastModified: new Date() },
      { url: '.../services', ... },
      // + routes blog depuis contentlayer
    ]
  }
  ```

### `app/robots.ts`
```typescript
export default function robots(): MetadataRoute.Robots {
  return {
    rules: { userAgent: '*', allow: '/' },
    sitemap: 'https://username.github.io/react-poc-ecocea-website/sitemap.xml',
  }
}
```

### Structured Data JSON-LD
- [ ] `Organization` : nom, adresse Paris 9ème, logo, url, sameAs LinkedIn
- [ ] `WebSite` : nom, url, searchAction (optionnel)
- [ ] `Service` (une occurrence par service) sur la page /services
- Injecter via composant `<JsonLd>` dans le `<head>` (next/script ou dangerouslySetInnerHTML)

### Balises canonical
- [ ] `<link rel="canonical" href="..." />` sur toutes les pages (via metadata.alternates.canonical)

### Optimisation des images
- [ ] Vérifier que toutes les `<Image />` Next.js ont `width`, `height`, `alt`
- [ ] Format WebP automatique via Next.js Image (avec `unoptimized: true` en export statique, utiliser des images déjà en WebP)
- [ ] `loading="lazy"` sur les images hors viewport
- [ ] `priority` sur les images LCP (hero)

---

## Cibles Lighthouse

| Métrique | Objectif |
|----------|----------|
| Performance | ≥ 90 |
| SEO | ≥ 95 |
| Accessibility | ≥ 90 |
| Best Practices | ≥ 95 |
| LCP | < 2.5s |
| CLS | < 0.1 |
| FID/INP | < 100ms |

---

## Critères d'acceptation

- [ ] `npm run build` produit sitemap.xml et robots.txt dans `/out`
- [ ] Score Lighthouse SEO ≥ 95
- [ ] Score Lighthouse Performance ≥ 90
- [ ] Metadata OG vérifiables avec [opengraph.xyz](https://www.opengraph.xyz)
- [ ] JSON-LD validé avec [schema.org validator](https://validator.schema.org)

---

## Dépendances

- TICKET-001 à 015 (toutes les pages doivent exister pour les métadonnées)

## Tickets suivants

- TICKET-017 (Accessibilité)
