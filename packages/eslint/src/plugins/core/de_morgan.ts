import eslintDeMorgan from 'eslint-plugin-de-morgan';

import type { CorePlugin } from '../../utils.js';
import type { ConfigurationContext } from '../../index.js';
import type { Linter } from 'eslint';

/**
 * @link https://github.com/azat-io/eslint-plugin-de-morgan
 */
export function deMorgan(
	context: ConfigurationContext,
	rules?: Record<string, Linter.RuleEntry>,
): CorePlugin {
	return {
		plugin: {
			'de-morgan': eslintDeMorgan,
		},
		rules: {
			...eslintDeMorgan.configs.recommended.rules,
			...(rules ?? {}),
		},
	};
}
