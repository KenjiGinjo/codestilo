import ESBase from "./eslint-config/base.js";
import ESTs from "./eslint-config/ts.js";
import PTBase from "./prettier-config/base.js";

const ESLINT = {
  base: ESBase,
  ts: ESTs,
};

const PRETTIER = {
  base: PTBase,
};
export { ESLINT, PRETTIER };
