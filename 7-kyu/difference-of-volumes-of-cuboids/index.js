function findDifference(a, b) {
  let sumOfA = a.reduce((a, c) => a * c);
  let sumOfB = b.reduce((a, c) => a * c);

  if (sumOfA > sumOfB) {
    return sumOfA - sumOfB;
  } else {
    return sumOfB - sumOfA;
  }
}

// Example:
// findDifference([3, 7, 8, 9], [6, 8, 5, 5])
// Output = 312

module.exports = findDifference;
