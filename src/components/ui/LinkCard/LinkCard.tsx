import Link from "next/link";
import clsx from "clsx";
import styles from "./LinkCard.module.css";

export type LinkCardProps = { title: string; href: string; description?: string; className?: string };

export default function LinkCard({ title, href, description, className }: LinkCardProps) {
  return <Link href={href} className={clsx(styles.card, className)}><h3>{title}</h3>{description ? <p>{description}</p> : null}</Link>;
}
