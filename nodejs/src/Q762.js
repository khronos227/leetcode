/**
 * @param {number} L
 * @param {number} R
 * @return {number}
 */
const countPrimeSetBits = function (L, R) {
  // max number is at most 10^6
  const primes = {
    2: 1,
    3: 1,
    5: 1,
    7: 1,
    11: 1,
    13: 1,
    17: 1,
    19: 1
  }

  const hash = {}
  for (let i = L; i <= R; i++) {
    let num = i
    let bitCount = 0
    while (num > 0) {
      if (num % 2 !== 0) {
        bitCount++
      }
      num = num >>> 1
    }
    hash[bitCount] = (hash[bitCount] | 0) + 1
  }
  return Object.keys(hash).filter((num) => {
    return primes[num]
  }).map((key) => {
    return hash[key]
  }).reduce((prev, curr) => {
    return prev + curr
  }, 0)
}

//=======================
const {assertEqual} = require('./lib/Assertion')

assertEqual(countPrimeSetBits(6, 10), 4)
assertEqual(countPrimeSetBits(10, 15), 5)
assertEqual(countPrimeSetBits(842, 888), 23)
assertEqual(countPrimeSetBits(834, 834), 0)
assertEqual(countPrimeSetBits(248657, 257888), 3381)