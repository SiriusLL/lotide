// const middle = require('../middle.js');
// const assertArraysEqual = require('../assertArraysEqual.js');

// console.log(assertArraysEqual(middle([0, 1, 2, 3]), [1, 2]));
// console.log(assertArraysEqual(middle([0, 1, 2, 3, 4, 5]), [2, 3]));
// console.log(middle([0, 1, 2, 3, 4, 5, 6, 7]));
// console.log(middle([0, 1, 2]));
// console.log(middle([0, 1, 2, 3, 4]));
// console.log(middle([0, 1, 2, 3, 4, 5, 6]));

// console.log(assertArraysEqual(middle([1, 2, 3, 4]), [2, 3]))

const assert = require('chai').assert;
const   middle = require('../middle');

describe("#middle", () => {
  it('returns [1, 2] of [0, 1, 2, 3]', () => {
    assert.deepEqual(middle([0, 1, 2, 3]), [1, 2]);
  });
  it('returns [2, 3] of [0, 1, 2, 3, 4, 5]', () => {
    assert.deepEqual(middle([0, 1, 2, 3, 4, 5]), [2, 3]);
  });

  it('returns [2] of [0, 1, 2, 3, 4]', () => {
    assert.deepEqual(middle([0, 1, 2, 3, 4]), [2]);
  });

  it('returns [] of [0, 1]', () => {
    assert.deepEqual(middle([0, 1]), []);
  });
});

