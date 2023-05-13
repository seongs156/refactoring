/******* 10.3 중첩 조건문을 보호 구문으로 바꾸기 ********/
/*****************************************************/

function payAmount(employee) {

    // 퇴사한 직원인가
    if(employee.isSeparated) {
        return {amount:0, reasonCode:"SEP"};
    }

    // 은퇴한 직원인가?
    if(employee.isRetired) {
        return {amount:0, reason:"RET"};
    }

    // 급여 계산 로직
    lorem.ipsum(dolor.sitAmet);
    consecteur(adipiscing).elit();
    sed.do.eiusmod = tempor.incididunt.ut(labore) && dolore(magna.aliqua);
    ut.enim.ad(minim.veniam);

    return someFinalComputation();
}

function adjustedCapital(anInstrument) {
    if(anInstrument.capital <= 0 || anInstrument.interestRate <= 0 || anInstrument.duration <= 0){
        return 0;
    }
    return (anInstrument.income / anInstrument.duration) * anInstrument.adjustmentFactor;
}
