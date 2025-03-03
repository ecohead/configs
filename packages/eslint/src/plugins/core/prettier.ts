import eslintPrettier from 'eslint-config-prettier';

import type { CorePlugin } from '../../utils.js';
import type { ConfigurationContext } from '../../index.js';
import type { Linter } from 'eslint';

/**
 * @link https://github.com/prettier/eslint-config-prettier
 */
export function prettier(
	context: ConfigurationContext,
	rules?: Record<string, Linter.RuleEntry>,
): CorePlugin {
	return {
		plugin: {
			prettier: eslintPrettier,
		},
		rules: {
			...eslintPrettier.rules,
			...(rules ?? {}),
		},
	};
}
