import clsx from "clsx";
import type { ReactNode } from "react";
import styles from "./Card.module.css";

type CardProps = {
  children: ReactNode;
  className?: string;
};

/**
 * Neutral content surface. Keep it generic; domain-specific cards should wrap it.
 */
export default function Card({ children, className }: CardProps) {
  return <div className={clsx(styles.card, className)}>{children}</div>;
}

