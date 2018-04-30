/**
 * @param {number} a
 * @param {number} b
 * @return {number}
 */
const getSum = function (a, b) {
  while (b !== 0) {
    const c = (a & b) << 1
    a ^= b
    b = c
  }
  return a
}

//=======================
const {assertEqual} = require('./lib/Assertion')

assertEqual(getSum(1, 2), 3)
assertEqual(getSum(15, 1), 16)
assertEqual(getSum(14, 1), 15)
