export interface InputProps {
  value: string;
  onChange: (value: string) => void;
  type?: "text" | "email" | "password" | "tel" | "number" | "url";
  name?: string;
  id?: string;
  label?: string;
  placeholder?: string;
  error?: string;
  disabled?: boolean;
  className?: string;
}
