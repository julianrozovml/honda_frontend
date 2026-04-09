export interface ButtonProps {
  label: string;
  onClick?: () => void;
  type?: "button" | "submit" | "reset";
  variant?: "primary" | "secondary" | "outline" | "outline-border-right" | "ghost";
  size?: "sm" | "md" | "lg";
  disabled?: boolean;
  className?: string;
  /** Si se provee, renderiza un <a> en lugar de <button> */
  href?: string;
  target?: "_blank" | "_self" | "_parent" | "_top";
}
