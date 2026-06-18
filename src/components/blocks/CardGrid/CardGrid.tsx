import LinkCard from "@/components/ui/LinkCard/LinkCard";
import styles from "./CardGrid.module.css";

export type CardGridItem = { title: string; href: string; description?: string };
type CardGridProps = { items: CardGridItem[] };

export default function CardGrid({ items }: CardGridProps) {
  return <div className={styles.grid}>{items.map((item) => <LinkCard key={item.href} {...item} />)}</div>;
}
