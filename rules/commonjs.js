'use strict';

// @see http://eslint.org/docs/rules/#nodejs-and-commonjs
/* eslint quote-props: ["error", "consistent"] */
const rules = {
  // require return statements after callbacks
  'callback-return': 2,
  // require require() calls to be placed at top-level module scope
  // 'global-require': 0,
  // require error handling in callbacks
  // 'handle-callback-err': 0,
  // disallow require calls to be mixed with regular variable declarations
  // 'no-mixed-requires': 0,
  // disallow new operators with calls to require
  // 'no-new-require': 0,
  // disallow string concatenation with __dirname and __filename
  // 'no-path-concat': 0,
  // disallow the use of process.env
  // 'no-process-env': 0,
  // disallow the use of process.exit()
  // 'no-process-exit': 0,
  // disallow specified modules when loaded by require
  // 'no-restricted-modules': 0,
  // disallow synchronous methods
  // 'no-sync': 0,
};

module.exports = {rules};
