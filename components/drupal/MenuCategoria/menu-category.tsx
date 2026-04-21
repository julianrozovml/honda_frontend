"use client";

import { useState, useEffect } from "react";
import ChevronRightIcon from "@/components/ui/Icons/Chevron/ChevronRight/chevron-right";
import Image from "next/image";
import TitleOutlineLeft from "@/components/ui/Global/TitleOutlineLeft/title-outline-left";
import Button from "@/components/ui/Buttons/Button/button";
import type { MenuCategoriaProps, Category } from "./menu-categoria.types";
import styles from "./Menucategoria.module.scss";

export default function MenuCategoria({ category, onCategoryChange }: MenuCategoriaProps) {
  const [activeIndex, setActiveIndex] = useState(0);
  const [isMobile, setIsMobile] = useState(false);
  const [isModalOpen, setIsModalOpen] = useState(false);

  useEffect(() => {
    const checkMobile = async () => {
      const mobile = await checkIsMobile();
      setIsMobile(mobile);
    };
    checkMobile();
  }, []);

  async function checkIsMobile() {
    if (typeof window === "undefined") return false;
    return window.innerWidth < 768;
  }

  const handleClick = (index: number) => {
    setActiveIndex(index);
    if (onCategoryChange) {
      onCategoryChange(category[index]);
    }
    setIsModalOpen(false);
  };

  const activeCategory = category[activeIndex];

  if (isMobile) {
    return (
      <div className={styles.mobileWrapper}>
        <div className={styles.mobileHeader}>
          <div className={styles.mobileHeaderContainer}>
            <span className={styles.mobileTitle}>{activeCategory?.title}</span>
            <Button
              label="Cambiar"
              icon={<ChevronRightIcon />}
              variant="ghost"
              onClick={() => setIsModalOpen(true)}
              className={styles.ghostBtn}
            />
          </div>
        </div>
        {isModalOpen && (
          <div className={styles.modalOverlay} onClick={() => setIsModalOpen(false)}>
            <div className={styles.modal} onClick={(e) => e.stopPropagation()}>
              <div className={styles.modalHeader}>
                <div className={styles.modalHeaderContainer}>
                  <img src="/icons/icon-filter.svg" alt="Icono de filtro" />
                  <h3>Selecciona una categoría</h3>
                </div>
                <button onClick={() => setIsModalOpen(false)}>✕</button>
              </div>
              <hr/>
              <div className={styles.modalList}>
                {category.map((item, i) => (
                  <div
                    key={i}
                    className={`${styles.modalItem} ${i === activeIndex ? styles.active : ""}`}
                    onClick={() => handleClick(i)}>
                    <div className={styles.listContent}>
                      {item.icon && (
                        <div className={styles.icon}>
                          <Image src={item.icon} alt={item.title} width={24} height={24} />
                        </div>
                      )}
                      <span>{item.title}</span>
                    </div>

                    <ChevronRightIcon />
                  </div>
                ))}
              </div>
            </div>
          </div>
        )}
        <div className={styles.container}>
          <TitleOutlineLeft label={activeCategory?.description || ""} />
        </div>
      </div>
    );
  }

  return (
    <div className={styles.desktopWrapper}>
      <div className={styles.containerdesktop}>
        <div className={styles.desktop}>
        {category.map((item, i) => (
          <div
            key={i}
            className={`${styles.item} ${i === activeIndex ? styles.active : ""}`}
            onClick={() => handleClick(i)}
          >
            {item.icon && (
              <div className={styles.icon}>
                <Image src={item.icon} alt={item.title} width={24} height={24} />
              </div>
            )}
            <div className={styles.content}>
              <h3 className={styles.title}>{item.title}</h3>
            </div>
          </div>
        ))}
      </div>
      </div>
      <div className={styles.container}>
        <TitleOutlineLeft label={activeCategory?.description || ""} />
      </div>
    </div>
  );
}