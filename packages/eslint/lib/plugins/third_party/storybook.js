import eslintStorybook from "eslint-plugin-storybook";
function storybook(context, options) {
  return {
    ...eslintStorybook.configs["flat/recommended"],
    name: "@aureldvx/third-party/storybook",
    rules: {
      ...eslintStorybook.configs["flat/recommended"][0].rules,
      ...options?.rules ?? {}
    }
  };
}
export {
  storybook
};
