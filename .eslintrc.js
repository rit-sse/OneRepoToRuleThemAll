module.exports = {
  extends: [
    "sse",
  ],
  parser: "babel-eslint",
  globals: {
    gapi: true,
  },
  env: {
    browser: true,
    node: true,
  },
  ecmaFeatures: {
    jsx: true,
    es6: true,
  },
  settings: {
    'import/resolver': {
      webpack: {
        config: "webpack.config.prod.js"
      }
    }
  },
};
