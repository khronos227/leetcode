/**
 * @param {number} n
 * @return {boolean}
 */
const canWinNim = function (n) {
  return n % 4 !== 0
}

//=======================
const {assertTrue, assertFalse} = require('./lib/Assertion')

assertTrue(canWinNim(1))
assertTrue(canWinNim(7))
assertTrue(canWinNim(2))

