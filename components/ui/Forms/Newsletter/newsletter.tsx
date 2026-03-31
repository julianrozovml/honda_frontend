"use client";

import { useState } from "react";
import Link from "next/link";
import Input from "@/components/ui/Forms/Input/input";
import Button from "@/components/ui/Buttons/Button/button";
import type { NewsletterProps } from "./newsletter.types";
import styles from "./Newsletter.module.scss";

export default function Newsletter({
  title = "No te pierdas nuestras novedades",
  onSubmit,
  termsHref = "#",
  className,
}: NewsletterProps) {
  const [email, setEmail] = useState("");

  function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    const trimmed = email.trim();
    if (!trimmed) return;
    onSubmit?.(trimmed);
  }

  return (
    <div className={[styles.wrapper, className].filter(Boolean).join(" ")}>
      {title && <p className={styles.title}>{title}</p>}
      <form onSubmit={handleSubmit} noValidate className={styles.form}>
        <Input
          type="email"
          id="newsletter-email"
          name="email"
          value={email}
          onChange={setEmail}
          placeholder="Ingresa tu correo"
          className={styles.inputWrapper}
        />
        <Button
          type="submit"
          label="Suscribirse"
          variant="outline-border-right"
        />
      </form>
      <label className={styles.checkboxLabel}>
        <input type="checkbox" className={styles.checkbox} />
        <span className={styles.checkboxText}>
          Acepto los{" "}
          <Link href={termsHref} className={styles.checkboxLink}>
            Términos y Condiciones
          </Link>
          , política de privacidad y política de habeas data de la página web
          Honda Motos.
        </span>
      </label>
    </div>
  );
}
