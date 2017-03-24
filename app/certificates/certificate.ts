export interface ICertificate {

    certID: number;
    IDPEntityID: string;
    issuedTo: string;
    issuedBy: string;
    issuedOn: string;
    expirationDate: string;
}

export class Certificate implements ICertificate {


    constructor(public certID: number,
        public IDPEntityID: string,
        public issuedTo: string,
        public issuedBy: string,
        public issuedOn: string,
        public expirationDate: string) {
    }
}