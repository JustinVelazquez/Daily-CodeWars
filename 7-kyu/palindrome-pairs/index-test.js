describe('Solution', function () {
  it('should return the right pairs', function () {
    Test.assertSimilar(palindromePairs(['bat', 'tab', 'cat']), [
      [0, 1],
      [1, 0],
    ]);
    Test.assertSimilar(palindromePairs(['dog', 'cow', 'tap', 'god', 'pat']), [
      [0, 3],
      [2, 4],
      [3, 0],
      [4, 2],
    ]);
    Test.assertSimilar(palindromePairs(['abcd', 'dcba', 'lls', 's', 'sssll']), [
      [0, 1],
      [1, 0],
      [2, 4],
      [3, 2],
    ]);
  });
});
