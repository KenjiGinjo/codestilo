// import eslintConfig from "./src/eslint-config/base.js";
import eslint from "@eslint/js";
import base from "./src/eslint-config/base.js";

export default [eslint.configs.recommended, ...base];
