import { Linter } from "eslint";

const config: Linter.Config = {
  extends: ["eslint:recommended"],
  rules: {
    // 自定义规则
  },
  env: {
    browser: true,
    es6: true,
    node: true,
  },
  parserOptions: {
    ecmaVersion: 2020,
    sourceType: "module",
  },
};

export default config;
