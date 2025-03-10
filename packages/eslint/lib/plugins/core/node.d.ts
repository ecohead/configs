import { CorePlugin } from '../../utils.js';
import { C as ConfigurationContext } from '../../index-Cz7Eqr7M.js';
import { Linter } from 'eslint';

/**
 * @link https://github.com/eslint-community/eslint-plugin-n
 */
declare function node(context: ConfigurationContext, rules?: Record<string, Linter.RuleEntry>): CorePlugin;

export { node };
