import { defineConfig } from 'astro/config';
import sitemap from '@astrojs/sitemap';
import gfm from 'remark-gfm';

import tailwindcss from '@tailwindcss/vite';

import cloudflare from '@astrojs/cloudflare';

// https://astro.build/config
export default defineConfig({
  site: 'https://notizzettel.subin.app',
  integrations: [sitemap()],

  markdown: {
    // 1) GitHub-flavored Markdown 지원
    remarkPlugins: [
      gfm
    ],
  },
  vite: {
    // @ts-ignore
    plugins: [tailwindcss()],
  },
  adapter: cloudflare(),
  output: 'static',
});