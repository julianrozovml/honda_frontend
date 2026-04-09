import Image from "next/image";
import Button from "@/components/ui/Buttons/Button/button";
import type { CardStoreProps } from "./card-store.types";
import styles from "./CardStore.module.scss";

export default function CardStore({
  name,
  imageSrc,
  imageAlt,
  price,
  originalPrice,
  buyUrl,
  priority = false,
}: CardStoreProps) {
  return (
    <article className={styles.card}>
      <div className={styles.imageWrapper}>
        <Image
          src={imageSrc}
          alt={imageAlt}
          fill
          className={styles.image}
          sizes="(max-width: 640px) 80vw, (max-width: 1024px) 40vw, 25vw"
          priority={priority}
        />
      </div>

      <div className={styles.body}>
        <h3 className={styles.name}>{name}</h3>

        <div className={styles.pricing}>
          <span className={styles.price}>{price}</span>
          {originalPrice && (
            <span className={styles.originalPrice}>{originalPrice}</span>
          )}
        </div>

        <Button
          label="Comprar en línea"
          variant="primary"
          href={buyUrl}
          target="_blank"
          className={styles.buyBtn}
        />
      </div>
    </article>
  );
}
