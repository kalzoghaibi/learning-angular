import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { CertificateListComponent } from './certificate-list.component';
import { CertificateDetailComponent } from './certificate-detail.component';
import { CertificateFilterPipe } from './certificate-filter.pipe';
import { CertificateSortDatePipe } from './certificate-sortdate.pipe';
import { CertificateDetailGuard } from './certificate-guard.service';
import { CertificateService } from './certificate.service';
import { SharedModule } from '../shared/shared.module';

@NgModule({
    declarations: [
        CertificateListComponent,
        CertificateDetailComponent,
        CertificateFilterPipe,
        CertificateSortDatePipe
    ],
    imports: [
        SharedModule,
        RouterModule.forChild([
            { path: 'certificatelist', component: CertificateListComponent },
            { path: 'certificate/:id',
                  canActivate: [CertificateDetailGuard],
                  component: CertificateDetailComponent
              },
        ])
    ],
    providers: [
        CertificateService,
        CertificateDetailGuard
    ]
})

export class CertificateModule {}