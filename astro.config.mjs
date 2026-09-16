// @ts-check
import { defineConfig } from 'astro/config';
import sitemap from '@astrojs/sitemap';

export default defineConfig({
  site: 'https://www.danielwaisberg.com',
  integrations: [sitemap()],
  markdown: {
    // single newlines become <br>, so an article title and its
    // description stay on separate lines without a blank line between
    remarkPlugins: ['remark-breaks'],
  },
});
