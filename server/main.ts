import { Elysia } from "elysia";
import { fetchStatic } from "@aklinker1/aframe/server";

const app = new Elysia()
  .get("/", "Hello Elysia")
  .get("/user/:id", ({ params }) => params.id)
  .post("/form", ({ body }) => body)
  .mount(fetchStatic());

export default app;
