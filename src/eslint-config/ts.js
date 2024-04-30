import pluginJs from "@eslint/js";
import tseslint from "typescript-eslint";
import base from "./base.js";
import eslintConfigPrettier from "eslint-config-prettier";

export default [
  pluginJs.configs.recommended,
  ...tseslint.configs.recommended,
  ...base,
  eslintConfigPrettier,
];
