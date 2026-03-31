import type { FullWidthProps } from "./fullwidth.types";
import styles from "./FullWidth.module.scss";

export default function FullWidth({
  children,
  as: Tag = "div",
  className,
}: FullWidthProps) {
  return (
    <Tag className={[styles.fullwidth, className].filter(Boolean).join(" ")}>
      {children}
    </Tag>
  );
}
