import eslintDeMorgan from "eslint-plugin-de-morgan";
function deMorgan(context, rules) {
  return {
    plugin: {
      "de-morgan": eslintDeMorgan
    },
    rules: {
      ...eslintDeMorgan.configs.recommended.rules,
      ...rules ?? {}
    }
  };
}
export {
  deMorgan
};
