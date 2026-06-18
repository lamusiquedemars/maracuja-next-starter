import type { EntryGridItem } from "@/components/blocks/EntryGrid/EntryGrid";
import type { CardGridItem } from "@/components/blocks/CardGrid/CardGrid";

type TextBlockContent = {
  title: string;
  text: string;
};

const entries: EntryGridItem[] = [
  {
    label: "Structure claire",
    href: "#sections",
    description: "Des routes fines, du contenu local et des composants faciles a retrouver.",
  },
  {
    label: "Styles lisibles",
    href: "#styles",
    description: "Des tokens globaux et des CSS Modules places avec les composants.",
  },
  {
    label: "Projet adaptable",
    href: "/catalogue",
    description: "Une page catalogue neutre montre comment gerer une liste sans backend impose.",
  },
];

const cards: CardGridItem[] = [
  {
    title: "Contenu",
    href: "#sections",
    description: "Les textes exemples vivent dans src/content.",
  },
  {
    title: "Composants",
    href: "#sections",
    description: "Les sections visibles vivent dans src/components/sections.",
  },
  {
    title: "Styles",
    href: "#styles",
    description: "Les fondations vivent dans src/styles, les details avec les composants.",
  },
];

export const homeContent = {
  hero: {
    title: "Un starter Next.js sobre et lisible.",
    subtitle: "Une base neutre pour demarrer un site sans logique metier imposee.",
    actions: [
      { label: "Voir la structure", href: "#sections" },
      { label: "Adapter le contenu", href: "#contact" },
      { label: "Voir le catalogue", href: "/catalogue" },
    ],
  },
  intro: {
    title: "Le code doit rester facile a trouver.",
    text: "Ce starter privilegie une architecture simple: le contenu dans content, les composants visibles dans components, et les integrations externes seulement quand le projet en a besoin.",
  } satisfies TextBlockContent,
  entries: {
    title: "Fondations",
    items: entries,
  },
  cards: {
    title: "Ou commencer",
    subtitle: "Trois endroits suffisent pour adapter la premiere page.",
    items: cards,
  },
  closing: {
    title: "Pret a personnaliser",
    text: "Remplacez les contenus exemples, ajustez les tokens, puis ajoutez uniquement les features necessaires au projet reel.",
  } satisfies TextBlockContent,
};

export type HomeContent = typeof homeContent;
