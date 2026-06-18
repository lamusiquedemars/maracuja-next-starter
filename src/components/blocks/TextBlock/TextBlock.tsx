import styles from "./TextBlock.module.css";

type TextBlockProps = { title: string; text: string };

export default function TextBlock({ title, text }: TextBlockProps) {
  return <div className={styles.textBlock}><h2>{title}</h2><p>{text}</p></div>;
}
