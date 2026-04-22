import Image from "next/image";
import Button from "@/components/ui/Buttons/Button/button";
import type { CardSingleProps } from "./card-Single.types";
import styles from "./CardSingle.module.scss";

export default function CardSingle({
  name,
  logoSrc,
  logoAlt,
  imageSrc,
  imageAlt,
  price,
  buttons,
  originalPrice,
  buyUrl,
  loading,
}: CardSingleProps) {
  return (
    <article className={styles.card}>
      <Image
          src={logoSrc}
          alt={logoAlt}
          width={180}
          height={51}
          className={styles.logo}
          sizes="(max-width: 640px) 80vw, (max-width: 1024px) 40vw, 25vw"
          loading={loading}
        />

      <div className={styles.imageWrapper}>
        <Image
          src={imageSrc}
          alt={imageAlt}
          width={307}
          height={172}
          className={styles.image}
          sizes="(max-width: 640px) 80vw, (max-width: 1024px) 40vw, 25vw"
          loading={loading}
        />
     
      </div>
      
      <div className={styles.body}>
        <h3 className={styles.name}>{name}</h3>
        <div className={styles.pricing}>
          <span className={styles.price}>{"$ "+price}</span>
          {originalPrice && (
            <span className={styles.originalPrice}>{"$ "+originalPrice}</span>
          )}
        </div>

       {buttons && (<div className={styles.btnWrapper}>
          <Button
            label="Ver más"
            variant="outline"
            href={buyUrl}
            target="_blank"
            className={styles.btnVer}
          />
          <Button
            label="Cotizar"
            variant="outline"
            href={buyUrl}
            target="_blank"
            className={styles.btnCotizar}
          />
        </div>)
        }
      </div>
    </article>
  );
}
