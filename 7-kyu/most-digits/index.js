function findLongest(array) {
  return array.reduce((a, c) => (String(a).length < String(c).length ? c : a));
}

// Find the number with the most digits.

// If two numbers in the argument array have the same number of digits, return the first one in the array
