/** @type {import('stylelint').Config} */
export default {
	root: true,
	extends: [
		'stylelint-config-standard-scss',
		'stylelint-config-prettier-scss',
		'stylelint-config-idiomatic-order',
	],
	plugins: [
		'@double-great/stylelint-a11y',
		'stylelint-plugin-defensive-css',
		'stylelint-plugin-logical-css',
		'stylelint-selector-bem-pattern',
		'@isnotdefined/stylelint-plugin',
	],
	overrides: [],
	rules: {
		/* **** stylelint ********************************************* */
		'selector-class-pattern': null,
		'selector-id-pattern': null,
		/* **** @double-great/stylelint-a11y ************************** */
		'a11y/media-prefers-reduced-motion': true,
		'a11y/no-outline-none': true,
		'a11y/selector-pseudo-class-focus': true,
		/* **** stylelint-plugin-defensive-css ************************ */
		'plugin/use-defensive-css': [
			true,
			{
				'accidental-hover': true,
				'background-repeat': true,
				'custom-property-fallbacks': [false, {ignore: ['theme-', 'core-']}],
				'flex-wrapping': true,
				'scroll-chaining': true,
				'scrollbar-gutter': true,
				'vendor-prefix-grouping': true,
			},
		],
		/* **** stylelint-plugin-logical-css ************************** */
		'plugin/use-logical-properties-and-values': true,
		'plugin/use-logical-units': true,
		/* **** stylelint-selector-bem-pattern ************************ */
		'plugin/selector-bem-pattern': {preset: 'bem'},
		/* **** @isnotdefined/stylelint-plugin ************************ */
		'@isnotdefined/no-disable': true,
		'@isnotdefined/no-obsolete': true,
		// Disabled because throws an `Unknown word (CSSSyntaxError)` error
		// '@isnotdefined/unit-step': true,
	},
	ignoreDisables: true,
};
