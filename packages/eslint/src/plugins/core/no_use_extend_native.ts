import eslintNoUseExtendNative from 'eslint-plugin-no-use-extend-native';

import type { CorePlugin } from '../../utils.js';
import type { ConfigurationContext } from '../../index.js';
import type { Linter } from 'eslint';

/**
 * @link https://github.com/dustinspecker/eslint-plugin-no-use-extend-native
 */
export function noUseExtendNative(
	context: ConfigurationContext,
	rules?: Record<string, Linter.RuleEntry>,
): CorePlugin {
	return {
		plugin: {
			'no-use-extend-native': eslintNoUseExtendNative,
		},
		rules: {
			...eslintNoUseExtendNative.configs.recommended.rules,
			...(rules ?? {}),
		},
	};
}
