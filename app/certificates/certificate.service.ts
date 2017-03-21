import { Injectable } from '@angular/core';
import { Http, Response } from '@angular/http';
import { Observable } from 'rxjs/Observable';
import { ICertificate } from './certificate';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/do';
import 'rxjs/add/operator/catch';

@Injectable()
export class CertificateService {
    private _certUrl = 'api/certificates/certificates.json';

    constructor(private _http: Http) { }

    getCertificates(): Observable<ICertificate[]> {
        return this._http.get(this._certUrl)
        .map((response: Response) => <ICertificate[]>response.json())
        .do(data => console.log('All: ' + JSON.stringify(data)))
        .catch(this.handleError);
    }

    getCertificate(id: number): Observable<ICertificate> {
        return this.getCertificates()
            .map((certificates: ICertificate[]) => certificates.find(p => p.certID === id));
    }

    private handleError(error: Response) {
        console.error(error);
        return Observable.throw(error.json().error || 'Server Error');
    }
}