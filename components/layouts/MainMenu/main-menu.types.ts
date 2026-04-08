import type { ReactNode } from "react";

export interface SubMenuItem {
  label: string;
  href: string;
  icon?: ReactNode;
}

export interface NavItem {
  id: string;
  label: string;
  href?: string;
  /** Red text + bottom indicator — marks the current page */
  active?: boolean;
  /** Red text style — Live Store highlight */
  highlight?: boolean;
  /** Shows › chevron on mobile even without children */
  hasArrow?: boolean;
  children?: SubMenuItem[];
}
