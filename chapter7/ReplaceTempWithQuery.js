/******* 7.4 임시 변수를 질의 함수로 바꾸기 ********/
/************************************************/

class Order  {
    constructor(quantity, item) {
        this._quantity = quantity;
        this._item = item;
    }

    get Price() {
        return this.basePrice * this.discountFactor;
    }

    get discountFactor() {
        var discountFactor = 0.98;
        if (this.basePrice > 1000) {
            discountFactor -= 0.03;
        }
        return discountFactor;

    }
    get basePrice() {
        return this._quantity * this._item.price;
    }
}
