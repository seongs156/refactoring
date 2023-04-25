function printOwing(invoice) {

    PrintBanner();
    const outstanding = calculateOutstanding(invoice);
    recordDueDate(invoice);
    printDetails(invoice, outstanding);
}

function calculateOutstanding(invoice) {
    let result = 0;

    for(const o of invoice.orders) {
        result += o.amount;
    }

    return result;
}

function recordDueDate(invoice) {
    // 마감일을 기록한다
    const today = Clock.today;
    invoice.dueDate = new Date(today.getFullYear(), today.getMonth(), today.getDate() + 30);
}


function PrintBanner() {
    console.log("*************");
    console.log("**** 고객 채무 *****");
    console.log("*************");
}

function printDetails(invoice,outstanding) {
    // 세부사항을 출력한다
    console.log(`고객명 : ${invoice.customer}`);
    console.log(`채무액 : ${outstanding}`);
    console.log(`마감일 : ${invoice.dueDate.toLocaleDateString()}`);
}

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
