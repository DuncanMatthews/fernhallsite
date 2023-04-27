"use strict";
(() => {
var exports = {};
exports.id = 772;
exports.ids = [772];
exports.modules = {

/***/ 7496:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "default": () => (/* binding */ index_5),
  "getStaticProps": () => (/* binding */ getStaticProps)
});

// EXTERNAL MODULE: external "react/jsx-runtime"
var jsx_runtime_ = __webpack_require__(997);
// EXTERNAL MODULE: ./node_modules/next/link.js
var next_link = __webpack_require__(1664);
var link_default = /*#__PURE__*/__webpack_require__.n(next_link);
// EXTERNAL MODULE: external "react-bootstrap"
var external_react_bootstrap_ = __webpack_require__(358);
// EXTERNAL MODULE: external "react-slick"
var external_react_slick_ = __webpack_require__(8096);
var external_react_slick_default = /*#__PURE__*/__webpack_require__.n(external_react_slick_);
// EXTERNAL MODULE: ./src/components/OrgariumCounter.js
var OrgariumCounter = __webpack_require__(9201);
// EXTERNAL MODULE: ./src/components/ProgressBar.js
var ProgressBar = __webpack_require__(5485);
// EXTERNAL MODULE: external "react"
var external_react_ = __webpack_require__(6689);
// EXTERNAL MODULE: ./src/sliderProps.js
var sliderProps = __webpack_require__(5968);
;// CONCATENATED MODULE: ./src/components/sliders/ProjectOneSlider.js





class ProjectOneSlider extends external_react_.Component {
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
        return /*#__PURE__*/ jsx_runtime_.jsx("section", {
            className: "projects-section pt-130 pb-95 p-r z-1",
            children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                className: "container",
                children: [
                    /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                        className: "row align-items-end",
                        children: [
                            /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                className: "col-lg-8 col-md-9",
                                children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                                    className: "section-title section-title-left mb-60 wow fadeInLeft",
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
                            }),
                            /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                className: "col-lg-4 col-md-3",
                                children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                                    className: "project-arrows mb-60 float-md-right wow fadeInRight",
                                    children: [
                                        /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                            className: "prev slick-arrow",
                                            onClick: this.previous,
                                            children: /*#__PURE__*/ jsx_runtime_.jsx("i", {
                                                className: "far fa-angle-left"
                                            })
                                        }),
                                        /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                            className: "next slick-arrow",
                                            onClick: this.next,
                                            children: /*#__PURE__*/ jsx_runtime_.jsx("i", {
                                                className: "far fa-angle-right"
                                            })
                                        })
                                    ]
                                })
                            })
                        ]
                    }),
                    /*#__PURE__*/ (0,jsx_runtime_.jsxs)((external_react_slick_default()), {
                        ref: (c)=>this.slider = c,
                        ...sliderProps/* projectsSliderOne */.cK,
                        className: "projects-slider-one",
                        children: [
                            /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                className: "project-item wow fadeInUp",
                                children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                                    className: "img-holder",
                                    children: [
                                        /*#__PURE__*/ jsx_runtime_.jsx("img", {
                                            src: "assets/images/portfolio/img-1.jpg",
                                            alt: "Gallery Image"
                                        }),
                                        /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                            className: "hover-portfolio",
                                            children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                                                className: "hover-content",
                                                children: [
                                                    /*#__PURE__*/ jsx_runtime_.jsx("h3", {
                                                        className: "title",
                                                        children: /*#__PURE__*/ jsx_runtime_.jsx((link_default()), {
                                                            href: "/portfolio-details",
                                                            children: /*#__PURE__*/ jsx_runtime_.jsx("a", {
                                                                children: "Golder Wheat"
                                                            })
                                                        })
                                                    }),
                                                    /*#__PURE__*/ (0,jsx_runtime_.jsxs)("p", {
                                                        children: [
                                                            /*#__PURE__*/ jsx_runtime_.jsx("a", {
                                                                href: "#",
                                                                children: "Agriculture"
                                                            }),
                                                            ",",
                                                            /*#__PURE__*/ jsx_runtime_.jsx("a", {
                                                                href: "#",
                                                                children: "Foods"
                                                            })
                                                        ]
                                                    })
                                                ]
                                            })
                                        })
                                    ]
                                })
                            }),
                            /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                className: "project-item wow fadeInDown",
                                children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                                    className: "img-holder",
                                    children: [
                                        /*#__PURE__*/ jsx_runtime_.jsx("img", {
                                            src: "assets/images/portfolio/img-2.jpg",
                                            alt: "Gallery Image"
                                        }),
                                        /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                            className: "hover-portfolio",
                                            children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                                                className: "hover-content",
                                                children: [
                                                    /*#__PURE__*/ jsx_runtime_.jsx("h3", {
                                                        className: "title",
                                                        children: /*#__PURE__*/ jsx_runtime_.jsx((link_default()), {
                                                            href: "/portfolio-details",
                                                            children: /*#__PURE__*/ jsx_runtime_.jsx("a", {
                                                                children: "Golder Wheat"
                                                            })
                                                        })
                                                    }),
                                                    /*#__PURE__*/ (0,jsx_runtime_.jsxs)("p", {
                                                        children: [
                                                            /*#__PURE__*/ jsx_runtime_.jsx("a", {
                                                                href: "#",
                                                                children: "Agriculture"
                                                            }),
                                                            ",",
                                                            /*#__PURE__*/ jsx_runtime_.jsx("a", {
                                                                href: "#",
                                                                children: "Foods"
                                                            })
                                                        ]
                                                    })
                                                ]
                                            })
                                        })
                                    ]
                                })
                            }),
                            /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                className: "project-item wow fadeInUp",
                                children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                                    className: "img-holder",
                                    children: [
                                        /*#__PURE__*/ jsx_runtime_.jsx("img", {
                                            src: "assets/images/portfolio/img-3.jpg",
                                            alt: "Gallery Image"
                                        }),
                                        /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                            className: "hover-portfolio",
                                            children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                                                className: "hover-content",
                                                children: [
                                                    /*#__PURE__*/ jsx_runtime_.jsx("h3", {
                                                        className: "title",
                                                        children: /*#__PURE__*/ jsx_runtime_.jsx((link_default()), {
                                                            href: "/portfolio-details",
                                                            children: /*#__PURE__*/ jsx_runtime_.jsx("a", {
                                                                children: "Golder Wheat"
                                                            })
                                                        })
                                                    }),
                                                    /*#__PURE__*/ (0,jsx_runtime_.jsxs)("p", {
                                                        children: [
                                                            /*#__PURE__*/ jsx_runtime_.jsx("a", {
                                                                href: "#",
                                                                children: "Agriculture"
                                                            }),
                                                            ",",
                                                            /*#__PURE__*/ jsx_runtime_.jsx("a", {
                                                                href: "#",
                                                                children: "Foods"
                                                            })
                                                        ]
                                                    })
                                                ]
                                            })
                                        })
                                    ]
                                })
                            }),
                            /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                className: "project-item wow fadeInDown",
                                children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                                    className: "img-holder",
                                    children: [
                                        /*#__PURE__*/ jsx_runtime_.jsx("img", {
                                            src: "assets/images/portfolio/img-2.jpg",
                                            alt: "Gallery Image"
                                        }),
                                        /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                            className: "hover-portfolio",
                                            children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                                                className: "hover-content",
                                                children: [
                                                    /*#__PURE__*/ jsx_runtime_.jsx("h3", {
                                                        className: "title",
                                                        children: /*#__PURE__*/ jsx_runtime_.jsx((link_default()), {
                                                            href: "/portfolio-details",
                                                            children: /*#__PURE__*/ jsx_runtime_.jsx("a", {
                                                                children: "Golder Wheat"
                                                            })
                                                        })
                                                    }),
                                                    /*#__PURE__*/ (0,jsx_runtime_.jsxs)("p", {
                                                        children: [
                                                            /*#__PURE__*/ jsx_runtime_.jsx("a", {
                                                                href: "#",
                                                                children: "Agriculture"
                                                            }),
                                                            ",",
                                                            /*#__PURE__*/ jsx_runtime_.jsx("a", {
                                                                href: "#",
                                                                children: "Foods"
                                                            })
                                                        ]
                                                    })
                                                ]
                                            })
                                        })
                                    ]
                                })
                            }),
                            /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                className: "project-item wow fadeInUp",
                                children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                                    className: "img-holder",
                                    children: [
                                        /*#__PURE__*/ jsx_runtime_.jsx("img", {
                                            src: "assets/images/portfolio/img-3.jpg",
                                            alt: "Gallery Image"
                                        }),
                                        /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                            className: "hover-portfolio",
                                            children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                                                className: "hover-content",
                                                children: [
                                                    /*#__PURE__*/ jsx_runtime_.jsx("h3", {
                                                        className: "title",
                                                        children: /*#__PURE__*/ jsx_runtime_.jsx((link_default()), {
                                                            href: "/portfolio-details",
                                                            children: /*#__PURE__*/ jsx_runtime_.jsx("a", {
                                                                children: "Golder Wheat"
                                                            })
                                                        })
                                                    }),
                                                    /*#__PURE__*/ (0,jsx_runtime_.jsxs)("p", {
                                                        children: [
                                                            /*#__PURE__*/ jsx_runtime_.jsx("a", {
                                                                href: "#",
                                                                children: "Agriculture"
                                                            }),
                                                            ",",
                                                            /*#__PURE__*/ jsx_runtime_.jsx("a", {
                                                                href: "#",
                                                                children: "Foods"
                                                            })
                                                        ]
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
        });
    }
}

;// CONCATENATED MODULE: ./utils/index.js
async function storeFront(query, variables = {}) {
    const response = await fetch("https://fernhall.myshopify.com/api/2023-04/graphql.json/", {
        method: "POST",
        headers: {
            "Content-Type": "application/json",
            "X-Shopify-Storefront-Access-Token": "046ea3cb9c453f2aa1a94046cb6cdd3a"
        },
        body: JSON.stringify({
            query,
            variables
        })
    });
    return response.json();
}

// EXTERNAL MODULE: ./src/layouts/Layout.js + 9 modules
var Layout = __webpack_require__(8974);
// EXTERNAL MODULE: ./node_modules/next/dist/server/request-meta.js
var request_meta = __webpack_require__(9433);
;// CONCATENATED MODULE: ./pages/index-5.js











const Index = ({ products  })=>{
    console.log({
        products
    });
    return /*#__PURE__*/ (0,jsx_runtime_.jsxs)(Layout/* default */.Z, {
        header: 1,
        children: [
            /*#__PURE__*/ jsx_runtime_.jsx("section", {
                className: "hero-area-one",
                children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)((external_react_slick_default()), {
                    ...sliderProps/* heroSliderOne */.cg,
                    className: "hero-slider-one",
                    children: [
                        /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                            className: "single-slider",
                            children: [
                                /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                    className: "image-layer bg_cover",
                                    style: {
                                        backgroundImage: "url(assets/images/hero/hero_one-slider-1.jpg)"
                                    }
                                }),
                                /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                    className: "container",
                                    children: /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                        className: "row justify-content-center",
                                        children: /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                            className: "col-lg-10",
                                            children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                                                className: "hero-content text-center",
                                                children: [
                                                    /*#__PURE__*/ jsx_runtime_.jsx("span", {
                                                        className: "tag-line",
                                                        "data-animation": "fadeInDown",
                                                        "data-delay": ".4s",
                                                        children: "Organic Farms"
                                                    }),
                                                    /*#__PURE__*/ jsx_runtime_.jsx("h1", {
                                                        "data-animation": "fadeInUp",
                                                        "data-delay": ".5s",
                                                        children: "Agriculture & Organic Farms"
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
                                                                    className: "main-btn bordered-btn bordered-white",
                                                                    children: "Latest Project"
                                                                })
                                                            })
                                                        ]
                                                    })
                                                ]
                                            })
                                        })
                                    })
                                })
                            ]
                        }),
                        /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                            className: "single-slider",
                            children: [
                                /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                    className: "image-layer bg_cover",
                                    style: {
                                        backgroundImage: "url(assets/images/hero/hero_one-slider-2.jpg)"
                                    }
                                }),
                                /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                    className: "container",
                                    children: /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                        className: "row justify-content-center",
                                        children: /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                            className: "col-lg-10",
                                            children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                                                className: "hero-content text-center",
                                                children: [
                                                    /*#__PURE__*/ jsx_runtime_.jsx("span", {
                                                        className: "tag-line",
                                                        "data-animation": "fadeInDown",
                                                        "data-delay": ".4s",
                                                        children: "Organic Farms"
                                                    }),
                                                    /*#__PURE__*/ jsx_runtime_.jsx("h1", {
                                                        "data-animation": "fadeInUp",
                                                        "data-delay": ".5s",
                                                        children: "Welcome to Organic Farms"
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
                                                                    className: "main-btn bordered-btn bordered-white",
                                                                    children: "Latest Project"
                                                                })
                                                            })
                                                        ]
                                                    })
                                                ]
                                            })
                                        })
                                    })
                                })
                            ]
                        }),
                        /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                            className: "single-slider",
                            children: [
                                /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                    className: "image-layer bg_cover",
                                    style: {
                                        backgroundImage: "url(assets/images/hero/hero_one-slider-3.jpg)"
                                    }
                                }),
                                /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                    className: "container",
                                    children: /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                        className: "row justify-content-center",
                                        children: /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                            className: "col-lg-10",
                                            children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                                                className: "hero-content text-center",
                                                children: [
                                                    /*#__PURE__*/ jsx_runtime_.jsx("span", {
                                                        className: "tag-line",
                                                        "data-animation": "fadeInDown",
                                                        "data-delay": ".4s",
                                                        children: "Organic Farms"
                                                    }),
                                                    /*#__PURE__*/ jsx_runtime_.jsx("h1", {
                                                        "data-animation": "fadeInUp",
                                                        "data-delay": ".5s",
                                                        children: "Organic & Fresh Testy Foods"
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
                                                                    className: "main-btn bordered-btn bordered-white",
                                                                    children: "Latest Project"
                                                                })
                                                            })
                                                        ]
                                                    })
                                                ]
                                            })
                                        })
                                    })
                                })
                            ]
                        }),
                        /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                            className: "single-slider",
                            children: [
                                /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                    className: "image-layer bg_cover",
                                    style: {
                                        backgroundImage: "url(assets/images/hero/hero_one-slider-4.jpg)"
                                    }
                                }),
                                /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                    className: "container",
                                    children: /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                        className: "row justify-content-center",
                                        children: /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                            className: "col-lg-10",
                                            children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                                                className: "hero-content text-center",
                                                children: [
                                                    /*#__PURE__*/ jsx_runtime_.jsx("span", {
                                                        className: "tag-line",
                                                        "data-animation": "fadeInDown",
                                                        "data-delay": ".4s",
                                                        children: "Organic Farms"
                                                    }),
                                                    /*#__PURE__*/ jsx_runtime_.jsx("h1", {
                                                        "data-animation": "fadeInUp",
                                                        "data-delay": ".5s",
                                                        children: "Welcome to Organic Farms"
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
                                                                    className: "main-btn bordered-btn bordered-white",
                                                                    children: "Latest Project"
                                                                })
                                                            })
                                                        ]
                                                    })
                                                ]
                                            })
                                        })
                                    })
                                })
                            ]
                        })
                    ]
                })
            }),
            /*#__PURE__*/ jsx_runtime_.jsx("section", {
                className: "features-section",
                children: /*#__PURE__*/ jsx_runtime_.jsx("div", {
                    className: "container-1350",
                    children: /*#__PURE__*/ jsx_runtime_.jsx("div", {
                        className: "features-wrap-one wow fadeInUp",
                        children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                            className: "row justify-content-center",
                            children: [
                                /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                    className: "col-xl-4 col-md-6 col-sm-12",
                                    children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                                        className: "features-item d-flex mb-30",
                                        children: [
                                            /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                                className: "fill-number",
                                                children: "01"
                                            }),
                                            /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                                className: "icon",
                                                children: /*#__PURE__*/ jsx_runtime_.jsx("i", {
                                                    className: "flaticon-tractor"
                                                })
                                            }),
                                            /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                                                className: "text",
                                                children: [
                                                    /*#__PURE__*/ jsx_runtime_.jsx("h5", {
                                                        children: "Modern Agriculture Equipment"
                                                    }),
                                                    /*#__PURE__*/ jsx_runtime_.jsx("p", {
                                                        children: "Sit amet consectetur adipiscing elit sed eiusmod tempor"
                                                    })
                                                ]
                                            })
                                        ]
                                    })
                                }),
                                /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                    className: "col-xl-4 col-md-6 col-sm-12",
                                    children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                                        className: "features-item d-flex mb-30",
                                        children: [
                                            /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                                className: "fill-number",
                                                children: "02"
                                            }),
                                            /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                                className: "icon",
                                                children: /*#__PURE__*/ jsx_runtime_.jsx("i", {
                                                    className: "flaticon-agriculture"
                                                })
                                            }),
                                            /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                                                className: "text",
                                                children: [
                                                    /*#__PURE__*/ jsx_runtime_.jsx("h5", {
                                                        children: "Organic and Fresh Harvest of Wheat"
                                                    }),
                                                    /*#__PURE__*/ jsx_runtime_.jsx("p", {
                                                        children: "Sit amet consectetur adipiscing elit sed eiusmod tempor"
                                                    })
                                                ]
                                            })
                                        ]
                                    })
                                }),
                                /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                    className: "col-xl-4 col-md-6 col-sm-12",
                                    children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                                        className: "features-item d-flex mb-30",
                                        children: [
                                            /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                                className: "fill-number",
                                                children: "01"
                                            }),
                                            /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                                className: "icon",
                                                children: /*#__PURE__*/ jsx_runtime_.jsx("i", {
                                                    className: "flaticon-social-care"
                                                })
                                            }),
                                            /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                                                className: "text",
                                                children: [
                                                    /*#__PURE__*/ jsx_runtime_.jsx("h5", {
                                                        children: "Lot’s Of Professional & Expert Farmers"
                                                    }),
                                                    /*#__PURE__*/ jsx_runtime_.jsx("p", {
                                                        children: "Sit amet consectetur adipiscing elit sed eiusmod tempor"
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
                className: "about-section p-r z-1 pt-130 pb-80",
                children: /*#__PURE__*/ jsx_runtime_.jsx("div", {
                    className: "container",
                    children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                        className: "row align-items-center",
                        children: [
                            /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                className: "col-xl-5 col-lg-6",
                                children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                                    className: "about-one_content-box mb-50",
                                    children: [
                                        /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                                            className: "section-title section-title-left mb-30 wow fadeInUp",
                                            children: [
                                                /*#__PURE__*/ jsx_runtime_.jsx("span", {
                                                    className: "sub-title",
                                                    children: "About Us"
                                                }),
                                                /*#__PURE__*/ jsx_runtime_.jsx("h2", {
                                                    children: "We’re Best Agriculture & Organic Firms"
                                                })
                                            ]
                                        }),
                                        /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                            className: "quote-text mb-35 wow fadeInDown",
                                            "data-wow-delay": ".3s",
                                            children: /*#__PURE__*/ jsx_runtime_.jsx("p", {
                                                children: "Sed ut perspiciatis omnis natus error volup accusantiue doloremque laudantium totam aperiam eaque quae abllcs veritatis quasi architecto beatae vitae."
                                            })
                                        }),
                                        /*#__PURE__*/ jsx_runtime_.jsx(external_react_bootstrap_.Tab.Container, {
                                            defaultActiveKey: "mission",
                                            children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                                                className: "tab-content-box wow fadeInUp",
                                                children: [
                                                    /*#__PURE__*/ (0,jsx_runtime_.jsxs)(external_react_bootstrap_.Nav, {
                                                        as: "ul",
                                                        className: "nav nav-tabs mb-20",
                                                        children: [
                                                            /*#__PURE__*/ jsx_runtime_.jsx("li", {
                                                                className: "nav-item",
                                                                children: /*#__PURE__*/ jsx_runtime_.jsx(external_react_bootstrap_.Nav.Link, {
                                                                    as: "a",
                                                                    className: "nav-link",
                                                                    "data-toggle": "tab",
                                                                    eventKey: "mission",
                                                                    href: "#mission",
                                                                    children: "Our Mission"
                                                                })
                                                            }),
                                                            /*#__PURE__*/ jsx_runtime_.jsx("li", {
                                                                className: "nav-item",
                                                                children: /*#__PURE__*/ jsx_runtime_.jsx(external_react_bootstrap_.Nav.Link, {
                                                                    as: "a",
                                                                    className: "nav-link",
                                                                    "data-toggle": "tab",
                                                                    eventKey: "vision",
                                                                    href: "#vision",
                                                                    children: "Our Vision"
                                                                })
                                                            })
                                                        ]
                                                    }),
                                                    /*#__PURE__*/ (0,jsx_runtime_.jsxs)(external_react_bootstrap_.Tab.Content, {
                                                        className: "tab-content",
                                                        children: [
                                                            /*#__PURE__*/ jsx_runtime_.jsx(external_react_bootstrap_.Tab.Pane, {
                                                                className: "tab-pane fade",
                                                                eventKey: "mission",
                                                                children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                                                                    className: "content-box-gap",
                                                                    children: [
                                                                        /*#__PURE__*/ jsx_runtime_.jsx("p", {
                                                                            children: "Natus error sit voluptatem accusantium doloremque laudatium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt"
                                                                        }),
                                                                        /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                                                                            className: "avatar-box d-flex align-items-center",
                                                                            children: [
                                                                                /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                                                                    className: "thumb",
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
                                                            }),
                                                            /*#__PURE__*/ jsx_runtime_.jsx(external_react_bootstrap_.Tab.Pane, {
                                                                className: "tab-pane fade",
                                                                eventKey: "vision",
                                                                children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                                                                    className: "content-box-gap",
                                                                    children: [
                                                                        /*#__PURE__*/ jsx_runtime_.jsx("p", {
                                                                            children: "Natus error sit voluptatem accusantium doloremque laudatium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt"
                                                                        }),
                                                                        /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                                                                            className: "avatar-box d-flex align-items-center",
                                                                            children: [
                                                                                /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                                                                    className: "thumb",
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
                                                ]
                                            })
                                        })
                                    ]
                                })
                            }),
                            /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                className: "col-xl-7 col-lg-6",
                                children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                                    className: "about-one_image-box p-r mb-50 pl-100",
                                    children: [
                                        /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                            className: "about-img_one wow fadeInLeft",
                                            children: /*#__PURE__*/ jsx_runtime_.jsx("img", {
                                                src: "assets/images/about/img-1.jpg",
                                                alt: "About Image"
                                            })
                                        }),
                                        /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                            className: "about-img_two wow fadeInRight",
                                            children: /*#__PURE__*/ jsx_runtime_.jsx("img", {
                                                src: "assets/images/about/img-2.jpg",
                                                alt: "About Image"
                                            })
                                        })
                                    ]
                                })
                            })
                        ]
                    })
                })
            }),
            /*#__PURE__*/ (0,jsx_runtime_.jsxs)("section", {
                className: "service-one dark-black-bg pt-130 pb-125 p-r z-1",
                children: [
                    /*#__PURE__*/ jsx_runtime_.jsx("div", {
                        className: "shape shape-one",
                        children: /*#__PURE__*/ jsx_runtime_.jsx("span", {
                            children: /*#__PURE__*/ jsx_runtime_.jsx("img", {
                                src: "assets/images/shape/tree1.png",
                                alt: ""
                            })
                        })
                    }),
                    /*#__PURE__*/ jsx_runtime_.jsx("div", {
                        className: "shape shape-two",
                        children: /*#__PURE__*/ jsx_runtime_.jsx("span", {
                            children: /*#__PURE__*/ jsx_runtime_.jsx("img", {
                                src: "assets/images/shape/tree2.png",
                                alt: ""
                            })
                        })
                    }),
                    /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                        className: "container",
                        children: [
                            /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                className: "row justify-content-center",
                                children: /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                    className: "col-xl-6 col-lg-10",
                                    children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                                        className: "section-title section-title-white text-center mb-60 wow fadeInUp",
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
                            }),
                            /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                className: "row",
                                children: /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                    className: "col-lg-12",
                                    children: /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                        className: "play-one_content-box bg_cover wow fadeInDown",
                                        style: {
                                            backgroundImage: "url(assets/images/bg/intro-bg-1.jpg)"
                                        },
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
                        ]
                    })
                ]
            }),
            /*#__PURE__*/ jsx_runtime_.jsx(ProjectOneSlider, {}),
            /*#__PURE__*/ (0,jsx_runtime_.jsxs)("section", {
                className: "fun-fact",
                children: [
                    /*#__PURE__*/ jsx_runtime_.jsx("div", {
                        className: "big-text mb-105 wow fadeInUp",
                        children: /*#__PURE__*/ jsx_runtime_.jsx("h2", {
                            children: "Statistics"
                        })
                    }),
                    /*#__PURE__*/ jsx_runtime_.jsx("div", {
                        className: "container",
                        children: /*#__PURE__*/ jsx_runtime_.jsx("div", {
                            className: "counter-wrap-one wow fadeInDown",
                            children: /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                className: "counter-inner-box",
                                children: /*#__PURE__*/ jsx_runtime_.jsx(OrgariumCounter/* default */.Z, {})
                            })
                        })
                    })
                ]
            }),
            /*#__PURE__*/ jsx_runtime_.jsx("section", {
                className: "popular-service p-r z-1 pt-130 pb-135",
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
                                            className: "single-service-item mb-50 card-rtl fadeInUp",
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
                className: "offer-section-one p-r z-2",
                children: /*#__PURE__*/ jsx_runtime_.jsx("div", {
                    className: "container-fluid",
                    children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                        className: "row align-items-center",
                        children: [
                            /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                className: "col-lg-6",
                                children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                                    className: "offer-one_image-box bg_cover mb-50 wow fadeInRight",
                                    style: {
                                        backgroundImage: "url(assets/images/bg/offer-bg-1.jpg)"
                                    },
                                    children: [
                                        /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                            className: "content-box",
                                            children: /*#__PURE__*/ jsx_runtime_.jsx("h2", {
                                                children: "35 Years Of Experience in Agriculture"
                                            })
                                        }),
                                        /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                            className: "experience-box",
                                            children: "Experience & Professional Team Members"
                                        })
                                    ]
                                })
                            }),
                            /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                className: "col-lg-6",
                                children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                                    className: "offer-one_content-box content-box-gap mb-20",
                                    children: [
                                        /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                                            className: "section-title section-title-left mb-20 wow fadeInUp",
                                            children: [
                                                /*#__PURE__*/ jsx_runtime_.jsx("span", {
                                                    className: "sub-title",
                                                    children: "What We Offers"
                                                }),
                                                /*#__PURE__*/ jsx_runtime_.jsx("h2", {
                                                    children: "People Choose Us For Our Great Offers"
                                                })
                                            ]
                                        }),
                                        /*#__PURE__*/ jsx_runtime_.jsx("p", {
                                            children: "Natus error sit voluptatem accusantium doloreue laudatiuec totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt"
                                        }),
                                        /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                                            className: "row",
                                            children: [
                                                /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                                    className: "col-lg-6",
                                                    children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                                                        className: "single-chart-item text-center mb-30 wow fadeInDown",
                                                        children: [
                                                            /*#__PURE__*/ jsx_runtime_.jsx(ProgressBar/* default */.Z, {
                                                                value: 76,
                                                                color: "#014421"
                                                            }),
                                                            /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                                                className: "text",
                                                                children: /*#__PURE__*/ jsx_runtime_.jsx("h5", {
                                                                    children: "Organic Foods Provides"
                                                                })
                                                            })
                                                        ]
                                                    })
                                                }),
                                                /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                                    className: "col-lg-6",
                                                    children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                                                        className: "single-chart-item text-center mb-30 wow fadeInUp",
                                                        children: [
                                                            /*#__PURE__*/ jsx_runtime_.jsx(ProgressBar/* default */.Z, {
                                                                value: 86,
                                                                color: "#014421"
                                                            }),
                                                            /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                                                className: "text",
                                                                children: /*#__PURE__*/ jsx_runtime_.jsx("h5", {
                                                                    children: "Reforming The Systems"
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
                        ]
                    })
                })
            }),
            /*#__PURE__*/ jsx_runtime_.jsx("section", {
                className: "testimonial-one light-gray-bg p-r z-1",
                children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                    className: "container-fluid",
                    children: [
                        /*#__PURE__*/ jsx_runtime_.jsx("div", {
                            className: "row justify-content-center",
                            children: /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                className: "col-xl-6 col-lg-10",
                                children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                                    className: "section-title text-center mb-60 wow fadeInUp",
                                    children: [
                                        /*#__PURE__*/ jsx_runtime_.jsx("span", {
                                            className: "sub-title",
                                            children: "Clients Feedback"
                                        }),
                                        /*#__PURE__*/ jsx_runtime_.jsx("h2", {
                                            children: "What’s Our Clients Say About Our Organic Foods"
                                        })
                                    ]
                                })
                            })
                        }),
                        /*#__PURE__*/ (0,jsx_runtime_.jsxs)((external_react_slick_default()), {
                            ...sliderProps/* testimonialSliderOne */.kH,
                            className: "testimonial-slider-one",
                            children: [
                                /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                                    className: "testimonial-item text-center wow fadeInDown",
                                    children: [
                                        /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                            className: "author-thumb",
                                            children: /*#__PURE__*/ jsx_runtime_.jsx("img", {
                                                src: "assets/images/testimonial/img-1.jpg",
                                                alt: "author Image"
                                            })
                                        }),
                                        /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                                            className: "testimonial-content",
                                            children: [
                                                /*#__PURE__*/ (0,jsx_runtime_.jsxs)("p", {
                                                    children: [
                                                        "“Sit amet consectetu escing elit sed do eiusmod tempor incididunt ut labore dolore magna aliqua. Quis ipsum suspendisse ultrices gravic darisus comoe”",
                                                        " "
                                                    ]
                                                }),
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
                                }),
                                /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                                    className: "testimonial-item text-center wow fadeInUp",
                                    children: [
                                        /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                            className: "author-thumb",
                                            children: /*#__PURE__*/ jsx_runtime_.jsx("img", {
                                                src: "assets/images/testimonial/img-2.jpg",
                                                alt: "author Image"
                                            })
                                        }),
                                        /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                                            className: "testimonial-content",
                                            children: [
                                                /*#__PURE__*/ (0,jsx_runtime_.jsxs)("p", {
                                                    children: [
                                                        "“Sit amet consectetu escing elit sed do eiusmod tempor incididunt ut labore dolore magna aliqua. Quis ipsum suspendisse ultrices gravic darisus comoe”",
                                                        " "
                                                    ]
                                                }),
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
                                                            children: "Nathan A. Caswell"
                                                        }),
                                                        /*#__PURE__*/ jsx_runtime_.jsx("p", {
                                                            className: "position",
                                                            children: "Senior Manager"
                                                        })
                                                    ]
                                                })
                                            ]
                                        })
                                    ]
                                }),
                                /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                                    className: "testimonial-item text-center wow fadeInDown",
                                    children: [
                                        /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                            className: "author-thumb",
                                            children: /*#__PURE__*/ jsx_runtime_.jsx("img", {
                                                src: "assets/images/testimonial/img-3.jpg",
                                                alt: "author Image"
                                            })
                                        }),
                                        /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                                            className: "testimonial-content",
                                            children: [
                                                /*#__PURE__*/ (0,jsx_runtime_.jsxs)("p", {
                                                    children: [
                                                        "“Sit amet consectetu escing elit sed do eiusmod tempor incididunt ut labore dolore magna aliqua. Quis ipsum suspendisse ultrices gravic darisus comoe”",
                                                        " "
                                                    ]
                                                }),
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
                                                            children: "Somalia D. Silva"
                                                        }),
                                                        /*#__PURE__*/ jsx_runtime_.jsx("p", {
                                                            className: "position",
                                                            children: "Business Manager"
                                                        })
                                                    ]
                                                })
                                            ]
                                        })
                                    ]
                                }),
                                /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                                    className: "testimonial-item text-center wow fadeInUp",
                                    children: [
                                        /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                            className: "author-thumb",
                                            children: /*#__PURE__*/ jsx_runtime_.jsx("img", {
                                                src: "assets/images/testimonial/img-4.jpg",
                                                alt: "author Image"
                                            })
                                        }),
                                        /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                                            className: "testimonial-content",
                                            children: [
                                                /*#__PURE__*/ (0,jsx_runtime_.jsxs)("p", {
                                                    children: [
                                                        "“Sit amet consectetu escing elit sed do eiusmod tempor incididunt ut labore dolore magna aliqua. Quis ipsum suspendisse ultrices gravic darisus comoe”",
                                                        " "
                                                    ]
                                                }),
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
                                                            children: "Michael D. Slaughter"
                                                        }),
                                                        /*#__PURE__*/ jsx_runtime_.jsx("p", {
                                                            className: "position",
                                                            children: "Web Developer"
                                                        })
                                                    ]
                                                })
                                            ]
                                        })
                                    ]
                                }),
                                /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                                    className: "testimonial-item text-center wow fadeInDown",
                                    children: [
                                        /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                            className: "author-thumb",
                                            children: /*#__PURE__*/ jsx_runtime_.jsx("img", {
                                                src: "assets/images/testimonial/img-2.jpg",
                                                alt: "author Image"
                                            })
                                        }),
                                        /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                                            className: "testimonial-content",
                                            children: [
                                                /*#__PURE__*/ (0,jsx_runtime_.jsxs)("p", {
                                                    children: [
                                                        "“Sit amet consectetu escing elit sed do eiusmod tempor incididunt ut labore dolore magna aliqua. Quis ipsum suspendisse ultrices gravic darisus comoe”",
                                                        " "
                                                    ]
                                                }),
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
                                                            children: "Nathan A. Caswell"
                                                        }),
                                                        /*#__PURE__*/ jsx_runtime_.jsx("p", {
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
            }),
            /*#__PURE__*/ jsx_runtime_.jsx("section", {
                className: "contact-one p-r z-2",
                children: /*#__PURE__*/ jsx_runtime_.jsx("div", {
                    className: "container-fluid",
                    children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                        className: "row no-gutters",
                        children: [
                            /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                className: "col-lg-6",
                                children: /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                    className: "contact-one_content-box wow fadeInLeft",
                                    children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                                        className: "contact-wrapper",
                                        children: [
                                            /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                                                className: "section-title section-title-left mb-40",
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
                                                                className: "main-btn yellow-bg",
                                                                children: "Send Us Message"
                                                            })
                                                        })
                                                    ]
                                                })
                                            })
                                        ]
                                    })
                                })
                            }),
                            /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                className: "col-lg-6",
                                children: /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                    className: "contact-one_information-box bg_cover wow fadeInRight",
                                    style: {
                                        backgroundImage: "url(assets/images/bg/contact-bg-1.jpg)"
                                    },
                                    children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                                        className: "information-box",
                                        children: [
                                            /*#__PURE__*/ jsx_runtime_.jsx("h3", {
                                                children: "Contact Us"
                                            }),
                                            /*#__PURE__*/ jsx_runtime_.jsx("p", {
                                                children: "Sit volupta accusantium doloreues laudatiuec totam rem aperiam eaque abillo inventore verit atiset"
                                            }),
                                            /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                                                className: "information-item_one d-flex mb-25",
                                                children: [
                                                    /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                                        className: "icon",
                                                        children: /*#__PURE__*/ jsx_runtime_.jsx("i", {
                                                            className: "flaticon-placeholder"
                                                        })
                                                    }),
                                                    /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                                                        className: "info",
                                                        children: [
                                                            /*#__PURE__*/ jsx_runtime_.jsx("span", {
                                                                className: "sub-title mb-1",
                                                                children: "Location"
                                                            }),
                                                            /*#__PURE__*/ jsx_runtime_.jsx("h5", {
                                                                children: "55 Main Street, New York"
                                                            })
                                                        ]
                                                    })
                                                ]
                                            }),
                                            /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                                                className: "information-item_one d-flex mb-25",
                                                children: [
                                                    /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                                        className: "icon",
                                                        children: /*#__PURE__*/ jsx_runtime_.jsx("i", {
                                                            className: "flaticon-email"
                                                        })
                                                    }),
                                                    /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                                                        className: "info",
                                                        children: [
                                                            /*#__PURE__*/ jsx_runtime_.jsx("span", {
                                                                className: "sub-title mb-1",
                                                                children: "Email Address"
                                                            }),
                                                            /*#__PURE__*/ jsx_runtime_.jsx("h5", {
                                                                children: /*#__PURE__*/ jsx_runtime_.jsx("a", {
                                                                    href: "mailto:hotline@gmail.com",
                                                                    children: "hotline@gmail.com"
                                                                })
                                                            })
                                                        ]
                                                    })
                                                ]
                                            }),
                                            /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                                                className: "information-item_one d-flex mb-25",
                                                children: [
                                                    /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                                        className: "icon",
                                                        children: /*#__PURE__*/ jsx_runtime_.jsx("i", {
                                                            className: "flaticon-phone-call"
                                                        })
                                                    }),
                                                    /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                                                        className: "info",
                                                        children: [
                                                            /*#__PURE__*/ jsx_runtime_.jsx("span", {
                                                                className: "sub-title mb-1",
                                                                children: "Phone Number"
                                                            }),
                                                            /*#__PURE__*/ jsx_runtime_.jsx("h5", {
                                                                children: /*#__PURE__*/ jsx_runtime_.jsx("a", {
                                                                    href: "tel:+0123456789",
                                                                    children: "+012(345) 67 89"
                                                                })
                                                            })
                                                        ]
                                                    })
                                                ]
                                            })
                                        ]
                                    })
                                })
                            })
                        ]
                    })
                })
            }),
            /*#__PURE__*/ jsx_runtime_.jsx("section", {
                className: "blog-section p-r z-1 pt-130 pb-100",
                children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                    className: "container",
                    children: [
                        /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                            className: "row align-items-end",
                            children: [
                                /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                    className: "col-xl-7 col-lg-10",
                                    children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                                        className: "section-title section-title-left mb-60 wow fadeInLeft",
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
                                }),
                                /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                    className: "col-lg-5",
                                    children: /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                        className: "button-box float-lg-right mb-60 wow fadeInRight",
                                        children: /*#__PURE__*/ jsx_runtime_.jsx((link_default()), {
                                            href: "/blog-standard",
                                            children: /*#__PURE__*/ jsx_runtime_.jsx("a", {
                                                className: "main-btn bordered-btn bordered-yellow",
                                                children: "View More Newss"
                                            })
                                        })
                                    })
                                })
                            ]
                        }),
                        /*#__PURE__*/ jsx_runtime_.jsx("div", {
                            className: "row",
                            children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                                className: "col-lg-12",
                                children: [
                                    /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                                        className: "blog-post-item-one mb-30 wow fadeInLeft",
                                        children: [
                                            /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                                className: "post-thumbnail",
                                                children: /*#__PURE__*/ jsx_runtime_.jsx("img", {
                                                    src: "assets/images/blog/img-1.jpg",
                                                    alt: "Post Image"
                                                })
                                            }),
                                            /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                                                className: "entry-content",
                                                children: [
                                                    /*#__PURE__*/ jsx_runtime_.jsx("a", {
                                                        href: "#",
                                                        className: "cat-btn",
                                                        children: "Organic Foods"
                                                    }),
                                                    /*#__PURE__*/ jsx_runtime_.jsx("h3", {
                                                        className: "title",
                                                        children: /*#__PURE__*/ jsx_runtime_.jsx("a", {
                                                            href: "#",
                                                            children: "Smashing Podcast Episode 44 With Chris Ferdinandi Is The Web Dead"
                                                        })
                                                    }),
                                                    /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                                        className: "post-meta",
                                                        children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)("ul", {
                                                            children: [
                                                                /*#__PURE__*/ jsx_runtime_.jsx("li", {
                                                                    children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)("span", {
                                                                        children: [
                                                                            /*#__PURE__*/ jsx_runtime_.jsx("i", {
                                                                                className: "far fa-calendar-alt"
                                                                            }),
                                                                            /*#__PURE__*/ jsx_runtime_.jsx("a", {
                                                                                href: "#",
                                                                                children: "25 March 2022"
                                                                            })
                                                                        ]
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
                                                    })
                                                ]
                                            })
                                        ]
                                    }),
                                    /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                                        className: "blog-post-item-one mb-30 wow fadeInRight",
                                        children: [
                                            /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                                className: "post-thumbnail",
                                                children: /*#__PURE__*/ jsx_runtime_.jsx("img", {
                                                    src: "assets/images/blog/img-2.jpg",
                                                    alt: "Post Image"
                                                })
                                            }),
                                            /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                                                className: "entry-content",
                                                children: [
                                                    /*#__PURE__*/ jsx_runtime_.jsx("a", {
                                                        href: "#",
                                                        className: "cat-btn",
                                                        children: "Organic Foods"
                                                    }),
                                                    /*#__PURE__*/ jsx_runtime_.jsx("h3", {
                                                        className: "title",
                                                        children: /*#__PURE__*/ jsx_runtime_.jsx("a", {
                                                            href: "#",
                                                            children: "Powerful Terminal And Command-Line Tools Modern Web Development"
                                                        })
                                                    }),
                                                    /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                                        className: "post-meta",
                                                        children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)("ul", {
                                                            children: [
                                                                /*#__PURE__*/ jsx_runtime_.jsx("li", {
                                                                    children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)("span", {
                                                                        children: [
                                                                            /*#__PURE__*/ jsx_runtime_.jsx("i", {
                                                                                className: "far fa-calendar-alt"
                                                                            }),
                                                                            /*#__PURE__*/ jsx_runtime_.jsx("a", {
                                                                                href: "#",
                                                                                children: "25 March 2022"
                                                                            })
                                                                        ]
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
                                                    })
                                                ]
                                            })
                                        ]
                                    }),
                                    /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                                        className: "blog-post-item-one mb-30 wow fadeInLeft",
                                        children: [
                                            /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                                className: "post-thumbnail",
                                                children: /*#__PURE__*/ jsx_runtime_.jsx("img", {
                                                    src: "assets/images/blog/img-3.jpg",
                                                    alt: "Post Image"
                                                })
                                            }),
                                            /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                                                className: "entry-content",
                                                children: [
                                                    /*#__PURE__*/ jsx_runtime_.jsx("a", {
                                                        href: "#",
                                                        className: "cat-btn",
                                                        children: "Organic Foods"
                                                    }),
                                                    /*#__PURE__*/ jsx_runtime_.jsx("h3", {
                                                        className: "title",
                                                        children: /*#__PURE__*/ jsx_runtime_.jsx("a", {
                                                            href: "#",
                                                            children: "Smashing Podcast Episode 44 With Chris Ferdinandi Is The Web Dead"
                                                        })
                                                    }),
                                                    /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                                        className: "post-meta",
                                                        children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)("ul", {
                                                            children: [
                                                                /*#__PURE__*/ jsx_runtime_.jsx("li", {
                                                                    children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)("span", {
                                                                        children: [
                                                                            /*#__PURE__*/ jsx_runtime_.jsx("i", {
                                                                                className: "far fa-calendar-alt"
                                                                            }),
                                                                            /*#__PURE__*/ jsx_runtime_.jsx("a", {
                                                                                href: "#",
                                                                                children: "25 March 2022"
                                                                            })
                                                                        ]
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
                                                    })
                                                ]
                                            })
                                        ]
                                    })
                                ]
                            })
                        })
                    ]
                })
            }),
            /*#__PURE__*/ jsx_runtime_.jsx("section", {
                className: "partners-section yellow-bg pt-50 pb-60 p-r z-1",
                children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                    className: "container",
                    children: [
                        /*#__PURE__*/ jsx_runtime_.jsx("div", {
                            className: "row justify-content-center",
                            children: /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                className: "col-xl-6 col-lg-10",
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
        ]
    });
};
/* harmony default export */ const index_5 = (Index);
async function getStaticProps() {
    const { data  } = await storeFront(productsQuery);
    return {
        props: {
            products: data.products
        }
    };
}
const gql = String.raw;
const productsQuery = gql`query Products {
  products(first: 10) {
    edges {
      node {
        title
        handle
        tags
        priceRange {
          minVariantPrice {
            amount
          }
        }
        images(first: 2) {
          edges {
            node {
              url(transform: {maxWidth: 500, maxHeight: 500})
            }
          }
        }
      }
    }
  }
}`;


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

/***/ 1400:
/***/ ((module) => {

module.exports = require("react-circular-progressbar");

/***/ }),

/***/ 609:
/***/ ((module) => {

module.exports = require("react-countup");

/***/ }),

/***/ 9051:
/***/ ((module) => {

module.exports = require("react-nice-select");

/***/ }),

/***/ 8096:
/***/ ((module) => {

module.exports = require("react-slick");

/***/ }),

/***/ 6882:
/***/ ((module) => {

module.exports = require("react-visibility-sensor");

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
var __webpack_exports__ = __webpack_require__.X(0, [676,664,433,974,968,201,485], () => (__webpack_exec__(7496)));
module.exports = __webpack_exports__;

})();