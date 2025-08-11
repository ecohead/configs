import { CorePlugin } from '../../utils.js';
import { C as ConfigurationContext } from '../../index-B0y9L6Vy.js';
import { Linter } from 'eslint';

/**
 * @link https://github.com/un-ts/eslint-plugin-import-x
 */
declare function importX(context: ConfigurationContext, rules?: Record<string, Linter.RuleEntry>): CorePlugin;

export { importX };
