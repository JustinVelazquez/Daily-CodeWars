const chai = require('chai');
const assert = chai.assert;
chai.config.truncateThreshold = 0;

describe('invertedRanges', () => {
  it('must return an empty array when the whole range is covered', () => {
    assert.deepEqual(invertedRanges([[0, 100]]), []);
    assert.deepEqual(
      invertedRanges([
        [0, 50],
        [51, 100],
      ]),
      []
    );
  });

  it('must return a range of 0 to 100 when there are no positive ranges', () => {
    assert.deepEqual(invertedRanges([]), [[0, 100]]);
  });

  it('must return the inverse ranges', () => {
    assert.deepEqual(
      invertedRanges([
        [0, 25],
        [51, 75],
      ]),
      [
        [26, 50],
        [76, 100],
      ]
    );
    assert.deepEqual(invertedRanges([[25, 50]]), [
      [0, 24],
      [51, 100],
    ]);
  });
});
