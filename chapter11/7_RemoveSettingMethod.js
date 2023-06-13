/******* 11.7 세터 제거하기 ********/
/**********************************/

class person {
    constructor(id) {
        this._id = id;
    }
    get name() { return this._name; }
    set name(arg) { this._name = arg; }
    get id() { return this._id;}
}

const martin = new Person('1234');
margin.name = "마틴";
