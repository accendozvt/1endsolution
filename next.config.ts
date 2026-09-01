import type { NextConfig } from "next";

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
};

export default nextConfig;
