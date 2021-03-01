describe('Tests', () => {
  it('test', () => {
    Test.assertSimilar(
      filterHomogenous([[1, 5, 4], ['a', 3, 5], ['b'], [], ['1', 2, 3]]),
      [[1, 5, 4], ['b']]
    );
    Test.assertSimilar(
      filterHomogenous([
        [123, 234, 432],
        ['', 'abc'],
        [''],
        ['', 1],
        ['', '1'],
        [],
      ]),
      [[123, 234, 432], ['', 'abc'], [''], ['', '1']]
    );
  });
});
