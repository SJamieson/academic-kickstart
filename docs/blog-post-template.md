# Blog post authoring template & spec

This document tells a writing assistant exactly how to produce a post that drops into
**stewartjamieson.com** (an Astro site) with zero reformatting. Follow the schema and
conventions below. When done, hand back: (1) the `.mdx` file, (2) any image files, and
(3) specs for any interactive charts (do **not** write chart code — see §8).

A complete, working reference post already lives in the repo at
`src/content/posts/knowing-when-not-to-answer.mdx` — mirror its structure.

---

## 1. File

- One post = one file at `src/content/posts/<slug>.mdx`.
- `<slug>` is lowercase-kebab and becomes the URL: `/writing/<slug>`.
- Use the `.mdx` extension (Markdown + components).

## 2. Frontmatter (required)

YAML between `---` fences at the very top. Exact fields:

```yaml
---
title: "Knowing When Not to Answer"          # plain text; no markdown
description: "A one-sentence hook (≤ ~155 chars). Used in the post list, SEO, and the social share card."
pubDate: 2026-06-23                           # YYYY-MM-DD
# updatedDate: 2026-07-10                      # optional, same format
track: technical                              # "technical" OR "strategy" (see §3)
tags: [uncertainty, calibration, selective-prediction]   # lowercase, short, 2–5 of them
draft: false                                  # true = excluded from the production build
math: true                                    # true if the post uses any LaTeX
# heroImage: /images/posts/<slug>/hero.webp    # optional, root-relative path
---
```

Rules:
- `title` and `description` are plain strings — no Markdown, no LaTeX.
- `track` must be exactly `technical` or `strategy`.
- Set `math: true` whenever the body contains `$…$` or `$$…$$`.
- Keep `draft: true` until it's ready; it won't build into production while true.

## 3. The two tracks

Pick one `track`:
- **`strategy`** — *AI Strategy & Systems*: higher-altitude essays (industry, systems
  thinking, reliability strategy). Mostly prose, the occasional diagram or simple chart.
- **`technical`** — *Technical Deep-Dives*: math, code, derivations, interactive figures.

## 4. Body: Markdown conventions

- **The H1 is the title** (rendered by the layout from frontmatter). **Start body headings at `##`.** Use `###` for subsections. Never use `#` in the body.
- Standard Markdown: **bold**, *italic*, `inline code`, lists, [links](https://example.com), GitHub-flavored tables.
- Keep paragraphs tight; the reading column is ~680px.
- **Callout / note:** use a blockquote.
  ```md
  > **Note.** This is an aside or caveat worth pulling out of the flow.
  ```

## 5. Math (KaTeX)

- Inline: `The estimate $\hat{p} = \max_k \mathrm{softmax}(z)_k$ is …`
- Display:
  ```md
  $$
  \mathrm{Risk}(\tau) = \frac{\sum_i \mathbb{1}[u_i \le \tau]\,\ell(\hat y_i, y_i)}{\sum_i \mathbb{1}[u_i \le \tau]}
  $$
  ```
- Remember to set `math: true` in frontmatter.

## 6. Code blocks

Fenced with a language for syntax highlighting (light/dark aware, with a copy button):

````md
```python
def selective_metrics(uncertainty, correct, tau):
    answered = uncertainty <= tau
    return answered.mean(), correct[answered].mean()
```
````

## 7. Components (import what you use, at the top of the body — after the frontmatter)

```mdx
import Figure from '../../components/Figure.astro';
import Sidenote from '../../components/Sidenote.astro';
```

**Figure** — captioned image that can break wider than the text column:
```mdx
<Figure
  src="/images/posts/<slug>/diagram.webp"
  alt="Describe the image for accessibility."
  caption="Caption text — may include <em>inline HTML</em>."
  size="wide"        {/* "normal" (default) | "wide" | "full" */}
/>
```

**Sidenote** — a margin note (collapses inline on narrow screens). Place the tag right
after the word it annotates:
```mdx
…the model may abstain.<Sidenote n="1">This is the posture behind uncertainty-aware deployment.</Sidenote>
```

## 8. Interactive charts — describe, don't build

Bespoke interactive charts are hand-built Astro islands (see
`src/components/charts/UncertaintyExplorer.astro`). **The writing agent must NOT write
chart/island code.** Instead, drop a clearly-marked placeholder where the chart should go
and fully specify it, so it can be implemented during integration:

```mdx
{/* CHART: selective-prediction-explorer
    Goal: let the reader drag an uncertainty threshold and watch coverage vs. accuracy.
    Visual: scatter of predictions by uncertainty (x), colored correct/incorrect; a slider
            sets the threshold; a live readout shows coverage % and selective accuracy.
    Data: synthetic, 240 points; describe the generating process or attach a CSV.
    Caption: one line to display under it.
*/}
```

Static charts/diagrams are fine as images: export a clean PNG/SVG, place it under
`/public/images/posts/<slug>/`, and embed it with `<Figure>`.

## 9. Images

- Put post images in `public/images/posts/<slug>/`.
- Prefer **WebP**, ≤ ~1600px on the long edge. (The integrator can optimize/convert; if
  you only have PNG/JPG, hand them over and note it.)
- Always provide meaningful `alt` text.

## 10. Hand-off checklist (what to return for QA)

1. `src/content/posts/<slug>.mdx` with valid frontmatter and the conventions above.
2. Any referenced image files (with their intended `public/images/posts/<slug>/` paths).
3. For each `{/* CHART: … */}` placeholder: the full spec (and data) needed to build it.
4. Flag anything uncertain (claims to verify, data sources) so it can be checked.

---

## A. Copy-paste skeleton

```mdx
---
title: "<Title>"
description: "<One-sentence hook, ≤155 chars.>"
pubDate: <YYYY-MM-DD>
track: <technical | strategy>
tags: [<tag-1>, <tag-2>]
draft: true
math: <true | false>
---

import Figure from '../../components/Figure.astro';
import Sidenote from '../../components/Sidenote.astro';

<Opening paragraph: the hook and the one idea this post delivers.>

## <First section>

<Prose. Use $math$ if needed, code blocks for code, and a `> **Note.**` callout for asides.>

<Figure src="/images/posts/<slug>/<name>.webp" alt="<alt>" caption="<caption>" size="wide" />

## <Second section>

<...>

## Takeaways

<2–4 sentences: what the reader should remember and do.>
```

## B. Worked example (abbreviated)

```mdx
---
title: "Calibration Is Not Accuracy"
description: "Why a model can be 92% accurate and still dangerously overconfident — and how to measure the gap."
pubDate: 2026-07-01
track: technical
tags: [calibration, uncertainty, reliability]
draft: true
math: true
---

import Figure from '../../components/Figure.astro';
import Sidenote from '../../components/Sidenote.astro';

Two models with identical accuracy can be worlds apart in how much you should trust any
single prediction.<Sidenote n="1">This gap is exactly what calibration measures.</Sidenote>
This post is about measuring — and closing — that gap.

## The reliability diagram

A model is **calibrated** if, among predictions made with confidence $p$, a fraction $p$
are correct. The expected calibration error sums the gaps across confidence bins:

$$
\mathrm{ECE} = \sum_{b=1}^{B} \frac{|B_b|}{N}\,\bigl|\,\mathrm{acc}(B_b) - \mathrm{conf}(B_b)\,\bigr|
$$

{/* CHART: reliability-diagram
    Goal: interactive reliability diagram; slider adds label noise and shows ECE rising.
    Visual: binned bar chart of accuracy vs confidence with the y=x ideal line; ECE readout.
    Data: synthetic logits; describe generator.
    Caption: "Perfect calibration sits on the diagonal; the shaded gaps are the ECE."
*/}

## Takeaways

Report a calibration number next to accuracy. The cheapest reliability win is often a
temperature-scaling pass, not a bigger model.
```
