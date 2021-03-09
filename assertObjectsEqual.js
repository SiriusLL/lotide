

// FUNCTION IMPLEMENTATION
const assertEqual = function(actual, expected) {
  if (actual === expected) {
    console.log(`✅: ${actual} === ${expected}`);
  } else {
    console.log(`❌: actual !== expected`);
  }
};



const eqArrays = (arr1, arr2) => {
  
  
  if (arr1.length !== arr2.length) {
    return false;
  }
  for (i = 0; i < arr1.length; i++) {
    if(arr1[i] !== arr2[i]) {
      return false;
    }
    
  
  } return true;
}


//Implement the definition for function eqObjects which will take in two objects and returns true or false, based on a perfect match.


// Returns true if both objects have identical keys with identical values.
// Otherwise you get back a big fat false!
const eqObjects = function(object1, object2) {        //function that takes in two arrays
  const firstObb = Object.keys(object1);                    //changes the objects to an array of keys
  const secObb = Object.keys(object2);
  
  if (firstObb.length !== secObb.length) {            //compairs length of the arrays to make sure they are equal returns false if not equal
    return false;
  
  }

  for (let keys of firstObb) {                                                  //looks through keys of first object
    if (Array.isArray(object1[keys]) && (Array.isArray(object2[keys]))) {       //checks to see if both values are NOT arrays
      if (!eqArrays(object1[keys], object2[keys])) {                            //if NOT arrays returns false
        return false;
      }
    } else {
      if (object1[keys] !== object2[keys]) {                                    //else if they are arrays checks if value are NOT equal
        return false;                                                           //if NOT equal returns false
      }
    }

    
  }                                                                             //if no False in the loop returns True

  return true;
  
};


// FUNCTION IMPLEMENTATION
const assertObjectsEqual = function(actual, expected) {                                             //function takes in two objects and compairs them
  // Implement me!
  const inspect = require('util').inspect; // <= add this line                                      //add util library so you can use it
  if (eqObjects(actual, expected)) {                                                                //calls eqObjects and checks if truthy
    console.log(`✅✅✅ Assertion Passed: ${inspect(actual)} === ${inspect(expected)}`);            //if truthy console.log appropriate message, you need utils inspect to show the actual
  } else {                                                                                          // ---string in the object otherwise will just return that its an object
    console.log(`🛑🛑🛑: Assertion Failed: ${inspect(actual)} !== ${inspect(expected)}`);           //else does the same thing but for the oposite appropriate message
  }
};

module.exports = assertObjectsEqual;
const ab = { a: "1", b: "2" };
const ba = { b: "2", a: "1" };
//eqObjects(ab, ba); // => true

const abc = { a: "1", b: "2", c: "3" };
//eqObjects(ab, abc); // => false

assertObjectsEqual(ab, ba); // => true   
assertObjectsEqual(eqObjects(ab, abc), false); // => false
assertObjectsEqual(eqObjects(abc, ab), false); // => false


const cd = { c: "1", d: ["2", 3] };
const dc = { d: ["2", 3], c: "1" };
assertObjectsEqual(eqObjects(cd, dc), true); // => true

const cd2 = { c: "1", d: ["2", 3, 4] };
assertObjectsEqual(eqObjects(cd, cd2), false); // => false


