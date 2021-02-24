var typeOfTriangle = function (a, b, c) {
  if ([a, b, c].some((x) => typeof x != 'number'))
    return 'Not a valid triangle';

  [a, b, c] = [a, b, c].sort((x, y) => x - y);

  if (a + b <= c) return 'Not a valid triangle';

  if (a == b && b == c) return 'Equilateral';

  if (a == b || a == c || b == c) return 'Isosceles';

  return 'Scalene';
};
