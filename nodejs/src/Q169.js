/**
 * @param {number[]} nums
 * @return {number}
 */
const majorityElement = function (nums) {
  let num = 0
  let count = 0
  for (const n of nums.sort((a, b) => a - b)) {
    if (n === num) {
      count++
    } else {
      num = n
      count = 1
    }
    if (count > nums.length / 2) {
      return n
    }
  }
}

//=======================
const {assertEqual} = require('./lib/Assertion')

assertEqual(majorityElement([3, 2, 3]), 3)
assertEqual(majorityElement([2, 2, 1, 1, 1, 2, 2]), 2)