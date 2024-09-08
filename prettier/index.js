/**
 * @param {import('prettier').Config} config
 * @return {import('prettier').Config}
 */
export function definePrettierConfig(config) {
	return {
		trailingComma: 'all',
		semi: true,
		singleQuote: true,
		useTabs: true,
		quoteProps: 'consistent',
		bracketSpacing: true,
		arrowParens: 'always',
		printWidth: 100,
		...config,
		plugins: [
			'prettier-plugin-packagejson',
			...(config.plugins ?? []),
		],
	};
}
