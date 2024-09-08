import importX from 'eslint-plugin-import-x'
import tsParser from '@typescript-eslint/parser'

import { createSharedConfig } from "../utils.js";

/**
 * @see https://github.com/un-ts/eslint-plugin-import-x
 */
export default createSharedConfig([
	importX.flatConfigs.recommended,
	importX.flatConfigs.typescript,
	{
		files: ['**/*.{js,mjs,cjs,jsx,mjsx,ts,tsx,mtsx}'],
		ignores: ['eslint.config.js'],
		languageOptions: {
			parser: tsParser,
			ecmaVersion: 'latest',
			sourceType: 'module',
		},
		rules: {
			'no-unused-vars': 'off',
			'import/no-dynamic-require': 'warn',
			'import/no-nodejs-modules': 'warn',
		},
	},
]);
