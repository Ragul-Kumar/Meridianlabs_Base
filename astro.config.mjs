import { defineConfig } from "astro/config";
import react from "@astrojs/react";
import tailwind from "@astrojs/tailwind";

// https://astro.build
export default defineConfig({
  site: "https://ragul-kumar.github.io",
  base: "/Meridianlabs_Base",
  integrations: [
    react(),
    tailwind({ applyBaseStyles: false }),
  ],
});
