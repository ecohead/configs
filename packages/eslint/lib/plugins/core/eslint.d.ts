import { CorePlugin } from '../../utils.js';
import { C as ConfigurationContext } from '../../index-B0y9L6Vy.js';
import { Linter } from 'eslint';

/**
 * @link https://eslint.org/docs/latest/use/getting-started
 */
declare function js(context: ConfigurationContext, rules?: Record<string, Linter.RuleEntry>): CorePlugin;

export { js };
