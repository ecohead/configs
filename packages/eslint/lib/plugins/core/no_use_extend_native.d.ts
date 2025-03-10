import { CorePlugin } from '../../utils.js';
import { C as ConfigurationContext } from '../../index-Cz7Eqr7M.js';
import { Linter } from 'eslint';

/**
 * @link https://github.com/dustinspecker/eslint-plugin-no-use-extend-native
 */
declare function noUseExtendNative(context: ConfigurationContext, rules?: Record<string, Linter.RuleEntry>): CorePlugin;

export { noUseExtendNative };
