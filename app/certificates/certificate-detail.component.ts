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
    daysLeft: string;
    expDate: string;
    certificate: ICertificate;

    constructor(private _route: ActivatedRoute,
        private _router: Router,
        private _certificateService: CertificateService) {
    }

    ngOnInit(): void {
        let id = +this._route.snapshot.params['id'];
        this._certificateService.getCertificate(id)
            .subscribe(certificate => this.certificate = certificate, error => this.errorMessege = <any>error);
    }

    onBack(): void {
        this._router.navigate(['/certificatelist']);
    }

    onRatingClicked(message: string): void {
        this.pageTitle = this.pageTitle + ': ' + message;
    }

    calculateTimeLeft(expirationDate: string): string {

        var today = new Date();
        var expDate = new Date(expirationDate);
        var Result: string;
        var daysLeft: number = (expDate.getTime() - today.getTime()) / 86400000;
        if (daysLeft < 0) {
            // expired cert
            Result = "Expired on " + expirationDate;
        } else {
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
            var seconds = Math.floor(delta) % 60;  // in theory the modulus is not required

            Result = "Expires in " + days + " Days, " + hours + " Hours, " + minutes + " Minutes, and " + seconds + " Seconds.";
        }
        return Result;
    }
}