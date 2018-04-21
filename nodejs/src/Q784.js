/**
 * @param {string} S
 * @return {string[]}
 */
const letterCasePermutation = function (S) {
  if (S === null || typeof S === 'undefined') return []

  let res = ['']
  Array.from(S.toLowerCase()).forEach((char) => {
    const lower = res.map((str) => str + char)
    const upperChar = char.toUpperCase()
    if (char !== upperChar) {
      const upper = res.map((str) => str + upperChar)
      res = lower.concat(upper)
    } else {
      res = lower
    }
  })
  return res
}

//=======================
const {assertEqualArray} = require('./lib/Assertion')

assertEqualArray(letterCasePermutation('a1b2'), ['a1b2', 'A1b2', 'a1B2', 'A1B2'])
assertEqualArray(letterCasePermutation('3z4'), ['3z4', '3Z4'])
assertEqualArray(letterCasePermutation('12345'), ['12345'])
assertEqualArray(letterCasePermutation(''), [''])
assertEqualArray(letterCasePermutation('C'), ['c', 'C'])
