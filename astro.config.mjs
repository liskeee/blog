// @ts-check
import { defineConfig } from 'astro/config';
import mdx from '@astrojs/mdx';
import sitemap from '@astrojs/sitemap';
import icon from 'astro-icon';
import compress from 'astro-compress';

// https://astro.build/config
export default defineConfig({
  site: 'https://liske.cloud',
  integrations: [
    mdx(),
    sitemap(),
    icon(),
    compress({
      HTML: {
        'html-minifier-terser': {
          removeAttributeQuotes: false,
        },
      },
    }),
  ],
});
