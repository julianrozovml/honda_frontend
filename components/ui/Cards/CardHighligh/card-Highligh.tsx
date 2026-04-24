'use client'

import Image from "next/image";
import Button from "@/components/ui/Buttons/Button/button";
import type { CardHighlighProps } from "./card-Highligh.types";
import styles from "./CardHighligh.module.scss";
import { useState } from "react";


export default function CardHighligh({
  name,
  logoSrc,
  logoAlt,
  imagesSrc,
  price,
  buttons,
  originalPrice,
  buyUrl,
  loading,
  discount
}: CardHighlighProps) {
  
  const [selected,setSelected]=useState(0);
  return (
    <article className={styles.card}>
      <div className={styles.imageWrapper}>
        <Image
          src={imagesSrc[selected]}
          alt={"Destacado"}
          width={307}
          height={172}
          className={styles.image}
          sizes="(max-width: 640px) 80vw, (max-width: 1024px) 40vw, 25vw"
          loading={loading}
        />
        <div className={styles.colorPicker}> 
              <p>Colores*</p>
              <p>*Sujeto a disponibilidad de inventario</p>
              <div className={styles.colors}>
                {/*TODO: Reemplazar por un loop que agregue los colores en base al llamado al servicio */}
                <button className={styles.pick} onClick={()=>{setSelected(0)}}></button>
                <button className={styles.pick +" "+styles.black} onClick={()=>{setSelected(1)}}></button>
                <button className={styles.pick+" "+styles.gray} onClick={()=>{setSelected(2)}}></button>
              </div>
        </div>
      </div>
      
      <div className={styles.body}>
          <Image
          src={logoSrc}
          alt={logoAlt}
          width={213}
          height={53}
          className={styles.logo}
          sizes="(max-width: 640px) 80vw, (max-width: 1024px) 40vw, 25vw"
          loading={loading}
        />
         <span className={styles.name}>Desde</span>
        <div>
            <span className={styles.discount}>{"-"+discount+" %"}</span>
            <span className={styles.price}>{"$ "+price}</span>
        </div>
        <h3 className={styles.name}>{name}</h3>
        <div className={styles.pricing}>
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
            label="Financiar"
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
