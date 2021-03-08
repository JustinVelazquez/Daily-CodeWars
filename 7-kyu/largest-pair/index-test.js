const { assert } = require('chai');

describe('Basic tests', () => {
  it('Testing for fixed tests', () => {
    assert.strictEqual(
      largestPairSum([10, 14, 2, 23, 19]),
      42,
      'Sum should be 42'
    );
    assert.strictEqual(
      largestPairSum([-100, -29, -24, -19, 19]),
      0,
      'Sum should be 0'
    );
    assert.strictEqual(
      largestPairSum([1, 2, 3, 4, 6, -1, 2]),
      10,
      'Sum should be 10'
    );
    assert.strictEqual(
      largestPairSum([-10, -8, -16, -18, -19]),
      -18,
      'Sum should be -18'
    );
  });
});
