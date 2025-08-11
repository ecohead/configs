import { Config } from 'prettier';
import { PluginOptions } from 'prettier-plugin-tailwindcss';
import { ShPrintOptions } from 'prettier-plugin-sh';
import { PluginConfig } from 'prettier-plugin-svelte';
import { SqlOptions } from 'prettier-plugin-sql';
import { PrettierOptions } from 'prettier-plugin-toml';

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
    tailwind?: PluginOptions;
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
    svelte?: boolean | PluginConfig;
    /**
     * @description Use the formatter for sql files/embedded sql
     * @see https://github.com/un-ts/prettier/tree/master/packages/sql
     */
    sql?: boolean | SqlOptions;
    /**
     * @description Use the formatter for toml files
     * @see https://github.com/un-ts/prettier/tree/master/packages/toml
     */
    toml?: boolean | PrettierOptions;
    /**
     * @description Extend the configuration with additional options
     */
    extends?: Config;
}
declare function defineConfig(config?: LocalConfig): Config;

export { defineConfig };
