"use strict";
(() => {
var exports = {};
exports.id = 332;
exports.ids = [332];
exports.modules = {

/***/ 4:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "default": () => (/* binding */ property_overview)
});

// EXTERNAL MODULE: ../../../node_modules/react/jsx-runtime.js
var jsx_runtime = __webpack_require__(4512);
// EXTERNAL MODULE: ../../../../../opt/homebrew/lib/node_modules/next/link.js
var next_link = __webpack_require__(857);
var link_default = /*#__PURE__*/__webpack_require__.n(next_link);
;// CONCATENATED MODULE: ./src/components/PageBanner-2.js


const PageBanner2 = ({ pageName , pageTitle  })=>{
    return /*#__PURE__*/ jsx_runtime.jsx("section", {
        className: "page-banner bg_cover position-relative z-1",
        style: {
            backgroundImage: "url(assets/images/bg/page-bg-2.jpg)"
        },
        children: /*#__PURE__*/ jsx_runtime.jsx("div", {
            className: "container",
            children: /*#__PURE__*/ jsx_runtime.jsx("div", {
                className: "row",
                children: /*#__PURE__*/ jsx_runtime.jsx("div", {
                    className: "col-lg-10",
                    children: /*#__PURE__*/ (0,jsx_runtime.jsxs)("div", {
                        className: "page-title",
                        children: [
                            /*#__PURE__*/ jsx_runtime.jsx("h1", {
                                children: pageTitle ? pageTitle : pageName
                            }),
                            /*#__PURE__*/ (0,jsx_runtime.jsxs)("ul", {
                                className: "breadcrumbs-link",
                                children: [
                                    /*#__PURE__*/ jsx_runtime.jsx("li", {
                                        children: /*#__PURE__*/ jsx_runtime.jsx((link_default()), {
                                            href: "/",
                                            children: "Home"
                                        })
                                    }),
                                    /*#__PURE__*/ jsx_runtime.jsx("li", {
                                        className: "active",
                                        children: pageName
                                    })
                                ]
                            })
                        ]
                    })
                })
            })
        })
    });
};
/* harmony default export */ const PageBanner_2 = (PageBanner2);

// EXTERNAL MODULE: ./src/layouts/Layout.js + 7 modules
var Layout = __webpack_require__(2719);
// EXTERNAL MODULE: external "react"
var external_react_ = __webpack_require__(6689);
// EXTERNAL MODULE: ./src/components/sliders/TestimonialSlider.js
var TestimonialSlider = __webpack_require__(8272);
;// CONCATENATED MODULE: ./src/components/PropertyAboutSection.js
// AboutSection.jsx



const PropertyAboutSection = ()=>{
    return /*#__PURE__*/ (0,jsx_runtime.jsxs)("div", {
        id: "about",
        children: [
            /*#__PURE__*/ jsx_runtime.jsx("h2", {
                className: "wedding-section-heading",
                children: "About the Property"
            }),
            /*#__PURE__*/ (0,jsx_runtime.jsxs)("div", {
                className: "iikjzje i10xc1ab dir dir-ltr",
                children: [
                    /*#__PURE__*/ jsx_runtime.jsx("div", {
                        className: "i4wvyiy i1fpqhzs dir dir-ltr",
                        children: /*#__PURE__*/ jsx_runtime.jsx("svg", {
                            viewBox: "0 0 36 36",
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
                            children: /*#__PURE__*/ jsx_runtime.jsx("path", {
                                d: "M29 15v16h-2v-6h-6v6h-2v-6l.005-.15a2 2 0 0 1 1.838-1.844L21 23h6v-8zM5 15v8h6a2 2 0 0 1 1.995 1.85L13 25v6h-2v-6H5v6H3V15zM16 1a15 15 0 0 1 13.556 8.571 1 1 0 0 1-.79 1.423l-.113.006H17v8h8v2h-8v10h-2V21H7v-2h8v-8H3.347a1 1 0 0 1-.946-1.323l.043-.106A15 15 0 0 1 16 1zm0 2C11.71 3 7.799 5.097 5.402 8.468l-.197.284L5.042 9h21.915l-.162-.248a12.995 12.995 0 0 0-10.1-5.734l-.365-.014z"
                            })
                        })
                    }),
                    /*#__PURE__*/ jsx_runtime.jsx("div", {
                        className: "amenities-icon-text",
                        children: "10 Acres"
                    })
                ]
            }),
            /*#__PURE__*/ (0,jsx_runtime.jsxs)("div", {
                className: "iikjzje i10xc1ab dir dir-ltr",
                children: [
                    /*#__PURE__*/ jsx_runtime.jsx("div", {
                        className: "i4wvyiy i1fpqhzs dir dir-ltr",
                        children: /*#__PURE__*/ jsx_runtime.jsx("svg", {
                            viewBox: "0 0 36 36",
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
                            children: /*#__PURE__*/ jsx_runtime.jsx("path", {
                                d: "m21.5371936.79901371c7.1880175 1.92602347 11.494866 9.23747869 9.7426084 16.43001709l-.0788157.3081628-.2588191.9659258-12.3525005-3.310178-3.857 14.14h-2.073l3.997-14.658-12.11647204-3.2462092.25881905-.9659258c1.95353809-7.29070343 9.44747649-11.61733078 16.73817989-9.66379269zm-15.87052693 20.20098629c2.209139 0 4 1.790861 4 4s-1.790861 4-4 4-4-1.790861-4-4 1.790861-4 4-4zm0 2c-1.1045695 0-2 .8954305-2 2s.8954305 2 2 2 2-.8954305 2-2-.8954305-2-2-2zm19.65915683-18.08358565.0562051.17389745c.7414212 2.34256671.7721409 5.3779941-.0104397 8.5029521l-.083862.3235661-.2500602.9331114 4.4483333 1.1920586.0336854-.1902377c.6822646-4.2118807-1.0077857-8.36292241-4.1938619-10.93534795zm-3.4573144-1.74209583-2.7528424 10.08862288 3.99 1.069.2502086-.9327495c1.2342523-4.60629235.4411768-8.82534729-1.4873662-10.22487338zm-1.9509888-.45024981c-2.2768126.37924219-4.8951798 3.45150567-6.1362066 7.78144189l-.0846967.3054909-.2509503.9329399 3.738 1.002zm-3.6637953-.26273744-.2191322.03588101c-3.8698651.66371945-7.25443966 3.26546734-8.8113326 7.03021387l-.12548156.31640439-.06677864.18116946 4.4836667 1.2019414.2500987-.933578c.8918782-3.32853504 2.5446834-6.12802789 4.4889596-7.83203213z"
                            })
                        })
                    }),
                    /*#__PURE__*/ jsx_runtime.jsx("div", {
                        className: "amenities-icon-text",
                        children: "Outdoor Capacity 100+"
                    })
                ]
            }),
            /*#__PURE__*/ (0,jsx_runtime.jsxs)("div", {
                className: "iikjzje i10xc1ab dir dir-ltr",
                children: [
                    /*#__PURE__*/ jsx_runtime.jsx("div", {
                        className: "i4wvyiy i1fpqhzs dir dir-ltr",
                        children: /*#__PURE__*/ jsx_runtime.jsx("svg", {
                            viewBox: "0 0 36 36",
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
                            children: /*#__PURE__*/ jsx_runtime.jsx("path", {
                                d: "m31 6v2h-1v23h-6v-18h-16v18h-6v-23h-1v-2zm-15.368 8.991.959.702c3.317 2.43 5.141 5.07 5.382 7.934l.02.287.005.207.002.138c0 3.183-2.698 5.741-6 5.741-3.168 0-5.789-2.358-5.988-5.387l-.01-.218-.002-.147c.004-1.629.557-3.29 1.64-4.985l.224-.34.677-.98 1.238.783zm12.368-6.991h-24v21h2v-16a2 2 0 0 1 1.697-1.977l.154-.018.149-.005h16a2 2 0 0 1 1.995 1.85l.005.15v16h2zm-12 17.355-.092.093c-.62.655-.908 1.233-.908 1.719 0 .428.413.833 1 .833s1-.405 1-.833c0-.445-.242-.968-.76-1.556l-.148-.163zm.351-7.315-1.766 3.562-1.466-.927-.152.265c-.534.96-.844 1.878-.937 2.749l-.023.289-.007.26.001.118c.025.92.408 1.761 1.024 2.403.14-1.137.86-2.237 2.097-3.324l.238-.203.64-.534.64.534c1.384 1.153 2.188 2.32 2.335 3.528a3.593 3.593 0 0 0 1.018-2.27l.007-.218-.006-.28c-.088-1.865-1.113-3.702-3.129-5.51l-.268-.236zm14.649-16.04v2h-30v-2z"
                            })
                        })
                    }),
                    /*#__PURE__*/ jsx_runtime.jsx("div", {
                        className: "amenities-icon-text",
                        children: "Sleeps 28"
                    })
                ]
            }),
            /*#__PURE__*/ (0,jsx_runtime.jsxs)("div", {
                className: "iikjzje i10xc1ab dir dir-ltr",
                children: [
                    /*#__PURE__*/ jsx_runtime.jsx("div", {
                        className: "i4wvyiy i1fpqhzs dir dir-ltr",
                        children: /*#__PURE__*/ jsx_runtime.jsx("svg", {
                            viewBox: "0 0 36 36",
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
                            children: /*#__PURE__*/ jsx_runtime.jsx("path", {
                                d: "M26 4a2 2 0 0 1 1.995 1.85L28 6v7.839l1.846 5.537a3 3 0 0 1 .115.468l.03.24.009.24V30h-2v-2H4v2H2v-9.675a3 3 0 0 1 .087-.717l.067-.232L4 13.836V6a2 2 0 0 1 1.697-1.977l.154-.018L6 4zm2 18H4v4h24zm-1.388-6H5.387l-1.333 4h23.891zM26 6H6v8h2v-4a2 2 0 0 1 1.85-1.995L10 8h12a2 2 0 0 1 1.995 1.85L24 10v4h2zm-11 4h-5v4h5zm7 0h-5v4h5z"
                            })
                        })
                    }),
                    /*#__PURE__*/ jsx_runtime.jsx("div", {
                        className: "amenities-icon-text",
                        children: "Indoor Capacity 50+"
                    })
                ]
            }),
            /*#__PURE__*/ (0,jsx_runtime.jsxs)("p", {
                className: "wedding-section-heading",
                children: [
                    "Fern Hall Estate is a stately, historic mansion located in Clifford, Pennsylvania. Crafted from local stone in 1916, it was the former family homestead of the Johnson family. The estate sits on 100+ acres of lush greenery, with a spring-fed lake, private boathouse, and stunning views of Crystal Lake and the Endless Mountains.",
                    /*#__PURE__*/ jsx_runtime.jsx("br", {}),
                    ".",
                    /*#__PURE__*/ jsx_runtime.jsx("br", {}),
                    "Guests can enjoy 12,000 square feet of luxurious living space, with premium bedding, Nest air monitoring, and updated bathrooms with new fixtures and Toto commodes. The original kitchen features built-in wooden ice boxes, which were once stocked with ice cut from Crystal Lake, and has been updated with a farm house sink, wolf stove, new appliances, and a gathering island..",
                    /*#__PURE__*/ jsx_runtime.jsx("br", {}),
                    ".",
                    /*#__PURE__*/ jsx_runtime.jsx("br", {}),
                    "The estate boasts original bronze wall sconces and chandeliers by Tiffany, one of the first electric lifts in the area, marble and ivory floors, and chestnut woodwork. The Johnson family dining room features original leaded glass doors by Dorflinger Glass Works..",
                    /*#__PURE__*/ jsx_runtime.jsx("br", {}),
                    ".",
                    /*#__PURE__*/ jsx_runtime.jsx("br", {}),
                    "Guests have complete privacy and access to natural spaces, with 10 acres of yard space, four outdoor covered patio areas, and a private boathouse for swimming and lake recreation. High-speed internet is provided by Adams cable service..",
                    /*#__PURE__*/ jsx_runtime.jsx("br", {}),
                    ".",
                    /*#__PURE__*/ jsx_runtime.jsx("br", {}),
                    "Fern Hall Estate is just minutes away from Elk Mountain Ski Resort in Union Dale, and only 2.5 hours from New York City or Philadelphia. Whether you're looking for a family getaway, a romantic retreat, or a gathering with friends, Fern Hall Estate offers a breath of fresh air and a taste of country living in a luxurious setting."
                ]
            }),
            /*#__PURE__*/ jsx_runtime.jsx(TestimonialSlider/* default */.Z, {})
        ]
    });
};
/* harmony default export */ const components_PropertyAboutSection = (PropertyAboutSection);

// EXTERNAL MODULE: ./src/components/AmenitiesSection.js
var AmenitiesSection = __webpack_require__(6565);
// EXTERNAL MODULE: ./src/components/navbar.js
var navbar = __webpack_require__(6480);
// EXTERNAL MODULE: ./src/components/pricing.js
var pricing = __webpack_require__(9316);
// EXTERNAL MODULE: ./src/components/CarouselItem.js
var CarouselItem = __webpack_require__(7064);
;// CONCATENATED MODULE: ./firebase.js
Object(function webpackMissingModule() { var e = new Error("Cannot find module 'firebase/app'"); e.code = 'MODULE_NOT_FOUND'; throw e; }());
Object(function webpackMissingModule() { var e = new Error("Cannot find module 'firebase/analytics'"); e.code = 'MODULE_NOT_FOUND'; throw e; }());
Object(function webpackMissingModule() { var e = new Error("Cannot find module 'firebase/storage'"); e.code = 'MODULE_NOT_FOUND'; throw e; }());



// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyAEZ5vz1zdecD2pVl-uPykzefx-P2VURWY",
    authDomain: "fernhall-esta.firebaseapp.com",
    projectId: "fernhall-esta",
    storageBucket: "fernhall-esta.appspot.com",
    messagingSenderId: "473659291983",
    appId: "1:473659291983:web:32d559ca8ab147cc58ed3a",
    measurementId: "G-WEHBG3LS2Y"
};
// Initialize Firebase
const app = Object(function webpackMissingModule() { var e = new Error("Cannot find module 'firebase/app'"); e.code = 'MODULE_NOT_FOUND'; throw e; }())(firebaseConfig);
const storage = Object(function webpackMissingModule() { var e = new Error("Cannot find module 'firebase/storage'"); e.code = 'MODULE_NOT_FOUND'; throw e; }())(app);


;// CONCATENATED MODULE: ./src/components/ThingsToDo.js
Object(function webpackMissingModule() { var e = new Error("Cannot find module 'firebase/storage'"); e.code = 'MODULE_NOT_FOUND'; throw e; }());






const ThingsToDo = ()=>{
    const [currentPosition, setCurrentPosition] = (0,external_react_.useState)(0);
    const [ToDoItems, setToDoItems] = (0,external_react_.useState)([]); // Set initial state as empty array
    (0,external_react_.useEffect)(()=>{
        const fetchImages = async ()=>{
            const imagePaths = [
                {
                    src: "gs://fernhall-esta.appspot.com/ThingsToDo/img-1.jpg",
                    name: "Skiing at Elk Mountain",
                    description: "Experience modern luxury at this prestigious home after a long day of skiing at the “Best Overall Mountain in the Mid-Atlantic Region!"
                },
                {
                    src: "gs://fernhall-esta.appspot.com/ThingsToDo/img-2.jpg",
                    name: "Hike or walk on the many trails in the area",
                    description: `Whether you're an experienced hiker or just looking for a leisurely walk, there are plenty of trails to explore in the Union Dale area, all offering unique views of the surrounding mountains and forests.`
                },
                {
                    src: "gs://fernhall-esta.appspot.com/ThingsToDo/img-3.jpg",
                    name: "Visit the wineries in the region.",
                    description: `Some popular wineries in the area include Maiolatesi Wine Cellars, Capra Collina Winery, and Nimble Hill Vineyard & Winery. Visitors can take tours of the wineries, taste local wines, and even purchase bottles to take home.`
                },
                {
                    src: "gs://fernhall-esta.appspot.com/ThingsToDo/img-4.jpg",
                    name: "Lakefront Private Boathouse",
                    description: `Take advantage of the lakefront location and go fishing, swimming, kayaking, or paddleboarding on Crystal Lake.`
                },
                {
                    src: "gs://fernhall-esta.appspot.com/ThingsToDo/img-5.jpg",
                    name: "Have fun at Lahey Fun Park",
                    description: "Visitors can take part in thrilling go-kart races, challenge their friends to mini-golf, or enjoy the classic arcade games. The bumper cars are also a popular attraction, providing a fun and safe way to bump and crash into each other.  "
                }
            ];
            const fetchedImages = await Promise.all(imagePaths.map(async (image)=>{
                const imageRef = Object(function webpackMissingModule() { var e = new Error("Cannot find module 'firebase/storage'"); e.code = 'MODULE_NOT_FOUND'; throw e; }())(storage, image.src);
                const imageUrl = await Object(function webpackMissingModule() { var e = new Error("Cannot find module 'firebase/storage'"); e.code = 'MODULE_NOT_FOUND'; throw e; }())(imageRef);
                return {
                    ...image,
                    image: imageUrl
                };
            }));
            setToDoItems(fetchedImages);
        };
        fetchImages();
    }, []);
    const handlePrevClick = ()=>{
        if (currentPosition > 0) {
            setCurrentPosition(currentPosition - 100); // change 33.33 to 100
        } else {
            setCurrentPosition((ToDoItems.length - 1) * 100); // Loop back to last image
        }
    };
    const handleNextClick = ()=>{
        if (currentPosition < (ToDoItems.length - 1) * 50) {
            setCurrentPosition(currentPosition + 50); // change 33.33 to 100
        } else {
            setCurrentPosition(0); // Loop back to first image
        }
    };
    const handleSwipeLeft = ()=>{
        if (currentPosition < (ToDoItems.length - 1) * 100) {
            setCurrentPosition(currentPosition + 100); // change 33.33 to 100
        }
    };
    const handleSwipeRight = ()=>{
        if (currentPosition > 0) {
            setCurrentPosition(currentPosition - 100); // change 33.33 to 100
        }
    };
    return /*#__PURE__*/ (0,jsx_runtime.jsxs)("div", {
        id: "vendors",
        children: [
            /*#__PURE__*/ jsx_runtime.jsx("h2", {
                className: "wedding-section-heading",
                children: "Things to Do"
            }),
            /*#__PURE__*/ (0,jsx_runtime.jsxs)("div", {
                className: "vendor-carousel",
                children: [
                    /*#__PURE__*/ jsx_runtime.jsx("button", {
                        className: "vendor-carousel-button prev",
                        onClick: handlePrevClick,
                        children: "Prev"
                    }),
                    /*#__PURE__*/ jsx_runtime.jsx("div", {
                        className: "vendor-carousel-items",
                        style: {
                            left: `${-currentPosition}%`
                        },
                        children: ToDoItems.map((item, index)=>/*#__PURE__*/ jsx_runtime.jsx(CarouselItem/* default */.Z, {
                                item: item
                            }, index))
                    }),
                    /*#__PURE__*/ jsx_runtime.jsx("button", {
                        className: "vendor-carousel-button next",
                        onClick: handleNextClick,
                        children: "Next"
                    })
                ]
            })
        ]
    });
};
/* harmony default export */ const components_ThingsToDo = (ThingsToDo);

// EXTERNAL MODULE: ../../../../../opt/homebrew/lib/node_modules/next/dynamic.js
var dynamic = __webpack_require__(8014);
var dynamic_default = /*#__PURE__*/__webpack_require__.n(dynamic);
;// CONCATENATED MODULE: ./src/components/MyCalendar1.js
Object(function webpackMissingModule() { var e = new Error("Cannot find module '@fullcalendar/react'"); e.code = 'MODULE_NOT_FOUND'; throw e; }());
Object(function webpackMissingModule() { var e = new Error("Cannot find module '@fullcalendar/daygrid'"); e.code = 'MODULE_NOT_FOUND'; throw e; }());
Object(function webpackMissingModule() { var e = new Error("Cannot find module '@fullcalendar/interaction'"); e.code = 'MODULE_NOT_FOUND'; throw e; }());





const MyCalendar = ()=>{
    const [events, setEvents] = (0,external_react_.useState)([]);
    const [showModal, setShowModal] = (0,external_react_.useState)(false);
    const [modalContent, setModalContent] = (0,external_react_.useState)("");
    (0,external_react_.useEffect)(()=>{
        const fetchCalendarData = async ()=>{
            try {
                const response = await fetch("/api/calendar");
                const data = await response.json();
                setEvents(data);
            } catch (error) {
                console.error("Error fetching calendar data:", error);
            }
        };
        fetchCalendarData();
    }, []);
    const handleEventClick = (eventInfo)=>{
        console.log("Event clicked:", eventInfo.event);
        console.log("Event info:", eventInfo);
        setModalContent(eventInfo.event.extendedProps.summary);
        setShowModal(true);
    };
    const handleDateClick = (arg)=>{
        console.log("Date clicked:", arg.date);
    };
    return /*#__PURE__*/ (0,jsx_runtime.jsxs)("div", {
        children: [
            /*#__PURE__*/ jsx_runtime.jsx("h5", {
                children: " Property Availability"
            }),
            /*#__PURE__*/ jsx_runtime.jsx(Object(function webpackMissingModule() { var e = new Error("Cannot find module '@fullcalendar/react'"); e.code = 'MODULE_NOT_FOUND'; throw e; }()), {
                plugins: [
                    Object(function webpackMissingModule() { var e = new Error("Cannot find module '@fullcalendar/daygrid'"); e.code = 'MODULE_NOT_FOUND'; throw e; }()),
                    Object(function webpackMissingModule() { var e = new Error("Cannot find module '@fullcalendar/interaction'"); e.code = 'MODULE_NOT_FOUND'; throw e; }())
                ],
                initialView: "dayGridMonth",
                events: events,
                eventContent: renderEventContent,
                selectable: true,
                selectMirror: true,
                dayMaxEvents: true,
                headerToolbar: {
                    left: "prev,next today",
                    center: "title",
                    right: "dayGridMonth,timeGridWeek,timeGridDay,listWeek"
                },
                eventClick: handleEventClick,
                dateClick: handleDateClick,
                eventBackgroundColor: (info)=>{
                    if (info.event.extendedProps.priority === "high") {
                        return "red";
                    } else {
                        return "green";
                    }
                }
            }),
            showModal && /*#__PURE__*/ jsx_runtime.jsx("div", {
                className: "modal",
                children: /*#__PURE__*/ (0,jsx_runtime.jsxs)("div", {
                    className: "modal-content",
                    children: [
                        /*#__PURE__*/ jsx_runtime.jsx("span", {
                            className: "close",
                            onClick: ()=>setShowModal(false),
                            children: "\xd7"
                        }),
                        /*#__PURE__*/ jsx_runtime.jsx("p", {
                            children: modalContent
                        })
                    ]
                })
            })
        ]
    });
};
function renderEventContent(eventInfo) {
    return /*#__PURE__*/ (0,jsx_runtime.jsxs)(jsx_runtime.Fragment, {
        children: [
            /*#__PURE__*/ jsx_runtime.jsx("b", {
                children: eventInfo.event.title
            }),
            /*#__PURE__*/ jsx_runtime.jsx("span", {
                children: eventInfo.event.extendedProps.summary
            })
        ]
    });
}
/* harmony default export */ const MyCalendar1 = (MyCalendar);

;// CONCATENATED MODULE: ./pages/property-overview.js
Object(function webpackMissingModule() { var e = new Error("Cannot find module 'react-images'"); e.code = 'MODULE_NOT_FOUND'; throw e; }());
Object(function webpackMissingModule() { var e = new Error("Cannot find module '@mui/material/styles'"); e.code = 'MODULE_NOT_FOUND'; throw e; }());
Object(function webpackMissingModule() { var e = new Error("Cannot find module '@mui/material/Box'"); e.code = 'MODULE_NOT_FOUND'; throw e; }());
Object(function webpackMissingModule() { var e = new Error("Cannot find module '@mui/material/Paper'"); e.code = 'MODULE_NOT_FOUND'; throw e; }());
Object(function webpackMissingModule() { var e = new Error("Cannot find module '@mui/material/Unstable_Grid2'"); e.code = 'MODULE_NOT_FOUND'; throw e; }());
















const PropertyOverview = ()=>{
    const Item = Object(function webpackMissingModule() { var e = new Error("Cannot find module '@mui/material/styles'"); e.code = 'MODULE_NOT_FOUND'; throw e; }())(Object(function webpackMissingModule() { var e = new Error("Cannot find module '@mui/material/Paper'"); e.code = 'MODULE_NOT_FOUND'; throw e; }()))(({ theme  })=>({
            backgroundColor: theme.palette.mode === "dark" ? "#1A2027" : "#fff",
            ...theme.typography.body2,
            padding: theme.spacing(1),
            textAlign: "center",
            color: theme.palette.text.secondary
        }));
    const handleSubmit = (e)=>{
        e.preventDefault();
    // Handle form submission here
    };
    const [currentImage, setCurrentImage] = (0,external_react_.useState)(0);
    const [viewerIsOpen, setViewerIsOpen] = (0,external_react_.useState)(false);
    const openLightbox = (0,external_react_.useCallback)((event, { photo , index  })=>{
        setCurrentImage(index);
        setViewerIsOpen(true);
    }, []);
    const closeLightbox = ()=>{
        setCurrentImage(0);
        setViewerIsOpen(false);
    };
    return /*#__PURE__*/ (0,jsx_runtime.jsxs)(Layout/* default */.Z, {
        children: [
            /*#__PURE__*/ jsx_runtime.jsx(PageBanner_2, {
                pageTitle: "Property Overview",
                pageName: "Property Overview"
            }),
            /*#__PURE__*/ jsx_runtime.jsx("section", {
                className: "project-grid-page p-r z-1 pt-170 pb-130",
                id: "project-filter",
                children: /*#__PURE__*/ (0,jsx_runtime.jsxs)("div", {
                    className: "container",
                    children: [
                        /*#__PURE__*/ jsx_runtime.jsx(PortfolioGridIsotope, {}),
                        /*#__PURE__*/ jsx_runtime.jsx("div", {
                            className: "row justify-content-center"
                        }),
                        /*#__PURE__*/ jsx_runtime.jsx("div", {
                            children: /*#__PURE__*/ jsx_runtime.jsx(Object(function webpackMissingModule() { var e = new Error("Cannot find module 'react-images'"); e.code = 'MODULE_NOT_FOUND'; throw e; }()), {
                                children: viewerIsOpen ? /*#__PURE__*/ jsx_runtime.jsx(Object(function webpackMissingModule() { var e = new Error("Cannot find module 'react-images'"); e.code = 'MODULE_NOT_FOUND'; throw e; }()), {
                                    onClose: closeLightbox,
                                    children: /*#__PURE__*/ jsx_runtime.jsx(Object(function webpackMissingModule() { var e = new Error("Cannot find module 'react-images'"); e.code = 'MODULE_NOT_FOUND'; throw e; }()), {
                                        currentIndex: currentImage,
                                        views: photoGallery.map((x)=>({
                                                ...x,
                                                srcset: x.srcSet,
                                                caption: x.title
                                            }))
                                    })
                                }) : null
                            })
                        }),
                        /*#__PURE__*/ jsx_runtime.jsx("div", {
                            children: /*#__PURE__*/ jsx_runtime.jsx("br", {})
                        }),
                        /*#__PURE__*/ jsx_runtime.jsx("div", {
                            className: "Venue-Info",
                            children: /*#__PURE__*/ jsx_runtime.jsx(Object(function webpackMissingModule() { var e = new Error("Cannot find module '@mui/material/Box'"); e.code = 'MODULE_NOT_FOUND'; throw e; }()), {
                                sx: {
                                    flexGrow: 1
                                },
                                children: /*#__PURE__*/ (0,jsx_runtime.jsxs)(Object(function webpackMissingModule() { var e = new Error("Cannot find module '@mui/material/Unstable_Grid2'"); e.code = 'MODULE_NOT_FOUND'; throw e; }()), {
                                    container: true,
                                    spacing: 2,
                                    children: [
                                        /*#__PURE__*/ jsx_runtime.jsx(Object(function webpackMissingModule() { var e = new Error("Cannot find module '@mui/material/Unstable_Grid2'"); e.code = 'MODULE_NOT_FOUND'; throw e; }()), {
                                            xs: 8,
                                            children: /*#__PURE__*/ (0,jsx_runtime.jsxs)(Item, {
                                                children: [
                                                    "   ",
                                                    /*#__PURE__*/ jsx_runtime.jsx(navbar/* default */.Z, {}),
                                                    "  ",
                                                    /*#__PURE__*/ jsx_runtime.jsx(components_PropertyAboutSection, {}),
                                                    "  ",
                                                    /*#__PURE__*/ jsx_runtime.jsx(AmenitiesSection/* default */.Z, {}),
                                                    " ",
                                                    /*#__PURE__*/ jsx_runtime.jsx(pricing/* default */.Z, {}),
                                                    /*#__PURE__*/ jsx_runtime.jsx(components_ThingsToDo, {})
                                                ]
                                            })
                                        }),
                                        /*#__PURE__*/ jsx_runtime.jsx(Object(function webpackMissingModule() { var e = new Error("Cannot find module '@mui/material/Unstable_Grid2'"); e.code = 'MODULE_NOT_FOUND'; throw e; }()), {
                                            xs: 4,
                                            children: /*#__PURE__*/ jsx_runtime.jsx(Item, {
                                                children: /*#__PURE__*/ jsx_runtime.jsx(MyCalendar1, {})
                                            })
                                        })
                                    ]
                                })
                            })
                        })
                    ]
                })
            })
        ]
    });
};
const PortfolioGridIsotope = dynamic_default()(null, {
    loadableGenerated: {
        modules: [
            "property-overview.js -> " + "../src/components/PortfolioGridIsotope"
        ]
    },
    ssr: false
});
/* harmony default export */ const property_overview = (PropertyOverview);


/***/ }),

/***/ 3280:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/app-router-context.js");

/***/ }),

/***/ 5832:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/loadable.js");

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
var __webpack_exports__ = __webpack_require__.X(0, [253,857,14,719,950,272], () => (__webpack_exec__(4)));
module.exports = __webpack_exports__;

})();