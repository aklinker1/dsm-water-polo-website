import { Elysia } from "elysia";
import { fetchStatic } from "@aklinker1/aframe/server";

const api = new Elysia({ prefix: "/api" }).get("/health", () => {});

const app = new Elysia()
  .onRequest((ctx) => {
    // @ts-expect-error: Adding untyped property to ctx
    ctx.startTime = performance.now();
  })
  .onAfterResponse(
    // @ts-expect-error: startTime is not typed
    ({ request, route, set, path, startTime }) => {
      console.log(
        JSON.stringify({
          route,
          status: set.status,
          duration: performance.now() - startTime,
          method: request.method,
          path,
        }),
      );
    },
  )
  .mount(fetchStatic())
  .use(api);

export default app;
