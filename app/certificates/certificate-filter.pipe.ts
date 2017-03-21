import { PipeTransform, Pipe } from '@angular/core';
import { ICertificate } from './certificate';

@Pipe({
    name: 'certificateFilter'
})

export class CertificateFilterPipe implements PipeTransform {
    
    transform(value: ICertificate[], filterBy: string): ICertificate[] {
        filterBy = filterBy ? filterBy.toLowerCase() : null;
        return filterBy ? value.filter((certificate: ICertificate) =>
        certificate.IDPEntityID.toLowerCase().indexOf(filterBy) !== -1) : value;
    }
}