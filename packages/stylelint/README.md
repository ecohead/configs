![](../../docs/banner.webp)

# Stylelint configuration

## Installation

```shell
npm install --save-dev @aureldvx/stylelint
# or
yarn add --dev @aureldvx/stylelint
# or
pnpm install --save-dev @aureldvx/stylelint
```

## Usage

To use the configuration, add the following to your `stylelint.config.js` file:

```js
import { defineConfig } from '@aureldvx/stylelint';

// The default config parse only CSS files
export default defineConfig();

// If you want to parse SCSS too
export default defineConfig({
	scss: true,
});
```

## Bundled configurations

- `stylelint-config-idiomatic-order` ([github](https://github.com/ream88/stylelint-config-idiomatic-order))
- `stylelint-config-standard-scss` only if `{ scss: true }` ([github](https://github.com/stylelint-scss/stylelint-config-standard-scss))
- `stylelint-config-prettier-scss` only if `{ scss: true }` ([github](https://github.com/prettier/stylelint-config-prettier-scss))

## Bundled plugins

- `@double-great/stylelint-a11y` ([github](https://github.com/double-great/stylelint-a11y))
- `stylelint-plugin-defensive-css` ([github](https://github.com/yuschick/stylelint-plugin-defensive-css))
- `stylelint-plugin-logical-css` ([github](https://github.com/yuschick/stylelint-plugin-logical-css))
- `stylelint-selector-bem-pattern` ([github](https://github.com/simonsmith/stylelint-selector-bem-pattern))
- `@isnotdefined/stylelint-plugin` ([github](https://github.com/henryruhs/isnotdefined-stylelint-plugin))
