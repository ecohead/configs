![](https://static.aureldvx.fr/oss/aureldvx/configs/banner.webp)

# Prettier configuration

Tailored for accessibility and readability purposes, which for some part is inherited from this [reddit post](https://www.reddit.com/r/javascript/comments/c8drjo/nobody_talks_about_the_real_reason_to_use_tabs/).

## Installation

```shell
npm install --save-dev @aureldvx/prettier
# or
yarn add --dev @aureldvx/prettier
# or
pnpm install --save-dev @aureldvx/prettier
```

## Usage

To use the configuration, add the following to your `prettier.config.js` file:

```js
import { defineConfig } from "@aureldvx/prettier";

export default defineConfig();
```

## Built-in plugins

### `prettier-plugin-packagejson` ([documentation](https://github.com/matzkoh/prettier-plugin-packagejson))

Format the `package.json` file in a more readable way, using `sort-package-json` under the hood. It is enabled by default and cannot be disabled.

### `prettier-plugin-astro` ([documentation](https://github.com/withastro/prettier-plugin-astro))

Format all `.astro` files. You can customize the configuration more granularly :

```js
import { defineConfig } from "@aureldvx/prettier";

// Enable the default astro config
export default defineConfig({
  astro: true,
});

// Or override it with your own
export default defineConfig({
  astro: {
    allowShorthand: true,
    skipFrontmatter: false,
  },
});
```

### `@prettier/plugin-xml` ([documentation](https://github.com/prettier/plugin-xml))

Format XML files, uses primarly to format SVGs in your project. You can customize the configuration more granularly :

```js
import { defineConfig } from "@aureldvx/prettier";

// Enable the default xml config
export default defineConfig({
  xml: true,
});

// Or override it with your own
export default defineConfig({
  xml: {
    bracketSameLine: false,
    printWidth: 80,
    singleAttributePerLine: false,
    tabWidth: 2,
    quoteAttributes: 'double',
    selfClosingSpace: true,
    sortAttributesByKey: true,
    whitespaceSensitivity: 'ignore',
  },
});
```

### `prettier-plugin-tailwindcss` ([documentation](https://github.com/tailwindlabs/prettier-plugin-tailwindcss))

Reorder tailwindcss classes wherever they are referenced based on the recommended order from tailwind team.

```js
import { defineConfig } from "@aureldvx/prettier";

// With Tailwind v4
export default defineConfig({
  tailwind: {
    // Required: specify the css entrypoint file.
    tailwindStylesheet: 'src/index.css',
    // All other ones are optional.
    tailwindAttributes: ['class', 'className'],
    tailwindFunctions: ['clsx', 'cva', 'cx', 'tw', 'twMerge', 'cw'],
    tailwindPreserveWhitespace: false,
    tailwindPreserveDuplicates: false,
  },
});

// With Tailwind v3
export default defineConfig({
  tailwind: {
    // If not specified, it will find a `tailwind.config.js`
    // in the same directory as the prettier config file.
    tailwindConfig: 'tailwind.config.js',
    tailwindAttributes: ['class', 'className'],
    tailwindFunctions: ['clsx', 'cva', 'cx', 'tw', 'twMerge', 'cw'],
    tailwindPreserveWhitespace: false,
    tailwindPreserveDuplicates: false,
  },
});
```

## Extend configuration with your own settings

To edit the provided configuration, simply add the `extends` key in the `definedConfig` object parameter.

```js
import {defineConfig} from "@aureldvx/prettier";

export default defineConfig({
  extends: {
    // Your additional configuration here
  },
});
```
