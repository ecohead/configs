import { Linter } from 'eslint';
import { C as ConfigurationContext } from '../../index-CSiJII76.js';
import { ExtendableConfig } from '../../utils.js';

interface TailwindOptions extends ExtendableConfig {
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
/**
 * @link https://github.com/francoismassart/eslint-plugin-tailwindcss
 */
declare function tailwindcss(context: ConfigurationContext, options?: TailwindOptions): Linter.Config;

export { type TailwindOptions, tailwindcss };
