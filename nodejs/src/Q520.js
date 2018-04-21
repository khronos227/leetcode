/**
 * @param {string} word
 * @return {boolean}
 */
const detectCapitalUse = function (word) {
  return word.toUpperCase() === word || word.toLowerCase() === word ||
    (word.length > 0 && word.substring(1).toLowerCase() === word.substring(1))
}

//=======================
const {assertTrue, assertFalse} = require('./lib/Assertion')

assertTrue(detectCapitalUse("USA"))
assertFalse(detectCapitalUse("FlaG"))
