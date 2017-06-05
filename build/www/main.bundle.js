webpackJsonp([0],{

/***/ "./node_modules/css-loader/index.js!./node_modules/sass-loader/lib/loader.js!./src/main/webapp/app/account/password/password-strength-bar.scss":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(11)(undefined);
// imports


// module
exports.push([module.i, "/* ==========================================================================\nstart Password strength bar style\n========================================================================== */\nul#strength {\n  display: inline;\n  list-style: none;\n  margin: 0;\n  margin-left: 15px;\n  padding: 0;\n  vertical-align: 2px; }\n\n.point {\n  background: #DDD;\n  border-radius: 2px;\n  display: inline-block;\n  height: 5px;\n  margin-right: 1px;\n  width: 20px; }\n  .point:last {\n    margin: 0 !important; }\n", ""]);

// exports


/***/ }),

/***/ "./node_modules/css-loader/index.js!./node_modules/sass-loader/lib/loader.js!./src/main/webapp/app/home/home.scss":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(11)(undefined);
// imports


// module
exports.push([module.i, "/* ==========================================================================\nMain page styles\n========================================================================== */\n.hipster {\n  display: inline-block;\n  width: 347px;\n  height: 497px;\n  background: url(" + __webpack_require__("./src/main/webapp/content/images/hipster.png") + ") no-repeat center top;\n  background-size: contain; }\n\n/* wait autoprefixer update to allow simple generation of high pixel density media query */\n@media only screen and (-webkit-min-device-pixel-ratio: 2), only screen and (min--moz-device-pixel-ratio: 2), only screen and (-o-min-device-pixel-ratio: 2 / 1), only screen and (min-device-pixel-ratio: 2), only screen and (min-resolution: 192dpi), only screen and (min-resolution: 2dppx) {\n  .hipster {\n    background: url(" + __webpack_require__("./src/main/webapp/content/images/hipster2x.png") + ") no-repeat center top;\n    background-size: contain; } }\n", ""]);

// exports


/***/ }),

/***/ "./node_modules/css-loader/index.js!./node_modules/sass-loader/lib/loader.js!./src/main/webapp/app/layouts/navbar/navbar.scss":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(11)(undefined);
// imports


// module
exports.push([module.i, "/* ==========================================================================\nNavbar\n========================================================================== */\n.navbar-version {\n  font-size: 10px;\n  color: #ccc; }\n\n.jh-navbar {\n  background-color: #353d47;\n  padding: .2em 1em; }\n  .jh-navbar .profile-image {\n    margin: -10px 0px;\n    height: 40px;\n    width: 40px;\n    border-radius: 50%; }\n  .jh-navbar .dropdown-item.active, .jh-navbar .dropdown-item.active:focus, .jh-navbar .dropdown-item.active:hover {\n    background-color: #353d47; }\n  .jh-navbar .dropdown-toggle::after {\n    margin-left: 0.15em; }\n  .jh-navbar ul.navbar-nav {\n    padding: 0.5em; }\n    .jh-navbar ul.navbar-nav .nav-item {\n      margin-left: 1.5rem; }\n  .jh-navbar a.nav-link {\n    font-weight: 400; }\n  .jh-navbar .jh-navbar-toggler {\n    color: #ccc;\n    font-size: 1.5em;\n    padding: 10px; }\n    .jh-navbar .jh-navbar-toggler:hover {\n      color: #fff; }\n\n@media screen and (max-width: 992px) {\n  .jh-logo-container {\n    width: 100%; } }\n\n.navbar-title {\n  display: inline-block;\n  vertical-align: middle; }\n\n/* ==========================================================================\nLogo styles\n========================================================================== */\n.navbar-brand.logo {\n  padding: 5px 15px; }\n  .navbar-brand.logo .logo-img {\n    height: 45px;\n    width: 70px;\n    display: inline-block;\n    vertical-align: middle;\n    background: url(" + __webpack_require__("./src/main/webapp/content/images/logo-jhipster.png") + ") no-repeat center center;\n    background-size: contain; }\n", ""]);

// exports


/***/ }),

/***/ "./node_modules/css-loader/index.js!./node_modules/sass-loader/lib/loader.js!./src/main/webapp/app/layouts/profiles/page-ribbon.scss":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(11)(undefined);
// imports


// module
exports.push([module.i, "/* ==========================================================================\nDevelopement Ribbon\n========================================================================== */\n.ribbon {\n  background-color: rgba(170, 0, 0, 0.5);\n  left: -3.5em;\n  moz-transform: rotate(-45deg);\n  ms-transform: rotate(-45deg);\n  o-transform: rotate(-45deg);\n  webkit-transform: rotate(-45deg);\n  transform: rotate(-45deg);\n  overflow: hidden;\n  position: absolute;\n  top: 40px;\n  white-space: nowrap;\n  width: 15em;\n  z-index: 9999;\n  pointer-events: none;\n  opacity: 0.75; }\n  .ribbon a {\n    color: #fff;\n    display: block;\n    font-weight: 400;\n    margin: 1px 0;\n    padding: 10px 50px;\n    text-align: center;\n    text-decoration: none;\n    text-shadow: 0 0 5px #444;\n    pointer-events: none; }\n", ""]);

// exports


/***/ }),

/***/ "./node_modules/ng2-translate/ng2-translate.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__index__ = __webpack_require__(13);
/* harmony namespace reexport (by provided) */ __webpack_require__.d(__webpack_exports__, "translateLoaderFactory", function() { return __WEBPACK_IMPORTED_MODULE_0__index__["translateLoaderFactory"]; });
/* harmony namespace reexport (by provided) */ __webpack_require__.d(__webpack_exports__, "TranslateModule", function() { return __WEBPACK_IMPORTED_MODULE_0__index__["TranslateModule"]; });
/* harmony namespace reexport (by provided) */ __webpack_require__.d(__webpack_exports__, "TranslatePipe", function() { return __WEBPACK_IMPORTED_MODULE_0__index__["TranslatePipe"]; });
/* harmony namespace reexport (by provided) */ __webpack_require__.d(__webpack_exports__, "MissingTranslationHandler", function() { return __WEBPACK_IMPORTED_MODULE_0__index__["MissingTranslationHandler"]; });
/* harmony namespace reexport (by provided) */ __webpack_require__.d(__webpack_exports__, "TranslateLoader", function() { return __WEBPACK_IMPORTED_MODULE_0__index__["TranslateLoader"]; });
/* harmony namespace reexport (by provided) */ __webpack_require__.d(__webpack_exports__, "TranslateStaticLoader", function() { return __WEBPACK_IMPORTED_MODULE_0__index__["TranslateStaticLoader"]; });
/* harmony namespace reexport (by provided) */ __webpack_require__.d(__webpack_exports__, "TranslateService", function() { return __WEBPACK_IMPORTED_MODULE_0__index__["TranslateService"]; });
/* harmony namespace reexport (by provided) */ __webpack_require__.d(__webpack_exports__, "TranslateParser", function() { return __WEBPACK_IMPORTED_MODULE_0__index__["TranslateParser"]; });
/* harmony namespace reexport (by provided) */ __webpack_require__.d(__webpack_exports__, "DefaultTranslateParser", function() { return __WEBPACK_IMPORTED_MODULE_0__index__["DefaultTranslateParser"]; });
/* harmony namespace reexport (by provided) */ __webpack_require__.d(__webpack_exports__, "TranslateDirective", function() { return __WEBPACK_IMPORTED_MODULE_0__index__["TranslateDirective"]; });



/***/ }),

/***/ "./src/main/webapp/app/account/account.module.ts":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = __webpack_require__(0);
var router_1 = __webpack_require__(7);
var shared_1 = __webpack_require__("./src/main/webapp/app/shared/index.ts");
var _1 = __webpack_require__("./src/main/webapp/app/account/index.ts");
var PacketAppAccountModule = (function () {
    function PacketAppAccountModule() {
    }
    return PacketAppAccountModule;
}());
PacketAppAccountModule = __decorate([
    core_1.NgModule({
        imports: [
            shared_1.PacketAppSharedModule,
            router_1.RouterModule.forRoot(_1.accountState, { useHash: true })
        ],
        declarations: [
            _1.SocialRegisterComponent,
            _1.SocialAuthComponent,
            _1.ActivateComponent,
            _1.RegisterComponent,
            _1.PasswordComponent,
            _1.PasswordStrengthBarComponent,
            _1.PasswordResetInitComponent,
            _1.PasswordResetFinishComponent,
            _1.SettingsComponent
        ],
        providers: [
            _1.Register,
            _1.Activate,
            _1.Password,
            _1.PasswordResetInit,
            _1.PasswordResetFinish
        ],
        schemas: [core_1.CUSTOM_ELEMENTS_SCHEMA]
    })
], PacketAppAccountModule);
exports.PacketAppAccountModule = PacketAppAccountModule;


/***/ }),

/***/ "./src/main/webapp/app/account/account.route.ts":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var _1 = __webpack_require__("./src/main/webapp/app/account/index.ts");
var ACCOUNT_ROUTES = [
    _1.activateRoute,
    _1.passwordRoute,
    _1.passwordResetFinishRoute,
    _1.passwordResetInitRoute,
    _1.registerRoute,
    _1.socialAuthRoute,
    _1.socialRegisterRoute,
    _1.settingsRoute
];
exports.accountState = [{
        path: '',
        children: ACCOUNT_ROUTES
    }];


/***/ }),

/***/ "./src/main/webapp/app/account/activate/activate.component.html":
/***/ (function(module, exports) {

module.exports = "<div> <div class=\"row\"> <div class=\"col-md-8 offset-md-2\"> <h1 jhiTranslate=\"activate.title\">Activation</h1> <div class=\"alert alert-success\" *ngIf=\"success\"> <span jhiTranslate=\"activate.messages.success\"><strong>Your user account has been activated.</strong> Please </span> <a class=\"alert-link\" (click)=\"login()\" jhiTranslate=\"global.messages.info.authenticated.link\">sign in</a>. </div> <div class=\"alert alert-danger\" *ngIf=\"error\" jhiTranslate=\"activate.messages.error\"> <strong>Your user could not be activated.</strong> Please use the registration form to sign up. </div> </div> </div> </div> ";

/***/ }),

/***/ "./src/main/webapp/app/account/activate/activate.component.ts":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = __webpack_require__(0);
var router_1 = __webpack_require__(7);
var activate_service_1 = __webpack_require__("./src/main/webapp/app/account/activate/activate.service.ts");
var shared_1 = __webpack_require__("./src/main/webapp/app/shared/index.ts");
var ActivateComponent = (function () {
    function ActivateComponent(activate, loginModalService, route) {
        this.activate = activate;
        this.loginModalService = loginModalService;
        this.route = route;
    }
    ActivateComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.route.queryParams.subscribe(function (params) {
            _this.activate.get(params['key']).subscribe(function () {
                _this.error = null;
                _this.success = 'OK';
            }, function () {
                _this.success = null;
                _this.error = 'ERROR';
            });
        });
    };
    ActivateComponent.prototype.login = function () {
        this.modalRef = this.loginModalService.open();
    };
    return ActivateComponent;
}());
ActivateComponent = __decorate([
    core_1.Component({
        selector: 'jhi-activate',
        template: __webpack_require__("./src/main/webapp/app/account/activate/activate.component.html")
    }),
    __metadata("design:paramtypes", [activate_service_1.Activate,
        shared_1.LoginModalService,
        router_1.ActivatedRoute])
], ActivateComponent);
exports.ActivateComponent = ActivateComponent;


/***/ }),

/***/ "./src/main/webapp/app/account/activate/activate.route.ts":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var shared_1 = __webpack_require__("./src/main/webapp/app/shared/index.ts");
var activate_component_1 = __webpack_require__("./src/main/webapp/app/account/activate/activate.component.ts");
exports.activateRoute = {
    path: 'activate',
    component: activate_component_1.ActivateComponent,
    data: {
        authorities: [],
        pageTitle: 'activate.title'
    },
    canActivate: [shared_1.UserRouteAccessService]
};


/***/ }),

/***/ "./src/main/webapp/app/account/activate/activate.service.ts":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = __webpack_require__(0);
var http_1 = __webpack_require__(8);
var Activate = (function () {
    function Activate(http) {
        this.http = http;
    }
    Activate.prototype.get = function (key) {
        var params = new http_1.URLSearchParams();
        params.set('key', key);
        return this.http.get('api/activate', {
            search: params
        }).map(function (res) { return res; });
    };
    return Activate;
}());
Activate = __decorate([
    core_1.Injectable(),
    __metadata("design:paramtypes", [http_1.Http])
], Activate);
exports.Activate = Activate;


/***/ }),

/***/ "./src/main/webapp/app/account/index.ts":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

function __export(m) {
    for (var p in m) if (!exports.hasOwnProperty(p)) exports[p] = m[p];
}
Object.defineProperty(exports, "__esModule", { value: true });
__export(__webpack_require__("./src/main/webapp/app/account/activate/activate.component.ts"));
__export(__webpack_require__("./src/main/webapp/app/account/activate/activate.service.ts"));
__export(__webpack_require__("./src/main/webapp/app/account/activate/activate.route.ts"));
__export(__webpack_require__("./src/main/webapp/app/account/password/password.component.ts"));
__export(__webpack_require__("./src/main/webapp/app/account/password/password-strength-bar.component.ts"));
__export(__webpack_require__("./src/main/webapp/app/account/password/password.service.ts"));
__export(__webpack_require__("./src/main/webapp/app/account/password/password.route.ts"));
__export(__webpack_require__("./src/main/webapp/app/account/password-reset/finish/password-reset-finish.component.ts"));
__export(__webpack_require__("./src/main/webapp/app/account/password-reset/finish/password-reset-finish.service.ts"));
__export(__webpack_require__("./src/main/webapp/app/account/password-reset/finish/password-reset-finish.route.ts"));
__export(__webpack_require__("./src/main/webapp/app/account/password-reset/init/password-reset-init.component.ts"));
__export(__webpack_require__("./src/main/webapp/app/account/password-reset/init/password-reset-init.service.ts"));
__export(__webpack_require__("./src/main/webapp/app/account/password-reset/init/password-reset-init.route.ts"));
__export(__webpack_require__("./src/main/webapp/app/account/register/register.component.ts"));
__export(__webpack_require__("./src/main/webapp/app/account/register/register.service.ts"));
__export(__webpack_require__("./src/main/webapp/app/account/register/register.route.ts"));
__export(__webpack_require__("./src/main/webapp/app/account/settings/settings.component.ts"));
__export(__webpack_require__("./src/main/webapp/app/account/settings/settings.route.ts"));
__export(__webpack_require__("./src/main/webapp/app/account/social/social-auth.component.ts"));
__export(__webpack_require__("./src/main/webapp/app/account/social/social-register.component.ts"));
__export(__webpack_require__("./src/main/webapp/app/account/social/social.route.ts"));
__export(__webpack_require__("./src/main/webapp/app/account/account.route.ts"));


/***/ }),

/***/ "./src/main/webapp/app/account/password-reset/finish/password-reset-finish.component.html":
/***/ (function(module, exports) {

module.exports = "<div> <div class=\"row\"> <div class=\"col-md-4 col-md-offset-4\"> <h1 jhiTranslate=\"reset.finish.title\">Reset password</h1> <div class=\"alert alert-danger\" jhiTranslate=\"reset.finish.messages.keymissing\" *ngIf=\"keyMissing\"> <strong>The password reset key is missing.</strong> </div> <div class=\"alert alert-warning\" *ngIf=\"!success && !keyMissing\"> <p jhiTranslate=\"reset.finish.messages.info\">Choose a new password</p> </div> <div class=\"alert alert-danger\" *ngIf=\"error\"> <p jhiTranslate=\"reset.finish.messages.error\">Your password couldn't be reset. Remember a password request is only valid for 24 hours.</p> </div> <p class=\"alert alert-success\" *ngIf=\"success\"> <span jhiTranslate=\"reset.finish.messages.success\"><strong>Your password has been reset.</strong> Please </span> <a class=\"alert-link\" (click)=\"login()\" jhiTranslate=\"global.messages.info.authenticated.link\">sign in</a>. </p> <div class=\"alert alert-danger\" *ngIf=\"doNotMatch\" jhiTranslate=\"global.messages.error.dontmatch\"> The password and its confirmation do not match! </div> <div *ngIf=\"!keyMissing\"> <form *ngIf=\"!success\" name=\"form\" role=\"form\" (ngSubmit)=\"finishReset()\" #passwordForm=\"ngForm\"> <div class=\"form-group\"> <label class=\"form-control-label\" for=\"password\" jhiTranslate=\"global.form.newpassword\">New password</label> <input type=\"password\" class=\"form-control\" id=\"password\" name=\"password\" #passwordInput=\"ngModel\" placeholder=\"{{'global.form.newpassword.placeholder' | translate}}\" [(ngModel)]=\"resetAccount.password\" minlength=\"4\" maxlength=\"50\" required> <div *ngIf=\"passwordInput.dirty && passwordInput.invalid\"> <small class=\"form-text text-danger\" *ngIf=\"passwordInput.errors.required\" jhiTranslate=\"global.messages.validate.newpassword.required\"> Your password is required. </small> <small class=\"form-text text-danger\" *ngIf=\"passwordInput.errors.minlength\" jhiTranslate=\"global.messages.validate.newpassword.minlength\"> Your password is required to be at least 4 characters. </small> <small class=\"form-text text-danger\" *ngIf=\"passwordInput.errors.maxlength\" jhiTranslate=\"global.messages.validate.newpassword.maxlength\"> Your password cannot be longer than 50 characters. </small> </div> <jhi-password-strength-bar [passwordToCheck]=\"resetAccount.password\"></jhi-password-strength-bar> </div> <div class=\"form-group\"> <label class=\"form-control-label\" for=\"confirmPassword\" jhiTranslate=\"global.form.confirmpassword\">New password confirmation</label> <input type=\"password\" class=\"form-control\" id=\"confirmPassword\" name=\"confirmPassword\" #confirmPasswordInput=\"ngModel\" placeholder=\"{{'global.form.confirmpassword.placeholder' | translate}}\" [(ngModel)]=\"confirmPassword\" minlength=\"4\" maxlength=\"50\" required> <div *ngIf=\"confirmPasswordInput.dirty && confirmPasswordInput.invalid\"> <small class=\"form-text text-danger\" *ngIf=\"confirmPasswordInput.errors.required\" jhiTranslate=\"global.messages.validate.confirmpassword.required\"> Your password confirmation is required. </small> <small class=\"form-text text-danger\" *ngIf=\"confirmPasswordInput.errors.minlength\" jhiTranslate=\"global.messages.validate.confirmpassword.minlength\"> Your password confirmation is required to be at least 4 characters. </small> <small class=\"form-text text-danger\" *ngIf=\"confirmPasswordInput.errors.maxlength\" jhiTranslate=\"global.messages.validate.confirmpassword.maxlength\"> Your password confirmation cannot be longer than 50 characters. </small> </div> </div> <button type=\"submit\" [disabled]=\"passwordForm.form.invalid\" class=\"btn btn-primary\" jhiTranslate=\"reset.finish.form.button\">Reset Password</button> </form> </div> </div> </div> </div> ";

/***/ }),

/***/ "./src/main/webapp/app/account/password-reset/finish/password-reset-finish.component.ts":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = __webpack_require__(0);
var router_1 = __webpack_require__(7);
var password_reset_finish_service_1 = __webpack_require__("./src/main/webapp/app/account/password-reset/finish/password-reset-finish.service.ts");
var shared_1 = __webpack_require__("./src/main/webapp/app/shared/index.ts");
var PasswordResetFinishComponent = (function () {
    function PasswordResetFinishComponent(passwordResetFinish, loginModalService, route, elementRef, renderer) {
        this.passwordResetFinish = passwordResetFinish;
        this.loginModalService = loginModalService;
        this.route = route;
        this.elementRef = elementRef;
        this.renderer = renderer;
    }
    PasswordResetFinishComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.route.queryParams.subscribe(function (params) {
            _this.key = params['key'];
        });
        this.resetAccount = {};
        this.keyMissing = !this.key;
    };
    PasswordResetFinishComponent.prototype.ngAfterViewInit = function () {
        if (this.elementRef.nativeElement.querySelector('#password') != null) {
            this.renderer.invokeElementMethod(this.elementRef.nativeElement.querySelector('#password'), 'focus', []);
        }
    };
    PasswordResetFinishComponent.prototype.finishReset = function () {
        var _this = this;
        this.doNotMatch = null;
        this.error = null;
        if (this.resetAccount.password !== this.confirmPassword) {
            this.doNotMatch = 'ERROR';
        }
        else {
            this.passwordResetFinish.save({ key: this.key, newPassword: this.resetAccount.password }).subscribe(function () {
                _this.success = 'OK';
            }, function () {
                _this.success = null;
                _this.error = 'ERROR';
            });
        }
    };
    PasswordResetFinishComponent.prototype.login = function () {
        this.modalRef = this.loginModalService.open();
    };
    return PasswordResetFinishComponent;
}());
PasswordResetFinishComponent = __decorate([
    core_1.Component({
        selector: 'jhi-password-reset-finish',
        template: __webpack_require__("./src/main/webapp/app/account/password-reset/finish/password-reset-finish.component.html")
    }),
    __metadata("design:paramtypes", [password_reset_finish_service_1.PasswordResetFinish,
        shared_1.LoginModalService,
        router_1.ActivatedRoute,
        core_1.ElementRef, core_1.Renderer])
], PasswordResetFinishComponent);
exports.PasswordResetFinishComponent = PasswordResetFinishComponent;


/***/ }),

/***/ "./src/main/webapp/app/account/password-reset/finish/password-reset-finish.route.ts":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var shared_1 = __webpack_require__("./src/main/webapp/app/shared/index.ts");
var password_reset_finish_component_1 = __webpack_require__("./src/main/webapp/app/account/password-reset/finish/password-reset-finish.component.ts");
exports.passwordResetFinishRoute = {
    path: 'reset/finish',
    component: password_reset_finish_component_1.PasswordResetFinishComponent,
    data: {
        authorities: [],
        pageTitle: 'global.menu.account.password'
    },
    canActivate: [shared_1.UserRouteAccessService]
};


/***/ }),

/***/ "./src/main/webapp/app/account/password-reset/finish/password-reset-finish.service.ts":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = __webpack_require__(0);
var http_1 = __webpack_require__(8);
var PasswordResetFinish = (function () {
    function PasswordResetFinish(http) {
        this.http = http;
    }
    PasswordResetFinish.prototype.save = function (keyAndPassword) {
        return this.http.post('api/account/reset_password/finish', keyAndPassword);
    };
    return PasswordResetFinish;
}());
PasswordResetFinish = __decorate([
    core_1.Injectable(),
    __metadata("design:paramtypes", [http_1.Http])
], PasswordResetFinish);
exports.PasswordResetFinish = PasswordResetFinish;


/***/ }),

/***/ "./src/main/webapp/app/account/password-reset/init/password-reset-init.component.html":
/***/ (function(module, exports) {

module.exports = "<div> <div class=\"row\"> <div class=\"col-md-8 offset-md-2\"> <h1 jhiTranslate=\"reset.request.title\">Reset your password</h1> <div class=\"alert alert-danger\" jhiTranslate=\"reset.request.messages.notfound\" *ngIf=\"errorEmailNotExists\"> <strong>Email address isn't registered!</strong> Please check and try again. </div> <div class=\"alert alert-warning\" *ngIf=\"!success\"> <p jhiTranslate=\"reset.request.messages.info\">Enter the email address you used to register.</p> </div> <div class=\"alert alert-success\" *ngIf=\"success == 'OK'\"> <p jhiTranslate=\"reset.request.messages.success\">Check your emails for details on how to reset your password.</p> </div> <form *ngIf=\"!success\" name=\"form\" role=\"form\" (ngSubmit)=\"requestReset()\" #resetRequestForm=\"ngForm\"> <div class=\"form-group\"> <label class=\"form-control-label\" for=\"email\" jhiTranslate=\"global.form.email\">Email</label> <input type=\"email\" class=\"form-control\" id=\"email\" name=\"email\" placeholder=\"{{'global.form.email.placeholder' | translate}}\" [(ngModel)]=\"resetAccount.email\" minlength=\"5\" maxlength=\"100\" #emailInput=\"ngModel\" required> <div *ngIf=\"emailInput.dirty && emailInput.invalid\"> <small class=\"form-text text-danger\" *ngIf=\"emailInput.errors.required\" jhiTranslate=\"global.messages.validate.email.required\"> Your email is required. </small> <small class=\"form-text text-danger\" *ngIf=\"emailInput.errors.email\" jhiTranslate=\"global.messages.validate.email.invalid\"> Your email is invalid. </small> <small class=\"form-text text-danger\" *ngIf=\"emailInput.errors.minlength\" jhiTranslate=\"global.messages.validate.email.minlength\"> Your email is required to be at least 5 characters. </small> <small class=\"form-text text-danger\" *ngIf=\"emailInput.errors.maxlength\" jhiTranslate=\"global.messages.validate.email.maxlength\"> Your email cannot be longer than 100 characters. </small> </div> </div> <button type=\"submit\" [disabled]=\"resetRequestForm.form.invalid\" class=\"btn btn-primary\" jhiTranslate=\"reset.request.form.button\">Reset</button> </form> </div> </div> </div> ";

/***/ }),

/***/ "./src/main/webapp/app/account/password-reset/init/password-reset-init.component.ts":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = __webpack_require__(0);
var password_reset_init_service_1 = __webpack_require__("./src/main/webapp/app/account/password-reset/init/password-reset-init.service.ts");
var PasswordResetInitComponent = (function () {
    function PasswordResetInitComponent(passwordResetInit, elementRef, renderer) {
        this.passwordResetInit = passwordResetInit;
        this.elementRef = elementRef;
        this.renderer = renderer;
    }
    PasswordResetInitComponent.prototype.ngOnInit = function () {
        this.resetAccount = {};
    };
    PasswordResetInitComponent.prototype.ngAfterViewInit = function () {
        this.renderer.invokeElementMethod(this.elementRef.nativeElement.querySelector('#email'), 'focus', []);
    };
    PasswordResetInitComponent.prototype.requestReset = function () {
        var _this = this;
        this.error = null;
        this.errorEmailNotExists = null;
        this.passwordResetInit.save(this.resetAccount.email).subscribe(function () {
            _this.success = 'OK';
        }, function (response) {
            _this.success = null;
            if (response.status === 400 && response.data === 'email address not registered') {
                _this.errorEmailNotExists = 'ERROR';
            }
            else {
                _this.error = 'ERROR';
            }
        });
    };
    return PasswordResetInitComponent;
}());
PasswordResetInitComponent = __decorate([
    core_1.Component({
        selector: 'jhi-password-reset-init',
        template: __webpack_require__("./src/main/webapp/app/account/password-reset/init/password-reset-init.component.html")
    }),
    __metadata("design:paramtypes", [password_reset_init_service_1.PasswordResetInit,
        core_1.ElementRef,
        core_1.Renderer])
], PasswordResetInitComponent);
exports.PasswordResetInitComponent = PasswordResetInitComponent;


/***/ }),

/***/ "./src/main/webapp/app/account/password-reset/init/password-reset-init.route.ts":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var shared_1 = __webpack_require__("./src/main/webapp/app/shared/index.ts");
var password_reset_init_component_1 = __webpack_require__("./src/main/webapp/app/account/password-reset/init/password-reset-init.component.ts");
exports.passwordResetInitRoute = {
    path: 'reset/request',
    component: password_reset_init_component_1.PasswordResetInitComponent,
    data: {
        authorities: [],
        pageTitle: 'global.menu.account.password'
    },
    canActivate: [shared_1.UserRouteAccessService]
};


/***/ }),

/***/ "./src/main/webapp/app/account/password-reset/init/password-reset-init.service.ts":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = __webpack_require__(0);
var http_1 = __webpack_require__(8);
var PasswordResetInit = (function () {
    function PasswordResetInit(http) {
        this.http = http;
    }
    PasswordResetInit.prototype.save = function (mail) {
        return this.http.post('api/account/reset_password/init', mail);
    };
    return PasswordResetInit;
}());
PasswordResetInit = __decorate([
    core_1.Injectable(),
    __metadata("design:paramtypes", [http_1.Http])
], PasswordResetInit);
exports.PasswordResetInit = PasswordResetInit;


/***/ }),

/***/ "./src/main/webapp/app/account/password/password-strength-bar.component.ts":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = __webpack_require__(0);
var PasswordStrengthBarComponent = (function () {
    function PasswordStrengthBarComponent(renderer, elementRef) {
        this.renderer = renderer;
        this.elementRef = elementRef;
        this.colors = ['#F00', '#F90', '#FF0', '#9F0', '#0F0'];
    }
    PasswordStrengthBarComponent.prototype.measureStrength = function (p) {
        var force = 0;
        var regex = /[$-/:-?{-~!"^_`\[\]]/g; // "
        var lowerLetters = /[a-z]+/.test(p);
        var upperLetters = /[A-Z]+/.test(p);
        var numbers = /[0-9]+/.test(p);
        var symbols = regex.test(p);
        var flags = [lowerLetters, upperLetters, numbers, symbols];
        var passedMatches = flags.filter(function (isMatchedFlag) {
            return isMatchedFlag === true;
        }).length;
        force += 2 * p.length + ((p.length >= 10) ? 1 : 0);
        force += passedMatches * 10;
        // penality (short password)
        force = (p.length <= 6) ? Math.min(force, 10) : force;
        // penality (poor variety of characters)
        force = (passedMatches === 1) ? Math.min(force, 10) : force;
        force = (passedMatches === 2) ? Math.min(force, 20) : force;
        force = (passedMatches === 3) ? Math.min(force, 40) : force;
        return force;
    };
    ;
    PasswordStrengthBarComponent.prototype.getColor = function (s) {
        var idx = 0;
        if (s <= 10) {
            idx = 0;
        }
        else if (s <= 20) {
            idx = 1;
        }
        else if (s <= 30) {
            idx = 2;
        }
        else if (s <= 40) {
            idx = 3;
        }
        else {
            idx = 4;
        }
        return { idx: idx + 1, col: this.colors[idx] };
    };
    ;
    Object.defineProperty(PasswordStrengthBarComponent.prototype, "passwordToCheck", {
        set: function (password) {
            if (password) {
                var c = this.getColor(this.measureStrength(password));
                var element = this.elementRef.nativeElement;
                if (element.className) {
                    this.renderer.setElementClass(element, element.className, false);
                }
                var lis = element.getElementsByTagName('li');
                for (var i = 0; i < lis.length; i++) {
                    if (i < c.idx) {
                        this.renderer.setElementStyle(lis[i], 'backgroundColor', c.col);
                    }
                    else {
                        this.renderer.setElementStyle(lis[i], 'backgroundColor', '#DDD');
                    }
                }
            }
        },
        enumerable: true,
        configurable: true
    });
    return PasswordStrengthBarComponent;
}());
__decorate([
    core_1.Input(),
    __metadata("design:type", String),
    __metadata("design:paramtypes", [String])
], PasswordStrengthBarComponent.prototype, "passwordToCheck", null);
PasswordStrengthBarComponent = __decorate([
    core_1.Component({
        selector: 'jhi-password-strength-bar',
        template: "\n        <div id=\"strength\">\n            <small jhiTranslate=\"global.messages.validate.newpassword.strength\">Password strength:</small>\n            <ul id=\"strengthBar\">\n                <li class=\"point\"></li>\n                <li class=\"point\"></li>\n                <li class=\"point\"></li>\n                <li class=\"point\"></li>\n                <li class=\"point\"></li>\n            </ul>\n        </div>",
        styles: [
            __webpack_require__("./src/main/webapp/app/account/password/password-strength-bar.scss")
        ]
    }),
    __metadata("design:paramtypes", [core_1.Renderer, core_1.ElementRef])
], PasswordStrengthBarComponent);
exports.PasswordStrengthBarComponent = PasswordStrengthBarComponent;


/***/ }),

/***/ "./src/main/webapp/app/account/password/password-strength-bar.scss":
/***/ (function(module, exports, __webpack_require__) {


        var result = __webpack_require__("./node_modules/css-loader/index.js!./node_modules/sass-loader/lib/loader.js!./src/main/webapp/app/account/password/password-strength-bar.scss");

        if (typeof result === "string") {
            module.exports = result;
        } else {
            module.exports = result.toString();
        }
    

/***/ }),

/***/ "./src/main/webapp/app/account/password/password.component.html":
/***/ (function(module, exports) {

module.exports = "<div> <div class=\"row\"> <div class=\"col-md-8 offset-md-2\"> <h2 jhiTranslate=\"password.title\" translateValues=\"{username: '{{account.login}}'}\" *ngIf=\"account\">Password for [<b>{{account.login}}</b>]</h2> <div class=\"alert alert-success\" *ngIf=\"success\" jhiTranslate=\"password.messages.success\"> <strong>Password changed!</strong> </div> <div class=\"alert alert-danger\" *ngIf=\"error\" jhiTranslate=\"password.messages.error\"> <strong>An error has occurred!</strong> The password could not be changed. </div> <div class=\"alert alert-danger\" *ngIf=\"doNotMatch\" jhiTranslate=\"global.messages.error.dontmatch\"> The password and its confirmation do not match! </div> <form name=\"form\" role=\"form\" (ngSubmit)=\"changePassword()\" #passwordForm=\"ngForm\"> <div class=\"form-group\"> <label class=\"form-control-label\" for=\"password\" jhiTranslate=\"global.form.newpassword\">New password</label> <input type=\"password\" class=\"form-control\" id=\"password\" name=\"password\" #passwordInput=\"ngModel\" placeholder=\"{{'global.form.newpassword.placeholder' | translate}}\" [(ngModel)]=\"password\" minlength=\"4\" maxlength=\"50\" required> <div *ngIf=\"passwordInput.dirty && passwordInput.invalid\"> <small class=\"form-text text-danger\" *ngIf=\"passwordInput.errors.required\" jhiTranslate=\"global.messages.validate.newpassword.required\"> Your password is required. </small> <small class=\"form-text text-danger\" *ngIf=\"passwordInput.errors.minlength\" jhiTranslate=\"global.messages.validate.newpassword.minlength\"> Your password is required to be at least 4 characters. </small> <small class=\"form-text text-danger\" *ngIf=\"passwordInput.errors.maxlength\" jhiTranslate=\"global.messages.validate.newpassword.maxlength\"> Your password cannot be longer than 50 characters. </small> </div> <jhi-password-strength-bar [passwordToCheck]=\"password\"></jhi-password-strength-bar> </div> <div class=\"form-group\"> <label class=\"form-control-label\" for=\"confirmPassword\" jhiTranslate=\"global.form.confirmpassword\">New password confirmation</label> <input type=\"password\" class=\"form-control\" id=\"confirmPassword\" name=\"confirmPassword\" #confirmPasswordInput=\"ngModel\" placeholder=\"{{'global.form.confirmpassword.placeholder' | translate}}\" [(ngModel)]=\"confirmPassword\" minlength=\"4\" maxlength=\"50\" required> <div *ngIf=\"confirmPasswordInput.dirty && confirmPasswordInput.invalid\"> <small class=\"form-text text-danger\" *ngIf=\"confirmPasswordInput.errors.required\" jhiTranslate=\"global.messages.validate.confirmpassword.required\"> Your confirmation password is required. </small> <small class=\"form-text text-danger\" *ngIf=\"confirmPasswordInput.errors.minlength\" jhiTranslate=\"global.messages.validate.confirmpassword.minlength\"> Your confirmation password is required to be at least 4 characters. </small> <small class=\"form-text text-danger\" *ngIf=\"confirmPasswordInput.errors.maxlength\" jhiTranslate=\"global.messages.validate.confirmpassword.maxlength\"> Your confirmation password cannot be longer than 50 characters. </small> </div> </div> <button type=\"submit\" [disabled]=\"passwordForm.form.invalid\" class=\"btn btn-primary\" jhiTranslate=\"password.form.button\">Save</button> </form> </div> </div> </div> ";

/***/ }),

/***/ "./src/main/webapp/app/account/password/password.component.ts":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = __webpack_require__(0);
var shared_1 = __webpack_require__("./src/main/webapp/app/shared/index.ts");
var password_service_1 = __webpack_require__("./src/main/webapp/app/account/password/password.service.ts");
var PasswordComponent = (function () {
    function PasswordComponent(passwordService, principal) {
        this.passwordService = passwordService;
        this.principal = principal;
    }
    PasswordComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.principal.identity().then(function (account) {
            _this.account = account;
        });
    };
    PasswordComponent.prototype.changePassword = function () {
        var _this = this;
        if (this.password !== this.confirmPassword) {
            this.error = null;
            this.success = null;
            this.doNotMatch = 'ERROR';
        }
        else {
            this.doNotMatch = null;
            this.passwordService.save(this.password).subscribe(function () {
                _this.error = null;
                _this.success = 'OK';
            }, function () {
                _this.success = null;
                _this.error = 'ERROR';
            });
        }
    };
    return PasswordComponent;
}());
PasswordComponent = __decorate([
    core_1.Component({
        selector: 'jhi-password',
        template: __webpack_require__("./src/main/webapp/app/account/password/password.component.html")
    }),
    __metadata("design:paramtypes", [password_service_1.Password,
        shared_1.Principal])
], PasswordComponent);
exports.PasswordComponent = PasswordComponent;


/***/ }),

/***/ "./src/main/webapp/app/account/password/password.route.ts":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var shared_1 = __webpack_require__("./src/main/webapp/app/shared/index.ts");
var password_component_1 = __webpack_require__("./src/main/webapp/app/account/password/password.component.ts");
exports.passwordRoute = {
    path: 'password',
    component: password_component_1.PasswordComponent,
    data: {
        authorities: ['ROLE_USER'],
        pageTitle: 'global.menu.account.password'
    },
    canActivate: [shared_1.UserRouteAccessService]
};


/***/ }),

/***/ "./src/main/webapp/app/account/password/password.service.ts":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = __webpack_require__(0);
var http_1 = __webpack_require__(8);
var Password = (function () {
    function Password(http) {
        this.http = http;
    }
    Password.prototype.save = function (newPassword) {
        return this.http.post('api/account/change_password', newPassword);
    };
    return Password;
}());
Password = __decorate([
    core_1.Injectable(),
    __metadata("design:paramtypes", [http_1.Http])
], Password);
exports.Password = Password;


/***/ }),

/***/ "./src/main/webapp/app/account/register/register.component.html":
/***/ (function(module, exports) {

module.exports = "<div> <div class=\"row\"> <div class=\"col-md-8 offset-md-2\"> <h1 jhiTranslate=\"register.title\">Registration</h1> <div class=\"alert alert-success\" *ngIf=\"success\" jhiTranslate=\"register.messages.success\"> <strong>Registration saved!</strong> Please check your email for confirmation. </div> <div class=\"alert alert-danger\" *ngIf=\"error\" jhiTranslate=\"register.messages.error.fail\"> <strong>Registration failed!</strong> Please try again later. </div> <div class=\"alert alert-danger\" *ngIf=\"errorUserExists\" jhiTranslate=\"register.messages.error.userexists\"> <strong>Login name already registered!</strong> Please choose another one. </div> <div class=\"alert alert-danger\" *ngIf=\"errorEmailExists\" jhiTranslate=\"register.messages.error.emailexists\"> <strong>Email is already in use!</strong> Please choose another one. </div> <div class=\"alert alert-danger\" *ngIf=\"doNotMatch\" jhiTranslate=\"global.messages.error.dontmatch\"> The password and its confirmation do not match! </div> </div> <div class=\"col-md-4 offset-md-2\"> <form name=\"form\" role=\"form\" (ngSubmit)=\"register()\" #registerForm=\"ngForm\" *ngIf=\"!success\"> <div class=\"form-group\"> <label class=\"form-control-label\" for=\"login\" jhiTranslate=\"global.form.username\">Username</label> <input type=\"text\" class=\"form-control\" [(ngModel)]=\"registerAccount.login\" id=\"login\" name=\"login\" #login=\"ngModel\" placeholder=\"{{'global.form.username.placeholder' | translate}}\" required minlength=\"1\" maxlength=\"50\" pattern=\"^[_'.@A-Za-z0-9-]*$\"> <div *ngIf=\"login.dirty && login.invalid\"> <small class=\"form-text text-danger\" *ngIf=\"login.errors.required\" jhiTranslate=\"register.messages.validate.login.required\"> Your username is required. </small> <small class=\"form-text text-danger\" *ngIf=\"login.errors.minlength\" jhiTranslate=\"register.messages.validate.login.minlength\"> Your username is required to be at least 1 character. </small> <small class=\"form-text text-danger\" *ngIf=\"login.errors.maxlength\" jhiTranslate=\"register.messages.validate.login.maxlength\"> Your username cannot be longer than 50 characters. </small> <small class=\"form-text text-danger\" *ngIf=\"login.errors.pattern\" jhiTranslate=\"register.messages.validate.login.pattern\"> Your username can only contain lower-case letters and digits. </small> </div> </div> <div class=\"form-group\"> <label class=\"form-control-label\" for=\"email\" jhiTranslate=\"global.form.email\">Email</label> <input type=\"email\" class=\"form-control\" id=\"email\" name=\"email\" #email=\"ngModel\" placeholder=\"{{'global.form.email.placeholder' | translate}}\" [(ngModel)]=\"registerAccount.email\" minlength=\"5\" maxlength=\"100\" required> <div *ngIf=\"email.dirty && email.invalid\"> <small class=\"form-text text-danger\" *ngIf=\"email.errors.required\" jhiTranslate=\"global.messages.validate.email.required\"> Your email is required. </small> <small class=\"form-text text-danger\" *ngIf=\"email.errors.invalid\" jhiTranslate=\"global.messages.validate.email.invalid\"> Your email is invalid. </small> <small class=\"form-text text-danger\" *ngIf=\"email.errors.minlength\" jhiTranslate=\"global.messages.validate.email.minlength\"> Your email is required to be at least 5 characters. </small> <small class=\"form-text text-danger\" *ngIf=\"email.errors.maxlength\" jhiTranslate=\"global.messages.validate.email.maxlength\"> Your email cannot be longer than 100 characters. </small> </div> </div> <div class=\"form-group\"> <label class=\"form-control-label\" for=\"password\" jhiTranslate=\"global.form.newpassword\">New password</label> <input type=\"password\" class=\"form-control\" id=\"password\" name=\"password\" #password=\"ngModel\" placeholder=\"{{'global.form.newpassword.placeholder' | translate}}\" [(ngModel)]=\"registerAccount.password\" minlength=\"4\" maxlength=\"50\" required> <div *ngIf=\"password.dirty && password.invalid\"> <small class=\"form-text text-danger\" *ngIf=\"password.errors.required\" jhiTranslate=\"global.messages.validate.newpassword.required\"> Your password is required. </small> <small class=\"form-text text-danger\" *ngIf=\"password.errors.minlength\" jhiTranslate=\"global.messages.validate.newpassword.minlength\"> Your password is required to be at least 4 characters. </small> <small class=\"form-text text-danger\" *ngIf=\"password.errors.maxlength\" jhiTranslate=\"global.messages.validate.newpassword.maxlength\"> Your password cannot be longer than 50 characters. </small> </div> <jhi-password-strength-bar [passwordToCheck]=\"registerAccount.password\"></jhi-password-strength-bar> </div> <div class=\"form-group\"> <label class=\"form-control-label\" for=\"confirmPassword\" jhiTranslate=\"global.form.confirmpassword\">New password confirmation</label> <input type=\"password\" class=\"form-control\" id=\"confirmPassword\" name=\"confirmPassword\" #confirmPasswordInput=\"ngModel\" placeholder=\"{{'global.form.confirmpassword.placeholder' | translate}}\" [(ngModel)]=\"confirmPassword\" minlength=\"4\" maxlength=\"50\" required> <div *ngIf=\"confirmPasswordInput.dirty && confirmPasswordInput.invalid\"> <small class=\"form-text text-danger\" *ngIf=\"confirmPasswordInput.errors.required\" jhiTranslate=\"global.messages.validate.confirmpassword.required\"> Your confirmation password is required. </small> <small class=\"form-text text-danger\" *ngIf=\"confirmPasswordInput.errors.minlength\" jhiTranslate=\"global.messages.validate.confirmpassword.minlength\"> Your confirmation password is required to be at least 4 characters. </small> <small class=\"form-text text-danger\" *ngIf=\"confirmPasswordInput.errors.maxlength\" jhiTranslate=\"global.messages.validate.confirmpassword.maxlength\"> Your confirmation password cannot be longer than 50 characters. </small> </div> </div> <button type=\"submit\" [disabled]=\"registerForm.form.invalid\" class=\"btn btn-primary\" jhiTranslate=\"register.form.button\">Register</button> </form> <p></p> <div class=\"alert alert-warning\"> <span jhiTranslate=\"global.messages.info.authenticated.prefix\">If you want to </span> <a class=\"alert-link\" (click)=\"openLogin()\" jhiTranslate=\"global.messages.info.authenticated.link\">sign in</a><span jhiTranslate=\"global.messages.info.authenticated.suffix\">, you can try the default accounts:<br/>- Administrator (login=\"admin\" and password=\"admin\") <br/>- User (login=\"user\" and password=\"user\").</span> </div> </div> <div class=\"col-md-4\"> <br/> <jhi-social provider=\"google\"></jhi-social> <jhi-social provider=\"facebook\"></jhi-social> <jhi-social provider=\"twitter\"></jhi-social> </div> </div> </div> ";

/***/ }),

/***/ "./src/main/webapp/app/account/register/register.component.ts":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = __webpack_require__(0);
var ng_jhipster_1 = __webpack_require__(5);
var register_service_1 = __webpack_require__("./src/main/webapp/app/account/register/register.service.ts");
var shared_1 = __webpack_require__("./src/main/webapp/app/shared/index.ts");
var RegisterComponent = (function () {
    function RegisterComponent(languageService, loginModalService, registerService, elementRef, renderer) {
        this.languageService = languageService;
        this.loginModalService = loginModalService;
        this.registerService = registerService;
        this.elementRef = elementRef;
        this.renderer = renderer;
    }
    RegisterComponent.prototype.ngOnInit = function () {
        this.success = false;
        this.registerAccount = {};
    };
    RegisterComponent.prototype.ngAfterViewInit = function () {
        this.renderer.invokeElementMethod(this.elementRef.nativeElement.querySelector('#login'), 'focus', []);
    };
    RegisterComponent.prototype.register = function () {
        var _this = this;
        if (this.registerAccount.password !== this.confirmPassword) {
            this.doNotMatch = 'ERROR';
        }
        else {
            this.doNotMatch = null;
            this.error = null;
            this.errorUserExists = null;
            this.errorEmailExists = null;
            this.languageService.getCurrent().then(function (key) {
                _this.registerAccount.langKey = key;
                _this.registerService.save(_this.registerAccount).subscribe(function () {
                    _this.success = true;
                }, function (response) { return _this.processError(response); });
            });
        }
    };
    RegisterComponent.prototype.openLogin = function () {
        this.modalRef = this.loginModalService.open();
    };
    RegisterComponent.prototype.processError = function (response) {
        this.success = null;
        if (response.status === 400 && response._body === 'login already in use') {
            this.errorUserExists = 'ERROR';
        }
        else if (response.status === 400 && response._body === 'email address already in use') {
            this.errorEmailExists = 'ERROR';
        }
        else {
            this.error = 'ERROR';
        }
    };
    return RegisterComponent;
}());
RegisterComponent = __decorate([
    core_1.Component({
        selector: 'jhi-register',
        template: __webpack_require__("./src/main/webapp/app/account/register/register.component.html")
    }),
    __metadata("design:paramtypes", [ng_jhipster_1.JhiLanguageService,
        shared_1.LoginModalService,
        register_service_1.Register,
        core_1.ElementRef,
        core_1.Renderer])
], RegisterComponent);
exports.RegisterComponent = RegisterComponent;


/***/ }),

/***/ "./src/main/webapp/app/account/register/register.route.ts":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var shared_1 = __webpack_require__("./src/main/webapp/app/shared/index.ts");
var register_component_1 = __webpack_require__("./src/main/webapp/app/account/register/register.component.ts");
exports.registerRoute = {
    path: 'register',
    component: register_component_1.RegisterComponent,
    data: {
        authorities: [],
        pageTitle: 'register.title'
    },
    canActivate: [shared_1.UserRouteAccessService]
};


/***/ }),

/***/ "./src/main/webapp/app/account/register/register.service.ts":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = __webpack_require__(0);
var http_1 = __webpack_require__(8);
var Register = (function () {
    function Register(http) {
        this.http = http;
    }
    Register.prototype.save = function (account) {
        return this.http.post('api/register', account);
    };
    return Register;
}());
Register = __decorate([
    core_1.Injectable(),
    __metadata("design:paramtypes", [http_1.Http])
], Register);
exports.Register = Register;


/***/ }),

/***/ "./src/main/webapp/app/account/settings/settings.component.html":
/***/ (function(module, exports) {

module.exports = "<div> <div class=\"row\"> <div class=\"col-md-8 offset-md-2\"> <h2 jhiTranslate=\"settings.title\" translateValues=\"{username: '{{settingsAccount.login}}'}\" *ngIf=\"settingsAccount\">User settings for [<b>{{settingsAccount.login}}</b>]</h2> <div class=\"alert alert-success\" *ngIf=\"success\" jhiTranslate=\"settings.messages.success\"> <strong>Settings saved!</strong> </div> <jhi-alert-error></jhi-alert-error> <form name=\"form\" role=\"form\" (ngSubmit)=\"save()\" #settingsForm=\"ngForm\" *ngIf=\"settingsAccount\" novalidate> <div class=\"form-group\"> <label class=\"form-control-label\" for=\"firstName\" jhiTranslate=\"settings.form.firstname\">First Name</label> <input type=\"text\" class=\"form-control\" id=\"firstName\" name=\"firstName\" placeholder=\"{{'settings.form.firstname.placeholder' | translate}}\" [(ngModel)]=\"settingsAccount.firstName\" minlength=\"1\" maxlength=\"50\" #firstNameInput=\"ngModel\" required> <div *ngIf=\"firstNameInput.dirty && firstNameInput.invalid\"> <small class=\"form-text text-danger\" *ngIf=\"firstNameInput.errors.required\" jhiTranslate=\"settings.messages.validate.firstname.required\"> Your first name is required. </small> <small class=\"form-text text-danger\" *ngIf=\"firstNameInput.errors.minlength\" jhiTranslate=\"settings.messages.validate.firstname.minlength\"> Your first name is required to be at least 1 character. </small> <small class=\"form-text text-danger\" *ngIf=\"firstNameInput.errors.maxlength\" jhiTranslate=\"settings.messages.validate.firstname.maxlength\"> Your first name cannot be longer than 50 characters. </small> </div> </div> <div class=\"form-group\"> <label class=\"form-control-label\" for=\"lastName\" jhiTranslate=\"settings.form.lastname\">Last Name</label> <input type=\"text\" class=\"form-control\" id=\"lastName\" name=\"lastName\" placeholder=\"{{'settings.form.lastname.placeholder' | translate}}\" [(ngModel)]=\"settingsAccount.lastName\" minlength=\"1\" maxlength=\"50\" #lastNameInput=\"ngModel\" required> <div *ngIf=\"lastNameInput.dirty && lastNameInput.invalid\"> <small class=\"form-text text-danger\" *ngIf=\"lastNameInput.errors.required\" jhiTranslate=\"settings.messages.validate.lastname.required\"> Your last name is required. </small> <small class=\"form-text text-danger\" *ngIf=\"lastNameInput.errors.minlength\" jhiTranslate=\"settings.messages.validate.lastname.minlength\"> Your last name is required to be at least 1 character. </small> <small class=\"form-text text-danger\" *ngIf=\"lastNameInput.errors.maxlength\" jhiTranslate=\"settings.messages.validate.lastname.maxlength\"> Your last name cannot be longer than 50 characters. </small> </div> </div> <div class=\"form-group\"> <label class=\"form-control-label\" for=\"email\" jhiTranslate=\"global.form.email\">Email</label> <input type=\"email\" class=\"form-control\" id=\"email\" name=\"email\" placeholder=\"{{'global.form.email.placeholder' | translate}}\" [(ngModel)]=\"settingsAccount.email\" minlength=\"5\" maxlength=\"100\" #emailInput=\"ngModel\" required> <div *ngIf=\"emailInput.dirty && emailInput.invalid\"> <small class=\"form-text text-danger\" *ngIf=\"emailInput.errors.required\" jhiTranslate=\"global.messages.validate.email.required\"> Your email is required. </small> <small class=\"form-text text-danger\" *ngIf=\"emailInput.errors.email\" jhiTranslate=\"global.messages.validate.email.invalid\"> Your email is invalid. </small> <small class=\"form-text text-danger\" *ngIf=\"emailInput.errors.minlength\" jhiTranslate=\"global.messages.validate.email.minlength\"> Your email is required to be at least 5 characters. </small> <small class=\"form-text text-danger\" *ngIf=\"emailInput.errors.maxlength\" jhiTranslate=\"global.messages.validate.email.maxlength\"> Your email cannot be longer than 100 characters. </small> </div> </div> <div class=\"form-group\" *ngIf=\"languages && languages.length > 0\"> <label for=\"langKey\" jhiTranslate=\"settings.form.language\">Language</label> <select class=\"form-control\" id=\"langKey\" name=\"langKey\" [(ngModel)]=\"settingsAccount.langKey\"> <option *ngFor=\"let language of languages\" [value]=\"language\">{{language | findLanguageFromKey}}</option> </select> </div> <button type=\"submit\" [disabled]=\"settingsForm.form.invalid\" class=\"btn btn-primary\" jhiTranslate=\"settings.form.button\">Save</button> </form> </div> </div> </div> ";

/***/ }),

/***/ "./src/main/webapp/app/account/settings/settings.component.ts":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = __webpack_require__(0);
var ng_jhipster_1 = __webpack_require__(5);
var shared_1 = __webpack_require__("./src/main/webapp/app/shared/index.ts");
var SettingsComponent = (function () {
    function SettingsComponent(account, principal, languageService, languageHelper) {
        this.account = account;
        this.principal = principal;
        this.languageService = languageService;
        this.languageHelper = languageHelper;
    }
    SettingsComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.principal.identity().then(function (account) {
            _this.settingsAccount = _this.copyAccount(account);
        });
        this.languageHelper.getAll().then(function (languages) {
            _this.languages = languages;
        });
    };
    SettingsComponent.prototype.save = function () {
        var _this = this;
        this.account.save(this.settingsAccount).subscribe(function () {
            _this.error = null;
            _this.success = 'OK';
            _this.principal.identity(true).then(function (account) {
                _this.settingsAccount = _this.copyAccount(account);
            });
            _this.languageService.getCurrent().then(function (current) {
                if (_this.settingsAccount.langKey !== current) {
                    _this.languageService.changeLanguage(_this.settingsAccount.langKey);
                }
            });
        }, function () {
            _this.success = null;
            _this.error = 'ERROR';
        });
    };
    SettingsComponent.prototype.copyAccount = function (account) {
        return {
            activated: account.activated,
            email: account.email,
            firstName: account.firstName,
            langKey: account.langKey,
            lastName: account.lastName,
            login: account.login,
            imageUrl: account.imageUrl
        };
    };
    return SettingsComponent;
}());
SettingsComponent = __decorate([
    core_1.Component({
        selector: 'jhi-settings',
        template: __webpack_require__("./src/main/webapp/app/account/settings/settings.component.html")
    }),
    __metadata("design:paramtypes", [shared_1.AccountService,
        shared_1.Principal,
        ng_jhipster_1.JhiLanguageService,
        shared_1.JhiLanguageHelper])
], SettingsComponent);
exports.SettingsComponent = SettingsComponent;


/***/ }),

/***/ "./src/main/webapp/app/account/settings/settings.route.ts":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var shared_1 = __webpack_require__("./src/main/webapp/app/shared/index.ts");
var settings_component_1 = __webpack_require__("./src/main/webapp/app/account/settings/settings.component.ts");
exports.settingsRoute = {
    path: 'settings',
    component: settings_component_1.SettingsComponent,
    data: {
        authorities: ['ROLE_USER'],
        pageTitle: 'global.menu.account.settings'
    },
    canActivate: [shared_1.UserRouteAccessService]
};


/***/ }),

/***/ "./src/main/webapp/app/account/social/social-auth.component.ts":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = __webpack_require__(0);
var router_1 = __webpack_require__(7);
var shared_1 = __webpack_require__("./src/main/webapp/app/shared/index.ts");
var core_2 = __webpack_require__(18);
var SocialAuthComponent = (function () {
    function SocialAuthComponent(loginService, cookieService, router) {
        this.loginService = loginService;
        this.cookieService = cookieService;
        this.router = router;
    }
    SocialAuthComponent.prototype.ngOnInit = function () {
        var _this = this;
        var token = this.cookieService.get('social-authentication');
        if (token.length) {
            this.loginService.loginWithToken(token, false).then(function () {
                _this.cookieService.remove('social-authentication');
            }, function () {
                _this.router.navigate(['social-register'], { queryParams: { 'success': 'false' } });
            });
        }
    };
    return SocialAuthComponent;
}());
SocialAuthComponent = __decorate([
    core_1.Component({
        selector: 'jhi-auth',
        template: ''
    }),
    __metadata("design:paramtypes", [shared_1.LoginService,
        core_2.CookieService,
        router_1.Router])
], SocialAuthComponent);
exports.SocialAuthComponent = SocialAuthComponent;


/***/ }),

/***/ "./src/main/webapp/app/account/social/social-register.component.html":
/***/ (function(module, exports) {

module.exports = "<div> <div class=\"row\"> <div class=\"col-md-8 offset-md-2\"> <h1 *ngIf=\"success\" jhiTranslate=\"social.register.title\" translateValues=\"{ label: '{{providerLabel}}' }\">Registration with</h1> <h1 *ngIf=\"error\" jhiTranslate=\"social.register.errorTitle\">Registration</h1> <div class=\"alert alert-success\" *ngIf=\"success\" jhiTranslate=\"social.register.messages.success\"> <strong>Registration saved!</strong> Please check your email for confirmation. </div> <div class=\"alert alert-danger\" *ngIf=\"error\" jhiTranslate=\"social.register.messages.error.fail\"> <strong>Registration failed!</strong> Please try again later. </div> <jhi-social *ngIf=\"success\" provider=\"{{ provider }}\"></jhi-social> <br/> <div class=\"alert alert-warning\"> <span jhiTranslate=\"global.messages.info.authenticated.prefix\">If you want to </span> <a class=\"alert-link\" (click)=\"login()\" jhiTranslate=\"global.messages.info.authenticated.link\">sign in</a><span jhiTranslate=\"global.messages.info.authenticated.suffix\">, you can try the default accounts:<br/>- Administrator (login=\"admin\" and password=\"admin\") <br/>- User (login=\"user\" and password=\"user\").</span> </div> </div> </div> </div> ";

/***/ }),

/***/ "./src/main/webapp/app/account/social/social-register.component.ts":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = __webpack_require__(0);
var router_1 = __webpack_require__(7);
var shared_1 = __webpack_require__("./src/main/webapp/app/shared/index.ts");
var SocialRegisterComponent = (function () {
    function SocialRegisterComponent(route, loginModalService) {
        this.route = route;
        this.loginModalService = loginModalService;
    }
    SocialRegisterComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.route.queryParams.subscribe(function (queryParams) {
            _this.success = queryParams['success'];
        });
        this.route.params.subscribe(function (params) {
            _this.provider = params['provider?{success:boolean}'];
        });
        this.error = !this.success;
        this.providerLabel = this.provider.charAt(0).toUpperCase() + this.provider.slice(1);
    };
    SocialRegisterComponent.prototype.login = function () {
        this.modalRef = this.loginModalService.open();
    };
    return SocialRegisterComponent;
}());
SocialRegisterComponent = __decorate([
    core_1.Component({
        selector: 'jhi-register',
        template: __webpack_require__("./src/main/webapp/app/account/social/social-register.component.html")
    }),
    __metadata("design:paramtypes", [router_1.ActivatedRoute,
        shared_1.LoginModalService])
], SocialRegisterComponent);
exports.SocialRegisterComponent = SocialRegisterComponent;


/***/ }),

/***/ "./src/main/webapp/app/account/social/social.route.ts":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var shared_1 = __webpack_require__("./src/main/webapp/app/shared/index.ts");
var social_register_component_1 = __webpack_require__("./src/main/webapp/app/account/social/social-register.component.ts");
var social_auth_component_1 = __webpack_require__("./src/main/webapp/app/account/social/social-auth.component.ts");
exports.socialRegisterRoute = {
    path: 'social-register/:provider?{success:boolean}',
    component: social_register_component_1.SocialRegisterComponent,
    data: {
        authorities: [],
        pageTitle: 'social.register.title'
    },
    canActivate: [shared_1.UserRouteAccessService]
};
exports.socialAuthRoute = {
    path: 'social-auth',
    component: social_auth_component_1.SocialAuthComponent,
    data: {
        authorities: [],
        pageTitle: 'social.register.title'
    },
    canActivate: [shared_1.UserRouteAccessService]
};


/***/ }),

/***/ "./src/main/webapp/app/admin/admin.module.ts":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = __webpack_require__(0);
var router_1 = __webpack_require__(7);
var tracker_service_1 = __webpack_require__("./src/main/webapp/app/shared/tracker/tracker.service.ts");
var shared_1 = __webpack_require__("./src/main/webapp/app/shared/index.ts");
/* jhipster-needle-add-admin-module-import - JHipster will add admin modules imports here */
var _1 = __webpack_require__("./src/main/webapp/app/admin/index.ts");
var PacketAppAdminModule = (function () {
    function PacketAppAdminModule() {
    }
    return PacketAppAdminModule;
}());
PacketAppAdminModule = __decorate([
    core_1.NgModule({
        imports: [
            shared_1.PacketAppSharedModule,
            router_1.RouterModule.forRoot(_1.adminState, { useHash: true }),
        ],
        declarations: [
            _1.AuditsComponent,
            _1.UserMgmtComponent,
            _1.UserDialogComponent,
            _1.UserDeleteDialogComponent,
            _1.UserMgmtDetailComponent,
            _1.UserMgmtDialogComponent,
            _1.UserMgmtDeleteDialogComponent,
            _1.LogsComponent,
            _1.JhiConfigurationComponent,
            _1.JhiHealthCheckComponent,
            _1.JhiHealthModalComponent,
            _1.JhiDocsComponent,
            _1.JhiTrackerComponent,
            _1.JhiMetricsMonitoringComponent,
            _1.JhiMetricsMonitoringModalComponent
        ],
        entryComponents: [
            _1.UserMgmtDialogComponent,
            _1.UserMgmtDeleteDialogComponent,
            _1.JhiHealthModalComponent,
            _1.JhiMetricsMonitoringModalComponent,
        ],
        providers: [
            _1.AuditsService,
            _1.JhiConfigurationService,
            _1.JhiHealthService,
            _1.JhiMetricsService,
            _1.LogsService,
            tracker_service_1.JhiTrackerService,
            _1.UserResolvePagingParams,
            _1.UserResolve,
            _1.UserModalService
        ],
        schemas: [core_1.CUSTOM_ELEMENTS_SCHEMA]
    })
], PacketAppAdminModule);
exports.PacketAppAdminModule = PacketAppAdminModule;


/***/ }),

/***/ "./src/main/webapp/app/admin/admin.route.ts":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var _1 = __webpack_require__("./src/main/webapp/app/admin/index.ts");
var shared_1 = __webpack_require__("./src/main/webapp/app/shared/index.ts");
var ADMIN_ROUTES = [
    _1.auditsRoute,
    _1.configurationRoute,
    _1.docsRoute,
    _1.healthRoute,
    _1.logsRoute,
    _1.trackerRoute
].concat(_1.userMgmtRoute, [
    _1.metricsRoute
]);
exports.adminState = [{
        path: '',
        data: {
            authorities: ['ROLE_ADMIN']
        },
        canActivate: [shared_1.UserRouteAccessService],
        children: ADMIN_ROUTES
    }].concat(_1.userDialogRoute);


/***/ }),

/***/ "./src/main/webapp/app/admin/audits/audit-data.model.ts":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var AuditData = (function () {
    function AuditData(remoteAddress, sessionId) {
        this.remoteAddress = remoteAddress;
        this.sessionId = sessionId;
    }
    return AuditData;
}());
exports.AuditData = AuditData;


/***/ }),

/***/ "./src/main/webapp/app/admin/audits/audit.model.ts":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var Audit = (function () {
    function Audit(data, principal, timestamp, type) {
        this.data = data;
        this.principal = principal;
        this.timestamp = timestamp;
        this.type = type;
    }
    return Audit;
}());
exports.Audit = Audit;


/***/ }),

/***/ "./src/main/webapp/app/admin/audits/audits.component.html":
/***/ (function(module, exports) {

module.exports = "<div *ngIf=\"audits\"> <h2 jhiTranslate=\"audits.title\">Audits</h2> <div class=\"row\"> <div class=\"col-md-5\"> <h4 jhiTranslate=\"audits.filter.title\">Filter by date</h4> <p class=\"d-flex\"> <span jhiTranslate=\"audits.filter.from\" class=\"input-group-addon\">from</span> <input type=\"date\" class=\"form-control\" name=\"start\" [(ngModel)]=\"fromDate\" (ngModelChange)=\"onChangeDate($event)\" required/> <span jhiTranslate=\"audits.filter.to\" class=\"input-group-addon\">to</span> <input type=\"date\" class=\"form-control\" name=\"end\" [(ngModel)]=\"toDate\" (ngModelChange)=\"onChangeDate($event)\" required/> </p> </div> </div> <div class=\"table-responsive\"> <table class=\"table table-condensed table-striped table-bordered\"> <thead> <tr> <th (click)=\"orderProp = 'timestamp'; reverse=!reverse\"><span jhiTranslate=\"audits.table.header.date\">Date</span></th> <th (click)=\"orderProp = 'principal'; reverse=!reverse\"><span jhiTranslate=\"audits.table.header.principal\">User</span></th> <th (click)=\"orderProp = 'type'; reverse=!reverse\"><span jhiTranslate=\"audits.table.header.status\">State</span></th> <th (click)=\"orderProp = 'data.message'; reverse=!reverse\"><span jhiTranslate=\"audits.table.header.data\">Extra data</span></th> </tr> </thead> <tr *ngFor=\"let audit of getAudits()\"> <td><span>{{audit.timestamp| date:'medium'}}</span></td> <td><small>{{audit.principal}}</small></td> <td>{{audit.type}}</td> <td> <span *ngIf=\"audit.data\" ng-show=\"audit.data.message\">{{audit.data.message}}</span> <span *ngIf=\"audit.data\" ng-show=\"audit.data.remoteAddress\"><span jhiTranslate=\"audits.table.data.remoteAddress\">Remote Address</span> {{audit.data.remoteAddress}}</span> </td> </tr> </table> </div> <div *ngIf=\"audits\"> <div class=\"row justify-content-center\"> <jhi-item-count [page]=\"page\" [total]=\"totalItems\" [itemsPerPage]=\"itemsPerPage\"></jhi-item-count> </div> <div class=\"row justify-content-center\"> <ngb-pagination [collectionSize]=\"totalItems\" [(page)]=\"page\" (pageChange)=\"loadPage(page)\"></ngb-pagination> </div> </div> </div> ";

/***/ }),

/***/ "./src/main/webapp/app/admin/audits/audits.component.ts":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = __webpack_require__(0);
var common_1 = __webpack_require__(15);
var ng_jhipster_1 = __webpack_require__(5);
var audits_service_1 = __webpack_require__("./src/main/webapp/app/admin/audits/audits.service.ts");
var shared_1 = __webpack_require__("./src/main/webapp/app/shared/index.ts");
var uib_pagination_config_1 = __webpack_require__("./src/main/webapp/app/blocks/config/uib-pagination.config.ts");
var AuditsComponent = (function () {
    function AuditsComponent(auditsService, parseLinks, paginationConfig, datePipe) {
        this.auditsService = auditsService;
        this.parseLinks = parseLinks;
        this.paginationConfig = paginationConfig;
        this.datePipe = datePipe;
        this.itemsPerPage = shared_1.ITEMS_PER_PAGE;
        this.page = 1;
        this.reverse = false;
        this.orderProp = 'timestamp';
    }
    AuditsComponent.prototype.getAudits = function () {
        return this.sortAudits(this.audits);
    };
    AuditsComponent.prototype.loadPage = function (page) {
        this.page = page;
        this.onChangeDate();
    };
    AuditsComponent.prototype.ngOnInit = function () {
        this.today();
        this.previousMonth();
        this.onChangeDate();
    };
    AuditsComponent.prototype.onChangeDate = function () {
        var _this = this;
        this.auditsService.query({ page: this.page - 1, size: this.itemsPerPage,
            fromDate: this.fromDate, toDate: this.toDate }).subscribe(function (res) {
            _this.audits = res.json();
            _this.links = _this.parseLinks.parse(res.headers.get('link'));
            _this.totalItems = +res.headers.get('X-Total-Count');
        });
    };
    AuditsComponent.prototype.previousMonth = function () {
        var dateFormat = 'yyyy-MM-dd';
        var fromDate = new Date();
        if (fromDate.getMonth() === 0) {
            fromDate = new Date(fromDate.getFullYear() - 1, 11, fromDate.getDate());
        }
        else {
            fromDate = new Date(fromDate.getFullYear(), fromDate.getMonth() - 1, fromDate.getDate());
        }
        this.fromDate = this.datePipe.transform(fromDate, dateFormat);
    };
    AuditsComponent.prototype.today = function () {
        var dateFormat = 'yyyy-MM-dd';
        // Today + 1 day - needed if the current day must be included
        var today = new Date();
        today.setDate(today.getDate() + 1);
        var date = new Date(today.getFullYear(), today.getMonth(), today.getDate());
        this.toDate = this.datePipe.transform(date, dateFormat);
    };
    AuditsComponent.prototype.sortAudits = function (audits) {
        var _this = this;
        audits = audits.slice(0).sort(function (a, b) {
            if (a[_this.orderProp] < b[_this.orderProp]) {
                return -1;
            }
            else if (true) {
                return 1;
            }
            else {
                return 0;
            }
        });
        return this.reverse ? audits.reverse() : audits;
    };
    return AuditsComponent;
}());
AuditsComponent = __decorate([
    core_1.Component({
        selector: 'jhi-audit',
        template: __webpack_require__("./src/main/webapp/app/admin/audits/audits.component.html")
    }),
    __metadata("design:paramtypes", [audits_service_1.AuditsService,
        ng_jhipster_1.ParseLinks,
        uib_pagination_config_1.PaginationConfig,
        common_1.DatePipe])
], AuditsComponent);
exports.AuditsComponent = AuditsComponent;


/***/ }),

/***/ "./src/main/webapp/app/admin/audits/audits.route.ts":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var audits_component_1 = __webpack_require__("./src/main/webapp/app/admin/audits/audits.component.ts");
exports.auditsRoute = {
    path: 'audits',
    component: audits_component_1.AuditsComponent,
    data: {
        pageTitle: 'audits.title'
    }
};


/***/ }),

/***/ "./src/main/webapp/app/admin/audits/audits.service.ts":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = __webpack_require__(0);
var http_1 = __webpack_require__(8);
var AuditsService = (function () {
    function AuditsService(http) {
        this.http = http;
    }
    AuditsService.prototype.query = function (req) {
        var params = new http_1.URLSearchParams();
        params.set('fromDate', req.fromDate);
        params.set('toDate', req.toDate);
        params.set('page', req.page);
        params.set('size', req.size);
        params.set('sort', req.sort);
        var options = {
            search: params
        };
        return this.http.get('management/audits', options);
    };
    return AuditsService;
}());
AuditsService = __decorate([
    core_1.Injectable(),
    __metadata("design:paramtypes", [http_1.Http])
], AuditsService);
exports.AuditsService = AuditsService;


/***/ }),

/***/ "./src/main/webapp/app/admin/configuration/configuration.component.html":
/***/ (function(module, exports) {

module.exports = "<div *ngIf=\"allConfiguration && configuration\"> <h2 jhiTranslate=\"configuration.title\">Configuration</h2> <span jhiTranslate=\"configuration.filter\">Filter (by prefix)</span> <input type=\"text\" [(ngModel)]=\"filter\" class=\"form-control\"> <label>Spring configuration</label> <table class=\"table table-striped table-bordered table-responsive d-table\"> <thead> <tr> <th class=\"w-40\" (click)=\"orderProp = 'prefix'; reverse=!reverse\"><span jhiTranslate=\"configuration.table.prefix\">Prefix</span></th> <th class=\"w-60\" (click)=\"orderProp = 'properties'; reverse=!reverse\"><span jhiTranslate=\"configuration.table.properties\">Properties</span></th> </tr> </thead> <tbody> <tr *ngFor=\"let entry of (configuration | pureFilter:filter:'prefix' | orderBy:orderProp:reverse)\"> <td><span>{{entry.prefix}}</span></td> <td> <div class=\"row\" *ngFor=\"let key of keys(entry.properties)\"> <div class=\"col-md-4\">{{key}}</div> <div class=\"col-md-8\"> <span class=\"float-right badge badge-default break\">{{entry.properties[key] | json}}</span> </div> </div> </td> </tr> </tbody> </table> <div *ngFor=\"let key of keys(allConfiguration)\"> <label><span>{{key}}</span></label> <table class=\"table table-sm table-striped table-bordered table-responsive d-table\"> <thead> <tr> <th class=\"w-40\">Property</th> <th class=\"w-60\">Value</th> </tr> </thead> <tbody> <tr *ngFor=\"let item of allConfiguration[key]\"> <td class=\"break\">{{item.key}}</td> <td class=\"break\"> <span class=\"float-right badge badge-default break\">{{item.val}}</span> </td> </tr> </tbody> </table> </div> </div> ";

/***/ }),

/***/ "./src/main/webapp/app/admin/configuration/configuration.component.ts":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = __webpack_require__(0);
var configuration_service_1 = __webpack_require__("./src/main/webapp/app/admin/configuration/configuration.service.ts");
var JhiConfigurationComponent = (function () {
    function JhiConfigurationComponent(configurationService) {
        this.configurationService = configurationService;
        this.allConfiguration = null;
        this.configuration = null;
        this.configKeys = [];
        this.filter = '';
        this.orderProp = 'prefix';
        this.reverse = false;
    }
    JhiConfigurationComponent.prototype.keys = function (dict) {
        return (dict === undefined) ? [] : Object.keys(dict);
    };
    JhiConfigurationComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.configurationService.get().subscribe(function (configuration) {
            _this.configuration = configuration;
            for (var _i = 0, configuration_1 = configuration; _i < configuration_1.length; _i++) {
                var config = configuration_1[_i];
                if (config.properties !== undefined) {
                    _this.configKeys.push(Object.keys(config.properties));
                }
            }
        });
        this.configurationService.getEnv().subscribe(function (configuration) {
            _this.allConfiguration = configuration;
        });
    };
    return JhiConfigurationComponent;
}());
JhiConfigurationComponent = __decorate([
    core_1.Component({
        selector: 'jhi-configuration',
        template: __webpack_require__("./src/main/webapp/app/admin/configuration/configuration.component.html")
    }),
    __metadata("design:paramtypes", [configuration_service_1.JhiConfigurationService])
], JhiConfigurationComponent);
exports.JhiConfigurationComponent = JhiConfigurationComponent;


/***/ }),

/***/ "./src/main/webapp/app/admin/configuration/configuration.route.ts":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var configuration_component_1 = __webpack_require__("./src/main/webapp/app/admin/configuration/configuration.component.ts");
exports.configurationRoute = {
    path: 'jhi-configuration',
    component: configuration_component_1.JhiConfigurationComponent,
    data: {
        pageTitle: 'configuration.title'
    }
};


/***/ }),

/***/ "./src/main/webapp/app/admin/configuration/configuration.service.ts":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = __webpack_require__(0);
var http_1 = __webpack_require__(8);
var JhiConfigurationService = (function () {
    function JhiConfigurationService(http) {
        this.http = http;
    }
    JhiConfigurationService.prototype.get = function () {
        return this.http.get('management/configprops').map(function (res) {
            var properties = [];
            var propertiesObject = res.json();
            for (var key in propertiesObject) {
                if (propertiesObject.hasOwnProperty(key)) {
                    properties.push(propertiesObject[key]);
                }
            }
            return properties.sort(function (propertyA, propertyB) {
                return (propertyA.prefix === propertyB.prefix) ? 0 :
                    (propertyA.prefix < propertyB.prefix) ? -1 : 1;
            });
        });
    };
    JhiConfigurationService.prototype.getEnv = function () {
        return this.http.get('management/env').map(function (res) {
            var properties = {};
            var propertiesObject = res.json();
            for (var key in propertiesObject) {
                if (propertiesObject.hasOwnProperty(key)) {
                    var valsObject = propertiesObject[key];
                    var vals = [];
                    for (var valKey in valsObject) {
                        if (valsObject.hasOwnProperty(valKey)) {
                            vals.push({ key: valKey, val: valsObject[valKey] });
                        }
                    }
                    properties[key] = vals;
                }
            }
            return properties;
        });
    };
    return JhiConfigurationService;
}());
JhiConfigurationService = __decorate([
    core_1.Injectable(),
    __metadata("design:paramtypes", [http_1.Http])
], JhiConfigurationService);
exports.JhiConfigurationService = JhiConfigurationService;


/***/ }),

/***/ "./src/main/webapp/app/admin/docs/docs.component.html":
/***/ (function(module, exports) {

module.exports = "<iframe src=\"swagger-ui/index.html\" width=\"100%\" height=\"900\" seamless target=\"_top\" title=\"Swagger UI\" class=\"border-0\"></iframe> ";

/***/ }),

/***/ "./src/main/webapp/app/admin/docs/docs.component.ts":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = __webpack_require__(0);
var JhiDocsComponent = (function () {
    function JhiDocsComponent() {
    }
    return JhiDocsComponent;
}());
JhiDocsComponent = __decorate([
    core_1.Component({
        selector: 'jhi-docs',
        template: __webpack_require__("./src/main/webapp/app/admin/docs/docs.component.html")
    }),
    __metadata("design:paramtypes", [])
], JhiDocsComponent);
exports.JhiDocsComponent = JhiDocsComponent;


/***/ }),

/***/ "./src/main/webapp/app/admin/docs/docs.route.ts":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var docs_component_1 = __webpack_require__("./src/main/webapp/app/admin/docs/docs.component.ts");
exports.docsRoute = {
    path: 'docs',
    component: docs_component_1.JhiDocsComponent,
    data: {
        pageTitle: 'global.menu.admin.apidocs'
    }
};


/***/ }),

/***/ "./src/main/webapp/app/admin/health/health-modal.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"modal-header\"> <h4 class=\"modal-title\" id=\"showHealthLabel\"> {{'health.indicator.' + baseName(currentHealth.name) | translate}} {{subSystemName(currentHealth.name)}} </h4> <button aria-label=\"Close\" data-dismiss=\"modal\" class=\"close\" type=\"button\" (click)=\"activeModal.dismiss('closed')\"><span aria-hidden=\"true\">&times;</span> </button> </div> <div class=\"modal-body pad\"> <div *ngIf=\"currentHealth.details\"> <h5 jhiTranslate=\"health.details.properties\">Properties</h5> <div class=\"table-responsive\"> <table class=\"table table-striped\"> <thead> <tr> <th class=\"text-left\" jhiTranslate=\"health.details.name\">Name</th> <th class=\"text-left\" jhiTranslate=\"health.details.value\">Value</th> </tr> </thead> <tbody> <tr *ngFor=\"let entry of currentHealth.details | keys\"> <td class=\"text-left\">{{entry.key}}</td> <td class=\"text-left\">{{readableValue(entry.value)}}</td> </tr> </tbody> </table> </div> </div> <div *ngIf=\"currentHealth.error\"> <h4 jhiTranslate=\"health.details.error\">Error</h4> <pre>{{currentHealth.error}}</pre> </div> </div> <div class=\"modal-footer\"> <button data-dismiss=\"modal\" class=\"btn btn-secondary float-left\" type=\"button\" (click)=\"activeModal.dismiss('closed')\">Done</button> </div> ";

/***/ }),

/***/ "./src/main/webapp/app/admin/health/health-modal.component.ts":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = __webpack_require__(0);
var ng_bootstrap_1 = __webpack_require__(9);
var health_service_1 = __webpack_require__("./src/main/webapp/app/admin/health/health.service.ts");
var JhiHealthModalComponent = (function () {
    function JhiHealthModalComponent(healthService, activeModal) {
        this.healthService = healthService;
        this.activeModal = activeModal;
    }
    JhiHealthModalComponent.prototype.baseName = function (name) {
        return this.healthService.getBaseName(name);
    };
    JhiHealthModalComponent.prototype.subSystemName = function (name) {
        return this.healthService.getSubSystemName(name);
    };
    JhiHealthModalComponent.prototype.readableValue = function (value) {
        if (this.currentHealth.name !== 'diskSpace') {
            return value.toString();
        }
        // Should display storage space in an human readable unit
        var val = value / 1073741824;
        if (val > 1) {
            return val.toFixed(2) + ' GB';
        }
        else {
            return (value / 1048576).toFixed(2) + ' MB';
        }
    };
    return JhiHealthModalComponent;
}());
JhiHealthModalComponent = __decorate([
    core_1.Component({
        selector: 'jhi-health-modal',
        template: __webpack_require__("./src/main/webapp/app/admin/health/health-modal.component.html")
    }),
    __metadata("design:paramtypes", [health_service_1.JhiHealthService, ng_bootstrap_1.NgbActiveModal])
], JhiHealthModalComponent);
exports.JhiHealthModalComponent = JhiHealthModalComponent;


/***/ }),

/***/ "./src/main/webapp/app/admin/health/health.component.html":
/***/ (function(module, exports) {

module.exports = "<div> <h2> <span jhiTranslate=\"health.title\">Health Checks</span> <button class=\"btn btn-primary float-right\" (click)=\"refresh()\"> <span class=\"fa fa-refresh\"></span> <span jhiTranslate=\"health.refresh.button\">Refresh</span> </button> </h2> <div class=\"table-responsive\"> <table id=\"healthCheck\" class=\"table table-striped\"> <thead> <tr> <th jhiTranslate=\"health.table.service\">Service Name</th> <th class=\"text-center\" jhiTranslate=\"health.table.status\">Status</th> <th class=\"text-center\" jhiTranslate=\"health.details.details\">Details</th> </tr> </thead> <tbody> <tr *ngFor=\"let health of healthData\"> <td>{{'health.indicator.' + baseName(health.name) | translate}} {{subSystemName(health.name)}}</td> <td class=\"text-center\"> <span class=\"badge\" [ngClass]=\"getBadgeClass(health.status)\" jhiTranslate=\"{{'health.status.' + health.status}}\"> {{health.status}} </span> </td> <td class=\"text-center\"> <a class=\"hand\" (click)=\"showHealth(health)\" *ngIf=\"health.details || health.error\"> <i class=\"fa fa-eye\"></i> </a> </td> </tr> </tbody> </table> </div> </div> ";

/***/ }),

/***/ "./src/main/webapp/app/admin/health/health.component.ts":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = __webpack_require__(0);
var ng_bootstrap_1 = __webpack_require__(9);
var health_service_1 = __webpack_require__("./src/main/webapp/app/admin/health/health.service.ts");
var health_modal_component_1 = __webpack_require__("./src/main/webapp/app/admin/health/health-modal.component.ts");
var JhiHealthCheckComponent = (function () {
    function JhiHealthCheckComponent(modalService, healthService) {
        this.modalService = modalService;
        this.healthService = healthService;
    }
    JhiHealthCheckComponent.prototype.ngOnInit = function () {
        this.refresh();
    };
    JhiHealthCheckComponent.prototype.baseName = function (name) {
        return this.healthService.getBaseName(name);
    };
    JhiHealthCheckComponent.prototype.getBadgeClass = function (statusState) {
        if (statusState === 'UP') {
            return 'badge-success';
        }
        else {
            return 'badge-danger';
        }
    };
    JhiHealthCheckComponent.prototype.refresh = function () {
        var _this = this;
        this.updatingHealth = true;
        this.healthService.checkHealth().subscribe(function (health) {
            _this.healthData = _this.healthService.transformHealthData(health);
            _this.updatingHealth = false;
        }, function (error) {
            if (error.status === 503) {
                _this.healthData = _this.healthService.transformHealthData(error.json());
                _this.updatingHealth = false;
            }
        });
    };
    JhiHealthCheckComponent.prototype.showHealth = function (health) {
        var modalRef = this.modalService.open(health_modal_component_1.JhiHealthModalComponent);
        modalRef.componentInstance.currentHealth = health;
        modalRef.result.then(function (result) {
            // Left blank intentionally, nothing to do here
        }, function (reason) {
            // Left blank intentionally, nothing to do here
        });
    };
    JhiHealthCheckComponent.prototype.subSystemName = function (name) {
        return this.healthService.getSubSystemName(name);
    };
    return JhiHealthCheckComponent;
}());
JhiHealthCheckComponent = __decorate([
    core_1.Component({
        selector: 'jhi-health',
        template: __webpack_require__("./src/main/webapp/app/admin/health/health.component.html")
    }),
    __metadata("design:paramtypes", [ng_bootstrap_1.NgbModal,
        health_service_1.JhiHealthService])
], JhiHealthCheckComponent);
exports.JhiHealthCheckComponent = JhiHealthCheckComponent;


/***/ }),

/***/ "./src/main/webapp/app/admin/health/health.route.ts":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var health_component_1 = __webpack_require__("./src/main/webapp/app/admin/health/health.component.ts");
exports.healthRoute = {
    path: 'jhi-health',
    component: health_component_1.JhiHealthCheckComponent,
    data: {
        pageTitle: 'health.title'
    }
};


/***/ }),

/***/ "./src/main/webapp/app/admin/health/health.service.ts":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = __webpack_require__(0);
var http_1 = __webpack_require__(8);
var JhiHealthService = (function () {
    function JhiHealthService(http) {
        this.http = http;
        this.separator = '.';
    }
    JhiHealthService.prototype.checkHealth = function () {
        return this.http.get('management/health').map(function (res) { return res.json(); });
    };
    JhiHealthService.prototype.transformHealthData = function (data) {
        var response = [];
        this.flattenHealthData(response, null, data);
        return response;
    };
    JhiHealthService.prototype.getBaseName = function (name) {
        if (name) {
            var split = name.split('.');
            return split[0];
        }
    };
    JhiHealthService.prototype.getSubSystemName = function (name) {
        if (name) {
            var split = name.split('.');
            split.splice(0, 1);
            var remainder = split.join('.');
            return remainder ? ' - ' + remainder : '';
        }
    };
    /* private methods */
    JhiHealthService.prototype.addHealthObject = function (result, isLeaf, healthObject, name) {
        var healthData = {
            name: name
        };
        var details = {};
        var hasDetails = false;
        for (var key in healthObject) {
            if (healthObject.hasOwnProperty(key)) {
                var value = healthObject[key];
                if (key === 'status' || key === 'error') {
                    healthData[key] = value;
                }
                else {
                    if (!this.isHealthObject(value)) {
                        details[key] = value;
                        hasDetails = true;
                    }
                }
            }
        }
        // Add the details
        if (hasDetails) {
            healthData.details = details;
        }
        // Only add nodes if they provide additional information
        if (isLeaf || hasDetails || healthData.error) {
            result.push(healthData);
        }
        return healthData;
    };
    JhiHealthService.prototype.flattenHealthData = function (result, path, data) {
        for (var key in data) {
            if (data.hasOwnProperty(key)) {
                var value = data[key];
                if (this.isHealthObject(value)) {
                    if (this.hasSubSystem(value)) {
                        this.addHealthObject(result, false, value, this.getModuleName(path, key));
                        this.flattenHealthData(result, this.getModuleName(path, key), value);
                    }
                    else {
                        this.addHealthObject(result, true, value, this.getModuleName(path, key));
                    }
                }
            }
        }
        return result;
    };
    JhiHealthService.prototype.getModuleName = function (path, name) {
        var result;
        if (path && name) {
            result = path + this.separator + name;
        }
        else if (path) {
            result = path;
        }
        else if (name) {
            result = name;
        }
        else {
            result = '';
        }
        return result;
    };
    JhiHealthService.prototype.hasSubSystem = function (healthObject) {
        var result = false;
        for (var key in healthObject) {
            if (healthObject.hasOwnProperty(key)) {
                var value = healthObject[key];
                if (value && value.status) {
                    result = true;
                }
            }
        }
        return result;
    };
    JhiHealthService.prototype.isHealthObject = function (healthObject) {
        var result = false;
        for (var key in healthObject) {
            if (healthObject.hasOwnProperty(key)) {
                if (key === 'status') {
                    result = true;
                }
            }
        }
        return result;
    };
    return JhiHealthService;
}());
JhiHealthService = __decorate([
    core_1.Injectable(),
    __metadata("design:paramtypes", [http_1.Http])
], JhiHealthService);
exports.JhiHealthService = JhiHealthService;


/***/ }),

/***/ "./src/main/webapp/app/admin/index.ts":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

function __export(m) {
    for (var p in m) if (!exports.hasOwnProperty(p)) exports[p] = m[p];
}
Object.defineProperty(exports, "__esModule", { value: true });
__export(__webpack_require__("./src/main/webapp/app/admin/audits/audits.component.ts"));
__export(__webpack_require__("./src/main/webapp/app/admin/audits/audits.service.ts"));
__export(__webpack_require__("./src/main/webapp/app/admin/audits/audits.route.ts"));
__export(__webpack_require__("./src/main/webapp/app/admin/audits/audit.model.ts"));
__export(__webpack_require__("./src/main/webapp/app/admin/audits/audit-data.model.ts"));
__export(__webpack_require__("./src/main/webapp/app/admin/configuration/configuration.component.ts"));
__export(__webpack_require__("./src/main/webapp/app/admin/configuration/configuration.service.ts"));
__export(__webpack_require__("./src/main/webapp/app/admin/configuration/configuration.route.ts"));
__export(__webpack_require__("./src/main/webapp/app/admin/docs/docs.component.ts"));
__export(__webpack_require__("./src/main/webapp/app/admin/docs/docs.route.ts"));
__export(__webpack_require__("./src/main/webapp/app/admin/health/health.component.ts"));
__export(__webpack_require__("./src/main/webapp/app/admin/health/health-modal.component.ts"));
__export(__webpack_require__("./src/main/webapp/app/admin/health/health.service.ts"));
__export(__webpack_require__("./src/main/webapp/app/admin/health/health.route.ts"));
__export(__webpack_require__("./src/main/webapp/app/admin/logs/logs.component.ts"));
__export(__webpack_require__("./src/main/webapp/app/admin/logs/logs.service.ts"));
__export(__webpack_require__("./src/main/webapp/app/admin/logs/logs.route.ts"));
__export(__webpack_require__("./src/main/webapp/app/admin/logs/log.model.ts"));
__export(__webpack_require__("./src/main/webapp/app/admin/tracker/tracker.component.ts"));
__export(__webpack_require__("./src/main/webapp/app/admin/tracker/tracker.route.ts"));
__export(__webpack_require__("./src/main/webapp/app/admin/metrics/metrics.component.ts"));
__export(__webpack_require__("./src/main/webapp/app/admin/metrics/metrics-modal.component.ts"));
__export(__webpack_require__("./src/main/webapp/app/admin/metrics/metrics.service.ts"));
__export(__webpack_require__("./src/main/webapp/app/admin/metrics/metrics.route.ts"));
__export(__webpack_require__("./src/main/webapp/app/admin/user-management/user-management-dialog.component.ts"));
__export(__webpack_require__("./src/main/webapp/app/admin/user-management/user-management-delete-dialog.component.ts"));
__export(__webpack_require__("./src/main/webapp/app/admin/user-management/user-management-detail.component.ts"));
__export(__webpack_require__("./src/main/webapp/app/admin/user-management/user-management.component.ts"));
__export(__webpack_require__("./src/main/webapp/app/admin/user-management/user-management.route.ts"));
__export(__webpack_require__("./src/main/webapp/app/admin/user-management/user-modal.service.ts"));
__export(__webpack_require__("./src/main/webapp/app/admin/admin.route.ts"));


/***/ }),

/***/ "./src/main/webapp/app/admin/logs/log.model.ts":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var Log = (function () {
    function Log(name, level) {
        this.name = name;
        this.level = level;
    }
    return Log;
}());
exports.Log = Log;


/***/ }),

/***/ "./src/main/webapp/app/admin/logs/logs.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"table-responsive\" *ngIf=\"loggers\"> <h2 jhiTranslate=\"logs.title\">Logs</h2> <p jhiTranslate=\"logs.nbloggers\" translateValues=\"{total: '{{ loggers.length }}'}\">There are {{ loggers.length }} loggers.</p> <span jhiTranslate=\"logs.filter\">Filter</span> <input type=\"text\" [(ngModel)]=\"filter\" class=\"form-control\"> <table class=\"table table-condensed table-striped table-bordered\"> <thead> <tr title=\"click to order\"> <th (click)=\"orderProp = 'name'; reverse=!reverse\"><span jhiTranslate=\"logs.table.name\">Name</span></th> <th (click)=\"orderProp = 'level'; reverse=!reverse\"><span jhiTranslate=\"logs.table.level\">Level</span></th> </tr> </thead> <tr *ngFor=\"let logger of (loggers | pureFilter:filter:'name' | orderBy:orderProp:reverse)\"> <td><small>{{logger.name | slice:0:140}}</small></td> <td> <button (click)=\"changeLevel(logger.name, 'TRACE')\" [ngClass]=\"(logger.level=='TRACE') ? 'btn-danger' : 'btn-secondary'\" class=\"btn btn-sm\">TRACE</button> <button (click)=\"changeLevel(logger.name, 'DEBUG')\" [ngClass]=\"(logger.level=='DEBUG') ? 'btn-warning' : 'btn-secondary'\" class=\"btn btn-sm\">DEBUG</button> <button (click)=\"changeLevel(logger.name, 'INFO')\" [ngClass]=\"(logger.level=='INFO') ? 'btn-info' : 'btn-secondary'\" class=\"btn btn-sm\">INFO</button> <button (click)=\"changeLevel(logger.name, 'WARN')\" [ngClass]=\"(logger.level=='WARN') ? 'btn-success' : 'btn-secondary'\" class=\"btn btn-sm\">WARN</button> <button (click)=\"changeLevel(logger.name, 'ERROR')\" [ngClass]=\"(logger.level=='ERROR') ? 'btn-primary' : 'btn-secondary'\" class=\"btn btn-sm\">ERROR</button> </td> </tr> </table> </div> ";

/***/ }),

/***/ "./src/main/webapp/app/admin/logs/logs.component.ts":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = __webpack_require__(0);
var log_model_1 = __webpack_require__("./src/main/webapp/app/admin/logs/log.model.ts");
var logs_service_1 = __webpack_require__("./src/main/webapp/app/admin/logs/logs.service.ts");
var LogsComponent = (function () {
    function LogsComponent(logsService) {
        this.logsService = logsService;
        this.filter = '';
        this.orderProp = 'name';
        this.reverse = false;
    }
    LogsComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.logsService.findAll().subscribe(function (loggers) { return _this.loggers = loggers; });
    };
    LogsComponent.prototype.changeLevel = function (name, level) {
        var _this = this;
        var log = new log_model_1.Log(name, level);
        this.logsService.changeLevel(log).subscribe(function () {
            _this.logsService.findAll().subscribe(function (loggers) { return _this.loggers = loggers; });
        });
    };
    return LogsComponent;
}());
LogsComponent = __decorate([
    core_1.Component({
        selector: 'jhi-logs',
        template: __webpack_require__("./src/main/webapp/app/admin/logs/logs.component.html"),
    }),
    __metadata("design:paramtypes", [logs_service_1.LogsService])
], LogsComponent);
exports.LogsComponent = LogsComponent;


/***/ }),

/***/ "./src/main/webapp/app/admin/logs/logs.route.ts":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var logs_component_1 = __webpack_require__("./src/main/webapp/app/admin/logs/logs.component.ts");
exports.logsRoute = {
    path: 'logs',
    component: logs_component_1.LogsComponent,
    data: {
        pageTitle: 'logs.title'
    }
};


/***/ }),

/***/ "./src/main/webapp/app/admin/logs/logs.service.ts":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = __webpack_require__(0);
var http_1 = __webpack_require__(8);
var LogsService = (function () {
    function LogsService(http) {
        this.http = http;
    }
    LogsService.prototype.changeLevel = function (log) {
        return this.http.put('management/logs', log);
    };
    LogsService.prototype.findAll = function () {
        return this.http.get('management/logs').map(function (res) { return res.json(); });
    };
    return LogsService;
}());
LogsService = __decorate([
    core_1.Injectable(),
    __metadata("design:paramtypes", [http_1.Http])
], LogsService);
exports.LogsService = LogsService;


/***/ }),

/***/ "./src/main/webapp/app/admin/metrics/metrics-modal.component.html":
/***/ (function(module, exports) {

module.exports = " <div class=\"modal-header\"> <h4 class=\"modal-title\" jhiTranslate=\"metrics.jvm.threads.dump.title\">Threads dump</h4> <button type=\"button\" class=\"close\" (click)=\"activeModal.dismiss('closed')\">&times;</button> </div> <div class=\"modal-body\"> <span class=\"badge badge-primary\" (click)=\"threadDumpFilter = {}\">All&nbsp;<span class=\"badge badge-pill badge-default\">{{threadDumpAll}}</span></span>&nbsp; <span class=\"badge badge-success\" (click)=\"threadDumpFilter = {threadState: 'RUNNABLE'}\">Runnable&nbsp;<span class=\"badge badge-pill badge-default\">{{threadDumpRunnable}}</span></span>&nbsp; <span class=\"badge badge-info\" (click)=\"threadDumpFilter = {threadState: 'WAITING'}\">Waiting&nbsp;<span class=\"badge badge-pill badge-default\">{{threadDumpWaiting}}</span></span>&nbsp; <span class=\"badge badge-warning\" (click)=\"threadDumpFilter = {threadState: 'TIMED_WAITING'}\">Timed Waiting&nbsp;<span class=\"badge badge-pill badge-default\">{{threadDumpTimedWaiting}}</span></span>&nbsp; <span class=\"badge badge-danger\" (click)=\"threadDumpFilter = {threadState: 'BLOCKED'}\">Blocked&nbsp;<span class=\"badge badge-pill badge-default\">{{threadDumpBlocked}}</span></span>&nbsp; <div class=\"mt-2\">&nbsp;</div> Filter <input type=\"text\" [(ngModel)]=\"threadDumpFilter\" class=\"form-control\"> <div class=\"pad\" *ngFor=\"let entry of threadDump | pureFilter:threadDumpFilter:'lockName' | keys\"> <h6> <span class=\"badge\" [ngClass]=\"getBadgeClass(entry.value.threadState)\">{{entry.value.threadState}}</span>&nbsp;{{entry.value.threadName}} (ID {{entry.value.threadId}}) <a (click)=\"entry.show = !entry.show\" href=\"javascript:void(0);\"> <span [hidden]=\"entry.show\" jhiTranslate=\"metrics.jvm.threads.dump.show\">Show StackTrace</span> <span [hidden]=\"!entry.show\" jhiTranslate=\"metrics.jvm.threads.dump.hide\">Hide StackTrace</span> </a> </h6> <div class=\"card\" [hidden]=\"!entry.show\"> <div class=\"card-block\"> <div *ngFor=\"let st of entry.value.stackTrace | keys\" class=\"break\"> <samp>{{st.value.className}}.{{st.value.methodName}}(<code>{{st.value.fileName}}:{{st.value.lineNumber}}</code>)</samp> <span class=\"mt-1\"></span> </div> </div> </div> <table class=\"table table-sm table-responsive\"> <thead> <tr> <th class=\"text-right\" jhiTranslate=\"metrics.jvm.threads.dump.blockedtime\">Blocked Time</th> <th class=\"text-right\" jhiTranslate=\"metrics.jvm.threads.dump.blockedcount\">Blocked Count</th> <th class=\"text-right\" jhiTranslate=\"metrics.jvm.threads.dump.waitedtime\">Waited Time</th> <th class=\"text-right\" jhiTranslate=\"metrics.jvm.threads.dump.waitedcount\">Waited Count</th> <th jhiTranslate=\"metrics.jvm.threads.dump.lockname\">Lock Name</th> </tr> </thead> <tbody> <tr> <td>{{entry.value.blockedTime}}</td> <td>{{entry.value.blockedCount}}</td> <td>{{entry.value.waitedTime}}</td> <td>{{entry.value.waitedCount}}</td> <td><code>{{entry.value.lockName}}</code></td> </tr> </tbody> </table> </div> </div> <div class=\"modal-footer\"> <button type=\"button\" class=\"btn btn-secondary pull-left\" data-dismiss=\"modal\" (click)=\"activeModal.dismiss('closed')\">Done</button> </div> ";

/***/ }),

/***/ "./src/main/webapp/app/admin/metrics/metrics-modal.component.ts":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = __webpack_require__(0);
var ng_bootstrap_1 = __webpack_require__(9);
var JhiMetricsMonitoringModalComponent = (function () {
    function JhiMetricsMonitoringModalComponent(activeModal) {
        this.activeModal = activeModal;
        this.threadDumpAll = 0;
        this.threadDumpBlocked = 0;
        this.threadDumpRunnable = 0;
        this.threadDumpTimedWaiting = 0;
        this.threadDumpWaiting = 0;
    }
    JhiMetricsMonitoringModalComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.threadDump.forEach(function (value) {
            if (value.threadState === 'RUNNABLE') {
                _this.threadDumpRunnable += 1;
            }
            else if (value.threadState === 'WAITING') {
                _this.threadDumpWaiting += 1;
            }
            else if (value.threadState === 'TIMED_WAITING') {
                _this.threadDumpTimedWaiting += 1;
            }
            else if (value.threadState === 'BLOCKED') {
                _this.threadDumpBlocked += 1;
            }
        });
        this.threadDumpAll = this.threadDumpRunnable + this.threadDumpWaiting +
            this.threadDumpTimedWaiting + this.threadDumpBlocked;
    };
    JhiMetricsMonitoringModalComponent.prototype.getBadgeClass = function (threadState) {
        if (threadState === 'RUNNABLE') {
            return 'badge-success';
        }
        else if (threadState === 'WAITING') {
            return 'badge-info';
        }
        else if (threadState === 'TIMED_WAITING') {
            return 'badge-warning';
        }
        else if (threadState === 'BLOCKED') {
            return 'badge-danger';
        }
    };
    return JhiMetricsMonitoringModalComponent;
}());
JhiMetricsMonitoringModalComponent = __decorate([
    core_1.Component({
        selector: 'jhi-metrics-modal',
        template: __webpack_require__("./src/main/webapp/app/admin/metrics/metrics-modal.component.html")
    }),
    __metadata("design:paramtypes", [ng_bootstrap_1.NgbActiveModal])
], JhiMetricsMonitoringModalComponent);
exports.JhiMetricsMonitoringModalComponent = JhiMetricsMonitoringModalComponent;


/***/ }),

/***/ "./src/main/webapp/app/admin/metrics/metrics.component.html":
/***/ (function(module, exports) {

module.exports = "<div> <h2> <span jhiTranslate=\"metrics.title\">Application Metrics</span> <button class=\"btn btn-primary float-right\" (click)=\"refresh()\"> <span class=\"fa fa-refresh\"></span> <span jhiTranslate=\"metrics.refresh.button\">Refresh</span> </button> </h2> <h3 jhiTranslate=\"metrics.jvm.title\">JVM Metrics</h3> <div class=\"row\" *ngIf=\"!updatingMetrics\"> <div class=\"col-md-4\"> <b jhiTranslate=\"metrics.jvm.memory.title\">Memory</b> <p><span jhiTranslate=\"metrics.jvm.memory.total\">Total Memory</span> ({{metrics.gauges['jvm.memory.total.used'].value / 1000000 | number:'1.0-0'}}M / {{metrics.gauges['jvm.memory.total.max'].value / 1000000 | number:'1.0-0'}}M)</p> <ngb-progressbar type=\"success\" [max]=\"metrics.gauges['jvm.memory.total.max'].value\" [value]=\"metrics.gauges['jvm.memory.total.used'].value\" [striped]=\"true\" [animated]=\"true\"> <span>{{metrics.gauges['jvm.memory.total.used'].value * 100 / metrics.gauges['jvm.memory.total.max'].value | number:'1.0-0'}}%</span> </ngb-progressbar> <p><span jhiTranslate=\"metrics.jvm.memory.heap\">Heap Memory</span> ({{metrics.gauges['jvm.memory.heap.used'].value / 1000000 | number:'1.0-0'}}M / {{metrics.gauges['jvm.memory.heap.max'].value / 1000000 | number:'1.0-0'}}M)</p> <ngb-progressbar [max]=\"metrics.gauges['jvm.memory.heap.max'].value\" [value]=\"metrics.gauges['jvm.memory.heap.used'].value\" [striped]=\"true\" [animated]=\"true\" type=\"success\"> <span>{{metrics.gauges['jvm.memory.heap.used'].value * 100 / metrics.gauges['jvm.memory.heap.max'].value | number:'1.0-0'}}%</span> </ngb-progressbar> <p><span jhiTranslate=\"metrics.jvm.memory.nonheap\">Non-Heap Memory</span> ({{metrics.gauges['jvm.memory.non-heap.used'].value / 1000000 | number:'1.0-0'}}M / {{metrics.gauges['jvm.memory.non-heap.committed'].value / 1000000 | number:'1.0-0'}}M)</p> <ngb-progressbar [max]=\"metrics.gauges['jvm.memory.non-heap.committed'].value\" [value]=\"metrics.gauges['jvm.memory.non-heap.used'].value\" [striped]=\"true\" [animated]=\"true\" type=\"success\"> <span>{{metrics.gauges['jvm.memory.non-heap.used'].value * 100 / metrics.gauges['jvm.memory.non-heap.committed'].value | number:'1.0-0'}}%</span> </ngb-progressbar> </div> <div class=\"col-md-4\"> <b jhiTranslate=\"metrics.jvm.threads.title\">Threads</b> (Total: {{metrics.gauges['jvm.threads.count'].value}}) <a class=\"hand\" (click)=\"refreshThreadDumpData()\" data-toggle=\"modal\" data-target=\"#threadDump\"><i class=\"fa fa-eye\"></i></a> <p><span jhiTranslate=\"metrics.jvm.threads.runnable\">Runnable</span> {{metrics.gauges['jvm.threads.runnable.count'].value}}</p> <ngb-progressbar [value]=\"metrics.gauges['jvm.threads.runnable.count'].value\" [max]=\"metrics.gauges['jvm.threads.count'].value\" [striped]=\"true\" [animated]=\"true\" type=\"success\"> <span>{{metrics.gauges['jvm.threads.runnable.count'].value * 100 / metrics.gauges['jvm.threads.count'].value | number:'1.0-0'}}%</span> </ngb-progressbar> <p><span jhiTranslate=\"metrics.jvm.threads.timedwaiting\">Timed Waiting</span> ({{metrics.gauges['jvm.threads.timed_waiting.count'].value}})</p> <ngb-progressbar [value]=\"metrics.gauges['jvm.threads.timed_waiting.count'].value\" [max]=\"metrics.gauges['jvm.threads.count'].value\" [striped]=\"true\" [animated]=\"true\" type=\"warning\"> <span>{{metrics.gauges['jvm.threads.timed_waiting.count'].value * 100 / metrics.gauges['jvm.threads.count'].value | number:'1.0-0'}}%</span> </ngb-progressbar> <p><span jhiTranslate=\"metrics.jvm.threads.waiting\">Waiting</span> ({{metrics.gauges['jvm.threads.waiting.count'].value}})</p> <ngb-progressbar [value]=\"metrics.gauges['jvm.threads.waiting.count'].value\" [max]=\"metrics.gauges['jvm.threads.count'].value\" [striped]=\"true\" [animated]=\"true\" type=\"warning\"> <span>{{metrics.gauges['jvm.threads.waiting.count'].value * 100 / metrics.gauges['jvm.threads.count'].value | number:'1.0-0'}}%</span> </ngb-progressbar> <p><span jhiTranslate=\"metrics.jvm.threads.blocked\">Blocked</span> ({{metrics.gauges['jvm.threads.blocked.count'].value}})</p> <ngb-progressbar [value]=\"metrics.gauges['jvm.threads.blocked.count'].value\" [max]=\"metrics.gauges['jvm.threads.count'].value\" [striped]=\"true\" [animated]=\"true\" type=\"success\"> <span>{{metrics.gauges['jvm.threads.blocked.count'].value * 100 / metrics.gauges['jvm.threads.count'].value | number:'1.0-0'}}%</span> </ngb-progressbar> </div> <div class=\"col-md-4\"> <b jhiTranslate=\"metrics.jvm.gc.title\">Garbage collections</b> <div class=\"row\" *ngIf=\"metrics.gauges['jvm.garbage.PS-MarkSweep.count']\"> <div class=\"col-md-9\" jhiTranslate=\"metrics.jvm.gc.marksweepcount\">Mark Sweep count</div> <div class=\"col-md-3 text-right\">{{metrics.gauges['jvm.garbage.PS-MarkSweep.count'].value}}</div> </div> <div class=\"row\" *ngIf=\"metrics.gauges['jvm.garbage.PS-MarkSweep.time']\"> <div class=\"col-md-9\" jhiTranslate=\"metrics.jvm.gc.marksweeptime\">Mark Sweep time</div> <div class=\"col-md-3 text-right\">{{metrics.gauges['jvm.garbage.PS-MarkSweep.time'].value}}ms</div> </div> <div class=\"row\" *ngIf=\"metrics.gauges['jvm.garbage.PS-Scavenge.count']\"> <div class=\"col-md-9\" jhiTranslate=\"metrics.jvm.gc.scavengecount\">Scavenge count</div> <div class=\"col-md-3 text-right\">{{metrics.gauges['jvm.garbage.PS-Scavenge.count'].value}}</div> </div> <div class=\"row\" *ngIf=\"metrics.gauges['jvm.garbage.PS-Scavenge.time']\"> <div class=\"col-md-9\" jhiTranslate=\"metrics.jvm.gc.scavengetime\">Scavenge time</div> <div class=\"col-md-3 text-right\">{{metrics.gauges['jvm.garbage.PS-Scavenge.time'].value}}ms</div> </div> </div> </div> <div class=\"well well-lg\" *ngIf=\"updatingMetrics\" jhiTranslate=\"metrics.updating\">Updating...</div> <h3 jhiTranslate=\"metrics.jvm.http.title\">HTTP requests (events per second)</h3> <p *ngIf=\"metrics.counters\"> <span jhiTranslate=\"metrics.jvm.http.active\">Active requests</span> <b>{{metrics.counters['com.codahale.metrics.servlet.InstrumentedFilter.activeRequests'].count | number:'1.0-0'}}</b> - <span jhiTranslate=\"metrics.jvm.http.total\">Total requests</span> <b>{{metrics.timers['com.codahale.metrics.servlet.InstrumentedFilter.requests'].count | number:'1.0-0'}}</b> </p> <div class=\"table-responsive\" *ngIf=\"!updatingMetrics\"> <table class=\"table table-striped\"> <thead> <tr> <th jhiTranslate=\"metrics.jvm.http.table.code\">Code</th> <th jhiTranslate=\"metrics.jvm.http.table.count\">Count</th> <th class=\"text-right\" jhiTranslate=\"metrics.jvm.http.table.mean\">Mean</th> <th class=\"text-right\"><span jhiTranslate=\"metrics.jvm.http.table.average\">Average</span> (1 min)</th> <th class=\"text-right\"><span jhiTranslate=\"metrics.jvm.http.table.average\">Average</span> (5 min)</th> <th class=\"text-right\"><span jhiTranslate=\"metrics.jvm.http.table.average\">Average</span> (15 min)</th> </tr> </thead> <tbody> <tr> <td jhiTranslate=\"metrics.jvm.http.code.ok\">OK</td> <td> <ngb-progressbar [max]=\"metrics.timers['com.codahale.metrics.servlet.InstrumentedFilter.requests'].count\" [value]=\"metrics.meters['com.codahale.metrics.servlet.InstrumentedFilter.responseCodes.ok'].count\" [striped]=\"true\" [animated]=\"true\" type=\"success\"> <span>{{metrics.meters['com.codahale.metrics.servlet.InstrumentedFilter.responseCodes.ok'].count}}</span> </ngb-progressbar> </td> <td class=\"text-right\"> {{filterNaN(metrics.meters['com.codahale.metrics.servlet.InstrumentedFilter.responseCodes.ok'].mean_rate) | number:'1.0-2'}} </td> <td class=\"text-right\"> {{filterNaN(metrics.meters['com.codahale.metrics.servlet.InstrumentedFilter.responseCodes.ok'].m1_rate) | number:'1.0-2'}} </td> <td class=\"text-right\"> {{filterNaN(metrics.meters['com.codahale.metrics.servlet.InstrumentedFilter.responseCodes.ok'].m5_rate) | number:'1.0-2'}} </td> <td class=\"text-right\"> {{filterNaN(metrics.meters['com.codahale.metrics.servlet.InstrumentedFilter.responseCodes.ok'].m15_rate) | number:'1.0-2'}} </td> </tr> <tr> <td jhiTranslate=\"metrics.jvm.http.code.notfound\">Not Found</td> <td> <ngb-progressbar [max]=\"metrics.timers['com.codahale.metrics.servlet.InstrumentedFilter.requests'].count\" [value]=\"metrics.meters['com.codahale.metrics.servlet.InstrumentedFilter.responseCodes.notFound'].count\" [striped]=\"true\" [animated]=\"true\" type=\"success\"> <span>{{metrics.meters['com.codahale.metrics.servlet.InstrumentedFilter.responseCodes.notFound'].count}}</span> </ngb-progressbar> </td> <td class=\"text-right\"> {{filterNaN(metrics.meters['com.codahale.metrics.servlet.InstrumentedFilter.responseCodes.notFound'].mean_rate) | number:'1.0-2'}} </td> <td class=\"text-right\"> {{filterNaN(metrics.meters['com.codahale.metrics.servlet.InstrumentedFilter.responseCodes.notFound'].m1_rate) | number:'1.0-2'}} </td> <td class=\"text-right\"> {{filterNaN(metrics.meters['com.codahale.metrics.servlet.InstrumentedFilter.responseCodes.notFound'].m5_rate) | number:'1.0-2'}} </td> <td class=\"text-right\"> {{filterNaN(metrics.meters['com.codahale.metrics.servlet.InstrumentedFilter.responseCodes.notFound'].m15_rate) | number:'1.0-2'}} </td> </tr> <tr> <td jhiTranslate=\"metrics.jvm.http.code.servererror\">Server error</td> <td> <ngb-progressbar [max]=\"metrics.timers['com.codahale.metrics.servlet.InstrumentedFilter.requests'].count\" [value]=\"metrics.meters['com.codahale.metrics.servlet.InstrumentedFilter.responseCodes.serverError'].count\" [striped]=\"true\" [animated]=\"true\" type=\"success\"> <span>{{metrics.meters['com.codahale.metrics.servlet.InstrumentedFilter.responseCodes.serverError'].count}}</span> </ngb-progressbar> </td> <td class=\"text-right\"> {{filterNaN(metrics.meters['com.codahale.metrics.servlet.InstrumentedFilter.responseCodes.serverError'].mean_rate) | number:'1.0-2'}} </td> <td class=\"text-right\"> {{filterNaN(metrics.meters['com.codahale.metrics.servlet.InstrumentedFilter.responseCodes.serverError'].m1_rate) | number:'1.0-2'}} </td> <td class=\"text-right\"> {{filterNaN(metrics.meters['com.codahale.metrics.servlet.InstrumentedFilter.responseCodes.serverError'].m5_rate) | number:'1.0-2'}} </td> <td class=\"text-right\"> {{filterNaN(metrics.meters['com.codahale.metrics.servlet.InstrumentedFilter.responseCodes.serverError'].m15_rate) | number:'1.0-2'}} </td> </tr> </tbody> </table> </div> <h3 jhiTranslate=\"metrics.servicesstats.title\">Services statistics (time in millisecond)</h3> <div class=\"table-responsive\" *ngIf=\"!updatingMetrics\"> <table class=\"table table-striped\"> <thead> <tr> <th jhiTranslate=\"metrics.servicesstats.table.name\">Service name</th> <th class=\"text-right\" jhiTranslate=\"metrics.servicesstats.table.count\">Count</th> <th class=\"text-right\" jhiTranslate=\"metrics.servicesstats.table.mean\">Mean</th> <th class=\"text-right\" jhiTranslate=\"metrics.servicesstats.table.min\">Min</th> <th class=\"text-right\" jhiTranslate=\"metrics.servicesstats.table.p50\">p50</th> <th class=\"text-right\" jhiTranslate=\"metrics.servicesstats.table.p75\">p75</th> <th class=\"text-right\" jhiTranslate=\"metrics.servicesstats.table.p95\">p95</th> <th class=\"text-right\" jhiTranslate=\"metrics.servicesstats.table.p99\">p99</th> <th class=\"text-right\" jhiTranslate=\"metrics.servicesstats.table.max\">Max</th> </tr> </thead> <tbody> <tr *ngFor=\"let entry of servicesStats | keys\"> <td>{{entry.key}}</td> <td class=\"text-right\">{{entry.value.count}}</td> <td class=\"text-right\">{{entry.value.mean * 1000 | number:'1.0-0'}}</td> <td class=\"text-right\">{{entry.value.min * 1000 | number:'1.0-0'}}</td> <td class=\"text-right\">{{entry.value.p50 * 1000 | number:'1.0-0'}}</td> <td class=\"text-right\">{{entry.value.p75 * 1000 | number:'1.0-0'}}</td> <td class=\"text-right\">{{entry.value.p95 * 1000 | number:'1.0-0'}}</td> <td class=\"text-right\">{{entry.value.p99 * 1000 | number:'1.0-0'}}</td> <td class=\"text-right\">{{entry.value.max * 1000 | number:'1.0-0'}}</td> </tr> </tbody> </table> </div> <h3 jhiTranslate=\"metrics.cache.title\">Cache statistics</h3> <div class=\"table-responsive\" *ngIf=\"!updatingMetrics\"> <table class=\"table table-striped\"> <thead> <tr> <th jhiTranslate=\"metrics.cache.cachename\">Cache name</th> <th class=\"text-right\" data-translate=\"metrics.cache.hits\">Cache Hits</th> <th class=\"text-right\" data-translate=\"metrics.cache.misses\">Cache Misses</th> <th class=\"text-right\" data-translate=\"metrics.cache.gets\">Cache Gets</th> <th class=\"text-right\" data-translate=\"metrics.cache.puts\">Cache Puts</th> <th class=\"text-right\" data-translate=\"metrics.cache.removals\">Cache Removals</th> <th class=\"text-right\" data-translate=\"metrics.cache.evictions\">Cache Evictions</th> <th class=\"text-right\" data-translate=\"metrics.cache.hitPercent\">Cache Hit %</th> <th class=\"text-right\" data-translate=\"metrics.cache.missPercent\">Cache Miss %</th> <th class=\"text-right\" data-translate=\"metrics.cache.averageGetTime\">Average get time (µs)</th> <th class=\"text-right\" data-translate=\"metrics.cache.averagePutTime\">Average put time (µs)</th> <th class=\"text-right\" data-translate=\"metrics.cache.averageRemoveTime\">Average remove time (µs)</th> </tr> </thead> <tbody> <tr *ngFor=\"let entry of cachesStats | keys\"> <td>{{entry.key}}</td> <td class=\"text-right\">{{metrics.gauges[entry.key + '.cache-hits'].value}}</td> <td class=\"text-right\">{{metrics.gauges[entry.key + '.cache-misses'].value}}</td> <td class=\"text-right\">{{metrics.gauges[entry.key + '.cache-gets'].value}}</td> <td class=\"text-right\">{{metrics.gauges[entry.key + '.cache-puts'].value}}</td> <td class=\"text-right\">{{metrics.gauges[entry.key + '.cache-removals'].value}}</td> <td class=\"text-right\">{{metrics.gauges[entry.key + '.cache-evictions'].value}}</td> <td class=\"text-right\">{{metrics.gauges[entry.key + '.cache-hit-percentage'].value}}</td> <td class=\"text-right\">{{metrics.gauges[entry.key + '.cache-miss-percentage'].value }}</td> <td class=\"text-right\">{{filterNaN(metrics.gauges[entry.key + '.average-get-time'].value) | number : '1.2-2' }}</td> <td class=\"text-right\">{{filterNaN(metrics.gauges[entry.key + '.average-put-time'].value) | number : '1.2-2'}}</td> <td class=\"text-right\">{{filterNaN(metrics.gauges[entry.key + '.average-remove-time'].value) | number : '1.2-2' }}</td> </tr> </tbody> </table> </div> <h3 jhiTranslate=\"metrics.datasource.title\" *ngIf=\"metrics.gauges && metrics.gauges['HikariPool-1.pool.TotalConnections'] && metrics.gauges['HikariPool-1.pool.TotalConnections'].value > 0\">DataSource statistics (time in millisecond)</h3> <div class=\"table-responsive\" *ngIf=\"!updatingMetrics && metrics.gauges && metrics.gauges['HikariPool-1.pool.TotalConnections'] && metrics.gauges['HikariPool-1.pool.TotalConnections'].value > 0\"> <table class=\"table table-striped\"> <thead> <tr> <th><span jhiTranslate=\"metrics.datasource.usage\">Usage</span> ({{metrics.gauges['HikariPool-1.pool.ActiveConnections'].value}} / {{metrics.gauges['HikariPool-1.pool.TotalConnections'].value}})</th> <th class=\"text-right\" jhiTranslate=\"metrics.datasource.count\">Count</th> <th class=\"text-right\" jhiTranslate=\"metrics.datasource.mean\">Mean</th> <th class=\"text-right\" jhiTranslate=\"metrics.datasource.min\">Min</th> <th class=\"text-right\" jhiTranslate=\"metrics.datasource.p50\">p50</th> <th class=\"text-right\" jhiTranslate=\"metrics.datasource.p75\">p75</th> <th class=\"text-right\" jhiTranslate=\"metrics.datasource.p95\">p95</th> <th class=\"text-right\" jhiTranslate=\"metrics.datasource.p99\">p99</th> <th class=\"text-right\" jhiTranslate=\"metrics.datasource.max\">Max</th> </tr> </thead> <tbody> <tr> <td> <div class=\"progress progress-striped\"> <ngb-progressbar [max]=\"metrics.gauges['HikariPool-1.pool.TotalConnections'].value\" [value]=\"metrics.gauges['HikariPool-1.pool.ActiveConnections'].value\" [striped]=\"true\" [animated]=\"true\" type=\"success\"> <span>{{metrics.gauges['HikariPool-1.pool.ActiveConnections'].value * 100 / metrics.gauges['HikariPool-1.pool.TotalConnections'].value | number:'1.0-0'}}%</span> </ngb-progressbar> </div> </td> <td class=\"text-right\">{{metrics.histograms['HikariPool-1.pool.Usage'].count}}</td> <td class=\"text-right\">{{filterNaN(metrics.histograms['HikariPool-1.pool.Usage'].mean) | number:'1.0-2'}}</td> <td class=\"text-right\">{{filterNaN(metrics.histograms['HikariPool-1.pool.Usage'].min) | number:'1.0-2'}}</td> <td class=\"text-right\">{{filterNaN(metrics.histograms['HikariPool-1.pool.Usage'].p50) | number:'1.0-2'}}</td> <td class=\"text-right\">{{filterNaN(metrics.histograms['HikariPool-1.pool.Usage'].p75) | number:'1.0-2'}}</td> <td class=\"text-right\">{{filterNaN(metrics.histograms['HikariPool-1.pool.Usage'].p95) | number:'1.0-2'}}</td> <td class=\"text-right\">{{filterNaN(metrics.histograms['HikariPool-1.pool.Usage'].p99) | number:'1.0-2'}}</td> <td class=\"text-right\">{{filterNaN(metrics.histograms['HikariPool-1.pool.Usage'].max) | number:'1.0-2'}}</td> </tr> </tbody> </table> </div> </div> ";

/***/ }),

/***/ "./src/main/webapp/app/admin/metrics/metrics.component.ts":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = __webpack_require__(0);
var ng_bootstrap_1 = __webpack_require__(9);
var metrics_modal_component_1 = __webpack_require__("./src/main/webapp/app/admin/metrics/metrics-modal.component.ts");
var metrics_service_1 = __webpack_require__("./src/main/webapp/app/admin/metrics/metrics.service.ts");
var JhiMetricsMonitoringComponent = (function () {
    function JhiMetricsMonitoringComponent(modalService, metricsService) {
        this.modalService = modalService;
        this.metricsService = metricsService;
        this.metrics = {};
        this.cachesStats = {};
        this.servicesStats = {};
        this.updatingMetrics = true;
        this.JCACHE_KEY = 'jcache.statistics';
    }
    JhiMetricsMonitoringComponent.prototype.ngOnInit = function () {
        this.refresh();
    };
    JhiMetricsMonitoringComponent.prototype.refresh = function () {
        var _this = this;
        this.updatingMetrics = true;
        this.metricsService.getMetrics().subscribe(function (metrics) {
            _this.metrics = metrics;
            _this.updatingMetrics = false;
            _this.servicesStats = {};
            _this.cachesStats = {};
            Object.keys(metrics.timers).forEach(function (key) {
                var value = metrics.timers[key];
                if (key.indexOf('web.rest') !== -1 || key.indexOf('service') !== -1) {
                    _this.servicesStats[key] = value;
                }
            });
            Object.keys(metrics.gauges).forEach(function (key) {
                if (key.indexOf('jcache.statistics') !== -1) {
                    var value = metrics.gauges[key].value;
                    // remove gets or puts
                    var index = key.lastIndexOf('.');
                    var newKey = key.substr(0, index);
                    // Keep the name of the domain
                    _this.cachesStats[newKey] = {
                        'name': _this.JCACHE_KEY.length,
                        'value': value
                    };
                }
            });
        });
    };
    JhiMetricsMonitoringComponent.prototype.refreshThreadDumpData = function () {
        var _this = this;
        this.metricsService.threadDump().subscribe(function (data) {
            var modalRef = _this.modalService.open(metrics_modal_component_1.JhiMetricsMonitoringModalComponent, { size: 'lg' });
            modalRef.componentInstance.threadDump = data;
            modalRef.result.then(function (result) {
                // Left blank intentionally, nothing to do here
            }, function (reason) {
                // Left blank intentionally, nothing to do here
            });
        });
    };
    JhiMetricsMonitoringComponent.prototype.filterNaN = function (input) {
        if (isNaN(input)) {
            return 0;
        }
        return input;
    };
    return JhiMetricsMonitoringComponent;
}());
JhiMetricsMonitoringComponent = __decorate([
    core_1.Component({
        selector: 'jhi-metrics',
        template: __webpack_require__("./src/main/webapp/app/admin/metrics/metrics.component.html")
    }),
    __metadata("design:paramtypes", [ng_bootstrap_1.NgbModal,
        metrics_service_1.JhiMetricsService])
], JhiMetricsMonitoringComponent);
exports.JhiMetricsMonitoringComponent = JhiMetricsMonitoringComponent;


/***/ }),

/***/ "./src/main/webapp/app/admin/metrics/metrics.route.ts":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var metrics_component_1 = __webpack_require__("./src/main/webapp/app/admin/metrics/metrics.component.ts");
exports.metricsRoute = {
    path: 'jhi-metrics',
    component: metrics_component_1.JhiMetricsMonitoringComponent,
    data: {
        pageTitle: 'metrics.title'
    }
};


/***/ }),

/***/ "./src/main/webapp/app/admin/metrics/metrics.service.ts":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = __webpack_require__(0);
var http_1 = __webpack_require__(8);
var JhiMetricsService = (function () {
    function JhiMetricsService(http) {
        this.http = http;
    }
    JhiMetricsService.prototype.getMetrics = function () {
        return this.http.get('management/metrics').map(function (res) { return res.json(); });
    };
    JhiMetricsService.prototype.threadDump = function () {
        return this.http.get('management/dump').map(function (res) { return res.json(); });
    };
    return JhiMetricsService;
}());
JhiMetricsService = __decorate([
    core_1.Injectable(),
    __metadata("design:paramtypes", [http_1.Http])
], JhiMetricsService);
exports.JhiMetricsService = JhiMetricsService;


/***/ }),

/***/ "./src/main/webapp/app/admin/tracker/tracker.component.html":
/***/ (function(module, exports) {

module.exports = "<div> <h2 jhiTranslate=\"tracker.title\">Real-time user activities</h2> <div class=\"table-responsive\"> <table class=\"table table-striped\"> <thead> <tr> <th jhiTranslate=\"tracker.table.userlogin\">User</th> <th jhiTranslate=\"tracker.table.ipaddress\">IP Address</th> <th jhiTranslate=\"tracker.table.page\">Current page</th> <th jhiTranslate=\"tracker.table.time\">Time</th> <th></th> </tr> </thead> <tbody> <tr *ngFor=\"let activity of activities\"> <td>{{activity.userLogin}}</td> <td>{{activity.ipAddress}}</td> <td>{{activity.page}}</td> <td>{{activity.time | date:'yyyy-MM-dd HH:mm:ss'}}</td> </tr> </tbody> </table> </div> </div> ";

/***/ }),

/***/ "./src/main/webapp/app/admin/tracker/tracker.component.ts":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = __webpack_require__(0);
var shared_1 = __webpack_require__("./src/main/webapp/app/shared/index.ts");
var JhiTrackerComponent = (function () {
    function JhiTrackerComponent(trackerService) {
        this.trackerService = trackerService;
        this.activities = [];
    }
    JhiTrackerComponent.prototype.showActivity = function (activity) {
        var existingActivity = false;
        for (var index = 0; index < this.activities.length; index++) {
            if (this.activities[index].sessionId === activity.sessionId) {
                existingActivity = true;
                if (activity.page === 'logout') {
                    this.activities.splice(index, 1);
                }
                else {
                    this.activities[index] = activity;
                }
            }
        }
        if (!existingActivity && (activity.page !== 'logout')) {
            this.activities.push(activity);
        }
    };
    JhiTrackerComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.trackerService.subscribe();
        this.trackerService.receive().subscribe(function (activity) {
            _this.showActivity(activity);
        });
    };
    JhiTrackerComponent.prototype.ngOnDestroy = function () {
        this.trackerService.unsubscribe();
    };
    return JhiTrackerComponent;
}());
JhiTrackerComponent = __decorate([
    core_1.Component({
        selector: 'jhi-tracker',
        template: __webpack_require__("./src/main/webapp/app/admin/tracker/tracker.component.html")
    }),
    __metadata("design:paramtypes", [shared_1.JhiTrackerService])
], JhiTrackerComponent);
exports.JhiTrackerComponent = JhiTrackerComponent;


/***/ }),

/***/ "./src/main/webapp/app/admin/tracker/tracker.route.ts":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var tracker_component_1 = __webpack_require__("./src/main/webapp/app/admin/tracker/tracker.component.ts");
exports.trackerRoute = {
    path: 'jhi-tracker',
    component: tracker_component_1.JhiTrackerComponent,
    data: {
        pageTitle: 'tracker.title'
    }
};


/***/ }),

/***/ "./src/main/webapp/app/admin/user-management/user-management-delete-dialog.component.html":
/***/ (function(module, exports) {

module.exports = "<form name=\"deleteForm\" (ngSubmit)=\"confirmDelete(user.login)\"> <div class=\"modal-header\"> <h4 class=\"modal-title\" jhiTranslate=\"entity.delete.title\">Confirm delete operation</h4> <button type=\"button\" class=\"close\" data-dismiss=\"modal\" aria-hidden=\"true\" (click)=\"clear()\">&times;</button> </div> <div class=\"modal-body\"> <jhi-alert-error></jhi-alert-error> <p jhiTranslate=\"userManagement.delete.question\" translateValues=\"{login: '{{user.login}}'}\">Are you sure you want to delete this User?</p> </div> <div class=\"modal-footer\"> <button type=\"button\" class=\"btn btn-secondary\" data-dismiss=\"modal\" (click)=\"clear()\"> <span class=\"fa fa-ban\"></span>&nbsp;<span jhiTranslate=\"entity.action.cancel\">Cancel</span> </button> <button type=\"submit\" class=\"btn btn-danger\"> <span class=\"fa fa-remove\"></span>&nbsp;<span jhiTranslate=\"entity.action.delete\">Delete</span> </button> </div> </form> ";

/***/ }),

/***/ "./src/main/webapp/app/admin/user-management/user-management-delete-dialog.component.ts":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = __webpack_require__(0);
var router_1 = __webpack_require__(7);
var ng_bootstrap_1 = __webpack_require__(9);
var ng_jhipster_1 = __webpack_require__(5);
var shared_1 = __webpack_require__("./src/main/webapp/app/shared/index.ts");
var user_modal_service_1 = __webpack_require__("./src/main/webapp/app/admin/user-management/user-modal.service.ts");
var UserMgmtDeleteDialogComponent = (function () {
    function UserMgmtDeleteDialogComponent(userService, activeModal, alertService, eventManager) {
        this.userService = userService;
        this.activeModal = activeModal;
        this.alertService = alertService;
        this.eventManager = eventManager;
    }
    UserMgmtDeleteDialogComponent.prototype.clear = function () {
        this.activeModal.dismiss('cancel');
    };
    UserMgmtDeleteDialogComponent.prototype.confirmDelete = function (login) {
        var _this = this;
        this.userService.delete(login).subscribe(function (response) {
            _this.eventManager.broadcast({ name: 'userListModification',
                content: 'Deleted a user' });
            _this.activeModal.dismiss(true);
        });
        this.alertService.success('userManagement.deleted', { param: login }, null);
    };
    return UserMgmtDeleteDialogComponent;
}());
UserMgmtDeleteDialogComponent = __decorate([
    core_1.Component({
        selector: 'jhi-user-mgmt-delete-dialog',
        template: __webpack_require__("./src/main/webapp/app/admin/user-management/user-management-delete-dialog.component.html")
    }),
    __metadata("design:paramtypes", [shared_1.UserService,
        ng_bootstrap_1.NgbActiveModal,
        ng_jhipster_1.AlertService,
        ng_jhipster_1.EventManager])
], UserMgmtDeleteDialogComponent);
exports.UserMgmtDeleteDialogComponent = UserMgmtDeleteDialogComponent;
var UserDeleteDialogComponent = (function () {
    function UserDeleteDialogComponent(route, userModalService) {
        this.route = route;
        this.userModalService = userModalService;
    }
    UserDeleteDialogComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.routeSub = this.route.params.subscribe(function (params) {
            _this.modalRef = _this.userModalService.open(UserMgmtDeleteDialogComponent, params['login']);
        });
    };
    UserDeleteDialogComponent.prototype.ngOnDestroy = function () {
        this.routeSub.unsubscribe();
    };
    return UserDeleteDialogComponent;
}());
UserDeleteDialogComponent = __decorate([
    core_1.Component({
        selector: 'jhi-user-delete-dialog',
        template: ''
    }),
    __metadata("design:paramtypes", [router_1.ActivatedRoute,
        user_modal_service_1.UserModalService])
], UserDeleteDialogComponent);
exports.UserDeleteDialogComponent = UserDeleteDialogComponent;


/***/ }),

/***/ "./src/main/webapp/app/admin/user-management/user-management-detail.component.html":
/***/ (function(module, exports) {

module.exports = "<div *ngIf=\"user\"> <h2> <span jhiTranslate=\"userManagement.detail.title\">User</span> [<b>{{user.login}}</b>] </h2> <dl class=\"row-md jh-entity-details\"> <dt><span jhiTranslate=\"userManagement.login\">Login</span></dt> <dd> <span>{{user.login}}</span> <span class=\"badge badge-danger\" *ngIf=\"!user.activated\" jhiTranslate=\"userManagement.deactivated\">Deactivated</span> <span class=\"badge badge-success\" *ngIf=\"user.activated\" jhiTranslate=\"userManagement.activated\">Activated</span> </dd> <dt><span jhiTranslate=\"userManagement.firstName\">First Name</span></dt> <dd>{{user.firstName}}</dd> <dt><span jhiTranslate=\"userManagement.lastName\">Last Name</span></dt> <dd>{{user.lastName}}</dd> <dt><span jhiTranslate=\"userManagement.email\">Email</span></dt> <dd>{{user.email}}</dd> <dt><span jhiTranslate=\"userManagement.langKey\">Lang Key</span></dt> <dd>{{user.langKey}}</dd> <dt><span jhiTranslate=\"userManagement.createdBy\">Created By</span></dt> <dd>{{user.createdBy}}</dd> <dt><span jhiTranslate=\"userManagement.createdDate\">Created Date</span></dt> <dd>{{user.createdDate | date:'dd/MM/yy HH:mm' }}</dd> <dt><span jhiTranslate=\"userManagement.lastModifiedBy\">Last Modified By</span></dt> <dd>{{user.lastModifiedBy}}</dd> <dt><span jhiTranslate=\"userManagement.lastModifiedDate\">Last Modified Date</span></dt> <dd>{{user.lastModifiedDate | date:'dd/MM/yy HH:mm'}}</dd> <dt><span jhiTranslate=\"userManagement.profiles\">Profiles</span></dt> <dd> <ul class=\"list-unstyled\"> <li *ngFor=\"let authority of user.authorities\"> <span class=\"badge badge-info\">{{authority}}</span> </li> </ul> </dd> </dl> <button type=\"submit\" routerLink=\"/user-management\" class=\"btn btn-info\"> <span class=\"fa fa-arrow-left\"></span>&nbsp;<span jhiTranslate=\"entity.action.back\"> Back</span> </button> </div> ";

/***/ }),

/***/ "./src/main/webapp/app/admin/user-management/user-management-detail.component.ts":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = __webpack_require__(0);
var router_1 = __webpack_require__(7);
var shared_1 = __webpack_require__("./src/main/webapp/app/shared/index.ts");
var UserMgmtDetailComponent = (function () {
    function UserMgmtDetailComponent(userService, route) {
        this.userService = userService;
        this.route = route;
    }
    UserMgmtDetailComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.subscription = this.route.params.subscribe(function (params) {
            _this.load(params['login']);
        });
    };
    UserMgmtDetailComponent.prototype.load = function (login) {
        var _this = this;
        this.userService.find(login).subscribe(function (user) {
            _this.user = user;
        });
    };
    UserMgmtDetailComponent.prototype.ngOnDestroy = function () {
        this.subscription.unsubscribe();
    };
    return UserMgmtDetailComponent;
}());
UserMgmtDetailComponent = __decorate([
    core_1.Component({
        selector: 'jhi-user-mgmt-detail',
        template: __webpack_require__("./src/main/webapp/app/admin/user-management/user-management-detail.component.html")
    }),
    __metadata("design:paramtypes", [shared_1.UserService,
        router_1.ActivatedRoute])
], UserMgmtDetailComponent);
exports.UserMgmtDetailComponent = UserMgmtDetailComponent;


/***/ }),

/***/ "./src/main/webapp/app/admin/user-management/user-management-dialog.component.html":
/***/ (function(module, exports) {

module.exports = "<form name=\"editForm\" role=\"form\" novalidate (ngSubmit)=\"save()\" #editForm=\"ngForm\"> <div class=\"modal-header\"> <h4 class=\"modal-title\" id=\"myUserLabel\" jhiTranslate=\"userManagement.home.createOrEditLabel\"> Create or edit a User</h4> <button type=\"button\" class=\"close\" data-dismiss=\"modal\" aria-hidden=\"true\" (click)=\"clear()\">&times;</button> </div> <div class=\"modal-body\"> <jhi-alert-error></jhi-alert-error> <div class=\"form-group\"> <label jhiTranslate=\"global.field.id\">ID</label> <input type=\"text\" class=\"form-control\" name=\"id\" [(ngModel)]=\"user.id\" readonly=\"readonly\"> </div> <div class=\"form-group\"> <label class=\"form-control-label\" jhiTranslate=\"userManagement.login\">Login</label> <input type=\"text\" class=\"form-control\" name=\"login\" #loginInput=\"ngModel\" [(ngModel)]=\"user.login\" required minlength=\"1\" maxlength=\"50\" pattern=\"^[_'.@A-Za-z0-9-]*$\"> <div *ngIf=\"loginInput.dirty && loginInput.invalid\"> <small class=\"form-text text-danger\" *ngIf=\"loginInput.errors.required\" jhiTranslate=\"entity.validation.required\"> This field is required. </small> <small class=\"form-text text-danger\" *ngIf=\"loginInput.errors.maxlength\" jhiTranslate=\"entity.validation.maxlength\" translate-value-max=\"50\"> This field cannot be longer than 50 characters. </small> </div> </div> <div class=\"form-group\"> <label class=\"form-control-label\" jhiTranslate=\"userManagement.firstName\">First Name</label> <input type=\"text\" class=\"form-control\" name=\"firstName\" #firstNameInput=\"ngModel\" [(ngModel)]=\"user.firstName\" maxlength=\"50\"> <div *ngIf=\"firstNameInput.dirty && firstNameInput.invalid\"> <small class=\"form-text text-danger\" *ngIf=\"firstNameInput.errors.maxlength\" jhiTranslate=\"entity.validation.maxlength\" translate-value-max=\"50\"> This field cannot be longer than 50 characters. </small> </div> </div> <div class=\"form-group\"> <label jhiTranslate=\"userManagement.lastName\">Last Name</label> <input type=\"text\" class=\"form-control\" name=\"lastName\" #lastNameInput=\"ngModel\" [(ngModel)]=\"user.lastName\" maxlength=\"50\"> <div *ngIf=\"lastNameInput.dirty && lastNameInput.invalid\"> <small class=\"form-text text-danger\" *ngIf=\"lastNameInput.errors.maxlength\" jhiTranslate=\"entity.validation.maxlength\" translate-value-max=\"50\"> This field cannot be longer than 50 characters. </small> </div> </div> <div class=\"form-group\"> <label class=\"form-control-label\" jhiTranslate=\"userManagement.email\">Email</label> <input type=\"email\" class=\"form-control\" name=\"email\" #emailInput=\"ngModel\" [(ngModel)]=\"user.email\" minlength=\"5\" required maxlength=\"100\"> <div *ngIf=\"emailInput.dirty && emailInput.invalid\"> <small class=\"form-text text-danger\" *ngIf=\"emailInput.errors.required\" jhiTranslate=\"entity.validation.required\"> This field is required. </small> <small class=\"form-text text-danger\" *ngIf=\"emailInput.errors.maxlength\" jhiTranslate=\"entity.validation.maxlength\" translate-value-max=\"100\"> This field cannot be longer than 100 characters. </small> <small class=\"form-text text-danger\" *ngIf=\"emailInput.errors.minlength\" jhiTranslate=\"entity.validation.minlength\" translate-value-min=\"5\"> This field is required to be at least 5 characters. </small> <small class=\"form-text text-danger\" *ngIf=\"emailInput.errors.email\" jhiTranslate=\"global.messages.validate.email.invalid\"> Your email is invalid. </small> </div> </div> <div class=\"form-check\"> <label class=\"form-check-label\" for=\"activated\"> <input class=\"form-check-input\" [disabled]=\"user.id === null\" type=\"checkbox\" id=\"activated\" name=\"activated\" [(ngModel)]=\"user.activated\"> <span jhiTranslate=\"userManagement.activated\">Activated</span> </label> </div> <div class=\"form-group\" *ngIf=\"languages && languages.length > 0\"> <label jhiTranslate=\"userManagement.langKey\">Lang Key</label> <select class=\"form-control\" id=\"langKey\" name=\"langKey\" [(ngModel)]=\"user.langKey\"> <option *ngFor=\"let language of languages\" [value]=\"language\">{{language | findLanguageFromKey}}</option> </select> </div> <div class=\"form-group\"> <label jhiTranslate=\"userManagement.profiles\">Profiles</label> <select class=\"form-control\" multiple=\"multiple\" name=\"authority\" [(ngModel)]=\"user.authorities\"> <option *ngFor=\"let authority of authorities\" [value]=\"authority\">{{authority}}</option> </select> </div> </div> <div class=\"modal-footer\"> <button type=\"button\" class=\"btn btn-secondary\" data-dismiss=\"modal\" (click)=\"clear()\"> <span class=\"fa fa-ban\"></span>&nbsp;<span jhiTranslate=\"entity.action.cancel\">Cancel</span> </button> <button type=\"submit\" [disabled]=\"editForm.form.invalid || isSaving\" class=\"btn btn-primary\"> <span class=\"fa fa-floppy-o\"></span>&nbsp;<span jhiTranslate=\"entity.action.save\">Save</span> </button> </div> </form> ";

/***/ }),

/***/ "./src/main/webapp/app/admin/user-management/user-management-dialog.component.ts":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = __webpack_require__(0);
var router_1 = __webpack_require__(7);
var ng_bootstrap_1 = __webpack_require__(9);
var ng_jhipster_1 = __webpack_require__(5);
var user_modal_service_1 = __webpack_require__("./src/main/webapp/app/admin/user-management/user-modal.service.ts");
var shared_1 = __webpack_require__("./src/main/webapp/app/shared/index.ts");
var UserMgmtDialogComponent = (function () {
    function UserMgmtDialogComponent(activeModal, languageHelper, userService, alertService, eventManager) {
        this.activeModal = activeModal;
        this.languageHelper = languageHelper;
        this.userService = userService;
        this.alertService = alertService;
        this.eventManager = eventManager;
    }
    UserMgmtDialogComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.isSaving = false;
        this.authorities = [];
        this.userService.authorities().subscribe(function (authorities) {
            _this.authorities = authorities;
        });
        this.languageHelper.getAll().then(function (languages) {
            _this.languages = languages;
        });
    };
    UserMgmtDialogComponent.prototype.clear = function () {
        this.activeModal.dismiss('cancel');
    };
    UserMgmtDialogComponent.prototype.save = function () {
        var _this = this;
        this.isSaving = true;
        if (this.user.id !== null) {
            this.userService.update(this.user).subscribe(function (response) { return _this.onSaveSuccess(response, false); }, function () { return _this.onSaveError(); });
        }
        else {
            this.userService.create(this.user).subscribe(function (response) { return _this.onSaveSuccess(response, true); }, function () { return _this.onSaveError(); });
        }
    };
    UserMgmtDialogComponent.prototype.onSaveSuccess = function (result, isCreated) {
        this.alertService.success(isCreated ? 'userManagement.created'
            : 'userManagement.updated', { param: result.json.login }, null);
        this.eventManager.broadcast({ name: 'userListModification', content: 'OK' });
        this.isSaving = false;
        this.activeModal.dismiss(result);
    };
    UserMgmtDialogComponent.prototype.onSaveError = function () {
        this.isSaving = false;
    };
    return UserMgmtDialogComponent;
}());
UserMgmtDialogComponent = __decorate([
    core_1.Component({
        selector: 'jhi-user-mgmt-dialog',
        template: __webpack_require__("./src/main/webapp/app/admin/user-management/user-management-dialog.component.html")
    }),
    __metadata("design:paramtypes", [ng_bootstrap_1.NgbActiveModal,
        shared_1.JhiLanguageHelper,
        shared_1.UserService,
        ng_jhipster_1.AlertService,
        ng_jhipster_1.EventManager])
], UserMgmtDialogComponent);
exports.UserMgmtDialogComponent = UserMgmtDialogComponent;
var UserDialogComponent = (function () {
    function UserDialogComponent(route, userModalService) {
        this.route = route;
        this.userModalService = userModalService;
    }
    UserDialogComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.routeSub = this.route.params.subscribe(function (params) {
            if (params['login']) {
                _this.modalRef = _this.userModalService.open(UserMgmtDialogComponent, params['login']);
            }
            else {
                _this.modalRef = _this.userModalService.open(UserMgmtDialogComponent);
            }
        });
    };
    UserDialogComponent.prototype.ngOnDestroy = function () {
        this.routeSub.unsubscribe();
    };
    return UserDialogComponent;
}());
UserDialogComponent = __decorate([
    core_1.Component({
        selector: 'jhi-user-dialog',
        template: ''
    }),
    __metadata("design:paramtypes", [router_1.ActivatedRoute,
        user_modal_service_1.UserModalService])
], UserDialogComponent);
exports.UserDialogComponent = UserDialogComponent;


/***/ }),

/***/ "./src/main/webapp/app/admin/user-management/user-management.component.html":
/***/ (function(module, exports) {

module.exports = "<div> <h2> <span jhiTranslate=\"userManagement.home.title\">Users</span> <button class=\"btn btn-primary float-right\" [routerLink]=\"['/', { outlets: { popup: ['user-management-new'] } }]\"> <span class=\"fa fa-plus\"></span> <span jhiTranslate=\"userManagement.home.createLabel\">Create a new User</span> </button> </h2> <jhi-alert></jhi-alert> <div class=\"table-responsive\" *ngIf=\"users\"> <table class=\"table table-striped\"> <thead> <tr jhiSort [(predicate)]=\"predicate\" [(ascending)]=\"reverse\" [callback]=\"transition.bind(this)\"> <th jhiSortBy=\"id\"><span jhiTranslate=\"global.field.id\">ID</span><span class=\"fa fa-sort\"></span></th> <th jhiSortBy=\"login\"><span jhiTranslate=\"userManagement.login\">Login</span> <span class=\"fa fa-sort\"></span></th> <th jhiSortBy=\"email\"><span jhiTranslate=\"userManagement.email\">Email</span> <span class=\"fa fa-sort\"></span></th> <th></th> <th jhiSortBy=\"langKey\"> <span jhiTranslate=\"userManagement.langKey\">Lang Key</span> <span class=\"fa fa-sort\"></span></th> <th><span jhiTranslate=\"userManagement.profiles\">Profiles</span></th> <th jhiSortBy=\"createdDate\"><span jhiTranslate=\"userManagement.createdDate\">Created Date</span> <span class=\"fa fa-sort\"></span></th> <th jhiSortBy=\"lastModifiedBy\"><span jhiTranslate=\"userManagement.lastModifiedBy\">Last Modified By</span> <span class=\"fa fa-sort\"></span></th> <th jhiSortBy=\"lastModifiedDate\"><span jhiTranslate=\"userManagement.lastModifiedDate\">Last Modified Date</span> <span class=\"fa fa-sort\"></span></th> <th></th> </tr> </thead> <tbody *ngIf=\"users\"> <tr *ngFor=\"let user of users; trackBy: trackIdentity\"> <td><a [routerLink]=\"['../user-management', user.login]\">{{user.id}}</a></td> <td>{{user.login}}</td> <td>{{user.email}}</td> <td> <span class=\"badge badge-danger hand\" (click)=\"setActive(user, true)\" *ngIf=\"!user.activated\" jhiTranslate=\"userManagement.deactivated\">Deactivated</span> <span class=\"badge badge-success hand\" (click)=\"setActive(user, false)\" *ngIf=\"user.activated\" jhiTranslate=\"userManagement.activated\">Activated</span> </td> <td>{{user.langKey}}</td> <td> <div *ngFor=\"let authority of user.authorities\"> <span class=\"tag tag-info\">{{ authority }}</span> </div> </td> <td>{{user.createdDate | date:'dd/MM/yy HH:mm'}}</td> <td>{{user.lastModifiedBy}}</td> <td>{{user.lastModifiedDate | date:'dd/MM/yy HH:mm'}}</td> <td class=\"text-right\"> <div class=\"btn-group flex-btn-group-container\"> <button type=\"submit\" [routerLink]=\"['../user-management', user.login]\" class=\"btn btn-info btn-sm\"> <span class=\"fa fa-eye\"></span> <span class=\"hidden-md-down\" jhiTranslate=\"entity.action.view\">View</span> </button> <button type=\"submit\" [routerLink]=\"['/', { outlets: { popup: 'user-management/'+ user.login + '/edit'} }]\" replaceUrl=\"true\" class=\"btn btn-primary btn-sm\"> <span class=\"fa fa-pencil\"></span> <span class=\"hidden-md-down\" jhiTranslate=\"entity.action.edit\">Edit</span> </button> <button type=\"submit\" [routerLink]=\"['/', { outlets: { popup: 'user-management/'+ user.login + '/delete'} }]\" replaceUrl=\"true\" class=\"btn btn-danger btn-sm\" [disabled]=\"currentAccount.login==user.login\"> <span class=\"fa fa-remove\"></span> <span class=\"hidden-md-down\" jhiTranslate=\"entity.action.delete\">Delete</span> </button> </div> </td> </tr> </tbody> </table> </div> <div *ngIf=\"users\"> <div class=\"row justify-content-center\"> <jhi-item-count [page]=\"page\" [total]=\"queryCount\" [itemsPerPage]=\"itemsPerPage\"></jhi-item-count> </div> <div class=\"row justify-content-center\"> <ngb-pagination [collectionSize]=\"totalItems\" [(page)]=\"page\" (pageChange)=\"loadPage(page)\"></ngb-pagination> </div> </div> </div> ";

/***/ }),

/***/ "./src/main/webapp/app/admin/user-management/user-management.component.ts":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = __webpack_require__(0);
var router_1 = __webpack_require__(7);
var ng_jhipster_1 = __webpack_require__(5);
var shared_1 = __webpack_require__("./src/main/webapp/app/shared/index.ts");
var uib_pagination_config_1 = __webpack_require__("./src/main/webapp/app/blocks/config/uib-pagination.config.ts");
var UserMgmtComponent = (function () {
    function UserMgmtComponent(userService, parseLinks, alertService, principal, eventManager, paginationUtil, paginationConfig, activatedRoute, router) {
        var _this = this;
        this.userService = userService;
        this.parseLinks = parseLinks;
        this.alertService = alertService;
        this.principal = principal;
        this.eventManager = eventManager;
        this.paginationUtil = paginationUtil;
        this.paginationConfig = paginationConfig;
        this.activatedRoute = activatedRoute;
        this.router = router;
        this.itemsPerPage = shared_1.ITEMS_PER_PAGE;
        this.routeData = this.activatedRoute.data.subscribe(function (data) {
            _this.page = data['pagingParams'].page;
            _this.previousPage = data['pagingParams'].page;
            _this.reverse = data['pagingParams'].ascending;
            _this.predicate = data['pagingParams'].predicate;
        });
    }
    UserMgmtComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.principal.identity().then(function (account) {
            _this.currentAccount = account;
            _this.loadAll();
            _this.registerChangeInUsers();
        });
    };
    UserMgmtComponent.prototype.ngOnDestroy = function () {
        this.routeData.unsubscribe();
    };
    UserMgmtComponent.prototype.registerChangeInUsers = function () {
        var _this = this;
        this.eventManager.subscribe('userListModification', function (response) { return _this.loadAll(); });
    };
    UserMgmtComponent.prototype.setActive = function (user, isActivated) {
        var _this = this;
        user.activated = isActivated;
        this.userService.update(user).subscribe(function (response) {
            if (response.status === 200) {
                _this.error = null;
                _this.success = 'OK';
                _this.loadAll();
            }
            else {
                _this.success = null;
                _this.error = 'ERROR';
            }
        });
    };
    UserMgmtComponent.prototype.loadAll = function () {
        var _this = this;
        this.userService.query({
            page: this.page - 1,
            size: this.itemsPerPage,
            sort: this.sort()
        }).subscribe(function (res) { return _this.onSuccess(res.json, res.headers); }, function (res) { return _this.onError(res.json); });
    };
    UserMgmtComponent.prototype.trackIdentity = function (index, item) {
        return item.id;
    };
    UserMgmtComponent.prototype.sort = function () {
        var result = [this.predicate + ',' + (this.reverse ? 'asc' : 'desc')];
        if (this.predicate !== 'id') {
            result.push('id');
        }
        return result;
    };
    UserMgmtComponent.prototype.loadPage = function (page) {
        if (page !== this.previousPage) {
            this.previousPage = page;
            this.transition();
        }
    };
    UserMgmtComponent.prototype.transition = function () {
        this.router.navigate(['/user-management'], {
            queryParams: {
                page: this.page,
                sort: this.predicate + ',' + (this.reverse ? 'asc' : 'desc')
            }
        });
        this.loadAll();
    };
    UserMgmtComponent.prototype.onSuccess = function (data, headers) {
        this.links = this.parseLinks.parse(headers.get('link'));
        this.totalItems = headers.get('X-Total-Count');
        this.queryCount = this.totalItems;
        this.users = data;
    };
    UserMgmtComponent.prototype.onError = function (error) {
        this.alertService.error(error.error, error.message, null);
    };
    return UserMgmtComponent;
}());
UserMgmtComponent = __decorate([
    core_1.Component({
        selector: 'jhi-user-mgmt',
        template: __webpack_require__("./src/main/webapp/app/admin/user-management/user-management.component.html")
    }),
    __metadata("design:paramtypes", [shared_1.UserService,
        ng_jhipster_1.ParseLinks,
        ng_jhipster_1.AlertService,
        shared_1.Principal,
        ng_jhipster_1.EventManager,
        ng_jhipster_1.PaginationUtil,
        uib_pagination_config_1.PaginationConfig,
        router_1.ActivatedRoute,
        router_1.Router])
], UserMgmtComponent);
exports.UserMgmtComponent = UserMgmtComponent;


/***/ }),

/***/ "./src/main/webapp/app/admin/user-management/user-management.route.ts":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = __webpack_require__(0);
var ng_jhipster_1 = __webpack_require__(5);
var user_management_component_1 = __webpack_require__("./src/main/webapp/app/admin/user-management/user-management.component.ts");
var user_management_detail_component_1 = __webpack_require__("./src/main/webapp/app/admin/user-management/user-management-detail.component.ts");
var user_management_dialog_component_1 = __webpack_require__("./src/main/webapp/app/admin/user-management/user-management-dialog.component.ts");
var user_management_delete_dialog_component_1 = __webpack_require__("./src/main/webapp/app/admin/user-management/user-management-delete-dialog.component.ts");
var shared_1 = __webpack_require__("./src/main/webapp/app/shared/index.ts");
var UserResolve = (function () {
    function UserResolve(principal) {
        this.principal = principal;
    }
    UserResolve.prototype.canActivate = function () {
        var _this = this;
        return this.principal.identity().then(function (account) { return _this.principal.hasAnyAuthority(['ROLE_ADMIN']); });
    };
    return UserResolve;
}());
UserResolve = __decorate([
    core_1.Injectable(),
    __metadata("design:paramtypes", [shared_1.Principal])
], UserResolve);
exports.UserResolve = UserResolve;
var UserResolvePagingParams = (function () {
    function UserResolvePagingParams(paginationUtil) {
        this.paginationUtil = paginationUtil;
    }
    UserResolvePagingParams.prototype.resolve = function (route, state) {
        var page = route.queryParams['page'] ? route.queryParams['page'] : '1';
        var sort = route.queryParams['sort'] ? route.queryParams['sort'] : 'id,asc';
        return {
            page: this.paginationUtil.parsePage(page),
            predicate: this.paginationUtil.parsePredicate(sort),
            ascending: this.paginationUtil.parseAscending(sort)
        };
    };
    return UserResolvePagingParams;
}());
UserResolvePagingParams = __decorate([
    core_1.Injectable(),
    __metadata("design:paramtypes", [ng_jhipster_1.PaginationUtil])
], UserResolvePagingParams);
exports.UserResolvePagingParams = UserResolvePagingParams;
exports.userMgmtRoute = [
    {
        path: 'user-management',
        component: user_management_component_1.UserMgmtComponent,
        resolve: {
            'pagingParams': UserResolvePagingParams
        },
        data: {
            pageTitle: 'userManagement.home.title'
        }
    },
    {
        path: 'user-management/:login',
        component: user_management_detail_component_1.UserMgmtDetailComponent,
        data: {
            pageTitle: 'userManagement.home.title'
        }
    }
];
exports.userDialogRoute = [
    {
        path: 'user-management-new',
        component: user_management_dialog_component_1.UserDialogComponent,
        outlet: 'popup'
    },
    {
        path: 'user-management/:login/edit',
        component: user_management_dialog_component_1.UserDialogComponent,
        outlet: 'popup'
    },
    {
        path: 'user-management/:login/delete',
        component: user_management_delete_dialog_component_1.UserDeleteDialogComponent,
        outlet: 'popup'
    }
];


/***/ }),

/***/ "./src/main/webapp/app/admin/user-management/user-modal.service.ts":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = __webpack_require__(0);
var router_1 = __webpack_require__(7);
var ng_bootstrap_1 = __webpack_require__(9);
var shared_1 = __webpack_require__("./src/main/webapp/app/shared/index.ts");
var UserModalService = (function () {
    function UserModalService(modalService, router, userService) {
        this.modalService = modalService;
        this.router = router;
        this.userService = userService;
        this.isOpen = false;
    }
    UserModalService.prototype.open = function (component, login) {
        var _this = this;
        if (this.isOpen) {
            return;
        }
        this.isOpen = true;
        if (login) {
            this.userService.find(login).subscribe(function (user) { return _this.userModalRef(component, user); });
        }
        else {
            return this.userModalRef(component, new shared_1.User());
        }
    };
    UserModalService.prototype.userModalRef = function (component, user) {
        var _this = this;
        var modalRef = this.modalService.open(component, { size: 'lg', backdrop: 'static' });
        modalRef.componentInstance.user = user;
        modalRef.result.then(function (result) {
            _this.router.navigate([{ outlets: { popup: null } }], { replaceUrl: true });
            _this.isOpen = false;
        }, function (reason) {
            _this.router.navigate([{ outlets: { popup: null } }], { replaceUrl: true });
            _this.isOpen = false;
        });
        return modalRef;
    };
    return UserModalService;
}());
UserModalService = __decorate([
    core_1.Injectable(),
    __metadata("design:paramtypes", [ng_bootstrap_1.NgbModal,
        router_1.Router,
        shared_1.UserService])
], UserModalService);
exports.UserModalService = UserModalService;


/***/ }),

/***/ "./src/main/webapp/app/app.constants.ts":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
// DO NOT EDIT THIS FILE, EDIT THE WEBPACK COMMON CONFIG INSTEAD, WHICH WILL MODIFY THIS FILE
/* tslint:disable */
var _VERSION = '0.0.0'; // This value will be overwritten by webpack
var _DEBUG_INFO_ENABLED = true; // This value will be overwritten by webpack
_VERSION = "0.0.0";
_DEBUG_INFO_ENABLED = true;
/* tslint:enable */
exports.VERSION = _VERSION;
exports.DEBUG_INFO_ENABLED = _DEBUG_INFO_ENABLED;


/***/ }),

/***/ "./src/main/webapp/app/app.main.ts":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var platform_browser_dynamic_1 = __webpack_require__(21);
var prod_config_1 = __webpack_require__("./src/main/webapp/app/blocks/config/prod.config.ts");
var app_module_1 = __webpack_require__("./src/main/webapp/app/app.module.ts");
prod_config_1.ProdConfig();
if (true) {
    module['hot'].accept();
}
platform_browser_dynamic_1.platformBrowserDynamic().bootstrapModule(app_module_1.PacketAppAppModule);


/***/ }),

/***/ "./src/main/webapp/app/app.module.ts":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
__webpack_require__(25);
var core_1 = __webpack_require__(0);
var platform_browser_1 = __webpack_require__(16);
var ng2_webstorage_1 = __webpack_require__(12);
var shared_1 = __webpack_require__("./src/main/webapp/app/shared/index.ts");
var home_module_1 = __webpack_require__("./src/main/webapp/app/home/home.module.ts");
var admin_module_1 = __webpack_require__("./src/main/webapp/app/admin/admin.module.ts");
var account_module_1 = __webpack_require__("./src/main/webapp/app/account/account.module.ts");
var entity_module_1 = __webpack_require__("./src/main/webapp/app/entities/entity.module.ts");
var http_provider_1 = __webpack_require__("./src/main/webapp/app/blocks/interceptor/http.provider.ts");
var uib_pagination_config_1 = __webpack_require__("./src/main/webapp/app/blocks/config/uib-pagination.config.ts");
var layouts_1 = __webpack_require__("./src/main/webapp/app/layouts/index.ts");
var PacketAppAppModule = (function () {
    function PacketAppAppModule() {
    }
    return PacketAppAppModule;
}());
PacketAppAppModule = __decorate([
    core_1.NgModule({
        imports: [
            platform_browser_1.BrowserModule,
            layouts_1.LayoutRoutingModule,
            ng2_webstorage_1.Ng2Webstorage.forRoot({ prefix: 'jhi', separator: '-' }),
            shared_1.PacketAppSharedModule,
            home_module_1.PacketAppHomeModule,
            admin_module_1.PacketAppAdminModule,
            account_module_1.PacketAppAccountModule,
            entity_module_1.PacketAppEntityModule
        ],
        declarations: [
            layouts_1.JhiMainComponent,
            layouts_1.NavbarComponent,
            layouts_1.ErrorComponent,
            layouts_1.PageRibbonComponent,
            layouts_1.ActiveMenuDirective,
            layouts_1.FooterComponent
        ],
        providers: [
            layouts_1.ProfileService,
            http_provider_1.customHttpProvider(),
            uib_pagination_config_1.PaginationConfig,
            shared_1.UserRouteAccessService
        ],
        bootstrap: [layouts_1.JhiMainComponent]
    })
], PacketAppAppModule);
exports.PacketAppAppModule = PacketAppAppModule;


/***/ }),

/***/ "./src/main/webapp/app/app.route.ts":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var layouts_1 = __webpack_require__("./src/main/webapp/app/layouts/index.ts");
exports.navbarRoute = {
    path: '',
    component: layouts_1.NavbarComponent,
    outlet: 'navbar'
};


/***/ }),

/***/ "./src/main/webapp/app/blocks/config/prod.config.ts":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = __webpack_require__(0);
var app_constants_1 = __webpack_require__("./src/main/webapp/app/app.constants.ts");
function ProdConfig() {
    // disable debug data on prod profile to improve performance
    if (!app_constants_1.DEBUG_INFO_ENABLED) {
        core_1.enableProdMode();
    }
}
exports.ProdConfig = ProdConfig;


/***/ }),

/***/ "./src/main/webapp/app/blocks/config/uib-pagination.config.ts":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
var shared_1 = __webpack_require__("./src/main/webapp/app/shared/index.ts");
var core_1 = __webpack_require__(0);
var ng_bootstrap_1 = __webpack_require__(9);
var PaginationConfig = (function () {
    function PaginationConfig(config) {
        this.config = config;
        config.boundaryLinks = true;
        config.maxSize = 5;
        config.pageSize = shared_1.ITEMS_PER_PAGE;
        config.size = 'sm';
    }
    return PaginationConfig;
}());
PaginationConfig = __decorate([
    core_1.Injectable(),
    __metadata("design:paramtypes", [ng_bootstrap_1.NgbPaginationConfig])
], PaginationConfig);
exports.PaginationConfig = PaginationConfig;


/***/ }),

/***/ "./src/main/webapp/app/blocks/interceptor/auth-expired.interceptor.ts":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __extends = (this && this.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
Object.defineProperty(exports, "__esModule", { value: true });
var ng_jhipster_1 = __webpack_require__(5);
var Observable_1 = __webpack_require__(14);
var login_service_1 = __webpack_require__("./src/main/webapp/app/shared/login/login.service.ts");
var AuthExpiredInterceptor = (function (_super) {
    __extends(AuthExpiredInterceptor, _super);
    function AuthExpiredInterceptor(injector) {
        var _this = _super.call(this) || this;
        _this.injector = injector;
        return _this;
    }
    AuthExpiredInterceptor.prototype.requestIntercept = function (options) {
        return options;
    };
    AuthExpiredInterceptor.prototype.responseIntercept = function (observable) {
        var _this = this;
        return observable.catch(function (error, source) {
            if (error.status === 401) {
                var loginService = _this.injector.get(login_service_1.LoginService);
                loginService.logout();
            }
            return Observable_1.Observable.throw(error);
        });
    };
    return AuthExpiredInterceptor;
}(ng_jhipster_1.HttpInterceptor));
exports.AuthExpiredInterceptor = AuthExpiredInterceptor;


/***/ }),

/***/ "./src/main/webapp/app/blocks/interceptor/auth.interceptor.ts":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __extends = (this && this.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
Object.defineProperty(exports, "__esModule", { value: true });
var ng_jhipster_1 = __webpack_require__(5);
var AuthInterceptor = (function (_super) {
    __extends(AuthInterceptor, _super);
    function AuthInterceptor(localStorage, sessionStorage) {
        var _this = _super.call(this) || this;
        _this.localStorage = localStorage;
        _this.sessionStorage = sessionStorage;
        return _this;
    }
    AuthInterceptor.prototype.requestIntercept = function (options) {
        var token = this.localStorage.retrieve('authenticationToken') || this.sessionStorage.retrieve('authenticationToken');
        if (!!token) {
            options.headers.append('Authorization', 'Bearer ' + token);
        }
        return options;
    };
    AuthInterceptor.prototype.responseIntercept = function (observable) {
        return observable; // by pass
    };
    return AuthInterceptor;
}(ng_jhipster_1.HttpInterceptor));
exports.AuthInterceptor = AuthInterceptor;


/***/ }),

/***/ "./src/main/webapp/app/blocks/interceptor/errorhandler.interceptor.ts":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __extends = (this && this.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
Object.defineProperty(exports, "__esModule", { value: true });
var ng_jhipster_1 = __webpack_require__(5);
var Observable_1 = __webpack_require__(14);
var ErrorHandlerInterceptor = (function (_super) {
    __extends(ErrorHandlerInterceptor, _super);
    function ErrorHandlerInterceptor(eventManager) {
        var _this = _super.call(this) || this;
        _this.eventManager = eventManager;
        return _this;
    }
    ErrorHandlerInterceptor.prototype.requestIntercept = function (options) {
        return options;
    };
    ErrorHandlerInterceptor.prototype.responseIntercept = function (observable) {
        var _this = this;
        return observable.catch(function (error) {
            if (!(error.status === 401 && (error.text() === '' ||
                (error.json().path && error.json().path.indexOf('/api/account') === 0)))) {
                _this.eventManager.broadcast({ name: 'packetApp.httpError', content: error });
            }
            return Observable_1.Observable.throw(error);
        });
    };
    return ErrorHandlerInterceptor;
}(ng_jhipster_1.HttpInterceptor));
exports.ErrorHandlerInterceptor = ErrorHandlerInterceptor;


/***/ }),

/***/ "./src/main/webapp/app/blocks/interceptor/http.provider.ts":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = __webpack_require__(0);
var http_1 = __webpack_require__(8);
var ng_jhipster_1 = __webpack_require__(5);
var auth_interceptor_1 = __webpack_require__("./src/main/webapp/app/blocks/interceptor/auth.interceptor.ts");
var ng2_webstorage_1 = __webpack_require__(12);
var auth_expired_interceptor_1 = __webpack_require__("./src/main/webapp/app/blocks/interceptor/auth-expired.interceptor.ts");
var errorhandler_interceptor_1 = __webpack_require__("./src/main/webapp/app/blocks/interceptor/errorhandler.interceptor.ts");
var notification_interceptor_1 = __webpack_require__("./src/main/webapp/app/blocks/interceptor/notification.interceptor.ts");
function interceptableFactory(backend, defaultOptions, localStorage, sessionStorage, injector, eventManager) {
    return new ng_jhipster_1.InterceptableHttp(backend, defaultOptions, [
        new auth_interceptor_1.AuthInterceptor(localStorage, sessionStorage),
        new auth_expired_interceptor_1.AuthExpiredInterceptor(injector),
        // Other interceptors can be added here
        new errorhandler_interceptor_1.ErrorHandlerInterceptor(eventManager),
        new notification_interceptor_1.NotificationInterceptor()
    ]);
}
exports.interceptableFactory = interceptableFactory;
;
function customHttpProvider() {
    return {
        provide: http_1.Http,
        useFactory: interceptableFactory,
        deps: [
            http_1.XHRBackend,
            http_1.RequestOptions,
            ng2_webstorage_1.LocalStorageService,
            ng2_webstorage_1.SessionStorageService,
            core_1.Injector,
            ng_jhipster_1.EventManager
        ]
    };
}
exports.customHttpProvider = customHttpProvider;
;


/***/ }),

/***/ "./src/main/webapp/app/blocks/interceptor/notification.interceptor.ts":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __extends = (this && this.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
Object.defineProperty(exports, "__esModule", { value: true });
var ng_jhipster_1 = __webpack_require__(5);
var Observable_1 = __webpack_require__(14);
var NotificationInterceptor = (function (_super) {
    __extends(NotificationInterceptor, _super);
    function NotificationInterceptor() {
        return _super.call(this) || this;
    }
    NotificationInterceptor.prototype.requestIntercept = function (options) {
        return options;
    };
    NotificationInterceptor.prototype.responseIntercept = function (observable) {
        return observable.catch(function (error) {
            var arr = Array.from(error.headers._headers);
            var headers = [];
            var i;
            for (i = 0; i < arr.length; i++) {
                if (arr[i][0].endsWith('app-alert') || arr[i][0].endsWith('app-params')) {
                    headers.push(arr[i][0]);
                }
            }
            headers.sort();
            var alertKey = headers.length >= 1 ? error.headers.get(headers[0]) : null;
            if (typeof alertKey === 'string') {
                // AlertService.success(alertKey, { param: response.headers(headers[1])});
            }
            return Observable_1.Observable.throw(error);
        });
    };
    return NotificationInterceptor;
}(ng_jhipster_1.HttpInterceptor));
exports.NotificationInterceptor = NotificationInterceptor;


/***/ }),

/***/ "./src/main/webapp/app/entities/entity.module.ts":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = __webpack_require__(0);
/* jhipster-needle-add-entity-module-import - JHipster will add entity modules imports here */
var PacketAppEntityModule = (function () {
    function PacketAppEntityModule() {
    }
    return PacketAppEntityModule;
}());
PacketAppEntityModule = __decorate([
    core_1.NgModule({
        imports: [],
        declarations: [],
        entryComponents: [],
        providers: [],
        schemas: [core_1.CUSTOM_ELEMENTS_SCHEMA]
    })
], PacketAppEntityModule);
exports.PacketAppEntityModule = PacketAppEntityModule;


/***/ }),

/***/ "./src/main/webapp/app/home/home.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"row\"> <div class=\"col-md-3\"> <span class=\"hipster img-fluid img-rounded\"></span> </div> <div class=\"col-md-9\"> <h1 class=\"display-4\" jhiTranslate=\"home.title\">Welcome, Java Hipster!</h1> <p class=\"lead\" jhiTranslate=\"home.subtitle\">This is your homepage</p> <div [ngSwitch]=\"isAuthenticated()\"> <div class=\"alert alert-success\" *ngSwitchCase=\"true\"> <span *ngIf=\"account\" jhiTranslate=\"home.logged.message\" translateValues=\"{username: '{{account.login}}'}\"> You are logged in as user \"{{account.login}}\". </span> </div> <div class=\"alert alert-warning\" *ngSwitchCase=\"false\"> <span jhiTranslate=\"global.messages.info.authenticated.prefix\">If you want to </span> <a class=\"alert-link\" (click)=\"login()\" jhiTranslate=\"global.messages.info.authenticated.link\">sign in</a><span jhiTranslate=\"global.messages.info.authenticated.suffix\">, you can try the default accounts:<br/>- Administrator (login=\"admin\" and password=\"admin\") <br/>- User (login=\"user\" and password=\"user\").</span> </div> <div class=\"alert alert-warning\" *ngSwitchCase=\"false\"> <span jhiTranslate=\"global.messages.info.register.noaccount\">You don't have an account yet?</span> <a class=\"alert-link\" routerLink=\"register\" jhiTranslate=\"global.messages.info.register.link\">Register a new account</a> </div> </div> <p jhiTranslate=\"home.question\"> If you have any question on JHipster: </p> <ul> <li><a href=\"http://jhipster.github.io/\" target=\"_blank\" jhiTranslate=\"home.link.homepage\">JHipster homepage</a></li> <li><a href=\"http://stackoverflow.com/tags/jhipster/info\" target=\"_blank\" jhiTranslate=\"home.link.stackoverflow\">JHipster on Stack Overflow</a></li> <li><a href=\"https://github.com/jhipster/generator-jhipster/issues?state=open\" target=\"_blank\" jhiTranslate=\"home.link.bugtracker\">JHipster bug tracker</a></li> <li><a href=\"https://gitter.im/jhipster/generator-jhipster\" target=\"_blank\" jhiTranslate=\"home.link.chat\">JHipster public chat room</a></li> <li><a href=\"https://twitter.com/java_hipster\" target=\"_blank\" jhiTranslate=\"home.link.follow\">follow @java_hipster on Twitter</a></li> </ul> <p> <span jhiTranslate=\"home.like\">If you like JHipster, don't forget to give us a star on</span> <a href=\"https://github.com/jhipster/generator-jhipster\" target=\"_blank\" jhiTranslate=\"home.github\">Github</a>! </p> </div> </div> ";

/***/ }),

/***/ "./src/main/webapp/app/home/home.component.ts":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = __webpack_require__(0);
var ng_jhipster_1 = __webpack_require__(5);
var shared_1 = __webpack_require__("./src/main/webapp/app/shared/index.ts");
var HomeComponent = (function () {
    function HomeComponent(principal, loginModalService, eventManager) {
        this.principal = principal;
        this.loginModalService = loginModalService;
        this.eventManager = eventManager;
    }
    HomeComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.principal.identity().then(function (account) {
            _this.account = account;
        });
        this.registerAuthenticationSuccess();
    };
    HomeComponent.prototype.registerAuthenticationSuccess = function () {
        var _this = this;
        this.eventManager.subscribe('authenticationSuccess', function (message) {
            _this.principal.identity().then(function (account) {
                _this.account = account;
            });
        });
    };
    HomeComponent.prototype.isAuthenticated = function () {
        return this.principal.isAuthenticated();
    };
    HomeComponent.prototype.login = function () {
        this.modalRef = this.loginModalService.open();
    };
    return HomeComponent;
}());
HomeComponent = __decorate([
    core_1.Component({
        selector: 'jhi-home',
        template: __webpack_require__("./src/main/webapp/app/home/home.component.html"),
        styles: [
            __webpack_require__("./src/main/webapp/app/home/home.scss")
        ]
    }),
    __metadata("design:paramtypes", [shared_1.Principal,
        shared_1.LoginModalService,
        ng_jhipster_1.EventManager])
], HomeComponent);
exports.HomeComponent = HomeComponent;


/***/ }),

/***/ "./src/main/webapp/app/home/home.module.ts":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = __webpack_require__(0);
var router_1 = __webpack_require__(7);
var shared_1 = __webpack_require__("./src/main/webapp/app/shared/index.ts");
var _1 = __webpack_require__("./src/main/webapp/app/home/index.ts");
var PacketAppHomeModule = (function () {
    function PacketAppHomeModule() {
    }
    return PacketAppHomeModule;
}());
PacketAppHomeModule = __decorate([
    core_1.NgModule({
        imports: [
            shared_1.PacketAppSharedModule,
            router_1.RouterModule.forRoot([_1.HOME_ROUTE], { useHash: true })
        ],
        declarations: [
            _1.HomeComponent,
        ],
        entryComponents: [],
        providers: [],
        schemas: [core_1.CUSTOM_ELEMENTS_SCHEMA]
    })
], PacketAppHomeModule);
exports.PacketAppHomeModule = PacketAppHomeModule;


/***/ }),

/***/ "./src/main/webapp/app/home/home.route.ts":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var _1 = __webpack_require__("./src/main/webapp/app/home/index.ts");
exports.HOME_ROUTE = {
    path: '',
    component: _1.HomeComponent,
    data: {
        authorities: [],
        pageTitle: 'home.title'
    }
};


/***/ }),

/***/ "./src/main/webapp/app/home/home.scss":
/***/ (function(module, exports, __webpack_require__) {


        var result = __webpack_require__("./node_modules/css-loader/index.js!./node_modules/sass-loader/lib/loader.js!./src/main/webapp/app/home/home.scss");

        if (typeof result === "string") {
            module.exports = result;
        } else {
            module.exports = result.toString();
        }
    

/***/ }),

/***/ "./src/main/webapp/app/home/index.ts":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

function __export(m) {
    for (var p in m) if (!exports.hasOwnProperty(p)) exports[p] = m[p];
}
Object.defineProperty(exports, "__esModule", { value: true });
__export(__webpack_require__("./src/main/webapp/app/home/home.component.ts"));
__export(__webpack_require__("./src/main/webapp/app/home/home.route.ts"));
__export(__webpack_require__("./src/main/webapp/app/home/home.module.ts"));


/***/ }),

/***/ "./src/main/webapp/app/layouts/error/error.component.html":
/***/ (function(module, exports) {

module.exports = "<div> <div class=\"row\"> <div class=\"col-md-4\"> <span class=\"hipster img-fluid img-rounded\"></span> </div> <div class=\"col-md-8\"> <h1 jhiTranslate=\"error.title\">Error Page!</h1> <div [hidden]=\"!errorMessage\"> <div class=\"alert alert-danger\">{{errorMessage}} </div> </div> <div [hidden]=\"!error403\" class=\"alert alert-danger\" jhiTranslate=\"error.403\">You are not authorized to access the page. </div> </div> </div> </div> ";

/***/ }),

/***/ "./src/main/webapp/app/layouts/error/error.component.ts":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = __webpack_require__(0);
var router_1 = __webpack_require__(7);
var ErrorComponent = (function () {
    function ErrorComponent(route) {
        this.route = route;
    }
    ErrorComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.route.data.subscribe(function (routeData) {
            if (routeData.error403) {
                _this.error403 = routeData.error403;
            }
            if (routeData.errorMessage) {
                _this.errorMessage = routeData.errorMessage;
            }
        });
    };
    return ErrorComponent;
}());
ErrorComponent = __decorate([
    core_1.Component({
        selector: 'jhi-error',
        template: __webpack_require__("./src/main/webapp/app/layouts/error/error.component.html")
    }),
    __metadata("design:paramtypes", [router_1.ActivatedRoute])
], ErrorComponent);
exports.ErrorComponent = ErrorComponent;


/***/ }),

/***/ "./src/main/webapp/app/layouts/error/error.route.ts":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var error_component_1 = __webpack_require__("./src/main/webapp/app/layouts/error/error.component.ts");
exports.errorRoute = [
    {
        path: 'error',
        component: error_component_1.ErrorComponent,
        data: {
            authorities: [],
            pageTitle: 'error.title'
        },
    },
    {
        path: 'accessdenied',
        component: error_component_1.ErrorComponent,
        data: {
            authorities: [],
            pageTitle: 'error.title',
            error403: true
        },
    }
];


/***/ }),

/***/ "./src/main/webapp/app/layouts/footer/footer.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"footer\"> <p jhiTranslate=\"footer\">This is your footer</p> </div> ";

/***/ }),

/***/ "./src/main/webapp/app/layouts/footer/footer.component.ts":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = __webpack_require__(0);
var FooterComponent = (function () {
    function FooterComponent() {
    }
    return FooterComponent;
}());
FooterComponent = __decorate([
    core_1.Component({
        selector: 'jhi-footer',
        template: __webpack_require__("./src/main/webapp/app/layouts/footer/footer.component.html")
    })
], FooterComponent);
exports.FooterComponent = FooterComponent;


/***/ }),

/***/ "./src/main/webapp/app/layouts/index.ts":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

function __export(m) {
    for (var p in m) if (!exports.hasOwnProperty(p)) exports[p] = m[p];
}
Object.defineProperty(exports, "__esModule", { value: true });
__export(__webpack_require__("./src/main/webapp/app/layouts/error/error.component.ts"));
__export(__webpack_require__("./src/main/webapp/app/layouts/error/error.route.ts"));
__export(__webpack_require__("./src/main/webapp/app/layouts/main/main.component.ts"));
__export(__webpack_require__("./src/main/webapp/app/layouts/footer/footer.component.ts"));
__export(__webpack_require__("./src/main/webapp/app/layouts/navbar/navbar.component.ts"));
__export(__webpack_require__("./src/main/webapp/app/layouts/navbar/active-menu.directive.ts"));
__export(__webpack_require__("./src/main/webapp/app/layouts/profiles/page-ribbon.component.ts"));
__export(__webpack_require__("./src/main/webapp/app/layouts/profiles/profile.service.ts"));
__export(__webpack_require__("./src/main/webapp/app/layouts/profiles/profile-info.model.ts"));
__export(__webpack_require__("./src/main/webapp/app/layouts/layout-routing.module.ts"));


/***/ }),

/***/ "./src/main/webapp/app/layouts/layout-routing.module.ts":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = __webpack_require__(0);
var router_1 = __webpack_require__(7);
var app_route_1 = __webpack_require__("./src/main/webapp/app/app.route.ts");
var _1 = __webpack_require__("./src/main/webapp/app/layouts/index.ts");
var LAYOUT_ROUTES = [
    app_route_1.navbarRoute
].concat(_1.errorRoute);
var LayoutRoutingModule = (function () {
    function LayoutRoutingModule() {
    }
    return LayoutRoutingModule;
}());
LayoutRoutingModule = __decorate([
    core_1.NgModule({
        imports: [
            router_1.RouterModule.forRoot(LAYOUT_ROUTES, { useHash: true })
        ],
        exports: [
            router_1.RouterModule
        ]
    })
], LayoutRoutingModule);
exports.LayoutRoutingModule = LayoutRoutingModule;


/***/ }),

/***/ "./src/main/webapp/app/layouts/main/main.component.html":
/***/ (function(module, exports) {

module.exports = "<jhi-page-ribbon></jhi-page-ribbon> <div> <router-outlet name=\"navbar\"></router-outlet> </div> <div class=\"container-fluid\"> <div class=\"card jh-card\"> <router-outlet></router-outlet> <router-outlet name=\"popup\"></router-outlet> </div> <jhi-footer></jhi-footer> </div> ";

/***/ }),

/***/ "./src/main/webapp/app/layouts/main/main.component.ts":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = __webpack_require__(0);
var router_1 = __webpack_require__(7);
var ng_jhipster_1 = __webpack_require__(5);
var shared_1 = __webpack_require__("./src/main/webapp/app/shared/index.ts");
var JhiMainComponent = (function () {
    function JhiMainComponent(jhiLanguageHelper, jhiLanguageService, router, $storageService) {
        this.jhiLanguageHelper = jhiLanguageHelper;
        this.jhiLanguageService = jhiLanguageService;
        this.router = router;
        this.$storageService = $storageService;
        // Just for forcing translation loading
        jhiLanguageService.setLocations(['all']);
    }
    JhiMainComponent.prototype.getPageTitle = function (routeSnapshot) {
        var title = (routeSnapshot.data && routeSnapshot.data['pageTitle']) ? routeSnapshot.data['pageTitle'] : 'packetApp';
        if (routeSnapshot.firstChild) {
            title = this.getPageTitle(routeSnapshot.firstChild) || title;
        }
        return title;
    };
    JhiMainComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.router.events.subscribe(function (event) {
            if (event instanceof router_1.NavigationEnd) {
                _this.jhiLanguageHelper.updateTitle(_this.getPageTitle(_this.router.routerState.snapshot.root));
            }
        });
    };
    return JhiMainComponent;
}());
JhiMainComponent = __decorate([
    core_1.Component({
        selector: 'jhi-main',
        template: __webpack_require__("./src/main/webapp/app/layouts/main/main.component.html")
    }),
    __metadata("design:paramtypes", [shared_1.JhiLanguageHelper,
        ng_jhipster_1.JhiLanguageService,
        router_1.Router,
        shared_1.StateStorageService])
], JhiMainComponent);
exports.JhiMainComponent = JhiMainComponent;


/***/ }),

/***/ "./src/main/webapp/app/layouts/navbar/active-menu.directive.ts":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = __webpack_require__(0);
var ng2_translate_1 = __webpack_require__(13);
var ActiveMenuDirective = (function () {
    function ActiveMenuDirective(el, renderer, translateService) {
        this.el = el;
        this.renderer = renderer;
        this.translateService = translateService;
    }
    ActiveMenuDirective.prototype.ngOnInit = function () {
        var _this = this;
        this.translateService.onLangChange.subscribe(function (event) {
            _this.updateActiveFlag(event.lang);
        });
        this.updateActiveFlag(this.translateService.currentLang);
    };
    ActiveMenuDirective.prototype.updateActiveFlag = function (selectedLanguage) {
        if (this.jhiActiveMenu === selectedLanguage) {
            this.renderer.setElementClass(this.el.nativeElement, 'active', true);
        }
        else {
            this.renderer.setElementClass(this.el.nativeElement, 'active', false);
        }
    };
    return ActiveMenuDirective;
}());
__decorate([
    core_1.Input(),
    __metadata("design:type", String)
], ActiveMenuDirective.prototype, "jhiActiveMenu", void 0);
ActiveMenuDirective = __decorate([
    core_1.Directive({
        selector: '[jhiActiveMenu]'
    }),
    __metadata("design:paramtypes", [core_1.ElementRef, core_1.Renderer, ng2_translate_1.TranslateService])
], ActiveMenuDirective);
exports.ActiveMenuDirective = ActiveMenuDirective;


/***/ }),

/***/ "./src/main/webapp/app/layouts/navbar/navbar.component.html":
/***/ (function(module, exports) {

module.exports = "<nav class=\"navbar navbar-inverse navbar-toggleable-md jh-navbar\"> <div class=\"jh-logo-container float-left\"> <a class=\"jh-navbar-toggler hidden-lg-up float-right\" href=\"javascript:void(0);\" data-toggle=\"collapse\" data-target=\"#navbarResponsive\" aria-controls=\"navbarResponsive\" aria-expanded=\"false\" aria-label=\"Toggle navigation\" (click)=\"toggleNavbar()\"> <i class=\"fa fa-bars\"></i> </a> <a class=\"navbar-brand logo float-left\" routerLink=\"/\" (click)=\"collapseNavbar()\"> <span class=\"logo-img\"></span> <span jhiTranslate=\"global.title\" class=\"navbar-title\">PacketApp</span> <span class=\"navbar-version\">{{version}}</span> </a> </div> <div class=\"navbar-collapse collapse\" id=\"navbarResponsive\" [ngbCollapse]=\"isNavbarCollapsed\" [ngSwitch]=\"isAuthenticated()\"> <ul class=\"navbar-nav ml-auto\"> <li class=\"nav-item\" routerLinkActive=\"active\" [routerLinkActiveOptions]=\"{exact: true}\"> <a class=\"nav-link\" routerLink=\"/\" (click)=\"collapseNavbar()\"> <i class=\"fa fa-home\" aria-hidden=\"true\"></i> <span jhiTranslate=\"global.menu.home\">Home</span> </a> </li> <li *ngSwitchCase=\"true\" ngbDropdown class=\"nav-item dropdown pointer\" routerLinkActive=\"active\" [routerLinkActiveOptions]=\"{exact: true}\"> <a class=\"nav-link dropdown-toggle\" ngbDropdownToggle href=\"javascript:void(0);\" id=\"entity-menu\"> <span> <i class=\"fa fa-th-list\" aria-hidden=\"true\"></i> <span jhiTranslate=\"global.menu.entities.main\"> Entities </span> <b class=\"caret\"></b> </span> </a> <ul class=\"dropdown-menu\" ngbDropdownMenu> </ul> </li> <li *jhiHasAnyAuthority=\"'ROLE_ADMIN'\" ngbDropdown class=\"nav-item dropdown pointer\" routerLinkActive=\"active\" [routerLinkActiveOptions]=\"{exact: true}\"> <a class=\"nav-link dropdown-toggle\" ngbDropdownToggle href=\"javascript:void(0);\" id=\"admin-menu\"> <span> <i class=\"fa fa-user-plus\" aria-hidden=\"true\"></i> <span jhiTranslate=\"global.menu.admin.main\">Administration</span> <b class=\"caret\"></b> </span> </a> <ul class=\"dropdown-menu\" ngbDropdownMenu> <li> <a class=\"dropdown-item\" routerLink=\"user-management\" routerLinkActive=\"active\" (click)=\"collapseNavbar()\"> <i class=\"fa fa-fw fa-user\" aria-hidden=\"true\"></i> <span jhiTranslate=\"global.menu.admin.userManagement\">User management</span> </a> </li> <li> <a class=\"dropdown-item\" routerLink=\"jhi-tracker\" routerLinkActive=\"active\" (click)=\"collapseNavbar()\"> <i class=\"fa fa-fw fa-eye\" aria-hidden=\"true\"></i> <span jhiTranslate=\"global.menu.admin.tracker\">User tracker</span> </a> </li> <li> <a class=\"dropdown-item\" routerLink=\"jhi-metrics\" routerLinkActive=\"active\" (click)=\"collapseNavbar()\"> <i class=\"fa fa-fw fa-tachometer\" aria-hidden=\"true\"></i> <span jhiTranslate=\"global.menu.admin.metrics\">Metrics</span> </a> </li> <li> <a class=\"dropdown-item\" routerLink=\"jhi-health\" routerLinkActive=\"active\" (click)=\"collapseNavbar()\"> <i class=\"fa fa-fw fa-heart\" aria-hidden=\"true\"></i> <span jhiTranslate=\"global.menu.admin.health\">Health</span> </a> </li> <li> <a class=\"dropdown-item\" routerLink=\"jhi-configuration\" routerLinkActive=\"active\" (click)=\"collapseNavbar()\"> <i class=\"fa fa-fw fa-list\" aria-hidden=\"true\"></i> <span jhiTranslate=\"global.menu.admin.configuration\">Configuration</span> </a> </li> <li> <a class=\"dropdown-item\" routerLink=\"audits\" routerLinkActive=\"active\" (click)=\"collapseNavbar()\"> <i class=\"fa fa-fw fa-bell\" aria-hidden=\"true\"></i> <span jhiTranslate=\"global.menu.admin.audits\">Audits</span> </a> </li> <li> <a class=\"dropdown-item\" routerLink=\"logs\" routerLinkActive=\"active\" (click)=\"collapseNavbar()\"> <i class=\"fa fa-fw fa-tasks\" aria-hidden=\"true\"></i> <span jhiTranslate=\"global.menu.admin.logs\">Logs</span> </a> </li> <li *ngIf=\"swaggerEnabled\"> <a class=\"dropdown-item\" routerLink=\"docs\" routerLinkActive=\"active\" (click)=\"collapseNavbar()\"> <i class=\"fa fa-fw fa-book\" aria-hidden=\"true\"></i> <span jhiTranslate=\"global.menu.admin.apidocs\">API</span> </a> </li> <li *ngIf=\"!inProduction\"> <a class=\"dropdown-item\" href=\"/h2-console\" target=\"_tab\" (click)=\"collapseNavbar()\"> <i class=\"fa fa-fw fa-hdd-o\" aria-hidden=\"true\"></i> <span jhiTranslate=\"global.menu.admin.database\">Database</span> </a> </li> </ul> </li> <li ngbDropdown class=\"nav-item dropdown pointer\" *ngIf=\"languages\"> <a class=\"nav-link dropdown-toggle\" ngbDropdownToggle href=\"javascript:void(0);\" id=\"languagesnavBarDropdown\" *ngIf=\"languages.length > 1\"> <span> <i class=\"fa fa-flag\" aria-hidden=\"true\"></i> <span jhiTranslate=\"global.menu.language\">Language</span> <b class=\"caret\"></b> </span> </a> <ul class=\"dropdown-menu\" ngbDropdownMenu *ngIf=\"languages.length > 1\"> <li *ngFor=\"let language of languages\"> <a class=\"dropdown-item\" [jhiActiveMenu]=\"language\" href=\"javascript:void(0);\" (click)=\"changeLanguage(language);collapseNavbar();\">{{language | findLanguageFromKey}}</a> </li> </ul> </li> <li ngbDropdown class=\"nav-item dropdown pointer\" routerLinkActive=\"active\" [routerLinkActiveOptions]=\"{exact: true}\"> <a class=\"nav-link dropdown-toggle\" ngbDropdownToggle href=\"javascript:void(0);\" id=\"account-menu\"> <span *ngIf=\"!getImageUrl()\"> <i class=\"fa fa-user\" aria-hidden=\"true\"></i> <span jhiTranslate=\"global.menu.account.main\"> Account </span> <b class=\"caret\"></b> </span> <span *ngIf=\"getImageUrl()\"> <img [src]=\"getImageUrl()\" class=\"profile-image img-circle\" alt=\"Avatar\"> </span> </a> <ul class=\"dropdown-menu dropdown-menu-right\" ngbDropdownMenu> <li *ngSwitchCase=\"true\"> <a class=\"dropdown-item\" routerLink=\"settings\" routerLinkActive=\"active\" (click)=\"collapseNavbar()\"> <i class=\"fa fa-fw fa-wrench\" aria-hidden=\"true\"></i> <span jhiTranslate=\"global.menu.account.settings\">Settings</span> </a> </li> <li *ngSwitchCase=\"true\"> <a class=\"dropdown-item\" routerLink=\"password\" routerLinkActive=\"active\" (click)=\"collapseNavbar()\"> <i class=\"fa fa-fw fa-clock-o\" aria-hidden=\"true\"></i> <span jhiTranslate=\"global.menu.account.password\">Password</span> </a> </li> <li *ngSwitchCase=\"true\"> <a class=\"dropdown-item\" (click)=\"logout()\" id=\"logout\"> <i class=\"fa fa-fw fa-sign-out\" aria-hidden=\"true\"></i> <span jhiTranslate=\"global.menu.account.logout\">Sign out</span> </a> </li> <li *ngSwitchCase=\"false\"> <a class=\"dropdown-item\" (click)=\"login()\" id=\"login\"> <i class=\"fa fa-fw fa-sign-in\" aria-hidden=\"true\"></i> <span jhiTranslate=\"global.menu.account.login\">Sign in</span> </a> </li> <li *ngSwitchCase=\"false\"> <a class=\"dropdown-item\" routerLink=\"register\" routerLinkActive=\"active\" (click)=\"collapseNavbar()\"> <i class=\"fa fa-fw fa-registered\" aria-hidden=\"true\"></i> <span jhiTranslate=\"global.menu.account.register\">Register</span> </a> </li> </ul> </li> </ul> </div> </nav> ";

/***/ }),

/***/ "./src/main/webapp/app/layouts/navbar/navbar.component.ts":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = __webpack_require__(0);
var router_1 = __webpack_require__(7);
var ng_jhipster_1 = __webpack_require__(5);
var profile_service_1 = __webpack_require__("./src/main/webapp/app/layouts/profiles/profile.service.ts");
var shared_1 = __webpack_require__("./src/main/webapp/app/shared/index.ts");
var app_constants_1 = __webpack_require__("./src/main/webapp/app/app.constants.ts");
var NavbarComponent = (function () {
    function NavbarComponent(loginService, languageHelper, languageService, principal, loginModalService, profileService, router) {
        this.loginService = loginService;
        this.languageHelper = languageHelper;
        this.languageService = languageService;
        this.principal = principal;
        this.loginModalService = loginModalService;
        this.profileService = profileService;
        this.router = router;
        this.version = app_constants_1.VERSION ? 'v' + app_constants_1.VERSION : '';
        this.isNavbarCollapsed = true;
        this.languageService.addLocation('home');
    }
    NavbarComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.languageHelper.getAll().then(function (languages) {
            _this.languages = languages;
        });
        this.profileService.getProfileInfo().subscribe(function (profileInfo) {
            _this.inProduction = profileInfo.inProduction;
            _this.swaggerEnabled = profileInfo.swaggerEnabled;
        });
    };
    NavbarComponent.prototype.changeLanguage = function (languageKey) {
        this.languageService.changeLanguage(languageKey);
    };
    NavbarComponent.prototype.collapseNavbar = function () {
        this.isNavbarCollapsed = true;
    };
    NavbarComponent.prototype.isAuthenticated = function () {
        return this.principal.isAuthenticated();
    };
    NavbarComponent.prototype.login = function () {
        this.modalRef = this.loginModalService.open();
    };
    NavbarComponent.prototype.logout = function () {
        this.collapseNavbar();
        this.loginService.logout();
        this.router.navigate(['']);
    };
    NavbarComponent.prototype.toggleNavbar = function () {
        this.isNavbarCollapsed = !this.isNavbarCollapsed;
    };
    NavbarComponent.prototype.getImageUrl = function () {
        return this.isAuthenticated() ? this.principal.getImageUrl() : null;
    };
    return NavbarComponent;
}());
NavbarComponent = __decorate([
    core_1.Component({
        selector: 'jhi-navbar',
        template: __webpack_require__("./src/main/webapp/app/layouts/navbar/navbar.component.html"),
        styles: [
            __webpack_require__("./src/main/webapp/app/layouts/navbar/navbar.scss")
        ]
    }),
    __metadata("design:paramtypes", [shared_1.LoginService,
        shared_1.JhiLanguageHelper,
        ng_jhipster_1.JhiLanguageService,
        shared_1.Principal,
        shared_1.LoginModalService,
        profile_service_1.ProfileService,
        router_1.Router])
], NavbarComponent);
exports.NavbarComponent = NavbarComponent;


/***/ }),

/***/ "./src/main/webapp/app/layouts/navbar/navbar.scss":
/***/ (function(module, exports, __webpack_require__) {


        var result = __webpack_require__("./node_modules/css-loader/index.js!./node_modules/sass-loader/lib/loader.js!./src/main/webapp/app/layouts/navbar/navbar.scss");

        if (typeof result === "string") {
            module.exports = result;
        } else {
            module.exports = result.toString();
        }
    

/***/ }),

/***/ "./src/main/webapp/app/layouts/profiles/page-ribbon.component.ts":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = __webpack_require__(0);
var profile_service_1 = __webpack_require__("./src/main/webapp/app/layouts/profiles/profile.service.ts");
var PageRibbonComponent = (function () {
    function PageRibbonComponent(profileService) {
        this.profileService = profileService;
    }
    PageRibbonComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.profileService.getProfileInfo().subscribe(function (profileInfo) {
            _this.profileInfo = profileInfo;
            _this.ribbonEnv = profileInfo.ribbonEnv;
        });
    };
    return PageRibbonComponent;
}());
PageRibbonComponent = __decorate([
    core_1.Component({
        selector: 'jhi-page-ribbon',
        template: "<div class=\"ribbon\" *ngIf=\"ribbonEnv\"><a href=\"\" jhiTranslate=\"global.ribbon.{{ribbonEnv}}\">{{ribbonEnv}}</a></div>",
        styles: [
            __webpack_require__("./src/main/webapp/app/layouts/profiles/page-ribbon.scss")
        ]
    }),
    __metadata("design:paramtypes", [profile_service_1.ProfileService])
], PageRibbonComponent);
exports.PageRibbonComponent = PageRibbonComponent;


/***/ }),

/***/ "./src/main/webapp/app/layouts/profiles/page-ribbon.scss":
/***/ (function(module, exports, __webpack_require__) {


        var result = __webpack_require__("./node_modules/css-loader/index.js!./node_modules/sass-loader/lib/loader.js!./src/main/webapp/app/layouts/profiles/page-ribbon.scss");

        if (typeof result === "string") {
            module.exports = result;
        } else {
            module.exports = result.toString();
        }
    

/***/ }),

/***/ "./src/main/webapp/app/layouts/profiles/profile-info.model.ts":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var ProfileInfo = (function () {
    function ProfileInfo() {
    }
    return ProfileInfo;
}());
exports.ProfileInfo = ProfileInfo;


/***/ }),

/***/ "./src/main/webapp/app/layouts/profiles/profile.service.ts":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = __webpack_require__(0);
var http_1 = __webpack_require__(8);
var profile_info_model_1 = __webpack_require__("./src/main/webapp/app/layouts/profiles/profile-info.model.ts");
var ProfileService = (function () {
    function ProfileService(http) {
        this.http = http;
        this.profileInfoUrl = 'api/profile-info';
    }
    ProfileService.prototype.getProfileInfo = function () {
        return this.http.get(this.profileInfoUrl)
            .map(function (res) {
            var data = res.json();
            var pi = new profile_info_model_1.ProfileInfo();
            pi.activeProfiles = data.activeProfiles;
            pi.ribbonEnv = data.ribbonEnv;
            pi.inProduction = data.activeProfiles.indexOf('prod') !== -1;
            pi.swaggerEnabled = data.activeProfiles.indexOf('swagger') !== -1;
            return pi;
        });
    };
    return ProfileService;
}());
ProfileService = __decorate([
    core_1.Injectable(),
    __metadata("design:paramtypes", [http_1.Http])
], ProfileService);
exports.ProfileService = ProfileService;


/***/ }),

/***/ "./src/main/webapp/app/shared/alert/alert-error.component.ts":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = __webpack_require__(0);
var ng2_translate_1 = __webpack_require__(13);
var ng_jhipster_1 = __webpack_require__(5);
var JhiAlertErrorComponent = (function () {
    function JhiAlertErrorComponent(alertService, eventManager, translateService) {
        var _this = this;
        this.alertService = alertService;
        this.eventManager = eventManager;
        this.translateService = translateService;
        this.alerts = [];
        this.cleanHttpErrorListener = eventManager.subscribe('packetApp.httpError', function (response) {
            var i;
            var httpResponse = response.content;
            switch (httpResponse.status) {
                // connection refused, server not reachable
                case 0:
                    _this.addErrorAlert('Server not reachable', 'error.server.not.reachable');
                    break;
                case 400:
                    var arr = Array.from(httpResponse.headers._headers);
                    var headers = [];
                    for (i = 0; i < arr.length; i++) {
                        if (arr[i][0].endsWith('app-error') || arr[i][0].endsWith('app-params')) {
                            headers.push(arr[i][0]);
                        }
                    }
                    headers.sort();
                    var errorHeader = null;
                    var entityKey = null;
                    if (headers.length > 1) {
                        errorHeader = httpResponse.headers.get(headers[0]);
                        entityKey = httpResponse.headers.get(headers[1]);
                    }
                    if (errorHeader) {
                        var entityName = translateService.instant('global.menu.entities.' + entityKey);
                        _this.addErrorAlert(errorHeader, errorHeader, { entityName: entityName });
                    }
                    else if (httpResponse.text() !== '' && httpResponse.json() && httpResponse.json().fieldErrors) {
                        var fieldErrors = httpResponse.json().fieldErrors;
                        for (i = 0; i < fieldErrors.length; i++) {
                            var fieldError = fieldErrors[i];
                            // convert 'something[14].other[4].id' to 'something[].other[].id' so translations can be written to it
                            var convertedField = fieldError.field.replace(/\[\d*\]/g, '[]');
                            var fieldName = translateService.instant('packetApp.' +
                                fieldError.objectName + '.' + convertedField);
                            _this.addErrorAlert('Field ' + fieldName + ' cannot be empty', 'error.' + fieldError.message, { fieldName: fieldName });
                        }
                    }
                    else if (httpResponse.text() !== '' && httpResponse.json() && httpResponse.json().message) {
                        _this.addErrorAlert(httpResponse.json().message, httpResponse.json().message, httpResponse.json().params);
                    }
                    else {
                        _this.addErrorAlert(httpResponse.text());
                    }
                    break;
                case 404:
                    _this.addErrorAlert('Not found', 'error.url.not.found');
                    break;
                default:
                    if (httpResponse.text() !== '' && httpResponse.json() && httpResponse.json().message) {
                        _this.addErrorAlert(httpResponse.json().message);
                    }
                    else {
                        _this.addErrorAlert(httpResponse.text());
                    }
            }
        });
    }
    JhiAlertErrorComponent.prototype.ngOnDestroy = function () {
        if (this.cleanHttpErrorListener !== undefined && this.cleanHttpErrorListener !== null) {
            this.eventManager.destroy(this.cleanHttpErrorListener);
            this.alerts = [];
        }
    };
    JhiAlertErrorComponent.prototype.addErrorAlert = function (message, key, data) {
        key = key && key !== null ? key : message;
        this.alerts.push(this.alertService.addAlert({
            type: 'danger',
            msg: key,
            params: data,
            timeout: 5000,
            toast: this.alertService.isToast(),
            scoped: true
        }, this.alerts));
    };
    return JhiAlertErrorComponent;
}());
JhiAlertErrorComponent = __decorate([
    core_1.Component({
        selector: 'jhi-alert-error',
        template: "\n        <div class=\"alerts\" role=\"alert\">\n            <div *ngFor=\"let alert of alerts\"  [ngClass]=\"{'alert.position': true, 'toast': alert.toast}\">\n                <ngb-alert type=\"{{alert.type}}\" close=\"alert.close(alerts)\"><pre [innerHTML]=\"alert.msg\"></pre></ngb-alert>\n            </div>\n        </div>"
    }),
    __metadata("design:paramtypes", [ng_jhipster_1.AlertService, ng_jhipster_1.EventManager, ng2_translate_1.TranslateService])
], JhiAlertErrorComponent);
exports.JhiAlertErrorComponent = JhiAlertErrorComponent;


/***/ }),

/***/ "./src/main/webapp/app/shared/alert/alert.component.ts":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = __webpack_require__(0);
var ng_jhipster_1 = __webpack_require__(5);
var JhiAlertComponent = (function () {
    function JhiAlertComponent(alertService) {
        this.alertService = alertService;
    }
    JhiAlertComponent.prototype.ngOnInit = function () {
        this.alerts = this.alertService.get();
    };
    JhiAlertComponent.prototype.ngOnDestroy = function () {
        this.alerts = [];
    };
    return JhiAlertComponent;
}());
JhiAlertComponent = __decorate([
    core_1.Component({
        selector: 'jhi-alert',
        template: "\n        <div class=\"alerts\" role=\"alert\">\n            <div *ngFor=\"let alert of alerts\" [ngClass]=\"{'alert.position': true, 'toast': alert.toast}\">\n                <ngb-alert [type]=\"alert.type\" (close)=\"alert.close(alerts)\"><pre [innerHTML]=\"alert.msg\"></pre></ngb-alert>\n            </div>\n        </div>"
    }),
    __metadata("design:paramtypes", [ng_jhipster_1.AlertService])
], JhiAlertComponent);
exports.JhiAlertComponent = JhiAlertComponent;


/***/ }),

/***/ "./src/main/webapp/app/shared/auth/account.service.ts":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = __webpack_require__(0);
var http_1 = __webpack_require__(8);
var AccountService = (function () {
    function AccountService(http) {
        this.http = http;
    }
    AccountService.prototype.get = function () {
        return this.http.get('api/account').map(function (res) { return res.json(); });
    };
    AccountService.prototype.save = function (account) {
        return this.http.post('api/account', account);
    };
    return AccountService;
}());
AccountService = __decorate([
    core_1.Injectable(),
    __metadata("design:paramtypes", [http_1.Http])
], AccountService);
exports.AccountService = AccountService;


/***/ }),

/***/ "./src/main/webapp/app/shared/auth/auth-jwt.service.ts":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = __webpack_require__(0);
var http_1 = __webpack_require__(8);
var Rx_1 = __webpack_require__(19);
var ng2_webstorage_1 = __webpack_require__(12);
var AuthServerProvider = (function () {
    function AuthServerProvider(http, $localStorage, $sessionStorage) {
        this.http = http;
        this.$localStorage = $localStorage;
        this.$sessionStorage = $sessionStorage;
    }
    AuthServerProvider.prototype.getToken = function () {
        return this.$localStorage.retrieve('authenticationToken') || this.$sessionStorage.retrieve('authenticationToken');
    };
    AuthServerProvider.prototype.login = function (credentials) {
        var data = {
            username: credentials.username,
            password: credentials.password,
            rememberMe: credentials.rememberMe
        };
        return this.http.post('api/authenticate', data).map(authenticateSuccess.bind(this));
        function authenticateSuccess(resp) {
            var bearerToken = resp.headers.get('Authorization');
            if (bearerToken && bearerToken.slice(0, 7) === 'Bearer ') {
                var jwt = bearerToken.slice(7, bearerToken.length);
                this.storeAuthenticationToken(jwt, credentials.rememberMe);
                return jwt;
            }
        }
    };
    AuthServerProvider.prototype.loginWithToken = function (jwt, rememberMe) {
        if (jwt) {
            this.storeAuthenticationToken(jwt, rememberMe);
            return Promise.resolve(jwt);
        }
        else {
            return Promise.reject('auth-jwt-service Promise reject'); // Put appropriate error message here
        }
    };
    AuthServerProvider.prototype.storeAuthenticationToken = function (jwt, rememberMe) {
        if (rememberMe) {
            this.$localStorage.store('authenticationToken', jwt);
        }
        else {
            this.$sessionStorage.store('authenticationToken', jwt);
        }
    };
    AuthServerProvider.prototype.logout = function () {
        var _this = this;
        return new Rx_1.Observable(function (observer) {
            _this.$localStorage.clear('authenticationToken');
            _this.$sessionStorage.clear('authenticationToken');
            observer.complete();
        });
    };
    return AuthServerProvider;
}());
AuthServerProvider = __decorate([
    core_1.Injectable(),
    __metadata("design:paramtypes", [http_1.Http,
        ng2_webstorage_1.LocalStorageService,
        ng2_webstorage_1.SessionStorageService])
], AuthServerProvider);
exports.AuthServerProvider = AuthServerProvider;


/***/ }),

/***/ "./src/main/webapp/app/shared/auth/csrf.service.ts":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = __webpack_require__(0);
var core_2 = __webpack_require__(18);
var CSRFService = (function () {
    function CSRFService(cookieService) {
        this.cookieService = cookieService;
    }
    CSRFService.prototype.getCSRF = function (name) {
        name = "" + (name ? name : 'XSRF-TOKEN');
        return this.cookieService.get(name);
    };
    return CSRFService;
}());
CSRFService = __decorate([
    core_1.Injectable(),
    __metadata("design:paramtypes", [core_2.CookieService])
], CSRFService);
exports.CSRFService = CSRFService;


/***/ }),

/***/ "./src/main/webapp/app/shared/auth/has-any-authority.directive.ts":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = __webpack_require__(0);
var principal_service_1 = __webpack_require__("./src/main/webapp/app/shared/auth/principal.service.ts");
/**
 * @whatItDoes Conditionally includes an HTML element if current user has any
 * of the authorities passed as the `expression`.
 *
 * @howToUse
 * ```
 *     <some-element *jhiHasAnyAuthority="'ROLE_ADMIN'">...</some-element>
 *
 *     <some-element *jhiHasAnyAuthority="['ROLE_ADMIN', 'ROLE_USER']">...</some-element>
 * ```
 */
var HasAnyAuthorityDirective = (function () {
    function HasAnyAuthorityDirective(principal, templateRef, viewContainerRef) {
        this.principal = principal;
        this.templateRef = templateRef;
        this.viewContainerRef = viewContainerRef;
    }
    Object.defineProperty(HasAnyAuthorityDirective.prototype, "jhiHasAnyAuthority", {
        set: function (value) {
            var _this = this;
            this.authorities = typeof value === 'string' ? [value] : value;
            this.updateView();
            // Get notified each time authentication state changes.
            this.principal.getAuthenticationState().subscribe(function (identity) { return _this.updateView(); });
        },
        enumerable: true,
        configurable: true
    });
    HasAnyAuthorityDirective.prototype.updateView = function () {
        var _this = this;
        this.principal.hasAnyAuthority(this.authorities).then(function (result) {
            _this.viewContainerRef.clear();
            if (result) {
                _this.viewContainerRef.createEmbeddedView(_this.templateRef);
            }
        });
    };
    return HasAnyAuthorityDirective;
}());
__decorate([
    core_1.Input(),
    __metadata("design:type", Object),
    __metadata("design:paramtypes", [Object])
], HasAnyAuthorityDirective.prototype, "jhiHasAnyAuthority", null);
HasAnyAuthorityDirective = __decorate([
    core_1.Directive({
        selector: '[jhiHasAnyAuthority]'
    }),
    __metadata("design:paramtypes", [principal_service_1.Principal, core_1.TemplateRef, core_1.ViewContainerRef])
], HasAnyAuthorityDirective);
exports.HasAnyAuthorityDirective = HasAnyAuthorityDirective;


/***/ }),

/***/ "./src/main/webapp/app/shared/auth/principal.service.ts":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = __webpack_require__(0);
var Subject_1 = __webpack_require__(29);
var account_service_1 = __webpack_require__("./src/main/webapp/app/shared/auth/account.service.ts");
var tracker_service_1 = __webpack_require__("./src/main/webapp/app/shared/tracker/tracker.service.ts"); // Barrel doesn't work here. No idea why!
var Principal = (function () {
    function Principal(account, trackerService) {
        this.account = account;
        this.trackerService = trackerService;
        this.authenticated = false;
        this.authenticationState = new Subject_1.Subject();
    }
    Principal.prototype.authenticate = function (identity) {
        this.userIdentity = identity;
        this.authenticated = identity !== null;
        this.authenticationState.next(this.userIdentity);
    };
    Principal.prototype.hasAnyAuthority = function (authorities) {
        return Promise.resolve(this.hasAnyAuthorityDirect(authorities));
    };
    Principal.prototype.hasAnyAuthorityDirect = function (authorities) {
        if (!this.authenticated || !this.userIdentity || !this.userIdentity.authorities) {
            return false;
        }
        for (var i = 0; i < authorities.length; i++) {
            if (this.userIdentity.authorities.indexOf(authorities[i]) !== -1) {
                return true;
            }
        }
        return false;
    };
    Principal.prototype.hasAuthority = function (authority) {
        if (!this.authenticated) {
            return Promise.resolve(false);
        }
        return this.identity().then(function (id) {
            return Promise.resolve(id.authorities && id.authorities.indexOf(authority) !== -1);
        }, function () {
            return Promise.resolve(false);
        });
    };
    Principal.prototype.identity = function (force) {
        var _this = this;
        if (force === true) {
            this.userIdentity = undefined;
        }
        // check and see if we have retrieved the userIdentity data from the server.
        // if we have, reuse it by immediately resolving
        if (this.userIdentity) {
            return Promise.resolve(this.userIdentity);
        }
        // retrieve the userIdentity data from the server, update the identity object, and then resolve.
        return this.account.get().toPromise().then(function (account) {
            if (account) {
                _this.userIdentity = account;
                _this.authenticated = true;
                _this.trackerService.connect();
            }
            else {
                _this.userIdentity = null;
                _this.authenticated = false;
            }
            _this.authenticationState.next(_this.userIdentity);
            return _this.userIdentity;
        }).catch(function (err) {
            if (_this.trackerService.stompClient && _this.trackerService.stompClient.connected) {
                _this.trackerService.disconnect();
            }
            _this.userIdentity = null;
            _this.authenticated = false;
            _this.authenticationState.next(_this.userIdentity);
            return null;
        });
    };
    Principal.prototype.isAuthenticated = function () {
        return this.authenticated;
    };
    Principal.prototype.isIdentityResolved = function () {
        return this.userIdentity !== undefined;
    };
    Principal.prototype.getAuthenticationState = function () {
        return this.authenticationState.asObservable();
    };
    Principal.prototype.getImageUrl = function () {
        return this.isIdentityResolved() ? this.userIdentity.imageUrl : null;
    };
    return Principal;
}());
Principal = __decorate([
    core_1.Injectable(),
    __metadata("design:paramtypes", [account_service_1.AccountService,
        tracker_service_1.JhiTrackerService])
], Principal);
exports.Principal = Principal;


/***/ }),

/***/ "./src/main/webapp/app/shared/auth/state-storage.service.ts":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = __webpack_require__(0);
var ng2_webstorage_1 = __webpack_require__(12);
var StateStorageService = (function () {
    function StateStorageService($sessionStorage) {
        this.$sessionStorage = $sessionStorage;
    }
    StateStorageService.prototype.getPreviousState = function () {
        return this.$sessionStorage.retrieve('previousState');
    };
    StateStorageService.prototype.resetPreviousState = function () {
        this.$sessionStorage.clear('previousState');
    };
    StateStorageService.prototype.storePreviousState = function (previousStateName, previousStateParams) {
        var previousState = { 'name': previousStateName, 'params': previousStateParams };
        this.$sessionStorage.store('previousState', previousState);
    };
    StateStorageService.prototype.getDestinationState = function () {
        return this.$sessionStorage.retrieve('destinationState');
    };
    StateStorageService.prototype.storeUrl = function (url) {
        this.$sessionStorage.store('previousUrl', url);
    };
    StateStorageService.prototype.getUrl = function () {
        return this.$sessionStorage.retrieve('previousUrl');
    };
    StateStorageService.prototype.storeDestinationState = function (destinationState, destinationStateParams, fromState) {
        var destinationInfo = {
            'destination': {
                'name': destinationState.name,
                'data': destinationState.data,
            },
            'params': destinationStateParams,
            'from': {
                'name': fromState.name,
            }
        };
        this.$sessionStorage.store('destinationState', destinationInfo);
    };
    return StateStorageService;
}());
StateStorageService = __decorate([
    core_1.Injectable(),
    __metadata("design:paramtypes", [ng2_webstorage_1.SessionStorageService])
], StateStorageService);
exports.StateStorageService = StateStorageService;


/***/ }),

/***/ "./src/main/webapp/app/shared/auth/user-route-access-service.ts":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = __webpack_require__(0);
var router_1 = __webpack_require__(7);
var _1 = __webpack_require__("./src/main/webapp/app/shared/index.ts");
var login_modal_service_1 = __webpack_require__("./src/main/webapp/app/shared/login/login-modal.service.ts");
var state_storage_service_1 = __webpack_require__("./src/main/webapp/app/shared/auth/state-storage.service.ts");
var UserRouteAccessService = (function () {
    function UserRouteAccessService(router, loginModalService, principal, stateStorageService) {
        this.router = router;
        this.loginModalService = loginModalService;
        this.principal = principal;
        this.stateStorageService = stateStorageService;
    }
    UserRouteAccessService.prototype.canActivate = function (route, state) {
        var authorities = route.data['authorities'];
        if (!authorities || authorities.length === 0) {
            return true;
        }
        return this.checkLogin(authorities, state.url);
    };
    UserRouteAccessService.prototype.checkLogin = function (authorities, url) {
        var _this = this;
        var principal = this.principal;
        return Promise.resolve(principal.identity().then(function (account) {
            if (account && principal.hasAnyAuthorityDirect(authorities)) {
                return true;
            }
            _this.stateStorageService.storeUrl(url);
            _this.router.navigate(['accessdenied']).then(function () {
                // only show the login dialog, if the user hasn't logged in yet
                if (!account) {
                    _this.loginModalService.open();
                }
            });
            return false;
        }));
    };
    return UserRouteAccessService;
}());
UserRouteAccessService = __decorate([
    core_1.Injectable(),
    __metadata("design:paramtypes", [router_1.Router,
        login_modal_service_1.LoginModalService,
        _1.Principal,
        state_storage_service_1.StateStorageService])
], UserRouteAccessService);
exports.UserRouteAccessService = UserRouteAccessService;


/***/ }),

/***/ "./src/main/webapp/app/shared/constants/pagination.constants.ts":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
exports.ITEMS_PER_PAGE = 20;


/***/ }),

/***/ "./src/main/webapp/app/shared/index.ts":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

function __export(m) {
    for (var p in m) if (!exports.hasOwnProperty(p)) exports[p] = m[p];
}
Object.defineProperty(exports, "__esModule", { value: true });
__export(__webpack_require__("./src/main/webapp/app/shared/constants/pagination.constants.ts"));
__export(__webpack_require__("./src/main/webapp/app/shared/alert/alert.component.ts"));
__export(__webpack_require__("./src/main/webapp/app/shared/alert/alert-error.component.ts"));
__export(__webpack_require__("./src/main/webapp/app/shared/auth/csrf.service.ts"));
__export(__webpack_require__("./src/main/webapp/app/shared/auth/state-storage.service.ts"));
__export(__webpack_require__("./src/main/webapp/app/shared/auth/account.service.ts"));
__export(__webpack_require__("./src/main/webapp/app/shared/auth/auth-jwt.service.ts"));
__export(__webpack_require__("./src/main/webapp/app/shared/auth/principal.service.ts"));
__export(__webpack_require__("./src/main/webapp/app/shared/auth/has-any-authority.directive.ts"));
__export(__webpack_require__("./src/main/webapp/app/shared/auth/user-route-access-service.ts"));
__export(__webpack_require__("./src/main/webapp/app/shared/language/language.constants.ts"));
__export(__webpack_require__("./src/main/webapp/app/shared/language/language.helper.ts"));
__export(__webpack_require__("./src/main/webapp/app/shared/language/language.pipe.ts"));
__export(__webpack_require__("./src/main/webapp/app/shared/tracker/tracker.service.ts"));
__export(__webpack_require__("./src/main/webapp/app/shared/login/login.component.ts"));
__export(__webpack_require__("./src/main/webapp/app/shared/login/login.service.ts"));
__export(__webpack_require__("./src/main/webapp/app/shared/login/login-modal.service.ts"));
__export(__webpack_require__("./src/main/webapp/app/shared/user/account.model.ts"));
__export(__webpack_require__("./src/main/webapp/app/shared/user/user.model.ts"));
__export(__webpack_require__("./src/main/webapp/app/shared/user/user.service.ts"));
__export(__webpack_require__("./src/main/webapp/app/shared/model/response-wrapper.model.ts"));
__export(__webpack_require__("./src/main/webapp/app/shared/model/request-util.ts"));
__export(__webpack_require__("./src/main/webapp/app/shared/social/social.service.ts"));
__export(__webpack_require__("./src/main/webapp/app/shared/social/social.component.ts"));
__export(__webpack_require__("./src/main/webapp/app/shared/shared-libs.module.ts"));
__export(__webpack_require__("./src/main/webapp/app/shared/shared-common.module.ts"));
__export(__webpack_require__("./src/main/webapp/app/shared/shared.module.ts"));


/***/ }),

/***/ "./src/main/webapp/app/shared/language/language.constants.ts":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
/*
    Languages codes are ISO_639-1 codes, see http://en.wikipedia.org/wiki/List_of_ISO_639-1_codes
    They are written in English to avoid character encoding issues (not a perfect solution)
*/
exports.LANGUAGES = [
    'de',
    'en'
    // jhipster-needle-i18n-language-constant - JHipster will add/remove languages in this array
];


/***/ }),

/***/ "./src/main/webapp/app/shared/language/language.helper.ts":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = __webpack_require__(0);
var platform_browser_1 = __webpack_require__(16);
var router_1 = __webpack_require__(7);
var ng2_translate_1 = __webpack_require__("./node_modules/ng2-translate/ng2-translate.js");
var language_constants_1 = __webpack_require__("./src/main/webapp/app/shared/language/language.constants.ts");
var JhiLanguageHelper = (function () {
    function JhiLanguageHelper(translateService, titleService, router) {
        this.translateService = translateService;
        this.titleService = titleService;
        this.router = router;
        this.init();
    }
    JhiLanguageHelper.prototype.getAll = function () {
        return Promise.resolve(language_constants_1.LANGUAGES);
    };
    /**
     * Update the window title using params in the following
     * order:
     * 1. titleKey parameter
     * 2. $state.$current.data.pageTitle (current state page title)
     * 3. 'global.title'
     */
    JhiLanguageHelper.prototype.updateTitle = function (titleKey) {
        var _this = this;
        if (!titleKey) {
            titleKey = this.getPageTitle(this.router.routerState.snapshot.root);
        }
        this.translateService.get(titleKey).subscribe(function (title) {
            _this.titleService.setTitle(title);
        });
    };
    JhiLanguageHelper.prototype.init = function () {
        var _this = this;
        this.translateService.onTranslationChange.subscribe(function (event) {
            _this.updateTitle();
        });
        this.translateService.onLangChange.subscribe(function (event) {
            _this.updateTitle();
        });
    };
    JhiLanguageHelper.prototype.getPageTitle = function (routeSnapshot) {
        var title = (routeSnapshot.data && routeSnapshot.data['pageTitle']) ? routeSnapshot.data['pageTitle'] : 'packetApp';
        if (routeSnapshot.firstChild) {
            title = this.getPageTitle(routeSnapshot.firstChild) || title;
        }
        return title;
    };
    return JhiLanguageHelper;
}());
JhiLanguageHelper = __decorate([
    core_1.Injectable(),
    __metadata("design:paramtypes", [ng2_translate_1.TranslateService, platform_browser_1.Title, router_1.Router])
], JhiLanguageHelper);
exports.JhiLanguageHelper = JhiLanguageHelper;


/***/ }),

/***/ "./src/main/webapp/app/shared/language/language.pipe.ts":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = __webpack_require__(0);
var FindLanguageFromKeyPipe = (function () {
    function FindLanguageFromKeyPipe() {
        this.languages = {
            'ca': 'Català',
            'cs': 'Český',
            'da': 'Dansk',
            'de': 'Deutsch',
            'el': 'Ελληνικά',
            'en': 'English',
            'es': 'Español',
            'et': 'Eesti',
            'fr': 'Français',
            'gl': 'Galego',
            'hu': 'Magyar',
            'hi': 'हिंदी',
            'hy': 'Հայերեն',
            'it': 'Italiano',
            'ja': '日本語',
            'ko': '한국어',
            'mr': 'मराठी',
            'nl': 'Nederlands',
            'pl': 'Polski',
            'pt-br': 'Português (Brasil)',
            'pt-pt': 'Português',
            'ro': 'Română',
            'ru': 'Русский',
            'sk': 'Slovenský',
            'sr': 'Srpski',
            'sv': 'Svenska',
            'ta': 'தமிழ்',
            'th': 'ไทย',
            'tr': 'Türkçe',
            'vi': 'Tiếng Việt',
            'zh-cn': '中文（简体）',
            'zh-tw': '繁體中文'
        };
    }
    FindLanguageFromKeyPipe.prototype.transform = function (lang) {
        return this.languages[lang];
    };
    return FindLanguageFromKeyPipe;
}());
FindLanguageFromKeyPipe = __decorate([
    core_1.Pipe({ name: 'findLanguageFromKey' })
], FindLanguageFromKeyPipe);
exports.FindLanguageFromKeyPipe = FindLanguageFromKeyPipe;


/***/ }),

/***/ "./src/main/webapp/app/shared/login/login-modal.service.ts":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = __webpack_require__(0);
var ng_bootstrap_1 = __webpack_require__(9);
var login_component_1 = __webpack_require__("./src/main/webapp/app/shared/login/login.component.ts");
var LoginModalService = (function () {
    function LoginModalService(modalService) {
        this.modalService = modalService;
        this.isOpen = false;
    }
    LoginModalService.prototype.open = function () {
        var _this = this;
        if (this.isOpen) {
            return;
        }
        this.isOpen = true;
        var modalRef = this.modalService.open(login_component_1.JhiLoginModalComponent, {
            container: 'nav'
        });
        modalRef.result.then(function (result) {
            _this.isOpen = false;
        }, function (reason) {
            _this.isOpen = false;
        });
        return modalRef;
    };
    return LoginModalService;
}());
LoginModalService = __decorate([
    core_1.Injectable(),
    __metadata("design:paramtypes", [ng_bootstrap_1.NgbModal])
], LoginModalService);
exports.LoginModalService = LoginModalService;


/***/ }),

/***/ "./src/main/webapp/app/shared/login/login.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"modal-header\"> <h4 class=\"modal-title\" jhiTranslate=\"login.title\">Sign in</h4> <button aria-label=\"Close\" data-dismiss=\"modal\" class=\"close\" type=\"button\" (click)=\"activeModal.dismiss('closed')\"><span aria-hidden=\"true\">x</span> </button> </div> <div class=\"modal-body\"> <div class=\"row\"> <div class=\"col-12\"> <div class=\"alert alert-danger\" *ngIf=\"authenticationError\" jhiTranslate=\"login.messages.error.authentication\"> <strong>Failed to sign in!</strong> Please check your credentials and try again. </div> </div> <div class=\"col-md-6\"> <form class=\"form\" role=\"form\" (ngSubmit)=\"login()\"> <div class=\"form-group\"> <label for=\"username\" jhiTranslate=\"global.form.username\">Login</label> <input type=\"text\" class=\"form-control\" name=\"username\" id=\"username\" placeholder=\"{{'global.form.username.placeholder' | translate}}\" [(ngModel)]=\"username\"> </div> <div class=\"form-group\"> <label for=\"password\" jhiTranslate=\"login.form.password\">Password</label> <input type=\"password\" class=\"form-control\" name=\"password\" id=\"password\" placeholder=\"{{'login.form.password.placeholder' | translate}}\" [(ngModel)]=\"password\"> </div> <div class=\"form-check\"> <label class=\"form-check-label\" for=\"rememberMe\"> <input class=\"form-check-input\" type=\"checkbox\" name=\"rememberMe\" id=\"rememberMe\" [(ngModel)]=\"rememberMe\" checked=\"checked\"> <span jhiTranslate=\"login.form.rememberme\">Remember me</span> </label> </div> <button type=\"submit\" class=\"btn btn-primary\" jhiTranslate=\"login.form.button\">Sign in</button> </form> <p></p> <div class=\"alert alert-warning\"> <a class=\"alert-link\" (click)=\"requestResetPassword()\" jhiTranslate=\"login.password.forgot\">Did you forget your password?</a> </div> <div class=\"alert alert-warning\"> <span jhiTranslate=\"global.messages.info.register.noaccount\">You don't have an account yet?</span> <a class=\"alert-link\" (click)=\"register()\" jhiTranslate=\"global.messages.info.register.link\">Register a new account</a> </div> </div> <div class=\"col-md-6\"> <br/> <jhi-social provider=\"google\"></jhi-social> <jhi-social provider=\"facebook\"></jhi-social> <jhi-social provider=\"twitter\"></jhi-social> </div> </div> </div> ";

/***/ }),

/***/ "./src/main/webapp/app/shared/login/login.component.ts":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = __webpack_require__(0);
var ng_bootstrap_1 = __webpack_require__(9);
var router_1 = __webpack_require__(7);
var ng_jhipster_1 = __webpack_require__(5);
var login_service_1 = __webpack_require__("./src/main/webapp/app/shared/login/login.service.ts");
var state_storage_service_1 = __webpack_require__("./src/main/webapp/app/shared/auth/state-storage.service.ts");
var social_service_1 = __webpack_require__("./src/main/webapp/app/shared/social/social.service.ts");
var JhiLoginModalComponent = (function () {
    function JhiLoginModalComponent(eventManager, languageService, loginService, stateStorageService, elementRef, renderer, socialService, router, activeModal) {
        this.eventManager = eventManager;
        this.languageService = languageService;
        this.loginService = loginService;
        this.stateStorageService = stateStorageService;
        this.elementRef = elementRef;
        this.renderer = renderer;
        this.socialService = socialService;
        this.router = router;
        this.activeModal = activeModal;
        this.credentials = {};
    }
    JhiLoginModalComponent.prototype.ngOnInit = function () {
        this.languageService.addLocation('login');
    };
    JhiLoginModalComponent.prototype.ngAfterViewInit = function () {
        this.renderer.invokeElementMethod(this.elementRef.nativeElement.querySelector('#username'), 'focus', []);
    };
    JhiLoginModalComponent.prototype.cancel = function () {
        this.credentials = {
            username: null,
            password: null,
            rememberMe: true
        };
        this.authenticationError = false;
        this.activeModal.dismiss('cancel');
    };
    JhiLoginModalComponent.prototype.login = function () {
        var _this = this;
        this.loginService.login({
            username: this.username,
            password: this.password,
            rememberMe: this.rememberMe
        }).then(function () {
            _this.authenticationError = false;
            _this.activeModal.dismiss('login success');
            if (_this.router.url === '/register' || (/activate/.test(_this.router.url)) ||
                _this.router.url === '/finishReset' || _this.router.url === '/requestReset') {
                _this.router.navigate(['']);
            }
            _this.eventManager.broadcast({
                name: 'authenticationSuccess',
                content: 'Sending Authentication Success'
            });
            // // previousState was set in the authExpiredInterceptor before being redirected to login modal.
            // // since login is succesful, go to stored previousState and clear previousState
            var redirect = _this.stateStorageService.getUrl();
            if (redirect) {
                _this.router.navigate([redirect]);
            }
        }).catch(function () {
            _this.authenticationError = true;
        });
    };
    JhiLoginModalComponent.prototype.register = function () {
        this.activeModal.dismiss('to state register');
        this.router.navigate(['/register']);
    };
    JhiLoginModalComponent.prototype.requestResetPassword = function () {
        this.activeModal.dismiss('to state requestReset');
        this.router.navigate(['/reset', 'request']);
    };
    return JhiLoginModalComponent;
}());
JhiLoginModalComponent = __decorate([
    core_1.Component({
        selector: 'jhi-login-modal',
        template: __webpack_require__("./src/main/webapp/app/shared/login/login.component.html")
    }),
    __metadata("design:paramtypes", [ng_jhipster_1.EventManager,
        ng_jhipster_1.JhiLanguageService,
        login_service_1.LoginService,
        state_storage_service_1.StateStorageService,
        core_1.ElementRef,
        core_1.Renderer,
        social_service_1.SocialService,
        router_1.Router,
        ng_bootstrap_1.NgbActiveModal])
], JhiLoginModalComponent);
exports.JhiLoginModalComponent = JhiLoginModalComponent;


/***/ }),

/***/ "./src/main/webapp/app/shared/login/login.service.ts":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = __webpack_require__(0);
var ng_jhipster_1 = __webpack_require__(5);
var principal_service_1 = __webpack_require__("./src/main/webapp/app/shared/auth/principal.service.ts");
var auth_jwt_service_1 = __webpack_require__("./src/main/webapp/app/shared/auth/auth-jwt.service.ts");
var tracker_service_1 = __webpack_require__("./src/main/webapp/app/shared/tracker/tracker.service.ts");
var LoginService = (function () {
    function LoginService(languageService, principal, trackerService, authServerProvider) {
        this.languageService = languageService;
        this.principal = principal;
        this.trackerService = trackerService;
        this.authServerProvider = authServerProvider;
    }
    LoginService.prototype.login = function (credentials, callback) {
        var _this = this;
        var cb = callback || function () { };
        return new Promise(function (resolve, reject) {
            _this.authServerProvider.login(credentials).subscribe(function (data) {
                _this.principal.identity(true).then(function (account) {
                    // After the login the language will be changed to
                    // the language selected by the user during his registration
                    if (account !== null) {
                        _this.languageService.changeLanguage(account.langKey);
                    }
                    _this.trackerService.sendActivity();
                    resolve(data);
                });
                return cb();
            }, function (err) {
                _this.logout();
                reject(err);
                return cb(err);
            });
        });
    };
    LoginService.prototype.loginWithToken = function (jwt, rememberMe) {
        return this.authServerProvider.loginWithToken(jwt, rememberMe);
    };
    LoginService.prototype.logout = function () {
        this.authServerProvider.logout().subscribe();
        this.principal.authenticate(null);
    };
    return LoginService;
}());
LoginService = __decorate([
    core_1.Injectable(),
    __metadata("design:paramtypes", [ng_jhipster_1.JhiLanguageService,
        principal_service_1.Principal,
        tracker_service_1.JhiTrackerService,
        auth_jwt_service_1.AuthServerProvider])
], LoginService);
exports.LoginService = LoginService;


/***/ }),

/***/ "./src/main/webapp/app/shared/model/request-util.ts":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var http_1 = __webpack_require__(8);
exports.createRequestOption = function (req) {
    var options = new http_1.BaseRequestOptions();
    if (req) {
        var params = new http_1.URLSearchParams();
        params.set('page', req.page);
        params.set('size', req.size);
        if (req.sort) {
            params.paramsMap.set('sort', req.sort);
        }
        params.set('query', req.query);
        options.search = params;
    }
    return options;
};


/***/ }),

/***/ "./src/main/webapp/app/shared/model/response-wrapper.model.ts":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var ResponseWrapper = (function () {
    function ResponseWrapper(headers, json, status) {
        this.headers = headers;
        this.json = json;
        this.status = status;
    }
    return ResponseWrapper;
}());
exports.ResponseWrapper = ResponseWrapper;


/***/ }),

/***/ "./src/main/webapp/app/shared/shared-common.module.ts":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = __webpack_require__(0);
var platform_browser_1 = __webpack_require__(16);
var ng2_translate_1 = __webpack_require__(13);
var ng_jhipster_1 = __webpack_require__(5);
var window_service_1 = __webpack_require__("./src/main/webapp/app/shared/tracker/window.service.ts");
var _1 = __webpack_require__("./src/main/webapp/app/shared/index.ts");
function alertServiceProvider(sanitizer, translateService) {
    // set below to true to make alerts look like toast
    var isToast = false;
    return new ng_jhipster_1.AlertService(sanitizer, isToast, translateService);
}
exports.alertServiceProvider = alertServiceProvider;
var PacketAppSharedCommonModule = (function () {
    function PacketAppSharedCommonModule() {
    }
    return PacketAppSharedCommonModule;
}());
PacketAppSharedCommonModule = __decorate([
    core_1.NgModule({
        imports: [
            _1.PacketAppSharedLibsModule
        ],
        declarations: [
            _1.FindLanguageFromKeyPipe,
            _1.JhiAlertComponent,
            _1.JhiAlertErrorComponent
        ],
        providers: [
            _1.JhiLanguageHelper,
            window_service_1.WindowRef,
            {
                provide: ng_jhipster_1.AlertService,
                useFactory: alertServiceProvider,
                deps: [core_1.Sanitizer, ng2_translate_1.TranslateService]
            },
            platform_browser_1.Title
        ],
        exports: [
            _1.PacketAppSharedLibsModule,
            _1.FindLanguageFromKeyPipe,
            _1.JhiAlertComponent,
            _1.JhiAlertErrorComponent
        ]
    })
], PacketAppSharedCommonModule);
exports.PacketAppSharedCommonModule = PacketAppSharedCommonModule;


/***/ }),

/***/ "./src/main/webapp/app/shared/shared-libs.module.ts":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = __webpack_require__(0);
var forms_1 = __webpack_require__(20);
var http_1 = __webpack_require__(8);
var common_1 = __webpack_require__(15);
var ng_bootstrap_1 = __webpack_require__(9);
var ng_jhipster_1 = __webpack_require__(5);
var ngx_infinite_scroll_1 = __webpack_require__(22);
var PacketAppSharedLibsModule = (function () {
    function PacketAppSharedLibsModule() {
    }
    return PacketAppSharedLibsModule;
}());
PacketAppSharedLibsModule = __decorate([
    core_1.NgModule({
        imports: [
            ng_bootstrap_1.NgbModule.forRoot(),
            ng_jhipster_1.NgJhipsterModule.forRoot({
                i18nEnabled: true,
                defaultI18nLocation: 'all',
                defaultI18nLang: 'de'
            }),
            ngx_infinite_scroll_1.InfiniteScrollModule
        ],
        exports: [
            forms_1.FormsModule,
            http_1.HttpModule,
            common_1.CommonModule,
            ng_bootstrap_1.NgbModule,
            ng_jhipster_1.NgJhipsterModule,
            ngx_infinite_scroll_1.InfiniteScrollModule
        ]
    })
], PacketAppSharedLibsModule);
exports.PacketAppSharedLibsModule = PacketAppSharedLibsModule;


/***/ }),

/***/ "./src/main/webapp/app/shared/shared.module.ts":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = __webpack_require__(0);
var common_1 = __webpack_require__(15);
var cookies_service_1 = __webpack_require__(26);
var _1 = __webpack_require__("./src/main/webapp/app/shared/index.ts");
var PacketAppSharedModule = (function () {
    function PacketAppSharedModule() {
    }
    return PacketAppSharedModule;
}());
PacketAppSharedModule = __decorate([
    core_1.NgModule({
        imports: [
            _1.PacketAppSharedLibsModule,
            _1.PacketAppSharedCommonModule
        ],
        declarations: [
            _1.JhiSocialComponent,
            _1.JhiLoginModalComponent,
            _1.HasAnyAuthorityDirective
        ],
        providers: [
            cookies_service_1.CookieService,
            _1.LoginService,
            _1.LoginModalService,
            _1.AccountService,
            _1.StateStorageService,
            _1.Principal,
            _1.CSRFService,
            _1.JhiTrackerService,
            _1.AuthServerProvider,
            _1.SocialService,
            _1.UserService,
            common_1.DatePipe
        ],
        entryComponents: [_1.JhiLoginModalComponent],
        exports: [
            _1.PacketAppSharedCommonModule,
            _1.JhiSocialComponent,
            _1.JhiLoginModalComponent,
            _1.HasAnyAuthorityDirective,
            common_1.DatePipe
        ],
        schemas: [core_1.CUSTOM_ELEMENTS_SCHEMA]
    })
], PacketAppSharedModule);
exports.PacketAppSharedModule = PacketAppSharedModule;


/***/ }),

/***/ "./src/main/webapp/app/shared/social/social.component.html":
/***/ (function(module, exports) {

module.exports = "<form ngNoForm action=\"{{ providerURL }}\" method=\"POST\"> <button type=\"submit\" class=\"btn btn-block jh-btn-social jh-btn-{{ provider }}\"> <span jhiTranslate=\"social.btnLabel\" translateValues=\"{ label: '{{label}}' }\">Sign in with {{ label }}</span> </button> <input name=\"scope\" type=\"hidden\" value=\"{{ providerSetting }}\"/> <input name=\"_csrf\" type=\"hidden\" value=\"{{ csrf }}\"/> </form> ";

/***/ }),

/***/ "./src/main/webapp/app/shared/social/social.component.ts":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = __webpack_require__(0);
var social_service_1 = __webpack_require__("./src/main/webapp/app/shared/social/social.service.ts");
var csrf_service_1 = __webpack_require__("./src/main/webapp/app/shared/auth/csrf.service.ts");
var JhiSocialComponent = (function () {
    function JhiSocialComponent(csrfService, socialService) {
        this.csrfService = csrfService;
        this.socialService = socialService;
    }
    JhiSocialComponent.prototype.ngOnInit = function () {
        this.label = this.provider.charAt(0).toUpperCase() + this.provider.slice(1);
        this.providerSetting = this.socialService.getProviderSetting(this.provider);
        this.providerURL = this.socialService.getProviderURL(this.provider);
        this.csrf = this.csrfService.getCSRF();
    };
    return JhiSocialComponent;
}());
__decorate([
    core_1.Input(),
    __metadata("design:type", String)
], JhiSocialComponent.prototype, "provider", void 0);
JhiSocialComponent = __decorate([
    core_1.Component({
        selector: 'jhi-social',
        template: __webpack_require__("./src/main/webapp/app/shared/social/social.component.html")
    }),
    __metadata("design:paramtypes", [csrf_service_1.CSRFService,
        social_service_1.SocialService])
], JhiSocialComponent);
exports.JhiSocialComponent = JhiSocialComponent;


/***/ }),

/***/ "./src/main/webapp/app/shared/social/social.service.ts":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = __webpack_require__(0);
var SocialService = (function () {
    function SocialService() {
    }
    SocialService.prototype.getProviderSetting = function (provider) {
        switch (provider) {
            case 'google': return 'https://www.googleapis.com/auth/userinfo.profile https://www.googleapis.com/auth/userinfo.email';
            case 'facebook': return 'public_profile,email';
            case 'twitter': return '';
            // jhipster-needle-add-social-button
            default: return 'Provider setting not defined';
        }
    };
    SocialService.prototype.getProviderURL = function (provider) {
        return 'signin/' + provider;
    };
    return SocialService;
}());
SocialService = __decorate([
    core_1.Injectable(),
    __metadata("design:paramtypes", [])
], SocialService);
exports.SocialService = SocialService;


/***/ }),

/***/ "./src/main/webapp/app/shared/tracker/tracker.service.ts":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = __webpack_require__(0);
var router_1 = __webpack_require__(7);
var Rx_1 = __webpack_require__(19);
var csrf_service_1 = __webpack_require__("./src/main/webapp/app/shared/auth/csrf.service.ts");
var window_service_1 = __webpack_require__("./src/main/webapp/app/shared/tracker/window.service.ts");
var auth_jwt_service_1 = __webpack_require__("./src/main/webapp/app/shared/auth/auth-jwt.service.ts");
var SockJS = __webpack_require__(23);
var Stomp = __webpack_require__(24);
var JhiTrackerService = (function () {
    function JhiTrackerService(router, authServerProvider, $window, csrfService) {
        this.router = router;
        this.authServerProvider = authServerProvider;
        this.$window = $window;
        this.csrfService = csrfService;
        this.stompClient = null;
        this.subscriber = null;
        this.alreadyConnectedOnce = false;
        this.connection = this.createConnection();
        this.listener = this.createListener();
    }
    JhiTrackerService.prototype.connect = function () {
        var _this = this;
        if (this.connectedPromise === null) {
            this.connection = this.createConnection();
        }
        // building absolute path so that websocket doesn't fail when deploying with a context path
        var loc = this.$window.nativeWindow.location;
        var url;
        url = '//' + loc.host + loc.pathname + 'websocket/tracker';
        var authToken = this.authServerProvider.getToken();
        if (authToken) {
            url += '?access_token=' + authToken;
        }
        var socket = new SockJS(url);
        this.stompClient = Stomp.over(socket);
        var headers = {};
        this.stompClient.connect(headers, function () {
            _this.connectedPromise('success');
            _this.connectedPromise = null;
            _this.sendActivity();
            if (!_this.alreadyConnectedOnce) {
                _this.subscription = _this.router.events.subscribe(function (event) {
                    if (event instanceof router_1.NavigationEnd) {
                        _this.sendActivity();
                    }
                });
                _this.alreadyConnectedOnce = true;
            }
        });
    };
    JhiTrackerService.prototype.disconnect = function () {
        if (this.stompClient !== null) {
            this.stompClient.disconnect();
            this.stompClient = null;
        }
        if (this.subscription) {
            this.subscription.unsubscribe();
            this.subscription = null;
        }
        this.alreadyConnectedOnce = false;
    };
    JhiTrackerService.prototype.receive = function () {
        return this.listener;
    };
    JhiTrackerService.prototype.sendActivity = function () {
        if (this.stompClient !== null && this.stompClient.connected) {
            this.stompClient.send('/topic/activity', // destination
            JSON.stringify({ 'page': this.router.routerState.snapshot.url }), // body
            {} // header
            );
        }
    };
    JhiTrackerService.prototype.subscribe = function () {
        var _this = this;
        this.connection.then(function () {
            _this.subscriber = _this.stompClient.subscribe('/topic/tracker', function (data) {
                _this.listenerObserver.next(JSON.parse(data.body));
            });
        });
    };
    JhiTrackerService.prototype.unsubscribe = function () {
        if (this.subscriber !== null) {
            this.subscriber.unsubscribe();
        }
        this.listener = this.createListener();
    };
    JhiTrackerService.prototype.createListener = function () {
        var _this = this;
        return new Rx_1.Observable(function (observer) {
            _this.listenerObserver = observer;
        });
    };
    JhiTrackerService.prototype.createConnection = function () {
        var _this = this;
        return new Promise(function (resolve, reject) { return _this.connectedPromise = resolve; });
    };
    return JhiTrackerService;
}());
JhiTrackerService = __decorate([
    core_1.Injectable(),
    __metadata("design:paramtypes", [router_1.Router,
        auth_jwt_service_1.AuthServerProvider,
        window_service_1.WindowRef,
        csrf_service_1.CSRFService])
], JhiTrackerService);
exports.JhiTrackerService = JhiTrackerService;


/***/ }),

/***/ "./src/main/webapp/app/shared/tracker/window.service.ts":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = __webpack_require__(0);
function _window() {
    // return the global native browser window object
    return window;
}
var WindowRef = (function () {
    function WindowRef() {
    }
    Object.defineProperty(WindowRef.prototype, "nativeWindow", {
        get: function () {
            return _window();
        },
        enumerable: true,
        configurable: true
    });
    return WindowRef;
}());
WindowRef = __decorate([
    core_1.Injectable()
], WindowRef);
exports.WindowRef = WindowRef;


/***/ }),

/***/ "./src/main/webapp/app/shared/user/account.model.ts":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var Account = (function () {
    function Account(activated, authorities, email, firstName, langKey, lastName, login, imageUrl) {
        this.activated = activated;
        this.authorities = authorities;
        this.email = email;
        this.firstName = firstName;
        this.langKey = langKey;
        this.lastName = lastName;
        this.login = login;
        this.imageUrl = imageUrl;
    }
    return Account;
}());
exports.Account = Account;


/***/ }),

/***/ "./src/main/webapp/app/shared/user/user.model.ts":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var User = (function () {
    function User(id, login, firstName, lastName, email, activated, langKey, authorities, createdBy, createdDate, lastModifiedBy, lastModifiedDate, password) {
        this.id = id ? id : null;
        this.login = login ? login : null;
        this.firstName = firstName ? firstName : null;
        this.lastName = lastName ? lastName : null;
        this.email = email ? email : null;
        this.activated = activated ? activated : false;
        this.langKey = langKey ? langKey : null;
        this.authorities = authorities ? authorities : null;
        this.createdBy = createdBy ? createdBy : null;
        this.createdDate = createdDate ? createdDate : null;
        this.lastModifiedBy = lastModifiedBy ? lastModifiedBy : null;
        this.lastModifiedDate = lastModifiedDate ? lastModifiedDate : null;
        this.password = password ? password : null;
    }
    return User;
}());
exports.User = User;


/***/ }),

/***/ "./src/main/webapp/app/shared/user/user.service.ts":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = __webpack_require__(0);
var http_1 = __webpack_require__(8);
var response_wrapper_model_1 = __webpack_require__("./src/main/webapp/app/shared/model/response-wrapper.model.ts");
var request_util_1 = __webpack_require__("./src/main/webapp/app/shared/model/request-util.ts");
var UserService = (function () {
    function UserService(http) {
        this.http = http;
        this.resourceUrl = 'api/users';
    }
    UserService.prototype.create = function (user) {
        var _this = this;
        return this.http.post(this.resourceUrl, user)
            .map(function (res) { return _this.convertResponse(res); });
    };
    UserService.prototype.update = function (user) {
        var _this = this;
        return this.http.put(this.resourceUrl, user)
            .map(function (res) { return _this.convertResponse(res); });
    };
    UserService.prototype.find = function (login) {
        return this.http.get(this.resourceUrl + "/" + login).map(function (res) { return res.json(); });
    };
    UserService.prototype.query = function (req) {
        var _this = this;
        var options = request_util_1.createRequestOption(req);
        return this.http.get(this.resourceUrl, options)
            .map(function (res) { return _this.convertResponse(res); });
    };
    UserService.prototype.delete = function (login) {
        return this.http.delete(this.resourceUrl + "/" + login);
    };
    UserService.prototype.authorities = function () {
        return this.http.get('api/users/authorities').map(function (res) {
            var json = res.json();
            return json;
        });
    };
    UserService.prototype.convertResponse = function (res) {
        var jsonResponse = res.json();
        return new response_wrapper_model_1.ResponseWrapper(res.headers, jsonResponse, res.status);
    };
    return UserService;
}());
UserService = __decorate([
    core_1.Injectable(),
    __metadata("design:paramtypes", [http_1.Http])
], UserService);
exports.UserService = UserService;


/***/ }),

/***/ "./src/main/webapp/content/images/hipster.png":
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "ca854e6d0785ba4b9d715049c0bdbcb3.png";

/***/ }),

/***/ "./src/main/webapp/content/images/hipster2x.png":
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "1cd3a1d782e85ba37677c1a2099bc002.png";

/***/ }),

/***/ "./src/main/webapp/content/images/logo-jhipster.png":
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "a30deb26b4eb1521433021e326cbcc2c.png";

/***/ }),

/***/ 0:
/***/ (function(module, exports, __webpack_require__) {

module.exports = (__webpack_require__(2))(1);

/***/ }),

/***/ 12:
/***/ (function(module, exports, __webpack_require__) {

module.exports = (__webpack_require__(2))(236);

/***/ }),

/***/ 13:
/***/ (function(module, exports, __webpack_require__) {

module.exports = (__webpack_require__(2))(79);

/***/ }),

/***/ 14:
/***/ (function(module, exports, __webpack_require__) {

module.exports = (__webpack_require__(2))(0);

/***/ }),

/***/ 15:
/***/ (function(module, exports, __webpack_require__) {

module.exports = (__webpack_require__(2))(11);

/***/ }),

/***/ 16:
/***/ (function(module, exports, __webpack_require__) {

module.exports = (__webpack_require__(2))(33);

/***/ }),

/***/ 18:
/***/ (function(module, exports, __webpack_require__) {

module.exports = (__webpack_require__(2))(233);

/***/ }),

/***/ 19:
/***/ (function(module, exports, __webpack_require__) {

module.exports = (__webpack_require__(2))(99);

/***/ }),

/***/ 20:
/***/ (function(module, exports, __webpack_require__) {

module.exports = (__webpack_require__(2))(19);

/***/ }),

/***/ 21:
/***/ (function(module, exports, __webpack_require__) {

module.exports = (__webpack_require__(2))(230);

/***/ }),

/***/ 22:
/***/ (function(module, exports, __webpack_require__) {

module.exports = (__webpack_require__(2))(237);

/***/ }),

/***/ 23:
/***/ (function(module, exports, __webpack_require__) {

module.exports = (__webpack_require__(2))(238);

/***/ }),

/***/ 24:
/***/ (function(module, exports, __webpack_require__) {

module.exports = (__webpack_require__(2))(239);

/***/ }),

/***/ 25:
/***/ (function(module, exports, __webpack_require__) {

module.exports = (__webpack_require__(2))(240);

/***/ }),

/***/ 26:
/***/ (function(module, exports, __webpack_require__) {

module.exports = (__webpack_require__(2))(244);

/***/ }),

/***/ 29:
/***/ (function(module, exports, __webpack_require__) {

module.exports = (__webpack_require__(2))(9);

/***/ }),

/***/ 30:
/***/ (function(module, exports, __webpack_require__) {

__webpack_require__("./node_modules/webpack-dev-server/client/index.js?http:/localhost:9060");
__webpack_require__("./node_modules/webpack/hot/dev-server.js");
module.exports = __webpack_require__("./src/main/webapp/app/app.main.ts");


/***/ }),

/***/ 5:
/***/ (function(module, exports, __webpack_require__) {

module.exports = (__webpack_require__(2))(235);

/***/ }),

/***/ 7:
/***/ (function(module, exports, __webpack_require__) {

module.exports = (__webpack_require__(2))(231);

/***/ }),

/***/ 8:
/***/ (function(module, exports, __webpack_require__) {

module.exports = (__webpack_require__(2))(47);

/***/ }),

/***/ 9:
/***/ (function(module, exports, __webpack_require__) {

module.exports = (__webpack_require__(2))(232);

/***/ })

},[30]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9zcmMvbWFpbi93ZWJhcHAvYXBwL2FjY291bnQvcGFzc3dvcmQvcGFzc3dvcmQtc3RyZW5ndGgtYmFyLnNjc3MiLCJ3ZWJwYWNrOi8vLy4vc3JjL21haW4vd2ViYXBwL2FwcC9ob21lL2hvbWUuc2NzcyIsIndlYnBhY2s6Ly8vLi9zcmMvbWFpbi93ZWJhcHAvYXBwL2xheW91dHMvbmF2YmFyL25hdmJhci5zY3NzIiwid2VicGFjazovLy8uL3NyYy9tYWluL3dlYmFwcC9hcHAvbGF5b3V0cy9wcm9maWxlcy9wYWdlLXJpYmJvbi5zY3NzIiwid2VicGFjazovLy8uL34vbmcyLXRyYW5zbGF0ZS9uZzItdHJhbnNsYXRlLmpzIiwid2VicGFjazovLy8uL3NyYy9tYWluL3dlYmFwcC9hcHAvYWNjb3VudC9hY2NvdW50Lm1vZHVsZS50cyIsIndlYnBhY2s6Ly8vLi9zcmMvbWFpbi93ZWJhcHAvYXBwL2FjY291bnQvYWNjb3VudC5yb3V0ZS50cyIsIndlYnBhY2s6Ly8vLi9zcmMvbWFpbi93ZWJhcHAvYXBwL2FjY291bnQvYWN0aXZhdGUvYWN0aXZhdGUuY29tcG9uZW50Lmh0bWwiLCJ3ZWJwYWNrOi8vLy4vc3JjL21haW4vd2ViYXBwL2FwcC9hY2NvdW50L2FjdGl2YXRlL2FjdGl2YXRlLmNvbXBvbmVudC50cyIsIndlYnBhY2s6Ly8vLi9zcmMvbWFpbi93ZWJhcHAvYXBwL2FjY291bnQvYWN0aXZhdGUvYWN0aXZhdGUucm91dGUudHMiLCJ3ZWJwYWNrOi8vLy4vc3JjL21haW4vd2ViYXBwL2FwcC9hY2NvdW50L2FjdGl2YXRlL2FjdGl2YXRlLnNlcnZpY2UudHMiLCJ3ZWJwYWNrOi8vLy4vc3JjL21haW4vd2ViYXBwL2FwcC9hY2NvdW50L2luZGV4LnRzIiwid2VicGFjazovLy8uL3NyYy9tYWluL3dlYmFwcC9hcHAvYWNjb3VudC9wYXNzd29yZC1yZXNldC9maW5pc2gvcGFzc3dvcmQtcmVzZXQtZmluaXNoLmNvbXBvbmVudC5odG1sIiwid2VicGFjazovLy8uL3NyYy9tYWluL3dlYmFwcC9hcHAvYWNjb3VudC9wYXNzd29yZC1yZXNldC9maW5pc2gvcGFzc3dvcmQtcmVzZXQtZmluaXNoLmNvbXBvbmVudC50cyIsIndlYnBhY2s6Ly8vLi9zcmMvbWFpbi93ZWJhcHAvYXBwL2FjY291bnQvcGFzc3dvcmQtcmVzZXQvZmluaXNoL3Bhc3N3b3JkLXJlc2V0LWZpbmlzaC5yb3V0ZS50cyIsIndlYnBhY2s6Ly8vLi9zcmMvbWFpbi93ZWJhcHAvYXBwL2FjY291bnQvcGFzc3dvcmQtcmVzZXQvZmluaXNoL3Bhc3N3b3JkLXJlc2V0LWZpbmlzaC5zZXJ2aWNlLnRzIiwid2VicGFjazovLy8uL3NyYy9tYWluL3dlYmFwcC9hcHAvYWNjb3VudC9wYXNzd29yZC1yZXNldC9pbml0L3Bhc3N3b3JkLXJlc2V0LWluaXQuY29tcG9uZW50Lmh0bWwiLCJ3ZWJwYWNrOi8vLy4vc3JjL21haW4vd2ViYXBwL2FwcC9hY2NvdW50L3Bhc3N3b3JkLXJlc2V0L2luaXQvcGFzc3dvcmQtcmVzZXQtaW5pdC5jb21wb25lbnQudHMiLCJ3ZWJwYWNrOi8vLy4vc3JjL21haW4vd2ViYXBwL2FwcC9hY2NvdW50L3Bhc3N3b3JkLXJlc2V0L2luaXQvcGFzc3dvcmQtcmVzZXQtaW5pdC5yb3V0ZS50cyIsIndlYnBhY2s6Ly8vLi9zcmMvbWFpbi93ZWJhcHAvYXBwL2FjY291bnQvcGFzc3dvcmQtcmVzZXQvaW5pdC9wYXNzd29yZC1yZXNldC1pbml0LnNlcnZpY2UudHMiLCJ3ZWJwYWNrOi8vLy4vc3JjL21haW4vd2ViYXBwL2FwcC9hY2NvdW50L3Bhc3N3b3JkL3Bhc3N3b3JkLXN0cmVuZ3RoLWJhci5jb21wb25lbnQudHMiLCJ3ZWJwYWNrOi8vLy4vc3JjL21haW4vd2ViYXBwL2FwcC9hY2NvdW50L3Bhc3N3b3JkL3Bhc3N3b3JkLXN0cmVuZ3RoLWJhci5zY3NzP2Y5MTgiLCJ3ZWJwYWNrOi8vLy4vc3JjL21haW4vd2ViYXBwL2FwcC9hY2NvdW50L3Bhc3N3b3JkL3Bhc3N3b3JkLmNvbXBvbmVudC5odG1sIiwid2VicGFjazovLy8uL3NyYy9tYWluL3dlYmFwcC9hcHAvYWNjb3VudC9wYXNzd29yZC9wYXNzd29yZC5jb21wb25lbnQudHMiLCJ3ZWJwYWNrOi8vLy4vc3JjL21haW4vd2ViYXBwL2FwcC9hY2NvdW50L3Bhc3N3b3JkL3Bhc3N3b3JkLnJvdXRlLnRzIiwid2VicGFjazovLy8uL3NyYy9tYWluL3dlYmFwcC9hcHAvYWNjb3VudC9wYXNzd29yZC9wYXNzd29yZC5zZXJ2aWNlLnRzIiwid2VicGFjazovLy8uL3NyYy9tYWluL3dlYmFwcC9hcHAvYWNjb3VudC9yZWdpc3Rlci9yZWdpc3Rlci5jb21wb25lbnQuaHRtbCIsIndlYnBhY2s6Ly8vLi9zcmMvbWFpbi93ZWJhcHAvYXBwL2FjY291bnQvcmVnaXN0ZXIvcmVnaXN0ZXIuY29tcG9uZW50LnRzIiwid2VicGFjazovLy8uL3NyYy9tYWluL3dlYmFwcC9hcHAvYWNjb3VudC9yZWdpc3Rlci9yZWdpc3Rlci5yb3V0ZS50cyIsIndlYnBhY2s6Ly8vLi9zcmMvbWFpbi93ZWJhcHAvYXBwL2FjY291bnQvcmVnaXN0ZXIvcmVnaXN0ZXIuc2VydmljZS50cyIsIndlYnBhY2s6Ly8vLi9zcmMvbWFpbi93ZWJhcHAvYXBwL2FjY291bnQvc2V0dGluZ3Mvc2V0dGluZ3MuY29tcG9uZW50Lmh0bWwiLCJ3ZWJwYWNrOi8vLy4vc3JjL21haW4vd2ViYXBwL2FwcC9hY2NvdW50L3NldHRpbmdzL3NldHRpbmdzLmNvbXBvbmVudC50cyIsIndlYnBhY2s6Ly8vLi9zcmMvbWFpbi93ZWJhcHAvYXBwL2FjY291bnQvc2V0dGluZ3Mvc2V0dGluZ3Mucm91dGUudHMiLCJ3ZWJwYWNrOi8vLy4vc3JjL21haW4vd2ViYXBwL2FwcC9hY2NvdW50L3NvY2lhbC9zb2NpYWwtYXV0aC5jb21wb25lbnQudHMiLCJ3ZWJwYWNrOi8vLy4vc3JjL21haW4vd2ViYXBwL2FwcC9hY2NvdW50L3NvY2lhbC9zb2NpYWwtcmVnaXN0ZXIuY29tcG9uZW50Lmh0bWwiLCJ3ZWJwYWNrOi8vLy4vc3JjL21haW4vd2ViYXBwL2FwcC9hY2NvdW50L3NvY2lhbC9zb2NpYWwtcmVnaXN0ZXIuY29tcG9uZW50LnRzIiwid2VicGFjazovLy8uL3NyYy9tYWluL3dlYmFwcC9hcHAvYWNjb3VudC9zb2NpYWwvc29jaWFsLnJvdXRlLnRzIiwid2VicGFjazovLy8uL3NyYy9tYWluL3dlYmFwcC9hcHAvYWRtaW4vYWRtaW4ubW9kdWxlLnRzIiwid2VicGFjazovLy8uL3NyYy9tYWluL3dlYmFwcC9hcHAvYWRtaW4vYWRtaW4ucm91dGUudHMiLCJ3ZWJwYWNrOi8vLy4vc3JjL21haW4vd2ViYXBwL2FwcC9hZG1pbi9hdWRpdHMvYXVkaXQtZGF0YS5tb2RlbC50cyIsIndlYnBhY2s6Ly8vLi9zcmMvbWFpbi93ZWJhcHAvYXBwL2FkbWluL2F1ZGl0cy9hdWRpdC5tb2RlbC50cyIsIndlYnBhY2s6Ly8vLi9zcmMvbWFpbi93ZWJhcHAvYXBwL2FkbWluL2F1ZGl0cy9hdWRpdHMuY29tcG9uZW50Lmh0bWwiLCJ3ZWJwYWNrOi8vLy4vc3JjL21haW4vd2ViYXBwL2FwcC9hZG1pbi9hdWRpdHMvYXVkaXRzLmNvbXBvbmVudC50cyIsIndlYnBhY2s6Ly8vLi9zcmMvbWFpbi93ZWJhcHAvYXBwL2FkbWluL2F1ZGl0cy9hdWRpdHMucm91dGUudHMiLCJ3ZWJwYWNrOi8vLy4vc3JjL21haW4vd2ViYXBwL2FwcC9hZG1pbi9hdWRpdHMvYXVkaXRzLnNlcnZpY2UudHMiLCJ3ZWJwYWNrOi8vLy4vc3JjL21haW4vd2ViYXBwL2FwcC9hZG1pbi9jb25maWd1cmF0aW9uL2NvbmZpZ3VyYXRpb24uY29tcG9uZW50Lmh0bWwiLCJ3ZWJwYWNrOi8vLy4vc3JjL21haW4vd2ViYXBwL2FwcC9hZG1pbi9jb25maWd1cmF0aW9uL2NvbmZpZ3VyYXRpb24uY29tcG9uZW50LnRzIiwid2VicGFjazovLy8uL3NyYy9tYWluL3dlYmFwcC9hcHAvYWRtaW4vY29uZmlndXJhdGlvbi9jb25maWd1cmF0aW9uLnJvdXRlLnRzIiwid2VicGFjazovLy8uL3NyYy9tYWluL3dlYmFwcC9hcHAvYWRtaW4vY29uZmlndXJhdGlvbi9jb25maWd1cmF0aW9uLnNlcnZpY2UudHMiLCJ3ZWJwYWNrOi8vLy4vc3JjL21haW4vd2ViYXBwL2FwcC9hZG1pbi9kb2NzL2RvY3MuY29tcG9uZW50Lmh0bWwiLCJ3ZWJwYWNrOi8vLy4vc3JjL21haW4vd2ViYXBwL2FwcC9hZG1pbi9kb2NzL2RvY3MuY29tcG9uZW50LnRzIiwid2VicGFjazovLy8uL3NyYy9tYWluL3dlYmFwcC9hcHAvYWRtaW4vZG9jcy9kb2NzLnJvdXRlLnRzIiwid2VicGFjazovLy8uL3NyYy9tYWluL3dlYmFwcC9hcHAvYWRtaW4vaGVhbHRoL2hlYWx0aC1tb2RhbC5jb21wb25lbnQuaHRtbCIsIndlYnBhY2s6Ly8vLi9zcmMvbWFpbi93ZWJhcHAvYXBwL2FkbWluL2hlYWx0aC9oZWFsdGgtbW9kYWwuY29tcG9uZW50LnRzIiwid2VicGFjazovLy8uL3NyYy9tYWluL3dlYmFwcC9hcHAvYWRtaW4vaGVhbHRoL2hlYWx0aC5jb21wb25lbnQuaHRtbCIsIndlYnBhY2s6Ly8vLi9zcmMvbWFpbi93ZWJhcHAvYXBwL2FkbWluL2hlYWx0aC9oZWFsdGguY29tcG9uZW50LnRzIiwid2VicGFjazovLy8uL3NyYy9tYWluL3dlYmFwcC9hcHAvYWRtaW4vaGVhbHRoL2hlYWx0aC5yb3V0ZS50cyIsIndlYnBhY2s6Ly8vLi9zcmMvbWFpbi93ZWJhcHAvYXBwL2FkbWluL2hlYWx0aC9oZWFsdGguc2VydmljZS50cyIsIndlYnBhY2s6Ly8vLi9zcmMvbWFpbi93ZWJhcHAvYXBwL2FkbWluL2luZGV4LnRzIiwid2VicGFjazovLy8uL3NyYy9tYWluL3dlYmFwcC9hcHAvYWRtaW4vbG9ncy9sb2cubW9kZWwudHMiLCJ3ZWJwYWNrOi8vLy4vc3JjL21haW4vd2ViYXBwL2FwcC9hZG1pbi9sb2dzL2xvZ3MuY29tcG9uZW50Lmh0bWwiLCJ3ZWJwYWNrOi8vLy4vc3JjL21haW4vd2ViYXBwL2FwcC9hZG1pbi9sb2dzL2xvZ3MuY29tcG9uZW50LnRzIiwid2VicGFjazovLy8uL3NyYy9tYWluL3dlYmFwcC9hcHAvYWRtaW4vbG9ncy9sb2dzLnJvdXRlLnRzIiwid2VicGFjazovLy8uL3NyYy9tYWluL3dlYmFwcC9hcHAvYWRtaW4vbG9ncy9sb2dzLnNlcnZpY2UudHMiLCJ3ZWJwYWNrOi8vLy4vc3JjL21haW4vd2ViYXBwL2FwcC9hZG1pbi9tZXRyaWNzL21ldHJpY3MtbW9kYWwuY29tcG9uZW50Lmh0bWwiLCJ3ZWJwYWNrOi8vLy4vc3JjL21haW4vd2ViYXBwL2FwcC9hZG1pbi9tZXRyaWNzL21ldHJpY3MtbW9kYWwuY29tcG9uZW50LnRzIiwid2VicGFjazovLy8uL3NyYy9tYWluL3dlYmFwcC9hcHAvYWRtaW4vbWV0cmljcy9tZXRyaWNzLmNvbXBvbmVudC5odG1sIiwid2VicGFjazovLy8uL3NyYy9tYWluL3dlYmFwcC9hcHAvYWRtaW4vbWV0cmljcy9tZXRyaWNzLmNvbXBvbmVudC50cyIsIndlYnBhY2s6Ly8vLi9zcmMvbWFpbi93ZWJhcHAvYXBwL2FkbWluL21ldHJpY3MvbWV0cmljcy5yb3V0ZS50cyIsIndlYnBhY2s6Ly8vLi9zcmMvbWFpbi93ZWJhcHAvYXBwL2FkbWluL21ldHJpY3MvbWV0cmljcy5zZXJ2aWNlLnRzIiwid2VicGFjazovLy8uL3NyYy9tYWluL3dlYmFwcC9hcHAvYWRtaW4vdHJhY2tlci90cmFja2VyLmNvbXBvbmVudC5odG1sIiwid2VicGFjazovLy8uL3NyYy9tYWluL3dlYmFwcC9hcHAvYWRtaW4vdHJhY2tlci90cmFja2VyLmNvbXBvbmVudC50cyIsIndlYnBhY2s6Ly8vLi9zcmMvbWFpbi93ZWJhcHAvYXBwL2FkbWluL3RyYWNrZXIvdHJhY2tlci5yb3V0ZS50cyIsIndlYnBhY2s6Ly8vLi9zcmMvbWFpbi93ZWJhcHAvYXBwL2FkbWluL3VzZXItbWFuYWdlbWVudC91c2VyLW1hbmFnZW1lbnQtZGVsZXRlLWRpYWxvZy5jb21wb25lbnQuaHRtbCIsIndlYnBhY2s6Ly8vLi9zcmMvbWFpbi93ZWJhcHAvYXBwL2FkbWluL3VzZXItbWFuYWdlbWVudC91c2VyLW1hbmFnZW1lbnQtZGVsZXRlLWRpYWxvZy5jb21wb25lbnQudHMiLCJ3ZWJwYWNrOi8vLy4vc3JjL21haW4vd2ViYXBwL2FwcC9hZG1pbi91c2VyLW1hbmFnZW1lbnQvdXNlci1tYW5hZ2VtZW50LWRldGFpbC5jb21wb25lbnQuaHRtbCIsIndlYnBhY2s6Ly8vLi9zcmMvbWFpbi93ZWJhcHAvYXBwL2FkbWluL3VzZXItbWFuYWdlbWVudC91c2VyLW1hbmFnZW1lbnQtZGV0YWlsLmNvbXBvbmVudC50cyIsIndlYnBhY2s6Ly8vLi9zcmMvbWFpbi93ZWJhcHAvYXBwL2FkbWluL3VzZXItbWFuYWdlbWVudC91c2VyLW1hbmFnZW1lbnQtZGlhbG9nLmNvbXBvbmVudC5odG1sIiwid2VicGFjazovLy8uL3NyYy9tYWluL3dlYmFwcC9hcHAvYWRtaW4vdXNlci1tYW5hZ2VtZW50L3VzZXItbWFuYWdlbWVudC1kaWFsb2cuY29tcG9uZW50LnRzIiwid2VicGFjazovLy8uL3NyYy9tYWluL3dlYmFwcC9hcHAvYWRtaW4vdXNlci1tYW5hZ2VtZW50L3VzZXItbWFuYWdlbWVudC5jb21wb25lbnQuaHRtbCIsIndlYnBhY2s6Ly8vLi9zcmMvbWFpbi93ZWJhcHAvYXBwL2FkbWluL3VzZXItbWFuYWdlbWVudC91c2VyLW1hbmFnZW1lbnQuY29tcG9uZW50LnRzIiwid2VicGFjazovLy8uL3NyYy9tYWluL3dlYmFwcC9hcHAvYWRtaW4vdXNlci1tYW5hZ2VtZW50L3VzZXItbWFuYWdlbWVudC5yb3V0ZS50cyIsIndlYnBhY2s6Ly8vLi9zcmMvbWFpbi93ZWJhcHAvYXBwL2FkbWluL3VzZXItbWFuYWdlbWVudC91c2VyLW1vZGFsLnNlcnZpY2UudHMiLCJ3ZWJwYWNrOi8vLy4vc3JjL21haW4vd2ViYXBwL2FwcC9hcHAuY29uc3RhbnRzLnRzIiwid2VicGFjazovLy8uL3NyYy9tYWluL3dlYmFwcC9hcHAvYXBwLm1haW4udHMiLCJ3ZWJwYWNrOi8vLy4vc3JjL21haW4vd2ViYXBwL2FwcC9hcHAubW9kdWxlLnRzIiwid2VicGFjazovLy8uL3NyYy9tYWluL3dlYmFwcC9hcHAvYXBwLnJvdXRlLnRzIiwid2VicGFjazovLy8uL3NyYy9tYWluL3dlYmFwcC9hcHAvYmxvY2tzL2NvbmZpZy9wcm9kLmNvbmZpZy50cyIsIndlYnBhY2s6Ly8vLi9zcmMvbWFpbi93ZWJhcHAvYXBwL2Jsb2Nrcy9jb25maWcvdWliLXBhZ2luYXRpb24uY29uZmlnLnRzIiwid2VicGFjazovLy8uL3NyYy9tYWluL3dlYmFwcC9hcHAvYmxvY2tzL2ludGVyY2VwdG9yL2F1dGgtZXhwaXJlZC5pbnRlcmNlcHRvci50cyIsIndlYnBhY2s6Ly8vLi9zcmMvbWFpbi93ZWJhcHAvYXBwL2Jsb2Nrcy9pbnRlcmNlcHRvci9hdXRoLmludGVyY2VwdG9yLnRzIiwid2VicGFjazovLy8uL3NyYy9tYWluL3dlYmFwcC9hcHAvYmxvY2tzL2ludGVyY2VwdG9yL2Vycm9yaGFuZGxlci5pbnRlcmNlcHRvci50cyIsIndlYnBhY2s6Ly8vLi9zcmMvbWFpbi93ZWJhcHAvYXBwL2Jsb2Nrcy9pbnRlcmNlcHRvci9odHRwLnByb3ZpZGVyLnRzIiwid2VicGFjazovLy8uL3NyYy9tYWluL3dlYmFwcC9hcHAvYmxvY2tzL2ludGVyY2VwdG9yL25vdGlmaWNhdGlvbi5pbnRlcmNlcHRvci50cyIsIndlYnBhY2s6Ly8vLi9zcmMvbWFpbi93ZWJhcHAvYXBwL2VudGl0aWVzL2VudGl0eS5tb2R1bGUudHMiLCJ3ZWJwYWNrOi8vLy4vc3JjL21haW4vd2ViYXBwL2FwcC9ob21lL2hvbWUuY29tcG9uZW50Lmh0bWwiLCJ3ZWJwYWNrOi8vLy4vc3JjL21haW4vd2ViYXBwL2FwcC9ob21lL2hvbWUuY29tcG9uZW50LnRzIiwid2VicGFjazovLy8uL3NyYy9tYWluL3dlYmFwcC9hcHAvaG9tZS9ob21lLm1vZHVsZS50cyIsIndlYnBhY2s6Ly8vLi9zcmMvbWFpbi93ZWJhcHAvYXBwL2hvbWUvaG9tZS5yb3V0ZS50cyIsIndlYnBhY2s6Ly8vLi9zcmMvbWFpbi93ZWJhcHAvYXBwL2hvbWUvaG9tZS5zY3NzPzQ2MzMiLCJ3ZWJwYWNrOi8vLy4vc3JjL21haW4vd2ViYXBwL2FwcC9ob21lL2luZGV4LnRzIiwid2VicGFjazovLy8uL3NyYy9tYWluL3dlYmFwcC9hcHAvbGF5b3V0cy9lcnJvci9lcnJvci5jb21wb25lbnQuaHRtbCIsIndlYnBhY2s6Ly8vLi9zcmMvbWFpbi93ZWJhcHAvYXBwL2xheW91dHMvZXJyb3IvZXJyb3IuY29tcG9uZW50LnRzIiwid2VicGFjazovLy8uL3NyYy9tYWluL3dlYmFwcC9hcHAvbGF5b3V0cy9lcnJvci9lcnJvci5yb3V0ZS50cyIsIndlYnBhY2s6Ly8vLi9zcmMvbWFpbi93ZWJhcHAvYXBwL2xheW91dHMvZm9vdGVyL2Zvb3Rlci5jb21wb25lbnQuaHRtbCIsIndlYnBhY2s6Ly8vLi9zcmMvbWFpbi93ZWJhcHAvYXBwL2xheW91dHMvZm9vdGVyL2Zvb3Rlci5jb21wb25lbnQudHMiLCJ3ZWJwYWNrOi8vLy4vc3JjL21haW4vd2ViYXBwL2FwcC9sYXlvdXRzL2luZGV4LnRzIiwid2VicGFjazovLy8uL3NyYy9tYWluL3dlYmFwcC9hcHAvbGF5b3V0cy9sYXlvdXQtcm91dGluZy5tb2R1bGUudHMiLCJ3ZWJwYWNrOi8vLy4vc3JjL21haW4vd2ViYXBwL2FwcC9sYXlvdXRzL21haW4vbWFpbi5jb21wb25lbnQuaHRtbCIsIndlYnBhY2s6Ly8vLi9zcmMvbWFpbi93ZWJhcHAvYXBwL2xheW91dHMvbWFpbi9tYWluLmNvbXBvbmVudC50cyIsIndlYnBhY2s6Ly8vLi9zcmMvbWFpbi93ZWJhcHAvYXBwL2xheW91dHMvbmF2YmFyL2FjdGl2ZS1tZW51LmRpcmVjdGl2ZS50cyIsIndlYnBhY2s6Ly8vLi9zcmMvbWFpbi93ZWJhcHAvYXBwL2xheW91dHMvbmF2YmFyL25hdmJhci5jb21wb25lbnQuaHRtbCIsIndlYnBhY2s6Ly8vLi9zcmMvbWFpbi93ZWJhcHAvYXBwL2xheW91dHMvbmF2YmFyL25hdmJhci5jb21wb25lbnQudHMiLCJ3ZWJwYWNrOi8vLy4vc3JjL21haW4vd2ViYXBwL2FwcC9sYXlvdXRzL25hdmJhci9uYXZiYXIuc2Nzcz9jN2Q5Iiwid2VicGFjazovLy8uL3NyYy9tYWluL3dlYmFwcC9hcHAvbGF5b3V0cy9wcm9maWxlcy9wYWdlLXJpYmJvbi5jb21wb25lbnQudHMiLCJ3ZWJwYWNrOi8vLy4vc3JjL21haW4vd2ViYXBwL2FwcC9sYXlvdXRzL3Byb2ZpbGVzL3BhZ2UtcmliYm9uLnNjc3M/ZDA2MiIsIndlYnBhY2s6Ly8vLi9zcmMvbWFpbi93ZWJhcHAvYXBwL2xheW91dHMvcHJvZmlsZXMvcHJvZmlsZS1pbmZvLm1vZGVsLnRzIiwid2VicGFjazovLy8uL3NyYy9tYWluL3dlYmFwcC9hcHAvbGF5b3V0cy9wcm9maWxlcy9wcm9maWxlLnNlcnZpY2UudHMiLCJ3ZWJwYWNrOi8vLy4vc3JjL21haW4vd2ViYXBwL2FwcC9zaGFyZWQvYWxlcnQvYWxlcnQtZXJyb3IuY29tcG9uZW50LnRzIiwid2VicGFjazovLy8uL3NyYy9tYWluL3dlYmFwcC9hcHAvc2hhcmVkL2FsZXJ0L2FsZXJ0LmNvbXBvbmVudC50cyIsIndlYnBhY2s6Ly8vLi9zcmMvbWFpbi93ZWJhcHAvYXBwL3NoYXJlZC9hdXRoL2FjY291bnQuc2VydmljZS50cyIsIndlYnBhY2s6Ly8vLi9zcmMvbWFpbi93ZWJhcHAvYXBwL3NoYXJlZC9hdXRoL2F1dGgtand0LnNlcnZpY2UudHMiLCJ3ZWJwYWNrOi8vLy4vc3JjL21haW4vd2ViYXBwL2FwcC9zaGFyZWQvYXV0aC9jc3JmLnNlcnZpY2UudHMiLCJ3ZWJwYWNrOi8vLy4vc3JjL21haW4vd2ViYXBwL2FwcC9zaGFyZWQvYXV0aC9oYXMtYW55LWF1dGhvcml0eS5kaXJlY3RpdmUudHMiLCJ3ZWJwYWNrOi8vLy4vc3JjL21haW4vd2ViYXBwL2FwcC9zaGFyZWQvYXV0aC9wcmluY2lwYWwuc2VydmljZS50cyIsIndlYnBhY2s6Ly8vLi9zcmMvbWFpbi93ZWJhcHAvYXBwL3NoYXJlZC9hdXRoL3N0YXRlLXN0b3JhZ2Uuc2VydmljZS50cyIsIndlYnBhY2s6Ly8vLi9zcmMvbWFpbi93ZWJhcHAvYXBwL3NoYXJlZC9hdXRoL3VzZXItcm91dGUtYWNjZXNzLXNlcnZpY2UudHMiLCJ3ZWJwYWNrOi8vLy4vc3JjL21haW4vd2ViYXBwL2FwcC9zaGFyZWQvY29uc3RhbnRzL3BhZ2luYXRpb24uY29uc3RhbnRzLnRzIiwid2VicGFjazovLy8uL3NyYy9tYWluL3dlYmFwcC9hcHAvc2hhcmVkL2luZGV4LnRzIiwid2VicGFjazovLy8uL3NyYy9tYWluL3dlYmFwcC9hcHAvc2hhcmVkL2xhbmd1YWdlL2xhbmd1YWdlLmNvbnN0YW50cy50cyIsIndlYnBhY2s6Ly8vLi9zcmMvbWFpbi93ZWJhcHAvYXBwL3NoYXJlZC9sYW5ndWFnZS9sYW5ndWFnZS5oZWxwZXIudHMiLCJ3ZWJwYWNrOi8vLy4vc3JjL21haW4vd2ViYXBwL2FwcC9zaGFyZWQvbGFuZ3VhZ2UvbGFuZ3VhZ2UucGlwZS50cyIsIndlYnBhY2s6Ly8vLi9zcmMvbWFpbi93ZWJhcHAvYXBwL3NoYXJlZC9sb2dpbi9sb2dpbi1tb2RhbC5zZXJ2aWNlLnRzIiwid2VicGFjazovLy8uL3NyYy9tYWluL3dlYmFwcC9hcHAvc2hhcmVkL2xvZ2luL2xvZ2luLmNvbXBvbmVudC5odG1sIiwid2VicGFjazovLy8uL3NyYy9tYWluL3dlYmFwcC9hcHAvc2hhcmVkL2xvZ2luL2xvZ2luLmNvbXBvbmVudC50cyIsIndlYnBhY2s6Ly8vLi9zcmMvbWFpbi93ZWJhcHAvYXBwL3NoYXJlZC9sb2dpbi9sb2dpbi5zZXJ2aWNlLnRzIiwid2VicGFjazovLy8uL3NyYy9tYWluL3dlYmFwcC9hcHAvc2hhcmVkL21vZGVsL3JlcXVlc3QtdXRpbC50cyIsIndlYnBhY2s6Ly8vLi9zcmMvbWFpbi93ZWJhcHAvYXBwL3NoYXJlZC9tb2RlbC9yZXNwb25zZS13cmFwcGVyLm1vZGVsLnRzIiwid2VicGFjazovLy8uL3NyYy9tYWluL3dlYmFwcC9hcHAvc2hhcmVkL3NoYXJlZC1jb21tb24ubW9kdWxlLnRzIiwid2VicGFjazovLy8uL3NyYy9tYWluL3dlYmFwcC9hcHAvc2hhcmVkL3NoYXJlZC1saWJzLm1vZHVsZS50cyIsIndlYnBhY2s6Ly8vLi9zcmMvbWFpbi93ZWJhcHAvYXBwL3NoYXJlZC9zaGFyZWQubW9kdWxlLnRzIiwid2VicGFjazovLy8uL3NyYy9tYWluL3dlYmFwcC9hcHAvc2hhcmVkL3NvY2lhbC9zb2NpYWwuY29tcG9uZW50Lmh0bWwiLCJ3ZWJwYWNrOi8vLy4vc3JjL21haW4vd2ViYXBwL2FwcC9zaGFyZWQvc29jaWFsL3NvY2lhbC5jb21wb25lbnQudHMiLCJ3ZWJwYWNrOi8vLy4vc3JjL21haW4vd2ViYXBwL2FwcC9zaGFyZWQvc29jaWFsL3NvY2lhbC5zZXJ2aWNlLnRzIiwid2VicGFjazovLy8uL3NyYy9tYWluL3dlYmFwcC9hcHAvc2hhcmVkL3RyYWNrZXIvdHJhY2tlci5zZXJ2aWNlLnRzIiwid2VicGFjazovLy8uL3NyYy9tYWluL3dlYmFwcC9hcHAvc2hhcmVkL3RyYWNrZXIvd2luZG93LnNlcnZpY2UudHMiLCJ3ZWJwYWNrOi8vLy4vc3JjL21haW4vd2ViYXBwL2FwcC9zaGFyZWQvdXNlci9hY2NvdW50Lm1vZGVsLnRzIiwid2VicGFjazovLy8uL3NyYy9tYWluL3dlYmFwcC9hcHAvc2hhcmVkL3VzZXIvdXNlci5tb2RlbC50cyIsIndlYnBhY2s6Ly8vLi9zcmMvbWFpbi93ZWJhcHAvYXBwL3NoYXJlZC91c2VyL3VzZXIuc2VydmljZS50cyIsIndlYnBhY2s6Ly8vLi9zcmMvbWFpbi93ZWJhcHAvY29udGVudC9pbWFnZXMvaGlwc3Rlci5wbmciLCJ3ZWJwYWNrOi8vLy4vc3JjL21haW4vd2ViYXBwL2NvbnRlbnQvaW1hZ2VzL2hpcHN0ZXIyeC5wbmciLCJ3ZWJwYWNrOi8vLy4vc3JjL21haW4vd2ViYXBwL2NvbnRlbnQvaW1hZ2VzL2xvZ28tamhpcHN0ZXIucG5nIiwid2VicGFjazovLy9kZWxlZ2F0ZWQgLi9ub2RlX21vZHVsZXMvQGFuZ3VsYXIvY29yZS9AYW5ndWxhci9jb3JlLmVzNS5qcyBmcm9tIGRsbC1yZWZlcmVuY2UgdmVuZG9yIiwid2VicGFjazovLy9kZWxlZ2F0ZWQgLi9ub2RlX21vZHVsZXMvbmcyLXdlYnN0b3JhZ2UvZGlzdC9hcHAuanMgZnJvbSBkbGwtcmVmZXJlbmNlIHZlbmRvciIsIndlYnBhY2s6Ly8vZGVsZWdhdGVkIC4vbm9kZV9tb2R1bGVzL25nMi10cmFuc2xhdGUvaW5kZXguanMgZnJvbSBkbGwtcmVmZXJlbmNlIHZlbmRvciIsIndlYnBhY2s6Ly8vZGVsZWdhdGVkIC4vbm9kZV9tb2R1bGVzL3J4anMvT2JzZXJ2YWJsZS5qcyBmcm9tIGRsbC1yZWZlcmVuY2UgdmVuZG9yIiwid2VicGFjazovLy9kZWxlZ2F0ZWQgLi9ub2RlX21vZHVsZXMvQGFuZ3VsYXIvY29tbW9uL0Bhbmd1bGFyL2NvbW1vbi5lczUuanMgZnJvbSBkbGwtcmVmZXJlbmNlIHZlbmRvciIsIndlYnBhY2s6Ly8vZGVsZWdhdGVkIC4vbm9kZV9tb2R1bGVzL0Bhbmd1bGFyL3BsYXRmb3JtLWJyb3dzZXIvQGFuZ3VsYXIvcGxhdGZvcm0tYnJvd3Nlci5lczUuanMgZnJvbSBkbGwtcmVmZXJlbmNlIHZlbmRvciIsIndlYnBhY2s6Ly8vZGVsZWdhdGVkIC4vbm9kZV9tb2R1bGVzL2FuZ3VsYXIyLWNvb2tpZS9jb3JlLmpzIGZyb20gZGxsLXJlZmVyZW5jZSB2ZW5kb3IiLCJ3ZWJwYWNrOi8vL2RlbGVnYXRlZCAuL25vZGVfbW9kdWxlcy9yeGpzL1J4LmpzIGZyb20gZGxsLXJlZmVyZW5jZSB2ZW5kb3IiLCJ3ZWJwYWNrOi8vL2RlbGVnYXRlZCAuL25vZGVfbW9kdWxlcy9AYW5ndWxhci9mb3Jtcy9AYW5ndWxhci9mb3Jtcy5lczUuanMgZnJvbSBkbGwtcmVmZXJlbmNlIHZlbmRvciIsIndlYnBhY2s6Ly8vZGVsZWdhdGVkIC4vbm9kZV9tb2R1bGVzL0Bhbmd1bGFyL3BsYXRmb3JtLWJyb3dzZXItZHluYW1pYy9AYW5ndWxhci9wbGF0Zm9ybS1icm93c2VyLWR5bmFtaWMuZXM1LmpzIGZyb20gZGxsLXJlZmVyZW5jZSB2ZW5kb3IiLCJ3ZWJwYWNrOi8vL2RlbGVnYXRlZCAuL25vZGVfbW9kdWxlcy9uZ3gtaW5maW5pdGUtc2Nyb2xsL21vZHVsZXMvbmd4LWluZmluaXRlLXNjcm9sbC5lczUuanMgZnJvbSBkbGwtcmVmZXJlbmNlIHZlbmRvciIsIndlYnBhY2s6Ly8vZGVsZWdhdGVkIC4vbm9kZV9tb2R1bGVzL3NvY2tqcy1jbGllbnQvbGliL2VudHJ5LmpzIGZyb20gZGxsLXJlZmVyZW5jZSB2ZW5kb3IiLCJ3ZWJwYWNrOi8vL2RlbGVnYXRlZCAuL25vZGVfbW9kdWxlcy93ZWJzdG9tcC1jbGllbnQvZGlzdC93ZWJzdG9tcC5qcyBmcm9tIGRsbC1yZWZlcmVuY2UgdmVuZG9yIiwid2VicGFjazovLy9kZWxlZ2F0ZWQgLi9zcmMvbWFpbi93ZWJhcHAvYXBwL3ZlbmRvci50cyBmcm9tIGRsbC1yZWZlcmVuY2UgdmVuZG9yIiwid2VicGFjazovLy9kZWxlZ2F0ZWQgLi9ub2RlX21vZHVsZXMvYW5ndWxhcjItY29va2llL3NlcnZpY2VzL2Nvb2tpZXMuc2VydmljZS5qcyBmcm9tIGRsbC1yZWZlcmVuY2UgdmVuZG9yIiwid2VicGFjazovLy9kZWxlZ2F0ZWQgLi9ub2RlX21vZHVsZXMvcnhqcy9TdWJqZWN0LmpzIGZyb20gZGxsLXJlZmVyZW5jZSB2ZW5kb3IiLCJ3ZWJwYWNrOi8vL2RlbGVnYXRlZCAuL25vZGVfbW9kdWxlcy9uZy1qaGlwc3Rlci9pbmRleC5qcyBmcm9tIGRsbC1yZWZlcmVuY2UgdmVuZG9yIiwid2VicGFjazovLy9kZWxlZ2F0ZWQgLi9ub2RlX21vZHVsZXMvQGFuZ3VsYXIvcm91dGVyL0Bhbmd1bGFyL3JvdXRlci5lczUuanMgZnJvbSBkbGwtcmVmZXJlbmNlIHZlbmRvciIsIndlYnBhY2s6Ly8vZGVsZWdhdGVkIC4vbm9kZV9tb2R1bGVzL0Bhbmd1bGFyL2h0dHAvQGFuZ3VsYXIvaHR0cC5lczUuanMgZnJvbSBkbGwtcmVmZXJlbmNlIHZlbmRvciIsIndlYnBhY2s6Ly8vZGVsZWdhdGVkIC4vbm9kZV9tb2R1bGVzL0BuZy1ib290c3RyYXAvbmctYm9vdHN0cmFwL2luZGV4LmpzIGZyb20gZGxsLXJlZmVyZW5jZSB2ZW5kb3IiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7QUFBQTtBQUNBOzs7QUFHQTtBQUNBLHVPQUF3TyxvQkFBb0IscUJBQXFCLGNBQWMsc0JBQXNCLGVBQWUsd0JBQXdCLEVBQUUsWUFBWSxxQkFBcUIsdUJBQXVCLDBCQUEwQixnQkFBZ0Isc0JBQXNCLGdCQUFnQixFQUFFLGlCQUFpQiwyQkFBMkIsRUFBRTs7QUFFdGhCOzs7Ozs7OztBQ1BBO0FBQ0E7OztBQUdBO0FBQ0EsbU5BQW9OLDBCQUEwQixpQkFBaUIsa0JBQWtCLHNIQUE4Riw2QkFBNkIsRUFBRSxtWUFBbVksY0FBYywwSEFBa0csK0JBQStCLEVBQUUsRUFBRTs7QUFFcDZCOzs7Ozs7OztBQ1BBO0FBQ0E7OztBQUdBO0FBQ0EsZ05BQWlOLG9CQUFvQixnQkFBZ0IsRUFBRSxnQkFBZ0IsOEJBQThCLHNCQUFzQixFQUFFLCtCQUErQix3QkFBd0IsbUJBQW1CLGtCQUFrQix5QkFBeUIsRUFBRSxzSEFBc0gsZ0NBQWdDLEVBQUUsd0NBQXdDLDBCQUEwQixFQUFFLDhCQUE4QixxQkFBcUIsRUFBRSwwQ0FBMEMsNEJBQTRCLEVBQUUsMkJBQTJCLHVCQUF1QixFQUFFLG1DQUFtQyxrQkFBa0IsdUJBQXVCLG9CQUFvQixFQUFFLDJDQUEyQyxvQkFBb0IsRUFBRSwwQ0FBMEMsd0JBQXdCLGtCQUFrQixFQUFFLEVBQUUsbUJBQW1CLDBCQUEwQiwyQkFBMkIsRUFBRSxtTUFBbU0sc0JBQXNCLEVBQUUsa0NBQWtDLG1CQUFtQixrQkFBa0IsNEJBQTRCLDZCQUE2QixpSUFBNEcsK0JBQStCLEVBQUU7O0FBRTltRDs7Ozs7Ozs7QUNQQTtBQUNBOzs7QUFHQTtBQUNBLHFOQUFzTiwyQ0FBMkMsaUJBQWlCLGtDQUFrQyxpQ0FB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Qzs7Ozs7OztBQ0FBLDZDOzs7Ozs7Ozs7Ozs7Ozs7OztBQ0FBLCtDOzs7Ozs7O0FDQUEsK0M7Ozs7Ozs7QUNBQSw4Qzs7Ozs7OztBQ0FBLCtDIiwiZmlsZSI6Im1haW4uYnVuZGxlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiZXhwb3J0cyA9IG1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcIi4uLy4uLy4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2xpYi9jc3MtYmFzZS5qc1wiKSh1bmRlZmluZWQpO1xuLy8gaW1wb3J0c1xuXG5cbi8vIG1vZHVsZVxuZXhwb3J0cy5wdXNoKFttb2R1bGUuaWQsIFwiLyogPT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT1cXG5zdGFydCBQYXNzd29yZCBzdHJlbmd0aCBiYXIgc3R5bGVcXG49PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PSAqL1xcbnVsI3N0cmVuZ3RoIHtcXG4gIGRpc3BsYXk6IGlubGluZTtcXG4gIGxpc3Qtc3R5bGU6IG5vbmU7XFxuICBtYXJnaW46IDA7XFxuICBtYXJnaW4tbGVmdDogMTVweDtcXG4gIHBhZGRpbmc6IDA7XFxuICB2ZXJ0aWNhbC1hbGlnbjogMnB4OyB9XFxuXFxuLnBvaW50IHtcXG4gIGJhY2tncm91bmQ6ICNEREQ7XFxuICBib3JkZXItcmFkaXVzOiAycHg7XFxuICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XFxuICBoZWlnaHQ6IDVweDtcXG4gIG1hcmdpbi1yaWdodDogMXB4O1xcbiAgd2lkdGg6IDIwcHg7IH1cXG4gIC5wb2ludDpsYXN0IHtcXG4gICAgbWFyZ2luOiAwICFpbXBvcnRhbnQ7IH1cXG5cIiwgXCJcIl0pO1xuXG4vLyBleHBvcnRzXG5cblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL34vY3NzLWxvYWRlciEuL34vc2Fzcy1sb2FkZXIvbGliL2xvYWRlci5qcyEuL3NyYy9tYWluL3dlYmFwcC9hcHAvYWNjb3VudC9wYXNzd29yZC9wYXNzd29yZC1zdHJlbmd0aC1iYXIuc2Nzc1xuLy8gbW9kdWxlIGlkID0gLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9pbmRleC5qcyEuL25vZGVfbW9kdWxlcy9zYXNzLWxvYWRlci9saWIvbG9hZGVyLmpzIS4vc3JjL21haW4vd2ViYXBwL2FwcC9hY2NvdW50L3Bhc3N3b3JkL3Bhc3N3b3JkLXN0cmVuZ3RoLWJhci5zY3NzXG4vLyBtb2R1bGUgY2h1bmtzID0gMCIsImV4cG9ydHMgPSBtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCIuLi8uLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9saWIvY3NzLWJhc2UuanNcIikodW5kZWZpbmVkKTtcbi8vIGltcG9ydHNcblxuXG4vLyBtb2R1bGVcbmV4cG9ydHMucHVzaChbbW9kdWxlLmlkLCBcIi8qID09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09XFxuTWFpbiBwYWdlIHN0eWxlc1xcbj09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09ICovXFxuLmhpcHN0ZXIge1xcbiAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xcbiAgd2lkdGg6IDM0N3B4O1xcbiAgaGVpZ2h0OiA0OTdweDtcXG4gIGJhY2tncm91bmQ6IHVybChcIiArIHJlcXVpcmUoXCIuLi8uLi9jb250ZW50L2ltYWdlcy9oaXBzdGVyLnBuZ1wiKSArIFwiKSBuby1yZXBlYXQgY2VudGVyIHRvcDtcXG4gIGJhY2tncm91bmQtc2l6ZTogY29udGFpbjsgfVxcblxcbi8qIHdhaXQgYXV0b3ByZWZpeGVyIHVwZGF0ZSB0byBhbGxvdyBzaW1wbGUgZ2VuZXJhdGlvbiBvZiBoaWdoIHBpeGVsIGRlbnNpdHkgbWVkaWEgcXVlcnkgKi9cXG5AbWVkaWEgb25seSBzY3JlZW4gYW5kICgtd2Via2l0LW1pbi1kZXZpY2UtcGl4ZWwtcmF0aW86IDIpLCBvbmx5IHNjcmVlbiBhbmQgKG1pbi0tbW96LWRldmljZS1waXhlbC1yYXRpbzogMiksIG9ubHkgc2NyZWVuIGFuZCAoLW8tbWluLWRldmljZS1waXhlbC1yYXRpbzogMiAvIDEpLCBvbmx5IHNjcmVlbiBhbmQgKG1pbi1kZXZpY2UtcGl4ZWwtcmF0aW86IDIpLCBvbmx5IHNjcmVlbiBhbmQgKG1pbi1yZXNvbHV0aW9uOiAxOTJkcGkpLCBvbmx5IHNjcmVlbiBhbmQgKG1pbi1yZXNvbHV0aW9uOiAyZHBweCkge1xcbiAgLmhpcHN0ZXIge1xcbiAgICBiYWNrZ3JvdW5kOiB1cmwoXCIgKyByZXF1aXJlKFwiLi4vLi4vY29udGVudC9pbWFnZXMvaGlwc3RlcjJ4LnBuZ1wiKSArIFwiKSBuby1yZXBlYXQgY2VudGVyIHRvcDtcXG4gICAgYmFja2dyb3VuZC1zaXplOiBjb250YWluOyB9IH1cXG5cIiwgXCJcIl0pO1xuXG4vLyBleHBvcnRzXG5cblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL34vY3NzLWxvYWRlciEuL34vc2Fzcy1sb2FkZXIvbGliL2xvYWRlci5qcyEuL3NyYy9tYWluL3dlYmFwcC9hcHAvaG9tZS9ob21lLnNjc3Ncbi8vIG1vZHVsZSBpZCA9IC4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvaW5kZXguanMhLi9ub2RlX21vZHVsZXMvc2Fzcy1sb2FkZXIvbGliL2xvYWRlci5qcyEuL3NyYy9tYWluL3dlYmFwcC9hcHAvaG9tZS9ob21lLnNjc3Ncbi8vIG1vZHVsZSBjaHVua3MgPSAwIiwiZXhwb3J0cyA9IG1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcIi4uLy4uLy4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2xpYi9jc3MtYmFzZS5qc1wiKSh1bmRlZmluZWQpO1xuLy8gaW1wb3J0c1xuXG5cbi8vIG1vZHVsZVxuZXhwb3J0cy5wdXNoKFttb2R1bGUuaWQsIFwiLyogPT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT1cXG5OYXZiYXJcXG49PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PSAqL1xcbi5uYXZiYXItdmVyc2lvbiB7XFxuICBmb250LXNpemU6IDEwcHg7XFxuICBjb2xvcjogI2NjYzsgfVxcblxcbi5qaC1uYXZiYXIge1xcbiAgYmFja2dyb3VuZC1jb2xvcjogIzM1M2Q0NztcXG4gIHBhZGRpbmc6IC4yZW0gMWVtOyB9XFxuICAuamgtbmF2YmFyIC5wcm9maWxlLWltYWdlIHtcXG4gICAgbWFyZ2luOiAtMTBweCAwcHg7XFxuICAgIGhlaWdodDogNDBweDtcXG4gICAgd2lkdGg6IDQwcHg7XFxuICAgIGJvcmRlci1yYWRpdXM6IDUwJTsgfVxcbiAgLmpoLW5hdmJhciAuZHJvcGRvd24taXRlbS5hY3RpdmUsIC5qaC1uYXZiYXIgLmRyb3Bkb3duLWl0ZW0uYWN0aXZlOmZvY3VzLCAuamgtbmF2YmFyIC5kcm9wZG93bi1pdGVtLmFjdGl2ZTpob3ZlciB7XFxuICAgIGJhY2tncm91bmQtY29sb3I6ICMzNTNkNDc7IH1cXG4gIC5qaC1uYXZiYXIgLmRyb3Bkb3duLXRvZ2dsZTo6YWZ0ZXIge1xcbiAgICBtYXJnaW4tbGVmdDogMC4xNWVtOyB9XFxuICAuamgtbmF2YmFyIHVsLm5hdmJhci1uYXYge1xcbiAgICBwYWRkaW5nOiAwLjVlbTsgfVxcbiAgICAuamgtbmF2YmFyIHVsLm5hdmJhci1uYXYgLm5hdi1pdGVtIHtcXG4gICAgICBtYXJnaW4tbGVmdDogMS41cmVtOyB9XFxuICAuamgtbmF2YmFyIGEubmF2LWxpbmsge1xcbiAgICBmb250LXdlaWdodDogNDAwOyB9XFxuICAuamgtbmF2YmFyIC5qaC1uYXZiYXItdG9nZ2xlciB7XFxuICAgIGNvbG9yOiAjY2NjO1xcbiAgICBmb250LXNpemU6IDEuNWVtO1xcbiAgICBwYWRkaW5nOiAxMHB4OyB9XFxuICAgIC5qaC1uYXZiYXIgLmpoLW5hdmJhci10b2dnbGVyOmhvdmVyIHtcXG4gICAgICBjb2xvcjogI2ZmZjsgfVxcblxcbkBtZWRpYSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IDk5MnB4KSB7XFxuICAuamgtbG9nby1jb250YWluZXIge1xcbiAgICB3aWR0aDogMTAwJTsgfSB9XFxuXFxuLm5hdmJhci10aXRsZSB7XFxuICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XFxuICB2ZXJ0aWNhbC1hbGlnbjogbWlkZGxlOyB9XFxuXFxuLyogPT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT1cXG5Mb2dvIHN0eWxlc1xcbj09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09ICovXFxuLm5hdmJhci1icmFuZC5sb2dvIHtcXG4gIHBhZGRpbmc6IDVweCAxNXB4OyB9XFxuICAubmF2YmFyLWJyYW5kLmxvZ28gLmxvZ28taW1nIHtcXG4gICAgaGVpZ2h0OiA0NXB4O1xcbiAgICB3aWR0aDogNzBweDtcXG4gICAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xcbiAgICB2ZXJ0aWNhbC1hbGlnbjogbWlkZGxlO1xcbiAgICBiYWNrZ3JvdW5kOiB1cmwoXCIgKyByZXF1aXJlKFwiLi4vLi4vLi4vY29udGVudC9pbWFnZXMvbG9nby1qaGlwc3Rlci5wbmdcIikgKyBcIikgbm8tcmVwZWF0IGNlbnRlciBjZW50ZXI7XFxuICAgIGJhY2tncm91bmQtc2l6ZTogY29udGFpbjsgfVxcblwiLCBcIlwiXSk7XG5cbi8vIGV4cG9ydHNcblxuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vfi9jc3MtbG9hZGVyIS4vfi9zYXNzLWxvYWRlci9saWIvbG9hZGVyLmpzIS4vc3JjL21haW4vd2ViYXBwL2FwcC9sYXlvdXRzL25hdmJhci9uYXZiYXIuc2Nzc1xuLy8gbW9kdWxlIGlkID0gLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9pbmRleC5qcyEuL25vZGVfbW9kdWxlcy9zYXNzLWxvYWRlci9saWIvbG9hZGVyLmpzIS4vc3JjL21haW4vd2ViYXBwL2FwcC9sYXlvdXRzL25hdmJhci9uYXZiYXIuc2Nzc1xuLy8gbW9kdWxlIGNodW5rcyA9IDAiLCJleHBvcnRzID0gbW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwiLi4vLi4vLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvbGliL2Nzcy1iYXNlLmpzXCIpKHVuZGVmaW5lZCk7XG4vLyBpbXBvcnRzXG5cblxuLy8gbW9kdWxlXG5leHBvcnRzLnB1c2goW21vZHVsZS5pZCwgXCIvKiA9PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PVxcbkRldmVsb3BlbWVudCBSaWJib25cXG49PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PSAqL1xcbi5yaWJib24ge1xcbiAgYmFja2dyb3VuZC1jb2xvcjogcmdiYSgxNzAsIDAsIDAsIDAuNSk7XFxuICBsZWZ0OiAtMy41ZW07XFxuICBtb3otdHJhbnNmb3JtOiByb3RhdGUoLTQ1ZGVnKTtcXG4gIG1zLXRyYW5zZm9ybTogcm90YXRlKC00NWRlZyk7XFxuICBvLXRyYW5zZm9ybTogcm90YXRlKC00NWRlZyk7XFxuICB3ZWJraXQtdHJhbnNmb3JtOiByb3RhdGUoLTQ1ZGVnKTtcXG4gIHRyYW5zZm9ybTogcm90YXRlKC00NWRlZyk7XFxuICBvdmVyZmxvdzogaGlkZGVuO1xcbiAgcG9zaXRpb246IGFic29sdXRlO1xcbiAgdG9wOiA0MHB4O1xcbiAgd2hpdGUtc3BhY2U6IG5vd3JhcDtcXG4gIHdpZHRoOiAxNWVtO1xcbiAgei1pbmRleDogOTk5OTtcXG4gIHBvaW50ZXItZXZlbnRzOiBub25lO1xcbiAgb3BhY2l0eTogMC43NTsgfVxcbiAgLnJpYmJvbiBhIHtcXG4gICAgY29sb3I6ICNmZmY7XFxuICAgIGRpc3BsYXk6IGJsb2NrO1xcbiAgICBmb250LXdlaWdodDogNDAwO1xcbiAgICBtYXJnaW46IDFweCAwO1xcbiAgICBwYWRkaW5nOiAxMHB4IDUwcHg7XFxuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcXG4gICAgdGV4dC1kZWNvcmF0aW9uOiBub25lO1xcbiAgICB0ZXh0LXNoYWRvdzogMCAwIDVweCAjNDQ0O1xcbiAgICBwb2ludGVyLWV2ZW50czogbm9uZTsgfVxcblwiLCBcIlwiXSk7XG5cbi8vIGV4cG9ydHNcblxuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vfi9jc3MtbG9hZGVyIS4vfi9zYXNzLWxvYWRlci9saWIvbG9hZGVyLmpzIS4vc3JjL21haW4vd2ViYXBwL2FwcC9sYXlvdXRzL3Byb2ZpbGVzL3BhZ2UtcmliYm9uLnNjc3Ncbi8vIG1vZHVsZSBpZCA9IC4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvaW5kZXguanMhLi9ub2RlX21vZHVsZXMvc2Fzcy1sb2FkZXIvbGliL2xvYWRlci5qcyEuL3NyYy9tYWluL3dlYmFwcC9hcHAvbGF5b3V0cy9wcm9maWxlcy9wYWdlLXJpYmJvbi5zY3NzXG4vLyBtb2R1bGUgY2h1bmtzID0gMCIsImV4cG9ydCAqIGZyb20gJy4vaW5kZXgnO1xuXG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9+L25nMi10cmFuc2xhdGUvbmcyLXRyYW5zbGF0ZS5qc1xuLy8gbW9kdWxlIGlkID0gLi9ub2RlX21vZHVsZXMvbmcyLXRyYW5zbGF0ZS9uZzItdHJhbnNsYXRlLmpzXG4vLyBtb2R1bGUgY2h1bmtzID0gMCIsImltcG9ydCB7IE5nTW9kdWxlLCBDVVNUT01fRUxFTUVOVFNfU0NIRU1BIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBSb3V0ZXJNb2R1bGUgfSBmcm9tICdAYW5ndWxhci9yb3V0ZXInO1xuXG5pbXBvcnQgeyBQYWNrZXRBcHBTaGFyZWRNb2R1bGUgfSBmcm9tICcuLi9zaGFyZWQnO1xuXG5pbXBvcnQge1xuICAgIFJlZ2lzdGVyLFxuICAgIEFjdGl2YXRlLFxuICAgIFBhc3N3b3JkLFxuICAgIFBhc3N3b3JkUmVzZXRJbml0LFxuICAgIFBhc3N3b3JkUmVzZXRGaW5pc2gsXG4gICAgUGFzc3dvcmRTdHJlbmd0aEJhckNvbXBvbmVudCxcbiAgICBSZWdpc3RlckNvbXBvbmVudCxcbiAgICBBY3RpdmF0ZUNvbXBvbmVudCxcbiAgICBQYXNzd29yZENvbXBvbmVudCxcbiAgICBQYXNzd29yZFJlc2V0SW5pdENvbXBvbmVudCxcbiAgICBQYXNzd29yZFJlc2V0RmluaXNoQ29tcG9uZW50LFxuICAgIFNldHRpbmdzQ29tcG9uZW50LFxuICAgIFNvY2lhbFJlZ2lzdGVyQ29tcG9uZW50LFxuICAgIFNvY2lhbEF1dGhDb21wb25lbnQsXG4gICAgYWNjb3VudFN0YXRlXG59IGZyb20gJy4vJztcblxuQE5nTW9kdWxlKHtcbiAgICBpbXBvcnRzOiBbXG4gICAgICAgIFBhY2tldEFwcFNoYXJlZE1vZHVsZSxcbiAgICAgICAgUm91dGVyTW9kdWxlLmZvclJvb3QoYWNjb3VudFN0YXRlLCB7IHVzZUhhc2g6IHRydWUgfSlcbiAgICBdLFxuICAgIGRlY2xhcmF0aW9uczogW1xuICAgICAgICBTb2NpYWxSZWdpc3RlckNvbXBvbmVudCxcbiAgICAgICAgU29jaWFsQXV0aENvbXBvbmVudCxcbiAgICAgICAgQWN0aXZhdGVDb21wb25lbnQsXG4gICAgICAgIFJlZ2lzdGVyQ29tcG9uZW50LFxuICAgICAgICBQYXNzd29yZENvbXBvbmVudCxcbiAgICAgICAgUGFzc3dvcmRTdHJlbmd0aEJhckNvbXBvbmVudCxcbiAgICAgICAgUGFzc3dvcmRSZXNldEluaXRDb21wb25lbnQsXG4gICAgICAgIFBhc3N3b3JkUmVzZXRGaW5pc2hDb21wb25lbnQsXG4gICAgICAgIFNldHRpbmdzQ29tcG9uZW50XG4gICAgXSxcbiAgICBwcm92aWRlcnM6IFtcbiAgICAgICAgUmVnaXN0ZXIsXG4gICAgICAgIEFjdGl2YXRlLFxuICAgICAgICBQYXNzd29yZCxcbiAgICAgICAgUGFzc3dvcmRSZXNldEluaXQsXG4gICAgICAgIFBhc3N3b3JkUmVzZXRGaW5pc2hcbiAgICBdLFxuICAgIHNjaGVtYXM6IFtDVVNUT01fRUxFTUVOVFNfU0NIRU1BXVxufSlcbmV4cG9ydCBjbGFzcyBQYWNrZXRBcHBBY2NvdW50TW9kdWxlIHt9XG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9+L3RzbGludC1sb2FkZXIhLi9zcmMvbWFpbi93ZWJhcHAvYXBwL2FjY291bnQvYWNjb3VudC5tb2R1bGUudHMiLCJpbXBvcnQgeyBSb3V0ZXMgfSBmcm9tICdAYW5ndWxhci9yb3V0ZXInO1xuXG5pbXBvcnQge1xuICAgIGFjdGl2YXRlUm91dGUsXG4gICAgcGFzc3dvcmRSb3V0ZSxcbiAgICBwYXNzd29yZFJlc2V0RmluaXNoUm91dGUsXG4gICAgcGFzc3dvcmRSZXNldEluaXRSb3V0ZSxcbiAgICByZWdpc3RlclJvdXRlLFxuICAgIHNvY2lhbFJlZ2lzdGVyUm91dGUsXG4gICAgc29jaWFsQXV0aFJvdXRlLFxuICAgIHNldHRpbmdzUm91dGVcbn0gZnJvbSAnLi8nO1xuXG5jb25zdCBBQ0NPVU5UX1JPVVRFUyA9IFtcbiAgIGFjdGl2YXRlUm91dGUsXG4gICBwYXNzd29yZFJvdXRlLFxuICAgcGFzc3dvcmRSZXNldEZpbmlzaFJvdXRlLFxuICAgcGFzc3dvcmRSZXNldEluaXRSb3V0ZSxcbiAgIHJlZ2lzdGVyUm91dGUsXG4gICAgc29jaWFsQXV0aFJvdXRlLFxuICAgc29jaWFsUmVnaXN0ZXJSb3V0ZSxcbiAgIHNldHRpbmdzUm91dGVcbl07XG5cbmV4cG9ydCBjb25zdCBhY2NvdW50U3RhdGU6IFJvdXRlcyA9IFt7XG4gICAgcGF0aDogJycsXG4gICAgY2hpbGRyZW46IEFDQ09VTlRfUk9VVEVTXG59XTtcblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL34vdHNsaW50LWxvYWRlciEuL3NyYy9tYWluL3dlYmFwcC9hcHAvYWNjb3VudC9hY2NvdW50LnJvdXRlLnRzIiwibW9kdWxlLmV4cG9ydHMgPSBcIjxkaXY+IDxkaXYgY2xhc3M9XFxcInJvd1xcXCI+IDxkaXYgY2xhc3M9XFxcImNvbC1tZC04IG9mZnNldC1tZC0yXFxcIj4gPGgxIGpoaVRyYW5zbGF0ZT1cXFwiYWN0aXZhdGUudGl0bGVcXFwiPkFjdGl2YXRpb248L2gxPiA8ZGl2IGNsYXNzPVxcXCJhbGVydCBhbGVydC1zdWNjZXNzXFxcIiAqbmdJZj1cXFwic3VjY2Vzc1xcXCI+IDxzcGFuIGpoaVRyYW5zbGF0ZT1cXFwiYWN0aXZhdGUubWVzc2FnZXMuc3VjY2Vzc1xcXCI+PHN0cm9uZz5Zb3VyIHVzZXIgYWNjb3VudCBoYXMgYmVlbiBhY3RpdmF0ZWQuPC9zdHJvbmc+IFBsZWFzZSA8L3NwYW4+IDxhIGNsYXNzPVxcXCJhbGVydC1saW5rXFxcIiAoY2xpY2spPVxcXCJsb2dpbigpXFxcIiBqaGlUcmFuc2xhdGU9XFxcImdsb2JhbC5tZXNzYWdlcy5pbmZvLmF1dGhlbnRpY2F0ZWQubGlua1xcXCI+c2lnbiBpbjwvYT4uIDwvZGl2PiA8ZGl2IGNsYXNzPVxcXCJhbGVydCBhbGVydC1kYW5nZXJcXFwiICpuZ0lmPVxcXCJlcnJvclxcXCIgamhpVHJhbnNsYXRlPVxcXCJhY3RpdmF0ZS5tZXNzYWdlcy5lcnJvclxcXCI+IDxzdHJvbmc+WW91ciB1c2VyIGNvdWxkIG5vdCBiZSBhY3RpdmF0ZWQuPC9zdHJvbmc+IFBsZWFzZSB1c2UgdGhlIHJlZ2lzdHJhdGlvbiBmb3JtIHRvIHNpZ24gdXAuIDwvZGl2PiA8L2Rpdj4gPC9kaXY+IDwvZGl2PiBcIjtcblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL3NyYy9tYWluL3dlYmFwcC9hcHAvYWNjb3VudC9hY3RpdmF0ZS9hY3RpdmF0ZS5jb21wb25lbnQuaHRtbFxuLy8gbW9kdWxlIGlkID0gLi9zcmMvbWFpbi93ZWJhcHAvYXBwL2FjY291bnQvYWN0aXZhdGUvYWN0aXZhdGUuY29tcG9uZW50Lmh0bWxcbi8vIG1vZHVsZSBjaHVua3MgPSAwIiwiaW1wb3J0IHsgQ29tcG9uZW50LCBPbkluaXQgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IE5nYk1vZGFsUmVmIH0gZnJvbSAnQG5nLWJvb3RzdHJhcC9uZy1ib290c3RyYXAnO1xuaW1wb3J0IHsgQWN0aXZhdGVkUm91dGUgfSBmcm9tICdAYW5ndWxhci9yb3V0ZXInO1xuXG5pbXBvcnQgeyBBY3RpdmF0ZSB9IGZyb20gJy4vYWN0aXZhdGUuc2VydmljZSc7XG5pbXBvcnQgeyBMb2dpbk1vZGFsU2VydmljZSB9IGZyb20gJy4uLy4uL3NoYXJlZCc7XG5cbkBDb21wb25lbnQoe1xuICAgIHNlbGVjdG9yOiAnamhpLWFjdGl2YXRlJyxcbiAgICB0ZW1wbGF0ZVVybDogJy4vYWN0aXZhdGUuY29tcG9uZW50Lmh0bWwnXG59KVxuZXhwb3J0IGNsYXNzIEFjdGl2YXRlQ29tcG9uZW50IGltcGxlbWVudHMgT25Jbml0IHtcbiAgICBlcnJvcjogc3RyaW5nO1xuICAgIHN1Y2Nlc3M6IHN0cmluZztcbiAgICBtb2RhbFJlZjogTmdiTW9kYWxSZWY7XG5cbiAgICBjb25zdHJ1Y3RvcihcbiAgICAgICAgcHJpdmF0ZSBhY3RpdmF0ZTogQWN0aXZhdGUsXG4gICAgICAgIHByaXZhdGUgbG9naW5Nb2RhbFNlcnZpY2U6IExvZ2luTW9kYWxTZXJ2aWNlLFxuICAgICAgICBwcml2YXRlIHJvdXRlOiBBY3RpdmF0ZWRSb3V0ZVxuICAgICkge1xuICAgIH1cblxuICAgIG5nT25Jbml0KCkge1xuICAgICAgICB0aGlzLnJvdXRlLnF1ZXJ5UGFyYW1zLnN1YnNjcmliZSgocGFyYW1zKSA9PiB7XG4gICAgICAgICAgICB0aGlzLmFjdGl2YXRlLmdldChwYXJhbXNbJ2tleSddKS5zdWJzY3JpYmUoKCkgPT4ge1xuICAgICAgICAgICAgICAgIHRoaXMuZXJyb3IgPSBudWxsO1xuICAgICAgICAgICAgICAgIHRoaXMuc3VjY2VzcyA9ICdPSyc7XG4gICAgICAgICAgICB9LCAoKSA9PiB7XG4gICAgICAgICAgICAgICAgdGhpcy5zdWNjZXNzID0gbnVsbDtcbiAgICAgICAgICAgICAgICB0aGlzLmVycm9yID0gJ0VSUk9SJztcbiAgICAgICAgICAgIH0pO1xuICAgICAgICB9KTtcbiAgICB9XG5cbiAgICBsb2dpbigpIHtcbiAgICAgICAgdGhpcy5tb2RhbFJlZiA9IHRoaXMubG9naW5Nb2RhbFNlcnZpY2Uub3BlbigpO1xuICAgIH1cbn1cblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL34vdHNsaW50LWxvYWRlciEuL3NyYy9tYWluL3dlYmFwcC9hcHAvYWNjb3VudC9hY3RpdmF0ZS9hY3RpdmF0ZS5jb21wb25lbnQudHMiLCJpbXBvcnQgeyBSb3V0ZSB9IGZyb20gJ0Bhbmd1bGFyL3JvdXRlcic7XG5cbmltcG9ydCB7IFVzZXJSb3V0ZUFjY2Vzc1NlcnZpY2UgfSBmcm9tICcuLi8uLi9zaGFyZWQnO1xuaW1wb3J0IHsgQWN0aXZhdGVDb21wb25lbnQgfSBmcm9tICcuL2FjdGl2YXRlLmNvbXBvbmVudCc7XG5cbmV4cG9ydCBjb25zdCBhY3RpdmF0ZVJvdXRlOiBSb3V0ZSA9IHtcbiAgICBwYXRoOiAnYWN0aXZhdGUnLFxuICAgIGNvbXBvbmVudDogQWN0aXZhdGVDb21wb25lbnQsXG4gICAgZGF0YToge1xuICAgICAgICBhdXRob3JpdGllczogW10sXG4gICAgICAgIHBhZ2VUaXRsZTogJ2FjdGl2YXRlLnRpdGxlJ1xuICAgIH0sXG4gICAgY2FuQWN0aXZhdGU6IFtVc2VyUm91dGVBY2Nlc3NTZXJ2aWNlXVxufTtcblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL34vdHNsaW50LWxvYWRlciEuL3NyYy9tYWluL3dlYmFwcC9hcHAvYWNjb3VudC9hY3RpdmF0ZS9hY3RpdmF0ZS5yb3V0ZS50cyIsImltcG9ydCB7IEluamVjdGFibGUgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IEh0dHAsIFJlc3BvbnNlLCBVUkxTZWFyY2hQYXJhbXMgfSBmcm9tICdAYW5ndWxhci9odHRwJztcbmltcG9ydCB7IE9ic2VydmFibGUgfSBmcm9tICdyeGpzL1J4JztcblxuQEluamVjdGFibGUoKVxuZXhwb3J0IGNsYXNzIEFjdGl2YXRlIHtcblxuICAgIGNvbnN0cnVjdG9yKHByaXZhdGUgaHR0cDogSHR0cCkge31cblxuICAgIGdldChrZXk6IHN0cmluZyk6IE9ic2VydmFibGU8YW55PiB7XG4gICAgICAgIGNvbnN0IHBhcmFtczogVVJMU2VhcmNoUGFyYW1zID0gbmV3IFVSTFNlYXJjaFBhcmFtcygpO1xuICAgICAgICBwYXJhbXMuc2V0KCdrZXknLCBrZXkpO1xuXG4gICAgICAgIHJldHVybiB0aGlzLmh0dHAuZ2V0KCdhcGkvYWN0aXZhdGUnLCB7XG4gICAgICAgICAgICBzZWFyY2g6IHBhcmFtc1xuICAgICAgICB9KS5tYXAoKHJlczogUmVzcG9uc2UpID0+IHJlcyk7XG4gICAgfVxufVxuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vfi90c2xpbnQtbG9hZGVyIS4vc3JjL21haW4vd2ViYXBwL2FwcC9hY2NvdW50L2FjdGl2YXRlL2FjdGl2YXRlLnNlcnZpY2UudHMiLCJleHBvcnQgKiBmcm9tICcuL2FjdGl2YXRlL2FjdGl2YXRlLmNvbXBvbmVudCc7XG5leHBvcnQgKiBmcm9tICcuL2FjdGl2YXRlL2FjdGl2YXRlLnNlcnZpY2UnO1xuZXhwb3J0ICogZnJvbSAnLi9hY3RpdmF0ZS9hY3RpdmF0ZS5yb3V0ZSc7XG5leHBvcnQgKiBmcm9tICcuL3Bhc3N3b3JkL3Bhc3N3b3JkLmNvbXBvbmVudCc7XG5leHBvcnQgKiBmcm9tICcuL3Bhc3N3b3JkL3Bhc3N3b3JkLXN0cmVuZ3RoLWJhci5jb21wb25lbnQnO1xuZXhwb3J0ICogZnJvbSAnLi9wYXNzd29yZC9wYXNzd29yZC5zZXJ2aWNlJztcbmV4cG9ydCAqIGZyb20gJy4vcGFzc3dvcmQvcGFzc3dvcmQucm91dGUnO1xuZXhwb3J0ICogZnJvbSAnLi9wYXNzd29yZC1yZXNldC9maW5pc2gvcGFzc3dvcmQtcmVzZXQtZmluaXNoLmNvbXBvbmVudCc7XG5leHBvcnQgKiBmcm9tICcuL3Bhc3N3b3JkLXJlc2V0L2ZpbmlzaC9wYXNzd29yZC1yZXNldC1maW5pc2guc2VydmljZSc7XG5leHBvcnQgKiBmcm9tICcuL3Bhc3N3b3JkLXJlc2V0L2ZpbmlzaC9wYXNzd29yZC1yZXNldC1maW5pc2gucm91dGUnO1xuZXhwb3J0ICogZnJvbSAnLi9wYXNzd29yZC1yZXNldC9pbml0L3Bhc3N3b3JkLXJlc2V0LWluaXQuY29tcG9uZW50JztcbmV4cG9ydCAqIGZyb20gJy4vcGFzc3dvcmQtcmVzZXQvaW5pdC9wYXNzd29yZC1yZXNldC1pbml0LnNlcnZpY2UnO1xuZXhwb3J0ICogZnJvbSAnLi9wYXNzd29yZC1yZXNldC9pbml0L3Bhc3N3b3JkLXJlc2V0LWluaXQucm91dGUnO1xuZXhwb3J0ICogZnJvbSAnLi9yZWdpc3Rlci9yZWdpc3Rlci5jb21wb25lbnQnO1xuZXhwb3J0ICogZnJvbSAnLi9yZWdpc3Rlci9yZWdpc3Rlci5zZXJ2aWNlJztcbmV4cG9ydCAqIGZyb20gJy4vcmVnaXN0ZXIvcmVnaXN0ZXIucm91dGUnO1xuZXhwb3J0ICogZnJvbSAnLi9zZXR0aW5ncy9zZXR0aW5ncy5jb21wb25lbnQnO1xuZXhwb3J0ICogZnJvbSAnLi9zZXR0aW5ncy9zZXR0aW5ncy5yb3V0ZSc7XG5leHBvcnQgKiBmcm9tICcuL3NvY2lhbC9zb2NpYWwtYXV0aC5jb21wb25lbnQnO1xuZXhwb3J0ICogZnJvbSAnLi9zb2NpYWwvc29jaWFsLXJlZ2lzdGVyLmNvbXBvbmVudCc7XG5leHBvcnQgKiBmcm9tICcuL3NvY2lhbC9zb2NpYWwucm91dGUnO1xuZXhwb3J0ICogZnJvbSAnLi9hY2NvdW50LnJvdXRlJztcblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL34vdHNsaW50LWxvYWRlciEuL3NyYy9tYWluL3dlYmFwcC9hcHAvYWNjb3VudC9pbmRleC50cyIsIm1vZHVsZS5leHBvcnRzID0gXCI8ZGl2PiA8ZGl2IGNsYXNzPVxcXCJyb3dcXFwiPiA8ZGl2IGNsYXNzPVxcXCJjb2wtbWQtNCBjb2wtbWQtb2Zmc2V0LTRcXFwiPiA8aDEgamhpVHJhbnNsYXRlPVxcXCJyZXNldC5maW5pc2gudGl0bGVcXFwiPlJlc2V0IHBhc3N3b3JkPC9oMT4gPGRpdiBjbGFzcz1cXFwiYWxlcnQgYWxlcnQtZGFuZ2VyXFxcIiBqaGlUcmFuc2xhdGU9XFxcInJlc2V0LmZpbmlzaC5tZXNzYWdlcy5rZXltaXNzaW5nXFxcIiAqbmdJZj1cXFwia2V5TWlzc2luZ1xcXCI+IDxzdHJvbmc+VGhlIHBhc3N3b3JkIHJlc2V0IGtleSBpcyBtaXNzaW5nLjwvc3Ryb25nPiA8L2Rpdj4gPGRpdiBjbGFzcz1cXFwiYWxlcnQgYWxlcnQtd2FybmluZ1xcXCIgKm5nSWY9XFxcIiFzdWNjZXNzICYmICFrZXlNaXNzaW5nXFxcIj4gPHAgamhpVHJhbnNsYXRlPVxcXCJyZXNldC5maW5pc2gubWVzc2FnZXMuaW5mb1xcXCI+Q2hvb3NlIGEgbmV3IHBhc3N3b3JkPC9wPiA8L2Rpdj4gPGRpdiBjbGFzcz1cXFwiYWxlcnQgYWxlcnQtZGFuZ2VyXFxcIiAqbmdJZj1cXFwiZXJyb3JcXFwiPiA8cCBqaGlUcmFuc2xhdGU9XFxcInJlc2V0LmZpbmlzaC5tZXNzYWdlcy5lcnJvclxcXCI+WW91ciBwYXNzd29yZCBjb3VsZG4ndCBiZSByZXNldC4gUmVtZW1iZXIgYSBwYXNzd29yZCByZXF1ZXN0IGlzIG9ubHkgdmFsaWQgZm9yIDI0IGhvdXJzLjwvcD4gPC9kaXY+IDxwIGNsYXNzPVxcXCJhbGVydCBhbGVydC1zdWNjZXNzXFxcIiAqbmdJZj1cXFwic3VjY2Vzc1xcXCI+IDxzcGFuIGpoaVRyYW5zbGF0ZT1cXFwicmVzZXQuZmluaXNoLm1lc3NhZ2VzLnN1Y2Nlc3NcXFwiPjxzdHJvbmc+WW91ciBwYXNzd29yZCBoYXMgYmVlbiByZXNldC48L3N0cm9uZz4gUGxlYXNlIDwvc3Bhbj4gPGEgY2xhc3M9XFxcImFsZXJ0LWxpbmtcXFwiIChjbGljayk9XFxcImxvZ2luKClcXFwiIGpoaVRyYW5zbGF0ZT1cXFwiZ2xvYmFsLm1lc3NhZ2VzLmluZm8uYXV0aGVudGljYXRlZC5saW5rXFxcIj5zaWduIGluPC9hPi4gPC9wPiA8ZGl2IGNsYXNzPVxcXCJhbGVydCBhbGVydC1kYW5nZXJcXFwiICpuZ0lmPVxcXCJkb05vdE1hdGNoXFxcIiBqaGlUcmFuc2xhdGU9XFxcImdsb2JhbC5tZXNzYWdlcy5lcnJvci5kb250bWF0Y2hcXFwiPiBUaGUgcGFzc3dvcmQgYW5kIGl0cyBjb25maXJtYXRpb24gZG8gbm90IG1hdGNoISA8L2Rpdj4gPGRpdiAqbmdJZj1cXFwiIWtleU1pc3NpbmdcXFwiPiA8Zm9ybSAqbmdJZj1cXFwiIXN1Y2Nlc3NcXFwiIG5hbWU9XFxcImZvcm1cXFwiIHJvbGU9XFxcImZvcm1cXFwiIChuZ1N1Ym1pdCk9XFxcImZpbmlzaFJlc2V0KClcXFwiICNwYXNzd29yZEZvcm09XFxcIm5nRm9ybVxcXCI+IDxkaXYgY2xhc3M9XFxcImZvcm0tZ3JvdXBcXFwiPiA8bGFiZWwgY2xhc3M9XFxcImZvcm0tY29udHJvbC1sYWJlbFxcXCIgZm9yPVxcXCJwYXNzd29yZFxcXCIgamhpVHJhbnNsYXRlPVxcXCJnbG9iYWwuZm9ybS5uZXdwYXNzd29yZFxcXCI+TmV3IHBhc3N3b3JkPC9sYWJlbD4gPGlucHV0IHR5cGU9XFxcInBhc3N3b3JkXFxcIiBjbGFzcz1cXFwiZm9ybS1jb250cm9sXFxcIiBpZD1cXFwicGFzc3dvcmRcXFwiIG5hbWU9XFxcInBhc3N3b3JkXFxcIiAjcGFzc3dvcmRJbnB1dD1cXFwibmdNb2RlbFxcXCIgcGxhY2Vob2xkZXI9XFxcInt7J2dsb2JhbC5mb3JtLm5ld3Bhc3N3b3JkLnBsYWNlaG9sZGVyJyB8IHRyYW5zbGF0ZX19XFxcIiBbKG5nTW9kZWwpXT1cXFwicmVzZXRBY2NvdW50LnBhc3N3b3JkXFxcIiBtaW5sZW5ndGg9XFxcIjRcXFwiIG1heGxlbmd0aD1cXFwiNTBcXFwiIHJlcXVpcmVkPiA8ZGl2ICpuZ0lmPVxcXCJwYXNzd29yZElucHV0LmRpcnR5ICYmIHBhc3N3b3JkSW5wdXQuaW52YWxpZFxcXCI+IDxzbWFsbCBjbGFzcz1cXFwiZm9ybS10ZXh0IHRleHQtZGFuZ2VyXFxcIiAqbmdJZj1cXFwicGFzc3dvcmRJbnB1dC5lcnJvcnMucmVxdWlyZWRcXFwiIGpoaVRyYW5zbGF0ZT1cXFwiZ2xvYmFsLm1lc3NhZ2VzLnZhbGlkYXRlLm5ld3Bhc3N3b3JkLnJlcXVpcmVkXFxcIj4gWW91ciBwYXNzd29yZCBpcyByZXF1aXJlZC4gPC9zbWFsbD4gPHNtYWxsIGNsYXNzPVxcXCJmb3JtLXRleHQgdGV4dC1kYW5nZXJcXFwiICpuZ0lmPVxcXCJwYXNzd29yZElucHV0LmVycm9ycy5taW5sZW5ndGhcXFwiIGpoaVRyYW5zbGF0ZT1cXFwiZ2xvYmFsLm1lc3NhZ2VzLnZhbGlkYXRlLm5ld3Bhc3N3b3JkLm1pbmxlbmd0aFxcXCI+IFlvdXIgcGFzc3dvcmQgaXMgcmVxdWlyZWQgdG8gYmUgYXQgbGVhc3QgNCBjaGFyYWN0ZXJzLiA8L3NtYWxsPiA8c21hbGwgY2xhc3M9XFxcImZvcm0tdGV4dCB0ZXh0LWRhbmdlclxcXCIgKm5nSWY9XFxcInBhc3N3b3JkSW5wdXQuZXJyb3JzLm1heGxlbmd0aFxcXCIgamhpVHJhbnNsYXRlPVxcXCJnbG9iYWwubWVzc2FnZXMudmFsaWRhdGUubmV3cGFzc3dvcmQubWF4bGVuZ3RoXFxcIj4gWW91ciBwYXNzd29yZCBjYW5ub3QgYmUgbG9uZ2VyIHRoYW4gNTAgY2hhcmFjdGVycy4gPC9zbWFsbD4gPC9kaXY+IDxqaGktcGFzc3dvcmQtc3RyZW5ndGgtYmFyIFtwYXNzd29yZFRvQ2hlY2tdPVxcXCJyZXNldEFjY291bnQucGFzc3dvcmRcXFwiPjwvamhpLXBhc3N3b3JkLXN0cmVuZ3RoLWJhcj4gPC9kaXY+IDxkaXYgY2xhc3M9XFxcImZvcm0tZ3JvdXBcXFwiPiA8bGFiZWwgY2xhc3M9XFxcImZvcm0tY29udHJvbC1sYWJlbFxcXCIgZm9yPVxcXCJjb25maXJtUGFzc3dvcmRcXFwiIGpoaVRyYW5zbGF0ZT1cXFwiZ2xvYmFsLmZvcm0uY29uZmlybXBhc3N3b3JkXFxcIj5OZXcgcGFzc3dvcmQgY29uZmlybWF0aW9uPC9sYWJlbD4gPGlucHV0IHR5cGU9XFxcInBhc3N3b3JkXFxcIiBjbGFzcz1cXFwiZm9ybS1jb250cm9sXFxcIiBpZD1cXFwiY29uZmlybVBhc3N3b3JkXFxcIiBuYW1lPVxcXCJjb25maXJtUGFzc3dvcmRcXFwiICNjb25maXJtUGFzc3dvcmRJbnB1dD1cXFwibmdNb2RlbFxcXCIgcGxhY2Vob2xkZXI9XFxcInt7J2dsb2JhbC5mb3JtLmNvbmZpcm1wYXNzd29yZC5wbGFjZWhvbGRlcicgfCB0cmFuc2xhdGV9fVxcXCIgWyhuZ01vZGVsKV09XFxcImNvbmZpcm1QYXNzd29yZFxcXCIgbWlubGVuZ3RoPVxcXCI0XFxcIiBtYXhsZW5ndGg9XFxcIjUwXFxcIiByZXF1aXJlZD4gPGRpdiAqbmdJZj1cXFwiY29uZmlybVBhc3N3b3JkSW5wdXQuZGlydHkgJiYgY29uZmlybVBhc3N3b3JkSW5wdXQuaW52YWxpZFxcXCI+IDxzbWFsbCBjbGFzcz1cXFwiZm9ybS10ZXh0IHRleHQtZGFuZ2VyXFxcIiAqbmdJZj1cXFwiY29uZmlybVBhc3N3b3JkSW5wdXQuZXJyb3JzLnJlcXVpcmVkXFxcIiBqaGlUcmFuc2xhdGU9XFxcImdsb2JhbC5tZXNzYWdlcy52YWxpZGF0ZS5jb25maXJtcGFzc3dvcmQucmVxdWlyZWRcXFwiPiBZb3VyIHBhc3N3b3JkIGNvbmZpcm1hdGlvbiBpcyByZXF1aXJlZC4gPC9zbWFsbD4gPHNtYWxsIGNsYXNzPVxcXCJmb3JtLXRleHQgdGV4dC1kYW5nZXJcXFwiICpuZ0lmPVxcXCJjb25maXJtUGFzc3dvcmRJbnB1dC5lcnJvcnMubWlubGVuZ3RoXFxcIiBqaGlUcmFuc2xhdGU9XFxcImdsb2JhbC5tZXNzYWdlcy52YWxpZGF0ZS5jb25maXJtcGFzc3dvcmQubWlubGVuZ3RoXFxcIj4gWW91ciBwYXNzd29yZCBjb25maXJtYXRpb24gaXMgcmVxdWlyZWQgdG8gYmUgYXQgbGVhc3QgNCBjaGFyYWN0ZXJzLiA8L3NtYWxsPiA8c21hbGwgY2xhc3M9XFxcImZvcm0tdGV4dCB0ZXh0LWRhbmdlclxcXCIgKm5nSWY9XFxcImNvbmZpcm1QYXNzd29yZElucHV0LmVycm9ycy5tYXhsZW5ndGhcXFwiIGpoaVRyYW5zbGF0ZT1cXFwiZ2xvYmFsLm1lc3NhZ2VzLnZhbGlkYXRlLmNvbmZpcm1wYXNzd29yZC5tYXhsZW5ndGhcXFwiPiBZb3VyIHBhc3N3b3JkIGNvbmZpcm1hdGlvbiBjYW5ub3QgYmUgbG9uZ2VyIHRoYW4gNTAgY2hhcmFjdGVycy4gPC9zbWFsbD4gPC9kaXY+IDwvZGl2PiA8YnV0dG9uIHR5cGU9XFxcInN1Ym1pdFxcXCIgW2Rpc2FibGVkXT1cXFwicGFzc3dvcmRGb3JtLmZvcm0uaW52YWxpZFxcXCIgY2xhc3M9XFxcImJ0biBidG4tcHJpbWFyeVxcXCIgamhpVHJhbnNsYXRlPVxcXCJyZXNldC5maW5pc2guZm9ybS5idXR0b25cXFwiPlJlc2V0IFBhc3N3b3JkPC9idXR0b24+IDwvZm9ybT4gPC9kaXY+IDwvZGl2PiA8L2Rpdj4gPC9kaXY+IFwiO1xuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vc3JjL21haW4vd2ViYXBwL2FwcC9hY2NvdW50L3Bhc3N3b3JkLXJlc2V0L2ZpbmlzaC9wYXNzd29yZC1yZXNldC1maW5pc2guY29tcG9uZW50Lmh0bWxcbi8vIG1vZHVsZSBpZCA9IC4vc3JjL21haW4vd2ViYXBwL2FwcC9hY2NvdW50L3Bhc3N3b3JkLXJlc2V0L2ZpbmlzaC9wYXNzd29yZC1yZXNldC1maW5pc2guY29tcG9uZW50Lmh0bWxcbi8vIG1vZHVsZSBjaHVua3MgPSAwIiwiaW1wb3J0IHsgQ29tcG9uZW50LCBPbkluaXQsIEFmdGVyVmlld0luaXQsIFJlbmRlcmVyLCBFbGVtZW50UmVmIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBOZ2JNb2RhbFJlZiB9IGZyb20gJ0BuZy1ib290c3RyYXAvbmctYm9vdHN0cmFwJztcbmltcG9ydCB7IEFjdGl2YXRlZFJvdXRlIH0gZnJvbSAnQGFuZ3VsYXIvcm91dGVyJztcblxuaW1wb3J0IHsgUGFzc3dvcmRSZXNldEZpbmlzaCB9IGZyb20gJy4vcGFzc3dvcmQtcmVzZXQtZmluaXNoLnNlcnZpY2UnO1xuaW1wb3J0IHsgTG9naW5Nb2RhbFNlcnZpY2UgfSBmcm9tICcuLi8uLi8uLi9zaGFyZWQnO1xuXG5AQ29tcG9uZW50KHtcbiAgICBzZWxlY3RvcjogJ2poaS1wYXNzd29yZC1yZXNldC1maW5pc2gnLFxuICAgIHRlbXBsYXRlVXJsOiAnLi9wYXNzd29yZC1yZXNldC1maW5pc2guY29tcG9uZW50Lmh0bWwnXG59KVxuZXhwb3J0IGNsYXNzIFBhc3N3b3JkUmVzZXRGaW5pc2hDb21wb25lbnQgaW1wbGVtZW50cyBPbkluaXQsIEFmdGVyVmlld0luaXQge1xuICAgIGNvbmZpcm1QYXNzd29yZDogc3RyaW5nO1xuICAgIGRvTm90TWF0Y2g6IHN0cmluZztcbiAgICBlcnJvcjogc3RyaW5nO1xuICAgIGtleU1pc3Npbmc6IGJvb2xlYW47XG4gICAgcmVzZXRBY2NvdW50OiBhbnk7XG4gICAgc3VjY2Vzczogc3RyaW5nO1xuICAgIG1vZGFsUmVmOiBOZ2JNb2RhbFJlZjtcbiAgICBrZXk6IHN0cmluZztcblxuICAgIGNvbnN0cnVjdG9yKFxuICAgICAgICBwcml2YXRlIHBhc3N3b3JkUmVzZXRGaW5pc2g6IFBhc3N3b3JkUmVzZXRGaW5pc2gsXG4gICAgICAgIHByaXZhdGUgbG9naW5Nb2RhbFNlcnZpY2U6IExvZ2luTW9kYWxTZXJ2aWNlLFxuICAgICAgICBwcml2YXRlIHJvdXRlOiBBY3RpdmF0ZWRSb3V0ZSxcbiAgICAgICAgcHJpdmF0ZSBlbGVtZW50UmVmOiBFbGVtZW50UmVmLCBwcml2YXRlIHJlbmRlcmVyOiBSZW5kZXJlclxuICAgICkge1xuICAgIH1cblxuICAgIG5nT25Jbml0KCkge1xuICAgICAgICB0aGlzLnJvdXRlLnF1ZXJ5UGFyYW1zLnN1YnNjcmliZSgocGFyYW1zKSA9PiB7XG4gICAgICAgICAgICB0aGlzLmtleSA9IHBhcmFtc1sna2V5J107XG4gICAgICAgIH0pO1xuICAgICAgICB0aGlzLnJlc2V0QWNjb3VudCA9IHt9O1xuICAgICAgICB0aGlzLmtleU1pc3NpbmcgPSAhdGhpcy5rZXk7XG4gICAgfVxuXG4gICAgbmdBZnRlclZpZXdJbml0KCkge1xuICAgICAgICBpZiAodGhpcy5lbGVtZW50UmVmLm5hdGl2ZUVsZW1lbnQucXVlcnlTZWxlY3RvcignI3Bhc3N3b3JkJykgIT0gbnVsbCkge1xuICAgICAgICAgIHRoaXMucmVuZGVyZXIuaW52b2tlRWxlbWVudE1ldGhvZCh0aGlzLmVsZW1lbnRSZWYubmF0aXZlRWxlbWVudC5xdWVyeVNlbGVjdG9yKCcjcGFzc3dvcmQnKSwgJ2ZvY3VzJywgW10pO1xuICAgICAgICB9XG4gICAgfVxuXG4gICAgZmluaXNoUmVzZXQoKSB7XG4gICAgICAgIHRoaXMuZG9Ob3RNYXRjaCA9IG51bGw7XG4gICAgICAgIHRoaXMuZXJyb3IgPSBudWxsO1xuICAgICAgICBpZiAodGhpcy5yZXNldEFjY291bnQucGFzc3dvcmQgIT09IHRoaXMuY29uZmlybVBhc3N3b3JkKSB7XG4gICAgICAgICAgICB0aGlzLmRvTm90TWF0Y2ggPSAnRVJST1InO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgdGhpcy5wYXNzd29yZFJlc2V0RmluaXNoLnNhdmUoe2tleTogdGhpcy5rZXksIG5ld1Bhc3N3b3JkOiB0aGlzLnJlc2V0QWNjb3VudC5wYXNzd29yZH0pLnN1YnNjcmliZSgoKSA9PiB7XG4gICAgICAgICAgICAgICAgdGhpcy5zdWNjZXNzID0gJ09LJztcbiAgICAgICAgICAgIH0sICgpID0+IHtcbiAgICAgICAgICAgICAgICB0aGlzLnN1Y2Nlc3MgPSBudWxsO1xuICAgICAgICAgICAgICAgIHRoaXMuZXJyb3IgPSAnRVJST1InO1xuICAgICAgICAgICAgfSk7XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICBsb2dpbigpIHtcbiAgICAgICAgdGhpcy5tb2RhbFJlZiA9IHRoaXMubG9naW5Nb2RhbFNlcnZpY2Uub3BlbigpO1xuICAgIH1cbn1cblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL34vdHNsaW50LWxvYWRlciEuL3NyYy9tYWluL3dlYmFwcC9hcHAvYWNjb3VudC9wYXNzd29yZC1yZXNldC9maW5pc2gvcGFzc3dvcmQtcmVzZXQtZmluaXNoLmNvbXBvbmVudC50cyIsImltcG9ydCB7IFJvdXRlIH0gZnJvbSAnQGFuZ3VsYXIvcm91dGVyJztcblxuaW1wb3J0IHsgVXNlclJvdXRlQWNjZXNzU2VydmljZSB9IGZyb20gJy4uLy4uLy4uL3NoYXJlZCc7XG5pbXBvcnQgeyBQYXNzd29yZFJlc2V0RmluaXNoQ29tcG9uZW50IH0gZnJvbSAnLi9wYXNzd29yZC1yZXNldC1maW5pc2guY29tcG9uZW50JztcblxuZXhwb3J0IGNvbnN0IHBhc3N3b3JkUmVzZXRGaW5pc2hSb3V0ZTogUm91dGUgPSB7XG4gICAgcGF0aDogJ3Jlc2V0L2ZpbmlzaCcsXG4gICAgY29tcG9uZW50OiBQYXNzd29yZFJlc2V0RmluaXNoQ29tcG9uZW50LFxuICAgIGRhdGE6IHtcbiAgICAgICAgYXV0aG9yaXRpZXM6IFtdLFxuICAgICAgICBwYWdlVGl0bGU6ICdnbG9iYWwubWVudS5hY2NvdW50LnBhc3N3b3JkJ1xuICAgIH0sXG4gICAgY2FuQWN0aXZhdGU6IFtVc2VyUm91dGVBY2Nlc3NTZXJ2aWNlXVxufTtcblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL34vdHNsaW50LWxvYWRlciEuL3NyYy9tYWluL3dlYmFwcC9hcHAvYWNjb3VudC9wYXNzd29yZC1yZXNldC9maW5pc2gvcGFzc3dvcmQtcmVzZXQtZmluaXNoLnJvdXRlLnRzIiwiaW1wb3J0IHsgSW5qZWN0YWJsZSB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgSHR0cCB9IGZyb20gJ0Bhbmd1bGFyL2h0dHAnO1xuaW1wb3J0IHsgT2JzZXJ2YWJsZSB9IGZyb20gJ3J4anMvUngnO1xuXG5ASW5qZWN0YWJsZSgpXG5leHBvcnQgY2xhc3MgUGFzc3dvcmRSZXNldEZpbmlzaCB7XG5cbiAgICBjb25zdHJ1Y3Rvcihwcml2YXRlIGh0dHA6IEh0dHApIHt9XG5cbiAgICBzYXZlKGtleUFuZFBhc3N3b3JkOiBhbnkpOiBPYnNlcnZhYmxlPGFueT4ge1xuICAgICAgICByZXR1cm4gdGhpcy5odHRwLnBvc3QoJ2FwaS9hY2NvdW50L3Jlc2V0X3Bhc3N3b3JkL2ZpbmlzaCcsIGtleUFuZFBhc3N3b3JkKTtcbiAgICB9XG59XG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9+L3RzbGludC1sb2FkZXIhLi9zcmMvbWFpbi93ZWJhcHAvYXBwL2FjY291bnQvcGFzc3dvcmQtcmVzZXQvZmluaXNoL3Bhc3N3b3JkLXJlc2V0LWZpbmlzaC5zZXJ2aWNlLnRzIiwibW9kdWxlLmV4cG9ydHMgPSBcIjxkaXY+IDxkaXYgY2xhc3M9XFxcInJvd1xcXCI+IDxkaXYgY2xhc3M9XFxcImNvbC1tZC04IG9mZnNldC1tZC0yXFxcIj4gPGgxIGpoaVRyYW5zbGF0ZT1cXFwicmVzZXQucmVxdWVzdC50aXRsZVxcXCI+UmVzZXQgeW91ciBwYXNzd29yZDwvaDE+IDxkaXYgY2xhc3M9XFxcImFsZXJ0IGFsZXJ0LWRhbmdlclxcXCIgamhpVHJhbnNsYXRlPVxcXCJyZXNldC5yZXF1ZXN0Lm1lc3NhZ2VzLm5vdGZvdW5kXFxcIiAqbmdJZj1cXFwiZXJyb3JFbWFpbE5vdEV4aXN0c1xcXCI+IDxzdHJvbmc+RW1haWwgYWRkcmVzcyBpc24ndCByZWdpc3RlcmVkITwvc3Ryb25nPiBQbGVhc2UgY2hlY2sgYW5kIHRyeSBhZ2Fpbi4gPC9kaXY+IDxkaXYgY2xhc3M9XFxcImFsZXJ0IGFsZXJ0LXdhcm5pbmdcXFwiICpuZ0lmPVxcXCIhc3VjY2Vzc1xcXCI+IDxwIGpoaVRyYW5zbGF0ZT1cXFwicmVzZXQucmVxdWVzdC5tZXNzYWdlcy5pbmZvXFxcIj5FbnRlciB0aGUgZW1haWwgYWRkcmVzcyB5b3UgdXNlZCB0byByZWdpc3Rlci48L3A+IDwvZGl2PiA8ZGl2IGNsYXNzPVxcXCJhbGVydCBhbGVydC1zdWNjZXNzXFxcIiAqbmdJZj1cXFwic3VjY2VzcyA9PSAnT0snXFxcIj4gPHAgamhpVHJhbnNsYXRlPVxcXCJyZXNldC5yZXF1ZXN0Lm1lc3NhZ2VzLnN1Y2Nlc3NcXFwiPkNoZWNrIHlvdXIgZW1haWxzIGZvciBkZXRhaWxzIG9uIGhvdyB0byByZXNldCB5b3VyIHBhc3N3b3JkLjwvcD4gPC9kaXY+IDxmb3JtICpuZ0lmPVxcXCIhc3VjY2Vzc1xcXCIgbmFtZT1cXFwiZm9ybVxcXCIgcm9sZT1cXFwiZm9ybVxcXCIgKG5nU3VibWl0KT1cXFwicmVxdWVzdFJlc2V0KClcXFwiICNyZXNldFJlcXVlc3RGb3JtPVxcXCJuZ0Zvcm1cXFwiPiA8ZGl2IGNsYXNzPVxcXCJmb3JtLWdyb3VwXFxcIj4gPGxhYmVsIGNsYXNzPVxcXCJmb3JtLWNvbnRyb2wtbGFiZWxcXFwiIGZvcj1cXFwiZW1haWxcXFwiIGpoaVRyYW5zbGF0ZT1cXFwiZ2xvYmFsLmZvcm0uZW1haWxcXFwiPkVtYWlsPC9sYWJlbD4gPGlucHV0IHR5cGU9XFxcImVtYWlsXFxcIiBjbGFzcz1cXFwiZm9ybS1jb250cm9sXFxcIiBpZD1cXFwiZW1haWxcXFwiIG5hbWU9XFxcImVtYWlsXFxcIiBwbGFjZWhvbGRlcj1cXFwie3snZ2xvYmFsLmZvcm0uZW1haWwucGxhY2Vob2xkZXInIHwgdHJhbnNsYXRlfX1cXFwiIFsobmdNb2RlbCldPVxcXCJyZXNldEFjY291bnQuZW1haWxcXFwiIG1pbmxlbmd0aD1cXFwiNVxcXCIgbWF4bGVuZ3RoPVxcXCIxMDBcXFwiICNlbWFpbElucHV0PVxcXCJuZ01vZGVsXFxcIiByZXF1aXJlZD4gPGRpdiAqbmdJZj1cXFwiZW1haWxJbnB1dC5kaXJ0eSAmJiBlbWFpbElucHV0LmludmFsaWRcXFwiPiA8c21hbGwgY2xhc3M9XFxcImZvcm0tdGV4dCB0ZXh0LWRhbmdlclxcXCIgKm5nSWY9XFxcImVtYWlsSW5wdXQuZXJyb3JzLnJlcXVpcmVkXFxcIiBqaGlUcmFuc2xhdGU9XFxcImdsb2JhbC5tZXNzYWdlcy52YWxpZGF0ZS5lbWFpbC5yZXF1aXJlZFxcXCI+IFlvdXIgZW1haWwgaXMgcmVxdWlyZWQuIDwvc21hbGw+IDxzbWFsbCBjbGFzcz1cXFwiZm9ybS10ZXh0IHRleHQtZGFuZ2VyXFxcIiAqbmdJZj1cXFwiZW1haWxJbnB1dC5lcnJvcnMuZW1haWxcXFwiIGpoaVRyYW5zbGF0ZT1cXFwiZ2xvYmFsLm1lc3NhZ2VzLnZhbGlkYXRlLmVtYWlsLmludmFsaWRcXFwiPiBZb3VyIGVtYWlsIGlzIGludmFsaWQuIDwvc21hbGw+IDxzbWFsbCBjbGFzcz1cXFwiZm9ybS10ZXh0IHRleHQtZGFuZ2VyXFxcIiAqbmdJZj1cXFwiZW1haWxJbnB1dC5lcnJvcnMubWlubGVuZ3RoXFxcIiBqaGlUcmFuc2xhdGU9XFxcImdsb2JhbC5tZXNzYWdlcy52YWxpZGF0ZS5lbWFpbC5taW5sZW5ndGhcXFwiPiBZb3VyIGVtYWlsIGlzIHJlcXVpcmVkIHRvIGJlIGF0IGxlYXN0IDUgY2hhcmFjdGVycy4gPC9zbWFsbD4gPHNtYWxsIGNsYXNzPVxcXCJmb3JtLXRleHQgdGV4dC1kYW5nZXJcXFwiICpuZ0lmPVxcXCJlbWFpbElucHV0LmVycm9ycy5tYXhsZW5ndGhcXFwiIGpoaVRyYW5zbGF0ZT1cXFwiZ2xvYmFsLm1lc3NhZ2VzLnZhbGlkYXRlLmVtYWlsLm1heGxlbmd0aFxcXCI+IFlvdXIgZW1haWwgY2Fubm90IGJlIGxvbmdlciB0aGFuIDEwMCBjaGFyYWN0ZXJzLiA8L3NtYWxsPiA8L2Rpdj4gPC9kaXY+IDxidXR0b24gdHlwZT1cXFwic3VibWl0XFxcIiBbZGlzYWJsZWRdPVxcXCJyZXNldFJlcXVlc3RGb3JtLmZvcm0uaW52YWxpZFxcXCIgY2xhc3M9XFxcImJ0biBidG4tcHJpbWFyeVxcXCIgamhpVHJhbnNsYXRlPVxcXCJyZXNldC5yZXF1ZXN0LmZvcm0uYnV0dG9uXFxcIj5SZXNldDwvYnV0dG9uPiA8L2Zvcm0+IDwvZGl2PiA8L2Rpdj4gPC9kaXY+IFwiO1xuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vc3JjL21haW4vd2ViYXBwL2FwcC9hY2NvdW50L3Bhc3N3b3JkLXJlc2V0L2luaXQvcGFzc3dvcmQtcmVzZXQtaW5pdC5jb21wb25lbnQuaHRtbFxuLy8gbW9kdWxlIGlkID0gLi9zcmMvbWFpbi93ZWJhcHAvYXBwL2FjY291bnQvcGFzc3dvcmQtcmVzZXQvaW5pdC9wYXNzd29yZC1yZXNldC1pbml0LmNvbXBvbmVudC5odG1sXG4vLyBtb2R1bGUgY2h1bmtzID0gMCIsImltcG9ydCB7IENvbXBvbmVudCwgT25Jbml0LCBBZnRlclZpZXdJbml0LCBSZW5kZXJlciwgRWxlbWVudFJlZiB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuXG5pbXBvcnQgeyBQYXNzd29yZFJlc2V0SW5pdCB9IGZyb20gJy4vcGFzc3dvcmQtcmVzZXQtaW5pdC5zZXJ2aWNlJztcblxuQENvbXBvbmVudCh7XG4gICAgc2VsZWN0b3I6ICdqaGktcGFzc3dvcmQtcmVzZXQtaW5pdCcsXG4gICAgdGVtcGxhdGVVcmw6ICcuL3Bhc3N3b3JkLXJlc2V0LWluaXQuY29tcG9uZW50Lmh0bWwnXG59KVxuZXhwb3J0IGNsYXNzIFBhc3N3b3JkUmVzZXRJbml0Q29tcG9uZW50IGltcGxlbWVudHMgT25Jbml0LCBBZnRlclZpZXdJbml0IHtcbiAgICBlcnJvcjogc3RyaW5nO1xuICAgIGVycm9yRW1haWxOb3RFeGlzdHM6IHN0cmluZztcbiAgICByZXNldEFjY291bnQ6IGFueTtcbiAgICBzdWNjZXNzOiBzdHJpbmc7XG5cbiAgICBjb25zdHJ1Y3RvcihcbiAgICAgICAgcHJpdmF0ZSBwYXNzd29yZFJlc2V0SW5pdDogUGFzc3dvcmRSZXNldEluaXQsXG4gICAgICAgIHByaXZhdGUgZWxlbWVudFJlZjogRWxlbWVudFJlZixcbiAgICAgICAgcHJpdmF0ZSByZW5kZXJlcjogUmVuZGVyZXJcbiAgICApIHtcbiAgICB9XG5cbiAgICBuZ09uSW5pdCgpIHtcbiAgICAgICAgdGhpcy5yZXNldEFjY291bnQgPSB7fTtcbiAgICB9XG5cbiAgICBuZ0FmdGVyVmlld0luaXQoKSB7XG4gICAgICAgIHRoaXMucmVuZGVyZXIuaW52b2tlRWxlbWVudE1ldGhvZCh0aGlzLmVsZW1lbnRSZWYubmF0aXZlRWxlbWVudC5xdWVyeVNlbGVjdG9yKCcjZW1haWwnKSwgJ2ZvY3VzJywgW10pO1xuICAgIH1cblxuICAgIHJlcXVlc3RSZXNldCgpIHtcbiAgICAgICAgdGhpcy5lcnJvciA9IG51bGw7XG4gICAgICAgIHRoaXMuZXJyb3JFbWFpbE5vdEV4aXN0cyA9IG51bGw7XG5cbiAgICAgICAgdGhpcy5wYXNzd29yZFJlc2V0SW5pdC5zYXZlKHRoaXMucmVzZXRBY2NvdW50LmVtYWlsKS5zdWJzY3JpYmUoKCkgPT4ge1xuICAgICAgICAgICAgdGhpcy5zdWNjZXNzID0gJ09LJztcbiAgICAgICAgfSwgKHJlc3BvbnNlKSA9PiB7XG4gICAgICAgICAgICB0aGlzLnN1Y2Nlc3MgPSBudWxsO1xuICAgICAgICAgICAgaWYgKHJlc3BvbnNlLnN0YXR1cyA9PT0gNDAwICYmIHJlc3BvbnNlLmRhdGEgPT09ICdlbWFpbCBhZGRyZXNzIG5vdCByZWdpc3RlcmVkJykge1xuICAgICAgICAgICAgICAgIHRoaXMuZXJyb3JFbWFpbE5vdEV4aXN0cyA9ICdFUlJPUic7XG4gICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgIHRoaXMuZXJyb3IgPSAnRVJST1InO1xuICAgICAgICAgICAgfVxuICAgICAgICB9KTtcbiAgICB9XG59XG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9+L3RzbGludC1sb2FkZXIhLi9zcmMvbWFpbi93ZWJhcHAvYXBwL2FjY291bnQvcGFzc3dvcmQtcmVzZXQvaW5pdC9wYXNzd29yZC1yZXNldC1pbml0LmNvbXBvbmVudC50cyIsImltcG9ydCB7IFJvdXRlIH0gZnJvbSAnQGFuZ3VsYXIvcm91dGVyJztcblxuaW1wb3J0IHsgVXNlclJvdXRlQWNjZXNzU2VydmljZSB9IGZyb20gJy4uLy4uLy4uL3NoYXJlZCc7XG5pbXBvcnQgeyBQYXNzd29yZFJlc2V0SW5pdENvbXBvbmVudCB9IGZyb20gJy4vcGFzc3dvcmQtcmVzZXQtaW5pdC5jb21wb25lbnQnO1xuXG5leHBvcnQgY29uc3QgcGFzc3dvcmRSZXNldEluaXRSb3V0ZTogUm91dGUgPSB7XG4gICAgcGF0aDogJ3Jlc2V0L3JlcXVlc3QnLFxuICAgIGNvbXBvbmVudDogUGFzc3dvcmRSZXNldEluaXRDb21wb25lbnQsXG4gICAgZGF0YToge1xuICAgICAgICBhdXRob3JpdGllczogW10sXG4gICAgICAgIHBhZ2VUaXRsZTogJ2dsb2JhbC5tZW51LmFjY291bnQucGFzc3dvcmQnXG4gICAgfSxcbiAgICBjYW5BY3RpdmF0ZTogW1VzZXJSb3V0ZUFjY2Vzc1NlcnZpY2VdXG59O1xuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vfi90c2xpbnQtbG9hZGVyIS4vc3JjL21haW4vd2ViYXBwL2FwcC9hY2NvdW50L3Bhc3N3b3JkLXJlc2V0L2luaXQvcGFzc3dvcmQtcmVzZXQtaW5pdC5yb3V0ZS50cyIsImltcG9ydCB7IEluamVjdGFibGUgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IEh0dHAgfSBmcm9tICdAYW5ndWxhci9odHRwJztcbmltcG9ydCB7IE9ic2VydmFibGUgfSBmcm9tICdyeGpzL1J4JztcblxuQEluamVjdGFibGUoKVxuZXhwb3J0IGNsYXNzIFBhc3N3b3JkUmVzZXRJbml0IHtcblxuICAgIGNvbnN0cnVjdG9yKHByaXZhdGUgaHR0cDogSHR0cCkge31cblxuICAgIHNhdmUobWFpbDogc3RyaW5nKTogT2JzZXJ2YWJsZTxhbnk+IHtcbiAgICAgICAgcmV0dXJuIHRoaXMuaHR0cC5wb3N0KCdhcGkvYWNjb3VudC9yZXNldF9wYXNzd29yZC9pbml0JywgbWFpbCk7XG4gICAgfVxufVxuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vfi90c2xpbnQtbG9hZGVyIS4vc3JjL21haW4vd2ViYXBwL2FwcC9hY2NvdW50L3Bhc3N3b3JkLXJlc2V0L2luaXQvcGFzc3dvcmQtcmVzZXQtaW5pdC5zZXJ2aWNlLnRzIiwiaW1wb3J0IHsgQ29tcG9uZW50LCBFbGVtZW50UmVmLCBJbnB1dCwgUmVuZGVyZXIgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcblxuQENvbXBvbmVudCh7XG4gICAgc2VsZWN0b3I6ICdqaGktcGFzc3dvcmQtc3RyZW5ndGgtYmFyJyxcbiAgICB0ZW1wbGF0ZTogYFxuICAgICAgICA8ZGl2IGlkPVwic3RyZW5ndGhcIj5cbiAgICAgICAgICAgIDxzbWFsbCBqaGlUcmFuc2xhdGU9XCJnbG9iYWwubWVzc2FnZXMudmFsaWRhdGUubmV3cGFzc3dvcmQuc3RyZW5ndGhcIj5QYXNzd29yZCBzdHJlbmd0aDo8L3NtYWxsPlxuICAgICAgICAgICAgPHVsIGlkPVwic3RyZW5ndGhCYXJcIj5cbiAgICAgICAgICAgICAgICA8bGkgY2xhc3M9XCJwb2ludFwiPjwvbGk+XG4gICAgICAgICAgICAgICAgPGxpIGNsYXNzPVwicG9pbnRcIj48L2xpPlxuICAgICAgICAgICAgICAgIDxsaSBjbGFzcz1cInBvaW50XCI+PC9saT5cbiAgICAgICAgICAgICAgICA8bGkgY2xhc3M9XCJwb2ludFwiPjwvbGk+XG4gICAgICAgICAgICAgICAgPGxpIGNsYXNzPVwicG9pbnRcIj48L2xpPlxuICAgICAgICAgICAgPC91bD5cbiAgICAgICAgPC9kaXY+YCxcbiAgICBzdHlsZVVybHM6IFtcbiAgICAgICAgJ3Bhc3N3b3JkLXN0cmVuZ3RoLWJhci5zY3NzJ1xuICAgIF1cbn0pXG5leHBvcnQgY2xhc3MgUGFzc3dvcmRTdHJlbmd0aEJhckNvbXBvbmVudCB7XG5cbiAgICBjb2xvcnMgPSBbJyNGMDAnLCAnI0Y5MCcsICcjRkYwJywgJyM5RjAnLCAnIzBGMCddO1xuXG4gICAgY29uc3RydWN0b3IocHJpdmF0ZSByZW5kZXJlcjogUmVuZGVyZXIsIHByaXZhdGUgZWxlbWVudFJlZjogRWxlbWVudFJlZikgeyB9XG5cbiAgICBtZWFzdXJlU3RyZW5ndGgocDogc3RyaW5nKTogbnVtYmVyIHtcblxuICAgICAgICBsZXQgZm9yY2UgPSAwO1xuICAgICAgICBjb25zdCByZWdleCA9IC9bJC0vOi0/ey1+IVwiXl9gXFxbXFxdXS9nOyAvLyBcIlxuICAgICAgICBjb25zdCBsb3dlckxldHRlcnMgPSAvW2Etel0rLy50ZXN0KHApO1xuICAgICAgICBjb25zdCB1cHBlckxldHRlcnMgPSAvW0EtWl0rLy50ZXN0KHApO1xuICAgICAgICBjb25zdCBudW1iZXJzID0gL1swLTldKy8udGVzdChwKTtcbiAgICAgICAgY29uc3Qgc3ltYm9scyA9IHJlZ2V4LnRlc3QocCk7XG5cbiAgICAgICAgY29uc3QgZmxhZ3MgPSBbbG93ZXJMZXR0ZXJzLCB1cHBlckxldHRlcnMsIG51bWJlcnMsIHN5bWJvbHNdO1xuICAgICAgICBjb25zdCBwYXNzZWRNYXRjaGVzID0gZmxhZ3MuZmlsdGVyKCAoaXNNYXRjaGVkRmxhZzogYm9vbGVhbikgPT4ge1xuICAgICAgICAgICAgcmV0dXJuIGlzTWF0Y2hlZEZsYWcgPT09IHRydWU7XG4gICAgICAgIH0pLmxlbmd0aDtcblxuICAgICAgICBmb3JjZSArPSAyICogcC5sZW5ndGggKyAoKHAubGVuZ3RoID49IDEwKSA/IDEgOiAwKTtcbiAgICAgICAgZm9yY2UgKz0gcGFzc2VkTWF0Y2hlcyAqIDEwO1xuXG4gICAgICAgIC8vIHBlbmFsaXR5IChzaG9ydCBwYXNzd29yZClcbiAgICAgICAgZm9yY2UgPSAocC5sZW5ndGggPD0gNikgPyBNYXRoLm1pbihmb3JjZSwgMTApIDogZm9yY2U7XG5cbiAgICAgICAgLy8gcGVuYWxpdHkgKHBvb3IgdmFyaWV0eSBvZiBjaGFyYWN0ZXJzKVxuICAgICAgICBmb3JjZSA9IChwYXNzZWRNYXRjaGVzID09PSAxKSA/IE1hdGgubWluKGZvcmNlLCAxMCkgOiBmb3JjZTtcbiAgICAgICAgZm9yY2UgPSAocGFzc2VkTWF0Y2hlcyA9PT0gMikgPyBNYXRoLm1pbihmb3JjZSwgMjApIDogZm9yY2U7XG4gICAgICAgIGZvcmNlID0gKHBhc3NlZE1hdGNoZXMgPT09IDMpID8gTWF0aC5taW4oZm9yY2UsIDQwKSA6IGZvcmNlO1xuXG4gICAgICAgIHJldHVybiBmb3JjZTtcbiAgICB9O1xuXG4gICAgZ2V0Q29sb3IoczogbnVtYmVyKTogYW55IHtcbiAgICAgICAgbGV0IGlkeCA9IDA7XG4gICAgICAgIGlmIChzIDw9IDEwKSB7XG4gICAgICAgICAgICBpZHggPSAwO1xuICAgICAgICB9IGVsc2UgaWYgKHMgPD0gMjApIHtcbiAgICAgICAgICAgIGlkeCA9IDE7XG4gICAgICAgIH0gZWxzZSBpZiAocyA8PSAzMCkge1xuICAgICAgICAgICAgaWR4ID0gMjtcbiAgICAgICAgfSBlbHNlIGlmIChzIDw9IDQwKSB7XG4gICAgICAgICAgICBpZHggPSAzO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgaWR4ID0gNDtcbiAgICAgICAgfVxuICAgICAgICByZXR1cm4ge2lkeDogaWR4ICsgMSwgY29sOiB0aGlzLmNvbG9yc1tpZHhdfTtcbiAgICB9O1xuXG4gICAgQElucHV0KClcbiAgICBzZXQgcGFzc3dvcmRUb0NoZWNrKHBhc3N3b3JkOiBzdHJpbmcpIHtcbiAgICAgICAgaWYgKHBhc3N3b3JkKSB7XG4gICAgICAgICAgICBjb25zdCBjID0gdGhpcy5nZXRDb2xvcih0aGlzLm1lYXN1cmVTdHJlbmd0aChwYXNzd29yZCkpO1xuICAgICAgICAgICAgY29uc3QgZWxlbWVudCA9IHRoaXMuZWxlbWVudFJlZi5uYXRpdmVFbGVtZW50O1xuICAgICAgICAgICAgaWYgKCBlbGVtZW50LmNsYXNzTmFtZSApIHtcbiAgICAgICAgICAgICAgICB0aGlzLnJlbmRlcmVyLnNldEVsZW1lbnRDbGFzcyhlbGVtZW50LCBlbGVtZW50LmNsYXNzTmFtZSAsIGZhbHNlKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGNvbnN0IGxpcyA9IGVsZW1lbnQuZ2V0RWxlbWVudHNCeVRhZ05hbWUoJ2xpJyk7XG4gICAgICAgICAgICBmb3IgKGxldCBpID0gMDsgaSA8IGxpcy5sZW5ndGg7IGkrKykge1xuICAgICAgICAgICAgICAgIGlmIChpIDwgYy5pZHgpIHtcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5yZW5kZXJlci5zZXRFbGVtZW50U3R5bGUobGlzW2ldLCAnYmFja2dyb3VuZENvbG9yJywgYy5jb2wpO1xuICAgICAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgICAgIHRoaXMucmVuZGVyZXIuc2V0RWxlbWVudFN0eWxlKGxpc1tpXSwgJ2JhY2tncm91bmRDb2xvcicsICcjREREJyk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgfVxufVxuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vfi90c2xpbnQtbG9hZGVyIS4vc3JjL21haW4vd2ViYXBwL2FwcC9hY2NvdW50L3Bhc3N3b3JkL3Bhc3N3b3JkLXN0cmVuZ3RoLWJhci5jb21wb25lbnQudHMiLCJcbiAgICAgICAgdmFyIHJlc3VsdCA9IHJlcXVpcmUoXCIhIS4uLy4uLy4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2luZGV4LmpzIS4uLy4uLy4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy9zYXNzLWxvYWRlci9saWIvbG9hZGVyLmpzIS4vcGFzc3dvcmQtc3RyZW5ndGgtYmFyLnNjc3NcIik7XG5cbiAgICAgICAgaWYgKHR5cGVvZiByZXN1bHQgPT09IFwic3RyaW5nXCIpIHtcbiAgICAgICAgICAgIG1vZHVsZS5leHBvcnRzID0gcmVzdWx0O1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgbW9kdWxlLmV4cG9ydHMgPSByZXN1bHQudG9TdHJpbmcoKTtcbiAgICAgICAgfVxuICAgIFxuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vc3JjL21haW4vd2ViYXBwL2FwcC9hY2NvdW50L3Bhc3N3b3JkL3Bhc3N3b3JkLXN0cmVuZ3RoLWJhci5zY3NzXG4vLyBtb2R1bGUgaWQgPSAuL3NyYy9tYWluL3dlYmFwcC9hcHAvYWNjb3VudC9wYXNzd29yZC9wYXNzd29yZC1zdHJlbmd0aC1iYXIuc2Nzc1xuLy8gbW9kdWxlIGNodW5rcyA9IDAiLCJtb2R1bGUuZXhwb3J0cyA9IFwiPGRpdj4gPGRpdiBjbGFzcz1cXFwicm93XFxcIj4gPGRpdiBjbGFzcz1cXFwiY29sLW1kLTggb2Zmc2V0LW1kLTJcXFwiPiA8aDIgamhpVHJhbnNsYXRlPVxcXCJwYXNzd29yZC50aXRsZVxcXCIgdHJhbnNsYXRlVmFsdWVzPVxcXCJ7dXNlcm5hbWU6ICd7e2FjY291bnQubG9naW59fSd9XFxcIiAqbmdJZj1cXFwiYWNjb3VudFxcXCI+UGFzc3dvcmQgZm9yIFs8Yj57e2FjY291bnQubG9naW59fTwvYj5dPC9oMj4gPGRpdiBjbGFzcz1cXFwiYWxlcnQgYWxlcnQtc3VjY2Vzc1xcXCIgKm5nSWY9XFxcInN1Y2Nlc3NcXFwiIGpoaVRyYW5zbGF0ZT1cXFwicGFzc3dvcmQubWVzc2FnZXMuc3VjY2Vzc1xcXCI+IDxzdHJvbmc+UGFzc3dvcmQgY2hhbmdlZCE8L3N0cm9uZz4gPC9kaXY+IDxkaXYgY2xhc3M9XFxcImFsZXJ0IGFsZXJ0LWRhbmdlclxcXCIgKm5nSWY9XFxcImVycm9yXFxcIiBqaGlUcmFuc2xhdGU9XFxcInBhc3N3b3JkLm1lc3NhZ2VzLmVycm9yXFxcIj4gPHN0cm9uZz5BbiBlcnJvciBoYXMgb2NjdXJyZWQhPC9zdHJvbmc+IFRoZSBwYXNzd29yZCBjb3VsZCBub3QgYmUgY2hhbmdlZC4gPC9kaXY+IDxkaXYgY2xhc3M9XFxcImFsZXJ0IGFsZXJ0LWRhbmdlclxcXCIgKm5nSWY9XFxcImRvTm90TWF0Y2hcXFwiIGpoaVRyYW5zbGF0ZT1cXFwiZ2xvYmFsLm1lc3NhZ2VzLmVycm9yLmRvbnRtYXRjaFxcXCI+IFRoZSBwYXNzd29yZCBhbmQgaXRzIGNvbmZpcm1hdGlvbiBkbyBub3QgbWF0Y2ghIDwvZGl2PiA8Zm9ybSBuYW1lPVxcXCJmb3JtXFxcIiByb2xlPVxcXCJmb3JtXFxcIiAobmdTdWJtaXQpPVxcXCJjaGFuZ2VQYXNzd29yZCgpXFxcIiAjcGFzc3dvcmRGb3JtPVxcXCJuZ0Zvcm1cXFwiPiA8ZGl2IGNsYXNzPVxcXCJmb3JtLWdyb3VwXFxcIj4gPGxhYmVsIGNsYXNzPVxcXCJmb3JtLWNvbnRyb2wtbGFiZWxcXFwiIGZvcj1cXFwicGFzc3dvcmRcXFwiIGpoaVRyYW5zbGF0ZT1cXFwiZ2xvYmFsLmZvcm0ubmV3cGFzc3dvcmRcXFwiPk5ldyBwYXNzd29yZDwvbGFiZWw+IDxpbnB1dCB0eXBlPVxcXCJwYXNzd29yZFxcXCIgY2xhc3M9XFxcImZvcm0tY29udHJvbFxcXCIgaWQ9XFxcInBhc3N3b3JkXFxcIiBuYW1lPVxcXCJwYXNzd29yZFxcXCIgI3Bhc3N3b3JkSW5wdXQ9XFxcIm5nTW9kZWxcXFwiIHBsYWNlaG9sZGVyPVxcXCJ7eydnbG9iYWwuZm9ybS5uZXdwYXNzd29yZC5wbGFjZWhvbGRlcicgfCB0cmFuc2xhdGV9fVxcXCIgWyhuZ01vZGVsKV09XFxcInBhc3N3b3JkXFxcIiBtaW5sZW5ndGg9XFxcIjRcXFwiIG1heGxlbmd0aD1cXFwiNTBcXFwiIHJlcXVpcmVkPiA8ZGl2ICpuZ0lmPVxcXCJwYXNzd29yZElucHV0LmRpcnR5ICYmIHBhc3N3b3JkSW5wdXQuaW52YWxpZFxcXCI+IDxzbWFsbCBjbGFzcz1cXFwiZm9ybS10ZXh0IHRleHQtZGFuZ2VyXFxcIiAqbmdJZj1cXFwicGFzc3dvcmRJbnB1dC5lcnJvcnMucmVxdWlyZWRcXFwiIGpoaVRyYW5zbGF0ZT1cXFwiZ2xvYmFsLm1lc3NhZ2VzLnZhbGlkYXRlLm5ld3Bhc3N3b3JkLnJlcXVpcmVkXFxcIj4gWW91ciBwYXNzd29yZCBpcyByZXF1aXJlZC4gPC9zbWFsbD4gPHNtYWxsIGNsYXNzPVxcXCJmb3JtLXRleHQgdGV4dC1kYW5nZXJcXFwiICpuZ0lmPVxcXCJwYXNzd29yZElucHV0LmVycm9ycy5taW5sZW5ndGhcXFwiIGpoaVRyYW5zbGF0ZT1cXFwiZ2xvYmFsLm1lc3NhZ2VzLnZhbGlkYXRlLm5ld3Bhc3N3b3JkLm1pbmxlbmd0aFxcXCI+IFlvdXIgcGFzc3dvcmQgaXMgcmVxdWlyZWQgdG8gYmUgYXQgbGVhc3QgNCBjaGFyYWN0ZXJzLiA8L3NtYWxsPiA8c21hbGwgY2xhc3M9XFxcImZvcm0tdGV4dCB0ZXh0LWRhbmdlclxcXCIgKm5nSWY9XFxcInBhc3N3b3JkSW5wdXQuZXJyb3JzLm1heGxlbmd0aFxcXCIgamhpVHJhbnNsYXRlPVxcXCJnbG9iYWwubWVzc2FnZXMudmFsaWRhdGUubmV3cGFzc3dvcmQubWF4bGVuZ3RoXFxcIj4gWW91ciBwYXNzd29yZCBjYW5ub3QgYmUgbG9uZ2VyIHRoYW4gNTAgY2hhcmFjdGVycy4gPC9zbWFsbD4gPC9kaXY+IDxqaGktcGFzc3dvcmQtc3RyZW5ndGgtYmFyIFtwYXNzd29yZFRvQ2hlY2tdPVxcXCJwYXNzd29yZFxcXCI+PC9qaGktcGFzc3dvcmQtc3RyZW5ndGgtYmFyPiA8L2Rpdj4gPGRpdiBjbGFzcz1cXFwiZm9ybS1ncm91cFxcXCI+IDxsYWJlbCBjbGFzcz1cXFwiZm9ybS1jb250cm9sLWxhYmVsXFxcIiBmb3I9XFxcImNvbmZpcm1QYXNzd29yZFxcXCIgamhpVHJhbnNsYXRlPVxcXCJnbG9iYWwuZm9ybS5jb25maXJtcGFzc3dvcmRcXFwiPk5ldyBwYXNzd29yZCBjb25maXJtYXRpb248L2xhYmVsPiA8aW5wdXQgdHlwZT1cXFwicGFzc3dvcmRcXFwiIGNsYXNzPVxcXCJmb3JtLWNvbnRyb2xcXFwiIGlkPVxcXCJjb25maXJtUGFzc3dvcmRcXFwiIG5hbWU9XFxcImNvbmZpcm1QYXNzd29yZFxcXCIgI2NvbmZpcm1QYXNzd29yZElucHV0PVxcXCJuZ01vZGVsXFxcIiBwbGFjZWhvbGRlcj1cXFwie3snZ2xvYmFsLmZvcm0uY29uZmlybXBhc3N3b3JkLnBsYWNlaG9sZGVyJyB8IHRyYW5zbGF0ZX19XFxcIiBbKG5nTW9kZWwpXT1cXFwiY29uZmlybVBhc3N3b3JkXFxcIiBtaW5sZW5ndGg9XFxcIjRcXFwiIG1heGxlbmd0aD1cXFwiNTBcXFwiIHJlcXVpcmVkPiA8ZGl2ICpuZ0lmPVxcXCJjb25maXJtUGFzc3dvcmRJbnB1dC5kaXJ0eSAmJiBjb25maXJtUGFzc3dvcmRJbnB1dC5pbnZhbGlkXFxcIj4gPHNtYWxsIGNsYXNzPVxcXCJmb3JtLXRleHQgdGV4dC1kYW5nZXJcXFwiICpuZ0lmPVxcXCJjb25maXJtUGFzc3dvcmRJbnB1dC5lcnJvcnMucmVxdWlyZWRcXFwiIGpoaVRyYW5zbGF0ZT1cXFwiZ2xvYmFsLm1lc3NhZ2VzLnZhbGlkYXRlLmNvbmZpcm1wYXNzd29yZC5yZXF1aXJlZFxcXCI+IFlvdXIgY29uZmlybWF0aW9uIHBhc3N3b3JkIGlzIHJlcXVpcmVkLiA8L3NtYWxsPiA8c21hbGwgY2xhc3M9XFxcImZvcm0tdGV4dCB0ZXh0LWRhbmdlclxcXCIgKm5nSWY9XFxcImNvbmZpcm1QYXNzd29yZElucHV0LmVycm9ycy5taW5sZW5ndGhcXFwiIGpoaVRyYW5zbGF0ZT1cXFwiZ2xvYmFsLm1lc3NhZ2VzLnZhbGlkYXRlLmNvbmZpcm1wYXNzd29yZC5taW5sZW5ndGhcXFwiPiBZb3VyIGNvbmZpcm1hdGlvbiBwYXNzd29yZCBpcyByZXF1aXJlZCB0byBiZSBhdCBsZWFzdCA0IGNoYXJhY3RlcnMuIDwvc21hbGw+IDxzbWFsbCBjbGFzcz1cXFwiZm9ybS10ZXh0IHRleHQtZGFuZ2VyXFxcIiAqbmdJZj1cXFwiY29uZmlybVBhc3N3b3JkSW5wdXQuZXJyb3JzLm1heGxlbmd0aFxcXCIgamhpVHJhbnNsYXRlPVxcXCJnbG9iYWwubWVzc2FnZXMudmFsaWRhdGUuY29uZmlybXBhc3N3b3JkLm1heGxlbmd0aFxcXCI+IFlvdXIgY29uZmlybWF0aW9uIHBhc3N3b3JkIGNhbm5vdCBiZSBsb25nZXIgdGhhbiA1MCBjaGFyYWN0ZXJzLiA8L3NtYWxsPiA8L2Rpdj4gPC9kaXY+IDxidXR0b24gdHlwZT1cXFwic3VibWl0XFxcIiBbZGlzYWJsZWRdPVxcXCJwYXNzd29yZEZvcm0uZm9ybS5pbnZhbGlkXFxcIiBjbGFzcz1cXFwiYnRuIGJ0bi1wcmltYXJ5XFxcIiBqaGlUcmFuc2xhdGU9XFxcInBhc3N3b3JkLmZvcm0uYnV0dG9uXFxcIj5TYXZlPC9idXR0b24+IDwvZm9ybT4gPC9kaXY+IDwvZGl2PiA8L2Rpdj4gXCI7XG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9zcmMvbWFpbi93ZWJhcHAvYXBwL2FjY291bnQvcGFzc3dvcmQvcGFzc3dvcmQuY29tcG9uZW50Lmh0bWxcbi8vIG1vZHVsZSBpZCA9IC4vc3JjL21haW4vd2ViYXBwL2FwcC9hY2NvdW50L3Bhc3N3b3JkL3Bhc3N3b3JkLmNvbXBvbmVudC5odG1sXG4vLyBtb2R1bGUgY2h1bmtzID0gMCIsImltcG9ydCB7IENvbXBvbmVudCwgT25Jbml0IH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5cbmltcG9ydCB7IFByaW5jaXBhbCB9IGZyb20gJy4uLy4uL3NoYXJlZCc7XG5pbXBvcnQgeyBQYXNzd29yZCB9IGZyb20gJy4vcGFzc3dvcmQuc2VydmljZSc7XG5cbkBDb21wb25lbnQoe1xuICAgIHNlbGVjdG9yOiAnamhpLXBhc3N3b3JkJyxcbiAgICB0ZW1wbGF0ZVVybDogJy4vcGFzc3dvcmQuY29tcG9uZW50Lmh0bWwnXG59KVxuZXhwb3J0IGNsYXNzIFBhc3N3b3JkQ29tcG9uZW50IGltcGxlbWVudHMgT25Jbml0IHtcbiAgICBkb05vdE1hdGNoOiBzdHJpbmc7XG4gICAgZXJyb3I6IHN0cmluZztcbiAgICBzdWNjZXNzOiBzdHJpbmc7XG4gICAgYWNjb3VudDogYW55O1xuICAgIHBhc3N3b3JkOiBzdHJpbmc7XG4gICAgY29uZmlybVBhc3N3b3JkOiBzdHJpbmc7XG5cbiAgICBjb25zdHJ1Y3RvcihcbiAgICAgICAgcHJpdmF0ZSBwYXNzd29yZFNlcnZpY2U6IFBhc3N3b3JkLFxuICAgICAgICBwcml2YXRlIHByaW5jaXBhbDogUHJpbmNpcGFsXG4gICAgKSB7XG4gICAgfVxuXG4gICAgbmdPbkluaXQoKSB7XG4gICAgICAgIHRoaXMucHJpbmNpcGFsLmlkZW50aXR5KCkudGhlbigoYWNjb3VudCkgPT4ge1xuICAgICAgICAgICAgdGhpcy5hY2NvdW50ID0gYWNjb3VudDtcbiAgICAgICAgfSk7XG4gICAgfVxuXG4gICAgY2hhbmdlUGFzc3dvcmQoKSB7XG4gICAgICAgIGlmICh0aGlzLnBhc3N3b3JkICE9PSB0aGlzLmNvbmZpcm1QYXNzd29yZCkge1xuICAgICAgICAgICAgdGhpcy5lcnJvciA9IG51bGw7XG4gICAgICAgICAgICB0aGlzLnN1Y2Nlc3MgPSBudWxsO1xuICAgICAgICAgICAgdGhpcy5kb05vdE1hdGNoID0gJ0VSUk9SJztcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIHRoaXMuZG9Ob3RNYXRjaCA9IG51bGw7XG4gICAgICAgICAgICB0aGlzLnBhc3N3b3JkU2VydmljZS5zYXZlKHRoaXMucGFzc3dvcmQpLnN1YnNjcmliZSgoKSA9PiB7XG4gICAgICAgICAgICAgICAgdGhpcy5lcnJvciA9IG51bGw7XG4gICAgICAgICAgICAgICAgdGhpcy5zdWNjZXNzID0gJ09LJztcbiAgICAgICAgICAgIH0sICgpID0+IHtcbiAgICAgICAgICAgICAgICB0aGlzLnN1Y2Nlc3MgPSBudWxsO1xuICAgICAgICAgICAgICAgIHRoaXMuZXJyb3IgPSAnRVJST1InO1xuICAgICAgICAgICAgfSk7XG4gICAgICAgIH1cbiAgICB9XG59XG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9+L3RzbGludC1sb2FkZXIhLi9zcmMvbWFpbi93ZWJhcHAvYXBwL2FjY291bnQvcGFzc3dvcmQvcGFzc3dvcmQuY29tcG9uZW50LnRzIiwiaW1wb3J0IHsgUm91dGUgfSBmcm9tICdAYW5ndWxhci9yb3V0ZXInO1xuXG5pbXBvcnQgeyBVc2VyUm91dGVBY2Nlc3NTZXJ2aWNlIH0gZnJvbSAnLi4vLi4vc2hhcmVkJztcbmltcG9ydCB7IFBhc3N3b3JkQ29tcG9uZW50IH0gZnJvbSAnLi9wYXNzd29yZC5jb21wb25lbnQnO1xuXG5leHBvcnQgY29uc3QgcGFzc3dvcmRSb3V0ZTogUm91dGUgPSB7XG4gICAgcGF0aDogJ3Bhc3N3b3JkJyxcbiAgICBjb21wb25lbnQ6IFBhc3N3b3JkQ29tcG9uZW50LFxuICAgIGRhdGE6IHtcbiAgICAgICAgYXV0aG9yaXRpZXM6IFsnUk9MRV9VU0VSJ10sXG4gICAgICAgIHBhZ2VUaXRsZTogJ2dsb2JhbC5tZW51LmFjY291bnQucGFzc3dvcmQnXG4gICAgfSxcbiAgICBjYW5BY3RpdmF0ZTogW1VzZXJSb3V0ZUFjY2Vzc1NlcnZpY2VdXG59O1xuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vfi90c2xpbnQtbG9hZGVyIS4vc3JjL21haW4vd2ViYXBwL2FwcC9hY2NvdW50L3Bhc3N3b3JkL3Bhc3N3b3JkLnJvdXRlLnRzIiwiaW1wb3J0IHsgSW5qZWN0YWJsZSB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgSHR0cCB9IGZyb20gJ0Bhbmd1bGFyL2h0dHAnO1xuaW1wb3J0IHsgT2JzZXJ2YWJsZSB9IGZyb20gJ3J4anMvUngnO1xuXG5ASW5qZWN0YWJsZSgpXG5leHBvcnQgY2xhc3MgUGFzc3dvcmQge1xuXG4gICAgY29uc3RydWN0b3IocHJpdmF0ZSBodHRwOiBIdHRwKSB7fVxuXG4gICAgc2F2ZShuZXdQYXNzd29yZDogc3RyaW5nKTogT2JzZXJ2YWJsZTxhbnk+IHtcbiAgICAgICAgcmV0dXJuIHRoaXMuaHR0cC5wb3N0KCdhcGkvYWNjb3VudC9jaGFuZ2VfcGFzc3dvcmQnLCBuZXdQYXNzd29yZCk7XG4gICAgfVxufVxuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vfi90c2xpbnQtbG9hZGVyIS4vc3JjL21haW4vd2ViYXBwL2FwcC9hY2NvdW50L3Bhc3N3b3JkL3Bhc3N3b3JkLnNlcnZpY2UudHMiLCJtb2R1bGUuZXhwb3J0cyA9IFwiPGRpdj4gPGRpdiBjbGFzcz1cXFwicm93XFxcIj4gPGRpdiBjbGFzcz1cXFwiY29sLW1kLTggb2Zmc2V0LW1kLTJcXFwiPiA8aDEgamhpVHJhbnNsYXRlPVxcXCJyZWdpc3Rlci50aXRsZVxcXCI+UmVnaXN0cmF0aW9uPC9oMT4gPGRpdiBjbGFzcz1cXFwiYWxlcnQgYWxlcnQtc3VjY2Vzc1xcXCIgKm5nSWY9XFxcInN1Y2Nlc3NcXFwiIGpoaVRyYW5zbGF0ZT1cXFwicmVnaXN0ZXIubWVzc2FnZXMuc3VjY2Vzc1xcXCI+IDxzdHJvbmc+UmVnaXN0cmF0aW9uIHNhdmVkITwvc3Ryb25nPiBQbGVhc2UgY2hlY2sgeW91ciBlbWFpbCBmb3IgY29uZmlybWF0aW9uLiA8L2Rpdj4gPGRpdiBjbGFzcz1cXFwiYWxlcnQgYWxlcnQtZGFuZ2VyXFxcIiAqbmdJZj1cXFwiZXJyb3JcXFwiIGpoaVRyYW5zbGF0ZT1cXFwicmVnaXN0ZXIubWVzc2FnZXMuZXJyb3IuZmFpbFxcXCI+IDxzdHJvbmc+UmVnaXN0cmF0aW9uIGZhaWxlZCE8L3N0cm9uZz4gUGxlYXNlIHRyeSBhZ2FpbiBsYXRlci4gPC9kaXY+IDxkaXYgY2xhc3M9XFxcImFsZXJ0IGFsZXJ0LWRhbmdlclxcXCIgKm5nSWY9XFxcImVycm9yVXNlckV4aXN0c1xcXCIgamhpVHJhbnNsYXRlPVxcXCJyZWdpc3Rlci5tZXNzYWdlcy5lcnJvci51c2VyZXhpc3RzXFxcIj4gPHN0cm9uZz5Mb2dpbiBuYW1lIGFscmVhZHkgcmVnaXN0ZXJlZCE8L3N0cm9uZz4gUGxlYXNlIGNob29zZSBhbm90aGVyIG9uZS4gPC9kaXY+IDxkaXYgY2xhc3M9XFxcImFsZXJ0IGFsZXJ0LWRhbmdlclxcXCIgKm5nSWY9XFxcImVycm9yRW1haWxFeGlzdHNcXFwiIGpoaVRyYW5zbGF0ZT1cXFwicmVnaXN0ZXIubWVzc2FnZXMuZXJyb3IuZW1haWxleGlzdHNcXFwiPiA8c3Ryb25nPkVtYWlsIGlzIGFscmVhZHkgaW4gdXNlITwvc3Ryb25nPiBQbGVhc2UgY2hvb3NlIGFub3RoZXIgb25lLiA8L2Rpdj4gPGRpdiBjbGFzcz1cXFwiYWxlcnQgYWxlcnQtZGFuZ2VyXFxcIiAqbmdJZj1cXFwiZG9Ob3RNYXRjaFxcXCIgamhpVHJhbnNsYXRlPVxcXCJnbG9iYWwubWVzc2FnZXMuZXJyb3IuZG9udG1hdGNoXFxcIj4gVGhlIHBhc3N3b3JkIGFuZCBpdHMgY29uZmlybWF0aW9uIGRvIG5vdCBtYXRjaCEgPC9kaXY+IDwvZGl2PiA8ZGl2IGNsYXNzPVxcXCJjb2wtbWQtNCBvZmZzZXQtbWQtMlxcXCI+IDxmb3JtIG5hbWU9XFxcImZvcm1cXFwiIHJvbGU9XFxcImZvcm1cXFwiIChuZ1N1Ym1pdCk9XFxcInJlZ2lzdGVyKClcXFwiICNyZWdpc3RlckZvcm09XFxcIm5nRm9ybVxcXCIgKm5nSWY9XFxcIiFzdWNjZXNzXFxcIj4gPGRpdiBjbGFzcz1cXFwiZm9ybS1ncm91cFxcXCI+IDxsYWJlbCBjbGFzcz1cXFwiZm9ybS1jb250cm9sLWxhYmVsXFxcIiBmb3I9XFxcImxvZ2luXFxcIiBqaGlUcmFuc2xhdGU9XFxcImdsb2JhbC5mb3JtLnVzZXJuYW1lXFxcIj5Vc2VybmFtZTwvbGFiZWw+IDxpbnB1dCB0eXBlPVxcXCJ0ZXh0XFxcIiBjbGFzcz1cXFwiZm9ybS1jb250cm9sXFxcIiBbKG5nTW9kZWwpXT1cXFwicmVnaXN0ZXJBY2NvdW50LmxvZ2luXFxcIiBpZD1cXFwibG9naW5cXFwiIG5hbWU9XFxcImxvZ2luXFxcIiAjbG9naW49XFxcIm5nTW9kZWxcXFwiIHBsYWNlaG9sZGVyPVxcXCJ7eydnbG9iYWwuZm9ybS51c2VybmFtZS5wbGFjZWhvbGRlcicgfCB0cmFuc2xhdGV9fVxcXCIgcmVxdWlyZWQgbWlubGVuZ3RoPVxcXCIxXFxcIiBtYXhsZW5ndGg9XFxcIjUwXFxcIiBwYXR0ZXJuPVxcXCJeW18nLkBBLVphLXowLTktXSokXFxcIj4gPGRpdiAqbmdJZj1cXFwibG9naW4uZGlydHkgJiYgbG9naW4uaW52YWxpZFxcXCI+IDxzbWFsbCBjbGFzcz1cXFwiZm9ybS10ZXh0IHRleHQtZGFuZ2VyXFxcIiAqbmdJZj1cXFwibG9naW4uZXJyb3JzLnJlcXVpcmVkXFxcIiBqaGlUcmFuc2xhdGU9XFxcInJlZ2lzdGVyLm1lc3NhZ2VzLnZhbGlkYXRlLmxvZ2luLnJlcXVpcmVkXFxcIj4gWW91ciB1c2VybmFtZSBpcyByZXF1aXJlZC4gPC9zbWFsbD4gPHNtYWxsIGNsYXNzPVxcXCJmb3JtLXRleHQgdGV4dC1kYW5nZXJcXFwiICpuZ0lmPVxcXCJsb2dpbi5lcnJvcnMubWlubGVuZ3RoXFxcIiBqaGlUcmFuc2xhdGU9XFxcInJlZ2lzdGVyLm1lc3NhZ2VzLnZhbGlkYXRlLmxvZ2luLm1pbmxlbmd0aFxcXCI+IFlvdXIgdXNlcm5hbWUgaXMgcmVxdWlyZWQgdG8gYmUgYXQgbGVhc3QgMSBjaGFyYWN0ZXIuIDwvc21hbGw+IDxzbWFsbCBjbGFzcz1cXFwiZm9ybS10ZXh0IHRleHQtZGFuZ2VyXFxcIiAqbmdJZj1cXFwibG9naW4uZXJyb3JzLm1heGxlbmd0aFxcXCIgamhpVHJhbnNsYXRlPVxcXCJyZWdpc3Rlci5tZXNzYWdlcy52YWxpZGF0ZS5sb2dpbi5tYXhsZW5ndGhcXFwiPiBZb3VyIHVzZXJuYW1lIGNhbm5vdCBiZSBsb25nZXIgdGhhbiA1MCBjaGFyYWN0ZXJzLiA8L3NtYWxsPiA8c21hbGwgY2xhc3M9XFxcImZvcm0tdGV4dCB0ZXh0LWRhbmdlclxcXCIgKm5nSWY9XFxcImxvZ2luLmVycm9ycy5wYXR0ZXJuXFxcIiBqaGlUcmFuc2xhdGU9XFxcInJlZ2lzdGVyLm1lc3NhZ2VzLnZhbGlkYXRlLmxvZ2luLnBhdHRlcm5cXFwiPiBZb3VyIHVzZXJuYW1lIGNhbiBvbmx5IGNvbnRhaW4gbG93ZXItY2FzZSBsZXR0ZXJzIGFuZCBkaWdpdHMuIDwvc21hbGw+IDwvZGl2PiA8L2Rpdj4gPGRpdiBjbGFzcz1cXFwiZm9ybS1ncm91cFxcXCI+IDxsYWJlbCBjbGFzcz1cXFwiZm9ybS1jb250cm9sLWxhYmVsXFxcIiBmb3I9XFxcImVtYWlsXFxcIiBqaGlUcmFuc2xhdGU9XFxcImdsb2JhbC5mb3JtLmVtYWlsXFxcIj5FbWFpbDwvbGFiZWw+IDxpbnB1dCB0eXBlPVxcXCJlbWFpbFxcXCIgY2xhc3M9XFxcImZvcm0tY29udHJvbFxcXCIgaWQ9XFxcImVtYWlsXFxcIiBuYW1lPVxcXCJlbWFpbFxcXCIgI2VtYWlsPVxcXCJuZ01vZGVsXFxcIiBwbGFjZWhvbGRlcj1cXFwie3snZ2xvYmFsLmZvcm0uZW1haWwucGxhY2Vob2xkZXInIHwgdHJhbnNsYXRlfX1cXFwiIFsobmdNb2RlbCldPVxcXCJyZWdpc3RlckFjY291bnQuZW1haWxcXFwiIG1pbmxlbmd0aD1cXFwiNVxcXCIgbWF4bGVuZ3RoPVxcXCIxMDBcXFwiIHJlcXVpcmVkPiA8ZGl2ICpuZ0lmPVxcXCJlbWFpbC5kaXJ0eSAmJiBlbWFpbC5pbnZhbGlkXFxcIj4gPHNtYWxsIGNsYXNzPVxcXCJmb3JtLXRleHQgdGV4dC1kYW5nZXJcXFwiICpuZ0lmPVxcXCJlbWFpbC5lcnJvcnMucmVxdWlyZWRcXFwiIGpoaVRyYW5zbGF0ZT1cXFwiZ2xvYmFsLm1lc3NhZ2VzLnZhbGlkYXRlLmVtYWlsLnJlcXVpcmVkXFxcIj4gWW91ciBlbWFpbCBpcyByZXF1aXJlZC4gPC9zbWFsbD4gPHNtYWxsIGNsYXNzPVxcXCJmb3JtLXRleHQgdGV4dC1kYW5nZXJcXFwiICpuZ0lmPVxcXCJlbWFpbC5lcnJvcnMuaW52YWxpZFxcXCIgamhpVHJhbnNsYXRlPVxcXCJnbG9iYWwubWVzc2FnZXMudmFsaWRhdGUuZW1haWwuaW52YWxpZFxcXCI+IFlvdXIgZW1haWwgaXMgaW52YWxpZC4gPC9zbWFsbD4gPHNtYWxsIGNsYXNzPVxcXCJmb3JtLXRleHQgdGV4dC1kYW5nZXJcXFwiICpuZ0lmPVxcXCJlbWFpbC5lcnJvcnMubWlubGVuZ3RoXFxcIiBqaGlUcmFuc2xhdGU9XFxcImdsb2JhbC5tZXNzYWdlcy52YWxpZGF0ZS5lbWFpbC5taW5sZW5ndGhcXFwiPiBZb3VyIGVtYWlsIGlzIHJlcXVpcmVkIHRvIGJlIGF0IGxlYXN0IDUgY2hhcmFjdGVycy4gPC9zbWFsbD4gPHNtYWxsIGNsYXNzPVxcXCJmb3JtLXRleHQgdGV4dC1kYW5nZXJcXFwiICpuZ0lmPVxcXCJlbWFpbC5lcnJvcnMubWF4bGVuZ3RoXFxcIiBqaGlUcmFuc2xhdGU9XFxcImdsb2JhbC5tZXNzYWdlcy52YWxpZGF0ZS5lbWFpbC5tYXhsZW5ndGhcXFwiPiBZb3VyIGVtYWlsIGNhbm5vdCBiZSBsb25nZXIgdGhhbiAxMDAgY2hhcmFjdGVycy4gPC9zbWFsbD4gPC9kaXY+IDwvZGl2PiA8ZGl2IGNsYXNzPVxcXCJmb3JtLWdyb3VwXFxcIj4gPGxhYmVsIGNsYXNzPVxcXCJmb3JtLWNvbnRyb2wtbGFiZWxcXFwiIGZvcj1cXFwicGFzc3dvcmRcXFwiIGpoaVRyYW5zbGF0ZT1cXFwiZ2xvYmFsLmZvcm0ubmV3cGFzc3dvcmRcXFwiPk5ldyBwYXNzd29yZDwvbGFiZWw+IDxpbnB1dCB0eXBlPVxcXCJwYXNzd29yZFxcXCIgY2xhc3M9XFxcImZvcm0tY29udHJvbFxcXCIgaWQ9XFxcInBhc3N3b3JkXFxcIiBuYW1lPVxcXCJwYXNzd29yZFxcXCIgI3Bhc3N3b3JkPVxcXCJuZ01vZGVsXFxcIiBwbGFjZWhvbGRlcj1cXFwie3snZ2xvYmFsLmZvcm0ubmV3cGFzc3dvcmQucGxhY2Vob2xkZXInIHwgdHJhbnNsYXRlfX1cXFwiIFsobmdNb2RlbCldPVxcXCJyZWdpc3RlckFjY291bnQucGFzc3dvcmRcXFwiIG1pbmxlbmd0aD1cXFwiNFxcXCIgbWF4bGVuZ3RoPVxcXCI1MFxcXCIgcmVxdWlyZWQ+IDxkaXYgKm5nSWY9XFxcInBhc3N3b3JkLmRpcnR5ICYmIHBhc3N3b3JkLmludmFsaWRcXFwiPiA8c21hbGwgY2xhc3M9XFxcImZvcm0tdGV4dCB0ZXh0LWRhbmdlclxcXCIgKm5nSWY9XFxcInBhc3N3b3JkLmVycm9ycy5yZXF1aXJlZFxcXCIgamhpVHJhbnNsYXRlPVxcXCJnbG9iYWwubWVzc2FnZXMudmFsaWRhdGUubmV3cGFzc3dvcmQucmVxdWlyZWRcXFwiPiBZb3VyIHBhc3N3b3JkIGlzIHJlcXVpcmVkLiA8L3NtYWxsPiA8c21hbGwgY2xhc3M9XFxcImZvcm0tdGV4dCB0ZXh0LWRhbmdlclxcXCIgKm5nSWY9XFxcInBhc3N3b3JkLmVycm9ycy5taW5sZW5ndGhcXFwiIGpoaVRyYW5zbGF0ZT1cXFwiZ2xvYmFsLm1lc3NhZ2VzLnZhbGlkYXRlLm5ld3Bhc3N3b3JkLm1pbmxlbmd0aFxcXCI+IFlvdXIgcGFzc3dvcmQgaXMgcmVxdWlyZWQgdG8gYmUgYXQgbGVhc3QgNCBjaGFyYWN0ZXJzLiA8L3NtYWxsPiA8c21hbGwgY2xhc3M9XFxcImZvcm0tdGV4dCB0ZXh0LWRhbmdlclxcXCIgKm5nSWY9XFxcInBhc3N3b3JkLmVycm9ycy5tYXhsZW5ndGhcXFwiIGpoaVRyYW5zbGF0ZT1cXFwiZ2xvYmFsLm1lc3NhZ2VzLnZhbGlkYXRlLm5ld3Bhc3N3b3JkLm1heGxlbmd0aFxcXCI+IFlvdXIgcGFzc3dvcmQgY2Fubm90IGJlIGxvbmdlciB0aGFuIDUwIGNoYXJhY3RlcnMuIDwvc21hbGw+IDwvZGl2PiA8amhpLXBhc3N3b3JkLXN0cmVuZ3RoLWJhciBbcGFzc3dvcmRUb0NoZWNrXT1cXFwicmVnaXN0ZXJBY2NvdW50LnBhc3N3b3JkXFxcIj48L2poaS1wYXNzd29yZC1zdHJlbmd0aC1iYXI+IDwvZGl2PiA8ZGl2IGNsYXNzPVxcXCJmb3JtLWdyb3VwXFxcIj4gPGxhYmVsIGNsYXNzPVxcXCJmb3JtLWNvbnRyb2wtbGFiZWxcXFwiIGZvcj1cXFwiY29uZmlybVBhc3N3b3JkXFxcIiBqaGlUcmFuc2xhdGU9XFxcImdsb2JhbC5mb3JtLmNvbmZpcm1wYXNzd29yZFxcXCI+TmV3IHBhc3N3b3JkIGNvbmZpcm1hdGlvbjwvbGFiZWw+IDxpbnB1dCB0eXBlPVxcXCJwYXNzd29yZFxcXCIgY2xhc3M9XFxcImZvcm0tY29udHJvbFxcXCIgaWQ9XFxcImNvbmZpcm1QYXNzd29yZFxcXCIgbmFtZT1cXFwiY29uZmlybVBhc3N3b3JkXFxcIiAjY29uZmlybVBhc3N3b3JkSW5wdXQ9XFxcIm5nTW9kZWxcXFwiIHBsYWNlaG9sZGVyPVxcXCJ7eydnbG9iYWwuZm9ybS5jb25maXJtcGFzc3dvcmQucGxhY2Vob2xkZXInIHwgdHJhbnNsYXRlfX1cXFwiIFsobmdNb2RlbCldPVxcXCJjb25maXJtUGFzc3dvcmRcXFwiIG1pbmxlbmd0aD1cXFwiNFxcXCIgbWF4bGVuZ3RoPVxcXCI1MFxcXCIgcmVxdWlyZWQ+IDxkaXYgKm5nSWY9XFxcImNvbmZpcm1QYXNzd29yZElucHV0LmRpcnR5ICYmIGNvbmZpcm1QYXNzd29yZElucHV0LmludmFsaWRcXFwiPiA8c21hbGwgY2xhc3M9XFxcImZvcm0tdGV4dCB0ZXh0LWRhbmdlclxcXCIgKm5nSWY9XFxcImNvbmZpcm1QYXNzd29yZElucHV0LmVycm9ycy5yZXF1aXJlZFxcXCIgamhpVHJhbnNsYXRlPVxcXCJnbG9iYWwubWVzc2FnZXMudmFsaWRhdGUuY29uZmlybXBhc3N3b3JkLnJlcXVpcmVkXFxcIj4gWW91ciBjb25maXJtYXRpb24gcGFzc3dvcmQgaXMgcmVxdWlyZWQuIDwvc21hbGw+IDxzbWFsbCBjbGFzcz1cXFwiZm9ybS10ZXh0IHRleHQtZGFuZ2VyXFxcIiAqbmdJZj1cXFwiY29uZmlybVBhc3N3b3JkSW5wdXQuZXJyb3JzLm1pbmxlbmd0aFxcXCIgamhpVHJhbnNsYXRlPVxcXCJnbG9iYWwubWVzc2FnZXMudmFsaWRhdGUuY29uZmlybXBhc3N3b3JkLm1pbmxlbmd0aFxcXCI+IFlvdXIgY29uZmlybWF0aW9uIHBhc3N3b3JkIGlzIHJlcXVpcmVkIHRvIGJlIGF0IGxlYXN0IDQgY2hhcmFjdGVycy4gPC9zbWFsbD4gPHNtYWxsIGNsYXNzPVxcXCJmb3JtLXRleHQgdGV4dC1kYW5nZXJcXFwiICpuZ0lmPVxcXCJjb25maXJtUGFzc3dvcmRJbnB1dC5lcnJvcnMubWF4bGVuZ3RoXFxcIiBqaGlUcmFuc2xhdGU9XFxcImdsb2JhbC5tZXNzYWdlcy52YWxpZGF0ZS5jb25maXJtcGFzc3dvcmQubWF4bGVuZ3RoXFxcIj4gWW91ciBjb25maXJtYXRpb24gcGFzc3dvcmQgY2Fubm90IGJlIGxvbmdlciB0aGFuIDUwIGNoYXJhY3RlcnMuIDwvc21hbGw+IDwvZGl2PiA8L2Rpdj4gPGJ1dHRvbiB0eXBlPVxcXCJzdWJtaXRcXFwiIFtkaXNhYmxlZF09XFxcInJlZ2lzdGVyRm9ybS5mb3JtLmludmFsaWRcXFwiIGNsYXNzPVxcXCJidG4gYnRuLXByaW1hcnlcXFwiIGpoaVRyYW5zbGF0ZT1cXFwicmVnaXN0ZXIuZm9ybS5idXR0b25cXFwiPlJlZ2lzdGVyPC9idXR0b24+IDwvZm9ybT4gPHA+PC9wPiA8ZGl2IGNsYXNzPVxcXCJhbGVydCBhbGVydC13YXJuaW5nXFxcIj4gPHNwYW4gamhpVHJhbnNsYXRlPVxcXCJnbG9iYWwubWVzc2FnZXMuaW5mby5hdXRoZW50aWNhdGVkLnByZWZpeFxcXCI+SWYgeW91IHdhbnQgdG8gPC9zcGFuPiA8YSBjbGFzcz1cXFwiYWxlcnQtbGlua1xcXCIgKGNsaWNrKT1cXFwib3BlbkxvZ2luKClcXFwiIGpoaVRyYW5zbGF0ZT1cXFwiZ2xvYmFsLm1lc3NhZ2VzLmluZm8uYXV0aGVudGljYXRlZC5saW5rXFxcIj5zaWduIGluPC9hPjxzcGFuIGpoaVRyYW5zbGF0ZT1cXFwiZ2xvYmFsLm1lc3NhZ2VzLmluZm8uYXV0aGVudGljYXRlZC5zdWZmaXhcXFwiPiwgeW91IGNhbiB0cnkgdGhlIGRlZmF1bHQgYWNjb3VudHM6PGJyLz4tIEFkbWluaXN0cmF0b3IgKGxvZ2luPVxcXCJhZG1pblxcXCIgYW5kIHBhc3N3b3JkPVxcXCJhZG1pblxcXCIpIDxici8+LSBVc2VyIChsb2dpbj1cXFwidXNlclxcXCIgYW5kIHBhc3N3b3JkPVxcXCJ1c2VyXFxcIikuPC9zcGFuPiA8L2Rpdj4gPC9kaXY+IDxkaXYgY2xhc3M9XFxcImNvbC1tZC00XFxcIj4gPGJyLz4gPGpoaS1zb2NpYWwgcHJvdmlkZXI9XFxcImdvb2dsZVxcXCI+PC9qaGktc29jaWFsPiA8amhpLXNvY2lhbCBwcm92aWRlcj1cXFwiZmFjZWJvb2tcXFwiPjwvamhpLXNvY2lhbD4gPGpoaS1zb2NpYWwgcHJvdmlkZXI9XFxcInR3aXR0ZXJcXFwiPjwvamhpLXNvY2lhbD4gPC9kaXY+IDwvZGl2PiA8L2Rpdj4gXCI7XG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9zcmMvbWFpbi93ZWJhcHAvYXBwL2FjY291bnQvcmVnaXN0ZXIvcmVnaXN0ZXIuY29tcG9uZW50Lmh0bWxcbi8vIG1vZHVsZSBpZCA9IC4vc3JjL21haW4vd2ViYXBwL2FwcC9hY2NvdW50L3JlZ2lzdGVyL3JlZ2lzdGVyLmNvbXBvbmVudC5odG1sXG4vLyBtb2R1bGUgY2h1bmtzID0gMCIsImltcG9ydCB7IENvbXBvbmVudCwgT25Jbml0LCBBZnRlclZpZXdJbml0LCBSZW5kZXJlciwgRWxlbWVudFJlZiB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgTmdiTW9kYWxSZWYgfSBmcm9tICdAbmctYm9vdHN0cmFwL25nLWJvb3RzdHJhcCc7XG5pbXBvcnQgeyBKaGlMYW5ndWFnZVNlcnZpY2UgfSBmcm9tICduZy1qaGlwc3Rlcic7XG5cbmltcG9ydCB7IFJlZ2lzdGVyIH0gZnJvbSAnLi9yZWdpc3Rlci5zZXJ2aWNlJztcbmltcG9ydCB7IExvZ2luTW9kYWxTZXJ2aWNlIH0gZnJvbSAnLi4vLi4vc2hhcmVkJztcblxuQENvbXBvbmVudCh7XG4gICAgc2VsZWN0b3I6ICdqaGktcmVnaXN0ZXInLFxuICAgIHRlbXBsYXRlVXJsOiAnLi9yZWdpc3Rlci5jb21wb25lbnQuaHRtbCdcbn0pXG5leHBvcnQgY2xhc3MgUmVnaXN0ZXJDb21wb25lbnQgaW1wbGVtZW50cyBPbkluaXQsIEFmdGVyVmlld0luaXQge1xuXG4gICAgY29uZmlybVBhc3N3b3JkOiBzdHJpbmc7XG4gICAgZG9Ob3RNYXRjaDogc3RyaW5nO1xuICAgIGVycm9yOiBzdHJpbmc7XG4gICAgZXJyb3JFbWFpbEV4aXN0czogc3RyaW5nO1xuICAgIGVycm9yVXNlckV4aXN0czogc3RyaW5nO1xuICAgIHJlZ2lzdGVyQWNjb3VudDogYW55O1xuICAgIHN1Y2Nlc3M6IGJvb2xlYW47XG4gICAgbW9kYWxSZWY6IE5nYk1vZGFsUmVmO1xuXG4gICAgY29uc3RydWN0b3IoXG4gICAgICAgIHByaXZhdGUgbGFuZ3VhZ2VTZXJ2aWNlOiBKaGlMYW5ndWFnZVNlcnZpY2UsXG4gICAgICAgIHByaXZhdGUgbG9naW5Nb2RhbFNlcnZpY2U6IExvZ2luTW9kYWxTZXJ2aWNlLFxuICAgICAgICBwcml2YXRlIHJlZ2lzdGVyU2VydmljZTogUmVnaXN0ZXIsXG4gICAgICAgIHByaXZhdGUgZWxlbWVudFJlZjogRWxlbWVudFJlZixcbiAgICAgICAgcHJpdmF0ZSByZW5kZXJlcjogUmVuZGVyZXJcbiAgICApIHtcbiAgICB9XG5cbiAgICBuZ09uSW5pdCgpIHtcbiAgICAgICAgdGhpcy5zdWNjZXNzID0gZmFsc2U7XG4gICAgICAgIHRoaXMucmVnaXN0ZXJBY2NvdW50ID0ge307XG4gICAgfVxuXG4gICAgbmdBZnRlclZpZXdJbml0KCkge1xuICAgICAgICB0aGlzLnJlbmRlcmVyLmludm9rZUVsZW1lbnRNZXRob2QodGhpcy5lbGVtZW50UmVmLm5hdGl2ZUVsZW1lbnQucXVlcnlTZWxlY3RvcignI2xvZ2luJyksICdmb2N1cycsIFtdKTtcbiAgICB9XG5cbiAgICByZWdpc3RlcigpIHtcbiAgICAgICAgaWYgKHRoaXMucmVnaXN0ZXJBY2NvdW50LnBhc3N3b3JkICE9PSB0aGlzLmNvbmZpcm1QYXNzd29yZCkge1xuICAgICAgICAgICAgdGhpcy5kb05vdE1hdGNoID0gJ0VSUk9SJztcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIHRoaXMuZG9Ob3RNYXRjaCA9IG51bGw7XG4gICAgICAgICAgICB0aGlzLmVycm9yID0gbnVsbDtcbiAgICAgICAgICAgIHRoaXMuZXJyb3JVc2VyRXhpc3RzID0gbnVsbDtcbiAgICAgICAgICAgIHRoaXMuZXJyb3JFbWFpbEV4aXN0cyA9IG51bGw7XG4gICAgICAgICAgICB0aGlzLmxhbmd1YWdlU2VydmljZS5nZXRDdXJyZW50KCkudGhlbigoa2V5KSA9PiB7XG4gICAgICAgICAgICAgICAgdGhpcy5yZWdpc3RlckFjY291bnQubGFuZ0tleSA9IGtleTtcbiAgICAgICAgICAgICAgICB0aGlzLnJlZ2lzdGVyU2VydmljZS5zYXZlKHRoaXMucmVnaXN0ZXJBY2NvdW50KS5zdWJzY3JpYmUoKCkgPT4ge1xuICAgICAgICAgICAgICAgICAgICB0aGlzLnN1Y2Nlc3MgPSB0cnVlO1xuICAgICAgICAgICAgICAgIH0sIChyZXNwb25zZSkgPT4gdGhpcy5wcm9jZXNzRXJyb3IocmVzcG9uc2UpKTtcbiAgICAgICAgICAgIH0pO1xuICAgICAgICB9XG4gICAgfVxuXG4gICAgb3BlbkxvZ2luKCkge1xuICAgICAgICB0aGlzLm1vZGFsUmVmID0gdGhpcy5sb2dpbk1vZGFsU2VydmljZS5vcGVuKCk7XG4gICAgfVxuXG4gICAgcHJpdmF0ZSBwcm9jZXNzRXJyb3IocmVzcG9uc2UpIHtcbiAgICAgICAgdGhpcy5zdWNjZXNzID0gbnVsbDtcbiAgICAgICAgaWYgKHJlc3BvbnNlLnN0YXR1cyA9PT0gNDAwICYmIHJlc3BvbnNlLl9ib2R5ID09PSAnbG9naW4gYWxyZWFkeSBpbiB1c2UnKSB7XG4gICAgICAgICAgICB0aGlzLmVycm9yVXNlckV4aXN0cyA9ICdFUlJPUic7XG4gICAgICAgIH0gZWxzZSBpZiAocmVzcG9uc2Uuc3RhdHVzID09PSA0MDAgJiYgcmVzcG9uc2UuX2JvZHkgPT09ICdlbWFpbCBhZGRyZXNzIGFscmVhZHkgaW4gdXNlJykge1xuICAgICAgICAgICAgdGhpcy5lcnJvckVtYWlsRXhpc3RzID0gJ0VSUk9SJztcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIHRoaXMuZXJyb3IgPSAnRVJST1InO1xuICAgICAgICB9XG4gICAgfVxufVxuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vfi90c2xpbnQtbG9hZGVyIS4vc3JjL21haW4vd2ViYXBwL2FwcC9hY2NvdW50L3JlZ2lzdGVyL3JlZ2lzdGVyLmNvbXBvbmVudC50cyIsImltcG9ydCB7IFJvdXRlIH0gZnJvbSAnQGFuZ3VsYXIvcm91dGVyJztcblxuaW1wb3J0IHsgVXNlclJvdXRlQWNjZXNzU2VydmljZSB9IGZyb20gJy4uLy4uL3NoYXJlZCc7XG5pbXBvcnQgeyBSZWdpc3RlckNvbXBvbmVudCB9IGZyb20gJy4vcmVnaXN0ZXIuY29tcG9uZW50JztcblxuZXhwb3J0IGNvbnN0IHJlZ2lzdGVyUm91dGU6IFJvdXRlID0ge1xuICAgIHBhdGg6ICdyZWdpc3RlcicsXG4gICAgY29tcG9uZW50OiBSZWdpc3RlckNvbXBvbmVudCxcbiAgICBkYXRhOiB7XG4gICAgICAgIGF1dGhvcml0aWVzOiBbXSxcbiAgICAgICAgcGFnZVRpdGxlOiAncmVnaXN0ZXIudGl0bGUnXG4gICAgfSxcbiAgICBjYW5BY3RpdmF0ZTogW1VzZXJSb3V0ZUFjY2Vzc1NlcnZpY2VdXG59O1xuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vfi90c2xpbnQtbG9hZGVyIS4vc3JjL21haW4vd2ViYXBwL2FwcC9hY2NvdW50L3JlZ2lzdGVyL3JlZ2lzdGVyLnJvdXRlLnRzIiwiaW1wb3J0IHsgSW5qZWN0YWJsZSB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgSHR0cCB9IGZyb20gJ0Bhbmd1bGFyL2h0dHAnO1xuaW1wb3J0IHsgT2JzZXJ2YWJsZSB9IGZyb20gJ3J4anMvUngnO1xuXG5ASW5qZWN0YWJsZSgpXG5leHBvcnQgY2xhc3MgUmVnaXN0ZXIge1xuXG4gICAgY29uc3RydWN0b3IocHJpdmF0ZSBodHRwOiBIdHRwKSB7fVxuXG4gICAgc2F2ZShhY2NvdW50OiBhbnkpOiBPYnNlcnZhYmxlPGFueT4ge1xuICAgICAgICByZXR1cm4gdGhpcy5odHRwLnBvc3QoJ2FwaS9yZWdpc3RlcicsIGFjY291bnQpO1xuICAgIH1cbn1cblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL34vdHNsaW50LWxvYWRlciEuL3NyYy9tYWluL3dlYmFwcC9hcHAvYWNjb3VudC9yZWdpc3Rlci9yZWdpc3Rlci5zZXJ2aWNlLnRzIiwibW9kdWxlLmV4cG9ydHMgPSBcIjxkaXY+IDxkaXYgY2xhc3M9XFxcInJvd1xcXCI+IDxkaXYgY2xhc3M9XFxcImNvbC1tZC04IG9mZnNldC1tZC0yXFxcIj4gPGgyIGpoaVRyYW5zbGF0ZT1cXFwic2V0dGluZ3MudGl0bGVcXFwiIHRyYW5zbGF0ZVZhbHVlcz1cXFwie3VzZXJuYW1lOiAne3tzZXR0aW5nc0FjY291bnQubG9naW59fSd9XFxcIiAqbmdJZj1cXFwic2V0dGluZ3NBY2NvdW50XFxcIj5Vc2VyIHNldHRpbmdzIGZvciBbPGI+e3tzZXR0aW5nc0FjY291bnQubG9naW59fTwvYj5dPC9oMj4gPGRpdiBjbGFzcz1cXFwiYWxlcnQgYWxlcnQtc3VjY2Vzc1xcXCIgKm5nSWY9XFxcInN1Y2Nlc3NcXFwiIGpoaVRyYW5zbGF0ZT1cXFwic2V0dGluZ3MubWVzc2FnZXMuc3VjY2Vzc1xcXCI+IDxzdHJvbmc+U2V0dGluZ3Mgc2F2ZWQhPC9zdHJvbmc+IDwvZGl2PiA8amhpLWFsZXJ0LWVycm9yPjwvamhpLWFsZXJ0LWVycm9yPiA8Zm9ybSBuYW1lPVxcXCJmb3JtXFxcIiByb2xlPVxcXCJmb3JtXFxcIiAobmdTdWJtaXQpPVxcXCJzYXZlKClcXFwiICNzZXR0aW5nc0Zvcm09XFxcIm5nRm9ybVxcXCIgKm5nSWY9XFxcInNldHRpbmdzQWNjb3VudFxcXCIgbm92YWxpZGF0ZT4gPGRpdiBjbGFzcz1cXFwiZm9ybS1ncm91cFxcXCI+IDxsYWJlbCBjbGFzcz1cXFwiZm9ybS1jb250cm9sLWxhYmVsXFxcIiBmb3I9XFxcImZpcnN0TmFtZVxcXCIgamhpVHJhbnNsYXRlPVxcXCJzZXR0aW5ncy5mb3JtLmZpcnN0bmFtZVxcXCI+Rmlyc3QgTmFtZTwvbGFiZWw+IDxpbnB1dCB0eXBlPVxcXCJ0ZXh0XFxcIiBjbGFzcz1cXFwiZm9ybS1jb250cm9sXFxcIiBpZD1cXFwiZmlyc3ROYW1lXFxcIiBuYW1lPVxcXCJmaXJzdE5hbWVcXFwiIHBsYWNlaG9sZGVyPVxcXCJ7eydzZXR0aW5ncy5mb3JtLmZpcnN0bmFtZS5wbGFjZWhvbGRlcicgfCB0cmFuc2xhdGV9fVxcXCIgWyhuZ01vZGVsKV09XFxcInNldHRpbmdzQWNjb3VudC5maXJzdE5hbWVcXFwiIG1pbmxlbmd0aD1cXFwiMVxcXCIgbWF4bGVuZ3RoPVxcXCI1MFxcXCIgI2ZpcnN0TmFtZUlucHV0PVxcXCJuZ01vZGVsXFxcIiByZXF1aXJlZD4gPGRpdiAqbmdJZj1cXFwiZmlyc3ROYW1lSW5wdXQuZGlydHkgJiYgZmlyc3ROYW1lSW5wdXQuaW52YWxpZFxcXCI+IDxzbWFsbCBjbGFzcz1cXFwiZm9ybS10ZXh0IHRleHQtZGFuZ2VyXFxcIiAqbmdJZj1cXFwiZmlyc3ROYW1lSW5wdXQuZXJyb3JzLnJlcXVpcmVkXFxcIiBqaGlUcmFuc2xhdGU9XFxcInNldHRpbmdzLm1lc3NhZ2VzLnZhbGlkYXRlLmZpcnN0bmFtZS5yZXF1aXJlZFxcXCI+IFlvdXIgZmlyc3QgbmFtZSBpcyByZXF1aXJlZC4gPC9zbWFsbD4gPHNtYWxsIGNsYXNzPVxcXCJmb3JtLXRleHQgdGV4dC1kYW5nZXJcXFwiICpuZ0lmPVxcXCJmaXJzdE5hbWVJbnB1dC5lcnJvcnMubWlubGVuZ3RoXFxcIiBqaGlUcmFuc2xhdGU9XFxcInNldHRpbmdzLm1lc3NhZ2VzLnZhbGlkYXRlLmZpcnN0bmFtZS5taW5sZW5ndGhcXFwiPiBZb3VyIGZpcnN0IG5hbWUgaXMgcmVxdWlyZWQgdG8gYmUgYXQgbGVhc3QgMSBjaGFyYWN0ZXIuIDwvc21hbGw+IDxzbWFsbCBjbGFzcz1cXFwiZm9ybS10ZXh0IHRleHQtZGFuZ2VyXFxcIiAqbmdJZj1cXFwiZmlyc3ROYW1lSW5wdXQuZXJyb3JzLm1heGxlbmd0aFxcXCIgamhpVHJhbnNsYXRlPVxcXCJzZXR0aW5ncy5tZXNzYWdlcy52YWxpZGF0ZS5maXJzdG5hbWUubWF4bGVuZ3RoXFxcIj4gWW91ciBmaXJzdCBuYW1lIGNhbm5vdCBiZSBsb25nZXIgdGhhbiA1MCBjaGFyYWN0ZXJzLiA8L3NtYWxsPiA8L2Rpdj4gPC9kaXY+IDxkaXYgY2xhc3M9XFxcImZvcm0tZ3JvdXBcXFwiPiA8bGFiZWwgY2xhc3M9XFxcImZvcm0tY29udHJvbC1sYWJlbFxcXCIgZm9yPVxcXCJsYXN0TmFtZVxcXCIgamhpVHJhbnNsYXRlPVxcXCJzZXR0aW5ncy5mb3JtLmxhc3RuYW1lXFxcIj5MYXN0IE5hbWU8L2xhYmVsPiA8aW5wdXQgdHlwZT1cXFwidGV4dFxcXCIgY2xhc3M9XFxcImZvcm0tY29udHJvbFxcXCIgaWQ9XFxcImxhc3ROYW1lXFxcIiBuYW1lPVxcXCJsYXN0TmFtZVxcXCIgcGxhY2Vob2xkZXI9XFxcInt7J3NldHRpbmdzLmZvcm0ubGFzdG5hbWUucGxhY2Vob2xkZXInIHwgdHJhbnNsYXRlfX1cXFwiIFsobmdNb2RlbCldPVxcXCJzZXR0aW5nc0FjY291bnQubGFzdE5hbWVcXFwiIG1pbmxlbmd0aD1cXFwiMVxcXCIgbWF4bGVuZ3RoPVxcXCI1MFxcXCIgI2xhc3ROYW1lSW5wdXQ9XFxcIm5nTW9kZWxcXFwiIHJlcXVpcmVkPiA8ZGl2ICpuZ0lmPVxcXCJsYXN0TmFtZUlucHV0LmRpcnR5ICYmIGxhc3ROYW1lSW5wdXQuaW52YWxpZFxcXCI+IDxzbWFsbCBjbGFzcz1cXFwiZm9ybS10ZXh0IHRleHQtZGFuZ2VyXFxcIiAqbmdJZj1cXFwibGFzdE5hbWVJbnB1dC5lcnJvcnMucmVxdWlyZWRcXFwiIGpoaVRyYW5zbGF0ZT1cXFwic2V0dGluZ3MubWVzc2FnZXMudmFsaWRhdGUubGFzdG5hbWUucmVxdWlyZWRcXFwiPiBZb3VyIGxhc3QgbmFtZSBpcyByZXF1aXJlZC4gPC9zbWFsbD4gPHNtYWxsIGNsYXNzPVxcXCJmb3JtLXRleHQgdGV4dC1kYW5nZXJcXFwiICpuZ0lmPVxcXCJsYXN0TmFtZUlucHV0LmVycm9ycy5taW5sZW5ndGhcXFwiIGpoaVRyYW5zbGF0ZT1cXFwic2V0dGluZ3MubWVzc2FnZXMudmFsaWRhdGUubGFzdG5hbWUubWlubGVuZ3RoXFxcIj4gWW91ciBsYXN0IG5hbWUgaXMgcmVxdWlyZWQgdG8gYmUgYXQgbGVhc3QgMSBjaGFyYWN0ZXIuIDwvc21hbGw+IDxzbWFsbCBjbGFzcz1cXFwiZm9ybS10ZXh0IHRleHQtZGFuZ2VyXFxcIiAqbmdJZj1cXFwibGFzdE5hbWVJbnB1dC5lcnJvcnMubWF4bGVuZ3RoXFxcIiBqaGlUcmFuc2xhdGU9XFxcInNldHRpbmdzLm1lc3NhZ2VzLnZhbGlkYXRlLmxhc3RuYW1lLm1heGxlbmd0aFxcXCI+IFlvdXIgbGFzdCBuYW1lIGNhbm5vdCBiZSBsb25nZXIgdGhhbiA1MCBjaGFyYWN0ZXJzLiA8L3NtYWxsPiA8L2Rpdj4gPC9kaXY+IDxkaXYgY2xhc3M9XFxcImZvcm0tZ3JvdXBcXFwiPiA8bGFiZWwgY2xhc3M9XFxcImZvcm0tY29udHJvbC1sYWJlbFxcXCIgZm9yPVxcXCJlbWFpbFxcXCIgamhpVHJhbnNsYXRlPVxcXCJnbG9iYWwuZm9ybS5lbWFpbFxcXCI+RW1haWw8L2xhYmVsPiA8aW5wdXQgdHlwZT1cXFwiZW1haWxcXFwiIGNsYXNzPVxcXCJmb3JtLWNvbnRyb2xcXFwiIGlkPVxcXCJlbWFpbFxcXCIgbmFtZT1cXFwiZW1haWxcXFwiIHBsYWNlaG9sZGVyPVxcXCJ7eydnbG9iYWwuZm9ybS5lbWFpbC5wbGFjZWhvbGRlcicgfCB0cmFuc2xhdGV9fVxcXCIgWyhuZ01vZGVsKV09XFxcInNldHRpbmdzQWNjb3VudC5lbWFpbFxcXCIgbWlubGVuZ3RoPVxcXCI1XFxcIiBtYXhsZW5ndGg9XFxcIjEwMFxcXCIgI2VtYWlsSW5wdXQ9XFxcIm5nTW9kZWxcXFwiIHJlcXVpcmVkPiA8ZGl2ICpuZ0lmPVxcXCJlbWFpbElucHV0LmRpcnR5ICYmIGVtYWlsSW5wdXQuaW52YWxpZFxcXCI+IDxzbWFsbCBjbGFzcz1cXFwiZm9ybS10ZXh0IHRleHQtZGFuZ2VyXFxcIiAqbmdJZj1cXFwiZW1haWxJbnB1dC5lcnJvcnMucmVxdWlyZWRcXFwiIGpoaVRyYW5zbGF0ZT1cXFwiZ2xvYmFsLm1lc3NhZ2VzLnZhbGlkYXRlLmVtYWlsLnJlcXVpcmVkXFxcIj4gWW91ciBlbWFpbCBpcyByZXF1aXJlZC4gPC9zbWFsbD4gPHNtYWxsIGNsYXNzPVxcXCJmb3JtLXRleHQgdGV4dC1kYW5nZXJcXFwiICpuZ0lmPVxcXCJlbWFpbElucHV0LmVycm9ycy5lbWFpbFxcXCIgamhpVHJhbnNsYXRlPVxcXCJnbG9iYWwubWVzc2FnZXMudmFsaWRhdGUuZW1haWwuaW52YWxpZFxcXCI+IFlvdXIgZW1haWwgaXMgaW52YWxpZC4gPC9zbWFsbD4gPHNtYWxsIGNsYXNzPVxcXCJmb3JtLXRleHQgdGV4dC1kYW5nZXJcXFwiICpuZ0lmPVxcXCJlbWFpbElucHV0LmVycm9ycy5taW5sZW5ndGhcXFwiIGpoaVRyYW5zbGF0ZT1cXFwiZ2xvYmFsLm1lc3NhZ2VzLnZhbGlkYXRlLmVtYWlsLm1pbmxlbmd0aFxcXCI+IFlvdXIgZW1haWwgaXMgcmVxdWlyZWQgdG8gYmUgYXQgbGVhc3QgNSBjaGFyYWN0ZXJzLiA8L3NtYWxsPiA8c21hbGwgY2xhc3M9XFxcImZvcm0tdGV4dCB0ZXh0LWRhbmdlclxcXCIgKm5nSWY9XFxcImVtYWlsSW5wdXQuZXJyb3JzLm1heGxlbmd0aFxcXCIgamhpVHJhbnNsYXRlPVxcXCJnbG9iYWwubWVzc2FnZXMudmFsaWRhdGUuZW1haWwubWF4bGVuZ3RoXFxcIj4gWW91ciBlbWFpbCBjYW5ub3QgYmUgbG9uZ2VyIHRoYW4gMTAwIGNoYXJhY3RlcnMuIDwvc21hbGw+IDwvZGl2PiA8L2Rpdj4gPGRpdiBjbGFzcz1cXFwiZm9ybS1ncm91cFxcXCIgKm5nSWY9XFxcImxhbmd1YWdlcyAmJiBsYW5ndWFnZXMubGVuZ3RoID4gMFxcXCI+IDxsYWJlbCBmb3I9XFxcImxhbmdLZXlcXFwiIGpoaVRyYW5zbGF0ZT1cXFwic2V0dGluZ3MuZm9ybS5sYW5ndWFnZVxcXCI+TGFuZ3VhZ2U8L2xhYmVsPiA8c2VsZWN0IGNsYXNzPVxcXCJmb3JtLWNvbnRyb2xcXFwiIGlkPVxcXCJsYW5nS2V5XFxcIiBuYW1lPVxcXCJsYW5nS2V5XFxcIiBbKG5nTW9kZWwpXT1cXFwic2V0dGluZ3NBY2NvdW50LmxhbmdLZXlcXFwiPiA8b3B0aW9uICpuZ0Zvcj1cXFwibGV0IGxhbmd1YWdlIG9mIGxhbmd1YWdlc1xcXCIgW3ZhbHVlXT1cXFwibGFuZ3VhZ2VcXFwiPnt7bGFuZ3VhZ2UgfCBmaW5kTGFuZ3VhZ2VGcm9tS2V5fX08L29wdGlvbj4gPC9zZWxlY3Q+IDwvZGl2PiA8YnV0dG9uIHR5cGU9XFxcInN1Ym1pdFxcXCIgW2Rpc2FibGVkXT1cXFwic2V0dGluZ3NGb3JtLmZvcm0uaW52YWxpZFxcXCIgY2xhc3M9XFxcImJ0biBidG4tcHJpbWFyeVxcXCIgamhpVHJhbnNsYXRlPVxcXCJzZXR0aW5ncy5mb3JtLmJ1dHRvblxcXCI+U2F2ZTwvYnV0dG9uPiA8L2Zvcm0+IDwvZGl2PiA8L2Rpdj4gPC9kaXY+IFwiO1xuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vc3JjL21haW4vd2ViYXBwL2FwcC9hY2NvdW50L3NldHRpbmdzL3NldHRpbmdzLmNvbXBvbmVudC5odG1sXG4vLyBtb2R1bGUgaWQgPSAuL3NyYy9tYWluL3dlYmFwcC9hcHAvYWNjb3VudC9zZXR0aW5ncy9zZXR0aW5ncy5jb21wb25lbnQuaHRtbFxuLy8gbW9kdWxlIGNodW5rcyA9IDAiLCJpbXBvcnQgeyBDb21wb25lbnQsIE9uSW5pdCB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgSmhpTGFuZ3VhZ2VTZXJ2aWNlIH0gZnJvbSAnbmctamhpcHN0ZXInO1xuXG5pbXBvcnQgeyBQcmluY2lwYWwsIEFjY291bnRTZXJ2aWNlLCBKaGlMYW5ndWFnZUhlbHBlciB9IGZyb20gJy4uLy4uL3NoYXJlZCc7XG5cbkBDb21wb25lbnQoe1xuICAgIHNlbGVjdG9yOiAnamhpLXNldHRpbmdzJyxcbiAgICB0ZW1wbGF0ZVVybDogJy4vc2V0dGluZ3MuY29tcG9uZW50Lmh0bWwnXG59KVxuZXhwb3J0IGNsYXNzIFNldHRpbmdzQ29tcG9uZW50IGltcGxlbWVudHMgT25Jbml0IHtcbiAgICBlcnJvcjogc3RyaW5nO1xuICAgIHN1Y2Nlc3M6IHN0cmluZztcbiAgICBzZXR0aW5nc0FjY291bnQ6IGFueTtcbiAgICBsYW5ndWFnZXM6IGFueVtdO1xuXG4gICAgY29uc3RydWN0b3IoXG4gICAgICAgIHByaXZhdGUgYWNjb3VudDogQWNjb3VudFNlcnZpY2UsXG4gICAgICAgIHByaXZhdGUgcHJpbmNpcGFsOiBQcmluY2lwYWwsXG4gICAgICAgIHByaXZhdGUgbGFuZ3VhZ2VTZXJ2aWNlOiBKaGlMYW5ndWFnZVNlcnZpY2UsXG4gICAgICAgIHByaXZhdGUgbGFuZ3VhZ2VIZWxwZXI6IEpoaUxhbmd1YWdlSGVscGVyXG4gICAgKSB7XG4gICAgfVxuXG4gICAgbmdPbkluaXQoKSB7XG4gICAgICAgIHRoaXMucHJpbmNpcGFsLmlkZW50aXR5KCkudGhlbigoYWNjb3VudCkgPT4ge1xuICAgICAgICAgICAgdGhpcy5zZXR0aW5nc0FjY291bnQgPSB0aGlzLmNvcHlBY2NvdW50KGFjY291bnQpO1xuICAgICAgICB9KTtcbiAgICAgICAgdGhpcy5sYW5ndWFnZUhlbHBlci5nZXRBbGwoKS50aGVuKChsYW5ndWFnZXMpID0+IHtcbiAgICAgICAgICAgIHRoaXMubGFuZ3VhZ2VzID0gbGFuZ3VhZ2VzO1xuICAgICAgICB9KTtcbiAgICB9XG5cbiAgICBzYXZlKCkge1xuICAgICAgICB0aGlzLmFjY291bnQuc2F2ZSh0aGlzLnNldHRpbmdzQWNjb3VudCkuc3Vic2NyaWJlKCgpID0+IHtcbiAgICAgICAgICAgIHRoaXMuZXJyb3IgPSBudWxsO1xuICAgICAgICAgICAgdGhpcy5zdWNjZXNzID0gJ09LJztcbiAgICAgICAgICAgIHRoaXMucHJpbmNpcGFsLmlkZW50aXR5KHRydWUpLnRoZW4oKGFjY291bnQpID0+IHtcbiAgICAgICAgICAgICAgICB0aGlzLnNldHRpbmdzQWNjb3VudCA9IHRoaXMuY29weUFjY291bnQoYWNjb3VudCk7XG4gICAgICAgICAgICB9KTtcbiAgICAgICAgICAgIHRoaXMubGFuZ3VhZ2VTZXJ2aWNlLmdldEN1cnJlbnQoKS50aGVuKChjdXJyZW50KSA9PiB7XG4gICAgICAgICAgICAgICAgaWYgKHRoaXMuc2V0dGluZ3NBY2NvdW50LmxhbmdLZXkgIT09IGN1cnJlbnQpIHtcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5sYW5ndWFnZVNlcnZpY2UuY2hhbmdlTGFuZ3VhZ2UodGhpcy5zZXR0aW5nc0FjY291bnQubGFuZ0tleSk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfSk7XG4gICAgICAgIH0sICgpID0+IHtcbiAgICAgICAgICAgIHRoaXMuc3VjY2VzcyA9IG51bGw7XG4gICAgICAgICAgICB0aGlzLmVycm9yID0gJ0VSUk9SJztcbiAgICAgICAgfSk7XG4gICAgfVxuXG4gICAgY29weUFjY291bnQoYWNjb3VudCkge1xuICAgICAgICByZXR1cm4ge1xuICAgICAgICAgICAgYWN0aXZhdGVkOiBhY2NvdW50LmFjdGl2YXRlZCxcbiAgICAgICAgICAgIGVtYWlsOiBhY2NvdW50LmVtYWlsLFxuICAgICAgICAgICAgZmlyc3ROYW1lOiBhY2NvdW50LmZpcnN0TmFtZSxcbiAgICAgICAgICAgIGxhbmdLZXk6IGFjY291bnQubGFuZ0tleSxcbiAgICAgICAgICAgIGxhc3ROYW1lOiBhY2NvdW50Lmxhc3ROYW1lLFxuICAgICAgICAgICAgbG9naW46IGFjY291bnQubG9naW4sXG4gICAgICAgICAgICBpbWFnZVVybDogYWNjb3VudC5pbWFnZVVybFxuICAgICAgICB9O1xuICAgIH1cbn1cblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL34vdHNsaW50LWxvYWRlciEuL3NyYy9tYWluL3dlYmFwcC9hcHAvYWNjb3VudC9zZXR0aW5ncy9zZXR0aW5ncy5jb21wb25lbnQudHMiLCJpbXBvcnQgeyBSb3V0ZSB9IGZyb20gJ0Bhbmd1bGFyL3JvdXRlcic7XG5cbmltcG9ydCB7IFVzZXJSb3V0ZUFjY2Vzc1NlcnZpY2UgfSBmcm9tICcuLi8uLi9zaGFyZWQnO1xuaW1wb3J0IHsgU2V0dGluZ3NDb21wb25lbnQgfSBmcm9tICcuL3NldHRpbmdzLmNvbXBvbmVudCc7XG5cbmV4cG9ydCBjb25zdCBzZXR0aW5nc1JvdXRlOiBSb3V0ZSA9IHtcbiAgICBwYXRoOiAnc2V0dGluZ3MnLFxuICAgIGNvbXBvbmVudDogU2V0dGluZ3NDb21wb25lbnQsXG4gICAgZGF0YToge1xuICAgICAgICBhdXRob3JpdGllczogWydST0xFX1VTRVInXSxcbiAgICAgICAgcGFnZVRpdGxlOiAnZ2xvYmFsLm1lbnUuYWNjb3VudC5zZXR0aW5ncydcbiAgICB9LFxuICAgIGNhbkFjdGl2YXRlOiBbVXNlclJvdXRlQWNjZXNzU2VydmljZV1cbn07XG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9+L3RzbGludC1sb2FkZXIhLi9zcmMvbWFpbi93ZWJhcHAvYXBwL2FjY291bnQvc2V0dGluZ3Mvc2V0dGluZ3Mucm91dGUudHMiLCJpbXBvcnQgeyBDb21wb25lbnQsIE9uSW5pdCwgSW5qZWN0IH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBSb3V0ZXIgfSBmcm9tICdAYW5ndWxhci9yb3V0ZXInO1xuXG5pbXBvcnQgeyBMb2dpblNlcnZpY2UgfSBmcm9tICcuLi8uLi9zaGFyZWQnO1xuaW1wb3J0IHsgQ29va2llU2VydmljZSB9IGZyb20gJ2FuZ3VsYXIyLWNvb2tpZS9jb3JlJztcblxuQENvbXBvbmVudCh7XG4gICAgc2VsZWN0b3I6ICdqaGktYXV0aCcsXG4gICAgdGVtcGxhdGU6ICcnXG59KVxuZXhwb3J0IGNsYXNzIFNvY2lhbEF1dGhDb21wb25lbnQgaW1wbGVtZW50cyBPbkluaXQge1xuXG4gICAgY29uc3RydWN0b3IoXG4gICAgICAgIHByaXZhdGUgbG9naW5TZXJ2aWNlOiBMb2dpblNlcnZpY2UsXG4gICAgICAgIHByaXZhdGUgY29va2llU2VydmljZTogQ29va2llU2VydmljZSxcbiAgICAgICAgcHJpdmF0ZSByb3V0ZXI6IFJvdXRlclxuICAgICkge1xuICAgIH1cblxuICAgIG5nT25Jbml0KCkge1xuICAgICAgICBjb25zdCB0b2tlbiA9IHRoaXMuY29va2llU2VydmljZS5nZXQoJ3NvY2lhbC1hdXRoZW50aWNhdGlvbicpO1xuICAgICAgICBpZiAodG9rZW4ubGVuZ3RoKSB7XG4gICAgICAgICAgICB0aGlzLmxvZ2luU2VydmljZS5sb2dpbldpdGhUb2tlbih0b2tlbiwgZmFsc2UpLnRoZW4oKCkgPT4ge1xuICAgICAgICAgICAgICAgICAgICB0aGlzLmNvb2tpZVNlcnZpY2UucmVtb3ZlKCdzb2NpYWwtYXV0aGVudGljYXRpb24nKTtcbiAgICAgICAgICAgICAgICAgfSwgKCkgPT4ge1xuICAgICAgICAgICAgICAgICAgICB0aGlzLnJvdXRlci5uYXZpZ2F0ZShbJ3NvY2lhbC1yZWdpc3RlciddLCB7cXVlcnlQYXJhbXM6IHsnc3VjY2Vzcyc6ICdmYWxzZSd9fSk7XG4gICAgICAgICAgICB9KTtcbiAgICAgICAgfVxuICAgIH1cbn1cblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL34vdHNsaW50LWxvYWRlciEuL3NyYy9tYWluL3dlYmFwcC9hcHAvYWNjb3VudC9zb2NpYWwvc29jaWFsLWF1dGguY29tcG9uZW50LnRzIiwibW9kdWxlLmV4cG9ydHMgPSBcIjxkaXY+IDxkaXYgY2xhc3M9XFxcInJvd1xcXCI+IDxkaXYgY2xhc3M9XFxcImNvbC1tZC04IG9mZnNldC1tZC0yXFxcIj4gPGgxICpuZ0lmPVxcXCJzdWNjZXNzXFxcIiBqaGlUcmFuc2xhdGU9XFxcInNvY2lhbC5yZWdpc3Rlci50aXRsZVxcXCIgdHJhbnNsYXRlVmFsdWVzPVxcXCJ7IGxhYmVsOiAne3twcm92aWRlckxhYmVsfX0nIH1cXFwiPlJlZ2lzdHJhdGlvbiB3aXRoPC9oMT4gPGgxICpuZ0lmPVxcXCJlcnJvclxcXCIgamhpVHJhbnNsYXRlPVxcXCJzb2NpYWwucmVnaXN0ZXIuZXJyb3JUaXRsZVxcXCI+UmVnaXN0cmF0aW9uPC9oMT4gPGRpdiBjbGFzcz1cXFwiYWxlcnQgYWxlcnQtc3VjY2Vzc1xcXCIgKm5nSWY9XFxcInN1Y2Nlc3NcXFwiIGpoaVRyYW5zbGF0ZT1cXFwic29jaWFsLnJlZ2lzdGVyLm1lc3NhZ2VzLnN1Y2Nlc3NcXFwiPiA8c3Ryb25nPlJlZ2lzdHJhdGlvbiBzYXZlZCE8L3N0cm9uZz4gUGxlYXNlIGNoZWNrIHlvdXIgZW1haWwgZm9yIGNvbmZpcm1hdGlvbi4gPC9kaXY+IDxkaXYgY2xhc3M9XFxcImFsZXJ0IGFsZXJ0LWRhbmdlclxcXCIgKm5nSWY9XFxcImVycm9yXFxcIiBqaGlUcmFuc2xhdGU9XFxcInNvY2lhbC5yZWdpc3Rlci5tZXNzYWdlcy5lcnJvci5mYWlsXFxcIj4gPHN0cm9uZz5SZWdpc3RyYXRpb24gZmFpbGVkITwvc3Ryb25nPiBQbGVhc2UgdHJ5IGFnYWluIGxhdGVyLiA8L2Rpdj4gPGpoaS1zb2NpYWwgKm5nSWY9XFxcInN1Y2Nlc3NcXFwiIHByb3ZpZGVyPVxcXCJ7eyBwcm92aWRlciB9fVxcXCI+PC9qaGktc29jaWFsPiA8YnIvPiA8ZGl2IGNsYXNzPVxcXCJhbGVydCBhbGVydC13YXJuaW5nXFxcIj4gPHNwYW4gamhpVHJhbnNsYXRlPVxcXCJnbG9iYWwubWVzc2FnZXMuaW5mby5hdXRoZW50aWNhdGVkLnByZWZpeFxcXCI+SWYgeW91IHdhbnQgdG8gPC9zcGFuPiA8YSBjbGFzcz1cXFwiYWxlcnQtbGlua1xcXCIgKGNsaWNrKT1cXFwibG9naW4oKVxcXCIgamhpVHJhbnNsYXRlPVxcXCJnbG9iYWwubWVzc2FnZXMuaW5mby5hdXRoZW50aWNhdGVkLmxpbmtcXFwiPnNpZ24gaW48L2E+PHNwYW4gamhpVHJhbnNsYXRlPVxcXCJnbG9iYWwubWVzc2FnZXMuaW5mby5hdXRoZW50aWNhdGVkLnN1ZmZpeFxcXCI+LCB5b3UgY2FuIHRyeSB0aGUgZGVmYXVsdCBhY2NvdW50czo8YnIvPi0gQWRtaW5pc3RyYXRvciAobG9naW49XFxcImFkbWluXFxcIiBhbmQgcGFzc3dvcmQ9XFxcImFkbWluXFxcIikgPGJyLz4tIFVzZXIgKGxvZ2luPVxcXCJ1c2VyXFxcIiBhbmQgcGFzc3dvcmQ9XFxcInVzZXJcXFwiKS48L3NwYW4+IDwvZGl2PiA8L2Rpdj4gPC9kaXY+IDwvZGl2PiBcIjtcblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL3NyYy9tYWluL3dlYmFwcC9hcHAvYWNjb3VudC9zb2NpYWwvc29jaWFsLXJlZ2lzdGVyLmNvbXBvbmVudC5odG1sXG4vLyBtb2R1bGUgaWQgPSAuL3NyYy9tYWluL3dlYmFwcC9hcHAvYWNjb3VudC9zb2NpYWwvc29jaWFsLXJlZ2lzdGVyLmNvbXBvbmVudC5odG1sXG4vLyBtb2R1bGUgY2h1bmtzID0gMCIsImltcG9ydCB7IENvbXBvbmVudCwgT25Jbml0IH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBBY3RpdmF0ZWRSb3V0ZSB9IGZyb20gJ0Bhbmd1bGFyL3JvdXRlcic7XG5pbXBvcnQgeyBOZ2JNb2RhbFJlZiB9IGZyb20gJ0BuZy1ib290c3RyYXAvbmctYm9vdHN0cmFwJztcblxuaW1wb3J0IHsgTG9naW5Nb2RhbFNlcnZpY2UgfSBmcm9tICcuLi8uLi9zaGFyZWQnO1xuXG5AQ29tcG9uZW50KHtcbiAgICBzZWxlY3RvcjogJ2poaS1yZWdpc3RlcicsXG4gICAgdGVtcGxhdGVVcmw6ICcuL3NvY2lhbC1yZWdpc3Rlci5jb21wb25lbnQuaHRtbCdcbn0pXG5leHBvcnQgY2xhc3MgU29jaWFsUmVnaXN0ZXJDb21wb25lbnQgaW1wbGVtZW50cyBPbkluaXQgIHtcbiAgICBzdWNjZXNzOiBib29sZWFuO1xuICAgIGVycm9yOiBib29sZWFuO1xuICAgIHByb3ZpZGVyOiBzdHJpbmc7XG4gICAgcHJvdmlkZXJMYWJlbDogc3RyaW5nO1xuICAgIG1vZGFsUmVmOiBOZ2JNb2RhbFJlZjtcblxuICAgIGNvbnN0cnVjdG9yKFxuICAgICAgICBwcml2YXRlIHJvdXRlOiBBY3RpdmF0ZWRSb3V0ZSxcbiAgICAgICAgcHJpdmF0ZSBsb2dpbk1vZGFsU2VydmljZTogTG9naW5Nb2RhbFNlcnZpY2VcbiAgICApIHtcbiAgICB9XG5cbiAgICBuZ09uSW5pdCgpIHtcbiAgICAgICAgdGhpcy5yb3V0ZS5xdWVyeVBhcmFtcy5zdWJzY3JpYmUoKHF1ZXJ5UGFyYW1zKSA9PiB7XG4gICAgICAgICAgICB0aGlzLnN1Y2Nlc3MgPSBxdWVyeVBhcmFtc1snc3VjY2VzcyddO1xuICAgICAgICB9KTtcbiAgICAgICAgdGhpcy5yb3V0ZS5wYXJhbXMuc3Vic2NyaWJlKChwYXJhbXMpID0+IHtcbiAgICAgICAgICAgIHRoaXMucHJvdmlkZXIgPSBwYXJhbXNbJ3Byb3ZpZGVyP3tzdWNjZXNzOmJvb2xlYW59J107XG4gICAgICAgIH0pO1xuICAgICAgICB0aGlzLmVycm9yID0gIXRoaXMuc3VjY2VzcztcbiAgICAgICAgdGhpcy5wcm92aWRlckxhYmVsID0gdGhpcy5wcm92aWRlci5jaGFyQXQoMCkudG9VcHBlckNhc2UoKSArIHRoaXMucHJvdmlkZXIuc2xpY2UoMSk7XG4gICAgfVxuXG4gICAgbG9naW4oKSB7XG4gICAgICAgIHRoaXMubW9kYWxSZWYgPSB0aGlzLmxvZ2luTW9kYWxTZXJ2aWNlLm9wZW4oKTtcbiAgICB9XG59XG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9+L3RzbGludC1sb2FkZXIhLi9zcmMvbWFpbi93ZWJhcHAvYXBwL2FjY291bnQvc29jaWFsL3NvY2lhbC1yZWdpc3Rlci5jb21wb25lbnQudHMiLCJpbXBvcnQgeyBSb3V0ZSB9IGZyb20gJ0Bhbmd1bGFyL3JvdXRlcic7XG5cbmltcG9ydCB7IFVzZXJSb3V0ZUFjY2Vzc1NlcnZpY2UgfSBmcm9tICcuLi8uLi9zaGFyZWQnO1xuaW1wb3J0IHsgU29jaWFsUmVnaXN0ZXJDb21wb25lbnQgfSBmcm9tICcuL3NvY2lhbC1yZWdpc3Rlci5jb21wb25lbnQnO1xuaW1wb3J0IHsgU29jaWFsQXV0aENvbXBvbmVudCB9IGZyb20gJy4vc29jaWFsLWF1dGguY29tcG9uZW50JztcblxuZXhwb3J0IGNvbnN0IHNvY2lhbFJlZ2lzdGVyUm91dGU6IFJvdXRlID0ge1xuICAgIHBhdGg6ICdzb2NpYWwtcmVnaXN0ZXIvOnByb3ZpZGVyP3tzdWNjZXNzOmJvb2xlYW59JyxcbiAgICBjb21wb25lbnQ6IFNvY2lhbFJlZ2lzdGVyQ29tcG9uZW50LFxuICAgIGRhdGE6IHtcbiAgICAgICAgYXV0aG9yaXRpZXM6IFtdLFxuICAgICAgICBwYWdlVGl0bGU6ICdzb2NpYWwucmVnaXN0ZXIudGl0bGUnXG4gICAgfSxcbiAgICBjYW5BY3RpdmF0ZTogW1VzZXJSb3V0ZUFjY2Vzc1NlcnZpY2VdXG59O1xuXG5leHBvcnQgY29uc3Qgc29jaWFsQXV0aFJvdXRlOiBSb3V0ZSA9IHtcbiAgICBwYXRoOiAnc29jaWFsLWF1dGgnLFxuICAgIGNvbXBvbmVudDogU29jaWFsQXV0aENvbXBvbmVudCxcbiAgICBkYXRhOiB7XG4gICAgICAgIGF1dGhvcml0aWVzOiBbXSxcbiAgICAgICAgcGFnZVRpdGxlOiAnc29jaWFsLnJlZ2lzdGVyLnRpdGxlJ1xuICAgIH0sXG4gICAgY2FuQWN0aXZhdGU6IFtVc2VyUm91dGVBY2Nlc3NTZXJ2aWNlXVxufTtcblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL34vdHNsaW50LWxvYWRlciEuL3NyYy9tYWluL3dlYmFwcC9hcHAvYWNjb3VudC9zb2NpYWwvc29jaWFsLnJvdXRlLnRzIiwiaW1wb3J0IHsgTmdNb2R1bGUsIENVU1RPTV9FTEVNRU5UU19TQ0hFTUEgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IFJvdXRlck1vZHVsZSB9IGZyb20gJ0Bhbmd1bGFyL3JvdXRlcic7XG5pbXBvcnQgeyBKaGlUcmFja2VyU2VydmljZSB9IGZyb20gJy4vLi4vc2hhcmVkL3RyYWNrZXIvdHJhY2tlci5zZXJ2aWNlJztcblxuaW1wb3J0IHsgUGFja2V0QXBwU2hhcmVkTW9kdWxlIH0gZnJvbSAnLi4vc2hhcmVkJztcbi8qIGpoaXBzdGVyLW5lZWRsZS1hZGQtYWRtaW4tbW9kdWxlLWltcG9ydCAtIEpIaXBzdGVyIHdpbGwgYWRkIGFkbWluIG1vZHVsZXMgaW1wb3J0cyBoZXJlICovXG5cbmltcG9ydCB7XG4gICAgYWRtaW5TdGF0ZSxcbiAgICBBdWRpdHNDb21wb25lbnQsXG4gICAgVXNlck1nbXRDb21wb25lbnQsXG4gICAgVXNlckRpYWxvZ0NvbXBvbmVudCxcbiAgICBVc2VyRGVsZXRlRGlhbG9nQ29tcG9uZW50LFxuICAgIFVzZXJNZ210RGV0YWlsQ29tcG9uZW50LFxuICAgIFVzZXJNZ210RGlhbG9nQ29tcG9uZW50LFxuICAgIFVzZXJNZ210RGVsZXRlRGlhbG9nQ29tcG9uZW50LFxuICAgIExvZ3NDb21wb25lbnQsXG4gICAgSmhpTWV0cmljc01vbml0b3JpbmdNb2RhbENvbXBvbmVudCxcbiAgICBKaGlNZXRyaWNzTW9uaXRvcmluZ0NvbXBvbmVudCxcbiAgICBKaGlIZWFsdGhNb2RhbENvbXBvbmVudCxcbiAgICBKaGlIZWFsdGhDaGVja0NvbXBvbmVudCxcbiAgICBKaGlDb25maWd1cmF0aW9uQ29tcG9uZW50LFxuICAgIEpoaURvY3NDb21wb25lbnQsXG4gICAgQXVkaXRzU2VydmljZSxcbiAgICBKaGlDb25maWd1cmF0aW9uU2VydmljZSxcbiAgICBKaGlIZWFsdGhTZXJ2aWNlLFxuICAgIEpoaU1ldHJpY3NTZXJ2aWNlLFxuICAgIEpoaVRyYWNrZXJDb21wb25lbnQsXG4gICAgTG9nc1NlcnZpY2UsXG4gICAgVXNlclJlc29sdmVQYWdpbmdQYXJhbXMsXG4gICAgVXNlclJlc29sdmUsXG4gICAgVXNlck1vZGFsU2VydmljZVxufSBmcm9tICcuLyc7XG5cbkBOZ01vZHVsZSh7XG4gICAgaW1wb3J0czogW1xuICAgICAgICBQYWNrZXRBcHBTaGFyZWRNb2R1bGUsXG4gICAgICAgIFJvdXRlck1vZHVsZS5mb3JSb290KGFkbWluU3RhdGUsIHsgdXNlSGFzaDogdHJ1ZSB9KSxcbiAgICAgICAgLyogamhpcHN0ZXItbmVlZGxlLWFkZC1hZG1pbi1tb2R1bGUgLSBKSGlwc3RlciB3aWxsIGFkZCBhZG1pbiBtb2R1bGVzIGhlcmUgKi9cbiAgICBdLFxuICAgIGRlY2xhcmF0aW9uczogW1xuICAgICAgICBBdWRpdHNDb21wb25lbnQsXG4gICAgICAgIFVzZXJNZ210Q29tcG9uZW50LFxuICAgICAgICBVc2VyRGlhbG9nQ29tcG9uZW50LFxuICAgICAgICBVc2VyRGVsZXRlRGlhbG9nQ29tcG9uZW50LFxuICAgICAgICBVc2VyTWdtdERldGFpbENvbXBvbmVudCxcbiAgICAgICAgVXNlck1nbXREaWFsb2dDb21wb25lbnQsXG4gICAgICAgIFVzZXJNZ210RGVsZXRlRGlhbG9nQ29tcG9uZW50LFxuICAgICAgICBMb2dzQ29tcG9uZW50LFxuICAgICAgICBKaGlDb25maWd1cmF0aW9uQ29tcG9uZW50LFxuICAgICAgICBKaGlIZWFsdGhDaGVja0NvbXBvbmVudCxcbiAgICAgICAgSmhpSGVhbHRoTW9kYWxDb21wb25lbnQsXG4gICAgICAgIEpoaURvY3NDb21wb25lbnQsXG4gICAgICAgIEpoaVRyYWNrZXJDb21wb25lbnQsXG4gICAgICAgIEpoaU1ldHJpY3NNb25pdG9yaW5nQ29tcG9uZW50LFxuICAgICAgICBKaGlNZXRyaWNzTW9uaXRvcmluZ01vZGFsQ29tcG9uZW50XG4gICAgXSxcbiAgICBlbnRyeUNvbXBvbmVudHM6IFtcbiAgICAgICAgVXNlck1nbXREaWFsb2dDb21wb25lbnQsXG4gICAgICAgIFVzZXJNZ210RGVsZXRlRGlhbG9nQ29tcG9uZW50LFxuICAgICAgICBKaGlIZWFsdGhNb2RhbENvbXBvbmVudCxcbiAgICAgICAgSmhpTWV0cmljc01vbml0b3JpbmdNb2RhbENvbXBvbmVudCxcbiAgICBdLFxuICAgIHByb3ZpZGVyczogW1xuICAgICAgICBBdWRpdHNTZXJ2aWNlLFxuICAgICAgICBKaGlDb25maWd1cmF0aW9uU2VydmljZSxcbiAgICAgICAgSmhpSGVhbHRoU2VydmljZSxcbiAgICAgICAgSmhpTWV0cmljc1NlcnZpY2UsXG4gICAgICAgIExvZ3NTZXJ2aWNlLFxuICAgICAgICBKaGlUcmFja2VyU2VydmljZSxcbiAgICAgICAgVXNlclJlc29sdmVQYWdpbmdQYXJhbXMsXG4gICAgICAgIFVzZXJSZXNvbHZlLFxuICAgICAgICBVc2VyTW9kYWxTZXJ2aWNlXG4gICAgXSxcbiAgICBzY2hlbWFzOiBbQ1VTVE9NX0VMRU1FTlRTX1NDSEVNQV1cbn0pXG5leHBvcnQgY2xhc3MgUGFja2V0QXBwQWRtaW5Nb2R1bGUge31cblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL34vdHNsaW50LWxvYWRlciEuL3NyYy9tYWluL3dlYmFwcC9hcHAvYWRtaW4vYWRtaW4ubW9kdWxlLnRzIiwiaW1wb3J0IHsgUm91dGVzIH0gZnJvbSAnQGFuZ3VsYXIvcm91dGVyJztcblxuaW1wb3J0IHtcbiAgICBhdWRpdHNSb3V0ZSxcbiAgICBjb25maWd1cmF0aW9uUm91dGUsXG4gICAgZG9jc1JvdXRlLFxuICAgIGhlYWx0aFJvdXRlLFxuICAgIGxvZ3NSb3V0ZSxcbiAgICBtZXRyaWNzUm91dGUsXG4gICAgdHJhY2tlclJvdXRlLFxuICAgIHVzZXJNZ210Um91dGUsXG4gICAgdXNlckRpYWxvZ1JvdXRlXG59IGZyb20gJy4vJztcblxuaW1wb3J0IHsgVXNlclJvdXRlQWNjZXNzU2VydmljZSB9IGZyb20gJy4uL3NoYXJlZCc7XG5cbmNvbnN0IEFETUlOX1JPVVRFUyA9IFtcbiAgICBhdWRpdHNSb3V0ZSxcbiAgICBjb25maWd1cmF0aW9uUm91dGUsXG4gICAgZG9jc1JvdXRlLFxuICAgIGhlYWx0aFJvdXRlLFxuICAgIGxvZ3NSb3V0ZSxcbiAgICB0cmFja2VyUm91dGUsXG4gICAgLi4udXNlck1nbXRSb3V0ZSxcbiAgICBtZXRyaWNzUm91dGVcbl07XG5cbmV4cG9ydCBjb25zdCBhZG1pblN0YXRlOiBSb3V0ZXMgPSBbe1xuICAgIHBhdGg6ICcnLFxuICAgIGRhdGE6IHtcbiAgICAgICAgYXV0aG9yaXRpZXM6IFsnUk9MRV9BRE1JTiddXG4gICAgfSxcbiAgICBjYW5BY3RpdmF0ZTogW1VzZXJSb3V0ZUFjY2Vzc1NlcnZpY2VdLFxuICAgIGNoaWxkcmVuOiBBRE1JTl9ST1VURVNcbn0sXG4gICAgLi4udXNlckRpYWxvZ1JvdXRlXG5dO1xuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vfi90c2xpbnQtbG9hZGVyIS4vc3JjL21haW4vd2ViYXBwL2FwcC9hZG1pbi9hZG1pbi5yb3V0ZS50cyIsImV4cG9ydCBjbGFzcyBBdWRpdERhdGEge1xuICAgIGNvbnN0cnVjdG9yKFxuICAgICAgICBwdWJsaWMgcmVtb3RlQWRkcmVzczogc3RyaW5nLFxuICAgICAgICBwdWJsaWMgc2Vzc2lvbklkOiBzdHJpbmdcbiAgICApIHsgfVxufVxuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vfi90c2xpbnQtbG9hZGVyIS4vc3JjL21haW4vd2ViYXBwL2FwcC9hZG1pbi9hdWRpdHMvYXVkaXQtZGF0YS5tb2RlbC50cyIsImltcG9ydCB7IEF1ZGl0RGF0YSB9IGZyb20gJy4vYXVkaXQtZGF0YS5tb2RlbCc7XG5cbmV4cG9ydCBjbGFzcyBBdWRpdCB7XG4gICAgY29uc3RydWN0b3IoXG4gICAgICAgIHB1YmxpYyBkYXRhOiBBdWRpdERhdGEsXG4gICAgICAgIHB1YmxpYyBwcmluY2lwYWw6IHN0cmluZyxcbiAgICAgICAgcHVibGljIHRpbWVzdGFtcDogc3RyaW5nLFxuICAgICAgICBwdWJsaWMgdHlwZTogc3RyaW5nXG4gICAgKSB7wqB9XG59XG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9+L3RzbGludC1sb2FkZXIhLi9zcmMvbWFpbi93ZWJhcHAvYXBwL2FkbWluL2F1ZGl0cy9hdWRpdC5tb2RlbC50cyIsIm1vZHVsZS5leHBvcnRzID0gXCI8ZGl2ICpuZ0lmPVxcXCJhdWRpdHNcXFwiPiA8aDIgamhpVHJhbnNsYXRlPVxcXCJhdWRpdHMudGl0bGVcXFwiPkF1ZGl0czwvaDI+IDxkaXYgY2xhc3M9XFxcInJvd1xcXCI+IDxkaXYgY2xhc3M9XFxcImNvbC1tZC01XFxcIj4gPGg0IGpoaVRyYW5zbGF0ZT1cXFwiYXVkaXRzLmZpbHRlci50aXRsZVxcXCI+RmlsdGVyIGJ5IGRhdGU8L2g0PiA8cCBjbGFzcz1cXFwiZC1mbGV4XFxcIj4gPHNwYW4gamhpVHJhbnNsYXRlPVxcXCJhdWRpdHMuZmlsdGVyLmZyb21cXFwiIGNsYXNzPVxcXCJpbnB1dC1ncm91cC1hZGRvblxcXCI+ZnJvbTwvc3Bhbj4gPGlucHV0IHR5cGU9XFxcImRhdGVcXFwiIGNsYXNzPVxcXCJmb3JtLWNvbnRyb2xcXFwiIG5hbWU9XFxcInN0YXJ0XFxcIiBbKG5nTW9kZWwpXT1cXFwiZnJvbURhdGVcXFwiIChuZ01vZGVsQ2hhbmdlKT1cXFwib25DaGFuZ2VEYXRlKCRldmVudClcXFwiIHJlcXVpcmVkLz4gPHNwYW4gamhpVHJhbnNsYXRlPVxcXCJhdWRpdHMuZmlsdGVyLnRvXFxcIiBjbGFzcz1cXFwiaW5wdXQtZ3JvdXAtYWRkb25cXFwiPnRvPC9zcGFuPiA8aW5wdXQgdHlwZT1cXFwiZGF0ZVxcXCIgY2xhc3M9XFxcImZvcm0tY29udHJvbFxcXCIgbmFtZT1cXFwiZW5kXFxcIiBbKG5nTW9kZWwpXT1cXFwidG9EYXRlXFxcIiAobmdNb2RlbENoYW5nZSk9XFxcIm9uQ2hhbmdlRGF0ZSgkZXZlbnQpXFxcIiByZXF1aXJlZC8+IDwvcD4gPC9kaXY+IDwvZGl2PiA8ZGl2IGNsYXNzPVxcXCJ0YWJsZS1yZXNwb25zaXZlXFxcIj4gPHRhYmxlIGNsYXNzPVxcXCJ0YWJsZSB0YWJsZS1jb25kZW5zZWQgdGFibGUtc3RyaXBlZCB0YWJsZS1ib3JkZXJlZFxcXCI+IDx0aGVhZD4gPHRyPiA8dGggKGNsaWNrKT1cXFwib3JkZXJQcm9wID0gJ3RpbWVzdGFtcCc7IHJldmVyc2U9IXJldmVyc2VcXFwiPjxzcGFuIGpoaVRyYW5zbGF0ZT1cXFwiYXVkaXRzLnRhYmxlLmhlYWRlci5kYXRlXFxcIj5EYXRlPC9zcGFuPjwvdGg+IDx0aCAoY2xpY2spPVxcXCJvcmRlclByb3AgPSAncHJpbmNpcGFsJzsgcmV2ZXJzZT0hcmV2ZXJzZVxcXCI+PHNwYW4gamhpVHJhbnNsYXRlPVxcXCJhdWRpdHMudGFibGUuaGVhZGVyLnByaW5jaXBhbFxcXCI+VXNlcjwvc3Bhbj48L3RoPiA8dGggKGNsaWNrKT1cXFwib3JkZXJQcm9wID0gJ3R5cGUnOyByZXZlcnNlPSFyZXZlcnNlXFxcIj48c3BhbiBqaGlUcmFuc2xhdGU9XFxcImF1ZGl0cy50YWJsZS5oZWFkZXIuc3RhdHVzXFxcIj5TdGF0ZTwvc3Bhbj48L3RoPiA8dGggKGNsaWNrKT1cXFwib3JkZXJQcm9wID0gJ2RhdGEubWVzc2FnZSc7IHJldmVyc2U9IXJldmVyc2VcXFwiPjxzcGFuIGpoaVRyYW5zbGF0ZT1cXFwiYXVkaXRzLnRhYmxlLmhlYWRlci5kYXRhXFxcIj5FeHRyYSBkYXRhPC9zcGFuPjwvdGg+IDwvdHI+IDwvdGhlYWQ+IDx0ciAqbmdGb3I9XFxcImxldCBhdWRpdCBvZiBnZXRBdWRpdHMoKVxcXCI+IDx0ZD48c3Bhbj57e2F1ZGl0LnRpbWVzdGFtcHwgZGF0ZTonbWVkaXVtJ319PC9zcGFuPjwvdGQ+IDx0ZD48c21hbGw+e3thdWRpdC5wcmluY2lwYWx9fTwvc21hbGw+PC90ZD4gPHRkPnt7YXVkaXQudHlwZX19PC90ZD4gPHRkPiA8c3BhbiAqbmdJZj1cXFwiYXVkaXQuZGF0YVxcXCIgbmctc2hvdz1cXFwiYXVkaXQuZGF0YS5tZXNzYWdlXFxcIj57e2F1ZGl0LmRhdGEubWVzc2FnZX19PC9zcGFuPiA8c3BhbiAqbmdJZj1cXFwiYXVkaXQuZGF0YVxcXCIgbmctc2hvdz1cXFwiYXVkaXQuZGF0YS5yZW1vdGVBZGRyZXNzXFxcIj48c3BhbiBqaGlUcmFuc2xhdGU9XFxcImF1ZGl0cy50YWJsZS5kYXRhLnJlbW90ZUFkZHJlc3NcXFwiPlJlbW90ZSBBZGRyZXNzPC9zcGFuPiB7e2F1ZGl0LmRhdGEucmVtb3RlQWRkcmVzc319PC9zcGFuPiA8L3RkPiA8L3RyPiA8L3RhYmxlPiA8L2Rpdj4gPGRpdiAqbmdJZj1cXFwiYXVkaXRzXFxcIj4gPGRpdiBjbGFzcz1cXFwicm93IGp1c3RpZnktY29udGVudC1jZW50ZXJcXFwiPiA8amhpLWl0ZW0tY291bnQgW3BhZ2VdPVxcXCJwYWdlXFxcIiBbdG90YWxdPVxcXCJ0b3RhbEl0ZW1zXFxcIiBbaXRlbXNQZXJQYWdlXT1cXFwiaXRlbXNQZXJQYWdlXFxcIj48L2poaS1pdGVtLWNvdW50PiA8L2Rpdj4gPGRpdiBjbGFzcz1cXFwicm93IGp1c3RpZnktY29udGVudC1jZW50ZXJcXFwiPiA8bmdiLXBhZ2luYXRpb24gW2NvbGxlY3Rpb25TaXplXT1cXFwidG90YWxJdGVtc1xcXCIgWyhwYWdlKV09XFxcInBhZ2VcXFwiIChwYWdlQ2hhbmdlKT1cXFwibG9hZFBhZ2UocGFnZSlcXFwiPjwvbmdiLXBhZ2luYXRpb24+IDwvZGl2PiA8L2Rpdj4gPC9kaXY+IFwiO1xuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vc3JjL21haW4vd2ViYXBwL2FwcC9hZG1pbi9hdWRpdHMvYXVkaXRzLmNvbXBvbmVudC5odG1sXG4vLyBtb2R1bGUgaWQgPSAuL3NyYy9tYWluL3dlYmFwcC9hcHAvYWRtaW4vYXVkaXRzL2F1ZGl0cy5jb21wb25lbnQuaHRtbFxuLy8gbW9kdWxlIGNodW5rcyA9IDAiLCJpbXBvcnQgeyBDb21wb25lbnQsIE9uSW5pdCB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgRGF0ZVBpcGUgfSBmcm9tICdAYW5ndWxhci9jb21tb24nO1xuaW1wb3J0IHsgUGFyc2VMaW5rcyB9IGZyb20gJ25nLWpoaXBzdGVyJztcblxuaW1wb3J0IHsgQXVkaXQgfSBmcm9tICcuL2F1ZGl0Lm1vZGVsJztcbmltcG9ydCB7IEF1ZGl0c1NlcnZpY2UgfSBmcm9tICcuL2F1ZGl0cy5zZXJ2aWNlJztcbmltcG9ydCB7IElURU1TX1BFUl9QQUdFIH0gZnJvbSAnLi4vLi4vc2hhcmVkJztcbmltcG9ydCB7IFBhZ2luYXRpb25Db25maWcgfSBmcm9tICcuLi8uLi9ibG9ja3MvY29uZmlnL3VpYi1wYWdpbmF0aW9uLmNvbmZpZyc7XG5cbkBDb21wb25lbnQoe1xuICBzZWxlY3RvcjogJ2poaS1hdWRpdCcsXG4gIHRlbXBsYXRlVXJsOiAnLi9hdWRpdHMuY29tcG9uZW50Lmh0bWwnXG59KVxuZXhwb3J0IGNsYXNzIEF1ZGl0c0NvbXBvbmVudCBpbXBsZW1lbnRzIE9uSW5pdCB7XG4gICAgYXVkaXRzOiBBdWRpdFtdO1xuICAgIGZyb21EYXRlOiBzdHJpbmc7XG4gICAgaXRlbXNQZXJQYWdlOiBhbnk7XG4gICAgbGlua3M6IGFueTtcbiAgICBwYWdlOiBudW1iZXI7XG4gICAgb3JkZXJQcm9wOiBzdHJpbmc7XG4gICAgcmV2ZXJzZTogYm9vbGVhbjtcbiAgICB0b0RhdGU6IHN0cmluZztcbiAgICB0b3RhbEl0ZW1zOiBudW1iZXI7XG5cbiAgICBjb25zdHJ1Y3RvcihcbiAgICAgICAgcHJpdmF0ZSBhdWRpdHNTZXJ2aWNlOiBBdWRpdHNTZXJ2aWNlLFxuICAgICAgICBwcml2YXRlIHBhcnNlTGlua3M6IFBhcnNlTGlua3MsXG4gICAgICAgIHByaXZhdGUgcGFnaW5hdGlvbkNvbmZpZzogUGFnaW5hdGlvbkNvbmZpZyxcbiAgICAgICAgcHJpdmF0ZSBkYXRlUGlwZTogRGF0ZVBpcGVcbiAgICApIHtcbiAgICAgICAgdGhpcy5pdGVtc1BlclBhZ2UgPSBJVEVNU19QRVJfUEFHRTtcbiAgICAgICAgdGhpcy5wYWdlID0gMTtcbiAgICAgICAgdGhpcy5yZXZlcnNlID0gZmFsc2U7XG4gICAgICAgIHRoaXMub3JkZXJQcm9wID0gJ3RpbWVzdGFtcCc7XG4gICAgfVxuXG4gICAgZ2V0QXVkaXRzKCkge1xuICAgICAgICByZXR1cm4gdGhpcy5zb3J0QXVkaXRzKHRoaXMuYXVkaXRzKTtcbiAgICB9XG5cbiAgICBsb2FkUGFnZShwYWdlOiBudW1iZXIpIHtcbiAgICAgICAgdGhpcy5wYWdlID0gcGFnZTtcbiAgICAgICAgdGhpcy5vbkNoYW5nZURhdGUoKTtcbiAgICB9XG5cbiAgICBuZ09uSW5pdCgpIHtcbiAgICAgICAgdGhpcy50b2RheSgpO1xuICAgICAgICB0aGlzLnByZXZpb3VzTW9udGgoKTtcbiAgICAgICAgdGhpcy5vbkNoYW5nZURhdGUoKTtcbiAgICB9XG5cbiAgICBvbkNoYW5nZURhdGUoKSB7XG4gICAgICAgIHRoaXMuYXVkaXRzU2VydmljZS5xdWVyeSh7cGFnZTogdGhpcy5wYWdlIC0gMSwgc2l6ZTogdGhpcy5pdGVtc1BlclBhZ2UsXG4gICAgICAgICAgICBmcm9tRGF0ZTogdGhpcy5mcm9tRGF0ZSwgdG9EYXRlOiB0aGlzLnRvRGF0ZX0pLnN1YnNjcmliZSgocmVzKSA9PiB7XG5cbiAgICAgICAgICAgIHRoaXMuYXVkaXRzID0gcmVzLmpzb24oKTtcbiAgICAgICAgICAgIHRoaXMubGlua3MgPSB0aGlzLnBhcnNlTGlua3MucGFyc2UocmVzLmhlYWRlcnMuZ2V0KCdsaW5rJykpO1xuICAgICAgICAgICAgdGhpcy50b3RhbEl0ZW1zID0gKyByZXMuaGVhZGVycy5nZXQoJ1gtVG90YWwtQ291bnQnKTtcbiAgICAgICAgfSk7XG4gICAgfVxuXG4gICAgcHJldmlvdXNNb250aCgpIHtcbiAgICAgICAgY29uc3QgZGF0ZUZvcm1hdCA9ICd5eXl5LU1NLWRkJztcbiAgICAgICAgbGV0IGZyb21EYXRlOiBEYXRlID0gbmV3IERhdGUoKTtcblxuICAgICAgICBpZiAoZnJvbURhdGUuZ2V0TW9udGgoKSA9PT0gMCkge1xuICAgICAgICAgICAgZnJvbURhdGUgPSBuZXcgRGF0ZShmcm9tRGF0ZS5nZXRGdWxsWWVhcigpIC0gMSwgMTEsIGZyb21EYXRlLmdldERhdGUoKSk7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICBmcm9tRGF0ZSA9IG5ldyBEYXRlKGZyb21EYXRlLmdldEZ1bGxZZWFyKCksIGZyb21EYXRlLmdldE1vbnRoKCkgLSAxLCBmcm9tRGF0ZS5nZXREYXRlKCkpO1xuICAgICAgICB9XG5cbiAgICAgICAgdGhpcy5mcm9tRGF0ZSA9IHRoaXMuZGF0ZVBpcGUudHJhbnNmb3JtKGZyb21EYXRlLCBkYXRlRm9ybWF0KTtcbiAgICB9XG5cbiAgICB0b2RheSgpIHtcbiAgICAgICAgY29uc3QgZGF0ZUZvcm1hdCA9ICd5eXl5LU1NLWRkJztcbiAgICAgICAgLy8gVG9kYXkgKyAxIGRheSAtIG5lZWRlZCBpZiB0aGUgY3VycmVudCBkYXkgbXVzdCBiZSBpbmNsdWRlZFxuICAgICAgICBjb25zdCB0b2RheTogRGF0ZSA9IG5ldyBEYXRlKCk7XG4gICAgICAgIHRvZGF5LnNldERhdGUodG9kYXkuZ2V0RGF0ZSgpICsgMSk7XG4gICAgICAgIGNvbnN0IGRhdGUgPSBuZXcgRGF0ZSh0b2RheS5nZXRGdWxsWWVhcigpLCB0b2RheS5nZXRNb250aCgpLCB0b2RheS5nZXREYXRlKCkpO1xuICAgICAgICB0aGlzLnRvRGF0ZSA9IHRoaXMuZGF0ZVBpcGUudHJhbnNmb3JtKGRhdGUsIGRhdGVGb3JtYXQpO1xuICAgIH1cblxuICAgIHByaXZhdGUgc29ydEF1ZGl0cyhhdWRpdHM6IEF1ZGl0W10pIHtcbiAgICAgICAgYXVkaXRzID0gYXVkaXRzLnNsaWNlKDApLnNvcnQoKGEsIGIpID0+IHtcbiAgICAgICAgICAgIGlmIChhW3RoaXMub3JkZXJQcm9wXSA8IGJbdGhpcy5vcmRlclByb3BdKSB7XG4gICAgICAgICAgICAgICAgcmV0dXJuIC0xO1xuICAgICAgICAgICAgfSBlbHNlIGlmIChbYlt0aGlzLm9yZGVyUHJvcF0gPCBhW3RoaXMub3JkZXJQcm9wXV0pIHtcbiAgICAgICAgICAgICAgICByZXR1cm4gMTtcbiAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgcmV0dXJuIDA7XG4gICAgICAgICAgICB9XG4gICAgICAgIH0pO1xuXG4gICAgICAgIHJldHVybiB0aGlzLnJldmVyc2UgPyBhdWRpdHMucmV2ZXJzZSgpIDogYXVkaXRzO1xuICAgIH1cbn1cblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL34vdHNsaW50LWxvYWRlciEuL3NyYy9tYWluL3dlYmFwcC9hcHAvYWRtaW4vYXVkaXRzL2F1ZGl0cy5jb21wb25lbnQudHMiLCJpbXBvcnQgeyBSb3V0ZSB9IGZyb20gJ0Bhbmd1bGFyL3JvdXRlcic7XG5cbmltcG9ydCB7IEF1ZGl0c0NvbXBvbmVudCB9IGZyb20gJy4vYXVkaXRzLmNvbXBvbmVudCc7XG5cbmV4cG9ydCBjb25zdCBhdWRpdHNSb3V0ZTogUm91dGUgPSB7XG4gICAgcGF0aDogJ2F1ZGl0cycsXG4gICAgY29tcG9uZW50OiBBdWRpdHNDb21wb25lbnQsXG4gICAgZGF0YToge1xuICAgICAgICBwYWdlVGl0bGU6ICdhdWRpdHMudGl0bGUnXG4gICAgfVxufTtcblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL34vdHNsaW50LWxvYWRlciEuL3NyYy9tYWluL3dlYmFwcC9hcHAvYWRtaW4vYXVkaXRzL2F1ZGl0cy5yb3V0ZS50cyIsImltcG9ydCB7IEluamVjdGFibGUgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IEh0dHAsIFJlc3BvbnNlLCBVUkxTZWFyY2hQYXJhbXMgfSBmcm9tICdAYW5ndWxhci9odHRwJztcbmltcG9ydCB7IE9ic2VydmFibGUgfSBmcm9tICdyeGpzL1J4JztcblxuQEluamVjdGFibGUoKVxuZXhwb3J0IGNsYXNzIEF1ZGl0c1NlcnZpY2UgIHtcbiAgICBjb25zdHJ1Y3Rvcihwcml2YXRlIGh0dHA6IEh0dHApIHsgfVxuXG4gICAgcXVlcnkocmVxOiBhbnkpOiBPYnNlcnZhYmxlPFJlc3BvbnNlPiB7XG4gICAgICAgIGNvbnN0IHBhcmFtczogVVJMU2VhcmNoUGFyYW1zID0gbmV3IFVSTFNlYXJjaFBhcmFtcygpO1xuICAgICAgICBwYXJhbXMuc2V0KCdmcm9tRGF0ZScsIHJlcS5mcm9tRGF0ZSk7XG4gICAgICAgIHBhcmFtcy5zZXQoJ3RvRGF0ZScsIHJlcS50b0RhdGUpO1xuICAgICAgICBwYXJhbXMuc2V0KCdwYWdlJywgcmVxLnBhZ2UpO1xuICAgICAgICBwYXJhbXMuc2V0KCdzaXplJywgcmVxLnNpemUpO1xuICAgICAgICBwYXJhbXMuc2V0KCdzb3J0JywgcmVxLnNvcnQpO1xuXG4gICAgICAgIGNvbnN0IG9wdGlvbnMgPSB7XG4gICAgICAgICAgICBzZWFyY2g6IHBhcmFtc1xuICAgICAgICB9O1xuXG4gICAgICAgIHJldHVybiB0aGlzLmh0dHAuZ2V0KCdtYW5hZ2VtZW50L2F1ZGl0cycsIG9wdGlvbnMpO1xuICAgIH1cbn1cblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL34vdHNsaW50LWxvYWRlciEuL3NyYy9tYWluL3dlYmFwcC9hcHAvYWRtaW4vYXVkaXRzL2F1ZGl0cy5zZXJ2aWNlLnRzIiwibW9kdWxlLmV4cG9ydHMgPSBcIjxkaXYgKm5nSWY9XFxcImFsbENvbmZpZ3VyYXRpb24gJiYgY29uZmlndXJhdGlvblxcXCI+IDxoMiBqaGlUcmFuc2xhdGU9XFxcImNvbmZpZ3VyYXRpb24udGl0bGVcXFwiPkNvbmZpZ3VyYXRpb248L2gyPiA8c3BhbiBqaGlUcmFuc2xhdGU9XFxcImNvbmZpZ3VyYXRpb24uZmlsdGVyXFxcIj5GaWx0ZXIgKGJ5IHByZWZpeCk8L3NwYW4+IDxpbnB1dCB0eXBlPVxcXCJ0ZXh0XFxcIiBbKG5nTW9kZWwpXT1cXFwiZmlsdGVyXFxcIiBjbGFzcz1cXFwiZm9ybS1jb250cm9sXFxcIj4gPGxhYmVsPlNwcmluZyBjb25maWd1cmF0aW9uPC9sYWJlbD4gPHRhYmxlIGNsYXNzPVxcXCJ0YWJsZSB0YWJsZS1zdHJpcGVkIHRhYmxlLWJvcmRlcmVkIHRhYmxlLXJlc3BvbnNpdmUgZC10YWJsZVxcXCI+IDx0aGVhZD4gPHRyPiA8dGggY2xhc3M9XFxcInctNDBcXFwiIChjbGljayk9XFxcIm9yZGVyUHJvcCA9ICdwcmVmaXgnOyByZXZlcnNlPSFyZXZlcnNlXFxcIj48c3BhbiBqaGlUcmFuc2xhdGU9XFxcImNvbmZpZ3VyYXRpb24udGFibGUucHJlZml4XFxcIj5QcmVmaXg8L3NwYW4+PC90aD4gPHRoIGNsYXNzPVxcXCJ3LTYwXFxcIiAoY2xpY2spPVxcXCJvcmRlclByb3AgPSAncHJvcGVydGllcyc7IHJldmVyc2U9IXJldmVyc2VcXFwiPjxzcGFuIGpoaVRyYW5zbGF0ZT1cXFwiY29uZmlndXJhdGlvbi50YWJsZS5wcm9wZXJ0aWVzXFxcIj5Qcm9wZXJ0aWVzPC9zcGFuPjwvdGg+IDwvdHI+IDwvdGhlYWQ+IDx0Ym9keT4gPHRyICpuZ0Zvcj1cXFwibGV0IGVudHJ5IG9mIChjb25maWd1cmF0aW9uIHwgcHVyZUZpbHRlcjpmaWx0ZXI6J3ByZWZpeCcgfCBvcmRlckJ5Om9yZGVyUHJvcDpyZXZlcnNlKVxcXCI+IDx0ZD48c3Bhbj57e2VudHJ5LnByZWZpeH19PC9zcGFuPjwvdGQ+IDx0ZD4gPGRpdiBjbGFzcz1cXFwicm93XFxcIiAqbmdGb3I9XFxcImxldCBrZXkgb2Yga2V5cyhlbnRyeS5wcm9wZXJ0aWVzKVxcXCI+IDxkaXYgY2xhc3M9XFxcImNvbC1tZC00XFxcIj57e2tleX19PC9kaXY+IDxkaXYgY2xhc3M9XFxcImNvbC1tZC04XFxcIj4gPHNwYW4gY2xhc3M9XFxcImZsb2F0LXJpZ2h0IGJhZGdlIGJhZGdlLWRlZmF1bHQgYnJlYWtcXFwiPnt7ZW50cnkucHJvcGVydGllc1trZXldIHwganNvbn19PC9zcGFuPiA8L2Rpdj4gPC9kaXY+IDwvdGQ+IDwvdHI+IDwvdGJvZHk+IDwvdGFibGU+IDxkaXYgKm5nRm9yPVxcXCJsZXQga2V5IG9mIGtleXMoYWxsQ29uZmlndXJhdGlvbilcXFwiPiA8bGFiZWw+PHNwYW4+e3trZXl9fTwvc3Bhbj48L2xhYmVsPiA8dGFibGUgY2xhc3M9XFxcInRhYmxlIHRhYmxlLXNtIHRhYmxlLXN0cmlwZWQgdGFibGUtYm9yZGVyZWQgdGFibGUtcmVzcG9uc2l2ZSBkLXRhYmxlXFxcIj4gPHRoZWFkPiA8dHI+IDx0aCBjbGFzcz1cXFwidy00MFxcXCI+UHJvcGVydHk8L3RoPiA8dGggY2xhc3M9XFxcInctNjBcXFwiPlZhbHVlPC90aD4gPC90cj4gPC90aGVhZD4gPHRib2R5PiA8dHIgKm5nRm9yPVxcXCJsZXQgaXRlbSBvZiBhbGxDb25maWd1cmF0aW9uW2tleV1cXFwiPiA8dGQgY2xhc3M9XFxcImJyZWFrXFxcIj57e2l0ZW0ua2V5fX08L3RkPiA8dGQgY2xhc3M9XFxcImJyZWFrXFxcIj4gPHNwYW4gY2xhc3M9XFxcImZsb2F0LXJpZ2h0IGJhZGdlIGJhZGdlLWRlZmF1bHQgYnJlYWtcXFwiPnt7aXRlbS52YWx9fTwvc3Bhbj4gPC90ZD4gPC90cj4gPC90Ym9keT4gPC90YWJsZT4gPC9kaXY+IDwvZGl2PiBcIjtcblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL3NyYy9tYWluL3dlYmFwcC9hcHAvYWRtaW4vY29uZmlndXJhdGlvbi9jb25maWd1cmF0aW9uLmNvbXBvbmVudC5odG1sXG4vLyBtb2R1bGUgaWQgPSAuL3NyYy9tYWluL3dlYmFwcC9hcHAvYWRtaW4vY29uZmlndXJhdGlvbi9jb25maWd1cmF0aW9uLmNvbXBvbmVudC5odG1sXG4vLyBtb2R1bGUgY2h1bmtzID0gMCIsImltcG9ydCB7IENvbXBvbmVudCwgT25Jbml0IH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5cbmltcG9ydCB7IEpoaUNvbmZpZ3VyYXRpb25TZXJ2aWNlIH0gZnJvbSAnLi9jb25maWd1cmF0aW9uLnNlcnZpY2UnO1xuXG5AQ29tcG9uZW50KHtcbiAgICBzZWxlY3RvcjogJ2poaS1jb25maWd1cmF0aW9uJyxcbiAgICB0ZW1wbGF0ZVVybDogJy4vY29uZmlndXJhdGlvbi5jb21wb25lbnQuaHRtbCdcbn0pXG5leHBvcnQgY2xhc3MgSmhpQ29uZmlndXJhdGlvbkNvbXBvbmVudCBpbXBsZW1lbnRzIE9uSW5pdCB7XG4gICAgYWxsQ29uZmlndXJhdGlvbjogYW55ID0gbnVsbDtcbiAgICBjb25maWd1cmF0aW9uOiBhbnkgPSBudWxsO1xuICAgIGNvbmZpZ0tleXM6IGFueVtdO1xuICAgIGZpbHRlcjogc3RyaW5nO1xuICAgIG9yZGVyUHJvcDogc3RyaW5nO1xuICAgIHJldmVyc2U6IGJvb2xlYW47XG5cbiAgICBjb25zdHJ1Y3RvcihcbiAgICAgICAgcHJpdmF0ZSBjb25maWd1cmF0aW9uU2VydmljZTogSmhpQ29uZmlndXJhdGlvblNlcnZpY2VcbiAgICApIHtcbiAgICAgICAgdGhpcy5jb25maWdLZXlzID0gW107XG4gICAgICAgIHRoaXMuZmlsdGVyID0gJyc7XG4gICAgICAgIHRoaXMub3JkZXJQcm9wID0gJ3ByZWZpeCc7XG4gICAgICAgIHRoaXMucmV2ZXJzZSA9IGZhbHNlO1xuICAgIH1cblxuICAgIGtleXMoZGljdCk6IEFycmF5PHN0cmluZz4ge1xuICAgICAgICByZXR1cm4gKGRpY3QgPT09IHVuZGVmaW5lZCkgPyBbXSA6IE9iamVjdC5rZXlzKGRpY3QpO1xuICAgIH1cblxuICAgIG5nT25Jbml0KCkge1xuICAgICAgICB0aGlzLmNvbmZpZ3VyYXRpb25TZXJ2aWNlLmdldCgpLnN1YnNjcmliZSgoY29uZmlndXJhdGlvbikgPT4ge1xuICAgICAgICAgICAgdGhpcy5jb25maWd1cmF0aW9uID0gY29uZmlndXJhdGlvbjtcblxuICAgICAgICAgICAgZm9yIChjb25zdCBjb25maWcgb2YgY29uZmlndXJhdGlvbikge1xuICAgICAgICAgICAgICAgIGlmIChjb25maWcucHJvcGVydGllcyAhPT0gdW5kZWZpbmVkKSB7XG4gICAgICAgICAgICAgICAgICAgIHRoaXMuY29uZmlnS2V5cy5wdXNoKE9iamVjdC5rZXlzKGNvbmZpZy5wcm9wZXJ0aWVzKSk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICB9KTtcblxuICAgICAgICB0aGlzLmNvbmZpZ3VyYXRpb25TZXJ2aWNlLmdldEVudigpLnN1YnNjcmliZSgoY29uZmlndXJhdGlvbikgPT4ge1xuICAgICAgICAgICAgdGhpcy5hbGxDb25maWd1cmF0aW9uID0gY29uZmlndXJhdGlvbjtcbiAgICAgICAgfSk7XG4gICAgfVxufVxuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vfi90c2xpbnQtbG9hZGVyIS4vc3JjL21haW4vd2ViYXBwL2FwcC9hZG1pbi9jb25maWd1cmF0aW9uL2NvbmZpZ3VyYXRpb24uY29tcG9uZW50LnRzIiwiaW1wb3J0IHsgUm91dGUgfSBmcm9tICdAYW5ndWxhci9yb3V0ZXInO1xuXG5pbXBvcnQgeyBKaGlDb25maWd1cmF0aW9uQ29tcG9uZW50IH0gZnJvbSAnLi9jb25maWd1cmF0aW9uLmNvbXBvbmVudCc7XG5cbmV4cG9ydCBjb25zdCBjb25maWd1cmF0aW9uUm91dGU6IFJvdXRlID0ge1xuICAgIHBhdGg6ICdqaGktY29uZmlndXJhdGlvbicsXG4gICAgY29tcG9uZW50OiBKaGlDb25maWd1cmF0aW9uQ29tcG9uZW50LFxuICAgIGRhdGE6IHtcbiAgICAgICAgcGFnZVRpdGxlOiAnY29uZmlndXJhdGlvbi50aXRsZSdcbiAgICB9XG59O1xuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vfi90c2xpbnQtbG9hZGVyIS4vc3JjL21haW4vd2ViYXBwL2FwcC9hZG1pbi9jb25maWd1cmF0aW9uL2NvbmZpZ3VyYXRpb24ucm91dGUudHMiLCJpbXBvcnQgeyBJbmplY3RhYmxlIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBIdHRwLCBSZXNwb25zZSB9IGZyb20gJ0Bhbmd1bGFyL2h0dHAnO1xuaW1wb3J0IHsgT2JzZXJ2YWJsZSB9IGZyb20gJ3J4anMvUngnO1xuXG5ASW5qZWN0YWJsZSgpXG5leHBvcnQgY2xhc3MgSmhpQ29uZmlndXJhdGlvblNlcnZpY2Uge1xuXG4gICAgY29uc3RydWN0b3IocHJpdmF0ZSBodHRwOiBIdHRwKSB7XG4gICAgfVxuXG4gICAgZ2V0KCk6IE9ic2VydmFibGU8YW55PiB7XG4gICAgICAgIHJldHVybiB0aGlzLmh0dHAuZ2V0KCdtYW5hZ2VtZW50L2NvbmZpZ3Byb3BzJykubWFwKChyZXM6IFJlc3BvbnNlKSA9PiB7XG4gICAgICAgICAgICBjb25zdCBwcm9wZXJ0aWVzOiBhbnlbXSA9IFtdO1xuXG4gICAgICAgICAgICBjb25zdCBwcm9wZXJ0aWVzT2JqZWN0ID0gcmVzLmpzb24oKTtcblxuICAgICAgICAgICAgZm9yIChjb25zdCBrZXkgaW4gcHJvcGVydGllc09iamVjdCkge1xuICAgICAgICAgICAgICAgIGlmIChwcm9wZXJ0aWVzT2JqZWN0Lmhhc093blByb3BlcnR5KGtleSkpIHtcbiAgICAgICAgICAgICAgICAgICAgcHJvcGVydGllcy5wdXNoKHByb3BlcnRpZXNPYmplY3Rba2V5XSk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICByZXR1cm4gcHJvcGVydGllcy5zb3J0KChwcm9wZXJ0eUEsIHByb3BlcnR5QikgPT4ge1xuICAgICAgICAgICAgICAgIHJldHVybiAocHJvcGVydHlBLnByZWZpeCA9PT0gcHJvcGVydHlCLnByZWZpeCkgPyAwIDpcbiAgICAgICAgICAgICAgICAgICAgICAgKHByb3BlcnR5QS5wcmVmaXggPCBwcm9wZXJ0eUIucHJlZml4KSA/IC0xIDogMTtcbiAgICAgICAgICAgIH0pO1xuICAgICAgICB9KTtcbiAgICB9XG5cbiAgICBnZXRFbnYoKTogT2JzZXJ2YWJsZTxhbnk+IHtcbiAgICAgICAgcmV0dXJuIHRoaXMuaHR0cC5nZXQoJ21hbmFnZW1lbnQvZW52JykubWFwKChyZXM6IFJlc3BvbnNlKSA9PiB7XG4gICAgICAgICAgICBjb25zdCBwcm9wZXJ0aWVzOiBhbnkgPSB7fTtcblxuICAgICAgICAgICAgY29uc3QgcHJvcGVydGllc09iamVjdCA9IHJlcy5qc29uKCk7XG5cbiAgICAgICAgICAgIGZvciAoY29uc3Qga2V5IGluIHByb3BlcnRpZXNPYmplY3QpIHtcbiAgICAgICAgICAgICAgICBpZiAocHJvcGVydGllc09iamVjdC5oYXNPd25Qcm9wZXJ0eShrZXkpKSB7XG4gICAgICAgICAgICAgICAgICAgIGNvbnN0IHZhbHNPYmplY3QgPSBwcm9wZXJ0aWVzT2JqZWN0W2tleV07XG4gICAgICAgICAgICAgICAgICAgIGNvbnN0IHZhbHM6IGFueVtdID0gW107XG5cbiAgICAgICAgICAgICAgICAgICAgZm9yIChjb25zdCB2YWxLZXkgaW4gdmFsc09iamVjdCkge1xuICAgICAgICAgICAgICAgICAgICAgICAgaWYgKHZhbHNPYmplY3QuaGFzT3duUHJvcGVydHkodmFsS2V5KSkge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHZhbHMucHVzaCh7a2V5OiB2YWxLZXksIHZhbDogdmFsc09iamVjdFt2YWxLZXldfSk7XG4gICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgcHJvcGVydGllc1trZXldID0gdmFscztcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIHJldHVybiBwcm9wZXJ0aWVzO1xuICAgICAgICB9KTtcbiAgICB9XG59XG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9+L3RzbGludC1sb2FkZXIhLi9zcmMvbWFpbi93ZWJhcHAvYXBwL2FkbWluL2NvbmZpZ3VyYXRpb24vY29uZmlndXJhdGlvbi5zZXJ2aWNlLnRzIiwibW9kdWxlLmV4cG9ydHMgPSBcIjxpZnJhbWUgc3JjPVxcXCJzd2FnZ2VyLXVpL2luZGV4Lmh0bWxcXFwiIHdpZHRoPVxcXCIxMDAlXFxcIiBoZWlnaHQ9XFxcIjkwMFxcXCIgc2VhbWxlc3MgdGFyZ2V0PVxcXCJfdG9wXFxcIiB0aXRsZT1cXFwiU3dhZ2dlciBVSVxcXCIgY2xhc3M9XFxcImJvcmRlci0wXFxcIj48L2lmcmFtZT4gXCI7XG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9zcmMvbWFpbi93ZWJhcHAvYXBwL2FkbWluL2RvY3MvZG9jcy5jb21wb25lbnQuaHRtbFxuLy8gbW9kdWxlIGlkID0gLi9zcmMvbWFpbi93ZWJhcHAvYXBwL2FkbWluL2RvY3MvZG9jcy5jb21wb25lbnQuaHRtbFxuLy8gbW9kdWxlIGNodW5rcyA9IDAiLCJpbXBvcnQgeyBDb21wb25lbnQgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcblxuQENvbXBvbmVudCh7XG4gICAgc2VsZWN0b3I6ICdqaGktZG9jcycsXG4gICAgdGVtcGxhdGVVcmw6ICcuL2RvY3MuY29tcG9uZW50Lmh0bWwnXG59KVxuZXhwb3J0IGNsYXNzIEpoaURvY3NDb21wb25lbnQge1xuICAgIGNvbnN0cnVjdG9yKFxuICAgICkge1xuICAgIH1cbn1cblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL34vdHNsaW50LWxvYWRlciEuL3NyYy9tYWluL3dlYmFwcC9hcHAvYWRtaW4vZG9jcy9kb2NzLmNvbXBvbmVudC50cyIsImltcG9ydCB7IFJvdXRlIH0gZnJvbSAnQGFuZ3VsYXIvcm91dGVyJztcblxuaW1wb3J0IHsgSmhpRG9jc0NvbXBvbmVudCB9IGZyb20gJy4vZG9jcy5jb21wb25lbnQnO1xuXG5leHBvcnQgY29uc3QgZG9jc1JvdXRlOiBSb3V0ZSA9IHtcbiAgICBwYXRoOiAnZG9jcycsXG4gICAgY29tcG9uZW50OiBKaGlEb2NzQ29tcG9uZW50LFxuICAgIGRhdGE6IHtcbiAgICAgICAgcGFnZVRpdGxlOiAnZ2xvYmFsLm1lbnUuYWRtaW4uYXBpZG9jcydcbiAgICB9XG59O1xuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vfi90c2xpbnQtbG9hZGVyIS4vc3JjL21haW4vd2ViYXBwL2FwcC9hZG1pbi9kb2NzL2RvY3Mucm91dGUudHMiLCJtb2R1bGUuZXhwb3J0cyA9IFwiPGRpdiBjbGFzcz1cXFwibW9kYWwtaGVhZGVyXFxcIj4gPGg0IGNsYXNzPVxcXCJtb2RhbC10aXRsZVxcXCIgaWQ9XFxcInNob3dIZWFsdGhMYWJlbFxcXCI+IHt7J2hlYWx0aC5pbmRpY2F0b3IuJyArIGJhc2VOYW1lKGN1cnJlbnRIZWFsdGgubmFtZSkgfCB0cmFuc2xhdGV9fSB7e3N1YlN5c3RlbU5hbWUoY3VycmVudEhlYWx0aC5uYW1lKX19IDwvaDQ+IDxidXR0b24gYXJpYS1sYWJlbD1cXFwiQ2xvc2VcXFwiIGRhdGEtZGlzbWlzcz1cXFwibW9kYWxcXFwiIGNsYXNzPVxcXCJjbG9zZVxcXCIgdHlwZT1cXFwiYnV0dG9uXFxcIiAoY2xpY2spPVxcXCJhY3RpdmVNb2RhbC5kaXNtaXNzKCdjbG9zZWQnKVxcXCI+PHNwYW4gYXJpYS1oaWRkZW49XFxcInRydWVcXFwiPiZ0aW1lczs8L3NwYW4+IDwvYnV0dG9uPiA8L2Rpdj4gPGRpdiBjbGFzcz1cXFwibW9kYWwtYm9keSBwYWRcXFwiPiA8ZGl2ICpuZ0lmPVxcXCJjdXJyZW50SGVhbHRoLmRldGFpbHNcXFwiPiA8aDUgamhpVHJhbnNsYXRlPVxcXCJoZWFsdGguZGV0YWlscy5wcm9wZXJ0aWVzXFxcIj5Qcm9wZXJ0aWVzPC9oNT4gPGRpdiBjbGFzcz1cXFwidGFibGUtcmVzcG9uc2l2ZVxcXCI+IDx0YWJsZSBjbGFzcz1cXFwidGFibGUgdGFibGUtc3RyaXBlZFxcXCI+IDx0aGVhZD4gPHRyPiA8dGggY2xhc3M9XFxcInRleHQtbGVmdFxcXCIgamhpVHJhbnNsYXRlPVxcXCJoZWFsdGguZGV0YWlscy5uYW1lXFxcIj5OYW1lPC90aD4gPHRoIGNsYXNzPVxcXCJ0ZXh0LWxlZnRcXFwiIGpoaVRyYW5zbGF0ZT1cXFwiaGVhbHRoLmRldGFpbHMudmFsdWVcXFwiPlZhbHVlPC90aD4gPC90cj4gPC90aGVhZD4gPHRib2R5PiA8dHIgKm5nRm9yPVxcXCJsZXQgZW50cnkgb2YgY3VycmVudEhlYWx0aC5kZXRhaWxzIHwga2V5c1xcXCI+IDx0ZCBjbGFzcz1cXFwidGV4dC1sZWZ0XFxcIj57e2VudHJ5LmtleX19PC90ZD4gPHRkIGNsYXNzPVxcXCJ0ZXh0LWxlZnRcXFwiPnt7cmVhZGFibGVWYWx1ZShlbnRyeS52YWx1ZSl9fTwvdGQ+IDwvdHI+IDwvdGJvZHk+IDwvdGFibGU+IDwvZGl2PiA8L2Rpdj4gPGRpdiAqbmdJZj1cXFwiY3VycmVudEhlYWx0aC5lcnJvclxcXCI+IDxoNCBqaGlUcmFuc2xhdGU9XFxcImhlYWx0aC5kZXRhaWxzLmVycm9yXFxcIj5FcnJvcjwvaDQ+IDxwcmU+e3tjdXJyZW50SGVhbHRoLmVycm9yfX08L3ByZT4gPC9kaXY+IDwvZGl2PiA8ZGl2IGNsYXNzPVxcXCJtb2RhbC1mb290ZXJcXFwiPiA8YnV0dG9uIGRhdGEtZGlzbWlzcz1cXFwibW9kYWxcXFwiIGNsYXNzPVxcXCJidG4gYnRuLXNlY29uZGFyeSBmbG9hdC1sZWZ0XFxcIiB0eXBlPVxcXCJidXR0b25cXFwiIChjbGljayk9XFxcImFjdGl2ZU1vZGFsLmRpc21pc3MoJ2Nsb3NlZCcpXFxcIj5Eb25lPC9idXR0b24+IDwvZGl2PiBcIjtcblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL3NyYy9tYWluL3dlYmFwcC9hcHAvYWRtaW4vaGVhbHRoL2hlYWx0aC1tb2RhbC5jb21wb25lbnQuaHRtbFxuLy8gbW9kdWxlIGlkID0gLi9zcmMvbWFpbi93ZWJhcHAvYXBwL2FkbWluL2hlYWx0aC9oZWFsdGgtbW9kYWwuY29tcG9uZW50Lmh0bWxcbi8vIG1vZHVsZSBjaHVua3MgPSAwIiwiaW1wb3J0IHsgQ29tcG9uZW50IH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBOZ2JBY3RpdmVNb2RhbCB9IGZyb20gJ0BuZy1ib290c3RyYXAvbmctYm9vdHN0cmFwJztcblxuaW1wb3J0IHsgSmhpSGVhbHRoU2VydmljZSB9IGZyb20gJy4vaGVhbHRoLnNlcnZpY2UnO1xuXG5AQ29tcG9uZW50KHtcbiAgICBzZWxlY3RvcjogJ2poaS1oZWFsdGgtbW9kYWwnLFxuICAgIHRlbXBsYXRlVXJsOiAnLi9oZWFsdGgtbW9kYWwuY29tcG9uZW50Lmh0bWwnXG59KVxuZXhwb3J0IGNsYXNzIEpoaUhlYWx0aE1vZGFsQ29tcG9uZW50IHtcblxuICAgIGN1cnJlbnRIZWFsdGg6IGFueTtcblxuICAgIGNvbnN0cnVjdG9yKHByaXZhdGUgaGVhbHRoU2VydmljZTogSmhpSGVhbHRoU2VydmljZSwgcHVibGljIGFjdGl2ZU1vZGFsOiBOZ2JBY3RpdmVNb2RhbCkge31cblxuICAgIGJhc2VOYW1lKG5hbWUpIHtcbiAgICAgICAgcmV0dXJuIHRoaXMuaGVhbHRoU2VydmljZS5nZXRCYXNlTmFtZShuYW1lKTtcbiAgICB9XG5cbiAgICBzdWJTeXN0ZW1OYW1lKG5hbWUpIHtcbiAgICAgICAgcmV0dXJuIHRoaXMuaGVhbHRoU2VydmljZS5nZXRTdWJTeXN0ZW1OYW1lKG5hbWUpO1xuICAgIH1cblxuICAgIHJlYWRhYmxlVmFsdWUodmFsdWU6IG51bWJlcikge1xuICAgICAgICBpZiAodGhpcy5jdXJyZW50SGVhbHRoLm5hbWUgIT09ICdkaXNrU3BhY2UnKSB7XG4gICAgICAgICAgICByZXR1cm4gdmFsdWUudG9TdHJpbmcoKTtcbiAgICAgICAgfVxuXG4gICAgICAgIC8vIFNob3VsZCBkaXNwbGF5IHN0b3JhZ2Ugc3BhY2UgaW4gYW4gaHVtYW4gcmVhZGFibGUgdW5pdFxuICAgICAgICBjb25zdCB2YWwgPSB2YWx1ZSAvIDEwNzM3NDE4MjQ7XG4gICAgICAgIGlmICh2YWwgPiAxKSB7IC8vIFZhbHVlXG4gICAgICAgICAgICByZXR1cm4gdmFsLnRvRml4ZWQoMikgKyAnIEdCJztcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIHJldHVybiAodmFsdWUgLyAxMDQ4NTc2KS50b0ZpeGVkKDIpICsgJyBNQic7XG4gICAgICAgIH1cbiAgICB9XG59XG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9+L3RzbGludC1sb2FkZXIhLi9zcmMvbWFpbi93ZWJhcHAvYXBwL2FkbWluL2hlYWx0aC9oZWFsdGgtbW9kYWwuY29tcG9uZW50LnRzIiwibW9kdWxlLmV4cG9ydHMgPSBcIjxkaXY+IDxoMj4gPHNwYW4gamhpVHJhbnNsYXRlPVxcXCJoZWFsdGgudGl0bGVcXFwiPkhlYWx0aCBDaGVja3M8L3NwYW4+IDxidXR0b24gY2xhc3M9XFxcImJ0biBidG4tcHJpbWFyeSBmbG9hdC1yaWdodFxcXCIgKGNsaWNrKT1cXFwicmVmcmVzaCgpXFxcIj4gPHNwYW4gY2xhc3M9XFxcImZhIGZhLXJlZnJlc2hcXFwiPjwvc3Bhbj4gPHNwYW4gamhpVHJhbnNsYXRlPVxcXCJoZWFsdGgucmVmcmVzaC5idXR0b25cXFwiPlJlZnJlc2g8L3NwYW4+IDwvYnV0dG9uPiA8L2gyPiA8ZGl2IGNsYXNzPVxcXCJ0YWJsZS1yZXNwb25zaXZlXFxcIj4gPHRhYmxlIGlkPVxcXCJoZWFsdGhDaGVja1xcXCIgY2xhc3M9XFxcInRhYmxlIHRhYmxlLXN0cmlwZWRcXFwiPiA8dGhlYWQ+IDx0cj4gPHRoIGpoaVRyYW5zbGF0ZT1cXFwiaGVhbHRoLnRhYmxlLnNlcnZpY2VcXFwiPlNlcnZpY2UgTmFtZTwvdGg+IDx0aCBjbGFzcz1cXFwidGV4dC1jZW50ZXJcXFwiIGpoaVRyYW5zbGF0ZT1cXFwiaGVhbHRoLnRhYmxlLnN0YXR1c1xcXCI+U3RhdHVzPC90aD4gPHRoIGNsYXNzPVxcXCJ0ZXh0LWNlbnRlclxcXCIgamhpVHJhbnNsYXRlPVxcXCJoZWFsdGguZGV0YWlscy5kZXRhaWxzXFxcIj5EZXRhaWxzPC90aD4gPC90cj4gPC90aGVhZD4gPHRib2R5PiA8dHIgKm5nRm9yPVxcXCJsZXQgaGVhbHRoIG9mIGhlYWx0aERhdGFcXFwiPiA8dGQ+e3snaGVhbHRoLmluZGljYXRvci4nICsgYmFzZU5hbWUoaGVhbHRoLm5hbWUpIHwgdHJhbnNsYXRlfX0ge3tzdWJTeXN0ZW1OYW1lKGhlYWx0aC5uYW1lKX19PC90ZD4gPHRkIGNsYXNzPVxcXCJ0ZXh0LWNlbnRlclxcXCI+IDxzcGFuIGNsYXNzPVxcXCJiYWRnZVxcXCIgW25nQ2xhc3NdPVxcXCJnZXRCYWRnZUNsYXNzKGhlYWx0aC5zdGF0dXMpXFxcIiBqaGlUcmFuc2xhdGU9XFxcInt7J2hlYWx0aC5zdGF0dXMuJyArIGhlYWx0aC5zdGF0dXN9fVxcXCI+IHt7aGVhbHRoLnN0YXR1c319IDwvc3Bhbj4gPC90ZD4gPHRkIGNsYXNzPVxcXCJ0ZXh0LWNlbnRlclxcXCI+IDxhIGNsYXNzPVxcXCJoYW5kXFxcIiAoY2xpY2spPVxcXCJzaG93SGVhbHRoKGhlYWx0aClcXFwiICpuZ0lmPVxcXCJoZWFsdGguZGV0YWlscyB8fCBoZWFsdGguZXJyb3JcXFwiPiA8aSBjbGFzcz1cXFwiZmEgZmEtZXllXFxcIj48L2k+IDwvYT4gPC90ZD4gPC90cj4gPC90Ym9keT4gPC90YWJsZT4gPC9kaXY+IDwvZGl2PiBcIjtcblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL3NyYy9tYWluL3dlYmFwcC9hcHAvYWRtaW4vaGVhbHRoL2hlYWx0aC5jb21wb25lbnQuaHRtbFxuLy8gbW9kdWxlIGlkID0gLi9zcmMvbWFpbi93ZWJhcHAvYXBwL2FkbWluL2hlYWx0aC9oZWFsdGguY29tcG9uZW50Lmh0bWxcbi8vIG1vZHVsZSBjaHVua3MgPSAwIiwiaW1wb3J0IHsgQ29tcG9uZW50LCBPbkluaXQgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IE5nYk1vZGFsIH0gZnJvbSAnQG5nLWJvb3RzdHJhcC9uZy1ib290c3RyYXAnO1xuXG5pbXBvcnQgeyBKaGlIZWFsdGhTZXJ2aWNlIH0gZnJvbSAnLi9oZWFsdGguc2VydmljZSc7XG5pbXBvcnQgeyBKaGlIZWFsdGhNb2RhbENvbXBvbmVudCB9IGZyb20gJy4vaGVhbHRoLW1vZGFsLmNvbXBvbmVudCc7XG5cbkBDb21wb25lbnQoe1xuICAgIHNlbGVjdG9yOiAnamhpLWhlYWx0aCcsXG4gICAgdGVtcGxhdGVVcmw6ICcuL2hlYWx0aC5jb21wb25lbnQuaHRtbCdcbn0pXG5leHBvcnQgY2xhc3MgSmhpSGVhbHRoQ2hlY2tDb21wb25lbnQgaW1wbGVtZW50cyBPbkluaXQge1xuICAgIGhlYWx0aERhdGE6IGFueTtcbiAgICB1cGRhdGluZ0hlYWx0aDogYm9vbGVhbjtcblxuICAgIGNvbnN0cnVjdG9yKFxuICAgICAgICBwcml2YXRlIG1vZGFsU2VydmljZTogTmdiTW9kYWwsXG4gICAgICAgIHByaXZhdGUgaGVhbHRoU2VydmljZTogSmhpSGVhbHRoU2VydmljZVxuICAgICkge1xuXG4gICAgfVxuXG4gICAgbmdPbkluaXQoKSB7XG4gICAgICAgIHRoaXMucmVmcmVzaCgpO1xuICAgIH1cblxuICAgIGJhc2VOYW1lKG5hbWU6IHN0cmluZykge1xuICAgICAgICByZXR1cm4gdGhpcy5oZWFsdGhTZXJ2aWNlLmdldEJhc2VOYW1lKG5hbWUpO1xuICAgIH1cblxuICAgIGdldEJhZGdlQ2xhc3Moc3RhdHVzU3RhdGUpIHtcbiAgICAgICAgaWYgKHN0YXR1c1N0YXRlID09PSAnVVAnKSB7XG4gICAgICAgICAgICByZXR1cm4gJ2JhZGdlLXN1Y2Nlc3MnO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgcmV0dXJuICdiYWRnZS1kYW5nZXInO1xuICAgICAgICB9XG4gICAgfVxuXG4gICAgcmVmcmVzaCgpIHtcbiAgICAgICAgdGhpcy51cGRhdGluZ0hlYWx0aCA9IHRydWU7XG5cbiAgICAgICAgdGhpcy5oZWFsdGhTZXJ2aWNlLmNoZWNrSGVhbHRoKCkuc3Vic2NyaWJlKChoZWFsdGgpID0+IHtcbiAgICAgICAgICAgIHRoaXMuaGVhbHRoRGF0YSA9IHRoaXMuaGVhbHRoU2VydmljZS50cmFuc2Zvcm1IZWFsdGhEYXRhKGhlYWx0aCk7XG4gICAgICAgICAgICB0aGlzLnVwZGF0aW5nSGVhbHRoID0gZmFsc2U7XG4gICAgICAgIH0sIChlcnJvcikgPT4ge1xuICAgICAgICAgICAgaWYgKGVycm9yLnN0YXR1cyA9PT0gNTAzKSB7XG4gICAgICAgICAgICAgICAgdGhpcy5oZWFsdGhEYXRhID0gdGhpcy5oZWFsdGhTZXJ2aWNlLnRyYW5zZm9ybUhlYWx0aERhdGEoZXJyb3IuanNvbigpKTtcbiAgICAgICAgICAgICAgICB0aGlzLnVwZGF0aW5nSGVhbHRoID0gZmFsc2U7XG4gICAgICAgICAgICB9XG4gICAgICAgIH0pO1xuICAgIH1cblxuICAgIHNob3dIZWFsdGgoaGVhbHRoOiBhbnkpIHtcbiAgICAgICAgY29uc3QgbW9kYWxSZWYgID0gdGhpcy5tb2RhbFNlcnZpY2Uub3BlbihKaGlIZWFsdGhNb2RhbENvbXBvbmVudCk7XG4gICAgICAgIG1vZGFsUmVmLmNvbXBvbmVudEluc3RhbmNlLmN1cnJlbnRIZWFsdGggPSBoZWFsdGg7XG4gICAgICAgIG1vZGFsUmVmLnJlc3VsdC50aGVuKChyZXN1bHQpID0+IHtcbiAgICAgICAgICAgIC8vIExlZnQgYmxhbmsgaW50ZW50aW9uYWxseSwgbm90aGluZyB0byBkbyBoZXJlXG4gICAgICAgIH0sIChyZWFzb24pID0+IHtcbiAgICAgICAgICAgIC8vIExlZnQgYmxhbmsgaW50ZW50aW9uYWxseSwgbm90aGluZyB0byBkbyBoZXJlXG4gICAgICAgIH0pO1xuICAgIH1cblxuICAgIHN1YlN5c3RlbU5hbWUobmFtZTogc3RyaW5nKSB7XG4gICAgICAgIHJldHVybiB0aGlzLmhlYWx0aFNlcnZpY2UuZ2V0U3ViU3lzdGVtTmFtZShuYW1lKTtcbiAgICB9XG5cbn1cblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL34vdHNsaW50LWxvYWRlciEuL3NyYy9tYWluL3dlYmFwcC9hcHAvYWRtaW4vaGVhbHRoL2hlYWx0aC5jb21wb25lbnQudHMiLCJpbXBvcnQgeyBSb3V0ZSB9IGZyb20gJ0Bhbmd1bGFyL3JvdXRlcic7XG5cbmltcG9ydCB7IEpoaUhlYWx0aENoZWNrQ29tcG9uZW50IH0gZnJvbSAnLi9oZWFsdGguY29tcG9uZW50JztcblxuZXhwb3J0IGNvbnN0IGhlYWx0aFJvdXRlOiBSb3V0ZSA9IHtcbiAgICBwYXRoOiAnamhpLWhlYWx0aCcsXG4gICAgY29tcG9uZW50OiBKaGlIZWFsdGhDaGVja0NvbXBvbmVudCxcbiAgICBkYXRhOiB7XG4gICAgICAgIHBhZ2VUaXRsZTogJ2hlYWx0aC50aXRsZSdcbiAgICB9XG59O1xuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vfi90c2xpbnQtbG9hZGVyIS4vc3JjL21haW4vd2ViYXBwL2FwcC9hZG1pbi9oZWFsdGgvaGVhbHRoLnJvdXRlLnRzIiwiaW1wb3J0IHsgSW5qZWN0YWJsZSB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgSHR0cCwgUmVzcG9uc2UgfSBmcm9tICdAYW5ndWxhci9odHRwJztcbmltcG9ydCB7IE9ic2VydmFibGUgfSBmcm9tICdyeGpzL1J4JztcblxuQEluamVjdGFibGUoKVxuZXhwb3J0IGNsYXNzIEpoaUhlYWx0aFNlcnZpY2Uge1xuXG4gICAgc2VwYXJhdG9yOiBzdHJpbmc7XG5cbiAgICBjb25zdHJ1Y3Rvcihwcml2YXRlIGh0dHA6IEh0dHApIHtcbiAgICAgICAgdGhpcy5zZXBhcmF0b3IgPSAnLic7XG4gICAgfVxuXG4gICAgY2hlY2tIZWFsdGgoKTogT2JzZXJ2YWJsZTxhbnk+IHtcbiAgICAgICAgcmV0dXJuIHRoaXMuaHR0cC5nZXQoJ21hbmFnZW1lbnQvaGVhbHRoJykubWFwKChyZXM6IFJlc3BvbnNlKSA9PiByZXMuanNvbigpKTtcbiAgICB9XG5cbiAgICB0cmFuc2Zvcm1IZWFsdGhEYXRhKGRhdGEpOiBhbnkge1xuICAgICAgICBjb25zdCByZXNwb25zZSA9IFtdO1xuICAgICAgICB0aGlzLmZsYXR0ZW5IZWFsdGhEYXRhKHJlc3BvbnNlLCBudWxsLCBkYXRhKTtcbiAgICAgICAgcmV0dXJuIHJlc3BvbnNlO1xuICAgIH1cblxuICAgIGdldEJhc2VOYW1lKG5hbWUpOiBzdHJpbmcge1xuICAgICAgICBpZiAobmFtZSkge1xuICAgICAgICAgICAgY29uc3Qgc3BsaXQgPSBuYW1lLnNwbGl0KCcuJyk7XG4gICAgICAgICAgICByZXR1cm4gc3BsaXRbMF07XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICBnZXRTdWJTeXN0ZW1OYW1lKG5hbWUpOiBzdHJpbmcge1xuICAgICAgICBpZiAobmFtZSkge1xuICAgICAgICAgICAgY29uc3Qgc3BsaXQgPSBuYW1lLnNwbGl0KCcuJyk7XG4gICAgICAgICAgICBzcGxpdC5zcGxpY2UoMCwgMSk7XG4gICAgICAgICAgICBjb25zdCByZW1haW5kZXIgPSBzcGxpdC5qb2luKCcuJyk7XG4gICAgICAgICAgICByZXR1cm4gcmVtYWluZGVyID8gJyAtICcgKyByZW1haW5kZXIgOiAnJztcbiAgICAgICAgfVxuICAgIH1cblxuICAgIC8qIHByaXZhdGUgbWV0aG9kcyAqL1xuICAgIHByaXZhdGUgYWRkSGVhbHRoT2JqZWN0KHJlc3VsdCwgaXNMZWFmLCBoZWFsdGhPYmplY3QsIG5hbWUpOiBhbnkge1xuICAgICAgICBjb25zdCBoZWFsdGhEYXRhOiBhbnkgPSB7XG4gICAgICAgICAgICBuYW1lXG4gICAgICAgIH07XG5cbiAgICAgICAgY29uc3QgZGV0YWlscyA9IHt9O1xuICAgICAgICBsZXQgaGFzRGV0YWlscyA9IGZhbHNlO1xuXG4gICAgICAgIGZvciAoY29uc3Qga2V5IGluIGhlYWx0aE9iamVjdCkge1xuICAgICAgICAgICAgaWYgKGhlYWx0aE9iamVjdC5oYXNPd25Qcm9wZXJ0eShrZXkpKSB7XG4gICAgICAgICAgICAgICAgY29uc3QgdmFsdWUgPSBoZWFsdGhPYmplY3Rba2V5XTtcbiAgICAgICAgICAgICAgICBpZiAoa2V5ID09PSAnc3RhdHVzJyB8fCBrZXkgPT09ICdlcnJvcicpIHtcbiAgICAgICAgICAgICAgICAgICAgaGVhbHRoRGF0YVtrZXldID0gdmFsdWU7XG4gICAgICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICAgICAgaWYgKCF0aGlzLmlzSGVhbHRoT2JqZWN0KHZhbHVlKSkge1xuICAgICAgICAgICAgICAgICAgICAgICAgZGV0YWlsc1trZXldID0gdmFsdWU7XG4gICAgICAgICAgICAgICAgICAgICAgICBoYXNEZXRhaWxzID0gdHJ1ZTtcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuXG4gICAgICAgIC8vIEFkZCB0aGUgZGV0YWlsc1xuICAgICAgICBpZiAoaGFzRGV0YWlscykge1xuICAgICAgICAgICAgaGVhbHRoRGF0YS5kZXRhaWxzID0gZGV0YWlscztcbiAgICAgICAgfVxuXG4gICAgICAgIC8vIE9ubHkgYWRkIG5vZGVzIGlmIHRoZXkgcHJvdmlkZSBhZGRpdGlvbmFsIGluZm9ybWF0aW9uXG4gICAgICAgIGlmIChpc0xlYWYgfHwgaGFzRGV0YWlscyB8fCBoZWFsdGhEYXRhLmVycm9yKSB7XG4gICAgICAgICAgICByZXN1bHQucHVzaChoZWFsdGhEYXRhKTtcbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gaGVhbHRoRGF0YTtcbiAgICB9XG5cbiAgICBwcml2YXRlIGZsYXR0ZW5IZWFsdGhEYXRhKHJlc3VsdCwgcGF0aCwgZGF0YSk6IGFueSB7XG4gICAgICAgIGZvciAoY29uc3Qga2V5IGluIGRhdGEpIHtcbiAgICAgICAgICAgIGlmIChkYXRhLmhhc093blByb3BlcnR5KGtleSkpIHtcbiAgICAgICAgICAgICAgICBjb25zdCB2YWx1ZSA9IGRhdGFba2V5XTtcbiAgICAgICAgICAgICAgICBpZiAodGhpcy5pc0hlYWx0aE9iamVjdCh2YWx1ZSkpIHtcbiAgICAgICAgICAgICAgICAgICAgaWYgKHRoaXMuaGFzU3ViU3lzdGVtKHZhbHVlKSkge1xuICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5hZGRIZWFsdGhPYmplY3QocmVzdWx0LCBmYWxzZSwgdmFsdWUsIHRoaXMuZ2V0TW9kdWxlTmFtZShwYXRoLCBrZXkpKTtcbiAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMuZmxhdHRlbkhlYWx0aERhdGEocmVzdWx0LCB0aGlzLmdldE1vZHVsZU5hbWUocGF0aCwga2V5KSwgdmFsdWUpO1xuICAgICAgICAgICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5hZGRIZWFsdGhPYmplY3QocmVzdWx0LCB0cnVlLCB2YWx1ZSwgdGhpcy5nZXRNb2R1bGVOYW1lKHBhdGgsIGtleSkpO1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICAgIHJldHVybiByZXN1bHQ7XG4gICAgfVxuXG4gICAgcHJpdmF0ZSBnZXRNb2R1bGVOYW1lKHBhdGgsIG5hbWUpOiBzdHJpbmcge1xuICAgICAgICBsZXQgcmVzdWx0O1xuICAgICAgICBpZiAocGF0aCAmJiBuYW1lKSB7XG4gICAgICAgICAgICByZXN1bHQgPSBwYXRoICsgdGhpcy5zZXBhcmF0b3IgKyBuYW1lO1xuICAgICAgICB9ICBlbHNlIGlmIChwYXRoKSB7XG4gICAgICAgICAgICByZXN1bHQgPSBwYXRoO1xuICAgICAgICB9IGVsc2UgaWYgKG5hbWUpIHtcbiAgICAgICAgICAgIHJlc3VsdCA9IG5hbWU7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICByZXN1bHQgPSAnJztcbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gcmVzdWx0O1xuICAgIH1cblxuICAgIHByaXZhdGUgaGFzU3ViU3lzdGVtKGhlYWx0aE9iamVjdCk6IGJvb2xlYW4ge1xuICAgICAgICBsZXQgcmVzdWx0ID0gZmFsc2U7XG5cbiAgICAgICAgZm9yIChjb25zdCBrZXkgaW4gaGVhbHRoT2JqZWN0KSB7XG4gICAgICAgICAgICBpZiAoaGVhbHRoT2JqZWN0Lmhhc093blByb3BlcnR5KGtleSkpIHtcbiAgICAgICAgICAgICAgICBjb25zdCB2YWx1ZSA9IGhlYWx0aE9iamVjdFtrZXldO1xuICAgICAgICAgICAgICAgIGlmICh2YWx1ZSAmJiB2YWx1ZS5zdGF0dXMpIHtcbiAgICAgICAgICAgICAgICAgICAgcmVzdWx0ID0gdHJ1ZTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIHJlc3VsdDtcbiAgICB9XG5cbiAgICBwcml2YXRlIGlzSGVhbHRoT2JqZWN0KGhlYWx0aE9iamVjdCk6IGJvb2xlYW4ge1xuICAgICAgICBsZXQgcmVzdWx0ID0gZmFsc2U7XG5cbiAgICAgICAgZm9yIChjb25zdCBrZXkgaW4gaGVhbHRoT2JqZWN0KSB7XG4gICAgICAgICAgICBpZiAoaGVhbHRoT2JqZWN0Lmhhc093blByb3BlcnR5KGtleSkpIHtcbiAgICAgICAgICAgICAgICBpZiAoa2V5ID09PSAnc3RhdHVzJykge1xuICAgICAgICAgICAgICAgICAgICByZXN1bHQgPSB0cnVlO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gcmVzdWx0O1xuICAgIH1cbn1cblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL34vdHNsaW50LWxvYWRlciEuL3NyYy9tYWluL3dlYmFwcC9hcHAvYWRtaW4vaGVhbHRoL2hlYWx0aC5zZXJ2aWNlLnRzIiwiZXhwb3J0ICogZnJvbSAnLi9hdWRpdHMvYXVkaXRzLmNvbXBvbmVudCc7XG5leHBvcnQgKiBmcm9tICcuL2F1ZGl0cy9hdWRpdHMuc2VydmljZSc7XG5leHBvcnQgKiBmcm9tICcuL2F1ZGl0cy9hdWRpdHMucm91dGUnO1xuZXhwb3J0ICogZnJvbSAnLi9hdWRpdHMvYXVkaXQubW9kZWwnO1xuZXhwb3J0ICogZnJvbSAnLi9hdWRpdHMvYXVkaXQtZGF0YS5tb2RlbCc7XG5leHBvcnQgKiBmcm9tICcuL2NvbmZpZ3VyYXRpb24vY29uZmlndXJhdGlvbi5jb21wb25lbnQnO1xuZXhwb3J0ICogZnJvbSAnLi9jb25maWd1cmF0aW9uL2NvbmZpZ3VyYXRpb24uc2VydmljZSc7XG5leHBvcnQgKiBmcm9tICcuL2NvbmZpZ3VyYXRpb24vY29uZmlndXJhdGlvbi5yb3V0ZSc7XG5leHBvcnQgKiBmcm9tICcuL2RvY3MvZG9jcy5jb21wb25lbnQnO1xuZXhwb3J0ICogZnJvbSAnLi9kb2NzL2RvY3Mucm91dGUnO1xuZXhwb3J0ICogZnJvbSAnLi9oZWFsdGgvaGVhbHRoLmNvbXBvbmVudCc7XG5leHBvcnQgKiBmcm9tICcuL2hlYWx0aC9oZWFsdGgtbW9kYWwuY29tcG9uZW50JztcbmV4cG9ydCAqIGZyb20gJy4vaGVhbHRoL2hlYWx0aC5zZXJ2aWNlJztcbmV4cG9ydCAqIGZyb20gJy4vaGVhbHRoL2hlYWx0aC5yb3V0ZSc7XG5leHBvcnQgKiBmcm9tICcuL2xvZ3MvbG9ncy5jb21wb25lbnQnO1xuZXhwb3J0ICogZnJvbSAnLi9sb2dzL2xvZ3Muc2VydmljZSc7XG5leHBvcnQgKiBmcm9tICcuL2xvZ3MvbG9ncy5yb3V0ZSc7XG5leHBvcnQgKiBmcm9tICcuL2xvZ3MvbG9nLm1vZGVsJztcbmV4cG9ydCAqIGZyb20gJy4vdHJhY2tlci90cmFja2VyLmNvbXBvbmVudCc7XG5leHBvcnQgKiBmcm9tICcuL3RyYWNrZXIvdHJhY2tlci5yb3V0ZSc7XG5leHBvcnQgKiBmcm9tICcuL21ldHJpY3MvbWV0cmljcy5jb21wb25lbnQnO1xuZXhwb3J0ICogZnJvbSAnLi9tZXRyaWNzL21ldHJpY3MtbW9kYWwuY29tcG9uZW50JztcbmV4cG9ydCAqIGZyb20gJy4vbWV0cmljcy9tZXRyaWNzLnNlcnZpY2UnO1xuZXhwb3J0ICogZnJvbSAnLi9tZXRyaWNzL21ldHJpY3Mucm91dGUnO1xuZXhwb3J0ICogZnJvbSAnLi91c2VyLW1hbmFnZW1lbnQvdXNlci1tYW5hZ2VtZW50LWRpYWxvZy5jb21wb25lbnQnO1xuZXhwb3J0ICogZnJvbSAnLi91c2VyLW1hbmFnZW1lbnQvdXNlci1tYW5hZ2VtZW50LWRlbGV0ZS1kaWFsb2cuY29tcG9uZW50JztcbmV4cG9ydCAqIGZyb20gJy4vdXNlci1tYW5hZ2VtZW50L3VzZXItbWFuYWdlbWVudC1kZXRhaWwuY29tcG9uZW50JztcbmV4cG9ydCAqIGZyb20gJy4vdXNlci1tYW5hZ2VtZW50L3VzZXItbWFuYWdlbWVudC5jb21wb25lbnQnO1xuZXhwb3J0ICogZnJvbSAnLi91c2VyLW1hbmFnZW1lbnQvdXNlci1tYW5hZ2VtZW50LnJvdXRlJztcbmV4cG9ydCAqIGZyb20gJy4vdXNlci1tYW5hZ2VtZW50L3VzZXItbW9kYWwuc2VydmljZSc7XG5leHBvcnQgKiBmcm9tICcuL2FkbWluLnJvdXRlJztcblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL34vdHNsaW50LWxvYWRlciEuL3NyYy9tYWluL3dlYmFwcC9hcHAvYWRtaW4vaW5kZXgudHMiLCJleHBvcnQgY2xhc3MgTG9nIHtcbiAgICBjb25zdHJ1Y3RvcihcbiAgICAgICAgcHVibGljIG5hbWU6IHN0cmluZyxcbiAgICAgICAgcHVibGljIGxldmVsOiBzdHJpbmdcbiAgICApIHsgfVxufVxuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vfi90c2xpbnQtbG9hZGVyIS4vc3JjL21haW4vd2ViYXBwL2FwcC9hZG1pbi9sb2dzL2xvZy5tb2RlbC50cyIsIm1vZHVsZS5leHBvcnRzID0gXCI8ZGl2IGNsYXNzPVxcXCJ0YWJsZS1yZXNwb25zaXZlXFxcIiAqbmdJZj1cXFwibG9nZ2Vyc1xcXCI+IDxoMiBqaGlUcmFuc2xhdGU9XFxcImxvZ3MudGl0bGVcXFwiPkxvZ3M8L2gyPiA8cCBqaGlUcmFuc2xhdGU9XFxcImxvZ3MubmJsb2dnZXJzXFxcIiB0cmFuc2xhdGVWYWx1ZXM9XFxcInt0b3RhbDogJ3t7IGxvZ2dlcnMubGVuZ3RoIH19J31cXFwiPlRoZXJlIGFyZSB7eyBsb2dnZXJzLmxlbmd0aCB9fSBsb2dnZXJzLjwvcD4gPHNwYW4gamhpVHJhbnNsYXRlPVxcXCJsb2dzLmZpbHRlclxcXCI+RmlsdGVyPC9zcGFuPiA8aW5wdXQgdHlwZT1cXFwidGV4dFxcXCIgWyhuZ01vZGVsKV09XFxcImZpbHRlclxcXCIgY2xhc3M9XFxcImZvcm0tY29udHJvbFxcXCI+IDx0YWJsZSBjbGFzcz1cXFwidGFibGUgdGFibGUtY29uZGVuc2VkIHRhYmxlLXN0cmlwZWQgdGFibGUtYm9yZGVyZWRcXFwiPiA8dGhlYWQ+IDx0ciB0aXRsZT1cXFwiY2xpY2sgdG8gb3JkZXJcXFwiPiA8dGggKGNsaWNrKT1cXFwib3JkZXJQcm9wID0gJ25hbWUnOyByZXZlcnNlPSFyZXZlcnNlXFxcIj48c3BhbiBqaGlUcmFuc2xhdGU9XFxcImxvZ3MudGFibGUubmFtZVxcXCI+TmFtZTwvc3Bhbj48L3RoPiA8dGggKGNsaWNrKT1cXFwib3JkZXJQcm9wID0gJ2xldmVsJzsgcmV2ZXJzZT0hcmV2ZXJzZVxcXCI+PHNwYW4gamhpVHJhbnNsYXRlPVxcXCJsb2dzLnRhYmxlLmxldmVsXFxcIj5MZXZlbDwvc3Bhbj48L3RoPiA8L3RyPiA8L3RoZWFkPiA8dHIgKm5nRm9yPVxcXCJsZXQgbG9nZ2VyIG9mIChsb2dnZXJzIHwgcHVyZUZpbHRlcjpmaWx0ZXI6J25hbWUnIHwgb3JkZXJCeTpvcmRlclByb3A6cmV2ZXJzZSlcXFwiPiA8dGQ+PHNtYWxsPnt7bG9nZ2VyLm5hbWUgfCBzbGljZTowOjE0MH19PC9zbWFsbD48L3RkPiA8dGQ+IDxidXR0b24gKGNsaWNrKT1cXFwiY2hhbmdlTGV2ZWwobG9nZ2VyLm5hbWUsICdUUkFDRScpXFxcIiBbbmdDbGFzc109XFxcIihsb2dnZXIubGV2ZWw9PSdUUkFDRScpID8gJ2J0bi1kYW5nZXInIDogJ2J0bi1zZWNvbmRhcnknXFxcIiBjbGFzcz1cXFwiYnRuIGJ0bi1zbVxcXCI+VFJBQ0U8L2J1dHRvbj4gPGJ1dHRvbiAoY2xpY2spPVxcXCJjaGFuZ2VMZXZlbChsb2dnZXIubmFtZSwgJ0RFQlVHJylcXFwiIFtuZ0NsYXNzXT1cXFwiKGxvZ2dlci5sZXZlbD09J0RFQlVHJykgPyAnYnRuLXdhcm5pbmcnIDogJ2J0bi1zZWNvbmRhcnknXFxcIiBjbGFzcz1cXFwiYnRuIGJ0bi1zbVxcXCI+REVCVUc8L2J1dHRvbj4gPGJ1dHRvbiAoY2xpY2spPVxcXCJjaGFuZ2VMZXZlbChsb2dnZXIubmFtZSwgJ0lORk8nKVxcXCIgW25nQ2xhc3NdPVxcXCIobG9nZ2VyLmxldmVsPT0nSU5GTycpID8gJ2J0bi1pbmZvJyA6ICdidG4tc2Vjb25kYXJ5J1xcXCIgY2xhc3M9XFxcImJ0biBidG4tc21cXFwiPklORk88L2J1dHRvbj4gPGJ1dHRvbiAoY2xpY2spPVxcXCJjaGFuZ2VMZXZlbChsb2dnZXIubmFtZSwgJ1dBUk4nKVxcXCIgW25nQ2xhc3NdPVxcXCIobG9nZ2VyLmxldmVsPT0nV0FSTicpID8gJ2J0bi1zdWNjZXNzJyA6ICdidG4tc2Vjb25kYXJ5J1xcXCIgY2xhc3M9XFxcImJ0biBidG4tc21cXFwiPldBUk48L2J1dHRvbj4gPGJ1dHRvbiAoY2xpY2spPVxcXCJjaGFuZ2VMZXZlbChsb2dnZXIubmFtZSwgJ0VSUk9SJylcXFwiIFtuZ0NsYXNzXT1cXFwiKGxvZ2dlci5sZXZlbD09J0VSUk9SJykgPyAnYnRuLXByaW1hcnknIDogJ2J0bi1zZWNvbmRhcnknXFxcIiBjbGFzcz1cXFwiYnRuIGJ0bi1zbVxcXCI+RVJST1I8L2J1dHRvbj4gPC90ZD4gPC90cj4gPC90YWJsZT4gPC9kaXY+IFwiO1xuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vc3JjL21haW4vd2ViYXBwL2FwcC9hZG1pbi9sb2dzL2xvZ3MuY29tcG9uZW50Lmh0bWxcbi8vIG1vZHVsZSBpZCA9IC4vc3JjL21haW4vd2ViYXBwL2FwcC9hZG1pbi9sb2dzL2xvZ3MuY29tcG9uZW50Lmh0bWxcbi8vIG1vZHVsZSBjaHVua3MgPSAwIiwiaW1wb3J0IHsgQ29tcG9uZW50LCBPbkluaXQgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcblxuaW1wb3J0IHsgTG9nIH0gZnJvbSAnLi9sb2cubW9kZWwnO1xuaW1wb3J0IHsgTG9nc1NlcnZpY2UgfSBmcm9tICcuL2xvZ3Muc2VydmljZSc7XG5cbkBDb21wb25lbnQoe1xuICAgIHNlbGVjdG9yOiAnamhpLWxvZ3MnLFxuICAgIHRlbXBsYXRlVXJsOiAnLi9sb2dzLmNvbXBvbmVudC5odG1sJyxcbn0pXG5leHBvcnQgY2xhc3MgTG9nc0NvbXBvbmVudCBpbXBsZW1lbnRzIE9uSW5pdCB7XG5cbiAgICBsb2dnZXJzOiBMb2dbXTtcbiAgICBmaWx0ZXI6IHN0cmluZztcbiAgICBvcmRlclByb3A6IHN0cmluZztcbiAgICByZXZlcnNlOiBib29sZWFuO1xuXG4gICAgY29uc3RydWN0b3IoXG4gICAgICAgIHByaXZhdGUgbG9nc1NlcnZpY2U6IExvZ3NTZXJ2aWNlXG4gICAgKSB7XG4gICAgICAgIHRoaXMuZmlsdGVyID0gJyc7XG4gICAgICAgIHRoaXMub3JkZXJQcm9wID0gJ25hbWUnO1xuICAgICAgICB0aGlzLnJldmVyc2UgPSBmYWxzZTtcbiAgICB9XG5cbiAgICBuZ09uSW5pdCgpIHtcbiAgICAgICAgdGhpcy5sb2dzU2VydmljZS5maW5kQWxsKCkuc3Vic2NyaWJlKChsb2dnZXJzKSA9PiB0aGlzLmxvZ2dlcnMgPSBsb2dnZXJzKTtcbiAgICB9XG5cbiAgICBjaGFuZ2VMZXZlbChuYW1lOiBzdHJpbmcsIGxldmVsOiBzdHJpbmcpIHtcbiAgICAgICAgY29uc3QgbG9nID0gbmV3IExvZyhuYW1lLCBsZXZlbCk7XG4gICAgICAgIHRoaXMubG9nc1NlcnZpY2UuY2hhbmdlTGV2ZWwobG9nKS5zdWJzY3JpYmUoKCkgPT4ge1xuICAgICAgICAgICAgdGhpcy5sb2dzU2VydmljZS5maW5kQWxsKCkuc3Vic2NyaWJlKChsb2dnZXJzKSA9PiB0aGlzLmxvZ2dlcnMgPSBsb2dnZXJzKTtcbiAgICAgICAgfSk7XG4gICAgfVxufVxuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vfi90c2xpbnQtbG9hZGVyIS4vc3JjL21haW4vd2ViYXBwL2FwcC9hZG1pbi9sb2dzL2xvZ3MuY29tcG9uZW50LnRzIiwiaW1wb3J0IHsgUm91dGUgfSBmcm9tICdAYW5ndWxhci9yb3V0ZXInO1xuXG5pbXBvcnQgeyBMb2dzQ29tcG9uZW50IH0gZnJvbSAnLi9sb2dzLmNvbXBvbmVudCc7XG5cbmV4cG9ydCBjb25zdCBsb2dzUm91dGU6IFJvdXRlID0ge1xuICAgIHBhdGg6ICdsb2dzJyxcbiAgICBjb21wb25lbnQ6IExvZ3NDb21wb25lbnQsXG4gICAgZGF0YToge1xuICAgICAgICBwYWdlVGl0bGU6ICdsb2dzLnRpdGxlJ1xuICAgIH1cbn07XG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9+L3RzbGludC1sb2FkZXIhLi9zcmMvbWFpbi93ZWJhcHAvYXBwL2FkbWluL2xvZ3MvbG9ncy5yb3V0ZS50cyIsImltcG9ydCB7IEluamVjdGFibGUgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IEh0dHAsIFJlc3BvbnNlIH0gZnJvbSAnQGFuZ3VsYXIvaHR0cCc7XG5pbXBvcnQgeyBPYnNlcnZhYmxlIH0gZnJvbSAncnhqcy9SeCc7XG5cbmltcG9ydCB7IExvZyB9IGZyb20gJy4vbG9nLm1vZGVsJztcblxuQEluamVjdGFibGUoKVxuZXhwb3J0IGNsYXNzIExvZ3NTZXJ2aWNlIHtcbiAgICBjb25zdHJ1Y3Rvcihwcml2YXRlIGh0dHA6IEh0dHApIHsgfVxuXG4gICAgY2hhbmdlTGV2ZWwobG9nOiBMb2cpOiBPYnNlcnZhYmxlPFJlc3BvbnNlPiB7XG4gICAgICAgIHJldHVybiB0aGlzLmh0dHAucHV0KCdtYW5hZ2VtZW50L2xvZ3MnLCBsb2cpO1xuICAgIH1cblxuICAgIGZpbmRBbGwoKTogT2JzZXJ2YWJsZTxMb2dbXT4ge1xuICAgICAgICByZXR1cm4gdGhpcy5odHRwLmdldCgnbWFuYWdlbWVudC9sb2dzJykubWFwKChyZXM6IFJlc3BvbnNlKSA9PiByZXMuanNvbigpKTtcbiAgICB9XG59XG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9+L3RzbGludC1sb2FkZXIhLi9zcmMvbWFpbi93ZWJhcHAvYXBwL2FkbWluL2xvZ3MvbG9ncy5zZXJ2aWNlLnRzIiwibW9kdWxlLmV4cG9ydHMgPSBcIiA8ZGl2IGNsYXNzPVxcXCJtb2RhbC1oZWFkZXJcXFwiPiA8aDQgY2xhc3M9XFxcIm1vZGFsLXRpdGxlXFxcIiBqaGlUcmFuc2xhdGU9XFxcIm1ldHJpY3MuanZtLnRocmVhZHMuZHVtcC50aXRsZVxcXCI+VGhyZWFkcyBkdW1wPC9oND4gPGJ1dHRvbiB0eXBlPVxcXCJidXR0b25cXFwiIGNsYXNzPVxcXCJjbG9zZVxcXCIgKGNsaWNrKT1cXFwiYWN0aXZlTW9kYWwuZGlzbWlzcygnY2xvc2VkJylcXFwiPiZ0aW1lczs8L2J1dHRvbj4gPC9kaXY+IDxkaXYgY2xhc3M9XFxcIm1vZGFsLWJvZHlcXFwiPiA8c3BhbiBjbGFzcz1cXFwiYmFkZ2UgYmFkZ2UtcHJpbWFyeVxcXCIgKGNsaWNrKT1cXFwidGhyZWFkRHVtcEZpbHRlciA9IHt9XFxcIj5BbGwmbmJzcDs8c3BhbiBjbGFzcz1cXFwiYmFkZ2UgYmFkZ2UtcGlsbCBiYWRnZS1kZWZhdWx0XFxcIj57e3RocmVhZER1bXBBbGx9fTwvc3Bhbj48L3NwYW4+Jm5ic3A7IDxzcGFuIGNsYXNzPVxcXCJiYWRnZSBiYWRnZS1zdWNjZXNzXFxcIiAoY2xpY2spPVxcXCJ0aHJlYWREdW1wRmlsdGVyID0ge3RocmVhZFN0YXRlOiAnUlVOTkFCTEUnfVxcXCI+UnVubmFibGUmbmJzcDs8c3BhbiBjbGFzcz1cXFwiYmFkZ2UgYmFkZ2UtcGlsbCBiYWRnZS1kZWZhdWx0XFxcIj57e3RocmVhZER1bXBSdW5uYWJsZX19PC9zcGFuPjwvc3Bhbj4mbmJzcDsgPHNwYW4gY2xhc3M9XFxcImJhZGdlIGJhZGdlLWluZm9cXFwiIChjbGljayk9XFxcInRocmVhZER1bXBGaWx0ZXIgPSB7dGhyZWFkU3RhdGU6ICdXQUlUSU5HJ31cXFwiPldhaXRpbmcmbmJzcDs8c3BhbiBjbGFzcz1cXFwiYmFkZ2UgYmFkZ2UtcGlsbCBiYWRnZS1kZWZhdWx0XFxcIj57e3RocmVhZER1bXBXYWl0aW5nfX08L3NwYW4+PC9zcGFuPiZuYnNwOyA8c3BhbiBjbGFzcz1cXFwiYmFkZ2UgYmFkZ2Utd2FybmluZ1xcXCIgKGNsaWNrKT1cXFwidGhyZWFkRHVtcEZpbHRlciA9IHt0aHJlYWRTdGF0ZTogJ1RJTUVEX1dBSVRJTkcnfVxcXCI+VGltZWQgV2FpdGluZyZuYnNwOzxzcGFuIGNsYXNzPVxcXCJiYWRnZSBiYWRnZS1waWxsIGJhZGdlLWRlZmF1bHRcXFwiPnt7dGhyZWFkRHVtcFRpbWVkV2FpdGluZ319PC9zcGFuPjwvc3Bhbj4mbmJzcDsgPHNwYW4gY2xhc3M9XFxcImJhZGdlIGJhZGdlLWRhbmdlclxcXCIgKGNsaWNrKT1cXFwidGhyZWFkRHVtcEZpbHRlciA9IHt0aHJlYWRTdGF0ZTogJ0JMT0NLRUQnfVxcXCI+QmxvY2tlZCZuYnNwOzxzcGFuIGNsYXNzPVxcXCJiYWRnZSBiYWRnZS1waWxsIGJhZGdlLWRlZmF1bHRcXFwiPnt7dGhyZWFkRHVtcEJsb2NrZWR9fTwvc3Bhbj48L3NwYW4+Jm5ic3A7IDxkaXYgY2xhc3M9XFxcIm10LTJcXFwiPiZuYnNwOzwvZGl2PiBGaWx0ZXIgPGlucHV0IHR5cGU9XFxcInRleHRcXFwiIFsobmdNb2RlbCldPVxcXCJ0aHJlYWREdW1wRmlsdGVyXFxcIiBjbGFzcz1cXFwiZm9ybS1jb250cm9sXFxcIj4gPGRpdiBjbGFzcz1cXFwicGFkXFxcIiAqbmdGb3I9XFxcImxldCBlbnRyeSBvZiB0aHJlYWREdW1wIHwgcHVyZUZpbHRlcjp0aHJlYWREdW1wRmlsdGVyOidsb2NrTmFtZScgfCBrZXlzXFxcIj4gPGg2PiA8c3BhbiBjbGFzcz1cXFwiYmFkZ2VcXFwiIFtuZ0NsYXNzXT1cXFwiZ2V0QmFkZ2VDbGFzcyhlbnRyeS52YWx1ZS50aHJlYWRTdGF0ZSlcXFwiPnt7ZW50cnkudmFsdWUudGhyZWFkU3RhdGV9fTwvc3Bhbj4mbmJzcDt7e2VudHJ5LnZhbHVlLnRocmVhZE5hbWV9fSAoSUQge3tlbnRyeS52YWx1ZS50aHJlYWRJZH19KSA8YSAoY2xpY2spPVxcXCJlbnRyeS5zaG93ID0gIWVudHJ5LnNob3dcXFwiIGhyZWY9XFxcImphdmFzY3JpcHQ6dm9pZCgwKTtcXFwiPiA8c3BhbiBbaGlkZGVuXT1cXFwiZW50cnkuc2hvd1xcXCIgamhpVHJhbnNsYXRlPVxcXCJtZXRyaWNzLmp2bS50aHJlYWRzLmR1bXAuc2hvd1xcXCI+U2hvdyBTdGFja1RyYWNlPC9zcGFuPiA8c3BhbiBbaGlkZGVuXT1cXFwiIWVudHJ5LnNob3dcXFwiIGpoaVRyYW5zbGF0ZT1cXFwibWV0cmljcy5qdm0udGhyZWFkcy5kdW1wLmhpZGVcXFwiPkhpZGUgU3RhY2tUcmFjZTwvc3Bhbj4gPC9hPiA8L2g2PiA8ZGl2IGNsYXNzPVxcXCJjYXJkXFxcIiBbaGlkZGVuXT1cXFwiIWVudHJ5LnNob3dcXFwiPiA8ZGl2IGNsYXNzPVxcXCJjYXJkLWJsb2NrXFxcIj4gPGRpdiAqbmdGb3I9XFxcImxldCBzdCBvZiBlbnRyeS52YWx1ZS5zdGFja1RyYWNlIHwga2V5c1xcXCIgY2xhc3M9XFxcImJyZWFrXFxcIj4gPHNhbXA+e3tzdC52YWx1ZS5jbGFzc05hbWV9fS57e3N0LnZhbHVlLm1ldGhvZE5hbWV9fSg8Y29kZT57e3N0LnZhbHVlLmZpbGVOYW1lfX06e3tzdC52YWx1ZS5saW5lTnVtYmVyfX08L2NvZGU+KTwvc2FtcD4gPHNwYW4gY2xhc3M9XFxcIm10LTFcXFwiPjwvc3Bhbj4gPC9kaXY+IDwvZGl2PiA8L2Rpdj4gPHRhYmxlIGNsYXNzPVxcXCJ0YWJsZSB0YWJsZS1zbSB0YWJsZS1yZXNwb25zaXZlXFxcIj4gPHRoZWFkPiA8dHI+IDx0aCBjbGFzcz1cXFwidGV4dC1yaWdodFxcXCIgamhpVHJhbnNsYXRlPVxcXCJtZXRyaWNzLmp2bS50aHJlYWRzLmR1bXAuYmxvY2tlZHRpbWVcXFwiPkJsb2NrZWQgVGltZTwvdGg+IDx0aCBjbGFzcz1cXFwidGV4dC1yaWdodFxcXCIgamhpVHJhbnNsYXRlPVxcXCJtZXRyaWNzLmp2bS50aHJlYWRzLmR1bXAuYmxvY2tlZGNvdW50XFxcIj5CbG9ja2VkIENvdW50PC90aD4gPHRoIGNsYXNzPVxcXCJ0ZXh0LXJpZ2h0XFxcIiBqaGlUcmFuc2xhdGU9XFxcIm1ldHJpY3MuanZtLnRocmVhZHMuZHVtcC53YWl0ZWR0aW1lXFxcIj5XYWl0ZWQgVGltZTwvdGg+IDx0aCBjbGFzcz1cXFwidGV4dC1yaWdodFxcXCIgamhpVHJhbnNsYXRlPVxcXCJtZXRyaWNzLmp2bS50aHJlYWRzLmR1bXAud2FpdGVkY291bnRcXFwiPldhaXRlZCBDb3VudDwvdGg+IDx0aCBqaGlUcmFuc2xhdGU9XFxcIm1ldHJpY3MuanZtLnRocmVhZHMuZHVtcC5sb2NrbmFtZVxcXCI+TG9jayBOYW1lPC90aD4gPC90cj4gPC90aGVhZD4gPHRib2R5PiA8dHI+IDx0ZD57e2VudHJ5LnZhbHVlLmJsb2NrZWRUaW1lfX08L3RkPiA8dGQ+e3tlbnRyeS52YWx1ZS5ibG9ja2VkQ291bnR9fTwvdGQ+IDx0ZD57e2VudHJ5LnZhbHVlLndhaXRlZFRpbWV9fTwvdGQ+IDx0ZD57e2VudHJ5LnZhbHVlLndhaXRlZENvdW50fX08L3RkPiA8dGQ+PGNvZGU+e3tlbnRyeS52YWx1ZS5sb2NrTmFtZX19PC9jb2RlPjwvdGQ+IDwvdHI+IDwvdGJvZHk+IDwvdGFibGU+IDwvZGl2PiA8L2Rpdj4gPGRpdiBjbGFzcz1cXFwibW9kYWwtZm9vdGVyXFxcIj4gPGJ1dHRvbiB0eXBlPVxcXCJidXR0b25cXFwiIGNsYXNzPVxcXCJidG4gYnRuLXNlY29uZGFyeSBwdWxsLWxlZnRcXFwiIGRhdGEtZGlzbWlzcz1cXFwibW9kYWxcXFwiIChjbGljayk9XFxcImFjdGl2ZU1vZGFsLmRpc21pc3MoJ2Nsb3NlZCcpXFxcIj5Eb25lPC9idXR0b24+IDwvZGl2PiBcIjtcblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL3NyYy9tYWluL3dlYmFwcC9hcHAvYWRtaW4vbWV0cmljcy9tZXRyaWNzLW1vZGFsLmNvbXBvbmVudC5odG1sXG4vLyBtb2R1bGUgaWQgPSAuL3NyYy9tYWluL3dlYmFwcC9hcHAvYWRtaW4vbWV0cmljcy9tZXRyaWNzLW1vZGFsLmNvbXBvbmVudC5odG1sXG4vLyBtb2R1bGUgY2h1bmtzID0gMCIsImltcG9ydCB7IENvbXBvbmVudCwgT25Jbml0IH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBOZ2JBY3RpdmVNb2RhbCB9IGZyb20gJ0BuZy1ib290c3RyYXAvbmctYm9vdHN0cmFwJztcblxuQENvbXBvbmVudCh7XG4gICAgc2VsZWN0b3I6ICdqaGktbWV0cmljcy1tb2RhbCcsXG4gICAgdGVtcGxhdGVVcmw6ICcuL21ldHJpY3MtbW9kYWwuY29tcG9uZW50Lmh0bWwnXG59KVxuZXhwb3J0IGNsYXNzIEpoaU1ldHJpY3NNb25pdG9yaW5nTW9kYWxDb21wb25lbnQgaW1wbGVtZW50cyBPbkluaXQge1xuXG4gICAgdGhyZWFkRHVtcEZpbHRlcjogYW55O1xuICAgIHRocmVhZER1bXA6IGFueTtcbiAgICB0aHJlYWREdW1wQWxsID0gMDtcbiAgICB0aHJlYWREdW1wQmxvY2tlZCA9IDA7XG4gICAgdGhyZWFkRHVtcFJ1bm5hYmxlID0gMDtcbiAgICB0aHJlYWREdW1wVGltZWRXYWl0aW5nID0gMDtcbiAgICB0aHJlYWREdW1wV2FpdGluZyA9IDA7XG5cbiAgICBjb25zdHJ1Y3RvcihwdWJsaWMgYWN0aXZlTW9kYWw6IE5nYkFjdGl2ZU1vZGFsKSB7fVxuXG4gICAgbmdPbkluaXQoKSB7XG4gICAgICAgIHRoaXMudGhyZWFkRHVtcC5mb3JFYWNoKCh2YWx1ZSkgPT4ge1xuICAgICAgICAgICAgaWYgKHZhbHVlLnRocmVhZFN0YXRlID09PSAnUlVOTkFCTEUnKSB7XG4gICAgICAgICAgICAgICAgdGhpcy50aHJlYWREdW1wUnVubmFibGUgKz0gMTtcbiAgICAgICAgICAgIH0gZWxzZSBpZiAodmFsdWUudGhyZWFkU3RhdGUgPT09ICdXQUlUSU5HJykge1xuICAgICAgICAgICAgICAgIHRoaXMudGhyZWFkRHVtcFdhaXRpbmcgKz0gMTtcbiAgICAgICAgICAgIH0gZWxzZSBpZiAodmFsdWUudGhyZWFkU3RhdGUgPT09ICdUSU1FRF9XQUlUSU5HJykge1xuICAgICAgICAgICAgICAgIHRoaXMudGhyZWFkRHVtcFRpbWVkV2FpdGluZyArPSAxO1xuICAgICAgICAgICAgfSBlbHNlIGlmICh2YWx1ZS50aHJlYWRTdGF0ZSA9PT0gJ0JMT0NLRUQnKSB7XG4gICAgICAgICAgICAgICAgdGhpcy50aHJlYWREdW1wQmxvY2tlZCArPSAxO1xuICAgICAgICAgICAgfVxuICAgICAgICB9KTtcblxuICAgICAgICB0aGlzLnRocmVhZER1bXBBbGwgPSB0aGlzLnRocmVhZER1bXBSdW5uYWJsZSArIHRoaXMudGhyZWFkRHVtcFdhaXRpbmcgK1xuICAgICAgICAgICAgdGhpcy50aHJlYWREdW1wVGltZWRXYWl0aW5nICsgdGhpcy50aHJlYWREdW1wQmxvY2tlZDtcbiAgICB9XG5cbiAgICBnZXRCYWRnZUNsYXNzKHRocmVhZFN0YXRlKSB7XG4gICAgICAgIGlmICh0aHJlYWRTdGF0ZSA9PT0gJ1JVTk5BQkxFJykge1xuICAgICAgICAgICAgcmV0dXJuICdiYWRnZS1zdWNjZXNzJztcbiAgICAgICAgfSBlbHNlIGlmICh0aHJlYWRTdGF0ZSA9PT0gJ1dBSVRJTkcnKSB7XG4gICAgICAgICAgICByZXR1cm4gJ2JhZGdlLWluZm8nO1xuICAgICAgICB9IGVsc2UgaWYgKHRocmVhZFN0YXRlID09PSAnVElNRURfV0FJVElORycpIHtcbiAgICAgICAgICAgIHJldHVybiAnYmFkZ2Utd2FybmluZyc7XG4gICAgICAgIH0gZWxzZSBpZiAodGhyZWFkU3RhdGUgPT09ICdCTE9DS0VEJykge1xuICAgICAgICAgICAgcmV0dXJuICdiYWRnZS1kYW5nZXInO1xuICAgICAgICB9XG4gICAgfVxufVxuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vfi90c2xpbnQtbG9hZGVyIS4vc3JjL21haW4vd2ViYXBwL2FwcC9hZG1pbi9tZXRyaWNzL21ldHJpY3MtbW9kYWwuY29tcG9uZW50LnRzIiwibW9kdWxlLmV4cG9ydHMgPSBcIjxkaXY+IDxoMj4gPHNwYW4gamhpVHJhbnNsYXRlPVxcXCJtZXRyaWNzLnRpdGxlXFxcIj5BcHBsaWNhdGlvbiBNZXRyaWNzPC9zcGFuPiA8YnV0dG9uIGNsYXNzPVxcXCJidG4gYnRuLXByaW1hcnkgZmxvYXQtcmlnaHRcXFwiIChjbGljayk9XFxcInJlZnJlc2goKVxcXCI+IDxzcGFuIGNsYXNzPVxcXCJmYSBmYS1yZWZyZXNoXFxcIj48L3NwYW4+IDxzcGFuIGpoaVRyYW5zbGF0ZT1cXFwibWV0cmljcy5yZWZyZXNoLmJ1dHRvblxcXCI+UmVmcmVzaDwvc3Bhbj4gPC9idXR0b24+IDwvaDI+IDxoMyBqaGlUcmFuc2xhdGU9XFxcIm1ldHJpY3MuanZtLnRpdGxlXFxcIj5KVk0gTWV0cmljczwvaDM+IDxkaXYgY2xhc3M9XFxcInJvd1xcXCIgKm5nSWY9XFxcIiF1cGRhdGluZ01ldHJpY3NcXFwiPiA8ZGl2IGNsYXNzPVxcXCJjb2wtbWQtNFxcXCI+IDxiIGpoaVRyYW5zbGF0ZT1cXFwibWV0cmljcy5qdm0ubWVtb3J5LnRpdGxlXFxcIj5NZW1vcnk8L2I+IDxwPjxzcGFuIGpoaVRyYW5zbGF0ZT1cXFwibWV0cmljcy5qdm0ubWVtb3J5LnRvdGFsXFxcIj5Ub3RhbCBNZW1vcnk8L3NwYW4+ICh7e21ldHJpY3MuZ2F1Z2VzWydqdm0ubWVtb3J5LnRvdGFsLnVzZWQnXS52YWx1ZSAvIDEwMDAwMDAgfCBudW1iZXI6JzEuMC0wJ319TSAvIHt7bWV0cmljcy5nYXVnZXNbJ2p2bS5tZW1vcnkudG90YWwubWF4J10udmFsdWUgLyAxMDAwMDAwIHwgbnVtYmVyOicxLjAtMCd9fU0pPC9wPiA8bmdiLXByb2dyZXNzYmFyIHR5cGU9XFxcInN1Y2Nlc3NcXFwiIFttYXhdPVxcXCJtZXRyaWNzLmdhdWdlc1snanZtLm1lbW9yeS50b3RhbC5tYXgnXS52YWx1ZVxcXCIgW3ZhbHVlXT1cXFwibWV0cmljcy5nYXVnZXNbJ2p2bS5tZW1vcnkudG90YWwudXNlZCddLnZhbHVlXFxcIiBbc3RyaXBlZF09XFxcInRydWVcXFwiIFthbmltYXRlZF09XFxcInRydWVcXFwiPiA8c3Bhbj57e21ldHJpY3MuZ2F1Z2VzWydqdm0ubWVtb3J5LnRvdGFsLnVzZWQnXS52YWx1ZSAqIDEwMCAvIG1ldHJpY3MuZ2F1Z2VzWydqdm0ubWVtb3J5LnRvdGFsLm1heCddLnZhbHVlIHwgbnVtYmVyOicxLjAtMCd9fSU8L3NwYW4+IDwvbmdiLXByb2dyZXNzYmFyPiA8cD48c3BhbiBqaGlUcmFuc2xhdGU9XFxcIm1ldHJpY3MuanZtLm1lbW9yeS5oZWFwXFxcIj5IZWFwIE1lbW9yeTwvc3Bhbj4gKHt7bWV0cmljcy5nYXVnZXNbJ2p2bS5tZW1vcnkuaGVhcC51c2VkJ10udmFsdWUgLyAxMDAwMDAwIHwgbnVtYmVyOicxLjAtMCd9fU0gLyB7e21ldHJpY3MuZ2F1Z2VzWydqdm0ubWVtb3J5LmhlYXAubWF4J10udmFsdWUgLyAxMDAwMDAwIHwgbnVtYmVyOicxLjAtMCd9fU0pPC9wPiA8bmdiLXByb2dyZXNzYmFyIFttYXhdPVxcXCJtZXRyaWNzLmdhdWdlc1snanZtLm1lbW9yeS5oZWFwLm1heCddLnZhbHVlXFxcIiBbdmFsdWVdPVxcXCJtZXRyaWNzLmdhdWdlc1snanZtLm1lbW9yeS5oZWFwLnVzZWQnXS52YWx1ZVxcXCIgW3N0cmlwZWRdPVxcXCJ0cnVlXFxcIiBbYW5pbWF0ZWRdPVxcXCJ0cnVlXFxcIiB0eXBlPVxcXCJzdWNjZXNzXFxcIj4gPHNwYW4+e3ttZXRyaWNzLmdhdWdlc1snanZtLm1lbW9yeS5oZWFwLnVzZWQnXS52YWx1ZSAqIDEwMCAvIG1ldHJpY3MuZ2F1Z2VzWydqdm0ubWVtb3J5LmhlYXAubWF4J10udmFsdWUgfCBudW1iZXI6JzEuMC0wJ319JTwvc3Bhbj4gPC9uZ2ItcHJvZ3Jlc3NiYXI+IDxwPjxzcGFuIGpoaVRyYW5zbGF0ZT1cXFwibWV0cmljcy5qdm0ubWVtb3J5Lm5vbmhlYXBcXFwiPk5vbi1IZWFwIE1lbW9yeTwvc3Bhbj4gKHt7bWV0cmljcy5nYXVnZXNbJ2p2bS5tZW1vcnkubm9uLWhlYXAudXNlZCddLnZhbHVlIC8gMTAwMDAwMCB8IG51bWJlcjonMS4wLTAnfX1NIC8ge3ttZXRyaWNzLmdhdWdlc1snanZtLm1lbW9yeS5ub24taGVhcC5jb21taXR0ZWQnXS52YWx1ZSAvIDEwMDAwMDAgfCBudW1iZXI6JzEuMC0wJ319TSk8L3A+IDxuZ2ItcHJvZ3Jlc3NiYXIgW21heF09XFxcIm1ldHJpY3MuZ2F1Z2VzWydqdm0ubWVtb3J5Lm5vbi1oZWFwLmNvbW1pdHRlZCddLnZhbHVlXFxcIiBbdmFsdWVdPVxcXCJtZXRyaWNzLmdhdWdlc1snanZtLm1lbW9yeS5ub24taGVhcC51c2VkJ10udmFsdWVcXFwiIFtzdHJpcGVkXT1cXFwidHJ1ZVxcXCIgW2FuaW1hdGVkXT1cXFwidHJ1ZVxcXCIgdHlwZT1cXFwic3VjY2Vzc1xcXCI+IDxzcGFuPnt7bWV0cmljcy5nYXVnZXNbJ2p2bS5tZW1vcnkubm9uLWhlYXAudXNlZCddLnZhbHVlICogMTAwIC8gbWV0cmljcy5nYXVnZXNbJ2p2bS5tZW1vcnkubm9uLWhlYXAuY29tbWl0dGVkJ10udmFsdWUgfCBudW1iZXI6JzEuMC0wJ319JTwvc3Bhbj4gPC9uZ2ItcHJvZ3Jlc3NiYXI+IDwvZGl2PiA8ZGl2IGNsYXNzPVxcXCJjb2wtbWQtNFxcXCI+IDxiIGpoaVRyYW5zbGF0ZT1cXFwibWV0cmljcy5qdm0udGhyZWFkcy50aXRsZVxcXCI+VGhyZWFkczwvYj4gKFRvdGFsOiB7e21ldHJpY3MuZ2F1Z2VzWydqdm0udGhyZWFkcy5jb3VudCddLnZhbHVlfX0pIDxhIGNsYXNzPVxcXCJoYW5kXFxcIiAoY2xpY2spPVxcXCJyZWZyZXNoVGhyZWFkRHVtcERhdGEoKVxcXCIgZGF0YS10b2dnbGU9XFxcIm1vZGFsXFxcIiBkYXRhLXRhcmdldD1cXFwiI3RocmVhZER1bXBcXFwiPjxpIGNsYXNzPVxcXCJmYSBmYS1leWVcXFwiPjwvaT48L2E+IDxwPjxzcGFuIGpoaVRyYW5zbGF0ZT1cXFwibWV0cmljcy5qdm0udGhyZWFkcy5ydW5uYWJsZVxcXCI+UnVubmFibGU8L3NwYW4+IHt7bWV0cmljcy5nYXVnZXNbJ2p2bS50aHJlYWRzLnJ1bm5hYmxlLmNvdW50J10udmFsdWV9fTwvcD4gPG5nYi1wcm9ncmVzc2JhciBbdmFsdWVdPVxcXCJtZXRyaWNzLmdhdWdlc1snanZtLnRocmVhZHMucnVubmFibGUuY291bnQnXS52YWx1ZVxcXCIgW21heF09XFxcIm1ldHJpY3MuZ2F1Z2VzWydqdm0udGhyZWFkcy5jb3VudCddLnZhbHVlXFxcIiBbc3RyaXBlZF09XFxcInRydWVcXFwiIFthbmltYXRlZF09XFxcInRydWVcXFwiIHR5cGU9XFxcInN1Y2Nlc3NcXFwiPiA8c3Bhbj57e21ldHJpY3MuZ2F1Z2VzWydqdm0udGhyZWFkcy5ydW5uYWJsZS5jb3VudCddLnZhbHVlICogMTAwIC8gbWV0cmljcy5nYXVnZXNbJ2p2bS50aHJlYWRzLmNvdW50J10udmFsdWUgfCBudW1iZXI6JzEuMC0wJ319JTwvc3Bhbj4gPC9uZ2ItcHJvZ3Jlc3NiYXI+IDxwPjxzcGFuIGpoaVRyYW5zbGF0ZT1cXFwibWV0cmljcy5qdm0udGhyZWFkcy50aW1lZHdhaXRpbmdcXFwiPlRpbWVkIFdhaXRpbmc8L3NwYW4+ICh7e21ldHJpY3MuZ2F1Z2VzWydqdm0udGhyZWFkcy50aW1lZF93YWl0aW5nLmNvdW50J10udmFsdWV9fSk8L3A+IDxuZ2ItcHJvZ3Jlc3NiYXIgW3ZhbHVlXT1cXFwibWV0cmljcy5nYXVnZXNbJ2p2bS50aHJlYWRzLnRpbWVkX3dhaXRpbmcuY291bnQnXS52YWx1ZVxcXCIgW21heF09XFxcIm1ldHJpY3MuZ2F1Z2VzWydqdm0udGhyZWFkcy5jb3VudCddLnZhbHVlXFxcIiBbc3RyaXBlZF09XFxcInRydWVcXFwiIFthbmltYXRlZF09XFxcInRydWVcXFwiIHR5cGU9XFxcIndhcm5pbmdcXFwiPiA8c3Bhbj57e21ldHJpY3MuZ2F1Z2VzWydqdm0udGhyZWFkcy50aW1lZF93YWl0aW5nLmNvdW50J10udmFsdWUgKiAxMDAgLyBtZXRyaWNzLmdhdWdlc1snanZtLnRocmVhZHMuY291bnQnXS52YWx1ZSB8IG51bWJlcjonMS4wLTAnfX0lPC9zcGFuPiA8L25nYi1wcm9ncmVzc2Jhcj4gPHA+PHNwYW4gamhpVHJhbnNsYXRlPVxcXCJtZXRyaWNzLmp2bS50aHJlYWRzLndhaXRpbmdcXFwiPldhaXRpbmc8L3NwYW4+ICh7e21ldHJpY3MuZ2F1Z2VzWydqdm0udGhyZWFkcy53YWl0aW5nLmNvdW50J10udmFsdWV9fSk8L3A+IDxuZ2ItcHJvZ3Jlc3NiYXIgW3ZhbHVlXT1cXFwibWV0cmljcy5nYXVnZXNbJ2p2bS50aHJlYWRzLndhaXRpbmcuY291bnQnXS52YWx1ZVxcXCIgW21heF09XFxcIm1ldHJpY3MuZ2F1Z2VzWydqdm0udGhyZWFkcy5jb3VudCddLnZhbHVlXFxcIiBbc3RyaXBlZF09XFxcInRydWVcXFwiIFthbmltYXRlZF09XFxcInRydWVcXFwiIHR5cGU9XFxcIndhcm5pbmdcXFwiPiA8c3Bhbj57e21ldHJpY3MuZ2F1Z2VzWydqdm0udGhyZWFkcy53YWl0aW5nLmNvdW50J10udmFsdWUgKiAxMDAgLyBtZXRyaWNzLmdhdWdlc1snanZtLnRocmVhZHMuY291bnQnXS52YWx1ZSB8IG51bWJlcjonMS4wLTAnfX0lPC9zcGFuPiA8L25nYi1wcm9ncmVzc2Jhcj4gPHA+PHNwYW4gamhpVHJhbnNsYXRlPVxcXCJtZXRyaWNzLmp2bS50aHJlYWRzLmJsb2NrZWRcXFwiPkJsb2NrZWQ8L3NwYW4+ICh7e21ldHJpY3MuZ2F1Z2VzWydqdm0udGhyZWFkcy5ibG9ja2VkLmNvdW50J10udmFsdWV9fSk8L3A+IDxuZ2ItcHJvZ3Jlc3NiYXIgW3ZhbHVlXT1cXFwibWV0cmljcy5nYXVnZXNbJ2p2bS50aHJlYWRzLmJsb2NrZWQuY291bnQnXS52YWx1ZVxcXCIgW21heF09XFxcIm1ldHJpY3MuZ2F1Z2VzWydqdm0udGhyZWFkcy5jb3VudCddLnZhbHVlXFxcIiBbc3RyaXBlZF09XFxcInRydWVcXFwiIFthbmltYXRlZF09XFxcInRydWVcXFwiIHR5cGU9XFxcInN1Y2Nlc3NcXFwiPiA8c3Bhbj57e21ldHJpY3MuZ2F1Z2VzWydqdm0udGhyZWFkcy5ibG9ja2VkLmNvdW50J10udmFsdWUgKiAxMDAgLyBtZXRyaWNzLmdhdWdlc1snanZtLnRocmVhZHMuY291bnQnXS52YWx1ZSB8IG51bWJlcjonMS4wLTAnfX0lPC9zcGFuPiA8L25nYi1wcm9ncmVzc2Jhcj4gPC9kaXY+IDxkaXYgY2xhc3M9XFxcImNvbC1tZC00XFxcIj4gPGIgamhpVHJhbnNsYXRlPVxcXCJtZXRyaWNzLmp2bS5nYy50aXRsZVxcXCI+R2FyYmFnZSBjb2xsZWN0aW9uczwvYj4gPGRpdiBjbGFzcz1cXFwicm93XFxcIiAqbmdJZj1cXFwibWV0cmljcy5nYXVnZXNbJ2p2bS5nYXJiYWdlLlBTLU1hcmtTd2VlcC5jb3VudCddXFxcIj4gPGRpdiBjbGFzcz1cXFwiY29sLW1kLTlcXFwiIGpoaVRyYW5zbGF0ZT1cXFwibWV0cmljcy5qdm0uZ2MubWFya3N3ZWVwY291bnRcXFwiPk1hcmsgU3dlZXAgY291bnQ8L2Rpdj4gPGRpdiBjbGFzcz1cXFwiY29sLW1kLTMgdGV4dC1yaWdodFxcXCI+e3ttZXRyaWNzLmdhdWdlc1snanZtLmdhcmJhZ2UuUFMtTWFya1N3ZWVwLmNvdW50J10udmFsdWV9fTwvZGl2PiA8L2Rpdj4gPGRpdiBjbGFzcz1cXFwicm93XFxcIiAqbmdJZj1cXFwibWV0cmljcy5nYXVnZXNbJ2p2bS5nYXJiYWdlLlBTLU1hcmtTd2VlcC50aW1lJ11cXFwiPiA8ZGl2IGNsYXNzPVxcXCJjb2wtbWQtOVxcXCIgamhpVHJhbnNsYXRlPVxcXCJtZXRyaWNzLmp2bS5nYy5tYXJrc3dlZXB0aW1lXFxcIj5NYXJrIFN3ZWVwIHRpbWU8L2Rpdj4gPGRpdiBjbGFzcz1cXFwiY29sLW1kLTMgdGV4dC1yaWdodFxcXCI+e3ttZXRyaWNzLmdhdWdlc1snanZtLmdhcmJhZ2UuUFMtTWFya1N3ZWVwLnRpbWUnXS52YWx1ZX19bXM8L2Rpdj4gPC9kaXY+IDxkaXYgY2xhc3M9XFxcInJvd1xcXCIgKm5nSWY9XFxcIm1ldHJpY3MuZ2F1Z2VzWydqdm0uZ2FyYmFnZS5QUy1TY2F2ZW5nZS5jb3VudCddXFxcIj4gPGRpdiBjbGFzcz1cXFwiY29sLW1kLTlcXFwiIGpoaVRyYW5zbGF0ZT1cXFwibWV0cmljcy5qdm0uZ2Muc2NhdmVuZ2Vjb3VudFxcXCI+U2NhdmVuZ2UgY291bnQ8L2Rpdj4gPGRpdiBjbGFzcz1cXFwiY29sLW1kLTMgdGV4dC1yaWdodFxcXCI+e3ttZXRyaWNzLmdhdWdlc1snanZtLmdhcmJhZ2UuUFMtU2NhdmVuZ2UuY291bnQnXS52YWx1ZX19PC9kaXY+IDwvZGl2PiA8ZGl2IGNsYXNzPVxcXCJyb3dcXFwiICpuZ0lmPVxcXCJtZXRyaWNzLmdhdWdlc1snanZtLmdhcmJhZ2UuUFMtU2NhdmVuZ2UudGltZSddXFxcIj4gPGRpdiBjbGFzcz1cXFwiY29sLW1kLTlcXFwiIGpoaVRyYW5zbGF0ZT1cXFwibWV0cmljcy5qdm0uZ2Muc2NhdmVuZ2V0aW1lXFxcIj5TY2F2ZW5nZSB0aW1lPC9kaXY+IDxkaXYgY2xhc3M9XFxcImNvbC1tZC0zIHRleHQtcmlnaHRcXFwiPnt7bWV0cmljcy5nYXVnZXNbJ2p2bS5nYXJiYWdlLlBTLVNjYXZlbmdlLnRpbWUnXS52YWx1ZX19bXM8L2Rpdj4gPC9kaXY+IDwvZGl2PiA8L2Rpdj4gPGRpdiBjbGFzcz1cXFwid2VsbCB3ZWxsLWxnXFxcIiAqbmdJZj1cXFwidXBkYXRpbmdNZXRyaWNzXFxcIiBqaGlUcmFuc2xhdGU9XFxcIm1ldHJpY3MudXBkYXRpbmdcXFwiPlVwZGF0aW5nLi4uPC9kaXY+IDxoMyBqaGlUcmFuc2xhdGU9XFxcIm1ldHJpY3MuanZtLmh0dHAudGl0bGVcXFwiPkhUVFAgcmVxdWVzdHMgKGV2ZW50cyBwZXIgc2Vjb25kKTwvaDM+IDxwICpuZ0lmPVxcXCJtZXRyaWNzLmNvdW50ZXJzXFxcIj4gPHNwYW4gamhpVHJhbnNsYXRlPVxcXCJtZXRyaWNzLmp2bS5odHRwLmFjdGl2ZVxcXCI+QWN0aXZlIHJlcXVlc3RzPC9zcGFuPiA8Yj57e21ldHJpY3MuY291bnRlcnNbJ2NvbS5jb2RhaGFsZS5tZXRyaWNzLnNlcnZsZXQuSW5zdHJ1bWVudGVkRmlsdGVyLmFjdGl2ZVJlcXVlc3RzJ10uY291bnQgfCBudW1iZXI6JzEuMC0wJ319PC9iPiAtIDxzcGFuIGpoaVRyYW5zbGF0ZT1cXFwibWV0cmljcy5qdm0uaHR0cC50b3RhbFxcXCI+VG90YWwgcmVxdWVzdHM8L3NwYW4+IDxiPnt7bWV0cmljcy50aW1lcnNbJ2NvbS5jb2RhaGFsZS5tZXRyaWNzLnNlcnZsZXQuSW5zdHJ1bWVudGVkRmlsdGVyLnJlcXVlc3RzJ10uY291bnQgfCBudW1iZXI6JzEuMC0wJ319PC9iPiA8L3A+IDxkaXYgY2xhc3M9XFxcInRhYmxlLXJlc3BvbnNpdmVcXFwiICpuZ0lmPVxcXCIhdXBkYXRpbmdNZXRyaWNzXFxcIj4gPHRhYmxlIGNsYXNzPVxcXCJ0YWJsZSB0YWJsZS1zdHJpcGVkXFxcIj4gPHRoZWFkPiA8dHI+IDx0aCBqaGlUcmFuc2xhdGU9XFxcIm1ldHJpY3MuanZtLmh0dHAudGFibGUuY29kZVxcXCI+Q29kZTwvdGg+IDx0aCBqaGlUcmFuc2xhdGU9XFxcIm1ldHJpY3MuanZtLmh0dHAudGFibGUuY291bnRcXFwiPkNvdW50PC90aD4gPHRoIGNsYXNzPVxcXCJ0ZXh0LXJpZ2h0XFxcIiBqaGlUcmFuc2xhdGU9XFxcIm1ldHJpY3MuanZtLmh0dHAudGFibGUubWVhblxcXCI+TWVhbjwvdGg+IDx0aCBjbGFzcz1cXFwidGV4dC1yaWdodFxcXCI+PHNwYW4gamhpVHJhbnNsYXRlPVxcXCJtZXRyaWNzLmp2bS5odHRwLnRhYmxlLmF2ZXJhZ2VcXFwiPkF2ZXJhZ2U8L3NwYW4+ICgxIG1pbik8L3RoPiA8dGggY2xhc3M9XFxcInRleHQtcmlnaHRcXFwiPjxzcGFuIGpoaVRyYW5zbGF0ZT1cXFwibWV0cmljcy5qdm0uaHR0cC50YWJsZS5hdmVyYWdlXFxcIj5BdmVyYWdlPC9zcGFuPiAoNSBtaW4pPC90aD4gPHRoIGNsYXNzPVxcXCJ0ZXh0LXJpZ2h0XFxcIj48c3BhbiBqaGlUcmFuc2xhdGU9XFxcIm1ldHJpY3MuanZtLmh0dHAudGFibGUuYXZlcmFnZVxcXCI+QXZlcmFnZTwvc3Bhbj4gKDE1IG1pbik8L3RoPiA8L3RyPiA8L3RoZWFkPiA8dGJvZHk+IDx0cj4gPHRkIGpoaVRyYW5zbGF0ZT1cXFwibWV0cmljcy5qdm0uaHR0cC5jb2RlLm9rXFxcIj5PSzwvdGQ+IDx0ZD4gPG5nYi1wcm9ncmVzc2JhciBbbWF4XT1cXFwibWV0cmljcy50aW1lcnNbJ2NvbS5jb2RhaGFsZS5tZXRyaWNzLnNlcnZsZXQuSW5zdHJ1bWVudGVkRmlsdGVyLnJlcXVlc3RzJ10uY291bnRcXFwiIFt2YWx1ZV09XFxcIm1ldHJpY3MubWV0ZXJzWydjb20uY29kYWhhbGUubWV0cmljcy5zZXJ2bGV0Lkluc3RydW1lbnRlZEZpbHRlci5yZXNwb25zZUNvZGVzLm9rJ10uY291bnRcXFwiIFtzdHJpcGVkXT1cXFwidHJ1ZVxcXCIgW2FuaW1hdGVkXT1cXFwidHJ1ZVxcXCIgdHlwZT1cXFwic3VjY2Vzc1xcXCI+IDxzcGFuPnt7bWV0cmljcy5tZXRlcnNbJ2NvbS5jb2RhaGFsZS5tZXRyaWNzLnNlcnZsZXQuSW5zdHJ1bWVudGVkRmlsdGVyLnJlc3BvbnNlQ29kZXMub2snXS5jb3VudH19PC9zcGFuPiA8L25nYi1wcm9ncmVzc2Jhcj4gPC90ZD4gPHRkIGNsYXNzPVxcXCJ0ZXh0LXJpZ2h0XFxcIj4ge3tmaWx0ZXJOYU4obWV0cmljcy5tZXRlcnNbJ2NvbS5jb2RhaGFsZS5tZXRyaWNzLnNlcnZsZXQuSW5zdHJ1bWVudGVkRmlsdGVyLnJlc3BvbnNlQ29kZXMub2snXS5tZWFuX3JhdGUpIHwgbnVtYmVyOicxLjAtMid9fSA8L3RkPiA8dGQgY2xhc3M9XFxcInRleHQtcmlnaHRcXFwiPiB7e2ZpbHRlck5hTihtZXRyaWNzLm1ldGVyc1snY29tLmNvZGFoYWxlLm1ldHJpY3Muc2VydmxldC5JbnN0cnVtZW50ZWRGaWx0ZXIucmVzcG9uc2VDb2Rlcy5vayddLm0xX3JhdGUpIHwgbnVtYmVyOicxLjAtMid9fSA8L3RkPiA8dGQgY2xhc3M9XFxcInRleHQtcmlnaHRcXFwiPiB7e2ZpbHRlck5hTihtZXRyaWNzLm1ldGVyc1snY29tLmNvZGFoYWxlLm1ldHJpY3Muc2VydmxldC5JbnN0cnVtZW50ZWRGaWx0ZXIucmVzcG9uc2VDb2Rlcy5vayddLm01X3JhdGUpIHwgbnVtYmVyOicxLjAtMid9fSA8L3RkPiA8dGQgY2xhc3M9XFxcInRleHQtcmlnaHRcXFwiPiB7e2ZpbHRlck5hTihtZXRyaWNzLm1ldGVyc1snY29tLmNvZGFoYWxlLm1ldHJpY3Muc2VydmxldC5JbnN0cnVtZW50ZWRGaWx0ZXIucmVzcG9uc2VDb2Rlcy5vayddLm0xNV9yYXRlKSB8IG51bWJlcjonMS4wLTInfX0gPC90ZD4gPC90cj4gPHRyPiA8dGQgamhpVHJhbnNsYXRlPVxcXCJtZXRyaWNzLmp2bS5odHRwLmNvZGUubm90Zm91bmRcXFwiPk5vdCBGb3VuZDwvdGQ+IDx0ZD4gPG5nYi1wcm9ncmVzc2JhciBbbWF4XT1cXFwibWV0cmljcy50aW1lcnNbJ2NvbS5jb2RhaGFsZS5tZXRyaWNzLnNlcnZsZXQuSW5zdHJ1bWVudGVkRmlsdGVyLnJlcXVlc3RzJ10uY291bnRcXFwiIFt2YWx1ZV09XFxcIm1ldHJpY3MubWV0ZXJzWydjb20uY29kYWhhbGUubWV0cmljcy5zZXJ2bGV0Lkluc3RydW1lbnRlZEZpbHRlci5yZXNwb25zZUNvZGVzLm5vdEZvdW5kJ10uY291bnRcXFwiIFtzdHJpcGVkXT1cXFwidHJ1ZVxcXCIgW2FuaW1hdGVkXT1cXFwidHJ1ZVxcXCIgdHlwZT1cXFwic3VjY2Vzc1xcXCI+IDxzcGFuPnt7bWV0cmljcy5tZXRlcnNbJ2NvbS5jb2RhaGFsZS5tZXRyaWNzLnNlcnZsZXQuSW5zdHJ1bWVudGVkRmlsdGVyLnJlc3BvbnNlQ29kZXMubm90Rm91bmQnXS5jb3VudH19PC9zcGFuPiA8L25nYi1wcm9ncmVzc2Jhcj4gPC90ZD4gPHRkIGNsYXNzPVxcXCJ0ZXh0LXJpZ2h0XFxcIj4ge3tmaWx0ZXJOYU4obWV0cmljcy5tZXRlcnNbJ2NvbS5jb2RhaGFsZS5tZXRyaWNzLnNlcnZsZXQuSW5zdHJ1bWVudGVkRmlsdGVyLnJlc3BvbnNlQ29kZXMubm90Rm91bmQnXS5tZWFuX3JhdGUpIHwgbnVtYmVyOicxLjAtMid9fSA8L3RkPiA8dGQgY2xhc3M9XFxcInRleHQtcmlnaHRcXFwiPiB7e2ZpbHRlck5hTihtZXRyaWNzLm1ldGVyc1snY29tLmNvZGFoYWxlLm1ldHJpY3Muc2VydmxldC5JbnN0cnVtZW50ZWRGaWx0ZXIucmVzcG9uc2VDb2Rlcy5ub3RGb3VuZCddLm0xX3JhdGUpIHwgbnVtYmVyOicxLjAtMid9fSA8L3RkPiA8dGQgY2xhc3M9XFxcInRleHQtcmlnaHRcXFwiPiB7e2ZpbHRlck5hTihtZXRyaWNzLm1ldGVyc1snY29tLmNvZGFoYWxlLm1ldHJpY3Muc2VydmxldC5JbnN0cnVtZW50ZWRGaWx0ZXIucmVzcG9uc2VDb2Rlcy5ub3RGb3VuZCddLm01X3JhdGUpIHwgbnVtYmVyOicxLjAtMid9fSA8L3RkPiA8dGQgY2xhc3M9XFxcInRleHQtcmlnaHRcXFwiPiB7e2ZpbHRlck5hTihtZXRyaWNzLm1ldGVyc1snY29tLmNvZGFoYWxlLm1ldHJpY3Muc2VydmxldC5JbnN0cnVtZW50ZWRGaWx0ZXIucmVzcG9uc2VDb2Rlcy5ub3RGb3VuZCddLm0xNV9yYXRlKSB8IG51bWJlcjonMS4wLTInfX0gPC90ZD4gPC90cj4gPHRyPiA8dGQgamhpVHJhbnNsYXRlPVxcXCJtZXRyaWNzLmp2bS5odHRwLmNvZGUuc2VydmVyZXJyb3JcXFwiPlNlcnZlciBlcnJvcjwvdGQ+IDx0ZD4gPG5nYi1wcm9ncmVzc2JhciBbbWF4XT1cXFwibWV0cmljcy50aW1lcnNbJ2NvbS5jb2RhaGFsZS5tZXRyaWNzLnNlcnZsZXQuSW5zdHJ1bWVudGVkRmlsdGVyLnJlcXVlc3RzJ10uY291bnRcXFwiIFt2YWx1ZV09XFxcIm1ldHJpY3MubWV0ZXJzWydjb20uY29kYWhhbGUubWV0cmljcy5zZXJ2bGV0Lkluc3RydW1lbnRlZEZpbHRlci5yZXNwb25zZUNvZGVzLnNlcnZlckVycm9yJ10uY291bnRcXFwiIFtzdHJpcGVkXT1cXFwidHJ1ZVxcXCIgW2FuaW1hdGVkXT1cXFwidHJ1ZVxcXCIgdHlwZT1cXFwic3VjY2Vzc1xcXCI+IDxzcGFuPnt7bWV0cmljcy5tZXRlcnNbJ2NvbS5jb2RhaGFsZS5tZXRyaWNzLnNlcnZsZXQuSW5zdHJ1bWVudGVkRmlsdGVyLnJlc3BvbnNlQ29kZXMuc2VydmVyRXJyb3InXS5jb3VudH19PC9zcGFuPiA8L25nYi1wcm9ncmVzc2Jhcj4gPC90ZD4gPHRkIGNsYXNzPVxcXCJ0ZXh0LXJpZ2h0XFxcIj4ge3tmaWx0ZXJOYU4obWV0cmljcy5tZXRlcnNbJ2NvbS5jb2RhaGFsZS5tZXRyaWNzLnNlcnZsZXQuSW5zdHJ1bWVudGVkRmlsdGVyLnJlc3BvbnNlQ29kZXMuc2VydmVyRXJyb3InXS5tZWFuX3JhdGUpIHwgbnVtYmVyOicxLjAtMid9fSA8L3RkPiA8dGQgY2xhc3M9XFxcInRleHQtcmlnaHRcXFwiPiB7e2ZpbHRlck5hTihtZXRyaWNzLm1ldGVyc1snY29tLmNvZGFoYWxlLm1ldHJpY3Muc2VydmxldC5JbnN0cnVtZW50ZWRGaWx0ZXIucmVzcG9uc2VDb2Rlcy5zZXJ2ZXJFcnJvciddLm0xX3JhdGUpIHwgbnVtYmVyOicxLjAtMid9fSA8L3RkPiA8dGQgY2xhc3M9XFxcInRleHQtcmlnaHRcXFwiPiB7e2ZpbHRlck5hTihtZXRyaWNzLm1ldGVyc1snY29tLmNvZGFoYWxlLm1ldHJpY3Muc2VydmxldC5JbnN0cnVtZW50ZWRGaWx0ZXIucmVzcG9uc2VDb2Rlcy5zZXJ2ZXJFcnJvciddLm01X3JhdGUpIHwgbnVtYmVyOicxLjAtMid9fSA8L3RkPiA8dGQgY2xhc3M9XFxcInRleHQtcmlnaHRcXFwiPiB7e2ZpbHRlck5hTihtZXRyaWNzLm1ldGVyc1snY29tLmNvZGFoYWxlLm1ldHJpY3Muc2VydmxldC5JbnN0cnVtZW50ZWRGaWx0ZXIucmVzcG9uc2VDb2Rlcy5zZXJ2ZXJFcnJvciddLm0xNV9yYXRlKSB8IG51bWJlcjonMS4wLTInfX0gPC90ZD4gPC90cj4gPC90Ym9keT4gPC90YWJsZT4gPC9kaXY+IDxoMyBqaGlUcmFuc2xhdGU9XFxcIm1ldHJpY3Muc2VydmljZXNzdGF0cy50aXRsZVxcXCI+U2VydmljZXMgc3RhdGlzdGljcyAodGltZSBpbiBtaWxsaXNlY29uZCk8L2gzPiA8ZGl2IGNsYXNzPVxcXCJ0YWJsZS1yZXNwb25zaXZlXFxcIiAqbmdJZj1cXFwiIXVwZGF0aW5nTWV0cmljc1xcXCI+IDx0YWJsZSBjbGFzcz1cXFwidGFibGUgdGFibGUtc3RyaXBlZFxcXCI+IDx0aGVhZD4gPHRyPiA8dGggamhpVHJhbnNsYXRlPVxcXCJtZXRyaWNzLnNlcnZpY2Vzc3RhdHMudGFibGUubmFtZVxcXCI+U2VydmljZSBuYW1lPC90aD4gPHRoIGNsYXNzPVxcXCJ0ZXh0LXJpZ2h0XFxcIiBqaGlUcmFuc2xhdGU9XFxcIm1ldHJpY3Muc2VydmljZXNzdGF0cy50YWJsZS5jb3VudFxcXCI+Q291bnQ8L3RoPiA8dGggY2xhc3M9XFxcInRleHQtcmlnaHRcXFwiIGpoaVRyYW5zbGF0ZT1cXFwibWV0cmljcy5zZXJ2aWNlc3N0YXRzLnRhYmxlLm1lYW5cXFwiPk1lYW48L3RoPiA8dGggY2xhc3M9XFxcInRleHQtcmlnaHRcXFwiIGpoaVRyYW5zbGF0ZT1cXFwibWV0cmljcy5zZXJ2aWNlc3N0YXRzLnRhYmxlLm1pblxcXCI+TWluPC90aD4gPHRoIGNsYXNzPVxcXCJ0ZXh0LXJpZ2h0XFxcIiBqaGlUcmFuc2xhdGU9XFxcIm1ldHJpY3Muc2VydmljZXNzdGF0cy50YWJsZS5wNTBcXFwiPnA1MDwvdGg+IDx0aCBjbGFzcz1cXFwidGV4dC1yaWdodFxcXCIgamhpVHJhbnNsYXRlPVxcXCJtZXRyaWNzLnNlcnZpY2Vzc3RhdHMudGFibGUucDc1XFxcIj5wNzU8L3RoPiA8dGggY2xhc3M9XFxcInRleHQtcmlnaHRcXFwiIGpoaVRyYW5zbGF0ZT1cXFwibWV0cmljcy5zZXJ2aWNlc3N0YXRzLnRhYmxlLnA5NVxcXCI+cDk1PC90aD4gPHRoIGNsYXNzPVxcXCJ0ZXh0LXJpZ2h0XFxcIiBqaGlUcmFuc2xhdGU9XFxcIm1ldHJpY3Muc2VydmljZXNzdGF0cy50YWJsZS5wOTlcXFwiPnA5OTwvdGg+IDx0aCBjbGFzcz1cXFwidGV4dC1yaWdodFxcXCIgamhpVHJhbnNsYXRlPVxcXCJtZXRyaWNzLnNlcnZpY2Vzc3RhdHMudGFibGUubWF4XFxcIj5NYXg8L3RoPiA8L3RyPiA8L3RoZWFkPiA8dGJvZHk+IDx0ciAqbmdGb3I9XFxcImxldCBlbnRyeSBvZiBzZXJ2aWNlc1N0YXRzIHwga2V5c1xcXCI+IDx0ZD57e2VudHJ5LmtleX19PC90ZD4gPHRkIGNsYXNzPVxcXCJ0ZXh0LXJpZ2h0XFxcIj57e2VudHJ5LnZhbHVlLmNvdW50fX08L3RkPiA8dGQgY2xhc3M9XFxcInRleHQtcmlnaHRcXFwiPnt7ZW50cnkudmFsdWUubWVhbiAqIDEwMDAgfCBudW1iZXI6JzEuMC0wJ319PC90ZD4gPHRkIGNsYXNzPVxcXCJ0ZXh0LXJpZ2h0XFxcIj57e2VudHJ5LnZhbHVlLm1pbiAqIDEwMDAgfCBudW1iZXI6JzEuMC0wJ319PC90ZD4gPHRkIGNsYXNzPVxcXCJ0ZXh0LXJpZ2h0XFxcIj57e2VudHJ5LnZhbHVlLnA1MCAqIDEwMDAgfCBudW1iZXI6JzEuMC0wJ319PC90ZD4gPHRkIGNsYXNzPVxcXCJ0ZXh0LXJpZ2h0XFxcIj57e2VudHJ5LnZhbHVlLnA3NSAqIDEwMDAgfCBudW1iZXI6JzEuMC0wJ319PC90ZD4gPHRkIGNsYXNzPVxcXCJ0ZXh0LXJpZ2h0XFxcIj57e2VudHJ5LnZhbHVlLnA5NSAqIDEwMDAgfCBudW1iZXI6JzEuMC0wJ319PC90ZD4gPHRkIGNsYXNzPVxcXCJ0ZXh0LXJpZ2h0XFxcIj57e2VudHJ5LnZhbHVlLnA5OSAqIDEwMDAgfCBudW1iZXI6JzEuMC0wJ319PC90ZD4gPHRkIGNsYXNzPVxcXCJ0ZXh0LXJpZ2h0XFxcIj57e2VudHJ5LnZhbHVlLm1heCAqIDEwMDAgfCBudW1iZXI6JzEuMC0wJ319PC90ZD4gPC90cj4gPC90Ym9keT4gPC90YWJsZT4gPC9kaXY+IDxoMyBqaGlUcmFuc2xhdGU9XFxcIm1ldHJpY3MuY2FjaGUudGl0bGVcXFwiPkNhY2hlIHN0YXRpc3RpY3M8L2gzPiA8ZGl2IGNsYXNzPVxcXCJ0YWJsZS1yZXNwb25zaXZlXFxcIiAqbmdJZj1cXFwiIXVwZGF0aW5nTWV0cmljc1xcXCI+IDx0YWJsZSBjbGFzcz1cXFwidGFibGUgdGFibGUtc3RyaXBlZFxcXCI+IDx0aGVhZD4gPHRyPiA8dGggamhpVHJhbnNsYXRlPVxcXCJtZXRyaWNzLmNhY2hlLmNhY2hlbmFtZVxcXCI+Q2FjaGUgbmFtZTwvdGg+IDx0aCBjbGFzcz1cXFwidGV4dC1yaWdodFxcXCIgZGF0YS10cmFuc2xhdGU9XFxcIm1ldHJpY3MuY2FjaGUuaGl0c1xcXCI+Q2FjaGUgSGl0czwvdGg+IDx0aCBjbGFzcz1cXFwidGV4dC1yaWdodFxcXCIgZGF0YS10cmFuc2xhdGU9XFxcIm1ldHJpY3MuY2FjaGUubWlzc2VzXFxcIj5DYWNoZSBNaXNzZXM8L3RoPiA8dGggY2xhc3M9XFxcInRleHQtcmlnaHRcXFwiIGRhdGEtdHJhbnNsYXRlPVxcXCJtZXRyaWNzLmNhY2hlLmdldHNcXFwiPkNhY2hlIEdldHM8L3RoPiA8dGggY2xhc3M9XFxcInRleHQtcmlnaHRcXFwiIGRhdGEtdHJhbnNsYXRlPVxcXCJtZXRyaWNzLmNhY2hlLnB1dHNcXFwiPkNhY2hlIFB1dHM8L3RoPiA8dGggY2xhc3M9XFxcInRleHQtcmlnaHRcXFwiIGRhdGEtdHJhbnNsYXRlPVxcXCJtZXRyaWNzLmNhY2hlLnJlbW92YWxzXFxcIj5DYWNoZSBSZW1vdmFsczwvdGg+IDx0aCBjbGFzcz1cXFwidGV4dC1yaWdodFxcXCIgZGF0YS10cmFuc2xhdGU9XFxcIm1ldHJpY3MuY2FjaGUuZXZpY3Rpb25zXFxcIj5DYWNoZSBFdmljdGlvbnM8L3RoPiA8dGggY2xhc3M9XFxcInRleHQtcmlnaHRcXFwiIGRhdGEtdHJhbnNsYXRlPVxcXCJtZXRyaWNzLmNhY2hlLmhpdFBlcmNlbnRcXFwiPkNhY2hlIEhpdCAlPC90aD4gPHRoIGNsYXNzPVxcXCJ0ZXh0LXJpZ2h0XFxcIiBkYXRhLXRyYW5zbGF0ZT1cXFwibWV0cmljcy5jYWNoZS5taXNzUGVyY2VudFxcXCI+Q2FjaGUgTWlzcyAlPC90aD4gPHRoIGNsYXNzPVxcXCJ0ZXh0LXJpZ2h0XFxcIiBkYXRhLXRyYW5zbGF0ZT1cXFwibWV0cmljcy5jYWNoZS5hdmVyYWdlR2V0VGltZVxcXCI+QXZlcmFnZSBnZXQgdGltZSAowrVzKTwvdGg+IDx0aCBjbGFzcz1cXFwidGV4dC1yaWdodFxcXCIgZGF0YS10cmFuc2xhdGU9XFxcIm1ldHJpY3MuY2FjaGUuYXZlcmFnZVB1dFRpbWVcXFwiPkF2ZXJhZ2UgcHV0IHRpbWUgKMK1cyk8L3RoPiA8dGggY2xhc3M9XFxcInRleHQtcmlnaHRcXFwiIGRhdGEtdHJhbnNsYXRlPVxcXCJtZXRyaWNzLmNhY2hlLmF2ZXJhZ2VSZW1vdmVUaW1lXFxcIj5BdmVyYWdlIHJlbW92ZSB0aW1lICjCtXMpPC90aD4gPC90cj4gPC90aGVhZD4gPHRib2R5PiA8dHIgKm5nRm9yPVxcXCJsZXQgZW50cnkgb2YgY2FjaGVzU3RhdHMgfCBrZXlzXFxcIj4gPHRkPnt7ZW50cnkua2V5fX08L3RkPiA8dGQgY2xhc3M9XFxcInRleHQtcmlnaHRcXFwiPnt7bWV0cmljcy5nYXVnZXNbZW50cnkua2V5ICsgJy5jYWNoZS1oaXRzJ10udmFsdWV9fTwvdGQ+IDx0ZCBjbGFzcz1cXFwidGV4dC1yaWdodFxcXCI+e3ttZXRyaWNzLmdhdWdlc1tlbnRyeS5rZXkgKyAnLmNhY2hlLW1pc3NlcyddLnZhbHVlfX08L3RkPiA8dGQgY2xhc3M9XFxcInRleHQtcmlnaHRcXFwiPnt7bWV0cmljcy5nYXVnZXNbZW50cnkua2V5ICsgJy5jYWNoZS1nZXRzJ10udmFsdWV9fTwvdGQ+IDx0ZCBjbGFzcz1cXFwidGV4dC1yaWdodFxcXCI+e3ttZXRyaWNzLmdhdWdlc1tlbnRyeS5rZXkgKyAnLmNhY2hlLXB1dHMnXS52YWx1ZX19PC90ZD4gPHRkIGNsYXNzPVxcXCJ0ZXh0LXJpZ2h0XFxcIj57e21ldHJpY3MuZ2F1Z2VzW2VudHJ5LmtleSArICcuY2FjaGUtcmVtb3ZhbHMnXS52YWx1ZX19PC90ZD4gPHRkIGNsYXNzPVxcXCJ0ZXh0LXJpZ2h0XFxcIj57e21ldHJpY3MuZ2F1Z2VzW2VudHJ5LmtleSArICcuY2FjaGUtZXZpY3Rpb25zJ10udmFsdWV9fTwvdGQ+IDx0ZCBjbGFzcz1cXFwidGV4dC1yaWdodFxcXCI+e3ttZXRyaWNzLmdhdWdlc1tlbnRyeS5rZXkgKyAnLmNhY2hlLWhpdC1wZXJjZW50YWdlJ10udmFsdWV9fTwvdGQ+IDx0ZCBjbGFzcz1cXFwidGV4dC1yaWdodFxcXCI+e3ttZXRyaWNzLmdhdWdlc1tlbnRyeS5rZXkgKyAnLmNhY2hlLW1pc3MtcGVyY2VudGFnZSddLnZhbHVlIH19PC90ZD4gPHRkIGNsYXNzPVxcXCJ0ZXh0LXJpZ2h0XFxcIj57e2ZpbHRlck5hTihtZXRyaWNzLmdhdWdlc1tlbnRyeS5rZXkgKyAnLmF2ZXJhZ2UtZ2V0LXRpbWUnXS52YWx1ZSkgfCBudW1iZXIgOiAnMS4yLTInIH19PC90ZD4gPHRkIGNsYXNzPVxcXCJ0ZXh0LXJpZ2h0XFxcIj57e2ZpbHRlck5hTihtZXRyaWNzLmdhdWdlc1tlbnRyeS5rZXkgKyAnLmF2ZXJhZ2UtcHV0LXRpbWUnXS52YWx1ZSkgfCBudW1iZXIgOiAnMS4yLTInfX08L3RkPiA8dGQgY2xhc3M9XFxcInRleHQtcmlnaHRcXFwiPnt7ZmlsdGVyTmFOKG1ldHJpY3MuZ2F1Z2VzW2VudHJ5LmtleSArICcuYXZlcmFnZS1yZW1vdmUtdGltZSddLnZhbHVlKSB8IG51bWJlciA6ICcxLjItMicgfX08L3RkPiA8L3RyPiA8L3Rib2R5PiA8L3RhYmxlPiA8L2Rpdj4gPGgzIGpoaVRyYW5zbGF0ZT1cXFwibWV0cmljcy5kYXRhc291cmNlLnRpdGxlXFxcIiAqbmdJZj1cXFwibWV0cmljcy5nYXVnZXMgJiYgbWV0cmljcy5nYXVnZXNbJ0hpa2FyaVBvb2wtMS5wb29sLlRvdGFsQ29ubmVjdGlvbnMnXSAmJiBtZXRyaWNzLmdhdWdlc1snSGlrYXJpUG9vbC0xLnBvb2wuVG90YWxDb25uZWN0aW9ucyddLnZhbHVlID4gMFxcXCI+RGF0YVNvdXJjZSBzdGF0aXN0aWNzICh0aW1lIGluIG1pbGxpc2Vjb25kKTwvaDM+IDxkaXYgY2xhc3M9XFxcInRhYmxlLXJlc3BvbnNpdmVcXFwiICpuZ0lmPVxcXCIhdXBkYXRpbmdNZXRyaWNzICYmIG1ldHJpY3MuZ2F1Z2VzICYmIG1ldHJpY3MuZ2F1Z2VzWydIaWthcmlQb29sLTEucG9vbC5Ub3RhbENvbm5lY3Rpb25zJ10gJiYgbWV0cmljcy5nYXVnZXNbJ0hpa2FyaVBvb2wtMS5wb29sLlRvdGFsQ29ubmVjdGlvbnMnXS52YWx1ZSA+IDBcXFwiPiA8dGFibGUgY2xhc3M9XFxcInRhYmxlIHRhYmxlLXN0cmlwZWRcXFwiPiA8dGhlYWQ+IDx0cj4gPHRoPjxzcGFuIGpoaVRyYW5zbGF0ZT1cXFwibWV0cmljcy5kYXRhc291cmNlLnVzYWdlXFxcIj5Vc2FnZTwvc3Bhbj4gKHt7bWV0cmljcy5nYXVnZXNbJ0hpa2FyaVBvb2wtMS5wb29sLkFjdGl2ZUNvbm5lY3Rpb25zJ10udmFsdWV9fSAvIHt7bWV0cmljcy5nYXVnZXNbJ0hpa2FyaVBvb2wtMS5wb29sLlRvdGFsQ29ubmVjdGlvbnMnXS52YWx1ZX19KTwvdGg+IDx0aCBjbGFzcz1cXFwidGV4dC1yaWdodFxcXCIgamhpVHJhbnNsYXRlPVxcXCJtZXRyaWNzLmRhdGFzb3VyY2UuY291bnRcXFwiPkNvdW50PC90aD4gPHRoIGNsYXNzPVxcXCJ0ZXh0LXJpZ2h0XFxcIiBqaGlUcmFuc2xhdGU9XFxcIm1ldHJpY3MuZGF0YXNvdXJjZS5tZWFuXFxcIj5NZWFuPC90aD4gPHRoIGNsYXNzPVxcXCJ0ZXh0LXJpZ2h0XFxcIiBqaGlUcmFuc2xhdGU9XFxcIm1ldHJpY3MuZGF0YXNvdXJjZS5taW5cXFwiPk1pbjwvdGg+IDx0aCBjbGFzcz1cXFwidGV4dC1yaWdodFxcXCIgamhpVHJhbnNsYXRlPVxcXCJtZXRyaWNzLmRhdGFzb3VyY2UucDUwXFxcIj5wNTA8L3RoPiA8dGggY2xhc3M9XFxcInRleHQtcmlnaHRcXFwiIGpoaVRyYW5zbGF0ZT1cXFwibWV0cmljcy5kYXRhc291cmNlLnA3NVxcXCI+cDc1PC90aD4gPHRoIGNsYXNzPVxcXCJ0ZXh0LXJpZ2h0XFxcIiBqaGlUcmFuc2xhdGU9XFxcIm1ldHJpY3MuZGF0YXNvdXJjZS5wOTVcXFwiPnA5NTwvdGg+IDx0aCBjbGFzcz1cXFwidGV4dC1yaWdodFxcXCIgamhpVHJhbnNsYXRlPVxcXCJtZXRyaWNzLmRhdGFzb3VyY2UucDk5XFxcIj5wOTk8L3RoPiA8dGggY2xhc3M9XFxcInRleHQtcmlnaHRcXFwiIGpoaVRyYW5zbGF0ZT1cXFwibWV0cmljcy5kYXRhc291cmNlLm1heFxcXCI+TWF4PC90aD4gPC90cj4gPC90aGVhZD4gPHRib2R5PiA8dHI+IDx0ZD4gPGRpdiBjbGFzcz1cXFwicHJvZ3Jlc3MgcHJvZ3Jlc3Mtc3RyaXBlZFxcXCI+IDxuZ2ItcHJvZ3Jlc3NiYXIgW21heF09XFxcIm1ldHJpY3MuZ2F1Z2VzWydIaWthcmlQb29sLTEucG9vbC5Ub3RhbENvbm5lY3Rpb25zJ10udmFsdWVcXFwiIFt2YWx1ZV09XFxcIm1ldHJpY3MuZ2F1Z2VzWydIaWthcmlQb29sLTEucG9vbC5BY3RpdmVDb25uZWN0aW9ucyddLnZhbHVlXFxcIiBbc3RyaXBlZF09XFxcInRydWVcXFwiIFthbmltYXRlZF09XFxcInRydWVcXFwiIHR5cGU9XFxcInN1Y2Nlc3NcXFwiPiA8c3Bhbj57e21ldHJpY3MuZ2F1Z2VzWydIaWthcmlQb29sLTEucG9vbC5BY3RpdmVDb25uZWN0aW9ucyddLnZhbHVlICogMTAwIC8gbWV0cmljcy5nYXVnZXNbJ0hpa2FyaVBvb2wtMS5wb29sLlRvdGFsQ29ubmVjdGlvbnMnXS52YWx1ZSB8IG51bWJlcjonMS4wLTAnfX0lPC9zcGFuPiA8L25nYi1wcm9ncmVzc2Jhcj4gPC9kaXY+IDwvdGQ+IDx0ZCBjbGFzcz1cXFwidGV4dC1yaWdodFxcXCI+e3ttZXRyaWNzLmhpc3RvZ3JhbXNbJ0hpa2FyaVBvb2wtMS5wb29sLlVzYWdlJ10uY291bnR9fTwvdGQ+IDx0ZCBjbGFzcz1cXFwidGV4dC1yaWdodFxcXCI+e3tmaWx0ZXJOYU4obWV0cmljcy5oaXN0b2dyYW1zWydIaWthcmlQb29sLTEucG9vbC5Vc2FnZSddLm1lYW4pIHwgbnVtYmVyOicxLjAtMid9fTwvdGQ+IDx0ZCBjbGFzcz1cXFwidGV4dC1yaWdodFxcXCI+e3tmaWx0ZXJOYU4obWV0cmljcy5oaXN0b2dyYW1zWydIaWthcmlQb29sLTEucG9vbC5Vc2FnZSddLm1pbikgfCBudW1iZXI6JzEuMC0yJ319PC90ZD4gPHRkIGNsYXNzPVxcXCJ0ZXh0LXJpZ2h0XFxcIj57e2ZpbHRlck5hTihtZXRyaWNzLmhpc3RvZ3JhbXNbJ0hpa2FyaVBvb2wtMS5wb29sLlVzYWdlJ10ucDUwKSB8IG51bWJlcjonMS4wLTInfX08L3RkPiA8dGQgY2xhc3M9XFxcInRleHQtcmlnaHRcXFwiPnt7ZmlsdGVyTmFOKG1ldHJpY3MuaGlzdG9ncmFtc1snSGlrYXJpUG9vbC0xLnBvb2wuVXNhZ2UnXS5wNzUpIHwgbnVtYmVyOicxLjAtMid9fTwvdGQ+IDx0ZCBjbGFzcz1cXFwidGV4dC1yaWdodFxcXCI+e3tmaWx0ZXJOYU4obWV0cmljcy5oaXN0b2dyYW1zWydIaWthcmlQb29sLTEucG9vbC5Vc2FnZSddLnA5NSkgfCBudW1iZXI6JzEuMC0yJ319PC90ZD4gPHRkIGNsYXNzPVxcXCJ0ZXh0LXJpZ2h0XFxcIj57e2ZpbHRlck5hTihtZXRyaWNzLmhpc3RvZ3JhbXNbJ0hpa2FyaVBvb2wtMS5wb29sLlVzYWdlJ10ucDk5KSB8IG51bWJlcjonMS4wLTInfX08L3RkPiA8dGQgY2xhc3M9XFxcInRleHQtcmlnaHRcXFwiPnt7ZmlsdGVyTmFOKG1ldHJpY3MuaGlzdG9ncmFtc1snSGlrYXJpUG9vbC0xLnBvb2wuVXNhZ2UnXS5tYXgpIHwgbnVtYmVyOicxLjAtMid9fTwvdGQ+IDwvdHI+IDwvdGJvZHk+IDwvdGFibGU+IDwvZGl2PiA8L2Rpdj4gXCI7XG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9zcmMvbWFpbi93ZWJhcHAvYXBwL2FkbWluL21ldHJpY3MvbWV0cmljcy5jb21wb25lbnQuaHRtbFxuLy8gbW9kdWxlIGlkID0gLi9zcmMvbWFpbi93ZWJhcHAvYXBwL2FkbWluL21ldHJpY3MvbWV0cmljcy5jb21wb25lbnQuaHRtbFxuLy8gbW9kdWxlIGNodW5rcyA9IDAiLCJpbXBvcnQgeyBDb21wb25lbnQsIE9uSW5pdCB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgTmdiTW9kYWwgfSBmcm9tICdAbmctYm9vdHN0cmFwL25nLWJvb3RzdHJhcCc7XG5cbmltcG9ydCB7IEpoaU1ldHJpY3NNb25pdG9yaW5nTW9kYWxDb21wb25lbnQgfSBmcm9tICcuL21ldHJpY3MtbW9kYWwuY29tcG9uZW50JztcbmltcG9ydCB7IEpoaU1ldHJpY3NTZXJ2aWNlIH0gZnJvbSAnLi9tZXRyaWNzLnNlcnZpY2UnO1xuXG5AQ29tcG9uZW50KHtcbiAgICBzZWxlY3RvcjogJ2poaS1tZXRyaWNzJyxcbiAgICB0ZW1wbGF0ZVVybDogJy4vbWV0cmljcy5jb21wb25lbnQuaHRtbCdcbn0pXG5leHBvcnQgY2xhc3MgSmhpTWV0cmljc01vbml0b3JpbmdDb21wb25lbnQgaW1wbGVtZW50cyBPbkluaXQge1xuICAgIG1ldHJpY3M6IGFueSA9IHt9O1xuICAgIGNhY2hlc1N0YXRzOiBhbnkgPSB7fTtcbiAgICBzZXJ2aWNlc1N0YXRzOiBhbnkgPSB7fTtcbiAgICB1cGRhdGluZ01ldHJpY3MgPSB0cnVlO1xuICAgIEpDQUNIRV9LRVk6IHN0cmluZztcblxuICAgIGNvbnN0cnVjdG9yKFxuICAgICAgICBwcml2YXRlIG1vZGFsU2VydmljZTogTmdiTW9kYWwsXG4gICAgICAgIHByaXZhdGUgbWV0cmljc1NlcnZpY2U6IEpoaU1ldHJpY3NTZXJ2aWNlXG4gICAgKSB7XG4gICAgICAgIHRoaXMuSkNBQ0hFX0tFWSA9ICdqY2FjaGUuc3RhdGlzdGljcyc7XG4gICAgfVxuXG4gICAgbmdPbkluaXQoKSB7XG4gICAgICAgIHRoaXMucmVmcmVzaCgpO1xuICAgIH1cblxuICAgIHJlZnJlc2goKSB7XG4gICAgICAgIHRoaXMudXBkYXRpbmdNZXRyaWNzID0gdHJ1ZTtcbiAgICAgICAgdGhpcy5tZXRyaWNzU2VydmljZS5nZXRNZXRyaWNzKCkuc3Vic2NyaWJlKChtZXRyaWNzKSA9PiB7XG4gICAgICAgICAgICB0aGlzLm1ldHJpY3MgPSBtZXRyaWNzO1xuICAgICAgICAgICAgdGhpcy51cGRhdGluZ01ldHJpY3MgPSBmYWxzZTtcbiAgICAgICAgICAgIHRoaXMuc2VydmljZXNTdGF0cyA9IHt9O1xuICAgICAgICAgICAgdGhpcy5jYWNoZXNTdGF0cyA9IHt9O1xuICAgICAgICAgICAgT2JqZWN0LmtleXMobWV0cmljcy50aW1lcnMpLmZvckVhY2goKGtleSkgPT4ge1xuICAgICAgICAgICAgICAgIGNvbnN0IHZhbHVlID0gbWV0cmljcy50aW1lcnNba2V5XTtcbiAgICAgICAgICAgICAgICBpZiAoa2V5LmluZGV4T2YoJ3dlYi5yZXN0JykgIT09IC0xIHx8IGtleS5pbmRleE9mKCdzZXJ2aWNlJykgIT09IC0xKSB7XG4gICAgICAgICAgICAgICAgICAgIHRoaXMuc2VydmljZXNTdGF0c1trZXldID0gdmFsdWU7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICBPYmplY3Qua2V5cyhtZXRyaWNzLmdhdWdlcykuZm9yRWFjaCgoa2V5KSA9PiB7XG4gICAgICAgICAgICAgICAgaWYgKGtleS5pbmRleE9mKCdqY2FjaGUuc3RhdGlzdGljcycpICE9PSAtMSkge1xuICAgICAgICAgICAgICAgICAgICBjb25zdCB2YWx1ZSA9IG1ldHJpY3MuZ2F1Z2VzW2tleV0udmFsdWU7XG4gICAgICAgICAgICAgICAgICAgIC8vIHJlbW92ZSBnZXRzIG9yIHB1dHNcbiAgICAgICAgICAgICAgICAgICAgY29uc3QgaW5kZXggPSBrZXkubGFzdEluZGV4T2YoJy4nKTtcbiAgICAgICAgICAgICAgICAgICAgY29uc3QgbmV3S2V5ID0ga2V5LnN1YnN0cigwLCBpbmRleCk7XG5cbiAgICAgICAgICAgICAgICAgICAgLy8gS2VlcCB0aGUgbmFtZSBvZiB0aGUgZG9tYWluXG4gICAgICAgICAgICAgICAgICAgIHRoaXMuY2FjaGVzU3RhdHNbbmV3S2V5XSA9IHtcbiAgICAgICAgICAgICAgICAgICAgICAgICduYW1lJzogdGhpcy5KQ0FDSEVfS0VZLmxlbmd0aCxcbiAgICAgICAgICAgICAgICAgICAgICAgICd2YWx1ZSc6IHZhbHVlXG4gICAgICAgICAgICAgICAgICAgIH07XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfSk7XG4gICAgICAgIH0pO1xuICAgIH1cblxuICAgIHJlZnJlc2hUaHJlYWREdW1wRGF0YSgpIHtcbiAgICAgICAgdGhpcy5tZXRyaWNzU2VydmljZS50aHJlYWREdW1wKCkuc3Vic2NyaWJlKChkYXRhKSA9PiB7XG4gICAgICAgICAgICBjb25zdCBtb2RhbFJlZiAgPSB0aGlzLm1vZGFsU2VydmljZS5vcGVuKEpoaU1ldHJpY3NNb25pdG9yaW5nTW9kYWxDb21wb25lbnQsIHsgc2l6ZTogJ2xnJ30pO1xuICAgICAgICAgICAgbW9kYWxSZWYuY29tcG9uZW50SW5zdGFuY2UudGhyZWFkRHVtcCA9IGRhdGE7XG4gICAgICAgICAgICBtb2RhbFJlZi5yZXN1bHQudGhlbigocmVzdWx0KSA9PiB7XG4gICAgICAgICAgICAgICAgLy8gTGVmdCBibGFuayBpbnRlbnRpb25hbGx5LCBub3RoaW5nIHRvIGRvIGhlcmVcbiAgICAgICAgICAgIH0sIChyZWFzb24pID0+IHtcbiAgICAgICAgICAgICAgICAvLyBMZWZ0IGJsYW5rIGludGVudGlvbmFsbHksIG5vdGhpbmcgdG8gZG8gaGVyZVxuICAgICAgICAgICAgfSk7XG4gICAgICAgIH0pO1xuICAgIH1cblxuICAgIGZpbHRlck5hTihpbnB1dCkge1xuICAgICAgICBpZiAoaXNOYU4oaW5wdXQpKSB7XG4gICAgICAgICAgICByZXR1cm4gMDtcbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gaW5wdXQ7XG4gICAgfVxuXG59XG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9+L3RzbGludC1sb2FkZXIhLi9zcmMvbWFpbi93ZWJhcHAvYXBwL2FkbWluL21ldHJpY3MvbWV0cmljcy5jb21wb25lbnQudHMiLCJpbXBvcnQgeyBSb3V0ZSB9IGZyb20gJ0Bhbmd1bGFyL3JvdXRlcic7XG5cbmltcG9ydCB7IEpoaU1ldHJpY3NNb25pdG9yaW5nQ29tcG9uZW50IH0gZnJvbSAnLi9tZXRyaWNzLmNvbXBvbmVudCc7XG5cbmV4cG9ydCBjb25zdCBtZXRyaWNzUm91dGU6IFJvdXRlID0ge1xuICAgIHBhdGg6ICdqaGktbWV0cmljcycsXG4gICAgY29tcG9uZW50OiBKaGlNZXRyaWNzTW9uaXRvcmluZ0NvbXBvbmVudCxcbiAgICBkYXRhOiB7XG4gICAgICAgIHBhZ2VUaXRsZTogJ21ldHJpY3MudGl0bGUnXG4gICAgfVxufTtcblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL34vdHNsaW50LWxvYWRlciEuL3NyYy9tYWluL3dlYmFwcC9hcHAvYWRtaW4vbWV0cmljcy9tZXRyaWNzLnJvdXRlLnRzIiwiaW1wb3J0IHsgSW5qZWN0YWJsZSB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgSHR0cCwgUmVzcG9uc2UgfSBmcm9tICdAYW5ndWxhci9odHRwJztcbmltcG9ydCB7IE9ic2VydmFibGUgfSBmcm9tICdyeGpzL1J4JztcblxuQEluamVjdGFibGUoKVxuZXhwb3J0IGNsYXNzIEpoaU1ldHJpY3NTZXJ2aWNlIHtcblxuICAgIGNvbnN0cnVjdG9yKHByaXZhdGUgaHR0cDogSHR0cCkge31cblxuICAgIGdldE1ldHJpY3MoKTogT2JzZXJ2YWJsZTxhbnk+IHtcbiAgICAgICAgcmV0dXJuIHRoaXMuaHR0cC5nZXQoJ21hbmFnZW1lbnQvbWV0cmljcycpLm1hcCgocmVzOiBSZXNwb25zZSkgPT4gcmVzLmpzb24oKSk7XG4gICAgfVxuXG4gICAgdGhyZWFkRHVtcCgpOiBPYnNlcnZhYmxlPGFueT4ge1xuICAgICAgICByZXR1cm4gdGhpcy5odHRwLmdldCgnbWFuYWdlbWVudC9kdW1wJykubWFwKChyZXM6IFJlc3BvbnNlKSA9PiByZXMuanNvbigpKTtcbiAgICB9XG59XG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9+L3RzbGludC1sb2FkZXIhLi9zcmMvbWFpbi93ZWJhcHAvYXBwL2FkbWluL21ldHJpY3MvbWV0cmljcy5zZXJ2aWNlLnRzIiwibW9kdWxlLmV4cG9ydHMgPSBcIjxkaXY+IDxoMiBqaGlUcmFuc2xhdGU9XFxcInRyYWNrZXIudGl0bGVcXFwiPlJlYWwtdGltZSB1c2VyIGFjdGl2aXRpZXM8L2gyPiA8ZGl2IGNsYXNzPVxcXCJ0YWJsZS1yZXNwb25zaXZlXFxcIj4gPHRhYmxlIGNsYXNzPVxcXCJ0YWJsZSB0YWJsZS1zdHJpcGVkXFxcIj4gPHRoZWFkPiA8dHI+IDx0aCBqaGlUcmFuc2xhdGU9XFxcInRyYWNrZXIudGFibGUudXNlcmxvZ2luXFxcIj5Vc2VyPC90aD4gPHRoIGpoaVRyYW5zbGF0ZT1cXFwidHJhY2tlci50YWJsZS5pcGFkZHJlc3NcXFwiPklQIEFkZHJlc3M8L3RoPiA8dGggamhpVHJhbnNsYXRlPVxcXCJ0cmFja2VyLnRhYmxlLnBhZ2VcXFwiPkN1cnJlbnQgcGFnZTwvdGg+IDx0aCBqaGlUcmFuc2xhdGU9XFxcInRyYWNrZXIudGFibGUudGltZVxcXCI+VGltZTwvdGg+IDx0aD48L3RoPiA8L3RyPiA8L3RoZWFkPiA8dGJvZHk+IDx0ciAqbmdGb3I9XFxcImxldCBhY3Rpdml0eSBvZiBhY3Rpdml0aWVzXFxcIj4gPHRkPnt7YWN0aXZpdHkudXNlckxvZ2lufX08L3RkPiA8dGQ+e3thY3Rpdml0eS5pcEFkZHJlc3N9fTwvdGQ+IDx0ZD57e2FjdGl2aXR5LnBhZ2V9fTwvdGQ+IDx0ZD57e2FjdGl2aXR5LnRpbWUgfCBkYXRlOid5eXl5LU1NLWRkIEhIOm1tOnNzJ319PC90ZD4gPC90cj4gPC90Ym9keT4gPC90YWJsZT4gPC9kaXY+IDwvZGl2PiBcIjtcblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL3NyYy9tYWluL3dlYmFwcC9hcHAvYWRtaW4vdHJhY2tlci90cmFja2VyLmNvbXBvbmVudC5odG1sXG4vLyBtb2R1bGUgaWQgPSAuL3NyYy9tYWluL3dlYmFwcC9hcHAvYWRtaW4vdHJhY2tlci90cmFja2VyLmNvbXBvbmVudC5odG1sXG4vLyBtb2R1bGUgY2h1bmtzID0gMCIsImltcG9ydCB7IENvbXBvbmVudCwgT25Jbml0LCBPbkRlc3Ryb3kgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcblxuaW1wb3J0IHsgSmhpVHJhY2tlclNlcnZpY2UgfSBmcm9tICcuLi8uLi9zaGFyZWQnO1xuXG5AQ29tcG9uZW50KHtcbiAgICBzZWxlY3RvcjogJ2poaS10cmFja2VyJyxcbiAgICB0ZW1wbGF0ZVVybDogJy4vdHJhY2tlci5jb21wb25lbnQuaHRtbCdcbn0pXG5leHBvcnQgY2xhc3MgSmhpVHJhY2tlckNvbXBvbmVudCBpbXBsZW1lbnRzIE9uSW5pdCwgT25EZXN0cm95IHtcblxuICAgIGFjdGl2aXRpZXM6IGFueVtdID0gW107XG5cbiAgICBjb25zdHJ1Y3RvcihcbiAgICAgICAgcHJpdmF0ZSB0cmFja2VyU2VydmljZTogSmhpVHJhY2tlclNlcnZpY2VcbiAgICApIHtcbiAgICB9XG5cbiAgICBzaG93QWN0aXZpdHkoYWN0aXZpdHk6IGFueSkge1xuICAgICAgICBsZXQgZXhpc3RpbmdBY3Rpdml0eSA9IGZhbHNlO1xuICAgICAgICBmb3IgKGxldCBpbmRleCA9IDA7IGluZGV4IDwgdGhpcy5hY3Rpdml0aWVzLmxlbmd0aDsgaW5kZXgrKykge1xuICAgICAgICAgICAgaWYgKHRoaXMuYWN0aXZpdGllc1tpbmRleF0uc2Vzc2lvbklkID09PSBhY3Rpdml0eS5zZXNzaW9uSWQpIHtcbiAgICAgICAgICAgICAgICBleGlzdGluZ0FjdGl2aXR5ID0gdHJ1ZTtcbiAgICAgICAgICAgICAgICBpZiAoIGFjdGl2aXR5LnBhZ2UgPT09ICdsb2dvdXQnICkge1xuICAgICAgICAgICAgICAgICAgICB0aGlzLmFjdGl2aXRpZXMuc3BsaWNlKGluZGV4LCAxKTtcbiAgICAgICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgICAgICB0aGlzLmFjdGl2aXRpZXNbaW5kZXhdID0gYWN0aXZpdHk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICAgIGlmICghZXhpc3RpbmdBY3Rpdml0eSAmJiAoYWN0aXZpdHkucGFnZSAhPT0gJ2xvZ291dCcpKSB7XG4gICAgICAgICAgICB0aGlzLmFjdGl2aXRpZXMucHVzaChhY3Rpdml0eSk7XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICBuZ09uSW5pdCgpIHtcbiAgICAgICAgdGhpcy50cmFja2VyU2VydmljZS5zdWJzY3JpYmUoKTtcbiAgICAgICAgdGhpcy50cmFja2VyU2VydmljZS5yZWNlaXZlKCkuc3Vic2NyaWJlKChhY3Rpdml0eSkgPT4ge1xuICAgICAgICAgICAgdGhpcy5zaG93QWN0aXZpdHkoYWN0aXZpdHkpO1xuICAgICAgICB9KTtcbiAgICB9XG5cbiAgICBuZ09uRGVzdHJveSgpIHtcbiAgICAgICAgdGhpcy50cmFja2VyU2VydmljZS51bnN1YnNjcmliZSgpO1xuICAgIH1cbn1cblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL34vdHNsaW50LWxvYWRlciEuL3NyYy9tYWluL3dlYmFwcC9hcHAvYWRtaW4vdHJhY2tlci90cmFja2VyLmNvbXBvbmVudC50cyIsImltcG9ydCB7IFJvdXRlIH0gZnJvbSAnQGFuZ3VsYXIvcm91dGVyJztcblxuaW1wb3J0IHsgVXNlclJvdXRlQWNjZXNzU2VydmljZSB9IGZyb20gJy4uLy4uL3NoYXJlZCc7XG5pbXBvcnQgeyBKaGlUcmFja2VyQ29tcG9uZW50IH0gZnJvbSAnLi90cmFja2VyLmNvbXBvbmVudCc7XG5pbXBvcnQgeyBKaGlUcmFja2VyU2VydmljZSwgUHJpbmNpcGFsIH0gZnJvbSAnLi4vLi4vc2hhcmVkJztcblxuZXhwb3J0IGNvbnN0IHRyYWNrZXJSb3V0ZTogUm91dGUgPSB7XG4gICAgcGF0aDogJ2poaS10cmFja2VyJyxcbiAgICBjb21wb25lbnQ6IEpoaVRyYWNrZXJDb21wb25lbnQsXG4gICAgZGF0YToge1xuICAgICAgICBwYWdlVGl0bGU6ICd0cmFja2VyLnRpdGxlJ1xuICAgIH1cbn07XG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9+L3RzbGludC1sb2FkZXIhLi9zcmMvbWFpbi93ZWJhcHAvYXBwL2FkbWluL3RyYWNrZXIvdHJhY2tlci5yb3V0ZS50cyIsIm1vZHVsZS5leHBvcnRzID0gXCI8Zm9ybSBuYW1lPVxcXCJkZWxldGVGb3JtXFxcIiAobmdTdWJtaXQpPVxcXCJjb25maXJtRGVsZXRlKHVzZXIubG9naW4pXFxcIj4gPGRpdiBjbGFzcz1cXFwibW9kYWwtaGVhZGVyXFxcIj4gPGg0IGNsYXNzPVxcXCJtb2RhbC10aXRsZVxcXCIgamhpVHJhbnNsYXRlPVxcXCJlbnRpdHkuZGVsZXRlLnRpdGxlXFxcIj5Db25maXJtIGRlbGV0ZSBvcGVyYXRpb248L2g0PiA8YnV0dG9uIHR5cGU9XFxcImJ1dHRvblxcXCIgY2xhc3M9XFxcImNsb3NlXFxcIiBkYXRhLWRpc21pc3M9XFxcIm1vZGFsXFxcIiBhcmlhLWhpZGRlbj1cXFwidHJ1ZVxcXCIgKGNsaWNrKT1cXFwiY2xlYXIoKVxcXCI+JnRpbWVzOzwvYnV0dG9uPiA8L2Rpdj4gPGRpdiBjbGFzcz1cXFwibW9kYWwtYm9keVxcXCI+IDxqaGktYWxlcnQtZXJyb3I+PC9qaGktYWxlcnQtZXJyb3I+IDxwIGpoaVRyYW5zbGF0ZT1cXFwidXNlck1hbmFnZW1lbnQuZGVsZXRlLnF1ZXN0aW9uXFxcIiB0cmFuc2xhdGVWYWx1ZXM9XFxcIntsb2dpbjogJ3t7dXNlci5sb2dpbn19J31cXFwiPkFyZSB5b3Ugc3VyZSB5b3Ugd2FudCB0byBkZWxldGUgdGhpcyBVc2VyPzwvcD4gPC9kaXY+IDxkaXYgY2xhc3M9XFxcIm1vZGFsLWZvb3RlclxcXCI+IDxidXR0b24gdHlwZT1cXFwiYnV0dG9uXFxcIiBjbGFzcz1cXFwiYnRuIGJ0bi1zZWNvbmRhcnlcXFwiIGRhdGEtZGlzbWlzcz1cXFwibW9kYWxcXFwiIChjbGljayk9XFxcImNsZWFyKClcXFwiPiA8c3BhbiBjbGFzcz1cXFwiZmEgZmEtYmFuXFxcIj48L3NwYW4+Jm5ic3A7PHNwYW4gamhpVHJhbnNsYXRlPVxcXCJlbnRpdHkuYWN0aW9uLmNhbmNlbFxcXCI+Q2FuY2VsPC9zcGFuPiA8L2J1dHRvbj4gPGJ1dHRvbiB0eXBlPVxcXCJzdWJtaXRcXFwiIGNsYXNzPVxcXCJidG4gYnRuLWRhbmdlclxcXCI+IDxzcGFuIGNsYXNzPVxcXCJmYSBmYS1yZW1vdmVcXFwiPjwvc3Bhbj4mbmJzcDs8c3BhbiBqaGlUcmFuc2xhdGU9XFxcImVudGl0eS5hY3Rpb24uZGVsZXRlXFxcIj5EZWxldGU8L3NwYW4+IDwvYnV0dG9uPiA8L2Rpdj4gPC9mb3JtPiBcIjtcblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL3NyYy9tYWluL3dlYmFwcC9hcHAvYWRtaW4vdXNlci1tYW5hZ2VtZW50L3VzZXItbWFuYWdlbWVudC1kZWxldGUtZGlhbG9nLmNvbXBvbmVudC5odG1sXG4vLyBtb2R1bGUgaWQgPSAuL3NyYy9tYWluL3dlYmFwcC9hcHAvYWRtaW4vdXNlci1tYW5hZ2VtZW50L3VzZXItbWFuYWdlbWVudC1kZWxldGUtZGlhbG9nLmNvbXBvbmVudC5odG1sXG4vLyBtb2R1bGUgY2h1bmtzID0gMCIsImltcG9ydCB7IENvbXBvbmVudCwgT25Jbml0LCBPbkRlc3Ryb3kgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IEFjdGl2YXRlZFJvdXRlIH0gZnJvbSAnQGFuZ3VsYXIvcm91dGVyJztcbmltcG9ydCB7IE5nYkFjdGl2ZU1vZGFsLCBOZ2JNb2RhbFJlZiB9IGZyb20gJ0BuZy1ib290c3RyYXAvbmctYm9vdHN0cmFwJztcbmltcG9ydCB7IEFsZXJ0U2VydmljZSwgRXZlbnRNYW5hZ2VyIH0gZnJvbSAnbmctamhpcHN0ZXInO1xuXG5pbXBvcnQgeyBVc2VyLCBVc2VyU2VydmljZSB9IGZyb20gJy4uLy4uL3NoYXJlZCc7XG5pbXBvcnQgeyBVc2VyTW9kYWxTZXJ2aWNlIH0gZnJvbSAnLi91c2VyLW1vZGFsLnNlcnZpY2UnO1xuXG5AQ29tcG9uZW50KHtcbiAgICBzZWxlY3RvcjogJ2poaS11c2VyLW1nbXQtZGVsZXRlLWRpYWxvZycsXG4gICAgdGVtcGxhdGVVcmw6ICcuL3VzZXItbWFuYWdlbWVudC1kZWxldGUtZGlhbG9nLmNvbXBvbmVudC5odG1sJ1xufSlcbmV4cG9ydCBjbGFzcyBVc2VyTWdtdERlbGV0ZURpYWxvZ0NvbXBvbmVudCB7XG5cbiAgICB1c2VyOiBVc2VyO1xuXG4gICAgY29uc3RydWN0b3IoXG4gICAgICAgIHByaXZhdGUgdXNlclNlcnZpY2U6IFVzZXJTZXJ2aWNlLFxuICAgICAgICBwdWJsaWMgYWN0aXZlTW9kYWw6IE5nYkFjdGl2ZU1vZGFsLFxuICAgICAgICBwcml2YXRlIGFsZXJ0U2VydmljZTogQWxlcnRTZXJ2aWNlLFxuICAgICAgICBwcml2YXRlIGV2ZW50TWFuYWdlcjogRXZlbnRNYW5hZ2VyXG4gICAgKSB7XG4gICAgfVxuXG4gICAgY2xlYXIoKSB7XG4gICAgICAgIHRoaXMuYWN0aXZlTW9kYWwuZGlzbWlzcygnY2FuY2VsJyk7XG4gICAgfVxuXG4gICAgY29uZmlybURlbGV0ZShsb2dpbikge1xuICAgICAgICB0aGlzLnVzZXJTZXJ2aWNlLmRlbGV0ZShsb2dpbikuc3Vic2NyaWJlKChyZXNwb25zZSkgPT4ge1xuICAgICAgICAgICAgdGhpcy5ldmVudE1hbmFnZXIuYnJvYWRjYXN0KHsgbmFtZTogJ3VzZXJMaXN0TW9kaWZpY2F0aW9uJyxcbiAgICAgICAgICAgICAgICBjb250ZW50OiAnRGVsZXRlZCBhIHVzZXInfSk7XG4gICAgICAgICAgICB0aGlzLmFjdGl2ZU1vZGFsLmRpc21pc3ModHJ1ZSk7XG4gICAgICAgIH0pO1xuICAgICAgICB0aGlzLmFsZXJ0U2VydmljZS5zdWNjZXNzKCd1c2VyTWFuYWdlbWVudC5kZWxldGVkJywgeyBwYXJhbSA6IGxvZ2luIH0sIG51bGwpO1xuICAgIH1cbn1cblxuQENvbXBvbmVudCh7XG4gICAgc2VsZWN0b3I6ICdqaGktdXNlci1kZWxldGUtZGlhbG9nJyxcbiAgICB0ZW1wbGF0ZTogJydcbn0pXG5leHBvcnQgY2xhc3MgVXNlckRlbGV0ZURpYWxvZ0NvbXBvbmVudCBpbXBsZW1lbnRzIE9uSW5pdCwgT25EZXN0cm95IHtcblxuICAgIG1vZGFsUmVmOiBOZ2JNb2RhbFJlZjtcbiAgICByb3V0ZVN1YjogYW55O1xuXG4gICAgY29uc3RydWN0b3IoXG4gICAgICAgIHByaXZhdGUgcm91dGU6IEFjdGl2YXRlZFJvdXRlLFxuICAgICAgICBwcml2YXRlIHVzZXJNb2RhbFNlcnZpY2U6IFVzZXJNb2RhbFNlcnZpY2VcbiAgICApIHt9XG5cbiAgICBuZ09uSW5pdCgpIHtcbiAgICAgICAgdGhpcy5yb3V0ZVN1YiA9IHRoaXMucm91dGUucGFyYW1zLnN1YnNjcmliZSgocGFyYW1zKSA9PiB7XG4gICAgICAgICAgICB0aGlzLm1vZGFsUmVmID0gdGhpcy51c2VyTW9kYWxTZXJ2aWNlLm9wZW4oVXNlck1nbXREZWxldGVEaWFsb2dDb21wb25lbnQsIHBhcmFtc1snbG9naW4nXSk7XG4gICAgICAgIH0pO1xuICAgIH1cblxuICAgIG5nT25EZXN0cm95KCkge1xuICAgICAgICB0aGlzLnJvdXRlU3ViLnVuc3Vic2NyaWJlKCk7XG4gICAgfVxufVxuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vfi90c2xpbnQtbG9hZGVyIS4vc3JjL21haW4vd2ViYXBwL2FwcC9hZG1pbi91c2VyLW1hbmFnZW1lbnQvdXNlci1tYW5hZ2VtZW50LWRlbGV0ZS1kaWFsb2cuY29tcG9uZW50LnRzIiwibW9kdWxlLmV4cG9ydHMgPSBcIjxkaXYgKm5nSWY9XFxcInVzZXJcXFwiPiA8aDI+IDxzcGFuIGpoaVRyYW5zbGF0ZT1cXFwidXNlck1hbmFnZW1lbnQuZGV0YWlsLnRpdGxlXFxcIj5Vc2VyPC9zcGFuPiBbPGI+e3t1c2VyLmxvZ2lufX08L2I+XSA8L2gyPiA8ZGwgY2xhc3M9XFxcInJvdy1tZCBqaC1lbnRpdHktZGV0YWlsc1xcXCI+IDxkdD48c3BhbiBqaGlUcmFuc2xhdGU9XFxcInVzZXJNYW5hZ2VtZW50LmxvZ2luXFxcIj5Mb2dpbjwvc3Bhbj48L2R0PiA8ZGQ+IDxzcGFuPnt7dXNlci5sb2dpbn19PC9zcGFuPiA8c3BhbiBjbGFzcz1cXFwiYmFkZ2UgYmFkZ2UtZGFuZ2VyXFxcIiAqbmdJZj1cXFwiIXVzZXIuYWN0aXZhdGVkXFxcIiBqaGlUcmFuc2xhdGU9XFxcInVzZXJNYW5hZ2VtZW50LmRlYWN0aXZhdGVkXFxcIj5EZWFjdGl2YXRlZDwvc3Bhbj4gPHNwYW4gY2xhc3M9XFxcImJhZGdlIGJhZGdlLXN1Y2Nlc3NcXFwiICpuZ0lmPVxcXCJ1c2VyLmFjdGl2YXRlZFxcXCIgamhpVHJhbnNsYXRlPVxcXCJ1c2VyTWFuYWdlbWVudC5hY3RpdmF0ZWRcXFwiPkFjdGl2YXRlZDwvc3Bhbj4gPC9kZD4gPGR0PjxzcGFuIGpoaVRyYW5zbGF0ZT1cXFwidXNlck1hbmFnZW1lbnQuZmlyc3ROYW1lXFxcIj5GaXJzdCBOYW1lPC9zcGFuPjwvZHQ+IDxkZD57e3VzZXIuZmlyc3ROYW1lfX08L2RkPiA8ZHQ+PHNwYW4gamhpVHJhbnNsYXRlPVxcXCJ1c2VyTWFuYWdlbWVudC5sYXN0TmFtZVxcXCI+TGFzdCBOYW1lPC9zcGFuPjwvZHQ+IDxkZD57e3VzZXIubGFzdE5hbWV9fTwvZGQ+IDxkdD48c3BhbiBqaGlUcmFuc2xhdGU9XFxcInVzZXJNYW5hZ2VtZW50LmVtYWlsXFxcIj5FbWFpbDwvc3Bhbj48L2R0PiA8ZGQ+e3t1c2VyLmVtYWlsfX08L2RkPiA8ZHQ+PHNwYW4gamhpVHJhbnNsYXRlPVxcXCJ1c2VyTWFuYWdlbWVudC5sYW5nS2V5XFxcIj5MYW5nIEtleTwvc3Bhbj48L2R0PiA8ZGQ+e3t1c2VyLmxhbmdLZXl9fTwvZGQ+IDxkdD48c3BhbiBqaGlUcmFuc2xhdGU9XFxcInVzZXJNYW5hZ2VtZW50LmNyZWF0ZWRCeVxcXCI+Q3JlYXRlZCBCeTwvc3Bhbj48L2R0PiA8ZGQ+e3t1c2VyLmNyZWF0ZWRCeX19PC9kZD4gPGR0PjxzcGFuIGpoaVRyYW5zbGF0ZT1cXFwidXNlck1hbmFnZW1lbnQuY3JlYXRlZERhdGVcXFwiPkNyZWF0ZWQgRGF0ZTwvc3Bhbj48L2R0PiA8ZGQ+e3t1c2VyLmNyZWF0ZWREYXRlIHwgZGF0ZTonZGQvTU0veXkgSEg6bW0nIH19PC9kZD4gPGR0PjxzcGFuIGpoaVRyYW5zbGF0ZT1cXFwidXNlck1hbmFnZW1lbnQubGFzdE1vZGlmaWVkQnlcXFwiPkxhc3QgTW9kaWZpZWQgQnk8L3NwYW4+PC9kdD4gPGRkPnt7dXNlci5sYXN0TW9kaWZpZWRCeX19PC9kZD4gPGR0PjxzcGFuIGpoaVRyYW5zbGF0ZT1cXFwidXNlck1hbmFnZW1lbnQubGFzdE1vZGlmaWVkRGF0ZVxcXCI+TGFzdCBNb2RpZmllZCBEYXRlPC9zcGFuPjwvZHQ+IDxkZD57e3VzZXIubGFzdE1vZGlmaWVkRGF0ZSB8IGRhdGU6J2RkL01NL3l5IEhIOm1tJ319PC9kZD4gPGR0PjxzcGFuIGpoaVRyYW5zbGF0ZT1cXFwidXNlck1hbmFnZW1lbnQucHJvZmlsZXNcXFwiPlByb2ZpbGVzPC9zcGFuPjwvZHQ+IDxkZD4gPHVsIGNsYXNzPVxcXCJsaXN0LXVuc3R5bGVkXFxcIj4gPGxpICpuZ0Zvcj1cXFwibGV0IGF1dGhvcml0eSBvZiB1c2VyLmF1dGhvcml0aWVzXFxcIj4gPHNwYW4gY2xhc3M9XFxcImJhZGdlIGJhZGdlLWluZm9cXFwiPnt7YXV0aG9yaXR5fX08L3NwYW4+IDwvbGk+IDwvdWw+IDwvZGQ+IDwvZGw+IDxidXR0b24gdHlwZT1cXFwic3VibWl0XFxcIiByb3V0ZXJMaW5rPVxcXCIvdXNlci1tYW5hZ2VtZW50XFxcIiBjbGFzcz1cXFwiYnRuIGJ0bi1pbmZvXFxcIj4gPHNwYW4gY2xhc3M9XFxcImZhIGZhLWFycm93LWxlZnRcXFwiPjwvc3Bhbj4mbmJzcDs8c3BhbiBqaGlUcmFuc2xhdGU9XFxcImVudGl0eS5hY3Rpb24uYmFja1xcXCI+IEJhY2s8L3NwYW4+IDwvYnV0dG9uPiA8L2Rpdj4gXCI7XG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9zcmMvbWFpbi93ZWJhcHAvYXBwL2FkbWluL3VzZXItbWFuYWdlbWVudC91c2VyLW1hbmFnZW1lbnQtZGV0YWlsLmNvbXBvbmVudC5odG1sXG4vLyBtb2R1bGUgaWQgPSAuL3NyYy9tYWluL3dlYmFwcC9hcHAvYWRtaW4vdXNlci1tYW5hZ2VtZW50L3VzZXItbWFuYWdlbWVudC1kZXRhaWwuY29tcG9uZW50Lmh0bWxcbi8vIG1vZHVsZSBjaHVua3MgPSAwIiwiaW1wb3J0IHsgQ29tcG9uZW50LCBPbkluaXQsIE9uRGVzdHJveSB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgQWN0aXZhdGVkUm91dGUgfSBmcm9tICdAYW5ndWxhci9yb3V0ZXInO1xuaW1wb3J0IHsgU3Vic2NyaXB0aW9uIH0gZnJvbSAncnhqcy9SeCc7XG5cbmltcG9ydCB7IFVzZXIsIFVzZXJTZXJ2aWNlIH0gZnJvbSAnLi4vLi4vc2hhcmVkJztcblxuQENvbXBvbmVudCh7XG4gICAgc2VsZWN0b3I6ICdqaGktdXNlci1tZ210LWRldGFpbCcsXG4gICAgdGVtcGxhdGVVcmw6ICcuL3VzZXItbWFuYWdlbWVudC1kZXRhaWwuY29tcG9uZW50Lmh0bWwnXG59KVxuZXhwb3J0IGNsYXNzIFVzZXJNZ210RGV0YWlsQ29tcG9uZW50IGltcGxlbWVudHMgT25Jbml0LCBPbkRlc3Ryb3kge1xuXG4gICAgdXNlcjogVXNlcjtcbiAgICBwcml2YXRlIHN1YnNjcmlwdGlvbjogU3Vic2NyaXB0aW9uO1xuXG4gICAgY29uc3RydWN0b3IoXG4gICAgICAgIHByaXZhdGUgdXNlclNlcnZpY2U6IFVzZXJTZXJ2aWNlLFxuICAgICAgICBwcml2YXRlIHJvdXRlOiBBY3RpdmF0ZWRSb3V0ZVxuICAgICkge1xuICAgIH1cblxuICAgIG5nT25Jbml0KCkge1xuICAgICAgICB0aGlzLnN1YnNjcmlwdGlvbiA9IHRoaXMucm91dGUucGFyYW1zLnN1YnNjcmliZSgocGFyYW1zKSA9PiB7XG4gICAgICAgICAgICB0aGlzLmxvYWQocGFyYW1zWydsb2dpbiddKTtcbiAgICAgICAgfSk7XG4gICAgfVxuXG4gICAgbG9hZChsb2dpbikge1xuICAgICAgICB0aGlzLnVzZXJTZXJ2aWNlLmZpbmQobG9naW4pLnN1YnNjcmliZSgodXNlcikgPT4ge1xuICAgICAgICAgICAgdGhpcy51c2VyID0gdXNlcjtcbiAgICAgICAgfSk7XG4gICAgfVxuXG4gICAgbmdPbkRlc3Ryb3koKSB7XG4gICAgICAgIHRoaXMuc3Vic2NyaXB0aW9uLnVuc3Vic2NyaWJlKCk7XG4gICAgfVxuXG59XG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9+L3RzbGludC1sb2FkZXIhLi9zcmMvbWFpbi93ZWJhcHAvYXBwL2FkbWluL3VzZXItbWFuYWdlbWVudC91c2VyLW1hbmFnZW1lbnQtZGV0YWlsLmNvbXBvbmVudC50cyIsIm1vZHVsZS5leHBvcnRzID0gXCI8Zm9ybSBuYW1lPVxcXCJlZGl0Rm9ybVxcXCIgcm9sZT1cXFwiZm9ybVxcXCIgbm92YWxpZGF0ZSAobmdTdWJtaXQpPVxcXCJzYXZlKClcXFwiICNlZGl0Rm9ybT1cXFwibmdGb3JtXFxcIj4gPGRpdiBjbGFzcz1cXFwibW9kYWwtaGVhZGVyXFxcIj4gPGg0IGNsYXNzPVxcXCJtb2RhbC10aXRsZVxcXCIgaWQ9XFxcIm15VXNlckxhYmVsXFxcIiBqaGlUcmFuc2xhdGU9XFxcInVzZXJNYW5hZ2VtZW50LmhvbWUuY3JlYXRlT3JFZGl0TGFiZWxcXFwiPiBDcmVhdGUgb3IgZWRpdCBhIFVzZXI8L2g0PiA8YnV0dG9uIHR5cGU9XFxcImJ1dHRvblxcXCIgY2xhc3M9XFxcImNsb3NlXFxcIiBkYXRhLWRpc21pc3M9XFxcIm1vZGFsXFxcIiBhcmlhLWhpZGRlbj1cXFwidHJ1ZVxcXCIgKGNsaWNrKT1cXFwiY2xlYXIoKVxcXCI+JnRpbWVzOzwvYnV0dG9uPiA8L2Rpdj4gPGRpdiBjbGFzcz1cXFwibW9kYWwtYm9keVxcXCI+IDxqaGktYWxlcnQtZXJyb3I+PC9qaGktYWxlcnQtZXJyb3I+IDxkaXYgY2xhc3M9XFxcImZvcm0tZ3JvdXBcXFwiPiA8bGFiZWwgamhpVHJhbnNsYXRlPVxcXCJnbG9iYWwuZmllbGQuaWRcXFwiPklEPC9sYWJlbD4gPGlucHV0IHR5cGU9XFxcInRleHRcXFwiIGNsYXNzPVxcXCJmb3JtLWNvbnRyb2xcXFwiIG5hbWU9XFxcImlkXFxcIiBbKG5nTW9kZWwpXT1cXFwidXNlci5pZFxcXCIgcmVhZG9ubHk9XFxcInJlYWRvbmx5XFxcIj4gPC9kaXY+IDxkaXYgY2xhc3M9XFxcImZvcm0tZ3JvdXBcXFwiPiA8bGFiZWwgY2xhc3M9XFxcImZvcm0tY29udHJvbC1sYWJlbFxcXCIgamhpVHJhbnNsYXRlPVxcXCJ1c2VyTWFuYWdlbWVudC5sb2dpblxcXCI+TG9naW48L2xhYmVsPiA8aW5wdXQgdHlwZT1cXFwidGV4dFxcXCIgY2xhc3M9XFxcImZvcm0tY29udHJvbFxcXCIgbmFtZT1cXFwibG9naW5cXFwiICNsb2dpbklucHV0PVxcXCJuZ01vZGVsXFxcIiBbKG5nTW9kZWwpXT1cXFwidXNlci5sb2dpblxcXCIgcmVxdWlyZWQgbWlubGVuZ3RoPVxcXCIxXFxcIiBtYXhsZW5ndGg9XFxcIjUwXFxcIiBwYXR0ZXJuPVxcXCJeW18nLkBBLVphLXowLTktXSokXFxcIj4gPGRpdiAqbmdJZj1cXFwibG9naW5JbnB1dC5kaXJ0eSAmJiBsb2dpbklucHV0LmludmFsaWRcXFwiPiA8c21hbGwgY2xhc3M9XFxcImZvcm0tdGV4dCB0ZXh0LWRhbmdlclxcXCIgKm5nSWY9XFxcImxvZ2luSW5wdXQuZXJyb3JzLnJlcXVpcmVkXFxcIiBqaGlUcmFuc2xhdGU9XFxcImVudGl0eS52YWxpZGF0aW9uLnJlcXVpcmVkXFxcIj4gVGhpcyBmaWVsZCBpcyByZXF1aXJlZC4gPC9zbWFsbD4gPHNtYWxsIGNsYXNzPVxcXCJmb3JtLXRleHQgdGV4dC1kYW5nZXJcXFwiICpuZ0lmPVxcXCJsb2dpbklucHV0LmVycm9ycy5tYXhsZW5ndGhcXFwiIGpoaVRyYW5zbGF0ZT1cXFwiZW50aXR5LnZhbGlkYXRpb24ubWF4bGVuZ3RoXFxcIiB0cmFuc2xhdGUtdmFsdWUtbWF4PVxcXCI1MFxcXCI+IFRoaXMgZmllbGQgY2Fubm90IGJlIGxvbmdlciB0aGFuIDUwIGNoYXJhY3RlcnMuIDwvc21hbGw+IDwvZGl2PiA8L2Rpdj4gPGRpdiBjbGFzcz1cXFwiZm9ybS1ncm91cFxcXCI+IDxsYWJlbCBjbGFzcz1cXFwiZm9ybS1jb250cm9sLWxhYmVsXFxcIiBqaGlUcmFuc2xhdGU9XFxcInVzZXJNYW5hZ2VtZW50LmZpcnN0TmFtZVxcXCI+Rmlyc3QgTmFtZTwvbGFiZWw+IDxpbnB1dCB0eXBlPVxcXCJ0ZXh0XFxcIiBjbGFzcz1cXFwiZm9ybS1jb250cm9sXFxcIiBuYW1lPVxcXCJmaXJzdE5hbWVcXFwiICNmaXJzdE5hbWVJbnB1dD1cXFwibmdNb2RlbFxcXCIgWyhuZ01vZGVsKV09XFxcInVzZXIuZmlyc3ROYW1lXFxcIiBtYXhsZW5ndGg9XFxcIjUwXFxcIj4gPGRpdiAqbmdJZj1cXFwiZmlyc3ROYW1lSW5wdXQuZGlydHkgJiYgZmlyc3ROYW1lSW5wdXQuaW52YWxpZFxcXCI+IDxzbWFsbCBjbGFzcz1cXFwiZm9ybS10ZXh0IHRleHQtZGFuZ2VyXFxcIiAqbmdJZj1cXFwiZmlyc3ROYW1lSW5wdXQuZXJyb3JzLm1heGxlbmd0aFxcXCIgamhpVHJhbnNsYXRlPVxcXCJlbnRpdHkudmFsaWRhdGlvbi5tYXhsZW5ndGhcXFwiIHRyYW5zbGF0ZS12YWx1ZS1tYXg9XFxcIjUwXFxcIj4gVGhpcyBmaWVsZCBjYW5ub3QgYmUgbG9uZ2VyIHRoYW4gNTAgY2hhcmFjdGVycy4gPC9zbWFsbD4gPC9kaXY+IDwvZGl2PiA8ZGl2IGNsYXNzPVxcXCJmb3JtLWdyb3VwXFxcIj4gPGxhYmVsIGpoaVRyYW5zbGF0ZT1cXFwidXNlck1hbmFnZW1lbnQubGFzdE5hbWVcXFwiPkxhc3QgTmFtZTwvbGFiZWw+IDxpbnB1dCB0eXBlPVxcXCJ0ZXh0XFxcIiBjbGFzcz1cXFwiZm9ybS1jb250cm9sXFxcIiBuYW1lPVxcXCJsYXN0TmFtZVxcXCIgI2xhc3ROYW1lSW5wdXQ9XFxcIm5nTW9kZWxcXFwiIFsobmdNb2RlbCldPVxcXCJ1c2VyLmxhc3ROYW1lXFxcIiBtYXhsZW5ndGg9XFxcIjUwXFxcIj4gPGRpdiAqbmdJZj1cXFwibGFzdE5hbWVJbnB1dC5kaXJ0eSAmJiBsYXN0TmFtZUlucHV0LmludmFsaWRcXFwiPiA8c21hbGwgY2xhc3M9XFxcImZvcm0tdGV4dCB0ZXh0LWRhbmdlclxcXCIgKm5nSWY9XFxcImxhc3ROYW1lSW5wdXQuZXJyb3JzLm1heGxlbmd0aFxcXCIgamhpVHJhbnNsYXRlPVxcXCJlbnRpdHkudmFsaWRhdGlvbi5tYXhsZW5ndGhcXFwiIHRyYW5zbGF0ZS12YWx1ZS1tYXg9XFxcIjUwXFxcIj4gVGhpcyBmaWVsZCBjYW5ub3QgYmUgbG9uZ2VyIHRoYW4gNTAgY2hhcmFjdGVycy4gPC9zbWFsbD4gPC9kaXY+IDwvZGl2PiA8ZGl2IGNsYXNzPVxcXCJmb3JtLWdyb3VwXFxcIj4gPGxhYmVsIGNsYXNzPVxcXCJmb3JtLWNvbnRyb2wtbGFiZWxcXFwiIGpoaVRyYW5zbGF0ZT1cXFwidXNlck1hbmFnZW1lbnQuZW1haWxcXFwiPkVtYWlsPC9sYWJlbD4gPGlucHV0IHR5cGU9XFxcImVtYWlsXFxcIiBjbGFzcz1cXFwiZm9ybS1jb250cm9sXFxcIiBuYW1lPVxcXCJlbWFpbFxcXCIgI2VtYWlsSW5wdXQ9XFxcIm5nTW9kZWxcXFwiIFsobmdNb2RlbCldPVxcXCJ1c2VyLmVtYWlsXFxcIiBtaW5sZW5ndGg9XFxcIjVcXFwiIHJlcXVpcmVkIG1heGxlbmd0aD1cXFwiMTAwXFxcIj4gPGRpdiAqbmdJZj1cXFwiZW1haWxJbnB1dC5kaXJ0eSAmJiBlbWFpbElucHV0LmludmFsaWRcXFwiPiA8c21hbGwgY2xhc3M9XFxcImZvcm0tdGV4dCB0ZXh0LWRhbmdlclxcXCIgKm5nSWY9XFxcImVtYWlsSW5wdXQuZXJyb3JzLnJlcXVpcmVkXFxcIiBqaGlUcmFuc2xhdGU9XFxcImVudGl0eS52YWxpZGF0aW9uLnJlcXVpcmVkXFxcIj4gVGhpcyBmaWVsZCBpcyByZXF1aXJlZC4gPC9zbWFsbD4gPHNtYWxsIGNsYXNzPVxcXCJmb3JtLXRleHQgdGV4dC1kYW5nZXJcXFwiICpuZ0lmPVxcXCJlbWFpbElucHV0LmVycm9ycy5tYXhsZW5ndGhcXFwiIGpoaVRyYW5zbGF0ZT1cXFwiZW50aXR5LnZhbGlkYXRpb24ubWF4bGVuZ3RoXFxcIiB0cmFuc2xhdGUtdmFsdWUtbWF4PVxcXCIxMDBcXFwiPiBUaGlzIGZpZWxkIGNhbm5vdCBiZSBsb25nZXIgdGhhbiAxMDAgY2hhcmFjdGVycy4gPC9zbWFsbD4gPHNtYWxsIGNsYXNzPVxcXCJmb3JtLXRleHQgdGV4dC1kYW5nZXJcXFwiICpuZ0lmPVxcXCJlbWFpbElucHV0LmVycm9ycy5taW5sZW5ndGhcXFwiIGpoaVRyYW5zbGF0ZT1cXFwiZW50aXR5LnZhbGlkYXRpb24ubWlubGVuZ3RoXFxcIiB0cmFuc2xhdGUtdmFsdWUtbWluPVxcXCI1XFxcIj4gVGhpcyBmaWVsZCBpcyByZXF1aXJlZCB0byBiZSBhdCBsZWFzdCA1IGNoYXJhY3RlcnMuIDwvc21hbGw+IDxzbWFsbCBjbGFzcz1cXFwiZm9ybS10ZXh0IHRleHQtZGFuZ2VyXFxcIiAqbmdJZj1cXFwiZW1haWxJbnB1dC5lcnJvcnMuZW1haWxcXFwiIGpoaVRyYW5zbGF0ZT1cXFwiZ2xvYmFsLm1lc3NhZ2VzLnZhbGlkYXRlLmVtYWlsLmludmFsaWRcXFwiPiBZb3VyIGVtYWlsIGlzIGludmFsaWQuIDwvc21hbGw+IDwvZGl2PiA8L2Rpdj4gPGRpdiBjbGFzcz1cXFwiZm9ybS1jaGVja1xcXCI+IDxsYWJlbCBjbGFzcz1cXFwiZm9ybS1jaGVjay1sYWJlbFxcXCIgZm9yPVxcXCJhY3RpdmF0ZWRcXFwiPiA8aW5wdXQgY2xhc3M9XFxcImZvcm0tY2hlY2staW5wdXRcXFwiIFtkaXNhYmxlZF09XFxcInVzZXIuaWQgPT09IG51bGxcXFwiIHR5cGU9XFxcImNoZWNrYm94XFxcIiBpZD1cXFwiYWN0aXZhdGVkXFxcIiBuYW1lPVxcXCJhY3RpdmF0ZWRcXFwiIFsobmdNb2RlbCldPVxcXCJ1c2VyLmFjdGl2YXRlZFxcXCI+IDxzcGFuIGpoaVRyYW5zbGF0ZT1cXFwidXNlck1hbmFnZW1lbnQuYWN0aXZhdGVkXFxcIj5BY3RpdmF0ZWQ8L3NwYW4+IDwvbGFiZWw+IDwvZGl2PiA8ZGl2IGNsYXNzPVxcXCJmb3JtLWdyb3VwXFxcIiAqbmdJZj1cXFwibGFuZ3VhZ2VzICYmIGxhbmd1YWdlcy5sZW5ndGggPiAwXFxcIj4gPGxhYmVsIGpoaVRyYW5zbGF0ZT1cXFwidXNlck1hbmFnZW1lbnQubGFuZ0tleVxcXCI+TGFuZyBLZXk8L2xhYmVsPiA8c2VsZWN0IGNsYXNzPVxcXCJmb3JtLWNvbnRyb2xcXFwiIGlkPVxcXCJsYW5nS2V5XFxcIiBuYW1lPVxcXCJsYW5nS2V5XFxcIiBbKG5nTW9kZWwpXT1cXFwidXNlci5sYW5nS2V5XFxcIj4gPG9wdGlvbiAqbmdGb3I9XFxcImxldCBsYW5ndWFnZSBvZiBsYW5ndWFnZXNcXFwiIFt2YWx1ZV09XFxcImxhbmd1YWdlXFxcIj57e2xhbmd1YWdlIHwgZmluZExhbmd1YWdlRnJvbUtleX19PC9vcHRpb24+IDwvc2VsZWN0PiA8L2Rpdj4gPGRpdiBjbGFzcz1cXFwiZm9ybS1ncm91cFxcXCI+IDxsYWJlbCBqaGlUcmFuc2xhdGU9XFxcInVzZXJNYW5hZ2VtZW50LnByb2ZpbGVzXFxcIj5Qcm9maWxlczwvbGFiZWw+IDxzZWxlY3QgY2xhc3M9XFxcImZvcm0tY29udHJvbFxcXCIgbXVsdGlwbGU9XFxcIm11bHRpcGxlXFxcIiBuYW1lPVxcXCJhdXRob3JpdHlcXFwiIFsobmdNb2RlbCldPVxcXCJ1c2VyLmF1dGhvcml0aWVzXFxcIj4gPG9wdGlvbiAqbmdGb3I9XFxcImxldCBhdXRob3JpdHkgb2YgYXV0aG9yaXRpZXNcXFwiIFt2YWx1ZV09XFxcImF1dGhvcml0eVxcXCI+e3thdXRob3JpdHl9fTwvb3B0aW9uPiA8L3NlbGVjdD4gPC9kaXY+IDwvZGl2PiA8ZGl2IGNsYXNzPVxcXCJtb2RhbC1mb290ZXJcXFwiPiA8YnV0dG9uIHR5cGU9XFxcImJ1dHRvblxcXCIgY2xhc3M9XFxcImJ0biBidG4tc2Vjb25kYXJ5XFxcIiBkYXRhLWRpc21pc3M9XFxcIm1vZGFsXFxcIiAoY2xpY2spPVxcXCJjbGVhcigpXFxcIj4gPHNwYW4gY2xhc3M9XFxcImZhIGZhLWJhblxcXCI+PC9zcGFuPiZuYnNwOzxzcGFuIGpoaVRyYW5zbGF0ZT1cXFwiZW50aXR5LmFjdGlvbi5jYW5jZWxcXFwiPkNhbmNlbDwvc3Bhbj4gPC9idXR0b24+IDxidXR0b24gdHlwZT1cXFwic3VibWl0XFxcIiBbZGlzYWJsZWRdPVxcXCJlZGl0Rm9ybS5mb3JtLmludmFsaWQgfHwgaXNTYXZpbmdcXFwiIGNsYXNzPVxcXCJidG4gYnRuLXByaW1hcnlcXFwiPiA8c3BhbiBjbGFzcz1cXFwiZmEgZmEtZmxvcHB5LW9cXFwiPjwvc3Bhbj4mbmJzcDs8c3BhbiBqaGlUcmFuc2xhdGU9XFxcImVudGl0eS5hY3Rpb24uc2F2ZVxcXCI+U2F2ZTwvc3Bhbj4gPC9idXR0b24+IDwvZGl2PiA8L2Zvcm0+IFwiO1xuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vc3JjL21haW4vd2ViYXBwL2FwcC9hZG1pbi91c2VyLW1hbmFnZW1lbnQvdXNlci1tYW5hZ2VtZW50LWRpYWxvZy5jb21wb25lbnQuaHRtbFxuLy8gbW9kdWxlIGlkID0gLi9zcmMvbWFpbi93ZWJhcHAvYXBwL2FkbWluL3VzZXItbWFuYWdlbWVudC91c2VyLW1hbmFnZW1lbnQtZGlhbG9nLmNvbXBvbmVudC5odG1sXG4vLyBtb2R1bGUgY2h1bmtzID0gMCIsImltcG9ydCB7IENvbXBvbmVudCwgT25Jbml0LCBPbkRlc3Ryb3kgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IEFjdGl2YXRlZFJvdXRlIH0gZnJvbSAnQGFuZ3VsYXIvcm91dGVyJztcblxuaW1wb3J0IHsgTmdiQWN0aXZlTW9kYWwsIE5nYk1vZGFsUmVmIH0gZnJvbSAnQG5nLWJvb3RzdHJhcC9uZy1ib290c3RyYXAnO1xuaW1wb3J0IHsgQWxlcnRTZXJ2aWNlLCBFdmVudE1hbmFnZXIgfSBmcm9tICduZy1qaGlwc3Rlcic7XG5cbmltcG9ydCB7IFVzZXJNb2RhbFNlcnZpY2UgfSBmcm9tICcuL3VzZXItbW9kYWwuc2VydmljZSc7XG5pbXBvcnQgeyBKaGlMYW5ndWFnZUhlbHBlciwgVXNlciwgVXNlclNlcnZpY2UgfSBmcm9tICcuLi8uLi9zaGFyZWQnO1xuXG5AQ29tcG9uZW50KHtcbiAgICBzZWxlY3RvcjogJ2poaS11c2VyLW1nbXQtZGlhbG9nJyxcbiAgICB0ZW1wbGF0ZVVybDogJy4vdXNlci1tYW5hZ2VtZW50LWRpYWxvZy5jb21wb25lbnQuaHRtbCdcbn0pXG5leHBvcnQgY2xhc3MgVXNlck1nbXREaWFsb2dDb21wb25lbnQgaW1wbGVtZW50cyBPbkluaXQge1xuXG4gICAgdXNlcjogVXNlcjtcbiAgICBsYW5ndWFnZXM6IGFueVtdO1xuICAgIGF1dGhvcml0aWVzOiBhbnlbXTtcbiAgICBpc1NhdmluZzogQm9vbGVhbjtcblxuICAgIGNvbnN0cnVjdG9yKFxuICAgICAgICBwdWJsaWMgYWN0aXZlTW9kYWw6IE5nYkFjdGl2ZU1vZGFsLFxuICAgICAgICBwcml2YXRlIGxhbmd1YWdlSGVscGVyOiBKaGlMYW5ndWFnZUhlbHBlcixcbiAgICAgICAgcHJpdmF0ZSB1c2VyU2VydmljZTogVXNlclNlcnZpY2UsXG4gICAgICAgIHByaXZhdGUgYWxlcnRTZXJ2aWNlOiBBbGVydFNlcnZpY2UsXG4gICAgICAgIHByaXZhdGUgZXZlbnRNYW5hZ2VyOiBFdmVudE1hbmFnZXJcbiAgICApIHt9XG5cbiAgICBuZ09uSW5pdCgpIHtcbiAgICAgICAgdGhpcy5pc1NhdmluZyA9IGZhbHNlO1xuICAgICAgICB0aGlzLmF1dGhvcml0aWVzID0gW107XG4gICAgICAgIHRoaXMudXNlclNlcnZpY2UuYXV0aG9yaXRpZXMoKS5zdWJzY3JpYmUoKGF1dGhvcml0aWVzKSA9PiB7XG4gICAgICAgICAgICB0aGlzLmF1dGhvcml0aWVzID0gYXV0aG9yaXRpZXM7XG4gICAgICAgIH0pO1xuICAgICAgICB0aGlzLmxhbmd1YWdlSGVscGVyLmdldEFsbCgpLnRoZW4oKGxhbmd1YWdlcykgPT4ge1xuICAgICAgICAgICAgdGhpcy5sYW5ndWFnZXMgPSBsYW5ndWFnZXM7XG4gICAgICAgIH0pO1xuICAgIH1cblxuICAgIGNsZWFyKCkge1xuICAgICAgICB0aGlzLmFjdGl2ZU1vZGFsLmRpc21pc3MoJ2NhbmNlbCcpO1xuICAgIH1cblxuICAgIHNhdmUoKSB7XG4gICAgICAgIHRoaXMuaXNTYXZpbmcgPSB0cnVlO1xuICAgICAgICBpZiAodGhpcy51c2VyLmlkICE9PSBudWxsKSB7XG4gICAgICAgICAgICB0aGlzLnVzZXJTZXJ2aWNlLnVwZGF0ZSh0aGlzLnVzZXIpLnN1YnNjcmliZSgocmVzcG9uc2UpID0+IHRoaXMub25TYXZlU3VjY2VzcyhyZXNwb25zZSwgZmFsc2UpLCAoKSA9PiB0aGlzLm9uU2F2ZUVycm9yKCkpO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgdGhpcy51c2VyU2VydmljZS5jcmVhdGUodGhpcy51c2VyKS5zdWJzY3JpYmUoKHJlc3BvbnNlKSA9PiB0aGlzLm9uU2F2ZVN1Y2Nlc3MocmVzcG9uc2UsIHRydWUpLCAoKSA9PiB0aGlzLm9uU2F2ZUVycm9yKCkpO1xuICAgICAgICB9XG4gICAgfVxuXG4gICAgcHJpdmF0ZSBvblNhdmVTdWNjZXNzKHJlc3VsdCwgaXNDcmVhdGVkOiBib29sZWFuKSB7XG4gICAgICAgIHRoaXMuYWxlcnRTZXJ2aWNlLnN1Y2Nlc3MoXG4gICAgICAgICAgICBpc0NyZWF0ZWQgPyAndXNlck1hbmFnZW1lbnQuY3JlYXRlZCdcbiAgICAgICAgICAgIDogJ3VzZXJNYW5hZ2VtZW50LnVwZGF0ZWQnLFxuICAgICAgICAgICAgeyBwYXJhbSA6IHJlc3VsdC5qc29uLmxvZ2luIH0sIG51bGwpO1xuICAgICAgICB0aGlzLmV2ZW50TWFuYWdlci5icm9hZGNhc3QoeyBuYW1lOiAndXNlckxpc3RNb2RpZmljYXRpb24nLCBjb250ZW50OiAnT0snIH0pO1xuICAgICAgICB0aGlzLmlzU2F2aW5nID0gZmFsc2U7XG4gICAgICAgIHRoaXMuYWN0aXZlTW9kYWwuZGlzbWlzcyhyZXN1bHQpO1xuICAgIH1cblxuICAgIHByaXZhdGUgb25TYXZlRXJyb3IoKSB7XG4gICAgICAgIHRoaXMuaXNTYXZpbmcgPSBmYWxzZTtcbiAgICB9XG59XG5cbkBDb21wb25lbnQoe1xuICAgIHNlbGVjdG9yOiAnamhpLXVzZXItZGlhbG9nJyxcbiAgICB0ZW1wbGF0ZTogJydcbn0pXG5leHBvcnQgY2xhc3MgVXNlckRpYWxvZ0NvbXBvbmVudCBpbXBsZW1lbnRzIE9uSW5pdCwgT25EZXN0cm95IHtcblxuICAgIG1vZGFsUmVmOiBOZ2JNb2RhbFJlZjtcbiAgICByb3V0ZVN1YjogYW55O1xuXG4gICAgY29uc3RydWN0b3IoXG4gICAgICAgIHByaXZhdGUgcm91dGU6IEFjdGl2YXRlZFJvdXRlLFxuICAgICAgICBwcml2YXRlIHVzZXJNb2RhbFNlcnZpY2U6IFVzZXJNb2RhbFNlcnZpY2VcbiAgICApIHt9XG5cbiAgICBuZ09uSW5pdCgpIHtcbiAgICAgICAgdGhpcy5yb3V0ZVN1YiA9IHRoaXMucm91dGUucGFyYW1zLnN1YnNjcmliZSgocGFyYW1zKSA9PiB7XG4gICAgICAgICAgICBpZiAoIHBhcmFtc1snbG9naW4nXSApIHtcbiAgICAgICAgICAgICAgICB0aGlzLm1vZGFsUmVmID0gdGhpcy51c2VyTW9kYWxTZXJ2aWNlLm9wZW4oVXNlck1nbXREaWFsb2dDb21wb25lbnQsIHBhcmFtc1snbG9naW4nXSk7XG4gICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgIHRoaXMubW9kYWxSZWYgPSB0aGlzLnVzZXJNb2RhbFNlcnZpY2Uub3BlbihVc2VyTWdtdERpYWxvZ0NvbXBvbmVudCk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH0pO1xuICAgIH1cblxuICAgIG5nT25EZXN0cm95KCkge1xuICAgICAgICB0aGlzLnJvdXRlU3ViLnVuc3Vic2NyaWJlKCk7XG4gICAgfVxufVxuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vfi90c2xpbnQtbG9hZGVyIS4vc3JjL21haW4vd2ViYXBwL2FwcC9hZG1pbi91c2VyLW1hbmFnZW1lbnQvdXNlci1tYW5hZ2VtZW50LWRpYWxvZy5jb21wb25lbnQudHMiLCJtb2R1bGUuZXhwb3J0cyA9IFwiPGRpdj4gPGgyPiA8c3BhbiBqaGlUcmFuc2xhdGU9XFxcInVzZXJNYW5hZ2VtZW50LmhvbWUudGl0bGVcXFwiPlVzZXJzPC9zcGFuPiA8YnV0dG9uIGNsYXNzPVxcXCJidG4gYnRuLXByaW1hcnkgZmxvYXQtcmlnaHRcXFwiIFtyb3V0ZXJMaW5rXT1cXFwiWycvJywgeyBvdXRsZXRzOiB7IHBvcHVwOiBbJ3VzZXItbWFuYWdlbWVudC1uZXcnXSB9IH1dXFxcIj4gPHNwYW4gY2xhc3M9XFxcImZhIGZhLXBsdXNcXFwiPjwvc3Bhbj4gPHNwYW4gamhpVHJhbnNsYXRlPVxcXCJ1c2VyTWFuYWdlbWVudC5ob21lLmNyZWF0ZUxhYmVsXFxcIj5DcmVhdGUgYSBuZXcgVXNlcjwvc3Bhbj4gPC9idXR0b24+IDwvaDI+IDxqaGktYWxlcnQ+PC9qaGktYWxlcnQ+IDxkaXYgY2xhc3M9XFxcInRhYmxlLXJlc3BvbnNpdmVcXFwiICpuZ0lmPVxcXCJ1c2Vyc1xcXCI+IDx0YWJsZSBjbGFzcz1cXFwidGFibGUgdGFibGUtc3RyaXBlZFxcXCI+IDx0aGVhZD4gPHRyIGpoaVNvcnQgWyhwcmVkaWNhdGUpXT1cXFwicHJlZGljYXRlXFxcIiBbKGFzY2VuZGluZyldPVxcXCJyZXZlcnNlXFxcIiBbY2FsbGJhY2tdPVxcXCJ0cmFuc2l0aW9uLmJpbmQodGhpcylcXFwiPiA8dGggamhpU29ydEJ5PVxcXCJpZFxcXCI+PHNwYW4gamhpVHJhbnNsYXRlPVxcXCJnbG9iYWwuZmllbGQuaWRcXFwiPklEPC9zcGFuPjxzcGFuIGNsYXNzPVxcXCJmYSBmYS1zb3J0XFxcIj48L3NwYW4+PC90aD4gPHRoIGpoaVNvcnRCeT1cXFwibG9naW5cXFwiPjxzcGFuIGpoaVRyYW5zbGF0ZT1cXFwidXNlck1hbmFnZW1lbnQubG9naW5cXFwiPkxvZ2luPC9zcGFuPiA8c3BhbiBjbGFzcz1cXFwiZmEgZmEtc29ydFxcXCI+PC9zcGFuPjwvdGg+IDx0aCBqaGlTb3J0Qnk9XFxcImVtYWlsXFxcIj48c3BhbiBqaGlUcmFuc2xhdGU9XFxcInVzZXJNYW5hZ2VtZW50LmVtYWlsXFxcIj5FbWFpbDwvc3Bhbj4gPHNwYW4gY2xhc3M9XFxcImZhIGZhLXNvcnRcXFwiPjwvc3Bhbj48L3RoPiA8dGg+PC90aD4gPHRoIGpoaVNvcnRCeT1cXFwibGFuZ0tleVxcXCI+IDxzcGFuIGpoaVRyYW5zbGF0ZT1cXFwidXNlck1hbmFnZW1lbnQubGFuZ0tleVxcXCI+TGFuZyBLZXk8L3NwYW4+IDxzcGFuIGNsYXNzPVxcXCJmYSBmYS1zb3J0XFxcIj48L3NwYW4+PC90aD4gPHRoPjxzcGFuIGpoaVRyYW5zbGF0ZT1cXFwidXNlck1hbmFnZW1lbnQucHJvZmlsZXNcXFwiPlByb2ZpbGVzPC9zcGFuPjwvdGg+IDx0aCBqaGlTb3J0Qnk9XFxcImNyZWF0ZWREYXRlXFxcIj48c3BhbiBqaGlUcmFuc2xhdGU9XFxcInVzZXJNYW5hZ2VtZW50LmNyZWF0ZWREYXRlXFxcIj5DcmVhdGVkIERhdGU8L3NwYW4+IDxzcGFuIGNsYXNzPVxcXCJmYSBmYS1zb3J0XFxcIj48L3NwYW4+PC90aD4gPHRoIGpoaVNvcnRCeT1cXFwibGFzdE1vZGlmaWVkQnlcXFwiPjxzcGFuIGpoaVRyYW5zbGF0ZT1cXFwidXNlck1hbmFnZW1lbnQubGFzdE1vZGlmaWVkQnlcXFwiPkxhc3QgTW9kaWZpZWQgQnk8L3NwYW4+IDxzcGFuIGNsYXNzPVxcXCJmYSBmYS1zb3J0XFxcIj48L3NwYW4+PC90aD4gPHRoIGpoaVNvcnRCeT1cXFwibGFzdE1vZGlmaWVkRGF0ZVxcXCI+PHNwYW4gamhpVHJhbnNsYXRlPVxcXCJ1c2VyTWFuYWdlbWVudC5sYXN0TW9kaWZpZWREYXRlXFxcIj5MYXN0IE1vZGlmaWVkIERhdGU8L3NwYW4+IDxzcGFuIGNsYXNzPVxcXCJmYSBmYS1zb3J0XFxcIj48L3NwYW4+PC90aD4gPHRoPjwvdGg+IDwvdHI+IDwvdGhlYWQ+IDx0Ym9keSAqbmdJZj1cXFwidXNlcnNcXFwiPiA8dHIgKm5nRm9yPVxcXCJsZXQgdXNlciBvZiB1c2VyczsgdHJhY2tCeTogdHJhY2tJZGVudGl0eVxcXCI+IDx0ZD48YSBbcm91dGVyTGlua109XFxcIlsnLi4vdXNlci1tYW5hZ2VtZW50JywgdXNlci5sb2dpbl1cXFwiPnt7dXNlci5pZH19PC9hPjwvdGQ+IDx0ZD57e3VzZXIubG9naW59fTwvdGQ+IDx0ZD57e3VzZXIuZW1haWx9fTwvdGQ+IDx0ZD4gPHNwYW4gY2xhc3M9XFxcImJhZGdlIGJhZGdlLWRhbmdlciBoYW5kXFxcIiAoY2xpY2spPVxcXCJzZXRBY3RpdmUodXNlciwgdHJ1ZSlcXFwiICpuZ0lmPVxcXCIhdXNlci5hY3RpdmF0ZWRcXFwiIGpoaVRyYW5zbGF0ZT1cXFwidXNlck1hbmFnZW1lbnQuZGVhY3RpdmF0ZWRcXFwiPkRlYWN0aXZhdGVkPC9zcGFuPiA8c3BhbiBjbGFzcz1cXFwiYmFkZ2UgYmFkZ2Utc3VjY2VzcyBoYW5kXFxcIiAoY2xpY2spPVxcXCJzZXRBY3RpdmUodXNlciwgZmFsc2UpXFxcIiAqbmdJZj1cXFwidXNlci5hY3RpdmF0ZWRcXFwiIGpoaVRyYW5zbGF0ZT1cXFwidXNlck1hbmFnZW1lbnQuYWN0aXZhdGVkXFxcIj5BY3RpdmF0ZWQ8L3NwYW4+IDwvdGQ+IDx0ZD57e3VzZXIubGFuZ0tleX19PC90ZD4gPHRkPiA8ZGl2ICpuZ0Zvcj1cXFwibGV0IGF1dGhvcml0eSBvZiB1c2VyLmF1dGhvcml0aWVzXFxcIj4gPHNwYW4gY2xhc3M9XFxcInRhZyB0YWctaW5mb1xcXCI+e3sgYXV0aG9yaXR5IH19PC9zcGFuPiA8L2Rpdj4gPC90ZD4gPHRkPnt7dXNlci5jcmVhdGVkRGF0ZSB8IGRhdGU6J2RkL01NL3l5IEhIOm1tJ319PC90ZD4gPHRkPnt7dXNlci5sYXN0TW9kaWZpZWRCeX19PC90ZD4gPHRkPnt7dXNlci5sYXN0TW9kaWZpZWREYXRlIHwgZGF0ZTonZGQvTU0veXkgSEg6bW0nfX08L3RkPiA8dGQgY2xhc3M9XFxcInRleHQtcmlnaHRcXFwiPiA8ZGl2IGNsYXNzPVxcXCJidG4tZ3JvdXAgZmxleC1idG4tZ3JvdXAtY29udGFpbmVyXFxcIj4gPGJ1dHRvbiB0eXBlPVxcXCJzdWJtaXRcXFwiIFtyb3V0ZXJMaW5rXT1cXFwiWycuLi91c2VyLW1hbmFnZW1lbnQnLCB1c2VyLmxvZ2luXVxcXCIgY2xhc3M9XFxcImJ0biBidG4taW5mbyBidG4tc21cXFwiPiA8c3BhbiBjbGFzcz1cXFwiZmEgZmEtZXllXFxcIj48L3NwYW4+IDxzcGFuIGNsYXNzPVxcXCJoaWRkZW4tbWQtZG93blxcXCIgamhpVHJhbnNsYXRlPVxcXCJlbnRpdHkuYWN0aW9uLnZpZXdcXFwiPlZpZXc8L3NwYW4+IDwvYnV0dG9uPiA8YnV0dG9uIHR5cGU9XFxcInN1Ym1pdFxcXCIgW3JvdXRlckxpbmtdPVxcXCJbJy8nLCB7IG91dGxldHM6IHsgcG9wdXA6ICd1c2VyLW1hbmFnZW1lbnQvJysgdXNlci5sb2dpbiArICcvZWRpdCd9IH1dXFxcIiByZXBsYWNlVXJsPVxcXCJ0cnVlXFxcIiBjbGFzcz1cXFwiYnRuIGJ0bi1wcmltYXJ5IGJ0bi1zbVxcXCI+IDxzcGFuIGNsYXNzPVxcXCJmYSBmYS1wZW5jaWxcXFwiPjwvc3Bhbj4gPHNwYW4gY2xhc3M9XFxcImhpZGRlbi1tZC1kb3duXFxcIiBqaGlUcmFuc2xhdGU9XFxcImVudGl0eS5hY3Rpb24uZWRpdFxcXCI+RWRpdDwvc3Bhbj4gPC9idXR0b24+IDxidXR0b24gdHlwZT1cXFwic3VibWl0XFxcIiBbcm91dGVyTGlua109XFxcIlsnLycsIHsgb3V0bGV0czogeyBwb3B1cDogJ3VzZXItbWFuYWdlbWVudC8nKyB1c2VyLmxvZ2luICsgJy9kZWxldGUnfSB9XVxcXCIgcmVwbGFjZVVybD1cXFwidHJ1ZVxcXCIgY2xhc3M9XFxcImJ0biBidG4tZGFuZ2VyIGJ0bi1zbVxcXCIgW2Rpc2FibGVkXT1cXFwiY3VycmVudEFjY291bnQubG9naW49PXVzZXIubG9naW5cXFwiPiA8c3BhbiBjbGFzcz1cXFwiZmEgZmEtcmVtb3ZlXFxcIj48L3NwYW4+IDxzcGFuIGNsYXNzPVxcXCJoaWRkZW4tbWQtZG93blxcXCIgamhpVHJhbnNsYXRlPVxcXCJlbnRpdHkuYWN0aW9uLmRlbGV0ZVxcXCI+RGVsZXRlPC9zcGFuPiA8L2J1dHRvbj4gPC9kaXY+IDwvdGQ+IDwvdHI+IDwvdGJvZHk+IDwvdGFibGU+IDwvZGl2PiA8ZGl2ICpuZ0lmPVxcXCJ1c2Vyc1xcXCI+IDxkaXYgY2xhc3M9XFxcInJvdyBqdXN0aWZ5LWNvbnRlbnQtY2VudGVyXFxcIj4gPGpoaS1pdGVtLWNvdW50IFtwYWdlXT1cXFwicGFnZVxcXCIgW3RvdGFsXT1cXFwicXVlcnlDb3VudFxcXCIgW2l0ZW1zUGVyUGFnZV09XFxcIml0ZW1zUGVyUGFnZVxcXCI+PC9qaGktaXRlbS1jb3VudD4gPC9kaXY+IDxkaXYgY2xhc3M9XFxcInJvdyBqdXN0aWZ5LWNvbnRlbnQtY2VudGVyXFxcIj4gPG5nYi1wYWdpbmF0aW9uIFtjb2xsZWN0aW9uU2l6ZV09XFxcInRvdGFsSXRlbXNcXFwiIFsocGFnZSldPVxcXCJwYWdlXFxcIiAocGFnZUNoYW5nZSk9XFxcImxvYWRQYWdlKHBhZ2UpXFxcIj48L25nYi1wYWdpbmF0aW9uPiA8L2Rpdj4gPC9kaXY+IDwvZGl2PiBcIjtcblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL3NyYy9tYWluL3dlYmFwcC9hcHAvYWRtaW4vdXNlci1tYW5hZ2VtZW50L3VzZXItbWFuYWdlbWVudC5jb21wb25lbnQuaHRtbFxuLy8gbW9kdWxlIGlkID0gLi9zcmMvbWFpbi93ZWJhcHAvYXBwL2FkbWluL3VzZXItbWFuYWdlbWVudC91c2VyLW1hbmFnZW1lbnQuY29tcG9uZW50Lmh0bWxcbi8vIG1vZHVsZSBjaHVua3MgPSAwIiwiaW1wb3J0IHsgQ29tcG9uZW50LCBPbkluaXQsIE9uRGVzdHJveSB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgUmVzcG9uc2UgfSBmcm9tICdAYW5ndWxhci9odHRwJztcbmltcG9ydCB7IEFjdGl2YXRlZFJvdXRlLCBSb3V0ZXIgfSBmcm9tICdAYW5ndWxhci9yb3V0ZXInO1xuaW1wb3J0IHsgRXZlbnRNYW5hZ2VyLCBQYWdpbmF0aW9uVXRpbCwgUGFyc2VMaW5rcywgQWxlcnRTZXJ2aWNlIH0gZnJvbSAnbmctamhpcHN0ZXInO1xuXG5pbXBvcnQgeyBJVEVNU19QRVJfUEFHRSwgUHJpbmNpcGFsLCBVc2VyLCBVc2VyU2VydmljZSwgUmVzcG9uc2VXcmFwcGVyIH0gZnJvbSAnLi4vLi4vc2hhcmVkJztcbmltcG9ydCB7IFBhZ2luYXRpb25Db25maWcgfSBmcm9tICcuLi8uLi9ibG9ja3MvY29uZmlnL3VpYi1wYWdpbmF0aW9uLmNvbmZpZyc7XG5cbkBDb21wb25lbnQoe1xuICAgIHNlbGVjdG9yOiAnamhpLXVzZXItbWdtdCcsXG4gICAgdGVtcGxhdGVVcmw6ICcuL3VzZXItbWFuYWdlbWVudC5jb21wb25lbnQuaHRtbCdcbn0pXG5leHBvcnQgY2xhc3MgVXNlck1nbXRDb21wb25lbnQgaW1wbGVtZW50cyBPbkluaXQsIE9uRGVzdHJveSB7XG5cbiAgICBjdXJyZW50QWNjb3VudDogYW55O1xuICAgIHVzZXJzOiBVc2VyW107XG4gICAgZXJyb3I6IGFueTtcbiAgICBzdWNjZXNzOiBhbnk7XG4gICAgcm91dGVEYXRhOiBhbnk7XG4gICAgbGlua3M6IGFueTtcbiAgICB0b3RhbEl0ZW1zOiBhbnk7XG4gICAgcXVlcnlDb3VudDogYW55O1xuICAgIGl0ZW1zUGVyUGFnZTogYW55O1xuICAgIHBhZ2U6IGFueTtcbiAgICBwcmVkaWNhdGU6IGFueTtcbiAgICBwcmV2aW91c1BhZ2U6IGFueTtcbiAgICByZXZlcnNlOiBhbnk7XG5cbiAgICBjb25zdHJ1Y3RvcihcbiAgICAgICAgcHJpdmF0ZSB1c2VyU2VydmljZTogVXNlclNlcnZpY2UsXG4gICAgICAgIHByaXZhdGUgcGFyc2VMaW5rczogUGFyc2VMaW5rcyxcbiAgICAgICAgcHJpdmF0ZSBhbGVydFNlcnZpY2U6IEFsZXJ0U2VydmljZSxcbiAgICAgICAgcHJpdmF0ZSBwcmluY2lwYWw6IFByaW5jaXBhbCxcbiAgICAgICAgcHJpdmF0ZSBldmVudE1hbmFnZXI6IEV2ZW50TWFuYWdlcixcbiAgICAgICAgcHJpdmF0ZSBwYWdpbmF0aW9uVXRpbDogUGFnaW5hdGlvblV0aWwsXG4gICAgICAgIHByaXZhdGUgcGFnaW5hdGlvbkNvbmZpZzogUGFnaW5hdGlvbkNvbmZpZyxcbiAgICAgICAgcHJpdmF0ZSBhY3RpdmF0ZWRSb3V0ZTogQWN0aXZhdGVkUm91dGUsXG4gICAgICAgIHByaXZhdGUgcm91dGVyOiBSb3V0ZXJcbiAgICApIHtcbiAgICAgICAgdGhpcy5pdGVtc1BlclBhZ2UgPSBJVEVNU19QRVJfUEFHRTtcbiAgICAgICAgdGhpcy5yb3V0ZURhdGEgPSB0aGlzLmFjdGl2YXRlZFJvdXRlLmRhdGEuc3Vic2NyaWJlKChkYXRhKSA9PiB7XG4gICAgICAgICAgICB0aGlzLnBhZ2UgPSBkYXRhWydwYWdpbmdQYXJhbXMnXS5wYWdlO1xuICAgICAgICAgICAgdGhpcy5wcmV2aW91c1BhZ2UgPSBkYXRhWydwYWdpbmdQYXJhbXMnXS5wYWdlO1xuICAgICAgICAgICAgdGhpcy5yZXZlcnNlID0gZGF0YVsncGFnaW5nUGFyYW1zJ10uYXNjZW5kaW5nO1xuICAgICAgICAgICAgdGhpcy5wcmVkaWNhdGUgPSBkYXRhWydwYWdpbmdQYXJhbXMnXS5wcmVkaWNhdGU7XG4gICAgICAgIH0pO1xuICAgIH1cblxuICAgIG5nT25Jbml0KCkge1xuICAgICAgICB0aGlzLnByaW5jaXBhbC5pZGVudGl0eSgpLnRoZW4oKGFjY291bnQpID0+IHtcbiAgICAgICAgICAgIHRoaXMuY3VycmVudEFjY291bnQgPSBhY2NvdW50O1xuICAgICAgICAgICAgdGhpcy5sb2FkQWxsKCk7XG4gICAgICAgICAgICB0aGlzLnJlZ2lzdGVyQ2hhbmdlSW5Vc2VycygpO1xuICAgICAgICB9KTtcbiAgICB9XG5cbiAgICBuZ09uRGVzdHJveSgpIHtcbiAgICAgICAgdGhpcy5yb3V0ZURhdGEudW5zdWJzY3JpYmUoKTtcbiAgICB9XG5cbiAgICByZWdpc3RlckNoYW5nZUluVXNlcnMoKSB7XG4gICAgICAgIHRoaXMuZXZlbnRNYW5hZ2VyLnN1YnNjcmliZSgndXNlckxpc3RNb2RpZmljYXRpb24nLCAocmVzcG9uc2UpID0+IHRoaXMubG9hZEFsbCgpKTtcbiAgICB9XG5cbiAgICBzZXRBY3RpdmUodXNlciwgaXNBY3RpdmF0ZWQpIHtcbiAgICAgICAgdXNlci5hY3RpdmF0ZWQgPSBpc0FjdGl2YXRlZDtcblxuICAgICAgICB0aGlzLnVzZXJTZXJ2aWNlLnVwZGF0ZSh1c2VyKS5zdWJzY3JpYmUoXG4gICAgICAgICAgICAocmVzcG9uc2UpID0+IHtcbiAgICAgICAgICAgICAgICBpZiAocmVzcG9uc2Uuc3RhdHVzID09PSAyMDApIHtcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5lcnJvciA9IG51bGw7XG4gICAgICAgICAgICAgICAgICAgIHRoaXMuc3VjY2VzcyA9ICdPSyc7XG4gICAgICAgICAgICAgICAgICAgIHRoaXMubG9hZEFsbCgpO1xuICAgICAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgICAgIHRoaXMuc3VjY2VzcyA9IG51bGw7XG4gICAgICAgICAgICAgICAgICAgIHRoaXMuZXJyb3IgPSAnRVJST1InO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH0pO1xuICAgIH1cblxuICAgIGxvYWRBbGwoKSB7XG4gICAgICAgIHRoaXMudXNlclNlcnZpY2UucXVlcnkoe1xuICAgICAgICAgICAgcGFnZTogdGhpcy5wYWdlIC0gMSxcbiAgICAgICAgICAgIHNpemU6IHRoaXMuaXRlbXNQZXJQYWdlLFxuICAgICAgICAgICAgc29ydDogdGhpcy5zb3J0KCl9KS5zdWJzY3JpYmUoXG4gICAgICAgICAgICAocmVzOiBSZXNwb25zZVdyYXBwZXIpID0+IHRoaXMub25TdWNjZXNzKHJlcy5qc29uLCByZXMuaGVhZGVycyksXG4gICAgICAgICAgICAocmVzOiBSZXNwb25zZVdyYXBwZXIpID0+IHRoaXMub25FcnJvcihyZXMuanNvbilcbiAgICAgICAgKTtcbiAgICB9XG5cbiAgICB0cmFja0lkZW50aXR5KGluZGV4LCBpdGVtOiBVc2VyKSB7XG4gICAgICAgIHJldHVybiBpdGVtLmlkO1xuICAgIH1cblxuICAgIHNvcnQoKSB7XG4gICAgICAgIGNvbnN0IHJlc3VsdCA9IFt0aGlzLnByZWRpY2F0ZSArICcsJyArICh0aGlzLnJldmVyc2UgPyAnYXNjJyA6ICdkZXNjJyldO1xuICAgICAgICBpZiAodGhpcy5wcmVkaWNhdGUgIT09ICdpZCcpIHtcbiAgICAgICAgICAgIHJlc3VsdC5wdXNoKCdpZCcpO1xuICAgICAgICB9XG4gICAgICAgIHJldHVybiByZXN1bHQ7XG4gICAgfVxuXG4gICAgbG9hZFBhZ2UocGFnZTogbnVtYmVyKSB7XG4gICAgICAgIGlmIChwYWdlICE9PSB0aGlzLnByZXZpb3VzUGFnZSkge1xuICAgICAgICAgICAgdGhpcy5wcmV2aW91c1BhZ2UgPSBwYWdlO1xuICAgICAgICAgICAgdGhpcy50cmFuc2l0aW9uKCk7XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICB0cmFuc2l0aW9uKCkge1xuICAgICAgICB0aGlzLnJvdXRlci5uYXZpZ2F0ZShbJy91c2VyLW1hbmFnZW1lbnQnXSwge1xuICAgICAgICAgICAgcXVlcnlQYXJhbXM6IHtcbiAgICAgICAgICAgICAgICBwYWdlOiB0aGlzLnBhZ2UsXG4gICAgICAgICAgICAgICAgc29ydDogdGhpcy5wcmVkaWNhdGUgKyAnLCcgKyAodGhpcy5yZXZlcnNlID8gJ2FzYycgOiAnZGVzYycpXG4gICAgICAgICAgICB9XG4gICAgICAgIH0pO1xuICAgICAgICB0aGlzLmxvYWRBbGwoKTtcbiAgICB9XG5cbiAgICBwcml2YXRlIG9uU3VjY2VzcyhkYXRhLCBoZWFkZXJzKSB7XG4gICAgICAgIHRoaXMubGlua3MgPSB0aGlzLnBhcnNlTGlua3MucGFyc2UoaGVhZGVycy5nZXQoJ2xpbmsnKSk7XG4gICAgICAgIHRoaXMudG90YWxJdGVtcyA9IGhlYWRlcnMuZ2V0KCdYLVRvdGFsLUNvdW50Jyk7XG4gICAgICAgIHRoaXMucXVlcnlDb3VudCA9IHRoaXMudG90YWxJdGVtcztcbiAgICAgICAgdGhpcy51c2VycyA9IGRhdGE7XG4gICAgfVxuXG4gICAgcHJpdmF0ZSBvbkVycm9yKGVycm9yKSB7XG4gICAgICAgIHRoaXMuYWxlcnRTZXJ2aWNlLmVycm9yKGVycm9yLmVycm9yLCBlcnJvci5tZXNzYWdlLCBudWxsKTtcbiAgICB9XG59XG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9+L3RzbGludC1sb2FkZXIhLi9zcmMvbWFpbi93ZWJhcHAvYXBwL2FkbWluL3VzZXItbWFuYWdlbWVudC91c2VyLW1hbmFnZW1lbnQuY29tcG9uZW50LnRzIiwiaW1wb3J0IHsgSW5qZWN0YWJsZSB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgUmVzb2x2ZSwgQWN0aXZhdGVkUm91dGVTbmFwc2hvdCwgUm91dGVyU3RhdGVTbmFwc2hvdCwgUm91dGVzLCBDYW5BY3RpdmF0ZSB9IGZyb20gJ0Bhbmd1bGFyL3JvdXRlcic7XG5cbmltcG9ydCB7IFBhZ2luYXRpb25VdGlsIH0gZnJvbSAnbmctamhpcHN0ZXInO1xuXG5pbXBvcnQgeyBVc2VyTWdtdENvbXBvbmVudCB9IGZyb20gJy4vdXNlci1tYW5hZ2VtZW50LmNvbXBvbmVudCc7XG5pbXBvcnQgeyBVc2VyTWdtdERldGFpbENvbXBvbmVudCB9IGZyb20gJy4vdXNlci1tYW5hZ2VtZW50LWRldGFpbC5jb21wb25lbnQnO1xuaW1wb3J0IHsgVXNlckRpYWxvZ0NvbXBvbmVudCB9IGZyb20gJy4vdXNlci1tYW5hZ2VtZW50LWRpYWxvZy5jb21wb25lbnQnO1xuaW1wb3J0IHsgVXNlckRlbGV0ZURpYWxvZ0NvbXBvbmVudCB9IGZyb20gJy4vdXNlci1tYW5hZ2VtZW50LWRlbGV0ZS1kaWFsb2cuY29tcG9uZW50JztcblxuaW1wb3J0IHsgUHJpbmNpcGFsIH0gZnJvbSAnLi4vLi4vc2hhcmVkJztcblxuQEluamVjdGFibGUoKVxuZXhwb3J0IGNsYXNzIFVzZXJSZXNvbHZlIGltcGxlbWVudHMgQ2FuQWN0aXZhdGUge1xuXG4gICAgY29uc3RydWN0b3IocHJpdmF0ZSBwcmluY2lwYWw6IFByaW5jaXBhbCkgeyB9XG5cbiAgICBjYW5BY3RpdmF0ZSgpIHtcbiAgICAgICAgcmV0dXJuIHRoaXMucHJpbmNpcGFsLmlkZW50aXR5KCkudGhlbigoYWNjb3VudCkgPT4gdGhpcy5wcmluY2lwYWwuaGFzQW55QXV0aG9yaXR5KFsnUk9MRV9BRE1JTiddKSk7XG4gICAgfVxufVxuXG5ASW5qZWN0YWJsZSgpXG5leHBvcnQgY2xhc3MgVXNlclJlc29sdmVQYWdpbmdQYXJhbXMgaW1wbGVtZW50cyBSZXNvbHZlPGFueT4ge1xuXG4gICAgY29uc3RydWN0b3IocHJpdmF0ZSBwYWdpbmF0aW9uVXRpbDogUGFnaW5hdGlvblV0aWwpIHt9XG5cbiAgICByZXNvbHZlKHJvdXRlOiBBY3RpdmF0ZWRSb3V0ZVNuYXBzaG90LCBzdGF0ZTogUm91dGVyU3RhdGVTbmFwc2hvdCkge1xuICAgICAgICBjb25zdCBwYWdlID0gcm91dGUucXVlcnlQYXJhbXNbJ3BhZ2UnXSA/IHJvdXRlLnF1ZXJ5UGFyYW1zWydwYWdlJ10gOiAnMSc7XG4gICAgICAgIGNvbnN0IHNvcnQgPSByb3V0ZS5xdWVyeVBhcmFtc1snc29ydCddID8gcm91dGUucXVlcnlQYXJhbXNbJ3NvcnQnXSA6ICdpZCxhc2MnO1xuICAgICAgICByZXR1cm4ge1xuICAgICAgICAgICAgcGFnZTogdGhpcy5wYWdpbmF0aW9uVXRpbC5wYXJzZVBhZ2UocGFnZSksXG4gICAgICAgICAgICBwcmVkaWNhdGU6IHRoaXMucGFnaW5hdGlvblV0aWwucGFyc2VQcmVkaWNhdGUoc29ydCksXG4gICAgICAgICAgICBhc2NlbmRpbmc6IHRoaXMucGFnaW5hdGlvblV0aWwucGFyc2VBc2NlbmRpbmcoc29ydClcbiAgICAgICAgfTtcbiAgICB9XG59XG5cbmV4cG9ydCBjb25zdCB1c2VyTWdtdFJvdXRlOiBSb3V0ZXMgPSBbXG4gICAge1xuICAgICAgICBwYXRoOiAndXNlci1tYW5hZ2VtZW50JyxcbiAgICAgICAgY29tcG9uZW50OiBVc2VyTWdtdENvbXBvbmVudCxcbiAgICAgICAgcmVzb2x2ZToge1xuICAgICAgICAgICAgJ3BhZ2luZ1BhcmFtcyc6IFVzZXJSZXNvbHZlUGFnaW5nUGFyYW1zXG4gICAgICAgIH0sXG4gICAgICAgIGRhdGE6IHtcbiAgICAgICAgICAgIHBhZ2VUaXRsZTogJ3VzZXJNYW5hZ2VtZW50LmhvbWUudGl0bGUnXG4gICAgICAgIH1cbiAgICB9LFxuICAgIHtcbiAgICAgICAgcGF0aDogJ3VzZXItbWFuYWdlbWVudC86bG9naW4nLFxuICAgICAgICBjb21wb25lbnQ6IFVzZXJNZ210RGV0YWlsQ29tcG9uZW50LFxuICAgICAgICBkYXRhOiB7XG4gICAgICAgICAgICBwYWdlVGl0bGU6ICd1c2VyTWFuYWdlbWVudC5ob21lLnRpdGxlJ1xuICAgICAgICB9XG4gICAgfVxuXTtcblxuZXhwb3J0IGNvbnN0IHVzZXJEaWFsb2dSb3V0ZTogUm91dGVzID0gW1xuICAgIHtcbiAgICAgICAgcGF0aDogJ3VzZXItbWFuYWdlbWVudC1uZXcnLFxuICAgICAgICBjb21wb25lbnQ6IFVzZXJEaWFsb2dDb21wb25lbnQsXG4gICAgICAgIG91dGxldDogJ3BvcHVwJ1xuICAgIH0sXG4gICAge1xuICAgICAgICBwYXRoOiAndXNlci1tYW5hZ2VtZW50Lzpsb2dpbi9lZGl0JyxcbiAgICAgICAgY29tcG9uZW50OiBVc2VyRGlhbG9nQ29tcG9uZW50LFxuICAgICAgICBvdXRsZXQ6ICdwb3B1cCdcbiAgICB9LFxuICAgIHtcbiAgICAgICAgcGF0aDogJ3VzZXItbWFuYWdlbWVudC86bG9naW4vZGVsZXRlJyxcbiAgICAgICAgY29tcG9uZW50OiBVc2VyRGVsZXRlRGlhbG9nQ29tcG9uZW50LFxuICAgICAgICBvdXRsZXQ6ICdwb3B1cCdcbiAgICB9XG5dO1xuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vfi90c2xpbnQtbG9hZGVyIS4vc3JjL21haW4vd2ViYXBwL2FwcC9hZG1pbi91c2VyLW1hbmFnZW1lbnQvdXNlci1tYW5hZ2VtZW50LnJvdXRlLnRzIiwiaW1wb3J0IHsgSW5qZWN0YWJsZSwgQ29tcG9uZW50IH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBSb3V0ZXIgfSBmcm9tICdAYW5ndWxhci9yb3V0ZXInO1xuaW1wb3J0IHsgTmdiTW9kYWwsIE5nYk1vZGFsUmVmIH0gZnJvbSAnQG5nLWJvb3RzdHJhcC9uZy1ib290c3RyYXAnO1xuXG5pbXBvcnQgeyBVc2VyLCBVc2VyU2VydmljZSB9IGZyb20gJy4uLy4uL3NoYXJlZCc7XG5cbkBJbmplY3RhYmxlKClcbmV4cG9ydCBjbGFzcyBVc2VyTW9kYWxTZXJ2aWNlIHtcbiAgICBwcml2YXRlIGlzT3BlbiA9IGZhbHNlO1xuICAgIGNvbnN0cnVjdG9yKFxuICAgICAgICBwcml2YXRlIG1vZGFsU2VydmljZTogTmdiTW9kYWwsXG4gICAgICAgIHByaXZhdGUgcm91dGVyOiBSb3V0ZXIsXG4gICAgICAgIHByaXZhdGUgdXNlclNlcnZpY2U6IFVzZXJTZXJ2aWNlXG4gICAgKSB7fVxuXG4gICAgb3Blbihjb21wb25lbnQ6IENvbXBvbmVudCwgbG9naW4/OiBzdHJpbmcpOiBOZ2JNb2RhbFJlZiB7XG4gICAgICAgIGlmICh0aGlzLmlzT3Blbikge1xuICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICB9XG4gICAgICAgIHRoaXMuaXNPcGVuID0gdHJ1ZTtcblxuICAgICAgICBpZiAobG9naW4pIHtcbiAgICAgICAgICAgIHRoaXMudXNlclNlcnZpY2UuZmluZChsb2dpbikuc3Vic2NyaWJlKCh1c2VyKSA9PiB0aGlzLnVzZXJNb2RhbFJlZihjb21wb25lbnQsIHVzZXIpKTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIHJldHVybiB0aGlzLnVzZXJNb2RhbFJlZihjb21wb25lbnQsIG5ldyBVc2VyKCkpO1xuICAgICAgICB9XG4gICAgfVxuXG4gICAgdXNlck1vZGFsUmVmKGNvbXBvbmVudDogQ29tcG9uZW50LCB1c2VyOiBVc2VyKTogTmdiTW9kYWxSZWYge1xuICAgICAgICBjb25zdCBtb2RhbFJlZiA9IHRoaXMubW9kYWxTZXJ2aWNlLm9wZW4oY29tcG9uZW50LCB7IHNpemU6ICdsZycsIGJhY2tkcm9wOiAnc3RhdGljJ30pO1xuICAgICAgICBtb2RhbFJlZi5jb21wb25lbnRJbnN0YW5jZS51c2VyID0gdXNlcjtcbiAgICAgICAgbW9kYWxSZWYucmVzdWx0LnRoZW4oKHJlc3VsdCkgPT4ge1xuICAgICAgICAgICAgdGhpcy5yb3V0ZXIubmF2aWdhdGUoW3sgb3V0bGV0czogeyBwb3B1cDogbnVsbCB9fV0sIHsgcmVwbGFjZVVybDogdHJ1ZSB9KTtcbiAgICAgICAgICAgIHRoaXMuaXNPcGVuID0gZmFsc2U7XG4gICAgICAgIH0sIChyZWFzb24pID0+IHtcbiAgICAgICAgICAgIHRoaXMucm91dGVyLm5hdmlnYXRlKFt7IG91dGxldHM6IHsgcG9wdXA6IG51bGwgfX1dLCB7IHJlcGxhY2VVcmw6IHRydWUgfSk7XG4gICAgICAgICAgICB0aGlzLmlzT3BlbiA9IGZhbHNlO1xuICAgICAgICB9KTtcbiAgICAgICAgcmV0dXJuIG1vZGFsUmVmO1xuICAgIH1cbn1cblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL34vdHNsaW50LWxvYWRlciEuL3NyYy9tYWluL3dlYmFwcC9hcHAvYWRtaW4vdXNlci1tYW5hZ2VtZW50L3VzZXItbW9kYWwuc2VydmljZS50cyIsIi8vIERPIE5PVCBFRElUIFRISVMgRklMRSwgRURJVCBUSEUgV0VCUEFDSyBDT01NT04gQ09ORklHIElOU1RFQUQsIFdISUNIIFdJTEwgTU9ESUZZIFRISVMgRklMRVxuIC8qIHRzbGludDpkaXNhYmxlICovXG5sZXQgX1ZFUlNJT04gPSAnMC4wLjAnOyAvLyBUaGlzIHZhbHVlIHdpbGwgYmUgb3ZlcndyaXR0ZW4gYnkgd2VicGFja1xubGV0IF9ERUJVR19JTkZPX0VOQUJMRUQgPSB0cnVlOyAvLyBUaGlzIHZhbHVlIHdpbGwgYmUgb3ZlcndyaXR0ZW4gYnkgd2VicGFja1xuX1ZFUlNJT04gPSBcIjAuMC4wXCI7XG5fREVCVUdfSU5GT19FTkFCTEVEID0gdHJ1ZTtcbi8qIHRzbGludDplbmFibGUgKi9cbmV4cG9ydCBjb25zdCBWRVJTSU9OID0gX1ZFUlNJT047XG5leHBvcnQgY29uc3QgREVCVUdfSU5GT19FTkFCTEVEID0gX0RFQlVHX0lORk9fRU5BQkxFRDtcblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL34vc3RyaW5nLXJlcGxhY2Utd2VicGFjay1wbHVnaW4vbG9hZGVyLmpzP2lkPXRyNWo5OXRlNXVpejd4MzhnNXRlZ2hrdDkhLi9+L3RzbGludC1sb2FkZXIhLi9zcmMvbWFpbi93ZWJhcHAvYXBwL2FwcC5jb25zdGFudHMudHMiLCJpbXBvcnQgeyBwbGF0Zm9ybUJyb3dzZXJEeW5hbWljIH0gZnJvbSAnQGFuZ3VsYXIvcGxhdGZvcm0tYnJvd3Nlci1keW5hbWljJztcbmltcG9ydCB7IFByb2RDb25maWcgfSBmcm9tICcuL2Jsb2Nrcy9jb25maWcvcHJvZC5jb25maWcnO1xuaW1wb3J0IHsgUGFja2V0QXBwQXBwTW9kdWxlIH0gZnJvbSAnLi9hcHAubW9kdWxlJztcblxuUHJvZENvbmZpZygpO1xuXG5pZiAobW9kdWxlWydob3QnXSkge1xuICAgIG1vZHVsZVsnaG90J10uYWNjZXB0KCk7XG59XG5cbnBsYXRmb3JtQnJvd3NlckR5bmFtaWMoKS5ib290c3RyYXBNb2R1bGUoUGFja2V0QXBwQXBwTW9kdWxlKTtcblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL34vdHNsaW50LWxvYWRlciEuL3NyYy9tYWluL3dlYmFwcC9hcHAvYXBwLm1haW4udHMiLCJpbXBvcnQgJy4vdmVuZG9yLnRzJztcblxuaW1wb3J0IHsgTmdNb2R1bGUgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IEJyb3dzZXJNb2R1bGUgfSBmcm9tICdAYW5ndWxhci9wbGF0Zm9ybS1icm93c2VyJztcbmltcG9ydCB7IE5nMldlYnN0b3JhZ2UgfSBmcm9tICduZzItd2Vic3RvcmFnZSc7XG5cbmltcG9ydCB7IFBhY2tldEFwcFNoYXJlZE1vZHVsZSwgVXNlclJvdXRlQWNjZXNzU2VydmljZSB9IGZyb20gJy4vc2hhcmVkJztcbmltcG9ydCB7IFBhY2tldEFwcEhvbWVNb2R1bGUgfSBmcm9tICcuL2hvbWUvaG9tZS5tb2R1bGUnO1xuaW1wb3J0IHsgUGFja2V0QXBwQWRtaW5Nb2R1bGUgfSBmcm9tICcuL2FkbWluL2FkbWluLm1vZHVsZSc7XG5pbXBvcnQgeyBQYWNrZXRBcHBBY2NvdW50TW9kdWxlIH0gZnJvbSAnLi9hY2NvdW50L2FjY291bnQubW9kdWxlJztcbmltcG9ydCB7IFBhY2tldEFwcEVudGl0eU1vZHVsZSB9IGZyb20gJy4vZW50aXRpZXMvZW50aXR5Lm1vZHVsZSc7XG5cbmltcG9ydCB7IGN1c3RvbUh0dHBQcm92aWRlciB9IGZyb20gJy4vYmxvY2tzL2ludGVyY2VwdG9yL2h0dHAucHJvdmlkZXInO1xuaW1wb3J0IHsgUGFnaW5hdGlvbkNvbmZpZyB9IGZyb20gJy4vYmxvY2tzL2NvbmZpZy91aWItcGFnaW5hdGlvbi5jb25maWcnO1xuXG5pbXBvcnQge1xuICAgIEpoaU1haW5Db21wb25lbnQsXG4gICAgTGF5b3V0Um91dGluZ01vZHVsZSxcbiAgICBOYXZiYXJDb21wb25lbnQsXG4gICAgRm9vdGVyQ29tcG9uZW50LFxuICAgIFByb2ZpbGVTZXJ2aWNlLFxuICAgIFBhZ2VSaWJib25Db21wb25lbnQsXG4gICAgQWN0aXZlTWVudURpcmVjdGl2ZSxcbiAgICBFcnJvckNvbXBvbmVudFxufSBmcm9tICcuL2xheW91dHMnO1xuXG5ATmdNb2R1bGUoe1xuICAgIGltcG9ydHM6IFtcbiAgICAgICAgQnJvd3Nlck1vZHVsZSxcbiAgICAgICAgTGF5b3V0Um91dGluZ01vZHVsZSxcbiAgICAgICAgTmcyV2Vic3RvcmFnZS5mb3JSb290KHsgcHJlZml4OiAnamhpJywgc2VwYXJhdG9yOiAnLSd9KSxcbiAgICAgICAgUGFja2V0QXBwU2hhcmVkTW9kdWxlLFxuICAgICAgICBQYWNrZXRBcHBIb21lTW9kdWxlLFxuICAgICAgICBQYWNrZXRBcHBBZG1pbk1vZHVsZSxcbiAgICAgICAgUGFja2V0QXBwQWNjb3VudE1vZHVsZSxcbiAgICAgICAgUGFja2V0QXBwRW50aXR5TW9kdWxlXG4gICAgXSxcbiAgICBkZWNsYXJhdGlvbnM6IFtcbiAgICAgICAgSmhpTWFpbkNvbXBvbmVudCxcbiAgICAgICAgTmF2YmFyQ29tcG9uZW50LFxuICAgICAgICBFcnJvckNvbXBvbmVudCxcbiAgICAgICAgUGFnZVJpYmJvbkNvbXBvbmVudCxcbiAgICAgICAgQWN0aXZlTWVudURpcmVjdGl2ZSxcbiAgICAgICAgRm9vdGVyQ29tcG9uZW50XG4gICAgXSxcbiAgICBwcm92aWRlcnM6IFtcbiAgICAgICAgUHJvZmlsZVNlcnZpY2UsXG4gICAgICAgIGN1c3RvbUh0dHBQcm92aWRlcigpLFxuICAgICAgICBQYWdpbmF0aW9uQ29uZmlnLFxuICAgICAgICBVc2VyUm91dGVBY2Nlc3NTZXJ2aWNlXG4gICAgXSxcbiAgICBib290c3RyYXA6IFsgSmhpTWFpbkNvbXBvbmVudCBdXG59KVxuZXhwb3J0IGNsYXNzIFBhY2tldEFwcEFwcE1vZHVsZSB7fVxuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vfi90c2xpbnQtbG9hZGVyIS4vc3JjL21haW4vd2ViYXBwL2FwcC9hcHAubW9kdWxlLnRzIiwiaW1wb3J0IHsgUm91dGUgfSBmcm9tICdAYW5ndWxhci9yb3V0ZXInO1xuXG5pbXBvcnQgeyBOYXZiYXJDb21wb25lbnQgfSBmcm9tICcuL2xheW91dHMnO1xuXG5leHBvcnQgY29uc3QgbmF2YmFyUm91dGU6IFJvdXRlID0ge1xuICAgIHBhdGg6ICcnLFxuICAgIGNvbXBvbmVudDogTmF2YmFyQ29tcG9uZW50LFxuICAgIG91dGxldDogJ25hdmJhcidcbn07XG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9+L3RzbGludC1sb2FkZXIhLi9zcmMvbWFpbi93ZWJhcHAvYXBwL2FwcC5yb3V0ZS50cyIsImltcG9ydCB7IGVuYWJsZVByb2RNb2RlIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBERUJVR19JTkZPX0VOQUJMRUQgfSBmcm9tICcuLi8uLi9hcHAuY29uc3RhbnRzJztcblxuZXhwb3J0IGZ1bmN0aW9uIFByb2RDb25maWcoKSB7XG4gICAgLy8gZGlzYWJsZSBkZWJ1ZyBkYXRhIG9uIHByb2QgcHJvZmlsZSB0byBpbXByb3ZlIHBlcmZvcm1hbmNlXG4gICAgaWYgKCFERUJVR19JTkZPX0VOQUJMRUQpIHtcbiAgICAgICAgZW5hYmxlUHJvZE1vZGUoKTtcbiAgICB9XG59XG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9+L3RzbGludC1sb2FkZXIhLi9zcmMvbWFpbi93ZWJhcHAvYXBwL2Jsb2Nrcy9jb25maWcvcHJvZC5jb25maWcudHMiLCJpbXBvcnQgeyBJVEVNU19QRVJfUEFHRSB9IGZyb20gJy4uLy4uL3NoYXJlZCc7XG5pbXBvcnQgeyBJbmplY3RhYmxlIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBOZ2JQYWdpbmF0aW9uQ29uZmlnfSBmcm9tICdAbmctYm9vdHN0cmFwL25nLWJvb3RzdHJhcCc7XG5cbkBJbmplY3RhYmxlKClcbmV4cG9ydCBjbGFzcyBQYWdpbmF0aW9uQ29uZmlnIHtcbiAgICBjb25zdHJ1Y3Rvcihwcml2YXRlIGNvbmZpZzogTmdiUGFnaW5hdGlvbkNvbmZpZykge1xuICAgICAgICBjb25maWcuYm91bmRhcnlMaW5rcyA9IHRydWU7XG4gICAgICAgIGNvbmZpZy5tYXhTaXplID0gNTtcbiAgICAgICAgY29uZmlnLnBhZ2VTaXplID0gSVRFTVNfUEVSX1BBR0U7XG4gICAgICAgIGNvbmZpZy5zaXplID0gJ3NtJztcbiAgICB9XG59XG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9+L3RzbGludC1sb2FkZXIhLi9zcmMvbWFpbi93ZWJhcHAvYXBwL2Jsb2Nrcy9jb25maWcvdWliLXBhZ2luYXRpb24uY29uZmlnLnRzIiwiaW1wb3J0IHsgSHR0cEludGVyY2VwdG9yIH0gZnJvbSAnbmctamhpcHN0ZXInO1xuaW1wb3J0IHsgUmVxdWVzdE9wdGlvbnNBcmdzLCBSZXNwb25zZSB9IGZyb20gJ0Bhbmd1bGFyL2h0dHAnO1xuaW1wb3J0IHsgT2JzZXJ2YWJsZSB9IGZyb20gJ3J4anMvT2JzZXJ2YWJsZSc7XG5pbXBvcnQgeyBJbmplY3RvciB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgTG9naW5TZXJ2aWNlIH0gZnJvbSAnLi4vLi4vc2hhcmVkL2xvZ2luL2xvZ2luLnNlcnZpY2UnO1xuXG5leHBvcnQgY2xhc3MgQXV0aEV4cGlyZWRJbnRlcmNlcHRvciBleHRlbmRzIEh0dHBJbnRlcmNlcHRvciB7XG5cbiAgICBjb25zdHJ1Y3Rvcihwcml2YXRlIGluamVjdG9yOiBJbmplY3Rvcikge1xuICAgICAgICBzdXBlcigpO1xuICAgIH1cblxuICAgIHJlcXVlc3RJbnRlcmNlcHQob3B0aW9ucz86IFJlcXVlc3RPcHRpb25zQXJncyk6IFJlcXVlc3RPcHRpb25zQXJncyB7XG4gICAgICAgIHJldHVybiBvcHRpb25zO1xuICAgIH1cblxuICAgIHJlc3BvbnNlSW50ZXJjZXB0KG9ic2VydmFibGU6IE9ic2VydmFibGU8UmVzcG9uc2U+KTogT2JzZXJ2YWJsZTxSZXNwb25zZT4ge1xuICAgICAgICByZXR1cm4gPE9ic2VydmFibGU8UmVzcG9uc2U+PiBvYnNlcnZhYmxlLmNhdGNoKChlcnJvciwgc291cmNlKSA9PiB7XG4gICAgICAgICAgICBpZiAoZXJyb3Iuc3RhdHVzID09PSA0MDEpIHtcbiAgICAgICAgICAgICAgICBjb25zdCBsb2dpblNlcnZpY2U6IExvZ2luU2VydmljZSA9IHRoaXMuaW5qZWN0b3IuZ2V0KExvZ2luU2VydmljZSk7XG4gICAgICAgICAgICAgICAgbG9naW5TZXJ2aWNlLmxvZ291dCgpO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgcmV0dXJuIE9ic2VydmFibGUudGhyb3coZXJyb3IpO1xuICAgICAgICB9KTtcbiAgICB9XG59XG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9+L3RzbGludC1sb2FkZXIhLi9zcmMvbWFpbi93ZWJhcHAvYXBwL2Jsb2Nrcy9pbnRlcmNlcHRvci9hdXRoLWV4cGlyZWQuaW50ZXJjZXB0b3IudHMiLCJpbXBvcnQgeyBPYnNlcnZhYmxlIH0gZnJvbSAncnhqcy9PYnNlcnZhYmxlJztcbmltcG9ydCB7IFJlcXVlc3RPcHRpb25zQXJncywgUmVzcG9uc2UgfSBmcm9tICdAYW5ndWxhci9odHRwJztcbmltcG9ydCB7IExvY2FsU3RvcmFnZVNlcnZpY2UsIFNlc3Npb25TdG9yYWdlU2VydmljZSB9IGZyb20gJ25nMi13ZWJzdG9yYWdlJztcbmltcG9ydCB7IEh0dHBJbnRlcmNlcHRvciB9IGZyb20gJ25nLWpoaXBzdGVyJztcblxuZXhwb3J0IGNsYXNzIEF1dGhJbnRlcmNlcHRvciBleHRlbmRzIEh0dHBJbnRlcmNlcHRvciB7XG5cbiAgICBjb25zdHJ1Y3RvcihcbiAgICAgICAgcHJpdmF0ZSBsb2NhbFN0b3JhZ2U6IExvY2FsU3RvcmFnZVNlcnZpY2UsXG4gICAgICAgIHByaXZhdGUgc2Vzc2lvblN0b3JhZ2U6IFNlc3Npb25TdG9yYWdlU2VydmljZVxuICAgICkge1xuICAgICAgICBzdXBlcigpO1xuICAgIH1cblxuICAgIHJlcXVlc3RJbnRlcmNlcHQob3B0aW9ucz86IFJlcXVlc3RPcHRpb25zQXJncyk6IFJlcXVlc3RPcHRpb25zQXJncyB7XG4gICAgICAgIGNvbnN0IHRva2VuID0gdGhpcy5sb2NhbFN0b3JhZ2UucmV0cmlldmUoJ2F1dGhlbnRpY2F0aW9uVG9rZW4nKSB8fCB0aGlzLnNlc3Npb25TdG9yYWdlLnJldHJpZXZlKCdhdXRoZW50aWNhdGlvblRva2VuJyk7XG4gICAgICAgIGlmICghIXRva2VuKSB7XG4gICAgICAgICAgICBvcHRpb25zLmhlYWRlcnMuYXBwZW5kKCdBdXRob3JpemF0aW9uJywgJ0JlYXJlciAnICsgdG9rZW4pO1xuICAgICAgICB9XG4gICAgICAgIHJldHVybiBvcHRpb25zO1xuICAgIH1cblxuICAgIHJlc3BvbnNlSW50ZXJjZXB0KG9ic2VydmFibGU6IE9ic2VydmFibGU8UmVzcG9uc2U+KTogT2JzZXJ2YWJsZTxSZXNwb25zZT4ge1xuICAgICAgICByZXR1cm4gb2JzZXJ2YWJsZTsgLy8gYnkgcGFzc1xuICAgIH1cblxufVxuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vfi90c2xpbnQtbG9hZGVyIS4vc3JjL21haW4vd2ViYXBwL2FwcC9ibG9ja3MvaW50ZXJjZXB0b3IvYXV0aC5pbnRlcmNlcHRvci50cyIsImltcG9ydCB7IEh0dHBJbnRlcmNlcHRvciwgRXZlbnRNYW5hZ2VyIH0gZnJvbSAnbmctamhpcHN0ZXInO1xuaW1wb3J0IHsgUmVxdWVzdE9wdGlvbnNBcmdzLCBSZXNwb25zZSB9IGZyb20gJ0Bhbmd1bGFyL2h0dHAnO1xuaW1wb3J0IHsgT2JzZXJ2YWJsZSB9IGZyb20gJ3J4anMvT2JzZXJ2YWJsZSc7XG5cbmV4cG9ydCBjbGFzcyBFcnJvckhhbmRsZXJJbnRlcmNlcHRvciBleHRlbmRzIEh0dHBJbnRlcmNlcHRvciB7XG5cbiAgICBjb25zdHJ1Y3Rvcihwcml2YXRlIGV2ZW50TWFuYWdlcjogRXZlbnRNYW5hZ2VyKSB7XG4gICAgICAgIHN1cGVyKCk7XG4gICAgfVxuXG4gICAgcmVxdWVzdEludGVyY2VwdChvcHRpb25zPzogUmVxdWVzdE9wdGlvbnNBcmdzKTogUmVxdWVzdE9wdGlvbnNBcmdzIHtcbiAgICAgICAgcmV0dXJuIG9wdGlvbnM7XG4gICAgfVxuXG4gICAgcmVzcG9uc2VJbnRlcmNlcHQob2JzZXJ2YWJsZTogT2JzZXJ2YWJsZTxSZXNwb25zZT4pOiBPYnNlcnZhYmxlPFJlc3BvbnNlPiB7XG4gICAgICAgIHJldHVybiA8T2JzZXJ2YWJsZTxSZXNwb25zZT4+IG9ic2VydmFibGUuY2F0Y2goKGVycm9yKSA9PiB7XG4gICAgICAgICAgICBpZiAoIShlcnJvci5zdGF0dXMgPT09IDQwMSAmJiAoZXJyb3IudGV4dCgpID09PSAnJyB8fFxuICAgICAgICAgICAgICAgIChlcnJvci5qc29uKCkucGF0aCAmJiBlcnJvci5qc29uKCkucGF0aC5pbmRleE9mKCcvYXBpL2FjY291bnQnKSA9PT0gMCApKSkpIHtcbiAgICAgICAgICAgICAgICB0aGlzLmV2ZW50TWFuYWdlci5icm9hZGNhc3QoIHtuYW1lOiAncGFja2V0QXBwLmh0dHBFcnJvcicsIGNvbnRlbnQ6IGVycm9yfSk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICByZXR1cm4gT2JzZXJ2YWJsZS50aHJvdyhlcnJvcik7XG4gICAgICAgIH0pO1xuICAgIH1cbn1cblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL34vdHNsaW50LWxvYWRlciEuL3NyYy9tYWluL3dlYmFwcC9hcHAvYmxvY2tzL2ludGVyY2VwdG9yL2Vycm9yaGFuZGxlci5pbnRlcmNlcHRvci50cyIsImltcG9ydCB7IEluamVjdG9yIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBIdHRwLCBYSFJCYWNrZW5kLCBSZXF1ZXN0T3B0aW9ucyB9IGZyb20gJ0Bhbmd1bGFyL2h0dHAnO1xuaW1wb3J0IHsgRXZlbnRNYW5hZ2VyLCBJbnRlcmNlcHRhYmxlSHR0cCB9IGZyb20gJ25nLWpoaXBzdGVyJztcblxuaW1wb3J0IHsgQXV0aEludGVyY2VwdG9yIH0gZnJvbSAnLi9hdXRoLmludGVyY2VwdG9yJztcbmltcG9ydCB7IExvY2FsU3RvcmFnZVNlcnZpY2UsIFNlc3Npb25TdG9yYWdlU2VydmljZSB9IGZyb20gJ25nMi13ZWJzdG9yYWdlJztcbmltcG9ydCB7IEF1dGhFeHBpcmVkSW50ZXJjZXB0b3IgfSBmcm9tICcuL2F1dGgtZXhwaXJlZC5pbnRlcmNlcHRvcic7XG5pbXBvcnQgeyBFcnJvckhhbmRsZXJJbnRlcmNlcHRvciB9IGZyb20gJy4vZXJyb3JoYW5kbGVyLmludGVyY2VwdG9yJztcbmltcG9ydCB7IE5vdGlmaWNhdGlvbkludGVyY2VwdG9yIH0gZnJvbSAnLi9ub3RpZmljYXRpb24uaW50ZXJjZXB0b3InO1xuXG5leHBvcnQgZnVuY3Rpb24gaW50ZXJjZXB0YWJsZUZhY3RvcnkoXG4gICAgYmFja2VuZDogWEhSQmFja2VuZCxcbiAgICBkZWZhdWx0T3B0aW9uczogUmVxdWVzdE9wdGlvbnMsXG4gICAgbG9jYWxTdG9yYWdlOiBMb2NhbFN0b3JhZ2VTZXJ2aWNlLFxuICAgIHNlc3Npb25TdG9yYWdlOiBTZXNzaW9uU3RvcmFnZVNlcnZpY2UsXG4gICAgaW5qZWN0b3I6IEluamVjdG9yLFxuICAgIGV2ZW50TWFuYWdlcjogRXZlbnRNYW5hZ2VyXG4pIHtcbiAgICByZXR1cm4gbmV3IEludGVyY2VwdGFibGVIdHRwKFxuICAgICAgICBiYWNrZW5kLFxuICAgICAgICBkZWZhdWx0T3B0aW9ucyxcbiAgICAgICAgW1xuICAgICAgICAgICAgbmV3IEF1dGhJbnRlcmNlcHRvcihsb2NhbFN0b3JhZ2UsIHNlc3Npb25TdG9yYWdlKSxcbiAgICAgICAgICAgIG5ldyBBdXRoRXhwaXJlZEludGVyY2VwdG9yKGluamVjdG9yKSxcbiAgICAgICAgICAgIC8vIE90aGVyIGludGVyY2VwdG9ycyBjYW4gYmUgYWRkZWQgaGVyZVxuICAgICAgICAgICAgbmV3IEVycm9ySGFuZGxlckludGVyY2VwdG9yKGV2ZW50TWFuYWdlciksXG4gICAgICAgICAgICBuZXcgTm90aWZpY2F0aW9uSW50ZXJjZXB0b3IoKVxuICAgICAgICBdXG4gICAgKTtcbn07XG5cbmV4cG9ydCBmdW5jdGlvbiBjdXN0b21IdHRwUHJvdmlkZXIoKSB7XG4gICAgcmV0dXJuIHtcbiAgICAgICAgcHJvdmlkZTogSHR0cCxcbiAgICAgICAgdXNlRmFjdG9yeTogaW50ZXJjZXB0YWJsZUZhY3RvcnksXG4gICAgICAgIGRlcHM6IFtcbiAgICAgICAgICAgIFhIUkJhY2tlbmQsXG4gICAgICAgICAgICBSZXF1ZXN0T3B0aW9ucyxcbiAgICAgICAgICAgIExvY2FsU3RvcmFnZVNlcnZpY2UsXG4gICAgICAgICAgICBTZXNzaW9uU3RvcmFnZVNlcnZpY2UsXG4gICAgICAgICAgICBJbmplY3RvcixcbiAgICAgICAgICAgIEV2ZW50TWFuYWdlclxuICAgICAgICBdXG4gICAgfTtcbn07XG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9+L3RzbGludC1sb2FkZXIhLi9zcmMvbWFpbi93ZWJhcHAvYXBwL2Jsb2Nrcy9pbnRlcmNlcHRvci9odHRwLnByb3ZpZGVyLnRzIiwiaW1wb3J0IHsgSHR0cEludGVyY2VwdG9yIH0gZnJvbSAnbmctamhpcHN0ZXInO1xuaW1wb3J0IHsgUmVxdWVzdE9wdGlvbnNBcmdzLCBSZXNwb25zZSB9IGZyb20gJ0Bhbmd1bGFyL2h0dHAnO1xuaW1wb3J0IHsgT2JzZXJ2YWJsZSB9IGZyb20gJ3J4anMvT2JzZXJ2YWJsZSc7XG5cbmV4cG9ydCBjbGFzcyBOb3RpZmljYXRpb25JbnRlcmNlcHRvciBleHRlbmRzIEh0dHBJbnRlcmNlcHRvciB7XG5cbiAgICBjb25zdHJ1Y3RvcigpIHtcbiAgICAgICAgc3VwZXIoKTtcbiAgICB9XG5cbiAgICByZXF1ZXN0SW50ZXJjZXB0KG9wdGlvbnM/OiBSZXF1ZXN0T3B0aW9uc0FyZ3MpOiBSZXF1ZXN0T3B0aW9uc0FyZ3Mge1xuICAgICAgICByZXR1cm4gb3B0aW9ucztcbiAgICB9XG5cbiAgICByZXNwb25zZUludGVyY2VwdChvYnNlcnZhYmxlOiBPYnNlcnZhYmxlPFJlc3BvbnNlPik6IE9ic2VydmFibGU8UmVzcG9uc2U+IHtcbiAgICAgICAgcmV0dXJuIDxPYnNlcnZhYmxlPFJlc3BvbnNlPj4gb2JzZXJ2YWJsZS5jYXRjaCgoZXJyb3IpID0+IHtcbiAgICAgICAgICAgIGNvbnN0IGFyciA9IEFycmF5LmZyb20oZXJyb3IuaGVhZGVycy5faGVhZGVycyk7XG4gICAgICAgICAgICBjb25zdCBoZWFkZXJzID0gW107XG4gICAgICAgICAgICBsZXQgaTtcbiAgICAgICAgICAgIGZvciAoaSA9IDA7IGkgPCBhcnIubGVuZ3RoOyBpKyspIHtcbiAgICAgICAgICAgICAgICBpZiAoYXJyW2ldWzBdLmVuZHNXaXRoKCdhcHAtYWxlcnQnKSB8fCBhcnJbaV1bMF0uZW5kc1dpdGgoJ2FwcC1wYXJhbXMnKSkge1xuICAgICAgICAgICAgICAgICAgICBoZWFkZXJzLnB1c2goYXJyW2ldWzBdKTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBoZWFkZXJzLnNvcnQoKTtcbiAgICAgICAgICAgIGNvbnN0IGFsZXJ0S2V5ID0gaGVhZGVycy5sZW5ndGggPj0gMSA/IGVycm9yLmhlYWRlcnMuZ2V0KGhlYWRlcnNbMF0pIDogbnVsbDtcbiAgICAgICAgICAgIGlmICh0eXBlb2YgYWxlcnRLZXkgPT09ICdzdHJpbmcnKSB7XG4gICAgICAgICAgICAgICAgLy8gQWxlcnRTZXJ2aWNlLnN1Y2Nlc3MoYWxlcnRLZXksIHsgcGFyYW06IHJlc3BvbnNlLmhlYWRlcnMoaGVhZGVyc1sxXSl9KTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIHJldHVybiBPYnNlcnZhYmxlLnRocm93KGVycm9yKTtcbiAgICAgICAgfSk7XG4gICAgfVxufVxuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vfi90c2xpbnQtbG9hZGVyIS4vc3JjL21haW4vd2ViYXBwL2FwcC9ibG9ja3MvaW50ZXJjZXB0b3Ivbm90aWZpY2F0aW9uLmludGVyY2VwdG9yLnRzIiwiaW1wb3J0IHsgTmdNb2R1bGUsIENVU1RPTV9FTEVNRU5UU19TQ0hFTUEgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcblxuLyogamhpcHN0ZXItbmVlZGxlLWFkZC1lbnRpdHktbW9kdWxlLWltcG9ydCAtIEpIaXBzdGVyIHdpbGwgYWRkIGVudGl0eSBtb2R1bGVzIGltcG9ydHMgaGVyZSAqL1xuXG5ATmdNb2R1bGUoe1xuICAgIGltcG9ydHM6IFtcbiAgICAgICAgLyogamhpcHN0ZXItbmVlZGxlLWFkZC1lbnRpdHktbW9kdWxlIC0gSkhpcHN0ZXIgd2lsbCBhZGQgZW50aXR5IG1vZHVsZXMgaGVyZSAqL1xuICAgIF0sXG4gICAgZGVjbGFyYXRpb25zOiBbXSxcbiAgICBlbnRyeUNvbXBvbmVudHM6IFtdLFxuICAgIHByb3ZpZGVyczogW10sXG4gICAgc2NoZW1hczogW0NVU1RPTV9FTEVNRU5UU19TQ0hFTUFdXG59KVxuZXhwb3J0IGNsYXNzIFBhY2tldEFwcEVudGl0eU1vZHVsZSB7fVxuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vfi90c2xpbnQtbG9hZGVyIS4vc3JjL21haW4vd2ViYXBwL2FwcC9lbnRpdGllcy9lbnRpdHkubW9kdWxlLnRzIiwibW9kdWxlLmV4cG9ydHMgPSBcIjxkaXYgY2xhc3M9XFxcInJvd1xcXCI+IDxkaXYgY2xhc3M9XFxcImNvbC1tZC0zXFxcIj4gPHNwYW4gY2xhc3M9XFxcImhpcHN0ZXIgaW1nLWZsdWlkIGltZy1yb3VuZGVkXFxcIj48L3NwYW4+IDwvZGl2PiA8ZGl2IGNsYXNzPVxcXCJjb2wtbWQtOVxcXCI+IDxoMSBjbGFzcz1cXFwiZGlzcGxheS00XFxcIiBqaGlUcmFuc2xhdGU9XFxcImhvbWUudGl0bGVcXFwiPldlbGNvbWUsIEphdmEgSGlwc3RlciE8L2gxPiA8cCBjbGFzcz1cXFwibGVhZFxcXCIgamhpVHJhbnNsYXRlPVxcXCJob21lLnN1YnRpdGxlXFxcIj5UaGlzIGlzIHlvdXIgaG9tZXBhZ2U8L3A+IDxkaXYgW25nU3dpdGNoXT1cXFwiaXNBdXRoZW50aWNhdGVkKClcXFwiPiA8ZGl2IGNsYXNzPVxcXCJhbGVydCBhbGVydC1zdWNjZXNzXFxcIiAqbmdTd2l0Y2hDYXNlPVxcXCJ0cnVlXFxcIj4gPHNwYW4gKm5nSWY9XFxcImFjY291bnRcXFwiIGpoaVRyYW5zbGF0ZT1cXFwiaG9tZS5sb2dnZWQubWVzc2FnZVxcXCIgdHJhbnNsYXRlVmFsdWVzPVxcXCJ7dXNlcm5hbWU6ICd7e2FjY291bnQubG9naW59fSd9XFxcIj4gWW91IGFyZSBsb2dnZWQgaW4gYXMgdXNlciBcXFwie3thY2NvdW50LmxvZ2lufX1cXFwiLiA8L3NwYW4+IDwvZGl2PiA8ZGl2IGNsYXNzPVxcXCJhbGVydCBhbGVydC13YXJuaW5nXFxcIiAqbmdTd2l0Y2hDYXNlPVxcXCJmYWxzZVxcXCI+IDxzcGFuIGpoaVRyYW5zbGF0ZT1cXFwiZ2xvYmFsLm1lc3NhZ2VzLmluZm8uYXV0aGVudGljYXRlZC5wcmVmaXhcXFwiPklmIHlvdSB3YW50IHRvIDwvc3Bhbj4gPGEgY2xhc3M9XFxcImFsZXJ0LWxpbmtcXFwiIChjbGljayk9XFxcImxvZ2luKClcXFwiIGpoaVRyYW5zbGF0ZT1cXFwiZ2xvYmFsLm1lc3NhZ2VzLmluZm8uYXV0aGVudGljYXRlZC5saW5rXFxcIj5zaWduIGluPC9hPjxzcGFuIGpoaVRyYW5zbGF0ZT1cXFwiZ2xvYmFsLm1lc3NhZ2VzLmluZm8uYXV0aGVudGljYXRlZC5zdWZmaXhcXFwiPiwgeW91IGNhbiB0cnkgdGhlIGRlZmF1bHQgYWNjb3VudHM6PGJyLz4tIEFkbWluaXN0cmF0b3IgKGxvZ2luPVxcXCJhZG1pblxcXCIgYW5kIHBhc3N3b3JkPVxcXCJhZG1pblxcXCIpIDxici8+LSBVc2VyIChsb2dpbj1cXFwidXNlclxcXCIgYW5kIHBhc3N3b3JkPVxcXCJ1c2VyXFxcIikuPC9zcGFuPiA8L2Rpdj4gPGRpdiBjbGFzcz1cXFwiYWxlcnQgYWxlcnQtd2FybmluZ1xcXCIgKm5nU3dpdGNoQ2FzZT1cXFwiZmFsc2VcXFwiPiA8c3BhbiBqaGlUcmFuc2xhdGU9XFxcImdsb2JhbC5tZXNzYWdlcy5pbmZvLnJlZ2lzdGVyLm5vYWNjb3VudFxcXCI+WW91IGRvbid0IGhhdmUgYW4gYWNjb3VudCB5ZXQ/PC9zcGFuPiA8YSBjbGFzcz1cXFwiYWxlcnQtbGlua1xcXCIgcm91dGVyTGluaz1cXFwicmVnaXN0ZXJcXFwiIGpoaVRyYW5zbGF0ZT1cXFwiZ2xvYmFsLm1lc3NhZ2VzLmluZm8ucmVnaXN0ZXIubGlua1xcXCI+UmVnaXN0ZXIgYSBuZXcgYWNjb3VudDwvYT4gPC9kaXY+IDwvZGl2PiA8cCBqaGlUcmFuc2xhdGU9XFxcImhvbWUucXVlc3Rpb25cXFwiPiBJZiB5b3UgaGF2ZSBhbnkgcXVlc3Rpb24gb24gSkhpcHN0ZXI6IDwvcD4gPHVsPiA8bGk+PGEgaHJlZj1cXFwiaHR0cDovL2poaXBzdGVyLmdpdGh1Yi5pby9cXFwiIHRhcmdldD1cXFwiX2JsYW5rXFxcIiBqaGlUcmFuc2xhdGU9XFxcImhvbWUubGluay5ob21lcGFnZVxcXCI+SkhpcHN0ZXIgaG9tZXBhZ2U8L2E+PC9saT4gPGxpPjxhIGhyZWY9XFxcImh0dHA6Ly9zdGFja292ZXJmbG93LmNvbS90YWdzL2poaXBzdGVyL2luZm9cXFwiIHRhcmdldD1cXFwiX2JsYW5rXFxcIiBqaGlUcmFuc2xhdGU9XFxcImhvbWUubGluay5zdGFja292ZXJmbG93XFxcIj5KSGlwc3RlciBvbiBTdGFjayBPdmVyZmxvdzwvYT48L2xpPiA8bGk+PGEgaHJlZj1cXFwiaHR0cHM6Ly9naXRodWIuY29tL2poaXBzdGVyL2dlbmVyYXRvci1qaGlwc3Rlci9pc3N1ZXM/c3RhdGU9b3BlblxcXCIgdGFyZ2V0PVxcXCJfYmxhbmtcXFwiIGpoaVRyYW5zbGF0ZT1cXFwiaG9tZS5saW5rLmJ1Z3RyYWNrZXJcXFwiPkpIaXBzdGVyIGJ1ZyB0cmFja2VyPC9hPjwvbGk+IDxsaT48YSBocmVmPVxcXCJodHRwczovL2dpdHRlci5pbS9qaGlwc3Rlci9nZW5lcmF0b3ItamhpcHN0ZXJcXFwiIHRhcmdldD1cXFwiX2JsYW5rXFxcIiBqaGlUcmFuc2xhdGU9XFxcImhvbWUubGluay5jaGF0XFxcIj5KSGlwc3RlciBwdWJsaWMgY2hhdCByb29tPC9hPjwvbGk+IDxsaT48YSBocmVmPVxcXCJodHRwczovL3R3aXR0ZXIuY29tL2phdmFfaGlwc3RlclxcXCIgdGFyZ2V0PVxcXCJfYmxhbmtcXFwiIGpoaVRyYW5zbGF0ZT1cXFwiaG9tZS5saW5rLmZvbGxvd1xcXCI+Zm9sbG93IEBqYXZhX2hpcHN0ZXIgb24gVHdpdHRlcjwvYT48L2xpPiA8L3VsPiA8cD4gPHNwYW4gamhpVHJhbnNsYXRlPVxcXCJob21lLmxpa2VcXFwiPklmIHlvdSBsaWtlIEpIaXBzdGVyLCBkb24ndCBmb3JnZXQgdG8gZ2l2ZSB1cyBhIHN0YXIgb248L3NwYW4+IDxhIGhyZWY9XFxcImh0dHBzOi8vZ2l0aHViLmNvbS9qaGlwc3Rlci9nZW5lcmF0b3ItamhpcHN0ZXJcXFwiIHRhcmdldD1cXFwiX2JsYW5rXFxcIiBqaGlUcmFuc2xhdGU9XFxcImhvbWUuZ2l0aHViXFxcIj5HaXRodWI8L2E+ISA8L3A+IDwvZGl2PiA8L2Rpdj4gXCI7XG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9zcmMvbWFpbi93ZWJhcHAvYXBwL2hvbWUvaG9tZS5jb21wb25lbnQuaHRtbFxuLy8gbW9kdWxlIGlkID0gLi9zcmMvbWFpbi93ZWJhcHAvYXBwL2hvbWUvaG9tZS5jb21wb25lbnQuaHRtbFxuLy8gbW9kdWxlIGNodW5rcyA9IDAiLCJpbXBvcnQgeyBDb21wb25lbnQsIE9uSW5pdCB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgTmdiTW9kYWxSZWYgfSBmcm9tICdAbmctYm9vdHN0cmFwL25nLWJvb3RzdHJhcCc7XG5pbXBvcnQgeyBFdmVudE1hbmFnZXIgfSBmcm9tICduZy1qaGlwc3Rlcic7XG5cbmltcG9ydCB7IEFjY291bnQsIExvZ2luTW9kYWxTZXJ2aWNlLCBQcmluY2lwYWwgfSBmcm9tICcuLi9zaGFyZWQnO1xuXG5AQ29tcG9uZW50KHtcbiAgICBzZWxlY3RvcjogJ2poaS1ob21lJyxcbiAgICB0ZW1wbGF0ZVVybDogJy4vaG9tZS5jb21wb25lbnQuaHRtbCcsXG4gICAgc3R5bGVVcmxzOiBbXG4gICAgICAgICdob21lLnNjc3MnXG4gICAgXVxuXG59KVxuZXhwb3J0IGNsYXNzIEhvbWVDb21wb25lbnQgaW1wbGVtZW50cyBPbkluaXQge1xuICAgIGFjY291bnQ6IEFjY291bnQ7XG4gICAgbW9kYWxSZWY6IE5nYk1vZGFsUmVmO1xuXG4gICAgY29uc3RydWN0b3IoXG4gICAgICAgIHByaXZhdGUgcHJpbmNpcGFsOiBQcmluY2lwYWwsXG4gICAgICAgIHByaXZhdGUgbG9naW5Nb2RhbFNlcnZpY2U6IExvZ2luTW9kYWxTZXJ2aWNlLFxuICAgICAgICBwcml2YXRlIGV2ZW50TWFuYWdlcjogRXZlbnRNYW5hZ2VyXG4gICAgKSB7XG4gICAgfVxuXG4gICAgbmdPbkluaXQoKSB7XG4gICAgICAgIHRoaXMucHJpbmNpcGFsLmlkZW50aXR5KCkudGhlbigoYWNjb3VudCkgPT4ge1xuICAgICAgICAgICAgdGhpcy5hY2NvdW50ID0gYWNjb3VudDtcbiAgICAgICAgfSk7XG4gICAgICAgIHRoaXMucmVnaXN0ZXJBdXRoZW50aWNhdGlvblN1Y2Nlc3MoKTtcbiAgICB9XG5cbiAgICByZWdpc3RlckF1dGhlbnRpY2F0aW9uU3VjY2VzcygpIHtcbiAgICAgICAgdGhpcy5ldmVudE1hbmFnZXIuc3Vic2NyaWJlKCdhdXRoZW50aWNhdGlvblN1Y2Nlc3MnLCAobWVzc2FnZSkgPT4ge1xuICAgICAgICAgICAgdGhpcy5wcmluY2lwYWwuaWRlbnRpdHkoKS50aGVuKChhY2NvdW50KSA9PiB7XG4gICAgICAgICAgICAgICAgdGhpcy5hY2NvdW50ID0gYWNjb3VudDtcbiAgICAgICAgICAgIH0pO1xuICAgICAgICB9KTtcbiAgICB9XG5cbiAgICBpc0F1dGhlbnRpY2F0ZWQoKSB7XG4gICAgICAgIHJldHVybiB0aGlzLnByaW5jaXBhbC5pc0F1dGhlbnRpY2F0ZWQoKTtcbiAgICB9XG5cbiAgICBsb2dpbigpIHtcbiAgICAgICAgdGhpcy5tb2RhbFJlZiA9IHRoaXMubG9naW5Nb2RhbFNlcnZpY2Uub3BlbigpO1xuICAgIH1cbn1cblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL34vdHNsaW50LWxvYWRlciEuL3NyYy9tYWluL3dlYmFwcC9hcHAvaG9tZS9ob21lLmNvbXBvbmVudC50cyIsImltcG9ydCB7IE5nTW9kdWxlLCBDVVNUT01fRUxFTUVOVFNfU0NIRU1BIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBSb3V0ZXJNb2R1bGUgfSBmcm9tICdAYW5ndWxhci9yb3V0ZXInO1xuXG5pbXBvcnQgeyBQYWNrZXRBcHBTaGFyZWRNb2R1bGUgfSBmcm9tICcuLi9zaGFyZWQnO1xuXG5pbXBvcnQgeyBIT01FX1JPVVRFLCBIb21lQ29tcG9uZW50IH0gZnJvbSAnLi8nO1xuXG5ATmdNb2R1bGUoe1xuICAgIGltcG9ydHM6IFtcbiAgICAgICAgUGFja2V0QXBwU2hhcmVkTW9kdWxlLFxuICAgICAgICBSb3V0ZXJNb2R1bGUuZm9yUm9vdChbIEhPTUVfUk9VVEUgXSwgeyB1c2VIYXNoOiB0cnVlIH0pXG4gICAgXSxcbiAgICBkZWNsYXJhdGlvbnM6IFtcbiAgICAgICAgSG9tZUNvbXBvbmVudCxcbiAgICBdLFxuICAgIGVudHJ5Q29tcG9uZW50czogW1xuICAgIF0sXG4gICAgcHJvdmlkZXJzOiBbXG4gICAgXSxcbiAgICBzY2hlbWFzOiBbQ1VTVE9NX0VMRU1FTlRTX1NDSEVNQV1cbn0pXG5leHBvcnQgY2xhc3MgUGFja2V0QXBwSG9tZU1vZHVsZSB7fVxuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vfi90c2xpbnQtbG9hZGVyIS4vc3JjL21haW4vd2ViYXBwL2FwcC9ob21lL2hvbWUubW9kdWxlLnRzIiwiaW1wb3J0IHsgUm91dGUgfSBmcm9tICdAYW5ndWxhci9yb3V0ZXInO1xuXG5pbXBvcnQgeyBVc2VyUm91dGVBY2Nlc3NTZXJ2aWNlIH0gZnJvbSAnLi4vc2hhcmVkJztcbmltcG9ydCB7IEhvbWVDb21wb25lbnQgfSBmcm9tICcuLyc7XG5cbmV4cG9ydCBjb25zdCBIT01FX1JPVVRFOiBSb3V0ZSA9IHtcbiAgICBwYXRoOiAnJyxcbiAgICBjb21wb25lbnQ6IEhvbWVDb21wb25lbnQsXG4gICAgZGF0YToge1xuICAgICAgICBhdXRob3JpdGllczogW10sXG4gICAgICAgIHBhZ2VUaXRsZTogJ2hvbWUudGl0bGUnXG4gICAgfVxufTtcblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL34vdHNsaW50LWxvYWRlciEuL3NyYy9tYWluL3dlYmFwcC9hcHAvaG9tZS9ob21lLnJvdXRlLnRzIiwiXG4gICAgICAgIHZhciByZXN1bHQgPSByZXF1aXJlKFwiISEuLi8uLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9pbmRleC5qcyEuLi8uLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvc2Fzcy1sb2FkZXIvbGliL2xvYWRlci5qcyEuL2hvbWUuc2Nzc1wiKTtcblxuICAgICAgICBpZiAodHlwZW9mIHJlc3VsdCA9PT0gXCJzdHJpbmdcIikge1xuICAgICAgICAgICAgbW9kdWxlLmV4cG9ydHMgPSByZXN1bHQ7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICBtb2R1bGUuZXhwb3J0cyA9IHJlc3VsdC50b1N0cmluZygpO1xuICAgICAgICB9XG4gICAgXG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9zcmMvbWFpbi93ZWJhcHAvYXBwL2hvbWUvaG9tZS5zY3NzXG4vLyBtb2R1bGUgaWQgPSAuL3NyYy9tYWluL3dlYmFwcC9hcHAvaG9tZS9ob21lLnNjc3Ncbi8vIG1vZHVsZSBjaHVua3MgPSAwIiwiZXhwb3J0ICogZnJvbSAnLi9ob21lLmNvbXBvbmVudCc7XG5leHBvcnQgKiBmcm9tICcuL2hvbWUucm91dGUnO1xuZXhwb3J0ICogZnJvbSAnLi9ob21lLm1vZHVsZSc7XG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9+L3RzbGludC1sb2FkZXIhLi9zcmMvbWFpbi93ZWJhcHAvYXBwL2hvbWUvaW5kZXgudHMiLCJtb2R1bGUuZXhwb3J0cyA9IFwiPGRpdj4gPGRpdiBjbGFzcz1cXFwicm93XFxcIj4gPGRpdiBjbGFzcz1cXFwiY29sLW1kLTRcXFwiPiA8c3BhbiBjbGFzcz1cXFwiaGlwc3RlciBpbWctZmx1aWQgaW1nLXJvdW5kZWRcXFwiPjwvc3Bhbj4gPC9kaXY+IDxkaXYgY2xhc3M9XFxcImNvbC1tZC04XFxcIj4gPGgxIGpoaVRyYW5zbGF0ZT1cXFwiZXJyb3IudGl0bGVcXFwiPkVycm9yIFBhZ2UhPC9oMT4gPGRpdiBbaGlkZGVuXT1cXFwiIWVycm9yTWVzc2FnZVxcXCI+IDxkaXYgY2xhc3M9XFxcImFsZXJ0IGFsZXJ0LWRhbmdlclxcXCI+e3tlcnJvck1lc3NhZ2V9fSA8L2Rpdj4gPC9kaXY+IDxkaXYgW2hpZGRlbl09XFxcIiFlcnJvcjQwM1xcXCIgY2xhc3M9XFxcImFsZXJ0IGFsZXJ0LWRhbmdlclxcXCIgamhpVHJhbnNsYXRlPVxcXCJlcnJvci40MDNcXFwiPllvdSBhcmUgbm90IGF1dGhvcml6ZWQgdG8gYWNjZXNzIHRoZSBwYWdlLiA8L2Rpdj4gPC9kaXY+IDwvZGl2PiA8L2Rpdj4gXCI7XG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9zcmMvbWFpbi93ZWJhcHAvYXBwL2xheW91dHMvZXJyb3IvZXJyb3IuY29tcG9uZW50Lmh0bWxcbi8vIG1vZHVsZSBpZCA9IC4vc3JjL21haW4vd2ViYXBwL2FwcC9sYXlvdXRzL2Vycm9yL2Vycm9yLmNvbXBvbmVudC5odG1sXG4vLyBtb2R1bGUgY2h1bmtzID0gMCIsImltcG9ydCB7IENvbXBvbmVudCwgT25Jbml0IH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBBY3RpdmF0ZWRSb3V0ZSB9IGZyb20gJ0Bhbmd1bGFyL3JvdXRlcic7XG5cbkBDb21wb25lbnQoe1xuICAgIHNlbGVjdG9yOiAnamhpLWVycm9yJyxcbiAgICB0ZW1wbGF0ZVVybDogJy4vZXJyb3IuY29tcG9uZW50Lmh0bWwnXG59KVxuZXhwb3J0IGNsYXNzIEVycm9yQ29tcG9uZW50IGltcGxlbWVudHMgT25Jbml0IHtcbiAgICBlcnJvck1lc3NhZ2U6IHN0cmluZztcbiAgICBlcnJvcjQwMzogYm9vbGVhbjtcblxuICAgIGNvbnN0cnVjdG9yKFxuICAgICAgICBwcml2YXRlIHJvdXRlOiBBY3RpdmF0ZWRSb3V0ZVxuICAgICkge1xuICAgIH1cblxuICAgIG5nT25Jbml0KCkge1xuICAgICAgICB0aGlzLnJvdXRlLmRhdGEuc3Vic2NyaWJlKChyb3V0ZURhdGEpID0+IHtcbiAgICAgICAgICAgIGlmIChyb3V0ZURhdGEuZXJyb3I0MDMpIHtcbiAgICAgICAgICAgICAgICB0aGlzLmVycm9yNDAzID0gcm91dGVEYXRhLmVycm9yNDAzO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgaWYgKHJvdXRlRGF0YS5lcnJvck1lc3NhZ2UpIHtcbiAgICAgICAgICAgICAgICB0aGlzLmVycm9yTWVzc2FnZSA9IHJvdXRlRGF0YS5lcnJvck1lc3NhZ2U7XG4gICAgICAgICAgICB9XG4gICAgICAgIH0pO1xuICAgIH1cbn1cblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL34vdHNsaW50LWxvYWRlciEuL3NyYy9tYWluL3dlYmFwcC9hcHAvbGF5b3V0cy9lcnJvci9lcnJvci5jb21wb25lbnQudHMiLCJpbXBvcnQgeyBSb3V0ZXMgfSBmcm9tICdAYW5ndWxhci9yb3V0ZXInO1xuXG5pbXBvcnQgeyBVc2VyUm91dGVBY2Nlc3NTZXJ2aWNlIH0gZnJvbSAnLi4vLi4vc2hhcmVkJztcbmltcG9ydCB7IEVycm9yQ29tcG9uZW50IH0gZnJvbSAnLi9lcnJvci5jb21wb25lbnQnO1xuXG5leHBvcnQgY29uc3QgZXJyb3JSb3V0ZTogUm91dGVzID0gW1xuICAgIHtcbiAgICAgICAgcGF0aDogJ2Vycm9yJyxcbiAgICAgICAgY29tcG9uZW50OiBFcnJvckNvbXBvbmVudCxcbiAgICAgICAgZGF0YToge1xuICAgICAgICAgICAgYXV0aG9yaXRpZXM6IFtdLFxuICAgICAgICAgICAgcGFnZVRpdGxlOiAnZXJyb3IudGl0bGUnXG4gICAgICAgIH0sXG4gICAgfSxcbiAgICB7XG4gICAgICAgIHBhdGg6ICdhY2Nlc3NkZW5pZWQnLFxuICAgICAgICBjb21wb25lbnQ6IEVycm9yQ29tcG9uZW50LFxuICAgICAgICBkYXRhOiB7XG4gICAgICAgICAgICBhdXRob3JpdGllczogW10sXG4gICAgICAgICAgICBwYWdlVGl0bGU6ICdlcnJvci50aXRsZScsXG4gICAgICAgICAgICBlcnJvcjQwMzogdHJ1ZVxuICAgICAgICB9LFxuICAgIH1cbl07XG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9+L3RzbGludC1sb2FkZXIhLi9zcmMvbWFpbi93ZWJhcHAvYXBwL2xheW91dHMvZXJyb3IvZXJyb3Iucm91dGUudHMiLCJtb2R1bGUuZXhwb3J0cyA9IFwiPGRpdiBjbGFzcz1cXFwiZm9vdGVyXFxcIj4gPHAgamhpVHJhbnNsYXRlPVxcXCJmb290ZXJcXFwiPlRoaXMgaXMgeW91ciBmb290ZXI8L3A+IDwvZGl2PiBcIjtcblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL3NyYy9tYWluL3dlYmFwcC9hcHAvbGF5b3V0cy9mb290ZXIvZm9vdGVyLmNvbXBvbmVudC5odG1sXG4vLyBtb2R1bGUgaWQgPSAuL3NyYy9tYWluL3dlYmFwcC9hcHAvbGF5b3V0cy9mb290ZXIvZm9vdGVyLmNvbXBvbmVudC5odG1sXG4vLyBtb2R1bGUgY2h1bmtzID0gMCIsImltcG9ydCB7IENvbXBvbmVudCB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuXG5AQ29tcG9uZW50KHtcbiAgICBzZWxlY3RvcjogJ2poaS1mb290ZXInLFxuICAgIHRlbXBsYXRlVXJsOiAnLi9mb290ZXIuY29tcG9uZW50Lmh0bWwnXG59KVxuZXhwb3J0IGNsYXNzIEZvb3RlckNvbXBvbmVudCB7fVxuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vfi90c2xpbnQtbG9hZGVyIS4vc3JjL21haW4vd2ViYXBwL2FwcC9sYXlvdXRzL2Zvb3Rlci9mb290ZXIuY29tcG9uZW50LnRzIiwiZXhwb3J0ICogZnJvbSAnLi9lcnJvci9lcnJvci5jb21wb25lbnQnO1xuZXhwb3J0ICogZnJvbSAnLi9lcnJvci9lcnJvci5yb3V0ZSc7XG5leHBvcnQgKiBmcm9tICcuL21haW4vbWFpbi5jb21wb25lbnQnO1xuZXhwb3J0ICogZnJvbSAnLi9mb290ZXIvZm9vdGVyLmNvbXBvbmVudCc7XG5leHBvcnQgKiBmcm9tICcuL25hdmJhci9uYXZiYXIuY29tcG9uZW50JztcbmV4cG9ydCAqIGZyb20gJy4vbmF2YmFyL2FjdGl2ZS1tZW51LmRpcmVjdGl2ZSc7XG5leHBvcnQgKiBmcm9tICcuL3Byb2ZpbGVzL3BhZ2UtcmliYm9uLmNvbXBvbmVudCc7XG5leHBvcnQgKiBmcm9tICcuL3Byb2ZpbGVzL3Byb2ZpbGUuc2VydmljZSc7XG5leHBvcnQgKiBmcm9tICcuL3Byb2ZpbGVzL3Byb2ZpbGUtaW5mby5tb2RlbCc7XG5leHBvcnQgKiBmcm9tICcuL2xheW91dC1yb3V0aW5nLm1vZHVsZSc7XG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9+L3RzbGludC1sb2FkZXIhLi9zcmMvbWFpbi93ZWJhcHAvYXBwL2xheW91dHMvaW5kZXgudHMiLCJpbXBvcnQgeyBOZ01vZHVsZSB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgUm91dGVyTW9kdWxlIH0gZnJvbSAnQGFuZ3VsYXIvcm91dGVyJztcblxuaW1wb3J0IHsgbmF2YmFyUm91dGUgfSBmcm9tICcuLi9hcHAucm91dGUnO1xuaW1wb3J0IHsgZXJyb3JSb3V0ZSB9IGZyb20gJy4vJztcblxuY29uc3QgTEFZT1VUX1JPVVRFUyA9IFtcbiAgICBuYXZiYXJSb3V0ZSxcbiAgICAuLi5lcnJvclJvdXRlXG5dO1xuXG5ATmdNb2R1bGUoe1xuICAgIGltcG9ydHM6IFtcbiAgICAgICAgUm91dGVyTW9kdWxlLmZvclJvb3QoTEFZT1VUX1JPVVRFUywgeyB1c2VIYXNoOiB0cnVlIH0pXG4gICAgXSxcbiAgICBleHBvcnRzOiBbXG4gICAgICAgIFJvdXRlck1vZHVsZVxuICAgIF1cbn0pXG5leHBvcnQgY2xhc3MgTGF5b3V0Um91dGluZ01vZHVsZSB7fVxuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vfi90c2xpbnQtbG9hZGVyIS4vc3JjL21haW4vd2ViYXBwL2FwcC9sYXlvdXRzL2xheW91dC1yb3V0aW5nLm1vZHVsZS50cyIsIm1vZHVsZS5leHBvcnRzID0gXCI8amhpLXBhZ2UtcmliYm9uPjwvamhpLXBhZ2UtcmliYm9uPiA8ZGl2PiA8cm91dGVyLW91dGxldCBuYW1lPVxcXCJuYXZiYXJcXFwiPjwvcm91dGVyLW91dGxldD4gPC9kaXY+IDxkaXYgY2xhc3M9XFxcImNvbnRhaW5lci1mbHVpZFxcXCI+IDxkaXYgY2xhc3M9XFxcImNhcmQgamgtY2FyZFxcXCI+IDxyb3V0ZXItb3V0bGV0Pjwvcm91dGVyLW91dGxldD4gPHJvdXRlci1vdXRsZXQgbmFtZT1cXFwicG9wdXBcXFwiPjwvcm91dGVyLW91dGxldD4gPC9kaXY+IDxqaGktZm9vdGVyPjwvamhpLWZvb3Rlcj4gPC9kaXY+IFwiO1xuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vc3JjL21haW4vd2ViYXBwL2FwcC9sYXlvdXRzL21haW4vbWFpbi5jb21wb25lbnQuaHRtbFxuLy8gbW9kdWxlIGlkID0gLi9zcmMvbWFpbi93ZWJhcHAvYXBwL2xheW91dHMvbWFpbi9tYWluLmNvbXBvbmVudC5odG1sXG4vLyBtb2R1bGUgY2h1bmtzID0gMCIsImltcG9ydCB7IENvbXBvbmVudCwgT25Jbml0IH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBSb3V0ZXIsIEFjdGl2YXRlZFJvdXRlU25hcHNob3QsIE5hdmlnYXRpb25FbmQsIFJvdXRlc1JlY29nbml6ZWQgfSBmcm9tICdAYW5ndWxhci9yb3V0ZXInO1xuXG5pbXBvcnQgeyBKaGlMYW5ndWFnZVNlcnZpY2UgfSBmcm9tICduZy1qaGlwc3Rlcic7XG5pbXBvcnQgeyBKaGlMYW5ndWFnZUhlbHBlciwgU3RhdGVTdG9yYWdlU2VydmljZSB9IGZyb20gJy4uLy4uL3NoYXJlZCc7XG5cbkBDb21wb25lbnQoe1xuICAgIHNlbGVjdG9yOiAnamhpLW1haW4nLFxuICAgIHRlbXBsYXRlVXJsOiAnLi9tYWluLmNvbXBvbmVudC5odG1sJ1xufSlcbmV4cG9ydCBjbGFzcyBKaGlNYWluQ29tcG9uZW50IGltcGxlbWVudHMgT25Jbml0IHtcblxuICAgIGNvbnN0cnVjdG9yKFxuICAgICAgICBwcml2YXRlIGpoaUxhbmd1YWdlSGVscGVyOiBKaGlMYW5ndWFnZUhlbHBlcixcbiAgICAgICAgcHJpdmF0ZSBqaGlMYW5ndWFnZVNlcnZpY2U6IEpoaUxhbmd1YWdlU2VydmljZSxcbiAgICAgICAgcHJpdmF0ZSByb3V0ZXI6IFJvdXRlcixcbiAgICAgICAgcHJpdmF0ZSAkc3RvcmFnZVNlcnZpY2U6IFN0YXRlU3RvcmFnZVNlcnZpY2UsXG4gICAgKSB7XG4gICAgICAgIC8vIEp1c3QgZm9yIGZvcmNpbmcgdHJhbnNsYXRpb24gbG9hZGluZ1xuICAgICAgICBqaGlMYW5ndWFnZVNlcnZpY2Uuc2V0TG9jYXRpb25zKFsnYWxsJ10pO1xuICAgIH1cblxuICAgIHByaXZhdGUgZ2V0UGFnZVRpdGxlKHJvdXRlU25hcHNob3Q6IEFjdGl2YXRlZFJvdXRlU25hcHNob3QpIHtcbiAgICAgICAgbGV0IHRpdGxlOiBzdHJpbmcgPSAocm91dGVTbmFwc2hvdC5kYXRhICYmIHJvdXRlU25hcHNob3QuZGF0YVsncGFnZVRpdGxlJ10pID8gcm91dGVTbmFwc2hvdC5kYXRhWydwYWdlVGl0bGUnXSA6ICdwYWNrZXRBcHAnO1xuICAgICAgICBpZiAocm91dGVTbmFwc2hvdC5maXJzdENoaWxkKSB7XG4gICAgICAgICAgICB0aXRsZSA9IHRoaXMuZ2V0UGFnZVRpdGxlKHJvdXRlU25hcHNob3QuZmlyc3RDaGlsZCkgfHwgdGl0bGU7XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIHRpdGxlO1xuICAgIH1cblxuICAgIG5nT25Jbml0KCkge1xuICAgICAgICB0aGlzLnJvdXRlci5ldmVudHMuc3Vic2NyaWJlKChldmVudCkgPT4ge1xuICAgICAgICAgICAgaWYgKGV2ZW50IGluc3RhbmNlb2YgTmF2aWdhdGlvbkVuZCkge1xuICAgICAgICAgICAgICAgIHRoaXMuamhpTGFuZ3VhZ2VIZWxwZXIudXBkYXRlVGl0bGUodGhpcy5nZXRQYWdlVGl0bGUodGhpcy5yb3V0ZXIucm91dGVyU3RhdGUuc25hcHNob3Qucm9vdCkpO1xuICAgICAgICAgICAgfVxuICAgICAgICB9KTtcbiAgICB9XG59XG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9+L3RzbGludC1sb2FkZXIhLi9zcmMvbWFpbi93ZWJhcHAvYXBwL2xheW91dHMvbWFpbi9tYWluLmNvbXBvbmVudC50cyIsImltcG9ydCB7IERpcmVjdGl2ZSwgT25Jbml0LCBFbGVtZW50UmVmLCBSZW5kZXJlciwgSW5wdXR9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgVHJhbnNsYXRlU2VydmljZSwgTGFuZ0NoYW5nZUV2ZW50IH0gZnJvbSAnbmcyLXRyYW5zbGF0ZSc7XG5cbkBEaXJlY3RpdmUoe1xuICAgIHNlbGVjdG9yOiAnW2poaUFjdGl2ZU1lbnVdJ1xufSlcbmV4cG9ydCBjbGFzcyBBY3RpdmVNZW51RGlyZWN0aXZlIGltcGxlbWVudHMgT25Jbml0IHtcbiAgICBASW5wdXQoKSBqaGlBY3RpdmVNZW51OiBzdHJpbmc7XG5cbiAgICBjb25zdHJ1Y3Rvcihwcml2YXRlIGVsOiBFbGVtZW50UmVmLCBwcml2YXRlIHJlbmRlcmVyOiBSZW5kZXJlciwgcHJpdmF0ZSB0cmFuc2xhdGVTZXJ2aWNlOiBUcmFuc2xhdGVTZXJ2aWNlKSB7fVxuXG4gICAgbmdPbkluaXQoKSB7XG4gICAgICB0aGlzLnRyYW5zbGF0ZVNlcnZpY2Uub25MYW5nQ2hhbmdlLnN1YnNjcmliZSgoZXZlbnQ6IExhbmdDaGFuZ2VFdmVudCkgPT4ge1xuICAgICAgICAgdGhpcy51cGRhdGVBY3RpdmVGbGFnKGV2ZW50LmxhbmcpO1xuICAgICAgfSk7XG4gICAgICB0aGlzLnVwZGF0ZUFjdGl2ZUZsYWcodGhpcy50cmFuc2xhdGVTZXJ2aWNlLmN1cnJlbnRMYW5nKTtcbiAgICB9XG5cbiAgICB1cGRhdGVBY3RpdmVGbGFnKHNlbGVjdGVkTGFuZ3VhZ2UpIHtcbiAgICAgIGlmICh0aGlzLmpoaUFjdGl2ZU1lbnUgPT09IHNlbGVjdGVkTGFuZ3VhZ2UpIHtcbiAgICAgICAgICB0aGlzLnJlbmRlcmVyLnNldEVsZW1lbnRDbGFzcyh0aGlzLmVsLm5hdGl2ZUVsZW1lbnQsICdhY3RpdmUnLCB0cnVlKTtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgdGhpcy5yZW5kZXJlci5zZXRFbGVtZW50Q2xhc3ModGhpcy5lbC5uYXRpdmVFbGVtZW50LCAnYWN0aXZlJywgZmFsc2UpO1xuICAgICAgfVxuICAgIH1cbn1cblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL34vdHNsaW50LWxvYWRlciEuL3NyYy9tYWluL3dlYmFwcC9hcHAvbGF5b3V0cy9uYXZiYXIvYWN0aXZlLW1lbnUuZGlyZWN0aXZlLnRzIiwibW9kdWxlLmV4cG9ydHMgPSBcIjxuYXYgY2xhc3M9XFxcIm5hdmJhciBuYXZiYXItaW52ZXJzZSBuYXZiYXItdG9nZ2xlYWJsZS1tZCBqaC1uYXZiYXJcXFwiPiA8ZGl2IGNsYXNzPVxcXCJqaC1sb2dvLWNvbnRhaW5lciBmbG9hdC1sZWZ0XFxcIj4gPGEgY2xhc3M9XFxcImpoLW5hdmJhci10b2dnbGVyIGhpZGRlbi1sZy11cCBmbG9hdC1yaWdodFxcXCIgaHJlZj1cXFwiamF2YXNjcmlwdDp2b2lkKDApO1xcXCIgZGF0YS10b2dnbGU9XFxcImNvbGxhcHNlXFxcIiBkYXRhLXRhcmdldD1cXFwiI25hdmJhclJlc3BvbnNpdmVcXFwiIGFyaWEtY29udHJvbHM9XFxcIm5hdmJhclJlc3BvbnNpdmVcXFwiIGFyaWEtZXhwYW5kZWQ9XFxcImZhbHNlXFxcIiBhcmlhLWxhYmVsPVxcXCJUb2dnbGUgbmF2aWdhdGlvblxcXCIgKGNsaWNrKT1cXFwidG9nZ2xlTmF2YmFyKClcXFwiPiA8aSBjbGFzcz1cXFwiZmEgZmEtYmFyc1xcXCI+PC9pPiA8L2E+IDxhIGNsYXNzPVxcXCJuYXZiYXItYnJhbmQgbG9nbyBmbG9hdC1sZWZ0XFxcIiByb3V0ZXJMaW5rPVxcXCIvXFxcIiAoY2xpY2spPVxcXCJjb2xsYXBzZU5hdmJhcigpXFxcIj4gPHNwYW4gY2xhc3M9XFxcImxvZ28taW1nXFxcIj48L3NwYW4+IDxzcGFuIGpoaVRyYW5zbGF0ZT1cXFwiZ2xvYmFsLnRpdGxlXFxcIiBjbGFzcz1cXFwibmF2YmFyLXRpdGxlXFxcIj5QYWNrZXRBcHA8L3NwYW4+IDxzcGFuIGNsYXNzPVxcXCJuYXZiYXItdmVyc2lvblxcXCI+e3t2ZXJzaW9ufX08L3NwYW4+IDwvYT4gPC9kaXY+IDxkaXYgY2xhc3M9XFxcIm5hdmJhci1jb2xsYXBzZSBjb2xsYXBzZVxcXCIgaWQ9XFxcIm5hdmJhclJlc3BvbnNpdmVcXFwiIFtuZ2JDb2xsYXBzZV09XFxcImlzTmF2YmFyQ29sbGFwc2VkXFxcIiBbbmdTd2l0Y2hdPVxcXCJpc0F1dGhlbnRpY2F0ZWQoKVxcXCI+IDx1bCBjbGFzcz1cXFwibmF2YmFyLW5hdiBtbC1hdXRvXFxcIj4gPGxpIGNsYXNzPVxcXCJuYXYtaXRlbVxcXCIgcm91dGVyTGlua0FjdGl2ZT1cXFwiYWN0aXZlXFxcIiBbcm91dGVyTGlua0FjdGl2ZU9wdGlvbnNdPVxcXCJ7ZXhhY3Q6IHRydWV9XFxcIj4gPGEgY2xhc3M9XFxcIm5hdi1saW5rXFxcIiByb3V0ZXJMaW5rPVxcXCIvXFxcIiAoY2xpY2spPVxcXCJjb2xsYXBzZU5hdmJhcigpXFxcIj4gPGkgY2xhc3M9XFxcImZhIGZhLWhvbWVcXFwiIGFyaWEtaGlkZGVuPVxcXCJ0cnVlXFxcIj48L2k+IDxzcGFuIGpoaVRyYW5zbGF0ZT1cXFwiZ2xvYmFsLm1lbnUuaG9tZVxcXCI+SG9tZTwvc3Bhbj4gPC9hPiA8L2xpPiA8bGkgKm5nU3dpdGNoQ2FzZT1cXFwidHJ1ZVxcXCIgbmdiRHJvcGRvd24gY2xhc3M9XFxcIm5hdi1pdGVtIGRyb3Bkb3duIHBvaW50ZXJcXFwiIHJvdXRlckxpbmtBY3RpdmU9XFxcImFjdGl2ZVxcXCIgW3JvdXRlckxpbmtBY3RpdmVPcHRpb25zXT1cXFwie2V4YWN0OiB0cnVlfVxcXCI+IDxhIGNsYXNzPVxcXCJuYXYtbGluayBkcm9wZG93bi10b2dnbGVcXFwiIG5nYkRyb3Bkb3duVG9nZ2xlIGhyZWY9XFxcImphdmFzY3JpcHQ6dm9pZCgwKTtcXFwiIGlkPVxcXCJlbnRpdHktbWVudVxcXCI+IDxzcGFuPiA8aSBjbGFzcz1cXFwiZmEgZmEtdGgtbGlzdFxcXCIgYXJpYS1oaWRkZW49XFxcInRydWVcXFwiPjwvaT4gPHNwYW4gamhpVHJhbnNsYXRlPVxcXCJnbG9iYWwubWVudS5lbnRpdGllcy5tYWluXFxcIj4gRW50aXRpZXMgPC9zcGFuPiA8YiBjbGFzcz1cXFwiY2FyZXRcXFwiPjwvYj4gPC9zcGFuPiA8L2E+IDx1bCBjbGFzcz1cXFwiZHJvcGRvd24tbWVudVxcXCIgbmdiRHJvcGRvd25NZW51PiA8L3VsPiA8L2xpPiA8bGkgKmpoaUhhc0FueUF1dGhvcml0eT1cXFwiJ1JPTEVfQURNSU4nXFxcIiBuZ2JEcm9wZG93biBjbGFzcz1cXFwibmF2LWl0ZW0gZHJvcGRvd24gcG9pbnRlclxcXCIgcm91dGVyTGlua0FjdGl2ZT1cXFwiYWN0aXZlXFxcIiBbcm91dGVyTGlua0FjdGl2ZU9wdGlvbnNdPVxcXCJ7ZXhhY3Q6IHRydWV9XFxcIj4gPGEgY2xhc3M9XFxcIm5hdi1saW5rIGRyb3Bkb3duLXRvZ2dsZVxcXCIgbmdiRHJvcGRvd25Ub2dnbGUgaHJlZj1cXFwiamF2YXNjcmlwdDp2b2lkKDApO1xcXCIgaWQ9XFxcImFkbWluLW1lbnVcXFwiPiA8c3Bhbj4gPGkgY2xhc3M9XFxcImZhIGZhLXVzZXItcGx1c1xcXCIgYXJpYS1oaWRkZW49XFxcInRydWVcXFwiPjwvaT4gPHNwYW4gamhpVHJhbnNsYXRlPVxcXCJnbG9iYWwubWVudS5hZG1pbi5tYWluXFxcIj5BZG1pbmlzdHJhdGlvbjwvc3Bhbj4gPGIgY2xhc3M9XFxcImNhcmV0XFxcIj48L2I+IDwvc3Bhbj4gPC9hPiA8dWwgY2xhc3M9XFxcImRyb3Bkb3duLW1lbnVcXFwiIG5nYkRyb3Bkb3duTWVudT4gPGxpPiA8YSBjbGFzcz1cXFwiZHJvcGRvd24taXRlbVxcXCIgcm91dGVyTGluaz1cXFwidXNlci1tYW5hZ2VtZW50XFxcIiByb3V0ZXJMaW5rQWN0aXZlPVxcXCJhY3RpdmVcXFwiIChjbGljayk9XFxcImNvbGxhcHNlTmF2YmFyKClcXFwiPiA8aSBjbGFzcz1cXFwiZmEgZmEtZncgZmEtdXNlclxcXCIgYXJpYS1oaWRkZW49XFxcInRydWVcXFwiPjwvaT4gPHNwYW4gamhpVHJhbnNsYXRlPVxcXCJnbG9iYWwubWVudS5hZG1pbi51c2VyTWFuYWdlbWVudFxcXCI+VXNlciBtYW5hZ2VtZW50PC9zcGFuPiA8L2E+IDwvbGk+IDxsaT4gPGEgY2xhc3M9XFxcImRyb3Bkb3duLWl0ZW1cXFwiIHJvdXRlckxpbms9XFxcImpoaS10cmFja2VyXFxcIiByb3V0ZXJMaW5rQWN0aXZlPVxcXCJhY3RpdmVcXFwiIChjbGljayk9XFxcImNvbGxhcHNlTmF2YmFyKClcXFwiPiA8aSBjbGFzcz1cXFwiZmEgZmEtZncgZmEtZXllXFxcIiBhcmlhLWhpZGRlbj1cXFwidHJ1ZVxcXCI+PC9pPiA8c3BhbiBqaGlUcmFuc2xhdGU9XFxcImdsb2JhbC5tZW51LmFkbWluLnRyYWNrZXJcXFwiPlVzZXIgdHJhY2tlcjwvc3Bhbj4gPC9hPiA8L2xpPiA8bGk+IDxhIGNsYXNzPVxcXCJkcm9wZG93bi1pdGVtXFxcIiByb3V0ZXJMaW5rPVxcXCJqaGktbWV0cmljc1xcXCIgcm91dGVyTGlua0FjdGl2ZT1cXFwiYWN0aXZlXFxcIiAoY2xpY2spPVxcXCJjb2xsYXBzZU5hdmJhcigpXFxcIj4gPGkgY2xhc3M9XFxcImZhIGZhLWZ3IGZhLXRhY2hvbWV0ZXJcXFwiIGFyaWEtaGlkZGVuPVxcXCJ0cnVlXFxcIj48L2k+IDxzcGFuIGpoaVRyYW5zbGF0ZT1cXFwiZ2xvYmFsLm1lbnUuYWRtaW4ubWV0cmljc1xcXCI+TWV0cmljczwvc3Bhbj4gPC9hPiA8L2xpPiA8bGk+IDxhIGNsYXNzPVxcXCJkcm9wZG93bi1pdGVtXFxcIiByb3V0ZXJMaW5rPVxcXCJqaGktaGVhbHRoXFxcIiByb3V0ZXJMaW5rQWN0aXZlPVxcXCJhY3RpdmVcXFwiIChjbGljayk9XFxcImNvbGxhcHNlTmF2YmFyKClcXFwiPiA8aSBjbGFzcz1cXFwiZmEgZmEtZncgZmEtaGVhcnRcXFwiIGFyaWEtaGlkZGVuPVxcXCJ0cnVlXFxcIj48L2k+IDxzcGFuIGpoaVRyYW5zbGF0ZT1cXFwiZ2xvYmFsLm1lbnUuYWRtaW4uaGVhbHRoXFxcIj5IZWFsdGg8L3NwYW4+IDwvYT4gPC9saT4gPGxpPiA8YSBjbGFzcz1cXFwiZHJvcGRvd24taXRlbVxcXCIgcm91dGVyTGluaz1cXFwiamhpLWNvbmZpZ3VyYXRpb25cXFwiIHJvdXRlckxpbmtBY3RpdmU9XFxcImFjdGl2ZVxcXCIgKGNsaWNrKT1cXFwiY29sbGFwc2VOYXZiYXIoKVxcXCI+IDxpIGNsYXNzPVxcXCJmYSBmYS1mdyBmYS1saXN0XFxcIiBhcmlhLWhpZGRlbj1cXFwidHJ1ZVxcXCI+PC9pPiA8c3BhbiBqaGlUcmFuc2xhdGU9XFxcImdsb2JhbC5tZW51LmFkbWluLmNvbmZpZ3VyYXRpb25cXFwiPkNvbmZpZ3VyYXRpb248L3NwYW4+IDwvYT4gPC9saT4gPGxpPiA8YSBjbGFzcz1cXFwiZHJvcGRvd24taXRlbVxcXCIgcm91dGVyTGluaz1cXFwiYXVkaXRzXFxcIiByb3V0ZXJMaW5rQWN0aXZlPVxcXCJhY3RpdmVcXFwiIChjbGljayk9XFxcImNvbGxhcHNlTmF2YmFyKClcXFwiPiA8aSBjbGFzcz1cXFwiZmEgZmEtZncgZmEtYmVsbFxcXCIgYXJpYS1oaWRkZW49XFxcInRydWVcXFwiPjwvaT4gPHNwYW4gamhpVHJhbnNsYXRlPVxcXCJnbG9iYWwubWVudS5hZG1pbi5hdWRpdHNcXFwiPkF1ZGl0czwvc3Bhbj4gPC9hPiA8L2xpPiA8bGk+IDxhIGNsYXNzPVxcXCJkcm9wZG93bi1pdGVtXFxcIiByb3V0ZXJMaW5rPVxcXCJsb2dzXFxcIiByb3V0ZXJMaW5rQWN0aXZlPVxcXCJhY3RpdmVcXFwiIChjbGljayk9XFxcImNvbGxhcHNlTmF2YmFyKClcXFwiPiA8aSBjbGFzcz1cXFwiZmEgZmEtZncgZmEtdGFza3NcXFwiIGFyaWEtaGlkZGVuPVxcXCJ0cnVlXFxcIj48L2k+IDxzcGFuIGpoaVRyYW5zbGF0ZT1cXFwiZ2xvYmFsLm1lbnUuYWRtaW4ubG9nc1xcXCI+TG9nczwvc3Bhbj4gPC9hPiA8L2xpPiA8bGkgKm5nSWY9XFxcInN3YWdnZXJFbmFibGVkXFxcIj4gPGEgY2xhc3M9XFxcImRyb3Bkb3duLWl0ZW1cXFwiIHJvdXRlckxpbms9XFxcImRvY3NcXFwiIHJvdXRlckxpbmtBY3RpdmU9XFxcImFjdGl2ZVxcXCIgKGNsaWNrKT1cXFwiY29sbGFwc2VOYXZiYXIoKVxcXCI+IDxpIGNsYXNzPVxcXCJmYSBmYS1mdyBmYS1ib29rXFxcIiBhcmlhLWhpZGRlbj1cXFwidHJ1ZVxcXCI+PC9pPiA8c3BhbiBqaGlUcmFuc2xhdGU9XFxcImdsb2JhbC5tZW51LmFkbWluLmFwaWRvY3NcXFwiPkFQSTwvc3Bhbj4gPC9hPiA8L2xpPiA8bGkgKm5nSWY9XFxcIiFpblByb2R1Y3Rpb25cXFwiPiA8YSBjbGFzcz1cXFwiZHJvcGRvd24taXRlbVxcXCIgaHJlZj1cXFwiL2gyLWNvbnNvbGVcXFwiIHRhcmdldD1cXFwiX3RhYlxcXCIgKGNsaWNrKT1cXFwiY29sbGFwc2VOYXZiYXIoKVxcXCI+IDxpIGNsYXNzPVxcXCJmYSBmYS1mdyBmYS1oZGQtb1xcXCIgYXJpYS1oaWRkZW49XFxcInRydWVcXFwiPjwvaT4gPHNwYW4gamhpVHJhbnNsYXRlPVxcXCJnbG9iYWwubWVudS5hZG1pbi5kYXRhYmFzZVxcXCI+RGF0YWJhc2U8L3NwYW4+IDwvYT4gPC9saT4gPC91bD4gPC9saT4gPGxpIG5nYkRyb3Bkb3duIGNsYXNzPVxcXCJuYXYtaXRlbSBkcm9wZG93biBwb2ludGVyXFxcIiAqbmdJZj1cXFwibGFuZ3VhZ2VzXFxcIj4gPGEgY2xhc3M9XFxcIm5hdi1saW5rIGRyb3Bkb3duLXRvZ2dsZVxcXCIgbmdiRHJvcGRvd25Ub2dnbGUgaHJlZj1cXFwiamF2YXNjcmlwdDp2b2lkKDApO1xcXCIgaWQ9XFxcImxhbmd1YWdlc25hdkJhckRyb3Bkb3duXFxcIiAqbmdJZj1cXFwibGFuZ3VhZ2VzLmxlbmd0aCA+IDFcXFwiPiA8c3Bhbj4gPGkgY2xhc3M9XFxcImZhIGZhLWZsYWdcXFwiIGFyaWEtaGlkZGVuPVxcXCJ0cnVlXFxcIj48L2k+IDxzcGFuIGpoaVRyYW5zbGF0ZT1cXFwiZ2xvYmFsLm1lbnUubGFuZ3VhZ2VcXFwiPkxhbmd1YWdlPC9zcGFuPiA8YiBjbGFzcz1cXFwiY2FyZXRcXFwiPjwvYj4gPC9zcGFuPiA8L2E+IDx1bCBjbGFzcz1cXFwiZHJvcGRvd24tbWVudVxcXCIgbmdiRHJvcGRvd25NZW51ICpuZ0lmPVxcXCJsYW5ndWFnZXMubGVuZ3RoID4gMVxcXCI+IDxsaSAqbmdGb3I9XFxcImxldCBsYW5ndWFnZSBvZiBsYW5ndWFnZXNcXFwiPiA8YSBjbGFzcz1cXFwiZHJvcGRvd24taXRlbVxcXCIgW2poaUFjdGl2ZU1lbnVdPVxcXCJsYW5ndWFnZVxcXCIgaHJlZj1cXFwiamF2YXNjcmlwdDp2b2lkKDApO1xcXCIgKGNsaWNrKT1cXFwiY2hhbmdlTGFuZ3VhZ2UobGFuZ3VhZ2UpO2NvbGxhcHNlTmF2YmFyKCk7XFxcIj57e2xhbmd1YWdlIHwgZmluZExhbmd1YWdlRnJvbUtleX19PC9hPiA8L2xpPiA8L3VsPiA8L2xpPiA8bGkgbmdiRHJvcGRvd24gY2xhc3M9XFxcIm5hdi1pdGVtIGRyb3Bkb3duIHBvaW50ZXJcXFwiIHJvdXRlckxpbmtBY3RpdmU9XFxcImFjdGl2ZVxcXCIgW3JvdXRlckxpbmtBY3RpdmVPcHRpb25zXT1cXFwie2V4YWN0OiB0cnVlfVxcXCI+IDxhIGNsYXNzPVxcXCJuYXYtbGluayBkcm9wZG93bi10b2dnbGVcXFwiIG5nYkRyb3Bkb3duVG9nZ2xlIGhyZWY9XFxcImphdmFzY3JpcHQ6dm9pZCgwKTtcXFwiIGlkPVxcXCJhY2NvdW50LW1lbnVcXFwiPiA8c3BhbiAqbmdJZj1cXFwiIWdldEltYWdlVXJsKClcXFwiPiA8aSBjbGFzcz1cXFwiZmEgZmEtdXNlclxcXCIgYXJpYS1oaWRkZW49XFxcInRydWVcXFwiPjwvaT4gPHNwYW4gamhpVHJhbnNsYXRlPVxcXCJnbG9iYWwubWVudS5hY2NvdW50Lm1haW5cXFwiPiBBY2NvdW50IDwvc3Bhbj4gPGIgY2xhc3M9XFxcImNhcmV0XFxcIj48L2I+IDwvc3Bhbj4gPHNwYW4gKm5nSWY9XFxcImdldEltYWdlVXJsKClcXFwiPiA8aW1nIFtzcmNdPVxcXCJnZXRJbWFnZVVybCgpXFxcIiBjbGFzcz1cXFwicHJvZmlsZS1pbWFnZSBpbWctY2lyY2xlXFxcIiBhbHQ9XFxcIkF2YXRhclxcXCI+IDwvc3Bhbj4gPC9hPiA8dWwgY2xhc3M9XFxcImRyb3Bkb3duLW1lbnUgZHJvcGRvd24tbWVudS1yaWdodFxcXCIgbmdiRHJvcGRvd25NZW51PiA8bGkgKm5nU3dpdGNoQ2FzZT1cXFwidHJ1ZVxcXCI+IDxhIGNsYXNzPVxcXCJkcm9wZG93bi1pdGVtXFxcIiByb3V0ZXJMaW5rPVxcXCJzZXR0aW5nc1xcXCIgcm91dGVyTGlua0FjdGl2ZT1cXFwiYWN0aXZlXFxcIiAoY2xpY2spPVxcXCJjb2xsYXBzZU5hdmJhcigpXFxcIj4gPGkgY2xhc3M9XFxcImZhIGZhLWZ3IGZhLXdyZW5jaFxcXCIgYXJpYS1oaWRkZW49XFxcInRydWVcXFwiPjwvaT4gPHNwYW4gamhpVHJhbnNsYXRlPVxcXCJnbG9iYWwubWVudS5hY2NvdW50LnNldHRpbmdzXFxcIj5TZXR0aW5nczwvc3Bhbj4gPC9hPiA8L2xpPiA8bGkgKm5nU3dpdGNoQ2FzZT1cXFwidHJ1ZVxcXCI+IDxhIGNsYXNzPVxcXCJkcm9wZG93bi1pdGVtXFxcIiByb3V0ZXJMaW5rPVxcXCJwYXNzd29yZFxcXCIgcm91dGVyTGlua0FjdGl2ZT1cXFwiYWN0aXZlXFxcIiAoY2xpY2spPVxcXCJjb2xsYXBzZU5hdmJhcigpXFxcIj4gPGkgY2xhc3M9XFxcImZhIGZhLWZ3IGZhLWNsb2NrLW9cXFwiIGFyaWEtaGlkZGVuPVxcXCJ0cnVlXFxcIj48L2k+IDxzcGFuIGpoaVRyYW5zbGF0ZT1cXFwiZ2xvYmFsLm1lbnUuYWNjb3VudC5wYXNzd29yZFxcXCI+UGFzc3dvcmQ8L3NwYW4+IDwvYT4gPC9saT4gPGxpICpuZ1N3aXRjaENhc2U9XFxcInRydWVcXFwiPiA8YSBjbGFzcz1cXFwiZHJvcGRvd24taXRlbVxcXCIgKGNsaWNrKT1cXFwibG9nb3V0KClcXFwiIGlkPVxcXCJsb2dvdXRcXFwiPiA8aSBjbGFzcz1cXFwiZmEgZmEtZncgZmEtc2lnbi1vdXRcXFwiIGFyaWEtaGlkZGVuPVxcXCJ0cnVlXFxcIj48L2k+IDxzcGFuIGpoaVRyYW5zbGF0ZT1cXFwiZ2xvYmFsLm1lbnUuYWNjb3VudC5sb2dvdXRcXFwiPlNpZ24gb3V0PC9zcGFuPiA8L2E+IDwvbGk+IDxsaSAqbmdTd2l0Y2hDYXNlPVxcXCJmYWxzZVxcXCI+IDxhIGNsYXNzPVxcXCJkcm9wZG93bi1pdGVtXFxcIiAoY2xpY2spPVxcXCJsb2dpbigpXFxcIiBpZD1cXFwibG9naW5cXFwiPiA8aSBjbGFzcz1cXFwiZmEgZmEtZncgZmEtc2lnbi1pblxcXCIgYXJpYS1oaWRkZW49XFxcInRydWVcXFwiPjwvaT4gPHNwYW4gamhpVHJhbnNsYXRlPVxcXCJnbG9iYWwubWVudS5hY2NvdW50LmxvZ2luXFxcIj5TaWduIGluPC9zcGFuPiA8L2E+IDwvbGk+IDxsaSAqbmdTd2l0Y2hDYXNlPVxcXCJmYWxzZVxcXCI+IDxhIGNsYXNzPVxcXCJkcm9wZG93bi1pdGVtXFxcIiByb3V0ZXJMaW5rPVxcXCJyZWdpc3RlclxcXCIgcm91dGVyTGlua0FjdGl2ZT1cXFwiYWN0aXZlXFxcIiAoY2xpY2spPVxcXCJjb2xsYXBzZU5hdmJhcigpXFxcIj4gPGkgY2xhc3M9XFxcImZhIGZhLWZ3IGZhLXJlZ2lzdGVyZWRcXFwiIGFyaWEtaGlkZGVuPVxcXCJ0cnVlXFxcIj48L2k+IDxzcGFuIGpoaVRyYW5zbGF0ZT1cXFwiZ2xvYmFsLm1lbnUuYWNjb3VudC5yZWdpc3RlclxcXCI+UmVnaXN0ZXI8L3NwYW4+IDwvYT4gPC9saT4gPC91bD4gPC9saT4gPC91bD4gPC9kaXY+IDwvbmF2PiBcIjtcblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL3NyYy9tYWluL3dlYmFwcC9hcHAvbGF5b3V0cy9uYXZiYXIvbmF2YmFyLmNvbXBvbmVudC5odG1sXG4vLyBtb2R1bGUgaWQgPSAuL3NyYy9tYWluL3dlYmFwcC9hcHAvbGF5b3V0cy9uYXZiYXIvbmF2YmFyLmNvbXBvbmVudC5odG1sXG4vLyBtb2R1bGUgY2h1bmtzID0gMCIsImltcG9ydCB7IENvbXBvbmVudCwgT25Jbml0IH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBSb3V0ZXIgfSBmcm9tICdAYW5ndWxhci9yb3V0ZXInO1xuaW1wb3J0IHsgTmdiTW9kYWxSZWYgfSBmcm9tICdAbmctYm9vdHN0cmFwL25nLWJvb3RzdHJhcCc7XG5pbXBvcnQgeyBKaGlMYW5ndWFnZVNlcnZpY2UgfSBmcm9tICduZy1qaGlwc3Rlcic7XG5cbmltcG9ydCB7IFByb2ZpbGVTZXJ2aWNlIH0gZnJvbSAnLi4vcHJvZmlsZXMvcHJvZmlsZS5zZXJ2aWNlJztcbmltcG9ydCB7IEpoaUxhbmd1YWdlSGVscGVyLCBQcmluY2lwYWwsIExvZ2luTW9kYWxTZXJ2aWNlLCBMb2dpblNlcnZpY2UgfSBmcm9tICcuLi8uLi9zaGFyZWQnO1xuXG5pbXBvcnQgeyBWRVJTSU9OLCBERUJVR19JTkZPX0VOQUJMRUQgfSBmcm9tICcuLi8uLi9hcHAuY29uc3RhbnRzJztcblxuQENvbXBvbmVudCh7XG4gICAgc2VsZWN0b3I6ICdqaGktbmF2YmFyJyxcbiAgICB0ZW1wbGF0ZVVybDogJy4vbmF2YmFyLmNvbXBvbmVudC5odG1sJyxcbiAgICBzdHlsZVVybHM6IFtcbiAgICAgICAgJ25hdmJhci5zY3NzJ1xuICAgIF1cbn0pXG5leHBvcnQgY2xhc3MgTmF2YmFyQ29tcG9uZW50IGltcGxlbWVudHMgT25Jbml0IHtcblxuICAgIGluUHJvZHVjdGlvbjogYm9vbGVhbjtcbiAgICBpc05hdmJhckNvbGxhcHNlZDogYm9vbGVhbjtcbiAgICBsYW5ndWFnZXM6IGFueVtdO1xuICAgIHN3YWdnZXJFbmFibGVkOiBib29sZWFuO1xuICAgIG1vZGFsUmVmOiBOZ2JNb2RhbFJlZjtcbiAgICB2ZXJzaW9uOiBzdHJpbmc7XG5cbiAgICBjb25zdHJ1Y3RvcihcbiAgICAgICAgcHJpdmF0ZSBsb2dpblNlcnZpY2U6IExvZ2luU2VydmljZSxcbiAgICAgICAgcHJpdmF0ZSBsYW5ndWFnZUhlbHBlcjogSmhpTGFuZ3VhZ2VIZWxwZXIsXG4gICAgICAgIHByaXZhdGUgbGFuZ3VhZ2VTZXJ2aWNlOiBKaGlMYW5ndWFnZVNlcnZpY2UsXG4gICAgICAgIHByaXZhdGUgcHJpbmNpcGFsOiBQcmluY2lwYWwsXG4gICAgICAgIHByaXZhdGUgbG9naW5Nb2RhbFNlcnZpY2U6IExvZ2luTW9kYWxTZXJ2aWNlLFxuICAgICAgICBwcml2YXRlIHByb2ZpbGVTZXJ2aWNlOiBQcm9maWxlU2VydmljZSxcbiAgICAgICAgcHJpdmF0ZSByb3V0ZXI6IFJvdXRlclxuICAgICkge1xuICAgICAgICB0aGlzLnZlcnNpb24gPSBWRVJTSU9OID8gJ3YnICsgVkVSU0lPTiA6ICcnO1xuICAgICAgICB0aGlzLmlzTmF2YmFyQ29sbGFwc2VkID0gdHJ1ZTtcbiAgICAgICAgdGhpcy5sYW5ndWFnZVNlcnZpY2UuYWRkTG9jYXRpb24oJ2hvbWUnKTtcbiAgICB9XG5cbiAgICBuZ09uSW5pdCgpIHtcbiAgICAgICAgdGhpcy5sYW5ndWFnZUhlbHBlci5nZXRBbGwoKS50aGVuKChsYW5ndWFnZXMpID0+IHtcbiAgICAgICAgICAgIHRoaXMubGFuZ3VhZ2VzID0gbGFuZ3VhZ2VzO1xuICAgICAgICB9KTtcblxuICAgICAgICB0aGlzLnByb2ZpbGVTZXJ2aWNlLmdldFByb2ZpbGVJbmZvKCkuc3Vic2NyaWJlKChwcm9maWxlSW5mbykgPT4ge1xuICAgICAgICAgICAgdGhpcy5pblByb2R1Y3Rpb24gPSBwcm9maWxlSW5mby5pblByb2R1Y3Rpb247XG4gICAgICAgICAgICB0aGlzLnN3YWdnZXJFbmFibGVkID0gcHJvZmlsZUluZm8uc3dhZ2dlckVuYWJsZWQ7XG4gICAgICAgIH0pO1xuICAgIH1cblxuICAgIGNoYW5nZUxhbmd1YWdlKGxhbmd1YWdlS2V5OiBzdHJpbmcpIHtcbiAgICAgIHRoaXMubGFuZ3VhZ2VTZXJ2aWNlLmNoYW5nZUxhbmd1YWdlKGxhbmd1YWdlS2V5KTtcbiAgICB9XG5cbiAgICBjb2xsYXBzZU5hdmJhcigpIHtcbiAgICAgICAgdGhpcy5pc05hdmJhckNvbGxhcHNlZCA9IHRydWU7XG4gICAgfVxuXG4gICAgaXNBdXRoZW50aWNhdGVkKCkge1xuICAgICAgICByZXR1cm4gdGhpcy5wcmluY2lwYWwuaXNBdXRoZW50aWNhdGVkKCk7XG4gICAgfVxuXG4gICAgbG9naW4oKSB7XG4gICAgICAgIHRoaXMubW9kYWxSZWYgPSB0aGlzLmxvZ2luTW9kYWxTZXJ2aWNlLm9wZW4oKTtcbiAgICB9XG5cbiAgICBsb2dvdXQoKSB7XG4gICAgICAgIHRoaXMuY29sbGFwc2VOYXZiYXIoKTtcbiAgICAgICAgdGhpcy5sb2dpblNlcnZpY2UubG9nb3V0KCk7XG4gICAgICAgIHRoaXMucm91dGVyLm5hdmlnYXRlKFsnJ10pO1xuICAgIH1cblxuICAgIHRvZ2dsZU5hdmJhcigpIHtcbiAgICAgICAgdGhpcy5pc05hdmJhckNvbGxhcHNlZCA9ICF0aGlzLmlzTmF2YmFyQ29sbGFwc2VkO1xuICAgIH1cblxuICAgIGdldEltYWdlVXJsKCkge1xuICAgICAgICByZXR1cm4gdGhpcy5pc0F1dGhlbnRpY2F0ZWQoKSA/IHRoaXMucHJpbmNpcGFsLmdldEltYWdlVXJsKCkgOiBudWxsO1xuICAgIH1cbn1cblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL34vdHNsaW50LWxvYWRlciEuL3NyYy9tYWluL3dlYmFwcC9hcHAvbGF5b3V0cy9uYXZiYXIvbmF2YmFyLmNvbXBvbmVudC50cyIsIlxuICAgICAgICB2YXIgcmVzdWx0ID0gcmVxdWlyZShcIiEhLi4vLi4vLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvaW5kZXguanMhLi4vLi4vLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Nhc3MtbG9hZGVyL2xpYi9sb2FkZXIuanMhLi9uYXZiYXIuc2Nzc1wiKTtcblxuICAgICAgICBpZiAodHlwZW9mIHJlc3VsdCA9PT0gXCJzdHJpbmdcIikge1xuICAgICAgICAgICAgbW9kdWxlLmV4cG9ydHMgPSByZXN1bHQ7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICBtb2R1bGUuZXhwb3J0cyA9IHJlc3VsdC50b1N0cmluZygpO1xuICAgICAgICB9XG4gICAgXG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9zcmMvbWFpbi93ZWJhcHAvYXBwL2xheW91dHMvbmF2YmFyL25hdmJhci5zY3NzXG4vLyBtb2R1bGUgaWQgPSAuL3NyYy9tYWluL3dlYmFwcC9hcHAvbGF5b3V0cy9uYXZiYXIvbmF2YmFyLnNjc3Ncbi8vIG1vZHVsZSBjaHVua3MgPSAwIiwiaW1wb3J0IHsgQ29tcG9uZW50LCBPbkluaXQgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IFByb2ZpbGVTZXJ2aWNlIH0gZnJvbSAnLi9wcm9maWxlLnNlcnZpY2UnO1xuaW1wb3J0IHsgUHJvZmlsZUluZm8gfSBmcm9tICcuL3Byb2ZpbGUtaW5mby5tb2RlbCc7XG5cbkBDb21wb25lbnQoe1xuICAgIHNlbGVjdG9yOiAnamhpLXBhZ2UtcmliYm9uJyxcbiAgICB0ZW1wbGF0ZTogYDxkaXYgY2xhc3M9XCJyaWJib25cIiAqbmdJZj1cInJpYmJvbkVudlwiPjxhIGhyZWY9XCJcIiBqaGlUcmFuc2xhdGU9XCJnbG9iYWwucmliYm9uLnt7cmliYm9uRW52fX1cIj57e3JpYmJvbkVudn19PC9hPjwvZGl2PmAsXG4gICAgc3R5bGVVcmxzOiBbXG4gICAgICAgICdwYWdlLXJpYmJvbi5zY3NzJ1xuICAgIF1cbn0pXG5leHBvcnQgY2xhc3MgUGFnZVJpYmJvbkNvbXBvbmVudCBpbXBsZW1lbnRzIE9uSW5pdCB7XG5cbiAgICBwcm9maWxlSW5mbzogUHJvZmlsZUluZm87XG4gICAgcmliYm9uRW52OiBzdHJpbmc7XG5cbiAgICBjb25zdHJ1Y3Rvcihwcml2YXRlIHByb2ZpbGVTZXJ2aWNlOiBQcm9maWxlU2VydmljZSkge31cblxuICAgIG5nT25Jbml0KCkge1xuICAgICAgICB0aGlzLnByb2ZpbGVTZXJ2aWNlLmdldFByb2ZpbGVJbmZvKCkuc3Vic2NyaWJlKChwcm9maWxlSW5mbykgPT4ge1xuICAgICAgICAgICAgdGhpcy5wcm9maWxlSW5mbyA9IHByb2ZpbGVJbmZvO1xuICAgICAgICAgICAgdGhpcy5yaWJib25FbnYgPSBwcm9maWxlSW5mby5yaWJib25FbnY7XG4gICAgICAgIH0pO1xuICAgIH1cbn1cblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL34vdHNsaW50LWxvYWRlciEuL3NyYy9tYWluL3dlYmFwcC9hcHAvbGF5b3V0cy9wcm9maWxlcy9wYWdlLXJpYmJvbi5jb21wb25lbnQudHMiLCJcbiAgICAgICAgdmFyIHJlc3VsdCA9IHJlcXVpcmUoXCIhIS4uLy4uLy4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2luZGV4LmpzIS4uLy4uLy4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy9zYXNzLWxvYWRlci9saWIvbG9hZGVyLmpzIS4vcGFnZS1yaWJib24uc2Nzc1wiKTtcblxuICAgICAgICBpZiAodHlwZW9mIHJlc3VsdCA9PT0gXCJzdHJpbmdcIikge1xuICAgICAgICAgICAgbW9kdWxlLmV4cG9ydHMgPSByZXN1bHQ7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICBtb2R1bGUuZXhwb3J0cyA9IHJlc3VsdC50b1N0cmluZygpO1xuICAgICAgICB9XG4gICAgXG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9zcmMvbWFpbi93ZWJhcHAvYXBwL2xheW91dHMvcHJvZmlsZXMvcGFnZS1yaWJib24uc2Nzc1xuLy8gbW9kdWxlIGlkID0gLi9zcmMvbWFpbi93ZWJhcHAvYXBwL2xheW91dHMvcHJvZmlsZXMvcGFnZS1yaWJib24uc2Nzc1xuLy8gbW9kdWxlIGNodW5rcyA9IDAiLCJleHBvcnQgY2xhc3MgUHJvZmlsZUluZm8ge1xuICAgIGFjdGl2ZVByb2ZpbGVzOiBzdHJpbmdbXTtcbiAgICByaWJib25FbnY6IHN0cmluZztcbiAgICBpblByb2R1Y3Rpb246IGJvb2xlYW47XG4gICAgc3dhZ2dlckVuYWJsZWQ6IGJvb2xlYW47XG59XG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9+L3RzbGludC1sb2FkZXIhLi9zcmMvbWFpbi93ZWJhcHAvYXBwL2xheW91dHMvcHJvZmlsZXMvcHJvZmlsZS1pbmZvLm1vZGVsLnRzIiwiaW1wb3J0IHsgSW5qZWN0YWJsZSB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgSHR0cCwgUmVzcG9uc2UgfSBmcm9tICdAYW5ndWxhci9odHRwJztcbmltcG9ydCB7IE9ic2VydmFibGUgfSBmcm9tICdyeGpzL1J4JztcblxuaW1wb3J0IHsgUHJvZmlsZUluZm8gfSBmcm9tICcuL3Byb2ZpbGUtaW5mby5tb2RlbCc7XG5cbkBJbmplY3RhYmxlKClcbmV4cG9ydCBjbGFzcyBQcm9maWxlU2VydmljZSB7XG5cbiAgICBwcml2YXRlIHByb2ZpbGVJbmZvVXJsID0gJ2FwaS9wcm9maWxlLWluZm8nO1xuXG4gICAgY29uc3RydWN0b3IocHJpdmF0ZSBodHRwOiBIdHRwKSB7IH1cblxuICAgIGdldFByb2ZpbGVJbmZvKCk6IE9ic2VydmFibGU8UHJvZmlsZUluZm8+IHtcbiAgICAgICAgcmV0dXJuIHRoaXMuaHR0cC5nZXQodGhpcy5wcm9maWxlSW5mb1VybClcbiAgICAgICAgICAgIC5tYXAoKHJlczogUmVzcG9uc2UpID0+IHtcbiAgICAgICAgICAgICAgICBjb25zdCBkYXRhID0gcmVzLmpzb24oKTtcbiAgICAgICAgICAgICAgICBjb25zdCBwaSA9IG5ldyBQcm9maWxlSW5mbygpO1xuICAgICAgICAgICAgICAgIHBpLmFjdGl2ZVByb2ZpbGVzID0gZGF0YS5hY3RpdmVQcm9maWxlcztcbiAgICAgICAgICAgICAgICBwaS5yaWJib25FbnYgPSBkYXRhLnJpYmJvbkVudjtcbiAgICAgICAgICAgICAgICBwaS5pblByb2R1Y3Rpb24gPSBkYXRhLmFjdGl2ZVByb2ZpbGVzLmluZGV4T2YoJ3Byb2QnKSAhPT0gLTE7XG4gICAgICAgICAgICAgICAgcGkuc3dhZ2dlckVuYWJsZWQgPSBkYXRhLmFjdGl2ZVByb2ZpbGVzLmluZGV4T2YoJ3N3YWdnZXInKSAhPT0gLTE7XG4gICAgICAgICAgICAgICAgcmV0dXJuIHBpO1xuICAgICAgICAgICAgfSk7XG4gICAgfVxufVxuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vfi90c2xpbnQtbG9hZGVyIS4vc3JjL21haW4vd2ViYXBwL2FwcC9sYXlvdXRzL3Byb2ZpbGVzL3Byb2ZpbGUuc2VydmljZS50cyIsImltcG9ydCB7IENvbXBvbmVudCwgT25EZXN0cm95IH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBUcmFuc2xhdGVTZXJ2aWNlIH0gZnJvbSAnbmcyLXRyYW5zbGF0ZSc7XG5pbXBvcnQgeyBFdmVudE1hbmFnZXIsIEFsZXJ0U2VydmljZSB9IGZyb20gJ25nLWpoaXBzdGVyJztcbmltcG9ydCB7IFN1YnNjcmlwdGlvbiB9IGZyb20gJ3J4anMvUngnO1xuXG5AQ29tcG9uZW50KHtcbiAgICBzZWxlY3RvcjogJ2poaS1hbGVydC1lcnJvcicsXG4gICAgdGVtcGxhdGU6IGBcbiAgICAgICAgPGRpdiBjbGFzcz1cImFsZXJ0c1wiIHJvbGU9XCJhbGVydFwiPlxuICAgICAgICAgICAgPGRpdiAqbmdGb3I9XCJsZXQgYWxlcnQgb2YgYWxlcnRzXCIgIFtuZ0NsYXNzXT1cIntcXCdhbGVydC5wb3NpdGlvblxcJzogdHJ1ZSwgXFwndG9hc3RcXCc6IGFsZXJ0LnRvYXN0fVwiPlxuICAgICAgICAgICAgICAgIDxuZ2ItYWxlcnQgdHlwZT1cInt7YWxlcnQudHlwZX19XCIgY2xvc2U9XCJhbGVydC5jbG9zZShhbGVydHMpXCI+PHByZSBbaW5uZXJIVE1MXT1cImFsZXJ0Lm1zZ1wiPjwvcHJlPjwvbmdiLWFsZXJ0PlxuICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgIDwvZGl2PmBcbn0pXG5leHBvcnQgY2xhc3MgSmhpQWxlcnRFcnJvckNvbXBvbmVudCBpbXBsZW1lbnRzIE9uRGVzdHJveSB7XG5cbiAgICBhbGVydHM6IGFueVtdO1xuICAgIGNsZWFuSHR0cEVycm9yTGlzdGVuZXI6IFN1YnNjcmlwdGlvbjtcblxuICAgIGNvbnN0cnVjdG9yKHByaXZhdGUgYWxlcnRTZXJ2aWNlOiBBbGVydFNlcnZpY2UsIHByaXZhdGUgZXZlbnRNYW5hZ2VyOiBFdmVudE1hbmFnZXIsIHByaXZhdGUgdHJhbnNsYXRlU2VydmljZTogVHJhbnNsYXRlU2VydmljZSkge1xuICAgICAgICB0aGlzLmFsZXJ0cyA9IFtdO1xuXG4gICAgICAgIHRoaXMuY2xlYW5IdHRwRXJyb3JMaXN0ZW5lciA9IGV2ZW50TWFuYWdlci5zdWJzY3JpYmUoJ3BhY2tldEFwcC5odHRwRXJyb3InLCAocmVzcG9uc2UpID0+IHtcbiAgICAgICAgICAgIGxldCBpO1xuICAgICAgICAgICAgY29uc3QgaHR0cFJlc3BvbnNlID0gcmVzcG9uc2UuY29udGVudDtcbiAgICAgICAgICAgIHN3aXRjaCAoaHR0cFJlc3BvbnNlLnN0YXR1cykge1xuICAgICAgICAgICAgICAgIC8vIGNvbm5lY3Rpb24gcmVmdXNlZCwgc2VydmVyIG5vdCByZWFjaGFibGVcbiAgICAgICAgICAgICAgICBjYXNlIDA6XG4gICAgICAgICAgICAgICAgICAgIHRoaXMuYWRkRXJyb3JBbGVydCgnU2VydmVyIG5vdCByZWFjaGFibGUnLCAnZXJyb3Iuc2VydmVyLm5vdC5yZWFjaGFibGUnKTtcbiAgICAgICAgICAgICAgICAgICAgYnJlYWs7XG5cbiAgICAgICAgICAgICAgICBjYXNlIDQwMDpcbiAgICAgICAgICAgICAgICAgICAgY29uc3QgYXJyID0gQXJyYXkuZnJvbShodHRwUmVzcG9uc2UuaGVhZGVycy5faGVhZGVycyk7XG4gICAgICAgICAgICAgICAgICAgIGNvbnN0IGhlYWRlcnMgPSBbXTtcbiAgICAgICAgICAgICAgICAgICAgZm9yIChpID0gMDsgaSA8IGFyci5sZW5ndGg7IGkrKykge1xuICAgICAgICAgICAgICAgICAgICAgICAgaWYgKGFycltpXVswXS5lbmRzV2l0aCgnYXBwLWVycm9yJykgfHwgYXJyW2ldWzBdLmVuZHNXaXRoKCdhcHAtcGFyYW1zJykpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBoZWFkZXJzLnB1c2goYXJyW2ldWzBdKTtcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICBoZWFkZXJzLnNvcnQoKTtcbiAgICAgICAgICAgICAgICAgICAgbGV0IGVycm9ySGVhZGVyID0gbnVsbDtcbiAgICAgICAgICAgICAgICAgICAgbGV0IGVudGl0eUtleSA9IG51bGw7XG4gICAgICAgICAgICAgICAgICAgIGlmIChoZWFkZXJzLmxlbmd0aCA+IDEpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGVycm9ySGVhZGVyID0gaHR0cFJlc3BvbnNlLmhlYWRlcnMuZ2V0KGhlYWRlcnNbMF0pO1xuICAgICAgICAgICAgICAgICAgICAgICAgZW50aXR5S2V5ID0gaHR0cFJlc3BvbnNlLmhlYWRlcnMuZ2V0KGhlYWRlcnNbMV0pO1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgIGlmIChlcnJvckhlYWRlcikge1xuICAgICAgICAgICAgICAgICAgICAgICAgY29uc3QgZW50aXR5TmFtZSA9IHRyYW5zbGF0ZVNlcnZpY2UuaW5zdGFudCgnZ2xvYmFsLm1lbnUuZW50aXRpZXMuJyArIGVudGl0eUtleSk7XG4gICAgICAgICAgICAgICAgICAgICAgICB0aGlzLmFkZEVycm9yQWxlcnQoZXJyb3JIZWFkZXIsIGVycm9ySGVhZGVyLCB7IGVudGl0eU5hbWUgfSk7XG4gICAgICAgICAgICAgICAgICAgIH0gZWxzZSBpZiAoaHR0cFJlc3BvbnNlLnRleHQoKSAhPT0gJycgJiYgaHR0cFJlc3BvbnNlLmpzb24oKSAmJiBodHRwUmVzcG9uc2UuanNvbigpLmZpZWxkRXJyb3JzKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICBjb25zdCBmaWVsZEVycm9ycyA9IGh0dHBSZXNwb25zZS5qc29uKCkuZmllbGRFcnJvcnM7XG4gICAgICAgICAgICAgICAgICAgICAgICBmb3IgKGkgPSAwOyBpIDwgZmllbGRFcnJvcnMubGVuZ3RoOyBpKyspIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBjb25zdCBmaWVsZEVycm9yID0gZmllbGRFcnJvcnNbaV07XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgLy8gY29udmVydCAnc29tZXRoaW5nWzE0XS5vdGhlcls0XS5pZCcgdG8gJ3NvbWV0aGluZ1tdLm90aGVyW10uaWQnIHNvIHRyYW5zbGF0aW9ucyBjYW4gYmUgd3JpdHRlbiB0byBpdFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNvbnN0IGNvbnZlcnRlZEZpZWxkID0gZmllbGRFcnJvci5maWVsZC5yZXBsYWNlKC9cXFtcXGQqXFxdL2csICdbXScpO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNvbnN0IGZpZWxkTmFtZSA9IHRyYW5zbGF0ZVNlcnZpY2UuaW5zdGFudCgncGFja2V0QXBwLicgK1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBmaWVsZEVycm9yLm9iamVjdE5hbWUgKyAnLicgKyBjb252ZXJ0ZWRGaWVsZCk7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5hZGRFcnJvckFsZXJ0KFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAnRmllbGQgJyArIGZpZWxkTmFtZSArICcgY2Fubm90IGJlIGVtcHR5JywgJ2Vycm9yLicgKyBmaWVsZEVycm9yLm1lc3NhZ2UsIHsgZmllbGROYW1lIH0pO1xuICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICB9IGVsc2UgaWYgKGh0dHBSZXNwb25zZS50ZXh0KCkgIT09ICcnICYmIGh0dHBSZXNwb25zZS5qc29uKCkgJiYgaHR0cFJlc3BvbnNlLmpzb24oKS5tZXNzYWdlKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICB0aGlzLmFkZEVycm9yQWxlcnQoaHR0cFJlc3BvbnNlLmpzb24oKS5tZXNzYWdlLCBodHRwUmVzcG9uc2UuanNvbigpLm1lc3NhZ2UsIGh0dHBSZXNwb25zZS5qc29uKCkucGFyYW1zKTtcbiAgICAgICAgICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMuYWRkRXJyb3JBbGVydChodHRwUmVzcG9uc2UudGV4dCgpKTtcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICBicmVhaztcblxuICAgICAgICAgICAgICAgIGNhc2UgNDA0OlxuICAgICAgICAgICAgICAgICAgICB0aGlzLmFkZEVycm9yQWxlcnQoJ05vdCBmb3VuZCcsICdlcnJvci51cmwubm90LmZvdW5kJyk7XG4gICAgICAgICAgICAgICAgICAgIGJyZWFrO1xuXG4gICAgICAgICAgICAgICAgZGVmYXVsdDpcbiAgICAgICAgICAgICAgICAgICAgaWYgKGh0dHBSZXNwb25zZS50ZXh0KCkgIT09ICcnICYmIGh0dHBSZXNwb25zZS5qc29uKCkgJiYgaHR0cFJlc3BvbnNlLmpzb24oKS5tZXNzYWdlKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICB0aGlzLmFkZEVycm9yQWxlcnQoaHR0cFJlc3BvbnNlLmpzb24oKS5tZXNzYWdlKTtcbiAgICAgICAgICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMuYWRkRXJyb3JBbGVydChodHRwUmVzcG9uc2UudGV4dCgpKTtcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICB9KTtcbiAgICB9XG5cbiAgICBuZ09uRGVzdHJveSgpIHtcbiAgICAgICAgaWYgKHRoaXMuY2xlYW5IdHRwRXJyb3JMaXN0ZW5lciAhPT0gdW5kZWZpbmVkICYmIHRoaXMuY2xlYW5IdHRwRXJyb3JMaXN0ZW5lciAhPT0gbnVsbCkge1xuICAgICAgICAgICAgdGhpcy5ldmVudE1hbmFnZXIuZGVzdHJveSh0aGlzLmNsZWFuSHR0cEVycm9yTGlzdGVuZXIpO1xuICAgICAgICAgICAgdGhpcy5hbGVydHMgPSBbXTtcbiAgICAgICAgfVxuICAgIH1cblxuICAgIGFkZEVycm9yQWxlcnQobWVzc2FnZSwga2V5PywgZGF0YT8pIHtcbiAgICAgICAga2V5ID0ga2V5ICYmIGtleSAhPT0gbnVsbCA/IGtleSA6IG1lc3NhZ2U7XG4gICAgICAgIHRoaXMuYWxlcnRzLnB1c2goXG4gICAgICAgICAgICB0aGlzLmFsZXJ0U2VydmljZS5hZGRBbGVydChcbiAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICAgIHR5cGU6ICdkYW5nZXInLFxuICAgICAgICAgICAgICAgICAgICBtc2c6IGtleSxcbiAgICAgICAgICAgICAgICAgICAgcGFyYW1zOiBkYXRhLFxuICAgICAgICAgICAgICAgICAgICB0aW1lb3V0OiA1MDAwLFxuICAgICAgICAgICAgICAgICAgICB0b2FzdDogdGhpcy5hbGVydFNlcnZpY2UuaXNUb2FzdCgpLFxuICAgICAgICAgICAgICAgICAgICBzY29wZWQ6IHRydWVcbiAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgIHRoaXMuYWxlcnRzXG4gICAgICAgICAgICApXG4gICAgICAgICk7XG4gICAgfVxufVxuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vfi90c2xpbnQtbG9hZGVyIS4vc3JjL21haW4vd2ViYXBwL2FwcC9zaGFyZWQvYWxlcnQvYWxlcnQtZXJyb3IuY29tcG9uZW50LnRzIiwiaW1wb3J0IHsgQ29tcG9uZW50LCBPbkRlc3Ryb3ksIE9uSW5pdCB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgQWxlcnRTZXJ2aWNlIH0gZnJvbSAnbmctamhpcHN0ZXInO1xuXG5AQ29tcG9uZW50KHtcbiAgICBzZWxlY3RvcjogJ2poaS1hbGVydCcsXG4gICAgdGVtcGxhdGU6IGBcbiAgICAgICAgPGRpdiBjbGFzcz1cImFsZXJ0c1wiIHJvbGU9XCJhbGVydFwiPlxuICAgICAgICAgICAgPGRpdiAqbmdGb3I9XCJsZXQgYWxlcnQgb2YgYWxlcnRzXCIgW25nQ2xhc3NdPVwie1xcJ2FsZXJ0LnBvc2l0aW9uXFwnOiB0cnVlLCBcXCd0b2FzdFxcJzogYWxlcnQudG9hc3R9XCI+XG4gICAgICAgICAgICAgICAgPG5nYi1hbGVydCBbdHlwZV09XCJhbGVydC50eXBlXCIgKGNsb3NlKT1cImFsZXJ0LmNsb3NlKGFsZXJ0cylcIj48cHJlIFtpbm5lckhUTUxdPVwiYWxlcnQubXNnXCI+PC9wcmU+PC9uZ2ItYWxlcnQ+XG4gICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgPC9kaXY+YFxufSlcbmV4cG9ydCBjbGFzcyBKaGlBbGVydENvbXBvbmVudCBpbXBsZW1lbnRzIE9uSW5pdCwgT25EZXN0cm95IHtcbiAgICBhbGVydHM6IGFueVtdO1xuXG4gICAgY29uc3RydWN0b3IocHJpdmF0ZSBhbGVydFNlcnZpY2U6IEFsZXJ0U2VydmljZSkgeyB9XG5cbiAgICBuZ09uSW5pdCgpIHtcbiAgICAgICAgdGhpcy5hbGVydHMgPSB0aGlzLmFsZXJ0U2VydmljZS5nZXQoKTtcbiAgICB9XG5cbiAgICBuZ09uRGVzdHJveSgpIHtcbiAgICAgICAgdGhpcy5hbGVydHMgPSBbXTtcbiAgICB9XG5cbn1cblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL34vdHNsaW50LWxvYWRlciEuL3NyYy9tYWluL3dlYmFwcC9hcHAvc2hhcmVkL2FsZXJ0L2FsZXJ0LmNvbXBvbmVudC50cyIsImltcG9ydCB7IEluamVjdGFibGUgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IEh0dHAsIFJlc3BvbnNlIH0gZnJvbSAnQGFuZ3VsYXIvaHR0cCc7XG5pbXBvcnQgeyBPYnNlcnZhYmxlIH0gZnJvbSAncnhqcy9SeCc7XG5cbkBJbmplY3RhYmxlKClcbmV4cG9ydCBjbGFzcyBBY2NvdW50U2VydmljZSAge1xuICAgIGNvbnN0cnVjdG9yKHByaXZhdGUgaHR0cDogSHR0cCkgeyB9XG5cbiAgICBnZXQoKTogT2JzZXJ2YWJsZTxhbnk+IHtcbiAgICAgICAgcmV0dXJuIHRoaXMuaHR0cC5nZXQoJ2FwaS9hY2NvdW50JykubWFwKChyZXM6IFJlc3BvbnNlKSA9PiByZXMuanNvbigpKTtcbiAgICB9XG5cbiAgICBzYXZlKGFjY291bnQ6IGFueSk6IE9ic2VydmFibGU8UmVzcG9uc2U+IHtcbiAgICAgICAgcmV0dXJuIHRoaXMuaHR0cC5wb3N0KCdhcGkvYWNjb3VudCcsIGFjY291bnQpO1xuICAgIH1cbn1cblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL34vdHNsaW50LWxvYWRlciEuL3NyYy9tYWluL3dlYmFwcC9hcHAvc2hhcmVkL2F1dGgvYWNjb3VudC5zZXJ2aWNlLnRzIiwiaW1wb3J0IHsgSW5qZWN0YWJsZSB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgSHR0cCwgUmVzcG9uc2UsIEhlYWRlcnMsIFVSTFNlYXJjaFBhcmFtcyB9IGZyb20gJ0Bhbmd1bGFyL2h0dHAnO1xuaW1wb3J0IHsgT2JzZXJ2YWJsZSB9IGZyb20gJ3J4anMvUngnO1xuaW1wb3J0IHsgTG9jYWxTdG9yYWdlU2VydmljZSwgU2Vzc2lvblN0b3JhZ2VTZXJ2aWNlIH0gZnJvbSAnbmcyLXdlYnN0b3JhZ2UnO1xuXG5ASW5qZWN0YWJsZSgpXG5leHBvcnQgY2xhc3MgQXV0aFNlcnZlclByb3ZpZGVyIHtcbiAgICBjb25zdHJ1Y3RvcihcbiAgICAgICAgcHJpdmF0ZSBodHRwOiBIdHRwLFxuICAgICAgICBwcml2YXRlICRsb2NhbFN0b3JhZ2U6IExvY2FsU3RvcmFnZVNlcnZpY2UsXG4gICAgICAgIHByaXZhdGUgJHNlc3Npb25TdG9yYWdlOiBTZXNzaW9uU3RvcmFnZVNlcnZpY2VcbiAgICApIHt9XG5cbiAgICBnZXRUb2tlbigpIHtcbiAgICAgICAgcmV0dXJuIHRoaXMuJGxvY2FsU3RvcmFnZS5yZXRyaWV2ZSgnYXV0aGVudGljYXRpb25Ub2tlbicpIHx8IHRoaXMuJHNlc3Npb25TdG9yYWdlLnJldHJpZXZlKCdhdXRoZW50aWNhdGlvblRva2VuJyk7XG4gICAgfVxuXG4gICAgbG9naW4oY3JlZGVudGlhbHMpOiBPYnNlcnZhYmxlPGFueT4ge1xuXG4gICAgICAgIGNvbnN0IGRhdGEgPSB7XG4gICAgICAgICAgICB1c2VybmFtZTogY3JlZGVudGlhbHMudXNlcm5hbWUsXG4gICAgICAgICAgICBwYXNzd29yZDogY3JlZGVudGlhbHMucGFzc3dvcmQsXG4gICAgICAgICAgICByZW1lbWJlck1lOiBjcmVkZW50aWFscy5yZW1lbWJlck1lXG4gICAgICAgIH07XG4gICAgICAgIHJldHVybiB0aGlzLmh0dHAucG9zdCgnYXBpL2F1dGhlbnRpY2F0ZScsIGRhdGEpLm1hcChhdXRoZW50aWNhdGVTdWNjZXNzLmJpbmQodGhpcykpO1xuXG4gICAgICAgIGZ1bmN0aW9uIGF1dGhlbnRpY2F0ZVN1Y2Nlc3MocmVzcCkge1xuICAgICAgICAgICAgY29uc3QgYmVhcmVyVG9rZW4gPSByZXNwLmhlYWRlcnMuZ2V0KCdBdXRob3JpemF0aW9uJyk7XG4gICAgICAgICAgICBpZiAoYmVhcmVyVG9rZW4gJiYgYmVhcmVyVG9rZW4uc2xpY2UoMCwgNykgPT09ICdCZWFyZXIgJykge1xuICAgICAgICAgICAgICAgIGNvbnN0IGp3dCA9IGJlYXJlclRva2VuLnNsaWNlKDcsIGJlYXJlclRva2VuLmxlbmd0aCk7XG4gICAgICAgICAgICAgICAgdGhpcy5zdG9yZUF1dGhlbnRpY2F0aW9uVG9rZW4oand0LCBjcmVkZW50aWFscy5yZW1lbWJlck1lKTtcbiAgICAgICAgICAgICAgICByZXR1cm4gand0O1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgfVxuXG4gICAgbG9naW5XaXRoVG9rZW4oand0LCByZW1lbWJlck1lKSB7XG4gICAgICAgIGlmIChqd3QpIHtcbiAgICAgICAgICAgIHRoaXMuc3RvcmVBdXRoZW50aWNhdGlvblRva2VuKGp3dCwgcmVtZW1iZXJNZSk7XG4gICAgICAgICAgICByZXR1cm4gUHJvbWlzZS5yZXNvbHZlKGp3dCk7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICByZXR1cm4gUHJvbWlzZS5yZWplY3QoJ2F1dGgtand0LXNlcnZpY2UgUHJvbWlzZSByZWplY3QnKTsgLy8gUHV0IGFwcHJvcHJpYXRlIGVycm9yIG1lc3NhZ2UgaGVyZVxuICAgICAgICB9XG4gICAgfVxuXG4gICAgc3RvcmVBdXRoZW50aWNhdGlvblRva2VuKGp3dCwgcmVtZW1iZXJNZSkge1xuICAgICAgICBpZiAocmVtZW1iZXJNZSkge1xuICAgICAgICAgICAgdGhpcy4kbG9jYWxTdG9yYWdlLnN0b3JlKCdhdXRoZW50aWNhdGlvblRva2VuJywgand0KTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIHRoaXMuJHNlc3Npb25TdG9yYWdlLnN0b3JlKCdhdXRoZW50aWNhdGlvblRva2VuJywgand0KTtcbiAgICAgICAgfVxuICAgIH1cblxuICAgIGxvZ291dCgpOiBPYnNlcnZhYmxlPGFueT4ge1xuICAgICAgICByZXR1cm4gbmV3IE9ic2VydmFibGUoKG9ic2VydmVyKSA9PiB7XG4gICAgICAgICAgICB0aGlzLiRsb2NhbFN0b3JhZ2UuY2xlYXIoJ2F1dGhlbnRpY2F0aW9uVG9rZW4nKTtcbiAgICAgICAgICAgIHRoaXMuJHNlc3Npb25TdG9yYWdlLmNsZWFyKCdhdXRoZW50aWNhdGlvblRva2VuJyk7XG4gICAgICAgICAgICBvYnNlcnZlci5jb21wbGV0ZSgpO1xuICAgICAgICB9KTtcbiAgICB9XG59XG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9+L3RzbGludC1sb2FkZXIhLi9zcmMvbWFpbi93ZWJhcHAvYXBwL3NoYXJlZC9hdXRoL2F1dGgtand0LnNlcnZpY2UudHMiLCJpbXBvcnQgeyBJbmplY3RhYmxlIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBDb29raWVTZXJ2aWNlIH0gZnJvbSAnYW5ndWxhcjItY29va2llL2NvcmUnO1xuXG5ASW5qZWN0YWJsZSgpXG5leHBvcnQgY2xhc3MgQ1NSRlNlcnZpY2Uge1xuXG4gICAgY29uc3RydWN0b3IocHJpdmF0ZSBjb29raWVTZXJ2aWNlOiBDb29raWVTZXJ2aWNlKSB7fVxuXG4gICAgZ2V0Q1NSRihuYW1lPzogc3RyaW5nKSB7XG4gICAgICAgIG5hbWUgPSBgJHtuYW1lID8gbmFtZSA6ICdYU1JGLVRPS0VOJ31gO1xuICAgICAgICByZXR1cm4gdGhpcy5jb29raWVTZXJ2aWNlLmdldChuYW1lKTtcbiAgICB9XG59XG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9+L3RzbGludC1sb2FkZXIhLi9zcmMvbWFpbi93ZWJhcHAvYXBwL3NoYXJlZC9hdXRoL2NzcmYuc2VydmljZS50cyIsImltcG9ydCB7IERpcmVjdGl2ZSwgSW5wdXQsIFRlbXBsYXRlUmVmLCBWaWV3Q29udGFpbmVyUmVmIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBQcmluY2lwYWwgfSBmcm9tICcuL3ByaW5jaXBhbC5zZXJ2aWNlJztcblxuLyoqXG4gKiBAd2hhdEl0RG9lcyBDb25kaXRpb25hbGx5IGluY2x1ZGVzIGFuIEhUTUwgZWxlbWVudCBpZiBjdXJyZW50IHVzZXIgaGFzIGFueVxuICogb2YgdGhlIGF1dGhvcml0aWVzIHBhc3NlZCBhcyB0aGUgYGV4cHJlc3Npb25gLlxuICpcbiAqIEBob3dUb1VzZVxuICogYGBgXG4gKiAgICAgPHNvbWUtZWxlbWVudCAqamhpSGFzQW55QXV0aG9yaXR5PVwiJ1JPTEVfQURNSU4nXCI+Li4uPC9zb21lLWVsZW1lbnQ+XG4gKlxuICogICAgIDxzb21lLWVsZW1lbnQgKmpoaUhhc0FueUF1dGhvcml0eT1cIlsnUk9MRV9BRE1JTicsICdST0xFX1VTRVInXVwiPi4uLjwvc29tZS1lbGVtZW50PlxuICogYGBgXG4gKi9cbkBEaXJlY3RpdmUoe1xuICAgIHNlbGVjdG9yOiAnW2poaUhhc0FueUF1dGhvcml0eV0nXG59KVxuZXhwb3J0IGNsYXNzIEhhc0FueUF1dGhvcml0eURpcmVjdGl2ZSB7XG5cbiAgICBwcml2YXRlIGF1dGhvcml0aWVzOiBzdHJpbmdbXTtcblxuICAgIGNvbnN0cnVjdG9yKHByaXZhdGUgcHJpbmNpcGFsOiBQcmluY2lwYWwsIHByaXZhdGUgdGVtcGxhdGVSZWY6IFRlbXBsYXRlUmVmPGFueT4sIHByaXZhdGUgdmlld0NvbnRhaW5lclJlZjogVmlld0NvbnRhaW5lclJlZikge1xuICAgIH1cblxuICAgIEBJbnB1dCgpXG4gICAgc2V0IGpoaUhhc0FueUF1dGhvcml0eSh2YWx1ZTogc3RyaW5nfHN0cmluZ1tdKSB7XG4gICAgICAgIHRoaXMuYXV0aG9yaXRpZXMgPSB0eXBlb2YgdmFsdWUgPT09ICdzdHJpbmcnID8gWyA8c3RyaW5nPiB2YWx1ZSBdIDogPHN0cmluZ1tdPiB2YWx1ZTtcbiAgICAgICAgdGhpcy51cGRhdGVWaWV3KCk7XG4gICAgICAgIC8vIEdldCBub3RpZmllZCBlYWNoIHRpbWUgYXV0aGVudGljYXRpb24gc3RhdGUgY2hhbmdlcy5cbiAgICAgICAgdGhpcy5wcmluY2lwYWwuZ2V0QXV0aGVudGljYXRpb25TdGF0ZSgpLnN1YnNjcmliZSgoaWRlbnRpdHkpID0+IHRoaXMudXBkYXRlVmlldygpKTtcbiAgICB9XG5cbiAgICBwcml2YXRlIHVwZGF0ZVZpZXcoKTogdm9pZCB7XG4gICAgICAgIHRoaXMucHJpbmNpcGFsLmhhc0FueUF1dGhvcml0eSh0aGlzLmF1dGhvcml0aWVzKS50aGVuKChyZXN1bHQpID0+IHtcbiAgICAgICAgICAgIHRoaXMudmlld0NvbnRhaW5lclJlZi5jbGVhcigpO1xuICAgICAgICAgICAgaWYgKHJlc3VsdCkge1xuICAgICAgICAgICAgICAgIHRoaXMudmlld0NvbnRhaW5lclJlZi5jcmVhdGVFbWJlZGRlZFZpZXcodGhpcy50ZW1wbGF0ZVJlZik7XG4gICAgICAgICAgICB9XG4gICAgICAgIH0pO1xuICAgIH1cbn1cblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL34vdHNsaW50LWxvYWRlciEuL3NyYy9tYWluL3dlYmFwcC9hcHAvc2hhcmVkL2F1dGgvaGFzLWFueS1hdXRob3JpdHkuZGlyZWN0aXZlLnRzIiwiaW1wb3J0IHsgSW5qZWN0YWJsZSB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgT2JzZXJ2YWJsZSB9IGZyb20gJ3J4anMvT2JzZXJ2YWJsZSc7XG5pbXBvcnQgeyBTdWJqZWN0IH0gZnJvbSAncnhqcy9TdWJqZWN0JztcbmltcG9ydCB7IEFjY291bnRTZXJ2aWNlIH0gZnJvbSAnLi9hY2NvdW50LnNlcnZpY2UnO1xuaW1wb3J0IHsgSmhpVHJhY2tlclNlcnZpY2UgfSBmcm9tICcuLi90cmFja2VyL3RyYWNrZXIuc2VydmljZSc7IC8vIEJhcnJlbCBkb2Vzbid0IHdvcmsgaGVyZS4gTm8gaWRlYSB3aHkhXG5cbkBJbmplY3RhYmxlKClcbmV4cG9ydCBjbGFzcyBQcmluY2lwYWwge1xuICAgIHByaXZhdGUgdXNlcklkZW50aXR5OiBhbnk7XG4gICAgcHJpdmF0ZSBhdXRoZW50aWNhdGVkID0gZmFsc2U7XG4gICAgcHJpdmF0ZSBhdXRoZW50aWNhdGlvblN0YXRlID0gbmV3IFN1YmplY3Q8YW55PigpO1xuXG4gICAgY29uc3RydWN0b3IoXG4gICAgICAgIHByaXZhdGUgYWNjb3VudDogQWNjb3VudFNlcnZpY2UsXG4gICAgICAgIHByaXZhdGUgdHJhY2tlclNlcnZpY2U6IEpoaVRyYWNrZXJTZXJ2aWNlXG4gICAgKSB7fVxuXG4gICAgYXV0aGVudGljYXRlKGlkZW50aXR5KSB7XG4gICAgICAgIHRoaXMudXNlcklkZW50aXR5ID0gaWRlbnRpdHk7XG4gICAgICAgIHRoaXMuYXV0aGVudGljYXRlZCA9IGlkZW50aXR5ICE9PSBudWxsO1xuICAgICAgICB0aGlzLmF1dGhlbnRpY2F0aW9uU3RhdGUubmV4dCh0aGlzLnVzZXJJZGVudGl0eSk7XG4gICAgfVxuXG4gICAgaGFzQW55QXV0aG9yaXR5KGF1dGhvcml0aWVzOiBzdHJpbmdbXSk6IFByb21pc2U8Ym9vbGVhbj4ge1xuICAgICAgICByZXR1cm4gUHJvbWlzZS5yZXNvbHZlKHRoaXMuaGFzQW55QXV0aG9yaXR5RGlyZWN0KGF1dGhvcml0aWVzKSk7XG4gICAgfVxuXG4gICAgaGFzQW55QXV0aG9yaXR5RGlyZWN0KGF1dGhvcml0aWVzOiBzdHJpbmdbXSk6IGJvb2xlYW4ge1xuICAgICAgICBpZiAoIXRoaXMuYXV0aGVudGljYXRlZCB8fCAhdGhpcy51c2VySWRlbnRpdHkgfHwgIXRoaXMudXNlcklkZW50aXR5LmF1dGhvcml0aWVzKSB7XG4gICAgICAgICAgICByZXR1cm4gZmFsc2U7XG4gICAgICAgIH1cblxuICAgICAgICBmb3IgKGxldCBpID0gMDsgaSA8IGF1dGhvcml0aWVzLmxlbmd0aDsgaSsrKSB7XG4gICAgICAgICAgICBpZiAodGhpcy51c2VySWRlbnRpdHkuYXV0aG9yaXRpZXMuaW5kZXhPZihhdXRob3JpdGllc1tpXSkgIT09IC0xKSB7XG4gICAgICAgICAgICAgICAgcmV0dXJuIHRydWU7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cblxuICAgICAgICByZXR1cm4gZmFsc2U7XG4gICAgfVxuXG4gICAgaGFzQXV0aG9yaXR5KGF1dGhvcml0eTogc3RyaW5nKTogUHJvbWlzZTxib29sZWFuPiB7XG4gICAgICAgIGlmICghdGhpcy5hdXRoZW50aWNhdGVkKSB7XG4gICAgICAgICAgIHJldHVybiBQcm9taXNlLnJlc29sdmUoZmFsc2UpO1xuICAgICAgICB9XG5cbiAgICAgICAgcmV0dXJuIHRoaXMuaWRlbnRpdHkoKS50aGVuKChpZCkgPT4ge1xuICAgICAgICAgICAgcmV0dXJuIFByb21pc2UucmVzb2x2ZShpZC5hdXRob3JpdGllcyAmJiBpZC5hdXRob3JpdGllcy5pbmRleE9mKGF1dGhvcml0eSkgIT09IC0xKTtcbiAgICAgICAgfSwgKCkgPT4ge1xuICAgICAgICAgICAgcmV0dXJuIFByb21pc2UucmVzb2x2ZShmYWxzZSk7XG4gICAgICAgIH0pO1xuICAgIH1cblxuICAgIGlkZW50aXR5KGZvcmNlPzogYm9vbGVhbik6IFByb21pc2U8YW55PiB7XG4gICAgICAgIGlmIChmb3JjZSA9PT0gdHJ1ZSkge1xuICAgICAgICAgICAgdGhpcy51c2VySWRlbnRpdHkgPSB1bmRlZmluZWQ7XG4gICAgICAgIH1cblxuICAgICAgICAvLyBjaGVjayBhbmQgc2VlIGlmIHdlIGhhdmUgcmV0cmlldmVkIHRoZSB1c2VySWRlbnRpdHkgZGF0YSBmcm9tIHRoZSBzZXJ2ZXIuXG4gICAgICAgIC8vIGlmIHdlIGhhdmUsIHJldXNlIGl0IGJ5IGltbWVkaWF0ZWx5IHJlc29sdmluZ1xuICAgICAgICBpZiAodGhpcy51c2VySWRlbnRpdHkpIHtcbiAgICAgICAgICAgIHJldHVybiBQcm9taXNlLnJlc29sdmUodGhpcy51c2VySWRlbnRpdHkpO1xuICAgICAgICB9XG5cbiAgICAgICAgLy8gcmV0cmlldmUgdGhlIHVzZXJJZGVudGl0eSBkYXRhIGZyb20gdGhlIHNlcnZlciwgdXBkYXRlIHRoZSBpZGVudGl0eSBvYmplY3QsIGFuZCB0aGVuIHJlc29sdmUuXG4gICAgICAgIHJldHVybiB0aGlzLmFjY291bnQuZ2V0KCkudG9Qcm9taXNlKCkudGhlbigoYWNjb3VudCkgPT4ge1xuICAgICAgICAgICAgaWYgKGFjY291bnQpIHtcbiAgICAgICAgICAgICAgICB0aGlzLnVzZXJJZGVudGl0eSA9IGFjY291bnQ7XG4gICAgICAgICAgICAgICAgdGhpcy5hdXRoZW50aWNhdGVkID0gdHJ1ZTtcbiAgICAgICAgICAgICAgICB0aGlzLnRyYWNrZXJTZXJ2aWNlLmNvbm5lY3QoKTtcbiAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgdGhpcy51c2VySWRlbnRpdHkgPSBudWxsO1xuICAgICAgICAgICAgICAgIHRoaXMuYXV0aGVudGljYXRlZCA9IGZhbHNlO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgdGhpcy5hdXRoZW50aWNhdGlvblN0YXRlLm5leHQodGhpcy51c2VySWRlbnRpdHkpO1xuICAgICAgICAgICAgcmV0dXJuIHRoaXMudXNlcklkZW50aXR5O1xuICAgICAgICB9KS5jYXRjaCgoZXJyKSA9PiB7XG4gICAgICAgICAgICBpZiAodGhpcy50cmFja2VyU2VydmljZS5zdG9tcENsaWVudCAmJiB0aGlzLnRyYWNrZXJTZXJ2aWNlLnN0b21wQ2xpZW50LmNvbm5lY3RlZCkge1xuICAgICAgICAgICAgICAgIHRoaXMudHJhY2tlclNlcnZpY2UuZGlzY29ubmVjdCgpO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgdGhpcy51c2VySWRlbnRpdHkgPSBudWxsO1xuICAgICAgICAgICAgdGhpcy5hdXRoZW50aWNhdGVkID0gZmFsc2U7XG4gICAgICAgICAgICB0aGlzLmF1dGhlbnRpY2F0aW9uU3RhdGUubmV4dCh0aGlzLnVzZXJJZGVudGl0eSk7XG4gICAgICAgICAgICByZXR1cm4gbnVsbDtcbiAgICAgICAgfSk7XG4gICAgfVxuXG4gICAgaXNBdXRoZW50aWNhdGVkKCk6IGJvb2xlYW4ge1xuICAgICAgICByZXR1cm4gdGhpcy5hdXRoZW50aWNhdGVkO1xuICAgIH1cblxuICAgIGlzSWRlbnRpdHlSZXNvbHZlZCgpOiBib29sZWFuIHtcbiAgICAgICAgcmV0dXJuIHRoaXMudXNlcklkZW50aXR5ICE9PSB1bmRlZmluZWQ7XG4gICAgfVxuXG4gICAgZ2V0QXV0aGVudGljYXRpb25TdGF0ZSgpOiBPYnNlcnZhYmxlPGFueT4ge1xuICAgICAgICByZXR1cm4gdGhpcy5hdXRoZW50aWNhdGlvblN0YXRlLmFzT2JzZXJ2YWJsZSgpO1xuICAgIH1cblxuICAgIGdldEltYWdlVXJsKCk6IFN0cmluZyB7XG4gICAgICAgIHJldHVybiB0aGlzLmlzSWRlbnRpdHlSZXNvbHZlZCgpID8gdGhpcy51c2VySWRlbnRpdHkuaW1hZ2VVcmwgOiBudWxsO1xuICAgIH1cbn1cblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL34vdHNsaW50LWxvYWRlciEuL3NyYy9tYWluL3dlYmFwcC9hcHAvc2hhcmVkL2F1dGgvcHJpbmNpcGFsLnNlcnZpY2UudHMiLCJpbXBvcnQgeyBJbmplY3RhYmxlIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBTZXNzaW9uU3RvcmFnZVNlcnZpY2UgfSBmcm9tICduZzItd2Vic3RvcmFnZSc7XG5cbkBJbmplY3RhYmxlKClcbmV4cG9ydCBjbGFzcyBTdGF0ZVN0b3JhZ2VTZXJ2aWNlIHtcbiAgICBjb25zdHJ1Y3RvcihcbiAgICAgICAgcHJpdmF0ZSAkc2Vzc2lvblN0b3JhZ2U6IFNlc3Npb25TdG9yYWdlU2VydmljZVxuICAgICkge31cblxuICAgIGdldFByZXZpb3VzU3RhdGUoKSB7XG4gICAgICAgIHJldHVybiB0aGlzLiRzZXNzaW9uU3RvcmFnZS5yZXRyaWV2ZSgncHJldmlvdXNTdGF0ZScpO1xuICAgIH1cblxuICAgIHJlc2V0UHJldmlvdXNTdGF0ZSgpIHtcbiAgICAgICAgdGhpcy4kc2Vzc2lvblN0b3JhZ2UuY2xlYXIoJ3ByZXZpb3VzU3RhdGUnKTtcbiAgICB9XG5cbiAgICBzdG9yZVByZXZpb3VzU3RhdGUocHJldmlvdXNTdGF0ZU5hbWUsIHByZXZpb3VzU3RhdGVQYXJhbXMpIHtcbiAgICAgICAgY29uc3QgcHJldmlvdXNTdGF0ZSA9IHsgJ25hbWUnOiBwcmV2aW91c1N0YXRlTmFtZSwgJ3BhcmFtcyc6IHByZXZpb3VzU3RhdGVQYXJhbXMgfTtcbiAgICAgICAgdGhpcy4kc2Vzc2lvblN0b3JhZ2Uuc3RvcmUoJ3ByZXZpb3VzU3RhdGUnLCBwcmV2aW91c1N0YXRlKTtcbiAgICB9XG5cbiAgICBnZXREZXN0aW5hdGlvblN0YXRlKCkge1xuICAgICAgICByZXR1cm4gdGhpcy4kc2Vzc2lvblN0b3JhZ2UucmV0cmlldmUoJ2Rlc3RpbmF0aW9uU3RhdGUnKTtcbiAgICB9XG5cbiAgICBzdG9yZVVybCh1cmw6IHN0cmluZykge1xuICAgICAgICB0aGlzLiRzZXNzaW9uU3RvcmFnZS5zdG9yZSgncHJldmlvdXNVcmwnLCB1cmwpO1xuICAgIH1cblxuICAgIGdldFVybCgpIHtcbiAgICAgICAgcmV0dXJuIHRoaXMuJHNlc3Npb25TdG9yYWdlLnJldHJpZXZlKCdwcmV2aW91c1VybCcpO1xuICAgIH1cblxuICAgIHN0b3JlRGVzdGluYXRpb25TdGF0ZShkZXN0aW5hdGlvblN0YXRlLCBkZXN0aW5hdGlvblN0YXRlUGFyYW1zLCBmcm9tU3RhdGUpIHtcbiAgICAgICAgY29uc3QgZGVzdGluYXRpb25JbmZvID0ge1xuICAgICAgICAgICAgJ2Rlc3RpbmF0aW9uJzoge1xuICAgICAgICAgICAgICAgICduYW1lJzogZGVzdGluYXRpb25TdGF0ZS5uYW1lLFxuICAgICAgICAgICAgICAgICdkYXRhJzogZGVzdGluYXRpb25TdGF0ZS5kYXRhLFxuICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICdwYXJhbXMnOiBkZXN0aW5hdGlvblN0YXRlUGFyYW1zLFxuICAgICAgICAgICAgJ2Zyb20nOiB7XG4gICAgICAgICAgICAgICAgJ25hbWUnOiBmcm9tU3RhdGUubmFtZSxcbiAgICAgICAgICAgIH1cbiAgICAgICAgfTtcbiAgICAgICAgdGhpcy4kc2Vzc2lvblN0b3JhZ2Uuc3RvcmUoJ2Rlc3RpbmF0aW9uU3RhdGUnLCBkZXN0aW5hdGlvbkluZm8pO1xuICAgIH1cbn1cblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL34vdHNsaW50LWxvYWRlciEuL3NyYy9tYWluL3dlYmFwcC9hcHAvc2hhcmVkL2F1dGgvc3RhdGUtc3RvcmFnZS5zZXJ2aWNlLnRzIiwiaW1wb3J0IHsgSW5qZWN0YWJsZSB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgQWN0aXZhdGVkUm91dGVTbmFwc2hvdCwgQ2FuQWN0aXZhdGUsIFJvdXRlciwgUm91dGVyU3RhdGVTbmFwc2hvdCB9IGZyb20gJ0Bhbmd1bGFyL3JvdXRlcic7XG5cbmltcG9ydCB7IFByaW5jaXBhbCB9IGZyb20gJy4uLyc7XG5pbXBvcnQgeyBMb2dpbk1vZGFsU2VydmljZSB9IGZyb20gJy4uL2xvZ2luL2xvZ2luLW1vZGFsLnNlcnZpY2UnO1xuaW1wb3J0IHsgU3RhdGVTdG9yYWdlU2VydmljZSB9IGZyb20gJy4vc3RhdGUtc3RvcmFnZS5zZXJ2aWNlJztcblxuQEluamVjdGFibGUoKVxuZXhwb3J0IGNsYXNzIFVzZXJSb3V0ZUFjY2Vzc1NlcnZpY2UgaW1wbGVtZW50cyBDYW5BY3RpdmF0ZSB7XG5cbiAgICBjb25zdHJ1Y3Rvcihwcml2YXRlIHJvdXRlcjogUm91dGVyLFxuICAgICAgICAgICAgICAgIHByaXZhdGUgbG9naW5Nb2RhbFNlcnZpY2U6IExvZ2luTW9kYWxTZXJ2aWNlLFxuICAgICAgICAgICAgICAgIHByaXZhdGUgcHJpbmNpcGFsOiBQcmluY2lwYWwsXG4gICAgICAgICAgICAgICAgcHJpdmF0ZSBzdGF0ZVN0b3JhZ2VTZXJ2aWNlOiBTdGF0ZVN0b3JhZ2VTZXJ2aWNlKSB7XG4gICAgfVxuXG4gICAgY2FuQWN0aXZhdGUocm91dGU6IEFjdGl2YXRlZFJvdXRlU25hcHNob3QsIHN0YXRlOiBSb3V0ZXJTdGF0ZVNuYXBzaG90KTogYm9vbGVhbiB8IFByb21pc2U8Ym9vbGVhbj4ge1xuXG4gICAgICAgIGNvbnN0IGF1dGhvcml0aWVzID0gcm91dGUuZGF0YVsnYXV0aG9yaXRpZXMnXTtcbiAgICAgICAgaWYgKCFhdXRob3JpdGllcyB8fCBhdXRob3JpdGllcy5sZW5ndGggPT09IDApIHtcbiAgICAgICAgICAgIHJldHVybiB0cnVlO1xuICAgICAgICB9XG5cbiAgICAgICAgcmV0dXJuIHRoaXMuY2hlY2tMb2dpbihhdXRob3JpdGllcywgc3RhdGUudXJsKTtcbiAgICB9XG5cbiAgICBjaGVja0xvZ2luKGF1dGhvcml0aWVzOiBzdHJpbmdbXSwgdXJsOiBzdHJpbmcpOiBQcm9taXNlPGJvb2xlYW4+IHtcbiAgICAgICAgY29uc3QgcHJpbmNpcGFsID0gdGhpcy5wcmluY2lwYWw7XG4gICAgICAgIHJldHVybiBQcm9taXNlLnJlc29sdmUocHJpbmNpcGFsLmlkZW50aXR5KCkudGhlbigoYWNjb3VudCkgPT4ge1xuXG4gICAgICAgICAgICBpZiAoYWNjb3VudCAmJiBwcmluY2lwYWwuaGFzQW55QXV0aG9yaXR5RGlyZWN0KGF1dGhvcml0aWVzKSkge1xuICAgICAgICAgICAgICAgIHJldHVybiB0cnVlO1xuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICB0aGlzLnN0YXRlU3RvcmFnZVNlcnZpY2Uuc3RvcmVVcmwodXJsKTtcbiAgICAgICAgICAgIHRoaXMucm91dGVyLm5hdmlnYXRlKFsnYWNjZXNzZGVuaWVkJ10pLnRoZW4oKCkgPT4ge1xuICAgICAgICAgICAgICAgIC8vIG9ubHkgc2hvdyB0aGUgbG9naW4gZGlhbG9nLCBpZiB0aGUgdXNlciBoYXNuJ3QgbG9nZ2VkIGluIHlldFxuICAgICAgICAgICAgICAgIGlmICghYWNjb3VudCkge1xuICAgICAgICAgICAgICAgICAgICB0aGlzLmxvZ2luTW9kYWxTZXJ2aWNlLm9wZW4oKTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9KTtcbiAgICAgICAgICAgIHJldHVybiBmYWxzZTtcbiAgICAgICAgfSkpO1xuICAgIH1cbn1cblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL34vdHNsaW50LWxvYWRlciEuL3NyYy9tYWluL3dlYmFwcC9hcHAvc2hhcmVkL2F1dGgvdXNlci1yb3V0ZS1hY2Nlc3Mtc2VydmljZS50cyIsImV4cG9ydCBjb25zdCBJVEVNU19QRVJfUEFHRSA9IDIwO1xuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vfi90c2xpbnQtbG9hZGVyIS4vc3JjL21haW4vd2ViYXBwL2FwcC9zaGFyZWQvY29uc3RhbnRzL3BhZ2luYXRpb24uY29uc3RhbnRzLnRzIiwiZXhwb3J0ICogZnJvbSAnLi9jb25zdGFudHMvcGFnaW5hdGlvbi5jb25zdGFudHMnO1xuZXhwb3J0ICogZnJvbSAnLi9hbGVydC9hbGVydC5jb21wb25lbnQnO1xuZXhwb3J0ICogZnJvbSAnLi9hbGVydC9hbGVydC1lcnJvci5jb21wb25lbnQnO1xuZXhwb3J0ICogZnJvbSAnLi9hdXRoL2NzcmYuc2VydmljZSc7XG5leHBvcnQgKiBmcm9tICcuL2F1dGgvc3RhdGUtc3RvcmFnZS5zZXJ2aWNlJztcbmV4cG9ydCAqIGZyb20gJy4vYXV0aC9hY2NvdW50LnNlcnZpY2UnO1xuZXhwb3J0ICogZnJvbSAnLi9hdXRoL2F1dGgtand0LnNlcnZpY2UnO1xuZXhwb3J0ICogZnJvbSAnLi9hdXRoL3ByaW5jaXBhbC5zZXJ2aWNlJztcbmV4cG9ydCAqIGZyb20gJy4vYXV0aC9oYXMtYW55LWF1dGhvcml0eS5kaXJlY3RpdmUnO1xuZXhwb3J0ICogZnJvbSAnLi9hdXRoL3VzZXItcm91dGUtYWNjZXNzLXNlcnZpY2UnO1xuZXhwb3J0ICogZnJvbSAnLi9sYW5ndWFnZS9sYW5ndWFnZS5jb25zdGFudHMnO1xuZXhwb3J0ICogZnJvbSAnLi9sYW5ndWFnZS9sYW5ndWFnZS5oZWxwZXInO1xuZXhwb3J0ICogZnJvbSAnLi9sYW5ndWFnZS9sYW5ndWFnZS5waXBlJztcbmV4cG9ydCAqIGZyb20gJy4vdHJhY2tlci90cmFja2VyLnNlcnZpY2UnO1xuZXhwb3J0ICogZnJvbSAnLi9sb2dpbi9sb2dpbi5jb21wb25lbnQnO1xuZXhwb3J0ICogZnJvbSAnLi9sb2dpbi9sb2dpbi5zZXJ2aWNlJztcbmV4cG9ydCAqIGZyb20gJy4vbG9naW4vbG9naW4tbW9kYWwuc2VydmljZSc7XG5leHBvcnQgKiBmcm9tICcuL3VzZXIvYWNjb3VudC5tb2RlbCc7XG5leHBvcnQgKiBmcm9tICcuL3VzZXIvdXNlci5tb2RlbCc7XG5leHBvcnQgKiBmcm9tICcuL3VzZXIvdXNlci5zZXJ2aWNlJztcbmV4cG9ydCAqIGZyb20gJy4vbW9kZWwvcmVzcG9uc2Utd3JhcHBlci5tb2RlbCc7XG5leHBvcnQgKiBmcm9tICcuL21vZGVsL3JlcXVlc3QtdXRpbCc7XG5leHBvcnQgKiBmcm9tICcuL3NvY2lhbC9zb2NpYWwuc2VydmljZSc7XG5leHBvcnQgKiBmcm9tICcuL3NvY2lhbC9zb2NpYWwuY29tcG9uZW50JztcbmV4cG9ydCAqIGZyb20gJy4vc2hhcmVkLWxpYnMubW9kdWxlJztcbmV4cG9ydCAqIGZyb20gJy4vc2hhcmVkLWNvbW1vbi5tb2R1bGUnO1xuZXhwb3J0ICogZnJvbSAnLi9zaGFyZWQubW9kdWxlJztcblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL34vdHNsaW50LWxvYWRlciEuL3NyYy9tYWluL3dlYmFwcC9hcHAvc2hhcmVkL2luZGV4LnRzIiwiLypcbiAgICBMYW5ndWFnZXMgY29kZXMgYXJlIElTT182MzktMSBjb2Rlcywgc2VlIGh0dHA6Ly9lbi53aWtpcGVkaWEub3JnL3dpa2kvTGlzdF9vZl9JU09fNjM5LTFfY29kZXNcbiAgICBUaGV5IGFyZSB3cml0dGVuIGluIEVuZ2xpc2ggdG8gYXZvaWQgY2hhcmFjdGVyIGVuY29kaW5nIGlzc3VlcyAobm90IGEgcGVyZmVjdCBzb2x1dGlvbilcbiovXG5leHBvcnQgY29uc3QgTEFOR1VBR0VTOiBzdHJpbmdbXSA9IFtcbiAgICAnZGUnLFxuICAgICdlbidcbiAgICAvLyBqaGlwc3Rlci1uZWVkbGUtaTE4bi1sYW5ndWFnZS1jb25zdGFudCAtIEpIaXBzdGVyIHdpbGwgYWRkL3JlbW92ZSBsYW5ndWFnZXMgaW4gdGhpcyBhcnJheVxuXTtcblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL34vdHNsaW50LWxvYWRlciEuL3NyYy9tYWluL3dlYmFwcC9hcHAvc2hhcmVkL2xhbmd1YWdlL2xhbmd1YWdlLmNvbnN0YW50cy50cyIsImltcG9ydCB7IEluamVjdGFibGUgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IFRpdGxlIH0gZnJvbSAnQGFuZ3VsYXIvcGxhdGZvcm0tYnJvd3Nlcic7XG5pbXBvcnQgeyBSb3V0ZXIsIEFjdGl2YXRlZFJvdXRlU25hcHNob3QgfSBmcm9tICdAYW5ndWxhci9yb3V0ZXInO1xuaW1wb3J0IHsgVHJhbnNsYXRlU2VydmljZSwgVHJhbnNsYXRpb25DaGFuZ2VFdmVudCwgTGFuZ0NoYW5nZUV2ZW50IH0gZnJvbSAnbmcyLXRyYW5zbGF0ZS9uZzItdHJhbnNsYXRlJztcblxuaW1wb3J0IHsgTEFOR1VBR0VTIH0gZnJvbSAnLi9sYW5ndWFnZS5jb25zdGFudHMnO1xuXG5ASW5qZWN0YWJsZSgpXG5leHBvcnQgY2xhc3MgSmhpTGFuZ3VhZ2VIZWxwZXIge1xuXG4gICAgY29uc3RydWN0b3IocHJpdmF0ZSB0cmFuc2xhdGVTZXJ2aWNlOiBUcmFuc2xhdGVTZXJ2aWNlLCBwcml2YXRlIHRpdGxlU2VydmljZTogVGl0bGUsIHByaXZhdGUgcm91dGVyOiBSb3V0ZXIpIHtcbiAgICAgICAgdGhpcy5pbml0KCk7XG4gICAgfVxuXG4gICAgZ2V0QWxsKCk6IFByb21pc2U8YW55PiB7XG4gICAgICAgIHJldHVybiBQcm9taXNlLnJlc29sdmUoTEFOR1VBR0VTKTtcbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiBVcGRhdGUgdGhlIHdpbmRvdyB0aXRsZSB1c2luZyBwYXJhbXMgaW4gdGhlIGZvbGxvd2luZ1xuICAgICAqIG9yZGVyOlxuICAgICAqIDEuIHRpdGxlS2V5IHBhcmFtZXRlclxuICAgICAqIDIuICRzdGF0ZS4kY3VycmVudC5kYXRhLnBhZ2VUaXRsZSAoY3VycmVudCBzdGF0ZSBwYWdlIHRpdGxlKVxuICAgICAqIDMuICdnbG9iYWwudGl0bGUnXG4gICAgICovXG4gICAgdXBkYXRlVGl0bGUodGl0bGVLZXk/OiBzdHJpbmcpIHtcbiAgICAgICAgaWYgKCF0aXRsZUtleSkge1xuICAgICAgICAgICAgIHRpdGxlS2V5ID0gdGhpcy5nZXRQYWdlVGl0bGUodGhpcy5yb3V0ZXIucm91dGVyU3RhdGUuc25hcHNob3Qucm9vdCk7XG4gICAgICAgIH1cblxuICAgICAgICB0aGlzLnRyYW5zbGF0ZVNlcnZpY2UuZ2V0KHRpdGxlS2V5KS5zdWJzY3JpYmUoKHRpdGxlKSA9PiB7XG4gICAgICAgICAgICB0aGlzLnRpdGxlU2VydmljZS5zZXRUaXRsZSh0aXRsZSk7XG4gICAgICAgIH0pO1xuICAgIH1cblxuICAgIHByaXZhdGUgaW5pdCgpIHtcbiAgICAgICAgdGhpcy50cmFuc2xhdGVTZXJ2aWNlLm9uVHJhbnNsYXRpb25DaGFuZ2Uuc3Vic2NyaWJlKChldmVudDogVHJhbnNsYXRpb25DaGFuZ2VFdmVudCkgPT4ge1xuICAgICAgICAgICAgdGhpcy51cGRhdGVUaXRsZSgpO1xuICAgICAgICB9KTtcblxuICAgICAgICB0aGlzLnRyYW5zbGF0ZVNlcnZpY2Uub25MYW5nQ2hhbmdlLnN1YnNjcmliZSgoZXZlbnQ6IExhbmdDaGFuZ2VFdmVudCkgPT4ge1xuICAgICAgICAgICAgdGhpcy51cGRhdGVUaXRsZSgpO1xuICAgICAgICB9KTtcbiAgICB9XG5cbiAgICBwcml2YXRlIGdldFBhZ2VUaXRsZShyb3V0ZVNuYXBzaG90OiBBY3RpdmF0ZWRSb3V0ZVNuYXBzaG90KSB7XG4gICAgICAgIGxldCB0aXRsZTogc3RyaW5nID0gKHJvdXRlU25hcHNob3QuZGF0YSAmJiByb3V0ZVNuYXBzaG90LmRhdGFbJ3BhZ2VUaXRsZSddKSA/IHJvdXRlU25hcHNob3QuZGF0YVsncGFnZVRpdGxlJ10gOiAncGFja2V0QXBwJztcbiAgICAgICAgaWYgKHJvdXRlU25hcHNob3QuZmlyc3RDaGlsZCkge1xuICAgICAgICAgICAgdGl0bGUgPSB0aGlzLmdldFBhZ2VUaXRsZShyb3V0ZVNuYXBzaG90LmZpcnN0Q2hpbGQpIHx8IHRpdGxlO1xuICAgICAgICB9XG4gICAgICAgIHJldHVybiB0aXRsZTtcbiAgICB9XG59XG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9+L3RzbGludC1sb2FkZXIhLi9zcmMvbWFpbi93ZWJhcHAvYXBwL3NoYXJlZC9sYW5ndWFnZS9sYW5ndWFnZS5oZWxwZXIudHMiLCJpbXBvcnQgeyBQaXBlLCBQaXBlVHJhbnNmb3JtIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5cbkBQaXBlKHtuYW1lOiAnZmluZExhbmd1YWdlRnJvbUtleSd9KVxuZXhwb3J0IGNsYXNzIEZpbmRMYW5ndWFnZUZyb21LZXlQaXBlIGltcGxlbWVudHMgUGlwZVRyYW5zZm9ybSB7XG4gICAgcHJpdmF0ZSBsYW5ndWFnZXM6IGFueSA9IHtcbiAgICAgICAgJ2NhJzogJ0NhdGFsw6AnLFxuICAgICAgICAnY3MnOiAnxIxlc2vDvScsXG4gICAgICAgICdkYSc6ICdEYW5zaycsXG4gICAgICAgICdkZSc6ICdEZXV0c2NoJyxcbiAgICAgICAgJ2VsJzogJ86VzrvOu863zr3Ouc66zqwnLFxuICAgICAgICAnZW4nOiAnRW5nbGlzaCcsXG4gICAgICAgICdlcyc6ICdFc3Bhw7FvbCcsXG4gICAgICAgICdldCc6ICdFZXN0aScsXG4gICAgICAgICdmcic6ICdGcmFuw6dhaXMnLFxuICAgICAgICAnZ2wnOiAnR2FsZWdvJyxcbiAgICAgICAgJ2h1JzogJ01hZ3lhcicsXG4gICAgICAgICdoaSc6ICfgpLngpL/gpILgpKbgpYAnLFxuICAgICAgICAnaHknOiAn1YDVodW11aXWgNWl1bYnLFxuICAgICAgICAnaXQnOiAnSXRhbGlhbm8nLFxuICAgICAgICAnamEnOiAn5pel5pys6KqeJyxcbiAgICAgICAgJ2tvJzogJ+2VnOq1reyWtCcsXG4gICAgICAgICdtcic6ICfgpK7gpLDgpL7gpKDgpYAnLFxuICAgICAgICAnbmwnOiAnTmVkZXJsYW5kcycsXG4gICAgICAgICdwbCc6ICdQb2xza2knLFxuICAgICAgICAncHQtYnInOiAnUG9ydHVndcOqcyAoQnJhc2lsKScsXG4gICAgICAgICdwdC1wdCc6ICdQb3J0dWd1w6pzJyxcbiAgICAgICAgJ3JvJzogJ1JvbcOibsSDJyxcbiAgICAgICAgJ3J1JzogJ9Cg0YPRgdGB0LrQuNC5JyxcbiAgICAgICAgJ3NrJzogJ1Nsb3ZlbnNrw70nLFxuICAgICAgICAnc3InOiAnU3Jwc2tpJyxcbiAgICAgICAgJ3N2JzogJ1N2ZW5za2EnLFxuICAgICAgICAndGEnOiAn4K6k4K6u4K6/4K604K+NJyxcbiAgICAgICAgJ3RoJzogJ+C5hOC4l+C4oicsXG4gICAgICAgICd0cic6ICdUw7xya8OnZScsXG4gICAgICAgICd2aSc6ICdUaeG6v25nIFZp4buHdCcsXG4gICAgICAgICd6aC1jbic6ICfkuK3mlofvvIjnroDkvZPvvIknLFxuICAgICAgICAnemgtdHcnOiAn57mB6auU5Lit5paHJ1xuICAgIH07XG4gICAgdHJhbnNmb3JtKGxhbmc6IHN0cmluZyk6IHN0cmluZyB7XG4gICAgICAgIHJldHVybiB0aGlzLmxhbmd1YWdlc1tsYW5nXTtcbiAgICB9XG59XG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9+L3RzbGludC1sb2FkZXIhLi9zcmMvbWFpbi93ZWJhcHAvYXBwL3NoYXJlZC9sYW5ndWFnZS9sYW5ndWFnZS5waXBlLnRzIiwiaW1wb3J0IHsgSW5qZWN0YWJsZSB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgTmdiTW9kYWwsIE5nYk1vZGFsUmVmIH0gZnJvbSAnQG5nLWJvb3RzdHJhcC9uZy1ib290c3RyYXAnO1xuXG5pbXBvcnQgeyBKaGlMb2dpbk1vZGFsQ29tcG9uZW50IH0gZnJvbSAnLi9sb2dpbi5jb21wb25lbnQnO1xuXG5ASW5qZWN0YWJsZSgpXG5leHBvcnQgY2xhc3MgTG9naW5Nb2RhbFNlcnZpY2Uge1xuICAgIHByaXZhdGUgaXNPcGVuID0gZmFsc2U7XG4gICAgY29uc3RydWN0b3IoXG4gICAgICAgIHByaXZhdGUgbW9kYWxTZXJ2aWNlOiBOZ2JNb2RhbCxcbiAgICApIHt9XG5cbiAgICBvcGVuKCk6IE5nYk1vZGFsUmVmIHtcbiAgICAgICAgaWYgKHRoaXMuaXNPcGVuKSB7XG4gICAgICAgICAgICByZXR1cm47XG4gICAgICAgIH1cbiAgICAgICAgdGhpcy5pc09wZW4gPSB0cnVlO1xuICAgICAgICBjb25zdCBtb2RhbFJlZiA9IHRoaXMubW9kYWxTZXJ2aWNlLm9wZW4oSmhpTG9naW5Nb2RhbENvbXBvbmVudCwge1xuICAgICAgICAgICAgY29udGFpbmVyOiAnbmF2J1xuICAgICAgICB9KTtcbiAgICAgICAgbW9kYWxSZWYucmVzdWx0LnRoZW4oKHJlc3VsdCkgPT4ge1xuICAgICAgICAgICAgdGhpcy5pc09wZW4gPSBmYWxzZTtcbiAgICAgICAgfSwgKHJlYXNvbikgPT4ge1xuICAgICAgICAgICAgdGhpcy5pc09wZW4gPSBmYWxzZTtcbiAgICAgICAgfSk7XG4gICAgICAgIHJldHVybiBtb2RhbFJlZjtcbiAgICB9XG59XG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9+L3RzbGludC1sb2FkZXIhLi9zcmMvbWFpbi93ZWJhcHAvYXBwL3NoYXJlZC9sb2dpbi9sb2dpbi1tb2RhbC5zZXJ2aWNlLnRzIiwibW9kdWxlLmV4cG9ydHMgPSBcIjxkaXYgY2xhc3M9XFxcIm1vZGFsLWhlYWRlclxcXCI+IDxoNCBjbGFzcz1cXFwibW9kYWwtdGl0bGVcXFwiIGpoaVRyYW5zbGF0ZT1cXFwibG9naW4udGl0bGVcXFwiPlNpZ24gaW48L2g0PiA8YnV0dG9uIGFyaWEtbGFiZWw9XFxcIkNsb3NlXFxcIiBkYXRhLWRpc21pc3M9XFxcIm1vZGFsXFxcIiBjbGFzcz1cXFwiY2xvc2VcXFwiIHR5cGU9XFxcImJ1dHRvblxcXCIgKGNsaWNrKT1cXFwiYWN0aXZlTW9kYWwuZGlzbWlzcygnY2xvc2VkJylcXFwiPjxzcGFuIGFyaWEtaGlkZGVuPVxcXCJ0cnVlXFxcIj54PC9zcGFuPiA8L2J1dHRvbj4gPC9kaXY+IDxkaXYgY2xhc3M9XFxcIm1vZGFsLWJvZHlcXFwiPiA8ZGl2IGNsYXNzPVxcXCJyb3dcXFwiPiA8ZGl2IGNsYXNzPVxcXCJjb2wtMTJcXFwiPiA8ZGl2IGNsYXNzPVxcXCJhbGVydCBhbGVydC1kYW5nZXJcXFwiICpuZ0lmPVxcXCJhdXRoZW50aWNhdGlvbkVycm9yXFxcIiBqaGlUcmFuc2xhdGU9XFxcImxvZ2luLm1lc3NhZ2VzLmVycm9yLmF1dGhlbnRpY2F0aW9uXFxcIj4gPHN0cm9uZz5GYWlsZWQgdG8gc2lnbiBpbiE8L3N0cm9uZz4gUGxlYXNlIGNoZWNrIHlvdXIgY3JlZGVudGlhbHMgYW5kIHRyeSBhZ2Fpbi4gPC9kaXY+IDwvZGl2PiA8ZGl2IGNsYXNzPVxcXCJjb2wtbWQtNlxcXCI+IDxmb3JtIGNsYXNzPVxcXCJmb3JtXFxcIiByb2xlPVxcXCJmb3JtXFxcIiAobmdTdWJtaXQpPVxcXCJsb2dpbigpXFxcIj4gPGRpdiBjbGFzcz1cXFwiZm9ybS1ncm91cFxcXCI+IDxsYWJlbCBmb3I9XFxcInVzZXJuYW1lXFxcIiBqaGlUcmFuc2xhdGU9XFxcImdsb2JhbC5mb3JtLnVzZXJuYW1lXFxcIj5Mb2dpbjwvbGFiZWw+IDxpbnB1dCB0eXBlPVxcXCJ0ZXh0XFxcIiBjbGFzcz1cXFwiZm9ybS1jb250cm9sXFxcIiBuYW1lPVxcXCJ1c2VybmFtZVxcXCIgaWQ9XFxcInVzZXJuYW1lXFxcIiBwbGFjZWhvbGRlcj1cXFwie3snZ2xvYmFsLmZvcm0udXNlcm5hbWUucGxhY2Vob2xkZXInIHwgdHJhbnNsYXRlfX1cXFwiIFsobmdNb2RlbCldPVxcXCJ1c2VybmFtZVxcXCI+IDwvZGl2PiA8ZGl2IGNsYXNzPVxcXCJmb3JtLWdyb3VwXFxcIj4gPGxhYmVsIGZvcj1cXFwicGFzc3dvcmRcXFwiIGpoaVRyYW5zbGF0ZT1cXFwibG9naW4uZm9ybS5wYXNzd29yZFxcXCI+UGFzc3dvcmQ8L2xhYmVsPiA8aW5wdXQgdHlwZT1cXFwicGFzc3dvcmRcXFwiIGNsYXNzPVxcXCJmb3JtLWNvbnRyb2xcXFwiIG5hbWU9XFxcInBhc3N3b3JkXFxcIiBpZD1cXFwicGFzc3dvcmRcXFwiIHBsYWNlaG9sZGVyPVxcXCJ7eydsb2dpbi5mb3JtLnBhc3N3b3JkLnBsYWNlaG9sZGVyJyB8IHRyYW5zbGF0ZX19XFxcIiBbKG5nTW9kZWwpXT1cXFwicGFzc3dvcmRcXFwiPiA8L2Rpdj4gPGRpdiBjbGFzcz1cXFwiZm9ybS1jaGVja1xcXCI+IDxsYWJlbCBjbGFzcz1cXFwiZm9ybS1jaGVjay1sYWJlbFxcXCIgZm9yPVxcXCJyZW1lbWJlck1lXFxcIj4gPGlucHV0IGNsYXNzPVxcXCJmb3JtLWNoZWNrLWlucHV0XFxcIiB0eXBlPVxcXCJjaGVja2JveFxcXCIgbmFtZT1cXFwicmVtZW1iZXJNZVxcXCIgaWQ9XFxcInJlbWVtYmVyTWVcXFwiIFsobmdNb2RlbCldPVxcXCJyZW1lbWJlck1lXFxcIiBjaGVja2VkPVxcXCJjaGVja2VkXFxcIj4gPHNwYW4gamhpVHJhbnNsYXRlPVxcXCJsb2dpbi5mb3JtLnJlbWVtYmVybWVcXFwiPlJlbWVtYmVyIG1lPC9zcGFuPiA8L2xhYmVsPiA8L2Rpdj4gPGJ1dHRvbiB0eXBlPVxcXCJzdWJtaXRcXFwiIGNsYXNzPVxcXCJidG4gYnRuLXByaW1hcnlcXFwiIGpoaVRyYW5zbGF0ZT1cXFwibG9naW4uZm9ybS5idXR0b25cXFwiPlNpZ24gaW48L2J1dHRvbj4gPC9mb3JtPiA8cD48L3A+IDxkaXYgY2xhc3M9XFxcImFsZXJ0IGFsZXJ0LXdhcm5pbmdcXFwiPiA8YSBjbGFzcz1cXFwiYWxlcnQtbGlua1xcXCIgKGNsaWNrKT1cXFwicmVxdWVzdFJlc2V0UGFzc3dvcmQoKVxcXCIgamhpVHJhbnNsYXRlPVxcXCJsb2dpbi5wYXNzd29yZC5mb3Jnb3RcXFwiPkRpZCB5b3UgZm9yZ2V0IHlvdXIgcGFzc3dvcmQ/PC9hPiA8L2Rpdj4gPGRpdiBjbGFzcz1cXFwiYWxlcnQgYWxlcnQtd2FybmluZ1xcXCI+IDxzcGFuIGpoaVRyYW5zbGF0ZT1cXFwiZ2xvYmFsLm1lc3NhZ2VzLmluZm8ucmVnaXN0ZXIubm9hY2NvdW50XFxcIj5Zb3UgZG9uJ3QgaGF2ZSBhbiBhY2NvdW50IHlldD88L3NwYW4+IDxhIGNsYXNzPVxcXCJhbGVydC1saW5rXFxcIiAoY2xpY2spPVxcXCJyZWdpc3RlcigpXFxcIiBqaGlUcmFuc2xhdGU9XFxcImdsb2JhbC5tZXNzYWdlcy5pbmZvLnJlZ2lzdGVyLmxpbmtcXFwiPlJlZ2lzdGVyIGEgbmV3IGFjY291bnQ8L2E+IDwvZGl2PiA8L2Rpdj4gPGRpdiBjbGFzcz1cXFwiY29sLW1kLTZcXFwiPiA8YnIvPiA8amhpLXNvY2lhbCBwcm92aWRlcj1cXFwiZ29vZ2xlXFxcIj48L2poaS1zb2NpYWw+IDxqaGktc29jaWFsIHByb3ZpZGVyPVxcXCJmYWNlYm9va1xcXCI+PC9qaGktc29jaWFsPiA8amhpLXNvY2lhbCBwcm92aWRlcj1cXFwidHdpdHRlclxcXCI+PC9qaGktc29jaWFsPiA8L2Rpdj4gPC9kaXY+IDwvZGl2PiBcIjtcblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL3NyYy9tYWluL3dlYmFwcC9hcHAvc2hhcmVkL2xvZ2luL2xvZ2luLmNvbXBvbmVudC5odG1sXG4vLyBtb2R1bGUgaWQgPSAuL3NyYy9tYWluL3dlYmFwcC9hcHAvc2hhcmVkL2xvZ2luL2xvZ2luLmNvbXBvbmVudC5odG1sXG4vLyBtb2R1bGUgY2h1bmtzID0gMCIsImltcG9ydCB7IENvbXBvbmVudCwgT25Jbml0LCBBZnRlclZpZXdJbml0LCBSZW5kZXJlciwgRWxlbWVudFJlZiB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgTmdiQWN0aXZlTW9kYWwgfSBmcm9tICdAbmctYm9vdHN0cmFwL25nLWJvb3RzdHJhcCc7XG5pbXBvcnQgeyBSb3V0ZXIgfSBmcm9tICdAYW5ndWxhci9yb3V0ZXInO1xuaW1wb3J0IHsgSmhpTGFuZ3VhZ2VTZXJ2aWNlLCBFdmVudE1hbmFnZXIgfSBmcm9tICduZy1qaGlwc3Rlcic7XG5cbmltcG9ydCB7IExvZ2luU2VydmljZSB9IGZyb20gJy4vbG9naW4uc2VydmljZSc7XG5pbXBvcnQgeyBTdGF0ZVN0b3JhZ2VTZXJ2aWNlIH0gZnJvbSAnLi4vYXV0aC9zdGF0ZS1zdG9yYWdlLnNlcnZpY2UnO1xuaW1wb3J0IHsgU29jaWFsU2VydmljZSB9IGZyb20gJy4uL3NvY2lhbC9zb2NpYWwuc2VydmljZSc7XG5cbkBDb21wb25lbnQoe1xuICAgIHNlbGVjdG9yOiAnamhpLWxvZ2luLW1vZGFsJyxcbiAgICB0ZW1wbGF0ZVVybDogJy4vbG9naW4uY29tcG9uZW50Lmh0bWwnXG59KVxuZXhwb3J0IGNsYXNzIEpoaUxvZ2luTW9kYWxDb21wb25lbnQgaW1wbGVtZW50cyBPbkluaXQsIEFmdGVyVmlld0luaXQge1xuICAgIGF1dGhlbnRpY2F0aW9uRXJyb3I6IGJvb2xlYW47XG4gICAgcGFzc3dvcmQ6IHN0cmluZztcbiAgICByZW1lbWJlck1lOiBib29sZWFuO1xuICAgIHVzZXJuYW1lOiBzdHJpbmc7XG4gICAgY3JlZGVudGlhbHM6IGFueTtcblxuICAgIGNvbnN0cnVjdG9yKFxuICAgICAgICBwcml2YXRlIGV2ZW50TWFuYWdlcjogRXZlbnRNYW5hZ2VyLFxuICAgICAgICBwcml2YXRlIGxhbmd1YWdlU2VydmljZTogSmhpTGFuZ3VhZ2VTZXJ2aWNlLFxuICAgICAgICBwcml2YXRlIGxvZ2luU2VydmljZTogTG9naW5TZXJ2aWNlLFxuICAgICAgICBwcml2YXRlIHN0YXRlU3RvcmFnZVNlcnZpY2U6IFN0YXRlU3RvcmFnZVNlcnZpY2UsXG4gICAgICAgIHByaXZhdGUgZWxlbWVudFJlZjogRWxlbWVudFJlZixcbiAgICAgICAgcHJpdmF0ZSByZW5kZXJlcjogUmVuZGVyZXIsXG4gICAgICAgIHByaXZhdGUgc29jaWFsU2VydmljZTogU29jaWFsU2VydmljZSxcbiAgICAgICAgcHJpdmF0ZSByb3V0ZXI6IFJvdXRlcixcbiAgICAgICAgcHVibGljIGFjdGl2ZU1vZGFsOiBOZ2JBY3RpdmVNb2RhbFxuICAgICkge1xuICAgICAgICB0aGlzLmNyZWRlbnRpYWxzID0ge307XG4gICAgfVxuXG4gICAgbmdPbkluaXQoKSB7XG4gICAgICAgIHRoaXMubGFuZ3VhZ2VTZXJ2aWNlLmFkZExvY2F0aW9uKCdsb2dpbicpO1xuICAgIH1cblxuICAgIG5nQWZ0ZXJWaWV3SW5pdCgpIHtcbiAgICAgICAgdGhpcy5yZW5kZXJlci5pbnZva2VFbGVtZW50TWV0aG9kKHRoaXMuZWxlbWVudFJlZi5uYXRpdmVFbGVtZW50LnF1ZXJ5U2VsZWN0b3IoJyN1c2VybmFtZScpLCAnZm9jdXMnLCBbXSk7XG4gICAgfVxuXG4gICAgY2FuY2VsKCkge1xuICAgICAgICB0aGlzLmNyZWRlbnRpYWxzID0ge1xuICAgICAgICAgICAgdXNlcm5hbWU6IG51bGwsXG4gICAgICAgICAgICBwYXNzd29yZDogbnVsbCxcbiAgICAgICAgICAgIHJlbWVtYmVyTWU6IHRydWVcbiAgICAgICAgfTtcbiAgICAgICAgdGhpcy5hdXRoZW50aWNhdGlvbkVycm9yID0gZmFsc2U7XG4gICAgICAgIHRoaXMuYWN0aXZlTW9kYWwuZGlzbWlzcygnY2FuY2VsJyk7XG4gICAgfVxuXG4gICAgbG9naW4oKSB7XG4gICAgICAgIHRoaXMubG9naW5TZXJ2aWNlLmxvZ2luKHtcbiAgICAgICAgICAgIHVzZXJuYW1lOiB0aGlzLnVzZXJuYW1lLFxuICAgICAgICAgICAgcGFzc3dvcmQ6IHRoaXMucGFzc3dvcmQsXG4gICAgICAgICAgICByZW1lbWJlck1lOiB0aGlzLnJlbWVtYmVyTWVcbiAgICAgICAgfSkudGhlbigoKSA9PiB7XG4gICAgICAgICAgICB0aGlzLmF1dGhlbnRpY2F0aW9uRXJyb3IgPSBmYWxzZTtcbiAgICAgICAgICAgIHRoaXMuYWN0aXZlTW9kYWwuZGlzbWlzcygnbG9naW4gc3VjY2VzcycpO1xuICAgICAgICAgICAgaWYgKHRoaXMucm91dGVyLnVybCA9PT0gJy9yZWdpc3RlcicgfHwgKC9hY3RpdmF0ZS8udGVzdCh0aGlzLnJvdXRlci51cmwpKSB8fFxuICAgICAgICAgICAgICAgIHRoaXMucm91dGVyLnVybCA9PT0gJy9maW5pc2hSZXNldCcgfHwgdGhpcy5yb3V0ZXIudXJsID09PSAnL3JlcXVlc3RSZXNldCcpIHtcbiAgICAgICAgICAgICAgICB0aGlzLnJvdXRlci5uYXZpZ2F0ZShbJyddKTtcbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgdGhpcy5ldmVudE1hbmFnZXIuYnJvYWRjYXN0KHtcbiAgICAgICAgICAgICAgICBuYW1lOiAnYXV0aGVudGljYXRpb25TdWNjZXNzJyxcbiAgICAgICAgICAgICAgICBjb250ZW50OiAnU2VuZGluZyBBdXRoZW50aWNhdGlvbiBTdWNjZXNzJ1xuICAgICAgICAgICAgfSk7XG5cbiAgICAgICAgICAgIC8vIC8vIHByZXZpb3VzU3RhdGUgd2FzIHNldCBpbiB0aGUgYXV0aEV4cGlyZWRJbnRlcmNlcHRvciBiZWZvcmUgYmVpbmcgcmVkaXJlY3RlZCB0byBsb2dpbiBtb2RhbC5cbiAgICAgICAgICAgIC8vIC8vIHNpbmNlIGxvZ2luIGlzIHN1Y2Nlc2Z1bCwgZ28gdG8gc3RvcmVkIHByZXZpb3VzU3RhdGUgYW5kIGNsZWFyIHByZXZpb3VzU3RhdGVcbiAgICAgICAgICAgIGNvbnN0IHJlZGlyZWN0ID0gdGhpcy5zdGF0ZVN0b3JhZ2VTZXJ2aWNlLmdldFVybCgpO1xuICAgICAgICAgICAgaWYgKHJlZGlyZWN0KSB7XG4gICAgICAgICAgICAgICAgdGhpcy5yb3V0ZXIubmF2aWdhdGUoW3JlZGlyZWN0XSk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH0pLmNhdGNoKCgpID0+IHtcbiAgICAgICAgICAgIHRoaXMuYXV0aGVudGljYXRpb25FcnJvciA9IHRydWU7XG4gICAgICAgIH0pO1xuICAgIH1cblxuICAgIHJlZ2lzdGVyKCkge1xuICAgICAgICB0aGlzLmFjdGl2ZU1vZGFsLmRpc21pc3MoJ3RvIHN0YXRlIHJlZ2lzdGVyJyk7XG4gICAgICAgIHRoaXMucm91dGVyLm5hdmlnYXRlKFsnL3JlZ2lzdGVyJ10pO1xuICAgIH1cblxuICAgIHJlcXVlc3RSZXNldFBhc3N3b3JkKCkge1xuICAgICAgICB0aGlzLmFjdGl2ZU1vZGFsLmRpc21pc3MoJ3RvIHN0YXRlIHJlcXVlc3RSZXNldCcpO1xuICAgICAgICB0aGlzLnJvdXRlci5uYXZpZ2F0ZShbJy9yZXNldCcsICdyZXF1ZXN0J10pO1xuICAgIH1cbn1cblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL34vdHNsaW50LWxvYWRlciEuL3NyYy9tYWluL3dlYmFwcC9hcHAvc2hhcmVkL2xvZ2luL2xvZ2luLmNvbXBvbmVudC50cyIsImltcG9ydCB7IEluamVjdGFibGUgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IEpoaUxhbmd1YWdlU2VydmljZSB9IGZyb20gJ25nLWpoaXBzdGVyJztcblxuaW1wb3J0IHsgUHJpbmNpcGFsIH0gZnJvbSAnLi4vYXV0aC9wcmluY2lwYWwuc2VydmljZSc7XG5pbXBvcnQgeyBBdXRoU2VydmVyUHJvdmlkZXIgfSBmcm9tICcuLi9hdXRoL2F1dGgtand0LnNlcnZpY2UnO1xuaW1wb3J0IHsgSmhpVHJhY2tlclNlcnZpY2UgfSBmcm9tICcuLi90cmFja2VyL3RyYWNrZXIuc2VydmljZSc7XG5cbkBJbmplY3RhYmxlKClcbmV4cG9ydCBjbGFzcyBMb2dpblNlcnZpY2Uge1xuXG4gICAgY29uc3RydWN0b3IoXG4gICAgICAgIHByaXZhdGUgbGFuZ3VhZ2VTZXJ2aWNlOiBKaGlMYW5ndWFnZVNlcnZpY2UsXG4gICAgICAgIHByaXZhdGUgcHJpbmNpcGFsOiBQcmluY2lwYWwsXG4gICAgICAgIHByaXZhdGUgdHJhY2tlclNlcnZpY2U6IEpoaVRyYWNrZXJTZXJ2aWNlLFxuICAgICAgICBwcml2YXRlIGF1dGhTZXJ2ZXJQcm92aWRlcjogQXV0aFNlcnZlclByb3ZpZGVyXG4gICAgKSB7fVxuXG4gICAgbG9naW4oY3JlZGVudGlhbHMsIGNhbGxiYWNrPykge1xuICAgICAgICBjb25zdCBjYiA9IGNhbGxiYWNrIHx8IGZ1bmN0aW9uKCkge307XG5cbiAgICAgICAgcmV0dXJuIG5ldyBQcm9taXNlKChyZXNvbHZlLCByZWplY3QpID0+IHtcbiAgICAgICAgICAgIHRoaXMuYXV0aFNlcnZlclByb3ZpZGVyLmxvZ2luKGNyZWRlbnRpYWxzKS5zdWJzY3JpYmUoKGRhdGEpID0+IHtcbiAgICAgICAgICAgICAgICB0aGlzLnByaW5jaXBhbC5pZGVudGl0eSh0cnVlKS50aGVuKChhY2NvdW50KSA9PiB7XG4gICAgICAgICAgICAgICAgICAgIC8vIEFmdGVyIHRoZSBsb2dpbiB0aGUgbGFuZ3VhZ2Ugd2lsbCBiZSBjaGFuZ2VkIHRvXG4gICAgICAgICAgICAgICAgICAgIC8vIHRoZSBsYW5ndWFnZSBzZWxlY3RlZCBieSB0aGUgdXNlciBkdXJpbmcgaGlzIHJlZ2lzdHJhdGlvblxuICAgICAgICAgICAgICAgICAgICBpZiAoYWNjb3VudCAhPT0gbnVsbCkge1xuICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5sYW5ndWFnZVNlcnZpY2UuY2hhbmdlTGFuZ3VhZ2UoYWNjb3VudC5sYW5nS2V5KTtcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICB0aGlzLnRyYWNrZXJTZXJ2aWNlLnNlbmRBY3Rpdml0eSgpO1xuICAgICAgICAgICAgICAgICAgICByZXNvbHZlKGRhdGEpO1xuICAgICAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgICAgIHJldHVybiBjYigpO1xuICAgICAgICAgICAgfSwgKGVycikgPT4ge1xuICAgICAgICAgICAgICAgIHRoaXMubG9nb3V0KCk7XG4gICAgICAgICAgICAgICAgcmVqZWN0KGVycik7XG4gICAgICAgICAgICAgICAgcmV0dXJuIGNiKGVycik7XG4gICAgICAgICAgICB9KTtcbiAgICAgICAgfSk7XG4gICAgfVxuXG4gICAgbG9naW5XaXRoVG9rZW4oand0LCByZW1lbWJlck1lKSB7XG4gICAgICAgIHJldHVybiB0aGlzLmF1dGhTZXJ2ZXJQcm92aWRlci5sb2dpbldpdGhUb2tlbihqd3QsIHJlbWVtYmVyTWUpO1xuICAgIH1cblxuICAgIGxvZ291dCgpIHtcbiAgICAgICAgdGhpcy5hdXRoU2VydmVyUHJvdmlkZXIubG9nb3V0KCkuc3Vic2NyaWJlKCk7XG4gICAgICAgIHRoaXMucHJpbmNpcGFsLmF1dGhlbnRpY2F0ZShudWxsKTtcbiAgICB9XG59XG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9+L3RzbGludC1sb2FkZXIhLi9zcmMvbWFpbi93ZWJhcHAvYXBwL3NoYXJlZC9sb2dpbi9sb2dpbi5zZXJ2aWNlLnRzIiwiaW1wb3J0IHsgVVJMU2VhcmNoUGFyYW1zLCBCYXNlUmVxdWVzdE9wdGlvbnMgfSBmcm9tICdAYW5ndWxhci9odHRwJztcblxuZXhwb3J0IGNvbnN0IGNyZWF0ZVJlcXVlc3RPcHRpb24gPSAocmVxPzogYW55KTogQmFzZVJlcXVlc3RPcHRpb25zID0+IHtcbiAgICBjb25zdCBvcHRpb25zOiBCYXNlUmVxdWVzdE9wdGlvbnMgPSBuZXcgQmFzZVJlcXVlc3RPcHRpb25zKCk7XG4gICAgaWYgKHJlcSkge1xuICAgICAgICBjb25zdCBwYXJhbXM6IFVSTFNlYXJjaFBhcmFtcyA9IG5ldyBVUkxTZWFyY2hQYXJhbXMoKTtcbiAgICAgICAgcGFyYW1zLnNldCgncGFnZScsIHJlcS5wYWdlKTtcbiAgICAgICAgcGFyYW1zLnNldCgnc2l6ZScsIHJlcS5zaXplKTtcbiAgICAgICAgaWYgKHJlcS5zb3J0KSB7XG4gICAgICAgICAgICBwYXJhbXMucGFyYW1zTWFwLnNldCgnc29ydCcsIHJlcS5zb3J0KTtcbiAgICAgICAgfVxuICAgICAgICBwYXJhbXMuc2V0KCdxdWVyeScsIHJlcS5xdWVyeSk7XG5cbiAgICAgICAgb3B0aW9ucy5zZWFyY2ggPSBwYXJhbXM7XG4gICAgfVxuICAgIHJldHVybiBvcHRpb25zO1xufTtcblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL34vdHNsaW50LWxvYWRlciEuL3NyYy9tYWluL3dlYmFwcC9hcHAvc2hhcmVkL21vZGVsL3JlcXVlc3QtdXRpbC50cyIsImltcG9ydCB7IEhlYWRlcnMgfSBmcm9tICdAYW5ndWxhci9odHRwJztcblxuZXhwb3J0IGNsYXNzIFJlc3BvbnNlV3JhcHBlciB7XG4gICAgY29uc3RydWN0b3IoXG4gICAgICAgIHB1YmxpYyBoZWFkZXJzOiBIZWFkZXJzLFxuICAgICAgICBwdWJsaWMganNvbjogYW55LFxuICAgICAgICBwdWJsaWMgc3RhdHVzOiBudW1iZXJcbiAgICApIHsgfVxufVxuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vfi90c2xpbnQtbG9hZGVyIS4vc3JjL21haW4vd2ViYXBwL2FwcC9zaGFyZWQvbW9kZWwvcmVzcG9uc2Utd3JhcHBlci5tb2RlbC50cyIsImltcG9ydCB7IE5nTW9kdWxlLCBTYW5pdGl6ZXIgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IFRpdGxlIH0gZnJvbSAnQGFuZ3VsYXIvcGxhdGZvcm0tYnJvd3Nlcic7XG5pbXBvcnQgeyBUcmFuc2xhdGVTZXJ2aWNlIH0gZnJvbSAnbmcyLXRyYW5zbGF0ZSc7XG5pbXBvcnQgeyBBbGVydFNlcnZpY2UgfSBmcm9tICduZy1qaGlwc3Rlcic7XG5pbXBvcnQgeyBXaW5kb3dSZWYgfSBmcm9tICcuL3RyYWNrZXIvd2luZG93LnNlcnZpY2UnO1xuaW1wb3J0IHtcbiAgICBQYWNrZXRBcHBTaGFyZWRMaWJzTW9kdWxlLFxuICAgIEpoaUxhbmd1YWdlSGVscGVyLFxuICAgIEZpbmRMYW5ndWFnZUZyb21LZXlQaXBlLFxuICAgIEpoaUFsZXJ0Q29tcG9uZW50LFxuICAgIEpoaUFsZXJ0RXJyb3JDb21wb25lbnRcbn0gZnJvbSAnLi8nO1xuXG5leHBvcnQgZnVuY3Rpb24gYWxlcnRTZXJ2aWNlUHJvdmlkZXIoc2FuaXRpemVyOiBTYW5pdGl6ZXIsIHRyYW5zbGF0ZVNlcnZpY2U6IFRyYW5zbGF0ZVNlcnZpY2UpIHtcbiAgICAvLyBzZXQgYmVsb3cgdG8gdHJ1ZSB0byBtYWtlIGFsZXJ0cyBsb29rIGxpa2UgdG9hc3RcbiAgICBjb25zdCBpc1RvYXN0ID0gZmFsc2U7XG4gICAgcmV0dXJuIG5ldyBBbGVydFNlcnZpY2Uoc2FuaXRpemVyLCBpc1RvYXN0LCB0cmFuc2xhdGVTZXJ2aWNlKTtcbn1cblxuQE5nTW9kdWxlKHtcbiAgICBpbXBvcnRzOiBbXG4gICAgICAgIFBhY2tldEFwcFNoYXJlZExpYnNNb2R1bGVcbiAgICBdLFxuICAgIGRlY2xhcmF0aW9uczogW1xuICAgICAgICBGaW5kTGFuZ3VhZ2VGcm9tS2V5UGlwZSxcbiAgICAgICAgSmhpQWxlcnRDb21wb25lbnQsXG4gICAgICAgIEpoaUFsZXJ0RXJyb3JDb21wb25lbnRcbiAgICBdLFxuICAgIHByb3ZpZGVyczogW1xuICAgICAgICBKaGlMYW5ndWFnZUhlbHBlcixcbiAgICAgICAgV2luZG93UmVmLFxuICAgICAgICB7XG4gICAgICAgICAgICBwcm92aWRlOiBBbGVydFNlcnZpY2UsXG4gICAgICAgICAgICB1c2VGYWN0b3J5OiBhbGVydFNlcnZpY2VQcm92aWRlcixcbiAgICAgICAgICAgIGRlcHM6IFtTYW5pdGl6ZXIsIFRyYW5zbGF0ZVNlcnZpY2VdXG4gICAgICAgIH0sXG4gICAgICAgIFRpdGxlXG4gICAgXSxcbiAgICBleHBvcnRzOiBbXG4gICAgICAgIFBhY2tldEFwcFNoYXJlZExpYnNNb2R1bGUsXG4gICAgICAgIEZpbmRMYW5ndWFnZUZyb21LZXlQaXBlLFxuICAgICAgICBKaGlBbGVydENvbXBvbmVudCxcbiAgICAgICAgSmhpQWxlcnRFcnJvckNvbXBvbmVudFxuICAgIF1cbn0pXG5leHBvcnQgY2xhc3MgUGFja2V0QXBwU2hhcmVkQ29tbW9uTW9kdWxlIHt9XG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9+L3RzbGludC1sb2FkZXIhLi9zcmMvbWFpbi93ZWJhcHAvYXBwL3NoYXJlZC9zaGFyZWQtY29tbW9uLm1vZHVsZS50cyIsImltcG9ydCB7IE5nTW9kdWxlIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBGb3Jtc01vZHVsZSB9IGZyb20gJ0Bhbmd1bGFyL2Zvcm1zJztcbmltcG9ydCB7IEh0dHBNb2R1bGUgfSBmcm9tICdAYW5ndWxhci9odHRwJztcbmltcG9ydCB7IENvbW1vbk1vZHVsZSB9IGZyb20gJ0Bhbmd1bGFyL2NvbW1vbic7XG5pbXBvcnQgeyBOZ2JNb2R1bGUgfSBmcm9tICdAbmctYm9vdHN0cmFwL25nLWJvb3RzdHJhcCc7XG5pbXBvcnQgeyBOZ0poaXBzdGVyTW9kdWxlIH0gZnJvbSAnbmctamhpcHN0ZXInO1xuaW1wb3J0IHsgSW5maW5pdGVTY3JvbGxNb2R1bGUgfSBmcm9tICduZ3gtaW5maW5pdGUtc2Nyb2xsJztcblxuQE5nTW9kdWxlKHtcbiAgICBpbXBvcnRzOiBbXG4gICAgICAgIE5nYk1vZHVsZS5mb3JSb290KCksXG4gICAgICAgIE5nSmhpcHN0ZXJNb2R1bGUuZm9yUm9vdCh7XG4gICAgICAgICAgICBpMThuRW5hYmxlZDogdHJ1ZSxcbiAgICAgICAgICAgIGRlZmF1bHRJMThuTG9jYXRpb246ICdhbGwnLFxuICAgICAgICAgICAgZGVmYXVsdEkxOG5MYW5nOiAnZGUnXG4gICAgICAgIH0pLFxuICAgICAgICBJbmZpbml0ZVNjcm9sbE1vZHVsZVxuICAgIF0sXG4gICAgZXhwb3J0czogW1xuICAgICAgICBGb3Jtc01vZHVsZSxcbiAgICAgICAgSHR0cE1vZHVsZSxcbiAgICAgICAgQ29tbW9uTW9kdWxlLFxuICAgICAgICBOZ2JNb2R1bGUsXG4gICAgICAgIE5nSmhpcHN0ZXJNb2R1bGUsXG4gICAgICAgIEluZmluaXRlU2Nyb2xsTW9kdWxlXG4gICAgXVxufSlcbmV4cG9ydCBjbGFzcyBQYWNrZXRBcHBTaGFyZWRMaWJzTW9kdWxlIHt9XG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9+L3RzbGludC1sb2FkZXIhLi9zcmMvbWFpbi93ZWJhcHAvYXBwL3NoYXJlZC9zaGFyZWQtbGlicy5tb2R1bGUudHMiLCJpbXBvcnQgeyBOZ01vZHVsZSwgQ1VTVE9NX0VMRU1FTlRTX1NDSEVNQSB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgRGF0ZVBpcGUgfSBmcm9tICdAYW5ndWxhci9jb21tb24nO1xuXG5pbXBvcnQgeyBDb29raWVTZXJ2aWNlIH0gZnJvbSAnYW5ndWxhcjItY29va2llL3NlcnZpY2VzL2Nvb2tpZXMuc2VydmljZSc7XG5pbXBvcnQge1xuICAgIFBhY2tldEFwcFNoYXJlZExpYnNNb2R1bGUsXG4gICAgUGFja2V0QXBwU2hhcmVkQ29tbW9uTW9kdWxlLFxuICAgIENTUkZTZXJ2aWNlLFxuICAgIEF1dGhTZXJ2ZXJQcm92aWRlcixcbiAgICBBY2NvdW50U2VydmljZSxcbiAgICBVc2VyU2VydmljZSxcbiAgICBTdGF0ZVN0b3JhZ2VTZXJ2aWNlLFxuICAgIExvZ2luU2VydmljZSxcbiAgICBMb2dpbk1vZGFsU2VydmljZSxcbiAgICBQcmluY2lwYWwsXG4gICAgSmhpVHJhY2tlclNlcnZpY2UsXG4gICAgSGFzQW55QXV0aG9yaXR5RGlyZWN0aXZlLFxuICAgIEpoaVNvY2lhbENvbXBvbmVudCxcbiAgICBTb2NpYWxTZXJ2aWNlLFxuICAgIEpoaUxvZ2luTW9kYWxDb21wb25lbnRcbn0gZnJvbSAnLi8nO1xuXG5ATmdNb2R1bGUoe1xuICAgIGltcG9ydHM6IFtcbiAgICAgICAgUGFja2V0QXBwU2hhcmVkTGlic01vZHVsZSxcbiAgICAgICAgUGFja2V0QXBwU2hhcmVkQ29tbW9uTW9kdWxlXG4gICAgXSxcbiAgICBkZWNsYXJhdGlvbnM6IFtcbiAgICAgICAgSmhpU29jaWFsQ29tcG9uZW50LFxuICAgICAgICBKaGlMb2dpbk1vZGFsQ29tcG9uZW50LFxuICAgICAgICBIYXNBbnlBdXRob3JpdHlEaXJlY3RpdmVcbiAgICBdLFxuICAgIHByb3ZpZGVyczogW1xuICAgICAgICBDb29raWVTZXJ2aWNlLFxuICAgICAgICBMb2dpblNlcnZpY2UsXG4gICAgICAgIExvZ2luTW9kYWxTZXJ2aWNlLFxuICAgICAgICBBY2NvdW50U2VydmljZSxcbiAgICAgICAgU3RhdGVTdG9yYWdlU2VydmljZSxcbiAgICAgICAgUHJpbmNpcGFsLFxuICAgICAgICBDU1JGU2VydmljZSxcbiAgICAgICAgSmhpVHJhY2tlclNlcnZpY2UsXG4gICAgICAgIEF1dGhTZXJ2ZXJQcm92aWRlcixcbiAgICAgICAgU29jaWFsU2VydmljZSxcbiAgICAgICAgVXNlclNlcnZpY2UsXG4gICAgICAgIERhdGVQaXBlXG4gICAgXSxcbiAgICBlbnRyeUNvbXBvbmVudHM6IFtKaGlMb2dpbk1vZGFsQ29tcG9uZW50XSxcbiAgICBleHBvcnRzOiBbXG4gICAgICAgIFBhY2tldEFwcFNoYXJlZENvbW1vbk1vZHVsZSxcbiAgICAgICAgSmhpU29jaWFsQ29tcG9uZW50LFxuICAgICAgICBKaGlMb2dpbk1vZGFsQ29tcG9uZW50LFxuICAgICAgICBIYXNBbnlBdXRob3JpdHlEaXJlY3RpdmUsXG4gICAgICAgIERhdGVQaXBlXG4gICAgXSxcbiAgICBzY2hlbWFzOiBbQ1VTVE9NX0VMRU1FTlRTX1NDSEVNQV1cblxufSlcbmV4cG9ydCBjbGFzcyBQYWNrZXRBcHBTaGFyZWRNb2R1bGUge31cblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL34vdHNsaW50LWxvYWRlciEuL3NyYy9tYWluL3dlYmFwcC9hcHAvc2hhcmVkL3NoYXJlZC5tb2R1bGUudHMiLCJtb2R1bGUuZXhwb3J0cyA9IFwiPGZvcm0gbmdOb0Zvcm0gYWN0aW9uPVxcXCJ7eyBwcm92aWRlclVSTCB9fVxcXCIgbWV0aG9kPVxcXCJQT1NUXFxcIj4gPGJ1dHRvbiB0eXBlPVxcXCJzdWJtaXRcXFwiIGNsYXNzPVxcXCJidG4gYnRuLWJsb2NrIGpoLWJ0bi1zb2NpYWwgamgtYnRuLXt7IHByb3ZpZGVyIH19XFxcIj4gPHNwYW4gamhpVHJhbnNsYXRlPVxcXCJzb2NpYWwuYnRuTGFiZWxcXFwiIHRyYW5zbGF0ZVZhbHVlcz1cXFwieyBsYWJlbDogJ3t7bGFiZWx9fScgfVxcXCI+U2lnbiBpbiB3aXRoIHt7IGxhYmVsIH19PC9zcGFuPiA8L2J1dHRvbj4gPGlucHV0IG5hbWU9XFxcInNjb3BlXFxcIiB0eXBlPVxcXCJoaWRkZW5cXFwiIHZhbHVlPVxcXCJ7e8KgcHJvdmlkZXJTZXR0aW5nIH19XFxcIi8+IDxpbnB1dCBuYW1lPVxcXCJfY3NyZlxcXCIgdHlwZT1cXFwiaGlkZGVuXFxcIiB2YWx1ZT1cXFwie3vCoGNzcmYgfX1cXFwiLz4gPC9mb3JtPiBcIjtcblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL3NyYy9tYWluL3dlYmFwcC9hcHAvc2hhcmVkL3NvY2lhbC9zb2NpYWwuY29tcG9uZW50Lmh0bWxcbi8vIG1vZHVsZSBpZCA9IC4vc3JjL21haW4vd2ViYXBwL2FwcC9zaGFyZWQvc29jaWFsL3NvY2lhbC5jb21wb25lbnQuaHRtbFxuLy8gbW9kdWxlIGNodW5rcyA9IDAiLCJpbXBvcnQgeyBDb21wb25lbnQsIElucHV0LCBPbkluaXQgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IFNvY2lhbFNlcnZpY2UgfSBmcm9tICcuL3NvY2lhbC5zZXJ2aWNlJztcbmltcG9ydCB7IENTUkZTZXJ2aWNlIH0gZnJvbSAnLi4vYXV0aC9jc3JmLnNlcnZpY2UnO1xuXG5AQ29tcG9uZW50KHtcbiAgICBzZWxlY3RvcjogJ2poaS1zb2NpYWwnLFxuICAgIHRlbXBsYXRlVXJsOiAnLi9zb2NpYWwuY29tcG9uZW50Lmh0bWwnXG59KVxuZXhwb3J0IGNsYXNzIEpoaVNvY2lhbENvbXBvbmVudCBpbXBsZW1lbnRzIE9uSW5pdCB7XG4gICAgQElucHV0KCkgcHJvdmlkZXI6IHN0cmluZztcbiAgICBsYWJlbDogc3RyaW5nO1xuICAgIHByb3ZpZGVyU2V0dGluZzogc3RyaW5nO1xuICAgIHByb3ZpZGVyVVJMOiBzdHJpbmc7XG4gICAgY3NyZjogc3RyaW5nO1xuXG4gICAgY29uc3RydWN0b3IoXG4gICAgICAgIHByaXZhdGUgY3NyZlNlcnZpY2U6IENTUkZTZXJ2aWNlLFxuICAgICAgICBwcml2YXRlIHNvY2lhbFNlcnZpY2U6IFNvY2lhbFNlcnZpY2VcbiAgICApIHt9XG5cbiAgICBuZ09uSW5pdCgpIHtcbiAgICAgICAgdGhpcy5sYWJlbCA9IHRoaXMucHJvdmlkZXIuY2hhckF0KDApLnRvVXBwZXJDYXNlKCkgKyB0aGlzLnByb3ZpZGVyLnNsaWNlKDEpO1xuICAgICAgICB0aGlzLnByb3ZpZGVyU2V0dGluZyA9IHRoaXMuc29jaWFsU2VydmljZS5nZXRQcm92aWRlclNldHRpbmcodGhpcy5wcm92aWRlcik7XG4gICAgICAgIHRoaXMucHJvdmlkZXJVUkwgPSB0aGlzLnNvY2lhbFNlcnZpY2UuZ2V0UHJvdmlkZXJVUkwodGhpcy5wcm92aWRlcik7XG4gICAgICAgIHRoaXMuY3NyZiA9IHRoaXMuY3NyZlNlcnZpY2UuZ2V0Q1NSRigpO1xuICAgIH1cbn1cblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL34vdHNsaW50LWxvYWRlciEuL3NyYy9tYWluL3dlYmFwcC9hcHAvc2hhcmVkL3NvY2lhbC9zb2NpYWwuY29tcG9uZW50LnRzIiwiaW1wb3J0IHsgSW5qZWN0YWJsZSB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuXG5ASW5qZWN0YWJsZSgpXG5leHBvcnQgY2xhc3MgU29jaWFsU2VydmljZSB7XG5cbiAgICBjb25zdHJ1Y3RvcigpIHt9XG5cbiAgICBnZXRQcm92aWRlclNldHRpbmcocHJvdmlkZXIpIHtcbiAgICAgICAgc3dpdGNoIChwcm92aWRlcikge1xuICAgICAgICAgICAgY2FzZSAnZ29vZ2xlJzogcmV0dXJuICdodHRwczovL3d3dy5nb29nbGVhcGlzLmNvbS9hdXRoL3VzZXJpbmZvLnByb2ZpbGUgaHR0cHM6Ly93d3cuZ29vZ2xlYXBpcy5jb20vYXV0aC91c2VyaW5mby5lbWFpbCc7XG4gICAgICAgICAgICBjYXNlICdmYWNlYm9vayc6IHJldHVybiAncHVibGljX3Byb2ZpbGUsZW1haWwnO1xuICAgICAgICAgICAgY2FzZSAndHdpdHRlcic6IHJldHVybiAnJztcbiAgICAgICAgICAgIC8vIGpoaXBzdGVyLW5lZWRsZS1hZGQtc29jaWFsLWJ1dHRvblxuICAgICAgICAgICAgZGVmYXVsdDogcmV0dXJuICdQcm92aWRlciBzZXR0aW5nIG5vdCBkZWZpbmVkJztcbiAgICAgICAgfVxuICAgIH1cblxuICAgIGdldFByb3ZpZGVyVVJMKHByb3ZpZGVyKSB7XG4gICAgICAgIHJldHVybiAnc2lnbmluLycgKyBwcm92aWRlcjtcbiAgICB9XG59XG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9+L3RzbGludC1sb2FkZXIhLi9zcmMvbWFpbi93ZWJhcHAvYXBwL3NoYXJlZC9zb2NpYWwvc29jaWFsLnNlcnZpY2UudHMiLCJpbXBvcnQgeyBJbmplY3RhYmxlLCBJbmplY3QgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IFJvdXRlciwgTmF2aWdhdGlvbkVuZCB9IGZyb20gJ0Bhbmd1bGFyL3JvdXRlcic7XG5pbXBvcnQgeyBPYnNlcnZhYmxlLCBPYnNlcnZlciwgU3Vic2NyaXB0aW9uIH0gZnJvbSAncnhqcy9SeCc7XG5cbmltcG9ydCB7IENTUkZTZXJ2aWNlIH0gZnJvbSAnLi4vYXV0aC9jc3JmLnNlcnZpY2UnO1xuaW1wb3J0IHsgV2luZG93UmVmIH0gZnJvbSAnLi93aW5kb3cuc2VydmljZSc7XG5pbXBvcnQgeyBBdXRoU2VydmVyUHJvdmlkZXIgfSBmcm9tICcuLi9hdXRoL2F1dGgtand0LnNlcnZpY2UnO1xuXG5pbXBvcnQgKiBhcyBTb2NrSlMgZnJvbSAnc29ja2pzLWNsaWVudCc7XG5pbXBvcnQgKiBhcyBTdG9tcCBmcm9tICd3ZWJzdG9tcC1jbGllbnQnO1xuXG5ASW5qZWN0YWJsZSgpXG5leHBvcnQgY2xhc3MgSmhpVHJhY2tlclNlcnZpY2Uge1xuICAgIHN0b21wQ2xpZW50ID0gbnVsbDtcbiAgICBzdWJzY3JpYmVyID0gbnVsbDtcbiAgICBjb25uZWN0aW9uOiBQcm9taXNlPGFueT47XG4gICAgY29ubmVjdGVkUHJvbWlzZTogYW55O1xuICAgIGxpc3RlbmVyOiBPYnNlcnZhYmxlPGFueT47XG4gICAgbGlzdGVuZXJPYnNlcnZlcjogT2JzZXJ2ZXI8YW55PjtcbiAgICBhbHJlYWR5Q29ubmVjdGVkT25jZSA9IGZhbHNlO1xuICAgIHByaXZhdGUgc3Vic2NyaXB0aW9uOiBTdWJzY3JpcHRpb247XG5cbiAgICBjb25zdHJ1Y3RvcihcbiAgICAgICAgcHJpdmF0ZSByb3V0ZXI6IFJvdXRlcixcbiAgICAgICAgcHJpdmF0ZSBhdXRoU2VydmVyUHJvdmlkZXI6IEF1dGhTZXJ2ZXJQcm92aWRlcixcbiAgICAgICAgcHJpdmF0ZSAkd2luZG93OiBXaW5kb3dSZWYsXG4gICAgICAgIHByaXZhdGUgY3NyZlNlcnZpY2U6IENTUkZTZXJ2aWNlXG4gICAgKSB7XG4gICAgICAgIHRoaXMuY29ubmVjdGlvbiA9IHRoaXMuY3JlYXRlQ29ubmVjdGlvbigpO1xuICAgICAgICB0aGlzLmxpc3RlbmVyID0gdGhpcy5jcmVhdGVMaXN0ZW5lcigpO1xuICAgIH1cblxuICAgIGNvbm5lY3QoKSB7XG4gICAgICAgIGlmICh0aGlzLmNvbm5lY3RlZFByb21pc2UgPT09IG51bGwpIHtcbiAgICAgICAgICB0aGlzLmNvbm5lY3Rpb24gPSB0aGlzLmNyZWF0ZUNvbm5lY3Rpb24oKTtcbiAgICAgICAgfVxuICAgICAgICAvLyBidWlsZGluZyBhYnNvbHV0ZSBwYXRoIHNvIHRoYXQgd2Vic29ja2V0IGRvZXNuJ3QgZmFpbCB3aGVuIGRlcGxveWluZyB3aXRoIGEgY29udGV4dCBwYXRoXG4gICAgICAgIGNvbnN0IGxvYyA9IHRoaXMuJHdpbmRvdy5uYXRpdmVXaW5kb3cubG9jYXRpb247XG4gICAgICAgIGxldCB1cmw7XG4gICAgICAgIHVybCA9ICcvLycgKyBsb2MuaG9zdCArIGxvYy5wYXRobmFtZSArICd3ZWJzb2NrZXQvdHJhY2tlcic7XG4gICAgICAgIGNvbnN0IGF1dGhUb2tlbiA9IHRoaXMuYXV0aFNlcnZlclByb3ZpZGVyLmdldFRva2VuKCk7XG4gICAgICAgIGlmIChhdXRoVG9rZW4pIHtcbiAgICAgICAgICAgIHVybCArPSAnP2FjY2Vzc190b2tlbj0nICsgYXV0aFRva2VuO1xuICAgICAgICB9XG4gICAgICAgIGNvbnN0IHNvY2tldCA9IG5ldyBTb2NrSlModXJsKTtcbiAgICAgICAgdGhpcy5zdG9tcENsaWVudCA9IFN0b21wLm92ZXIoc29ja2V0KTtcbiAgICAgICAgY29uc3QgaGVhZGVycyA9IHt9O1xuICAgICAgICB0aGlzLnN0b21wQ2xpZW50LmNvbm5lY3QoaGVhZGVycywgKCkgPT4ge1xuICAgICAgICAgICAgdGhpcy5jb25uZWN0ZWRQcm9taXNlKCdzdWNjZXNzJyk7XG4gICAgICAgICAgICB0aGlzLmNvbm5lY3RlZFByb21pc2UgPSBudWxsO1xuICAgICAgICAgICAgdGhpcy5zZW5kQWN0aXZpdHkoKTtcbiAgICAgICAgICAgIGlmICghdGhpcy5hbHJlYWR5Q29ubmVjdGVkT25jZSkge1xuICAgICAgICAgICAgICAgIHRoaXMuc3Vic2NyaXB0aW9uID0gdGhpcy5yb3V0ZXIuZXZlbnRzLnN1YnNjcmliZSgoZXZlbnQpID0+IHtcbiAgICAgICAgICAgICAgICAgIGlmIChldmVudCBpbnN0YW5jZW9mIE5hdmlnYXRpb25FbmQpIHtcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5zZW5kQWN0aXZpdHkoKTtcbiAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB9KTtcbiAgICAgICAgICAgICAgICB0aGlzLmFscmVhZHlDb25uZWN0ZWRPbmNlID0gdHJ1ZTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfSk7XG4gICAgfVxuXG4gICAgZGlzY29ubmVjdCgpIHtcbiAgICAgICAgaWYgKHRoaXMuc3RvbXBDbGllbnQgIT09IG51bGwpIHtcbiAgICAgICAgICAgIHRoaXMuc3RvbXBDbGllbnQuZGlzY29ubmVjdCgpO1xuICAgICAgICAgICAgdGhpcy5zdG9tcENsaWVudCA9IG51bGw7XG4gICAgICAgIH1cbiAgICAgICAgaWYgKHRoaXMuc3Vic2NyaXB0aW9uKSB7XG4gICAgICAgICAgICB0aGlzLnN1YnNjcmlwdGlvbi51bnN1YnNjcmliZSgpO1xuICAgICAgICAgICAgdGhpcy5zdWJzY3JpcHRpb24gPSBudWxsO1xuICAgICAgICB9XG4gICAgICAgIHRoaXMuYWxyZWFkeUNvbm5lY3RlZE9uY2UgPSBmYWxzZTtcbiAgICB9XG5cbiAgICByZWNlaXZlKCkge1xuICAgICAgICByZXR1cm4gdGhpcy5saXN0ZW5lcjtcbiAgICB9XG5cbiAgICBzZW5kQWN0aXZpdHkoKSB7XG4gICAgICAgIGlmICh0aGlzLnN0b21wQ2xpZW50ICE9PSBudWxsICYmIHRoaXMuc3RvbXBDbGllbnQuY29ubmVjdGVkKSB7XG4gICAgICAgICAgICB0aGlzLnN0b21wQ2xpZW50LnNlbmQoXG4gICAgICAgICAgICAgICAgJy90b3BpYy9hY3Rpdml0eScsIC8vIGRlc3RpbmF0aW9uXG4gICAgICAgICAgICAgICAgSlNPTi5zdHJpbmdpZnkoeydwYWdlJzogdGhpcy5yb3V0ZXIucm91dGVyU3RhdGUuc25hcHNob3QudXJsfSksIC8vIGJvZHlcbiAgICAgICAgICAgICAgICB7fSAvLyBoZWFkZXJcbiAgICAgICAgICAgICk7XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICBzdWJzY3JpYmUoKSB7XG4gICAgICAgIHRoaXMuY29ubmVjdGlvbi50aGVuKCgpID0+IHtcbiAgICAgICAgICAgIHRoaXMuc3Vic2NyaWJlciA9IHRoaXMuc3RvbXBDbGllbnQuc3Vic2NyaWJlKCcvdG9waWMvdHJhY2tlcicsIChkYXRhKSA9PiB7XG4gICAgICAgICAgICAgICAgdGhpcy5saXN0ZW5lck9ic2VydmVyLm5leHQoSlNPTi5wYXJzZShkYXRhLmJvZHkpKTtcbiAgICAgICAgICAgIH0pO1xuICAgICAgICB9KTtcbiAgICB9XG5cbiAgICB1bnN1YnNjcmliZSgpIHtcbiAgICAgICAgaWYgKHRoaXMuc3Vic2NyaWJlciAhPT0gbnVsbCkge1xuICAgICAgICAgICAgdGhpcy5zdWJzY3JpYmVyLnVuc3Vic2NyaWJlKCk7XG4gICAgICAgIH1cbiAgICAgICAgdGhpcy5saXN0ZW5lciA9IHRoaXMuY3JlYXRlTGlzdGVuZXIoKTtcbiAgICB9XG5cbiAgICBwcml2YXRlIGNyZWF0ZUxpc3RlbmVyKCk6IE9ic2VydmFibGU8YW55PiB7XG4gICAgICAgIHJldHVybiBuZXcgT2JzZXJ2YWJsZSgob2JzZXJ2ZXIpID0+IHtcbiAgICAgICAgICAgIHRoaXMubGlzdGVuZXJPYnNlcnZlciA9IG9ic2VydmVyO1xuICAgICAgICB9KTtcbiAgICB9XG5cbiAgICBwcml2YXRlIGNyZWF0ZUNvbm5lY3Rpb24oKTogUHJvbWlzZTxhbnk+IHtcbiAgICAgICAgcmV0dXJuIG5ldyBQcm9taXNlKChyZXNvbHZlLCByZWplY3QpID0+IHRoaXMuY29ubmVjdGVkUHJvbWlzZSA9IHJlc29sdmUpO1xuICAgIH1cbn1cblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL34vdHNsaW50LWxvYWRlciEuL3NyYy9tYWluL3dlYmFwcC9hcHAvc2hhcmVkL3RyYWNrZXIvdHJhY2tlci5zZXJ2aWNlLnRzIiwiaW1wb3J0IHsgSW5qZWN0YWJsZSB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuXG5mdW5jdGlvbiBfd2luZG93KCk6IGFueSB7XG4gICAvLyByZXR1cm4gdGhlIGdsb2JhbCBuYXRpdmUgYnJvd3NlciB3aW5kb3cgb2JqZWN0XG4gICByZXR1cm4gd2luZG93O1xufVxuXG5ASW5qZWN0YWJsZSgpXG5leHBvcnQgY2xhc3MgV2luZG93UmVmIHtcbiAgIGdldCBuYXRpdmVXaW5kb3coKTogYW55IHtcbiAgICAgIHJldHVybiBfd2luZG93KCk7XG4gICB9XG59XG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9+L3RzbGludC1sb2FkZXIhLi9zcmMvbWFpbi93ZWJhcHAvYXBwL3NoYXJlZC90cmFja2VyL3dpbmRvdy5zZXJ2aWNlLnRzIiwiZXhwb3J0IGNsYXNzIEFjY291bnQge1xuICAgIGNvbnN0cnVjdG9yKFxuICAgICAgICBwdWJsaWMgYWN0aXZhdGVkOiBib29sZWFuLFxuICAgICAgICBwdWJsaWMgYXV0aG9yaXRpZXM6IHN0cmluZ1tdLFxuICAgICAgICBwdWJsaWMgZW1haWw6IHN0cmluZyxcbiAgICAgICAgcHVibGljIGZpcnN0TmFtZTogc3RyaW5nLFxuICAgICAgICBwdWJsaWMgbGFuZ0tleTogc3RyaW5nLFxuICAgICAgICBwdWJsaWMgbGFzdE5hbWU6IHN0cmluZyxcbiAgICAgICAgcHVibGljIGxvZ2luOiBzdHJpbmcsXG4gICAgICAgIHB1YmxpYyBpbWFnZVVybDogc3RyaW5nXG4gICAgKSB7IH1cbn1cblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL34vdHNsaW50LWxvYWRlciEuL3NyYy9tYWluL3dlYmFwcC9hcHAvc2hhcmVkL3VzZXIvYWNjb3VudC5tb2RlbC50cyIsImV4cG9ydCBjbGFzcyBVc2VyIHtcbiAgICBwdWJsaWMgaWQ/OiBhbnk7XG4gICAgcHVibGljIGxvZ2luPzogc3RyaW5nO1xuICAgIHB1YmxpYyBmaXJzdE5hbWU/OiBzdHJpbmc7XG4gICAgcHVibGljIGxhc3ROYW1lPzogc3RyaW5nO1xuICAgIHB1YmxpYyBlbWFpbD86IHN0cmluZztcbiAgICBwdWJsaWMgYWN0aXZhdGVkPzogQm9vbGVhbjtcbiAgICBwdWJsaWMgbGFuZ0tleT86IHN0cmluZztcbiAgICBwdWJsaWMgYXV0aG9yaXRpZXM/OiBhbnlbXTtcbiAgICBwdWJsaWMgY3JlYXRlZEJ5Pzogc3RyaW5nO1xuICAgIHB1YmxpYyBjcmVhdGVkRGF0ZT86IERhdGU7XG4gICAgcHVibGljIGxhc3RNb2RpZmllZEJ5Pzogc3RyaW5nO1xuICAgIHB1YmxpYyBsYXN0TW9kaWZpZWREYXRlPzogRGF0ZTtcbiAgICBwdWJsaWMgcGFzc3dvcmQ/OiBzdHJpbmc7XG5cbiAgICBjb25zdHJ1Y3RvcihcbiAgICAgICAgaWQ/OiBhbnksXG4gICAgICAgIGxvZ2luPzogc3RyaW5nLFxuICAgICAgICBmaXJzdE5hbWU/OiBzdHJpbmcsXG4gICAgICAgIGxhc3ROYW1lPzogc3RyaW5nLFxuICAgICAgICBlbWFpbD86IHN0cmluZyxcbiAgICAgICAgYWN0aXZhdGVkPzogQm9vbGVhbixcbiAgICAgICAgbGFuZ0tleT86IHN0cmluZyxcbiAgICAgICAgYXV0aG9yaXRpZXM/OiBhbnlbXSxcbiAgICAgICAgY3JlYXRlZEJ5Pzogc3RyaW5nLFxuICAgICAgICBjcmVhdGVkRGF0ZT86IERhdGUsXG4gICAgICAgIGxhc3RNb2RpZmllZEJ5Pzogc3RyaW5nLFxuICAgICAgICBsYXN0TW9kaWZpZWREYXRlPzogRGF0ZSxcbiAgICAgICAgcGFzc3dvcmQ/OiBzdHJpbmdcbiAgICApIHtcbiAgICAgICAgdGhpcy5pZCA9IGlkID8gaWQgOiBudWxsO1xuICAgICAgICB0aGlzLmxvZ2luID0gbG9naW4gPyBsb2dpbiA6IG51bGw7XG4gICAgICAgIHRoaXMuZmlyc3ROYW1lID0gZmlyc3ROYW1lID8gZmlyc3ROYW1lIDogbnVsbDtcbiAgICAgICAgdGhpcy5sYXN0TmFtZSA9IGxhc3ROYW1lID8gbGFzdE5hbWUgOiBudWxsO1xuICAgICAgICB0aGlzLmVtYWlsID0gZW1haWwgPyBlbWFpbCA6IG51bGw7XG4gICAgICAgIHRoaXMuYWN0aXZhdGVkID0gYWN0aXZhdGVkID8gYWN0aXZhdGVkIDogZmFsc2U7XG4gICAgICAgIHRoaXMubGFuZ0tleSA9IGxhbmdLZXkgPyBsYW5nS2V5IDogbnVsbDtcbiAgICAgICAgdGhpcy5hdXRob3JpdGllcyA9IGF1dGhvcml0aWVzID8gYXV0aG9yaXRpZXMgOiBudWxsO1xuICAgICAgICB0aGlzLmNyZWF0ZWRCeSA9IGNyZWF0ZWRCeSA/IGNyZWF0ZWRCeSA6IG51bGw7XG4gICAgICAgIHRoaXMuY3JlYXRlZERhdGUgPSBjcmVhdGVkRGF0ZSA/IGNyZWF0ZWREYXRlIDogbnVsbDtcbiAgICAgICAgdGhpcy5sYXN0TW9kaWZpZWRCeSA9IGxhc3RNb2RpZmllZEJ5ID8gbGFzdE1vZGlmaWVkQnkgOiBudWxsO1xuICAgICAgICB0aGlzLmxhc3RNb2RpZmllZERhdGUgPSBsYXN0TW9kaWZpZWREYXRlID8gbGFzdE1vZGlmaWVkRGF0ZSA6IG51bGw7XG4gICAgICAgIHRoaXMucGFzc3dvcmQgPSBwYXNzd29yZCA/IHBhc3N3b3JkIDogbnVsbDtcbiAgICB9XG59XG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9+L3RzbGludC1sb2FkZXIhLi9zcmMvbWFpbi93ZWJhcHAvYXBwL3NoYXJlZC91c2VyL3VzZXIubW9kZWwudHMiLCJpbXBvcnQgeyBJbmplY3RhYmxlIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBIdHRwLCBSZXNwb25zZSB9IGZyb20gJ0Bhbmd1bGFyL2h0dHAnO1xuaW1wb3J0IHsgT2JzZXJ2YWJsZSB9IGZyb20gJ3J4anMvUngnO1xuXG5pbXBvcnQgeyBVc2VyIH0gZnJvbSAnLi91c2VyLm1vZGVsJztcbmltcG9ydCB7IFJlc3BvbnNlV3JhcHBlciB9IGZyb20gJy4uL21vZGVsL3Jlc3BvbnNlLXdyYXBwZXIubW9kZWwnO1xuaW1wb3J0IHsgY3JlYXRlUmVxdWVzdE9wdGlvbiB9IGZyb20gJy4uL21vZGVsL3JlcXVlc3QtdXRpbCc7XG5cbkBJbmplY3RhYmxlKClcbmV4cG9ydCBjbGFzcyBVc2VyU2VydmljZSB7XG4gICAgcHJpdmF0ZSByZXNvdXJjZVVybCA9ICdhcGkvdXNlcnMnO1xuXG4gICAgY29uc3RydWN0b3IocHJpdmF0ZSBodHRwOiBIdHRwKSB7IH1cblxuICAgIGNyZWF0ZSh1c2VyOiBVc2VyKTogT2JzZXJ2YWJsZTxSZXNwb25zZVdyYXBwZXI+IHtcbiAgICAgICAgcmV0dXJuIHRoaXMuaHR0cC5wb3N0KHRoaXMucmVzb3VyY2VVcmwsIHVzZXIpXG4gICAgICAgICAgICAubWFwKChyZXM6IFJlc3BvbnNlKSA9PiB0aGlzLmNvbnZlcnRSZXNwb25zZShyZXMpKTtcbiAgICB9XG5cbiAgICB1cGRhdGUodXNlcjogVXNlcik6IE9ic2VydmFibGU8UmVzcG9uc2VXcmFwcGVyPiB7XG4gICAgICAgIHJldHVybiB0aGlzLmh0dHAucHV0KHRoaXMucmVzb3VyY2VVcmwsIHVzZXIpXG4gICAgICAgICAgICAubWFwKChyZXM6IFJlc3BvbnNlKSA9PiB0aGlzLmNvbnZlcnRSZXNwb25zZShyZXMpKTtcbiAgICB9XG5cbiAgICBmaW5kKGxvZ2luOiBzdHJpbmcpOiBPYnNlcnZhYmxlPFVzZXI+IHtcbiAgICAgICAgcmV0dXJuIHRoaXMuaHR0cC5nZXQoYCR7dGhpcy5yZXNvdXJjZVVybH0vJHtsb2dpbn1gKS5tYXAoKHJlczogUmVzcG9uc2UpID0+IHJlcy5qc29uKCkpO1xuICAgIH1cblxuICAgIHF1ZXJ5KHJlcT86IGFueSk6IE9ic2VydmFibGU8UmVzcG9uc2VXcmFwcGVyPiB7XG4gICAgICAgIGNvbnN0IG9wdGlvbnMgPSBjcmVhdGVSZXF1ZXN0T3B0aW9uKHJlcSk7XG4gICAgICAgIHJldHVybiB0aGlzLmh0dHAuZ2V0KHRoaXMucmVzb3VyY2VVcmwsIG9wdGlvbnMpXG4gICAgICAgICAgICAubWFwKChyZXM6IFJlc3BvbnNlKSA9PiB0aGlzLmNvbnZlcnRSZXNwb25zZShyZXMpKTtcbiAgICB9XG5cbiAgICBkZWxldGUobG9naW46IHN0cmluZyk6IE9ic2VydmFibGU8UmVzcG9uc2U+IHtcbiAgICAgICAgcmV0dXJuIHRoaXMuaHR0cC5kZWxldGUoYCR7dGhpcy5yZXNvdXJjZVVybH0vJHtsb2dpbn1gKTtcbiAgICB9XG5cbiAgICBhdXRob3JpdGllcygpOiBPYnNlcnZhYmxlPHN0cmluZ1tdPiB7XG4gICAgICAgIHJldHVybiB0aGlzLmh0dHAuZ2V0KCdhcGkvdXNlcnMvYXV0aG9yaXRpZXMnKS5tYXAoKHJlczogUmVzcG9uc2UpID0+IHtcbiAgICAgICAgICAgIGNvbnN0IGpzb24gPSByZXMuanNvbigpO1xuICAgICAgICAgICAgcmV0dXJuIDxzdHJpbmdbXT4ganNvbjtcbiAgICAgICAgfSk7XG4gICAgfVxuXG4gICAgcHJpdmF0ZSBjb252ZXJ0UmVzcG9uc2UocmVzOiBSZXNwb25zZSk6IFJlc3BvbnNlV3JhcHBlciB7XG4gICAgICAgIGNvbnN0IGpzb25SZXNwb25zZSA9IHJlcy5qc29uKCk7XG4gICAgICAgIHJldHVybiBuZXcgUmVzcG9uc2VXcmFwcGVyKHJlcy5oZWFkZXJzLCBqc29uUmVzcG9uc2UsIHJlcy5zdGF0dXMpO1xuICAgIH1cbn1cblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL34vdHNsaW50LWxvYWRlciEuL3NyYy9tYWluL3dlYmFwcC9hcHAvc2hhcmVkL3VzZXIvdXNlci5zZXJ2aWNlLnRzIiwibW9kdWxlLmV4cG9ydHMgPSBfX3dlYnBhY2tfcHVibGljX3BhdGhfXyArIFwiY2E4NTRlNmQwNzg1YmE0YjlkNzE1MDQ5YzBiZGJjYjMucG5nXCI7XG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9zcmMvbWFpbi93ZWJhcHAvY29udGVudC9pbWFnZXMvaGlwc3Rlci5wbmdcbi8vIG1vZHVsZSBpZCA9IC4vc3JjL21haW4vd2ViYXBwL2NvbnRlbnQvaW1hZ2VzL2hpcHN0ZXIucG5nXG4vLyBtb2R1bGUgY2h1bmtzID0gMCIsIm1vZHVsZS5leHBvcnRzID0gX193ZWJwYWNrX3B1YmxpY19wYXRoX18gKyBcIjFjZDNhMWQ3ODJlODViYTM3Njc3YzFhMjA5OWJjMDAyLnBuZ1wiO1xuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vc3JjL21haW4vd2ViYXBwL2NvbnRlbnQvaW1hZ2VzL2hpcHN0ZXIyeC5wbmdcbi8vIG1vZHVsZSBpZCA9IC4vc3JjL21haW4vd2ViYXBwL2NvbnRlbnQvaW1hZ2VzL2hpcHN0ZXIyeC5wbmdcbi8vIG1vZHVsZSBjaHVua3MgPSAwIiwibW9kdWxlLmV4cG9ydHMgPSBfX3dlYnBhY2tfcHVibGljX3BhdGhfXyArIFwiYTMwZGViMjZiNGViMTUyMTQzMzAyMWUzMjZjYmNjMmMucG5nXCI7XG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9zcmMvbWFpbi93ZWJhcHAvY29udGVudC9pbWFnZXMvbG9nby1qaGlwc3Rlci5wbmdcbi8vIG1vZHVsZSBpZCA9IC4vc3JjL21haW4vd2ViYXBwL2NvbnRlbnQvaW1hZ2VzL2xvZ28tamhpcHN0ZXIucG5nXG4vLyBtb2R1bGUgY2h1bmtzID0gMCIsIm1vZHVsZS5leHBvcnRzID0gKF9fd2VicGFja19yZXF1aXJlX18oMikpKDEpO1xuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIGRlbGVnYXRlZCAuL25vZGVfbW9kdWxlcy9AYW5ndWxhci9jb3JlL0Bhbmd1bGFyL2NvcmUuZXM1LmpzIGZyb20gZGxsLXJlZmVyZW5jZSB2ZW5kb3Jcbi8vIG1vZHVsZSBpZCA9IDBcbi8vIG1vZHVsZSBjaHVua3MgPSAwIiwibW9kdWxlLmV4cG9ydHMgPSAoX193ZWJwYWNrX3JlcXVpcmVfXygyKSkoMjM2KTtcblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyBkZWxlZ2F0ZWQgLi9ub2RlX21vZHVsZXMvbmcyLXdlYnN0b3JhZ2UvZGlzdC9hcHAuanMgZnJvbSBkbGwtcmVmZXJlbmNlIHZlbmRvclxuLy8gbW9kdWxlIGlkID0gMTJcbi8vIG1vZHVsZSBjaHVua3MgPSAwIiwibW9kdWxlLmV4cG9ydHMgPSAoX193ZWJwYWNrX3JlcXVpcmVfXygyKSkoNzkpO1xuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIGRlbGVnYXRlZCAuL25vZGVfbW9kdWxlcy9uZzItdHJhbnNsYXRlL2luZGV4LmpzIGZyb20gZGxsLXJlZmVyZW5jZSB2ZW5kb3Jcbi8vIG1vZHVsZSBpZCA9IDEzXG4vLyBtb2R1bGUgY2h1bmtzID0gMCIsIm1vZHVsZS5leHBvcnRzID0gKF9fd2VicGFja19yZXF1aXJlX18oMikpKDApO1xuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIGRlbGVnYXRlZCAuL25vZGVfbW9kdWxlcy9yeGpzL09ic2VydmFibGUuanMgZnJvbSBkbGwtcmVmZXJlbmNlIHZlbmRvclxuLy8gbW9kdWxlIGlkID0gMTRcbi8vIG1vZHVsZSBjaHVua3MgPSAwIiwibW9kdWxlLmV4cG9ydHMgPSAoX193ZWJwYWNrX3JlcXVpcmVfXygyKSkoMTEpO1xuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIGRlbGVnYXRlZCAuL25vZGVfbW9kdWxlcy9AYW5ndWxhci9jb21tb24vQGFuZ3VsYXIvY29tbW9uLmVzNS5qcyBmcm9tIGRsbC1yZWZlcmVuY2UgdmVuZG9yXG4vLyBtb2R1bGUgaWQgPSAxNVxuLy8gbW9kdWxlIGNodW5rcyA9IDAiLCJtb2R1bGUuZXhwb3J0cyA9IChfX3dlYnBhY2tfcmVxdWlyZV9fKDIpKSgzMyk7XG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gZGVsZWdhdGVkIC4vbm9kZV9tb2R1bGVzL0Bhbmd1bGFyL3BsYXRmb3JtLWJyb3dzZXIvQGFuZ3VsYXIvcGxhdGZvcm0tYnJvd3Nlci5lczUuanMgZnJvbSBkbGwtcmVmZXJlbmNlIHZlbmRvclxuLy8gbW9kdWxlIGlkID0gMTZcbi8vIG1vZHVsZSBjaHVua3MgPSAwIiwibW9kdWxlLmV4cG9ydHMgPSAoX193ZWJwYWNrX3JlcXVpcmVfXygyKSkoMjMzKTtcblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyBkZWxlZ2F0ZWQgLi9ub2RlX21vZHVsZXMvYW5ndWxhcjItY29va2llL2NvcmUuanMgZnJvbSBkbGwtcmVmZXJlbmNlIHZlbmRvclxuLy8gbW9kdWxlIGlkID0gMThcbi8vIG1vZHVsZSBjaHVua3MgPSAwIiwibW9kdWxlLmV4cG9ydHMgPSAoX193ZWJwYWNrX3JlcXVpcmVfXygyKSkoOTkpO1xuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIGRlbGVnYXRlZCAuL25vZGVfbW9kdWxlcy9yeGpzL1J4LmpzIGZyb20gZGxsLXJlZmVyZW5jZSB2ZW5kb3Jcbi8vIG1vZHVsZSBpZCA9IDE5XG4vLyBtb2R1bGUgY2h1bmtzID0gMCIsIm1vZHVsZS5leHBvcnRzID0gKF9fd2VicGFja19yZXF1aXJlX18oMikpKDE5KTtcblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyBkZWxlZ2F0ZWQgLi9ub2RlX21vZHVsZXMvQGFuZ3VsYXIvZm9ybXMvQGFuZ3VsYXIvZm9ybXMuZXM1LmpzIGZyb20gZGxsLXJlZmVyZW5jZSB2ZW5kb3Jcbi8vIG1vZHVsZSBpZCA9IDIwXG4vLyBtb2R1bGUgY2h1bmtzID0gMCIsIm1vZHVsZS5leHBvcnRzID0gKF9fd2VicGFja19yZXF1aXJlX18oMikpKDIzMCk7XG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gZGVsZWdhdGVkIC4vbm9kZV9tb2R1bGVzL0Bhbmd1bGFyL3BsYXRmb3JtLWJyb3dzZXItZHluYW1pYy9AYW5ndWxhci9wbGF0Zm9ybS1icm93c2VyLWR5bmFtaWMuZXM1LmpzIGZyb20gZGxsLXJlZmVyZW5jZSB2ZW5kb3Jcbi8vIG1vZHVsZSBpZCA9IDIxXG4vLyBtb2R1bGUgY2h1bmtzID0gMCIsIm1vZHVsZS5leHBvcnRzID0gKF9fd2VicGFja19yZXF1aXJlX18oMikpKDIzNyk7XG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gZGVsZWdhdGVkIC4vbm9kZV9tb2R1bGVzL25neC1pbmZpbml0ZS1zY3JvbGwvbW9kdWxlcy9uZ3gtaW5maW5pdGUtc2Nyb2xsLmVzNS5qcyBmcm9tIGRsbC1yZWZlcmVuY2UgdmVuZG9yXG4vLyBtb2R1bGUgaWQgPSAyMlxuLy8gbW9kdWxlIGNodW5rcyA9IDAiLCJtb2R1bGUuZXhwb3J0cyA9IChfX3dlYnBhY2tfcmVxdWlyZV9fKDIpKSgyMzgpO1xuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIGRlbGVnYXRlZCAuL25vZGVfbW9kdWxlcy9zb2NranMtY2xpZW50L2xpYi9lbnRyeS5qcyBmcm9tIGRsbC1yZWZlcmVuY2UgdmVuZG9yXG4vLyBtb2R1bGUgaWQgPSAyM1xuLy8gbW9kdWxlIGNodW5rcyA9IDAiLCJtb2R1bGUuZXhwb3J0cyA9IChfX3dlYnBhY2tfcmVxdWlyZV9fKDIpKSgyMzkpO1xuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIGRlbGVnYXRlZCAuL25vZGVfbW9kdWxlcy93ZWJzdG9tcC1jbGllbnQvZGlzdC93ZWJzdG9tcC5qcyBmcm9tIGRsbC1yZWZlcmVuY2UgdmVuZG9yXG4vLyBtb2R1bGUgaWQgPSAyNFxuLy8gbW9kdWxlIGNodW5rcyA9IDAiLCJtb2R1bGUuZXhwb3J0cyA9IChfX3dlYnBhY2tfcmVxdWlyZV9fKDIpKSgyNDApO1xuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIGRlbGVnYXRlZCAuL3NyYy9tYWluL3dlYmFwcC9hcHAvdmVuZG9yLnRzIGZyb20gZGxsLXJlZmVyZW5jZSB2ZW5kb3Jcbi8vIG1vZHVsZSBpZCA9IDI1XG4vLyBtb2R1bGUgY2h1bmtzID0gMCIsIm1vZHVsZS5leHBvcnRzID0gKF9fd2VicGFja19yZXF1aXJlX18oMikpKDI0NCk7XG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gZGVsZWdhdGVkIC4vbm9kZV9tb2R1bGVzL2FuZ3VsYXIyLWNvb2tpZS9zZXJ2aWNlcy9jb29raWVzLnNlcnZpY2UuanMgZnJvbSBkbGwtcmVmZXJlbmNlIHZlbmRvclxuLy8gbW9kdWxlIGlkID0gMjZcbi8vIG1vZHVsZSBjaHVua3MgPSAwIiwibW9kdWxlLmV4cG9ydHMgPSAoX193ZWJwYWNrX3JlcXVpcmVfXygyKSkoOSk7XG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gZGVsZWdhdGVkIC4vbm9kZV9tb2R1bGVzL3J4anMvU3ViamVjdC5qcyBmcm9tIGRsbC1yZWZlcmVuY2UgdmVuZG9yXG4vLyBtb2R1bGUgaWQgPSAyOVxuLy8gbW9kdWxlIGNodW5rcyA9IDAiLCJtb2R1bGUuZXhwb3J0cyA9IChfX3dlYnBhY2tfcmVxdWlyZV9fKDIpKSgyMzUpO1xuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIGRlbGVnYXRlZCAuL25vZGVfbW9kdWxlcy9uZy1qaGlwc3Rlci9pbmRleC5qcyBmcm9tIGRsbC1yZWZlcmVuY2UgdmVuZG9yXG4vLyBtb2R1bGUgaWQgPSA1XG4vLyBtb2R1bGUgY2h1bmtzID0gMCIsIm1vZHVsZS5leHBvcnRzID0gKF9fd2VicGFja19yZXF1aXJlX18oMikpKDIzMSk7XG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gZGVsZWdhdGVkIC4vbm9kZV9tb2R1bGVzL0Bhbmd1bGFyL3JvdXRlci9AYW5ndWxhci9yb3V0ZXIuZXM1LmpzIGZyb20gZGxsLXJlZmVyZW5jZSB2ZW5kb3Jcbi8vIG1vZHVsZSBpZCA9IDdcbi8vIG1vZHVsZSBjaHVua3MgPSAwIiwibW9kdWxlLmV4cG9ydHMgPSAoX193ZWJwYWNrX3JlcXVpcmVfXygyKSkoNDcpO1xuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIGRlbGVnYXRlZCAuL25vZGVfbW9kdWxlcy9AYW5ndWxhci9odHRwL0Bhbmd1bGFyL2h0dHAuZXM1LmpzIGZyb20gZGxsLXJlZmVyZW5jZSB2ZW5kb3Jcbi8vIG1vZHVsZSBpZCA9IDhcbi8vIG1vZHVsZSBjaHVua3MgPSAwIiwibW9kdWxlLmV4cG9ydHMgPSAoX193ZWJwYWNrX3JlcXVpcmVfXygyKSkoMjMyKTtcblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyBkZWxlZ2F0ZWQgLi9ub2RlX21vZHVsZXMvQG5nLWJvb3RzdHJhcC9uZy1ib290c3RyYXAvaW5kZXguanMgZnJvbSBkbGwtcmVmZXJlbmNlIHZlbmRvclxuLy8gbW9kdWxlIGlkID0gOVxuLy8gbW9kdWxlIGNodW5rcyA9IDAiXSwic291cmNlUm9vdCI6IiJ9