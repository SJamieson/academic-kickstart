# stewartjamieson.com

Personal technical blog & portfolio for **Stewart C. Jamieson** — Head of Technology at Themis AI.
Built with [Astro](https://astro.build/). Static output, deployed to the
`SJamieson.github.io` Pages repo at <https://www.stewartjamieson.com/>.

## Develop

```bash
npm install
npm run dev        # local dev server at http://localhost:4321
npm run build      # static build into ./dist
npm run preview    # serve the built ./dist
```

Requires Node 22+.

## Content

Everything is content collections + Markdown — adding an entry is editing one file.

| What | Where | Format |
|------|-------|--------|
| Blog posts | `src/content/posts/*.mdx` | Markdown/MDX, frontmatter (`title`, `description`, `pubDate`, `track: strategy\|technical`, `tags`, `draft`, `math`) |
| Publications | `src/content/publications/*.md` | frontmatter metadata; the body is the abstract |
| Talks | `src/content/talks.yaml` | one YAML list, each item needs a unique `id` |

Schemas live in `src/content.config.ts`. Site identity, nav, and social links are in `src/consts.ts`.

### Writing posts

Posts are MDX, so they can import components:

- Math: write LaTeX with `$inline$` / `$$display$$` (KaTeX).
- Code: fenced blocks get Shiki highlighting (light/dark aware).
- Figures: `import Figure from '../../components/Figure.astro'` (`size="wide"|"full"` to break out of the text column).
- Sidenotes: `import Sidenote from '../../components/Sidenote.astro'`.
- Interactive charts: see `src/components/charts/UncertaintyExplorer.astro` for the island pattern (Observable Plot, hydrated client-side).

The demo post `knowing-when-not-to-answer.mdx` exercises all of the above and can be deleted.

## Static assets

`public/` is served at the site root: `public/files/cv.pdf`, `public/images/avatar.jpg`, etc.
The Open Graph share card is `public/og-default.png`, regenerated with:

```bash
node scripts/gen-og.mjs
```

## Deploy

`.github/workflows/deploy-cross-repo.yaml` builds with `npm run build` and cross-pushes `./dist`
to `SJamieson/SJamieson.github.io` (preserving the `CNAME`). It is gated:

- **Push to `master`** → build-only, unless the repo variable `AUTO_DEPLOY == 'true'`.
- **`workflow_dispatch` (dry_run = true)** → build-only smoke test.
- **`workflow_dispatch` (dry_run = false)** → deploys now.

The deploy uses the `ACTIONS_DEPLOY_KEY` secret (SSH deploy key with write access to the Pages repo).
Recommended first run: dispatch with `dry_run=true`, then `dry_run=false`, then flip `AUTO_DEPLOY`.
