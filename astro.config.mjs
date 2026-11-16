import { defineConfig } from 'astro/config';
import react from '@astrojs/react';
import mdx from '@astrojs/mdx';
import sitemap from '@astrojs/sitemap';
import tailwindcss from '@tailwindcss/vite';
// Set SITE_URL to the production origin to emit canonical URLs and a sitemap.
export default defineConfig({
  output: 'static',
  trailingSlash: 'always',
  site: process.env.SITE_URL,
  integrations: [
    react(),
    mdx(),
    ...(process.env.SITE_URL
      ? [
          sitemap({
            filter: (page) => !new URL(page).pathname.startsWith('/learn/'),
          }),
        ]
      : []),
  ],
  vite: { plugins: [tailwindcss()] },
});
