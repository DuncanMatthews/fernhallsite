"use strict";
(() => {
var exports = {};
exports.id = 373;
exports.ids = [373];
exports.modules = {

/***/ 3109:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
Object(function webpackMissingModule() { var e = new Error("Cannot find module 'ical'"); e.code = 'MODULE_NOT_FOUND'; throw e; }());
Object(function webpackMissingModule() { var e = new Error("Cannot find module 'axios'"); e.code = 'MODULE_NOT_FOUND'; throw e; }());


/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (async (req, res)=>{
    try {
        const response = await Object(function webpackMissingModule() { var e = new Error("Cannot find module 'axios'"); e.code = 'MODULE_NOT_FOUND'; throw e; }())("https://www.airbnb.com/calendar/ical/32234578.ics?s=f61a4ebfd3a89195fcfdee22b14e90f3");
        const calendarData = Object(function webpackMissingModule() { var e = new Error("Cannot find module 'ical'"); e.code = 'MODULE_NOT_FOUND'; throw e; }())(response.data);
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


/***/ })

};
;

// load runtime
var __webpack_require__ = require("../../webpack-api-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = (__webpack_exec__(3109));
module.exports = __webpack_exports__;

})();