import { Elysia } from "elysia";
import { fetchStatic } from "@aklinker1/aframe/server";

const api = new Elysia({ prefix: "/api" }).get("/health", () => {});

const app = new Elysia().mount(fetchStatic()).use(api);

export default app;
