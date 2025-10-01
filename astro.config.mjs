// @ts-check
import { defineConfig } from 'astro/config';
import node from '@astrojs/node';

import tailwindcss from '@tailwindcss/vite';

// https://astro.build/config
export default defineConfig({
  adapter: node({
    mode: 'standalone',
  }),
  vite: {
    plugins: [tailwindcss()]
  },
  site: 'http://192.168.1.11:4321/',
  output: 'server',
  i18n: {
    defaultLocale: 'es',
    locales: ['es', 'en', 'gl'],
    routing: {
      prefixDefaultLocale: true,
      redirectToDefaultLocale: false,
    }
  },
});