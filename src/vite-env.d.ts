declare module "*.eta" {
    import type { TemplateFunction } from "eta/core";

    const template: TemplateFunction;
    export default template;
}
