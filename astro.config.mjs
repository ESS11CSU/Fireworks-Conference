import { defineConfig } from "astro/config";
import tailwindcss from "@tailwindcss/vite";

export default defineConfig({
  site: "https://Evelyn5114.github.io",
  base: "/firework-ess-asia-meeting/",
  trailingSlash: "always",
  vite: {
    plugins: [tailwindcss()],
  },
});
