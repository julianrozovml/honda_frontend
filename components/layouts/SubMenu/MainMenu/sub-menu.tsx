"use client";

import { useState } from "react";
import Link from "next/link";
import { useNavigation } from "@/components/layouts/NavigationProvider/navigation-provider";
import ChevronRight from "@/components/ui/Icons/Chevron/ChevronRight/chevron-right";
import type { NavItem } from "./sub-menu.types";
import "./sub-menu.scss";

// Icons (same as before)
const CloseIcon = () => (
  <svg
    viewBox="0 0 24 24"
    width="20"
    height="20"
    fill="none"
    stroke="currentColor"
    strokeWidth={2}
    strokeLinecap="round"
    strokeLinejoin="round"
  >
    <line x1="18" y1="6" x2="6" y2="18" />
    <line x1="6" y1="6" x2="18" y2="18" />
  </svg>
);

// ── Nav data ─────────────────────────────────────
const NAV_ITEMS: NavItem[] = [
  {
    id: "Motocicletas",
    label: "Motocicletas",
    children: [
      { label: "Motocicletas", href: "#1" },
      { label: "Planes de financiamiento", href: "#2" },
    ],
  },
  {
    id: "Pro-Honda",
    label: "Pro Honda",
    children: [
      { label: "Pro Honda", href: "#3" },
      { label: "Planes de financiamiento", href: "#4" },
    ],
  },
  {
    id: "Repuestos",
    label: "Repuestos",
    children: [
      { label: "Repuestos Honda", href: "#5" },
      { label: "Planes de financiamiento", href: "#6" },
    ],
  },
  {
    id: "Accesorios",
    label: "Accesorios",
    children: [
      { label: "Garantía Honda", href: "#7" },
      { label: "Rueda con Honda Seguro", href: "#8" },
      { label: "Mantenimiento", href: "#9" },
    ],
  },
];

// ── Component ─────────────────────────────────────
export default function SubMenu() {
  const { closeMenu: closeMenuCtx } = useNavigation();
  const [activeId, setActiveId] = useState<string | null>(null);

  function toggleDropdown(id: string) {
    setActiveId((prev) => (prev === id ? null : id));
  }

  function closeMenu() {
    closeMenuCtx();
    setActiveId(null);
  }

  return (
    <div className={`sub-menu ${activeId ? "sub-menu--open" : ""}`}>
      <nav
        className="sub-menu__nav"
        aria-label="Navegación principal"
        onMouseLeave={() => setActiveId(null)}
      >
        {/* ── NAV LIST ───────────────── */}
        <ul className="sub-menu__list">
  {NAV_ITEMS.map((item) => {
    const isExpanded = activeId === item.id;

   

    return (
      <li
        key={item.id}
        className={`sub-menu__item ${
          isExpanded ? "sub-menu__item--open" : ""
        }`}
        onMouseEnter={() => item.children && setActiveId(item.id)}
      >
        <button
          className="sub-menu__link"
          onClick={() => toggleDropdown(item.id)}
        >
          {item.label}
        </button>
      </li>
    );
  })}
</ul>

        {/* ── DROPDOWN ───────────────── */}
        {activeId && (
          <div className="sub-menu__dropdown">
            {(() => {
              const activeItem = NAV_ITEMS.find(
                (item) => item.id === activeId
              );

              if (!activeItem?.children) return null;

              return (
                <>
                  {/* MOBILE HEADER */}
                  <div className="sub-menu__mobile-header">
                    <h3>{activeItem.label}</h3>
                    <button onClick={() => setActiveId(null)}>
                      <CloseIcon />
                    </button>
                  </div>

                  {/* SEGMENT CONTROL */}
                  <div className="sub-menu__mobile-segment">
                    <button className="active">Bajo cilindraje</button>
                    <button>Alto cilindraje</button>
                  </div>

                  {/* LIST */}
                  <ul className="sub-menu__dropdown-list">
                    {activeItem.children.map((sub) => (
                      <li key={sub.href}>
                        <Link
                          href={sub.href}
                          className="sub-menu__dropdown-link"
                        >
                          <div className="sub-menu__dropdown-left">
                            {sub.label}
                          </div>

                          <span className="sub-menu__dropdown-chevron">
                            <ChevronRight />
                          </span>
                        </Link>
                      </li>
                    ))}
                  </ul>

                  {/* CTA */}
                  <div className="sub-menu__mobile-cta">
                    <Link href="#" className="cta-primary">
                      Ir a la tienda
                      <ChevronRight />
                    </Link>

                    <Link href="#" className="cta-secondary">
                      Comparar motos
                    </Link>
                  </div>

                  {/* DESKTOP CONTENT */}
                  <div className="sub-menu__dropdown-body">
                    <h2>{activeItem.label}</h2>

                    <div className="sub-menu__content-grid">
                      {activeItem.children.map((sub) => (
                        <Link
                          key={sub.href}
                          href={sub.href}
                          className="sub-menu__content-card"
                        >
                          {sub.label}
                        </Link>
                      ))}
                    </div>
                  </div>
                </>
              );
            })()}
          </div>
        )}
      </nav>
    </div>
  );
}