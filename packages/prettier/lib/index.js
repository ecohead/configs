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
      for (const [key, value] of Object.entries(config.xml)) {
        finalConfig[key] = value;
      }
    }
  }
  if (config?.tailwind) {
    addPlugin("prettier-plugin-tailwindcss");
    if ("tailwindStylesheet" in config.tailwind) {
      finalConfig["tailwindStylesheet"] = config.tailwind.tailwindStylesheet;
    }
    if ("tailwindConfig" in config.tailwind) {
      finalConfig["tailwindConfig"] = config.tailwind.tailwindConfig;
    }
    finalConfig["tailwindAttributes"] = config.tailwind.tailwindAttributes ?? [
      "class",
      "className"
    ];
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
  if (config?.edge) {
    addPlugin("prettier-plugin-edgejs");
  }
  if (config?.sh) {
    addPlugin("prettier-plugin-sh");
    if (typeof config.sh === "object") {
      for (const [key, value] of Object.entries(config.sh)) {
        finalConfig[key] = value;
      }
    }
  }
  if (config?.svelte) {
    addPlugin("prettier-plugin-svelte");
    if (typeof config.svelte === "object") {
      for (const [key, value] of Object.entries(config.svelte)) {
        finalConfig[key] = value;
      }
    }
  }
  if (config?.sql) {
    addPlugin("prettier-plugin-sql");
    if (typeof config.sql === "object") {
      for (const [key, value] of Object.entries(config.sql)) {
        finalConfig[key] = value;
      }
    }
  }
  if (config?.toml) {
    addPlugin("prettier-plugin-toml");
    if (typeof config.toml === "object") {
      for (const [key, value] of Object.entries(config.toml)) {
        finalConfig[key] = value;
      }
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
