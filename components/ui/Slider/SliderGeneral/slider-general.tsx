"use client";

import { useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper/modules";
import type { Swiper as SwiperType } from "swiper";
import Image from "next/image";
import Link from "next/link";
import type { SliderGeneralProps } from "./slider-general.types";
import ChevronLeft from "@/components/ui/Icons/Chevron/ChevronLeft/chevron-left";
import ChevronRight from "@/components/ui/Icons/Chevron/ChevronRight/chevron-right";
import styles from "./SliderGeneral.module.scss";

export default function SliderGeneral({
  slides,
  isMobile = false,
  autoplay = false,
  autoplayDelay = 4000,
  height,
  alignment = "left",
  titleColor,
  isSliderControlsInside = false,
}: SliderGeneralProps) {
  const [swiper, setSwiper] = useState<SwiperType | null>(null);
  const [activeIndex, setActiveIndex] = useState(0);

  const hasMultiple = slides.length > 1;

  const wrapperStyle = height ? { height } : undefined;

  return (
    <div className={`${styles.wrapper} ${styles[alignment]} ${isSliderControlsInside ? styles.controlsInside : ""}`} style={wrapperStyle}>
      <Swiper
        style={wrapperStyle}
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
          const src = isMobile && slide.imageSrcMobile ? slide.imageSrcMobile : slide.imageSrc;
          const slideAlignment = slide.alignment || alignment;
          const slideTitleColor = slide.titleColor || titleColor;

          const content = (
            <div className={`${styles.slide} ${styles[slideAlignment]}`} style={height ? { height: "100%" } : undefined}>
              <Image
                src={src}
                alt={slide.imageAlt}
                fill
                className={styles.image}
                priority={i === 0}
                sizes="100vw"
              />
              {slide.title && (
                <div className={`${styles.content} ${styles[slideAlignment]}`}>
                  <h1 className={`${styles.title} ${slideTitleColor ? styles[slideTitleColor] : styles.white}`}>
                    {slide.title}
                  </h1>
                </div>
              )}
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
        <div className={`${styles.controls} ${isSliderControlsInside ? styles.controlsInside : ""}`}>
          <button
            type="button"
            className={styles.navBtn}
            onClick={() => swiper?.slidePrev()}
            aria-label="Slide anterior"
          >
            <ChevronLeft size={34} />
          </button>

          <div className={styles.dots} role="tablist" aria-label="Slides">
            {slides.map((_, i) => (
              <button
                key={i}
                type="button"
                role="tab"
                aria-selected={i === activeIndex}
                aria-label={`Ir al slide ${i + 1}`}
                className={[styles.dot, i === activeIndex ? styles.dotActive : ""].filter(Boolean).join(" ")}
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
            <ChevronRight size={34} />
          </button>
        </div>
      )}
    </div>
  );
}