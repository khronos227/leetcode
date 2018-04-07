/**
 * @param {number[]} widths
 * @param {string} S
 * @return {number[]}
 */
const numberOfLines = function (widths, S) {
  const charCodeOfA = "a".charCodeAt(0)
  const units = Array.from(S).map((c => {
    return widths[c.charCodeAt(0) - charCodeOfA]
  }))

  let lines = 1
  let unitCount = 0

  units.forEach((unit => {
    if (unitCount + unit > 100) {
      lines++
      unitCount = 0
    }
    unitCount += unit
  }))
  return [lines, unitCount]
}

//=========================
const assertEq = function (actual, expected) {
  return expected.every((num, index) => {
    return num === actual[index]
  })
}

console.log(
  assertEq(
    numberOfLines(
      [10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10],
      "abcdefghijklmnopqrstuvwxyz"
    ),
    [3, 60]
  )
)

console.log(
  assertEq(
    numberOfLines(
      [4, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10],
      "bbbcccdddaaa"
    ),
    [2, 4])
)
