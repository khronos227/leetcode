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
rotateString('abcde', 'cdeab')
assertFalse(rotateString('abcde', 'abced'))
assertFalse(rotateString('aa', 'a'))

const rotateStringWithKMP = function (A, B) {
  if (A.length !== B.length) return false
  if (A.length === 0) return true

  const T = Array(A.length + 1).fill(1)
  let left = -1
  for (let right = 0; right < A.length; right++) {
    while (left >= 0 && (B.charAt(left) !== B.charAt(right))) {
      left -= T[left]
    }
    T[right + 1] = right - left++
  }
  const I = 3
  // console.log(B.substring(0, T[I + 1]), B.substring(I - T[I + 1], I), T[I + 1])

  let matchLen = 0
  return Array.from(A + A).some(c => {
    // console.log(matchLen)
    while (matchLen >= 0 && B.charAt(matchLen) !== c) {
      matchLen -= T[matchLen]
    }
    if (++matchLen === A.length) return true
  })
}

console.log(rotateStringWithKMP('abcde', 'cdeab'))
console.log(rotateStringWithKMP('abcde', 'abced'))
console.log(rotateStringWithKMP('asdfaskfjsl', 'bbbbbbbbbbb'))
