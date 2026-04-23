"use client";

import { useState } from "react";
import FilterCheckboxSelect from "@/components/ui/Forms/FilterCheckboxSelect/filter-checkbox-select";
import Button from "@/components/ui/Buttons/Button/button";
import ChevronDown from "@/components/ui/Icons/Chevron/ChevronDown/chevron-down";
import type {
  PLPFiltersProps,
  ActiveFilters,
  FilterTag,
  FilterOption,
} from "./plp-filters.types";
import styles from "./PLPFilters.module.scss";

// ── Default data ──────────────────────────────────────────────────────────────

const DEFAULT_PRICES: FilterOption[] = [
  { value: "0-1000000", label: "Hasta $1.000.000" },
  { value: "1000000-5000000", label: "$1.000.000 a $5.000.000" },
  { value: "5000000+", label: "Más de $5.000.000" },
];

const DEFAULT_CILINDRAJES: FilterOption[] = [
  { value: "99", label: "99 cc" },
  { value: "110", label: "110 cc" },
  { value: "125", label: "125 cc" },
  { value: "150+", label: "150 y más" },
];

const DEFAULT_TECNOLOGIAS: FilterOption[] = [
  { value: "automatica", label: "Automática" },
  { value: "manual", label: "Manual" },
  { value: "semiautomatica", label: "Semiautomática" },
  { value: "eclutch", label: "E-clutch" },
];

const DEFAULT_ORDENAR: FilterOption[] = [
  { value: "price-asc", label: "Precio: menor a mayor" },
  { value: "price-desc", label: "Precio: mayor a menor" },
  { value: "newest", label: "Más recientes" },
];

// ── Icons ─────────────────────────────────────────────────────────────────────

const FilterIcon = () => (
  <svg
    width="15"
    height="15"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth={2.2}
    strokeLinecap="round"
    strokeLinejoin="round"
    aria-hidden="true"
  >
    <line x1="4" y1="6" x2="20" y2="6" />
    <line x1="8" y1="12" x2="16" y2="12" />
    <line x1="11" y1="18" x2="13" y2="18" />
  </svg>
);

const CloseIcon = () => (
  <svg
    width="20"
    height="20"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth={2}
    strokeLinecap="round"
    strokeLinejoin="round"
    aria-hidden="true"
  >
    <line x1="18" y1="6" x2="6" y2="18" />
    <line x1="6" y1="6" x2="18" y2="18" />
  </svg>
);

const XSmallIcon = () => (
  <svg
    width="11"
    height="11"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth={2.5}
    strokeLinecap="round"
    strokeLinejoin="round"
    aria-hidden="true"
  >
    <line x1="18" y1="6" x2="6" y2="18" />
    <line x1="6" y1="6" x2="18" y2="18" />
  </svg>
);

// ── Internal helpers ──────────────────────────────────────────────────────────

function CheckList({
  options,
  selected,
  onChange,
}: {
  options: FilterOption[];
  selected: string[];
  onChange: (val: string[]) => void;
}) {
  function toggle(value: string) {
    onChange(
      selected.includes(value)
        ? selected.filter((v) => v !== value)
        : [...selected, value],
    );
  }

  return (
    <ul className={styles.checkList}>
      {options.map((item) => {
        const checked = selected.includes(item.value);
        return (
          <li key={item.value}>
            <label
              className={`${styles.checkItem} ${checked ? styles.checkItemActive : ""}`}
            >
              <input
                type="checkbox"
                className={styles.hiddenInput}
                checked={checked}
                onChange={() => toggle(item.value)}
              />
              <span
                className={`${styles.checkBox} ${checked ? styles.checkBoxChecked : ""}`}
                aria-hidden="true"
              />
              <span className={styles.checkLabel}>{item.label}</span>
            </label>
          </li>
        );
      })}
    </ul>
  );
}

// ── Component ─────────────────────────────────────────────────────────────────

export default function PLPFilters({
  priceRanges = DEFAULT_PRICES,
  cilindrajes = DEFAULT_CILINDRAJES,
  tecnologias = DEFAULT_TECNOLOGIAS,
  ordenarOptions = DEFAULT_ORDENAR,
  onApply,
  onClear,
}: PLPFiltersProps) {
  const [prices, setPrices] = useState<string[]>([]);
  const [cilindrajesSel, setCilindrajes] = useState<string[]>([]);
  const [tecnologiasSel, setTecnologias] = useState<string[]>([]);
  const [ordenarPor, setOrdenarPor] = useState("");
  const [isDrawerOpen, setIsDrawerOpen] = useState(false);

  // ── Computed tags ─────────────────────────────────────────────────────────

  const tags: FilterTag[] = [
    ...prices.map((v) => ({
      id: `price-${v}`,
      label: priceRanges.find((p) => p.value === v)?.label ?? v,
      value: v,
      group: "price" as const,
    })),
    ...cilindrajesSel.map((v) => ({
      id: `cil-${v}`,
      label: cilindrajes.find((c) => c.value === v)?.label ?? v,
      value: v,
      group: "cilindraje" as const,
    })),
    ...tecnologiasSel.map((v) => ({
      id: `tec-${v}`,
      label: tecnologias.find((t) => t.value === v)?.label ?? v,
      value: v,
      group: "tecnologia" as const,
    })),
  ];

  const hasFilters = tags.length > 0;

  // ── Actions ───────────────────────────────────────────────────────────────

  function handleApply() {
    const filters: ActiveFilters = {
      prices: prices,
      cilindrajes: cilindrajesSel,
      tecnologias: tecnologiasSel,
      ordenarPor,
    };
    onApply?.(filters);
    setIsDrawerOpen(false);
  }

  function handleClear() {
    setPrices([]);
    setCilindrajes([]);
    setTecnologias([]);
    setOrdenarPor("");
    onClear?.();
    setIsDrawerOpen(false);
  }

  function removeTag(tag: FilterTag) {
    if (tag.group === "price")
      setPrices((p) => p.filter((v) => v !== tag.value));
    if (tag.group === "cilindraje")
      setCilindrajes((p) => p.filter((v) => v !== tag.value));
    if (tag.group === "tecnologia")
      setTecnologias((p) => p.filter((v) => v !== tag.value));
  }

  // ── Tags row (shared) ─────────────────────────────────────────────────────

  const TagsRow = hasFilters ? (
    <ul className={styles.tags} aria-label="Filtros aplicados">
      {tags.map((tag) => (
        <li key={tag.id}>
          <button
            type="button"
            className={styles.tag}
            onClick={() => removeTag(tag)}
            aria-label={`Quitar filtro ${tag.label}`}
          >
            {tag.label}
            <XSmallIcon />
          </button>
        </li>
      ))}
    </ul>
  ) : null;

  // ── Ordenar select (shared) ───────────────────────────────────────────────

  const OrdenarSelect = ({ id }: { id: string }) => (
    <div className={styles.ordenarSelect}>
      <select
        id={id}
        value={ordenarPor}
        onChange={(e) => setOrdenarPor(e.target.value)}
        className={styles.ordenarNative}
        aria-label="Ordenar por"
      >
        <option value="">Ordenar por</option>
        {ordenarOptions.map((opt) => (
          <option key={opt.value} value={opt.value}>
            {opt.label}
          </option>
        ))}
      </select>
      <ChevronDown strokeWidth={1.2} />
    </div>
  );

  return (
    <section className={styles.section}>
      <div className={styles.inner}>
        <h2 className={styles.heading}>Encuentra tu moto por...</h2>

        {/* ── DESKTOP ─────────────────────────────────────────────────────── */}
        <div className={styles.desktop}>
          <div className={styles.filtersRow}>
            {/* Precio */}
            <div className={styles.group}>
              <p className={styles.groupTitle}>Selecciona el precio</p>
              <FilterCheckboxSelect
                label="Precio"
                placeholder="Cambiar"
                options={priceRanges}
                selected={prices}
                onChange={setPrices}
              />
            </div>

            {/* Cilindraje */}
            <div className={styles.group}>
              <p className={styles.groupTitle}>Cilindraje</p>
              <FilterCheckboxSelect
                label="Cilindraje"
                placeholder="Cambiar"
                options={cilindrajes}
                selected={cilindrajesSel}
                onChange={setCilindrajes}
              />
            </div>

            {/* Tecnologías */}
            <div className={styles.group}>
              <p className={styles.groupTitle}>Tecnologías</p>
              <FilterCheckboxSelect
                label="Tecnologías"
                placeholder="Cambiar"
                options={tecnologias}
                selected={tecnologiasSel}
                onChange={setTecnologias}
              />
            </div>

            {/* Botones */}
            <div className={styles.actions}>
              <Button
                label="Aplicar Filtros"
                variant="secondary"
                onClick={handleApply}
              />
              <Button
                label="Limpiar filtros"
                variant="outline-pill"
                onClick={handleClear}
              />
            </div>
          </div>

          <div className={styles.desktopBottom}>
            {TagsRow}
            <div className={styles.ordenarGroup}>
              <OrdenarSelect id="ordenar-desktop" />
            </div>
          </div>
        </div>

        {/* ── MOBILE BAR ──────────────────────────────────────────────────── */}
        <div className={styles.mobile}>
          <div className={styles.mobileBar}>
            <button
              type="button"
              className={`${styles.mobileFilterBtn} ${hasFilters ? styles.mobileFilterBtnActive : ""}`}
              onClick={() => setIsDrawerOpen(true)}
            >
              <FilterIcon />
              Filtrar
              {hasFilters && (
                <span className={styles.filterCount}>{tags.length}</span>
              )}
            </button>

            <OrdenarSelect id="ordenar-mobile" />
          </div>

          {TagsRow}
        </div>
      </div>

      {/* ── MOBILE DRAWER ───────────────────────────────────────────────────── */}
      {isDrawerOpen && (
        <div
          className={styles.overlay}
          onClick={() => setIsDrawerOpen(false)}
          aria-hidden="true"
        />
      )}

      <div
        className={[styles.drawer, isDrawerOpen ? styles.drawerOpen : ""]
          .filter(Boolean)
          .join(" ")}
        role="dialog"
        aria-modal="true"
        aria-label="Filtrar motocicletas"
      >
        {/* Header */}
        <div className={styles.drawerHeader}>
          <h3 className={styles.drawerTitle}>Filtrar</h3>
          <button
            type="button"
            className={styles.drawerClose}
            onClick={() => setIsDrawerOpen(false)}
            aria-label="Cerrar filtros"
          >
            <CloseIcon />
          </button>
        </div>

        {/* Scrollable content */}
        <div className={styles.drawerContent}>
          <div className={styles.drawerSection}>
            <p className={styles.drawerSectionTitle}>Precio</p>
            <CheckList
              options={priceRanges}
              selected={prices}
              onChange={setPrices}
            />
          </div>

          <div className={styles.drawerSection}>
            <p className={styles.drawerSectionTitle}>Cilindraje</p>
            <CheckList
              options={cilindrajes}
              selected={cilindrajesSel}
              onChange={setCilindrajes}
            />
          </div>

          <div className={styles.drawerSection}>
            <p className={styles.drawerSectionTitle}>Tecnología</p>
            <CheckList
              options={tecnologias}
              selected={tecnologiasSel}
              onChange={setTecnologias}
            />
          </div>
        </div>

        {/* Footer */}
        <div className={styles.drawerFooter}>
          <div className={styles.drawerBtn}>
            <Button
              label="Aplicar filtros"
              variant="secondary"
              onClick={handleApply}
            />
          </div>
          <div className={styles.drawerBtn}>
            <Button
              label="Limpiar filtros"
              variant="ghost"
              onClick={handleClear}
            />
          </div>
        </div>
      </div>
    </section>
  );
}
