// FUNCTION IMPLEMENTATION
/*const assertEqual = function(actual, expected) {
  if (actual === expected) {
    console.log(`✅: ${actual} === ${expected}`);
  } else {
    console.log(`❌: actual !== expected`);
  }
};*/

// const eqArrays = (arr1, arr2) => {
  
  
//   if (arr1.length !== arr2.length) {
//     return false;
//   }
//   for (i = 0; i < arr1.length; i++) {
//     if(arr1[i] !== arr2[i]) {
//       return false;
//     }
    
  
//   } return true;
// };

const eqArrays = require('./eqArrays.js');

const assertArraysEqual = (array1, array2) => {
  if(eqArrays(array1, array2)) {
    console.log(`✅: PASS`);
  } else {
    console.log(`❌: FAIL`);
  }
};
  
module.exports = assertArraysEqual;
//assertArraysEqual([1, 2, 3], [1, 2, 2]);
//assertArraysEqual([1, 2, 3], [1, 2, 3]);

