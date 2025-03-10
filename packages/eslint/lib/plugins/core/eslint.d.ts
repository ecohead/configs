import { CorePlugin } from '../../utils.js';
import { C as ConfigurationContext } from '../../index-Cz7Eqr7M.js';
import { Linter } from 'eslint';

/**
 * @link https://eslint.org/docs/latest/use/getting-started
 */
declare function js(context: ConfigurationContext, rules?: Record<string, Linter.RuleEntry>): CorePlugin;

export { js };
