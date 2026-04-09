import type { Metadata } from "next";
import Breadcrumb from "@/components/ui/Navigation/Breadcrumb/breadcrumb";
import TitleOutlineLeft from "@/components/ui/Global/TitleOutlineLeft/title-outline-left";
import CampaignAssignmentForm from "@/components/drupal-components/CampaignAssignmentForm/campaign-assignment-form";
import styles from "./page.module.scss";

export const metadata: Metadata = {
  title: "Asignación de campañas | Honda Motos Colombia",
  description:
    "Registra tu información para hacer seguimiento a tu campaña de seguridad Honda Motos Colombia.",
};

export default function AsignacionCampanias() {
  return (
    <main>
      <Breadcrumb
        items={[
          { label: "Inicio", href: "/" },
          { label: "Campañas de seguridad", href: "/campanias-de-seguridad" },
          { label: "Asignación de campañas" },
        ]}
      />
      <div className={styles.inner}>
        <TitleOutlineLeft
          label="Asignación de campañas (5), a tu moto Honda"
          as="h2"
        />
        <p className={styles.descriptionBody}>
          Algunas unidades pueden tener una fallas en el cableado con
          abrazaderas plásticas para evitar una pérdida de continuidad en la
          bocina y la farola.
        </p>
        <p className={styles.descriptionHighlight}>
          Honda, líder mundial en motocicletas piensa en tu seguridad y
          satisfacción por favor completa el siguiente formulario para hacer
          seguimiento de tu caso
        </p>
      </div>
      <CampaignAssignmentForm campaignId="campaign-anti-wheelie-africa-twin" />
    </main>
  );
}
