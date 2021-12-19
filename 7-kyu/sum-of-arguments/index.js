function sum() {
  // return the sum of all arguments given.
  return [...arguments].reduce((a, c) => a + c);
}
