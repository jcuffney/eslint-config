'use strict';

module.exports = {
  extends: ['eslint-config-standard'],
  parser: 'babel-eslint',
  globals: {},
  env: {
    node: true,
    es6: true,
  },
  parserOptions: {
    ecmaVersion: 6,
    sourceType: 'script',
    ecmaFeatures: {},
  },
  rules: {},
};
