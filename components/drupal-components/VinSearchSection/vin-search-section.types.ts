// ============================================================
// VIN SEARCH SECTION — Types
// ============================================================

export type SearchStatus = "idle" | "loading" | "success" | "error";

export interface Campaign {
  id: string;
  /** Título de la campaña */
  title: string;
  /** Fecha de publicación, ej: "22 enero 2025" */
  date: string;
  /** URL de la imagen del producto */
  imageSrc: string;
  /** Texto alternativo de la imagen */
  imageAlt: string;
  /** Nombre del producto, ej: "Afrika Twin CRF 1100" */
  productName: string;
  /** Años de modelos afectados */
  models: string[];
}

export interface VinTooltipImage {
  src: string;
  alt: string;
}

export interface VinSectionImage {
  src: string;
  alt: string;
}

export interface VinSearchSectionProps {
  /** Título principal de la sección */
  title?: string;

  /** Input placeholder */
  placeholder?: string;

  /** Submit button label */
  buttonLabel?: string;

  /** Tooltip image showing where to find VIN on transit license */
  tooltipImage?: VinTooltipImage;

  /** Decorative image shown on the upper right of the section */
  image?: VinSectionImage;

  /** Callback when user submits a VIN — returns campaigns or empty array */
  onSearch: (vin: string) => Promise<Campaign[]>;
}

export interface VinResultsProps {
  vin: string;
  campaigns: Campaign[];
  status: SearchStatus;
}
