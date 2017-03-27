"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var core_1 = require("@angular/core");
var router_1 = require("@angular/router");
var certificate_list_component_1 = require("./certificate-list.component");
var certificate_detail_component_1 = require("./certificate-detail.component");
var certificate_filter_pipe_1 = require("./certificate-filter.pipe");
var certificate_sortdate_pipe_1 = require("./certificate-sortdate.pipe");
var certificate_guard_service_1 = require("./certificate-guard.service");
var certificate_service_1 = require("./certificate.service");
var shared_module_1 = require("../shared/shared.module");
var CertificateModule = (function () {
    function CertificateModule() {
    }
    return CertificateModule;
}());
CertificateModule = __decorate([
    core_1.NgModule({
        declarations: [
            certificate_list_component_1.CertificateListComponent,
            certificate_detail_component_1.CertificateDetailComponent,
            certificate_filter_pipe_1.CertificateFilterPipe,
            certificate_sortdate_pipe_1.CertificateSortDatePipe
        ],
        imports: [
            shared_module_1.SharedModule,
            router_1.RouterModule.forChild([
                { path: 'certificatelist', component: certificate_list_component_1.CertificateListComponent },
                { path: 'certificate/:id',
                    canActivate: [certificate_guard_service_1.CertificateDetailGuard],
                    component: certificate_detail_component_1.CertificateDetailComponent
                },
            ])
        ],
        providers: [
            certificate_service_1.CertificateService,
            certificate_guard_service_1.CertificateDetailGuard
        ]
    })
], CertificateModule);
exports.CertificateModule = CertificateModule;
//# sourceMappingURL=certificate.module.js.map