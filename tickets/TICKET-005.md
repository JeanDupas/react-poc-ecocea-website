# TICKET-005 — Section Chiffres Clés

**Bloc :** 🏠 BLOC 2 — Page d'accueil  
**Priorité :** P1 — Haute  
**Type :** Section  
**Estimation :** 2h  
**Phase :** Phase 2 — Home

---

## Description

Afficher les KPIs de l'entreprise avec des compteurs animés qui se déclenchent à l'entrée dans le viewport.

---

## Données à afficher

| Icône | Valeur | Libellé |
|-------|--------|---------|
| `Clock` | 15+ | années d'expérience |
| `CheckCircle` | 50+ | projets livrés |
| `Users` | 20+ | clients grands comptes |
| `Star` | 100% | projets maintenus |

---

## Tâches

### `hooks/useCountUp.ts`

```typescript
interface UseCountUpOptions {
  end: number;
  duration?: number; // ms, default 2000
  startOnView?: boolean;
}
```

- [x] Utiliser `IntersectionObserver` pour détecter l'entrée dans le viewport
- [x] Animer la valeur de 0 vers `end` via `requestAnimationFrame`
- [x] Le compteur se déclenche **une seule fois** (observer déconnecté après déclenchement)
- [x] Easing : `easeOutCubic` pour un effet naturel
- [x] Respecter `prefers-reduced-motion` : si réduit, afficher directement la valeur finale

### `components/sections/home/StatsSection.tsx`
- [x] Fond clair `bg-light-bg` (alternance avec sections sombres)
- [x] Grille 4 colonnes desktop → 2x2 tablette → 1 colonne mobile
- [x] Chaque stat : icône Lucide + compteur `useCountUp` + suffixe (`+`, `%`) + libellé
- [x] Animation d'entrée en cascade (stagger de 150ms entre chaque stat) avec `framer-motion`
- [x] La section entière entre depuis le bas au scroll

---

## Critères d'acceptation

- [x] Les compteurs se déclenchent exactement une fois à l'entrée dans le viewport
- [x] Le suffixe (`+`, `%`) apparaît immédiatement avec le compteur
- [x] Lisible sur tous les breakpoints
- [x] Si `prefers-reduced-motion`, les valeurs finales s'affichent directement sans animation

---

## Dépendances

- TICKET-001 (hooks/, Lucide installé)
- TICKET-002 (SectionTitle)

## Tickets suivants

- Aucun ticket bloquant — peut être fait en parallèle avec TICKET-006 à 011
