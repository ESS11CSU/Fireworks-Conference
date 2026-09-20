import { defineConfig } from "astro/config";
import tailwindcss from "@tailwindcss/vite";

export default defineConfig({
  site: "https://Evelyn5114.github.io",
  base: "/Fireworks-Conference/",
  trailingSlash: "always",
  vite: {
    plugins: [tailwindcss()],
  },
});
