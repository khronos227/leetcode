/**
 * @param {number} N
 * @return {number}
 */
const rotatedDigits = function (N) {
  const invalidDigits = ['3', '4', '7']
  const validDigits = ['2', '5', '6', '9']
  let result = 0
  for (let i = 1; i <= N; i++) {
    let hasValid = false
    let hasInvalid = false
    Array.from(`${i}`).forEach((char) => {
      if (invalidDigits.includes(char)) {
        hasInvalid = true
      } else if (validDigits.includes(char)) {
        hasValid = true
      }
    })
    if (!hasInvalid && hasValid) {
      result++
    }
  }
  return result
}

//=======================
const {assertEqual} = require('./lib/Assertion')

assertEqual(rotatedDigits(10), 4)
assertEqual(rotatedDigits(1), 0)
