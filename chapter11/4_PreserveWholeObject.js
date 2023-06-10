/******* 11.4 객체 통째로 넘기기 ********/
/**************************************/

//호출자
const tempRange = aRoom.daysTempRange;
const isWithinRange = aPlan.xxNEWwithRange(tempRange);

if(!isWithinRange) {
    alerts.push('방온도가 지정 범위를 벗어났습니다.');
}

// 클래스

class HeatingPlan {
    xxNEWwithRange(aPlan, tempRange) {

        const low = tempRange.low;
        const high = tempRange.high;
        const isWithinRange = aPlan.withinRange(low,high);
        return isWithinRange;
    }
}

