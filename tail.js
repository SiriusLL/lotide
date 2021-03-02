// FUNCTION IMPLEMENTATION
const assertEqual = function(actual, expected) {
  if (actual === expected) {
    console.log(`✅: ${actual} === ${expected}`);
  } else {
    console.log(`❌: actual !== expected`);
  }
};

const tail = (array) => {
  let tailArray = array.slice(1);
  return tailArray;
};

// Test Case: Check the original array
const words = ["Yo Yo", "Lighthouse", "Labs"];
const tailWords = tail(words);
//tail(words); // no need to capture the return value since we are not checking it
assertEqual(words.length, 3); // original array should still have 3 elements!
assertEqual(tailWords[0], "Lighthouse"); // checks first element is light house
assertEqual(tailWords[1], "Labs"); // checks first element is light house