import eslintTailwind from 'eslint-plugin-tailwindcss';
import type { Linter } from 'eslint';
import type { ConfigurationContext } from '../../index.js';
import type { ExtendableConfig } from '../../utils.js';

export interface TailwindOptions extends ExtendableConfig {
	rules?: Record<`tailwindcss/${string}`, Linter.RuleEntry>;
	tailwindSettings?: {
		/**
		 * @default ["classnames", "ctl", "clsx", "cx", "cva", "tv", "cw", "twMerge", "tw"]
		 */
		callees?: string[];
		/**
		 * @default ["compoundVariants", "defaultVariants"]
		 */
		ignoredKeys?: string[];
		/**
		 * @default "^class(Name)?$"
		 */
		classRegex?: string;
		/**
		 * @default "tailwind.config.js"
		 */
		config?: string;
		/**
		 * @default ["**\/*.css", "!**\/node_modules", "!**\/.*", "!**\/dist", "!**\/build"]
		 */
		cssFiles?: string[];
		/**
		 * @default 5_000
		 */
		cssFilesRefreshRate?: number;
		/**
		 * @default true
		 */
		removeDuplicates?: boolean;
		/**
		 * @default false
		 */
		skipClassAttribute?: boolean;
		/**
		 * @default []
		 */
		tags?: string[];
		/**
		 * @default []
		 */
		whitelist?: string[];
	};
}

const defaultCallees = ['classnames', 'ctl', 'clsx', 'cx', 'cva', 'tv', 'cw', 'twMerge', 'tw'];

/**
 * @link https://github.com/francoismassart/eslint-plugin-tailwindcss
 */
export function tailwindcss(
	context: ConfigurationContext,
	options?: TailwindOptions,
): Linter.Config {
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

	const tailwindOptions: Partial<TailwindOptions['tailwindSettings']> = {};

	if (options?.tailwindSettings?.callees) {
		tailwindOptions.callees = [...defaultCallees, ...options.tailwindSettings.callees];
	} else {
		tailwindOptions.callees = defaultCallees;
	}

	if (options?.tailwindSettings?.ignoredKeys) {
		tailwindOptions.ignoredKeys = options.tailwindSettings.ignoredKeys;
	}

	if (options?.tailwindSettings?.classRegex) {
		tailwindOptions.classRegex = options.tailwindSettings.classRegex;
	}

	if (options?.tailwindSettings?.config) {
		tailwindOptions.config = options.tailwindSettings.config;
	}

	if (options?.tailwindSettings?.cssFiles) {
		tailwindOptions.cssFiles = options.tailwindSettings.cssFiles;
	}

	if (options?.tailwindSettings?.cssFilesRefreshRate) {
		tailwindOptions.cssFilesRefreshRate = options.tailwindSettings.cssFilesRefreshRate;
	}

	if (options?.tailwindSettings?.removeDuplicates) {
		tailwindOptions.removeDuplicates = options.tailwindSettings.removeDuplicates;
	}

	if (options?.tailwindSettings?.skipClassAttribute) {
		tailwindOptions.skipClassAttribute = options.tailwindSettings.skipClassAttribute;
	}

	if (options?.tailwindSettings?.tags) {
		tailwindOptions.tags = options.tailwindSettings.tags;
	}

	if (options?.tailwindSettings?.whitelist) {
		tailwindOptions.whitelist = options.tailwindSettings.whitelist;
	}

	return {
		name: '@aureldvx/third-party/tailwindcss',
		files,
		plugins: {
			tailwindcss: eslintTailwind,
		},
		rules: {
			...eslintTailwind.configs['flat/recommended'].rules,
			...(options?.rules ?? {}),
		},
		settings: {
			tailwindcss: {
				...tailwindOptions,
			},
		},
	};
}
