/**
 * @param {number[]} bits
 * @return {boolean}
 */
const isOneBitCharacter = function (bits) {
  // cut unnecessary calculations // before the second 0 from last, no need to consider
  let zeroCount = 0
  let startIndex = bits.length - 1
  for (; startIndex >= 0; startIndex--) {
    if (!bits[startIndex]) {
      if (zeroCount) {
        break
      }
      zeroCount++
    }
  }
  startIndex++

  let isTwoBit = false
  for (; startIndex < bits.length - 1; startIndex++) {
    if (isTwoBit) {
      isTwoBit = false
    } else if (bits[startIndex]) {
      isTwoBit = true
    }
  }
  return !isTwoBit
}

//=======================
const {assertTrue, assertFalse} = require('./lib/Assertion')

assertTrue(isOneBitCharacter([1, 0, 0]))
assertFalse(isOneBitCharacter([1, 1, 1, 0]))