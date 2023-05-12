const assert = require("assert")

class Dollar {
    constructor(amount) {
        this.amount =amount
    }

    times(multiplier) {
        return new Dollar(multiplier * this.amount)
    }
}


let fiver = new Dollar(5)
let tenner = fiver.times(2)
assert.strictEqual(tenner.amount, 10)