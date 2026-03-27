"use client";

import type { InputProps } from "./input.types";
import styles from "./Input.module.scss";

export default function Input({
  value,
  onChange,
  type = "text",
  name,
  id,
  label,
  placeholder,
  error,
  disabled = false,
  className,
}: InputProps) {
  return (
    <div className={[styles.wrapper, className].filter(Boolean).join(" ")}>
      {label && (
        <label htmlFor={id} className={styles.label}>
          {label}
        </label>
      )}
      <input
        type={type}
        id={id}
        name={name}
        value={value}
        onChange={(e) => onChange(e.target.value)}
        placeholder={placeholder}
        disabled={disabled}
        className={[styles.input, error ? styles.hasError : ""]
          .filter(Boolean)
          .join(" ")}
      />
      {error && <span className={styles.error}>{error}</span>}
    </div>
  );
}
