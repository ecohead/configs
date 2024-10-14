import importX from 'eslint-plugin-import-x'
import tsParser from '@typescript-eslint/parser'

import { createSharedConfig } from "../utils.js";

/**
 * @see https://github.com/un-ts/eslint-plugin-import-x
 */
export default createSharedConfig([
	importX.flatConfigs.recommended,
	importX.flatConfigs.typescript,
	{
		files: ['**/*.{js,mjs,cjs,jsx,mjsx,ts,tsx,mtsx}'],
		ignores: ['eslint.config.js'],
		languageOptions: {
			parser: tsParser,
			ecmaVersion: 'latest',
			sourceType: 'module',
		},
		rules: {
			'import-x/no-unresolved': 'off',
			'import-x/namespace': 'off',
			'import-x/default': 'off',
			'import-x/no-named-as-default': 'off',
			'import-x/no-named-as-default-member': 'off',
			'import-x/order': [
				'error',
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
		},
	},
]);
