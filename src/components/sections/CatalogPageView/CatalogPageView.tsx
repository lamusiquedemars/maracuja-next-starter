import PageHeader from "@/components/blocks/PageHeader/PageHeader";
import TextBlock from "@/components/blocks/TextBlock/TextBlock";
import Container from "@/components/layout/Container/Container";
import Section from "@/components/layout/Section/Section";
import Badge from "@/components/ui/Badge/Badge";
import Card from "@/components/ui/Card/Card";
import LinkButton from "@/components/ui/LinkButton/LinkButton";
import SectionHeading from "@/components/ui/SectionHeading/SectionHeading";
import type { CatalogContent } from "@/content/catalog";
import styles from "./CatalogPageView.module.css";

type CatalogPageViewProps = {
  content: CatalogContent;
};

/**
 * Starter catalogue page.
 * It renders local data only; project-specific CMS or shop logic belongs elsewhere.
 */
export default function CatalogPageView({ content }: CatalogPageViewProps) {
  return (
    <>
      <Section>
        <Container>
          <PageHeader {...content.header} />
        </Container>
      </Section>

      <Section background="soft">
        <Container>
          <TextBlock {...content.intro} />
        </Container>
      </Section>

      <Section>
        <Container>
          <SectionHeading
            title="Items exemples"
            subtitle="Modifiez src/content/catalog.ts pour remplacer ces cartes."
          />

          <div className={styles.grid}>
            {content.items.map((item) => (
              <Card key={item.href} className={styles.card}>
                <div className={styles.cardHeader}>
                  {item.tag ? <Badge variant="accent">{item.tag}</Badge> : null}
                  {item.price ? (
                    <span className={styles.price}>{item.price}</span>
                  ) : null}
                </div>

                <div className={styles.cardBody}>
                  <h2>{item.title}</h2>
                  <p>{item.description}</p>
                </div>

                <LinkButton href={item.href} variant="secondary">
                  Voir l&apos;exemple
                </LinkButton>
              </Card>
            ))}
          </div>
        </Container>
      </Section>
    </>
  );
}

