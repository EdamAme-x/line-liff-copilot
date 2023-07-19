'use strict';

var core = require('@liff/core');

/**
 * The entry file that will be transpiled into `core/index.cjs`.
 * This file will export the single object:
 *
 * - The default export: `liff`
 *
 * @example
 * const liff = require('@line/liff/core');
 */

module.exports = core.liffCore;
