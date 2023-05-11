/******* 9.4 참조를 값으로 바꾸기 ********/
/***************************************/

class Person {
    constructor() {
        this._telephoneNumber = new TelephoneNumber();
    }

    get officeAreaCode() {
        return this._telephoneNumber.areaCode;
    }

    set officeAreaCode(arg) {
        this._telephoneNumber = new TelephoneNumber(arg, this.officeNumber);
    }

    get officeNumber() {
        return this._telephoneNumber.number;
    }

    set officeNumber(arg) {
        this._telephoneNumber.number = new TelephoneNumber(this.officeAreaCode, arg);
    }
}

class TelephoneNumber {

    constructor(areaCode, number) {
        this._areaCode = areaCode;
        this._number = number;
    }

    equals(other) {
        if(!(other instanceof TelephoneNumber)) {
            return false;
        }
        return this.areaCode === other.areaCode && this.number === other.number;
    }

    set areaCode(arg) {
        this._areaCode = arg;
    }

    get number() {
        return this._number;
    }

    set number(arg) {
        this._number = arg;
    }
}

