/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number[]}
 */
const intersection = function (nums1, nums2) {
  return nums2.reduce((prev, curr) => {
    if (!prev.includes(curr)) {
      prev.push(curr)
    }
    return prev
  }, []).reduce((prev, curr) => {
    if (nums1.includes(curr)) {
      prev.push(curr)
    }
    return prev
  }, [])
}

//=======================
const {assertEqualArray} = require('./lib/Assertion')

assertEqualArray(intersection([1, 2, 2, 1], [2, 2]), [2])
