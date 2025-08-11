import { importX as eslintImportX } from 'eslint-plugin-import-x';

import type { CorePlugin } from '../../utils.js';
import type { ConfigurationContext } from '../../index.js';
import type { Linter } from 'eslint';

/**
 * @link https://github.com/un-ts/eslint-plugin-import-x
 */
export function importX(
	context: ConfigurationContext,
	rules?: Record<string, Linter.RuleEntry>,
): CorePlugin {
	return {
		plugin: {
			// @ts-expect-error - An error is reported about `visitorKeys` which is unused here.
			'import-x': eslintImportX,
		},
		rules: {
			...eslintImportX.flatConfigs.recommended.rules,
			...eslintImportX.flatConfigs.typescript.rules,
			'import-x/no-unresolved': 'off',
			'import-x/namespace': 'off',
			'import-x/default': 'off',
			'import-x/no-named-as-default': 'off',
			'import-x/no-named-as-default-member': 'off',
			'import-x/order': [
				'off',
				{
					'groups': [
						'type',
						'builtin',
						'external',
						'internal',
						'index',
						'parent',
						'sibling',
						'object',
					],
					'pathGroups': [
						{
							pattern: '#*/**',
							group: 'internal',
						},
					],
					'distinctGroup': true,
					'newlines-between': 'always',
					'alphabetize': {
						order: 'asc',
						orderImportKind: 'asc',
						caseInsensitive: true,
					},
				},
			],
			...(rules ?? {}),
		},
	};
}
