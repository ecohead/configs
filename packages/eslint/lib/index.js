import globals from "globals";
import { core } from "./plugins/core/index.js";
import { unocss } from "./plugins/third_party/unocss.js";
import { adonis } from "./plugins/third_party/adonis.js";
import { react } from "./plugins/third_party/react.js";
import { storybook } from "./plugins/third_party/storybook.js";
import { vitest } from "./plugins/third_party/vitest.js";
import { astro } from "./plugins/third_party/astro.js";
import { typescript } from "./plugins/third_party/typescript.js";
const defaultIgnoreList = [
  "**/node_modules/**",
  "**/coverage/**",
  "**/.astro/**",
  "**/.cache/**",
  "**/.nuxt/**",
  "**/.next/**",
  "**/dist/**"
];
const factories = [
  ["adonis", adonis],
  ["astro", astro],
  ["react", react],
  ["storybook", storybook],
  // ['tailwindcss', tailwindcss],
  ["typescript", typescript],
  ["unocss", unocss],
  ["vitest", vitest]
];
function defineConfig(config) {
  const { coreRules, plugins, extends: userExtends, ignore } = config;
  const context = {};
  for (const [name] of factories) {
    if (plugins && name in plugins) {
      if (typeof plugins[name] === "boolean") {
        context[name] = plugins[name];
        continue;
      }
      if (Array.isArray(plugins[name])) {
        context[name] = plugins[name][0];
        continue;
      }
    }
    context[name] = false;
  }
  const finalConfig = [
    /* Ignores files globally. */
    {
      name: "@aureldvx/core/ignore",
      ignores: [...defaultIgnoreList, ...ignore ?? []]
    },
    /* Global options. */
    {
      languageOptions: {
        globals: {
          ...globals.browser,
          ...globals.node
        }
      }
    },
    /* Specific for ESLint itself. */
    {
      files: ["eslint.config.js"],
      languageOptions: {
        sourceType: "module",
        globals: {
          ...globals.node
        }
      }
    },
    ...core(context, { ...coreRules, typescript: plugins?.typescript?.[1] })
  ];
  for (const [name, factory] of factories) {
    if (name === "typescript") {
      continue;
    }
    if (plugins && name in plugins) {
      if (Array.isArray(plugins[name])) {
        const [enabled, options] = plugins[name];
        if (enabled) {
          finalConfig.push(factory(context, options));
        }
      } else if (plugins[name] === true) {
        finalConfig.push(factory(context));
      }
    }
  }
  if (userExtends) {
    if (Array.isArray(userExtends)) {
      finalConfig.push(...userExtends);
    } else {
      finalConfig.push(userExtends);
    }
  }
  return finalConfig;
}
export {
  defineConfig
};
