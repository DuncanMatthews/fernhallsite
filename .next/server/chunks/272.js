"use strict";
exports.id = 272;
exports.ids = [272];
exports.modules = {

/***/ 8272:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(4512);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(6689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
Object(function webpackMissingModule() { var e = new Error("Cannot find module 'react-slick'"); e.code = 'MODULE_NOT_FOUND'; throw e; }());



const TestimonialSlider = ()=>{
    const [nav1, setNav1] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(null);
    const [nav2, setNav2] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(null);
    const [slider1, setSlider1] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(null);
    const [slider2, setSlider2] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(null);
    (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(()=>{
        setNav1(slider1);
        setNav2(slider2);
    });
    const thumbs = {
        dots: false,
        autoplay: true,
        speed: 200,
        speed: 500,
        arrows: false,
        focusOnSelect: true,
        slidesToShow: 3,
        slidesToScroll: 1,
        responsive: [
            {
                breakpoint: 800,
                settings: {
                    arrows: false,
                    slidesToShow: 3
                }
            }
        ]
    };
    const slider = {
        arrows: false,
        dots: false,
        infinite: false,
        autoplay: true,
        speed: 500,
        fade: true,
        slidesToShow: 1,
        slidesToScroll: 1
    };
    return /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
        className: "rooms-container",
        children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
            className: "row justify-content-center",
            children: [
                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                    className: "col-lg-7",
                    children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(Object(function webpackMissingModule() { var e = new Error("Cannot find module 'react-slick'"); e.code = 'MODULE_NOT_FOUND'; throw e; }()), {
                        ...thumbs,
                        asNavFor: nav2,
                        ref: (slider)=>setSlider1(slider),
                        className: "",
                        children: [
                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                className: "testimonial-item-1",
                                children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                    className: "_p03egf",
                                    "aria-hidden": "true",
                                    children: [
                                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                            className: "item-wrap",
                                            children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("span", {
                                                className: "_nvr5q",
                                                children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("svg", {
                                                    viewBox: "0 0 32 32",
                                                    xmlns: "http://www.w3.org/2000/svg",
                                                    "aria-hidden": "true",
                                                    role: "presentation",
                                                    focusable: "false",
                                                    style: {
                                                        display: "block",
                                                        height: "24px",
                                                        width: "24px",
                                                        fill: "currentcolor"
                                                    },
                                                    children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("path", {
                                                        d: "M28 2a2 2 0 0 1 1.995 1.85L30 4l-.001 9.836 1.847 5.54a3 3 0 0 1 .115.468l.03.24.009.24V30h-2v-2H2v2H0v-9.675a3 3 0 0 1 .087-.717l.067-.232 1.845-5.537L2 4a2 2 0 0 1 1.697-1.977l.154-.018L4 2zm1.999 20H2l-.001 3.999h28zm-1.387-6H3.387l-1.333 4h27.891zM28 4H4l-.001 10H6v-4a2 2 0 0 1 1.85-1.995L8 8h16a2 2 0 0 1 1.995 1.85L26 10v4h1.999zm-13 6H8v4h7zm9 0h-7v4h7z"
                                                    })
                                                })
                                            })
                                        }),
                                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                            className: "_1auxwog",
                                            children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("span", {
                                                children: "Bedroom 1"
                                            })
                                        }),
                                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                            className: "_1a5glfg",
                                            children: "2 king bed"
                                        })
                                    ]
                                })
                            }),
                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                className: "testimonial-item-1",
                                children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                    className: "_p03egf",
                                    "aria-hidden": "true",
                                    children: [
                                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                            className: "item-wrap",
                                            children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("span", {
                                                className: "_nvr5q",
                                                children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("svg", {
                                                    viewBox: "0 0 32 32",
                                                    xmlns: "http://www.w3.org/2000/svg",
                                                    "aria-hidden": "true",
                                                    role: "presentation",
                                                    focusable: "false",
                                                    style: {
                                                        display: "block",
                                                        height: "24px",
                                                        width: "24px",
                                                        fill: "currentcolor"
                                                    },
                                                    children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("path", {
                                                        d: "M28 2a2 2 0 0 1 1.995 1.85L30 4l-.001 9.836 1.847 5.54a3 3 0 0 1 .115.468l.03.24.009.24V30h-2v-2H2v2H0v-9.675a3 3 0 0 1 .087-.717l.067-.232 1.845-5.537L2 4a2 2 0 0 1 1.697-1.977l.154-.018L4 2zm1.999 20H2l-.001 3.999h28zm-1.387-6H3.387l-1.333 4h27.891zM28 4H4l-.001 10H6v-4a2 2 0 0 1 1.85-1.995L8 8h16a2 2 0 0 1 1.995 1.85L26 10v4h1.999zm-13 6H8v4h7zm9 0h-7v4h7z"
                                                    })
                                                })
                                            })
                                        }),
                                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                            className: "_1auxwog",
                                            children: "Bedroom 2"
                                        }),
                                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                            className: "_1a5glfg",
                                            children: "1 king bed"
                                        })
                                    ]
                                })
                            }),
                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                className: "testimonial-item-1",
                                children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                    className: "_p03egf",
                                    "aria-hidden": "true",
                                    children: [
                                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                            className: "item-wrap",
                                            children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("span", {
                                                className: "_nvr5q",
                                                children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("svg", {
                                                    viewBox: "0 0 32 32",
                                                    xmlns: "http://www.w3.org/2000/svg",
                                                    "aria-hidden": "true",
                                                    role: "presentation",
                                                    focusable: "false",
                                                    style: {
                                                        display: "block",
                                                        height: "24px",
                                                        width: "24px",
                                                        fill: "currentcolor"
                                                    },
                                                    children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("path", {
                                                        d: "M28 2a2 2 0 0 1 1.995 1.85L30 4l-.001 9.836 1.847 5.54a3 3 0 0 1 .115.468l.03.24.009.24V30h-2v-2H2v2H0v-9.675a3 3 0 0 1 .087-.717l.067-.232 1.845-5.537L2 4a2 2 0 0 1 1.697-1.977l.154-.018L4 2zm1.999 20H2l-.001 3.999h28zm-1.387-6H3.387l-1.333 4h27.891zM28 4H4l-.001 10H6v-4a2 2 0 0 1 1.85-1.995L8 8h16a2 2 0 0 1 1.995 1.85L26 10v4h1.999zm-13 6H8v4h7zm9 0h-7v4h7z"
                                                    })
                                                })
                                            })
                                        }),
                                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                            className: "_1auxwog",
                                            children: "Bedroom 3"
                                        }),
                                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                            className: "_1a5glfg",
                                            children: "1 king, 1 single"
                                        })
                                    ]
                                })
                            }),
                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                className: "testimonial-item-1",
                                children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                    className: "_p03egf",
                                    "aria-hidden": "true",
                                    children: [
                                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                            className: "item-wrap",
                                            children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("span", {
                                                className: "_nvr5q",
                                                children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("svg", {
                                                    viewBox: "0 0 32 32",
                                                    xmlns: "http://www.w3.org/2000/svg",
                                                    "aria-hidden": "true",
                                                    role: "presentation",
                                                    focusable: "false",
                                                    style: {
                                                        display: "block",
                                                        height: "24px",
                                                        width: "24px",
                                                        fill: "currentcolor"
                                                    },
                                                    children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("path", {
                                                        d: "M28 2a2 2 0 0 1 1.995 1.85L30 4l-.001 9.836 1.847 5.54a3 3 0 0 1 .115.468l.03.24.009.24V30h-2v-2H2v2H0v-9.675a3 3 0 0 1 .087-.717l.067-.232 1.845-5.537L2 4a2 2 0 0 1 1.697-1.977l.154-.018L4 2zm1.999 20H2l-.001 3.999h28zm-1.387-6H3.387l-1.333 4h27.891zM28 4H4l-.001 10H6v-4a2 2 0 0 1 1.85-1.995L8 8h16a2 2 0 0 1 1.995 1.85L26 10v4h1.999zm-13 6H8v4h7zm9 0h-7v4h7z"
                                                    })
                                                })
                                            })
                                        }),
                                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                            className: "_1auxwog",
                                            children: "Bedroom 4"
                                        }),
                                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                            className: "_1a5glfg",
                                            children: "1 king, 1 single"
                                        })
                                    ]
                                })
                            }),
                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                className: "testimonial-item-1",
                                children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                    className: "_p03egf",
                                    "aria-hidden": "true",
                                    children: [
                                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                            className: "item-wrap",
                                            children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("span", {
                                                className: "_nvr5q",
                                                children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("svg", {
                                                    viewBox: "0 0 32 32",
                                                    xmlns: "http://www.w3.org/2000/svg",
                                                    "aria-hidden": "true",
                                                    role: "presentation",
                                                    focusable: "false",
                                                    style: {
                                                        display: "block",
                                                        height: "24px",
                                                        width: "24px",
                                                        fill: "currentcolor"
                                                    },
                                                    children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("path", {
                                                        d: "M28 2a2 2 0 0 1 1.995 1.85L30 4l-.001 9.836 1.847 5.54a3 3 0 0 1 .115.468l.03.24.009.24V30h-2v-2H2v2H0v-9.675a3 3 0 0 1 .087-.717l.067-.232 1.845-5.537L2 4a2 2 0 0 1 1.697-1.977l.154-.018L4 2zm1.999 20H2l-.001 3.999h28zm-1.387-6H3.387l-1.333 4h27.891zM28 4H4l-.001 10H6v-4a2 2 0 0 1 1.85-1.995L8 8h16a2 2 0 0 1 1.995 1.85L26 10v4h1.999zm-13 6H8v4h7zm9 0h-7v4h7z"
                                                    })
                                                })
                                            })
                                        }),
                                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                            className: "_1auxwog",
                                            children: "Bedroom 5"
                                        }),
                                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                            className: "_1a5glfg",
                                            children: "1 king, 1 single"
                                        })
                                    ]
                                })
                            }),
                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                className: "testimonial-item-1",
                                children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                    className: "_p03egf",
                                    "aria-hidden": "true",
                                    children: [
                                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                            className: "item-wrap",
                                            children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("span", {
                                                className: "_nvr5q",
                                                children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("svg", {
                                                    viewBox: "0 0 32 32",
                                                    xmlns: "http://www.w3.org/2000/svg",
                                                    "aria-hidden": "true",
                                                    role: "presentation",
                                                    focusable: "false",
                                                    style: {
                                                        display: "block",
                                                        height: "24px",
                                                        width: "24px",
                                                        fill: "currentcolor"
                                                    },
                                                    children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("path", {
                                                        d: "M28 2a2 2 0 0 1 1.995 1.85L30 4l-.001 9.836 1.847 5.54a3 3 0 0 1 .115.468l.03.24.009.24V30h-2v-2H2v2H0v-9.675a3 3 0 0 1 .087-.717l.067-.232 1.845-5.537L2 4a2 2 0 0 1 1.697-1.977l.154-.018L4 2zm1.999 20H2l-.001 3.999h28zm-1.387-6H3.387l-1.333 4h27.891zM28 4H4l-.001 10H6v-4a2 2 0 0 1 1.85-1.995L8 8h16a2 2 0 0 1 1.995 1.85L26 10v4h1.999zm-13 6H8v4h7zm9 0h-7v4h7z"
                                                    })
                                                })
                                            })
                                        }),
                                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                            className: "_1auxwog",
                                            children: "Bedroom 6"
                                        }),
                                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                            className: "_1a5glfg",
                                            children: "1 Double Bed"
                                        })
                                    ]
                                })
                            }),
                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                className: "testimonial-item-1",
                                children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                    className: "_p03egf",
                                    "aria-hidden": "true",
                                    children: [
                                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                            className: "item-wrap",
                                            children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("span", {
                                                className: "_nvr5q",
                                                children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("svg", {
                                                    viewBox: "0 0 32 32",
                                                    xmlns: "http://www.w3.org/2000/svg",
                                                    "aria-hidden": "true",
                                                    role: "presentation",
                                                    focusable: "false",
                                                    style: {
                                                        display: "block",
                                                        height: "24px",
                                                        width: "24px",
                                                        fill: "currentcolor"
                                                    },
                                                    children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("path", {
                                                        d: "M28 2a2 2 0 0 1 1.995 1.85L30 4l-.001 9.836 1.847 5.54a3 3 0 0 1 .115.468l.03.24.009.24V30h-2v-2H2v2H0v-9.675a3 3 0 0 1 .087-.717l.067-.232 1.845-5.537L2 4a2 2 0 0 1 1.697-1.977l.154-.018L4 2zm1.999 20H2l-.001 3.999h28zm-1.387-6H3.387l-1.333 4h27.891zM28 4H4l-.001 10H6v-4a2 2 0 0 1 1.85-1.995L8 8h16a2 2 0 0 1 1.995 1.85L26 10v4h1.999zm-13 6H8v4h7zm9 0h-7v4h7z"
                                                    })
                                                })
                                            })
                                        }),
                                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                            className: "_1auxwog",
                                            children: "Bedroom 7"
                                        }),
                                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                            className: "_1a5glfg",
                                            children: "2 Double Bed"
                                        })
                                    ]
                                })
                            }),
                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                className: "testimonial-item-1",
                                children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                    className: "_p03egf",
                                    "aria-hidden": "true",
                                    children: [
                                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                            className: "item-wrap",
                                            children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("span", {
                                                className: "_nvr5q",
                                                children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("svg", {
                                                    viewBox: "0 0 32 32",
                                                    xmlns: "http://www.w3.org/2000/svg",
                                                    "aria-hidden": "true",
                                                    role: "presentation",
                                                    focusable: "false",
                                                    style: {
                                                        display: "block",
                                                        height: "24px",
                                                        width: "24px",
                                                        fill: "currentcolor"
                                                    },
                                                    children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("path", {
                                                        d: "M28 2a2 2 0 0 1 1.995 1.85L30 4l-.001 9.836 1.847 5.54a3 3 0 0 1 .115.468l.03.24.009.24V30h-2v-2H2v2H0v-9.675a3 3 0 0 1 .087-.717l.067-.232 1.845-5.537L2 4a2 2 0 0 1 1.697-1.977l.154-.018L4 2zm1.999 20H2l-.001 3.999h28zm-1.387-6H3.387l-1.333 4h27.891zM28 4H4l-.001 10H6v-4a2 2 0 0 1 1.85-1.995L8 8h16a2 2 0 0 1 1.995 1.85L26 10v4h1.999zm-13 6H8v4h7zm9 0h-7v4h7z"
                                                    })
                                                })
                                            })
                                        }),
                                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                            className: "_1auxwog",
                                            children: "Bedroom 8"
                                        }),
                                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                            className: "_1a5glfg",
                                            children: "2 Queen Bed"
                                        })
                                    ]
                                })
                            }),
                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                className: "testimonial-item-1",
                                children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                    className: "_p03egf",
                                    "aria-hidden": "true",
                                    children: [
                                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                            className: "item-wrap",
                                            children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("span", {
                                                className: "_nvr5q",
                                                children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("svg", {
                                                    viewBox: "0 0 32 32",
                                                    xmlns: "http://www.w3.org/2000/svg",
                                                    "aria-hidden": "true",
                                                    role: "presentation",
                                                    focusable: "false",
                                                    style: {
                                                        display: "block",
                                                        height: "24px",
                                                        width: "24px",
                                                        fill: "currentcolor"
                                                    },
                                                    children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("path", {
                                                        d: "M28 2a2 2 0 0 1 1.995 1.85L30 4l-.001 9.836 1.847 5.54a3 3 0 0 1 .115.468l.03.24.009.24V30h-2v-2H2v2H0v-9.675a3 3 0 0 1 .087-.717l.067-.232 1.845-5.537L2 4a2 2 0 0 1 1.697-1.977l.154-.018L4 2zm1.999 20H2l-.001 3.999h28zm-1.387-6H3.387l-1.333 4h27.891zM28 4H4l-.001 10H6v-4a2 2 0 0 1 1.85-1.995L8 8h16a2 2 0 0 1 1.995 1.85L26 10v4h1.999zm-13 6H8v4h7zm9 0h-7v4h7z"
                                                    })
                                                })
                                            })
                                        }),
                                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                            className: "_1auxwog",
                                            children: "Bedroom 7"
                                        }),
                                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                            className: "_1a5glfg",
                                            children: "1 Double Bed"
                                        })
                                    ]
                                })
                            })
                        ]
                    })
                }),
                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                    className: "col-lg-9",
                    children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(Object(function webpackMissingModule() { var e = new Error("Cannot find module 'react-slick'"); e.code = 'MODULE_NOT_FOUND'; throw e; }()), {
                        ...slider,
                        asNavFor: nav1,
                        ref: (slider)=>setSlider2(slider),
                        className: "testimonial-slider-four wow fadeInDown"
                    })
                })
            ]
        })
    });
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (TestimonialSlider);


/***/ })

};
;