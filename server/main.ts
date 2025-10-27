import { createApp, NoResponse, NotFoundHttpError } from "@aklinker1/zeta";
import { fetchStatic } from "@aklinker1/aframe/server";
import { zodSchemaAdapter } from "@aklinker1/zeta/adapters/zod-schema-adapter";

const loggerPlugin = createApp()
  .onGlobalRequest(() => ({
    startTime: performance.now(),
  }))
  .onGlobalAfterResponse(({ route, method, set, path, startTime }) => {
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

const api = createApp({
  openApi: {
    info: {
      title: "DSM Water Polo API",
      version: "0.1.1",
      description: "test",
    },
  },
  prefix: "/api",
})
  .get(
    "/health",
    {
      description: "Health check endpoint. Just returns a 200 with no body.",
      responses: NoResponse,
    },
    () => {},
  )
  .any("/**", () => {
    throw new NotFoundHttpError("API endpoint not found");
  });

const app = createApp({
  schemaAdapter: zodSchemaAdapter,
})
  .use(loggerPlugin)
  .use(api)
  .mount(fetchStatic());

export default app;
