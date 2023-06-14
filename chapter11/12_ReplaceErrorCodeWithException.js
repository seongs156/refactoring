/******* 11.12 오류 코드를 예외로 바꾸기 ********/
/*********************************************/
try {
    calculateShippingCosts(orderData);
} catch (e) {
    if(e instanceof OrderProcessingError) {
        errorList.push({order:orderData, errorCode:e.code});
    }
    else {
        throw e;
    }
}
function localShippingRules(country) {
    const data = countryData.shippingRules[country];
    if(data) { return new ShippingRules(data) }
    else {
        throw new OrderProcessingError(-23);
    }
}

function calculateShippingCosts(anOrder) {
    const shippingRules = localShippingRules(anOrder.country);
}

class OrderProcessingError extends Error {
    constructor(errorCode) {
        super(`주문 처리 오류: ${errorCode}`);
        this.code = errorCode;
    }

    get name() { return "OrderProcessingError"; }
}
