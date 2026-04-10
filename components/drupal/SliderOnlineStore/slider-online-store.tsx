"use client";

import { useState, useRef } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import type { Swiper as SwiperType } from "swiper";
import CardStore from "@/components/ui/Cards/CardStore/card-store";
import ChevronLeft from "@/components/ui/Icons/Chevron/ChevronLeft/chevron-left";
import ChevronRight from "@/components/ui/Icons/Chevron/ChevronRight/chevron-right";
import TitleOutlineLeft from "@/components/ui/Global/TitleOutlineLeft/title-outline-left";
import type {
  SliderOnlineStoreProps,
  StoreTabIcon,
} from "./slider-online-store.types";
import styles from "./SliderOnlineStore.module.scss";

// ── Tab Icons ─────────────────────────────────────────────────────────────────

function SparePartsIcon() {
  return (
    <svg
      width="18"
      height="18"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth={1.8}
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
    >
      <circle cx="12" cy="12" r="3" />
      <path d="M19.07 4.93a10 10 0 0 1 0 14.14M4.93 4.93a10 10 0 0 0 0 14.14" />
      <path d="M14.83 9.17a4 4 0 0 1 0 5.66M9.17 9.17a4 4 0 0 0 0 5.66" />
    </svg>
  );
}

function AccessoriesIcon() {
  return (
    <svg
      width="18"
      height="18"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth={1.8}
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
    >
      <path d="M6 2 3 6v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2V6l-3-4z" />
      <line x1="3" y1="6" x2="21" y2="6" />
      <path d="M16 10a4 4 0 0 1-8 0" />
    </svg>
  );
}

const TAB_ICONS: Record<StoreTabIcon, () => React.JSX.Element> = {
  "spare-parts": SparePartsIcon,
  accessories:   AccessoriesIcon,
};

// ── Component ─────────────────────────────────────────────────────────────────

export function SliderOnlineStore({
  title    = "Tienda en línea",
  subtitle = "Mejora tu experiencia con accesorios y repuestos originales.",
  tabs,
}: SliderOnlineStoreProps) {
  const visibleTabs = tabs.filter((t) => t.enabled);
  const [activeTabId, setActiveTabId] = useState(visibleTabs[0]?.id ?? "");
  const [activeIndex, setActiveIndex]  = useState(0);
  const swiperRef                      = useRef<SwiperType | null>(null);

  if (visibleTabs.length === 0) return null;

  const activeTab  = visibleTabs.find((t) => t.id === activeTabId) ?? visibleTabs[0];
  const showTabs   = visibleTabs.length > 1;
  const useSlider  = activeTab.products.length > 4;

  // Para garantizar loop infinito con pocos slides, duplicamos el array hasta
  // tener al menos ceil(maxSlidesPerView) * 4 slides (umbral seguro para Swiper).
  // Las keys incluyen el índice de repetición para evitar colisiones en React.
  const MAX_PER_VIEW    = 4.2;
  const MIN_LOOP_SLIDES = Math.ceil(MAX_PER_VIEW) * 4; // 20
  const repetitions     = Math.ceil(MIN_LOOP_SLIDES / activeTab.products.length);
  const loopSlides      = Array.from({ length: repetitions }, (_, ri) =>
    activeTab.products.map((p) => ({ ...p, _key: `${p.id}-r${ri}` }))
  ).flat();

  function handleTabChange(tabId: string) {
    setActiveTabId(tabId);
    setActiveIndex(0);
    swiperRef.current?.slideTo(0);
  }

  return (
    <section className={styles.section}>

      <div className={styles.inner}>

        {/* ── Header ────────────────────────────────────────────────── */}
        <div className={styles.header}>
          <div className={styles.headerLeft}>
            <TitleOutlineLeft label={title} />
            <p className={styles.subtitle}>{subtitle}</p>
          </div>

          {showTabs && (
            <div className={styles.tabs} role="tablist">
              {visibleTabs.map((tab) => {
                const Icon     = TAB_ICONS[tab.iconType];
                const isActive = tab.id === activeTabId;
                return (
                  <button
                    key={tab.id}
                    type="button"
                    role="tab"
                    aria-selected={isActive}
                    className={[styles.tab, isActive ? styles.tabActive : ""].filter(Boolean).join(" ")}
                    onClick={() => handleTabChange(tab.id)}
                  >
                    <span>{tab.label}</span>
                    <Icon />
                  </button>
                );
              })}
            </div>
          )}
        </div>

        {useSlider ? (
          <>
            {/* ── Slider: overflow visible, peek al borde derecho ─── */}
            <div className={styles.sliderWrapper}>
              <Swiper
                onSwiper={(s) => { swiperRef.current = s; }}
                onSlideChange={(s) =>
                  setActiveIndex(s.realIndex % activeTab.products.length)
                }
                loop
                slidesPerView={1.15}
                spaceBetween={16}
                breakpoints={{
                  640:  { slidesPerView: 2.2, spaceBetween: 20 },
                  1024: { slidesPerView: 3.2, spaceBetween: 24 },
                  1280: { slidesPerView: 4.2, spaceBetween: 24 },
                }}
              >
                {loopSlides.map((product) => {
                  const isFirst = product.id === activeTab.products[0].id;
                  return (
                  <SwiperSlide key={product._key}>
                    <CardStore
                      id={product.id}
                      name={product.name}
                      imageSrc={product.imageSrc}
                      imageAlt={product.imageAlt}
                      price={product.price}
                      originalPrice={product.originalPrice}
                      buyUrl={product.buyUrl}
                      priority={isFirst}
                      loading={isFirst ? undefined : "eager"}
                    />
                  </SwiperSlide>
                  );
                })}
              </Swiper>
            </div>

            {/* ── Controls ──────────────────────────────────────────── */}
            <div className={styles.controls}>
              <button
                type="button"
                className={styles.navBtn}
                onClick={() => swiperRef.current?.slidePrev()}
                aria-label="Slide anterior"
              >
                <ChevronLeft size={28} />
              </button>

              <div className={styles.dots} role="tablist" aria-label="Slides">
                {activeTab.products.map((_, i) => (
                  <button
                    key={i}
                    type="button"
                    role="tab"
                    aria-selected={i === activeIndex}
                    aria-label={`Ir al slide ${i + 1}`}
                    className={[styles.dot, i === activeIndex ? styles.dotActive : ""].filter(Boolean).join(" ")}
                    onClick={() => swiperRef.current?.slideToLoop(i)}
                  />
                ))}
              </div>

              <button
                type="button"
                className={styles.navBtn}
                onClick={() => swiperRef.current?.slideNext()}
                aria-label="Slide siguiente"
              >
                <ChevronRight size={28} />
              </button>
            </div>
          </>
        ) : (
          /* ── Grid centrado: ≤ 4 productos ──────────────────────── */
          <ul className={styles.grid}>
            {activeTab.products.map((product, i) => (
              <li key={product.id}>
                <CardStore
                  id={product.id}
                  name={product.name}
                  imageSrc={product.imageSrc}
                  imageAlt={product.imageAlt}
                  price={product.price}
                  originalPrice={product.originalPrice}
                  buyUrl={product.buyUrl}
                  priority={i === 0}
                />
              </li>
            ))}
          </ul>
        )}

      </div>

    </section>
  );
}
