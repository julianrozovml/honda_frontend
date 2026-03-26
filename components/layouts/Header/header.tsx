import Link from "next/link";
import LogoHondaRed from "@/components/ui/LogoHondaRed/logo-honda-red";
import "./header.scss";

// ── Inline SVG icons ──────────────────────────────────────────────────────────

const SearchIcon = () => (
  <svg
    viewBox="0 0 24 24"
    className="header__icon"
    strokeWidth={2.2}
    strokeLinecap="round"
    strokeLinejoin="round"
  >
    <circle cx="11" cy="11" r="8" />
    <path d="M21 21l-4.35-4.35" />
  </svg>
);

const UserIcon = () => (
  <svg
    viewBox="0 0 24 24"
    className="header__icon"
    strokeWidth={1.8}
    strokeLinecap="round"
    strokeLinejoin="round"
  >
    <path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2" />
    <circle cx="12" cy="7" r="4" />
  </svg>
);

const CartIcon = () => (
  <svg
    viewBox="0 0 24 24"
    className="header__icon header__icon--lg"
    strokeWidth={1.8}
    strokeLinecap="round"
    strokeLinejoin="round"
  >
    <path d="M6 2 3 6v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2V6l-3-4z" />
    <line x1="3" y1="6" x2="21" y2="6" />
    <path d="M16 10a4 4 0 0 1-8 0" />
  </svg>
);

const MapPinIcon = () => (
  <svg
    viewBox="0 0 24 24"
    className="header__icon"
    strokeWidth={1.8}
    strokeLinecap="round"
    strokeLinejoin="round"
  >
    <path d="M21 10c0 7-9 13-9 13S3 17 3 10a9 9 0 1 1 18 0z" />
    <circle cx="12" cy="10" r="3" />
  </svg>
);

// ── Component ─────────────────────────────────────────────────────────────────

export default function Header() {
  return (
    <header className="header">
      <div className="header__inner">

        {/* Logo */}
        <Link href="/" className="header__logo" aria-label="Ir al inicio">
          <LogoHondaRed width={178} />
        </Link>

        {/* Search */}
        <div className="header__search">
          <div className="header__search-wrapper">
            <input
              type="text"
              placeholder="Busca productos, accesorios, repuestos, VIN"
              className="header__search-input"
            />
            <button type="submit" aria-label="Buscar" className="header__search-btn">
              <SearchIcon />
            </button>
          </div>
        </div>

        {/* Actions */}
        <div className="header__actions">

          {/* VIN */}
          <button type="button" className="header__action-btn">
            <span className="header__vin-badge">VIN</span>
            <span className="header__action-label">Código VIN</span>
          </button>

          {/* Ubicación */}
          <button type="button" className="header__action-btn">
            <MapPinIcon />
            <span className="header__action-label">Ubicación</span>
          </button>

          {/* Login */}
          <Link href="/login" className="header__action-btn">
            <UserIcon />
            <span className="header__action-label">Login</span>
          </Link>

          {/* Carrito */}
          <Link href="/carrito" className="header__action-btn">
            <div className="header__cart">
              <CartIcon />
              <span className="header__cart-badge">2</span>
            </div>
            <span className="header__action-label">Ver carrito</span>
          </Link>

        </div>
      </div>
    </header>
  );
}
