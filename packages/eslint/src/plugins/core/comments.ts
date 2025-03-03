import eslintComments from '@eslint-community/eslint-plugin-eslint-comments/configs';

import type { CorePlugin } from '../../utils.js';
import type { ConfigurationContext } from '../../index.js';
import type { Linter } from 'eslint';

/**
 * @link https://github.com/eslint-community/eslint-plugin-eslint-comments
 */
export function comments(
	context: ConfigurationContext,
	rules?: Record<string, Linter.RuleEntry>,
): CorePlugin {
	return {
		plugin: eslintComments.recommended.plugins,
		rules: {
			...eslintComments.recommended.rules,
			...(rules ?? {}),
		},
	};
}
