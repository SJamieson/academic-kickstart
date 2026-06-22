import { defineCollection, z } from 'astro:content';
import { glob, file } from 'astro/loaders';

const links = z
  .object({
    pdf: z.string().optional(),
    arxiv: z.string().optional(),
    doi: z.string().optional(),
    code: z.string().optional(),
    video: z.string().optional(),
    slides: z.string().optional(),
    poster: z.string().optional(),
    url: z.string().optional(),
  })
  .optional();

// Publications — one Markdown file per entry; the body is the abstract.
const publications = defineCollection({
  loader: glob({ pattern: '**/*.md', base: './src/content/publications' }),
  schema: z.object({
    title: z.string(),
    authors: z.array(z.string()),
    venue: z.string(),
    year: z.number().int(),
    date: z.coerce.date(),
    type: z.enum(['journal', 'conference', 'workshop', 'thesis']),
    award: z.string().optional(),
    featured: z.boolean().default(false),
    links,
  }),
});

// Talks — a single YAML list; each item needs a unique `id`.
const talks = defineCollection({
  loader: file('./src/content/talks.yaml'),
  schema: z.object({
    title: z.string(),
    event: z.string(),
    location: z.string(),
    date: z.coerce.date(),
    // grouping for the Talks page
    category: z.enum(['selected', 'industry', 'poster']),
    role: z.string().optional(),
    featured: z.boolean().default(false),
    photo: z.string().optional(),
    links,
  }),
});

// Blog posts — Markdown/MDX. (Populated in Phase 4.)
const posts = defineCollection({
  loader: glob({ pattern: '**/*.{md,mdx}', base: './src/content/posts' }),
  schema: z.object({
    title: z.string(),
    description: z.string(),
    pubDate: z.coerce.date(),
    updatedDate: z.coerce.date().optional(),
    track: z.enum(['strategy', 'technical']),
    tags: z.array(z.string()).default([]),
    draft: z.boolean().default(false),
    math: z.boolean().default(false),
    heroImage: z.string().optional(),
  }),
});

export const collections = { publications, talks, posts };
