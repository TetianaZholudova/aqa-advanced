import globals from "globals";
import pluginJs from "@eslint/js";


export default [
  {languageOptions: { globals: globals.browser }},
  pluginJs.configs.recommended,

  {
    rules: {
        "eqeqeq": "error",
        "no-dupe-keys": "error", 
        "camelcase": "error", 
        "curly": "error",
        "for-direction": "error", 
        "no-useless-assignment": "error",
        "getter-return": "error",
        "no-constant-condition": "error",

    }
}
];