module.exports = {
  "env": {
    browser: true,
    es6: true,
    node: true,
    jest: true,
  },
  "extends": [
    "eslint:recommended",
    "plugin:jest-dom/recommended",
  ],
  "parserOptions": {
    sourceType: "module",
  },
  "rules": {
    // enable additional rules
    "indent": ["error", 2],
    "linebreak-style": ["error", "unix"],
    "quotes": ["error", "double"],
    "quote-props": ["error", "consistent"],

    // Don't allow console.log
    "no-console": ["error"]
  },
};
