// ============================================================
// SLIDER ONLINE STORE — Types
// ============================================================

export interface StoreProduct {
  id: string;
  name: string;
  imageSrc: string;
  imageAlt: string;
  price: string;
  originalPrice?: string;
  buyUrl: string;
}

export type StoreTabIcon = "spare-parts" | "accessories";

export interface StoreTab {
  id: string;
  label: string;
  iconType: StoreTabIcon;
  products: StoreProduct[];
  /**
   * Controlado desde Drupal — permite al admin ocultar un tab sin eliminarlo.
   * TODO: conectar con servicio Drupal (campo booleano en el nodo).
   */
  enabled: boolean;
}

export interface SliderOnlineStoreProps {
  title?: string;
  subtitle?: string;
  tabs: StoreTab[];
}
