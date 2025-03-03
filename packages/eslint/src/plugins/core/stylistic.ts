import eslintStylistic from '@stylistic/eslint-plugin';

import type { CorePlugin } from '../../utils.js';
import type { ConfigurationContext } from '../../index.js';
import type { Linter } from 'eslint';

/**
 * @link https://github.com/eslint-stylistic/eslint-stylistic
 */
export function stylistic(
	context: ConfigurationContext,
	rules?: Record<string, Linter.RuleEntry>,
): CorePlugin {
	if (context.astro) {
		return {};
	}

	const config = eslintStylistic.configs.customize({
		braceStyle: '1tbs',
		semi: true,
		quotes: 'single',
		indent: 2,
		jsx: context.react,
		blockSpacing: true,
		arrowParens: true,
		commaDangle: 'always-multiline',
	});

	return {
		plugin: {
			'@stylistic': eslintStylistic,
		},
		rules: {
			...config.rules,
			...(rules ?? {}),
		},
	};
}
