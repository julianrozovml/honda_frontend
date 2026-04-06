"use client";

import { useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper/modules";
import type { Swiper as SwiperType } from "swiper";
import Image from "next/image";
import Link from "next/link";
import type { SliderGeneralProps } from "./slider-general.types";
import styles from "./SliderGeneral.module.scss";

import "swiper/css";

// ── Icons ─────────────────────────────────────────────────────────────────────

function ChevronLeftIcon() {
  return (
    <svg
      width="34"
      height="34"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1"
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
    >
      <polyline points="15 18 9 12 15 6" />
    </svg>
  );
}

function ChevronRightIcon() {
  return (
    <svg
      width="34"
      height="34"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1"
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
    >
      <polyline points="9 18 15 12 9 6" />
    </svg>
  );
}

// ── Component ─────────────────────────────────────────────────────────────────

export default function SliderGeneral({
  slides,
  isMobile = false,
  autoplay = false,
  autoplayDelay = 4000,
}: SliderGeneralProps) {
  const [swiper, setSwiper] = useState<SwiperType | null>(null);
  const [activeIndex, setActiveIndex] = useState(0);

  const hasMultiple = slides.length > 1;

  return (
    <div className={styles.wrapper}>
      <Swiper
        onSwiper={setSwiper}
        onSlideChange={(s) => setActiveIndex(s.realIndex)}
        modules={autoplay ? [Autoplay] : []}
        autoplay={
          autoplay
            ? { delay: autoplayDelay, disableOnInteraction: false }
            : false
        }
        loop={hasMultiple}
      >
        {slides.map((slide, i) => {
          const src =
            isMobile && slide.imageSrcMobile
              ? slide.imageSrcMobile
              : slide.imageSrc;

          const content = (
            <div className={styles.slide}>
              <Image
                src={src}
                alt={slide.imageAlt}
                fill
                className={styles.image}
                priority={i === 0}
                sizes="100vw"
              />
            </div>
          );

          return (
            <SwiperSlide key={i}>
              {slide.href ? (
                <Link href={slide.href} tabIndex={-1}>
                  {content}
                </Link>
              ) : (
                content
              )}
            </SwiperSlide>
          );
        })}
      </Swiper>

      {hasMultiple && (
        <div className={styles.controls}>
          <button
            type="button"
            className={styles.navBtn}
            onClick={() => swiper?.slidePrev()}
            aria-label="Slide anterior"
          >
            <ChevronLeftIcon />
          </button>

          <div className={styles.dots} role="tablist" aria-label="Slides">
            {slides.map((_, i) => (
              <button
                key={i}
                type="button"
                role="tab"
                aria-selected={i === activeIndex}
                aria-label={`Ir al slide ${i + 1}`}
                className={[
                  styles.dot,
                  i === activeIndex ? styles.dotActive : "",
                ]
                  .filter(Boolean)
                  .join(" ")}
                onClick={() => swiper?.slideToLoop(i)}
              />
            ))}
          </div>

          <button
            type="button"
            className={styles.navBtn}
            onClick={() => swiper?.slideNext()}
            aria-label="Slide siguiente"
          >
            <ChevronRightIcon />
          </button>
        </div>
      )}
    </div>
  );
}
