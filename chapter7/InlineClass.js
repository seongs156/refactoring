/******* 7.5 클래스 인라인하기 ********/
/************************************************/

class Shipment {
    get trackingInfo() {
        return `${this.shippingCompany} : ${this.trackingNumber}`;
    }

    get trackingInformation() {
        return this._trackingInformation;
    }
    set trackingInformation(aTrackingInformation) {
        this._trackingInformation = aTrackingInformation;
    }
    get shippingCompany() { return this._shippingCompany; }
    set shippingCompany(arg) { this._shippingCompany = arg; }
    get trackingNumber() { return this._trackingNumber; }
    set trackingNumber(arg) { this._trackingNumber = arg; }
}

aShipment.shippingCompany = request.vendor;
