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
    CertificateDetailComponent.prototype.calculateTimeLeft = function (expirationDate) {
        var today = new Date();
        var expDate = new Date(expirationDate);
        var Result;
        var daysLeft = (expDate.getTime() - today.getTime()) / 86400000;
        if (daysLeft < 0) {
            // expired cert
            Result = "Expired on " + expirationDate;
        }
        else {
            // get total seconds between the times
            var delta = Math.abs(expDate.getTime() - today.getTime()) / 1000;
            // calculate (and subtract) whole days
            var days = Math.floor(delta / 86400);
            delta -= days * 86400;
            // calculate (and subtract) whole hours
            var hours = Math.floor(delta / 3600) % 24;
            delta -= hours * 3600;
            // calculate (and subtract) whole minutes
            var minutes = Math.floor(delta / 60) % 60;
            delta -= minutes * 60;
            // what's left is seconds
            var seconds = Math.floor(delta) % 60; // in theory the modulus is not required
            Result = "Expires in " + days + " Days, " + hours + " Hours, " + minutes + " Minutes, and " + seconds + " Seconds.";
        }
        return Result;
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