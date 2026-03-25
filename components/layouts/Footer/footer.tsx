import LogoHondaDark from "../../ui/LogoHondaDark/logo-honda-dark";
import type { NavLink, ContactItem } from "./footer.types";

const motosCol1: NavLink[] = [
  { label: "Compra ahora", href: "#" },
  { label: "Concesionarios", href: "#" },
  { label: "Financia tu moto", href: "#" },
  { label: "Financiación ProgreSER", href: "#" },
  { label: "Financiación Sufi", href: "#" },
  { label: "Honda te cuenta", href: "#" },
  { label: "Mi Moto Honda", href: "#" },
  { label: "Garantía de Motos Honda", href: "#" },
];

const motosCol2: NavLink[] = [
  { label: "Rueda con Honda seguro", href: "#" },
  { label: "Mantenimiento", href: "#" },
  { label: "Clubes", href: "#" },
  { label: "Ayuda y preguntas", href: "#" },
  { label: "Campañas de seguridad", href: "#" },
  { label: "Contáctanos", href: "#" },
  { label: "Trabaja con nosotros", href: "#" },
];

const hondaTeCuenta: NavLink[] = [
  { label: "Noticias y Blog", href: "#" },
  { label: "Videos", href: "#" },
];

const contactInfo: ContactItem[] = [
  { city: "Bogotá:", phone: "601 745 9036" },
  { city: "Medellín:", phone: "604 520 2891" },
  { city: "Cali:", phone: "602 347 2225" },
];

export default function Footer() {
  return (
    <footer className="bg-white border-t border-gray-200 font-sans text-gray-800">
      {/* Main footer content */}
      <div className="max-w-7xl mx-auto px-6 py-10">
        <div className="grid grid-cols-1 lg:grid-cols-[auto_1fr_1fr_1fr_1fr] gap-8">
          {/* Logo */}
          <div className="flex items-start pt-1 min-w-[130px]">
            <LogoHondaDark width={178} height={27} />
          </div>

          {/* Motos – two sub-columns */}
          <div>
            <h3 className="text-base font-bold mb-4 text-gray-900">Motos</h3>
            <div className="grid grid-cols-2 gap-x-6 gap-y-1">
              <ul className="space-y-[6px]">
                {motosCol1.map((item) => (
                  <li key={item.label}>
                    <a
                      href={item.href}
                      className="text-sm text-gray-700 hover:text-red-600 hover:underline transition-colors"
                    >
                      {item.label}
                    </a>
                  </li>
                ))}
              </ul>
              <ul className="space-y-[6px]">
                {motosCol2.map((item) => (
                  <li key={item.label}>
                    <a
                      href={item.href}
                      className="text-sm text-gray-700 hover:text-red-600 hover:underline transition-colors"
                    >
                      {item.label}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          {/* Honda te cuenta */}
          <div>
            <h3 className="text-base font-bold mb-4 text-gray-900">
              Honda te cuenta
            </h3>
            <ul className="space-y-[6px]">
              {hondaTeCuenta.map((item) => (
                <li key={item.label}>
                  <a
                    href={item.href}
                    className="text-sm text-gray-700 hover:text-red-600 hover:underline transition-colors"
                  >
                    {item.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Contacto */}
          <div>
            <h3 className="text-base font-bold mb-4 text-gray-900">Contacto</h3>
            <ul className="space-y-[6px]">
              {contactInfo.map((item) => (
                <li key={item.city} className="text-sm text-gray-700">
                  {item.city}{" "}
                  <a
                    href={`tel:${item.phone.replace(/\s/g, "")}`}
                    className="text-red-600 hover:underline"
                  >
                    {item.phone}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Redes + Newsletter */}
          <div className="space-y-5">
            {/* Social */}
            <div>
              <p className="text-sm font-semibold text-gray-900 mb-3">
                Síguenos y entérate en:
              </p>
              <div className="flex items-center gap-3"></div>
            </div>

            {/* Newsletter */}
            <div>
              <p className="text-sm font-semibold text-gray-900 mb-3">
                No te pierdas nuestras novedades
              </p>
              <div className="flex">
                <input
                  type="email"
                  placeholder="Ingresa tu correo"
                  className="flex-1 min-w-0 border border-gray-300 px-3 py-2 text-sm focus:outline-none focus:border-red-500"
                />
                <button
                  type="button"
                  className="bg-gray-800 hover:bg-red-600 text-white text-sm font-medium px-4 py-2 transition-colors whitespace-nowrap"
                >
                  Suscribirse
                </button>
              </div>

              {/* Terms checkbox */}
              <label className="flex items-start gap-2 mt-3 cursor-pointer">
                <input
                  type="checkbox"
                  className="mt-[3px] shrink-0 accent-red-600"
                />
                <span className="text-xs text-gray-600 leading-snug">
                  Acepto los{" "}
                  <a
                    href="#"
                    className="underline text-gray-700 hover:text-red-600"
                  >
                    Términos y Condiciones
                  </a>
                  , política de privacidad y política de habeas data de la
                  página web Honda Motos.
                </span>
              </label>
            </div>
          </div>
        </div>
      </div>

      {/* Legal bar */}
      <div className="border-t border-gray-200 bg-gray-100 py-3 text-center">
        <p className="text-xs text-gray-500">
          Todos los derechos reservados <span className="mx-1">|</span>
          <a
            href="#"
            className="hover:underline hover:text-red-600 transition-colors"
          >
            Términos y condiciones
          </a>
          <span className="mx-1">|</span>
          <a
            href="#"
            className="hover:underline hover:text-red-600 transition-colors"
          >
            Políticas de privacidad
          </a>
        </p>
      </div>

      {/* Copyright bar */}
      <div className="bg-gray-900 py-3 text-center">
        <p className="text-xs text-gray-400">
          Copyright © 2025 - Honda Motos Colombia
        </p>
      </div>
    </footer>
  );
}
