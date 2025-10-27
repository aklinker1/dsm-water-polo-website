import { defineConfig } from "@aklinker1/aframe";
import vue from "@vitejs/plugin-vue";
import tailwindcss from "@tailwindcss/vite";
import { imageMinifier } from "./plugins/image-minifier";

export default defineConfig({
  prerenderedRoutes: ["/", "/contact", "/events", "/practice"],
  proxyPaths: ["/api", "/scalar", "/openapi.json"],
  vite: {
    plugins: [vue(), tailwindcss(), imageMinifier()],
  },
  prerenderer: {
    waitForSelector: "body > *",
  },
});
