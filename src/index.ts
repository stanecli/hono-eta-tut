import { Eta } from "eta/core";
import { Hono } from "hono";
import helloTemplate from "../templates/hello.eta";

const app = new Hono();
const eta = new Eta();

app.get("/", (c) => {
    return c.html(eta.render(helloTemplate, { name: "Ben" }));
});

export default app;
