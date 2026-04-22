import Image from "next/image";
import type { CardProductCampaignProps } from "./card-product-campaign.types";
import styles from "./CardProductCampaign.module.scss";
import IconShare from "@/components/ui/Icons/Social/IconShare/IconShare";

export default function CardProductCampaign({
  date,
  title,
  imageSrc,
  imageAlt,
  productName,
  models,
  description,
  onShare,
}: CardProductCampaignProps) {
  return (
    <article className={styles.card}>
      <header className={styles.header}>
        <div className={styles.headerTop}>
          <span className={styles.date}>{date}</span>
        </div>
        <h3 className={styles.title}>{title}</h3>
      </header>

      <div className={styles.imageWrapper}>
        <Image
          src={imageSrc}
          alt={imageAlt}
          width={300}
          height={200}
          className={styles.image}
        />
      </div>

      <h4 className={styles.productName}>{productName}</h4>

      <div className={styles.modelsBox}>
        <p className={styles.modelsText}>
          Modelos:{" "}
          <strong className={styles.modelsValues}>{models.join(", ")}</strong>
        </p>
      </div>

      <p className={styles.description}>{description}</p>

      <footer className={styles.footer}>
        <button
          type="button"
          className={styles.shareBtn}
          onClick={onShare}
          aria-label="Compartir campaña"
        >
          <IconShare size={24} />
        </button>
      </footer>
    </article>
  );
}
