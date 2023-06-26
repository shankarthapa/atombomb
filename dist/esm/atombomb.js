import { p as promiseResolve, b as bootstrapLazy } from './index-56892554.js';
export { s as setNonce } from './index-56892554.js';

/*
 Stencil Client Patch Browser v3.4.0 | MIT Licensed | https://stenciljs.com
 */
const patchBrowser = () => {
    const importMeta = import.meta.url;
    const opts = {};
    // TODO(STENCIL-663): Remove code related to deprecated `safari10` field.
    if (importMeta !== '') {
        opts.resourcesUrl = new URL('.', importMeta).href;
        // TODO(STENCIL-661): Remove code related to the dynamic import shim
        // TODO(STENCIL-663): Remove code related to deprecated `safari10` field.
    }
    return promiseResolve(opts);
};

patchBrowser().then(options => {
  return bootstrapLazy([["input-form_2",[[1,"input-form",{"first":[1],"middle":[1],"last":[1]}],[1,"my-component",{"first":[1],"middle":[1],"last":[1]}]]],["tx-button",[[1,"tx-button"]]]], options);
});

//# sourceMappingURL=atombomb.js.map