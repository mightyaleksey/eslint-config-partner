'use strict';

module.exports = {
  env: {
    browser: true,
    commonjs: true,
    jquery: true,
    mocha: true,
  },
  extends: [
    'eslint:recommended',
    './rules/best-practices.js',
    './rules/commonjs.js',
    './rules/possible-errors.js',
    './rules/stylistic.js',
    './rules/variables.js',
  ],
  parserOptions: {
    ecmaVersion: 6,
    sourceType: 'script',
  },
  plugins: [
    'flowtype',
    'react',
  ],
  rules: {
    strict: 2,
  },
};
