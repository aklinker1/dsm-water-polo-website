import { defineConfig } from "@aklinker1/aframe";
import vue from "@vitejs/plugin-vue";
import tailwindcss from "@tailwindcss/vite";
import { compression } from "vite-plugin-compression2";
import { imageMinifier } from "./plugins/image-minifier";

export default defineConfig({
  prerenderedRoutes: ["/", "/contact", "/events", "/practice"],
  vite: {
    plugins: [
      vue(),
      tailwindcss(),
      compression({ exclude: [/\.html$/] }), // Compress JS and CSS files
      imageMinifier(),
    ],
  },
  prerenderer: {
    waitForSelector: "body > *",
  },
});
