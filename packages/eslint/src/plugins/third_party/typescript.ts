import eslintTS from 'typescript-eslint';
import globals from 'globals';

import type { CorePlugin, ExtendableConfig } from '../../utils.js';
import type { Linter } from 'eslint';
import type { ConfigurationContext } from '../../index.js';

export interface TypescriptOptions extends ExtendableConfig {
	rules?: Record<`@typescript-eslint/${string}`, Linter.RuleEntry>;
}

/**
 * @link https://typescript-eslint.io/getting-started/
 */
export function typescript(context: ConfigurationContext, options?: TypescriptOptions): CorePlugin {
	return {
		plugin: {
			// @ts-expect-error - An error is reported about `visitorKeys` which is unused here.
			'@typescript-eslint': eslintTS.plugin,
		},
		rules: {
			...eslintTS.configs.recommendedTypeChecked[0].rules,
			...eslintTS.configs.stylisticTypeChecked[0].rules,
			'@typescript-eslint/naming-convention': [
				'error',
				{
					selector: 'variable',
					format: ['camelCase', 'snake_case', 'PascalCase'],
				},
				{
					selector: 'typeLike',
					format: ['PascalCase'],
				},
				{
					selector: 'class',
					format: ['PascalCase'],
				},
				{
					selector: 'interface',
					format: ['PascalCase'],
					custom: {
						regex: '^I[A-Z]',
						match: false,
					},
				},
			],
			'@typescript-eslint/no-empty-object-type': [
				'error',
				{ allowInterfaces: 'with-single-extends' },
			],
			'@typescript-eslint/consistent-type-definitions': 'off',
			'@typescript-eslint/array-type': ['error', { default: 'generic' }],
			'@typescript-eslint/no-namespace': 'error',
			'@typescript-eslint/explicit-member-accessibility': ['error', { accessibility: 'no-public' }],
			'@typescript-eslint/no-shadow': 'error',
			...(options?.rules ?? {}),
		},
	};
}
