// ============================================================
// CAMPAIGN STEPS SECTION — Types
// ============================================================

export interface StepItem {
  id: number;
  description: string;
  link?: {
    label: string;
    href: string;
  };
}

export interface CampaignStepsSectionImage {
  src: string;
  alt: string;
  width?: number;
  height?: number;
}

export interface CampaignStepsSectionProps {
  /** Section heading — e.g. "¿Qué debes hacer?" */
  title: string;

  /** Numbered step list */
  steps: StepItem[];

  /** Closing statement — e.g. "¡Y listo!\nAsí de fácil." */
  closingText: string;

  /** Left-side image */
  image: CampaignStepsSectionImage;
}
