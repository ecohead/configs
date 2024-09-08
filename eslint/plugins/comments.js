import comments from '@eslint-community/eslint-plugin-eslint-comments/configs';

import { createSharedConfig } from "../utils.js";

/**
 * @see https://github.com/eslint-community/eslint-plugin-eslint-comments
 */
export default createSharedConfig([comments.recommended]);
