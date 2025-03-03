import { CorePlugin } from '../../utils.js';
import { C as ConfigurationContext } from '../../index-CSiJII76.js';
import { Linter } from 'eslint';

/**
 * @link https://github.com/eslint-community/eslint-plugin-n
 */
declare function node(context: ConfigurationContext, rules?: Record<string, Linter.RuleEntry>): CorePlugin;

export { node };
