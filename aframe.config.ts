import { defineConfig } from "@aklinker1/aframe";
import vue from "@vitejs/plugin-vue";
import tailwindcss from "@tailwindcss/vite";

export default defineConfig({
  prerenderedRoutes: ["/", "/contact", "/events", "/practice"],
  vite: {
    plugins: [vue(), tailwindcss()],
  },
  prerenderer: {
    rendererOptions: {
      renderAfterElementExists: "#prerenderer-target",
    },
  },
});
