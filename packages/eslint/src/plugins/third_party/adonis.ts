import eslintAdonisJs from '@adonisjs/eslint-plugin';

import type { Linter } from 'eslint';
import type { ConfigurationContext } from '../../index.js';
import type { ExtendableConfig } from '../../utils.js';

export interface AdonisOptions extends ExtendableConfig {
	rules?: Record<`@adonisjs/${string}`, Linter.RuleEntry>;
}

/**
 * @link https://github.com/adonisjs/eslint-plugin-adonisjs
 */
export function adonis(context: ConfigurationContext, options?: AdonisOptions): Linter.Config {
	return {
		name: '@aureldvx/third-party/adonis',
		files: ['**/*.ts', '**/*.cts', '**/*.mts'],
		plugins: {
			// @ts-expect-error correct implementation indeed.
			'@adonisjs': eslintAdonisJs,
		},
		rules: {
			'@adonisjs/prefer-lazy-controller-import': 'error',
			'@adonisjs/prefer-lazy-listener-import': 'error',
			...(options?.rules ?? {}),
		},
	};
}
