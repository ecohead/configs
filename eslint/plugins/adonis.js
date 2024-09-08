import adonis from '@adonisjs/eslint-plugin'

import { createSharedConfig } from "../utils.js";

/**
 * @see https://github.com/adonisjs/eslint-plugin-adonisjs
 */
export default createSharedConfig([
	{
		plugins: {
			'@adonisjs': adonis,
		},
		rules: {
			'@adonisjs/prefer-lazy-controller-import': 'error',
			'@adonisjs/prefer-lazy-listener-import': 'error',
		},
	},
]);
