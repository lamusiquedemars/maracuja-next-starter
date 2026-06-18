import type { ReactNode } from "react";
import Header from "@/components/layout/Header/Header";
import Footer from "@/components/layout/Footer/Footer";
import { siteConfig } from "@/config/site";
import "./globals.css";

type RootLayoutProps = {
  children: ReactNode;
};

export default function RootLayout({ children }: RootLayoutProps) {
  return (
    <html lang={siteConfig.defaultLocale}>
      <body>
        <Header navItems={siteConfig.navigation} brand={siteConfig.brand} />
        <main>{children}</main>
        <Footer brandLabel={siteConfig.brand.label} links={siteConfig.footer.links} />
      </body>
    </html>
  );
}
