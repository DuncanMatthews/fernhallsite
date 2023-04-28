"use strict";
(() => {
var exports = {};
exports.id = 359;
exports.ids = [359];
exports.modules = {

/***/ 3272:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "default": () => (/* binding */ index_4)
});

// EXTERNAL MODULE: external "react/jsx-runtime"
var jsx_runtime_ = __webpack_require__(997);
// EXTERNAL MODULE: ./node_modules/next/link.js
var next_link = __webpack_require__(1664);
var link_default = /*#__PURE__*/__webpack_require__.n(next_link);
// EXTERNAL MODULE: external "react"
var external_react_ = __webpack_require__(6689);
// EXTERNAL MODULE: external "react-bootstrap"
var external_react_bootstrap_ = __webpack_require__(358);
// EXTERNAL MODULE: external "react-slick"
var external_react_slick_ = __webpack_require__(8096);
var external_react_slick_default = /*#__PURE__*/__webpack_require__.n(external_react_slick_);
// EXTERNAL MODULE: ./src/components/OrgariumAcc.js
var OrgariumAcc = __webpack_require__(5170);
// EXTERNAL MODULE: ./src/sliderProps.js
var sliderProps = __webpack_require__(5968);
;// CONCATENATED MODULE: ./src/components/sliders/Hero4Slider.js





class Hero4Slider extends external_react_.Component {
    constructor(props){
        super(props);
        this.next = this.next.bind(this);
        this.previous = this.previous.bind(this);
    }
    next() {
        this.slider.slickNext();
    }
    previous() {
        this.slider.slickPrev();
    }
    render() {
        return /*#__PURE__*/ (0,jsx_runtime_.jsxs)("section", {
            className: "hero-area-four",
            children: [
                /*#__PURE__*/ (0,jsx_runtime_.jsxs)((external_react_slick_default()), {
                    ...sliderProps/* heroSliderTwo */.C5,
                    ref: (c)=>this.slider = c,
                    className: "hero-slider-two",
                    children: [
                        /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                            className: "single-slider p-r z-1",
                            children: [
                                /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                    className: "image-layer bg_cover",
                                    style: {
                                        backgroundImage: "url(assets/images/hero/hero-four-slider-1.jpg)"
                                    }
                                }),
                                /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                    className: "container",
                                    children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                                        className: "row align-items-center",
                                        children: [
                                            /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                                className: "col-xl-7 col-lg-8",
                                                children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                                                    className: "hero-content text-white",
                                                    children: [
                                                        /*#__PURE__*/ jsx_runtime_.jsx("span", {
                                                            className: "tag-line",
                                                            "data-animation": "fadeInDown",
                                                            "data-delay": ".4s",
                                                            children: "Fresh Dairy Farms"
                                                        }),
                                                        /*#__PURE__*/ jsx_runtime_.jsx("h1", {
                                                            "data-animation": "fadeInUp",
                                                            "data-delay": ".5s",
                                                            children: "Trusted Dairy Farming"
                                                        }),
                                                        /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                                                            className: "hero-button",
                                                            "data-animation": "fadeInDown",
                                                            "data-delay": ".6s",
                                                            children: [
                                                                /*#__PURE__*/ jsx_runtime_.jsx((link_default()), {
                                                                    href: "/about",
                                                                    children: /*#__PURE__*/ jsx_runtime_.jsx("a", {
                                                                        className: "main-btn btn-yellow",
                                                                        children: "Learn About Us"
                                                                    })
                                                                }),
                                                                /*#__PURE__*/ jsx_runtime_.jsx((link_default()), {
                                                                    href: "/portfolio-grid",
                                                                    children: /*#__PURE__*/ jsx_runtime_.jsx("a", {
                                                                        className: "main-btn btn-white",
                                                                        children: "Latest Project"
                                                                    })
                                                                })
                                                            ]
                                                        })
                                                    ]
                                                })
                                            }),
                                            /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                                className: "col-xl-5 col-lg-4",
                                                children: /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                                    className: "hero-play-box float-lg-right text-md-center wow fadeInRight",
                                                    "data-animation": "fadeInRight",
                                                    children: /*#__PURE__*/ jsx_runtime_.jsx("a", {
                                                        href: "https://www.youtube.com/watch?v=gOZ26jO6iXE",
                                                        className: "video-popup",
                                                        children: /*#__PURE__*/ jsx_runtime_.jsx("i", {
                                                            className: "fas fa-play"
                                                        })
                                                    })
                                                })
                                            })
                                        ]
                                    })
                                })
                            ]
                        }),
                        /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                            className: "single-slider p-r z-1",
                            children: [
                                /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                    className: "image-layer bg_cover",
                                    style: {
                                        backgroundImage: "url(assets/images/hero/hero-four-slider-2.jpg)"
                                    }
                                }),
                                /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                    className: "container",
                                    children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                                        className: "row align-items-center",
                                        children: [
                                            /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                                className: "col-xl-7 col-lg-8",
                                                children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                                                    className: "hero-content text-white",
                                                    children: [
                                                        /*#__PURE__*/ jsx_runtime_.jsx("span", {
                                                            className: "tag-line",
                                                            "data-animation": "fadeInDown",
                                                            "data-delay": ".4s",
                                                            children: "Fresh Dairy Farms"
                                                        }),
                                                        /*#__PURE__*/ jsx_runtime_.jsx("h1", {
                                                            "data-animation": "fadeInUp",
                                                            "data-delay": ".5s",
                                                            children: "Trusted Dairy Farming"
                                                        }),
                                                        /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                                                            className: "hero-button",
                                                            "data-animation": "fadeInDown",
                                                            "data-delay": ".6s",
                                                            children: [
                                                                /*#__PURE__*/ jsx_runtime_.jsx((link_default()), {
                                                                    href: "/about",
                                                                    children: /*#__PURE__*/ jsx_runtime_.jsx("a", {
                                                                        className: "main-btn btn-yellow",
                                                                        children: "Learn About Us"
                                                                    })
                                                                }),
                                                                /*#__PURE__*/ jsx_runtime_.jsx((link_default()), {
                                                                    href: "/portfolio-grid",
                                                                    children: /*#__PURE__*/ jsx_runtime_.jsx("a", {
                                                                        className: "main-btn btn-white",
                                                                        children: "Latest Project"
                                                                    })
                                                                })
                                                            ]
                                                        })
                                                    ]
                                                })
                                            }),
                                            /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                                className: "col-xl-5 col-lg-4",
                                                children: /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                                    className: "hero-play-box float-lg-right text-md-center wow fadeInRight",
                                                    "data-animation": "fadeInRight",
                                                    children: /*#__PURE__*/ jsx_runtime_.jsx("a", {
                                                        href: "https://www.youtube.com/watch?v=gOZ26jO6iXE",
                                                        className: "video-popup",
                                                        children: /*#__PURE__*/ jsx_runtime_.jsx("i", {
                                                            className: "fas fa-play"
                                                        })
                                                    })
                                                })
                                            })
                                        ]
                                    })
                                })
                            ]
                        }),
                        /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                            className: "single-slider p-r z-1",
                            children: [
                                /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                    className: "image-layer bg_cover",
                                    style: {
                                        backgroundImage: "url(assets/images/hero/hero-four-slider-3.jpg)"
                                    }
                                }),
                                /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                    className: "container",
                                    children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                                        className: "row align-items-center",
                                        children: [
                                            /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                                className: "col-xl-7 col-lg-8",
                                                children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                                                    className: "hero-content text-white",
                                                    children: [
                                                        /*#__PURE__*/ jsx_runtime_.jsx("span", {
                                                            className: "tag-line",
                                                            "data-animation": "fadeInDown",
                                                            "data-delay": ".4s",
                                                            children: "Fresh Dairy Farms"
                                                        }),
                                                        /*#__PURE__*/ jsx_runtime_.jsx("h1", {
                                                            "data-animation": "fadeInUp",
                                                            "data-delay": ".5s",
                                                            children: "Trusted Dairy Farming"
                                                        }),
                                                        /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                                                            className: "hero-button",
                                                            "data-animation": "fadeInDown",
                                                            "data-delay": ".6s",
                                                            children: [
                                                                /*#__PURE__*/ jsx_runtime_.jsx((link_default()), {
                                                                    href: "/about",
                                                                    children: /*#__PURE__*/ jsx_runtime_.jsx("a", {
                                                                        className: "main-btn btn-yellow",
                                                                        children: "Learn About Us"
                                                                    })
                                                                }),
                                                                /*#__PURE__*/ jsx_runtime_.jsx((link_default()), {
                                                                    href: "/portfolio-grid",
                                                                    children: /*#__PURE__*/ jsx_runtime_.jsx("a", {
                                                                        className: "main-btn btn-white",
                                                                        children: "Latest Project"
                                                                    })
                                                                })
                                                            ]
                                                        })
                                                    ]
                                                })
                                            }),
                                            /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                                className: "col-xl-5 col-lg-4",
                                                children: /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                                    className: "hero-play-box float-lg-right text-md-center",
                                                    "data-animation": "fadeInRight",
                                                    children: /*#__PURE__*/ jsx_runtime_.jsx("a", {
                                                        href: "https://www.youtube.com/watch?v=gOZ26jO6iXE",
                                                        className: "video-popup",
                                                        children: /*#__PURE__*/ jsx_runtime_.jsx("i", {
                                                            className: "fas fa-play"
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
                }),
                /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                    className: "hero-arrows",
                    children: [
                        /*#__PURE__*/ jsx_runtime_.jsx("div", {
                            className: "prev slick-arrow",
                            onClick: this.previous,
                            children: /*#__PURE__*/ jsx_runtime_.jsx("i", {
                                className: "far fa-arrow-left"
                            })
                        }),
                        /*#__PURE__*/ jsx_runtime_.jsx("div", {
                            className: "next slick-arrow",
                            onClick: this.next,
                            children: /*#__PURE__*/ jsx_runtime_.jsx("i", {
                                className: "far fa-arrow-right"
                            })
                        })
                    ]
                })
            ]
        });
    }
}

// EXTERNAL MODULE: ./src/layouts/Layout.js + 7 modules
var Layout = __webpack_require__(3753);
;// CONCATENATED MODULE: ./pages/index-4.js









const Index4 = ()=>{
    const { 0: active , 1: setActive  } = (0,external_react_.useState)("collapse0");
    return /*#__PURE__*/ (0,jsx_runtime_.jsxs)(Layout/* default */.Z, {
        header: 4,
        footer: 4,
        children: [
            /*#__PURE__*/ jsx_runtime_.jsx(Hero4Slider, {}),
            /*#__PURE__*/ jsx_runtime_.jsx("section", {
                className: "about-section-two p-r z-1",
                children: /*#__PURE__*/ jsx_runtime_.jsx("div", {
                    className: "container",
                    children: /*#__PURE__*/ jsx_runtime_.jsx("div", {
                        className: "about-wrapper",
                        children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                            className: "row align-items-center",
                            children: [
                                /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                    className: "col-lg-5",
                                    children: /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                        className: "about-five_image-box mb-40 wow fadeInLeft",
                                        children: /*#__PURE__*/ jsx_runtime_.jsx("img", {
                                            src: "assets/images/about/img-3.jpg",
                                            alt: "About Image"
                                        })
                                    })
                                }),
                                /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                    className: "col-lg-7",
                                    children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                                        className: "about-content-box content-box-gap pl-lg-60 pr-lg-70 mb-40 wow fadeInRight",
                                        children: [
                                            /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                                                className: "section-title section-title-left mb-35",
                                                children: [
                                                    /*#__PURE__*/ jsx_runtime_.jsx("span", {
                                                        className: "sub-title",
                                                        children: "About Us"
                                                    }),
                                                    /*#__PURE__*/ jsx_runtime_.jsx("h2", {
                                                        children: "We’re Best Dairy Milk Provider Farms"
                                                    })
                                                ]
                                            }),
                                            /*#__PURE__*/ (0,jsx_runtime_.jsxs)("p", {
                                                children: [
                                                    "Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam eaque quae abillo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo enim ipsam voluptatem quia",
                                                    " "
                                                ]
                                            }),
                                            /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                                                className: "avatar-box d-flex align-items-center",
                                                children: [
                                                    /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                                        className: "thumb mr-20",
                                                        children: /*#__PURE__*/ jsx_runtime_.jsx("img", {
                                                            src: "assets/images/user-1.jpg",
                                                            alt: "Admin Thumb"
                                                        })
                                                    }),
                                                    /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                                        className: "content",
                                                        children: /*#__PURE__*/ jsx_runtime_.jsx("img", {
                                                            src: "assets/images/sign-1.png",
                                                            alt: "Sign"
                                                        })
                                                    })
                                                ]
                                            })
                                        ]
                                    })
                                })
                            ]
                        })
                    })
                })
            }),
            /*#__PURE__*/ jsx_runtime_.jsx("section", {
                className: "category-section pt-90",
                children: /*#__PURE__*/ jsx_runtime_.jsx("div", {
                    className: "container",
                    children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                        className: "category-wrapper",
                        children: [
                            /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                className: "row justify-content-center",
                                children: /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                    className: "col-xl-6 col-lg-10",
                                    children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                                        className: "section-title text-center mb-50 wow fadeInDown",
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
                                })
                            }),
                            /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                                className: "row justify-content-center",
                                children: [
                                    /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                        className: "col-xl-3 col-lg-4 col-md-6 col-sm-12",
                                        children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                                            className: "single-category-box text-center mb-40 wow fadeInUp",
                                            children: [
                                                /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                                    className: "icon",
                                                    children: /*#__PURE__*/ jsx_runtime_.jsx("img", {
                                                        src: "assets/images/icon/icon-13.png",
                                                        alt: ""
                                                    })
                                                }),
                                                /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                                    className: "text",
                                                    children: /*#__PURE__*/ jsx_runtime_.jsx("h3", {
                                                        className: "title",
                                                        children: /*#__PURE__*/ jsx_runtime_.jsx((link_default()), {
                                                            href: "/",
                                                            children: /*#__PURE__*/ jsx_runtime_.jsx("a", {
                                                                children: "Fresh Cows Meat and Milks"
                                                            })
                                                        })
                                                    })
                                                })
                                            ]
                                        })
                                    }),
                                    /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                        className: "col-xl-3 col-lg-4 col-md-6 col-sm-12",
                                        children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                                            className: "single-category-box text-center mb-40 wow fadeInDown",
                                            children: [
                                                /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                                    className: "icon",
                                                    children: /*#__PURE__*/ jsx_runtime_.jsx("img", {
                                                        src: "assets/images/icon/icon-14.png",
                                                        alt: ""
                                                    })
                                                }),
                                                /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                                    className: "text",
                                                    children: /*#__PURE__*/ jsx_runtime_.jsx("h3", {
                                                        className: "title",
                                                        children: /*#__PURE__*/ jsx_runtime_.jsx((link_default()), {
                                                            href: "/",
                                                            children: /*#__PURE__*/ jsx_runtime_.jsx("a", {
                                                                children: "Fresh Chicken Meats"
                                                            })
                                                        })
                                                    })
                                                })
                                            ]
                                        })
                                    }),
                                    /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                        className: "col-xl-3 col-lg-4 col-md-6 col-sm-12",
                                        children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                                            className: "single-category-box text-center mb-40 wow fadeInUp",
                                            children: [
                                                /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                                    className: "icon",
                                                    children: /*#__PURE__*/ jsx_runtime_.jsx("img", {
                                                        src: "assets/images/icon/icon-15.png",
                                                        alt: ""
                                                    })
                                                }),
                                                /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                                    className: "text",
                                                    children: /*#__PURE__*/ jsx_runtime_.jsx("h3", {
                                                        className: "title",
                                                        children: /*#__PURE__*/ jsx_runtime_.jsx((link_default()), {
                                                            href: "/",
                                                            children: /*#__PURE__*/ jsx_runtime_.jsx("a", {
                                                                children: "Fresh Duck Meat and Eggs"
                                                            })
                                                        })
                                                    })
                                                })
                                            ]
                                        })
                                    }),
                                    /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                        className: "col-xl-3 col-lg-4 col-md-6 col-sm-12",
                                        children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                                            className: "single-category-box text-center mb-40 wow fadeInDown",
                                            children: [
                                                /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                                    className: "icon",
                                                    children: /*#__PURE__*/ jsx_runtime_.jsx("img", {
                                                        src: "assets/images/icon/icon-16.png",
                                                        alt: ""
                                                    })
                                                }),
                                                /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                                    className: "text",
                                                    children: /*#__PURE__*/ jsx_runtime_.jsx("h3", {
                                                        className: "title",
                                                        children: /*#__PURE__*/ jsx_runtime_.jsx((link_default()), {
                                                            href: "/",
                                                            children: /*#__PURE__*/ jsx_runtime_.jsx("a", {
                                                                children: "Fresh Sheep Meat and Milks"
                                                            })
                                                        })
                                                    })
                                                })
                                            ]
                                        })
                                    }),
                                    /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                        className: "col-xl-3 col-lg-4 col-md-6 col-sm-12",
                                        children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                                            className: "single-category-box text-center mb-40 wow fadeInUp",
                                            children: [
                                                /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                                    className: "icon",
                                                    children: /*#__PURE__*/ jsx_runtime_.jsx("img", {
                                                        src: "assets/images/icon/icon-17.png",
                                                        alt: ""
                                                    })
                                                }),
                                                /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                                    className: "text",
                                                    children: /*#__PURE__*/ jsx_runtime_.jsx("h3", {
                                                        className: "title",
                                                        children: /*#__PURE__*/ jsx_runtime_.jsx((link_default()), {
                                                            href: "/",
                                                            children: /*#__PURE__*/ jsx_runtime_.jsx("a", {
                                                                children: "Fresh Cows Meat and Milks"
                                                            })
                                                        })
                                                    })
                                                })
                                            ]
                                        })
                                    }),
                                    /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                        className: "col-xl-3 col-lg-4 col-md-6 col-sm-12",
                                        children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                                            className: "single-category-box text-center mb-40 wow fadeInDown",
                                            children: [
                                                /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                                    className: "icon",
                                                    children: /*#__PURE__*/ jsx_runtime_.jsx("img", {
                                                        src: "assets/images/icon/icon-18.png",
                                                        alt: ""
                                                    })
                                                }),
                                                /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                                    className: "text",
                                                    children: /*#__PURE__*/ jsx_runtime_.jsx("h3", {
                                                        className: "title",
                                                        children: /*#__PURE__*/ jsx_runtime_.jsx((link_default()), {
                                                            href: "/",
                                                            children: /*#__PURE__*/ jsx_runtime_.jsx("a", {
                                                                children: "Fresh Goat Meat and Milks"
                                                            })
                                                        })
                                                    })
                                                })
                                            ]
                                        })
                                    }),
                                    /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                        className: "col-xl-3 col-lg-4 col-md-6 col-sm-12",
                                        children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                                            className: "single-category-box text-center mb-40 wow fadeInUp",
                                            children: [
                                                /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                                    className: "icon",
                                                    children: /*#__PURE__*/ jsx_runtime_.jsx("img", {
                                                        src: "assets/images/icon/icon-19.png",
                                                        alt: ""
                                                    })
                                                }),
                                                /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                                    className: "text",
                                                    children: /*#__PURE__*/ jsx_runtime_.jsx("h3", {
                                                        className: "title",
                                                        children: /*#__PURE__*/ jsx_runtime_.jsx((link_default()), {
                                                            href: "/",
                                                            children: /*#__PURE__*/ jsx_runtime_.jsx("a", {
                                                                children: "Fresh Pork Meat and Milks"
                                                            })
                                                        })
                                                    })
                                                })
                                            ]
                                        })
                                    }),
                                    /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                        className: "col-xl-3 col-lg-4 col-md-6 col-sm-12",
                                        children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                                            className: "single-category-box text-center mb-40 wow fadeInDown",
                                            children: [
                                                /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                                    className: "icon",
                                                    children: /*#__PURE__*/ jsx_runtime_.jsx("img", {
                                                        src: "assets/images/icon/icon-20.png",
                                                        alt: ""
                                                    })
                                                }),
                                                /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                                    className: "text",
                                                    children: /*#__PURE__*/ jsx_runtime_.jsx("h3", {
                                                        className: "title",
                                                        children: /*#__PURE__*/ jsx_runtime_.jsx((link_default()), {
                                                            href: "/",
                                                            children: /*#__PURE__*/ jsx_runtime_.jsx("a", {
                                                                children: "Fresh Hen Meat and Eggs"
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
                })
            }),
            /*#__PURE__*/ jsx_runtime_.jsx("section", {
                className: "intro-video-two bg_cover",
                style: {
                    backgroundImage: "url(assets/images/bg/intro-bg-3.jpg)"
                },
                children: /*#__PURE__*/ jsx_runtime_.jsx("div", {
                    className: "container",
                    children: /*#__PURE__*/ jsx_runtime_.jsx("div", {
                        className: "row",
                        children: /*#__PURE__*/ jsx_runtime_.jsx("div", {
                            className: "col-lg-12",
                            children: /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                className: "play-content-box text-center",
                                children: /*#__PURE__*/ jsx_runtime_.jsx("a", {
                                    href: "https://www.youtube.com/watch?v=gOZ26jO6iXE",
                                    className: "video-popup",
                                    children: /*#__PURE__*/ jsx_runtime_.jsx("i", {
                                        className: "fas fa-play"
                                    })
                                })
                            })
                        })
                    })
                })
            }),
            /*#__PURE__*/ jsx_runtime_.jsx("section", {
                className: "team-section pt-130",
                children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                    className: "container",
                    children: [
                        /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                            className: "row align-items-end",
                            children: [
                                /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                    className: "col-xl-6 col-lg-8",
                                    children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                                        className: "section-title mb-60 wow fadeInLeft",
                                        children: [
                                            /*#__PURE__*/ jsx_runtime_.jsx("span", {
                                                className: "sub-title",
                                                children: "Our Farmers"
                                            }),
                                            /*#__PURE__*/ jsx_runtime_.jsx("h2", {
                                                children: "We Have Lot’s Of Experience Team Members"
                                            })
                                        ]
                                    })
                                }),
                                /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                    className: "col-xl-6 col-lg-4",
                                    children: /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                        className: "team-button float-lg-right mb-60 wow fadeInRight",
                                        children: /*#__PURE__*/ jsx_runtime_.jsx((link_default()), {
                                            href: "/farmers",
                                            children: /*#__PURE__*/ jsx_runtime_.jsx("a", {
                                                className: "main-btn bordered-btn bordered-yellow",
                                                children: "Become a Member"
                                            })
                                        })
                                    })
                                })
                            ]
                        }),
                        /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                            className: "row justify-content-center",
                            children: [
                                /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                    className: "col-xl-3 col-lg-4 col-md-6 col-sm-12",
                                    children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                                        className: "team-member_two text-center mb-40 wow fadeInUp",
                                        children: [
                                            /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                                                className: "member-img",
                                                children: [
                                                    /*#__PURE__*/ jsx_runtime_.jsx("img", {
                                                        src: "assets/images/team/img-1.jpg",
                                                        alt: "Member Image"
                                                    }),
                                                    /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                                        className: "hover-overlay"
                                                    }),
                                                    /*#__PURE__*/ (0,jsx_runtime_.jsxs)("ul", {
                                                        className: "social-link",
                                                        children: [
                                                            /*#__PURE__*/ jsx_runtime_.jsx("li", {
                                                                children: /*#__PURE__*/ jsx_runtime_.jsx("a", {
                                                                    href: "#",
                                                                    children: /*#__PURE__*/ jsx_runtime_.jsx("i", {
                                                                        className: "fab fa-facebook-f"
                                                                    })
                                                                })
                                                            }),
                                                            /*#__PURE__*/ jsx_runtime_.jsx("li", {
                                                                children: /*#__PURE__*/ jsx_runtime_.jsx("a", {
                                                                    href: "#",
                                                                    children: /*#__PURE__*/ jsx_runtime_.jsx("i", {
                                                                        className: "fab fa-twitter"
                                                                    })
                                                                })
                                                            }),
                                                            /*#__PURE__*/ jsx_runtime_.jsx("li", {
                                                                children: /*#__PURE__*/ jsx_runtime_.jsx("a", {
                                                                    href: "#",
                                                                    children: /*#__PURE__*/ jsx_runtime_.jsx("i", {
                                                                        className: "fab fa-linkedin"
                                                                    })
                                                                })
                                                            }),
                                                            /*#__PURE__*/ jsx_runtime_.jsx("li", {
                                                                children: /*#__PURE__*/ jsx_runtime_.jsx("a", {
                                                                    href: "#",
                                                                    children: /*#__PURE__*/ jsx_runtime_.jsx("i", {
                                                                        className: "fab fa-youtube"
                                                                    })
                                                                })
                                                            })
                                                        ]
                                                    })
                                                ]
                                            }),
                                            /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                                                className: "member-info",
                                                children: [
                                                    /*#__PURE__*/ jsx_runtime_.jsx("h3", {
                                                        className: "title",
                                                        children: /*#__PURE__*/ jsx_runtime_.jsx((link_default()), {
                                                            href: "/farmers",
                                                            children: /*#__PURE__*/ jsx_runtime_.jsx("a", {
                                                                children: "Dennis P. Russell"
                                                            })
                                                        })
                                                    }),
                                                    /*#__PURE__*/ jsx_runtime_.jsx("p", {
                                                        className: "position",
                                                        children: "Food Farmers"
                                                    })
                                                ]
                                            })
                                        ]
                                    })
                                }),
                                /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                    className: "col-xl-3 col-lg-4 col-md-6 col-sm-12",
                                    children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                                        className: "team-member_two text-center mb-40 wow fadeInDown",
                                        children: [
                                            /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                                                className: "member-img",
                                                children: [
                                                    /*#__PURE__*/ jsx_runtime_.jsx("img", {
                                                        src: "assets/images/team/img-2.jpg",
                                                        alt: "Member Image"
                                                    }),
                                                    /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                                        className: "hover-overlay"
                                                    }),
                                                    /*#__PURE__*/ (0,jsx_runtime_.jsxs)("ul", {
                                                        className: "social-link",
                                                        children: [
                                                            /*#__PURE__*/ jsx_runtime_.jsx("li", {
                                                                children: /*#__PURE__*/ jsx_runtime_.jsx("a", {
                                                                    href: "#",
                                                                    children: /*#__PURE__*/ jsx_runtime_.jsx("i", {
                                                                        className: "fab fa-facebook-f"
                                                                    })
                                                                })
                                                            }),
                                                            /*#__PURE__*/ jsx_runtime_.jsx("li", {
                                                                children: /*#__PURE__*/ jsx_runtime_.jsx("a", {
                                                                    href: "#",
                                                                    children: /*#__PURE__*/ jsx_runtime_.jsx("i", {
                                                                        className: "fab fa-twitter"
                                                                    })
                                                                })
                                                            }),
                                                            /*#__PURE__*/ jsx_runtime_.jsx("li", {
                                                                children: /*#__PURE__*/ jsx_runtime_.jsx("a", {
                                                                    href: "#",
                                                                    children: /*#__PURE__*/ jsx_runtime_.jsx("i", {
                                                                        className: "fab fa-linkedin"
                                                                    })
                                                                })
                                                            }),
                                                            /*#__PURE__*/ jsx_runtime_.jsx("li", {
                                                                children: /*#__PURE__*/ jsx_runtime_.jsx("a", {
                                                                    href: "#",
                                                                    children: /*#__PURE__*/ jsx_runtime_.jsx("i", {
                                                                        className: "fab fa-youtube"
                                                                    })
                                                                })
                                                            })
                                                        ]
                                                    })
                                                ]
                                            }),
                                            /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                                                className: "member-info",
                                                children: [
                                                    /*#__PURE__*/ jsx_runtime_.jsx("h3", {
                                                        className: "title",
                                                        children: /*#__PURE__*/ jsx_runtime_.jsx((link_default()), {
                                                            href: "/farmers",
                                                            children: /*#__PURE__*/ jsx_runtime_.jsx("a", {
                                                                children: "David M. Hower"
                                                            })
                                                        })
                                                    }),
                                                    /*#__PURE__*/ jsx_runtime_.jsx("p", {
                                                        className: "position",
                                                        children: "Food Farmers"
                                                    })
                                                ]
                                            })
                                        ]
                                    })
                                }),
                                /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                    className: "col-xl-3 col-lg-4 col-md-6 col-sm-12",
                                    children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                                        className: "team-member_two text-center mb-40 wow fadeInUp",
                                        children: [
                                            /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                                                className: "member-img",
                                                children: [
                                                    /*#__PURE__*/ jsx_runtime_.jsx("img", {
                                                        src: "assets/images/team/img-3.jpg",
                                                        alt: "Member Image"
                                                    }),
                                                    /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                                        className: "hover-overlay"
                                                    }),
                                                    /*#__PURE__*/ (0,jsx_runtime_.jsxs)("ul", {
                                                        className: "social-link",
                                                        children: [
                                                            /*#__PURE__*/ jsx_runtime_.jsx("li", {
                                                                children: /*#__PURE__*/ jsx_runtime_.jsx("a", {
                                                                    href: "#",
                                                                    children: /*#__PURE__*/ jsx_runtime_.jsx("i", {
                                                                        className: "fab fa-facebook-f"
                                                                    })
                                                                })
                                                            }),
                                                            /*#__PURE__*/ jsx_runtime_.jsx("li", {
                                                                children: /*#__PURE__*/ jsx_runtime_.jsx("a", {
                                                                    href: "#",
                                                                    children: /*#__PURE__*/ jsx_runtime_.jsx("i", {
                                                                        className: "fab fa-twitter"
                                                                    })
                                                                })
                                                            }),
                                                            /*#__PURE__*/ jsx_runtime_.jsx("li", {
                                                                children: /*#__PURE__*/ jsx_runtime_.jsx("a", {
                                                                    href: "#",
                                                                    children: /*#__PURE__*/ jsx_runtime_.jsx("i", {
                                                                        className: "fab fa-linkedin"
                                                                    })
                                                                })
                                                            }),
                                                            /*#__PURE__*/ jsx_runtime_.jsx("li", {
                                                                children: /*#__PURE__*/ jsx_runtime_.jsx("a", {
                                                                    href: "#",
                                                                    children: /*#__PURE__*/ jsx_runtime_.jsx("i", {
                                                                        className: "fab fa-youtube"
                                                                    })
                                                                })
                                                            })
                                                        ]
                                                    })
                                                ]
                                            }),
                                            /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                                                className: "member-info",
                                                children: [
                                                    /*#__PURE__*/ jsx_runtime_.jsx("h3", {
                                                        className: "title",
                                                        children: /*#__PURE__*/ jsx_runtime_.jsx((link_default()), {
                                                            href: "/farmers",
                                                            children: /*#__PURE__*/ jsx_runtime_.jsx("a", {
                                                                children: "Richard M. Howell"
                                                            })
                                                        })
                                                    }),
                                                    /*#__PURE__*/ jsx_runtime_.jsx("p", {
                                                        className: "position",
                                                        children: "Food Farmers"
                                                    })
                                                ]
                                            })
                                        ]
                                    })
                                }),
                                /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                    className: "col-xl-3 col-lg-4 col-md-6 col-sm-12",
                                    children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                                        className: "team-member_two text-center mb-40 wow fadeInDown",
                                        children: [
                                            /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                                                className: "member-img",
                                                children: [
                                                    /*#__PURE__*/ jsx_runtime_.jsx("img", {
                                                        src: "assets/images/team/img-4.jpg",
                                                        alt: "Member Image"
                                                    }),
                                                    /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                                        className: "hover-overlay"
                                                    }),
                                                    /*#__PURE__*/ (0,jsx_runtime_.jsxs)("ul", {
                                                        className: "social-link",
                                                        children: [
                                                            /*#__PURE__*/ jsx_runtime_.jsx("li", {
                                                                children: /*#__PURE__*/ jsx_runtime_.jsx("a", {
                                                                    href: "#",
                                                                    children: /*#__PURE__*/ jsx_runtime_.jsx("i", {
                                                                        className: "fab fa-facebook-f"
                                                                    })
                                                                })
                                                            }),
                                                            /*#__PURE__*/ jsx_runtime_.jsx("li", {
                                                                children: /*#__PURE__*/ jsx_runtime_.jsx("a", {
                                                                    href: "#",
                                                                    children: /*#__PURE__*/ jsx_runtime_.jsx("i", {
                                                                        className: "fab fa-twitter"
                                                                    })
                                                                })
                                                            }),
                                                            /*#__PURE__*/ jsx_runtime_.jsx("li", {
                                                                children: /*#__PURE__*/ jsx_runtime_.jsx("a", {
                                                                    href: "#",
                                                                    children: /*#__PURE__*/ jsx_runtime_.jsx("i", {
                                                                        className: "fab fa-linkedin"
                                                                    })
                                                                })
                                                            }),
                                                            /*#__PURE__*/ jsx_runtime_.jsx("li", {
                                                                children: /*#__PURE__*/ jsx_runtime_.jsx("a", {
                                                                    href: "#",
                                                                    children: /*#__PURE__*/ jsx_runtime_.jsx("i", {
                                                                        className: "fab fa-youtube"
                                                                    })
                                                                })
                                                            })
                                                        ]
                                                    })
                                                ]
                                            }),
                                            /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                                                className: "member-info",
                                                children: [
                                                    /*#__PURE__*/ jsx_runtime_.jsx("h3", {
                                                        className: "title",
                                                        children: /*#__PURE__*/ jsx_runtime_.jsx((link_default()), {
                                                            href: "/farmers",
                                                            children: /*#__PURE__*/ jsx_runtime_.jsx("a", {
                                                                children: "Keneth R. Williams"
                                                            })
                                                        })
                                                    }),
                                                    /*#__PURE__*/ jsx_runtime_.jsx("p", {
                                                        className: "position",
                                                        children: "Food Farmers"
                                                    })
                                                ]
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
                className: "project-section pt-90",
                children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                    className: "container-fluid",
                    children: [
                        /*#__PURE__*/ jsx_runtime_.jsx("div", {
                            className: "row justify-content-center",
                            children: /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                className: "col-xl-5 col-lg-10",
                                children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                                    className: "section-title text-center mb-60 wow fadeInDown",
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
                            ...sliderProps/* projectsSliderThree */.hS,
                            className: "projects-slider-three",
                            children: [
                                /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                    className: "project-item-four wow fadeInUp",
                                    children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                                        className: "img-holder",
                                        children: [
                                            /*#__PURE__*/ jsx_runtime_.jsx("img", {
                                                src: "assets/images/portfolio/portfolio-1.jpg",
                                                alt: ""
                                            }),
                                            /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                                                className: "hover-portfolio",
                                                children: [
                                                    /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                                        className: "icon-btn",
                                                        children: /*#__PURE__*/ jsx_runtime_.jsx((link_default()), {
                                                            href: "/portfolio-details",
                                                            children: /*#__PURE__*/ jsx_runtime_.jsx("a", {
                                                                children: /*#__PURE__*/ jsx_runtime_.jsx("i", {
                                                                    className: "far fa-arrow-right"
                                                                })
                                                            })
                                                        })
                                                    }),
                                                    /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                                        className: "hover-content",
                                                        children: /*#__PURE__*/ jsx_runtime_.jsx("h3", {
                                                            className: "title",
                                                            children: /*#__PURE__*/ jsx_runtime_.jsx((link_default()), {
                                                                href: "/portfolio-details",
                                                                children: /*#__PURE__*/ jsx_runtime_.jsx("a", {
                                                                    children: "Cow Eating Gress From Farms"
                                                                })
                                                            })
                                                        })
                                                    })
                                                ]
                                            })
                                        ]
                                    })
                                }),
                                /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                    className: "project-item-four wow fadeInDown",
                                    children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                                        className: "img-holder",
                                        children: [
                                            /*#__PURE__*/ jsx_runtime_.jsx("img", {
                                                src: "assets/images/portfolio/portfolio-2.jpg",
                                                alt: ""
                                            }),
                                            /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                                                className: "hover-portfolio",
                                                children: [
                                                    /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                                        className: "icon-btn",
                                                        children: /*#__PURE__*/ jsx_runtime_.jsx((link_default()), {
                                                            href: "/portfolio-details",
                                                            children: /*#__PURE__*/ jsx_runtime_.jsx("a", {
                                                                children: /*#__PURE__*/ jsx_runtime_.jsx("i", {
                                                                    className: "far fa-arrow-right"
                                                                })
                                                            })
                                                        })
                                                    }),
                                                    /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                                        className: "hover-content",
                                                        children: /*#__PURE__*/ jsx_runtime_.jsx("h3", {
                                                            className: "title",
                                                            children: /*#__PURE__*/ jsx_runtime_.jsx((link_default()), {
                                                                href: "/portfolio-details",
                                                                children: /*#__PURE__*/ jsx_runtime_.jsx("a", {
                                                                    children: "Cow Eating Gress From Farms"
                                                                })
                                                            })
                                                        })
                                                    })
                                                ]
                                            })
                                        ]
                                    })
                                }),
                                /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                    className: "project-item-four wow fadeInUp",
                                    children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                                        className: "img-holder",
                                        children: [
                                            /*#__PURE__*/ jsx_runtime_.jsx("img", {
                                                src: "assets/images/portfolio/portfolio-3.jpg",
                                                alt: ""
                                            }),
                                            /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                                                className: "hover-portfolio",
                                                children: [
                                                    /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                                        className: "icon-btn",
                                                        children: /*#__PURE__*/ jsx_runtime_.jsx((link_default()), {
                                                            href: "/portfolio-details",
                                                            children: /*#__PURE__*/ jsx_runtime_.jsx("a", {
                                                                children: /*#__PURE__*/ jsx_runtime_.jsx("i", {
                                                                    className: "far fa-arrow-right"
                                                                })
                                                            })
                                                        })
                                                    }),
                                                    /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                                        className: "hover-content",
                                                        children: /*#__PURE__*/ jsx_runtime_.jsx("h3", {
                                                            className: "title",
                                                            children: /*#__PURE__*/ jsx_runtime_.jsx((link_default()), {
                                                                href: "/portfolio-details",
                                                                children: /*#__PURE__*/ jsx_runtime_.jsx("a", {
                                                                    children: "Cow Eating Gress From Farms"
                                                                })
                                                            })
                                                        })
                                                    })
                                                ]
                                            })
                                        ]
                                    })
                                }),
                                /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                    className: "project-item-four wow fadeInDown",
                                    children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                                        className: "img-holder",
                                        children: [
                                            /*#__PURE__*/ jsx_runtime_.jsx("img", {
                                                src: "assets/images/portfolio/portfolio-4.jpg",
                                                alt: ""
                                            }),
                                            /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                                                className: "hover-portfolio",
                                                children: [
                                                    /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                                        className: "icon-btn",
                                                        children: /*#__PURE__*/ jsx_runtime_.jsx((link_default()), {
                                                            href: "/portfolio-details",
                                                            children: /*#__PURE__*/ jsx_runtime_.jsx("a", {
                                                                children: /*#__PURE__*/ jsx_runtime_.jsx("i", {
                                                                    className: "far fa-arrow-right"
                                                                })
                                                            })
                                                        })
                                                    }),
                                                    /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                                        className: "hover-content",
                                                        children: /*#__PURE__*/ jsx_runtime_.jsx("h3", {
                                                            className: "title",
                                                            children: /*#__PURE__*/ jsx_runtime_.jsx((link_default()), {
                                                                href: "/portfolio-details",
                                                                children: /*#__PURE__*/ jsx_runtime_.jsx("a", {
                                                                    children: "Cow Eating Gress From Farms"
                                                                })
                                                            })
                                                        })
                                                    })
                                                ]
                                            })
                                        ]
                                    })
                                }),
                                /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                    className: "project-item-four wow fadeInUp",
                                    children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                                        className: "img-holder",
                                        children: [
                                            /*#__PURE__*/ jsx_runtime_.jsx("img", {
                                                src: "assets/images/portfolio/portfolio-5.jpg",
                                                alt: ""
                                            }),
                                            /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                                                className: "hover-portfolio",
                                                children: [
                                                    /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                                        className: "icon-btn",
                                                        children: /*#__PURE__*/ jsx_runtime_.jsx((link_default()), {
                                                            href: "/portfolio-details",
                                                            children: /*#__PURE__*/ jsx_runtime_.jsx("a", {
                                                                children: /*#__PURE__*/ jsx_runtime_.jsx("i", {
                                                                    className: "far fa-arrow-right"
                                                                })
                                                            })
                                                        })
                                                    }),
                                                    /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                                        className: "hover-content",
                                                        children: /*#__PURE__*/ jsx_runtime_.jsx("h3", {
                                                            className: "title",
                                                            children: /*#__PURE__*/ jsx_runtime_.jsx((link_default()), {
                                                                href: "/portfolio-details",
                                                                children: /*#__PURE__*/ jsx_runtime_.jsx("a", {
                                                                    children: "Cow Eating Gress From Farms"
                                                                })
                                                            })
                                                        })
                                                    })
                                                ]
                                            })
                                        ]
                                    })
                                }),
                                /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                    className: "project-item-four wow fadeInDown",
                                    children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                                        className: "img-holder",
                                        children: [
                                            /*#__PURE__*/ jsx_runtime_.jsx("img", {
                                                src: "assets/images/portfolio/portfolio-3.jpg",
                                                alt: ""
                                            }),
                                            /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                                                className: "hover-portfolio",
                                                children: [
                                                    /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                                        className: "icon-btn",
                                                        children: /*#__PURE__*/ jsx_runtime_.jsx((link_default()), {
                                                            href: "/portfolio-details",
                                                            children: /*#__PURE__*/ jsx_runtime_.jsx("a", {
                                                                children: /*#__PURE__*/ jsx_runtime_.jsx("i", {
                                                                    className: "far fa-arrow-right"
                                                                })
                                                            })
                                                        })
                                                    }),
                                                    /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                                        className: "hover-content",
                                                        children: /*#__PURE__*/ jsx_runtime_.jsx("h3", {
                                                            className: "title",
                                                            children: /*#__PURE__*/ jsx_runtime_.jsx((link_default()), {
                                                                href: "/portfolio-details",
                                                                children: /*#__PURE__*/ jsx_runtime_.jsx("a", {
                                                                    children: "Cow Eating Gress From Farms"
                                                                })
                                                            })
                                                        })
                                                    })
                                                ]
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
                className: "products-area pt-130 pb-170 p-r z-1",
                children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                    className: "container",
                    children: [
                        /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                            className: "row align-items-end",
                            children: [
                                /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                    className: "col-xl-6 col-lg-8",
                                    children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                                        className: "section-title mb-60 wow fadeInLeft",
                                        children: [
                                            /*#__PURE__*/ jsx_runtime_.jsx("span", {
                                                className: "sub-title",
                                                children: "Popular Products"
                                            }),
                                            /*#__PURE__*/ jsx_runtime_.jsx("h2", {
                                                children: "Some Fresh Cows Products Collection Our Shop"
                                            })
                                        ]
                                    })
                                }),
                                /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                    className: "col-xl-6 col-lg-4",
                                    children: /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                        className: "product-button float-lg-right wow fadeInRight mb-60",
                                        children: /*#__PURE__*/ jsx_runtime_.jsx((link_default()), {
                                            href: "/products",
                                            children: /*#__PURE__*/ jsx_runtime_.jsx("a", {
                                                className: "main-btn bordered-btn bordered-yellow",
                                                children: "View More Products"
                                            })
                                        })
                                    })
                                })
                            ]
                        }),
                        /*#__PURE__*/ (0,jsx_runtime_.jsxs)((external_react_slick_default()), {
                            ...sliderProps/* recentProductSlider */.iM,
                            className: "recent-product-slider",
                            children: [
                                /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                                    className: "single-product-item mb-40 wow fadeInDown",
                                    children: [
                                        /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                                            className: "product-img",
                                            children: [
                                                /*#__PURE__*/ jsx_runtime_.jsx("img", {
                                                    src: "assets/images/products/img-10.png",
                                                    alt: ""
                                                }),
                                                /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                                    className: "pc-btn",
                                                    children: "Food"
                                                }),
                                                /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                                    className: "cart-button",
                                                    children: /*#__PURE__*/ jsx_runtime_.jsx((link_default()), {
                                                        href: "/products",
                                                        children: /*#__PURE__*/ jsx_runtime_.jsx("a", {
                                                            className: "main-btn btn-yellow",
                                                            children: "Add to cart"
                                                        })
                                                    })
                                                })
                                            ]
                                        }),
                                        /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                                            className: "product-info",
                                            children: [
                                                /*#__PURE__*/ (0,jsx_runtime_.jsxs)("ul", {
                                                    className: "ratings",
                                                    children: [
                                                        /*#__PURE__*/ jsx_runtime_.jsx("li", {
                                                            children: /*#__PURE__*/ jsx_runtime_.jsx("i", {
                                                                className: "fas fa-star"
                                                            })
                                                        }),
                                                        /*#__PURE__*/ jsx_runtime_.jsx("li", {
                                                            children: /*#__PURE__*/ jsx_runtime_.jsx("i", {
                                                                className: "fas fa-star"
                                                            })
                                                        }),
                                                        /*#__PURE__*/ jsx_runtime_.jsx("li", {
                                                            children: /*#__PURE__*/ jsx_runtime_.jsx("i", {
                                                                className: "fas fa-star"
                                                            })
                                                        }),
                                                        /*#__PURE__*/ jsx_runtime_.jsx("li", {
                                                            children: /*#__PURE__*/ jsx_runtime_.jsx("i", {
                                                                className: "fas fa-star"
                                                            })
                                                        }),
                                                        /*#__PURE__*/ jsx_runtime_.jsx("li", {
                                                            children: /*#__PURE__*/ jsx_runtime_.jsx("i", {
                                                                className: "fas fa-star"
                                                            })
                                                        })
                                                    ]
                                                }),
                                                /*#__PURE__*/ jsx_runtime_.jsx("h3", {
                                                    className: "title",
                                                    children: /*#__PURE__*/ jsx_runtime_.jsx((link_default()), {
                                                        href: "/product-details",
                                                        children: /*#__PURE__*/ jsx_runtime_.jsx("a", {
                                                            children: "Organice Delicious Pomegranate"
                                                        })
                                                    })
                                                }),
                                                /*#__PURE__*/ (0,jsx_runtime_.jsxs)("span", {
                                                    className: "price",
                                                    children: [
                                                        /*#__PURE__*/ jsx_runtime_.jsx("span", {
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
                                /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                                    className: "single-product-item mb-40 wow fadeInUp",
                                    children: [
                                        /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                                            className: "product-img",
                                            children: [
                                                /*#__PURE__*/ jsx_runtime_.jsx("img", {
                                                    src: "assets/images/products/img-11.png",
                                                    alt: ""
                                                }),
                                                /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                                    className: "pc-btn",
                                                    children: "Fish"
                                                }),
                                                /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                                    className: "cart-button",
                                                    children: /*#__PURE__*/ jsx_runtime_.jsx((link_default()), {
                                                        href: "/products",
                                                        children: /*#__PURE__*/ jsx_runtime_.jsx("a", {
                                                            className: "main-btn btn-yellow",
                                                            children: "Add to cart"
                                                        })
                                                    })
                                                })
                                            ]
                                        }),
                                        /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                                            className: "product-info",
                                            children: [
                                                /*#__PURE__*/ (0,jsx_runtime_.jsxs)("ul", {
                                                    className: "ratings",
                                                    children: [
                                                        /*#__PURE__*/ jsx_runtime_.jsx("li", {
                                                            children: /*#__PURE__*/ jsx_runtime_.jsx("i", {
                                                                className: "fas fa-star"
                                                            })
                                                        }),
                                                        /*#__PURE__*/ jsx_runtime_.jsx("li", {
                                                            children: /*#__PURE__*/ jsx_runtime_.jsx("i", {
                                                                className: "fas fa-star"
                                                            })
                                                        }),
                                                        /*#__PURE__*/ jsx_runtime_.jsx("li", {
                                                            children: /*#__PURE__*/ jsx_runtime_.jsx("i", {
                                                                className: "fas fa-star"
                                                            })
                                                        }),
                                                        /*#__PURE__*/ jsx_runtime_.jsx("li", {
                                                            children: /*#__PURE__*/ jsx_runtime_.jsx("i", {
                                                                className: "fas fa-star"
                                                            })
                                                        }),
                                                        /*#__PURE__*/ jsx_runtime_.jsx("li", {
                                                            children: /*#__PURE__*/ jsx_runtime_.jsx("i", {
                                                                className: "fas fa-star"
                                                            })
                                                        })
                                                    ]
                                                }),
                                                /*#__PURE__*/ jsx_runtime_.jsx("h3", {
                                                    className: "title",
                                                    children: /*#__PURE__*/ jsx_runtime_.jsx((link_default()), {
                                                        href: "/product-details",
                                                        children: /*#__PURE__*/ jsx_runtime_.jsx("a", {
                                                            children: "100% Natural Fresh Sea Fish"
                                                        })
                                                    })
                                                }),
                                                /*#__PURE__*/ (0,jsx_runtime_.jsxs)("span", {
                                                    className: "price",
                                                    children: [
                                                        /*#__PURE__*/ jsx_runtime_.jsx("span", {
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
                                /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                                    className: "single-product-item mb-40 wow fadeInDown",
                                    children: [
                                        /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                                            className: "product-img",
                                            children: [
                                                /*#__PURE__*/ jsx_runtime_.jsx("img", {
                                                    src: "assets/images/products/img-12.png",
                                                    alt: ""
                                                }),
                                                /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                                    className: "pc-btn",
                                                    children: "Food"
                                                }),
                                                /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                                    className: "cart-button",
                                                    children: /*#__PURE__*/ jsx_runtime_.jsx((link_default()), {
                                                        href: "/products",
                                                        children: /*#__PURE__*/ jsx_runtime_.jsx("a", {
                                                            className: "main-btn btn-yellow",
                                                            children: "Add to cart"
                                                        })
                                                    })
                                                })
                                            ]
                                        }),
                                        /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                                            className: "product-info",
                                            children: [
                                                /*#__PURE__*/ (0,jsx_runtime_.jsxs)("ul", {
                                                    className: "ratings",
                                                    children: [
                                                        /*#__PURE__*/ jsx_runtime_.jsx("li", {
                                                            children: /*#__PURE__*/ jsx_runtime_.jsx("i", {
                                                                className: "fas fa-star"
                                                            })
                                                        }),
                                                        /*#__PURE__*/ jsx_runtime_.jsx("li", {
                                                            children: /*#__PURE__*/ jsx_runtime_.jsx("i", {
                                                                className: "fas fa-star"
                                                            })
                                                        }),
                                                        /*#__PURE__*/ jsx_runtime_.jsx("li", {
                                                            children: /*#__PURE__*/ jsx_runtime_.jsx("i", {
                                                                className: "fas fa-star"
                                                            })
                                                        }),
                                                        /*#__PURE__*/ jsx_runtime_.jsx("li", {
                                                            children: /*#__PURE__*/ jsx_runtime_.jsx("i", {
                                                                className: "fas fa-star"
                                                            })
                                                        }),
                                                        /*#__PURE__*/ jsx_runtime_.jsx("li", {
                                                            children: /*#__PURE__*/ jsx_runtime_.jsx("i", {
                                                                className: "fas fa-star"
                                                            })
                                                        })
                                                    ]
                                                }),
                                                /*#__PURE__*/ jsx_runtime_.jsx("h3", {
                                                    className: "title",
                                                    children: /*#__PURE__*/ jsx_runtime_.jsx((link_default()), {
                                                        href: "/product-details",
                                                        children: /*#__PURE__*/ jsx_runtime_.jsx("a", {
                                                            children: "Organice Delicious Cutting Pear"
                                                        })
                                                    })
                                                }),
                                                /*#__PURE__*/ (0,jsx_runtime_.jsxs)("span", {
                                                    className: "price",
                                                    children: [
                                                        /*#__PURE__*/ jsx_runtime_.jsx("span", {
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
                                /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                                    className: "single-product-item mb-40 wow fadeInUp",
                                    children: [
                                        /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                                            className: "product-img",
                                            children: [
                                                /*#__PURE__*/ jsx_runtime_.jsx("img", {
                                                    src: "assets/images/products/img-13.png",
                                                    alt: ""
                                                }),
                                                /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                                    className: "pc-btn",
                                                    children: "Vegetable"
                                                }),
                                                /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                                    className: "cart-button",
                                                    children: /*#__PURE__*/ jsx_runtime_.jsx((link_default()), {
                                                        href: "/products",
                                                        children: /*#__PURE__*/ jsx_runtime_.jsx("a", {
                                                            className: "main-btn btn-yellow",
                                                            children: "Add to cart"
                                                        })
                                                    })
                                                })
                                            ]
                                        }),
                                        /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                                            className: "product-info",
                                            children: [
                                                /*#__PURE__*/ (0,jsx_runtime_.jsxs)("ul", {
                                                    className: "ratings",
                                                    children: [
                                                        /*#__PURE__*/ jsx_runtime_.jsx("li", {
                                                            children: /*#__PURE__*/ jsx_runtime_.jsx("i", {
                                                                className: "fas fa-star"
                                                            })
                                                        }),
                                                        /*#__PURE__*/ jsx_runtime_.jsx("li", {
                                                            children: /*#__PURE__*/ jsx_runtime_.jsx("i", {
                                                                className: "fas fa-star"
                                                            })
                                                        }),
                                                        /*#__PURE__*/ jsx_runtime_.jsx("li", {
                                                            children: /*#__PURE__*/ jsx_runtime_.jsx("i", {
                                                                className: "fas fa-star"
                                                            })
                                                        }),
                                                        /*#__PURE__*/ jsx_runtime_.jsx("li", {
                                                            children: /*#__PURE__*/ jsx_runtime_.jsx("i", {
                                                                className: "fas fa-star"
                                                            })
                                                        }),
                                                        /*#__PURE__*/ jsx_runtime_.jsx("li", {
                                                            children: /*#__PURE__*/ jsx_runtime_.jsx("i", {
                                                                className: "fas fa-star"
                                                            })
                                                        })
                                                    ]
                                                }),
                                                /*#__PURE__*/ jsx_runtime_.jsx("h3", {
                                                    className: "title",
                                                    children: /*#__PURE__*/ jsx_runtime_.jsx((link_default()), {
                                                        href: "/product-details",
                                                        children: /*#__PURE__*/ jsx_runtime_.jsx("a", {
                                                            children: "Organice Delicious Fresh Tomato"
                                                        })
                                                    })
                                                }),
                                                /*#__PURE__*/ (0,jsx_runtime_.jsxs)("span", {
                                                    className: "price",
                                                    children: [
                                                        /*#__PURE__*/ jsx_runtime_.jsx("span", {
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
                                /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                                    className: "single-product-item mb-40 wow fadeInDown",
                                    children: [
                                        /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                                            className: "product-img",
                                            children: [
                                                /*#__PURE__*/ jsx_runtime_.jsx("img", {
                                                    src: "assets/images/products/img-11.png",
                                                    alt: ""
                                                }),
                                                /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                                    className: "pc-btn",
                                                    children: "Fish"
                                                }),
                                                /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                                    className: "cart-button",
                                                    children: /*#__PURE__*/ jsx_runtime_.jsx((link_default()), {
                                                        href: "/products",
                                                        children: /*#__PURE__*/ jsx_runtime_.jsx("a", {
                                                            className: "main-btn btn-yellow",
                                                            children: "Add to cart"
                                                        })
                                                    })
                                                })
                                            ]
                                        }),
                                        /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                                            className: "product-info",
                                            children: [
                                                /*#__PURE__*/ (0,jsx_runtime_.jsxs)("ul", {
                                                    className: "ratings",
                                                    children: [
                                                        /*#__PURE__*/ jsx_runtime_.jsx("li", {
                                                            children: /*#__PURE__*/ jsx_runtime_.jsx("i", {
                                                                className: "fas fa-star"
                                                            })
                                                        }),
                                                        /*#__PURE__*/ jsx_runtime_.jsx("li", {
                                                            children: /*#__PURE__*/ jsx_runtime_.jsx("i", {
                                                                className: "fas fa-star"
                                                            })
                                                        }),
                                                        /*#__PURE__*/ jsx_runtime_.jsx("li", {
                                                            children: /*#__PURE__*/ jsx_runtime_.jsx("i", {
                                                                className: "fas fa-star"
                                                            })
                                                        }),
                                                        /*#__PURE__*/ jsx_runtime_.jsx("li", {
                                                            children: /*#__PURE__*/ jsx_runtime_.jsx("i", {
                                                                className: "fas fa-star"
                                                            })
                                                        }),
                                                        /*#__PURE__*/ jsx_runtime_.jsx("li", {
                                                            children: /*#__PURE__*/ jsx_runtime_.jsx("i", {
                                                                className: "fas fa-star"
                                                            })
                                                        })
                                                    ]
                                                }),
                                                /*#__PURE__*/ jsx_runtime_.jsx("h3", {
                                                    className: "title",
                                                    children: /*#__PURE__*/ jsx_runtime_.jsx((link_default()), {
                                                        href: "/product-details",
                                                        children: /*#__PURE__*/ jsx_runtime_.jsx("a", {
                                                            children: "100% Natural Fresh Sea Fish"
                                                        })
                                                    })
                                                }),
                                                /*#__PURE__*/ (0,jsx_runtime_.jsxs)("span", {
                                                    className: "price",
                                                    children: [
                                                        /*#__PURE__*/ jsx_runtime_.jsx("span", {
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
            }),
            /*#__PURE__*/ jsx_runtime_.jsx("section", {
                className: "cta-section",
                children: /*#__PURE__*/ jsx_runtime_.jsx("div", {
                    className: "container-fluid",
                    children: /*#__PURE__*/ jsx_runtime_.jsx("div", {
                        className: "cta-wrap-two bg_cover pb-130",
                        style: {
                            backgroundImage: "url(assets/images/bg/cta-bg-1.jpg)"
                        },
                        children: /*#__PURE__*/ jsx_runtime_.jsx("div", {
                            className: "container",
                            children: /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                className: "row",
                                children: /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                    className: "col-lg-6",
                                    children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                                        className: "cta-content-box wow fadeInDown",
                                        children: [
                                            /*#__PURE__*/ jsx_runtime_.jsx("span", {
                                                className: "tag-line",
                                                children: "Get In Touch"
                                            }),
                                            /*#__PURE__*/ jsx_runtime_.jsx("h2", {
                                                children: "Need Organic Cow Milk & Meats "
                                            }),
                                            /*#__PURE__*/ jsx_runtime_.jsx("p", {
                                                children: "Sed perspiciatis unde omnis iste natus voluptatem accusantium doloremque laudantium totam reaperia inventore veritatis et quasi architecto"
                                            }),
                                            /*#__PURE__*/ jsx_runtime_.jsx((link_default()), {
                                                href: "/farmers",
                                                children: /*#__PURE__*/ jsx_runtime_.jsx("a", {
                                                    className: "main-btn bordered-btn",
                                                    children: "Meet With Us"
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
                className: "faqs-section pt-130 pb-80",
                children: /*#__PURE__*/ jsx_runtime_.jsx("div", {
                    className: "container",
                    children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                        className: "row",
                        children: [
                            /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                className: "col-lg-6",
                                children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                                    className: "faq-one_img-box mb-50",
                                    children: [
                                        /*#__PURE__*/ jsx_runtime_.jsx("img", {
                                            src: "assets/images/faq/faq-1.jpg",
                                            className: "faq-img-one wow fadeInUp",
                                            alt: "Faq Image"
                                        }),
                                        /*#__PURE__*/ jsx_runtime_.jsx("img", {
                                            src: "assets/images/faq/faq-2.jpg",
                                            className: "faq-img-two wow fadeInDown",
                                            alt: "Faq Image"
                                        })
                                    ]
                                })
                            }),
                            /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                className: "col-lg-6",
                                children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                                    className: "faq-one_content-box mb-50 pl-lg-70 wow fadeInRight",
                                    children: [
                                        /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                                            className: "section-title mb-60",
                                            children: [
                                                /*#__PURE__*/ jsx_runtime_.jsx("span", {
                                                    className: "sub-title",
                                                    children: "Why Choose Us"
                                                }),
                                                /*#__PURE__*/ jsx_runtime_.jsx("h2", {
                                                    children: "Why People’s Choose Farming Products"
                                                })
                                            ]
                                        }),
                                        /*#__PURE__*/ (0,jsx_runtime_.jsxs)(external_react_bootstrap_.Accordion, {
                                            defaultActiveKey: "collapse0",
                                            className: "accordion",
                                            id: "accordionOne",
                                            children: [
                                                /*#__PURE__*/ jsx_runtime_.jsx(OrgariumAcc/* default */.Z, {
                                                    title: "Best Organic Food Provider Since 1995",
                                                    event: "collapse0",
                                                    onClick: ()=>setActive("collapse0"),
                                                    active: active
                                                }),
                                                /*#__PURE__*/ jsx_runtime_.jsx(OrgariumAcc/* default */.Z, {
                                                    title: " Why Choose Our Products ?",
                                                    event: "collapse1",
                                                    onClick: ()=>setActive("collapse1"),
                                                    active: active
                                                }),
                                                /*#__PURE__*/ jsx_runtime_.jsx(OrgariumAcc/* default */.Z, {
                                                    title: "Organic Food and Biology Safe ?",
                                                    event: "collapse2",
                                                    onClick: ()=>setActive("collapse2"),
                                                    active: active
                                                }),
                                                /*#__PURE__*/ jsx_runtime_.jsx(OrgariumAcc/* default */.Z, {
                                                    title: "How Much Sweet &amp; Testy Our Foods ?",
                                                    event: "collapse3",
                                                    onClick: ()=>setActive("collapse3"),
                                                    active: active
                                                })
                                            ]
                                        })
                                    ]
                                })
                            })
                        ]
                    })
                })
            }),
            /*#__PURE__*/ jsx_runtime_.jsx("section", {
                className: "contact-section dark-black-bg pt-130 pb-80",
                children: /*#__PURE__*/ jsx_runtime_.jsx("div", {
                    className: "container",
                    children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                        className: "row",
                        children: [
                            /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                className: "col-lg-5",
                                children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                                    className: "contact-four_content-box wow fadeInLeft mb-50",
                                    children: [
                                        /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                                            className: "section-title section-title-white mb-60",
                                            children: [
                                                /*#__PURE__*/ jsx_runtime_.jsx("span", {
                                                    className: "sub-title",
                                                    children: "Get In Touch"
                                                }),
                                                /*#__PURE__*/ jsx_runtime_.jsx("h2", {
                                                    children: "Need Oragnic Foods! Send Us Message"
                                                })
                                            ]
                                        }),
                                        /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                            className: "contact-form",
                                            children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)("form", {
                                                onSubmit: (e)=>e.preventDefault(),
                                                children: [
                                                    /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                                        className: "form_group",
                                                        children: /*#__PURE__*/ jsx_runtime_.jsx("input", {
                                                            type: "text",
                                                            className: "form_control",
                                                            placeholder: "Full Name",
                                                            name: "name",
                                                            required: ""
                                                        })
                                                    }),
                                                    /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                                        className: "form_group",
                                                        children: /*#__PURE__*/ jsx_runtime_.jsx("input", {
                                                            type: "email",
                                                            className: "form_control",
                                                            placeholder: "Email Address",
                                                            name: "email",
                                                            required: ""
                                                        })
                                                    }),
                                                    /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                                        className: "form_group",
                                                        children: /*#__PURE__*/ jsx_runtime_.jsx("textarea", {
                                                            className: "form_control",
                                                            placeholder: "Write Message",
                                                            name: "message",
                                                            defaultValue: ""
                                                        })
                                                    }),
                                                    /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                                        className: "form_group",
                                                        children: /*#__PURE__*/ jsx_runtime_.jsx("button", {
                                                            className: "main-btn btn-yellow",
                                                            children: "Send Us Message"
                                                        })
                                                    })
                                                ]
                                            })
                                        })
                                    ]
                                })
                            }),
                            /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                className: "col-lg-7",
                                children: /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                    className: "map-box_one ml-lg-70 wow fadeInRight",
                                    children: /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                        className: "map-box mb-50",
                                        children: /*#__PURE__*/ jsx_runtime_.jsx("iframe", {
                                            src: "https://maps.google.com/maps?q=new%20york&t=&z=13&ie=UTF8&iwloc=&output=embed"
                                        })
                                    })
                                })
                            })
                        ]
                    })
                })
            }),
            /*#__PURE__*/ jsx_runtime_.jsx("section", {
                className: "testimonial-section pt-130",
                children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                    className: "container",
                    children: [
                        /*#__PURE__*/ jsx_runtime_.jsx("div", {
                            className: "row justify-content-center",
                            children: /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                className: "col-xl-6 col-lg-10",
                                children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                                    className: "section-title text-center mb-60 wow fadeInDown",
                                    children: [
                                        /*#__PURE__*/ jsx_runtime_.jsx("span", {
                                            className: "sub-title",
                                            children: "Clients Feedback"
                                        }),
                                        /*#__PURE__*/ jsx_runtime_.jsx("h2", {
                                            children: "What’s Our Client Say About Our Organic Foods"
                                        })
                                    ]
                                })
                            })
                        }),
                        /*#__PURE__*/ jsx_runtime_.jsx("div", {
                            className: "row justify-content-center",
                            children: /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                className: "col-xl-10",
                                children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                                    className: "row align-items-center",
                                    children: [
                                        /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                            className: "col-lg-6",
                                            children: /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                                className: "testimonial-img-box mb-40 wow fadeInLeft",
                                                children: /*#__PURE__*/ jsx_runtime_.jsx("img", {
                                                    src: "assets/images/testimonial/img-12.jpg",
                                                    alt: "testimonial image"
                                                })
                                            })
                                        }),
                                        /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                            className: "col-lg-6",
                                            children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                                                className: "testimonial-wrapper pl-lg-30 mb-40 wow fadeInRight",
                                                children: [
                                                    /*#__PURE__*/ (0,jsx_runtime_.jsxs)((external_react_slick_default()), {
                                                        ...sliderProps/* testimonialSliderFive */.Ys,
                                                        className: "testimonial-slider-five mb-55",
                                                        children: [
                                                            /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                                                className: "testimonial-item-four",
                                                                children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                                                                    className: "testimonial-content",
                                                                    children: [
                                                                        /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                                                                            className: "client-review-box d-flex",
                                                                            children: [
                                                                                /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                                                                    className: "client-thumb mb-10",
                                                                                    children: /*#__PURE__*/ jsx_runtime_.jsx("img", {
                                                                                        src: "assets/images/testimonial/company-1.png",
                                                                                        alt: ""
                                                                                    })
                                                                                }),
                                                                                /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                                                                                    className: "review-box mb-10",
                                                                                    children: [
                                                                                        /*#__PURE__*/ jsx_runtime_.jsx("span", {
                                                                                            children: "Quality Foods"
                                                                                        }),
                                                                                        /*#__PURE__*/ (0,jsx_runtime_.jsxs)("ul", {
                                                                                            className: "ratings",
                                                                                            children: [
                                                                                                /*#__PURE__*/ jsx_runtime_.jsx("li", {
                                                                                                    children: /*#__PURE__*/ jsx_runtime_.jsx("i", {
                                                                                                        className: "fas fa-star"
                                                                                                    })
                                                                                                }),
                                                                                                /*#__PURE__*/ jsx_runtime_.jsx("li", {
                                                                                                    children: /*#__PURE__*/ jsx_runtime_.jsx("i", {
                                                                                                        className: "fas fa-star"
                                                                                                    })
                                                                                                }),
                                                                                                /*#__PURE__*/ jsx_runtime_.jsx("li", {
                                                                                                    children: /*#__PURE__*/ jsx_runtime_.jsx("i", {
                                                                                                        className: "fas fa-star"
                                                                                                    })
                                                                                                }),
                                                                                                /*#__PURE__*/ jsx_runtime_.jsx("li", {
                                                                                                    children: /*#__PURE__*/ jsx_runtime_.jsx("i", {
                                                                                                        className: "fas fa-star"
                                                                                                    })
                                                                                                }),
                                                                                                /*#__PURE__*/ jsx_runtime_.jsx("li", {
                                                                                                    children: /*#__PURE__*/ jsx_runtime_.jsx("i", {
                                                                                                        className: "fas fa-star"
                                                                                                    })
                                                                                                })
                                                                                            ]
                                                                                        })
                                                                                    ]
                                                                                })
                                                                            ]
                                                                        }),
                                                                        /*#__PURE__*/ (0,jsx_runtime_.jsxs)("p", {
                                                                            children: [
                                                                                "Sed ut perspiciatis unde omnis iste natuses voluptatem accusantium doloremque lauda ntium totam rem aperiam eaque ipsa quaeab inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem voluptas sit aspernatur",
                                                                                " "
                                                                            ]
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
                                                            }),
                                                            /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                                                className: "testimonial-item-four",
                                                                children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                                                                    className: "testimonial-content",
                                                                    children: [
                                                                        /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                                                                            className: "client-review-box d-flex justify-content-between",
                                                                            children: [
                                                                                /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                                                                    className: "client-thumb mb-10",
                                                                                    children: /*#__PURE__*/ jsx_runtime_.jsx("img", {
                                                                                        src: "assets/images/testimonial/company-1.png",
                                                                                        alt: ""
                                                                                    })
                                                                                }),
                                                                                /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                                                                                    className: "review-box mb-10",
                                                                                    children: [
                                                                                        /*#__PURE__*/ jsx_runtime_.jsx("span", {
                                                                                            children: "Quality Foods"
                                                                                        }),
                                                                                        /*#__PURE__*/ (0,jsx_runtime_.jsxs)("ul", {
                                                                                            className: "ratings",
                                                                                            children: [
                                                                                                /*#__PURE__*/ jsx_runtime_.jsx("li", {
                                                                                                    children: /*#__PURE__*/ jsx_runtime_.jsx("i", {
                                                                                                        className: "fas fa-star"
                                                                                                    })
                                                                                                }),
                                                                                                /*#__PURE__*/ jsx_runtime_.jsx("li", {
                                                                                                    children: /*#__PURE__*/ jsx_runtime_.jsx("i", {
                                                                                                        className: "fas fa-star"
                                                                                                    })
                                                                                                }),
                                                                                                /*#__PURE__*/ jsx_runtime_.jsx("li", {
                                                                                                    children: /*#__PURE__*/ jsx_runtime_.jsx("i", {
                                                                                                        className: "fas fa-star"
                                                                                                    })
                                                                                                }),
                                                                                                /*#__PURE__*/ jsx_runtime_.jsx("li", {
                                                                                                    children: /*#__PURE__*/ jsx_runtime_.jsx("i", {
                                                                                                        className: "fas fa-star"
                                                                                                    })
                                                                                                }),
                                                                                                /*#__PURE__*/ jsx_runtime_.jsx("li", {
                                                                                                    children: /*#__PURE__*/ jsx_runtime_.jsx("i", {
                                                                                                        className: "fas fa-star"
                                                                                                    })
                                                                                                })
                                                                                            ]
                                                                                        })
                                                                                    ]
                                                                                })
                                                                            ]
                                                                        }),
                                                                        /*#__PURE__*/ (0,jsx_runtime_.jsxs)("p", {
                                                                            children: [
                                                                                "Sed ut perspiciatis unde omnis iste natuses voluptatem accusantium doloremque lauda ntium totam rem aperiam eaque ipsa quaeab inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem voluptas sit aspernatur",
                                                                                " "
                                                                            ]
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
                                                                                            children: "Jordan Michael"
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
                                                            }),
                                                            /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                                                className: "testimonial-item-four",
                                                                children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                                                                    className: "testimonial-content",
                                                                    children: [
                                                                        /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                                                                            className: "client-review-box d-flex",
                                                                            children: [
                                                                                /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                                                                    className: "client-thumb mb-10",
                                                                                    children: /*#__PURE__*/ jsx_runtime_.jsx("img", {
                                                                                        src: "assets/images/testimonial/company-1.png",
                                                                                        alt: ""
                                                                                    })
                                                                                }),
                                                                                /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                                                                                    className: "review-box mb-10",
                                                                                    children: [
                                                                                        /*#__PURE__*/ jsx_runtime_.jsx("span", {
                                                                                            children: "Quality Foods"
                                                                                        }),
                                                                                        /*#__PURE__*/ (0,jsx_runtime_.jsxs)("ul", {
                                                                                            className: "ratings",
                                                                                            children: [
                                                                                                /*#__PURE__*/ jsx_runtime_.jsx("li", {
                                                                                                    children: /*#__PURE__*/ jsx_runtime_.jsx("i", {
                                                                                                        className: "fas fa-star"
                                                                                                    })
                                                                                                }),
                                                                                                /*#__PURE__*/ jsx_runtime_.jsx("li", {
                                                                                                    children: /*#__PURE__*/ jsx_runtime_.jsx("i", {
                                                                                                        className: "fas fa-star"
                                                                                                    })
                                                                                                }),
                                                                                                /*#__PURE__*/ jsx_runtime_.jsx("li", {
                                                                                                    children: /*#__PURE__*/ jsx_runtime_.jsx("i", {
                                                                                                        className: "fas fa-star"
                                                                                                    })
                                                                                                }),
                                                                                                /*#__PURE__*/ jsx_runtime_.jsx("li", {
                                                                                                    children: /*#__PURE__*/ jsx_runtime_.jsx("i", {
                                                                                                        className: "fas fa-star"
                                                                                                    })
                                                                                                }),
                                                                                                /*#__PURE__*/ jsx_runtime_.jsx("li", {
                                                                                                    children: /*#__PURE__*/ jsx_runtime_.jsx("i", {
                                                                                                        className: "fas fa-star"
                                                                                                    })
                                                                                                })
                                                                                            ]
                                                                                        })
                                                                                    ]
                                                                                })
                                                                            ]
                                                                        }),
                                                                        /*#__PURE__*/ (0,jsx_runtime_.jsxs)("p", {
                                                                            children: [
                                                                                "Sed ut perspiciatis unde omnis iste natuses voluptatem accusantium doloremque lauda ntium totam rem aperiam eaque ipsa quaeab inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem voluptas sit aspernatur",
                                                                                " "
                                                                            ]
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
                                                            }),
                                                            /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                                                className: "testimonial-item-four",
                                                                children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                                                                    className: "testimonial-content",
                                                                    children: [
                                                                        /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                                                                            className: "client-review-box d-flex justify-content-between",
                                                                            children: [
                                                                                /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                                                                    className: "client-thumb mb-10",
                                                                                    children: /*#__PURE__*/ jsx_runtime_.jsx("img", {
                                                                                        src: "assets/images/testimonial/company-1.png",
                                                                                        alt: ""
                                                                                    })
                                                                                }),
                                                                                /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                                                                                    className: "review-box mb-10",
                                                                                    children: [
                                                                                        /*#__PURE__*/ jsx_runtime_.jsx("span", {
                                                                                            children: "Quality Foods"
                                                                                        }),
                                                                                        /*#__PURE__*/ (0,jsx_runtime_.jsxs)("ul", {
                                                                                            className: "ratings",
                                                                                            children: [
                                                                                                /*#__PURE__*/ jsx_runtime_.jsx("li", {
                                                                                                    children: /*#__PURE__*/ jsx_runtime_.jsx("i", {
                                                                                                        className: "fas fa-star"
                                                                                                    })
                                                                                                }),
                                                                                                /*#__PURE__*/ jsx_runtime_.jsx("li", {
                                                                                                    children: /*#__PURE__*/ jsx_runtime_.jsx("i", {
                                                                                                        className: "fas fa-star"
                                                                                                    })
                                                                                                }),
                                                                                                /*#__PURE__*/ jsx_runtime_.jsx("li", {
                                                                                                    children: /*#__PURE__*/ jsx_runtime_.jsx("i", {
                                                                                                        className: "fas fa-star"
                                                                                                    })
                                                                                                }),
                                                                                                /*#__PURE__*/ jsx_runtime_.jsx("li", {
                                                                                                    children: /*#__PURE__*/ jsx_runtime_.jsx("i", {
                                                                                                        className: "fas fa-star"
                                                                                                    })
                                                                                                }),
                                                                                                /*#__PURE__*/ jsx_runtime_.jsx("li", {
                                                                                                    children: /*#__PURE__*/ jsx_runtime_.jsx("i", {
                                                                                                        className: "fas fa-star"
                                                                                                    })
                                                                                                })
                                                                                            ]
                                                                                        })
                                                                                    ]
                                                                                })
                                                                            ]
                                                                        }),
                                                                        /*#__PURE__*/ (0,jsx_runtime_.jsxs)("p", {
                                                                            children: [
                                                                                "Sed ut perspiciatis unde omnis iste natuses voluptatem accusantium doloremque lauda ntium totam rem aperiam eaque ipsa quaeab inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem voluptas sit aspernatur",
                                                                                " "
                                                                            ]
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
                                                                                            children: "Jordan Michael"
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
                                                            })
                                                        ]
                                                    }),
                                                    /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                                        className: "testimonial-dots"
                                                    })
                                                ]
                                            })
                                        })
                                    ]
                                })
                            })
                        })
                    ]
                })
            }),
            /*#__PURE__*/ jsx_runtime_.jsx("section", {
                className: "blog-section pt-90 pb-90",
                children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                    className: "container",
                    children: [
                        /*#__PURE__*/ jsx_runtime_.jsx("div", {
                            className: "row justify-content-center",
                            children: /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                className: "col-xl-6 col-lg-10",
                                children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                                    className: "section-title text-center mb-60 wow fadeInDown",
                                    children: [
                                        /*#__PURE__*/ jsx_runtime_.jsx("span", {
                                            className: "sub-title",
                                            children: "Latest News Blog"
                                        }),
                                        /*#__PURE__*/ jsx_runtime_.jsx("h2", {
                                            children: "Read Latest News & Blog Get Every Updates"
                                        })
                                    ]
                                })
                            })
                        }),
                        /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                            className: "row justify-content-center",
                            children: [
                                /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                    className: "col-lg-4 col-md-6 col-sm-12",
                                    children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                                        className: "blog-post-item-four mb-40 wow fadeInUp",
                                        children: [
                                            /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                                                className: "post-thumbnail",
                                                children: [
                                                    /*#__PURE__*/ jsx_runtime_.jsx("img", {
                                                        src: "assets/images/blog/img-7.jpg",
                                                        alt: "Post Image"
                                                    }),
                                                    /*#__PURE__*/ (0,jsx_runtime_.jsxs)("a", {
                                                        href: "#",
                                                        className: "post-date",
                                                        children: [
                                                            "25 ",
                                                            /*#__PURE__*/ jsx_runtime_.jsx("span", {
                                                                children: "March"
                                                            })
                                                        ]
                                                    })
                                                ]
                                            }),
                                            /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                                                className: "entry-content",
                                                children: [
                                                    /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                                                        className: "content-inner",
                                                        children: [
                                                            /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                                                className: "post-meta",
                                                                children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)("ul", {
                                                                    children: [
                                                                        /*#__PURE__*/ jsx_runtime_.jsx("li", {
                                                                            children: /*#__PURE__*/ jsx_runtime_.jsx("span", {
                                                                                children: /*#__PURE__*/ jsx_runtime_.jsx("a", {
                                                                                    href: "#",
                                                                                    className: "cat-btn",
                                                                                    children: "Organic"
                                                                                })
                                                                            })
                                                                        }),
                                                                        /*#__PURE__*/ jsx_runtime_.jsx("li", {
                                                                            children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)("span", {
                                                                                children: [
                                                                                    /*#__PURE__*/ jsx_runtime_.jsx("i", {
                                                                                        className: "far fa-comments"
                                                                                    }),
                                                                                    /*#__PURE__*/ jsx_runtime_.jsx("a", {
                                                                                        href: "#",
                                                                                        children: "Comment (5)"
                                                                                    })
                                                                                ]
                                                                            })
                                                                        })
                                                                    ]
                                                                })
                                                            }),
                                                            /*#__PURE__*/ jsx_runtime_.jsx("h3", {
                                                                className: "title",
                                                                children: /*#__PURE__*/ jsx_runtime_.jsx((link_default()), {
                                                                    href: "/blog-details",
                                                                    children: /*#__PURE__*/ jsx_runtime_.jsx("a", {
                                                                        children: "Smashin Podcast Episode Ferdinande Web Dead"
                                                                    })
                                                                })
                                                            }),
                                                            /*#__PURE__*/ jsx_runtime_.jsx("p", {
                                                                children: "Sed ut perspiciatis unde omnis iste natus error voluptatem accusantium doloremque laudantium"
                                                            })
                                                        ]
                                                    }),
                                                    /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                                        className: "read-more",
                                                        children: /*#__PURE__*/ jsx_runtime_.jsx("a", {
                                                            href: "#",
                                                            className: "main-btn bordered-btn",
                                                            children: "Read More"
                                                        })
                                                    })
                                                ]
                                            })
                                        ]
                                    })
                                }),
                                /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                    className: "col-lg-4 col-md-6 col-sm-12",
                                    children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                                        className: "blog-post-item-four mb-40 wow fadeInDown",
                                        children: [
                                            /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                                                className: "post-thumbnail",
                                                children: [
                                                    /*#__PURE__*/ jsx_runtime_.jsx("img", {
                                                        src: "assets/images/blog/img-8.jpg",
                                                        alt: "Post Image"
                                                    }),
                                                    /*#__PURE__*/ (0,jsx_runtime_.jsxs)("a", {
                                                        href: "#",
                                                        className: "post-date",
                                                        children: [
                                                            "25 ",
                                                            /*#__PURE__*/ jsx_runtime_.jsx("span", {
                                                                children: "March"
                                                            })
                                                        ]
                                                    })
                                                ]
                                            }),
                                            /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                                                className: "entry-content",
                                                children: [
                                                    /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                                                        className: "content-inner",
                                                        children: [
                                                            /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                                                className: "post-meta",
                                                                children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)("ul", {
                                                                    children: [
                                                                        /*#__PURE__*/ jsx_runtime_.jsx("li", {
                                                                            children: /*#__PURE__*/ jsx_runtime_.jsx("span", {
                                                                                children: /*#__PURE__*/ jsx_runtime_.jsx("a", {
                                                                                    href: "#",
                                                                                    className: "cat-btn",
                                                                                    children: "Organic"
                                                                                })
                                                                            })
                                                                        }),
                                                                        /*#__PURE__*/ jsx_runtime_.jsx("li", {
                                                                            children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)("span", {
                                                                                children: [
                                                                                    /*#__PURE__*/ jsx_runtime_.jsx("i", {
                                                                                        className: "far fa-comments"
                                                                                    }),
                                                                                    /*#__PURE__*/ jsx_runtime_.jsx("a", {
                                                                                        href: "#",
                                                                                        children: "Comment (5)"
                                                                                    })
                                                                                ]
                                                                            })
                                                                        })
                                                                    ]
                                                                })
                                                            }),
                                                            /*#__PURE__*/ jsx_runtime_.jsx("h3", {
                                                                className: "title",
                                                                children: /*#__PURE__*/ jsx_runtime_.jsx((link_default()), {
                                                                    href: "/blog-details",
                                                                    children: /*#__PURE__*/ jsx_runtime_.jsx("a", {
                                                                        children: "Designing Better Links For Websites And Emails"
                                                                    })
                                                                })
                                                            }),
                                                            /*#__PURE__*/ jsx_runtime_.jsx("p", {
                                                                children: "Sed ut perspiciatis unde omnis iste natus error voluptatem accusantium doloremque laudantium"
                                                            })
                                                        ]
                                                    }),
                                                    /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                                        className: "read-more",
                                                        children: /*#__PURE__*/ jsx_runtime_.jsx("a", {
                                                            href: "#",
                                                            className: "main-btn bordered-btn",
                                                            children: "Read More"
                                                        })
                                                    })
                                                ]
                                            })
                                        ]
                                    })
                                }),
                                /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                    className: "col-lg-4 col-md-6 col-sm-12",
                                    children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                                        className: "blog-post-item-four mb-40 wow fadeInUp",
                                        children: [
                                            /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                                                className: "post-thumbnail",
                                                children: [
                                                    /*#__PURE__*/ jsx_runtime_.jsx("img", {
                                                        src: "assets/images/blog/img-9.jpg",
                                                        alt: "Post Image"
                                                    }),
                                                    /*#__PURE__*/ (0,jsx_runtime_.jsxs)("a", {
                                                        href: "#",
                                                        className: "post-date",
                                                        children: [
                                                            "25 ",
                                                            /*#__PURE__*/ jsx_runtime_.jsx("span", {
                                                                children: "March"
                                                            })
                                                        ]
                                                    })
                                                ]
                                            }),
                                            /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                                                className: "entry-content",
                                                children: [
                                                    /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                                                        className: "content-inner",
                                                        children: [
                                                            /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                                                className: "post-meta",
                                                                children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)("ul", {
                                                                    children: [
                                                                        /*#__PURE__*/ jsx_runtime_.jsx("li", {
                                                                            children: /*#__PURE__*/ jsx_runtime_.jsx("span", {
                                                                                children: /*#__PURE__*/ jsx_runtime_.jsx("a", {
                                                                                    href: "#",
                                                                                    className: "cat-btn",
                                                                                    children: "Organic"
                                                                                })
                                                                            })
                                                                        }),
                                                                        /*#__PURE__*/ jsx_runtime_.jsx("li", {
                                                                            children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)("span", {
                                                                                children: [
                                                                                    /*#__PURE__*/ jsx_runtime_.jsx("i", {
                                                                                        className: "far fa-comments"
                                                                                    }),
                                                                                    /*#__PURE__*/ jsx_runtime_.jsx("a", {
                                                                                        href: "#",
                                                                                        children: "Comment (5)"
                                                                                    })
                                                                                ]
                                                                            })
                                                                        })
                                                                    ]
                                                                })
                                                            }),
                                                            /*#__PURE__*/ jsx_runtime_.jsx("h3", {
                                                                className: "title",
                                                                children: /*#__PURE__*/ jsx_runtime_.jsx((link_default()), {
                                                                    href: "/blog-details",
                                                                    children: /*#__PURE__*/ jsx_runtime_.jsx("a", {
                                                                        children: "Front End Boiler Plate See And Starter KiSmashin"
                                                                    })
                                                                })
                                                            }),
                                                            /*#__PURE__*/ jsx_runtime_.jsx("p", {
                                                                children: "Sed ut perspiciatis unde omnis iste natus error voluptatem accusantium doloremque laudantium"
                                                            })
                                                        ]
                                                    }),
                                                    /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                                        className: "read-more",
                                                        children: /*#__PURE__*/ jsx_runtime_.jsx("a", {
                                                            href: "#",
                                                            className: "main-btn bordered-btn",
                                                            children: "Read More"
                                                        })
                                                    })
                                                ]
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
                className: "partners-one p-r z-1 pb-150",
                children: /*#__PURE__*/ jsx_runtime_.jsx("div", {
                    className: "container",
                    children: /*#__PURE__*/ jsx_runtime_.jsx("div", {
                        className: "partners-wrapper border-top-1 pt-80",
                        children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)((external_react_slick_default()), {
                            ...sliderProps/* logoSlider */.Ak,
                            className: "partner-slider-one wow fadeInDown",
                            children: [
                                /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                    className: "partner-item-two",
                                    children: /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                        className: "partner-img",
                                        children: /*#__PURE__*/ jsx_runtime_.jsx("img", {
                                            src: "assets/images/partner/img-7.png",
                                            alt: "partner image"
                                        })
                                    })
                                }),
                                /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                    className: "partner-item-two",
                                    children: /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                        className: "partner-img",
                                        children: /*#__PURE__*/ jsx_runtime_.jsx("img", {
                                            src: "assets/images/partner/img-8.png",
                                            alt: "partner image"
                                        })
                                    })
                                }),
                                /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                    className: "partner-item-two",
                                    children: /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                        className: "partner-img",
                                        children: /*#__PURE__*/ jsx_runtime_.jsx("img", {
                                            src: "assets/images/partner/img-9.png",
                                            alt: "partner image"
                                        })
                                    })
                                }),
                                /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                    className: "partner-item-two",
                                    children: /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                        className: "partner-img",
                                        children: /*#__PURE__*/ jsx_runtime_.jsx("img", {
                                            src: "assets/images/partner/img-10.png",
                                            alt: "partner image"
                                        })
                                    })
                                }),
                                /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                    className: "partner-item-two",
                                    children: /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                        className: "partner-img",
                                        children: /*#__PURE__*/ jsx_runtime_.jsx("img", {
                                            src: "assets/images/partner/img-11.png",
                                            alt: "partner image"
                                        })
                                    })
                                }),
                                /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                    className: "partner-item-two",
                                    children: /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                        className: "partner-img",
                                        children: /*#__PURE__*/ jsx_runtime_.jsx("img", {
                                            src: "assets/images/partner/img-12.png",
                                            alt: "partner image"
                                        })
                                    })
                                }),
                                /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                    className: "partner-item-two",
                                    children: /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                        className: "partner-img",
                                        children: /*#__PURE__*/ jsx_runtime_.jsx("img", {
                                            src: "assets/images/partner/img-10.png",
                                            alt: "partner image"
                                        })
                                    })
                                })
                            ]
                        })
                    })
                })
            })
        ]
    });
};
/* harmony default export */ const index_4 = (Index4);


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

/***/ 358:
/***/ ((module) => {

module.exports = require("react-bootstrap");

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
var __webpack_exports__ = __webpack_require__.X(0, [676,664,753,968,170], () => (__webpack_exec__(3272)));
module.exports = __webpack_exports__;

})();