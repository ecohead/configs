import eslintUno from "@unocss/eslint-config/flat";
function unocss(context, options) {
  const files = ["**/*.css", "**/*.scss", "**/*.js"];
  if (context.typescript) {
    files.push("**/*.ts");
  }
  if (context.react) {
    files.push("**/*.jsx");
    if (context.typescript) {
      files.push("**/*.tsx");
    }
  }
  if (context.astro) {
    files.push("**/*.astro");
  }
  if (context.adonis) {
    files.push("**/*.edge");
  }
  return {
    ...eslintUno,
    name: "@aureldvx/third-party/unocss",
    files,
    rules: {
      ...eslintUno.rules,
      ...options?.rules ?? {}
    }
  };
}
export {
  unocss
};
