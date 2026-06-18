import clsx from "clsx";
import type { ReactNode } from "react";
import styles from "./Badge.module.css";

type BadgeProps = {
  children: ReactNode;
  variant?: "default" | "accent" | "success";
  size?: "sm" | "md";
  className?: string;
};

/**
 * Small status label for metadata, categories, stock states or editorial tags.
 */
export default function Badge({
  children,
  variant = "default",
  size = "sm",
  className,
}: BadgeProps) {
  return (
    <span
      className={clsx(
        styles.badge,
        styles[variant],
        styles[size],
        className
      )}
    >
      {children}
    </span>
  );
}

