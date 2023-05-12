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

eval("__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {\n__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var ical__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ical */ \"ical\");\n/* harmony import */ var ical__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(ical__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! axios */ \"axios\");\nvar __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([axios__WEBPACK_IMPORTED_MODULE_1__]);\naxios__WEBPACK_IMPORTED_MODULE_1__ = (__webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__)[0];\n\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (async (req, res)=>{\n    try {\n        const response = await axios__WEBPACK_IMPORTED_MODULE_1__[\"default\"].get(\"https://www.airbnb.com/calendar/ical/32234578.ics?s=f61a4ebfd3a89195fcfdee22b14e90f3\");\n        const calendarData = ical__WEBPACK_IMPORTED_MODULE_0___default().parseICS(response.data);\n        console.log(calendarData);\n        const calendarEvents = Object.values(calendarData).map((event)=>({\n                start: event.start,\n                end: event.end,\n                summary: event.summary,\n                description: event.description\n            }));\n        res.status(200).json(calendarEvents);\n    } catch (error) {\n        console.error(\"Error fetching calendar data:\", error);\n        res.status(500).json({\n            message: \"Error fetching calendar data\"\n        });\n    }\n});\n\n__webpack_async_result__();\n} catch(e) { __webpack_async_result__(e); } });//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwaSkvLi9wYWdlcy9hcGkvY2FsZW5kYXIuanMuanMiLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7OztBQUF3QjtBQUNFO0FBRTFCLGlFQUFlLE9BQU9FLEdBQUcsRUFBRUMsR0FBRyxHQUFLO0lBQ2pDLElBQUk7UUFDRixNQUFNQyxRQUFRLEdBQUcsTUFBTUgsaURBQVMsQ0FDOUIsc0ZBQXNGLENBQ3ZGO1FBQ0QsTUFBTUssWUFBWSxHQUFHTixvREFBYSxDQUFDSSxRQUFRLENBQUNJLElBQUksQ0FBQztRQUNqREMsT0FBTyxDQUFDQyxHQUFHLENBQUNKLFlBQVksQ0FBQyxDQUFDO1FBQzFCLE1BQU1LLGNBQWMsR0FBR0MsTUFBTSxDQUFDQyxNQUFNLENBQUNQLFlBQVksQ0FBQyxDQUFDUSxHQUFHLENBQUMsQ0FBQ0MsS0FBSyxHQUFNO2dCQUNqRUMsS0FBSyxFQUFFRCxLQUFLLENBQUNDLEtBQUs7Z0JBQ2xCQyxHQUFHLEVBQUVGLEtBQUssQ0FBQ0UsR0FBRztnQkFDZEMsT0FBTyxFQUFFSCxLQUFLLENBQUNHLE9BQU87Z0JBQ3RCQyxXQUFXLEVBQUVKLEtBQUssQ0FBQ0ksV0FBVzthQUUvQixFQUFFO1FBQ0hoQixHQUFHLENBQUNpQixNQUFNLENBQUMsR0FBRyxDQUFDLENBQUNDLElBQUksQ0FBQ1YsY0FBYyxDQUFDLENBQUM7SUFDdkMsRUFBRSxPQUFPVyxLQUFLLEVBQUU7UUFDZGIsT0FBTyxDQUFDYSxLQUFLLENBQUMsK0JBQStCLEVBQUVBLEtBQUssQ0FBQyxDQUFDO1FBQ3REbkIsR0FBRyxDQUFDaUIsTUFBTSxDQUFDLEdBQUcsQ0FBQyxDQUFDQyxJQUFJLENBQUM7WUFBRUUsT0FBTyxFQUFFLDhCQUE4QjtTQUFFLENBQUMsQ0FBQztJQUNwRSxDQUFDO0FBQ0gsQ0FBQyxFQUFDIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vb3JnYXJpdW1uLy4vcGFnZXMvYXBpL2NhbGVuZGFyLmpzP2E1NjIiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IGljYWwgZnJvbSAnaWNhbCc7XG5pbXBvcnQgYXhpb3MgZnJvbSAnYXhpb3MnO1xuXG5leHBvcnQgZGVmYXVsdCBhc3luYyAocmVxLCByZXMpID0+IHtcbiAgdHJ5IHtcbiAgICBjb25zdCByZXNwb25zZSA9IGF3YWl0IGF4aW9zLmdldChcbiAgICAgICdodHRwczovL3d3dy5haXJibmIuY29tL2NhbGVuZGFyL2ljYWwvMzIyMzQ1NzguaWNzP3M9ZjYxYTRlYmZkM2E4OTE5NWZjZmRlZTIyYjE0ZTkwZjMnXG4gICAgKTtcbiAgICBjb25zdCBjYWxlbmRhckRhdGEgPSBpY2FsLnBhcnNlSUNTKHJlc3BvbnNlLmRhdGEpO1xuICAgIGNvbnNvbGUubG9nKGNhbGVuZGFyRGF0YSk7XG4gICAgY29uc3QgY2FsZW5kYXJFdmVudHMgPSBPYmplY3QudmFsdWVzKGNhbGVuZGFyRGF0YSkubWFwKChldmVudCkgPT4gKHtcbiAgICAgIHN0YXJ0OiBldmVudC5zdGFydCxcbiAgICAgIGVuZDogZXZlbnQuZW5kLFxuICAgICAgc3VtbWFyeTogZXZlbnQuc3VtbWFyeSxcbiAgICAgIGRlc2NyaXB0aW9uOiBldmVudC5kZXNjcmlwdGlvbixcbiAgICAgIFxuICAgIH0pKTtcbiAgICByZXMuc3RhdHVzKDIwMCkuanNvbihjYWxlbmRhckV2ZW50cyk7XG4gIH0gY2F0Y2ggKGVycm9yKSB7XG4gICAgY29uc29sZS5lcnJvcignRXJyb3IgZmV0Y2hpbmcgY2FsZW5kYXIgZGF0YTonLCBlcnJvcik7XG4gICAgcmVzLnN0YXR1cyg1MDApLmpzb24oeyBtZXNzYWdlOiAnRXJyb3IgZmV0Y2hpbmcgY2FsZW5kYXIgZGF0YScgfSk7XG4gIH1cbn07XG5cbiJdLCJuYW1lcyI6WyJpY2FsIiwiYXhpb3MiLCJyZXEiLCJyZXMiLCJyZXNwb25zZSIsImdldCIsImNhbGVuZGFyRGF0YSIsInBhcnNlSUNTIiwiZGF0YSIsImNvbnNvbGUiLCJsb2ciLCJjYWxlbmRhckV2ZW50cyIsIk9iamVjdCIsInZhbHVlcyIsIm1hcCIsImV2ZW50Iiwic3RhcnQiLCJlbmQiLCJzdW1tYXJ5IiwiZGVzY3JpcHRpb24iLCJzdGF0dXMiLCJqc29uIiwiZXJyb3IiLCJtZXNzYWdlIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///(api)/./pages/api/calendar.js\n");

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