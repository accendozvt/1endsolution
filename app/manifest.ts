import type { MetadataRoute } from "next";

export default function manifest(): MetadataRoute.Manifest {
  return {
    name: "One End Solution — Deep Cleaning Service in Kochi",
    short_name: "One End Solution",
    description:
      "Discover the best deep cleaning service in Kochi, specializing in both commercial and residential cleaning, offer cleaning, maintenance & sanitization services.",
    start_url: "/",
    display: "standalone",
    background_color: "#ffffff",
    theme_color: "#007f70",
    icons: [
      {
        src: "/icons/icon-192.png",
        sizes: "192x192",
        type: "image/png",
      },
      {
        src: "/icons/icon-512.png",
        sizes: "512x512",
        type: "image/png",
      },
    ],
  };
}
