
// we must have both assertEqual an head required because assertEqual would be out of scope
// test/assertEqualTest.js
//const head = require('../head');
//const assertEqual = require('../assertEqual')

// use these when using our own tests
// assertEqual(head([5,6,7]), 5);
// assertEqual(head(["Hello", "Lighthouse", "Labs"]), "Hello");
// assertEqual(head(["Hello", "Lighthouse", "Labs"]), "Goodbye");
// assertEqual(head([1]), 5);
// assertEqual(head([]), 5);
// assertEqual(head([5]), 5);

//chai based test code below

const assert = require('chai').assert;
const   head = require('../head');

describe("#head", () => {
  it("returns 1 for [1, 2, 3]", () => {
    assert.strictEqual(head([1, 2, 3]), 1);
  });
  it("returns '5' for ['5']", () => {
    assert.strictEqual(head(['5']), '5'); 
  });
  it("returns 5 for [5,6,7]", () => {
    assert.strictEqual(head([5,6,7]), 5);
  });
  it('does not returns "hello" for ["Hello", "Lighthouse", "Labs"]', () => {
    assert.notStrictEqual(head(["Hello", "Lighthouse", "Labs"]), "Goodbye");
  });
  it('returns "Hello" for "Hello", "Lighthouse", "Labs"', () => {
    assert.strictEqual(head(["Hello", "Lighthouse", "Labs"]), "Hello");
  });
  it('does not return 5 for [1]', () => {
    assert.notStrictEqual(head([1]), 5);
  });
  it('does not return a number of []', () => {
    assert.notStrictEqual(head([]), 5);
  });
  it('returns 5 of [5]', () => {
    assert.strictEqual(head([5]), 5);
  })
});