import { defineConfig } from "astro/config";

// import content from "@astrojs/content";
// test
// https://astro.build/config
export default defineConfig({
  site: "https://BurakAydoAI.github.io",
  base: "/pr-preview/pr-5/",
  vite: {
    build: {
      chunkSizeWarningLimit: 1000,
      rollupOptions: {
        external: ["Generaldata"],
      },
    },
    resolve: {
      alias: {
        layouts: "/src/layouts",
      },
    },
  },
  i18n: {
    defaultLocale: "tr",
    locales: ["tr", "en"],
  },

  image: {
    domains: ["localhost:4321"],
  },

  markdown: {
    html: true,
  },
});
