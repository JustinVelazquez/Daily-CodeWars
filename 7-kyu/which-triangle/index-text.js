describe('typeOfTriangle', function () {
  it('takes a 1, 1, 1, and returns "Equilateral"', function () {
    Test.assertEquals(typeOfTriangle(1, 1, 1), 'Equilateral');
  });

  it('takes a 3, 2, 4, and returns "Scalene"', function () {
    Test.assertEquals(typeOfTriangle(3, 2, 4), 'Scalene');
  });

  it('takes a 2, 2, 1, and returns "Isosceles"', function () {
    Test.assertEquals(typeOfTriangle(2, 2, 1), 'Isosceles');
  });

  it('takes a ".", 5, 82, and returns "Not a valid triangle"', function () {
    Test.assertEquals(typeOfTriangle('.', 5, 82), 'Not a valid triangle');
  });
});
