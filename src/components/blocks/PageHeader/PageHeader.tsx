import clsx from "clsx";
import styles from "./PageHeader.module.css";

type PageHeaderProps = {
  title: string;
  intro?: string;
  className?: string;
};

/**
 * Standard page introduction for inner pages.
 * Use Hero for the homepage or marketing-style first screens.
 */
export default function PageHeader({
  title,
  intro,
  className,
}: PageHeaderProps) {
  return (
    <header className={clsx(styles.pageHeader, className)}>
      <h1 className={styles.title}>{title}</h1>
      {intro ? <p className={styles.intro}>{intro}</p> : null}
    </header>
  );
}

