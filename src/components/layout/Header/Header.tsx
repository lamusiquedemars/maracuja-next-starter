import Link from "next/link";
import clsx from "clsx";
import MainNav, { type NavItem } from "../MainNav/MainNav";
import styles from "./Header.module.css";

type HeaderProps = { navItems: NavItem[]; brand: { label: string; href: string }; className?: string };

export default function Header({ navItems, brand, className }: HeaderProps) {
  return <header className={clsx(styles.header, className)}><div className={styles.inner}><Link href={brand.href} className={styles.brand}>{brand.label}</Link><MainNav items={navItems} /></div></header>;
}
