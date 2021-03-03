// TEST/ASSERTION FUNCTIONS
const eqArrays = (arr1, arr2) => {
  
  
  if (arr1.length !== arr2.length) {
    return false;
  }
  for (i = 0; i < arr1.length; i++) {
    if(arr1[i] !== arr2[i]) {
      return false;
    }
    
  
  } return true;
};


const assertArraysEqual = (array1, array2) => {
  if(eqArrays(array1, array2)) {
    console.log(`✅: PASS`);
  } else {
    console.log(`❌: FAIL`);
  }
};


const middle = (array) => {
  const len = array.length;
  const even1 = (len / 2) - 1;  //even1 is first middle
  const even2 = (len / 2);  //even2 is second middle
  const odd = (Math.floor(len / 2));
  //console.log(even1);
  //console.log(even2);   // check if middle math is correct 
  if (array.length === 1 || len === 2) {
    return [];
  } else if (len % 2 === 0) {
    return [array[even1], array[even2]];
  } else {
    return [Math.floor(odd)];
  }
  
};

console.log(middle([0, 1, 2, 3]));
console.log(middle([0, 1, 2, 3, 4, 5]));
console.log(middle([0, 1, 2, 3, 4, 5, 6, 7]));
console.log(middle([0, 1, 2]));
console.log(middle([0, 1, 2, 3, 4]));
console.log(middle([0, 1, 2, 3, 4, 5, 6]));