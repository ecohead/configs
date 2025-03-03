import eslintPromise from 'eslint-plugin-promise';

import type { CorePlugin } from '../../utils.js';
import type { ConfigurationContext } from '../../index.js';
import type { Linter } from 'eslint';

/**
 * @link https://github.com/eslint-community/eslint-plugin-promise
 */
export function promise(
	context: ConfigurationContext,
	rules?: Record<string, Linter.RuleEntry>,
): CorePlugin {
	return {
		plugin: {
			promise: eslintPromise,
		},
		rules: {
			...eslintPromise.configs['recommended'].rules,
			'promise/always-return': 'off',
			...(rules ?? {}),
		},
	};
}
