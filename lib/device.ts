/**
 * Returns true when the User-Agent string matches a common mobile device pattern.
 * Intended for server-side use with Next.js `headers()`.
 */
export function isMobile(userAgent: string): boolean {
  return /mobile|android|iphone|ipad|ipod/i.test(userAgent);
}
