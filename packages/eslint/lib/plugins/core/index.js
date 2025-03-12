import {} from "eslint";
import { js } from "./eslint.js";
import { comments } from "./comments.js";
import { deMorgan } from "./de_morgan.js";
import { importX } from "./import_x.js";
import { noUseExtendNative } from "./no_use_extend_native.js";
import { node } from "./node.js";
import { perfectionist } from "./perfectionist.js";
import { prettier } from "./prettier.js";
import { promise } from "./promise.js";
import { sonar } from "./sonar.js";
import { stylistic } from "./stylistic.js";
import { unicorn } from "./unicorn.js";
import globals from "globals";
import eslintPackageJSON from "eslint-plugin-package-json/configs/recommended";
import tsParser from "@typescript-eslint/parser";
import { cwd } from "node:process";
import { typescript } from "../third_party/typescript.js";
import eslintAstro from "eslint-plugin-astro";
import astroParser from "astro-eslint-parser";
const CORE_PLUGINS = [
  js,
  comments,
  deMorgan,
  importX,
  noUseExtendNative,
  node,
  perfectionist,
  prettier,
  promise,
  sonar,
  stylistic,
  unicorn
];
function core(context, options) {
  const coreConfig = {
    name: "@aureldvx/core",
    plugins: {},
    rules: {},
    settings: {}
  };
  const languageOptions = {
    globals: {
      ...globals.browser,
      ...globals.node,
      ...globals.es2025
    },
    parserOptions: {
      ecmaVersion: "latest",
      sourceType: "module"
    }
  };
  const files = ["**/*.js", "**/*.cjs", "**/*.mjs"];
  if (context.typescript) {
    const { plugin, rules, settings } = typescript(context, options.typescript);
    Object.assign(coreConfig.plugins, plugin);
    Object.assign(coreConfig.rules, rules);
    Object.assign(coreConfig.settings, settings);
    files.push("**/*.ts", "**/*.cts", "**/*.mts");
    languageOptions.parser = tsParser;
    languageOptions.parserOptions.projectService = true;
    languageOptions.parserOptions.tsconfigRootDir = cwd();
  }
  if (context.astro) {
    files.push("**/*.astro");
    languageOptions.parser = astroParser;
    languageOptions.globals = {
      ...languageOptions.globals,
      ...eslintAstro.environments.astro.globals
    };
    languageOptions.parserOptions.extraFileExtensions = [".astro"];
    if (context.typescript) {
      languageOptions.parserOptions.parser = tsParser;
      languageOptions.parserOptions.projectService = true;
      languageOptions.parserOptions.tsconfigRootDir = cwd();
    }
  }
  if (context.react) {
    files.push("**/*.jsx");
    languageOptions.parserOptions.ecmaFeatures = {
      ...languageOptions.parserOptions?.ecmaFeatures ?? {},
      jsx: true
    };
    if (context.typescript) {
      files.push("**/*.tsx");
    }
  }
  coreConfig.languageOptions = languageOptions;
  coreConfig.files = [...new Set(files)];
  for (const corePlugin of CORE_PLUGINS) {
    if (options[corePlugin.name] === false) {
      continue;
    }
    const { plugin, rules, settings } = corePlugin(context, options[corePlugin.name]);
    Object.assign(coreConfig.plugins, plugin);
    Object.assign(coreConfig.rules, rules);
    Object.assign(coreConfig.settings, settings);
  }
  return [
    coreConfig,
    /* Lint `package.json` files. */
    {
      name: "@aureldvx/core/package-json",
      files: ["**/package.json"],
      ...eslintPackageJSON
    }
  ];
}
export {
  core
};
