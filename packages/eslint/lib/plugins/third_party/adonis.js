import eslintAdonisJs from "@adonisjs/eslint-plugin";
function adonis(context, options) {
  return {
    name: "@aureldvx/third-party/adonis",
    files: ["**/*.ts", "**/*.cts", "**/*.mts"],
    plugins: {
      // @ts-expect-error correct implementation indeed.
      "@adonisjs": eslintAdonisJs
    },
    rules: {
      "@adonisjs/prefer-lazy-controller-import": "error",
      "@adonisjs/prefer-lazy-listener-import": "error",
      ...options?.rules ?? {}
    }
  };
}
export {
  adonis
};
