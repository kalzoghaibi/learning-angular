import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { ICertificate } from './certificate';
import { CertificateService } from './certificate.service';

@Component({
    templateUrl: 'app/certificates/certificate-detail.component.html'
})

export class CertificateDetailComponent implements OnInit {
    pageTitle: string = 'Certificate Detail';
    errorMessege: string;
    certificate: ICertificate;

    constructor(private _route: ActivatedRoute,
        private _router: Router,
        private _certificateService: CertificateService) {
    }

    ngOnInit(): void {
        let id = +this._route.snapshot.params['id'];
        this._certificateService.getCertificate(id)
            .subscribe(
            certificate => this.certificate = certificate, error => this.errorMessege = <any>error);
    }

    onBack(): void {
        this._router.navigate(['/certificatelist']);
    }

    onRatingClicked(message: string): void {
        this.pageTitle = this.pageTitle + ': ' + message;
    }
}