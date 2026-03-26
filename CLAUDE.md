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

## Component structure

Each component lives in its own folder named with **PascalCase**. The folder contains the component file, its styles, and its types:

```
components/
├── layouts/          → structural components (Header, Footer)
│   └── Header/
│       ├── header.tsx
│       └── header.scss
└── ui/               → reusable components (Breadcrumb, Button, logos)
    └── Breadcrumb/
        ├── breadcrumb.tsx
        ├── Breadcrumb.module.scss
        └── breadcrumb.types.ts
```

**Styling convention by layer:**
- `components/layouts/` → **BEM global** (plain `.scss` + string classNames like `"footer__inner"`)
- `components/ui/` → **CSS Modules** (`.module.scss` + `styles.xxx`)

This avoids class name collisions in reusable UI components while keeping layout markup readable.

**Types:** Every component that receives props or uses shared data shapes must have a co-located `.types.ts` file. Interfaces are exported from there and imported with `import type`.

## Styles

Global styles live in `styles/`:

```
styles/
├── globals.scss      → global resets and Tailwind import
├── variables.scss    → design tokens (colors, fonts, breakpoints, max-width)
└── mixins.scss       → responsive mixins (mobile-first, min-width)
```

**Breakpoints (mobile-first):**

| Variable  | Mixin          | Width  |
|-----------|----------------|--------|
| `$bp-xs`  | `@include xs`  | 320px  |
| `$bp-s`   | `@include s`   | 375px  |
| `$bp-m`   | `@include m`   | 425px  |
| `$bp-sm`  | `@include sm`  | 640px  |
| `$bp-md`  | `@include md`  | 768px  |
| `$bp-lg`  | `@include lg`  | 1024px |
| `$bp-xl`  | `@include xl`  | 1280px |

Always use `@include` mixins from `styles/mixins.scss`. Never define local `@media` breakpoints inside component files.

**Fonts:** Figtree (primary) and Manrope — loaded via `next/font/google`, available as `$font-figtree` and `$font-manrope` in SCSS.
