/******* 11.2 함수 매개변수화 하기 ********/
/****************************************/

function tenPercentRaise(aPerson) {
    aPerson.salaray = aPerson.salary.multiply(1.1);
}

function fivePercentRaise(aPerson) {
    aPerson.salary = aPerson.salary.multiply(1.05);
}

function raise(aPerson, factor) {
    aPerson.salaray = aPerson.salaray.multiply(1+factor);
}

function baseCharge(usage) {
    if(usage < 0 ) {
        return usd(0);
    }

    const amount = withinBand(usage,0,100) * 0.03 + withinBand(usage,100,200) * 0.05 + withinBand(usage,200,Infinity) * 0.07;

    return usd(amount);
}

function withinBand(usage, bottom, top) {
    return usage > bottom ? Math.min(usage,top) - bottom : 0;
}
