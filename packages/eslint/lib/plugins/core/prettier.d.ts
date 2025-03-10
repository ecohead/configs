import { CorePlugin } from '../../utils.js';
import { C as ConfigurationContext } from '../../index-Cz7Eqr7M.js';
import { Linter } from 'eslint';

/**
 * @link https://github.com/prettier/eslint-config-prettier
 */
declare function prettier(context: ConfigurationContext, rules?: Record<string, Linter.RuleEntry>): CorePlugin;

export { prettier };
