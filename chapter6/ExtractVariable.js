/******* 6.3 변수 추출하기 ********/
/********************************/

function rating(aDriver) {
    return aDriver.numberOfLateDeliveris > 5 ? 2 : 1;
}

function reportLines(aCustomer) {
    lines.push(['name', aCustoer.name]);
    gatherCustomerData(lines,aCustomer);
    return lines;
}

function gatherCustomerData(out, aCustomer) {
    out.push(['location', aCustomer.location]);
}

function price(order) {
    // 가격(price) = 기본 가격 - 수량 할인 + 배송비
    const basePrice = order.quantity * order.itemPrice;
    const quantityDiscount = Math.max(0, order.quantity - 500) * order.itemPrice * 0.05;
    const shipping = Math.min(basePrice * 0.1 , 100);
    return basePrice - quantityDiscount + shipping;
}
