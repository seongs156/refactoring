import createStatementData from "./createStatementData.js";
import {invoices, plays} from "./data.js";

function htmlStatement(invoice, plays) {
    //중간 데이터 생성 함수를 공유
    return renderHtml(createStatementData(invoice, plays));
}

function renderHtml(data) {
    let result = `<h1>청구 내역 (고객명: ${data.customer})</h1>\n`;
    result += "<table>\n";
    result += "<tr><th>연극</th><th>좌석 수</th><th>금액</th></tr>"
    for (let perf of data.performances) {
        result += ` <tr><td>${perf.play.name}</td><td>(${perf.audience}석)</td>`;
        result += ` <td>${usd(perf.amount)}</td></tr>\n`;
    }
    result += "</table>\n";
    result += `<p>총액: <em>${usd(data.totalAmount)}</em></p>\n`;
    result += `<p>적립 포인트: <em>${data.totalVolumeCredits}</em>점</p>\n`;
    return result;
}

function usd(aNumber) {
    return new Intl.NumberFormat("en-Us", {
        style: "currency",
        currency: "USD",
        minimumFractionDigits: 2
    }).format(aNumber / 100);
}

document.querySelector('.print').innerHTML = htmlStatement(invoices, plays);