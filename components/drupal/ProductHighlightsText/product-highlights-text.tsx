import type { ProductHighlightsTextProps } from "./product-highlights-text.types";
import Image from "next/image";
import styles from "./ProductHighlightsText.module.scss";

export default function ProductHighlightsText({
  text,
  className,
  iconAriaLabel = "Informacion destacada",
}: ProductHighlightsTextProps) {
  return (
    <section className={[styles.wrapper, className].filter(Boolean).join(" ")}>
      <Image
        src="/icons/icon_light.svg"
        alt={iconAriaLabel}
        width={18}
        height={18}
        className={styles.icon}
      />
      <p className={styles.text}>{text}</p>
    </section>
  );
}
