<!-- BEGIN:nextjs-agent-rules -->
# This is NOT the Next.js you know

This version has breaking changes — APIs, conventions, and file structure may all differ from your training data. Read the relevant guide in `node_modules/next/dist/docs/` before writing any code. Heed deprecation notices.
<!-- END:nextjs-agent-rules -->

## Cursor Cloud specific instructions

Single Next.js 16 (App Router) + React 19 app, package manager is npm. Dependencies are installed on startup by the update script (`npm install`). Standard commands live in `package.json`/`README.md`: `npm run dev` (port 3000), `npm run build`, `npm run lint`.

Non-obvious notes:
- No test suite exists; there is no `test` script or test framework. Validate changes with `npm run lint`, `npm run build`, and manual testing against the dev server.
- `npm run lint` currently fails on a pre-existing error in `src/lib/audience.tsx` (`react-hooks/set-state-in-effect`) that is unrelated to any new change. New work should not introduce additional lint errors.
- Core feature is the "Sketch Trial" at the `/sketch` page → `POST /api/sketch` with body `{ "prompt": "...", "audience": "business"|"creator" }` (prompt must be ≥12 chars). It works end-to-end with no secrets, returning a template-based HTML preview (`mode: "template"`).
- LLM sketches are optional: set `GROQ_API_KEY` or `OPENAI_API_KEY` in `.env.local` to switch to `mode: "llm"`. No database/cache/queue is needed; rate limiting is in-memory.
