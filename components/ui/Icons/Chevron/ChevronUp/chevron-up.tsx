import type { ChevronUpProps } from "./chevron-up.types";

export default function ChevronUp({ size = 24, strokeWidth = 1, className }: ChevronUpProps) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth={strokeWidth}
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
      className={className}
    >
      <polyline points="18 15 12 9 6 15" />
    </svg>
  );
}
