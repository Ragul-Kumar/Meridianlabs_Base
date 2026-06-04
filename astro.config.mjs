import { defineConfig } from "astro/config";
import react from "@astrojs/react";
import tailwind from "@astrojs/tailwind";

// https://astro.build
export default defineConfig({
  integrations: [
    react(),
    tailwind({ applyBaseStyles: false }),
  ],
});
