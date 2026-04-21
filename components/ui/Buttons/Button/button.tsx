"use client";

import { ChevronRightIcon } from "lucide-react";
import type { ButtonProps } from "./button.types";
import styles from "./Button.module.scss";

export default function Button({
  label,
  icon,
  onClick,
  type = "button",
  variant = "primary",
  size = "md",
  disabled = false,
  className,
  href,
  target,
}: ButtonProps) {
  const hasContent = label || icon;
  const cls = [styles.btn, styles[variant], styles[size], className]
    .filter(Boolean)
    .join(" ");

  if (!hasContent) return null;

  const content = (
    <>
      {label}
      {icon}
    </>
  );

  if (href) {
    return (
      <a
        href={href}
        target={target}
        rel={target === "_blank" ? "noopener noreferrer" : undefined}
        className={cls}
      >
        {content}
      </a>
    );
  }

  return (
    <button
      type={type}
      onClick={onClick}
      disabled={disabled}
      className={cls}
    >
      {content}
    </button>
  );
}
