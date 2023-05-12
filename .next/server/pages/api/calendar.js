"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
(() => {
var exports = {};
exports.id = "pages/api/calendar";
exports.ids = ["pages/api/calendar"];
exports.modules = {

/***/ "ical":
/*!***********************!*\
  !*** external "ical" ***!
  \***********************/
/***/ ((module) => {

module.exports = require("ical");

/***/ }),

/***/ "axios":
/*!************************!*\
  !*** external "axios" ***!
  \************************/
/***/ ((module) => {

module.exports = import("axios");;

/***/ }),

/***/ "(api)/./pages/api/calendar.js":
/*!*******************************!*\
  !*** ./pages/api/calendar.js ***!
  \*******************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {\n__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var ical__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ical */ \"ical\");\n/* harmony import */ var ical__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(ical__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! axios */ \"axios\");\nvar __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([axios__WEBPACK_IMPORTED_MODULE_1__]);\naxios__WEBPACK_IMPORTED_MODULE_1__ = (__webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__)[0];\n\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (async (req, res)=>{\n    try {\n        const response = await axios__WEBPACK_IMPORTED_MODULE_1__[\"default\"].get(\"https://www.airbnb.com/calendar/ical/32234578.ics?s=f61a4ebfd3a89195fcfdee22b14e90f3\");\n        const calendarData = ical__WEBPACK_IMPORTED_MODULE_0___default().parseICS(response.data);\n        const calendarEvents = Object.values(calendarData).map((event)=>({\n                start: event.start,\n                end: event.end,\n                summary: event.summary,\n                description: event.description\n            }));\n        res.status(200).json(calendarEvents);\n    } catch (error) {\n        console.error(\"Error fetching calendar data:\", error);\n        res.status(500).json({\n            message: \"Error fetching calendar data\"\n        });\n    }\n});\n\n__webpack_async_result__();\n} catch(e) { __webpack_async_result__(e); } });//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwaSkvLi9wYWdlcy9hcGkvY2FsZW5kYXIuanMuanMiLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7OztBQUF3QjtBQUNFO0FBRTFCLGlFQUFlLE9BQU9FLEdBQUcsRUFBRUMsR0FBRyxHQUFLO0lBQ2pDLElBQUk7UUFDRixNQUFNQyxRQUFRLEdBQUcsTUFBTUgsaURBQVMsQ0FDOUIsc0ZBQXNGLENBQ3ZGO1FBQ0QsTUFBTUssWUFBWSxHQUFHTixvREFBYSxDQUFDSSxRQUFRLENBQUNJLElBQUksQ0FBQztRQUVqRCxNQUFNQyxjQUFjLEdBQUdDLE1BQU0sQ0FBQ0MsTUFBTSxDQUFDTCxZQUFZLENBQUMsQ0FBQ00sR0FBRyxDQUFDLENBQUNDLEtBQUssR0FBTTtnQkFDakVDLEtBQUssRUFBRUQsS0FBSyxDQUFDQyxLQUFLO2dCQUNsQkMsR0FBRyxFQUFFRixLQUFLLENBQUNFLEdBQUc7Z0JBQ2RDLE9BQU8sRUFBRUgsS0FBSyxDQUFDRyxPQUFPO2dCQUN0QkMsV0FBVyxFQUFFSixLQUFLLENBQUNJLFdBQVc7YUFFL0IsRUFBRTtRQUNIZCxHQUFHLENBQUNlLE1BQU0sQ0FBQyxHQUFHLENBQUMsQ0FBQ0MsSUFBSSxDQUFDVixjQUFjLENBQUMsQ0FBQztJQUN2QyxFQUFFLE9BQU9XLEtBQUssRUFBRTtRQUNkQyxPQUFPLENBQUNELEtBQUssQ0FBQywrQkFBK0IsRUFBRUEsS0FBSyxDQUFDLENBQUM7UUFDdERqQixHQUFHLENBQUNlLE1BQU0sQ0FBQyxHQUFHLENBQUMsQ0FBQ0MsSUFBSSxDQUFDO1lBQUVHLE9BQU8sRUFBRSw4QkFBOEI7U0FBRSxDQUFDLENBQUM7SUFDcEUsQ0FBQztBQUNILENBQUMsRUFBQyIsInNvdXJjZXMiOlsid2VicGFjazovL29yZ2FyaXVtbi8uL3BhZ2VzL2FwaS9jYWxlbmRhci5qcz9hNTYyIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBpY2FsIGZyb20gJ2ljYWwnO1xuaW1wb3J0IGF4aW9zIGZyb20gJ2F4aW9zJztcblxuZXhwb3J0IGRlZmF1bHQgYXN5bmMgKHJlcSwgcmVzKSA9PiB7XG4gIHRyeSB7XG4gICAgY29uc3QgcmVzcG9uc2UgPSBhd2FpdCBheGlvcy5nZXQoXG4gICAgICAnaHR0cHM6Ly93d3cuYWlyYm5iLmNvbS9jYWxlbmRhci9pY2FsLzMyMjM0NTc4Lmljcz9zPWY2MWE0ZWJmZDNhODkxOTVmY2ZkZWUyMmIxNGU5MGYzJ1xuICAgICk7XG4gICAgY29uc3QgY2FsZW5kYXJEYXRhID0gaWNhbC5wYXJzZUlDUyhyZXNwb25zZS5kYXRhKTtcblxuICAgIGNvbnN0IGNhbGVuZGFyRXZlbnRzID0gT2JqZWN0LnZhbHVlcyhjYWxlbmRhckRhdGEpLm1hcCgoZXZlbnQpID0+ICh7XG4gICAgICBzdGFydDogZXZlbnQuc3RhcnQsXG4gICAgICBlbmQ6IGV2ZW50LmVuZCxcbiAgICAgIHN1bW1hcnk6IGV2ZW50LnN1bW1hcnksXG4gICAgICBkZXNjcmlwdGlvbjogZXZlbnQuZGVzY3JpcHRpb24sXG4gICAgICBcbiAgICB9KSk7XG4gICAgcmVzLnN0YXR1cygyMDApLmpzb24oY2FsZW5kYXJFdmVudHMpO1xuICB9IGNhdGNoIChlcnJvcikge1xuICAgIGNvbnNvbGUuZXJyb3IoJ0Vycm9yIGZldGNoaW5nIGNhbGVuZGFyIGRhdGE6JywgZXJyb3IpO1xuICAgIHJlcy5zdGF0dXMoNTAwKS5qc29uKHsgbWVzc2FnZTogJ0Vycm9yIGZldGNoaW5nIGNhbGVuZGFyIGRhdGEnIH0pO1xuICB9XG59O1xuXG4iXSwibmFtZXMiOlsiaWNhbCIsImF4aW9zIiwicmVxIiwicmVzIiwicmVzcG9uc2UiLCJnZXQiLCJjYWxlbmRhckRhdGEiLCJwYXJzZUlDUyIsImRhdGEiLCJjYWxlbmRhckV2ZW50cyIsIk9iamVjdCIsInZhbHVlcyIsIm1hcCIsImV2ZW50Iiwic3RhcnQiLCJlbmQiLCJzdW1tYXJ5IiwiZGVzY3JpcHRpb24iLCJzdGF0dXMiLCJqc29uIiwiZXJyb3IiLCJjb25zb2xlIiwibWVzc2FnZSJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///(api)/./pages/api/calendar.js\n");

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../../webpack-api-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = (__webpack_exec__("(api)/./pages/api/calendar.js"));
module.exports = __webpack_exports__;

})();