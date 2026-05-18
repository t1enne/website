import { defineConfig } from "astro/config";
import sitemap from "@astrojs/sitemap";
import tailwind from "@astrojs/tailwind";

const SITE_URL = process.env.URL || process.env.SITE_URL || "https://example.com";

// https://astro.build/config
export default defineConfig({
  site: SITE_URL,
  integrations: [sitemap(), tailwind()],
  i18n: {
    defaultLocale: "en",
    locales: ["en", "it", "fr"],
    routing: {
      prefixDefaultLocale: true,
      redirectToDefaultLocale: true,
    },
  },
});

