"use strict";
(() => {
var exports = {};
exports.id = 521;
exports.ids = [521];
exports.modules = {

/***/ 8594:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "default": () => (/* binding */ about)
});

// EXTERNAL MODULE: ../../../node_modules/react/jsx-runtime.js
var jsx_runtime = __webpack_require__(4512);
// EXTERNAL MODULE: ../../../../../opt/homebrew/lib/node_modules/next/link.js
var next_link = __webpack_require__(857);
var link_default = /*#__PURE__*/__webpack_require__.n(next_link);
// EXTERNAL MODULE: ./src/components/PageBanner.js
var PageBanner = __webpack_require__(1059);
;// CONCATENATED MODULE: ./src/components/ProgressBar.js
Object(function webpackMissingModule() { var e = new Error("Cannot find module 'react-circular-progressbar'"); e.code = 'MODULE_NOT_FOUND'; throw e; }());


const ProgressBar = ({ value , color , extraCls  })=>{
    return /*#__PURE__*/ _jsxs("div", {
        className: `chart-circle ${extraCls ? extraCls : "one"}`,
        style: {
            width: 120,
            height: 120
        },
        children: [
            /*#__PURE__*/ _jsx(Object(function webpackMissingModule() { var e = new Error("Cannot find module 'react-circular-progressbar'"); e.code = 'MODULE_NOT_FOUND'; throw e; }()), {
                width: 120,
                value: value,
                strokeWidth: 4,
                styles: Object(function webpackMissingModule() { var e = new Error("Cannot find module 'react-circular-progressbar'"); e.code = 'MODULE_NOT_FOUND'; throw e; }())({
                    pathColor: color,
                    trailColor: "rgba(255, 255, 255, 0.149)"
                })
            }),
            " ",
            /*#__PURE__*/ _jsxs("h2", {
                className: "number",
                children: [
                    value,
                    /*#__PURE__*/ _jsx("span", {
                        className: "sign",
                        children: "%"
                    })
                ]
            })
        ]
    });
};
/* harmony default export */ const components_ProgressBar = ((/* unused pure expression or super */ null && (ProgressBar)));

// EXTERNAL MODULE: ./src/layouts/Layout.js + 7 modules
var Layout = __webpack_require__(2719);
// EXTERNAL MODULE: ./src/sliderProps.js
var sliderProps = __webpack_require__(1554);
;// CONCATENATED MODULE: ./pages/about.js






const About = ()=>{
    return /*#__PURE__*/ (0,jsx_runtime.jsxs)(Layout/* default */.Z, {
        children: [
            /*#__PURE__*/ jsx_runtime.jsx(PageBanner/* default */.Z, {
                pageName: "About Us"
            }),
            /*#__PURE__*/ jsx_runtime.jsx("section", {
                className: "about-section p-r z-1 pt-170 pb-80",
                children: /*#__PURE__*/ jsx_runtime.jsx("div", {
                    className: "container",
                    children: /*#__PURE__*/ (0,jsx_runtime.jsxs)("div", {
                        className: "row",
                        children: [
                            /*#__PURE__*/ jsx_runtime.jsx("div", {
                                className: "col-lg-6",
                                children: /*#__PURE__*/ (0,jsx_runtime.jsxs)("div", {
                                    className: "about-content-box content-box-gap mb-50",
                                    children: [
                                        /*#__PURE__*/ (0,jsx_runtime.jsxs)("div", {
                                            className: "section-title section-title-left wow fadeInUp mb-30",
                                            children: [
                                                /*#__PURE__*/ jsx_runtime.jsx("span", {
                                                    className: "sub-title",
                                                    children: "About Us"
                                                }),
                                                /*#__PURE__*/ jsx_runtime.jsx("h2", {
                                                    children: "A historic stone house and sheep farm  & located in Clifford, Pennsylvanias"
                                                })
                                            ]
                                        }),
                                        /*#__PURE__*/ jsx_runtime.jsx("p", {
                                            children: "Originally built in 1916 by James Wood Johnson, Fern Hall Estate boasts over 100 acres of private estate living, including a pure spring-fed lake and stunning mountain scener"
                                        }),
                                        /*#__PURE__*/ (0,jsx_runtime.jsxs)("div", {
                                            className: "choose-item-list wow fadeInDown",
                                            children: [
                                                /*#__PURE__*/ jsx_runtime.jsx("div", {
                                                    className: "single-choose-item mb-30",
                                                    children: /*#__PURE__*/ (0,jsx_runtime.jsxs)("div", {
                                                        className: "text",
                                                        children: [
                                                            /*#__PURE__*/ jsx_runtime.jsx("h5", {
                                                                children: "Stunning Wedding Venue"
                                                            }),
                                                            /*#__PURE__*/ (0,jsx_runtime.jsxs)("p", {
                                                                children: [
                                                                    "Fern Hall Estate offers a stunning, historic setting for your wedding day, with picturesque views of the Endless Mountains and a private, spring-fed lake.",
                                                                    " "
                                                                ]
                                                            })
                                                        ]
                                                    })
                                                }),
                                                /*#__PURE__*/ jsx_runtime.jsx("div", {
                                                    className: "single-choose-item mb-30",
                                                    children: /*#__PURE__*/ (0,jsx_runtime.jsxs)("div", {
                                                        className: "text",
                                                        children: [
                                                            /*#__PURE__*/ jsx_runtime.jsx("h5", {
                                                                children: "Historic Countryside Retreat."
                                                            }),
                                                            /*#__PURE__*/ (0,jsx_runtime.jsxs)("p", {
                                                                children: [
                                                                    "Escape to Fern Hall Estate for a luxurious retreat in the heart of the Pennsylvania countryside. With a private spring-fed lake, mountain scenery, hiking trails, and eagles soaring overhead, you'll have 10 acres of serene privacy to explore and enjoy.",
                                                                    " "
                                                                ]
                                                            })
                                                        ]
                                                    })
                                                })
                                            ]
                                        }),
                                        /*#__PURE__*/ jsx_runtime.jsx("div", {
                                            className: "about-button wow fadeInUp",
                                            children: /*#__PURE__*/ jsx_runtime.jsx((link_default()), {
                                                href: "/about",
                                                children: /*#__PURE__*/ jsx_runtime.jsx("a", {
                                                    className: "main-btn btn-yellow",
                                                    children: "Contact Us"
                                                })
                                            })
                                        })
                                    ]
                                })
                            }),
                            /*#__PURE__*/ jsx_runtime.jsx("div", {
                                className: "col-lg-6",
                                children: /*#__PURE__*/ (0,jsx_runtime.jsxs)("div", {
                                    className: "about-four_image-box text-right p-r mb-50 wow fadeInRight",
                                    children: [
                                        /*#__PURE__*/ jsx_runtime.jsx("img", {
                                            src: "/assets/images/about/4.jpg",
                                            className: "about-img_one",
                                            alt: ""
                                        }),
                                        /*#__PURE__*/ jsx_runtime.jsx("img", {
                                            src: "public/assets/images/about/5.jpg",
                                            className: "about-img_two",
                                            alt: ""
                                        })
                                    ]
                                })
                            })
                        ]
                    })
                })
            })
        ]
    });
};
/* harmony default export */ const about = (About);


/***/ }),

/***/ 3280:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/app-router-context.js");

/***/ }),

/***/ 4964:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router-context.js");

/***/ }),

/***/ 1751:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router/utils/add-path-prefix.js");

/***/ }),

/***/ 3938:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router/utils/format-url.js");

/***/ }),

/***/ 1109:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router/utils/is-local-url.js");

/***/ }),

/***/ 8854:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router/utils/parse-path.js");

/***/ }),

/***/ 3297:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router/utils/remove-trailing-slash.js");

/***/ }),

/***/ 7782:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router/utils/resolve-href.js");

/***/ }),

/***/ 9232:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/utils.js");

/***/ }),

/***/ 6689:
/***/ ((module) => {

module.exports = require("react");

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../webpack-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = __webpack_require__.X(0, [253,857,719,59,554], () => (__webpack_exec__(8594)));
module.exports = __webpack_exports__;

})();