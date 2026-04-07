export type SocialNetwork = "facebook" | "instagram" | "x" | "youtube";

export interface SocialLink {
  network: SocialNetwork;
  href: string;
  label: string;
}

export interface SocialLinksProps {
  title?: string;
  links?: SocialLink[];
  className?: string;
}
