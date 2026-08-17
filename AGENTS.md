<!-- BEGIN:nextjs-agent-rules -->

# This is NOT the Next.js you know

This version has breaking changes — APIs, conventions, and file structure may all differ from your training data. Read the relevant guide in `node_modules/next/dist/docs/` (resolved from this file's directory; in monorepos the `next` package may not be visible from the repo root) before writing any code. Heed deprecation notices.

This block is written and re-added by `next dev` — verify at `node_modules/next/dist/server/lib/generate-agent-files.js`. Removing it from a diff only re-creates the uncommitted change; committing it with your work keeps the tree clean.

<!-- END:nextjs-agent-rules -->

# Portfolio Development Rules

1. **Source of Truth**: Read `PORTFOLIO_SPEC.md` for detailed product and design requirements before starting work.
2. **Tech Stack**: Next.js 16+ (App Router), TypeScript, Tailwind CSS 4. Do not add unapproved dependencies.
3. **Philosophy**: Keep code modular, reusable, typed, and accessible. Centralize configs. Avoid giant components and duplicated code.
4. **Git Workflow**: Commit feature-by-feature locally with conventional messages. Ensure `npm run build` passes before committing. No destructive git actions without user approval.
5. **No Blind Rewrites**: Understand existing code and refactor only when there's a clear maintainability improvement.
6. **Task Tracking**: Track completion status in `TODO.md` based on actual implementation.
