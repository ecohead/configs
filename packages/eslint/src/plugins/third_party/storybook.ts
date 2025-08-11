import eslintStorybook from 'eslint-plugin-storybook';
import type { ConfigurationContext } from '../../index.js';
import type { Linter } from 'eslint';
import type { ExtendableConfig } from '../../utils.js';

export interface StorybookOptions extends ExtendableConfig {
	rules?: Record<`storybook/${string}`, Linter.RuleEntry>;
}

/**
 * @link https://github.com/storybookjs/eslint-plugin-storybook
 */
export function storybook(
	context: ConfigurationContext,
	options?: StorybookOptions,
): Linter.Config {
	return {
		...eslintStorybook.configs['flat/recommended'],
		name: '@aureldvx/third-party/storybook',
		rules: {
			...eslintStorybook.configs['flat/recommended'][0].rules,
			...(options?.rules ?? {}),
		},
	};
}
