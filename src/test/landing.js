const chai = require('chai');
const expect = chai.expect;
const assert = chai.assert;

var numbers = [1, 2, 3, 4, 5];

assert.isArray(numbers, 'is array of numbers');
assert.include(numbers, 2, 'array contains 2');
