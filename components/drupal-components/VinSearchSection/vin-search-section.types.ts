// ============================================================
// VIN SEARCH SECTION — Types
// ============================================================

export type SearchStatus = "idle" | "loading" | "success" | "error";

export interface Campaign {
  id: string;
  title: string;
  description: string;
  status: string;
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
  /** Label above the input */
  label?: string;

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
