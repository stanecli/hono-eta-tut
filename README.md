# Cloudflare Worker + Vite + Hono + Eta

Eta templates are imported as modules and precompiled by the `eta-templates`
plugin in `vite.config.ts`. This bundles the renderer into the Worker without
requiring filesystem access or runtime code generation.

```sh
pnpm install
pnpm dev
```

Open <http://localhost:5173/>.

```sh
pnpm typecheck
pnpm build
pnpm preview
pnpm deploy
```
