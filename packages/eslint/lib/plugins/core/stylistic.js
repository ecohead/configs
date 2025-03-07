import eslintStylistic from "@stylistic/eslint-plugin";
function stylistic(context, rules) {
  if (context.astro) {
    return {};
  }
  const config = eslintStylistic.configs.customize({
    braceStyle: "1tbs",
    semi: true,
    quotes: "single",
    indent: "tab",
    jsx: context.react,
    blockSpacing: true,
    arrowParens: true,
    commaDangle: "always-multiline"
  });
  return {
    plugin: {
      "@stylistic": eslintStylistic
    },
    rules: {
      ...config.rules,
      ...rules ?? {}
    }
  };
}
export {
  stylistic
};
