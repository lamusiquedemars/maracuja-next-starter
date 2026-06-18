import Hero from "@/components/blocks/Hero/Hero";
import TextBlock from "@/components/blocks/TextBlock/TextBlock";
import EntryGrid from "@/components/blocks/EntryGrid/EntryGrid";
import CardGrid from "@/components/blocks/CardGrid/CardGrid";
import Container from "@/components/layout/Container/Container";
import Section from "@/components/layout/Section/Section";
import SectionHeading from "@/components/ui/SectionHeading/SectionHeading";
import type { HomeContent } from "@/content/home";

type HomePageViewProps = { content: HomeContent };

export default function HomePageView({ content }: HomePageViewProps) {
  return <><Hero {...content.hero} /><Section><Container><TextBlock {...content.intro} /></Container></Section><Section id="sections" background="soft"><Container><SectionHeading title={content.entries.title} /><EntryGrid items={content.entries.items} /></Container></Section><Section id="styles"><Container><SectionHeading title={content.cards.title} subtitle={content.cards.subtitle} /><CardGrid items={content.cards.items} /></Container></Section><Section id="contact" background="soft"><Container><TextBlock {...content.closing} /></Container></Section></>;
}
