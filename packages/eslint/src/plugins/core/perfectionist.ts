import eslintPerfectionist from 'eslint-plugin-perfectionist';

import type { CorePlugin } from '../../utils.js';
import type { ConfigurationContext } from '../../index.js';
import type { Linter } from 'eslint';

/**
 * @link https://github.com/azat-io/eslint-plugin-perfectionist
 */
export function perfectionist(
	context: ConfigurationContext,
	rules?: Record<string, Linter.RuleEntry>,
): CorePlugin {
	return {
		plugin: {
			perfectionist: eslintPerfectionist,
		},
		rules: {
			'perfectionist/sort-imports': [
				'error',
				{
					type: 'alphabetical',
					order: 'asc',
					ignoreCase: true,
					specialCharacters: 'keep',
					internalPattern: ['^#.+'],
					partitionByComment: false,
					partitionByNewLine: false,
					newlinesBetween: 'always',
					maxLineLength: undefined,
					groups: [
						'type',
						['builtin', 'external'],
						'internal-type',
						'internal',
						['parent-type', 'sibling-type', 'index-type'],
						['parent', 'sibling', 'index'],
						'object',
						'unknown',
					],
					customGroups: { type: {}, value: {} },
					environment: 'node',
				},
			],
			...(rules ?? {}),
		},
	};
}
