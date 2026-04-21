import type { Metadata } from "next";
import SliderGeneral from "@/components/ui/Slider/SliderGeneral/slider-general";
import MenuCategoria from "@/components/drupal/MenuCategoria/menu-category";
import TitleOutlineLeft from "@/components/ui/Global/TitleOutlineLeft/title-outline-left";
import { getIsMobile } from "@/lib/device";

export const metadata: Metadata = {
  title: "PLP | Honda Motos Colombia",
  description: "Página de productos Honda Motos Colombia",
};

export default async function PLP() {
  const isMobile = await getIsMobile();
  return (
    <main>
      <SliderGeneral
        isMobile={isMobile}
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
          }
        ]}
      />
      <MenuCategoria
        isMobile={isMobile}
        category={[
          {
            id: "todas",
            title: "Todas",
            description: "Todas nuestras motos Honda"
          },
          {
            id: "deportivas",
            title: "Deportivas",
            icon: "/icons/icon-moto-wht.svg",
            description: "Motos deportivas"
          },
          {
            id: "cruiser",
            title: "Cruiser",
            icon: "/icons/icon-moto-wht.svg",
            description: "Motos cruiser"
          },
          {
            id: "electricas",
            title: "Eléctricas",
            icon: "/icons/icon-moto-wht.svg",
            description: "Motos eléctricas"
          },
          {
            id: "scooter",
            title: "Scooter",
            icon: "/icons/icon-moto-wht.svg",
            description: "Motos scooter"
          }
        ]}
      />
    </main>
  );
}