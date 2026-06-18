import Container from "@/components/layout/Container/Container";
import Section from "@/components/layout/Section/Section";
import LinkButton from "@/components/ui/LinkButton/LinkButton";

export default function NotFound() {
  return (
    <Section>
      <Container>
        <h1>Page introuvable</h1>
        <p>La page demandee n&apos;existe pas ou a ete deplacee.</p>
        <LinkButton href="/">Retour a l&apos;accueil</LinkButton>
      </Container>
    </Section>
  );
}
