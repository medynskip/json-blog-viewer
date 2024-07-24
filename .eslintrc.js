module.exports = {
  extends: [
    "plugin:@typescript-eslint/strict-type-checked",
    "prettier",
    "next",
    "next/core-web-vitals",
  ],
  plugins: ["prettier", "@stylistic"],
  parserOptions: {
    project: "**/tsconfig.json",
  },
  rules: {
    "@stylistic/indent": ["error", 2],
    "@typescript-eslint/consistent-type-imports": [
      "error",
      { prefer: "type-imports" },
    ],
    "import/newline-after-import": "error",
    "import/no-cycle": "error",
    "sort-imports": ["error", { ignoreDeclarationSort: true }],
    "prettier/prettier": "error",
    "@typescript-eslint/no-unused-vars": [
      "error",
      {
        varsIgnorePattern: "^_",
        argsIgnorePattern: "^_",
        ignoreRestSiblings: true,
      },
    ],
    "import/order": [
      "error",
      {
        groups: [
          "builtin",
          "external",
          "internal",
          "parent",
          "sibling",
          "index",
          "object",
          "type",
        ],
        "newlines-between": "always",
        alphabetize: {
          order: "asc",
          caseInsensitive: true,
        },
      },
    ],
  },
};
