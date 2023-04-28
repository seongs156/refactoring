/******* 7.5 클래스 추출하기 ********/
/************************************************/

class Person {
    constructor() {
        this._telephoneNumber = new telephoneNumber();
    }
    get officeAreaCode() { return this._telephoneNumber.areaCode; }
    set officeAreaCode(arg) { this._telephoneNumber.areaCode = arg; }
    get name() { return this._name; }
    set name(arg) { return this._name = arg; }

    get officeNumber() { return this._telephoneNumber.number; }
    set officeNumber(arg) { this._telephoneNumber.number = arg; }

    get telephoneNumber() { return this._telephoneNumber.toString(); }
}


class TelephoneNumber {
    get areaCode() { return this._areaCode; }
    set areaCode(arg) { this._areaCode = arg; }
    get number() { return this._number; }
    set number(arg) { this._number = arg; }

    toString() { return `(${this.areaCode}) ${this.number}` }
}
