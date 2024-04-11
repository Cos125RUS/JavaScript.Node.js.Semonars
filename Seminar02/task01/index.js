'use strict'

const numberPrecision = require('number-precision');

const calcResult = (purchases, discount) => {
    let total = purchases.reduce((acc, purchase) => numberPrecision.plus(acc, purchase), 0);
    total = numberPrecision.times(total, discount);
    return total;
}

const res = calcResult([12.1, 32.2, 43.1], 0.9);

console.log("Sum = " + res);