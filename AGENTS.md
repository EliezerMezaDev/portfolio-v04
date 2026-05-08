# AGENTS.md

## Stack
- Next.js 16.2.4 with Turbopack (`next dev --turbopack`, `next build --turbopack`)
- React 19.2.5, TypeScript, Tailwind CSS v4, ESLint (`.eslintrc.json`)
- Uses **pnpm** with overrides for `@typescript-eslint/*` packages

## Commands
```sh
pnpm dev       # Start dev server with Turbopack
pnpm build     # Production build with Turbopack
pnpm lint      # ESLint (has unresolved errors per TODO comment)
pnpm sitemap   # Generate static sitemap to public/sitemap.xml.gz (hardcoded URLs)
```

## Path Aliases
Configured in `tsconfig.json` — use these instead of relative paths:
- `@app/*` → `src/app/*`
- `@components/*` → `src/components/*`
- `@lib/*` → `src/lib/*`
- `@content/*` → `src/content/*`
- `@data/*` → `src/assets/data/*`
- `@i18n/*` → `src/data/i18n/*`
- `@styles/*` → `src/styles/*`
- `@public/*` → `public/*`

## App Router Structure
- `src/app/(root)/` — home page
- `src/app/about/` — about page
- `src/app/projects/` — projects listing
- `src/app/projects/[slug]/` — individual project detail pages
- `src/app/projects/archive/` — archived projects
- Component organization: `src/components/ui/` (shared), `src/components/about/`, `src/components/projects/`

## Dev Server Access
`next.config.js` allows `allowedDevOrigins: ["localhost", "192.168.100.138"]`

## Key Configuration Quirks
- **Image remote pattern**: only `i.scdn.co` (Spotify CDN) is whitelisted
- **Production console removal**: `removeConsole` strips all console.* except `error`/`warn`
- **Bundle analyzer**: set `ANALYZE=true` env var to inspect bundle size
- **PDF assets**: webpack rule loads `.pdf` files as raw source via `asset/source`
- **Sitemap**: generated at `public/sitemap.xml.gz` (gzip), routes are hardcoded in `generate-sitemap.js` — update routes there, not in code

## No test suite
There are no tests configured. Lint is the primary verification step.
