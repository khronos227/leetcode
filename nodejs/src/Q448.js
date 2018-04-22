/**
 * @param {number[]} nums
 * @return {number[]}
 */
const findDisappearedNumbers = function (nums) {
  nums = nums.sort((a, b) => {
    return a - b
  })

  let res = []
  let searchNum = 1
  for (let i = 0; i < nums.length; i++) {
    if (nums[i] === searchNum) {
      searchNum++
    } else if (nums[i] > searchNum) {
      res.push(searchNum)
      searchNum++
      i--
    }
  }
  if (searchNum <= nums.length) {
    for (let i = searchNum; i <= nums.length; i++) {
      res.push(i)
    }
  }
  return res
}

//=======================
const {assertEqualArray} = require('./lib/Assertion')

assertEqualArray(findDisappearedNumbers([4, 3, 2, 7, 8, 2, 3, 1]), [5, 6])
assertEqualArray(findDisappearedNumbers([1, 1]), [2])
assertEqualArray(findDisappearedNumbers([10, 2, 5, 10, 9, 1, 1, 4, 3, 7]), [6, 8])