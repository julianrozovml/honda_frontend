"use client";

import type { ButtonProps } from "./button.types";
import styles from "./Button.module.scss";

export default function Button({
  label,
  onClick,
  type = "button",
  variant = "primary",
  size = "md",
  disabled = false,
  className,
  href,
  target,
}: ButtonProps) {
  const cls = [styles.btn, styles[variant], styles[size], className]
    .filter(Boolean)
    .join(" ");

  if (href) {
    return (
      <a
        href={href}
        target={target}
        rel={target === "_blank" ? "noopener noreferrer" : undefined}
        className={cls}
      >
        {label}
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
      {label}
    </button>
  );
}
