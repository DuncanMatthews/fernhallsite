"use strict";
(() => {
var exports = {};
exports.id = 405;
exports.ids = [405];
exports.modules = {

/***/ 7229:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "default": () => (/* binding */ pages),
  "getServerSideProps": () => (/* binding */ getServerSideProps)
});

// EXTERNAL MODULE: external "react/jsx-runtime"
var jsx_runtime_ = __webpack_require__(997);
// EXTERNAL MODULE: ./node_modules/next/link.js
var next_link = __webpack_require__(1664);
var link_default = /*#__PURE__*/__webpack_require__.n(next_link);
// EXTERNAL MODULE: external "react-slick"
var external_react_slick_ = __webpack_require__(8096);
var external_react_slick_default = /*#__PURE__*/__webpack_require__.n(external_react_slick_);
// EXTERNAL MODULE: ./src/components/Counter.js
var Counter = __webpack_require__(6774);
// EXTERNAL MODULE: ./src/layouts/Layout.js + 7 modules
var Layout = __webpack_require__(3753);
// EXTERNAL MODULE: ./Data/blogpost.js
var blogpost = __webpack_require__(1021);
// EXTERNAL MODULE: ./src/sliderProps.js
var sliderProps = __webpack_require__(5968);
// EXTERNAL MODULE: ./src/components/VideoPopup.js
var VideoPopup = __webpack_require__(6434);
// EXTERNAL MODULE: external "react"
var external_react_ = __webpack_require__(6689);
;// CONCATENATED MODULE: ./src/components/subscribe.js



function Subscribe() {
    const { 0: isVisible , 1: setIsVisible  } = (0,external_react_.useState)(false);
    const handleClose = ()=>{
        setIsVisible(false);
    };
    (0,external_react_.useEffect)(()=>{
        const timer = setTimeout(()=>{
            setIsVisible(true);
        }, 5000);
        return ()=>clearTimeout(timer);
    }, []);
    // 1. Create a reference to the input so we can fetch/clear it's value.
    const inputEl = (0,external_react_.useRef)(null);
    // 2. Hold a message in state to handle the response from our API.
    const { 0: message , 1: setMessage  } = (0,external_react_.useState)("");
    const subscribe = async (e)=>{
        e.preventDefault();
        // 3. Send a request to our API with the user's email address.
        const res = await fetch("/api/subscribe", {
            body: JSON.stringify({
                email: inputEl.current.value
            }),
            headers: {
                "Content-Type": "application/json"
            },
            method: "POST"
        });
        const { error  } = await res.json();
        if (error) {
            // 4. If there was an error, update the message in state.
            setMessage(error);
            return;
        }
        // 5. Clear the input value and show a success message.
        inputEl.current.value = "";
        setMessage("Success! \uD83C\uDF89 You are now subscribed to the newsletter.");
    };
    return /*#__PURE__*/ jsx_runtime_.jsx("div", {
        className: `popup-wrapper ${isVisible ? "visible" : ""}`,
        children: /*#__PURE__*/ jsx_runtime_.jsx("div", {
            className: "popup-content",
            children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)("form", {
                className: "subscribe-form",
                onSubmit: subscribe,
                children: [
                    /*#__PURE__*/ jsx_runtime_.jsx("label", {
                        htmlFor: "email-input",
                        className: "subscribe-label",
                        children: "Email Address"
                    }),
                    /*#__PURE__*/ jsx_runtime_.jsx("input", {
                        id: "email-input",
                        name: "email",
                        placeholder: "you@awesome.com",
                        ref: inputEl,
                        required: true,
                        type: "email",
                        className: "subscribe-input"
                    }),
                    /*#__PURE__*/ jsx_runtime_.jsx("div", {
                        className: "subscribe-message",
                        children: message ? message : "I'll only send emails when new content is posted. No spam."
                    }),
                    /*#__PURE__*/ jsx_runtime_.jsx("button", {
                        type: "submit",
                        className: "subscribe-button",
                        children: "✨ Subscribe \uD83D\uDC8C"
                    }),
                    /*#__PURE__*/ jsx_runtime_.jsx("a", {
                        className: "subscriber-close-button",
                        onClick: handleClose,
                        children: "No thanks"
                    })
                ]
            })
        })
    });
}
/* harmony default export */ const subscribe = (Subscribe);

;// CONCATENATED MODULE: ./pages/index.js









const Index3 = ({ posts  })=>{
    return /*#__PURE__*/ (0,jsx_runtime_.jsxs)(Layout/* default */.Z, {
        header: 3,
        footer: 3,
        children: [
            /*#__PURE__*/ jsx_runtime_.jsx("section", {
                className: "hero-area-three",
                children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)((external_react_slick_default()), {
                    ...sliderProps/* heroSliderOne */.cg,
                    className: "hero-slider-one",
                    children: [
                        /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                            className: "single-slider p-r z-1",
                            children: [
                                /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                    className: "image-layer bg_cover",
                                    style: {
                                        backgroundImage: "url(assets/images/hero/hero_three-slider-1.jpg)"
                                    }
                                }),
                                /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                    className: "container",
                                    children: /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                        className: "row",
                                        children: /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                            className: "col-lg-6",
                                            children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                                                className: "hero-content text-white",
                                                children: [
                                                    /*#__PURE__*/ jsx_runtime_.jsx("span", {
                                                        className: "tag-line",
                                                        "data-animation": "fadeInDown",
                                                        "data-delay": ".4s",
                                                        children: "Welcome to Fernhall"
                                                    }),
                                                    /*#__PURE__*/ jsx_runtime_.jsx("h1", {
                                                        "data-animation": "fadeInUp",
                                                        "data-delay": ".5s",
                                                        children: "Historic Estate"
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
                                                                href: "#",
                                                                children: /*#__PURE__*/ jsx_runtime_.jsx("a", {
                                                                    className: "main-btn btn-white",
                                                                    children: "Upcoming Events"
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
                            className: "single-slider p-r z-1",
                            children: [
                                /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                    className: "image-layer bg_cover",
                                    style: {
                                        backgroundImage: "url(assets/images/hero/hero_three-slider-3.jpg)"
                                    }
                                }),
                                /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                    className: "container",
                                    children: /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                        className: "row",
                                        children: /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                            className: "col-lg-6",
                                            children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                                                className: "hero-content text-white",
                                                children: [
                                                    /*#__PURE__*/ jsx_runtime_.jsx("span", {
                                                        className: "tag-line",
                                                        "data-animation": "fadeInDown",
                                                        "data-delay": ".4s",
                                                        children: "Welcome to Fernhall"
                                                    }),
                                                    /*#__PURE__*/ jsx_runtime_.jsx("h1", {
                                                        "data-animation": "fadeInUp",
                                                        "data-delay": ".5s",
                                                        children: "Organic Sheep Farm"
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
                                                                href: "#",
                                                                children: /*#__PURE__*/ jsx_runtime_.jsx("a", {
                                                                    className: "main-btn btn-white",
                                                                    children: "Upcoming Events"
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
                className: "about-section pt-130 pb-95",
                children: /*#__PURE__*/ jsx_runtime_.jsx("div", {
                    className: "container",
                    children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                        className: "row",
                        children: [
                            /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                className: "col-lg-6",
                                children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                                    className: "about-three-image_box p-r mb-40 wow fadeInLeft",
                                    children: [
                                        /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                            className: "experience-box dark-black-bg z-1 text-center text-white",
                                            children: /*#__PURE__*/ jsx_runtime_.jsx("h3", {
                                                children: "Originally built in 1916 by the Johnson & Johnson family "
                                            })
                                        }),
                                        /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                                            className: "row align-items-center",
                                            children: [
                                                /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                                    className: "col-md-5",
                                                    children: /*#__PURE__*/ jsx_runtime_.jsx("img", {
                                                        src: "assets/images/about/1.jpg",
                                                        className: "about-img_one",
                                                        alt: ""
                                                    })
                                                }),
                                                /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                                    className: "col-md-7",
                                                    children: /*#__PURE__*/ jsx_runtime_.jsx("img", {
                                                        src: "assets/images/about/2.jpg",
                                                        className: "about-img_two",
                                                        alt: ""
                                                    })
                                                })
                                            ]
                                        })
                                    ]
                                })
                            }),
                            /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                className: "col-lg-6",
                                children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                                    className: "about-content_box content-box-gap pl-lg-60",
                                    children: [
                                        /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                                            className: "section-title section-title-left mb-15 wow fadeInUp",
                                            children: [
                                                /*#__PURE__*/ jsx_runtime_.jsx("span", {
                                                    className: "sub-title",
                                                    children: "About Us"
                                                }),
                                                /*#__PURE__*/ jsx_runtime_.jsx("h2", {
                                                    children: "Welcome to Fernhall & Estate Farm"
                                                })
                                            ]
                                        }),
                                        /*#__PURE__*/ jsx_runtime_.jsx("p", {
                                            children: "A rejuvenated country retreat that has been acquired by the Balfour family in 2019. The homestead is now available for community events and weekly rentals. Come and experience the tranquility and privacy of rural living, while enjoying the space and numerous activities available on our estate. Whether you're looking for a venue for a special event or simply seeking a peaceful getaway, Orgrarium Farm is the perfect place to relax and unwind."
                                        }),
                                        /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                                            className: "row",
                                            children: [
                                                /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                                    className: "col-md-4 col-sm-12",
                                                    children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                                                        className: "food-card text-center mb-40 wow fadeInDown",
                                                        children: [
                                                            /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                                                className: "icon",
                                                                children: /*#__PURE__*/ jsx_runtime_.jsx("i", {
                                                                    className: "flaticon-wheat-sack"
                                                                })
                                                            }),
                                                            /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                                                className: "text",
                                                                children: /*#__PURE__*/ jsx_runtime_.jsx("h5", {
                                                                    children: "Heart of Nature"
                                                                })
                                                            })
                                                        ]
                                                    })
                                                }),
                                                /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                                    className: "col-md-4 col-sm-12",
                                                    children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                                                        className: "food-card text-center mb-40 wow fadeInUp",
                                                        children: [
                                                            /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                                                className: "icon",
                                                                children: /*#__PURE__*/ jsx_runtime_.jsx("i", {
                                                                    className: "flaticon-grape"
                                                                })
                                                            }),
                                                            /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                                                className: "text",
                                                                children: /*#__PURE__*/ jsx_runtime_.jsx("h5", {
                                                                    children: "Historic Property"
                                                                })
                                                            })
                                                        ]
                                                    })
                                                }),
                                                /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                                    className: "col-md-4 col-sm-12",
                                                    children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                                                        className: "food-card text-center mb-40 wow fadeInDown",
                                                        children: [
                                                            /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                                                className: "icon",
                                                                children: /*#__PURE__*/ jsx_runtime_.jsx("i", {
                                                                    className: "flaticon-cow"
                                                                })
                                                            }),
                                                            /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                                                className: "text",
                                                                children: /*#__PURE__*/ jsx_runtime_.jsx("h5", {
                                                                    children: "Experience tranquility"
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
            /*#__PURE__*/ jsx_runtime_.jsx(subscribe, {}),
            /*#__PURE__*/ jsx_runtime_.jsx("section", {
                className: "cta-one p-r",
                children: /*#__PURE__*/ jsx_runtime_.jsx("div", {
                    className: "container-fluid",
                    children: /*#__PURE__*/ jsx_runtime_.jsx("div", {
                        className: "cta-wrap-one",
                        children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                            className: "row",
                            children: [
                                /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                    className: "col-xl-6 col-lg-12",
                                    children: /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                        className: "cta-item_one bg_cover text-white mb-40 wow fadeInLeft",
                                        style: {
                                            backgroundImage: "url(assets/images/cta/cta-1.jpg)"
                                        },
                                        children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                                            className: "text d-flex justify-content-between align-items-center",
                                            children: [
                                                /*#__PURE__*/ jsx_runtime_.jsx("h2", {
                                                    children: "Book a dream wedding"
                                                }),
                                                /*#__PURE__*/ jsx_runtime_.jsx((link_default()), {
                                                    href: "/book-your-wedding",
                                                    children: /*#__PURE__*/ jsx_runtime_.jsx("a", {
                                                        className: "main-btn bordered-btn bordered-white",
                                                        children: "Get Quote"
                                                    })
                                                })
                                            ]
                                        })
                                    })
                                }),
                                /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                    className: "col-xl-6 col-lg-12",
                                    children: /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                        className: "cta-item_one bg_cover text-white mb-40 wow fadeInRight",
                                        style: {
                                            backgroundImage: "url(assets/images/cta/cta-2.jpg)"
                                        },
                                        children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                                            className: "text d-flex justify-content-between align-items-center",
                                            children: [
                                                /*#__PURE__*/ jsx_runtime_.jsx("h2", {
                                                    children: "Book your a stay"
                                                }),
                                                /*#__PURE__*/ jsx_runtime_.jsx((link_default()), {
                                                    href: "/contact",
                                                    children: /*#__PURE__*/ jsx_runtime_.jsx("a", {
                                                        className: "main-btn bordered-btn bordered-white",
                                                        children: "Book a stay"
                                                    })
                                                })
                                            ]
                                        })
                                    })
                                })
                            ]
                        })
                    })
                })
            }),
            /*#__PURE__*/ jsx_runtime_.jsx(VideoPopup/* default */.Z, {}),
            /*#__PURE__*/ jsx_runtime_.jsx("section", {
                className: "service-two light-black-bg pt-165",
                children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                    className: "container",
                    children: [
                        /*#__PURE__*/ jsx_runtime_.jsx("div", {
                            className: "row justify-content-center",
                            children: /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                className: "col-xl-6 col-lg-10",
                                children: /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                    className: "section-title section-title-white text-center mb-50 wow fadeInDown",
                                    children: /*#__PURE__*/ jsx_runtime_.jsx("h2", {
                                        class: "section-title-heading",
                                        children: "Escape to the peaceful countryside of Northeastern Pennsylvania and immerse yourself in the historic charm of Fern Hall Estate."
                                    })
                                })
                            })
                        }),
                        /*#__PURE__*/ (0,jsx_runtime_.jsxs)((external_react_slick_default()), {
                            ...sliderProps/* serviceSliderOne */.pI,
                            className: "service-slider-one",
                            children: [
                                /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                                    className: "single-service-item-two text-center wow fadeInUp",
                                    children: [
                                        /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                            className: "img-holder",
                                            children: /*#__PURE__*/ jsx_runtime_.jsx("img", {
                                                src: "assets/images/service/img-2.jpg",
                                                alt: ""
                                            })
                                        }),
                                        /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                                            className: "text",
                                            children: [
                                                /*#__PURE__*/ jsx_runtime_.jsx("h3", {
                                                    className: "title",
                                                    children: /*#__PURE__*/ jsx_runtime_.jsx((link_default()), {
                                                        href: "",
                                                        children: /*#__PURE__*/ jsx_runtime_.jsx("a", {
                                                            children: "Wilderness Retreat"
                                                        })
                                                    })
                                                }),
                                                /*#__PURE__*/ jsx_runtime_.jsx("p", {
                                                    children: "Escape to the peaceful countryside of Northeastern Pennsylvania and immerse yourself in the historic charm of Fern Hall Estate and sheep farm."
                                                }),
                                                /*#__PURE__*/ jsx_runtime_.jsx((link_default()), {
                                                    href: "",
                                                    children: /*#__PURE__*/ jsx_runtime_.jsx("a", {
                                                        className: "main-btn btn-yellow",
                                                        children: "Read More"
                                                    })
                                                })
                                            ]
                                        })
                                    ]
                                }),
                                /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                                    className: "single-service-item-two text-center wow fadeInDown",
                                    children: [
                                        /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                            className: "img-holder",
                                            children: /*#__PURE__*/ jsx_runtime_.jsx("img", {
                                                src: "assets/images/service/img-3.jpg",
                                                alt: ""
                                            })
                                        }),
                                        /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                                            className: "text",
                                            children: [
                                                /*#__PURE__*/ jsx_runtime_.jsx("h3", {
                                                    className: "title",
                                                    children: /*#__PURE__*/ jsx_runtime_.jsx((link_default()), {
                                                        href: "",
                                                        children: /*#__PURE__*/ jsx_runtime_.jsx("a", {
                                                            children: "Historic & Living"
                                                        })
                                                    })
                                                }),
                                                /*#__PURE__*/ jsx_runtime_.jsx("p", {
                                                    children: "Step into the past and indulge in the luxury of living in a historic stone house, meticulously crafted from local stone in 1916 and beautifully preserved to this day."
                                                }),
                                                /*#__PURE__*/ jsx_runtime_.jsx((link_default()), {
                                                    href: "",
                                                    children: /*#__PURE__*/ jsx_runtime_.jsx("a", {
                                                        className: "main-btn btn-yellow",
                                                        children: "Read More"
                                                    })
                                                })
                                            ]
                                        })
                                    ]
                                }),
                                /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                                    className: "single-service-item-two text-center wow fadeInUp",
                                    children: [
                                        /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                            className: "img-holder",
                                            children: /*#__PURE__*/ jsx_runtime_.jsx("img", {
                                                src: "assets/images/service/img-4.jpg",
                                                alt: ""
                                            })
                                        }),
                                        /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                                            className: "text",
                                            children: [
                                                /*#__PURE__*/ jsx_runtime_.jsx("h3", {
                                                    className: "title",
                                                    children: /*#__PURE__*/ jsx_runtime_.jsx((link_default()), {
                                                        href: "",
                                                        children: /*#__PURE__*/ jsx_runtime_.jsx("a", {
                                                            children: "Breathtaking Views"
                                                        })
                                                    })
                                                }),
                                                /*#__PURE__*/ jsx_runtime_.jsx("p", {
                                                    children: "Situated between the picturesque Crystal Lake and the magnificent Endless Mountains, it offers breathtaking views and a tranquil atmosphere."
                                                }),
                                                /*#__PURE__*/ jsx_runtime_.jsx((link_default()), {
                                                    href: "",
                                                    children: /*#__PURE__*/ jsx_runtime_.jsx("a", {
                                                        className: "main-btn btn-yellow",
                                                        children: "Read More"
                                                    })
                                                })
                                            ]
                                        })
                                    ]
                                }),
                                /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                                    className: "single-service-item-two text-center wow fadeInDown",
                                    children: [
                                        /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                            className: "img-holder",
                                            children: /*#__PURE__*/ jsx_runtime_.jsx("img", {
                                                src: "assets/images/service/img-3.jpg",
                                                alt: ""
                                            })
                                        }),
                                        /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                                            className: "text",
                                            children: [
                                                /*#__PURE__*/ jsx_runtime_.jsx("h3", {
                                                    className: "title",
                                                    children: /*#__PURE__*/ jsx_runtime_.jsx((link_default()), {
                                                        href: "",
                                                        children: /*#__PURE__*/ jsx_runtime_.jsx("a", {
                                                            children: "Historic & Living"
                                                        })
                                                    })
                                                }),
                                                /*#__PURE__*/ jsx_runtime_.jsx("p", {
                                                    children: "Step into the past and indulge in the luxury of living in a historic stone house, meticulously crafted from local stone in 1916 and beautifully preserved to this day."
                                                }),
                                                /*#__PURE__*/ jsx_runtime_.jsx((link_default()), {
                                                    href: "/service-details",
                                                    children: /*#__PURE__*/ jsx_runtime_.jsx("a", {
                                                        className: "main-btn btn-yellow",
                                                        children: "Read More"
                                                    })
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
/* harmony default export */ const pages = (Index3);
async function getServerSideProps() {
    const posts = blogpost/* blogPosts */.n;
    return {
        props: {
            posts
        }
    };
}


/***/ }),

/***/ 6774:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_countup__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(609);
/* harmony import */ var react_countup__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_countup__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react_visibility_sensor__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(6882);
/* harmony import */ var react_visibility_sensor__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react_visibility_sensor__WEBPACK_IMPORTED_MODULE_2__);



const Counter = ({ end , decimals  })=>{
    return /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((react_countup__WEBPACK_IMPORTED_MODULE_1___default()), {
        end: end ? end : 100,
        duration: 3,
        decimals: decimals ? decimals : 0,
        children: ({ countUpRef , start  })=>/*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((react_visibility_sensor__WEBPACK_IMPORTED_MODULE_2___default()), {
                onChange: start,
                delayedCall: true,
                children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("span", {
                    "data-from": "0",
                    "data-to": end,
                    ref: countUpRef,
                    children: "count"
                })
            })
    });
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Counter);


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
var __webpack_exports__ = __webpack_require__.X(0, [676,664,753,968], () => (__webpack_exec__(7229)));
module.exports = __webpack_exports__;

})();