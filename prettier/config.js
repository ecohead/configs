/** @type {import('prettier').Config} */
export default {
	trailingComma: 'all',
	semi: true,
	singleQuote: true,
	useTabs: true,
	quoteProps: 'consistent',
	bracketSpacing: true,
	arrowParens: 'always',
	printWidth: 100,
	plugins: [
		'prettier-plugin-packagejson',
	],
};
