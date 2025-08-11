import { CorePlugin } from '../../utils.js';
import { C as ConfigurationContext } from '../../index-B0y9L6Vy.js';
import { Linter } from 'eslint';

/**
 * @link https://github.com/prettier/eslint-config-prettier
 */
declare function prettier(context: ConfigurationContext, rules?: Record<string, Linter.RuleEntry>): CorePlugin;

export { prettier };
