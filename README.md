# Configurations

This repository contains opinionated configurations for some tooling of the javascript ecosystem.

## ESLint

To use the minimal configuration, create or update the `eslint.config.js` file in your project with the following content:

```js
import { defineConfig } from '@ecohead/configs/eslint';

export default defineConfig({
	// Your additional configuration here
});
```

The `defineConfig` function also accepts as a second argument an array of files to be ignored by eslint in your project.

### Built-in configurations

I provide some built-in configurations that you can use directly in your project, based on my personal preferences. 
I have disabled some rules that I find too strict or not useful for my use case. You are free to use them all or only some of them.

If you want to include all of them, I export a special variable that contains all the configurations.

```js
import { defineConfig, all } from '@ecohead/configs/eslint';

export default defineConfig([...all]);
```

---

#### [`@eslint/js`](https://www.npmjs.com/package/@eslint/js)

```js
import { defineConfig, native } from '@ecohead/configs/eslint';

export default defineConfig([...native]);
```

---

#### [`typescript-eslint`](https://www.npmjs.com/package/typescript-eslint)

```js
import { defineConfig, typescript } from '@ecohead/configs/eslint';

export default defineConfig([...typescript]);
```

---

#### [`eslint-plugin-unicorn`](https://www.npmjs.com/package/eslint-plugin-unicorn)

```js
import { defineConfig, unicorn } from '@ecohead/configs/eslint';

export default defineConfig([...unicorn]);
```

---

#### [`eslint-plugin-sonarjs`](https://www.npmjs.com/package/eslint-plugin-sonarjs)

```js
import { defineConfig, sonar } from '@ecohead/configs/eslint';

export default defineConfig([...sonar]);
```

---

#### [`@eslint-community/eslint-plugin-eslint-comments`](https://www.npmjs.com/package/@eslint-community/eslint-plugin-eslint-comments)

```js
import { defineConfig, comments } from '@ecohead/configs/eslint';

export default defineConfig([...comments]);
```

---

#### [`eslint-plugin-n`](https://www.npmjs.com/package/eslint-plugin-n)

```js
import { defineConfig, node } from '@ecohead/configs/eslint';

export default defineConfig([...node]);
```

---

#### [`eslint-config-prettier`](https://www.npmjs.com/package/eslint-config-prettier)

```js
import { defineConfig, prettier } from '@ecohead/configs/eslint';

export default defineConfig([...prettier]);
```

---

#### [`eslint-plugin-no-use-extend-native`](https://www.npmjs.com/package/eslint-plugin-no-use-extend-native)

```js
import { defineConfig, noUseExtendNative } from '@ecohead/configs/eslint';

export default defineConfig([...noUseExtendNative]);
```

---

#### [`eslint-plugin-promise`](https://www.npmjs.com/package/eslint-plugin-promise)

```js
import { defineConfig, promise } from '@ecohead/configs/eslint';

export default defineConfig([...promise]);
```

---

#### [`eslint-plugin-import-x`](https://www.npmjs.com/package/eslint-plugin-import-x)

```js
import { defineConfig, importX } from '@ecohead/configs/eslint';

export default defineConfig([...importX]);
```

---

#### [`eslint-plugin-tailwindcss`](https://www.npmjs.com/package/eslint-plugin-tailwindcss)

```js
import { defineConfig, tailwindcss } from '@ecohead/configs/eslint';

export default defineConfig([...tailwindcss]);
```

---

#### [`@adonisjs/eslint-plugin`](https://www.npmjs.com/package/@adonisjs/eslint-plugin)

```js
import { defineConfig, adonis } from '@ecohead/configs/eslint';

export default defineConfig([...adonis]);
```

---

#### [`@unocss/eslint-config`](https://www.npmjs.com/package/@unocss/eslint-config)

```js
import { defineConfig, unocss } from '@ecohead/configs/eslint';

export default defineConfig([...unocss]);
```

## Prettier

The configuration is based mainly for accessibility and readability purposes, which for some part is inherited from this [reddit post](https://www.reddit.com/r/javascript/comments/c8drjo/nobody_talks_about_the_real_reason_to_use_tabs/).

### Usage

To use the configuration, you can add the following to your `prettier.config.js` file:

```js
import { definePrettierConfig } from '@ecohead/configs/prettier';

export default definePrettierConfig({
	// Your additional configuration here
});
```

### Built-in plugins

#### `prettier-plugin-packagejson`

[Plugin documentation](https://github.com/matzkoh/prettier-plugin-packagejson)

This plugin formats the `package.json` file in a more readable way, using `sort-package-json` under the hood.

### Add any prettier plugin

To add a plugin in your configuration, simply add it to the `plugins` array in the `definedPrettierConfig` function 
after installing it.

The following example shows how to add the [`prettier-plugin-tailwindcss`](https://github.com/tailwindlabs/prettier-plugin-tailwindcss) plugin:

```js
import { definePrettierConfig } from '@ecohead/configs/prettier';

export default definePrettierConfig({
	// Your additional configuration here
	plugins: [
		// ...
		'prettier-plugin-tailwindcss',
	],
	tailwindFunctions: ['clsx', 'cx', 'cva', 'cw', 'twMerge', 'tw'],
});
```

## Stylelint

I export two configurations :

- One for CSS files
- One for SCSS files

The SCSS configuration is based on the CSS configuration, with some additional rules for SCSS files.

### Usage

To use the configuration, you can add the following to your `stylelint.config.js` file:

```js
import { css, scss } from '@ecohead/configs/stylelint';

/** @type {import('stylelint').Config} */
export default {
	...css, // or ...scss
	// Your additional configuration here
};
```

## Typescript

The TypeScript configuration is as strict as possible from my point of view. It is inherited in high parts from the [astro team's configuration](https://github.com/withastro/astro/tree/main/packages/astro/tsconfigs).

I also export a special tsconfig file dedicated to eslint, which enables the `noEmit` flag.

### Usage

To use the configuration, you can add the following to your `tsconfig.json` file:

For the default configuration:

```json
{
	"extends": "@ecohead/configs/tsconfig.json",
	"compilerOptions": {
		// Your additional configuration here
	}
}
```

For the eslint configuration:

```json
{
	"extends": "@ecohead/configs/tsconfig.eslint.json",
	"compilerOptions": {
		// Your additional configuration here
	}
}
```
