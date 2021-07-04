describe('Tests', () => {
  it('test', () => {
    Test.assertSimilar(addArrays([1, 2], [4, 5]), [5, 7]);
    Test.expectError(
      'Should raise an error when arguments are of varying length',
      function () {
        addArrays([1, 2, 3], [4, 5]);
      }
    );
    Test.assertSimilar(
      addArrays(['a'], ['b']),
      ['ab'],
      'Should work with strings as well'
    );
  });
});
