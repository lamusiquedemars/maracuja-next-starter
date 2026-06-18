import type { ReactNode } from "react";
import clsx from "clsx";
import styles from "./SectionHeading.module.css";

type SectionHeadingProps = { title: string; subtitle?: string; action?: ReactNode; className?: string };

export default function SectionHeading({ title, subtitle, action, className }: SectionHeadingProps) {
  return <div className={clsx(styles.heading, className)}><div><h2>{title}</h2>{subtitle ? <p>{subtitle}</p> : null}</div>{action ? <div>{action}</div> : null}</div>;
}
