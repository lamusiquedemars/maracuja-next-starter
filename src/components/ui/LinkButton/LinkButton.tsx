import clsx from "clsx";
import Link from "next/link";
import type { ReactNode } from "react";
import styles from "./LinkButton.module.css";

type LinkButtonProps = {
  href: string;
  children: ReactNode;
  variant?: "primary" | "secondary";
  className?: string;
};

/**
 * Button-styled link for navigation. For form submits, use Button instead.
 */
export default function LinkButton({
  href,
  children,
  variant = "primary",
  className,
}: LinkButtonProps) {
  return (
    <Link
      href={href}
      className={clsx(styles.linkButton, styles[variant], className)}
    >
      {children}
    </Link>
  );
}

