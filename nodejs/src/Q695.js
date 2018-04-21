/**
 * @param {number[][]} grid
 * @return {number}
 */
const maxAreaOfIsland = function (grid) {
  const height = grid.length
  const width = grid[0].length

  let index = 0

  function changeValue(h, w, from, to) {
    if (grid[h][w] !== from) return
    grid[h][w] = to
    if (h > 0) {
      changeValue(h - 1, w, from, to)
    }
    if (h < height - 1) {
      changeValue(h + 1, w, from, to)
    }
    if (w > 0) {
      changeValue(h, w - 1, from, to)
    }
    if (w < width - 1) {
      changeValue(h, w + 1, from, to)
    }
  }

  for (let h = 0; h < height; h++) {
    for (let w = 0; w < width; w++) {
      const upper = h > 0 ? grid[h - 1][w] : 0
      const left = w > 0 ? grid[h][w - 1] : 0
      const value = grid[h][w]
      if (value === 0) continue
      if (upper === 0 && left === 0) {
        index++
        grid[h][w] = index
      } else if (upper > 0 && left > 0) {
        grid[h][w] = Math.max(upper, left)
        if (upper !== left) {
          changeValue(h - 1, w, Math.min(upper, left), grid[h][w])
          changeValue(h, w - 1, Math.min(upper, left), grid[h][w])
        }
      } else if (upper > 1 || left > 1) {
        grid[h][w] = Math.max(upper, left)
      }
    }
  }

  let count = {0: 0}
  for (let h = 0; h < height; h++) {
    for (let w = 0; w < width; w++) {
      const value = grid[h][w]
      if (value > 0) {
        count[value] = (++count[value] || 1)
      }
    }
  }
  return Math.max.apply(null, Object.values(count))
}

//=======================
const {assertEqual} = require('./lib/Assertion')

assertEqual(maxAreaOfIsland(
  [[0, 0, 1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 1, 1, 1, 0, 0, 0],
    [0, 1, 1, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0],
    [0, 1, 0, 0, 1, 1, 0, 0, 1, 0, 1, 0, 0],
    [0, 1, 0, 0, 1, 1, 0, 0, 1, 1, 1, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 1, 1, 1, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 1, 1, 0, 0, 0, 0]]
), 6)
assertEqual(maxAreaOfIsland(
  [[0, 0, 1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 1, 1, 1, 0, 0, 0],
    [0, 1, 1, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0],
    [0, 1, 0, 0, 1, 1, 0, 0, 1, 0, 1, 1, 0],
    [0, 1, 0, 0, 1, 1, 0, 1, 1, 1, 1, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 1, 1, 1, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 1, 1, 0, 0, 0, 0]]
), 8)
assertEqual(maxAreaOfIsland([[0]]), 0)
assertEqual(maxAreaOfIsland([[0, 1], [1, 1]]), 3)
assertEqual(maxAreaOfIsland([[0, 1, 1], [1, 1, 0]]), 4)
assertEqual(maxAreaOfIsland([[1, 1, 1], [1, 0, 1], [0, 1, 1]]), 7)