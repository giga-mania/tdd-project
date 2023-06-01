const assert = require("assert")

class Money {
    constructor(amount, currency) {
        this.amount = amount
        this.currency = currency
    }

    times(multiplier) {
        return new Money(this.amount * multiplier, this.currency)
    }

    divide(divisor) {
        return new Money(this.amount / divisor, this.currency)
    }
}

class Portfolio {
    constructor() {
        this.moneys = []
    }

    add(...moneys) {
        this.moneys = this.moneys.concat(moneys)
    }

    evaluate() {
        let total = this.moneys.reduce((sum, money) => {
            return sum + money.amount
        }, 0)
        return new Money(total, "USD")
    }
}


let tenDollars = new Money(10, 'USD')
let fiveDollars = new Money(5, 'USD')
let fifteenDollars = new Money(15, 'USD')
let portfolio =  new Portfolio()
portfolio.add(fiveDollars, tenDollars)
assert.deepStrictEqual(portfolio.evaluate('USD'), fifteenDollars)


// = TEST Case
// let fiver = new Money(5, "USD")
// let tenner = fiver.times(2)
// assert.strictEqual(tenner.amount, 10)
// assert.strictEqual(tenner.currency, "USD")
// assert.deepStrictEqual(tenner, new Money(10, "USD"))
// assert.deepStrictEqual(fiver.times(2), tenner)


// = Test Case
// let originalMoney = new Money(4002, "KRW")
// let actualMoneyAfterDivision = originalMoney.divide(4)
// let expectedMoneyAfterDivision = new Money(1000.5, "KRW")
// assert.deepStrictEqual(actualMoneyAfterDivision, expectedMoneyAfterDivision)
