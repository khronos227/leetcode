/**
 * @param {number[]} nums
 * @return {number}
 */
const singleNumber = function (nums) {
  const hash = {}
  nums.forEach((num) => {
    hash[num] = (++hash[num] || 1)
  })
  return nums.filter((num) => {
    return hash[num] === 1
  })[0]
}

//=======================
const {assertEqual} = require('./lib/Assertion')

assertEqual(singleNumber([1, 2, 3, 4, 5, 1, 2, 3, 4]), 5)
//=======================

const singleNumberWithBit = function (nums) {
  return nums.reduce((prev, current) => {
    return prev ^ current
  })
}
assertEqual(singleNumberWithBit([1, 2, 3, 4, 5, 1, 2, 3, 4]), 5)
