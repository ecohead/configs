import eslintVitest from "@vitest/eslint-plugin";
function vitest(context, options) {
  return {
    name: "@aureldvx/third-party/vitest",
    files: options.files ?? [
      "tests/**/*.{spec,test}.{js,jsx,ts,tsx}",
      "src/**/*.{spec,test}.{js,jsx,ts,tsx}"
    ],
    languageOptions: {
      globals: eslintVitest.environments.env.globals
    },
    plugins: {
      // @ts-expect-error - An error is reported about `context.options` which is unused here.
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
