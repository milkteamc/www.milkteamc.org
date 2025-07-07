// @ts-check
import { defineConfig } from 'astro/config';

import spotlightjs from '@spotlightjs/astro';

// https://astro.build/config
export default defineConfig({
  integrations: [spotlightjs()]
});