import typescriptESLint from 'typescript-eslint';

import { createSharedConfig } from "../utils.js";

/**
 * @see https://typescript-eslint.io/getting-started/
 */
export default createSharedConfig([
	...typescriptESLint.configs.recommendedTypeChecked,
	...typescriptESLint.configs.stylisticTypeChecked,
	{
		languageOptions: {
			parserOptions: {
				project: true,
				tsconfigRootDir: import.meta.dirname,
				sourceType: 'module',
				ecmaVersion: 'latest',
			},
		},
		rules: {
			'@typescript-eslint/semi': [2, 'never'],
			'@typescript-eslint/quotes': ['error', 'single'],
			'@typescript-eslint/indent': [
				'error',
				2,
				{
					SwitchCase: 1,
					flatTernaryExpressions: false,
					ignoredNodes: ['TSTypeParameterInstantiation'],
				},
			],
			'@typescript-eslint/space-before-function-paren': ['error', 'always'],
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
			'@typescript-eslint/no-empty-interface': ['error', { allowSingleExtends: true }],
			'@typescript-eslint/consistent-type-definitions': 'off',
			'@typescript-eslint/array-type': ['error', { default: 'generic' }],
			'@typescript-eslint/no-namespace': 'off',
			'@typescript-eslint/explicit-member-accessibility': ['error', { accessibility: 'no-public' }],
			'@typescript-eslint/unbound-method': 'off',
		},
	},
]);
