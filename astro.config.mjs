// @ts-check
import { defineConfig, envField } from 'astro/config';
import sitemap from '@astrojs/sitemap';

export default defineConfig({
  site: 'https://portfolio-jokhan.antredesloutres.fr/',
  integrations: [sitemap()],
  env: {
    schema: {
      // URL publique de PocketBase, lue au build pour générer les pages.
      POCKETBASE_URL: envField.string({ context: 'server', access: 'secret', optional: true }),
    },
  },
});
