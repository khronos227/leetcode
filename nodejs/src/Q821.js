/**
 * @param {string} S
 * @param {string} C
 * @return {number[]}
 */
const shortestToChar = function (S, C) {
  const targets = Array.from(S).reduce((prev, curr, index) => {
    if (curr === C) {
      prev.push(index)
    }
    return prev
  }, [])
  let targetIndex = 0
  return Array.from(S).map((char, index) => {
    const sub = targets.slice(targetIndex, targetIndex + 2)
    if (sub.length === 2 && sub[1] === index) targetIndex++

    if (char === C) return 0
    return Math.min.apply(null, sub.map((num) => {
      return Math.abs(num - index)
    }))
  })
}

//=======================
const {assertEqualArray} = require('./lib/Assertion')

assertEqualArray(shortestToChar('loveleetcode', 'e'), [3, 2, 1, 0, 1, 0, 0, 1, 2, 2, 1, 0])
