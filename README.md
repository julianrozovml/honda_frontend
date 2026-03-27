# Honda Motos Colombia — Frontend

Sitio web oficial de Honda Motos Colombia construido con Next.js 16 y App Router.

## Requisitos

- Node.js 20+
- pnpm

## Comandos

```bash
pnpm dev        # Servidor de desarrollo
pnpm build      # Build de producción
pnpm start      # Servidor de producción
pnpm lint       # ESLint
```

## Arquitectura

Next.js 16 con **App Router** — todas las rutas viven bajo `app/`. React Server Components es el default; agregar `"use client"` solo cuando sea necesario (event handlers, hooks, APIs del browser).

**Convenciones clave:**
- Alias de import `@/*` resuelve a la raíz del proyecto
- Tailwind CSS v4 vía PostCSS (sintaxis `@import "tailwindcss"`, no directivas `@tailwind`)
- Fuentes cargadas vía `next/font/google` en `app/layout.tsx`, inyectadas como variables CSS
- Variables de tema CSS definidas en `app/globals.css` con dark mode automático vía `@media (prefers-color-scheme: dark)`

**Package manager:** pnpm

**Versiones:** Next.js 16, React 19, TypeScript 6, Tailwind 4.

## Estructura de componentes

Cada componente vive en su propia carpeta con nombre en **PascalCase**. La carpeta contiene el componente, sus estilos y sus tipos:

```
components/
├── layouts/                  → componentes estructurales (Header, Footer)
│   └── Header/
│       ├── header.tsx
│       └── header.scss
├── ui/                       → componentes reutilizables (Breadcrumb, Button, logos)
│   └── Breadcrumb/
│       ├── breadcrumb.tsx
│       ├── Breadcrumb.module.scss
│       └── breadcrumb.types.ts
└── drupal-components/        → componentes mapeados a paragraph types de Drupal
    └── HeroCampaign/
        ├── hero-campaign.tsx
        ├── HeroCampaign.module.scss
        └── hero-campaign.types.ts
```

**Convención de estilos por capa:**
- `components/layouts/` → **BEM global** (`.scss` plano + classNames como strings: `"footer__inner"`)
- `components/ui/` → **CSS Modules** (`.module.scss` + `styles.xxx`)
- `components/drupal-components/` → **CSS Modules** (`.module.scss` + `styles.xxx`)

**Types:** Todo componente que recibe props debe tener un archivo `.types.ts` co-ubicado. Las interfaces se exportan desde ahí y se importan con `import type`.

## Utilidades

Funciones reutilizables transversales en `lib/`:

```
lib/
└── device.ts     → getIsMobile() — detección de dispositivo server-side
```

## Estilos globales

```
styles/
├── globals.scss      → resets globales
├── variables.scss    → design tokens (colores, fuentes, breakpoints, max-width)
└── mixins.scss       → mixins responsive (mobile-first, min-width)
```

**Breakpoints (mobile-first):**

| Variable  | Mixin         | Ancho  |
|-----------|---------------|--------|
| `$bp-xs`  | `@include xs` | 320px  |
| `$bp-s`   | `@include s`  | 375px  |
| `$bp-m`   | `@include m`  | 425px  |
| `$bp-sm`  | `@include sm` | 640px  |
| `$bp-md`  | `@include md` | 768px  |
| `$bp-lg`  | `@include lg` | 1024px |
| `$bp-xl`  | `@include xl` | 1280px |

Siempre usar los mixins `@include` de `styles/mixins.scss`. Nunca definir `@media` locales dentro de archivos de componentes.

**Fuentes:** Figtree (principal) y Manrope — cargadas vía `next/font/google`, disponibles como `$font-figtree` y `$font-manrope` en SCSS.

## Imágenes

| Carpeta          | Uso                                                        |
|------------------|------------------------------------------------------------|
| `public/images/` | Imágenes referenciadas por URL string (hero, og, favicons) |
| `assets/images/` | SVGs importados como módulos ES (logos, iconos de UI)      |
