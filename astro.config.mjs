// @ts-check
import { defineConfig } from 'astro/config';
import { unified } from '@astrojs/markdown-remark';
import mdx from '@astrojs/mdx';
import sitemap from '@astrojs/sitemap';
import remarkMath from 'remark-math';
import rehypeKatex from 'rehype-katex';

// https://astro.build/config
export default defineConfig({
  site: 'https://www.stewartjamieson.com',
  trailingSlash: 'ignore',
  // Preserve inbound links from the previous (Hugo) site.
  redirects: {
    // Renamed publication slugs
    '/publication/girdhar-2023': '/publication/girdhar-2023-curee',
    '/publication/jamieson-2018': '/publication/jamieson-2018-thesis',
    '/publication/jamieson-2019': '/publication/jamieson-2019-debate',
    '/publication/jamieson-2020': '/publication/jamieson-2020-active-reward',
    '/publication/jamieson-2020-a': '/publication/jamieson-2020-thesis',
    '/publication/jamieson-2021': '/publication/jamieson-2021-semantic-mapping',
    '/publication/jamieson-2021-a': '/publication/jamieson-2021-spacechi',
    '/publication/jamieson-2023': '/publication/jamieson-2023-deepseecolor',
    '/publication/yang-2023': '/publication/yang-2023-fishing',
    // Old per-talk pages now consolidated on /talks
    '/talk/2019-bayesian-adaptive-sampling': '/talks',
    '/talk/2019-icra-debate': '/talks',
    '/talk/2020-icra-presentation': '/talks',
    '/talk/2021-icra-presentation': '/talks',
    '/talk/2021-spacechi-presentation': '/talks',
    '/talk/2022-icrs-presentation': '/talks',
    '/talk/2023-icra-presentation': '/talks',
    '/talk/2023-ocean-encounters': '/talks',
    // Retired demo posts and the projects section
    '/post/getting-started': '/writing',
    '/post/writing-technical-content': '/writing',
    '/post/blog-with-jupyter': '/writing',
    '/project/co-robotic-exploration': '/research',
    '/project/example': '/research',
    '/project/external-project': '/research',
  },
  integrations: [mdx(), sitemap()],
  markdown: {
    // Astro 7: remark/rehype plugins are configured on the unified processor.
    processor: unified({
      remarkPlugins: [remarkMath],
      rehypePlugins: [rehypeKatex],
    }),
    // Dual Shiki themes: the light theme is applied inline; the dark theme is
    // exposed via --shiki-dark* CSS variables that global.css activates under
    // html[data-theme='dark']. See styles/global.css.
    shikiConfig: {
      themes: {
        light: 'github-light',
        dark: 'github-dark-default',
      },
      wrap: false,
    },
  },
});
