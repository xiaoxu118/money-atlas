import { defineConfig } from 'astro/config';
import mdx from '@astrojs/mdx';
import sitemap from '@astrojs/sitemap';
import tailwindcss from '@tailwindcss/vite';
// Set SITE_URL to the production origin to emit canonical URLs and a sitemap.
export default defineConfig({
  output: 'static',
  trailingSlash: 'always',
  site: process.env.SITE_URL,
  integrations: [
    mdx(),
    ...(process.env.SITE_URL
      ? [
          sitemap({
            filter: (page) => !/^\/(learn|labs)\//.test(new URL(page).pathname),
          }),
        ]
      : []),
  ],
  vite: { plugins: [tailwindcss()] },
});
