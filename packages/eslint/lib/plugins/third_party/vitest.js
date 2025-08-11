import eslintVitest from "@vitest/eslint-plugin";
function vitest(context, options) {
  return {
    name: "@aureldvx/third-party/vitest",
    files: options?.files ?? [
      "tests/**/*.{spec,test}.{js,jsx,ts,tsx}",
      "__tests__/**/*.{spec,test}.{js,jsx,ts,tsx}",
      "src/**/*.{spec,test}.{js,jsx,ts,tsx}"
    ],
    languageOptions: {
      globals: eslintVitest.environments.env.globals
    },
    plugins: {
      // @ts-expect-error - An error is reported about `languageOptions.globals.suite`.
      vitest: eslintVitest
    },
    rules: {
      ...eslintVitest.configs.recommended.rules,
      ...options?.rules ?? {}
    },
    settings: {
      vitest: {
        typecheck: options?.vitestSettings?.typecheck ?? true
      }
    }
  };
}
export {
  vitest
};
