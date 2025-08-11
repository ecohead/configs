import eslintReact from 'eslint-plugin-react';
import eslintReactRefresh from 'eslint-plugin-react-refresh';
import eslintReactHooks from 'eslint-plugin-react-hooks';
import eslintReactPerf from 'eslint-plugin-react-perf';
import eslintA11y from 'eslint-plugin-jsx-a11y';
import globals from 'globals';
import type { Linter } from 'eslint';

import type { ConfigurationContext } from '../../index.js';
import type { ExtendableConfig, FilesToParse, Settings } from '../../utils.js';

type RulePrefix =
	| `react/${string}`
	| `react-refresh/${string}`
	| `react-perf/${string}`
	| `jsx-a11y/${string}`
	| `react-hooks/${string}`;

export interface ReactOptions extends ExtendableConfig {
	rules?: Record<RulePrefix, Linter.RuleEntry>;
	files?: FilesToParse;
	settings?: Settings;
}

/**
 * @link https://github.com/jsx-eslint/eslint-plugin-react
 * @link https://github.com/ArnaudBarre/eslint-plugin-react-refresh
 * @link https://github.com/cvazac/eslint-plugin-react-perf
 * @link https://github.com/jsx-eslint/eslint-plugin-jsx-a11y
 * @link https://github.com/facebook/react/blob/main/packages/eslint-plugin-react-hooks
 */
export function react(context: ConfigurationContext, options?: ReactOptions): Linter.Config {
	const files = ['**/*.jsx'];

	if (context.typescript) {
		files.push('**/*.tsx');
	}

	return {
		name: '@aureldvx/third-party/react',
		files: options?.files ?? files,
		languageOptions: {
			...eslintA11y.flatConfigs.recommended.languageOptions,
			globals: {
				...globals.serviceworker,
				...globals.browser,
			},
		},
		plugins: {
			'react': eslintReact,
			'react-refresh': eslintReactRefresh,
			'react-perf': eslintReactPerf,
			'jsx-a11y': eslintA11y,
			'react-hooks': eslintReactHooks,
		},
		rules: {
			...eslintReact.configs.flat.recommended.rules,
			...eslintReact.configs.flat['jsx-runtime'].rules,
			...eslintReactRefresh.configs.recommended.rules,
			...eslintReactPerf.configs.flat.recommended.rules,
			...eslintReactHooks.configs.recommended,
			'react/no-unescaped-entities': 'off',
			...(options?.rules ?? {}),
		},
		settings: options?.settings ?? {
			react: {
				fragment: 'Fragment',
				pragma: 'React',
				version: 'detect',
			},
		},
	};
}
