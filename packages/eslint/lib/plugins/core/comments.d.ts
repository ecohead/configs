import { CorePlugin } from '../../utils.js';
import { C as ConfigurationContext } from '../../index-Cz7Eqr7M.js';
import { Linter } from 'eslint';

/**
 * @link https://github.com/eslint-community/eslint-plugin-eslint-comments
 */
declare function comments(context: ConfigurationContext, rules?: Record<string, Linter.RuleEntry>): CorePlugin;

export { comments };
