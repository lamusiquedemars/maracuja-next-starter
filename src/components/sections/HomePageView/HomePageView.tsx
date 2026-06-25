import EntryGrid from "@/components/blocks/EntryGrid/EntryGrid";
import Hero from "@/components/blocks/Hero/Hero";
import TextBlock from "@/components/blocks/TextBlock/TextBlock";
import Container from "@/components/layout/Container/Container";
import Section from "@/components/layout/Section/Section";
import SectionHeading from "@/components/ui/SectionHeading/SectionHeading";
import type { HomeContent } from "@/content/home";

type HomePageViewProps = {
  content: HomeContent;
};

/**
 * Assembles the homepage from reusable blocks and local content.
 * Edit texts in src/content/home.ts; edit layout rhythm in the child components.
 */
export default function HomePageView({ content }: HomePageViewProps) {
  return (
    <>
      <Hero {...content.hero} />

      <Section>
        <Container>
          <TextBlock {...content.intro} />
        </Container>
      </Section>

      <Section id="sections" background="soft">
        <Container>
          <SectionHeading title={content.entries.title} />
          <EntryGrid items={content.entries.items} />
        </Container>
      </Section>

      <Section id="styles">
        <Container>
          <SectionHeading
            title={content.cards.title}
            subtitle={content.cards.subtitle}
          />
          <EntryGrid items={content.cards.items} />
        </Container>
      </Section>

      <Section id="contact" background="soft">
        <Container>
          <TextBlock {...content.closing} />
        </Container>
      </Section>
    </>
  );
}
