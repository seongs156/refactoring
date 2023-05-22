/******* 11.1 질의 함수와 변경 함수 분리하기 ********/
/*************************************************/

function alertForMiscreants(people) {
    for (const p of people) {
        if (p === "조커") {
            sendOffAlarms();
            return;
        }
        if (p === "사루만") {
            sendOffAlarms();
            return;
        }
    }
    return;
}

function findMiscreant(people) {
    for (const p of people) {
        if (p === "조커") {
            return "조커";
        }
        if (p === "사루만") {
            return "사루만";
        }
    }
    return "";
}

const found = findMiscreant(people);
alertForMiscreants(people);
