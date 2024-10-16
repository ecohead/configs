import eslintJs from '@eslint/js';

import {createSharedConfig} from "../utils.js";

/**
 * @see https://eslint.org/docs/latest/use/getting-started
 */
export default createSharedConfig([
	eslintJs.configs.recommended,
	{
		rules: {
			'quotes': 'off',
			'space-before-function-paren': 'off',
			'no-irregular-whitespace': ['error'],
			'indent': 'off',
			'no-multiple-empty-lines': ['error', { max: 1 }],
			'one-var': ['error', 'never'],
			'no-cond-assign': ['error', 'except-parens'],
			'comma-dangle': ['error', 'always-multiline'],
			'eqeqeq': ['error', 'always'],
			'eol-last': ['error', 'always'],
			'new-parens': ['error', 'always'],
			'no-caller': ['error'],
			'no-constant-condition': ['error'],
			'no-control-regex': ['error'],
			'no-debugger': ['error'],
			'no-duplicate-case': ['error'],
			'no-eval': ['error'],
			'no-ex-assign': ['error'],
			'no-extra-boolean-cast': ['error'],
			'no-fallthrough': ['error'],
			'no-inner-declarations': ['error'],
			'no-invalid-regexp': ['error', { allowConstructorFlags: ['u', 'y'] }],
			'no-proto': ['error'],
			'no-shadow': ['off'],
			'@typescript-eslint/no-shadow': 'error',
			'no-regex-spaces': ['error'],
			'no-self-compare': ['error'],
			'no-sparse-arrays': ['error'],
			'no-mixed-spaces-and-tabs': ['error'],
			'no-unsafe-negation': ['error'],
			'no-new-wrappers': ['error'],
			'no-self-assign': ['error'],
			'no-this-before-super': ['error'],
			'no-with': ['error'],
			'rest-spread-spacing': ['error', 'never'],
			'no-trailing-spaces': ['error', { ignoreComments: true }],
			'no-undef-init': ['error'],
			'no-unsafe-finally': ['error'],
			'padded-blocks': ['error', 'never'],
			'space-in-parens': ['error', 'never'],
			'use-isnan': ['error'],
			'valid-typeof': ['error', { requireStringLiterals: true }],
			'brace-style': ['error', '1tbs'],
			'curly': ['error', 'all'],
			'handle-callback-err': ['error', '^(err|error)$'],
			'max-len': [
				'error',
				{
					code: 100,
					comments: 120,
					ignoreUrls: true,
					ignoreTemplateLiterals: true,
				},
			],
			'no-array-constructor': ['error'],
			'no-unreachable': ['error'],
			'no-multi-spaces': ['error'],
		},
	},
]);
