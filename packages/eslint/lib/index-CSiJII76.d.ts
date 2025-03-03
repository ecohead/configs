import { Linter } from 'eslint';
import { ExtendableConfig, CorePlugin, FilesToParse, Settings } from './utils.js';

interface TypescriptOptions extends ExtendableConfig {
    rules?: Record<`@typescript-eslint/${string}`, Linter.RuleEntry>;
}
/**
 * @link https://typescript-eslint.io/getting-started/
 */
declare function typescript(context: ConfigurationContext, options?: TypescriptOptions): CorePlugin;

interface CoreRulesConfiguration {
    js?: Record<string, Linter.RuleEntry>;
    comments?: Record<`@eslint-community/eslint-comments/${string}`, Linter.RuleEntry>;
    deMorgan?: Record<`de-morgan/${string}`, Linter.RuleEntry>;
    importX?: Record<`import-x/${string}`, Linter.RuleEntry>;
    noUseExtendNative?: Record<`no-use-extend-native/${string}`, Linter.RuleEntry>;
    node?: Record<`n/${string}`, Linter.RuleEntry>;
    perfectionist?: Record<`perfectionist/${string}`, Linter.RuleEntry>;
    prettier?: Record<`prettier/${string}`, Linter.RuleEntry>;
    promise?: Record<`promise/${string}`, Linter.RuleEntry>;
    sonar?: Record<`sonarjs/${string}`, Linter.RuleEntry>;
    stylistic?: Record<`@stylistic/${string}`, Linter.RuleEntry>;
    unicorn?: Record<`unicorn/${string}`, Linter.RuleEntry>;
}
declare function core(context: ConfigurationContext, options?: CoreRulesConfiguration & {
    typescript: TypescriptOptions;
}): Array<Linter.Config>;

interface UnocssOptions extends ExtendableConfig {
    rules?: Record<`unocss/${string}`, Linter.RuleEntry>;
}
/**
 * @link https://unocss.dev/integrations/eslint
 */
declare function unocss(context: ConfigurationContext, options?: UnocssOptions): Linter.Config;

interface AdonisOptions extends ExtendableConfig {
    rules?: Record<`@adonisjs/${string}`, Linter.RuleEntry>;
}
/**
 * @link https://github.com/adonisjs/eslint-plugin-adonisjs
 */
declare function adonis(context: ConfigurationContext, options?: AdonisOptions): Linter.Config;

type RulePrefix = `react/${string}` | `react-refresh/${string}` | `react-perf/${string}` | `jsx-a11y/${string}` | `react-hooks/${string}`;
interface ReactOptions extends ExtendableConfig {
    rules?: Record<RulePrefix, Linter.RuleEntry>;
    files?: FilesToParse;
    settings?: Settings;
}
/**
 * @link https://github.com/jsx-eslint/eslint-plugin-react
 * @link https://github.com/ArnaudBarre/eslint-plugin-react-refresh
 * @link https://github.com/cvazac/eslint-plugin-react-perf
 * @link https://github.com/jsx-eslint/eslint-plugin-jsx-a11y
 * @link https://github.com/facebook/react/blob/main/packages/eslint-plugin-react-hooks
 */
declare function react(context: ConfigurationContext, options?: ReactOptions): Linter.Config;

interface StorybookOptions extends ExtendableConfig {
    rules?: Record<`storybook/${string}`, Linter.RuleEntry>;
}
/**
 * @link https://github.com/storybookjs/eslint-plugin-storybook
 */
declare function storybook(context: ConfigurationContext, options?: StorybookOptions): Linter.Config;

interface VitestOptions extends ExtendableConfig {
    rules?: Record<`vitest/${string}`, Linter.RuleEntry>;
    files?: FilesToParse;
    vitestSettings?: {
        typecheck?: boolean;
    };
}
/**
 * @link https://github.com/vitest-dev/eslint-plugin-vitest
 */
declare function vitest(context: ConfigurationContext, options?: VitestOptions): Linter.Config;

interface AstroOptions extends ExtendableConfig {
    rules?: Record<`astro/${string}`, Linter.RuleEntry>;
}
/**
 * @link https://github.com/ota-meshi/eslint-plugin-astro
 */
declare function astro(context: ConfigurationContext, options?: AstroOptions): Linter.Config;

interface UserConfiguration {
    adonis?: boolean | [boolean, AdonisOptions];
    astro?: boolean | [boolean, AstroOptions];
    react?: boolean | [boolean, ReactOptions];
    storybook?: boolean | [boolean, StorybookOptions];
    typescript?: boolean | [boolean, TypescriptOptions];
    unocss?: boolean | [boolean, UnocssOptions];
    vitest?: boolean | [boolean, VitestOptions];
}
type ConfigurationContext = Required<Record<keyof UserConfiguration, boolean>>;
interface LocalConfig {
    coreRules?: CoreRulesConfiguration;
    plugins?: UserConfiguration;
    extends?: Linter.Config | Array<Linter.Config>;
    ignore?: Array<string>;
}
declare function defineConfig(config?: LocalConfig): Array<Linter.Config>;

export { type AdonisOptions as A, type ConfigurationContext as C, type ReactOptions as R, type StorybookOptions as S, type TypescriptOptions as T, type UnocssOptions as U, type VitestOptions as V, type CoreRulesConfiguration as a, adonis as b, core as c, type AstroOptions as d, astro as e, defineConfig as f, react as r, storybook as s, typescript as t, unocss as u, vitest as v };
