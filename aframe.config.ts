import { defineConfig } from "@aklinker1/aframe";
import vue from "@vitejs/plugin-vue";
import tailwindcss from "@tailwindcss/vite";
import { imagetools } from "vite-imagetools";
import { ViteImageOptimizer as imageOptimzer } from "vite-plugin-image-optimizer";

export default defineConfig({
  prerenderedRoutes: ["/", "/contact", "/events", "/practice"],
  vite: {
    plugins: [
      vue(),
      tailwindcss(),
      // Convert images to WEBP
      imagetools(),
      // Compress SVGs
      imageOptimzer({
        test: /\.svg$/i,
      }),
    ],
  },
  prerenderer: {
    rendererOptions: {
      renderAfterElementExists: "#prerenderer-target",
    },
  },
});
