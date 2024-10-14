import sonarjs from 'eslint-plugin-sonarjs';

import { createSharedConfig } from "../utils.js";

/**
 * @see https://github.com/SonarSource/eslint-plugin-sonarjs
 */
export default createSharedConfig([
	sonarjs.configs.recommended,
	{
		plugins: sonarjs,
		rules: {
			'sonarjs/no-duplicate-string': 'off',
			'sonarjs/no-accessor-field-mismatch': 'off',
		},
	},
]);
