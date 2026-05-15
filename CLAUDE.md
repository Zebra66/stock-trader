---
description: Use Bun instead of Node.js, npm, pnpm, or vite.
globs: "*.ts, *.tsx, *.html, *.css, *.js, *.jsx, package.json"
alwaysApply: false
---

Default to using Bun instead of Node.js.

- Use `bun <file>` instead of `node <file>` or `ts-node <file>`
- Use `bun test` instead of `jest` or `vitest`
- Use `bun build <file.html|file.ts|file.css>` instead of `webpack` or `esbuild`
- Use `bun install` instead of `npm install` or `yarn install` or `pnpm install`
- Use `bun run <script>` instead of `npm run <script>` or `yarn run <script>` or `pnpm run <script>`
- Use `bunx <package> <command>` instead of `npx <package> <command>`
- Bun automatically loads .env, so don't use dotenv.

## APIs

- `Bun.serve()` supports WebSockets, HTTPS, and routes. Don't use `express`.
- `bun:sqlite` for SQLite. Don't use `better-sqlite3`.
- `Bun.redis` for Redis. Don't use `ioredis`.
- `Bun.sql` for Postgres. Don't use `pg` or `postgres.js`.
- `WebSocket` is built-in. Don't use `ws`.
- Prefer `Bun.file` over `node:fs`'s readFile/writeFile
- Bun.$`ls` instead of execa.

## Testing

Use `bun test` to run tests.

```ts#index.test.ts
import { test, expect } from "bun:test";

test("hello world", () => {
  expect(1).toBe(1);
});
```

## Frontend

Use HTML imports with `Bun.serve()`. Don't use `vite`. HTML imports fully support React, CSS, Tailwind.

Server:

```ts#index.ts
import index from "./index.html"

Bun.serve({
  routes: {
    "/": index,
    "/api/users/:id": {
      GET: (req) => {
        return new Response(JSON.stringify({ id: req.params.id }));
      },
    },
  },
  // optional websocket support
  websocket: {
    open: (ws) => {
      ws.send("Hello, world!");
    },
    message: (ws, message) => {
      ws.send(message);
    },
    close: (ws) => {
      // handle close
    }
  },
  development: {
    hmr: true,
    console: true,
  }
})
```

HTML files can import .tsx, .jsx or .js files directly and Bun's bundler will transpile & bundle automatically. `<link>` tags can point to stylesheets and Bun's CSS bundler will bundle.

```html#index.html
<html>
  <body>
    <h1>Hello, world!</h1>
    <script type="module" src="./frontend.tsx"></script>
  </body>
</html>
```

With the following `frontend.tsx`:

```tsx#frontend.tsx
import React from "react";
import { createRoot } from "react-dom/client";

// import .css files directly and it works
import './index.css';

const root = createRoot(document.body);

export default function Frontend() {
  return <h1>Hello, world!</h1>;
}

root.render(<Frontend />);
```

Then, run index.ts

```sh
bun --hot ./index.ts
```

For more information, read the Bun API docs in `node_modules/bun-types/docs/**.mdx`.

## Autonomous Stock Trader Rules

### Agent Runtime
- The scheduled `hourly` and `tactical` jobs run through the Pi.dev coding-agent runtime, not a direct `@google/genai` SDK loop.
- Model selection for those jobs lives in `config/agent_runtime.json`, using a single `provider/model` string per mode.
- The trader app uses `src/pi_runner.ts` to start Pi.dev agent sessions in the repo workspace.
- Switching between Gemini and OpenAI is a one-line change per mode in `config/agent_runtime.json`.
- The runtime environment must include the API key required by the configured provider.
- For `trader-gemini/...` models, `PiRunner` maps `GEMINI_API_KEY` to `GOOGLE_GENERATIVE_AI_API_KEY` for the Pi.dev Google provider.
- For `trader-openai/...` models, `OPENAI_API_KEY` must be present in the runtime environment.
- Repo `.env` values intentionally override inherited shell environment variables for this app's process tree.

### Scheduling
- **Hourly agent**: Runs at **:35 past every hour** (9:35, 10:35, 11:35 … 3:35 PM ET) while the market is open.
  - Fires 5 minutes after the 9:30 AM Nasdaq open, giving the opening volatility time to settle.
  - Tactical agents at :40 and :50 immediately receive fresh directives after each hourly run.
- **Tactical agent**: Runs every 10 minutes at **:10, :20, :30, :40, :50** past each hour while the market is open.
- Both jobs are skipped when the market is closed unless `--force-run` is passed.

### Execution & Testing Commands
- **Live Deployment:** The application is deployed on Google Cloud Run and is live at [https://auto-stock-trader-pxeqygrzga-uc.a.run.app](https://auto-stock-trader-pxeqygrzga-uc.a.run.app)
- **Run Local:** Execute `./scripts/run_local.sh` to start the Harness and the Agent loops locally.
- **Run Tests:** Execute `bun test` to run all unit tests in the project.
- **Temporary Files:** All temp files, debug artifacts, and captured logs must be created under `./temp_files/`. Artifacts in this directory MUST NOT be saved to git.
- **Agent Memory:** Files intended to be persisted across runs (e.g. `todo.md`, `MEMORY.md`, or new learning files) MUST be stored in the `./memory/` directory. These files should be tracked and committed to git.

### Code Quality & Git
- **Strong Typing:** ALL TypeScript code must be strongly typed. Do not use `any` unless absolutely necessary, and define strict interfaces for LLM function calls.
- **Test Coverage:** Ensure you have a good coverage of unit tests before executing any `git commit`. Do not push broken code to the remote repository.
- **Commit Prefix:** NEVER create commits with a prefix of `[agent]` in an interactive session with me!!! Commits with that prefix are only OK to be created by the autonomous code of this project (like the Pi.dev runtime) to distinguish them from ones that we do interactively during development!!

### Code Development Framework: Bun Only
- **PRIMARY RUNTIME IS BUN.** If you need to write any new code, scripts, or utilities, write them in **TypeScript and execute with `bun run <file.ts>`**. Do NOT use Python, Node.js, or any other runtime.
- **Shell HTTP → use `bun -e`:** If you need to make HTTP requests in bash, use an inline `bun -e` script with native `fetch()` instead of `curl` or `wget`. Example:
  ```sh
  bun -e 'const r = await fetch("https://api.example.com/data"); console.log(await r.json());'
  ```
- **No python scripts:** Do not write `.py` files or use `python3` for new functionality. Python is only available as a last resort for one-off shell commands that have no Bun equivalent.
- **No Node.js:** Do not use `node`, `ts-node`, `npx`, or `npm`. Always use `bun`, `bunx`, and `bun install`.

### Bun + TypeScript Best Practices
- **Native APIs:** Use native web standards like `fetch`, `Response`, and `Request` over third-party libraries (e.g., avoid `axios` or `node-fetch`).
- **Bun Standard Library:** Prefer `Bun.file()` and `Bun.write()` over Node's `fs/promises` for faster I/O operations.
- **Execution:** Always execute TypeScript files directly via `bun run <file.ts>`. Do not compile to JavaScript first using `tsc`.
- **Typing Accuracy:** Use explicit `interface` and `type` definitions for all external API responses (e.g., Alpaca, FMP) to ensure safe property access.
