export interface CardProductCampaignProps {
  /** Fecha de la campaña, ej: "22 enero 2025" */
  date: string;
  /** Título de la campaña */
  title: string;
  /** URL de la imagen del producto */
  imageSrc: string;
  /** Texto alternativo de la imagen */
  imageAlt: string;
  /** Nombre del producto, ej: "Afrika Twin CRF 1100" */
  productName: string;
  /** Años de modelos afectados, ej: ["2020", "2021", "2022", "2023", "2024"] */
  models: string[];
  /** Callback al pulsar el botón de compartir */
  onShare?: () => void;
  /** Descripción del producto */
  description: string;
}
