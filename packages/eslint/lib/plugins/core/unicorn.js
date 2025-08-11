import eslintUnicorn from "eslint-plugin-unicorn";
function unicorn(context, rules) {
  return {
    plugin: {
      unicorn: eslintUnicorn
    },
    rules: {
      ...eslintUnicorn.configs.recommended.rules,
      "unicorn/filename-case": ["warn", { case: "snakeCase" }],
      "unicorn/no-null": "off",
      ...rules ?? {}
    }
  };
}
export {
  unicorn
};
