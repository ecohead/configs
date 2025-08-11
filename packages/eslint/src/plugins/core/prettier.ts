import eslintPrettier from 'eslint-config-prettier/flat';

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
			// @ts-expect-error plugin is working correctly, only types are bad.
			prettier: eslintPrettier,
		},
		rules: {
			...eslintPrettier.rules,
			...(rules ?? {}),
		},
	};
}
