![](../../docs/banner.webp)

# TSConfig files

The TypeScript configuration is as strict as possible from my point of view. It is inherited in high parts from the [astro team's configuration](https://github.com/withastro/astro/tree/main/packages/astro/tsconfigs).

## Installation

```shell
npm install --save-dev @aureldvx/tsconfig
# or
yarn add --dev @aureldvx/tsconfig
# or
pnpm install --save-dev @aureldvx/tsconfig
```

## Usage

To use the configuration, add the following to your `tsconfig.json` file:

```json
{
  "$schema": "https://json.schemastore.org/tsconfig",
  "extends": "@aureldvx/tsconfig/<variant>",
  "compilerOptions": {
    // Your additional configuration here
  },
  "include": ["<your-files-here>"]
}
```

Multiple variants are available :

- `basic` : default configuration with recommended options
- `strict` : strictest configuration possible for a better type-safety
- `react` : specific for react application and inherits `basic` config.
- `react-strict` : specific for react application but inherits `strict` config.
- `library` : configuration adapted to shared libraries
- `node` : adapted for tooling (like ESLint configuration files with the `noEmit` flag enabled)
