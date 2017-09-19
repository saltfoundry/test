exports.ids = [0];
exports.modules = {

/***/ 544:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AboutModule", function() { return AboutModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_tslib__ = __webpack_require__(5);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__(2);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_common__ = __webpack_require__(21);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_router__ = __webpack_require__(97);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__about_routes__ = __webpack_require__(551);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__about_component__ = __webpack_require__(546);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__about_us_component__ = __webpack_require__(547);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__about_banana_component__ = __webpack_require__(548);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__about_apple_pear_component__ = __webpack_require__(549);









var AboutModule = (function () {
    function AboutModule() {
    }
    return AboutModule;
}());
AboutModule = __WEBPACK_IMPORTED_MODULE_0_tslib__["a" /* __decorate */]([
    Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["M" /* NgModule */])({
        imports: [
            __WEBPACK_IMPORTED_MODULE_2__angular_common__["b" /* CommonModule */],
            __WEBPACK_IMPORTED_MODULE_3__angular_router__["c" /* RouterModule */].forChild(__WEBPACK_IMPORTED_MODULE_4__about_routes__["a" /* routes */])
        ],
        declarations: [
            __WEBPACK_IMPORTED_MODULE_5__about_component__["a" /* AboutComponent */],
            __WEBPACK_IMPORTED_MODULE_6__about_us_component__["a" /* AboutUsComponent */],
            __WEBPACK_IMPORTED_MODULE_7__about_banana_component__["a" /* AboutBananaComponent */],
            __WEBPACK_IMPORTED_MODULE_8__about_apple_pear_component__["a" /* AboutApplePearComponent */]
        ]
    })
], AboutModule);

//# sourceMappingURL=about.module.js.map

/***/ }),

/***/ 546:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AboutComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_tslib__ = __webpack_require__(5);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__(2);


var AboutComponent = (function () {
    function AboutComponent() {
    }
    return AboutComponent;
}());
AboutComponent = __WEBPACK_IMPORTED_MODULE_0_tslib__["a" /* __decorate */]([
    Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["o" /* Component */])({
        template: "ng-seed (universal) about page<br/>\n  This page provides a dummy overview of nothing"
    })
], AboutComponent);

//# sourceMappingURL=about.component.js.map

/***/ }),

/***/ 547:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AboutUsComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_tslib__ = __webpack_require__(5);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__(2);


var AboutUsComponent = (function () {
    function AboutUsComponent() {
    }
    return AboutUsComponent;
}());
AboutUsComponent = __WEBPACK_IMPORTED_MODULE_0_tslib__["a" /* __decorate */]([
    Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["o" /* Component */])({
        template: "ng-seed (universal) about us page<br/>\n  Yeah, I think this page tells something about us"
    })
], AboutUsComponent);

//# sourceMappingURL=about-us.component.js.map

/***/ }),

/***/ 548:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AboutBananaComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_tslib__ = __webpack_require__(5);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__(2);


var AboutBananaComponent = (function () {
    function AboutBananaComponent() {
    }
    return AboutBananaComponent;
}());
AboutBananaComponent = __WEBPACK_IMPORTED_MODULE_0_tslib__["a" /* __decorate */]([
    Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["o" /* Component */])({
        template: "ng-seed (universal) about banana page<br/>\n  If your life sucks, start a new one in Banana Republic"
    })
], AboutBananaComponent);

//# sourceMappingURL=about-banana.component.js.map

/***/ }),

/***/ 549:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AboutApplePearComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_tslib__ = __webpack_require__(5);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__(2);


var AboutApplePearComponent = (function () {
    function AboutApplePearComponent() {
    }
    return AboutApplePearComponent;
}());
AboutApplePearComponent = __WEBPACK_IMPORTED_MODULE_0_tslib__["a" /* __decorate */]([
    Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["o" /* Component */])({
        template: "ng-seed (universal) about apple pear page<br/>\n  I want an apple but you give me a pear, shame on you"
    })
], AboutApplePearComponent);

//# sourceMappingURL=about-apple-pear.component.js.map

/***/ }),

/***/ 551:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return routes; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__about_component__ = __webpack_require__(546);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__about_us_component__ = __webpack_require__(547);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__about_banana_component__ = __webpack_require__(548);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__about_apple_pear_component__ = __webpack_require__(549);




var routes = [
    {
        path: '',
        component: __WEBPACK_IMPORTED_MODULE_0__about_component__["a" /* AboutComponent */],
        data: {
            meta: {
                title: 'PUBLIC.ABOUT.PAGE_TITLE',
                description: 'PUBLIC.ABOUT.META_DESCRIPTION'
            }
        }
    },
    {
        path: 'us/:topicId',
        component: __WEBPACK_IMPORTED_MODULE_1__about_us_component__["a" /* AboutUsComponent */],
        data: {
            meta: {
                title: 'PUBLIC.ABOUT_US.PAGE_TITLE',
                description: 'PUBLIC.ABOUT_US.META_DESCRIPTION'
            }
        }
    },
    {
        path: 'banana',
        component: __WEBPACK_IMPORTED_MODULE_2__about_banana_component__["a" /* AboutBananaComponent */],
        data: {
            meta: {
                title: 'PUBLIC.ABOUT_BANANA.PAGE_TITLE',
                description: 'PUBLIC.ABOUT_BANANA.META_DESCRIPTION'
            }
        }
    },
    {
        path: 'apple/:fruitId/pear',
        component: __WEBPACK_IMPORTED_MODULE_3__about_apple_pear_component__["a" /* AboutApplePearComponent */],
        data: {
            meta: {
                title: 'PUBLIC.ABOUT_APPLE_PEAR.PAGE_TITLE',
                description: 'PUBLIC.ABOUT_APPLE_PEAR.META_DESCRIPTION'
            }
        }
    }
];
//# sourceMappingURL=about.routes.js.map

/***/ })

};;
//# sourceMappingURL=server.bundle.map