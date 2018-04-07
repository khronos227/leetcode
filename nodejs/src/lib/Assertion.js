module.exports = {
  assertTrue: function (actual) {
    if (!actual) throw new Error("This must be true")
    return true
  },
  assertFalse: function (actual) {
    if (actual) throw new Error("This must be false")
    return true
  },
  assertEqualArray: function (actual, expected) {
    if (!(actual instanceof Array) || !(expected instanceof Array)) return
    if (actual.length !== expected.length) return false
    return expected.every((num, index) => {
      if (num !== actual[index]) throw new Error(`"${actual}" must be expected value: "${expected}"`)
      return true
    })
  }
}