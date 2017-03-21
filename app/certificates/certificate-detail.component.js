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
var core_1 = require("@angular/core");
var router_1 = require("@angular/router");
var certificate_service_1 = require("./certificate.service");
var CertificateDetailComponent = (function () {
    function CertificateDetailComponent(_route, _router, _certificateService) {
        this._route = _route;
        this._router = _router;
        this._certificateService = _certificateService;
        this.pageTitle = 'Certificate Detail';
    }
    CertificateDetailComponent.prototype.ngOnInit = function () {
        var _this = this;
        var id = +this._route.snapshot.params['id'];
        this._certificateService.getCertificate(id)
            .subscribe(function (certificate) { return _this.certificate = certificate; }, function (error) { return _this.errorMessege = error; });
    };
    CertificateDetailComponent.prototype.onBack = function () {
        this._router.navigate(['/certificatelist']);
    };
    CertificateDetailComponent.prototype.onRatingClicked = function (message) {
        this.pageTitle = this.pageTitle + ': ' + message;
    };
    return CertificateDetailComponent;
}());
CertificateDetailComponent = __decorate([
    core_1.Component({
        templateUrl: 'app/certificates/certificate-detail.component.html'
    }),
    __metadata("design:paramtypes", [router_1.ActivatedRoute,
        router_1.Router,
        certificate_service_1.CertificateService])
], CertificateDetailComponent);
exports.CertificateDetailComponent = CertificateDetailComponent;
//# sourceMappingURL=certificate-detail.component.js.map