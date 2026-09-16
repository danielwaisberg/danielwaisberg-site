// @ts-check
import { defineConfig } from 'astro/config';
import sitemap from '@astrojs/sitemap';

export default defineConfig({
  // non-www is canonical, matching the current Wix setup
  site: 'https://danielwaisberg.com',

  // no trailing slashes: /work, not /work/
  trailingSlash: 'never',
  build: {
    // emits work.html rather than work/index.html
    format: 'file',
  },

  integrations: [sitemap()],
  markdown: {
    // single newlines become <br>, so an article title and its
    // description stay on separate lines without a blank line between
    remarkPlugins: ['remark-breaks'],
  },
});
