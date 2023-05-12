"use strict";
(() => {
var exports = {};
exports.id = 188;
exports.ids = [188];
exports.modules = {

/***/ 4711:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "default": () => (/* binding */ faqs)
});

// EXTERNAL MODULE: ../../../node_modules/react/jsx-runtime.js
var jsx_runtime = __webpack_require__(4512);
// EXTERNAL MODULE: external "react"
var external_react_ = __webpack_require__(6689);
;// CONCATENATED MODULE: ./src/components/OrgariumAcc.js
Object(function webpackMissingModule() { var e = new Error("Cannot find module 'react-bootstrap'"); e.code = 'MODULE_NOT_FOUND'; throw e; }());


const OrgariumAcc = ({ event , active , onClick , title  })=>{
    return /*#__PURE__*/ (0,jsx_runtime.jsxs)("div", {
        className: "card mb-20",
        children: [
            /*#__PURE__*/ jsx_runtime.jsx("div", {
                className: "card-header",
                children: /*#__PURE__*/ jsx_runtime.jsx(Object(function webpackMissingModule() { var e = new Error("Cannot find module 'react-bootstrap'"); e.code = 'MODULE_NOT_FOUND'; throw e; }()), {
                    as: "a",
                    eventKey: event,
                    className: "c-pointer",
                    "aria-expanded": active === event ? "true" : "false",
                    onClick: ()=>onClick(),
                    children: title
                })
            }),
            /*#__PURE__*/ jsx_runtime.jsx(Object(function webpackMissingModule() { var e = new Error("Cannot find module 'react-bootstrap'"); e.code = 'MODULE_NOT_FOUND'; throw e; }()), {
                eventKey: event,
                children: /*#__PURE__*/ jsx_runtime.jsx("div", {
                    className: "card-body",
                    children: /*#__PURE__*/ jsx_runtime.jsx("p", {
                        children: "Sed ut perspicia unde omnis natus voluptatem accusane tium doloremque laudantium totam rem aperiam eaquuaec abillo inventore veritatis quasi architecto beatae"
                    })
                })
            })
        ]
    });
};
/* harmony default export */ const components_OrgariumAcc = (OrgariumAcc);

// EXTERNAL MODULE: ./src/components/PageBanner.js
var PageBanner = __webpack_require__(1059);
// EXTERNAL MODULE: ./src/layouts/Layout.js + 7 modules
var Layout = __webpack_require__(2719);
// EXTERNAL MODULE: ./src/sliderProps.js
var sliderProps = __webpack_require__(1554);
;// CONCATENATED MODULE: ./pages/faqs.js
Object(function webpackMissingModule() { var e = new Error("Cannot find module 'react-bootstrap'"); e.code = 'MODULE_NOT_FOUND'; throw e; }());
Object(function webpackMissingModule() { var e = new Error("Cannot find module 'react-slick'"); e.code = 'MODULE_NOT_FOUND'; throw e; }());








const Faqs = ()=>{
    const faqsData = [
        {
            title: "  Statoscope Course Of Intensive Therapy For Your Bundle ?"
        },
        {
            title: "Using QR Codes In Your Business: Best Practices And Pitfalls ?"
        },
        ,
        {
            title: "Designing Better Links For Websites And Emails Guideline ?"
        },
        {
            title: "What Web Frameworks Solve And How To Do Without Them Part ?"
        },
        {
            title: "Getting Started With CSS Cascade Layers ?"
        },
        {
            title: "What Web Frameworks Solve Vanilla Alternative ?"
        },
        {
            title: "What Web Frameworks Solve And How To Do Without Them Part ?"
        },
        {
            title: "Designing Better Links For Websites And Emails Guideline ?"
        },
        {
            title: "Getting Started With CSS Cascade Layers ?"
        },
        {
            title: "What Web Frameworks Solve Vanilla Alternative ?"
        }
    ];
    const [active, setActive] = (0,external_react_.useState)("collapse0");
    return /*#__PURE__*/ (0,jsx_runtime.jsxs)(Layout/* default */.Z, {
        children: [
            /*#__PURE__*/ jsx_runtime.jsx(PageBanner/* default */.Z, {
                pageName: "Faqs"
            }),
            /*#__PURE__*/ jsx_runtime.jsx("section", {
                className: "faq-section pt-170 pb-110",
                children: /*#__PURE__*/ (0,jsx_runtime.jsxs)("div", {
                    className: "container",
                    children: [
                        /*#__PURE__*/ jsx_runtime.jsx("div", {
                            className: "row justify-content-center",
                            children: /*#__PURE__*/ jsx_runtime.jsx("div", {
                                className: "col-xl-7 col-lg-10",
                                children: /*#__PURE__*/ (0,jsx_runtime.jsxs)("div", {
                                    className: "section-title text-center mb-70 wow fadeInUp",
                                    children: [
                                        /*#__PURE__*/ jsx_runtime.jsx("span", {
                                            className: "sub-title",
                                            children: "Asked Questions"
                                        }),
                                        /*#__PURE__*/ jsx_runtime.jsx("h2", {
                                            children: "Have Any Question On Minds! Asked Question"
                                        })
                                    ]
                                })
                            })
                        }),
                        /*#__PURE__*/ jsx_runtime.jsx("div", {
                            className: "row justify-content-center",
                            children: /*#__PURE__*/ jsx_runtime.jsx("div", {
                                className: "col-lg-11",
                                children: /*#__PURE__*/ jsx_runtime.jsx("div", {
                                    className: "faq-one_content-box wow fadeInDown",
                                    children: /*#__PURE__*/ jsx_runtime.jsx(Object(function webpackMissingModule() { var e = new Error("Cannot find module 'react-bootstrap'"); e.code = 'MODULE_NOT_FOUND'; throw e; }()), {
                                        defaultActiveKey: "collapse0",
                                        className: "accordion",
                                        id: "accordionOne",
                                        children: faqsData.map((faq, i)=>/*#__PURE__*/ jsx_runtime.jsx(components_OrgariumAcc, {
                                                title: faq.title,
                                                event: `collapse${i}`,
                                                onClick: ()=>setActive(`collapse${i}`),
                                                active: active
                                            }, i))
                                    })
                                })
                            })
                        })
                    ]
                })
            }),
            /*#__PURE__*/ (0,jsx_runtime.jsxs)("section", {
                className: "contact-two p-r z-1 pt-130",
                children: [
                    /*#__PURE__*/ jsx_runtime.jsx("div", {
                        className: "contact-bg bg_cover",
                        style: {
                            backgroundImage: "url(assets/images/contact/img-2.jpg)"
                        }
                    }),
                    /*#__PURE__*/ jsx_runtime.jsx("div", {
                        className: "container",
                        children: /*#__PURE__*/ jsx_runtime.jsx("div", {
                            className: "row",
                            children: /*#__PURE__*/ jsx_runtime.jsx("div", {
                                className: "offset-lg-6 col-l-g-6",
                                children: /*#__PURE__*/ (0,jsx_runtime.jsxs)("div", {
                                    className: "contact-two_content-box p-r z-1 wow fadeInRight",
                                    children: [
                                        /*#__PURE__*/ (0,jsx_runtime.jsxs)("div", {
                                            className: "section-title mb-40",
                                            children: [
                                                /*#__PURE__*/ jsx_runtime.jsx("span", {
                                                    className: "sub-title",
                                                    children: "Get In Touch"
                                                }),
                                                /*#__PURE__*/ jsx_runtime.jsx("h2", {
                                                    children: "Need Oragnic Foods! Send Us Message"
                                                })
                                            ]
                                        }),
                                        /*#__PURE__*/ jsx_runtime.jsx("div", {
                                            className: "contact-form",
                                            children: /*#__PURE__*/ (0,jsx_runtime.jsxs)("form", {
                                                onSubmit: (e)=>e.preventDefault(),
                                                children: [
                                                    /*#__PURE__*/ jsx_runtime.jsx("div", {
                                                        className: "form_group",
                                                        children: /*#__PURE__*/ jsx_runtime.jsx("input", {
                                                            type: "text",
                                                            className: "form_control",
                                                            placeholder: "Full Name",
                                                            name: "name",
                                                            required: ""
                                                        })
                                                    }),
                                                    /*#__PURE__*/ jsx_runtime.jsx("div", {
                                                        className: "form_group",
                                                        children: /*#__PURE__*/ jsx_runtime.jsx("input", {
                                                            type: "email",
                                                            className: "form_control",
                                                            placeholder: "Email Address",
                                                            name: "email",
                                                            required: ""
                                                        })
                                                    }),
                                                    /*#__PURE__*/ jsx_runtime.jsx("div", {
                                                        className: "form_group",
                                                        children: /*#__PURE__*/ jsx_runtime.jsx("textarea", {
                                                            className: "form_control",
                                                            placeholder: "Write Message",
                                                            name: "message",
                                                            defaultValue: ""
                                                        })
                                                    }),
                                                    /*#__PURE__*/ jsx_runtime.jsx("div", {
                                                        className: "form_group",
                                                        children: /*#__PURE__*/ jsx_runtime.jsx("button", {
                                                            className: "main-btn btn-yellow",
                                                            children: "Send Us Message"
                                                        })
                                                    })
                                                ]
                                            })
                                        })
                                    ]
                                })
                            })
                        })
                    })
                ]
            }),
            /*#__PURE__*/ jsx_runtime.jsx("section", {
                className: "testimonial-four pt-130 pb-65",
                children: /*#__PURE__*/ (0,jsx_runtime.jsxs)("div", {
                    className: "container",
                    children: [
                        /*#__PURE__*/ jsx_runtime.jsx("div", {
                            className: "row justify-content-center",
                            children: /*#__PURE__*/ jsx_runtime.jsx("div", {
                                className: "col-lg-7",
                                children: /*#__PURE__*/ (0,jsx_runtime.jsxs)("div", {
                                    className: "section-title text-center mb-60 wow fadeInUp",
                                    children: [
                                        /*#__PURE__*/ jsx_runtime.jsx("span", {
                                            className: "sub-title",
                                            children: "Clients Feedback"
                                        }),
                                        /*#__PURE__*/ jsx_runtime.jsx("h2", {
                                            children: "What’s Our Clients Say About Our Organic Foods"
                                        })
                                    ]
                                })
                            })
                        }),
                        /*#__PURE__*/ (0,jsx_runtime.jsxs)(Object(function webpackMissingModule() { var e = new Error("Cannot find module 'react-slick'"); e.code = 'MODULE_NOT_FOUND'; throw e; }()), {
                            ...sliderProps/* testimonialSliderThree */.m4,
                            className: "testimonial-slider-three",
                            children: [
                                /*#__PURE__*/ (0,jsx_runtime.jsxs)("div", {
                                    className: "testimonial-item text-center wow fadeInDown",
                                    children: [
                                        /*#__PURE__*/ jsx_runtime.jsx("div", {
                                            className: "author-thumb",
                                            children: /*#__PURE__*/ jsx_runtime.jsx("img", {
                                                src: "assets/images/testimonial/img-1.jpg",
                                                alt: "author Image"
                                            })
                                        }),
                                        /*#__PURE__*/ (0,jsx_runtime.jsxs)("div", {
                                            className: "testimonial-content",
                                            children: [
                                                /*#__PURE__*/ (0,jsx_runtime.jsxs)("p", {
                                                    children: [
                                                        "“Sit amet consectetu escing elit sed do eiusmod tempor incididunt ut labore dolore magna aliqua. Quis ipsum suspendisse ultrices gravic darisus comoe”",
                                                        " "
                                                    ]
                                                }),
                                                /*#__PURE__*/ jsx_runtime.jsx("div", {
                                                    className: "quote",
                                                    children: /*#__PURE__*/ jsx_runtime.jsx("i", {
                                                        className: "fas fa-quote-right"
                                                    })
                                                }),
                                                /*#__PURE__*/ (0,jsx_runtime.jsxs)("div", {
                                                    className: "author-title",
                                                    children: [
                                                        /*#__PURE__*/ jsx_runtime.jsx("h4", {
                                                            children: "Michael R. Jordan"
                                                        }),
                                                        /*#__PURE__*/ jsx_runtime.jsx("p", {
                                                            className: "position",
                                                            children: "CEO & Founder"
                                                        })
                                                    ]
                                                })
                                            ]
                                        })
                                    ]
                                }),
                                /*#__PURE__*/ (0,jsx_runtime.jsxs)("div", {
                                    className: "testimonial-item text-center wow fadeInUp",
                                    children: [
                                        /*#__PURE__*/ jsx_runtime.jsx("div", {
                                            className: "author-thumb",
                                            children: /*#__PURE__*/ jsx_runtime.jsx("img", {
                                                src: "assets/images/testimonial/img-2.jpg",
                                                alt: "author Image"
                                            })
                                        }),
                                        /*#__PURE__*/ (0,jsx_runtime.jsxs)("div", {
                                            className: "testimonial-content",
                                            children: [
                                                /*#__PURE__*/ (0,jsx_runtime.jsxs)("p", {
                                                    children: [
                                                        "“Sit amet consectetu escing elit sed do eiusmod tempor incididunt ut labore dolore magna aliqua. Quis ipsum suspendisse ultrices gravic darisus comoe”",
                                                        " "
                                                    ]
                                                }),
                                                /*#__PURE__*/ jsx_runtime.jsx("div", {
                                                    className: "quote",
                                                    children: /*#__PURE__*/ jsx_runtime.jsx("i", {
                                                        className: "fas fa-quote-right"
                                                    })
                                                }),
                                                /*#__PURE__*/ (0,jsx_runtime.jsxs)("div", {
                                                    className: "author-title",
                                                    children: [
                                                        /*#__PURE__*/ jsx_runtime.jsx("h4", {
                                                            children: "Nathan A. Caswell"
                                                        }),
                                                        /*#__PURE__*/ jsx_runtime.jsx("p", {
                                                            className: "position",
                                                            children: "Senior Manager"
                                                        })
                                                    ]
                                                })
                                            ]
                                        })
                                    ]
                                }),
                                /*#__PURE__*/ (0,jsx_runtime.jsxs)("div", {
                                    className: "testimonial-item text-center wow fadeInDown",
                                    children: [
                                        /*#__PURE__*/ jsx_runtime.jsx("div", {
                                            className: "author-thumb",
                                            children: /*#__PURE__*/ jsx_runtime.jsx("img", {
                                                src: "assets/images/testimonial/img-3.jpg",
                                                alt: "author Image"
                                            })
                                        }),
                                        /*#__PURE__*/ (0,jsx_runtime.jsxs)("div", {
                                            className: "testimonial-content",
                                            children: [
                                                /*#__PURE__*/ (0,jsx_runtime.jsxs)("p", {
                                                    children: [
                                                        "“Sit amet consectetu escing elit sed do eiusmod tempor incididunt ut labore dolore magna aliqua. Quis ipsum suspendisse ultrices gravic darisus comoe”",
                                                        " "
                                                    ]
                                                }),
                                                /*#__PURE__*/ jsx_runtime.jsx("div", {
                                                    className: "quote",
                                                    children: /*#__PURE__*/ jsx_runtime.jsx("i", {
                                                        className: "fas fa-quote-right"
                                                    })
                                                }),
                                                /*#__PURE__*/ (0,jsx_runtime.jsxs)("div", {
                                                    className: "author-title",
                                                    children: [
                                                        /*#__PURE__*/ jsx_runtime.jsx("h4", {
                                                            children: "Somalia D. Silva"
                                                        }),
                                                        /*#__PURE__*/ jsx_runtime.jsx("p", {
                                                            className: "position",
                                                            children: "Business Manager"
                                                        })
                                                    ]
                                                })
                                            ]
                                        })
                                    ]
                                }),
                                /*#__PURE__*/ (0,jsx_runtime.jsxs)("div", {
                                    className: "testimonial-item text-center wow fadeInUp",
                                    children: [
                                        /*#__PURE__*/ jsx_runtime.jsx("div", {
                                            className: "author-thumb",
                                            children: /*#__PURE__*/ jsx_runtime.jsx("img", {
                                                src: "assets/images/testimonial/img-4.jpg",
                                                alt: "author Image"
                                            })
                                        }),
                                        /*#__PURE__*/ (0,jsx_runtime.jsxs)("div", {
                                            className: "testimonial-content",
                                            children: [
                                                /*#__PURE__*/ (0,jsx_runtime.jsxs)("p", {
                                                    children: [
                                                        "“Sit amet consectetu escing elit sed do eiusmod tempor incididunt ut labore dolore magna aliqua. Quis ipsum suspendisse ultrices gravic darisus comoe”",
                                                        " "
                                                    ]
                                                }),
                                                /*#__PURE__*/ jsx_runtime.jsx("div", {
                                                    className: "quote",
                                                    children: /*#__PURE__*/ jsx_runtime.jsx("i", {
                                                        className: "fas fa-quote-right"
                                                    })
                                                }),
                                                /*#__PURE__*/ (0,jsx_runtime.jsxs)("div", {
                                                    className: "author-title",
                                                    children: [
                                                        /*#__PURE__*/ jsx_runtime.jsx("h4", {
                                                            children: "Michael D. Slaughter"
                                                        }),
                                                        /*#__PURE__*/ jsx_runtime.jsx("p", {
                                                            className: "position",
                                                            children: "Web Developer"
                                                        })
                                                    ]
                                                })
                                            ]
                                        })
                                    ]
                                }),
                                /*#__PURE__*/ (0,jsx_runtime.jsxs)("div", {
                                    className: "testimonial-item text-center wow fadeInDown",
                                    children: [
                                        /*#__PURE__*/ jsx_runtime.jsx("div", {
                                            className: "author-thumb",
                                            children: /*#__PURE__*/ jsx_runtime.jsx("img", {
                                                src: "assets/images/testimonial/img-2.jpg",
                                                alt: "author Image"
                                            })
                                        }),
                                        /*#__PURE__*/ (0,jsx_runtime.jsxs)("div", {
                                            className: "testimonial-content",
                                            children: [
                                                /*#__PURE__*/ (0,jsx_runtime.jsxs)("p", {
                                                    children: [
                                                        "“Sit amet consectetu escing elit sed do eiusmod tempor incididunt ut labore dolore magna aliqua. Quis ipsum suspendisse ultrices gravic darisus comoe”",
                                                        " "
                                                    ]
                                                }),
                                                /*#__PURE__*/ jsx_runtime.jsx("div", {
                                                    className: "quote",
                                                    children: /*#__PURE__*/ jsx_runtime.jsx("i", {
                                                        className: "fas fa-quote-right"
                                                    })
                                                }),
                                                /*#__PURE__*/ (0,jsx_runtime.jsxs)("div", {
                                                    className: "author-title",
                                                    children: [
                                                        /*#__PURE__*/ jsx_runtime.jsx("h4", {
                                                            children: "Nathan A. Caswell"
                                                        }),
                                                        /*#__PURE__*/ jsx_runtime.jsx("p", {
                                                            className: "position",
                                                            children: "Senior Manager"
                                                        })
                                                    ]
                                                })
                                            ]
                                        })
                                    ]
                                })
                            ]
                        })
                    ]
                })
            })
        ]
    });
};
/* harmony default export */ const faqs = (Faqs);


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
var __webpack_exports__ = __webpack_require__.X(0, [253,857,719,59,554], () => (__webpack_exec__(4711)));
module.exports = __webpack_exports__;

})();