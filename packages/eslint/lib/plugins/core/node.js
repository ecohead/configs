import eslintNode from "eslint-plugin-n";
function node(context, rules) {
  return {
    plugin: {
      n: eslintNode
    },
    rules: {
      ...eslintNode.configs["flat/recommended"].rules,
      "n/no-missing-import": "off",
      "n/no-unpublished-import": "off",
      "n/no-unsupported-features/node-builtins": "off",
      "n/no-unsupported-features/es-syntax": "off",
      ...rules ?? {}
    }
  };
}
export {
  node
};
