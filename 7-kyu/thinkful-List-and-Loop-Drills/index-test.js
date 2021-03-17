describe('Testing', function () {
  it('Basic tests', function () {
    Test.assertDeepEquals(inverseSlice([12, 14, 63, 72, 55, 24], 2, 4), [
      12,
      14,
      55,
      24,
    ]);
    Test.assertDeepEquals(inverseSlice([12, 14, 63, 72, 55, 24], 0, 3), [
      72,
      55,
      24,
    ]);
    Test.assertDeepEquals(
      inverseSlice(
        [
          'Intuition',
          'is',
          'a',
          'poor',
          'guide',
          'when',
          'facing',
          'probabilistic',
          'evidence',
        ],
        5,
        13
      ),
      ['Intuition', 'is', 'a', 'poor', 'guide']
    );
  });
});
