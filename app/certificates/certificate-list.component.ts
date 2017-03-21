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

    certificates: ICertificate[];

    constructor(private _certificateService: CertificateService) {

    }

    toggleImage(): void {
        this.showImage = !this.showImage;
    }

    ngOnInit(): void {
        this._certificateService.getCertificates()
            .subscribe(
            certificates => this.certificates = certificates, error => this.errorMessege = <any>error);
    }

    onRatingClicked(message: string): void {
        this.pageTitle = 'Expiring Certificate List: ' + message;
    }
}
