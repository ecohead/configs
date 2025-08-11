import eslintPromise from "eslint-plugin-promise";
function promise(context, rules) {
  return {
    plugin: {
      promise: eslintPromise
    },
    rules: {
      ...eslintPromise.configs["flat/recommended"].rules,
      "promise/always-return": "off",
      ...rules ?? {}
    }
  };
}
export {
  promise
};
