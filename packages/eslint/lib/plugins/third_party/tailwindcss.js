import eslintTailwind from "eslint-plugin-tailwindcss";
const defaultCallees = ["classnames", "ctl", "clsx", "cx", "cva", "tv", "cw", "twMerge", "tw"];
function tailwindcss(context, options) {
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
  const tailwindOptions = {};
  if (options?.tailwindSettings?.callees) {
    tailwindOptions.callees = [...defaultCallees, ...options.tailwindSettings.callees];
  } else {
    tailwindOptions.callees = defaultCallees;
  }
  if (options?.tailwindSettings?.ignoredKeys) {
    tailwindOptions.ignoredKeys = options.tailwindSettings.ignoredKeys;
  }
  if (options?.tailwindSettings?.classRegex) {
    tailwindOptions.classRegex = options.tailwindSettings.classRegex;
  }
  if (options?.tailwindSettings?.config) {
    tailwindOptions.config = options.tailwindSettings.config;
  }
  if (options?.tailwindSettings?.cssFiles) {
    tailwindOptions.cssFiles = options.tailwindSettings.cssFiles;
  }
  if (options?.tailwindSettings?.cssFilesRefreshRate) {
    tailwindOptions.cssFilesRefreshRate = options.tailwindSettings.cssFilesRefreshRate;
  }
  if (options?.tailwindSettings?.removeDuplicates) {
    tailwindOptions.removeDuplicates = options.tailwindSettings.removeDuplicates;
  }
  if (options?.tailwindSettings?.skipClassAttribute) {
    tailwindOptions.skipClassAttribute = options.tailwindSettings.skipClassAttribute;
  }
  if (options?.tailwindSettings?.tags) {
    tailwindOptions.tags = options.tailwindSettings.tags;
  }
  if (options?.tailwindSettings?.whitelist) {
    tailwindOptions.whitelist = options.tailwindSettings.whitelist;
  }
  return {
    name: "@aureldvx/third-party/tailwindcss",
    files,
    plugins: {
      tailwindcss: eslintTailwind
    },
    rules: {
      ...eslintTailwind.configs["flat/recommended"].rules,
      ...options?.rules ?? {}
    },
    settings: {
      tailwindcss: {
        ...tailwindOptions
      }
    }
  };
}
export {
  tailwindcss
};
