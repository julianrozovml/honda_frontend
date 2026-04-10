import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  async headers() {
    return [
      {
        source: "/(.*)",
        headers: [
          // Request viewport width from the browser so `getIsMobile` can use
          // accurate screen dimensions instead of User-Agent sniffing.
          { key: "Accept-CH", value: "Sec-CH-Viewport-Width" },
        ],
      },
    ];
  },
};

export default nextConfig;
