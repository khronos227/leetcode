/**
 * @param {number} num
 * @return {number}
 */
const addDigits = function(num) {
  if (num === 0) return 0
  const value = num % 9
  if (value === 0) {
    return 9
  } else {
    return value
  }
}

//=======================
const {assertEqual} = require('./lib/Assertion')

assertEqual(addDigits(38), 2)
assertEqual(addDigits(11), 2)
