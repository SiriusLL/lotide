// FUNCTION IMPLEMENTATION
// const assertEqual = function(actual, expected) {
//   if (actual === expected) {
//     console.log(`✅: ${actual} === ${expected}`);
//   } else {
//     console.log(`❌: ${actual} !== ${expected}`);
//   }
// };

const assertEqual = require('./assertEqual')


const head = (array) => {
  if (array.lenght === 0) {
    return undefined;
  } else {
    return array[0];
  }
};

module.exports = head;

// //TEST CODE
// assertEqual(head([5,6,7]), 5);
// assertEqual(head(["Hello", "Lighthouse", "Labs"]), "Hello");
// assertEqual(head(["Hello", "Lighthouse", "Labs"]), "Goodbye");
// assertEqual(head([1]), 5);
// assertEqual(head([]), 5);
// assertEqual(head([5]), 5);