import assert from "assert";
import chai from "chai";
var expect = chai.expect;

function sampleProvinceData() {
    return {
        name : "Asia",
        producers: [
            {name: "Byzantium", cost:10, production:9},
            {name: "Attalia", cost:12, production:10},
            {name: "Sinope", cost:10, production:6},
        ],
        demand:30,
        price:20
    }
}

class Province {
    constructor(doc) {
        this._name = doc.name;
        this._producers = [];
        this._totalProduction = 0;
        this._demand = doc.demand;
        this._price = doc.price;
        doc.producers.forEach(d => {
            this.addProducer(new Producer(this, d));
        })
    }

    addProducer(arg) {
        this._producers.push(arg);
        this._totalProduction += arg._production;
    }

    get shortfall() {
        return this._demand - this.totalProduction * 2;
    }

    get profit() {
        // console.log(this.demandValue);
        // console.log(this.demandCost);
        return this.demandValue - this.demandCost;
    }

    get demandValue() {
        return this.satisfiedDemand * this.price;
    }
    get satisfiedDemand() {
        console.log(this._demand);
        console.log(this.totalProduction);
        return Math.min(this._demand, this.totalProduction);
    }
    get demandCost() {


        let remainingDemand = this.demand;
        let result = 0;
        this.producers
            .sort((a,b) => a.cost - b.cost)
            .forEach(p => {
                const contribution = Math.min(remainingDemand, p._production);
                remainingDemand -= contribution;
                result += contribution * p.cost;
            })

        return result;
    }

    get name() {
        return this._name;
    }
    get producers() {
        return this._producers.slice();
    }
    get totalProduction() {
        return this._totalProduction;
    }
    set totalProduction(arg) {
        console.log('totalProduction:arg',arg);
        this._totalProduction = arg;
    }
    get demand () {
        return this._demand;
    }
    set demand(arg) {
        this._demand = parseInt(arg);
    }
    get price() {
        return this._price;
    }
    set price(arg) {
        this._price = parseInt(arg);
    }
}


class Producer {
    constructor(aProvince, data) {
        this._province = aProvince;
        this._cost = data.cost;
        this._name = data.name;
        this._production = data._production || 0;
    }

    get name () {
        return this._name;
    }
    get cost () {
        return this._cost;
    }
    set cost(arg) {
        this._cost = parseInt(arg);
    }
    getProduction() {
        return this._production;
    }
    set production(amountStr) {
        console.log(amountStr);
        const amount = parseInt(amountStr);
        const newProduction = Number.isNaN(amount) ? 0 : amount;
        this._province.totalProduction += newProduction - this._production;
    }
}

describe('province', function() {
    // it('shortfall', function () {
    //     const asia = new Province(sampleProvinceData());// 픽스처 설정
    //     expect(asia.shortfall).equal(5);
    // });
    // it('profit', function() {
    //     const asia = new Province(sampleProvinceData());
    //     console.log(asia.shortfall);
    //     expect(asia.shortfall).equal(5);
    // })

    let asia;
    beforeEach(function() {
        asia = new Province(sampleProvinceData());
    });


    it('shortfall', function() {
        expect(asia.shortfall).equal(5);
    });

    it('profit', function() {
        expect(asia.profit).equal(230);
    });



});