"use client";

import { useState } from "react";
import Link from "next/link";
import LogoHondaRed from "@/components/ui/Honda/LogoHondaRed/logo-honda-red";
import { useNavigation } from "@/components/layouts/NavigationProvider/navigation-provider";
import ChevronDown from "@/components/ui/Icons/Chevron/ChevronDown/chevron-down";
import ChevronRight from "@/components/ui/Icons/Chevron/ChevronRight/chevron-right";
import type { NavItem } from "./main-menu.types";
import "./main-menu.scss";

// ── Icons ─────────────────────────────────────────────────────────────────────

const ShieldIcon = () => (
  <svg viewBox="0 0 24 24" fill="none" strokeWidth={1.8} strokeLinecap="round" strokeLinejoin="round">
    <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
  </svg>
);

const RefreshCwIcon = () => (
  <svg viewBox="0 0 24 24" fill="none" strokeWidth={1.8} strokeLinecap="round" strokeLinejoin="round">
    <polyline points="23 4 23 10 17 10" />
    <polyline points="1 20 1 14 7 14" />
    <path d="M3.51 9a9 9 0 0 1 14.85-3.36L23 10M1 14l4.64 4.36A9 9 0 0 0 20.49 15" />
  </svg>
);

const WrenchIcon = () => (
  <svg viewBox="0 0 24 24" fill="none" strokeWidth={1.8} strokeLinecap="round" strokeLinejoin="round">
    <path d="M14.7 6.3a1 1 0 0 0 0 1.4l1.6 1.6a1 1 0 0 0 1.4 0l3.77-3.77a6 6 0 0 1-7.94 7.94l-6.91 6.91a2.12 2.12 0 0 1-3-3l6.91-6.91a6 6 0 0 1 7.94-7.94l-3.76 3.76z" />
  </svg>
);

const GearIcon = () => (
  <svg viewBox="0 0 24 24" fill="none" strokeWidth={1.8} strokeLinecap="round" strokeLinejoin="round">
    <circle cx="12" cy="12" r="3" />
    <path d="M19.4 15a1.65 1.65 0 0 0 .33 1.82l.06.06a2 2 0 0 1-2.83 2.83l-.06-.06a1.65 1.65 0 0 0-1.82-.33 1.65 1.65 0 0 0-1 1.51V21a2 2 0 0 1-4 0v-.09A1.65 1.65 0 0 0 9 19.4a1.65 1.65 0 0 0-1.82.33l-.06.06a2 2 0 0 1-2.83-2.83l.06-.06A1.65 1.65 0 0 0 4.68 15a1.65 1.65 0 0 0-1.51-1H3a2 2 0 0 1 0-4h.09A1.65 1.65 0 0 0 4.6 9a1.65 1.65 0 0 0-.33-1.82l-.06-.06a2 2 0 0 1 2.83-2.83l.06.06A1.65 1.65 0 0 0 9 4.68a1.65 1.65 0 0 0 1-1.51V3a2 2 0 0 1 4 0v.09a1.65 1.65 0 0 0 1 1.51 1.65 1.65 0 0 0 1.82-.33l.06-.06a2 2 0 0 1 2.83 2.83l-.06.06A1.65 1.65 0 0 0 19.4 9a1.65 1.65 0 0 0 1.51 1H21a2 2 0 0 1 0 4h-.09a1.65 1.65 0 0 0-1.51 1z" />
  </svg>
);

const AwardIcon = () => (
  <svg viewBox="0 0 24 24" fill="none" strokeWidth={1.8} strokeLinecap="round" strokeLinejoin="round">
    <circle cx="12" cy="8" r="6" />
    <path d="M15.477 12.89L17 22l-5-3-5 3 1.523-9.11" />
  </svg>
);



const SearchIcon = () => (
  <svg viewBox="0 0 24 24" fill="none" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round">
    <circle cx="11" cy="11" r="8" />
    <line x1="21" y1="21" x2="16.65" y2="16.65" />
  </svg>
);

const CloseIcon = () => (
  <svg viewBox="0 0 24 24" fill="none" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round">
    <line x1="18" y1="6" x2="6" y2="18" />
    <line x1="6" y1="6" x2="18" y2="18" />
  </svg>
);

const UserIcon = () => (
  <svg viewBox="0 0 24 24" fill="none" strokeWidth={1.8} strokeLinecap="round" strokeLinejoin="round">
    <path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2" />
    <circle cx="12" cy="7" r="4" />
  </svg>
);

const CartIcon = () => (
  <svg viewBox="0 0 24 24" fill="none" strokeWidth={1.8} strokeLinecap="round" strokeLinejoin="round">
    <path d="M6 2 3 6v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2V6l-3-4z" />
    <line x1="3" y1="6" x2="21" y2="6" />
    <path d="M16 10a4 4 0 0 1-8 0" />
  </svg>
);

// ── Nav data ──────────────────────────────────────────────────────────────────

const NAV_ITEMS: NavItem[] = [
  {
    id: "concesionarios",
    label: "Concesionarios",
    href: "/concesionarios",
    hasArrow: true,
  },
  {
    id: "financia",
    label: "Financia tu Moto",
    children: [
      { label: "Crédito Honda", href: "/financiamiento/credito" },
      { label: "Planes de financiamiento", href: "/financiamiento/planes" },
    ],
  },
  {
    id: "honda-te-cuenta",
    label: "Honda Te Cuenta",
    href: "/honda-te-cuenta",
  },
  {
    id: "mi-moto-honda",
    label: "Mi Moto Honda",
    children: [
      { label: "Garantía Honda",          href: "/mi-moto/garantia",      icon: <ShieldIcon /> },
      { label: "Rueda con Honda Seguro",  href: "/mi-moto/rueda-seguro",  icon: <RefreshCwIcon /> },
      { label: "Mantenimiento",           href: "/mi-moto/mantenimiento", icon: <WrenchIcon /> },
      { label: "Clubes",                  href: "/mi-moto/clubes",        icon: <GearIcon /> },
      { label: "Pro Honda",               href: "/mi-moto/pro-honda",     icon: <AwardIcon /> },
    ],
  },
  {
    id: "contactenos",
    label: "Contáctenos",
    children: [
      { label: "Servicio al cliente", href: "/contactenos/servicio" },
      { label: "Garantías",           href: "/contactenos/garantias" },
    ],
  },
  {
    id: "campanias",
    label: "Campañas de Seguridad",
    href: "/campanias-de-seguridad",
    active: true,
  },
  {
    id: "live-store",
    label: "Live Store",
    href: "/live-store",
    highlight: true,
  },
];

// ── Component ─────────────────────────────────────────────────────────────────

export default function MainMenu() {
  const { isMenuOpen: isOpen, closeMenu: closeMenuCtx } = useNavigation();
  const [activeId, setActiveId] = useState<string | null>(null);

  function toggleDropdown(id: string) {
    setActiveId((prev) => (prev === id ? null : id));
  }

  function closeMenu() {
    closeMenuCtx();
    setActiveId(null);
  }

  return (
    <>
      {/* ── Desktop nav bar ──────────────────────────────────────────────── */}
      <div className="main-menu">
        {/* Desktop nav — hidden on mobile */}
        <nav className="main-menu__nav" aria-label="Navegación principal">
          <ul className="main-menu__list">
            {NAV_ITEMS.map((item) => {
              const isExpanded = activeId === item.id;
              const itemClass = [
                "main-menu__item",
                item.children               ? "main-menu__item--has-children" : "",
                item.active                 ? "main-menu__item--active"        : "",
                item.highlight              ? "main-menu__item--highlight"     : "",
                isExpanded                  ? "main-menu__item--open"          : "",
              ].filter(Boolean).join(" ");

              return (
                <li key={item.id} className={itemClass}>
                  {item.children ? (
                    <>
                      <button
                        className="main-menu__link"
                        onClick={() => toggleDropdown(item.id)}
                        aria-expanded={isExpanded}
                        aria-haspopup="true"
                      >
                        {item.label}
                        <span className="main-menu__chevron" aria-hidden="true">
                          <ChevronDown strokeWidth={2} />
                        </span>
                      </button>

                      <div className="main-menu__dropdown" role="region">
                        <ul className="main-menu__dropdown-list">
                          {item.children.map((sub) => (
                            <li key={sub.href} className="main-menu__dropdown-item">
                              <Link
                                href={sub.href}
                                className="main-menu__dropdown-link"
                                onClick={() => setActiveId(null)}
                              >
                                {sub.icon && (
                                  <span className="main-menu__dropdown-icon" aria-hidden="true">
                                    {sub.icon}
                                  </span>
                                )}
                                {sub.label}
                              </Link>
                            </li>
                          ))}
                        </ul>
                      </div>
                    </>
                  ) : (
                    <Link href={item.href ?? "#"} className="main-menu__link">
                      {item.label}
                    </Link>
                  )}
                </li>
              );
            })}
          </ul>
        </nav>
      </div>

      {/* ── Mobile overlay + drawer ───────────────────────────────────────── */}
      {isOpen && (
        <div
          className="main-menu__overlay"
          onClick={closeMenu}
          aria-hidden="true"
        />
      )}

      <div
        className={["main-menu__drawer", isOpen ? "main-menu__drawer--open" : ""].filter(Boolean).join(" ")}
        role="dialog"
        aria-modal="true"
        aria-label="Menú de navegación"
      >
        {/* Drawer header */}
        <div className="main-menu__drawer-header">
          <Link href="/" onClick={closeMenu} aria-label="Ir al inicio">
            <LogoHondaRed width={120} />
          </Link>
          <div className="main-menu__drawer-actions">
            <button className="main-menu__drawer-btn" aria-label="Buscar">
              <SearchIcon />
            </button>
            <button
              className="main-menu__drawer-btn"
              onClick={closeMenu}
              aria-label="Cerrar menú"
            >
              <CloseIcon />
            </button>
          </div>
        </div>

        {/* Nav items */}
        <ul className="main-menu__mobile-list">
          {NAV_ITEMS.map((item) => {
            const isExpanded = activeId === item.id;
            const showArrow  = item.children || item.hasArrow;

            const itemClass = [
              "main-menu__mobile-item",
              item.active    ? "main-menu__mobile-item--active"    : "",
              item.highlight ? "main-menu__mobile-item--highlight" : "",
            ].filter(Boolean).join(" ");

            const linkClass = [
              "main-menu__mobile-link",
              isExpanded ? "main-menu__mobile-link--expanded" : "",
            ].filter(Boolean).join(" ");

            return (
              <li key={item.id} className={itemClass}>
                {item.children ? (
                  <>
                    <button
                      className={linkClass}
                      onClick={() => toggleDropdown(item.id)}
                      aria-expanded={isExpanded}
                    >
                      {item.label}
                      <span className="main-menu__mobile-chevron" aria-hidden="true">
                        {isExpanded ? <ChevronDown strokeWidth={2} /> : <ChevronRight strokeWidth={2} />}
                      </span>
                    </button>

                    {isExpanded && (
                      <ul className="main-menu__mobile-submenu">
                        {item.children.map((sub) => (
                          <li key={sub.href} className="main-menu__mobile-subitem">
                            <Link
                              href={sub.href}
                              className="main-menu__mobile-sublink"
                              onClick={closeMenu}
                            >
                              {sub.icon && (
                                <span className="main-menu__mobile-subicon" aria-hidden="true">
                                  {sub.icon}
                                </span>
                              )}
                              {sub.label}
                            </Link>
                          </li>
                        ))}
                      </ul>
                    )}
                  </>
                ) : (
                  <Link
                    href={item.href ?? "#"}
                    className={linkClass}
                    onClick={closeMenu}
                  >
                    {item.label}
                    {showArrow && (
                      <span className="main-menu__mobile-chevron" aria-hidden="true">
                        <ChevronRight strokeWidth={2} />
                      </span>
                    )}
                  </Link>
                )}
              </li>
            );
          })}
        </ul>

        {/* Bottom actions */}
        <div className="main-menu__mobile-footer">
          <button className="main-menu__footer-btn">
            <span className="main-menu__footer-vin" aria-hidden="true">VIN</span>
            Código
          </button>
          <Link href="/login" className="main-menu__footer-btn" onClick={closeMenu}>
            <UserIcon />
            Usuario
          </Link>
          <Link href="/carrito" className="main-menu__footer-btn" onClick={closeMenu}>
            <CartIcon />
            Carrito
          </Link>
        </div>
      </div>
    </>
  );
}
