"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("pages/index",{

/***/ "./src/layouts/MobileHeader.js":
/*!*************************************!*\
  !*** ./src/layouts/MobileHeader.js ***!
  \*************************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next/link */ \"./node_modules/next/link.js\");\n/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);\nvar _this = undefined;\n\nvar _s = $RefreshSig$();\n\n\nvar MobileHeader = function() {\n    _s();\n    var ref = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)(\"\"), activeMenu = ref[0], setActiveMenu = ref[1];\n    var activeMenuSet = function(value) {\n        return setActiveMenu(activeMenu === value ? \"\" : value);\n    }, activeLi = function(value) {\n        return value === activeMenu ? {\n            display: \"block\"\n        } : {\n            display: \"none\"\n        };\n    };\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"nav\", {\n        className: \"main-menu d-block d-xl-none\",\n        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"ul\", {\n            children: [\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"li\", {\n                    children: [\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"a\", {\n                            href: \"#\",\n                            className: \"active\",\n                            children: \"Home\"\n                        }, void 0, false, {\n                            fileName: \"/Users/duncan/Downloads/websites-master/src/layouts/MobileHeader.js\",\n                            lineNumber: 14,\n                            columnNumber: 11\n                        }, _this),\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"ul\", {\n                            className: \"\",\n                            style: activeLi(\"home\")\n                        }, void 0, false, {\n                            fileName: \"/Users/duncan/Downloads/websites-master/src/layouts/MobileHeader.js\",\n                            lineNumber: 17,\n                            columnNumber: 11\n                        }, _this),\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"span\", {\n                            className: \"dd-trigger\",\n                            onClick: function() {\n                                return activeMenuSet(\"home\");\n                            }\n                        }, void 0, false, {\n                            fileName: \"/Users/duncan/Downloads/websites-master/src/layouts/MobileHeader.js\",\n                            lineNumber: 19,\n                            columnNumber: 11\n                        }, _this)\n                    ]\n                }, void 0, true, {\n                    fileName: \"/Users/duncan/Downloads/websites-master/src/layouts/MobileHeader.js\",\n                    lineNumber: 13,\n                    columnNumber: 9\n                }, _this),\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"li\", {\n                    children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_link__WEBPACK_IMPORTED_MODULE_1___default()), {\n                        href: \"/about\",\n                        children: \"About\"\n                    }, void 0, false, {\n                        fileName: \"/Users/duncan/Downloads/websites-master/src/layouts/MobileHeader.js\",\n                        lineNumber: 24,\n                        columnNumber: 11\n                    }, _this)\n                }, void 0, false, {\n                    fileName: \"/Users/duncan/Downloads/websites-master/src/layouts/MobileHeader.js\",\n                    lineNumber: 23,\n                    columnNumber: 9\n                }, _this),\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"li\", {\n                    children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_link__WEBPACK_IMPORTED_MODULE_1___default()), {\n                        href: \"/book-your-wedding\",\n                        children: \"Events\"\n                    }, void 0, false, {\n                        fileName: \"/Users/duncan/Downloads/websites-master/src/layouts/MobileHeader.js\",\n                        lineNumber: 28,\n                        columnNumber: 11\n                    }, _this)\n                }, void 0, false, {\n                    fileName: \"/Users/duncan/Downloads/websites-master/src/layouts/MobileHeader.js\",\n                    lineNumber: 27,\n                    columnNumber: 9\n                }, _this),\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"li\", {\n                    className: \"menu-item \",\n                    children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_link__WEBPACK_IMPORTED_MODULE_1___default()), {\n                        href: \"#blog\",\n                        children: \"Blog\"\n                    }, void 0, false, {\n                        fileName: \"/Users/duncan/Downloads/websites-master/src/layouts/MobileHeader.js\",\n                        lineNumber: 33,\n                        columnNumber: 11\n                    }, _this)\n                }, void 0, false, {\n                    fileName: \"/Users/duncan/Downloads/websites-master/src/layouts/MobileHeader.js\",\n                    lineNumber: 32,\n                    columnNumber: 9\n                }, _this)\n            ]\n        }, void 0, true, {\n            fileName: \"/Users/duncan/Downloads/websites-master/src/layouts/MobileHeader.js\",\n            lineNumber: 12,\n            columnNumber: 7\n        }, _this)\n    }, void 0, false, {\n        fileName: \"/Users/duncan/Downloads/websites-master/src/layouts/MobileHeader.js\",\n        lineNumber: 11,\n        columnNumber: 5\n    }, _this);\n};\n_s(MobileHeader, \"zh+HvXX3zxuqMkvNfneES9FE1vU=\");\n_c = MobileHeader;\n/* harmony default export */ __webpack_exports__[\"default\"] = (MobileHeader);\nvar _c;\n$RefreshReg$(_c, \"MobileHeader\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvbGF5b3V0cy9Nb2JpbGVIZWFkZXIuanMuanMiLCJtYXBwaW5ncyI6Ijs7Ozs7OztBQUFBOzs7QUFBNkI7QUFDSTtBQUVqQyxJQUFNRSxZQUFZLEdBQUcsV0FBTTs7SUFDekIsSUFBb0NELEdBQVksR0FBWkEsK0NBQVEsQ0FBQyxFQUFFLENBQUMsRUFBekNFLFVBQVUsR0FBbUJGLEdBQVksR0FBL0IsRUFBRUcsYUFBYSxHQUFJSCxHQUFZLEdBQWhCO0lBQ2hDLElBQU1JLGFBQWEsR0FBRyxTQUFDQyxLQUFLO2VBQ3hCRixhQUFhLENBQUNELFVBQVUsS0FBS0csS0FBSyxHQUFHLEVBQUUsR0FBR0EsS0FBSyxDQUFDO0tBQUEsRUFDbERDLFFBQVEsR0FBRyxTQUFDRCxLQUFLO2VBQ2ZBLEtBQUssS0FBS0gsVUFBVSxHQUFHO1lBQUVLLE9BQU8sRUFBRSxPQUFPO1NBQUUsR0FBRztZQUFFQSxPQUFPLEVBQUUsTUFBTTtTQUFFO0tBQUE7SUFDckUscUJBQ0UsOERBQUNDLEtBQUc7UUFBQ0MsU0FBUyxFQUFDLDZCQUE2QjtrQkFDMUMsNEVBQUNDLElBQUU7OzhCQUNELDhEQUFDQyxJQUFFOztzQ0FDRCw4REFBQ0MsR0FBQzs0QkFBQ0MsSUFBSSxFQUFDLEdBQUc7NEJBQUNKLFNBQVMsRUFBQyxRQUFRO3NDQUFDLE1BRS9COzs7OztpQ0FBSTtzQ0FDSiw4REFBQ0MsSUFBRTs0QkFBQ0QsU0FBUyxFQUFDLEVBQUU7NEJBQUNLLEtBQUssRUFBRVIsUUFBUSxDQUFDLE1BQU0sQ0FBQzs7Ozs7aUNBQ25DO3NDQUNMLDhEQUFDUyxNQUFJOzRCQUFDTixTQUFTLEVBQUMsWUFBWTs0QkFBQ08sT0FBTyxFQUFFO3VDQUFNWixhQUFhLENBQUMsTUFBTSxDQUFDOzZCQUFBOzs7OztpQ0FFMUQ7Ozs7Ozt5QkFDSjs4QkFDTCw4REFBQ08sSUFBRTs4QkFDRCw0RUFBQ1osa0RBQUk7d0JBQUNjLElBQUksRUFBQyxRQUFRO2tDQUFDLE9BQUs7Ozs7OzZCQUFPOzs7Ozt5QkFDN0I7OEJBRUwsOERBQUNGLElBQUU7OEJBQ0QsNEVBQUNaLGtEQUFJO3dCQUFDYyxJQUFJLEVBQUMsb0JBQW9CO2tDQUFDLFFBQU07Ozs7OzZCQUFPOzs7Ozt5QkFDMUM7OEJBR0wsOERBQUNGLElBQUU7b0JBQUNGLFNBQVMsRUFBQyxZQUFZOzhCQUN4Qiw0RUFBQ1Ysa0RBQUk7d0JBQUNjLElBQUksRUFBQyxPQUFPO2tDQUFDLE1BQUk7Ozs7OzZCQUFPOzs7Ozt5QkFFM0I7Ozs7OztpQkFFRjs7Ozs7YUFDRCxDQUNOO0FBQ0osQ0FBQztHQXBDS1osWUFBWTtBQUFaQSxLQUFBQSxZQUFZO0FBcUNsQiwrREFBZUEsWUFBWSxFQUFDIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vX05fRS8uL3NyYy9sYXlvdXRzL01vYmlsZUhlYWRlci5qcz8yYmRjIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBMaW5rIGZyb20gXCJuZXh0L2xpbmtcIjtcclxuaW1wb3J0IHsgdXNlU3RhdGUgfSBmcm9tIFwicmVhY3RcIjtcclxuXHJcbmNvbnN0IE1vYmlsZUhlYWRlciA9ICgpID0+IHtcclxuICBjb25zdCBbYWN0aXZlTWVudSwgc2V0QWN0aXZlTWVudV0gPSB1c2VTdGF0ZShcIlwiKTtcclxuICBjb25zdCBhY3RpdmVNZW51U2V0ID0gKHZhbHVlKSA9PlxyXG4gICAgICBzZXRBY3RpdmVNZW51KGFjdGl2ZU1lbnUgPT09IHZhbHVlID8gXCJcIiA6IHZhbHVlKSxcclxuICAgIGFjdGl2ZUxpID0gKHZhbHVlKSA9PlxyXG4gICAgICB2YWx1ZSA9PT0gYWN0aXZlTWVudSA/IHsgZGlzcGxheTogXCJibG9ja1wiIH0gOiB7IGRpc3BsYXk6IFwibm9uZVwiIH07XHJcbiAgcmV0dXJuIChcclxuICAgIDxuYXYgY2xhc3NOYW1lPVwibWFpbi1tZW51IGQtYmxvY2sgZC14bC1ub25lXCI+XHJcbiAgICAgIDx1bD5cclxuICAgICAgICA8bGk+XHJcbiAgICAgICAgICA8YSBocmVmPVwiI1wiIGNsYXNzTmFtZT1cImFjdGl2ZVwiPlxyXG4gICAgICAgICAgICBIb21lXHJcbiAgICAgICAgICA8L2E+XHJcbiAgICAgICAgICA8dWwgY2xhc3NOYW1lPVwiXCIgc3R5bGU9e2FjdGl2ZUxpKFwiaG9tZVwiKX0+XHJcbiAgICAgICAgICA8L3VsPlxyXG4gICAgICAgICAgPHNwYW4gY2xhc3NOYW1lPVwiZGQtdHJpZ2dlclwiIG9uQ2xpY2s9eygpID0+IGFjdGl2ZU1lbnVTZXQoXCJob21lXCIpfT5cclxuICAgICAgICAgICAgXHJcbiAgICAgICAgICA8L3NwYW4+XHJcbiAgICAgICAgPC9saT5cclxuICAgICAgICA8bGk+XHJcbiAgICAgICAgICA8TGluayBocmVmPVwiL2Fib3V0XCI+QWJvdXQ8L0xpbms+XHJcbiAgICAgICAgPC9saT5cclxuXHJcbiAgICAgICAgPGxpPlxyXG4gICAgICAgICAgPExpbmsgaHJlZj1cIi9ib29rLXlvdXItd2VkZGluZ1wiPkV2ZW50czwvTGluaz5cclxuICAgICAgICA8L2xpPlxyXG4gICAgICAgIFxyXG4gICAgICAgIFxyXG4gICAgICAgIDxsaSBjbGFzc05hbWU9XCJtZW51LWl0ZW0gXCI+XHJcbiAgICAgICAgICA8TGluayBocmVmPVwiI2Jsb2dcIj5CbG9nPC9MaW5rPlxyXG4gICAgICAgICBcclxuICAgICAgICA8L2xpPlxyXG4gICAgICAgIFxyXG4gICAgICA8L3VsPlxyXG4gICAgPC9uYXY+XHJcbiAgKTtcclxufTtcclxuZXhwb3J0IGRlZmF1bHQgTW9iaWxlSGVhZGVyO1xyXG4iXSwibmFtZXMiOlsiTGluayIsInVzZVN0YXRlIiwiTW9iaWxlSGVhZGVyIiwiYWN0aXZlTWVudSIsInNldEFjdGl2ZU1lbnUiLCJhY3RpdmVNZW51U2V0IiwidmFsdWUiLCJhY3RpdmVMaSIsImRpc3BsYXkiLCJuYXYiLCJjbGFzc05hbWUiLCJ1bCIsImxpIiwiYSIsImhyZWYiLCJzdHlsZSIsInNwYW4iLCJvbkNsaWNrIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./src/layouts/MobileHeader.js\n"));

/***/ })

});