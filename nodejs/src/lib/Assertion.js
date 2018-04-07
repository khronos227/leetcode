module.exports = {
  assertEqualArray: function (actual, expected) {
    if (!(actual instanceof Array) || !(expected instanceof Array)) return
    if (actual.length !== expected.length) return false
    return expected.every((num, index) => {
      return num === actual[index]
    })
  }
}