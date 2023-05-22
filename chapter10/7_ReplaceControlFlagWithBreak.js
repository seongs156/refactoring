/******* 10.7 제어 플래그를 탈출문으로 바꾸기 ********/
/**************************************************/

function checkForMiscreants(people) {
    for (const p of people) {
        if (p === "조커") {
            sendAlert();
            return;
        }
        if (p === "사루만") {
            sendAlert();
            return;
        }
    }
}
