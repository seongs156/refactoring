/******* 10.2 조건식 통합하기 ********/
/************************************/

function disabilityAmount(anEmployee) {
    if(isNotEligibleForDisability()) {
        return 0;
    }

    if((anEmployee.onVacation) && (anEmployee.seniority > 10 )) {
        return 1;
    }

    return 0.5;


    function isNotEligibleForDisability() {
        if((anEmployee.seniority < 2) || (anEmployee.monthsDisabled > 12) || (anEmployee.isPartTime)) {
            return 0;
        }
    }
}
