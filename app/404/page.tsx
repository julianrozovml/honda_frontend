import Container from "@/components/ui/Layout/Container/container";
import Button from "@/components/ui/Buttons/Button/button";
import { SliderOnlineStore } from "@/components/drupal/SliderOnlineStore/slider-online-store";
import { MOCK_STORE_TABS } from "@/components/drupal/SliderOnlineStore/slider-online-store.mock";
import ProductHighlightsText from "@/components/drupal/ProductHighlightsText/product-highlights-text";
import Image from "next/image";
import styles from "./404.module.scss";

export default function Custom404Page() {
  return (
    <main>
      <section className={styles.hero}>
        <Container>
          <div className={styles.heroInner}>
            <p className={styles.label}>Error</p>
            <h1 className={styles.code}>404</h1>

            <Image
              src="/images/robot-404.svg"
              alt="Robot de error 404"
              width={250}
              height={250}
              className={styles.illustration}
              priority
            />

            <p className={styles.message}>
              Lo sentimos, la pagina que estas buscando no existe o ha sido
              movida.
            </p>

            <Button label="Volver al inicio" href="/" className={styles.cta} />
          </div>
        </Container>
      </section>

      <Container className={styles.highlightPreview}>
        <ProductHighlightsText text="La nueva scooter PCX 160 es MÁS QUE UNA Motocicleta MAS, su Comfort y Tecnologías te sorprenderán para vivir una experiencia diferente a otra scoorter.​  QUE SIGNIFICA PCX:​ Personal Comfort Experience o una Experiencia de Comodidad Personalizada para sus usuarios.​" />
      </Container>

      <SliderOnlineStore tabs={MOCK_STORE_TABS} />
    </main>
  );
}
