import eslintNode from 'eslint-plugin-n';

import type { CorePlugin } from '../../utils.js';
import type { ConfigurationContext } from '../../index.js';
import type { Linter } from 'eslint';

/**
 * @link https://github.com/eslint-community/eslint-plugin-n
 */
export function node(
	context: ConfigurationContext,
	rules?: Record<string, Linter.RuleEntry>,
): CorePlugin {
	return {
		plugin: {
			n: eslintNode,
		},
		rules: {
			...eslintNode.configs['flat/recommended'].rules,
			'n/no-missing-import': 'off',
			'n/no-unpublished-import': 'off',
			'n/no-unsupported-features/node-builtins': 'off',
			'n/no-unsupported-features/es-syntax': 'off',
			...(rules ?? {}),
		},
	};
}
