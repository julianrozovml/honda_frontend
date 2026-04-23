export interface FilterOption {
  value: string;
  label: string;
}

export interface FilterCheckboxSelectProps {
  label:       string;
  placeholder?: string;
  options:     FilterOption[];
  selected:    string[];
  onChange:    (selected: string[]) => void;
}
