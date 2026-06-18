export type CatalogItem = {
  title: string;
  href: string;
  description: string;
  tag?: string;
  price?: string;
};

/**
 * Local catalogue example for starter projects.
 * Replace these items with products, services, projects or any repeatable offer.
 */
export const catalogContent = {
  header: {
    title: "Catalogue exemple",
    intro:
      "Une page neutre pour tester une liste d'offres sans WordPress, WooCommerce ou API obligatoire.",
  },
  intro: {
    title: "A quoi sert cette page ?",
    text: "Elle montre comment brancher une page de liste sur un contenu local simple. Dans un vrai projet, vous pouvez remplacer ce fichier par un appel CMS, une API ou une base de donnees.",
  },
  items: [
    {
      title: "Offre essentielle",
      href: "/catalogue/offre-essentielle",
      description:
        "Un item court pour verifier les cartes, les liens et la hierarchie typographique.",
      tag: "Base",
      price: "A partir de 49 €",
    },
    {
      title: "Offre avancee",
      href: "/catalogue/offre-avancee",
      description:
        "Un second item pour tester une grille avec plusieurs contenus.",
      tag: "Populaire",
      price: "A partir de 89 €",
    },
    {
      title: "Accompagnement",
      href: "/catalogue/accompagnement",
      description:
        "Un exemple d'offre de service, utile si le site n'est pas e-commerce.",
      tag: "Service",
    },
  ] satisfies CatalogItem[],
};

export type CatalogContent = typeof catalogContent;

