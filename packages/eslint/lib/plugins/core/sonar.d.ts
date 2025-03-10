import { CorePlugin } from '../../utils.js';
import { C as ConfigurationContext } from '../../index-Cz7Eqr7M.js';
import { Linter } from 'eslint';

/**
 * @link https://github.com/SonarSource/eslint-plugin-sonarjs
 */
declare function sonar(context: ConfigurationContext, rules?: Record<string, Linter.RuleEntry>): CorePlugin;

export { sonar };
