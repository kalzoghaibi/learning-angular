import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, Router } from '@angular/router';

@Injectable()

export class CertificateDetailGuard implements CanActivate {

    constructor(private _router: Router) {
    }

    canActivate(route: ActivatedRouteSnapshot): boolean {
        let id= +route.url[1].path;
        if ( isNaN(id) || id < 1) {
            alert('Invalid certificate ID');
            //new nav to redirect to list
            this._router.navigate(['/certificatelist']);
            //abort current nav
            return false;
        }
        return true;
    }
}