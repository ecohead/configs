import n from "eslint-plugin-n";

import { createSharedConfig } from "../utils.js";

/**
 * @see https://github.com/eslint-community/eslint-plugin-n
 */
export default createSharedConfig([
	n.configs['flat/recommended-module'],
	{
		rules: {
			'n/no-missing-import': 'off',
			'n/no-unpublished-import': 'off',
			'n/no-unsupported-features/node-builtins': 'off',
			'n/no-unsupported-features/es-syntax': 'off',
		},
	},
]);
