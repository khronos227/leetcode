/**
 * @param {number[]} nums
 * @return {number}
 */
const deleteAndEarn = function (nums) {
  if (nums.length === 0) return 0

  const countMap = nums.reduce((previousValue, currentValue) => {
    previousValue[currentValue] = (previousValue[currentValue] || 0) + currentValue
    return previousValue
  }, {})

  const valueList = Object.keys(countMap).sort((a, b) => {
    return a - b
  }).map(value => {
    return ~~value
  })

  const maxValues = [
    new Array(valueList.length).fill(0), // select target value
    new Array(valueList.length).fill(0)
  ]

  // console.log(valueList)
  // console.log(countMap)
  // console.log("===========")
  valueList.forEach((num, index) => {
    if (index === 0) {
      maxValues[0][index] = countMap[num]
      maxValues[1][index] = 0
      return
    }
    const selectableIndex = (() => {
      let i = index - 1
      while (i >= 0) {
        if (valueList[i] !== num - 1 && valueList[i] !== num + 1) {
          return i
        }
        i--
      }
      return i
    })()
    maxValues[0][index] = countMap[num] + (selectableIndex < 0 ? 0 : Math.max(maxValues[0][selectableIndex], maxValues[1][selectableIndex]))
    maxValues[1][index] = Math.max(maxValues[0][index - 1], maxValues[1][index - 1])
  })
  // maxValues.forEach(value => {
  //   console.log(value)
  // })
  return Math.max.apply([], maxValues.concat.apply([], maxValues))
}

//====================

let value = deleteAndEarn([2, 3, 4])
console.log(value)
console.log(value === 6)
value = deleteAndEarn([2, 2, 3, 3, 3, 4])
console.log(value)
console.log(value === 9)
value = deleteAndEarn([12, 32, 93, 17, 100, 72, 40, 71, 37, 92, 58, 34, 29, 78, 11, 84, 77, 90, 92, 35, 12, 5, 27, 92, 91, 23, 65, 91, 85, 14, 42, 28, 80, 85, 38, 71, 62, 82, 66, 3, 33, 33, 55, 60, 48, 78, 63, 11, 20, 51, 78, 42, 37, 21, 100, 13, 60, 57, 91, 53, 49, 15, 45, 19, 51, 2, 96, 22, 32, 2, 46, 62, 58, 11, 29, 6, 74, 38, 70, 97, 4, 22, 76, 19, 1, 90, 63, 55, 64, 44, 90, 51, 36, 16, 65, 95, 64, 59, 53, 93])
console.log(value)
console.log(value === 3451)
value = deleteAndEarn([3, 3, 3, 4, 2])
console.log(value)
console.log(value === 9)
value = deleteAndEarn([1, 6, 3, 3, 8, 4, 8, 10, 1, 3])
console.log(value)
console.log(value === 43)
