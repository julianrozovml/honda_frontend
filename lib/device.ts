import { headers } from "next/headers";

/**
 * Returns true when the User-Agent string matches a common mobile device pattern.
 */
function isMobile(userAgent: string): boolean {
  return /mobile|android|iphone|ipad|ipod/i.test(userAgent);
}

/**
 * Server-side helper — reads the User-Agent from the incoming request headers
 * and returns true if the request comes from a mobile device.
 * Only usable in React Server Components and Route Handlers.
 */
export async function getIsMobile(): Promise<boolean> {
  const headersList = await headers();
  const ua = headersList.get("user-agent") ?? "";
  return isMobile(ua);
}
