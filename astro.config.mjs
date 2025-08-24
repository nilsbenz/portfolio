// @ts-check
import { defineConfig } from "astro/config";

import tailwindcss from "@tailwindcss/vite";

import react from "@astrojs/react";

// https://astro.build/config
export default defineConfig({
  i18n: {
    locales: ["de", "en"],
    defaultLocale: "de",
    fallback: {
      en: "de",
    },
    routing: {
      fallbackType: "rewrite",
    },
  },
  vite: {
    plugins: [tailwindcss()],
  },
  integrations: [react()],
});
