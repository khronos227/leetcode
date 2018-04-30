/**
 * @param {string} paragraph
 * @param {string[]} banned
 * @return {string}
 */
const mostCommonWord = function (paragraph, banned) {
  const counts = {}
  paragraph.replace(/[!?',;.]/g, '').toLowerCase().split(' ').forEach(str => {
    counts[str] = (counts[str] || 0) + 1
  })
  return Object.keys(counts).filter(str => {
    return !(banned.includes(str))
  }).sort((a, b) => {
    return counts[b] - counts[a]
  })[0]
}

//=======================
const {assertEqual} = require('./lib/Assertion')

assertEqual(mostCommonWord('Bob hit a ball, the hit BALL flew far after it was hit.', ['hit']), 'ball')
assertEqual(mostCommonWord('Bob. hIt, baLl', ['bob', 'hit']), 'ball')