# TICKET-015 — Page /contact

**Bloc :** 📬 BLOC 6 — Contact & Formulaire  
**Priorité :** P0 — Critique  
**Type :** Page  
**Estimation :** 3h  
**Phase :** Phase 3 — Pages clés

---

## Description

Page de contact avec formulaire de qualification multi-étapes (wizard) permettant de qualifier les prospects avant l'envoi. Envoi d'email via service tiers (compatible GitHub Pages).

---

## Service d'envoi d'email

> ⚠️ GitHub Pages est 100% statique — pas d'API Routes Next.js à runtime.  
> **Solution choisie : [Formspree](https://formspree.io)** (freemium, pas de backend requis)  
> Alternative : EmailJS, Getform  
> Configurer via variable d'environnement : `NEXT_PUBLIC_FORMSPREE_ID`

---

## Tâches

### `app/contact/page.tsx`
- [x] `generateMetadata` : title "Contactez-nous | Ecocea Technologies"
- [x] Layout 2 colonnes desktop : formulaire (60%) + infos contact (40%)
- [x] Mobile : colonne unique

### Formulaire multi-étapes (Wizard)

Barre de progression animée en haut (3 étapes).

**Étape 1 — Type de projet**
- [x] Boutons sélecteur (radio visuels) :
  - [x] 🛒 E-commerce
  - [x] 📱 Application mobile
  - [x] ☁️ Infrastructure Cloud
  - [x] 🔧 Audit / TMA
  - [x] ✨ Autre
- [x] Chaque option : icône + label + description courte
- [x] Animation de sélection (border accent + scale)

**Étape 2 — Budget & Délais**
- [x] Budget estimé (slider ou radio) : < 20k€ / 20-50k€ / 50-100k€ / > 100k€
- [x] Délai souhaité : ASAP / 1-3 mois / 3-6 mois / Flexible
- [x] Champ texte : "Décrivez votre projet en quelques mots"

**Étape 3 — Coordonnées**
- [x] Prénom + Nom (required)
- [x] Email professionnel (required, validation format)
- [x] Téléphone (optionnel, format FR)
- [x] Entreprise (required)
- [x] Champ honeypot caché (anti-spam) : `<input name="_gotcha" style="display:none" />`

### Validation (`react-hook-form` + `zod`)
- [x] Schéma Zod par étape
- [x] Validation au blur et au submit
- [x] Messages d'erreur accessibles (aria-describedby)

### Envoi vers Formspree
- [x] POST vers `https://formspree.io/f/{NEXT_PUBLIC_FORMSPREE_ID}`
- [x] Headers `Accept: application/json`
- [x] Rate limiting natif Formspree

### Page de confirmation
- [x] Animation de succès (checkmark animé SVG ou Lottie)
- [x] Texte : "Merci ! Nous vous recontacterons sous 24h ouvrées."
- [x] Bouton retour home

### Colonne infos contact
- [x] Adresse : Paris 9ème
- [x] Email cliquable (mailto:)
- [x] Téléphone cliquable (tel:)
- [x] Horaires : Lun-Ven 9h-18h
- [x] Liens réseaux sociaux (LinkedIn)

---

## Critères d'acceptation

- [x] Wizard 3 étapes fonctionnel avec navigation avant/arrière
- [x] Validation zod fonctionnelle avec messages d'erreur
- [x] Envoi via Formspree fonctionne (test avec vraie requête)
- [x] Honeypot anti-spam présent
- [x] Accessible : labels, aria, gestion focus entre étapes
- [x] Email de confirmation Formspree configuré côté dashboard (À faire par l'admin)

---

## Dépendances

- TICKET-001 (react-hook-form, zod installés)
- TICKET-002 (Button, Card)
- TICKET-003 (layout)
