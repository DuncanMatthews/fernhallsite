"use strict";
(() => {
var exports = {};
exports.id = 761;
exports.ids = [761];
exports.modules = {

/***/ 4090:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
Object(function webpackMissingModule() { var e = new Error("Cannot find module '@mailchimp/mailchimp_marketing'"); e.code = 'MODULE_NOT_FOUND'; throw e; }());

Object(function webpackMissingModule() { var e = new Error("Cannot find module '@mailchimp/mailchimp_marketing'"); e.code = 'MODULE_NOT_FOUND'; throw e; }())({
    apiKey: process.env.MAILCHIMP_API_KEY,
    server: process.env.MAILCHIMP_API_SERVER
});
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (async (req, res)=>{
    const { email  } = req.body;
    if (!email) {
        return res.status(400).json({
            error: "Email is required"
        });
    }
    try {
        await Object(function webpackMissingModule() { var e = new Error("Cannot find module '@mailchimp/mailchimp_marketing'"); e.code = 'MODULE_NOT_FOUND'; throw e; }())(process.env.MAILCHIMP_AUDIENCE_ID, {
            email_address: email,
            status: "subscribed"
        });
        return res.status(201).json({
            error: ""
        });
    } catch (error) {
        return res.status(500).json({
            error: error.message || error.toString()
        });
    }
});


/***/ })

};
;

// load runtime
var __webpack_require__ = require("../../webpack-api-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = (__webpack_exec__(4090));
module.exports = __webpack_exports__;

})();