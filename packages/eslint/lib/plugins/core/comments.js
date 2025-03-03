import eslintComments from "@eslint-community/eslint-plugin-eslint-comments/configs";
function comments(context, rules) {
  return {
    plugin: eslintComments.recommended.plugins,
    rules: {
      ...eslintComments.recommended.rules,
      ...rules ?? {}
    }
  };
}
export {
  comments
};
