describe('Example tests', () => {
  Test.assertEquals(smallEnough([66, 101], 200), true);
  Test.assertEquals(
    smallEnough([78, 117, 110, 99, 104, 117, 107, 115], 100),
    false
  );
  Test.assertEquals(smallEnough([101, 45, 75, 105, 99, 107], 107), true);
  Test.assertEquals(
    smallEnough([80, 117, 115, 104, 45, 85, 112, 115], 120),
    true
  );
});
