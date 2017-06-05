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
var social_service_1 = require("./social.service");
var csrf_service_1 = require("../auth/csrf.service");
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
        templateUrl: './social.component.html'
    }),
    __metadata("design:paramtypes", [csrf_service_1.CSRFService,
        social_service_1.SocialService])
], JhiSocialComponent);
exports.JhiSocialComponent = JhiSocialComponent;
//# sourceMappingURL=social.component.js.map