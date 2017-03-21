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
var certificate_service_1 = require("./certificate.service");
var CertificateListComponent = (function () {
    function CertificateListComponent(_certificateService) {
        this._certificateService = _certificateService;
        this.pageTitle = 'Expiring Certificate List';
        this.imageWidth = 50;
        this.imageMargin = 2;
        this.showImage = false;
    }
    CertificateListComponent.prototype.toggleImage = function () {
        this.showImage = !this.showImage;
    };
    CertificateListComponent.prototype.ngOnInit = function () {
        var _this = this;
        this._certificateService.getCertificates()
            .subscribe(function (certificates) { return _this.certificates = certificates; }, function (error) { return _this.errorMessege = error; });
    };
    CertificateListComponent.prototype.onRatingClicked = function (message) {
        this.pageTitle = 'Expiring Certificate List: ' + message;
    };
    return CertificateListComponent;
}());
CertificateListComponent = __decorate([
    core_1.Component({
        moduleId: module.id,
        templateUrl: 'certificate-list.component.html',
        styleUrls: ['certificate-list.component.css']
    }),
    __metadata("design:paramtypes", [certificate_service_1.CertificateService])
], CertificateListComponent);
exports.CertificateListComponent = CertificateListComponent;
//# sourceMappingURL=certificate-list.component.js.map