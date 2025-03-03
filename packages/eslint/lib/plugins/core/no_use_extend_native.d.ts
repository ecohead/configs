import { CorePlugin } from '../../utils.js';
import { C as ConfigurationContext } from '../../index-CSiJII76.js';
import { Linter } from 'eslint';

/**
 * @link https://github.com/dustinspecker/eslint-plugin-no-use-extend-native
 */
declare function noUseExtendNative(context: ConfigurationContext, rules?: Record<string, Linter.RuleEntry>): CorePlugin;

export { noUseExtendNative };
