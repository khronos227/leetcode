/**
 * @param {string} A
 * @param {string} B
 * @return {boolean}
 */
const rotateString = function (A, B) {
  if (A.length !== B.length) return false
  return (A + A).indexOf(B) > -1
}

//=======================
const {assertTrue, assertFalse} = require('./lib/Assertion')

assertTrue(rotateString('abcde', 'cdeab'))
assertFalse(rotateString('abcde', 'abced'))
assertFalse(rotateString('aa', 'a'))