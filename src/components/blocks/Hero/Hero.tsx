import clsx from "clsx";
import LinkButton from "@/components/ui/LinkButton/LinkButton";
import styles from "./Hero.module.css";

type HeroAction = {
  label: string;
  href: string;
};

type HeroProps = {
  title: string;
  subtitle?: string;
  actions?: HeroAction[];
  className?: string;
};

/**
 * First-screen editorial hero. Content comes from src/content/home.ts.
 */
export default function Hero({
  title,
  subtitle,
  actions = [],
  className,
}: HeroProps) {
  return (
    <section className={clsx(styles.hero, className)}>
      <div className={styles.inner}>
        <h1>{title}</h1>
        {subtitle ? <p>{subtitle}</p> : null}

        {actions.length > 0 ? (
          <div className={styles.actions}>
            {actions.map((action) => (
              <LinkButton key={action.href} href={action.href}>
                {action.label}
              </LinkButton>
            ))}
          </div>
        ) : null}
      </div>
    </section>
  );
}

