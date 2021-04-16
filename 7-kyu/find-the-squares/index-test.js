// Since Node 10, we're using Mocha.
const chai = require("chai");
const assert = chai.assert;
// Uncomment the following line to disable truncating failure messages for deep equals, do:
// chai.config.truncateThreshold = 0;
// Since Node 12, we no longer include assertions from our deprecated custom test framework by default.
// Uncomment the following to use the old assertions:
const Test = require("@codewars/test-compat");

describe("Solution", function() {
  it("should work for small numbers", function() {
    Test.assertEquals(findSquares(9), '25-16');
    assert.strictEqual(findSquares(5), '9-4');
  });
});

describe("Solution", function() {
  it("should work for bigger numbers", function() {
    Test.assertEquals(findSquares(81), '1681-1600');
    assert.strictEqual(findSquares(25), '169-144');
  });