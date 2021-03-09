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


const without = (arry1, arry2) => {
  let newArr = [];
  for (let i = 0; i < arry1.length; i++) {
    if(!arry2.includes(arry1[i])) {
      newArr.push(arry1[i]);
    
      
    }

    
    
    
  } console.log(newArr)
  return newArr;
}

module.exports = without
/*without([1, 2, 3], [1]) // => [2, 3]
without(["1", "2", "3"], [1, 2, "3"]) // => ["1", "2"]
//assertArraysEqual(without([1,2,3], [1]), [2,3])

const words = ["hello", "world", "lighthouse"];
without(words, ["lighthouse"]); // no need to capture return value for this test case
// Make sure the original array was not altered by the without function
assertArraysEqual(words, ["hello", "world", "lighthouse"]);*/