"use client";

import { useState, useRef, useEffect } from "react";
import ChevronDown from "@/components/ui/Icons/Chevron/ChevronDown/chevron-down";
import type { FilterCheckboxSelectProps } from "./filter-checkbox-select.types";
import styles from "./FilterCheckboxSelect.module.scss";

export default function FilterCheckboxSelect({
  label,
  placeholder,
  options,
  selected,
  onChange,
}: FilterCheckboxSelectProps) {
  const [isOpen, setIsOpen] = useState(false);
  const wrapperRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    function handleOutsideClick(e: MouseEvent) {
      if (wrapperRef.current && !wrapperRef.current.contains(e.target as Node)) {
        setIsOpen(false);
      }
    }
    document.addEventListener("mousedown", handleOutsideClick);
    return () => document.removeEventListener("mousedown", handleOutsideClick);
  }, []);

  function toggle(value: string) {
    onChange(
      selected.includes(value)
        ? selected.filter((v) => v !== value)
        : [...selected, value]
    );
  }

  const displayLabel =
    selected.length > 0
      ? `${placeholder ?? label} (${selected.length})`
      : (placeholder ?? label);

  return (
    <div className={styles.wrapper} ref={wrapperRef}>
      <button
        type="button"
        className={[
          styles.trigger,
          isOpen         ? styles.triggerOpen   : "",
          selected.length > 0 ? styles.triggerActive : "",
        ].filter(Boolean).join(" ")}
        onClick={() => setIsOpen((v) => !v)}
        aria-expanded={isOpen}
        aria-haspopup="listbox"
      >
        <span className={styles.triggerLabel}>{displayLabel}</span>
        <span
          className={[styles.chevron, isOpen ? styles.chevronOpen : ""].filter(Boolean).join(" ")}
          aria-hidden="true"
        >
          <ChevronDown strokeWidth={1.2} />
        </span>
      </button>

      {isOpen && (
        <ul className={styles.dropdown} role="listbox" aria-label={label}>
          {options.map((option) => {
            const checked = selected.includes(option.value);
            return (
              <li key={option.value} role="option" aria-selected={checked}>
                <label className={`${styles.option} ${checked ? styles.optionChecked : ""}`}>
                  <input
                    type="checkbox"
                    className={styles.hiddenInput}
                    checked={checked}
                    onChange={() => toggle(option.value)}
                  />
                  <span
                    className={`${styles.checkbox} ${checked ? styles.checkboxChecked : ""}`}
                    aria-hidden="true"
                  />
                  <span className={styles.optionLabel}>{option.label}</span>
                </label>
              </li>
            );
          })}
        </ul>
      )}
    </div>
  );
}
