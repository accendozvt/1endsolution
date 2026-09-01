import type { NextConfig } from "next";

// Report-only for now: Content-Security-Policy is the one header that can
// silently break a site (GA4, the Google Maps facade) if a source is missed
// and there's no way to verify against the live Hostinger environment from
// here. Report-only lets violations show up in the browser console/reports
// without blocking anything, per the standard "verify before enforcing"
// rollout path. Switch to `Content-Security-Policy` once confirmed clean.
const CSP = [
  "default-src 'self'",
  "script-src 'self' 'unsafe-inline' https://www.googletagmanager.com",
  "style-src 'self' 'unsafe-inline'",
  "img-src 'self' data: https://www.google-analytics.com",
  "font-src 'self'",
  "connect-src 'self' https://www.google-analytics.com https://region1.google-analytics.com https://www.googletagmanager.com",
  "frame-src https://maps.google.com",
  "object-src 'none'",
  "base-uri 'self'",
  "form-action 'self' https://wa.me",
].join("; ");

const SECURITY_HEADERS = [
  { key: "Strict-Transport-Security", value: "max-age=63072000; includeSubDomains; preload" },
  { key: "X-Content-Type-Options", value: "nosniff" },
  { key: "X-Frame-Options", value: "DENY" },
  { key: "Referrer-Policy", value: "strict-origin-when-cross-origin" },
  {
    key: "Permissions-Policy",
    value: "camera=(), microphone=(), geolocation=(), interest-cohort=()",
  },
  { key: "Content-Security-Policy-Report-Only", value: CSP },
];

const nextConfig: NextConfig = {
  reactStrictMode: true,
  images: {
    // AVIF first: browsers that support it get a smaller file than WebP.
    formats: ["image/avif", "image/webp"],
    // Default is [75] only — gallery/secondary photos use lower values
    // below to cut payload size (see components/Carousel.tsx and the
    // secondary content images across app/**/page.tsx).
    qualities: [65, 70, 75],
  },

  async headers() {
    return [
      {
        source: "/:path*",
        headers: SECURITY_HEADERS,
      },
      {
        // Hashed, content-addressed filenames — safe to cache forever.
        source: "/_next/static/:path*",
        headers: [
          { key: "Cache-Control", value: "public, max-age=31536000, immutable" },
        ],
      },
      {
        // Original photo assets don't change once published; the Next.js
        // image optimizer output already gets its own long-lived caching.
        source: "/images/:path*",
        headers: [
          { key: "Cache-Control", value: "public, max-age=31536000, immutable" },
        ],
      },
    ];
  },

  async redirects() {
    return [
      // Canonical host is the non-www apex (matches SITE_URL in lib/site.ts
      // and every canonical/OG/sitemap URL already emitted). If DNS ever
      // routes www traffic here too, consolidate it to the one host Google
      // should index rather than leaving both live as duplicate content.
      {
        source: "/:path*",
        has: [{ type: "header", key: "host", value: "www.1endsolution.com" }],
        destination: "https://1endsolution.com/:path*",
        permanent: true,
      },
    ];
  },
};

export default nextConfig;
