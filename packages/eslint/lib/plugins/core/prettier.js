import eslintPrettier from "eslint-config-prettier";
function prettier(context, rules) {
  return {
    plugin: {
      prettier: eslintPrettier
    },
    rules: {
      ...eslintPrettier.rules,
      ...rules ?? {}
    }
  };
}
export {
  prettier
};
