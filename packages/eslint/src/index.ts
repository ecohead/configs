import globals from 'globals';
import type { Linter } from 'eslint';
import { core, type CoreRulesConfiguration } from './plugins/core/index.js';
import { unocss, type UnocssOptions } from './plugins/third_party/unocss.js';
import { adonis, type AdonisOptions } from './plugins/third_party/adonis.js';
import { react, type ReactOptions } from './plugins/third_party/react.js';
import { storybook, type StorybookOptions } from './plugins/third_party/storybook.js';
import { vitest, type VitestOptions } from './plugins/third_party/vitest.js';
import { astro, type AstroOptions } from './plugins/third_party/astro.js';
import { typescript, type TypescriptOptions } from './plugins/third_party/typescript.js';

const defaultIgnoreList = [
	'**/node_modules/**',
	'**/coverage/**',
	'**/.astro/**',
	'**/.cache/**',
	'**/.nuxt/**',
	'**/.next/**',
	'**/dist/**',
];

interface UserConfiguration {
	adonis?: boolean | [boolean, AdonisOptions];
	astro?: boolean | [boolean, AstroOptions];
	react?: boolean | [boolean, ReactOptions];
	storybook?: boolean | [boolean, StorybookOptions];
	// tailwindcss?: boolean | [boolean, TailwindOptions];
	typescript?: boolean | [boolean, TypescriptOptions];
	unocss?: boolean | [boolean, UnocssOptions];
	vitest?: boolean | [boolean, VitestOptions];
}

export type ConfigurationContext = Required<Record<keyof UserConfiguration, boolean>>;

interface LocalConfig {
	coreRules?: CoreRulesConfiguration;
	plugins?: UserConfiguration;
	extends?: Linter.Config | Array<Linter.Config>;
	ignore?: Array<string>;
}

const factories = [
	['adonis', adonis],
	['astro', astro],
	['react', react],
	['storybook', storybook],
	// ['tailwindcss', tailwindcss],
	['typescript', typescript],
	['unocss', unocss],
	['vitest', vitest],
] as const;

export function defineConfig(config?: LocalConfig): Array<Linter.Config> {
	const { coreRules, plugins, extends: userExtends, ignore } = config;
	const context: ConfigurationContext = {} as ConfigurationContext;

	for (const [name] of factories) {
		if (plugins && name in plugins) {
			if (typeof plugins[name] === 'boolean') {
				context[name] = plugins[name];
				continue;
			}

			if (Array.isArray(plugins[name])) {
				context[name] = plugins[name][0];
				continue;
			}
		}

		context[name] = false;
	}

	const finalConfig: Array<Linter.Config> = [
		/* Ignores files globally. */
		{
			name: '@aureldvx/core/ignore',
			ignores: [...defaultIgnoreList, ...(ignore ?? [])],
		},
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
				sourceType: 'module',
				globals: {
					...globals.node,
				},
			},
		},
		...core(context, { ...coreRules, typescript: plugins?.typescript?.[1] }),
	];

	for (const [name, factory] of factories) {
		if (name === 'typescript') {
			continue;
		}

		if (plugins && name in plugins) {
			if (Array.isArray(plugins[name])) {
				const [enabled, options] = plugins[name];

				if (enabled) {
					finalConfig.push(factory(context, options));
				}
			} else if (plugins[name] === true) {
				finalConfig.push(factory(context));
			}
		}
	}

	if (userExtends) {
		if (Array.isArray(userExtends)) {
			finalConfig.push(...userExtends);
		} else {
			finalConfig.push(userExtends);
		}
	}

	return finalConfig;
}
