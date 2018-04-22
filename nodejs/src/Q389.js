/**
 * @param {string} s
 * @param {string} t
 * @return {character}
 */
const findTheDifference = function (s, t) {
  const sortedS = Array.from(s).sort()
  const sortedT = Array.from(t).sort()
  for (let i = 0; i < sortedT.length; i++) {
    if (sortedS[i] !== sortedT[i]) return sortedT[i]
  }
}

//=======================
const {assertEqual} = require('./lib/Assertion')

assertEqual(findTheDifference("abcd", "abcde"), 'e')
