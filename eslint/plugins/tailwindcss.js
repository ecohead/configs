import tailwindcss from 'eslint-plugin-tailwindcss'

import { createSharedConfig } from "../utils.js";

/**
 * @see https://github.com/francoismassart/eslint-plugin-tailwindcss
 */
export default createSharedConfig([
	...tailwindcss.configs["flat/recommended"],
	{
		settings: {
			tailwindcss: {
				callees: ['clsx', 'cx', 'cva', 'cw', 'twMerge', 'tw']
			},
		},
	},
]);
