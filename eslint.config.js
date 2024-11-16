import globals from "globals";
import pluginJs from "@eslint/js";
import config from "eslint-config-prettier";

/** @type {import('eslint').Linter.Config[]} */
export default [
  ...[].concat(config),
  { languageOptions: { globals: globals.browser } },
  pluginJs.configs.recommended,
  {
    ignores: ["node_modules", "dist", ".vscode"],
  },
];
