function minValue(values) {
  //your code here
  let uniqueValues = new Set(values);
  return Number([...uniqueValues].sort((a, b) => a - b).join(''));
}

//   Task

// Given a list of digits, return the smallest number that could be formed from these digits, using the digits only once (ignore duplicates).
