import eslintStorybook from "eslint-plugin-storybook";
function storybook(context, options) {
  return {
    name: "@aureldvx/third-party/storybook",
    files: eslintStorybook.configs["flat/recommended"][0].files,
    plugins: eslintStorybook.configs["flat/recommended"][0].plugins,
    rules: {
      ...eslintStorybook.configs["flat/recommended"][0].rules,
      ...options?.rules ?? {}
    }
  };
}
export {
  storybook
};
