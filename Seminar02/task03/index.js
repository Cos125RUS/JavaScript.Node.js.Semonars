'use strict'

const calcResult = require('./calcSum.js');
require('colors');

const res = calcResult([12.1, 32.2, 43.1], 0.9);
const resText = `Sum price: ${res}p`

console.log(res > 50 ? resText.red : resText.green);
