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

const map = function (array, callback) {
  // console.log('array: ', array);
  // console.log('callback: ', callback);   1
  const results = [];

  for (let item of array) {
    // console.log('item BEFORE: ', item);
    // console.log('item AFTER: ', callback(item));   2
    // console.log('---')

    results.push(callback(item));
  }
  return results;
};

module.exports = map;

const words = ['ground', 'control', 'to', 'major', 'tom'];
// console.log(words)

// const results1 = map(words, word => word[0]);
// console.log(results1);

// assertArraysEqual(map(words, word => word = 'V'), ['V','V','V','V','V'])
// console.log('');
//console.log(map(words, results1);

// console.log(map(words, word => word[0]));
// assertArraysEqual((map(words, word => word[0])), [ 'g', 'c', 't', 'm', 't' ]);
// console.log('');

const num = [1, 2, 3, 4, 5];
console.log(
  map(num, (n) => n + 2),
  [2, 4, 5, 6, 7]
);
assertArraysEqual(
  map(num, (n) => n + 2),
  [3, 4, 5, 6, 7]
);

console.log(
  map(num, (n) => n * 2),
  [2, 4, 6, 8, 10]
);

//console.log(Number('2' * 2));

const double = function (num) {
  return num * 2;
};
const numbers = [5, 8, 100, 200];

//console.log(map(numbers, double));
assertArraysEqual(map(numbers, double), [10, 16, 200, 400]);
assertArraysEqual(map(words, double), [10, 16, 200, 400]);

const fullNames = [
  { firstName: 'James', lastName: 'Biesenthal' },
  { firstName: 'Liuming', lastName: 'Fan' },
];

const arrayLastNames = map(fullNames, (element) => element.lastName);
console.log(arrayLastNames);

assertArraysEqual(arrayLastNames, ['Biesenthal', 'Fan']);
