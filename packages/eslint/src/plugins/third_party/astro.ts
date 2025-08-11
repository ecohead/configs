import eslintAstro from 'eslint-plugin-astro';

import type { Linter } from 'eslint';
import type { ConfigurationContext } from '../../index.js';
import type { ExtendableConfig } from '../../utils.js';

export interface AstroOptions extends ExtendableConfig {
	rules?: Record<`astro/${string}`, Linter.RuleEntry>;
}

/**
 * @link https://github.com/ota-meshi/eslint-plugin-astro
 */
export function astro(context: ConfigurationContext, options?: AstroOptions): Array<Linter.Config> {
	return [
		...eslintAstro.configs.recommended,
		...eslintAstro.configs['jsx-a11y-recommended'],
		{
			rules: options?.rules ?? {},
		},
	];
}
