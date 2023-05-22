/******* 10.6 어서션 추가하기 ********/
/***********************************/
class Customer {
    set applyDiscount(aNumber) {
        assert(null === aNumber || aNumber >= 0);
        this._discountRate = aNumber;
    }
}

