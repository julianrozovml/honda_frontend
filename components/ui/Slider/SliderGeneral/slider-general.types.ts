export interface SliderSlide {
  /** URL de la imagen para desktop */
  imageSrc: string;
  /** URL de la imagen para mobile (si no se provee, usa imageSrc) */
  imageSrcMobile?: string;
  /** Texto alternativo de la imagen */
  imageAlt: string;
  /** Enlace opcional al hacer clic en el slide */
  href?: string;
}

export interface SliderGeneralProps {
  slides: SliderSlide[];
  /** Indica si el dispositivo es mobile (resuelto server-side con getIsMobile) */
  isMobile?: boolean;
  /** Activa el autoplay (default: false) */
  autoplay?: boolean;
  /** Intervalo en ms entre slides cuando autoplay está activo (default: 4000) */
  autoplayDelay?: number;
}
