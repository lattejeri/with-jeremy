// @ts-check
import { defineConfig } from 'astro/config';

// Served as a project page at latterjeri.github.io/with-jeremy.
// When a custom domain is added, set `site` to it and remove `base`.
export default defineConfig({
  site: 'https://latterjeri.github.io',
  base: '/with-jeremy',
});
