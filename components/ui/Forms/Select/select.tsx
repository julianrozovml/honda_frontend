"use client";

import type { SelectProps } from "./select.types";
import ChevronDown from "@/components/ui/Icons/Chevron/ChevronDown/chevron-down";
import styles from "./Select.module.scss";

export default function Select({
  options,
  value,
  onChange,
  onBlur,
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
          onBlur={onBlur}
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
          <ChevronDown size={16} strokeWidth={2} />
        </span>
      </div>
      {error && <span className={styles.error}>{error}</span>}
    </div>
  );
}
