// // Test file for Tail.js
// const tail = require('../head');
// const assertEqual = require('../assertEqual')


// // Test Case: Check the original array
//  const words = ["Yo Yo", "Lighthouse", "Labs"];
//  const tailWords = tail(words);
// //tail(words); // no need to capture the return value since we are not checking it
// assertEqual(words.length, 3); // original array should still have 3 elements!
// assertEqual(tailWords[0], "Lighthouse"); // checks first element is light house
// assertEqual(tailWords[1], "Labs"); // checks first element is light house

const assert = require('chai').assert;
const   tail = require('../tail');
const words = ["Yo Yo", "Lighthouse", "Labs"];
const tailWords = tail(words);

describe("#tail", () => {
  it('returns "lighthouse" of tailWords[0]', () => {
    assert.strictEqual(tailWords[0], "Lighthouse");
  });
  it("returns 3 for words.length", () => {
    assert.strictEqual(words.length, 3); 
  });
  it('returns [6.7], of [5.6.7]', () => {
    assert.deepEqual(tail([5, 6, 7]), [6, 7]);
  });
  it('does not returns ["Lighthouse", Labs] for ["Hello", "Lighthouse", "Labs"]', () => {
    assert.notStrictEqual(tail(["Hello", "Lighthouse", "Labs"]), ["Hello", "Lighthouse"]);
  });
  it('returns "Lighthouse", "Labs" for "Hello", "Lighthouse", "Labs"', () => {
    assert.deepEqual(tail(["Hello", "Lighthouse", "Labs"]), ["Lighthouse", "Labs"]);
  });
  it('does not return 5 for [1]', () => {
    assert.notDeepEqual(tail([1]), 5);
  });
  it('does not return a number of []', () => {
    assert.notDeepEqual(tail([]), 5);
  });
  it('returns [] of [5]', () => {
    assert.deepEqual(tail([5]), []);
  })
});
