function sumOfDifferences(arr) {
  arr.sort((a, b) => a - b);
  //   console.log(arr)
  //   console.log(arr.length - 1)
  let b = 0;
  for (let a = arr.length - 1; a > 0; a--) {
    b += arr[a] - arr[a - 1];
  }
  return b;
}
