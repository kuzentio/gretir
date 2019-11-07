(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["pages-welcome-welcome-module"], {
        /***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/welcome/welcome.component.html": 
        /*!********************************************************************************************!*\
          !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/pages/welcome/welcome.component.html ***!
          \********************************************************************************************/
        /*! exports provided: default */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony default export */ __webpack_exports__["default"] = ("");
            /***/ 
        }),
        /***/ "./src/app/pages/welcome/welcome-routing.module.ts": 
        /*!*********************************************************!*\
          !*** ./src/app/pages/welcome/welcome-routing.module.ts ***!
          \*********************************************************/
        /*! exports provided: WelcomeRoutingModule */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "WelcomeRoutingModule", function () { return WelcomeRoutingModule; });
            /* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
            /* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
            /* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
            /* harmony import */ var _welcome_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./welcome.component */ "./src/app/pages/welcome/welcome.component.ts");
            var routes = [
                { path: '', component: _welcome_component__WEBPACK_IMPORTED_MODULE_3__["WelcomeComponent"] },
            ];
            var WelcomeRoutingModule = /** @class */ (function () {
                function WelcomeRoutingModule() {
                }
                return WelcomeRoutingModule;
            }());
            WelcomeRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
                Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
                    imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
                    exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
                })
            ], WelcomeRoutingModule);
            /***/ 
        }),
        /***/ "./src/app/pages/welcome/welcome.component.css": 
        /*!*****************************************************!*\
          !*** ./src/app/pages/welcome/welcome.component.css ***!
          \*****************************************************/
        /*! exports provided: default */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3BhZ2VzL3dlbGNvbWUvd2VsY29tZS5jb21wb25lbnQuY3NzIn0= */");
            /***/ 
        }),
        /***/ "./src/app/pages/welcome/welcome.component.ts": 
        /*!****************************************************!*\
          !*** ./src/app/pages/welcome/welcome.component.ts ***!
          \****************************************************/
        /*! exports provided: WelcomeComponent */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "WelcomeComponent", function () { return WelcomeComponent; });
            /* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
            /* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
            var WelcomeComponent = /** @class */ (function () {
                function WelcomeComponent() {
                }
                WelcomeComponent.prototype.ngOnInit = function () {
                };
                return WelcomeComponent;
            }());
            WelcomeComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
                Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
                    selector: 'app-welcome',
                    template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./welcome.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/welcome/welcome.component.html")).default,
                    styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./welcome.component.css */ "./src/app/pages/welcome/welcome.component.css")).default]
                })
            ], WelcomeComponent);
            /***/ 
        }),
        /***/ "./src/app/pages/welcome/welcome.module.ts": 
        /*!*************************************************!*\
          !*** ./src/app/pages/welcome/welcome.module.ts ***!
          \*************************************************/
        /*! exports provided: WelcomeModule */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "WelcomeModule", function () { return WelcomeModule; });
            /* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
            /* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
            /* harmony import */ var _welcome_routing_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./welcome-routing.module */ "./src/app/pages/welcome/welcome-routing.module.ts");
            /* harmony import */ var _welcome_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./welcome.component */ "./src/app/pages/welcome/welcome.component.ts");
            var WelcomeModule = /** @class */ (function () {
                function WelcomeModule() {
                }
                return WelcomeModule;
            }());
            WelcomeModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
                Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
                    imports: [_welcome_routing_module__WEBPACK_IMPORTED_MODULE_2__["WelcomeRoutingModule"]],
                    declarations: [_welcome_component__WEBPACK_IMPORTED_MODULE_3__["WelcomeComponent"]],
                    exports: [_welcome_component__WEBPACK_IMPORTED_MODULE_3__["WelcomeComponent"]]
                })
            ], WelcomeModule);
            /***/ 
        })
    }]);
//# sourceMappingURL=pages-welcome-welcome-module-es2015.js.map
//# sourceMappingURL=pages-welcome-welcome-module-es5.js.map
//# sourceMappingURL=pages-welcome-welcome-module-es5.js.map