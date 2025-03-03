import eslintPerfectionist from "eslint-plugin-perfectionist";
function perfectionist(context, rules) {
  return {
    plugin: {
      perfectionist: eslintPerfectionist
    },
    rules: {
      "perfectionist/sort-imports": [
        "error",
        {
          type: "alphabetical",
          order: "asc",
          ignoreCase: true,
          specialCharacters: "keep",
          internalPattern: ["^#.+"],
          partitionByComment: false,
          partitionByNewLine: false,
          newlinesBetween: "always",
          maxLineLength: void 0,
          groups: [
            "type",
            ["builtin", "external"],
            "internal-type",
            "internal",
            ["parent-type", "sibling-type", "index-type"],
            ["parent", "sibling", "index"],
            "object",
            "unknown"
          ],
          customGroups: { type: {}, value: {} },
          environment: "node"
        }
      ],
      ...rules ?? {}
    }
  };
}
export {
  perfectionist
};
