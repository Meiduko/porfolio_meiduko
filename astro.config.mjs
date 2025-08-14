// @ts-check
import { defineConfig } from 'astro/config';

import tailwindcss from '@tailwindcss/vite';

// https://astro.build/config
export default defineConfig({
  vite: {
    plugins: [tailwindcss()]
  },
  site: 'http://192.168.1.11:4321/',
  output: 'server',
  i18n: {
    defaultLocale: 'es',
    locales: ['es', 'en', 'gl'],
    routing: {
      prefixDefaultLocale: false,
      redirectToDefaultLocale: false,
    }
  },
});