// FUNCTION IMPLEMENTATION
// const assertEqual = function(actual, expected) {
//   if (actual === expected) {
//     console.log(`✅: ${actual} === ${expected}`);
//   } else {
//     console.log(`❌: actual !== expected`);
//   }
// };

const tail = (array) => {
  let tailArray = array.slice(1);
  return tailArray;
};

module.exports = tail;
