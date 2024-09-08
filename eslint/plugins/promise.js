import promise from 'eslint-plugin-promise';

import { createSharedConfig } from "../utils.js";

/**
 * @see https://github.com/eslint-community/eslint-plugin-promise
 */
export default createSharedConfig([
	promise.configs['flat/recommended'],
	{
		rules: {
			'promise/always-return': 'off',
		},
	},
]);
