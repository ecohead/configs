import eslintUno from '@unocss/eslint-config/flat';
import type { Linter } from 'eslint';
import type { ConfigurationContext } from '../../index.js';
import type { ExtendableConfig } from '../../utils.js';

export interface UnocssOptions extends ExtendableConfig {
	rules?: Record<`unocss/${string}`, Linter.RuleEntry>;
}

/**
 * @link https://unocss.dev/integrations/eslint
 */
export function unocss(context: ConfigurationContext, options?: UnocssOptions): Linter.Config {
	const files = ['**/*.css', '**/*.scss', '**/*.js'];

	if (context.typescript) {
		files.push('**/*.ts');
	}

	if (context.react) {
		files.push('**/*.jsx');

		if (context.typescript) {
			files.push('**/*.tsx');
		}
	}

	if (context.astro) {
		files.push('**/*.astro');
	}

	if (context.adonis) {
		files.push('**/*.edge');
	}

	return {
		name: '@aureldvx/third-party/unocss',
		files,
		// @ts-expect-error - An error is reported about `meta.defaultOptions` which is unused here.
		plugins: eslintUno.plugins,
		rules: {
			...eslintUno.rules,
			...(options?.rules ?? {}),
		},
	};
}
