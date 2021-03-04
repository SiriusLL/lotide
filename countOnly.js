// FUNCTION IMPLEMENTATION
const assertEqual = function(actual, expected) {
  if (actual === expected) {
    console.log(`✅: ${actual} === ${expected}`);
  } else {
    console.log(`❌: actual !== expected`);
  }
};

// allItems: an array of strings that we need to look through
// itemsToCount: an object specifying what to count
const countOnly = function(allItems, itemsToCount) {
  
  let result = {};

  for (let arrItems of allItems) {
    if (itemsToCount[arrItems]) {   //) && itemsToCount[arrItems] === 'true'  this is incorrect because your compairing string true to value of true, instead you are already checking for true or false in the truthy statement
      if (result[arrItems]) {
      result[arrItems] += 1;
      } else {
        result[arrItems] = 1;
      }
    //console.log('we found one');  checks if we found a matching name
    }   
    
    //console.log(arrItems);
  }
  return result;
}
 






const firstNames = [
  "Karl",
  "Salima",
  "Agouhanna",
  "Fang",
  "Kavith",
  "Jason",
  "Salima",
  "Fang",
  "Joe",
  "Jason"
];

const result1 = countOnly(firstNames, { "Jason": true, "Karima": true, "Fang": true, "Agouhanna": false });
// console.log(result1);
// assertEqual(result1["Jason"], 1);  //checks if jason is true
// assertEqual(result1["Karima"], undefined);
// assertEqual(result1["Fang"], 2);
// assertEqual(result1["Agouhanna"], undefined);
 console.log(countOnly(firstNames, { "Jason": true, "Karima": true, "Fang": true, "Agouhanna": false }));

 console.log(countOnly(firstNames, { "Jason": true, "Karima": true, "Fang": false, "Agouhanna": false}));


 //they array items are already compairing true or false line 17