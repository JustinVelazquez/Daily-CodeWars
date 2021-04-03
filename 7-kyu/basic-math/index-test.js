describe("Let's go...", function () {
  it('Basic tests', function () {
    Test.assertEquals(calculate('1plus2plus3plus4'), '10');
    Test.assertEquals(calculate('1minus2minus3minus4'), '-8');
    Test.assertEquals(calculate('1plus2plus3minus4'), '2');
  });
});
