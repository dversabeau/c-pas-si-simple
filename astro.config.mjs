import { defineConfig } from 'astro/config';
import { mkdirSync, writeFileSync } from 'node:fs';
import react from '@astrojs/react';
import markdoc from '@astrojs/markdoc';

// L'éditeur Keystatic (/keystatic) n'est chargé qu'en local (npm run dev).
// Le site publié reste 100 % statique : aucune page d'édition n'y est exposée.
const enLocal = process.argv.includes('dev');

/**
 * Déclare l'éditeur Keystatic. C'est la même chose que l'intégration officielle
 * `@keystatic/astro`, sauf que la page d'édition est la nôtre (editeur/keystatic-page.astro),
 * pour pouvoir l'habiller aux couleurs du site.
 */
const editeur = {
  name: 'editeur-keystatic',
  hooks: {
    'astro:config:setup': ({ injectRoute, updateConfig, config }) => {
      updateConfig({
        server: config.server.host ? {} : { host: '127.0.0.1' },
        vite: {
          plugins: [
            {
              name: 'keystatic-config',
              resolveId(id) {
                return id === 'virtual:keystatic-config' ? this.resolve('./keystatic.config', './a') : null;
              },
            },
          ],
          optimizeDeps: { entries: ['keystatic.config.*', '.astro/keystatic-imports.js'] },
        },
      });
      const dossier = new URL('./.astro/', config.root);
      mkdirSync(dossier, { recursive: true });
      writeFileSync(
        new URL('keystatic-imports.js', dossier),
        'import "@keystatic/astro/ui";\nimport "@keystatic/astro/api";\nimport "@keystatic/core/ui";\n',
      );
      injectRoute({ entrypoint: './editeur/keystatic-page.astro', pattern: '/keystatic/[...params]', prerender: false });
      injectRoute({
        entrypoint: '@keystatic/astro/internal/keystatic-api.js',
        pattern: '/api/keystatic/[...params]',
        prerender: false,
      });
    },
  },
};

export default defineConfig({
  site: 'https://cpassisimple.fr',
  integrations: enLocal ? [react(), markdoc(), editeur] : [],
});
