/**
 * @param {string} S
 * @return {string}
 */
const toGoatLatin = function (S) {
  const vowels = ['a', 'e', 'i', 'o', 'u', 'A', 'E', 'I', 'O', 'U']
  let extraA = 'a'
  return S.split(' ').map(str => {
    if (vowels.indexOf(str.charAt(0)) <= -1) {
      str = str.substring(1) + str.charAt(0)
    }
    extraA += 'a'
    return str + 'm' + extraA
  }).join(' ')
}

//=======================
const {assertEqual} = require('./lib/Assertion')

assertEqual(toGoatLatin('I speak Goat Latin'), 'Imaa peaksmaaa oatGmaaaa atinLmaaaaa')
assertEqual(toGoatLatin('The quick brown fox jumped over the lazy dog'), 'heTmaa uickqmaaa rownbmaaaa oxfmaaaaa umpedjmaaaaaa overmaaaaaaa hetmaaaaaaaa azylmaaaaaaaaa ogdmaaaaaaaaaa')