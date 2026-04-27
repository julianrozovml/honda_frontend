// ============================================================
// CARD SINGLE MOTORBIKE — Types
// ============================================================

export interface CardSingleMotorbikeProps {
  id: string;
  logoSrc: string;
  logoAlt: string;
  name: string;
  imageSrc: string;
  imageAlt: string;
  price: string;
  originalPrice?: string;
  buttons?: boolean;
  buyUrl: string;
  loading?: "eager" | "lazy";
  /** Valor numérico del cilindraje, ej: "99", "110", "125", "150+" */
  displacement?: string;
  /** Tecnología de transmisión, ej: "automatica", "manual" */
  transmission?: string;
}
