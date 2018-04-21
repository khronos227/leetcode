/**
 * @param {number[]} nums
 * @return {number}
 */
const findMaxConsecutiveOnes = function (nums) {
  let res = 0
  let count = 0
  nums.forEach((num) => {
    if (num) {
      count++
    } else {
      if (count > res) {
        res = count
      }
      count = 0
    }
  })
  if (count > res) {
    res = count
  }
  return res
}
//=======================
const {assertEqual} = require('./lib/Assertion')

assertEqual(findMaxConsecutiveOnes([1, 1, 0, 1, 1, 1]), 3)
