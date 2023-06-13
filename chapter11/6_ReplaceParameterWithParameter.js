/******* 11.6 질의 함수를 매개변수로 바꾸기 ********/
/************************************************/

class HeatingPlan {
    targetTemperature(selectedTemperature) {
        if(selectedTemperature > this._max) {
            return this._max;
        }
        else if(selectedTemperature < this._min) {
            return this._min;
        }
        else {
            return selectedTemperature;
        }
    }
}

if(thePlan.targetTemperature(thermostatselectedTemperature) > thermostat.currentTemperature) {
    setToHeat();
}
else if(thePlan.targetTemperature(thermostatselectedTemperature) < thermostat.currentTemperature) {
    setToCool();
}
else{
    setOff();
}
