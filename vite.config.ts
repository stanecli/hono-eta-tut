import { cloudflare } from "@cloudflare/vite-plugin";
import { Eta } from "eta/core";
import { readFileSync } from "node:fs";
import { defineConfig, type Plugin } from "vite";

function etaTemplates(): Plugin {
    const eta = new Eta();

    return {
        name: "eta-templates",
        enforce: "pre",
        load(id) {
            const templatePath = id.split("?", 1)[0];

            if (!templatePath.endsWith(".eta")) {
                return null;
            }

            const template = readFileSync(templatePath, "utf8");
            const functionBody = eta.compileToString(template);

            return {
                code: `export default function (it, options) {${functionBody}}`,
                map: null,
            };
        },
    };
}

export default defineConfig({
    plugins: [etaTemplates(), cloudflare()],
});
