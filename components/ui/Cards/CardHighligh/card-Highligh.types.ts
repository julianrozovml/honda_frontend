// ============================================================
// CARD Single— Types
// ============================================================

export interface CardHighlighProps {
  id: string;
  /** URL del Icono de la marca */
  logoSrc:string;
  /** Texto del Icono de la marca */
  logoAlt:string;
  /** Nombre del producto */
  name: string;
  /** URLs de las variantes del producto */
  imagesSrc: string[];
  /** porcentaje de descuento */
  discount:number; 
  /** Precio actual, ej: "$41.000" */
  price: string;
  /** Precio original (con tachado), ej: "$230.000" */
  originalPrice?: string;
  /** Botones de ver más y cotizar */
  buttons?:boolean;
  /** URL de la tienda en línea */
  buyUrl: string;
  /** Carga eager para imágenes above the fold que no son LCP */
  loading?: "eager" | "lazy";
}
