'use strict';

// @see http://eslint.org/docs/rules/#possible-errors
/* eslint quote-props: ["error", "consistent"] */
const rules = {
  // disallow await inside of loops
  // 'no-await-in-loop': 0,
  // disallow comparing against -0
  // 'no-compare-neg-zero': 0,
  // disallow assignment operators in conditional expressions
  // 'no-cond-assign': 0,
  // disallow the use of console
  // 'no-console': 0,
  // disallow constant expressions in conditions
  // 'no-constant-condition': 0,
  // disallow control characters in regular expressions
  // 'no-control-regex': 0,
  // disallow the use of debugger
  // 'no-debugger': 0,
  // disallow duplicate arguments in function definitions
  // 'no-dupe-args': 0,
  // disallow duplicate keys in object literals
  // 'no-dupe-keys': 0,
  // disallow duplicate case labels
  // 'no-duplicate-case': 0,
  // disallow empty block statements
  // 'no-empty': 0,
  // disallow empty character classes in regular expressions
  // 'no-empty-character-class': 0,
  // disallow reassigning exceptions in catch clauses
  // 'no-ex-assign': 0,
  // disallow unnecessary boolean casts
  'no-extra-boolean-cast': 2,
  // disallow unnecessary parentheses
  'no-extra-parens':
  [
    2,
    'all',
    {
      ignoreJSX: 'multi-line',
    },
  ],
  // disallow unnecessary semicolons
  'no-extra-semi': 2,
  // disallow reassigning function declarations
  // 'no-func-assign': 0,
  // disallow variable or function declarations in nested blocks
  // 'no-inner-declarations': 0,
  // disallow invalid regular expression strings in RegExp constructors
  // 'no-invalid-regexp': 0,
  // disallow irregular whitespace outside of strings and comments
  // 'no-irregular-whitespace': 0,
  // disallow calling global object properties as functions
  // 'no-obj-calls': 0,
  // disallow calling some Object.prototype methods directly on objects
  // 'no-prototype-builtins': 0,
  // disallow multiple spaces in regular expressions
  'no-regex-spaces': 2,
  // disallow sparse arrays
  // 'no-sparse-arrays': 0,
  // disallow template literal placeholder syntax in regular strings
  // 'no-template-curly-in-string': 0,
  // disallow confusing multiline expressions
  // 'no-unexpected-multiline': 0,
  // disallow unreachable code after return, throw, continue, and break statements
  // 'no-unreachable': 0,
  // disallow control flow statements in finally blocks
  // 'no-unsafe-finally': 0,
  // disallow negating the left operand of relational operators
  'no-unsafe-negation': 2,
  // require calls to isNaN() when checking for NaN
  // 'use-isnan': 0,
  // enforce valid JSDoc comments
  // 'valid-jsdoc': 0,
  // enforce comparing typeof expressions against valid strings
  // 'valid-typeof': 0,
};

module.exports = {rules};
