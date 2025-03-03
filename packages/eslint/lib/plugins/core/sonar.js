import eslintSonar from "eslint-plugin-sonarjs";
function sonar(context, rules) {
  return {
    plugin: {
      sonarjs: eslintSonar
    },
    rules: {
      ...eslintSonar.configs.recommended.rules,
      "sonarjs/no-duplicate-string": "off",
      "sonarjs/no-accessor-field-mismatch": "off",
      ...rules ?? {}
    }
  };
}
export {
  sonar
};
