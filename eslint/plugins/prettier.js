import prettier from "eslint-config-prettier";

import { createSharedConfig } from "../utils.js";

/**
 * @see https://github.com/prettier/eslint-config-prettier
 */
export default createSharedConfig([prettier]);
