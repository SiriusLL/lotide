// FUNCTION IMPLEMENTATION
const assertEqual = function(actual, expected) {
  if (actual === expected) {
    console.log(`✅: ${actual} === ${expected}`);
  } else {
    console.log(`❌: actual !== expected`);
  }
};




const countLetters = function(words) {
  words = words.replace(/\s+/g, '')
  let result = {};

  for (let letter of words) {
    console.log(letter);
    if (result[letter]) {
      result[letter] += 1;
    } else {
      result[letter] = 1;
    }
  }
  return result;
}



console.log(countLetters('Hello a'));


//look up regular expressions in mdn  regexp
module.exports = countLetters;