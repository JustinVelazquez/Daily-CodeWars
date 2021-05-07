function sumArray(array) {
  return array
    .sort((a, b) => a - b)
    .slice(1, -1)
    .reduce((a, c) => a + c);
}
