'use strict';

module.exports = {
  extends: ['eslint-config-standard', 'eslint-config-standard-react'],
  env: {
    browser: true,
    'shared-node-browser': true,
    node: true
  },
  parser: 'babel-eslint',
  parserOptions: {
    sourceType: 'module',
    ecmaFeatures: {
      jsx: true
    }
  },
  globals: {
    module: false
  },
  rules: {}
}
