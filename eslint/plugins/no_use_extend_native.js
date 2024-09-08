import noUseExtendNative from "eslint-plugin-no-use-extend-native";

import { createSharedConfig } from "../utils.js";

/**
 * @see https://github.com/dustinspecker/eslint-plugin-no-use-extend-native
 */
export default createSharedConfig([
	{
		plugins: {
			'no-use-extend-native': noUseExtendNative,
		},
	},
]);
