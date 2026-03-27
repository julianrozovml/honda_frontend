import type { ContainerProps } from "./container.types";
import styles from "./Container.module.scss";

export default function Container({
  children,
  as: Tag = "div",
  className,
}: ContainerProps) {
  return (
    <Tag className={[styles.container, className].filter(Boolean).join(" ")}>
      {children}
    </Tag>
  );
}
