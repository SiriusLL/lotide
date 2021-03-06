const age = { 
  Tom: "1",
  Harry: "2",
  Moe:  "3"
};
 console.log(age['Moe']);









 // FUNCTION IMPLEMENTATION
const assertObjectsEqual = function(actual, expected) {
  // Implement me!
  if (actual === expected) {
    console.log(`✅✅✅ Assertion Passed: ${actual} === ${expected}`);
  } else {
    console.log(`🛑🛑🛑: Assertion Failed: ${actual} !== ${expected}`);
  }
};


assertObjectsEqual()
