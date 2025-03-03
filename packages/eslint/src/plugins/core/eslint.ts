import eslintJs from '@eslint/js';

import type { CorePlugin } from '../../utils.js';
import type { ConfigurationContext } from '../../index.js';
import type { Linter } from 'eslint';

/**
 * @link https://eslint.org/docs/latest/use/getting-started
 */
export function js(
	context: ConfigurationContext,
	rules?: Record<string, Linter.RuleEntry>,
): CorePlugin {
	return {
		rules: {
			...eslintJs.configs.recommended.rules,
			'no-irregular-whitespace': ['error'],
			'one-var': ['error', 'never'],
			'no-cond-assign': ['error', 'except-parens'],
			'eqeqeq': ['error', 'always'],
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
			'no-regex-spaces': ['error'],
			'no-self-compare': ['error'],
			'no-sparse-arrays': ['error'],
			'no-unsafe-negation': ['error'],
			'no-new-wrappers': ['error'],
			'no-self-assign': ['error'],
			'no-this-before-super': ['error'],
			'no-with': ['error'],
			'no-undef-init': ['error'],
			'no-unsafe-finally': ['error'],
			'use-isnan': ['error'],
			'valid-typeof': ['error', { requireStringLiterals: true }],
			'curly': ['error', 'all'],
			'no-array-constructor': ['error'],
			'no-unreachable': ['error'],
			...(rules ?? {}),
		},
	};
}
