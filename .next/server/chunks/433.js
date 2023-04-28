"use strict";
exports.id = 433;
exports.ids = [433];
exports.modules = {

/***/ 9433:
/***/ ((__unused_webpack_module, exports) => {

var __webpack_unused_export__;

__webpack_unused_export__ = ({
    value: true
});
__webpack_unused_export__ = getRequestMeta;
__webpack_unused_export__ = setRequestMeta;
__webpack_unused_export__ = addRequestMeta;
__webpack_unused_export__ = getNextInternalQuery;
__webpack_unused_export__ = void 0;
const NEXT_REQUEST_META = Symbol("NextRequestMeta");
__webpack_unused_export__ = NEXT_REQUEST_META;
function getRequestMeta(req, key) {
    const meta = req[NEXT_REQUEST_META] || {};
    return typeof key === "string" ? meta[key] : meta;
}
function setRequestMeta(req, meta) {
    req[NEXT_REQUEST_META] = meta;
    return getRequestMeta(req);
}
function addRequestMeta(request, key, value) {
    const meta = getRequestMeta(request);
    meta[key] = value;
    return setRequestMeta(request, meta);
}
function getNextInternalQuery(query) {
    const keysToInclude = [
        "__nextDefaultLocale",
        "__nextFallback",
        "__nextLocale",
        "__nextSsgPath",
        "_nextBubbleNoFallback",
        "__nextDataReq", 
    ];
    const nextInternalQuery = {};
    for (const key of keysToInclude){
        if (key in query) {
            // @ts-ignore this can't be typed correctly
            nextInternalQuery[key] = query[key];
        }
    }
    return nextInternalQuery;
}

//# sourceMappingURL=request-meta.js.map

/***/ })

};
;