import eslintAstro from "eslint-plugin-astro";
function astro(context, options) {
  return [
    ...eslintAstro.configs.recommended,
    ...eslintAstro.configs["jsx-a11y-recommended"],
    {
      rules: options?.rules ?? {}
    }
  ];
}
export {
  astro
};
