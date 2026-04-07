"use client";

import type { SelectProps } from "./select.types";
import styles from "./Select.module.scss";

function ChevronDown() {
  return (
    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
      <polyline points="6 9 12 15 18 9" />
    </svg>
  );
}

export default function Select({
  options,
  value,
  onChange,
  name,
  id,
  label,
  placeholder = "Selecciona",
  error,
  disabled = false,
  className,
}: SelectProps) {
  return (
    <div className={[styles.wrapper, className].filter(Boolean).join(" ")}>
      {label && (
        <label htmlFor={id} className={styles.label}>
          {label}
        </label>
      )}
      <div className={styles.selectWrapper}>
        <select
          id={id}
          name={name}
          value={value}
          onChange={(e) => onChange(e.target.value)}
          disabled={disabled}
          className={[styles.select, error ? styles.hasError : ""].filter(Boolean).join(" ")}
        >
          <option value="">{placeholder}</option>
          {options.map((opt) => (
            <option key={opt.value} value={opt.value}>
              {opt.label}
            </option>
          ))}
        </select>
        <span className={styles.chevron}>
          <ChevronDown />
        </span>
      </div>
      {error && <span className={styles.error}>{error}</span>}
    </div>
  );
}
