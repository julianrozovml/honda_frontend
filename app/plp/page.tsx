import type { Metadata } from "next";
import SliderGeneral from "@/components/ui/Slider/SliderGeneral/slider-general";
import MenuCategoryMotorbike from "@/components/drupal/MenuCategoryMotorbike/menu-category-motorbike";
import PLPView from "./plp-view";
import { MOCK_MOTORBIKES } from "@/components/drupal/PLPFilters/plp-filters.mock";
import { SliderOnlineStore } from "@/components/drupal/SliderOnlineStore/slider-online-store";
import { MOCK_STORE_TABS } from "@/components/drupal/SliderOnlineStore/slider-online-store.mock";

export const revalidate = 3600;

export const metadata: Metadata = {
  title: "PLP | Honda Motos Colombia",
  description: "Página de productos Honda Motos Colombia",
};

export default function PLP() {
  return (
    <main>
      <SliderGeneral
        height="300px"
        isSliderControlsInside={true}
        slides={[
          {
            title: "Motocicletas Honda",
            imageSrc: "/images/bg-banner.jpg",
            imageSrcMobile: "/images/bg-banner.jpg",
            imageAlt: "Banner motorcycles",
            alignment: "left",
            titleColor: "white",
          },
        ]}
      />
      <MenuCategoryMotorbike
        category={[
          { id: "todas",     title: "Todas",      description: "Todas nuestras motos Honda" },
          { id: "deportivas", title: "Deportivas", icon: "/icons/icon-moto-wht.svg", description: "Motos deportivas" },
          { id: "cruiser",   title: "Cruiser",     icon: "/icons/icon-moto-wht.svg", description: "Motos cruiser" },
          { id: "electricas", title: "Eléctricas", icon: "/icons/icon-moto-wht.svg", description: "Motos eléctricas" },
          { id: "scooter",   title: "Scooter",     icon: "/icons/icon-moto-wht.svg", description: "Motos scooter" },
        ]}
      />
      <PLPView motorbikes={MOCK_MOTORBIKES} />
      <SliderGeneral
        height="400px"
        slides={[
          {
            imageSrc: "/images/section-finaciación.jpg",
            imageSrcMobile: "/images/slider-pro-honda-mobile.jpg",
            imageAlt: "Dale poder a tu pasión — Pro Honda lubricante 2",
          },
          {
            imageSrc: "/images/section-finaciación.jpg",
            imageSrcMobile: "/images/slider-pro-honda-mobile.jpg",
            imageAlt: "Dale poder a tu pasión — Pro Honda lubricante 2",
          },
          {
            imageSrc: "/images/slider-pro-honda.jpg",
            imageSrcMobile: "/images/slider-pro-honda-mobile.jpg",
            imageAlt: "Dale poder a tu pasión — Pro Honda lubricante 3",
          },
        ]}
      />
      <SliderOnlineStore tabs={MOCK_STORE_TABS} />
    </main>
  );
}
