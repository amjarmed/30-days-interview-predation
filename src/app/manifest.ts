import type { MetadataRoute } from "next";

export default function manifest(): MetadataRoute.Manifest {
  return {
    name: "30 Days Interview Preparation",
    short_name: "Interview Prep",
    description: "Follow my 30-day journey preparing for full-stack developer interviews",
    start_url: "/",
    display: "standalone",
    background_color: "#ffffff",
    theme_color: "#3b82f6",
    icons: [
      {
        src: "/icon-192.png",
        sizes: "192x192",
        type: "image/png",
      },
      {
        src: "/icon-512.png",
        sizes: "512x512",
        type: "image/png",
      },
    ],
    categories: ["education", "developer-tools", "productivity"],
    screenshots: [
      {
        src: "/screenshot-wide.jpg",
        sizes: "1280x720",
        type: "image/jpeg",
        form_factor: "wide",
      },
      {
        src: "/screenshot-narrow.jpg",
        sizes: "750x1334",
        type: "image/jpeg",
        form_factor: "narrow",
      },
    ],
  };
}
