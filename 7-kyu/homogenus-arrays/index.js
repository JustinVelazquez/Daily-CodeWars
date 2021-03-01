function filterHomogenous(arrays) {
  // We take in our 2d array.
  // We want to perform a check for every array inside this 2D array to see if all the elements are homogenous
  // If they are, then we push each array that matches our criteria
  // We then return the new array
  return arrays.filter(
    (arr) => arr.length > 0 && arr.every((e) => typeof e === typeof arr[0])
  );
}
