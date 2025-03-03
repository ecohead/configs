import { Config } from 'prettier';

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
interface TailwindV3Options {
    tailwindConfig?: string;
    tailwindAttributes?: Array<string>;
    tailwindFunctions?: Array<string>;
    tailwindPreserveWhitespace?: boolean;
    tailwindPreserveDuplicates?: boolean;
}
interface TailwindV4Options {
    tailwindStylesheet: string;
    tailwindAttributes?: Array<string>;
    tailwindFunctions?: Array<string>;
    tailwindPreserveWhitespace?: boolean;
    tailwindPreserveDuplicates?: boolean;
}
interface LocalConfig {
    /**
     * @description Use the formatter for tailwindcss projects
     * @see https://github.com/tailwindlabs/prettier-plugin-tailwindcss
     */
    tailwind?: boolean | TailwindV3Options | TailwindV4Options;
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
     * @description Extend the configuration with additional options
     */
    extends?: Config;
}
declare function defineConfig(config?: LocalConfig): Config;

export { defineConfig };
