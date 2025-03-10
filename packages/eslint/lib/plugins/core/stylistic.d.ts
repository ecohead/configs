import { CorePlugin } from '../../utils.js';
import { C as ConfigurationContext } from '../../index-Cz7Eqr7M.js';
import { Linter } from 'eslint';

/**
 * @link https://github.com/eslint-stylistic/eslint-stylistic
 */
declare function stylistic(context: ConfigurationContext, rules?: Record<string, Linter.RuleEntry>): CorePlugin;

export { stylistic };
