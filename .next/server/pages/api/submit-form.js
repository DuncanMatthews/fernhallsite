"use strict";
(() => {
var exports = {};
exports.id = 850;
exports.ids = [850];
exports.modules = {

/***/ 7147:
/***/ ((module) => {

module.exports = require("fs");

/***/ }),

/***/ 1017:
/***/ ((module) => {

module.exports = require("path");

/***/ }),

/***/ 2111:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ handler)
/* harmony export */ });
function handler(req, res) {
    const formData = req.body;
    const fs = __webpack_require__(7147);
    const path = __webpack_require__(1017);
    const filePath = path.join(process.cwd(), "data", "reviews.json");
    fs.writeFileSync(filePath, JSON.stringify(formData));
    res.status(200).json({
        message: "Form data submitted successfully!"
    });
}


/***/ })

};
;

// load runtime
var __webpack_require__ = require("../../webpack-api-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = (__webpack_exec__(2111));
module.exports = __webpack_exports__;

})();