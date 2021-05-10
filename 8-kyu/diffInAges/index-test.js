describe('Tests', () => {
  it('test', () => {
    Test.assertSimilar(differenceInAges([82, 15, 6, 38, 35]), [6, 82, 76]);
    Test.assertSimilar(differenceInAges([57, 99, 14, 32]), [14, 99, 85]);
  });
});
