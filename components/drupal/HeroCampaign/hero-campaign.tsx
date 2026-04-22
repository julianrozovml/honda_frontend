import Image from "next/image";
import type { HeroCampaignProps } from "./hero-campaign.types";
import styles from "./HeroCampaign.module.scss";

export function HeroCampaign({
  title,
  description,
  image,
}: HeroCampaignProps) {
  return (
    <section className={styles.hero}>
      <div className={styles.background} aria-hidden="true" />

      <div className={styles.inner}>
        <div className={styles.content}>
          <h2 className={styles.title}>{title}</h2>
          <p className={styles.description}>{description}</p>
        </div>

        {/* Hidden on mobile via CSS (.imageWrapper has display:none until sm) */}
        <div className={styles.imageWrapper}>
          <Image
            src={image.src}
            alt={image.alt}
            fill
            className={styles.image}
            sizes="50vw"
            priority
          />
        </div>
      </div>
    </section>
  );
}
