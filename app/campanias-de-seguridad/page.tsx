import type { Metadata } from "next";
import Breadcrumb from "@/components/ui/Navigation/Breadcrumb/breadcrumb";
import TitleOutlineLeft from "@/components/ui/Global/TitleOutlineLeft/title-outline-left";
import { HeroCampaign } from "@/components/drupal-components/HeroCampaign/hero-campaign";
import { CampaignStepsSection } from "@/components/drupal-components/CampaignStepsSection/campaign-steps-section";
import { VinSearchSection } from "@/components/drupal-components/VinSearchSection/vin-search-section";
import type { Campaign } from "@/components/drupal-components/VinSearchSection/vin-search-section.types";
import VideoGeneral from "@/components/ui/Media/Video/video";
import Container from "@/components/ui/Layout/Container/container";
import SliderGeneral from "@/components/ui/Slider/SliderGeneral/slider-general";
import { getIsMobile } from "@/lib/device";

export const metadata: Metadata = {
  title: "Campañas de Seguridad | Honda Motos Colombia",
  description:
    "Consulta las campañas de seguridad activas de Honda Motos Colombia. Verifica si tu moto requiere una revisión o corrección gratuita.",
};

async function searchCampaignsByVin(vin: string): Promise<Campaign[]> {
  "use server";
  // TODO: conectar con API de Drupal
  if (vin === "1X9ABCDEFG3H456789") {
    return [
      {
        id: "campaign-anti-wheelie-africa-twin",
        title: "Actualización software control Anti-Wheelie",
        date: "22 enero 2025",
        imageSrc: "/images/image-moto.png",
        imageAlt: "Honda Africa Twin CRF 1100",
        productName: "Afrika Twin CRF 1100",
        models: ["2020", "2021", "2022", "2023", "2024"],
      },
    ];
  }
  return [];
}

export default async function CampaniasDeSeguridad() {
  const isMobile = await getIsMobile();
  return (
    <main className="campanias">
      <Breadcrumb
        items={[
          { label: "Inicio", href: "/" },
          { label: "Campañas de seguridad" },
        ]}
      />
      <Container>
        <TitleOutlineLeft
          label="¿Quieres buscar campañas disponibles?"
          as="h2"
        />
      </Container>
      <VinSearchSection
        onSearch={searchCampaignsByVin}
        tooltipImage={{
          src: "/images/vin-location.png",
          alt: "Ubicación del número VIN en la tarjeta de tránsito",
        }}
        image={{
          src: "/images/image-licencia-transito.png",
          alt: "Campañas de seguridad Honda Motos Colombia",
        }}
      />
      <HeroCampaign
        title="¿Qué es una campaña de seguridad?"
        description="Honda realiza campañas de seguridad para garantizar que tu moto funcione de manera segura y confiable. Estas campañas consisten en la revisión o reemplazo de ciertas piezas o componentes que, por medidas preventivas, podrían presentar algún riesgo con el tiempo."
        image={{
          src: "/images/hero-campaign.png",
          alt: "Motocicleta Honda campañas de seguridad",
        }}
      />
      <CampaignStepsSection
        title="¿Qué debes hacer?"
        steps={[
          {
            id: 1,
            description:
              "Ingresa el número VIN de tu moto para verificar si aplica a una campaña activa.",
          },
          {
            id: 2,
            description:
              "Contacta al concesionario Honda más cercano para programar tu revisión.",
            link: {
              label: "concesionario Honda más cercano",
              href: "/concesionarios",
            },
          },
          {
            id: 3,
            description:
              "Lleva tu moto al taller. El ajuste o reemplazo de piezas es completamente gratuito.",
          },
        ]}
        closingText={"¡Y listo!\nAsí de fácil."}
        image={{
          src: "/images/campaign-steps.png",
          alt: "Técnico Honda revisando una motocicleta",
        }}
      />
      <Container>
        <VideoGeneral
          provider="vimeo"
          id="76979871"
          title="Campañas de seguridad Honda Motos Colombia"
        />
      </Container>
      <SliderGeneral
        isMobile={isMobile}
        slides={[
          {
            imageSrc: "/images/slider-pro-honda.jpg",
            imageSrcMobile: "/images/slider-pro-honda-mobile.jpg",
            imageAlt: "Dale poder a tu pasión — Pro Honda lubricante 1",
          },
          {
            imageSrc: "/images/slider-pro-honda.jpg",
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
    </main>
  );
}
