const eqArrays = (arr1, arr2) => {
  if (arr1.length !== arr2.length) {
    return false;
  }
  for (i = 0; i < arr1.length; i++) {
    if (arr1[i] !== arr2[i]) {
      return false;
    }
  }
  return true;
};

const assertArraysEqual = (array1, array2) => {
  if (eqArrays(array1, array2)) {
    console.log(`✅: PASS`);
  } else {
    console.log(`❌: FAIL`);
  }
};
const myFunction = (param) => {
  return param < 0;
};

const takeUntil = (array, callback) => {
  //function with 2 parameters of 'array, callback' that takes in an array and a condition to find an index
  //and slices out the rest of the array returning a new arr
  //let check = callback(condition);
  //console.log(callback());
  //console.log(something);
  for (let value = 0; value < array.length; value++) {
    if (callback(array[value])) {
      return array.slice(0, value);
    }
  } //return array.slice(value, array.length -1);
};

module.exports = takeUntil;

const data1 = [1, 2, 5, 7, 2, -1, 2, 4, 5];
const results1 = takeUntil(data1, myFunction);
console.log(results1);

console.log('---');

const data2 = [
  "I've",
  'been',
  'to',
  'Hollywood',
  ',',
  "I've",
  'been',
  'to',
  'Redwood',
];
const results2 = takeUntil(data2, (x) => x === ',');
console.log(results2);

// ---------------------
// [ 1, 2, 5, 7, 2 ]
// ---
// [ 'I\'ve', 'been', 'to', 'Hollywood' ] `
