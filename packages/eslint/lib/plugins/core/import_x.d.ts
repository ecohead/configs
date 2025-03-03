import { CorePlugin } from '../../utils.js';
import { C as ConfigurationContext } from '../../index-CSiJII76.js';
import { Linter } from 'eslint';

/**
 * @link https://github.com/un-ts/eslint-plugin-import-x
 */
declare function importX(context: ConfigurationContext, rules?: Record<string, Linter.RuleEntry>): CorePlugin;

export { importX };
