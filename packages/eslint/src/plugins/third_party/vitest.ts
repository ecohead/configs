import eslintVitest from '@vitest/eslint-plugin';

import type { ConfigurationContext } from '../../index.js';
import type { Linter } from 'eslint';
import type { ExtendableConfig, FilesToParse } from '../../utils.js';

export interface VitestOptions extends ExtendableConfig {
	rules?: Record<`vitest/${string}`, Linter.RuleEntry>;
	files?: FilesToParse;
	vitestSettings?: {
		typecheck?: boolean;
	};
}

/**
 * @link https://github.com/vitest-dev/eslint-plugin-vitest
 */
export function vitest(context: ConfigurationContext, options?: VitestOptions): Linter.Config {
	return {
		name: '@aureldvx/third-party/vitest',
		files: options?.files ?? [
			'tests/**/*.{spec,test}.{js,jsx,ts,tsx}',
			'__tests__/**/*.{spec,test}.{js,jsx,ts,tsx}',
			'src/**/*.{spec,test}.{js,jsx,ts,tsx}',
		],
		languageOptions: {
			globals: eslintVitest.environments.env.globals,
		},
		plugins: {
			// @ts-expect-error - An error is reported about `languageOptions.globals.suite`.
			vitest: eslintVitest,
		},
		rules: {
			...eslintVitest.configs.recommended.rules,
			...(options?.rules ?? {}),
		},
		settings: {
			vitest: {
				typecheck: options?.vitestSettings?.typecheck ?? true,
			},
		},
	};
}
