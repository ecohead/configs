import eslintSonar from 'eslint-plugin-sonarjs';

import type { CorePlugin } from '../../utils.js';
import type { ConfigurationContext } from '../../index.js';
import type { Linter } from 'eslint';

/**
 * @link https://github.com/SonarSource/eslint-plugin-sonarjs
 */
export function sonar(
	context: ConfigurationContext,
	rules?: Record<string, Linter.RuleEntry>,
): CorePlugin {
	return {
		plugin: {
			sonarjs: eslintSonar,
		},
		rules: {
			...eslintSonar.configs.recommended.rules,
			'sonarjs/no-duplicate-string': 'off',
			'sonarjs/no-accessor-field-mismatch': 'off',
			...(rules ?? {}),
		},
	};
}
