import { createApp } from "@aklinker1/zeta";
import { fetchStatic } from "@aklinker1/aframe/server";

const loggerPlugin = createApp()
  .onRequest(() => ({
    startTime: performance.now(),
  }))
  .afterResponse(({ route, method, set, path, startTime }) => {
    console.log(
      JSON.stringify({
        route,
        status: set.status,
        duration: performance.now() - startTime,
        method,
        path,
      }),
    );
  })
  .export();

const api = createApp({ prefix: "/api" }).get("/health", () => {});

const app = createApp().use(loggerPlugin).use(api).mount(fetchStatic());

export default app;
