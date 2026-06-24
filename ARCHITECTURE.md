# Architecture

Orientation map for this repo, aimed at anyone (human or agent) making changes.
For day-to-day commands (develop / add content / deploy) see [`README.md`](./README.md);
this doc covers **how the code is organized and why**.

## Stack

- **[Astro 7](https://astro.build/)**, static output (`astro build` → `./dist`). No SPA framework — pages are server-rendered to HTML at build time; interactivity is plain `<script>` islands in `.astro` components (no React/Vue/Svelte).
- **Content collections** (Astro's typed content layer) for posts, publications, talks — schemas in `src/content.config.ts`.
- **MDX** for posts (so posts can import components), **KaTeX** for math, **Shiki** for code highlighting. All wired in `astro.config.mjs`.
- **[Observable Plot](https://observablehq.com/plot/)** for the interactive charts in posts.
- Node 22+. Package manager: npm (`package-lock.json` committed).

> Heads-up: this site was **migrated from Hugo**. Some memory/notes and the `academic-kickstart` directory name are Hugo-era. The live site is now this Astro project — ignore Hugo toolchain references.

## Directory map

```
astro.config.mjs        Astro config: site URL, redirects (legacy Hugo URLs), markdown processor, Shiki themes
tsconfig.json
package.json

public/                 Served verbatim at site root: /images, /files/cv.pdf, /og-default.png, /favicon.svg
scripts/                One-off Node build helpers (gen-og.mjs, optimize-avatar.mjs) — run manually, not in build
docs/                   Authoring docs (blog-post-template.md)
.github/workflows/      deploy-cross-repo.yaml — builds and cross-pushes dist/ to the Pages repo

src/
  consts.ts             Site identity, NAV, SOCIAL, TRACKS, CV_URL, THEMIS_URL — edit nav/links HERE
  content.config.ts     Zod schemas + loaders for the three content collections
  lib/format.ts         Shared formatting helpers (dates, etc.)
  styles/global.css     The entire design system: tokens, theming, base element styles (~320 lines)

  content/              ALL editorial content (one file ≈ one entry)
    posts/*.mdx           Blog posts (frontmatter: title, description, pubDate, track, tags, draft, math)
    publications/*.md     One file per paper; the body is the abstract
    talks.yaml            Single YAML list of talks

  layouts/
    BaseLayout.astro      <html> shell: <head> meta/OG/JSON-LD, global CSS import, Nav + Footer, theme bootstrap
    PostLayout.astro      Per-post chrome (built on BaseLayout)

  pages/                Routes (file-based). Dynamic routes use [slug].astro + getStaticPaths
    index.astro           Home page (hero, selected research, recent writing, talks)
    about.astro, talks.astro, 404.astro
    research/index.astro
    writing/index.astro, writing/[slug].astro    Blog index + post pages
    publication/[slug].astro                      Publication detail pages
    rss.xml.js                                    RSS feed

  components/
    Nav, Footer, ThemeToggle, Icon, PageHeader, PubLinks, Authors, Figure, Sidenote
    HeroBackdrop.astro    Canvas Galton-board animation behind the homepage hero (see below)
    charts/               Interactive Observable Plot islands embedded in posts
      UncertaintyExplorer, EscalationPlayground, PipelineReliability
```

## How the pieces fit

**Routing.** File-based via `src/pages/`. Detail pages (`writing/[slug]`, `publication/[slug]`) read a content collection in `getStaticPaths` and render one page per entry. Legacy Hugo URLs are preserved through the `redirects` map in `astro.config.mjs` — add a redirect there if you rename a slug.

**Content.** To add/edit content you almost never touch `pages/` — you add a file under `src/content/`. The schema in `content.config.ts` validates frontmatter at build time; a schema mismatch fails the build. `featured: true` surfaces an entry on the home page; `draft: true` (posts) hides it.

**Layouts & metadata.** Every page renders inside `BaseLayout.astro`, which owns `<head>`: `<title>`, canonical URL, Open Graph, and Person JSON-LD (all derived from `consts.ts` + page props). Pass `preloadImage` for above-the-fold images.

**Styling & theming.** There is **one** global stylesheet, `src/styles/global.css`, built entirely on CSS custom properties:
- Design tokens live in `:root` (fonts, fluid type scale `--step-*`, spacing `--space-*`, layout widths `--measure*`, radii, `--shadow`).
- **Theming is token-swap only**: `html[data-theme='dark']` redefines the color tokens (`--bg`, `--text`, `--accent`, …). Components should reference tokens, not hard-coded colors, so they theme automatically. `ThemeToggle.astro` flips `data-theme`.
- Component-specific styles live in scoped `<style>` blocks inside each `.astro` file (Astro scopes them via a per-component attribute). Page-level layout (e.g. the hero grid) lives in the page's own `<style>` block.

**Interactivity = vanilla `<script>` islands.** No client framework. A component drops a `<script>` that runs in the browser; Astro bundles it. Two patterns to copy:
- **Canvas animation:** `HeroBackdrop.astro` — a self-contained `initBackdrop(canvas)` driving a `requestAnimationFrame` loop, reduced-motion aware, reading `--accent` from CSS so it tracks the theme.
- **Chart island:** `components/charts/UncertaintyExplorer.astro` is the reference for an Observable Plot chart hydrated client-side and imported into an MDX post.

**The hero hover interaction (gotcha worth knowing).** On the home page the portrait sits over the `HeroBackdrop` Galton-board canvas. The canvas is `pointer-events: none`, so it can't be hovered directly. `HeroBackdrop.astro` instead listens for `pointermove` on the whole `.hero`, hit-tests the pointer against the board's drawn bounds (or the portrait), and on a hit it both strengthens the board (`targetReveal`) and toggles an `is-revealing` class on `.hero`. `index.astro`'s CSS fades the portrait on `.hero-portrait img:hover` **and** `.hero.is-revealing .hero-portrait img`. So "hover the photo" and "hover the board" produce the same reveal. If you change the board geometry (`geom()` in HeroBackdrop), the hit-test bounds use the same `w/h/pegTop/rowGap/barBaseY` values and stay in sync.

## Markdown pipeline notes (`astro.config.mjs`)

- **Astro 7 quirk:** remark/rehype plugins are configured on a `unified()` processor passed to `markdown.processor`, not the older `remarkPlugins`/`rehypePlugins` top-level keys.
- Math: `remark-math` + `rehype-katex`; KaTeX CSS is imported in `BaseLayout`.
- Code: **dual Shiki themes** (`github-light` / `github-dark-default`). The light theme is inlined; the dark theme is exposed as `--shiki-dark*` CSS vars that `global.css` activates under `html[data-theme='dark']`.

## Build & deploy (summary)

`npm run build` → `./dist`. The GitHub Actions workflow `deploy-cross-repo.yaml` cross-pushes `dist/` to the `SJamieson/SJamieson.github.io` Pages repo (preserving `CNAME`), gated on `AUTO_DEPLOY` / `workflow_dispatch`. Full details and the dry-run procedure are in `README.md`.
