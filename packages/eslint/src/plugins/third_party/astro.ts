import eslintAstro from 'eslint-plugin-astro';
import astroParser from 'astro-eslint-parser';
import tsParser from '@typescript-eslint/parser';
import { cwd } from 'node:process';

import type { Linter } from 'eslint';
import type { ConfigurationContext } from '../../index.js';
import type { ExtendableConfig } from '../../utils.js';

export interface AstroOptions extends ExtendableConfig {
	rules?: Record<`astro/${string}`, Linter.RuleEntry>;
}

/**
 * @link https://github.com/ota-meshi/eslint-plugin-astro
 */
export function astro(context: ConfigurationContext, options?: AstroOptions): Linter.Config {
	return {
		name: '@aureldvx/third-party/astro',
		files: ['**/*.astro'],
		languageOptions: {
			parser: astroParser,
			globals: eslintAstro.environments.astro.globals,
			parserOptions: {
				ecmaVersion: 'latest',
				sourceType: 'module',
				parser: tsParser,
				projectService: false,
				tsconfigRootDir: cwd(),
				extraFileExtensions: ['.astro'],
			},
		},
		plugins: {
			astro: eslintAstro,
		},
		rules: {
			...eslintAstro.configs.recommended[0].rules,
			...(options?.rules ?? {}),
		},
	};
}
