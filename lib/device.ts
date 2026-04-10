import { headers } from "next/headers";

const MOBILE_UA_PATTERN = /mobile|android|iphone|ipad|ipod/i;

/**
 * Server-side helper — detects whether the request comes from a mobile device.
 *
 * Detection strategy (in order of priority):
 * 1. `Sec-CH-Viewport-Width` client hint — accurate viewport width sent by the
 *    browser when the server includes `Accept-CH: Sec-CH-Viewport-Width` in its
 *    response headers (configure in next.config).
 * 2. User-Agent fallback — used when the client hint is not present.
 *
 * @param breakpoint - Screen width in px below which the device is considered
 *                     mobile. Defaults to 1024 (lg breakpoint).
 *
 * Only usable in React Server Components and Route Handlers.
 */
export async function getIsMobile(breakpoint = 1024): Promise<boolean> {
  const headersList = await headers();

  const viewportWidth = headersList.get("sec-ch-viewport-width");
  if (viewportWidth !== null) {
    return parseInt(viewportWidth, 10) < breakpoint;
  }

  const ua = headersList.get("user-agent") ?? "";
  return MOBILE_UA_PATTERN.test(ua);
}
