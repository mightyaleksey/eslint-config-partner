'use strict';

/* eslint quote-props: ["error", "consistent"] */
module.exports = {
  env: {
    browser: true,
    commonjs: true,
    es6: true,
    jest: true,
  },
  extends: [
    'eslint:recommended',
    'plugin:flowtype/recommended',
    'plugin:react/recommended',
    './rules/best-practices.js',
    './rules/commonjs.js',
    './rules/es6.js',
    './rules/possible-errors.js',
    './rules/stylistic.js',
    './rules/variables.js',
  ],
  globals: {
    process: true,
  },
  parser: 'babel-eslint',
  parserOptions: {
    ecmaFeatures: {
      jsx: true,
    },
    ecmaVersion: 6,
    sourceType: 'script',
  },
  plugins: [
    'flowtype',
    'react',
  ],
  rules: {
    'flowtype/no-types-missing-file-annotation': 0,
    'react/jsx-indent':
    [
      2,
      4,
    ],
    'react/jsx-indent-props':
    [
      2,
      4,
    ],
    'react/jsx-uses-react': 2,
    'react/jsx-uses-vars': 2,
    'react/prop-types': 0,
    'strict': 2,
  },
};
