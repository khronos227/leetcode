const asserts = {
  assertTrue: function (actual) {
    try {
      return asserts.assertEqual(actual, true)
    } catch (_) {
      throw new Error("This must be true")
    }
  },
  assertFalse: function (actual) {
    try {
      return asserts.assertEqual(actual, false)
    } catch (_) {
      throw new Error("This must be false")
    }
  },
  assertEqual: function (actual, expected) {
    if (actual !== expected) throw new Error(`"${actual}" must be expected value: "${expected}"`)
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

module.exports = asserts