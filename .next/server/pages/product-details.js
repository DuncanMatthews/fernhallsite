"use strict";
(() => {
var exports = {};
exports.id = 344;
exports.ids = [344];
exports.modules = {

/***/ 3626:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "default": () => (/* binding */ product_details)
});

// EXTERNAL MODULE: ../../../node_modules/react/jsx-runtime.js
var jsx_runtime = __webpack_require__(4512);
// EXTERNAL MODULE: ../../../../../opt/homebrew/lib/node_modules/next/link.js
var next_link = __webpack_require__(857);
var link_default = /*#__PURE__*/__webpack_require__.n(next_link);
// EXTERNAL MODULE: ./src/components/PageBanner.js
var PageBanner = __webpack_require__(1059);
// EXTERNAL MODULE: external "react"
var external_react_ = __webpack_require__(6689);
;// CONCATENATED MODULE: ./src/components/sliders/ProductDetailsSlider.js
Object(function webpackMissingModule() { var e = new Error("Cannot find module 'react-slick'"); e.code = 'MODULE_NOT_FOUND'; throw e; }());



const ProductDetailsSlider = ()=>{
    const [nav1, setNav1] = (0,external_react_.useState)(null);
    const [nav2, setNav2] = (0,external_react_.useState)(null);
    const [slider1, setSlider1] = (0,external_react_.useState)(null);
    const [slider2, setSlider2] = (0,external_react_.useState)(null);
    (0,external_react_.useEffect)(()=>{
        setNav1(slider1);
        setNav2(slider2);
    });
    const thumbs = {
        dots: false,
        arrows: false,
        speed: 800,
        autoplay: true,
        focusOnSelect: true,
        slidesToShow: 3,
        slidesToScroll: 1
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
    return /*#__PURE__*/ (0,jsx_runtime.jsxs)("div", {
        className: "product-gallery-area mb-50",
        children: [
            /*#__PURE__*/ (0,jsx_runtime.jsxs)(Object(function webpackMissingModule() { var e = new Error("Cannot find module 'react-slick'"); e.code = 'MODULE_NOT_FOUND'; throw e; }()), {
                ...slider,
                asNavFor: nav2,
                ref: (slider)=>setSlider1(slider),
                className: "product-big-slider mb-30",
                children: [
                    /*#__PURE__*/ jsx_runtime.jsx("div", {
                        className: "product-img",
                        children: /*#__PURE__*/ jsx_runtime.jsx("a", {
                            href: "assets/images/products/product-big-1.png",
                            className: "img-popup",
                            children: /*#__PURE__*/ jsx_runtime.jsx("img", {
                                src: "assets/images/products/product-big-1.png",
                                alt: "Product"
                            })
                        })
                    }),
                    /*#__PURE__*/ jsx_runtime.jsx("div", {
                        className: "product-img",
                        children: /*#__PURE__*/ jsx_runtime.jsx("a", {
                            href: "assets/images/products/product-big-2.png",
                            className: "img-popup",
                            children: /*#__PURE__*/ jsx_runtime.jsx("img", {
                                src: "assets/images/products/product-big-1.png",
                                alt: "Product"
                            })
                        })
                    }),
                    /*#__PURE__*/ jsx_runtime.jsx("div", {
                        className: "product-img",
                        children: /*#__PURE__*/ jsx_runtime.jsx("a", {
                            href: "assets/images/products/product-big-3.png",
                            className: "img-popup",
                            children: /*#__PURE__*/ jsx_runtime.jsx("img", {
                                src: "assets/images/products/product-big-3.png",
                                alt: "Product"
                            })
                        })
                    }),
                    /*#__PURE__*/ jsx_runtime.jsx("div", {
                        className: "product-img",
                        children: /*#__PURE__*/ jsx_runtime.jsx("a", {
                            href: "assets/images/products/product-big-2.png",
                            className: "img-popup",
                            children: /*#__PURE__*/ jsx_runtime.jsx("img", {
                                src: "assets/images/products/product-big-2.png",
                                alt: "Product"
                            })
                        })
                    })
                ]
            }),
            /*#__PURE__*/ (0,jsx_runtime.jsxs)(Object(function webpackMissingModule() { var e = new Error("Cannot find module 'react-slick'"); e.code = 'MODULE_NOT_FOUND'; throw e; }()), {
                ...thumbs,
                asNavFor: nav1,
                ref: (slider)=>setSlider2(slider),
                className: "product-thumb-slider",
                children: [
                    /*#__PURE__*/ jsx_runtime.jsx("div", {
                        className: "product-img",
                        children: /*#__PURE__*/ jsx_runtime.jsx("img", {
                            src: "assets/images/products/product-thumb-1.jpg",
                            alt: "Product"
                        })
                    }),
                    /*#__PURE__*/ jsx_runtime.jsx("div", {
                        className: "product-img",
                        children: /*#__PURE__*/ jsx_runtime.jsx("img", {
                            src: "assets/images/products/product-thumb-2.jpg",
                            alt: "Product"
                        })
                    }),
                    /*#__PURE__*/ jsx_runtime.jsx("div", {
                        className: "product-img",
                        children: /*#__PURE__*/ jsx_runtime.jsx("img", {
                            src: "assets/images/products/product-thumb-3.jpg",
                            alt: "Product"
                        })
                    }),
                    /*#__PURE__*/ jsx_runtime.jsx("div", {
                        className: "product-img",
                        children: /*#__PURE__*/ jsx_runtime.jsx("img", {
                            src: "assets/images/products/product-thumb-2.jpg",
                            alt: "Product"
                        })
                    })
                ]
            })
        ]
    });
};
/* harmony default export */ const sliders_ProductDetailsSlider = (ProductDetailsSlider);

// EXTERNAL MODULE: ./src/layouts/Layout.js + 7 modules
var Layout = __webpack_require__(2719);
// EXTERNAL MODULE: ./src/sliderProps.js
var sliderProps = __webpack_require__(1554);
;// CONCATENATED MODULE: ./pages/product-details.js
Object(function webpackMissingModule() { var e = new Error("Cannot find module 'react-bootstrap'"); e.code = 'MODULE_NOT_FOUND'; throw e; }());
Object(function webpackMissingModule() { var e = new Error("Cannot find module 'react-slick'"); e.code = 'MODULE_NOT_FOUND'; throw e; }());








const ProductsDetails = ()=>{
    return /*#__PURE__*/ (0,jsx_runtime.jsxs)(Layout/* default */.Z, {
        children: [
            /*#__PURE__*/ jsx_runtime.jsx(PageBanner/* default */.Z, {
                pageTitle: "Product",
                pageName: "Product Details"
            }),
            /*#__PURE__*/ jsx_runtime.jsx("section", {
                className: "prodcuts-details-page pt-170 pb-130",
                children: /*#__PURE__*/ (0,jsx_runtime.jsxs)("div", {
                    className: "container",
                    children: [
                        /*#__PURE__*/ jsx_runtime.jsx("div", {
                            className: "product-details-wrapper wow fadeInUp",
                            children: /*#__PURE__*/ (0,jsx_runtime.jsxs)("div", {
                                className: "row",
                                children: [
                                    /*#__PURE__*/ jsx_runtime.jsx("div", {
                                        className: "col-lg-7",
                                        children: /*#__PURE__*/ jsx_runtime.jsx(sliders_ProductDetailsSlider, {})
                                    }),
                                    /*#__PURE__*/ jsx_runtime.jsx("div", {
                                        className: "col-lg-5",
                                        children: /*#__PURE__*/ (0,jsx_runtime.jsxs)("div", {
                                            className: "product-info mb-50",
                                            children: [
                                                /*#__PURE__*/ jsx_runtime.jsx("h3", {
                                                    className: "title",
                                                    children: "Organic Strawberry"
                                                }),
                                                /*#__PURE__*/ (0,jsx_runtime.jsxs)("div", {
                                                    className: "products-rating-price d-flex",
                                                    children: [
                                                        /*#__PURE__*/ (0,jsx_runtime.jsxs)("ul", {
                                                            className: "ratings",
                                                            children: [
                                                                /*#__PURE__*/ jsx_runtime.jsx("li", {
                                                                    children: /*#__PURE__*/ jsx_runtime.jsx("i", {
                                                                        className: "fas fa-star"
                                                                    })
                                                                }),
                                                                /*#__PURE__*/ jsx_runtime.jsx("li", {
                                                                    children: /*#__PURE__*/ jsx_runtime.jsx("i", {
                                                                        className: "fas fa-star"
                                                                    })
                                                                }),
                                                                /*#__PURE__*/ jsx_runtime.jsx("li", {
                                                                    children: /*#__PURE__*/ jsx_runtime.jsx("i", {
                                                                        className: "fas fa-star"
                                                                    })
                                                                }),
                                                                /*#__PURE__*/ jsx_runtime.jsx("li", {
                                                                    children: /*#__PURE__*/ jsx_runtime.jsx("i", {
                                                                        className: "fas fa-star"
                                                                    })
                                                                }),
                                                                /*#__PURE__*/ jsx_runtime.jsx("li", {
                                                                    children: /*#__PURE__*/ jsx_runtime.jsx("i", {
                                                                        className: "fas fa-star"
                                                                    })
                                                                })
                                                            ]
                                                        }),
                                                        /*#__PURE__*/ (0,jsx_runtime.jsxs)("span", {
                                                            className: "price",
                                                            children: [
                                                                /*#__PURE__*/ jsx_runtime.jsx("span", {
                                                                    className: "curreny",
                                                                    children: "$"
                                                                }),
                                                                "59.56"
                                                            ]
                                                        })
                                                    ]
                                                }),
                                                /*#__PURE__*/ jsx_runtime.jsx("p", {
                                                    children: "Sed ut perspiciatis unde omnis iste natus error silupt atem accusantium doloremque laudantium rem riams eaque quae abillo inventore quasi architecto beatae vitae dicta sunt explicabo. Nemo enim psaml uptatem quia voluptas sit aspernatur aut odit aut fugit sedes quia consequuntur magni dolores eos"
                                                }),
                                                /*#__PURE__*/ (0,jsx_runtime.jsxs)("ul", {
                                                    className: "product-meta",
                                                    children: [
                                                        /*#__PURE__*/ (0,jsx_runtime.jsxs)("li", {
                                                            children: [
                                                                /*#__PURE__*/ jsx_runtime.jsx("span", {
                                                                    children: "Categories :"
                                                                }),
                                                                /*#__PURE__*/ jsx_runtime.jsx("a", {
                                                                    href: "#",
                                                                    children: "Organic, Fruits, Food"
                                                                })
                                                            ]
                                                        }),
                                                        /*#__PURE__*/ (0,jsx_runtime.jsxs)("li", {
                                                            children: [
                                                                /*#__PURE__*/ jsx_runtime.jsx("span", {
                                                                    children: "Tags :"
                                                                }),
                                                                /*#__PURE__*/ jsx_runtime.jsx("a", {
                                                                    href: "#",
                                                                    children: "Fruits, Juice, Drink"
                                                                })
                                                            ]
                                                        })
                                                    ]
                                                }),
                                                /*#__PURE__*/ jsx_runtime.jsx("div", {
                                                    className: "product-cart",
                                                    children: /*#__PURE__*/ (0,jsx_runtime.jsxs)("ul", {
                                                        children: [
                                                            /*#__PURE__*/ jsx_runtime.jsx("li", {
                                                                children: /*#__PURE__*/ jsx_runtime.jsx("input", {
                                                                    type: "number",
                                                                    defaultValue: 1
                                                                })
                                                            }),
                                                            /*#__PURE__*/ jsx_runtime.jsx("li", {
                                                                children: /*#__PURE__*/ jsx_runtime.jsx("a", {
                                                                    href: "#",
                                                                    className: "main-btn btn-yellow",
                                                                    children: "Add to cart"
                                                                })
                                                            }),
                                                            /*#__PURE__*/ jsx_runtime.jsx("li", {
                                                                children: /*#__PURE__*/ jsx_runtime.jsx("a", {
                                                                    href: "#",
                                                                    className: "wishlist-btn",
                                                                    children: /*#__PURE__*/ jsx_runtime.jsx("i", {
                                                                        className: "far fa-heart"
                                                                    })
                                                                })
                                                            })
                                                        ]
                                                    })
                                                })
                                            ]
                                        })
                                    })
                                ]
                            })
                        }),
                        /*#__PURE__*/ jsx_runtime.jsx(Object(function webpackMissingModule() { var e = new Error("Cannot find module 'react-bootstrap'"); e.code = 'MODULE_NOT_FOUND'; throw e; }()), {
                            defaultActiveKey: "descrptions",
                            children: /*#__PURE__*/ (0,jsx_runtime.jsxs)("div", {
                                className: "discription-area pb-120",
                                children: [
                                    /*#__PURE__*/ jsx_runtime.jsx("div", {
                                        className: "discription-tabs mb-20",
                                        children: /*#__PURE__*/ (0,jsx_runtime.jsxs)(Object(function webpackMissingModule() { var e = new Error("Cannot find module 'react-bootstrap'"); e.code = 'MODULE_NOT_FOUND'; throw e; }()), {
                                            as: "ul",
                                            className: "nav",
                                            children: [
                                                /*#__PURE__*/ jsx_runtime.jsx("li", {
                                                    className: "nav-item",
                                                    children: /*#__PURE__*/ jsx_runtime.jsx(Object(function webpackMissingModule() { var e = new Error("Cannot find module 'react-bootstrap'"); e.code = 'MODULE_NOT_FOUND'; throw e; }()), {
                                                        className: "nav-link",
                                                        as: "a",
                                                        "data-toggle": "tab",
                                                        eventKey: "descrptions",
                                                        href: "#descrptions",
                                                        children: "Descrptions"
                                                    })
                                                }),
                                                /*#__PURE__*/ jsx_runtime.jsx("li", {
                                                    className: "nav-item",
                                                    children: /*#__PURE__*/ jsx_runtime.jsx(Object(function webpackMissingModule() { var e = new Error("Cannot find module 'react-bootstrap'"); e.code = 'MODULE_NOT_FOUND'; throw e; }()), {
                                                        className: "nav-link",
                                                        as: "a",
                                                        "data-toggle": "tab",
                                                        eventKey: "information",
                                                        href: "#information",
                                                        children: "Information"
                                                    })
                                                })
                                            ]
                                        })
                                    }),
                                    /*#__PURE__*/ (0,jsx_runtime.jsxs)(Object(function webpackMissingModule() { var e = new Error("Cannot find module 'react-bootstrap'"); e.code = 'MODULE_NOT_FOUND'; throw e; }()), {
                                        className: "tab-content",
                                        children: [
                                            /*#__PURE__*/ jsx_runtime.jsx(Object(function webpackMissingModule() { var e = new Error("Cannot find module 'react-bootstrap'"); e.code = 'MODULE_NOT_FOUND'; throw e; }()), {
                                                className: "tab-pane fade",
                                                eventKey: "descrptions",
                                                children: /*#__PURE__*/ jsx_runtime.jsx("div", {
                                                    className: "content-box",
                                                    children: /*#__PURE__*/ jsx_runtime.jsx("p", {
                                                        children: "Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore verit atis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt. Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit sed quia non numquam eius modi tempora incidunt ut labore et dolore magnam aliquam quaerat voluptatem. Ut enim ad minima veniam, quis nostrum exercitationem ullam corporis suscipit laboriosam, nisi ut aliquid ex ea commodi consequatur? Quis autem vel eum iure reprehenderit qui in ea voluptate velit esse quam nihil molestiae consequatur, vel illum qui dolorem eum"
                                                    })
                                                })
                                            }),
                                            /*#__PURE__*/ jsx_runtime.jsx(Object(function webpackMissingModule() { var e = new Error("Cannot find module 'react-bootstrap'"); e.code = 'MODULE_NOT_FOUND'; throw e; }()), {
                                                className: "tab-pane fade",
                                                eventKey: "information",
                                                children: /*#__PURE__*/ jsx_runtime.jsx("div", {
                                                    className: "content-box",
                                                    children: /*#__PURE__*/ jsx_runtime.jsx("p", {
                                                        children: "Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore verit atis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt. Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit sed quia non numquam eius modi tempora incidunt ut labore et dolore magnam aliquam quaerat voluptatem. Ut enim ad minima veniam, quis nostrum exercitationem ullam corporis suscipit laboriosam, nisi ut aliquid ex ea commodi consequatur? Quis autem vel eum iure reprehenderit qui in ea voluptate velit esse quam nihil molestiae consequatur, vel illum qui dolorem eum"
                                                    })
                                                })
                                            })
                                        ]
                                    })
                                ]
                            })
                        }),
                        /*#__PURE__*/ (0,jsx_runtime.jsxs)("div", {
                            className: "review-form",
                            children: [
                                /*#__PURE__*/ jsx_runtime.jsx("h3", {
                                    className: "title mb-15",
                                    children: "Leave Your Reviews"
                                }),
                                /*#__PURE__*/ jsx_runtime.jsx("form", {
                                    onSubmit: (e)=>e.preventDefault(),
                                    children: /*#__PURE__*/ (0,jsx_runtime.jsxs)("div", {
                                        className: "row",
                                        children: [
                                            /*#__PURE__*/ jsx_runtime.jsx("div", {
                                                className: "col-lg-12",
                                                children: /*#__PURE__*/ jsx_runtime.jsx("div", {
                                                    className: "form_group",
                                                    children: /*#__PURE__*/ (0,jsx_runtime.jsxs)("ul", {
                                                        className: "ratings mb-25",
                                                        children: [
                                                            /*#__PURE__*/ jsx_runtime.jsx("li", {
                                                                children: /*#__PURE__*/ jsx_runtime.jsx("span", {
                                                                    className: "mr-2",
                                                                    children: "Your Rating:"
                                                                })
                                                            }),
                                                            /*#__PURE__*/ jsx_runtime.jsx("li", {
                                                                className: "star",
                                                                children: /*#__PURE__*/ jsx_runtime.jsx("a", {
                                                                    href: "#",
                                                                    children: /*#__PURE__*/ jsx_runtime.jsx("i", {
                                                                        className: "fas fa-star"
                                                                    })
                                                                })
                                                            }),
                                                            /*#__PURE__*/ jsx_runtime.jsx("li", {
                                                                className: "star",
                                                                children: /*#__PURE__*/ jsx_runtime.jsx("a", {
                                                                    href: "#",
                                                                    children: /*#__PURE__*/ jsx_runtime.jsx("i", {
                                                                        className: "fas fa-star"
                                                                    })
                                                                })
                                                            }),
                                                            /*#__PURE__*/ jsx_runtime.jsx("li", {
                                                                className: "star",
                                                                children: /*#__PURE__*/ jsx_runtime.jsx("a", {
                                                                    href: "#",
                                                                    children: /*#__PURE__*/ jsx_runtime.jsx("i", {
                                                                        className: "fas fa-star"
                                                                    })
                                                                })
                                                            }),
                                                            /*#__PURE__*/ jsx_runtime.jsx("li", {
                                                                className: "star",
                                                                children: /*#__PURE__*/ jsx_runtime.jsx("a", {
                                                                    href: "#",
                                                                    children: /*#__PURE__*/ jsx_runtime.jsx("i", {
                                                                        className: "fas fa-star"
                                                                    })
                                                                })
                                                            }),
                                                            /*#__PURE__*/ jsx_runtime.jsx("li", {
                                                                className: "star",
                                                                children: /*#__PURE__*/ jsx_runtime.jsx("a", {
                                                                    href: "#",
                                                                    children: /*#__PURE__*/ jsx_runtime.jsx("i", {
                                                                        className: "fas fa-star"
                                                                    })
                                                                })
                                                            })
                                                        ]
                                                    })
                                                })
                                            }),
                                            /*#__PURE__*/ jsx_runtime.jsx("div", {
                                                className: "col-lg-4",
                                                children: /*#__PURE__*/ jsx_runtime.jsx("div", {
                                                    className: "form_group",
                                                    children: /*#__PURE__*/ jsx_runtime.jsx("input", {
                                                        type: "text",
                                                        className: "form_control",
                                                        placeholder: "Full Name",
                                                        name: "name",
                                                        required: ""
                                                    })
                                                })
                                            }),
                                            /*#__PURE__*/ jsx_runtime.jsx("div", {
                                                className: "col-lg-4",
                                                children: /*#__PURE__*/ jsx_runtime.jsx("div", {
                                                    className: "form_group",
                                                    children: /*#__PURE__*/ jsx_runtime.jsx("input", {
                                                        type: "text",
                                                        className: "form_control",
                                                        placeholder: "Email Address",
                                                        name: "email",
                                                        required: ""
                                                    })
                                                })
                                            }),
                                            /*#__PURE__*/ jsx_runtime.jsx("div", {
                                                className: "col-lg-4",
                                                children: /*#__PURE__*/ jsx_runtime.jsx("div", {
                                                    className: "form_group",
                                                    children: /*#__PURE__*/ jsx_runtime.jsx("input", {
                                                        type: "text",
                                                        className: "form_control",
                                                        placeholder: "Phone Number",
                                                        name: "phone",
                                                        required: ""
                                                    })
                                                })
                                            }),
                                            /*#__PURE__*/ jsx_runtime.jsx("div", {
                                                className: "col-lg-12",
                                                children: /*#__PURE__*/ jsx_runtime.jsx("div", {
                                                    className: "form_group select-100",
                                                    children: /*#__PURE__*/ (0,jsx_runtime.jsxs)("select", {
                                                        className: "wide",
                                                        children: [
                                                            /*#__PURE__*/ jsx_runtime.jsx("option", {
                                                                "data-display": "Subject :",
                                                                children: "Subject :"
                                                            }),
                                                            /*#__PURE__*/ jsx_runtime.jsx("option", {
                                                                value: 1,
                                                                children: "Customer Support"
                                                            }),
                                                            /*#__PURE__*/ jsx_runtime.jsx("option", {
                                                                value: 2,
                                                                children: "Best Product"
                                                            })
                                                        ]
                                                    })
                                                })
                                            }),
                                            /*#__PURE__*/ jsx_runtime.jsx("div", {
                                                className: "col-lg-12",
                                                children: /*#__PURE__*/ jsx_runtime.jsx("div", {
                                                    className: "form_group",
                                                    children: /*#__PURE__*/ jsx_runtime.jsx("textarea", {
                                                        name: "message",
                                                        className: "form_control",
                                                        placeholder: "Write Message",
                                                        defaultValue: ""
                                                    })
                                                })
                                            }),
                                            /*#__PURE__*/ jsx_runtime.jsx("div", {
                                                className: "col-lg-12",
                                                children: /*#__PURE__*/ jsx_runtime.jsx("div", {
                                                    className: "form_group",
                                                    children: /*#__PURE__*/ jsx_runtime.jsx("button", {
                                                        className: "main-btn btn-yellow",
                                                        children: "Write Message"
                                                    })
                                                })
                                            })
                                        ]
                                    })
                                })
                            ]
                        })
                    ]
                })
            }),
            /*#__PURE__*/ jsx_runtime.jsx("section", {
                className: "recent-product-section border-top-1 pt-130 pb-130",
                children: /*#__PURE__*/ (0,jsx_runtime.jsxs)("div", {
                    className: "container",
                    children: [
                        /*#__PURE__*/ jsx_runtime.jsx("div", {
                            className: "row justify-content-center",
                            children: /*#__PURE__*/ jsx_runtime.jsx("div", {
                                className: "col-xl-8 col-lg-10",
                                children: /*#__PURE__*/ (0,jsx_runtime.jsxs)("div", {
                                    className: "section-title text-center mb-60",
                                    children: [
                                        /*#__PURE__*/ jsx_runtime.jsx("span", {
                                            className: "sub-title",
                                            children: "Popular Products"
                                        }),
                                        /*#__PURE__*/ jsx_runtime.jsx("h2", {
                                            children: "Some Category Organic Products Collect Our Shop"
                                        })
                                    ]
                                })
                            })
                        }),
                        /*#__PURE__*/ (0,jsx_runtime.jsxs)(Object(function webpackMissingModule() { var e = new Error("Cannot find module 'react-slick'"); e.code = 'MODULE_NOT_FOUND'; throw e; }()), {
                            ...sliderProps/* recentProductSlider */.iM,
                            className: "recent-product-slider",
                            children: [
                                /*#__PURE__*/ (0,jsx_runtime.jsxs)("div", {
                                    className: "single-product-item wow fadeInUp",
                                    children: [
                                        /*#__PURE__*/ (0,jsx_runtime.jsxs)("div", {
                                            className: "product-img",
                                            children: [
                                                /*#__PURE__*/ jsx_runtime.jsx("img", {
                                                    src: "assets/images/products/img-1.png",
                                                    alt: ""
                                                }),
                                                /*#__PURE__*/ jsx_runtime.jsx("div", {
                                                    className: "pc-btn",
                                                    children: "Food"
                                                })
                                            ]
                                        }),
                                        /*#__PURE__*/ (0,jsx_runtime.jsxs)("div", {
                                            className: "product-info",
                                            children: [
                                                /*#__PURE__*/ (0,jsx_runtime.jsxs)("ul", {
                                                    className: "ratings",
                                                    children: [
                                                        /*#__PURE__*/ jsx_runtime.jsx("li", {
                                                            children: /*#__PURE__*/ jsx_runtime.jsx("i", {
                                                                className: "fas fa-star"
                                                            })
                                                        }),
                                                        /*#__PURE__*/ jsx_runtime.jsx("li", {
                                                            children: /*#__PURE__*/ jsx_runtime.jsx("i", {
                                                                className: "fas fa-star"
                                                            })
                                                        }),
                                                        /*#__PURE__*/ jsx_runtime.jsx("li", {
                                                            children: /*#__PURE__*/ jsx_runtime.jsx("i", {
                                                                className: "fas fa-star"
                                                            })
                                                        }),
                                                        /*#__PURE__*/ jsx_runtime.jsx("li", {
                                                            children: /*#__PURE__*/ jsx_runtime.jsx("i", {
                                                                className: "fas fa-star"
                                                            })
                                                        }),
                                                        /*#__PURE__*/ jsx_runtime.jsx("li", {
                                                            children: /*#__PURE__*/ jsx_runtime.jsx("i", {
                                                                className: "fas fa-star"
                                                            })
                                                        })
                                                    ]
                                                }),
                                                /*#__PURE__*/ jsx_runtime.jsx("h3", {
                                                    className: "title",
                                                    children: /*#__PURE__*/ jsx_runtime.jsx((link_default()), {
                                                        href: "/product-details",
                                                        children: /*#__PURE__*/ jsx_runtime.jsx("a", {
                                                            children: "Organice Delicious Pomegranate"
                                                        })
                                                    })
                                                }),
                                                /*#__PURE__*/ (0,jsx_runtime.jsxs)("span", {
                                                    className: "price",
                                                    children: [
                                                        /*#__PURE__*/ jsx_runtime.jsx("span", {
                                                            className: "curreny",
                                                            children: "$"
                                                        }),
                                                        "53.56"
                                                    ]
                                                })
                                            ]
                                        })
                                    ]
                                }),
                                /*#__PURE__*/ (0,jsx_runtime.jsxs)("div", {
                                    className: "single-product-item wow fadeInDown",
                                    children: [
                                        /*#__PURE__*/ (0,jsx_runtime.jsxs)("div", {
                                            className: "product-img",
                                            children: [
                                                /*#__PURE__*/ jsx_runtime.jsx("img", {
                                                    src: "assets/images/products/img-2.png",
                                                    alt: ""
                                                }),
                                                /*#__PURE__*/ jsx_runtime.jsx("div", {
                                                    className: "pc-btn",
                                                    children: "Fish"
                                                })
                                            ]
                                        }),
                                        /*#__PURE__*/ (0,jsx_runtime.jsxs)("div", {
                                            className: "product-info",
                                            children: [
                                                /*#__PURE__*/ (0,jsx_runtime.jsxs)("ul", {
                                                    className: "ratings",
                                                    children: [
                                                        /*#__PURE__*/ jsx_runtime.jsx("li", {
                                                            children: /*#__PURE__*/ jsx_runtime.jsx("i", {
                                                                className: "fas fa-star"
                                                            })
                                                        }),
                                                        /*#__PURE__*/ jsx_runtime.jsx("li", {
                                                            children: /*#__PURE__*/ jsx_runtime.jsx("i", {
                                                                className: "fas fa-star"
                                                            })
                                                        }),
                                                        /*#__PURE__*/ jsx_runtime.jsx("li", {
                                                            children: /*#__PURE__*/ jsx_runtime.jsx("i", {
                                                                className: "fas fa-star"
                                                            })
                                                        }),
                                                        /*#__PURE__*/ jsx_runtime.jsx("li", {
                                                            children: /*#__PURE__*/ jsx_runtime.jsx("i", {
                                                                className: "fas fa-star"
                                                            })
                                                        }),
                                                        /*#__PURE__*/ jsx_runtime.jsx("li", {
                                                            children: /*#__PURE__*/ jsx_runtime.jsx("i", {
                                                                className: "fas fa-star"
                                                            })
                                                        })
                                                    ]
                                                }),
                                                /*#__PURE__*/ jsx_runtime.jsx("h3", {
                                                    className: "title",
                                                    children: /*#__PURE__*/ jsx_runtime.jsx((link_default()), {
                                                        href: "/product-details",
                                                        children: /*#__PURE__*/ jsx_runtime.jsx("a", {
                                                            children: "100% Natural Fresh Sea Fish"
                                                        })
                                                    })
                                                }),
                                                /*#__PURE__*/ (0,jsx_runtime.jsxs)("span", {
                                                    className: "price",
                                                    children: [
                                                        /*#__PURE__*/ jsx_runtime.jsx("span", {
                                                            className: "curreny",
                                                            children: "$"
                                                        }),
                                                        "53.56"
                                                    ]
                                                })
                                            ]
                                        })
                                    ]
                                }),
                                /*#__PURE__*/ (0,jsx_runtime.jsxs)("div", {
                                    className: "single-product-item wow fadeInUp",
                                    children: [
                                        /*#__PURE__*/ (0,jsx_runtime.jsxs)("div", {
                                            className: "product-img",
                                            children: [
                                                /*#__PURE__*/ jsx_runtime.jsx("img", {
                                                    src: "assets/images/products/img-3.png",
                                                    alt: ""
                                                }),
                                                /*#__PURE__*/ jsx_runtime.jsx("div", {
                                                    className: "pc-btn",
                                                    children: "Food"
                                                })
                                            ]
                                        }),
                                        /*#__PURE__*/ (0,jsx_runtime.jsxs)("div", {
                                            className: "product-info",
                                            children: [
                                                /*#__PURE__*/ (0,jsx_runtime.jsxs)("ul", {
                                                    className: "ratings",
                                                    children: [
                                                        /*#__PURE__*/ jsx_runtime.jsx("li", {
                                                            children: /*#__PURE__*/ jsx_runtime.jsx("i", {
                                                                className: "fas fa-star"
                                                            })
                                                        }),
                                                        /*#__PURE__*/ jsx_runtime.jsx("li", {
                                                            children: /*#__PURE__*/ jsx_runtime.jsx("i", {
                                                                className: "fas fa-star"
                                                            })
                                                        }),
                                                        /*#__PURE__*/ jsx_runtime.jsx("li", {
                                                            children: /*#__PURE__*/ jsx_runtime.jsx("i", {
                                                                className: "fas fa-star"
                                                            })
                                                        }),
                                                        /*#__PURE__*/ jsx_runtime.jsx("li", {
                                                            children: /*#__PURE__*/ jsx_runtime.jsx("i", {
                                                                className: "fas fa-star"
                                                            })
                                                        }),
                                                        /*#__PURE__*/ jsx_runtime.jsx("li", {
                                                            children: /*#__PURE__*/ jsx_runtime.jsx("i", {
                                                                className: "fas fa-star"
                                                            })
                                                        })
                                                    ]
                                                }),
                                                /*#__PURE__*/ jsx_runtime.jsx("h3", {
                                                    className: "title",
                                                    children: /*#__PURE__*/ jsx_runtime.jsx((link_default()), {
                                                        href: "/product-details",
                                                        children: /*#__PURE__*/ jsx_runtime.jsx("a", {
                                                            children: "Organice Delicious Pomegranate"
                                                        })
                                                    })
                                                }),
                                                /*#__PURE__*/ (0,jsx_runtime.jsxs)("span", {
                                                    className: "price",
                                                    children: [
                                                        /*#__PURE__*/ jsx_runtime.jsx("span", {
                                                            className: "curreny",
                                                            children: "$"
                                                        }),
                                                        "53.56"
                                                    ]
                                                })
                                            ]
                                        })
                                    ]
                                }),
                                /*#__PURE__*/ (0,jsx_runtime.jsxs)("div", {
                                    className: "single-product-item wow fadeInDown",
                                    children: [
                                        /*#__PURE__*/ (0,jsx_runtime.jsxs)("div", {
                                            className: "product-img",
                                            children: [
                                                /*#__PURE__*/ jsx_runtime.jsx("img", {
                                                    src: "assets/images/products/img-4.png",
                                                    alt: ""
                                                }),
                                                /*#__PURE__*/ jsx_runtime.jsx("div", {
                                                    className: "pc-btn",
                                                    children: "Vegetable"
                                                })
                                            ]
                                        }),
                                        /*#__PURE__*/ (0,jsx_runtime.jsxs)("div", {
                                            className: "product-info",
                                            children: [
                                                /*#__PURE__*/ (0,jsx_runtime.jsxs)("ul", {
                                                    className: "ratings",
                                                    children: [
                                                        /*#__PURE__*/ jsx_runtime.jsx("li", {
                                                            children: /*#__PURE__*/ jsx_runtime.jsx("i", {
                                                                className: "fas fa-star"
                                                            })
                                                        }),
                                                        /*#__PURE__*/ jsx_runtime.jsx("li", {
                                                            children: /*#__PURE__*/ jsx_runtime.jsx("i", {
                                                                className: "fas fa-star"
                                                            })
                                                        }),
                                                        /*#__PURE__*/ jsx_runtime.jsx("li", {
                                                            children: /*#__PURE__*/ jsx_runtime.jsx("i", {
                                                                className: "fas fa-star"
                                                            })
                                                        }),
                                                        /*#__PURE__*/ jsx_runtime.jsx("li", {
                                                            children: /*#__PURE__*/ jsx_runtime.jsx("i", {
                                                                className: "fas fa-star"
                                                            })
                                                        }),
                                                        /*#__PURE__*/ jsx_runtime.jsx("li", {
                                                            children: /*#__PURE__*/ jsx_runtime.jsx("i", {
                                                                className: "fas fa-star"
                                                            })
                                                        })
                                                    ]
                                                }),
                                                /*#__PURE__*/ jsx_runtime.jsx("h3", {
                                                    className: "title",
                                                    children: /*#__PURE__*/ jsx_runtime.jsx((link_default()), {
                                                        href: "/product-details",
                                                        children: /*#__PURE__*/ jsx_runtime.jsx("a", {
                                                            children: "Organice Delicious Pomegranate"
                                                        })
                                                    })
                                                }),
                                                /*#__PURE__*/ (0,jsx_runtime.jsxs)("span", {
                                                    className: "price",
                                                    children: [
                                                        /*#__PURE__*/ jsx_runtime.jsx("span", {
                                                            className: "curreny",
                                                            children: "$"
                                                        }),
                                                        "53.56"
                                                    ]
                                                })
                                            ]
                                        })
                                    ]
                                }),
                                /*#__PURE__*/ (0,jsx_runtime.jsxs)("div", {
                                    className: "single-product-item wow fadeInUp",
                                    children: [
                                        /*#__PURE__*/ (0,jsx_runtime.jsxs)("div", {
                                            className: "product-img",
                                            children: [
                                                /*#__PURE__*/ jsx_runtime.jsx("img", {
                                                    src: "assets/images/products/img-5.png",
                                                    alt: ""
                                                }),
                                                /*#__PURE__*/ jsx_runtime.jsx("div", {
                                                    className: "pc-btn",
                                                    children: "Fruits"
                                                })
                                            ]
                                        }),
                                        /*#__PURE__*/ (0,jsx_runtime.jsxs)("div", {
                                            className: "product-info",
                                            children: [
                                                /*#__PURE__*/ (0,jsx_runtime.jsxs)("ul", {
                                                    className: "ratings",
                                                    children: [
                                                        /*#__PURE__*/ jsx_runtime.jsx("li", {
                                                            children: /*#__PURE__*/ jsx_runtime.jsx("i", {
                                                                className: "fas fa-star"
                                                            })
                                                        }),
                                                        /*#__PURE__*/ jsx_runtime.jsx("li", {
                                                            children: /*#__PURE__*/ jsx_runtime.jsx("i", {
                                                                className: "fas fa-star"
                                                            })
                                                        }),
                                                        /*#__PURE__*/ jsx_runtime.jsx("li", {
                                                            children: /*#__PURE__*/ jsx_runtime.jsx("i", {
                                                                className: "fas fa-star"
                                                            })
                                                        }),
                                                        /*#__PURE__*/ jsx_runtime.jsx("li", {
                                                            children: /*#__PURE__*/ jsx_runtime.jsx("i", {
                                                                className: "fas fa-star"
                                                            })
                                                        }),
                                                        /*#__PURE__*/ jsx_runtime.jsx("li", {
                                                            children: /*#__PURE__*/ jsx_runtime.jsx("i", {
                                                                className: "fas fa-star"
                                                            })
                                                        })
                                                    ]
                                                }),
                                                /*#__PURE__*/ jsx_runtime.jsx("h3", {
                                                    className: "title",
                                                    children: /*#__PURE__*/ jsx_runtime.jsx((link_default()), {
                                                        href: "/product-details",
                                                        children: /*#__PURE__*/ jsx_runtime.jsx("a", {
                                                            children: "Organice Delicious Pomegranate"
                                                        })
                                                    })
                                                }),
                                                /*#__PURE__*/ (0,jsx_runtime.jsxs)("span", {
                                                    className: "price",
                                                    children: [
                                                        /*#__PURE__*/ jsx_runtime.jsx("span", {
                                                            className: "curreny",
                                                            children: "$"
                                                        }),
                                                        "53.56"
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
/* harmony default export */ const product_details = (ProductsDetails);


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
var __webpack_exports__ = __webpack_require__.X(0, [253,857,719,59,554], () => (__webpack_exec__(3626)));
module.exports = __webpack_exports__;

})();