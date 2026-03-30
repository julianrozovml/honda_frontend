"use client";

import type { InputSearchProps } from "./input-search.types";
import Button from "@/components/ui/Buttons/Button/button";
import styles from "./InputSearch.module.scss";

export default function InputSearch({
  value,
  onChange,
  onSearch,
  onClear,
  placeholder = "Buscar...",
  className,
}: InputSearchProps) {
  function handleKeyDown(e: React.KeyboardEvent<HTMLInputElement>) {
    if (e.key === "Enter") onSearch?.(value);
  }

  function handleClear() {
    onChange("");
    onClear?.();
  }

  return (
    <div className={[styles.wrapper, className].filter(Boolean).join(" ")}>
      <div className={styles.field}>
        <img
          src="/icons/icon-search-red.svg"
          alt=""
          aria-hidden="true"
          className={styles.icon}
        />
        <input
          type="search"
          value={value}
          onChange={(e) => onChange(e.target.value)}
          onKeyDown={handleKeyDown}
          placeholder={placeholder}
          className={styles.input}
        />
      </div>

      {value && <Button label="Limpiar" onClick={handleClear} />}
    </div>
  );
}
