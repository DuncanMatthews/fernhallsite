(() => {
var exports = {};
exports.id = 888;
exports.ids = [888];
exports.modules = {

/***/ 4919:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "default": () => (/* binding */ _app)
});

// EXTERNAL MODULE: ../../../node_modules/react/jsx-runtime.js
var jsx_runtime = __webpack_require__(4512);
// EXTERNAL MODULE: ../../../../../opt/homebrew/lib/node_modules/next/head.js
var head = __webpack_require__(1182);
var head_default = /*#__PURE__*/__webpack_require__.n(head);
// EXTERNAL MODULE: external "react"
var external_react_ = __webpack_require__(6689);
;// CONCATENATED MODULE: ./src/layouts/PreLoader.js

const PreLoader = ()=>{
    return /*#__PURE__*/ jsx_runtime.jsx("div", {
        className: "preloader",
        children: /*#__PURE__*/ (0,jsx_runtime.jsxs)("div", {
            className: "loader",
            children: [
                /*#__PURE__*/ jsx_runtime.jsx("div", {
                    className: "pre-shadow"
                }),
                /*#__PURE__*/ jsx_runtime.jsx("div", {
                    className: "pre-box"
                })
            ]
        })
    });
};
/* harmony default export */ const layouts_PreLoader = (PreLoader);

// EXTERNAL MODULE: ./styles/globals.css
var globals = __webpack_require__(7910);
;// CONCATENATED MODULE: ./pages/_app.js





function MyApp({ Component , pageProps  }) {
    const [loader, setLoader] = (0,external_react_.useState)(true);
    (0,external_react_.useEffect)(()=>{
        setTimeout(()=>{
            setLoader(false);
        }, 1000);
    }, []);
    return /*#__PURE__*/ (0,jsx_runtime.jsxs)(external_react_.Fragment, {
        children: [
            /*#__PURE__*/ (0,jsx_runtime.jsxs)((head_default()), {
                children: [
                    /*#__PURE__*/ jsx_runtime.jsx("title", {
                        children: "Orgarium - Agriculture Farming React Template"
                    }),
                    /*#__PURE__*/ jsx_runtime.jsx("link", {
                        rel: "shortcut icon",
                        href: "assets/images/favicon.ico",
                        type: "image/png"
                    }),
                    /*#__PURE__*/ jsx_runtime.jsx("link", {
                        rel: "stylesheet",
                        href: "/assets/fonts/fontawesome/css/all.min.css"
                    }),
                    /*#__PURE__*/ jsx_runtime.jsx("link", {
                        rel: "/stylesheet",
                        href: "assets/fonts/flaticon/flaticon.css"
                    }),
                    /*#__PURE__*/ jsx_runtime.jsx("link", {
                        rel: "stylesheet",
                        href: "/assets/vendor/bootstrap/css/bootstrap.min.css"
                    }),
                    /*#__PURE__*/ jsx_runtime.jsx("link", {
                        rel: "stylesheet",
                        href: "/assets/vendor/magnific-popup/dist/magnific-popup.css"
                    }),
                    /*#__PURE__*/ jsx_runtime.jsx("link", {
                        rel: "stylesheet",
                        href: "/assets/vendor/slick/slick.css"
                    }),
                    /*#__PURE__*/ jsx_runtime.jsx("link", {
                        rel: "stylesheet",
                        href: "/assets/vendor/nice-select/css/nice-select.css"
                    }),
                    /*#__PURE__*/ jsx_runtime.jsx("link", {
                        rel: "stylesheet",
                        href: "/assets/vendor/animate.css"
                    }),
                    /*#__PURE__*/ jsx_runtime.jsx("link", {
                        rel: "stylesheet",
                        href: "/assets/css/default.css"
                    }),
                    /*#__PURE__*/ jsx_runtime.jsx("link", {
                        rel: "stylesheet",
                        href: "/assets/css/style.css"
                    })
                ]
            }),
            loader && /*#__PURE__*/ jsx_runtime.jsx(layouts_PreLoader, {}),
            /*#__PURE__*/ jsx_runtime.jsx(Component, {
                ...pageProps
            })
        ]
    });
}
/* harmony default export */ const _app = (MyApp);


/***/ }),

/***/ 7910:
/***/ (() => {



/***/ }),

/***/ 1182:
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__(133)


/***/ }),

/***/ 3918:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/amp-context.js");

/***/ }),

/***/ 5732:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/amp-mode.js");

/***/ }),

/***/ 2796:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/head-manager-context.js");

/***/ }),

/***/ 2470:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/side-effect.js");

/***/ }),

/***/ 618:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/utils/warn-once.js");

/***/ }),

/***/ 6689:
/***/ ((module) => {

"use strict";
module.exports = require("react");

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../webpack-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = __webpack_require__.X(0, [253,133], () => (__webpack_exec__(4919)));
module.exports = __webpack_exports__;

})();