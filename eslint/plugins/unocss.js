import unocss from '@unocss/eslint-config/flat';

import { createSharedConfig } from "../utils.js";

/**
 * @see https://unocss.dev/integrations/eslint
 */
export default createSharedConfig([unocss]);
