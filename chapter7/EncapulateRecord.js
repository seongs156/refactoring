/******* 7.1 단계 쪼개기 ********/
/*******************************/

// 간단한 레코드 캡슐화하기
class Organization {
    constructor(data) {
        this._data = data;
    }
    set name(aString) { this._data.name = aString;}
    get name() { return this._data.name; }
    get country() { return this._country; }
    set country(aCountryCode) { this._country = aCountryCode; }
}
function getOrganization() { return organization; }

const organization = new Organization({ name : "애크미 구스베리", country: "GB"});

getOrganization().name = '김성훈';
console.log(getOrganization().name);


// 중첩된 레코드 캡슐화하기
let data = {
    "1920" : {
        name: "마틴 파울러",
        id: "1920",
        usages: {
            "2016": {
                "1" : 50,
                "2" : 55,
            },
            "2015": {
                "1" : 70,
                "2" : 63,
            }
        }
    },
    "38673" : {
        name: "닐 포드",
        id: "38673"
    }
}

function getCustomerData() { return customerData; }
function getRawDataOfCustomers() {return customerData.rawData;}
function setRawDataOfCustomers(arg) {customerData = new CustomerData(arg);}

//읽기 예
function compareUsage (customerID, laterYear, month) {
    const later = getRawDataOfCustomers()[customerID].usages[laterYear][month];
    const earlier = getRawDataOfCustomers()[customerID].usages[laterYear - 1][month];
    return {laterAmount: later, change:later-earlier};
}

class CustomerData {
    constructor(data) {
        this._data = data;
    }

    setUsage(customerID, year, month, amount) {
        getRawDataOfCusomers()[customerID].usages[year][month] = amount;
    }

    usage(customerID, year, month, amount);

    get rawData() {
        return _.cloneDeep(this._data);
    }
}

//쓰기 예
getCustomerData().setUsage(customerID, year, month, amount);
