/******* 6.11 단계 쪼개기 ********/
/*******************************/

// 결제 금액 계산
function priceOrder(product, quantity, shippingMethod) {

    const priceData = calculatePricingData(product, quantity);
    return applyShipping(priceData, shippingMethod);

}

function calculatePricingData(product, quantity) {
    const basePrice = product.basePrice * quantity;
    const discount = Math.max(quantity - product.discountThreshold, 0) * product.basePrice * product.discountRate;
    return {basePrice: basePrice, quantity:quantity, discount:discount};
}


// 배송비 계산 부분 함수
function applyShipping(priceData, shippingMethod) {
    const shippingPerCase = (priceData.basePrice > shippingMethod.discountThreshold) ? shippingMethod.discountedFee : shippingMethod.feePerCase;
    const shippingCost = priceData.quantity * shippingPerCase;
    return priceData.basePrice - priceData.discount + shippingCost;
}

