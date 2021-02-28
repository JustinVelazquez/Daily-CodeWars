function mergeArrays(a, b) {
  // We take in our 2 arars
  //We want to iterate through both arrays, alteranting adding each element to a new array
  // We then return the new combined array
  let combinedArray = [];
  let counter = 0;

  while (a[counter] || b[counter]) {
    if (a[counter]) {
      combinedArray.push(a[counter]);
    }
    if (b[counter]) {
      combinedArray.push(b[counter]);
    }
    counter++;
  }
  return combinedArray;
}
