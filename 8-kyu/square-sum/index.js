function squareSum(numbers) {
  return numbers.reduce((x, y) => x + Math.pow(y, 2), 0);
}
