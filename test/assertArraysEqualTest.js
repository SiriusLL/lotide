const assertArraysEqual = require('../assertArraysEqual.js')
//const eqArrays = require('../eqArrays.js')

assertArraysEqual([1, 2, 3], [1, 2, 2]);
assertArraysEqual([1, 2, 3], [1, 2, 3]);