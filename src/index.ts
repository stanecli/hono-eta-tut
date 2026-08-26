import { Hono } from "hono";
import { Eta } from "eta";
import path from "node:path";

const app = new Hono();

const eta = new Eta({ views: path.join(import.meta.dirname, "templates") });

app.get("/", (c) => {
    const res = eta.render("./hello", { name: "Ben" });
    return c.text(res);
});

export default app;
