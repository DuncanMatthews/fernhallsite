"use strict";
(() => {
var exports = {};
exports.id = 373;
exports.ids = [373];
exports.modules = {

/***/ 8834:
/***/ ((module) => {

module.exports = require("ical");

/***/ }),

/***/ 9648:
/***/ ((module) => {

module.exports = import("axios");;

/***/ }),

/***/ 9954:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var ical__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(8834);
/* harmony import */ var ical__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(ical__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(9648);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([axios__WEBPACK_IMPORTED_MODULE_1__]);
axios__WEBPACK_IMPORTED_MODULE_1__ = (__webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__)[0];


/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (async (req, res)=>{
    try {
        const response = await axios__WEBPACK_IMPORTED_MODULE_1__["default"].get("https://www.airbnb.com/calendar/ical/32234578.ics?s=f61a4ebfd3a89195fcfdee22b14e90f3");
        const calendarData = ical__WEBPACK_IMPORTED_MODULE_0___default().parseICS(response.data);
        const calendarEvents = Object.values(calendarData).map((event)=>({
                start: event.start,
                end: event.end,
                summary: event.summary,
                description: event.description
            }));
        res.status(200).json(calendarEvents);
    } catch (error) {
        console.error("Error fetching calendar data:", error);
        res.status(500).json({
            message: "Error fetching calendar data"
        });
    }
});

__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../../webpack-api-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = (__webpack_exec__(9954));
module.exports = __webpack_exports__;

})();