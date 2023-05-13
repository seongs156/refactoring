/******* 10.1 조건문 분해하기 ********/
/************************************/

if( summer()) {
    change = summerCharge();
}
else {
    charge = regularCharge();
}

// charge = summer() ? summerCharge() : regularCharge();

function summer() {
    return !aDate.isBefor(plan.summerStart) && !aDate.isAfter(plan.summerEnd);
}

function summerCharge() {
    return quantity * plan.summerRate;
}

function regularCharge() {
    quantity * plan.regularRate + plan.regularServiceCharge;
}



