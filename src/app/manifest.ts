import type { MetadataRoute } from "next";
import { person, seo } from "@/content/site";

export default function manifest(): MetadataRoute.Manifest {
  return {
    name: person.name,
    short_name: person.name,
    description: seo.description,
    lang: "pt-BR",
    start_url: "/",
    display: "browser",
    background_color: "#f1ece2",
    theme_color: "#f1ece2",
    icons: [
      { src: "/icon.svg", type: "image/svg+xml", sizes: "any" },
      { src: "/icon-512.png", type: "image/png", sizes: "512x512" },
    ],
  };
}
