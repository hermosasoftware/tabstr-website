import { defineConfig } from "astro/config";
import react from "@astrojs/react";
import tailwind from "@astrojs/tailwind";
import sitemap from "@astrojs/sitemap";

const site = "https://tabstr.net";

export default defineConfig({
  site,
  trailingSlash: "always",
  redirects: {
    "/preguntas-frecuentes": "/faq/",
    "/blog/article": "/blog/tu-pos-no-es-lealtad/",
  },
  integrations: [
    react(),
    tailwind(),
    sitemap({
      filter: (page) =>
        !page.includes("/brief") &&
        !page.includes("/blog/article") &&
        !page.includes("/preguntas-frecuentes"),
      changefreq: "weekly",
      serialize(item) {
        delete item.lastmod;
        const path = new URL(item.url).pathname;
        if (path === "/") {
          item.priority = 1;
        } else if (
          [
            "/pos-para-restaurantes/",
            "/facturacion-electronica-hacienda-4-4/",
            "/precios/",
            "/migrar-de-pos/",
            "/sinpe-movil-pos/",
            "/pos-costa-rica/",
          ].includes(path)
        ) {
          item.priority = 0.9;
        } else if (path.startsWith("/blog/") && path !== "/blog/") {
          item.priority = 0.7;
        } else if (path === "/blog/") {
          item.priority = 0.8;
        }
        return item;
      },
    }),
  ],
});
