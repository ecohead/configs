import globals from 'globals';

import { default as native } from 'plugins/eslint.js';
import { default as typescript } from 'plugins/typescript.js';
import { default as unicorn } from 'plugins/unicorn.js';
import { default as sonar } from 'plugins/sonar.js';
import { default as comments } from 'plugins/comments.js';
import { default as node } from 'plugins/node.js';
import { default as prettier } from 'plugins/prettier.js';
import { default as noUseExtendNative } from 'plugins/no_use_extend_native.js';
import { default as promise } from 'plugins/promise.js';
import { default as unocss } from 'plugins/unocss.js';
import { default as importX } from 'plugins/import_x.js';
import { default as adonis } from 'plugins/adonis.js';
import { default as tailwindcss } from 'plugins/tailwindcss.js';

export const IGNORES_LIST = ['dist', 'eslint.config.js', 'vite.config.ts', 'uno.config.ts', 'tailwind.config.js'];

/**
 * @param {import('eslint').Linter.Config[]} config
 * @param {string[]} ignores
 * @returns {import('eslint').Linter.Config[]}
 */
export function defineConfig (config, ignores = []) {
	return [
		/* Ignores files globally. */
		{ ignores: [...IGNORES_LIST, ...ignores] },
		/* Global options. */
		{
			languageOptions: {
				globals: {
					...globals.browser,
					...globals.node,
				},
			},
		},
		/* Specific for ESLint itself. */
		{
			files: ['eslint.config.js'],
			languageOptions: {
				sourceType: 'script',
				globals: {
					...globals.node,
				},
			},
		},
		...config,
	];
}

const all = [
	native,
	typescript,
	unicorn,
	sonar,
	comments,
	node,
	prettier,
	noUseExtendNative,
	promise,
	unocss,
	importX,
	adonis,
	tailwindcss,
];

export {
	all,
	native,
	typescript,
	unicorn,
	sonar,
	comments,
	node,
	prettier,
	noUseExtendNative,
	promise,
	unocss,
	importX,
	adonis,
	tailwindcss,
};

export default defineConfig;
