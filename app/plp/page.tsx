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
        category={[
          {
            title: "Todas",
            description: "Todas nuestras motos Honda"
          },
          {
            title: "Deportivas",
            icon: "/icons/icon-moto-wht.svg",
            description: "Motos deportivas"
          },
          {
            title: "Cruiser",
            icon: "/icons/icon-moto-wht.svg",
            description: "Motos cruiser"
          },
          {
            title: "Eléctricas",
            icon: "/icons/icon-moto-wht.svg",
            description: "Motos?"
          },
          {
            title: "Deportivas",
            icon: "/icons/icon-moto-wht.svg",
            description: "Motos deportivas"
          }
        ]}
      />
    </main>
  );
}