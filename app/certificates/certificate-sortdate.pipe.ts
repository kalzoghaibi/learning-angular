import { PipeTransform, Pipe } from '@angular/core';
import { ICertificate } from './certificate';

@Pipe({name: "sortByExpDate"})
export class CertificateSortDatePipe {
  transform(array: Array<Date>): Array<Date> {
    array.sort((a: Date, b: Date) => {
			var c = new Date(a["expirationDate"]);
			var d = new Date(b["expirationDate"]);
	    if ( c < d ){
	    	return -1;
	    }else if( c > d ){
	        return 1;
	    }else{
	    	return 0;	
	    }
    });
    return array;
  }
}