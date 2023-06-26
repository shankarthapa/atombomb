'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

const index = require('./index-50dab298.js');

/*
 Stencil Client Patch Esm v3.4.0 | MIT Licensed | https://stenciljs.com
 */
const patchEsm = () => {
    return index.promiseResolve();
};

const defineCustomElements = (win, options) => {
  if (typeof window === 'undefined') return Promise.resolve();
  return patchEsm().then(() => {
  return index.bootstrapLazy([["input-form_2.cjs",[[1,"input-form",{"first":[1],"middle":[1],"last":[1]}],[1,"my-component",{"first":[1],"middle":[1],"last":[1]}]]],["tx-button.cjs",[[1,"tx-button"]]]], options);
  });
};

exports.setNonce = index.setNonce;
exports.defineCustomElements = defineCustomElements;

//# sourceMappingURL=loader.cjs.js.map