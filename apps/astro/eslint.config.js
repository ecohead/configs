import { defineConfig } from '@aureldvx/eslint';

export default defineConfig({
	plugins: {
		astro: true,
		typescript: true,
	},
	ignore: ['eslint.config.js', 'prettier.config.js', 'astro.config.mjs'],
});
