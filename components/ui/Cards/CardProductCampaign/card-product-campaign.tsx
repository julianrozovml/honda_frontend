import Image from "next/image";
import type { CardProductCampaignProps } from "./card-product-campaign.types";
import styles from "./CardProductCampaign.module.scss";

function ShareIcon() {
  return (
    <svg
      width="22"
      height="22"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
    >
      <circle cx="18" cy="5" r="3" />
      <circle cx="6" cy="12" r="3" />
      <circle cx="18" cy="19" r="3" />
      <line x1="8.59" y1="13.51" x2="15.42" y2="17.49" />
      <line x1="15.41" y1="6.51" x2="8.59" y2="10.49" />
    </svg>
  );
}

export default function CardProductCampaign({
  date,
  title,
  imageSrc,
  imageAlt,
  productName,
  models,
  onShare,
}: CardProductCampaignProps) {
  return (
    <article className={styles.card}>
      <header className={styles.header}>
        <h3 className={styles.title}>{title}</h3>
        <span className={styles.date}>{date}</span>
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

      <footer className={styles.footer}>
        <button
          type="button"
          className={styles.shareBtn}
          onClick={onShare}
          aria-label="Compartir campaña"
        >
          <ShareIcon />
        </button>
      </footer>
    </article>
  );
}
