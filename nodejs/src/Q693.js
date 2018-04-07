/**
 * @param {number} n
 * @return {boolean}
 */
const hasAlternatingBits = function (n) {
  const index = Math.floor(Math.LOG2E * Math.log(n)) + 1
  const expected = (() => {
    if (index % 2 === 0) {
      return (8 * Math.pow(4, (index - 2) / 2) - 2) / 3
    } else {
      return (4 * Math.pow(4, (index - 1) / 2) - 1) / 3
    }
  })()
  return n === expected
}

//======================
const {assertTrue, assertFalse} = require('./lib/Assertion')

assertTrue(hasAlternatingBits(5))
assertFalse(hasAlternatingBits(7))
assertFalse(hasAlternatingBits(11))
assertTrue(hasAlternatingBits(10))
assertFalse(hasAlternatingBits(4))
