# AGENTS.md

## Stack
- Next.js 16.2.4 with Turbopack (`next dev --turbopack`, `next build --turbopack`)
- React 19.2.5, TypeScript, Tailwind CSS v4, ESLint (`.eslintrc.json`)
- Uses **pnpm** with overrides for `@typescript-eslint/*` packages
- **Content**: Markdown files with `gray-matter` for frontmatter, `react-markdown` + `remark-gfm` for rendering

## Commands
```sh
pnpm dev       # Start dev server with Turbopack
pnpm build     # Production build with Turbopack
pnpm lint      # ESLint
pnpm sitemap   # Generate sitemap (reads from src/content/projects/*.md)
```

## Path Aliases
Configured in `tsconfig.json`:
- `@app/*` → `src/app/*`
- `@components/*` → `src/components/*`
- `@lib/*` → `src/lib/*`
- `@content/*` → `src/content/*`
- `@data/*` → `src/assets/data/*`
- `@i18n/*` → `src/data/i18n/*`
- `@styles/*` → `src/styles/*`
- `@public/*` → `public/*`

## Content Structure (Markdown)

Projects: `src/content/projects/{slug}.md`
```yaml
---
title: "Example"
slug: "example"
year: "2025"
show: true
preview: "https://..."
code: "https://..."
thumbnail: "/image.jpg"
images: ["/image1.jpg", ...]
category: [1, 2, 3]
tech: ["nextjs", "typescript"]
---
Content in **markdown**...
```

Experiences: `src/content/experiences/{slug}.md`
```yaml
---
startDate: "2025-01"
endDate: "Actualidad"
company: "Company Name"
site: "https://..."
position: "Job Title"
type: "Tiempo completo"
location: "Remoto"
tech: ["nextjs", "typescript"]
---
Content in **markdown**...
```

## Technologies
Stored in `src/assets/data/technologies.json`:
```json
{
  "categories": [{ "id": "frontend", "name": "Frontend" }, ...],
  "technologies": [{ "id": "nextjs", "name": "Next.js", "category": "frontend" }, ...]
}
```

Categories: `frontend`, `backend`, `mobile`, `database`, `tools`

## App Router Structure
- `src/app/(root)/` — home page
- `src/app/about/` — about page (split into `AboutContent` + `Experience`)
- `src/app/projects/` — projects listing (server component)
- `src/app/projects/[slug]/` — individual project detail pages (server component)
- `src/app/projects/archive/` — archived projects (server component)

## Data Access
- `getAllProjects()` / `getProjectBySlug(slug)` / `getVisibleProjects()` in `src/lib/projects.ts`
- `getAllExperiencesServer()` in `src/lib/experiences-action.ts` (Server Action for client components)
- `getTechnologyById(id)` / `getAllTechnologies()` in `src/lib/technologies.ts`
- `resolveTechNames(ids)` in `src/lib/tech-utils.ts` (for client-safe tech name resolution)

## Dev Server Access
`next.config.js` allows `allowedDevOrigins: ["localhost", "192.168.100.138"]`

## Key Configuration Quirks
- **Image remote pattern**: only `i.scdn.co` (Spotify CDN) is whitelisted
- **Production console removal**: `removeConsole` strips all console.* except `error`/`warn`
- **Bundle analyzer**: set `ANALYZE=true` env var to inspect bundle size
- **PDF assets**: webpack rule loads `.pdf` files as raw source via `asset/source`
- **Sitemap**: generated at `public/sitemap.xml.gz` (gzip), auto-includes all projects from `src/content/projects/`

## No test suite
There are no tests configured. Lint is the primary verification step.