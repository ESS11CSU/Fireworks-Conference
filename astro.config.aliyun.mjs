import { defineConfig } from "astro/config";
import baseConfig from "./astro.config.mjs";

const site = process.env.ALIYUN_SITE_URL || "https://essasiameeting.com";

export default defineConfig({
  ...baseConfig,
  site,
  base: "/",
  outDir: "./dist-aliyun/",
});
