import { defineConfig } from '@aureldvx/eslint';

export default defineConfig({
	plugins: {
		typescript: true,
	},
	ignore: ['eslint.config.js', 'prettier.config.js', 'stylelint.config.js'],
});
