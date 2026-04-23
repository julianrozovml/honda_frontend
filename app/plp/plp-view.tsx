"use client";

import { useState } from "react";
import PLPFilters from "@/components/drupal/PLPFilters/plp-filters";
import CardSingleMotorbike from "@/components/ui/Cards/CardSingleMotorbike/card-single-motorbike";
import type { ActiveFilters } from "@/components/drupal/PLPFilters/plp-filters.types";
import type { CardSingleMotorbikeProps } from "@/components/ui/Cards/CardSingleMotorbike/card-single-motorbike.types";
import styles from "./plp-view.module.scss";

interface PLPViewProps {
  motorbikes: CardSingleMotorbikeProps[];
}

function applyFilters(
  motorbikes: CardSingleMotorbikeProps[],
  filters: ActiveFilters,
): CardSingleMotorbikeProps[] {
  let results = [...motorbikes];

  if (filters.prices.length > 0) {
    results = results.filter((m) => {
      const price = parseFloat(m.price.replace(/\./g, ""));
      return filters.prices.some((range) => {
        if (range === "5000000+") return price > 5000000;
        const [min, max] = range.split("-").map(Number);
        return price >= min && price <= max;
      });
    });
  }

  if (filters.cilindrajes.length > 0) {
    results = results.filter(
      (m) => m.cilindraje && filters.cilindrajes.includes(m.cilindraje),
    );
  }

  if (filters.tecnologias.length > 0) {
    results = results.filter(
      (m) => m.tecnologia && filters.tecnologias.includes(m.tecnologia),
    );
  }

  return results;
}

export default function PLPView({ motorbikes }: PLPViewProps) {
  const [results, setResults] = useState<CardSingleMotorbikeProps[]>(motorbikes);

  function handleApply(filters: ActiveFilters) {
    setResults(applyFilters(motorbikes, filters));
  }

  function handleClear() {
    setResults(motorbikes);
  }

  return (
    <>
      <PLPFilters onApply={handleApply} onClear={handleClear} />
      <section className={styles.results}>
        <div className={styles.grid}>
          {results.length > 0 ? (
            results.map((moto) => (
              <CardSingleMotorbike key={moto.id} {...moto} />
            ))
          ) : (
            <p className={styles.empty}>
              No se encontraron resultados para los filtros seleccionados.
            </p>
          )}
        </div>
      </section>
    </>
  );
}
