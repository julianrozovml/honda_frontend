import type { Metadata } from "next";
import Breadcrumb from "@/components/ui/Navigation/Breadcrumb/breadcrumb";
import { HeroCampaign } from "@/components/drupal/HeroCampaign/hero-campaign";
import { CampaignStepsSection } from "@/components/drupal/CampaignStepsSection/campaign-steps-section";
import { VinSearchSection } from "@/components/drupal/VinSearchSection/vin-search-section";
import type { Campaign } from "@/components/drupal/VinSearchSection/vin-search-section.types";
import VideoGeneral from "@/components/ui/Media/Video/video";
import SliderGeneral from "@/components/ui/Slider/SliderGeneral/slider-general";
import { SliderOnlineStore } from "@/components/drupal/SliderOnlineStore/slider-online-store";
import { MOCK_STORE_TABS } from "@/components/drupal/SliderOnlineStore/slider-online-store.mock";
import { getIsMobile } from "@/lib/device";
import styles from "./page.module.scss";

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
        imageSrc: "/images/image-card-moto.png",
        imageAlt: "Honda Africa Twin CRF 1100",
        productName: "Afrika Twin CRF 1100",
        models: ["2020", "2021", "2022", "2023", "2024"],
        description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam tempor convallis sapien a efficitur. Nam id bibendum neque. Vestibulum a eros accumsan, commodo nisl at, varius urna.",
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
      <VinSearchSection
        title="¿Quieres buscar campañas disponibles?"
        onSearch={searchCampaignsByVin}
        isMobile={isMobile}
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
          src: "/images/hero-campaign.jpg",
          alt: "Motocicleta Honda campañas de seguridad",
        }}
      />
      <CampaignStepsSection
        title="¿Qué debes hacer?"
        steps={[
          {
            id: 1,
            description:
              "Verifica si tu moto está incluida en la campaña de seguridad. Esto se puede hacer ingresando tu número VIN en el campo de arriba o consultando con tu concesionario Honda más cercano.",
            link: {
              label: "campo de arriba",
              href: "#vin",
            },
          },
          {
            id: 2,
            description:
              "Cuando te contacten, acércate a tu concesionario autorizado para realizar, sin ningún costo, el reemplazo del repuesto.",
          },
        ]}
        closingText={
          isMobile ? "¡Y listo! Así de fácil." : "¡Y listo!\nAsí de fácil."
        }
        image={{
          src: "/images/campaign-steps.jpg",
          alt: "Técnico Honda revisando una motocicleta",
        }}
      />
      <div className={styles.inner}>
        <VideoGeneral
          provider="youtube"
          id="FKqJAU6tLC0"
          title="Campañas de seguridad Honda Motos Colombia"
          className={styles.video}
        />
      </div>
      <SliderGeneral
        isMobile={isMobile}
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
