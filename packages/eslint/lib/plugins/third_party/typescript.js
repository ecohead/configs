import eslintTS from "typescript-eslint";
function typescript(context, options) {
  return {
    plugin: {
      "@typescript-eslint": eslintTS.plugin
    },
    rules: {
      ...eslintTS.configs.recommendedTypeChecked[0].rules,
      ...eslintTS.configs.stylisticTypeChecked[0].rules,
      "@typescript-eslint/naming-convention": [
        "error",
        {
          selector: "variable",
          format: ["camelCase", "snake_case", "PascalCase"]
        },
        {
          selector: "typeLike",
          format: ["PascalCase"]
        },
        {
          selector: "class",
          format: ["PascalCase"]
        },
        {
          selector: "interface",
          format: ["PascalCase"],
          custom: {
            regex: "^I[A-Z]",
            match: false
          }
        }
      ],
      "@typescript-eslint/no-empty-object-type": [
        "error",
        { allowInterfaces: "with-single-extends" }
      ],
      "@typescript-eslint/consistent-type-definitions": "off",
      "@typescript-eslint/array-type": ["error", { default: "generic" }],
      "@typescript-eslint/no-namespace": "error",
      "@typescript-eslint/explicit-member-accessibility": ["error", { accessibility: "no-public" }],
      "@typescript-eslint/no-shadow": "error",
      ...options?.rules ?? {}
    }
  };
}
export {
  typescript
};
