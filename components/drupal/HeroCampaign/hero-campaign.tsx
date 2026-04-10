import Image from "next/image";
import { getIsMobile } from "@/lib/device";
import type { HeroCampaignProps } from "./hero-campaign.types";
import styles from "./HeroCampaign.module.scss";

export async function HeroCampaign({
  title,
  description,
  image,
}: HeroCampaignProps) {
  const mobile = await getIsMobile();

  return (
    <section className={styles.hero}>
      <div className={styles.background} aria-hidden="true" />

      <div className={styles.inner}>
        <div className={styles.content}>
          <h2 className={styles.title}>{title}</h2>
          <p className={styles.description}>{description}</p>
        </div>

        {!mobile && (
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
        )}
      </div>
    </section>
  );
}
