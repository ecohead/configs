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
		name: '@aureldvx/third-party/storybook',
		files: eslintStorybook.configs['flat/recommended'][0].files,
		plugins: eslintStorybook.configs['flat/recommended'][0].plugins,
		rules: {
			...eslintStorybook.configs['flat/recommended'][0].rules,
			...(options?.rules ?? {}),
		},
	};
}
