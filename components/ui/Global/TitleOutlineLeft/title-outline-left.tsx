import type { TitleOutlineLeftProps } from "./title-outline-left.types";
import styles from "./TitleOutlineLeft.module.scss";

export default function TitleOutlineLeft({
  label,
  as: Tag = "h2",
  className,
}: TitleOutlineLeftProps) {
  return (
    <Tag className={[styles.title, className].filter(Boolean).join(" ")}>
      {label}
    </Tag>
  );
}
