import eslintReact from "eslint-plugin-react";
import eslintReactRefresh from "eslint-plugin-react-refresh";
import eslintReactHooks from "eslint-plugin-react-hooks";
import eslintReactPerf from "eslint-plugin-react-perf";
import eslintA11y from "eslint-plugin-jsx-a11y";
import globals from "globals";
function react(context, options) {
  const files = ["**/*.jsx"];
  if (context.typescript) {
    files.push("**/*.tsx");
  }
  return {
    name: "@aureldvx/third-party/react",
    files: options?.files ?? files,
    languageOptions: {
      ...eslintA11y.flatConfigs.recommended.languageOptions,
      globals: {
        ...globals.serviceworker,
        ...globals.browser
      }
    },
    plugins: {
      "react": eslintReact,
      "react-refresh": eslintReactRefresh,
      "react-perf": eslintReactPerf,
      "jsx-a11y": eslintA11y,
      "react-hooks": eslintReactHooks
    },
    rules: {
      ...eslintReact.configs.flat.recommended.rules,
      ...eslintReact.configs.flat["jsx-runtime"].rules,
      ...eslintReactRefresh.configs.recommended.rules,
      ...eslintReactPerf.configs.flat.recommended.rules,
      "react/no-unescaped-entities": "off",
      "react-hooks/rules-of-hooks": "error",
      "react-hooks/exhaustive-deps": "warn",
      ...options?.rules ?? {}
    },
    settings: options?.settings ?? {
      react: {
        fragment: "Fragment",
        pragma: "React",
        version: "detect"
      }
    }
  };
}
export {
  react
};
