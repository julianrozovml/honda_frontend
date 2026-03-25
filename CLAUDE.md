# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

@AGENTS.md

## Commands

```bash
pnpm dev        # Start development server
pnpm build      # Production build
pnpm start      # Start production server
pnpm lint       # Run ESLint
```

No test runner is configured yet.

## Architecture

Next.js 16 app using the **App Router** (all routes live under `app/`). React Server Components are the default — add `"use client"` only when necessary (event handlers, hooks, browser APIs).

**Key conventions:**
- Import alias `@/*` resolves to the project root
- Tailwind CSS v4 via PostCSS (`@import "tailwindcss"` syntax, not `@tailwind` directives)
- Fonts loaded via `next/font/google` in `app/layout.tsx`, injected as CSS variables
- CSS theme variables defined in `app/globals.css` with automatic dark mode via `@media (prefers-color-scheme: dark)`

**Package manager:** pnpm

**Versions to keep in mind:** Next.js 16, React 19, TypeScript 6, Tailwind 4 — all have breaking changes from prior major versions. Consult `node_modules/next/dist/docs/` before assuming familiar APIs still exist.
