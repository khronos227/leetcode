/**
 * @param {number[]} nums
 * @return {void} Do not return anything, modify nums in-place instead.
 */
const moveZeroes = function (nums) {
  let currentIndex = 0
  nums.forEach((num) => {
    if (num === 0) return
    nums[currentIndex] = num
    currentIndex++
  })
  for (let i = currentIndex; i < nums.length; i++) {
    nums[i] = 0
  }
}

//=======================
const {assertEqualArray} = require('./lib/Assertion')

const nums = [0, 1, 0, 3, 12]
moveZeroes(nums)
assertEqualArray(nums, [1, 3, 12, 0, 0])
