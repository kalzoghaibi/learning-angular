"use strict";
var Certificate = (function () {
    function Certificate(certID, IDPEntityID, issuedTo, issuedBy, issuedOn, expirationDate) {
        this.certID = certID;
        this.IDPEntityID = IDPEntityID;
        this.issuedTo = issuedTo;
        this.issuedBy = issuedBy;
        this.issuedOn = issuedOn;
        this.expirationDate = expirationDate;
    }
    Certificate.prototype.calculateValidDays = function (expirationDate) {
        return null;
    };
    return Certificate;
}());
exports.Certificate = Certificate;
//# sourceMappingURL=certificate.js.map