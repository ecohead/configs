import eslintAstro from "eslint-plugin-astro";
import astroParser from "astro-eslint-parser";
import tsParser from "@typescript-eslint/parser";
import { cwd } from "node:process";
function astro(context, options) {
  return {
    name: "@aureldvx/third-party/astro",
    files: ["**/*.astro"],
    languageOptions: {
      parser: astroParser,
      globals: eslintAstro.environments.astro.globals,
      parserOptions: {
        ecmaVersion: "latest",
        sourceType: "module",
        parser: tsParser,
        projectService: false,
        tsconfigRootDir: cwd(),
        extraFileExtensions: [".astro"]
      }
    },
    plugins: {
      astro: eslintAstro
    },
    rules: {
      ...eslintAstro.configs.recommended[0].rules,
      ...options?.rules ?? {}
    }
  };
}
export {
  astro
};
