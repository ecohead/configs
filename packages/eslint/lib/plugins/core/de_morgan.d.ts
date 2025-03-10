import { CorePlugin } from '../../utils.js';
import { C as ConfigurationContext } from '../../index-Cz7Eqr7M.js';
import { Linter } from 'eslint';

/**
 * @link https://github.com/azat-io/eslint-plugin-de-morgan
 */
declare function deMorgan(context: ConfigurationContext, rules?: Record<string, Linter.RuleEntry>): CorePlugin;

export { deMorgan };
