/**
 * @param {number[][]} points
 * @return {number}
 */
const largestTriangleArea = function (points) {
  let res = 0
  const triangle = (p1, p2, p3) => Math.abs((p2[0] - p1[0]) * (p3[1] - p1[1]) - (p3[0] - p1[0]) * (p2[1] - p1[1])) / 2

  for (let i = 0; i < points.length - 2; i++) {
    for (let j = i + 1; j < points.length - 1; j++) {
      for (let k = j + 1; k < points.length; k++) {
        const t = triangle(points[i], points[j], points[k])
        if (res < t) {
          res = t
        }
      }
    }
  }

  return res
}

//=======================
const {assertEqual} = require('./lib/Assertion')

assertEqual(largestTriangleArea([[0, 0], [0, 1], [1, 0], [0, 2], [2, 0]]), 2)
assertEqual(largestTriangleArea([[4, 6], [6, 5], [3, 1]]), 5.5)
