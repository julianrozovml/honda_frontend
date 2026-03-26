import Link from "next/link";
import type { BreadcrumbProps } from "./breadcrumb.types";
import styles from "./Breadcrumb.module.scss";

export default function Breadcrumb({ items }: BreadcrumbProps) {
  return (
    <nav className={styles.nav} aria-label="Breadcrumb">
      <div className={styles.inner}>
        <ol
          style={{ display: "contents" }}
          itemScope
          itemType="https://schema.org/BreadcrumbList"
        >
          {items.map((item, index) => {
            const isLast = index === items.length - 1;

            return (
              <li
                key={item.label}
                className={styles.item}
                itemProp="itemListElement"
                itemScope
                itemType="https://schema.org/ListItem"
                style={{ display: "contents" }}
              >
                {!isLast && item.href ? (
                  <>
                    <Link href={item.href} className={styles.link} itemProp="item">
                      <span itemProp="name">{item.label}</span>
                    </Link>
                    <span className={styles.separator} aria-hidden="true">
                      /
                    </span>
                  </>
                ) : (
                  <span className={styles.current} aria-current="page" itemProp="name">
                    {item.label}
                  </span>
                )}
                <meta itemProp="position" content={String(index + 1)} />
              </li>
            );
          })}
        </ol>
      </div>
    </nav>
  );
}
