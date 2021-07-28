function sortArray(array) {
  // We take in our array of ints ---> no floats/booleans/etc
  //We want to return an array of sorted odd numbers but evens in the same index
  // we can figure out which numbers are odd
  // then we map over and replace in place

  const odds = array.filter((x) => x % 2 != 0).sort((a, b) => a - b);
  return array.map((x) => (x % 2 != 0 ? odds.shift() : x));
}

sortArray([9, 8, 7, 6, 5, 4, 3, 2, 1, 0]);
