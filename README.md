# Maracuja Next Starter

Starter Next.js minimal pour creer un site editorial ou vitrine avec une architecture lisible.

## Objectif

Le starter garde uniquement les fondations reutilisables:

- App Router Next.js;
- layout global;
- composants UI simples et commentes;
- sections generiques;
- contenu local clair;
- styles globaux + CSS Modules.

Il ne contient pas de logique WooCommerce, WordPress, panier, catalogue metier ou contenu client specifique.

## Structure

```txt
src/
  app/          routes Next
  components/   layout, UI et blocs reutilisables
  content/      textes et configuration du site exemple
  config/       point d'entree de configuration
  lib/          helpers generiques
  styles/       tokens et styles partages
```

## Installation

```bash
npm install
npm run dev
```

## Ou Modifier Quoi

- Navigation, nom du site, footer: `src/content/site.ts`
- Textes de la home: `src/content/home.ts`
- Couleurs, typos, espacements: `src/styles/tokens.css`
- Layout global: `src/app/layout.tsx`
- Sections de la home: `src/components/sections/HomePageView/HomePageView.tsx`
- Boutons, badges, cards, fil d'Ariane: `src/components/ui/`
- Headers de page et blocs reutilisables: `src/components/blocks/`

## Adapter Pour Un Projet

1. Modifier `package.json`.
2. Adapter `src/content/site.ts`.
3. Adapter `src/content/home.ts`.
4. Remplacer les couleurs et typos dans `src/styles/tokens.css`.
5. Ajouter les sections specifiques dans `src/components/sections`.
6. Ajouter les integrations externes dans `src/integrations` seulement si le projet en a besoin.

## Convention De Commentaires

Le starter documente surtout les intentions:

- un commentaire court au-dessus des composants exportes;
- pas de roman dans le CSS;
- commentaires seulement quand ils aident a choisir le bon composant ou comprendre une decision.
