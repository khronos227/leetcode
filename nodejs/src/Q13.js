/**
 * @param {string} s
 * @return {number}
 */
const romanToInt = function (s) {
  let charMap = {
    'I': 1,
    'V': 5,
    'X': 10,
    'L': 50,
    'C': 100,
    'D': 500,
    'M': 1000,
  }
  if (!s) return 0
  let currentNum = 0
  // return Array.from(s).reverse().reduce((prev, curr) => {
  //   const num = charMap[curr]
  //   if (num < currentNum) {
  //     return prev - num
  //   } else if (num > currentNum) {
  //     currentNum = num
  //   }
  //   return prev + num
  // }, 0)
  return Array.from(s).reverse().map(char => {
    const num = charMap[char]
    if (num < currentNum) {
      return -num
    } else if (num > currentNum) {
      currentNum = num
    }
    return num
  }).reduce((prev, curr) => {
    return prev + curr
  })
}
// const romanToInt = function (s) {
//   if (!s) return 0
//
//   const list = Array.from(s)
//   return list.map((char, index) => {
//     switch (char) {
//       case 'M':
//         return 1000
//       case 'D':
//         return 500
//       case 'C':
//         return (() => {
//           let val = 100
//           if (index < list.length - 1 && list[index + 1] === 'D' || list[index + 1] === 'M') {
//             val *= -1
//           }
//           return val
//         })()
//       case 'L':
//         return 50
//       case 'X':
//         return (() => {
//           let val = 10
//           if (index < list.length - 1 && list[index + 1] === 'L' || list[index + 1] === 'C') {
//             val *= -1
//           }
//           return val
//         })()
//       case 'V':
//         return 5
//       case 'I':
//         return (() => {
//           let val = 1
//           if (index < list.length - 1 && list[index + 1] === 'V' || list[index + 1] === 'X') {
//             val *= -1
//           }
//           return val
//         })()
//     }
//   }).reduce((curr, prev) => {
//     return curr + prev
//   })
// }

//=======================
const {assertEqual} = require('./lib/Assertion')

assertEqual(romanToInt('III'), 3)
assertEqual(romanToInt('IV'), 4)
assertEqual(romanToInt('IX'), 9)
assertEqual(romanToInt('LVIII'), 58)
assertEqual(romanToInt('MCMXCIV'), 1994)
