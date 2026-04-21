import { z } from "zod";

// ── Text ──────────────────────────────────────────────────────────────────────

export const textOnly = z
  .string()
  .min(3, "Mínimo 3 caracteres")
  .max(50, "Demasiado largo")
  .regex(/^[a-zA-ZÀ-ÿ\s]+$/, "Solo se permiten letras");

export const freeText = (min = 1, max = 500) =>
  z
    .string()
    .min(min, `Mínimo ${min} caracteres`)
    .max(max, `Máximo ${max} caracteres`);

// ── Numbers ───────────────────────────────────────────────────────────────────

export const numbersOnly = z
  .string()
  .regex(/^\d+$/, "Solo se permiten números");

export const documentNumber = numbersOnly
  .min(5, "Número de documento inválido")
  .max(15, "Número de documento demasiado largo");

export const colombianPhone = z
  .string()
  .regex(/^3\d{9}$/, "Debe ser un celular colombiano (10 dígitos, empieza por 3)");

// ── Contact ───────────────────────────────────────────────────────────────────

export const validEmail = z
  .string()
  .email("Correo electrónico inválido")
  .max(100, "Correo demasiado largo");

// ── Selects ───────────────────────────────────────────────────────────────────

export const requiredOption = (message = "Selecciona una opción") =>
  z.string().min(1, message);

// ── Legal ─────────────────────────────────────────────────────────────────────

export const acceptedTerms = z.literal(true, {
  errorMap: () => ({ message: "Debes aceptar los términos y condiciones" }),
});
