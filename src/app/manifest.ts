import type { MetadataRoute } from "next";

export default function manifest(): MetadataRoute.Manifest {
  return {
    name: "My Brand Studio",
    short_name: "Brand Studio",
    description: "Websites, SEO, and admin backends for business and creator brands.",
    start_url: "/",
    display: "standalone",
    background_color: "#0c1218",
    theme_color: "#0c1218",
    lang: "en-NZ",
  };
}
