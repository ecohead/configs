import eslintUnicorn from 'eslint-plugin-unicorn';

import type { CorePlugin } from '../../utils.js';
import type { ConfigurationContext } from '../../index.js';
import type { Linter } from 'eslint';

/**
 * @link https://github.com/sindresorhus/eslint-plugin-unicorn
 */
export function unicorn(
	context: ConfigurationContext,
	rules?: Record<string, Linter.RuleEntry>,
): CorePlugin {
	return {
		plugin: {
			unicorn: eslintUnicorn,
		},
		rules: {
			...eslintUnicorn.configs.recommended.rules,
			'unicorn/filename-case': ['warn', { case: 'snakeCase' }],
			'unicorn/no-null': 'off',
			...(rules ?? {}),
		},
	};
}
