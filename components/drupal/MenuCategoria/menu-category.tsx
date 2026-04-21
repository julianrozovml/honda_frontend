"use client";

import { useState } from "react";
import ChevronRightIcon from "@/components/ui/Icons/Chevron/ChevronRight/chevron-right";
import Image from "next/image";
import TitleOutlineLeft from "@/components/ui/Global/TitleOutlineLeft/title-outline-left";
import Button from "@/components/ui/Buttons/Button/button";
import type { MenuCategoriaProps } from "./menu-categoria.types";
import styles from "./Menucategoria.module.scss";

export default function MenuCategoria({ category, isMobile, onCategoryChange }: MenuCategoriaProps) {
  const [activeIndex, setActiveIndex] = useState(0);
  const [isModalOpen, setIsModalOpen] = useState(false);

  function handleClick(index: number) {
    setActiveIndex(index);
    onCategoryChange?.(category[index]);
    setIsModalOpen(false);
  }

  const activeCategory = category[activeIndex];

  if (isMobile) {
    return (
      <div className={styles.mobileWrapper}>
        <div className={styles.mobileHeader}>
          <div className={styles.mobileHeaderContainer}>
            <span className={styles.mobileTitle}>{activeCategory?.title}</span>
            <Button
              label="Cambiar"
              variant="ghost"
              onClick={() => setIsModalOpen(true)}
              className={styles.ghostBtn}
            />
          </div>
        </div>
        {isModalOpen && (
          <div
            className={styles.modalOverlay}
            onClick={() => setIsModalOpen(false)}
            role="presentation"
          >
            <div
              className={styles.modal}
              onClick={(e) => e.stopPropagation()}
              role="dialog"
              aria-modal="true"
              aria-label="Selecciona una categoría"
            >
              <div className={styles.modalHeader}>
                <div className={styles.modalHeaderContainer}>
                  <Image src="/icons/icon-filter.svg" alt="Icono de filtro" width={24} height={24} />
                  <h3>Selecciona una categoría</h3>
                </div>
                <button
                  className={styles.closeBtn}
                  onClick={() => setIsModalOpen(false)}
                  aria-label="Cerrar"
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="20"
                    height="20"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth={2}
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    aria-hidden="true"
                  >
                    <path d="M18 6 6 18M6 6l12 12" />
                  </svg>
                </button>
              </div>
              <hr />
              <div className={styles.modalList}>
                {category.map((item, i) => (
                  <button
                    key={item.id}
                    className={`${styles.modalItem} ${i === activeIndex ? styles.active : ""}`}
                    onClick={() => handleClick(i)}
                  >
                    <div className={styles.listContent}>
                      {item.icon && (
                        <div className={styles.icon}>
                          <Image src={item.icon} alt={item.title} width={24} height={24} />
                        </div>
                      )}
                      <span>{item.title}</span>
                    </div>
                    <ChevronRightIcon />
                  </button>
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
            <button
              key={item.id}
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
            </button>
          ))}
        </div>
      </div>
      <div className={styles.container}>
        <TitleOutlineLeft label={activeCategory?.description || ""} />
      </div>
    </div>
  );
}
