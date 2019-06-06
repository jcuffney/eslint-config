'use strict';

module.exports = {
  extends: './node.js',
  plugins: ['react'],
  env: {
    browser: true,
    'shared-node-browser': true,
    node: false,
  },
  parserOptions: {
    sourceType: 'module',
    ecmaFeatures: {
      jsx: true,
    },
  },
  globals: {
    module: false,
  },
  rules: {},
};