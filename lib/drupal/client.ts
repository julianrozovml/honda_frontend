// ============================================================
// DRUPAL CLIENT
// Base fetch para todos los servicios que consumen el API de Drupal.
// Solo usable en el servidor (Server Components, Server Actions,
// Route Handlers).
// ============================================================

// ── Configuración ─────────────────────────────────────────────────────────────

const BASE_URL   = process.env.DRUPAL_API_URL;
const API_TOKEN  = process.env.DRUPAL_API_TOKEN;

if (!BASE_URL) {
  throw new Error("DRUPAL_API_URL no está definida en las variables de entorno.");
}

// ── Tipos ─────────────────────────────────────────────────────────────────────

export type HttpMethod = "GET" | "POST" | "PUT" | "PATCH" | "DELETE";

export interface DrupalFetchOptions {
  /** Método HTTP. Por defecto GET. */
  method?: HttpMethod;
  /** Body para POST/PUT/PATCH — se serializa automáticamente a JSON. */
  body?: unknown;
  /**
   * Estrategia de caché de Next.js.
   * - `revalidate: N`  → ISR: revalida cada N segundos
   * - `revalidate: 0`  → sin caché, siempre fresco (útil para mutaciones)
   * - `tags: [...]`    → on-demand revalidation via revalidateTag()
   */
  cache?: {
    revalidate?: number;
    tags?: string[];
  };
}

// ── Error personalizado ───────────────────────────────────────────────────────

export class DrupalError extends Error {
  constructor(
    public readonly status: number,
    public readonly endpoint: string,
    message: string,
  ) {
    super(message);
    this.name = "DrupalError";
  }
}

// ── Cliente base ──────────────────────────────────────────────────────────────

/**
 * Realiza un fetch al API de Drupal con autenticación, manejo de errores
 * y configuración de caché para Next.js App Router.
 *
 * @param endpoint - Ruta relativa al BASE_URL, ej: "/api/campaigns"
 * @param options  - Método, body y estrategia de caché
 *
 * @throws {DrupalError} cuando el servidor responde con un status >= 400
 */
export async function drupalFetch<T>(
  endpoint: string,
  options: DrupalFetchOptions = {},
): Promise<T> {
  const { method = "GET", body, cache } = options;

  const res = await fetch(`${BASE_URL}${endpoint}`, {
    method,
    headers: {
      "Content-Type":  "application/json",
      "Accept":        "application/json",
      ...(API_TOKEN ? { "Authorization": `Bearer ${API_TOKEN}` } : {}),
    },
    ...(body ? { body: JSON.stringify(body) } : {}),
    next: {
      ...(cache?.revalidate !== undefined ? { revalidate: cache.revalidate } : {}),
      ...(cache?.tags?.length             ? { tags: cache.tags }             : {}),
    },
  });

  if (!res.ok) {
    throw new DrupalError(
      res.status,
      endpoint,
      `Drupal respondió ${res.status} en ${endpoint}`,
    );
  }

  return res.json() as Promise<T>;
}
