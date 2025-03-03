function defineConfig(config) {
  const finalConfig = {
    trailingComma: "all",
    semi: true,
    singleQuote: true,
    useTabs: true,
    quoteProps: "consistent",
    bracketSpacing: true,
    arrowParens: "always",
    printWidth: 100,
    ...config?.extends ?? {},
    plugins: [],
    overrides: []
  };
  function addPlugin(plugin) {
    if (!finalConfig.plugins) finalConfig.plugins = [];
    if (finalConfig.plugins.includes(plugin)) return;
    finalConfig.plugins.push(plugin);
  }
  function addOverride(override) {
    if (!finalConfig.overrides) finalConfig.overrides = [];
    finalConfig.overrides.push(override);
  }
  addPlugin("prettier-plugin-packagejson");
  if (config?.astro) {
    addPlugin("prettier-plugin-astro");
    addOverride({
      files: "*.astro",
      options: {
        parser: "astro"
      }
    });
    if (typeof config.astro === "object") {
      finalConfig["astroAllowShorthand"] = config.astro.allowShorthand ?? false;
      finalConfig["astroSkipFrontmatter"] = config.astro.skipFrontmatter ?? false;
    }
  }
  if (config?.xml) {
    addPlugin("@prettier/plugin-xml");
    finalConfig["xmlQuoteAttributes"] = "double";
    finalConfig["xmlSelfClosingSpace"] = true;
    finalConfig["xmlSortAttributesByKey"] = true;
    finalConfig["xmlWhitespaceSensitivity"] = "ignore";
    if (typeof config.xml === "object") {
      if ("bracketSameLine" in config.xml) {
        finalConfig["bracketSameLine"] = config.xml.bracketSameLine;
      }
      if ("printWidth" in config.xml) {
        finalConfig["printWidth"] = config.xml.printWidth;
      }
      if ("singleAttributePerLine" in config.xml) {
        finalConfig["singleAttributePerLine"] = config.xml.singleAttributePerLine;
      }
      if ("tabWidth" in config.xml) {
        finalConfig["tabWidth"] = config.xml.tabWidth;
      }
      if ("quoteAttributes" in config.xml) {
        finalConfig["xmlQuoteAttributes"] = config.xml.quoteAttributes;
      }
      if ("selfClosingSpace" in config.xml) {
        finalConfig["xmlSelfClosingSpace"] = config.xml.selfClosingSpace;
      }
      if ("sortAttributesByKey" in config.xml) {
        finalConfig["xmlSortAttributesByKey"] = config.xml.sortAttributesByKey;
      }
      if ("whitespaceSensitivity" in config.xml) {
        finalConfig["xmlWhitespaceSensitivity"] = config.xml.whitespaceSensitivity;
      }
    }
  }
  if (config?.tailwind) {
    addPlugin("prettier-plugin-tailwindcss");
    if (typeof config.tailwind === "object") {
      if ("tailwindStylesheet" in config.tailwind)
        finalConfig["tailwindStylesheet"] = config.tailwind.tailwindStylesheet;
      if ("tailwindConfig" in config.tailwind)
        finalConfig["tailwindConfig"] = config.tailwind.tailwindConfig;
      finalConfig["tailwindAttributes"] = config.tailwind.tailwindAttributes ?? ["class"];
      finalConfig["tailwindFunctions"] = config.tailwind.tailwindFunctions ?? [
        "clsx",
        "cva",
        "cx",
        "tw",
        "twMerge",
        "cw"
      ];
      finalConfig["tailwindPreserveWhitespace"] = config.tailwind.tailwindPreserveWhitespace ?? false;
      finalConfig["tailwindPreserveDuplicates"] = config.tailwind.tailwindPreserveDuplicates ?? false;
    }
  }
  if (config?.extends?.plugins) {
    for (const plugin of config.extends.plugins) {
      addPlugin(plugin);
    }
  }
  finalConfig.plugins = [...new Set(finalConfig.plugins)];
  return finalConfig;
}
export {
  defineConfig
};
