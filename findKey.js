// FUNCTION IMPLEMENTATION
const assertEqual = function(actual, expected) {
  if (actual === expected) {
    console.log(`✅: ${actual} === ${expected}`);
  } else {
    console.log(`❌: actual !== expected`);
  }
};


// findKeyByValue = function(bestShows, shows) {
//   //const newArr = Object.keys(bestShows);
//   let result = '';
//   for (let genreIndex in bestShows) {
//     if (bestShows[genreIndex] === shows) {
//       console.log(bestShows[genreIndex]);
//       result = genreIndex;
//       return result;
//     } //else {
//       //continue;
//     //}
//   }
//   return; // undefined;

// };

// Implement the function findKey which takes in an object and a callback. It should scan the object and return the first key for which the callback returns a truthy value. If no key is found, then it should return undefined.


const findKey = (object, condition) => {
  for (let key in object) {                 //loop through object keys
    //for (let key2 in object.key)  
      if (condition(object[key])) {         //first truthy value return the key[value] which is an object and stop the loop
                                            //truthy value defined by calling annonymous funciont with parameter of the loop index (the key)
                                            //truthy return KEY
      return key;
      }
  }
}

module.exports = findKey;

findKey({
  "Blue Hill": { stars: 1 },
  "Akaleri":   { stars: 3 },
  "noma":      { stars: 2 },
  "elBulli":   { stars: 3 },
  "Ora":       { stars: 2 },
  "Akelarre":  { stars: 3 }
}, x => x.stars === 2) // => "noma"

console.log(findKey({
  "Blue Hill": { stars: 1 },
  "Akaleri":   { stars: 3 },
  "noma":      { stars: 2 },
  "elBulli":   { stars: 3 },
  "Ora":       { stars: 2 },
  "Akelarre":  { stars: 3 }
}, x => x.stars === 2)) // => "noma"

assertEqual(findKey({
  "Blue Hill": { stars: 1 },
  "Akaleri":   { stars: 3 },
  "noma":      { stars: 2 },
  "elBulli":   { stars: 3 },
  "Ora":       { stars: 2 },
  "Akelarre":  { stars: 3 }
}, x => x.stars === 2)), "noma"); // => "noma"


