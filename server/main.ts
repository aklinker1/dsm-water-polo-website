import { Elysia } from "elysia";
import { fetchStatic } from "@aklinker1/aframe/server";

const app = new Elysia().mount(fetchStatic());

export default app;
