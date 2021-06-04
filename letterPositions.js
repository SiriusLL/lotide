const assertArraysEqual = function (array1, array2) {
  if (eqArrays(array1, array2)) {
    console.log(`✅: PASS`);
  } else {
    console.log(`❌: FAIL`);
  }
};

const eqArrays = function (arr1, arr2) {
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

const letterPositions = function (sentence) {
  const results = {};
  // logic to update results here
  for (let index in sentence) {
    console.log(index);
    if (sentence[index] === ' ') {
      continue;
    }
    if (results[sentence[index]]) {
      //checks if key value exists
      results[sentence[index]].push(index); //pushes index to array in object results[sentence[index]]
    } else {
      results[sentence[index]] = [index]; //if doesn't exist creats a key results[sentence[index]] = to value of [index]
    }
  }
  return results;
  //return true;
};

module.exports = letterPositions;

//console.log(assertArraysEqual('hello'.indexOf('h'), 0));
console.log(letterPositions('lighthouse in the house'));
console.log(letterPositions('in in in in in in'));
