/**
 * @param {string} s
 * @return {number}
 */
const titleToNumber = function (s) {
  const charBasis = 'A'.charCodeAt(0) - 1
  const basis = 26

  return Array.from(s).reverse().map((char, index) => {
    return (char.charCodeAt(0) - charBasis) * Math.pow(basis, index)
  }).reduce((prev, curr) => {
    return prev + curr
  })
}

//=======================
const {assertEqual} = require('./lib/Assertion')

assertEqual(titleToNumber('A'), 1)
assertEqual(titleToNumber('AB'), 28)
assertEqual(titleToNumber('ZY'), 701)
