export type TitleColor = "red" | "white" | "black";

export interface SliderSlide {
  imageSrc: string;
  imageSrcMobile?: string;
  imageAlt: string;
  href?: string;
  title?: string;
  alignment?: "left" | "center" | "right";
  titleColor?: TitleColor;
}

export interface SliderGeneralProps {
  slides: SliderSlide[];
  isSliderControlsInside?: boolean;
  autoplay?: boolean;
  autoplayDelay?: number;
  height?: string;
  alignment?: "left" | "center" | "right";
  titleColor?: TitleColor;
}