import { defineConfig } from '@aureldvx/eslint';

export default defineConfig({
	plugins: {
		react: true,
		typescript: true,
	},
	ignore: ['eslint.config.js', 'prettier.config.js', 'stylelint.config.js'],
});
