import Link from "next/link";
import LogoHondaRed from "../../ui/LogoHondaRed/logo-honda-red";

// ── Inline SVG icons (no lucide-react dependency) ──────────────────────────

const SearchIcon = () => (
  <svg
    viewBox="0 0 24 24"
    className="w-4 h-4 stroke-current fill-none"
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
    className="w-4 h-4 stroke-current fill-none"
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
    className="w-5 h-5 stroke-current fill-none"
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
    className="w-4 h-4 stroke-current fill-none"
    strokeWidth={1.8}
    strokeLinecap="round"
    strokeLinejoin="round"
  >
    <path d="M21 10c0 7-9 13-9 13S3 17 3 10a9 9 0 1 1 18 0z" />
    <circle cx="12" cy="10" r="3" />
  </svg>
);

// ── Component ───────────────────────────────────────────────────────────────

export default function Header() {
  return (
    <header className="sticky top-0 z-50 w-full border-b border-gray-200 bg-white shadow-sm">
      <div className="mx-auto flex h-14 max-w-7xl items-center gap-4 px-4 sm:px-6 lg:px-8">
        {/* Logo */}
        <Link href="/" className="shrink-0 flex items-center">
          <LogoHondaRed width={178} height={27} />
        </Link>

        {/* Search bar */}
        <div className="flex flex-1 items-center max-w-xl mx-4">
          <div className="relative w-full">
            <input
              type="text"
              placeholder="Busca productos, accesorios, repuestos, VIN"
              className="w-full border border-gray-300 rounded-sm py-2 pl-4 pr-10 text-sm text-gray-700 placeholder:text-gray-400 focus:outline-none focus:border-gray-400"
            />
            <button
              type="submit"
              aria-label="Buscar"
              className="absolute right-3 top-1/2 -translate-y-1/2 text-[#CC0000] hover:text-red-700 transition-colors"
            >
              <SearchIcon />
            </button>
          </div>
        </div>

        {/* Right actions */}
        <div className="flex items-center gap-5 shrink-0 text-gray-700">
          {/* Código VIN */}
          <button
            type="button"
            className="flex items-center gap-2 text-sm hover:text-[#CC0000] transition-colors"
          >
            <span className="border border-gray-800 text-gray-800 text-[11px] font-bold px-[6px] py-[2px] rounded-sm leading-none">
              VIN
            </span>
            <span className="hidden sm:inline text-sm font-medium">
              Código VIN
            </span>
          </button>

          {/* Ubicación */}
          <button
            type="button"
            className="flex items-center gap-1.5 text-sm font-medium hover:text-[#CC0000] transition-colors"
          >
            <MapPinIcon />
            <span className="hidden sm:inline">Ubicación</span>
          </button>

          {/* Login */}
          <Link
            href="/login"
            className="flex items-center gap-1.5 text-sm font-medium hover:text-[#CC0000] transition-colors"
          >
            <UserIcon />
            <span className="hidden sm:inline">Login</span>
          </Link>

          {/* Ver carrito */}
          <Link
            href="/carrito"
            className="flex items-center gap-1.5 text-sm font-medium hover:text-[#CC0000] transition-colors"
          >
            <div className="relative">
              <CartIcon />
              {/* Badge */}
              <span className="absolute -top-2 -right-2 bg-[#CC0000] text-white text-[10px] font-bold w-4 h-4 rounded-full flex items-center justify-center leading-none">
                2
              </span>
            </div>
            <span className="hidden sm:inline">Ver carrito</span>
          </Link>
        </div>
      </div>
    </header>
  );
}
