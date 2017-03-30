import { Component, OnInit } from '@angular/core';
import { ICertificate } from './certificate';
import { CertificateService } from './certificate.service';

@Component({
    moduleId: module.id,
    templateUrl: 'certificate-list.component.html',
    styleUrls: ['certificate-list.component.css']
})

export class CertificateListComponent implements OnInit {
    pageTitle: string = 'Expiring Certificate List';
    imageWidth: number = 50;
    imageMargin: number = 2;
    showImage: boolean = false;
    listFilter: string;
    errorMessege: string;
    Statuses = Array<string>();

    certificates: ICertificate[];

    constructor(private _certificateService: CertificateService) {

    }

    ngOnInit(): void {
        this._certificateService.getCertificates()
            .subscribe(
            certificates => this.certificates = certificates, error => this.errorMessege = <any>error);

        this.Statuses = Array<string>();
        this.Statuses.push('Please select');
        this.Statuses.push('Warning Sent');
        this.Statuses.push('Responded');
        this.Statuses.push('Outage');
        this.Statuses.push('Completed');
        this.Statuses.push('Acknowledged');
        this.Statuses.push('Metadata Sent');
        this.Statuses.push('Update Scheduled');

    }

    calculateValidDays(expirationDate: string): string {

        var today = new Date();
        var expDate = new Date(expirationDate);
        var Result: string;
        var daysLeft: number = (expDate.getTime() - today.getTime()) / 86400000;
        if (daysLeft < 0) {
            // expired cert
            Result = "Expired";
        } else {
            // get total seconds between the times
            var delta = Math.abs(expDate.getTime() - today.getTime()) / 1000;

            // calculate (and subtract) whole days
            var days = Math.floor(delta / 86400);
            delta -= days * 86400;

            Result = days + " Days";
        }
        return Result;
    }

    checkStatus(x: string, certStatus: string): boolean {

        if (x == certStatus) {
            return true;
        } else {
            return false;
        }
    }
}
