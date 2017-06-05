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
var core_1 = require("@angular/core");
var router_1 = require("@angular/router");
var shared_1 = require("../../shared");
var core_2 = require("angular2-cookie/core");
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
//# sourceMappingURL=social-auth.component.js.map