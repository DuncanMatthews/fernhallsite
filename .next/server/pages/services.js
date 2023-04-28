"use strict";
(() => {
var exports = {};
exports.id = 54;
exports.ids = [54];
exports.modules = {

/***/ 1105:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "default": () => (/* binding */ services)
});

// EXTERNAL MODULE: external "react/jsx-runtime"
var jsx_runtime_ = __webpack_require__(997);
// EXTERNAL MODULE: ./node_modules/next/link.js
var next_link = __webpack_require__(1664);
var link_default = /*#__PURE__*/__webpack_require__.n(next_link);
// EXTERNAL MODULE: external "react-slick"
var external_react_slick_ = __webpack_require__(8096);
var external_react_slick_default = /*#__PURE__*/__webpack_require__.n(external_react_slick_);
// EXTERNAL MODULE: ./src/components/PageBanner.js
var PageBanner = __webpack_require__(2745);
// EXTERNAL MODULE: external "react"
var external_react_ = __webpack_require__(6689);
;// CONCATENATED MODULE: ./src/components/sliders/TestimonialSlider.js



const TestimonialSlider = ()=>{
    const { 0: nav1 , 1: setNav1  } = (0,external_react_.useState)(null);
    const { 0: nav2 , 1: setNav2  } = (0,external_react_.useState)(null);
    const { 0: slider1 , 1: setSlider1  } = (0,external_react_.useState)(null);
    const { 0: slider2 , 1: setSlider2  } = (0,external_react_.useState)(null);
    (0,external_react_.useEffect)(()=>{
        setNav1(slider1);
        setNav2(slider2);
    });
    const thumbs = {
        dots: false,
        autoplay: true,
        speed: 800,
        speed: 500,
        arrows: false,
        focusOnSelect: true,
        slidesToShow: 6,
        slidesToScroll: 1,
        responsive: [
            {
                breakpoint: 767,
                settings: {
                    arrows: false,
                    slidesToShow: 3
                }
            }, 
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
    return /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
        className: "row justify-content-center",
        children: [
            /*#__PURE__*/ jsx_runtime_.jsx("div", {
                className: "col-lg-7",
                children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)((external_react_slick_default()), {
                    ...thumbs,
                    asNavFor: nav2,
                    ref: (slider)=>setSlider1(slider),
                    className: "testimonial-thumbs-slider border-bottom-1 mb-60 wow fadeInUp",
                    children: [
                        /*#__PURE__*/ jsx_runtime_.jsx("div", {
                            className: "testimonial-thumb-item",
                            children: /*#__PURE__*/ jsx_runtime_.jsx("img", {
                                src: "assets/images/testimonial/img-6.jpg",
                                alt: ""
                            })
                        }),
                        /*#__PURE__*/ jsx_runtime_.jsx("div", {
                            className: "testimonial-thumb-item",
                            children: /*#__PURE__*/ jsx_runtime_.jsx("img", {
                                src: "assets/images/testimonial/img-7.jpg",
                                alt: ""
                            })
                        }),
                        /*#__PURE__*/ jsx_runtime_.jsx("div", {
                            className: "testimonial-thumb-item",
                            children: /*#__PURE__*/ jsx_runtime_.jsx("img", {
                                src: "assets/images/testimonial/img-8.jpg",
                                alt: ""
                            })
                        }),
                        /*#__PURE__*/ jsx_runtime_.jsx("div", {
                            className: "testimonial-thumb-item",
                            children: /*#__PURE__*/ jsx_runtime_.jsx("img", {
                                src: "assets/images/testimonial/img-9.jpg",
                                alt: ""
                            })
                        }),
                        /*#__PURE__*/ jsx_runtime_.jsx("div", {
                            className: "testimonial-thumb-item",
                            children: /*#__PURE__*/ jsx_runtime_.jsx("img", {
                                src: "assets/images/testimonial/img-10.jpg",
                                alt: ""
                            })
                        }),
                        /*#__PURE__*/ jsx_runtime_.jsx("div", {
                            className: "testimonial-thumb-item",
                            children: /*#__PURE__*/ jsx_runtime_.jsx("img", {
                                src: "assets/images/testimonial/img-11.jpg",
                                alt: ""
                            })
                        }),
                        /*#__PURE__*/ jsx_runtime_.jsx("div", {
                            className: "testimonial-thumb-item",
                            children: /*#__PURE__*/ jsx_runtime_.jsx("img", {
                                src: "assets/images/testimonial/img-8.jpg",
                                alt: ""
                            })
                        })
                    ]
                })
            }),
            /*#__PURE__*/ jsx_runtime_.jsx("div", {
                className: "col-lg-9",
                children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)((external_react_slick_default()), {
                    ...slider,
                    asNavFor: nav1,
                    ref: (slider)=>setSlider2(slider),
                    className: "testimonial-slider-four wow fadeInDown",
                    children: [
                        /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                            className: "testimonial-item-three d-flex",
                            children: [
                                /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                    className: "author-thumb",
                                    children: /*#__PURE__*/ jsx_runtime_.jsx("img", {
                                        src: "assets/images/testimonial/img-5.jpg",
                                        alt: ""
                                    })
                                }),
                                /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                                    className: "testimonial-content",
                                    children: [
                                        /*#__PURE__*/ jsx_runtime_.jsx("p", {
                                            children: "Sed ut perspiciatis unde omnis iste natus error lutatem accusantium doloremque laudantium, totam rem aperiamc eaquesa quae abillo inventore veritatis et quasi architect neque porro quisquam est qui dolorem"
                                        }),
                                        /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                                            className: "author-title-qoute d-flex",
                                            children: [
                                                /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                                    className: "quote",
                                                    children: /*#__PURE__*/ jsx_runtime_.jsx("i", {
                                                        className: "fas fa-quote-right"
                                                    })
                                                }),
                                                /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                                                    className: "author-title",
                                                    children: [
                                                        /*#__PURE__*/ jsx_runtime_.jsx("h4", {
                                                            children: "Michael R. Jordan"
                                                        }),
                                                        /*#__PURE__*/ jsx_runtime_.jsx("p", {
                                                            className: "position",
                                                            children: "CEO & Founder"
                                                        })
                                                    ]
                                                })
                                            ]
                                        })
                                    ]
                                })
                            ]
                        }),
                        /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                            className: "testimonial-item-three d-flex",
                            children: [
                                /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                    className: "author-thumb",
                                    children: /*#__PURE__*/ jsx_runtime_.jsx("img", {
                                        src: "assets/images/testimonial/img-5.jpg",
                                        alt: ""
                                    })
                                }),
                                /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                                    className: "testimonial-content",
                                    children: [
                                        /*#__PURE__*/ jsx_runtime_.jsx("p", {
                                            children: "Sed ut perspiciatis unde omnis iste natus error lutatem accusantium doloremque laudantium, totam rem aperiamc eaquesa quae abillo inventore veritatis et quasi architect neque porro quisquam est qui dolorem"
                                        }),
                                        /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                                            className: "author-title-qoute d-flex",
                                            children: [
                                                /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                                    className: "quote",
                                                    children: /*#__PURE__*/ jsx_runtime_.jsx("i", {
                                                        className: "fas fa-quote-right"
                                                    })
                                                }),
                                                /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                                                    className: "author-title",
                                                    children: [
                                                        /*#__PURE__*/ jsx_runtime_.jsx("h4", {
                                                            children: "Michael R. Jordan"
                                                        }),
                                                        /*#__PURE__*/ jsx_runtime_.jsx("p", {
                                                            className: "position",
                                                            children: "CEO & Founder"
                                                        })
                                                    ]
                                                })
                                            ]
                                        })
                                    ]
                                })
                            ]
                        }),
                        /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                            className: "testimonial-item-three d-flex",
                            children: [
                                /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                    className: "author-thumb",
                                    children: /*#__PURE__*/ jsx_runtime_.jsx("img", {
                                        src: "assets/images/testimonial/img-5.jpg",
                                        alt: ""
                                    })
                                }),
                                /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                                    className: "testimonial-content",
                                    children: [
                                        /*#__PURE__*/ jsx_runtime_.jsx("p", {
                                            children: "Sed ut perspiciatis unde omnis iste natus error lutatem accusantium doloremque laudantium, totam rem aperiamc eaquesa quae abillo inventore veritatis et quasi architect neque porro quisquam est qui dolorem"
                                        }),
                                        /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                                            className: "author-title-qoute d-flex",
                                            children: [
                                                /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                                    className: "quote",
                                                    children: /*#__PURE__*/ jsx_runtime_.jsx("i", {
                                                        className: "fas fa-quote-right"
                                                    })
                                                }),
                                                /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                                                    className: "author-title",
                                                    children: [
                                                        /*#__PURE__*/ jsx_runtime_.jsx("h4", {
                                                            children: "Michael R. Jordan"
                                                        }),
                                                        /*#__PURE__*/ jsx_runtime_.jsx("p", {
                                                            className: "position",
                                                            children: "CEO & Founder"
                                                        })
                                                    ]
                                                })
                                            ]
                                        })
                                    ]
                                })
                            ]
                        }),
                        /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                            className: "testimonial-item-three d-flex",
                            children: [
                                /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                    className: "author-thumb",
                                    children: /*#__PURE__*/ jsx_runtime_.jsx("img", {
                                        src: "assets/images/testimonial/img-5.jpg",
                                        alt: ""
                                    })
                                }),
                                /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                                    className: "testimonial-content",
                                    children: [
                                        /*#__PURE__*/ jsx_runtime_.jsx("p", {
                                            children: "Sed ut perspiciatis unde omnis iste natus error lutatem accusantium doloremque laudantium, totam rem aperiamc eaquesa quae abillo inventore veritatis et quasi architect neque porro quisquam est qui dolorem"
                                        }),
                                        /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                                            className: "author-title-qoute d-flex",
                                            children: [
                                                /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                                    className: "quote",
                                                    children: /*#__PURE__*/ jsx_runtime_.jsx("i", {
                                                        className: "fas fa-quote-right"
                                                    })
                                                }),
                                                /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                                                    className: "author-title",
                                                    children: [
                                                        /*#__PURE__*/ jsx_runtime_.jsx("h4", {
                                                            children: "Michael R. Jordan"
                                                        }),
                                                        /*#__PURE__*/ jsx_runtime_.jsx("p", {
                                                            className: "position",
                                                            children: "CEO & Founder"
                                                        })
                                                    ]
                                                })
                                            ]
                                        })
                                    ]
                                })
                            ]
                        }),
                        /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                            className: "testimonial-item-three d-flex",
                            children: [
                                /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                    className: "author-thumb",
                                    children: /*#__PURE__*/ jsx_runtime_.jsx("img", {
                                        src: "assets/images/testimonial/img-5.jpg",
                                        alt: ""
                                    })
                                }),
                                /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                                    className: "testimonial-content",
                                    children: [
                                        /*#__PURE__*/ jsx_runtime_.jsx("p", {
                                            children: "Sed ut perspiciatis unde omnis iste natus error lutatem accusantium doloremque laudantium, totam rem aperiamc eaquesa quae abillo inventore veritatis et quasi architect neque porro quisquam est qui dolorem"
                                        }),
                                        /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                                            className: "author-title-qoute d-flex",
                                            children: [
                                                /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                                    className: "quote",
                                                    children: /*#__PURE__*/ jsx_runtime_.jsx("i", {
                                                        className: "fas fa-quote-right"
                                                    })
                                                }),
                                                /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                                                    className: "author-title",
                                                    children: [
                                                        /*#__PURE__*/ jsx_runtime_.jsx("h4", {
                                                            children: "Michael R. Jordan"
                                                        }),
                                                        /*#__PURE__*/ jsx_runtime_.jsx("p", {
                                                            className: "position",
                                                            children: "CEO & Founder"
                                                        })
                                                    ]
                                                })
                                            ]
                                        })
                                    ]
                                })
                            ]
                        }),
                        /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                            className: "testimonial-item-three d-flex",
                            children: [
                                /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                    className: "author-thumb",
                                    children: /*#__PURE__*/ jsx_runtime_.jsx("img", {
                                        src: "assets/images/testimonial/img-5.jpg",
                                        alt: ""
                                    })
                                }),
                                /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                                    className: "testimonial-content",
                                    children: [
                                        /*#__PURE__*/ jsx_runtime_.jsx("p", {
                                            children: "Sed ut perspiciatis unde omnis iste natus error lutatem accusantium doloremque laudantium, totam rem aperiamc eaquesa quae abillo inventore veritatis et quasi architect neque porro quisquam est qui dolorem"
                                        }),
                                        /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                                            className: "author-title-qoute d-flex",
                                            children: [
                                                /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                                    className: "quote",
                                                    children: /*#__PURE__*/ jsx_runtime_.jsx("i", {
                                                        className: "fas fa-quote-right"
                                                    })
                                                }),
                                                /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                                                    className: "author-title",
                                                    children: [
                                                        /*#__PURE__*/ jsx_runtime_.jsx("h4", {
                                                            children: "Michael R. Jordan"
                                                        }),
                                                        /*#__PURE__*/ jsx_runtime_.jsx("p", {
                                                            className: "position",
                                                            children: "CEO & Founder"
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
/* harmony default export */ const sliders_TestimonialSlider = (TestimonialSlider);

// EXTERNAL MODULE: ./src/layouts/Layout.js + 7 modules
var Layout = __webpack_require__(3753);
// EXTERNAL MODULE: ./src/sliderProps.js
var sliderProps = __webpack_require__(5968);
;// CONCATENATED MODULE: ./pages/services.js







const Services = ()=>{
    return /*#__PURE__*/ (0,jsx_runtime_.jsxs)(Layout/* default */.Z, {
        children: [
            /*#__PURE__*/ jsx_runtime_.jsx(PageBanner/* default */.Z, {
                pageName: "Services"
            }),
            /*#__PURE__*/ jsx_runtime_.jsx("section", {
                className: "service-section pt-170 pb-80",
                children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                    className: "container",
                    children: [
                        /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                            className: "row align-items-center",
                            children: [
                                /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                    className: "col-lg-6",
                                    children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                                        className: "section-title section-title-left mb-50 wow fadeInLeft",
                                        children: [
                                            /*#__PURE__*/ jsx_runtime_.jsx("span", {
                                                className: "sub-title",
                                                children: "Healthy Foods"
                                            }),
                                            /*#__PURE__*/ jsx_runtime_.jsx("h2", {
                                                children: "What We Provide For Your Better Health"
                                            })
                                        ]
                                    })
                                }),
                                /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                    className: "col-lg-6 mb-50",
                                    children: /*#__PURE__*/ jsx_runtime_.jsx("p", {
                                        className: "wow fadeInRight",
                                        children: "Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium totam rem aperiam eaque inventore veritatis quasi architecto beatae vitae dicta suntexpc Nemo enim ipsam voluptatem quia voluptas sit aspernatur audit aut fugit sed quia consequuntur magni dolores"
                                    })
                                })
                            ]
                        }),
                        /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                            className: "row",
                            children: [
                                /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                    className: "col-xl-2 col-lg-4 col-md-4 col-sm-12",
                                    children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                                        className: "service-box text-center mb-70 wow fadeInUp",
                                        children: [
                                            /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                                className: "icon",
                                                children: /*#__PURE__*/ jsx_runtime_.jsx("i", {
                                                    className: "flaticon-wheat-sack"
                                                })
                                            }),
                                            /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                                className: "text",
                                                children: /*#__PURE__*/ jsx_runtime_.jsx("h3", {
                                                    className: "title",
                                                    children: /*#__PURE__*/ jsx_runtime_.jsx((link_default()), {
                                                        href: "/service-details",
                                                        children: /*#__PURE__*/ jsx_runtime_.jsx("a", {
                                                            children: "Fresh Wheat Sack Food"
                                                        })
                                                    })
                                                })
                                            })
                                        ]
                                    })
                                }),
                                /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                    className: "col-xl-2 col-lg-4 col-md-4 col-sm-12",
                                    children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                                        className: "service-box text-center mb-70 wow fadeInDown",
                                        children: [
                                            /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                                className: "icon",
                                                children: /*#__PURE__*/ jsx_runtime_.jsx("i", {
                                                    className: "flaticon-grape"
                                                })
                                            }),
                                            /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                                className: "text",
                                                children: /*#__PURE__*/ jsx_runtime_.jsx("h3", {
                                                    className: "title",
                                                    children: /*#__PURE__*/ jsx_runtime_.jsx((link_default()), {
                                                        href: "/service-details",
                                                        children: /*#__PURE__*/ jsx_runtime_.jsx("a", {
                                                            children: "Organic Fresh Fruits"
                                                        })
                                                    })
                                                })
                                            })
                                        ]
                                    })
                                }),
                                /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                    className: "col-xl-2 col-lg-4 col-md-4 col-sm-12",
                                    children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                                        className: "service-box text-center mb-70 wow fadeInUp",
                                        children: [
                                            /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                                className: "icon",
                                                children: /*#__PURE__*/ jsx_runtime_.jsx("i", {
                                                    className: "flaticon-cow"
                                                })
                                            }),
                                            /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                                className: "text",
                                                children: /*#__PURE__*/ jsx_runtime_.jsx("h3", {
                                                    className: "title",
                                                    children: /*#__PURE__*/ jsx_runtime_.jsx((link_default()), {
                                                        href: "/service-details",
                                                        children: /*#__PURE__*/ jsx_runtime_.jsx("a", {
                                                            children: "Cows Meat and Milk"
                                                        })
                                                    })
                                                })
                                            })
                                        ]
                                    })
                                }),
                                /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                    className: "col-xl-2 col-lg-4 col-md-4 col-sm-12",
                                    children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                                        className: "service-box text-center mb-70 wow fadeInDown",
                                        children: [
                                            /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                                className: "icon",
                                                children: /*#__PURE__*/ jsx_runtime_.jsx("i", {
                                                    className: "flaticon-fish"
                                                })
                                            }),
                                            /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                                className: "text",
                                                children: /*#__PURE__*/ jsx_runtime_.jsx("h3", {
                                                    className: "title",
                                                    children: /*#__PURE__*/ jsx_runtime_.jsx((link_default()), {
                                                        href: "/service-details",
                                                        children: /*#__PURE__*/ jsx_runtime_.jsx("a", {
                                                            children: "Fresh Pond & Sea Fish"
                                                        })
                                                    })
                                                })
                                            })
                                        ]
                                    })
                                }),
                                /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                    className: "col-xl-2 col-lg-4 col-md-4 col-sm-12",
                                    children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                                        className: "service-box text-center mb-70 wow fadeInUp",
                                        children: [
                                            /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                                className: "icon",
                                                children: /*#__PURE__*/ jsx_runtime_.jsx("i", {
                                                    className: "flaticon-healthy-food"
                                                })
                                            }),
                                            /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                                className: "text",
                                                children: /*#__PURE__*/ jsx_runtime_.jsx("h3", {
                                                    className: "title",
                                                    children: /*#__PURE__*/ jsx_runtime_.jsx((link_default()), {
                                                        href: "/service-details",
                                                        children: /*#__PURE__*/ jsx_runtime_.jsx("a", {
                                                            children: "Fresh Organic Vegetable"
                                                        })
                                                    })
                                                })
                                            })
                                        ]
                                    })
                                }),
                                /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                    className: "col-xl-2 col-lg-4 col-md-4 col-sm-12",
                                    children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                                        className: "service-box text-center mb-70 wow fadeInDown",
                                        children: [
                                            /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                                className: "icon",
                                                children: /*#__PURE__*/ jsx_runtime_.jsx("i", {
                                                    className: "flaticon-planet-earth"
                                                })
                                            }),
                                            /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                                className: "text",
                                                children: /*#__PURE__*/ jsx_runtime_.jsx("h3", {
                                                    className: "title",
                                                    children: /*#__PURE__*/ jsx_runtime_.jsx((link_default()), {
                                                        href: "/service-details",
                                                        children: /*#__PURE__*/ jsx_runtime_.jsx("a", {
                                                            children: "Planet Earth Safety"
                                                        })
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
            /*#__PURE__*/ jsx_runtime_.jsx("section", {
                className: "skill-section-two pt-lg-130",
                children: /*#__PURE__*/ jsx_runtime_.jsx("div", {
                    className: "container-fluid",
                    children: /*#__PURE__*/ jsx_runtime_.jsx("div", {
                        className: "skill-wrapper-one pb-90 bg_cover",
                        style: {
                            backgroundImage: "url(assets/images/bg/skill-bg-2.jpg)"
                        },
                        children: /*#__PURE__*/ jsx_runtime_.jsx("div", {
                            className: "container",
                            children: /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                className: "row",
                                children: /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                    className: "col-lg-7",
                                    children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                                        className: "skill-two_content-box content-box-gap mb-40 wow fadeInUp",
                                        children: [
                                            /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                                                className: "section-title section-title-left mb-30",
                                                children: [
                                                    /*#__PURE__*/ jsx_runtime_.jsx("span", {
                                                        className: "sub-title",
                                                        children: "Experience"
                                                    }),
                                                    /*#__PURE__*/ jsx_runtime_.jsx("h2", {
                                                        children: "We’re Best Agriculture & Organic Firms"
                                                    })
                                                ]
                                            }),
                                            /*#__PURE__*/ jsx_runtime_.jsx("p", {
                                                children: "Natus error sit voluptatem accusantium doloremque laudatium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt"
                                            }),
                                            /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                                                className: "skill-bar",
                                                children: [
                                                    /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                                        className: "skill-title",
                                                        children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)("h5", {
                                                            children: [
                                                                "Organic Products",
                                                                /*#__PURE__*/ jsx_runtime_.jsx("span", {
                                                                    children: "75%"
                                                                })
                                                            ]
                                                        })
                                                    }),
                                                    /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                                        className: "progress-bar wow slideInLeft",
                                                        style: {
                                                            width: "75%"
                                                        }
                                                    }),
                                                    /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                                        className: "progress"
                                                    })
                                                ]
                                            }),
                                            /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                                                className: "skill-bar",
                                                children: [
                                                    /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                                        className: "skill-title",
                                                        children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)("h5", {
                                                            children: [
                                                                "Healthy Foods",
                                                                /*#__PURE__*/ jsx_runtime_.jsx("span", {
                                                                    children: "89%"
                                                                })
                                                            ]
                                                        })
                                                    }),
                                                    /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                                        className: "progress-bar wow slideInLeft",
                                                        style: {
                                                            width: "89%"
                                                        }
                                                    }),
                                                    /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                                        className: "progress"
                                                    })
                                                ]
                                            }),
                                            /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                                className: "skill-button",
                                                children: /*#__PURE__*/ jsx_runtime_.jsx((link_default()), {
                                                    href: "/about",
                                                    children: /*#__PURE__*/ jsx_runtime_.jsx("a", {
                                                        className: "main-btn bordered-btn",
                                                        children: "Learn More Us"
                                                    })
                                                })
                                            })
                                        ]
                                    })
                                })
                            })
                        })
                    })
                })
            }),
            /*#__PURE__*/ jsx_runtime_.jsx("section", {
                className: "popular-service pt-130 pb-80",
                children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                    className: "container",
                    children: [
                        /*#__PURE__*/ jsx_runtime_.jsx("div", {
                            className: "row justify-content-center",
                            children: /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                className: "col-xl-8 col-lg-10",
                                children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                                    className: "section-title text-center mb-50 wow fadeInDown",
                                    children: [
                                        /*#__PURE__*/ jsx_runtime_.jsx("span", {
                                            className: "sub-title",
                                            children: "Popular Services"
                                        }),
                                        /*#__PURE__*/ jsx_runtime_.jsx("h2", {
                                            children: "We Provide Organice Food Services to Get Better Health"
                                        })
                                    ]
                                })
                            })
                        }),
                        /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                            className: "row align-items-center",
                            children: [
                                /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                                    className: "col-lg-4",
                                    children: [
                                        /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                                            className: "single-service-item mb-50 wow fadeInUp",
                                            children: [
                                                /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                                    className: "icon",
                                                    children: /*#__PURE__*/ jsx_runtime_.jsx("img", {
                                                        src: "assets/images/icon/icon-1.png",
                                                        alt: "Icon"
                                                    })
                                                }),
                                                /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                                                    className: "text",
                                                    children: [
                                                        /*#__PURE__*/ jsx_runtime_.jsx("h3", {
                                                            children: /*#__PURE__*/ jsx_runtime_.jsx((link_default()), {
                                                                href: "/service-details",
                                                                children: /*#__PURE__*/ jsx_runtime_.jsx("a", {
                                                                    children: "Fresh Avocado"
                                                                })
                                                            })
                                                        }),
                                                        /*#__PURE__*/ jsx_runtime_.jsx("p", {
                                                            children: "Natus error sit volupt ateme accus antium dolores"
                                                        })
                                                    ]
                                                })
                                            ]
                                        }),
                                        /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                                            className: "single-service-item mb-50 wow fadeInDown",
                                            children: [
                                                /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                                    className: "icon",
                                                    children: /*#__PURE__*/ jsx_runtime_.jsx("img", {
                                                        src: "assets/images/icon/icon-2.png",
                                                        alt: "Icon"
                                                    })
                                                }),
                                                /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                                                    className: "text",
                                                    children: [
                                                        /*#__PURE__*/ jsx_runtime_.jsx("h3", {
                                                            children: /*#__PURE__*/ jsx_runtime_.jsx((link_default()), {
                                                                href: "/service-details",
                                                                children: /*#__PURE__*/ jsx_runtime_.jsx("a", {
                                                                    children: "Organic Carrot"
                                                                })
                                                            })
                                                        }),
                                                        /*#__PURE__*/ jsx_runtime_.jsx("p", {
                                                            children: "Natus error sit volupt ateme accus antium dolores"
                                                        })
                                                    ]
                                                })
                                            ]
                                        }),
                                        /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                                            className: "single-service-item mb-50 wow fadeInUp",
                                            children: [
                                                /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                                    className: "icon",
                                                    children: /*#__PURE__*/ jsx_runtime_.jsx("img", {
                                                        src: "assets/images/icon/icon-3.png",
                                                        alt: "Icon"
                                                    })
                                                }),
                                                /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                                                    className: "text",
                                                    children: [
                                                        /*#__PURE__*/ jsx_runtime_.jsx("h3", {
                                                            children: /*#__PURE__*/ jsx_runtime_.jsx((link_default()), {
                                                                href: "/service-details",
                                                                children: /*#__PURE__*/ jsx_runtime_.jsx("a", {
                                                                    children: "Organic Carrot"
                                                                })
                                                            })
                                                        }),
                                                        /*#__PURE__*/ jsx_runtime_.jsx("p", {
                                                            children: "Natus error sit volupt ateme accus antium dolores"
                                                        })
                                                    ]
                                                })
                                            ]
                                        })
                                    ]
                                }),
                                /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                    className: "col-lg-4",
                                    children: /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                        className: "img-holder mb-50 wow fadeInDown",
                                        children: /*#__PURE__*/ jsx_runtime_.jsx("img", {
                                            src: "assets/images/service/img-1.jpg",
                                            alt: "Service Image"
                                        })
                                    })
                                }),
                                /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                                    className: "col-lg-4",
                                    children: [
                                        /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                                            className: "single-service-item mb-50 card-rtl wow fadeInDown",
                                            children: [
                                                /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                                    className: "icon",
                                                    children: /*#__PURE__*/ jsx_runtime_.jsx("img", {
                                                        src: "assets/images/icon/icon-4.png",
                                                        alt: "Icon"
                                                    })
                                                }),
                                                /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                                                    className: "text",
                                                    children: [
                                                        /*#__PURE__*/ jsx_runtime_.jsx("h3", {
                                                            children: /*#__PURE__*/ jsx_runtime_.jsx((link_default()), {
                                                                href: "/service-details",
                                                                children: /*#__PURE__*/ jsx_runtime_.jsx("a", {
                                                                    children: "Organic Corn"
                                                                })
                                                            })
                                                        }),
                                                        /*#__PURE__*/ jsx_runtime_.jsx("p", {
                                                            children: "Natus error sit volupt ateme accus antium dolores"
                                                        })
                                                    ]
                                                })
                                            ]
                                        }),
                                        /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                                            className: "single-service-item mb-50 card-rtl wow fadeInUp",
                                            children: [
                                                /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                                    className: "icon",
                                                    children: /*#__PURE__*/ jsx_runtime_.jsx("img", {
                                                        src: "assets/images/icon/icon-5.png",
                                                        alt: "Icon"
                                                    })
                                                }),
                                                /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                                                    className: "text",
                                                    children: [
                                                        /*#__PURE__*/ jsx_runtime_.jsx("h3", {
                                                            children: /*#__PURE__*/ jsx_runtime_.jsx((link_default()), {
                                                                href: "/service-details",
                                                                children: /*#__PURE__*/ jsx_runtime_.jsx("a", {
                                                                    children: "Milk and Meats"
                                                                })
                                                            })
                                                        }),
                                                        /*#__PURE__*/ jsx_runtime_.jsx("p", {
                                                            children: "Natus error sit volupt ateme accus antium dolores"
                                                        })
                                                    ]
                                                })
                                            ]
                                        }),
                                        /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                                            className: "single-service-item mb-50 card-rtl wow fadeInDown",
                                            children: [
                                                /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                                    className: "icon",
                                                    children: /*#__PURE__*/ jsx_runtime_.jsx("img", {
                                                        src: "assets/images/icon/icon-6.png",
                                                        alt: "Icon"
                                                    })
                                                }),
                                                /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                                                    className: "text",
                                                    children: [
                                                        /*#__PURE__*/ jsx_runtime_.jsx("h3", {
                                                            children: /*#__PURE__*/ jsx_runtime_.jsx((link_default()), {
                                                                href: "/service-details",
                                                                children: /*#__PURE__*/ jsx_runtime_.jsx("a", {
                                                                    children: "Fresh Dragon Fruit"
                                                                })
                                                            })
                                                        }),
                                                        /*#__PURE__*/ jsx_runtime_.jsx("p", {
                                                            children: "Natus error sit volupt ateme accus antium dolores"
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
            }),
            /*#__PURE__*/ jsx_runtime_.jsx("section", {
                className: "partners-section",
                children: /*#__PURE__*/ jsx_runtime_.jsx("div", {
                    className: "container-1350",
                    children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                        className: "partners-wrap-three yellow-bg pb-60 pt-50 p-r z-1",
                        children: [
                            /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                className: "row justify-content-center",
                                children: /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                    className: "col-lg-6",
                                    children: /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                        className: "section-title text-center mb-30 wow fadeInUp",
                                        children: /*#__PURE__*/ jsx_runtime_.jsx("h4", {
                                            children: "We Have More Then 1235+ Global Partners"
                                        })
                                    })
                                })
                            }),
                            /*#__PURE__*/ (0,jsx_runtime_.jsxs)((external_react_slick_default()), {
                                ...sliderProps/* logoSlider */.Ak,
                                className: "partner-slider-one wow fadeInDown",
                                children: [
                                    /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                        className: "partner-item",
                                        children: /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                            className: "partner-img",
                                            children: /*#__PURE__*/ jsx_runtime_.jsx("img", {
                                                src: "assets/images/partner/img-1.png",
                                                alt: "partner image"
                                            })
                                        })
                                    }),
                                    /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                        className: "partner-item",
                                        children: /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                            className: "partner-img",
                                            children: /*#__PURE__*/ jsx_runtime_.jsx("img", {
                                                src: "assets/images/partner/img-2.png",
                                                alt: "partner image"
                                            })
                                        })
                                    }),
                                    /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                        className: "partner-item",
                                        children: /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                            className: "partner-img",
                                            children: /*#__PURE__*/ jsx_runtime_.jsx("img", {
                                                src: "assets/images/partner/img-3.png",
                                                alt: "partner image"
                                            })
                                        })
                                    }),
                                    /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                        className: "partner-item",
                                        children: /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                            className: "partner-img",
                                            children: /*#__PURE__*/ jsx_runtime_.jsx("img", {
                                                src: "assets/images/partner/img-4.png",
                                                alt: "partner image"
                                            })
                                        })
                                    }),
                                    /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                        className: "partner-item",
                                        children: /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                            className: "partner-img",
                                            children: /*#__PURE__*/ jsx_runtime_.jsx("img", {
                                                src: "assets/images/partner/img-5.png",
                                                alt: "partner image"
                                            })
                                        })
                                    }),
                                    /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                        className: "partner-item",
                                        children: /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                            className: "partner-img",
                                            children: /*#__PURE__*/ jsx_runtime_.jsx("img", {
                                                src: "assets/images/partner/img-6.png",
                                                alt: "partner image"
                                            })
                                        })
                                    }),
                                    /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                        className: "partner-item",
                                        children: /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                            className: "partner-img",
                                            children: /*#__PURE__*/ jsx_runtime_.jsx("img", {
                                                src: "assets/images/partner/img-3.png",
                                                alt: "partner image"
                                            })
                                        })
                                    })
                                ]
                            })
                        ]
                    })
                })
            }),
            " ",
            /*#__PURE__*/ jsx_runtime_.jsx("section", {
                className: "projects-section pt-130",
                children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                    className: "container-fluid",
                    children: [
                        /*#__PURE__*/ jsx_runtime_.jsx("div", {
                            className: "row justify-content-center",
                            children: /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                className: "col-xl-6 col-lg-10",
                                children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                                    className: "section-title text-center mb-60",
                                    children: [
                                        /*#__PURE__*/ jsx_runtime_.jsx("span", {
                                            className: "sub-title",
                                            children: "Project Gallery"
                                        }),
                                        /*#__PURE__*/ jsx_runtime_.jsx("h2", {
                                            children: "We’ve Done Many Other Projects Let’s See Gallery Insights"
                                        })
                                    ]
                                })
                            })
                        }),
                        /*#__PURE__*/ (0,jsx_runtime_.jsxs)((external_react_slick_default()), {
                            ...sliderProps/* projectsSliderTwo */.v6,
                            className: "projects-slider-two",
                            children: [
                                /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                    className: "project-item-two wow fadeInUp",
                                    children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                                        className: "img-holder",
                                        children: [
                                            /*#__PURE__*/ jsx_runtime_.jsx("img", {
                                                src: "assets/images/portfolio/img-25.jpg",
                                                alt: ""
                                            }),
                                            /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                                className: "hover-portfolio",
                                                children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                                                    className: "hover-content",
                                                    children: [
                                                        /*#__PURE__*/ jsx_runtime_.jsx((link_default()), {
                                                            href: "/portfolio-details",
                                                            children: /*#__PURE__*/ jsx_runtime_.jsx("a", {
                                                                className: "icon-btn",
                                                                children: /*#__PURE__*/ jsx_runtime_.jsx("i", {
                                                                    className: "far fa-arrow-right"
                                                                })
                                                            })
                                                        }),
                                                        /*#__PURE__*/ jsx_runtime_.jsx("h3", {
                                                            className: "title",
                                                            children: /*#__PURE__*/ jsx_runtime_.jsx((link_default()), {
                                                                href: "/portfolio-details",
                                                                children: /*#__PURE__*/ jsx_runtime_.jsx("a", {
                                                                    children: "Cow Eating Gress From Farms"
                                                                })
                                                            })
                                                        })
                                                    ]
                                                })
                                            })
                                        ]
                                    })
                                }),
                                /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                    className: "project-item-two wow fadeOutDown",
                                    children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                                        className: "img-holder",
                                        children: [
                                            /*#__PURE__*/ jsx_runtime_.jsx("img", {
                                                src: "assets/images/portfolio/img-26.jpg",
                                                alt: ""
                                            }),
                                            /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                                className: "hover-portfolio",
                                                children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                                                    className: "hover-content",
                                                    children: [
                                                        /*#__PURE__*/ jsx_runtime_.jsx((link_default()), {
                                                            href: "/portfolio-details",
                                                            children: /*#__PURE__*/ jsx_runtime_.jsx("a", {
                                                                className: "icon-btn",
                                                                children: /*#__PURE__*/ jsx_runtime_.jsx("i", {
                                                                    className: "far fa-arrow-right"
                                                                })
                                                            })
                                                        }),
                                                        /*#__PURE__*/ jsx_runtime_.jsx("h3", {
                                                            className: "title",
                                                            children: /*#__PURE__*/ jsx_runtime_.jsx((link_default()), {
                                                                href: "/portfolio-details",
                                                                children: /*#__PURE__*/ jsx_runtime_.jsx("a", {
                                                                    children: "Cow Eating Gress From Farms"
                                                                })
                                                            })
                                                        })
                                                    ]
                                                })
                                            })
                                        ]
                                    })
                                }),
                                /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                    className: "project-item-two wow fadeInUp",
                                    children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                                        className: "img-holder",
                                        children: [
                                            /*#__PURE__*/ jsx_runtime_.jsx("img", {
                                                src: "assets/images/portfolio/img-27.jpg",
                                                alt: ""
                                            }),
                                            /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                                className: "hover-portfolio",
                                                children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                                                    className: "hover-content",
                                                    children: [
                                                        /*#__PURE__*/ jsx_runtime_.jsx((link_default()), {
                                                            href: "/portfolio-details",
                                                            children: /*#__PURE__*/ jsx_runtime_.jsx("a", {
                                                                className: "icon-btn",
                                                                children: /*#__PURE__*/ jsx_runtime_.jsx("i", {
                                                                    className: "far fa-arrow-right"
                                                                })
                                                            })
                                                        }),
                                                        /*#__PURE__*/ jsx_runtime_.jsx("h3", {
                                                            className: "title",
                                                            children: /*#__PURE__*/ jsx_runtime_.jsx((link_default()), {
                                                                href: "/portfolio-details",
                                                                children: /*#__PURE__*/ jsx_runtime_.jsx("a", {
                                                                    children: "Cow Eating Gress From Farms"
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
                    ]
                })
            }),
            /*#__PURE__*/ jsx_runtime_.jsx("section", {
                className: "testimonial-three pt-130 pb-130",
                children: /*#__PURE__*/ jsx_runtime_.jsx("div", {
                    className: "container",
                    children: /*#__PURE__*/ jsx_runtime_.jsx(sliders_TestimonialSlider, {})
                })
            })
        ]
    });
};
/* harmony default export */ const services = (Services);


/***/ }),

/***/ 3280:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/app-router-context.js");

/***/ }),

/***/ 2796:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/head-manager-context.js");

/***/ }),

/***/ 4014:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/i18n/normalize-locale-path.js");

/***/ }),

/***/ 8524:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/is-plain-object.js");

/***/ }),

/***/ 8020:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/mitt.js");

/***/ }),

/***/ 4406:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/page-path/denormalize-page-path.js");

/***/ }),

/***/ 4964:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router-context.js");

/***/ }),

/***/ 1751:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router/utils/add-path-prefix.js");

/***/ }),

/***/ 6220:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router/utils/compare-states.js");

/***/ }),

/***/ 299:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router/utils/format-next-pathname-info.js");

/***/ }),

/***/ 3938:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router/utils/format-url.js");

/***/ }),

/***/ 9565:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router/utils/get-asset-path-from-route.js");

/***/ }),

/***/ 5789:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router/utils/get-next-pathname-info.js");

/***/ }),

/***/ 1897:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router/utils/is-bot.js");

/***/ }),

/***/ 1428:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router/utils/is-dynamic.js");

/***/ }),

/***/ 8854:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router/utils/parse-path.js");

/***/ }),

/***/ 1292:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router/utils/parse-relative-url.js");

/***/ }),

/***/ 4567:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router/utils/path-has-prefix.js");

/***/ }),

/***/ 979:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router/utils/querystring.js");

/***/ }),

/***/ 3297:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router/utils/remove-trailing-slash.js");

/***/ }),

/***/ 6052:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router/utils/resolve-rewrites.js");

/***/ }),

/***/ 4226:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router/utils/route-matcher.js");

/***/ }),

/***/ 5052:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router/utils/route-regex.js");

/***/ }),

/***/ 9232:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/utils.js");

/***/ }),

/***/ 6689:
/***/ ((module) => {

module.exports = require("react");

/***/ }),

/***/ 9051:
/***/ ((module) => {

module.exports = require("react-nice-select");

/***/ }),

/***/ 8096:
/***/ ((module) => {

module.exports = require("react-slick");

/***/ }),

/***/ 997:
/***/ ((module) => {

module.exports = require("react/jsx-runtime");

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../webpack-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = __webpack_require__.X(0, [676,664,753,745,968], () => (__webpack_exec__(1105)));
module.exports = __webpack_exports__;

})();