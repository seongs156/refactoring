/******* 11.10 명령을 함수로 바꾸기 ********/
/******************************************/

class ChargeCalculator {
    constructor(customer, usage, provider) {
        this._customer = customer;
        this._usage = usage;
        this._provider = provider;
    }
    get baseCharge() {
        return this._customer.baseRate * this._usage;
    }
    get charge() {
        return this.baseCharge + this._provider.connectionCharge;
    }
}

monthCharge = new ChargeCalculator(customer, usage, provider).charge;


function charge(customer, usage, provider) {
    const baseCharge = customer.baseRate * usage;
    return baseCharge + provider.connectionCharge;
}
