/**
 * @param {string[]} words
 * @return {number}
 */
const uniqueMorseRepresentations = function(words) {
  const morseList = [".-","-...","-.-.","-..",".","..-.","--.","....","..",".---","-.-",".-..","--","-.","---",".--.","--.-",".-.","...","-","..-","...-",".--","-..-","-.--","--.."]
  const charCodeOfA = "a".charCodeAt(0)
  return words.map(word => {
    return Array.from(word).map(c => {
      return morseList[c.charCodeAt(0) - charCodeOfA]
    }).join("")
  }).filter((word, index, array) => {
    return array.indexOf(word) === index
  }).length
}

//====================
console.log(uniqueMorseRepresentations(["gin", "zen", "gig", "msg"]) == 2)
