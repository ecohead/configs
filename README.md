# Configurations

This repository contains opinionated configurations for some tooling of the javascript ecosystem.

## ESLint

The configuration is based on the following plugins/configs :
- [@eslint/js](https://npmjs.com/package/@eslint/js)
- [eslint-config-prettier](https://npmjs.com/package/eslint-config-prettier)
- [eslint-import-resolver-typescript](https://npmjs.com/package/eslint-import-resolver-typescript)
- [eslint-plugin-eslint-comments](https://npmjs.com/package/eslint-plugin-eslint-comments)
- [eslint-plugin-import](https://npmjs.com/package/eslint-plugin-import)
- [eslint-plugin-n](https://npmjs.com/package/eslint-plugin-n)
- [eslint-plugin-no-use-extend-native](https://npmjs.com/package/eslint-plugin-no-use-extend-native)
- [eslint-plugin-promise](https://npmjs.com/package/eslint-plugin-promise)
- [eslint-plugin-sonarjs](https://npmjs.com/package/eslint-plugin-sonarjs)
- [eslint-plugin-unicorn](https://npmjs.com/package/eslint-plugin-unicorn)
- [@typescript-eslint/eslint-plugin](https://npmjs.com/package/@typescript-eslint/eslint-plugin)

I have disabled some rules that I find too strict or not useful for my use case. It natively supports typescript.

## Prettier

The configuration is based mainly for accessibility and readability purposes, which for some part is inherited from this [reddit post](https://www.reddit.com/r/javascript/comments/c8drjo/nobody_talks_about_the_real_reason_to_use_tabs/).

## Typescript

The TypeScript configuration is as strict as possible from my point of view. It is inherited in high parts from the [astro team's configuration](https://github.com/withastro/astro/tree/main/packages/astro/tsconfigs).

I also export a special tsconfig file dedicated to eslint, which enables the `noEmit` flag.
