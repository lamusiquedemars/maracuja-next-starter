export type SiteLink = {
  label: string;
  href: string;
};

export type SiteBrand = {
  label: string;
  href: string;
  logoSrc?: string;
  logoAlt?: string;
};

export type SiteConfig = {
  name: string;
  defaultLocale: string;
  brand: SiteBrand;
  navigation: SiteLink[];
  footer: {
    links: SiteLink[];
  };
};

export const siteConfig = {
  name: "Maracuja Starter",
  defaultLocale: "fr",
  brand: {
    label: "Maracuja Starter",
    href: "/",
  },
  navigation: [
    { label: "Accueil", href: "/" },
    { label: "Sections", href: "#sections" },
    { label: "Contact", href: "#contact" },
  ],
  footer: {
    links: [
      { label: "Documentation", href: "#sections" },
      { label: "Contact", href: "#contact" },
    ],
  },
} satisfies SiteConfig;
