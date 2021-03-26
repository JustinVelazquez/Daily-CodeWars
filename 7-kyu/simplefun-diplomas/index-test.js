describe('Basic Tests', function () {
  it('It should works for basic tests.', function () {
    Test.assertEquals(diplomas(2, 3, 10), 9);

    Test.assertEquals(diplomas(1, 1, 1), 1);

    Test.assertEquals(diplomas(567, 120, 129), 3120);

    Test.assertEquals(diplomas(17, 21, 0), 0);

    Test.assertEquals(diplomas(1, 239, 7), 239);

    Test.assertEquals(diplomas(239, 239, 7), 717);

    Test.assertEquals(diplomas(3, 4, 12), 12);
  });
});
