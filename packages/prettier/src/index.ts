import type { Config, Plugin } from "prettier";
import type { PluginOptions as TailwindOptions } from "prettier-plugin-tailwindcss";
import type { ShPrintOptions } from "prettier-plugin-sh";
import type { PluginConfig as SvelteOptions } from "prettier-plugin-svelte";
import type { SqlOptions } from "prettier-plugin-sql";
import type { PrettierOptions as TomlOptions } from "prettier-plugin-toml";

interface AstroOptions {
	allowShorthand?: boolean;
	skipFrontmatter?: boolean;
}

interface XmlOptions {
	bracketSameLine?: boolean;
	printWidth?: number;
	singleAttributePerLine?: boolean;
	tabWidth?: number;
	quoteAttributes?: "preserve" | "single" | "double";
	selfClosingSpace?: boolean;
	sortAttributesByKey?: boolean;
	whitespaceSensitivity?: "strict" | "preserve" | "ignore";
}

interface LocalConfig {
	/**
	 * @description Use the formatter for tailwindcss projects
	 * @see https://github.com/tailwindlabs/prettier-plugin-tailwindcss
	 */
	tailwind?: TailwindOptions;
	/**
	 * @description Use the formatter for astro files
	 * @see https://github.com/withastro/prettier-plugin-astro
	 */
	astro?: boolean | AstroOptions;
	/**
	 * @description Use the formatter for xml files (eg. `svg`)
	 * @see https://github.com/prettier/plugin-xml
	 */
	xml?: boolean | XmlOptions;
	/**
	 * @description Use the formatter for edge files (Adonis.js template engine)
	 * @see https://github.com/sajansharmanz/prettier-plugin-edgejs
	 */
	edge?: boolean;
	/**
	 * @description Use the formatter for shell scripts and other formats (e.g. bash, dockerfile, dotenv...)
	 * @see https://github.com/un-ts/prettier/tree/master/packages/sh
	 */
	sh?: boolean | ShPrintOptions;
	/**
	 * @description Use the formatter for svelte files
	 * @see https://github.com/sveltejs/prettier-plugin-svelte
	 */
	svelte?: boolean | SvelteOptions;
	/**
	 * @description Use the formatter for sql files/embedded sql
	 * @see https://github.com/un-ts/prettier/tree/master/packages/sql
	 */
	sql?: boolean | SqlOptions;
	/**
	 * @description Use the formatter for toml files
	 * @see https://github.com/un-ts/prettier/tree/master/packages/toml
	 */
	toml?: boolean | TomlOptions;
	/**
	 * @description Extend the configuration with additional options
	 */
	extends?: Config;
}

type ExtractElementType<T> = T extends Array<infer U> ? U : never;

export function defineConfig(config?: LocalConfig) {
	const finalConfig: Config = {
		trailingComma: "all",
		semi: true,
		singleQuote: true,
		useTabs: true,
		quoteProps: "consistent",
		bracketSpacing: true,
		arrowParens: "always",
		printWidth: 100,
		...(config?.extends ?? {}),
		plugins: [],
		overrides: [],
	};

	function addPlugin(plugin: string | URL | Plugin) {
		if (!finalConfig.plugins) finalConfig.plugins = [];
		if (finalConfig.plugins.includes(plugin)) return;

		finalConfig.plugins.push(plugin);
	}

	function addOverride(override: ExtractElementType<Config["overrides"]>) {
		if (!finalConfig.overrides) finalConfig.overrides = [];

		finalConfig.overrides.push(override);
	}

	addPlugin("prettier-plugin-packagejson");

	if (config?.astro) {
		addPlugin("prettier-plugin-astro");
		addOverride({
			files: "*.astro",
			options: {
				parser: "astro",
			},
		});

		if (typeof config.astro === "object") {
			finalConfig["astroAllowShorthand"] = config.astro.allowShorthand ?? false;
			finalConfig["astroSkipFrontmatter"] =
				config.astro.skipFrontmatter ?? false;
		}
	}

	if (config?.xml) {
		addPlugin("@prettier/plugin-xml");

		finalConfig["xmlQuoteAttributes"] = "double";
		finalConfig["xmlSelfClosingSpace"] = true;
		finalConfig["xmlSortAttributesByKey"] = true;
		finalConfig["xmlWhitespaceSensitivity"] = "ignore";

		if (typeof config.xml === "object") {
			for (const [key, value] of Object.entries(config.xml)) {
				finalConfig[key] = value;
			}
		}
	}

	if (config?.tailwind) {
		addPlugin("prettier-plugin-tailwindcss");

		if ("tailwindStylesheet" in config.tailwind) {
			finalConfig["tailwindStylesheet"] = config.tailwind.tailwindStylesheet;
		}

		if ("tailwindConfig" in config.tailwind) {
			finalConfig["tailwindConfig"] = config.tailwind.tailwindConfig;
		}

		finalConfig["tailwindAttributes"] = config.tailwind.tailwindAttributes ?? [
			"class",
			"className",
		];

		finalConfig["tailwindFunctions"] = config.tailwind.tailwindFunctions ?? [
			"clsx",
			"cva",
			"cx",
			"tw",
			"twMerge",
			"cw",
		];

		finalConfig["tailwindPreserveWhitespace"] =
			config.tailwind.tailwindPreserveWhitespace ?? false;

		finalConfig["tailwindPreserveDuplicates"] =
			config.tailwind.tailwindPreserveDuplicates ?? false;
	}

	if (config?.edge) {
		addPlugin("prettier-plugin-edgejs");
	}

	if (config?.sh) {
		addPlugin("prettier-plugin-sh");

		if (typeof config.sh === "object") {
			for (const [key, value] of Object.entries(config.sh)) {
				finalConfig[key] = value;
			}
		}
	}

	if (config?.svelte) {
		addPlugin("prettier-plugin-svelte");

		if (typeof config.svelte === "object") {
			for (const [key, value] of Object.entries(config.svelte)) {
				finalConfig[key] = value;
			}
		}
	}

	if (config?.sql) {
		addPlugin("prettier-plugin-sql");

		if (typeof config.sql === "object") {
			for (const [key, value] of Object.entries(config.sql)) {
				finalConfig[key] = value;
			}
		}
	}

	if (config?.toml) {
		addPlugin("prettier-plugin-toml");

		if (typeof config.toml === "object") {
			for (const [key, value] of Object.entries(config.toml)) {
				finalConfig[key] = value;
			}
		}
	}

	if (config?.extends?.plugins) {
		for (const plugin of config.extends.plugins) {
			addPlugin(plugin);
		}
	}

	finalConfig.plugins = [...new Set(finalConfig.plugins)];

	return finalConfig;
}
