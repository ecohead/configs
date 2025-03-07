import eslintPrettier from "eslint-config-prettier";
function prettier(context, rules) {
  return {
    plugin: {
      // @ts-expect-error plugin is working correctly, only types are bad.
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
