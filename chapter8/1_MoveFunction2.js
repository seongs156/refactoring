/******* 8.1 함수 옮기기 ********/
/*******************************/

class Account {
    // 은행 이자 계싼
    get bankCharge() {
        let result = 4.5;
        if(this._dayOverdrawn > 0) {
            result += this.overdraftCharge();
        }

        return result;
    }

    get overdraftCharge() {
        return this.type.overdraftCharge(this);
    }
}

class AccountType {
    // 초과 인출 이자 계산
    overdraftCharge(account) {
        if(this.isPremium) {
            const baseCharge = 10;
            if(account.daysOverdrawn <= 7 ) {
                return baseCharge;
            }
            else {
                return baseChage + (account.daysOverdrawn - 7) * 0.85;
            }
        }
        else {
            return account.daysOverdrawn * 1.75;
        }
    }
}
