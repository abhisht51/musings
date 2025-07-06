// @ts-check
import { defineConfig } from 'astro/config';
import mdx from '@astrojs/mdx';
import netlify from '@astrojs/netlify';
import tailwind from '@astrojs/tailwind';

// https://astro.build/config
export default defineConfig({
  site: 'https://abhisht-musings.netlify.app',
  integrations: [mdx(), tailwind()],
  // Removed output: 'server' - static generation is much faster for blogs
  // Removed adapter: netlify() - not needed for static sites
});
