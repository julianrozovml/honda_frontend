import type { FilterOption } from "@/components/ui/Forms/FilterCheckboxSelect/filter-checkbox-select.types";

export type { FilterOption };

export interface ActiveFilters {
  prices:      string[];
  cilindrajes: string[];
  tecnologias: string[];
  ordenarPor:  string;
}

export interface FilterTag {
  id:    string;
  label: string;
  value: string;
  group: "price" | "cilindraje" | "tecnologia";
}

export interface PLPFiltersProps {
  priceRanges?:    FilterOption[];
  cilindrajes?:    FilterOption[];
  tecnologias?:    FilterOption[];
  ordenarOptions?: FilterOption[];
  onApply?:        (filters: ActiveFilters) => void;
  onClear?:        () => void;
}
