import { defineConfig } from "astro/config";
import sitemap from "@astrojs/sitemap";
import tailwind from "@astrojs/tailwind";

// https://astro.build/config
export default defineConfig({
  site: process.env.SITE_URL || "https://example.com",
  integrations: [sitemap(), tailwind()],
  i18n: {
    defaultLocale: "en",
    locales: ["en", "it"],
    routing: {
      prefixDefaultLocale: true,
      redirectToDefaultLocale: true,
    },
  },
});

