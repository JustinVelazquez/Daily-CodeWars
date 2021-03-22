Test.describe('nbDig', function () {
  Test.it('Basic tests', function () {
    Test.assertEquals(nbDig(5750, 0), 4700);
    Test.assertEquals(nbDig(11011, 2), 9481);
    Test.assertEquals(nbDig(12224, 8), 7733);
    Test.assertEquals(nbDig(11549, 1), 11905);
  });
});
