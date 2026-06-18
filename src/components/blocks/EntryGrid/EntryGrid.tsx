import LinkCard from "@/components/ui/LinkCard/LinkCard";
import styles from "./EntryGrid.module.css";

export type EntryGridItem = { label: string; href: string; description?: string };
type EntryGridProps = { items: EntryGridItem[] };

export default function EntryGrid({ items }: EntryGridProps) {
  return <div className={styles.grid}>{items.map((item) => <LinkCard key={item.href} title={item.label} href={item.href} description={item.description} />)}</div>;
}
