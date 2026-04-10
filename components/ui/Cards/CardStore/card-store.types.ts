// ============================================================
// CARD STORE — Types
// ============================================================

export interface CardStoreProps {
  id: string;
  /** Nombre del producto */
  name: string;
  /** URL de la imagen del producto */
  imageSrc: string;
  /** Texto alternativo de la imagen */
  imageAlt: string;
  /** Precio actual, ej: "$41.000" */
  price: string;
  /** Precio original (con tachado), ej: "$230.000" */
  originalPrice?: string;
  /** URL de la tienda en línea */
  buyUrl: string;
  /** Marca la imagen como LCP (primer card visible del slider) */
  priority?: boolean;
  /** Carga eager para imágenes above the fold que no son LCP */
  loading?: "eager" | "lazy";
}
