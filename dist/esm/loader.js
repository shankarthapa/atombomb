import { p as promiseResolve, b as bootstrapLazy } from './index-56892554.js';
export { s as setNonce } from './index-56892554.js';

/*
 Stencil Client Patch Esm v3.4.0 | MIT Licensed | https://stenciljs.com
 */
const patchEsm = () => {
    return promiseResolve();
};

const defineCustomElements = (win, options) => {
  if (typeof window === 'undefined') return Promise.resolve();
  return patchEsm().then(() => {
  return bootstrapLazy([["input-form_2",[[1,"input-form",{"first":[1],"middle":[1],"last":[1]}],[1,"my-component",{"first":[1],"middle":[1],"last":[1]}]]],["tx-button",[[1,"tx-button"]]]], options);
  });
};

export { defineCustomElements };

//# sourceMappingURL=loader.js.map