import type { Metadata } from "next";
import Breadcrumb from "@/components/ui/Breadcrumb/breadcrumb";
import TitleOutlineLeft from "@/components/ui/TitleOutlineLeft/title-outline-left";
import { HeroCampaign } from "@/components/drupal-components/HeroCampaign/hero-campaign";
import { CampaignStepsSection } from "@/components/drupal-components/CampaignStepsSection/campaign-steps-section";

export const metadata: Metadata = {
  title: "Campañas de Seguridad | Honda Motos Colombia",
  description:
    "Consulta las campañas de seguridad activas de Honda Motos Colombia. Verifica si tu moto requiere una revisión o corrección gratuita.",
};

export default function CampaniasDeSeguridad() {
  return (
    <main className="campanias">
      <Breadcrumb
        items={[
          { label: "Inicio", href: "/" },
          { label: "Campañas de seguridad" },
        ]}
      />
      <TitleOutlineLeft label="¿Quieres buscar campañas disponibles?" as="h1" />
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
    </main>
  );
}
