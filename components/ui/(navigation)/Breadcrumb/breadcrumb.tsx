import React from "react";
import Link from "next/link";
import type { BreadcrumbProps } from "./breadcrumb.types";
import {
  Breadcrumb,
  BreadcrumbList,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbPage,
  BreadcrumbSeparator,
} from "@/components/ui/breadcrumb";
import styles from "./Breadcrumb.module.scss";

export default function AppBreadcrumb({ items }: BreadcrumbProps) {
  return (
    <div className={styles.nav}>
      <div className={styles.inner}>
        <Breadcrumb>
          <BreadcrumbList>
            {items.map((item, index) => {
              const isLast = index === items.length - 1;

              return (
                <React.Fragment key={item.label}>
                  <BreadcrumbItem>
                    {isLast ? (
                      <BreadcrumbPage className={styles.current}>
                        {item.label}
                      </BreadcrumbPage>
                    ) : (
                      <BreadcrumbLink asChild className={styles.link}>
                        <Link href={item.href ?? "/"}>{item.label}</Link>
                      </BreadcrumbLink>
                    )}
                  </BreadcrumbItem>

                  {!isLast && (
                    <BreadcrumbSeparator className={styles.separator} />
                  )}
                </React.Fragment>
              );
            })}
          </BreadcrumbList>
        </Breadcrumb>
      </div>
    </div>
  );
}
