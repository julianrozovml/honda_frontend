export interface SliderSlide {
  /** URL de la imagen del slide */
  imageSrc: string;
  /** Texto alternativo de la imagen */
  imageAlt: string;
  /** Enlace opcional al hacer clic en el slide */
  href?: string;
}

export interface SliderGeneralProps {
  slides: SliderSlide[];
  /** Activa el autoplay (default: false) */
  autoplay?: boolean;
  /** Intervalo en ms entre slides cuando autoplay está activo (default: 4000) */
  autoplayDelay?: number;
}
