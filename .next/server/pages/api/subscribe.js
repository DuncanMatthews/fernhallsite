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
exports.id = "pages/api/subscribe";
exports.ids = ["pages/api/subscribe"];
exports.modules = {

/***/ "@mailchimp/mailchimp_marketing":
/*!*************************************************!*\
  !*** external "@mailchimp/mailchimp_marketing" ***!
  \*************************************************/
/***/ ((module) => {

module.exports = require("@mailchimp/mailchimp_marketing");

/***/ }),

/***/ "(api)/./pages/api/subscribe.js":
/*!********************************!*\
  !*** ./pages/api/subscribe.js ***!
  \********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _mailchimp_mailchimp_marketing__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @mailchimp/mailchimp_marketing */ \"@mailchimp/mailchimp_marketing\");\n/* harmony import */ var _mailchimp_mailchimp_marketing__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_mailchimp_mailchimp_marketing__WEBPACK_IMPORTED_MODULE_0__);\n\n_mailchimp_mailchimp_marketing__WEBPACK_IMPORTED_MODULE_0___default().setConfig({\n    apiKey: process.env.MAILCHIMP_API_KEY,\n    server: process.env.MAILCHIMP_API_SERVER\n});\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (async (req, res)=>{\n    const { email  } = req.body;\n    if (!email) {\n        return res.status(400).json({\n            error: \"Email is required\"\n        });\n    }\n    try {\n        await _mailchimp_mailchimp_marketing__WEBPACK_IMPORTED_MODULE_0___default().lists.addListMember(process.env.MAILCHIMP_AUDIENCE_ID, {\n            email_address: email,\n            status: \"subscribed\"\n        });\n        return res.status(201).json({\n            error: \"\"\n        });\n    } catch (error) {\n        return res.status(500).json({\n            error: error.message || error.toString()\n        });\n    }\n});\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwaSkvLi9wYWdlcy9hcGkvc3Vic2NyaWJlLmpzLmpzIiwibWFwcGluZ3MiOiI7Ozs7OztBQUF1RDtBQUV2REEsK0VBQW1CLENBQUM7SUFDaEJFLE1BQU0sRUFBRUMsT0FBTyxDQUFDQyxHQUFHLENBQUNDLGlCQUFpQjtJQUNyQ0MsTUFBTSxFQUFFSCxPQUFPLENBQUNDLEdBQUcsQ0FBQ0csb0JBQW9CO0NBQ3pDLENBQUMsQ0FBQztBQUdILGlFQUFlLE9BQU9DLEdBQUcsRUFBRUMsR0FBRyxHQUFLO0lBQ2pDLE1BQU0sRUFBRUMsS0FBSyxHQUFFLEdBQUdGLEdBQUcsQ0FBQ0csSUFBSTtJQUUxQixJQUFJLENBQUNELEtBQUssRUFBRTtRQUNWLE9BQU9ELEdBQUcsQ0FBQ0csTUFBTSxDQUFDLEdBQUcsQ0FBQyxDQUFDQyxJQUFJLENBQUM7WUFBRUMsS0FBSyxFQUFFLG1CQUFtQjtTQUFFLENBQUMsQ0FBQztJQUM5RCxDQUFDO0lBRUQsSUFBSTtRQUNGLE1BQU1kLHlGQUE2QixDQUFDRyxPQUFPLENBQUNDLEdBQUcsQ0FBQ2EscUJBQXFCLEVBQUU7WUFDckVDLGFBQWEsRUFBRVIsS0FBSztZQUNwQkUsTUFBTSxFQUFFLFlBQVk7U0FDckIsQ0FBQyxDQUFDO1FBRUgsT0FBT0gsR0FBRyxDQUFDRyxNQUFNLENBQUMsR0FBRyxDQUFDLENBQUNDLElBQUksQ0FBQztZQUFFQyxLQUFLLEVBQUUsRUFBRTtTQUFFLENBQUMsQ0FBQztJQUM3QyxFQUFFLE9BQU9BLEtBQUssRUFBRTtRQUNkLE9BQU9MLEdBQUcsQ0FBQ0csTUFBTSxDQUFDLEdBQUcsQ0FBQyxDQUFDQyxJQUFJLENBQUM7WUFBRUMsS0FBSyxFQUFFQSxLQUFLLENBQUNLLE9BQU8sSUFBSUwsS0FBSyxDQUFDTSxRQUFRLEVBQUU7U0FBRSxDQUFDLENBQUM7SUFDNUUsQ0FBQztBQUNILENBQUMsRUFBQyIsInNvdXJjZXMiOlsid2VicGFjazovL29yZ2FyaXVtbi8uL3BhZ2VzL2FwaS9zdWJzY3JpYmUuanM/MzIzMiJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgbWFpbGNoaW1wIGZyb20gJ0BtYWlsY2hpbXAvbWFpbGNoaW1wX21hcmtldGluZyc7XG5cbm1haWxjaGltcC5zZXRDb25maWcoe1xuICAgIGFwaUtleTogcHJvY2Vzcy5lbnYuTUFJTENISU1QX0FQSV9LRVksXG4gICAgc2VydmVyOiBwcm9jZXNzLmVudi5NQUlMQ0hJTVBfQVBJX1NFUlZFUiwgLy8gZS5nLiB1czFcbiAgfSk7XG5cblxuICBleHBvcnQgZGVmYXVsdCBhc3luYyAocmVxLCByZXMpID0+IHtcbiAgICBjb25zdCB7IGVtYWlsIH0gPSByZXEuYm9keTtcbiAgIFxuICAgIGlmICghZW1haWwpIHtcbiAgICAgIHJldHVybiByZXMuc3RhdHVzKDQwMCkuanNvbih7IGVycm9yOiAnRW1haWwgaXMgcmVxdWlyZWQnIH0pO1xuICAgIH1cbiAgIFxuICAgIHRyeSB7XG4gICAgICBhd2FpdCBtYWlsY2hpbXAubGlzdHMuYWRkTGlzdE1lbWJlcihwcm9jZXNzLmVudi5NQUlMQ0hJTVBfQVVESUVOQ0VfSUQsIHtcbiAgICAgICAgZW1haWxfYWRkcmVzczogZW1haWwsXG4gICAgICAgIHN0YXR1czogJ3N1YnNjcmliZWQnLFxuICAgICAgfSk7XG4gICBcbiAgICAgIHJldHVybiByZXMuc3RhdHVzKDIwMSkuanNvbih7IGVycm9yOiAnJyB9KTtcbiAgICB9IGNhdGNoIChlcnJvcikge1xuICAgICAgcmV0dXJuIHJlcy5zdGF0dXMoNTAwKS5qc29uKHsgZXJyb3I6IGVycm9yLm1lc3NhZ2UgfHwgZXJyb3IudG9TdHJpbmcoKSB9KTtcbiAgICB9XG4gIH07XG4gICJdLCJuYW1lcyI6WyJtYWlsY2hpbXAiLCJzZXRDb25maWciLCJhcGlLZXkiLCJwcm9jZXNzIiwiZW52IiwiTUFJTENISU1QX0FQSV9LRVkiLCJzZXJ2ZXIiLCJNQUlMQ0hJTVBfQVBJX1NFUlZFUiIsInJlcSIsInJlcyIsImVtYWlsIiwiYm9keSIsInN0YXR1cyIsImpzb24iLCJlcnJvciIsImxpc3RzIiwiYWRkTGlzdE1lbWJlciIsIk1BSUxDSElNUF9BVURJRU5DRV9JRCIsImVtYWlsX2FkZHJlc3MiLCJtZXNzYWdlIiwidG9TdHJpbmciXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///(api)/./pages/api/subscribe.js\n");

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../../webpack-api-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = (__webpack_exec__("(api)/./pages/api/subscribe.js"));
module.exports = __webpack_exports__;

})();