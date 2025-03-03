![](https://static.aureldvx.fr/oss/aureldvx/configs/banner.webp)

# ESLint

## Installation

```shell
npm install --save-dev @aureldvx/eslint
# or
yarn add --dev @aureldvx/eslint
# or
pnpm install --save-dev @aureldvx/eslint
```

## Usage

To use the default configuration, create or update the `eslint.config.js` file in your project with the following
content:

```js
import {defineConfig} from '@aureldvx/eslint';

export default defineConfig();
```

## Plugins

The default configuration expose some third-party tooling popular in the JS ecosystem :

### adonis

Enable linting for AdonisJS application by toggling the `adonis` key.

```js
import {defineConfig} from '@aureldvx/eslint';

export default defineConfig({
  plugins: {
    adonis: true,
  },
});
```

This config includes the following plugins :

- `@adonisjs/eslint-plugin` ([github](https://github.com/adonisjs/eslint-plugin-adonisjs))

You can edit the provided configuration by passing a tuple as the value and tweak some of the following options :

```js
import {defineConfig} from '@aureldvx/eslint';

export default defineConfig({
  plugins: {
    adonis: [
      true,
      {
        // Customize linter rules. The plugin comes with its own `adonis/` rule prefix.
        rules: {
          'adonis/example': 'error',
        },
      },
    ],
    // Enable TypeScript support for AdonisJS.
    typescript: true,
  },
});
```

### astro

Enable linting for `.astro` files by toggling the `astro` key.

```js
import {defineConfig} from '@aureldvx/eslint';

export default defineConfig({
  plugins: {
    astro: true,
  },
});
```

This config includes the following plugins :

- `eslint-plugin-astro` ([github](https://github.com/ota-meshi/eslint-plugin-astro))

You can edit the provided configuration by passing a tuple as the value and tweak some of the following options :

```js
import {defineConfig} from '@aureldvx/eslint';

export default defineConfig({
  plugins: {
    astro: [
      true,
      {
        // Customize linter rules. The plugin comes with its own `astro/` rule prefix.
        rules: {
          'astro/example': 'error',
        },
      },
    ],
  },
});
```

If you want to use TypeScript with Astro, you can also enable the `typescript` key :

```js
import {defineConfig} from '@aureldvx/eslint';

export default defineConfig({
  plugins: {
    astro: true,
    typescript: true,
  },
});
```

### react

Enable linting for react application by toggling the `react` key.

```js
import {defineConfig} from '@aureldvx/eslint';

export default defineConfig({
  plugins: {
    react: true,
  },
});
```

This config includes the following plugins :

- `eslint-plugin-react` ([github](https://github.com/jsx-eslint/eslint-plugin-react))
- `eslint-plugin-react-refresh` ([github](https://github.com/ArnaudBarre/eslint-plugin-react-refresh))
- `eslint-plugin-react-perf` ([github](https://github.com/cvazac/eslint-plugin-react-perf))
- `eslint-plugin-jsx-a11y` ([github](https://github.com/jsx-eslint/eslint-plugin-jsx-a11y))
- `eslint-plugin-react-hooks` ([github](https://github.com/facebook/react/blob/main/packages/eslint-plugin-react-hooks))

You can edit the provided configuration by passing a tuple as the value and tweak some of the following options :

```js
import {defineConfig} from '@aureldvx/eslint';

export default defineConfig({
  plugins: {
    react: [
      true,
      {
        // Which parts of your project to lint.
        files: [],
        // Customize linter settings.
        settings: {},
        // Customize linter rules.
        // Each plugin comes with its own rule prefix :
        // - `react/` for eslint-plugin-react
        // - `react-refresh/` for eslint-plugin-react-refresh
        // - `react-perf/` for eslint-plugin-react-perf
        // - `jsx-a11y/` for eslint-plugin-jsx-a11y
        // - `react-hooks/` for eslint-plugin-react-hooks
        rules: {
          'react/example': 'error',
          'react-refresh/example': 'error',
          'react-perf/example': 'error',
          'jsx-a11y/example': 'error',
          'react-hooks/example': 'error',
        },
      },
    ],
  },
});
```

### storybook

Enable linting for Storybook stories by toggling the `storybook` key.

```js
import {defineConfig} from '@aureldvx/eslint';

export default defineConfig({
  plugins: {
    storybook: true,
  },
});
```

This config includes the following plugins :

- `eslint-plugin-storybook` ([github](https://github.com/storybookjs/eslint-plugin-storybook))

You can edit the provided configuration by passing a tuple as the value and tweak some of the following options :

```js
import {defineConfig} from '@aureldvx/eslint';

export default defineConfig({
  plugins: {
    storybook: [
      true,
      {
        // Customize linter rules. The plugin comes with its own `storybook/` rule prefix.
        rules: {
          'storybook/example': 'error',
        },
      },
    ],
    // Enable TypeScript support for Storybook.
    typescript: true,
  },
});
```

### typescript

Enable TypeScript support by toggling the `typescript` key.

```js
import {defineConfig} from '@aureldvx/eslint';

export default defineConfig({
  plugins: {
    typescript: true,
  },
});
```

This config includes the following plugins :

- `typescript-eslint` ([website](https://typescript-eslint.io/getting-started/))

You can edit the provided configuration by passing a tuple as the value and tweak some of the following options :

```js
import {defineConfig} from '@aureldvx/eslint';

export default defineConfig({
  plugins: {
    typescript: [
      true,
      {
        // Customize linter rules. The plugin comes with its own `@typescript-eslint/` rule prefix.
        rules: {
          '@typescript-eslint/example': 'error',
        },
      },
    ],
  },
});
```

### unocss

Enable linting for UnoCSS application by toggling the `unocss` key.

```js
import {defineConfig} from '@aureldvx/eslint';

export default defineConfig({
  plugins: {
    unocss: true,
  },
});
```

This config includes the following plugins :

- `@unocss/eslint-config` ([website](https://unocss.dev/integrations/eslint))

You can edit the provided configuration by passing a tuple as the value and tweak some of the following options :

```js
import {defineConfig} from '@aureldvx/eslint';

export default defineConfig({
  plugins: {
    unocss: [
      true,
      {
        // Customize linter rules. The plugin comes with its own `unocss/` rule prefix.
        rules: {
          'unocss/example': 'error',
        },
      },
    ],
  },
});
```

### vitest

Enable linting for tests files created with vitest by toggling the `vitest` key.

```js
import {defineConfig} from '@aureldvx/eslint';

export default defineConfig({
  plugins: {
    vitest: true,
  },
});
```

This config includes the following plugins :

- `eslint-plugin-vitest` ([github](https://github.com/vitest-dev/eslint-plugin-vitest))

You can edit the provided configuration by passing a tuple as the value and tweak some of the following options :

```js
import {defineConfig} from '@aureldvx/eslint';

export default defineConfig({
  plugins: {
    vitest: [
      true,
      {
        // Where your test files are located.
        files: ['tests/**/*.{spec,test}.{js,jsx,ts,tsx}', 'src/**/*.{spec,test}.{js,jsx,ts,tsx}'],
        // Customize vitest settings.
        vitestSettings: {
          // Enable typechecking for test suites. (default: true)
          typecheck: true,
        },
        // Customize linter rules. The plugin comes with its own `vitest/` rule prefix.
        rules: {
          'vitest/example': 'error',
        },
      },
    ],
  },
});
```

## Tweak core configuration

You can customize the core rules bundled by default by editing the `coreRules` key:

```js
import {defineConfig} from '@aureldvx/eslint';

export default defineConfig({
  coreRules: {
    // Core ESLint rules provided by `@eslint/js`.
    js: {
      'no-console': 'off',
    },
    // Rules provided by `@eslint-community/eslint-comments`.
    comments: {
      '@eslint-community/eslint-comments/example': 'off',
    },
    // Rules provided by `eslint-plugin-de-morgan`.
    deMorgan: {
      'de-morgan/example': 'off',
    },
    // Rules provided by `eslint-plugin-import-x`.
    importX: {
      'import-x/example': 'off',
    },
    // Rules provided by `eslint-plugin-no-use-extend-native`.
    noUseExtendNative: {
      'no-use-extend-native/example': 'off',
    },
    // Rules provided by `eslint-plugin-n`.
    node: {
      'n/example': 'off',
    },
    // Rules provided by `eslint-plugin-perfectionist`.
    perfectionist: {
      'perfectionist/example': 'off',
    },
    // Rules provided by `eslint-plugin-prettier`.
    prettier: {
      'prettier/example': 'off',
    },
    // Rules provided by `eslint-plugin-promise`.
    promise: {
      'promise/example': 'off',
    },
    // Rules provided by `eslint-plugin-sonarjs`.
    sonar: {
      'sonarjs/example': 'off',
    },
    // Rules provided by `@stylistic/eslint-plugin`.
    stylistic: {
      '@stylistic/example': 'off',
    },
    // Rules provided by `eslint-plugin-unicorn`.
    unicorn: {
      'unicorn/example': 'off',
    },
  },
});
```

## Extend default configuration

To extend or override the default configuration provided, you can edit it with the `extends` key:

```js
import {defineConfig} from '@aureldvx/eslint';
import anyPlugin from '<any-eslint-plugin>';

export default defineConfig({
  extends: [
    {
      files: ['**/*.md'],
      plugins: {
        'anyPlugin': anyPlugin,
      },
      rules: {},
    },
  ],
});
```

Your configuration will always take precedence over the default configuration.

## Exclude files/folders from lint

If you want to disable lint for specific folders/files, pass it to the `ignore` key:

```js
import {defineConfig} from '@aureldvx/eslint';

export default defineConfig({
  ignore: ['vendor', 'prettier.config.js'],
});
```
