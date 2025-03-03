import eslintUnicorn from "eslint-plugin-unicorn";
function unicorn(context, rules) {
  return {
    plugin: {
      unicorn: eslintUnicorn
    },
    rules: {
      ...eslintUnicorn.configs.recommended.rules,
      "unicorn/filename-case": ["error", { case: "snakeCase" }],
      "unicorn/prevent-abbreviations": [
        "error",
        {
          checkFilenames: false,
          checkDefaultAndNamespaceImports: false,
          checkShorthandImports: false,
          extendDefaultReplacements: false,
          replacements: {
            whitelist: { include: true },
            blacklist: { exclude: true },
            master: { main: true },
            slave: { secondary: true },
            application: { app: true },
            applications: { apps: true },
            arr: { array: true },
            e: { error: true, event: true },
            el: { element: true },
            elem: { element: true },
            len: { length: true },
            msg: { message: true },
            num: { number: true },
            obj: { object: true },
            opts: { options: true },
            param: { parameter: true },
            params: { parameters: true },
            prev: { previous: true },
            req: { request: true },
            res: { response: true, result: true },
            ret: { returnValue: true },
            str: { string: true },
            temp: { temporary: true },
            tmp: { temporary: true },
            val: { value: true },
            err: { error: true }
          }
        }
      ],
      "unicorn/numeric-separators-style": "off",
      "unicorn/no-null": "off",
      "unicorn/prefer-module": "error",
      "unicorn/prefer-node-protocol": "error",
      "unicorn/no-await-expression-member": "error",
      "unicorn/no-for-loop": "error",
      "unicorn/no-instanceof-builtins": "error",
      "unicorn/prefer-number-properties": "error",
      ...rules ?? {}
    }
  };
}
export {
  unicorn
};
