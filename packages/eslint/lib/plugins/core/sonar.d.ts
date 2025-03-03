import { CorePlugin } from '../../utils.js';
import { C as ConfigurationContext } from '../../index-CSiJII76.js';
import { Linter } from 'eslint';

/**
 * @link https://github.com/SonarSource/eslint-plugin-sonarjs
 */
declare function sonar(context: ConfigurationContext, rules?: Record<string, Linter.RuleEntry>): CorePlugin;

export { sonar };
