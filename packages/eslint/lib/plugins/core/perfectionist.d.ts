import { CorePlugin } from '../../utils.js';
import { C as ConfigurationContext } from '../../index-CSiJII76.js';
import { Linter } from 'eslint';

/**
 * @link https://github.com/azat-io/eslint-plugin-perfectionist
 */
declare function perfectionist(context: ConfigurationContext, rules?: Record<string, Linter.RuleEntry>): CorePlugin;

export { perfectionist };
