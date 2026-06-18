import type { ReactNode } from "react";
import clsx from "clsx";
import styles from "./Section.module.css";

type SectionProps = { children: ReactNode; id?: string; className?: string; background?: "default" | "soft" };

export default function Section({ children, id, className, background = "default" }: SectionProps) {
  return <section id={id} className={clsx(styles.section, styles[background], className)}>{children}</section>;
}
