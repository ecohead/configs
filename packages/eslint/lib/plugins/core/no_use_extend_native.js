import eslintNoUseExtendNative from "eslint-plugin-no-use-extend-native";
function noUseExtendNative(context, rules) {
  return {
    plugin: {
      "no-use-extend-native": eslintNoUseExtendNative
    },
    rules: {
      ...eslintNoUseExtendNative.configs.recommended.rules,
      ...rules ?? {}
    }
  };
}
export {
  noUseExtendNative
};
