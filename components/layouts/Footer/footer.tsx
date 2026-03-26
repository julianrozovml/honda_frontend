import Link from "next/link";
import LogoHondaDark from "../../ui/LogoHondaDark/logo-honda-dark";
import "./footer.scss";

// ── Data ─────────────────────────────────────────────────────────────────────

const motosCol1 = [
  { label: "Compra ahora", href: "#" },
  { label: "Concesionarios", href: "#" },
  { label: "Financia tu moto", href: "#" },
  { label: "Financiación ProgreSER", href: "#" },
  { label: "Financiación Sufi", href: "#" },
  { label: "Honda te cuenta", href: "#" },
  { label: "Mi Moto Honda", href: "#" },
  { label: "Garantía de Motos Honda", href: "#" },
];

const motosCol2 = [
  { label: "Rueda con Honda seguro", href: "#" },
  { label: "Mantenimiento", href: "#" },
  { label: "Clubes", href: "#" },
  { label: "Ayuda y preguntas", href: "#" },
  { label: "Campañas de seguridad", href: "#" },
  { label: "Contáctanos", href: "#" },
  { label: "Trabaja con nosotros", href: "#" },
];

const hondaTeCuenta = [
  { label: "Noticias y Blog", href: "#" },
  { label: "Videos", href: "#" },
];

const contactInfo = [
  { city: "Bogotá:", phone: "601 745 9036", tel: "6017459036" },
  { city: "Medellín:", phone: "604 520 2891", tel: "6045202891" },
  { city: "Cali:", phone: "602 347 2225", tel: "6023472225" },
];

const legalLinks = [
  { label: "Términos y condiciones", href: "#" },
  { label: "Políticas de privacidad", href: "#" },
];

export default function Footer() {
  return (
    <footer className="footer">
      {/* ── Logo ───────────────────────────────────────────────────────────── */}
      <div className="footer__logo-wrapper">
        <Link href="/" aria-label="Ir al inicio">
          <LogoHondaDark className="footer__logo" width={178} height={27} />
        </Link>
      </div>

      {/* ── Main content ───────────────────────────────────────────────────── */}
      <div className="footer__inner">
        {/* Motos */}
        <div className="footer__section">
          <h3 className="footer__section-title">Motos</h3>
          <div className="footer__motos-grid">
            <ul className="footer__link-list">
              {motosCol1.map((item) => (
                <li key={item.href + item.label}>
                  <Link href={item.href} className="footer__link">
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
            <ul className="footer__link-list">
              {motosCol2.map((item) => (
                <li key={item.href + item.label}>
                  <Link href={item.href} className="footer__link">
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Honda te cuenta */}
        <div className="footer__section">
          <h3 className="footer__section-title">Honda te cuenta</h3>
          <ul className="footer__link-list">
            {hondaTeCuenta.map((item) => (
              <li key={item.label}>
                <Link href={item.href} className="footer__link">
                  {item.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        {/* Contacto */}
        <div className="footer__section">
          <h3 className="footer__section-title">Contacto</h3>
          <ul className="footer__link-list">
            {contactInfo.map((item) => (
              <li key={item.city} className="footer__contact-item">
                <span className="footer__contact-city">{item.city}</span>{" "}
                <a href={`tel:${item.tel}`} className="footer__contact-phone">
                  {item.phone}
                </a>
              </li>
            ))}
          </ul>
        </div>

        {/* Newsletter */}
        <div className="footer__section">
          <p className="footer__newsletter-title">
            No te pierdas nuestras novedades
          </p>
          <div className="footer__newsletter-form">
            <input
              type="email"
              placeholder="Ingresa tu correo"
              className="footer__newsletter-input"
              aria-label="Correo electrónico"
            />
            <button type="button" className="footer__newsletter-btn">
              Suscribirse
            </button>
          </div>
          <label className="footer__checkbox-label">
            <input type="checkbox" className="footer__checkbox" />
            <span className="footer__checkbox-text">
              Acepto los{" "}
              <Link href="#" className="footer__checkbox-link">
                Términos y Condiciones
              </Link>
              , política de privacidad y política de habeas data de la página
              web Honda Motos.
            </span>
          </label>
        </div>
      </div>

      {/* ── Legal bar ──────────────────────────────────────────────────────── */}
      <div className="footer__legal">
        <p className="footer__legal-text">
          Todos los derechos reservados
          {legalLinks.map((item) => (
            <span key={item.label}>
              <span className="footer__separator">|</span>
              <Link href={item.href} className="footer__legal-link">
                {item.label}
              </Link>
            </span>
          ))}
        </p>
      </div>

      {/* ── Copyright bar ──────────────────────────────────────────────────── */}
      <div className="footer__copyright">
        <p>Copyright © 2025 - Honda Motos Colombia</p>
      </div>
    </footer>
  );
}
