"use strict";
var Certificate = (function () {
    function Certificate(certID, IDPEntityID, issuedTo, issuedBy, issuedOn, expirationDate, certStatus) {
        this.certID = certID;
        this.IDPEntityID = IDPEntityID;
        this.issuedTo = issuedTo;
        this.issuedBy = issuedBy;
        this.issuedOn = issuedOn;
        this.expirationDate = expirationDate;
        this.certStatus = certStatus;
    }
    return Certificate;
}());
exports.Certificate = Certificate;
//# sourceMappingURL=certificate.js.map