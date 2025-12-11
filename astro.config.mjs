import tailwindcss from "@tailwindcss/vite";
// @ts-check
import { defineConfig } from "astro/config";

// https://astro.build/config
export default defineConfig({
  // IMPORTANT: Replace with your actual domain before deployment
  site: "https://example.com",

  vite: {
    plugins: [tailwindcss()],
  },

  i18n: {
    defaultLocale: "fr",
    locales: ["fr", "de"],
    routing: {
      prefixDefaultLocale: false,
    },
  },
});