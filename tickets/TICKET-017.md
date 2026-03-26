# TICKET-017 — Animations & Accessibilité

**Bloc :** ⚙️ BLOC 7 — SEO & Performance  
**Priorité :** P2 — Normale  
**Type :** Technique  
**Estimation :** 2h  
**Phase :** Phase 4 — SEO & Qualité

---

## Description

Audit final d'accessibilité et mise en conformité de toutes les animations selon `prefers-reduced-motion`. Ce ticket est un ticket de qualité transversal.

---

## Tâches

### `hooks/useReducedMotion.ts`
```typescript
export function useReducedMotion(): boolean {
  const [prefersReduced, setPrefersReduced] = useState(false);
  useEffect(() => {
    const mq = window.matchMedia('(prefers-reduced-motion: reduce)');
    setPrefersReduced(mq.matches);
    const handler = (e: MediaQueryListEvent) => setPrefersReduced(e.matches);
    mq.addEventListener('change', handler);
    return () => mq.removeEventListener('change', handler);
  }, []);
  return prefersReduced;
}
```

### Animations framer-motion
- [ ] Utiliser `useReducedMotion()` de framer-motion sur **toutes** les animations :
  ```tsx
  const prefersReduced = useReducedMotion();
  <motion.div animate={prefersReduced ? {} : { y: 0, opacity: 1 }} />
  ```
- [ ] Composants concernés : HeroSection, StatsSection, ServicesPreview, ClientsSection, RealisationsPreview, TestimonialsSection, ValuesSection, CtaSection
- [ ] Marquee CSS clients : `animation: none` si `@media (prefers-reduced-motion: reduce)`
- [ ] Auto-play testimonials : désactivé si `prefers-reduced-motion`

### Contraste des couleurs (WCAG AA)
- [ ] Vérifier tous les couples texte/fond avec [webaim.org contrast checker](https://webaim.org/resources/contrastchecker/)
- [ ] Ratio minimum : **4.5:1** pour le texte normal, **3:1** pour le texte large
- [ ] `#F4F7FA` sur `#0D1B2A` : ✅ (ratio ~19:1)
- [ ] `#00F5A0` (accent) sur `#0D1B2A` : vérifier — si insuffisant, assombrir légèrement pour le texte
- [ ] `#6B7280` sur `#FFFFFF` : ~4.6:1 ✅

### Focus visible
- [ ] Vérifier que **tous** les éléments `<a>`, `<button>`, `<input>` ont un outline/ring visible au focus
- [ ] Utiliser `focus-visible:ring-2 focus-visible:ring-accent` de Tailwind
- [ ] Ne jamais faire `outline: none` sans alternative visible

### Navigation clavier complète
- [ ] Header : Tab entre liens, Escape ferme le menu mobile
- [ ] Modal réalisations : focus piégé dans la modal, Escape ferme
- [ ] Accordion FAQ : Enter/Space pour ouvrir/fermer
- [ ] Carrousel testimonials : flèches → navigation, focus visible sur les dots
- [ ] Formulaire contact : Tab entre champs, focus conservé entre étapes

### Attributs ARIA
- [ ] Carrousel : `role="region"`, `aria-label="Témoignages"`, `aria-live="polite"`
- [ ] Accordéon : `aria-expanded`, `aria-controls` (géré par Radix)
- [ ] Tabs : `role="tablist"`, `role="tab"`, `aria-selected` (géré par Radix)
- [ ] Modal : `role="dialog"`, `aria-labelledby`, `aria-modal="true"` (géré par Radix)
- [ ] Logo loader : `aria-hidden="true"` sur les icônes décoratives

---

## Audit final

- [ ] Lighthouse Accessibility ≥ 90 sur chaque page
- [ ] [axe DevTools](https://www.deque.com/axe/) : 0 violation critique
- [ ] Test navigation clavier complet (Tab, Shift+Tab, Enter, Escape, Space)
- [ ] Test avec screen reader (macOS VoiceOver) sur les composants complexes

---

## Critères d'acceptation

- [ ] Aucune animation si `prefers-reduced-motion: reduce`
- [ ] Contraste ≥ 4.5:1 sur tous les textes (validé webaim)
- [ ] Score Lighthouse Accessibility ≥ 90
- [ ] Navigation clavier complète et intuitive

---

## Dépendances

- Tous les tickets de TICKET-001 à TICKET-016 complétés

## Tickets suivants

- Fin du projet 🎉 — prêt pour la mise en production GitHub Pages
