/**
 * @param {string} S
 * @param {string} T
 * @return {boolean}
 */
const backspaceCompare = function (S, T) {
  const build = function (str) {
    let index = 0
    const buffer = new Array(str.length)
    Array.from(str).forEach(s => {
      if (s === '#') {
        if (index > 0) index--
      } else {
        buffer[index] = s
        index++
      }
    })
    return buffer.slice(0, index).join('')
  }
  return build(S) === build(T)
}

//=======================
const {assertTrue, assertFalse} = require('./lib/Assertion')

assertTrue(backspaceCompare('ab#c', 'ad#c'))
assertTrue(backspaceCompare('ab##', 'c#d#'))
assertTrue(backspaceCompare('a##c', '#a#c'))
assertFalse(backspaceCompare('a#c', 'b'))
