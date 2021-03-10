describe('Example Tests', function () {
  Test.assertEquals(enough(10, 5, 5), 0);
  Test.assertEquals(enough(100, 60, 50), 10);
  Test.assertEquals(enough(20, 5, 5), 0);
});
