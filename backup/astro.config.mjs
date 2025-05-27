// @ts-check
import { defineConfig } from "astro/config";

// https://astro.build/config
export default defineConfig({
  site: "https://iseolu.com",
  server: {
    allowedHosts: ["localhost", "iseolu.com"],
  },
});
