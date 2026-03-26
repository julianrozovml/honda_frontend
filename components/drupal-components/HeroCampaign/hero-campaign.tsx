import Image from "next/image";
import type { HeroCampaignProps } from "./hero-campaign.types";
import styles from "./HeroCampaign.module.scss";

export function HeroCampaign({ title, description, image }: HeroCampaignProps) {
  return (
    <section className={styles.hero}>
      {/* Background topographic pattern */}
      <div className={styles.background} aria-hidden="true" />

      <div className={styles.inner}>
        {/* Left — text content */}
        <div className={styles.content}>
          <h2 className={styles.title}>{title}</h2>
          <p className={styles.description}>{description}</p>
        </div>

        {/* Right — character image */}
        <div className={styles.imageWrapper}>
          <Image
            src={image.src}
            alt={image.alt}
            fill
            className={styles.image}
            sizes="(max-width: 768px) 100vw, 50vw"
            priority
          />
        </div>
      </div>
    </section>
  );
}
